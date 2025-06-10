<script>
  import { enhance } from '$app/forms';
  import ThemeToggle from '$lib/Components/ThemeToggle.svelte';
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  import { PUBLIC_AUTH0_DOMAIN, PUBLIC_AUTH0_CLIENT_ID } from '$env/static/public';
  import { goto } from '$app/navigation';

  let auth0Client;
  let isAuthenticated = false;
  let user = null;
  let adminEmail = 'labibc01@gmail.com'; 
  let githubPat = null;
  let owner = 'labib-c'; // e.g., 'your-username'
  let repo = 'portfolio';       // e.g., 'your-portfolio-repo'

  // Content variables and their SHA for updates
  let projectsJsonText = '';
  let projectsSha = '';

  let siteJsonText = '';
  let siteSha = '';

  export let data;
  export let form;
  
  let showAddForm = false;
  let editingProject = null;
  let showResumeForm = false;
  
  function editProject(project) {
    editingProject = { ...project };
    showAddForm = false;
    showResumeForm = false;
  }
  
  function cancelEdit() {
    editingProject = null;
  }
  
  function showAdd() {
    showAddForm = true;
    editingProject = null;
    showResumeForm = false;
  }

  function showResume() {
    showResumeForm = true;
    showAddForm = false;
    editingProject = null;
  }

    // Reactive statement to enable/disable button based on auth0Client initialization
    $: isAuth0ClientLoaded = !!auth0Client;

    onMount(async () => {
        if (browser) {
            try {
                const { createAuth0Client } = await import('@auth0/auth0-spa-js');

                auth0Client = await createAuth0Client({
                    domain: PUBLIC_AUTH0_DOMAIN,
                    clientId: PUBLIC_AUTH0_CLIENT_ID,
                    authorizationParams: {
                        redirect_uri: window.location.origin + '/admin'
                    }
                });

                if (window.location.search.includes('code=') || window.location.search.includes('state=')) {
                    console.log('Handling Auth0 redirect callback...');
                    await auth0Client.handleRedirectCallback();
                    window.history.replaceState({}, document.title, window.location.pathname);
                }

                isAuthenticated = await auth0Client.isAuthenticated();
                if (isAuthenticated) {
                    user = await auth0Client.getUser();
                    if (user && user.email === adminEmail) {
                        const idTokenClaims = await auth0Client.getIdTokenClaims();
                        githubPat = idTokenClaims['https://labibc.com/github_pat']; // **Match namespace**
                        
                        if (githubPat) {
                            // Load existing content once authenticated and PAT is available
                            await fetchJsonContent('projects');
                            await fetchJsonContent('site');
                        } else {
                            console.error('GitHub PAT not found in ID Token. Check Auth0 Action.');
                            alert('Authentication error: GitHub PAT missing. Please re-login.');
                            await logout(); // Log out if PAT is missing
                        }
                    } else {
                        alert('Access Denied: You are not the authorized administrator.');
                        await logout();
                    }
                }
                console.log('Auth0 Client Initialized. isAuthenticated:', isAuthenticated);

            } catch (error) {
                console.error('Error initializing Auth0 client or fetching content:', error);
                alert('An error occurred during setup. Please check console for details.');
            }
        }
    });

    async function login() {
        if (browser && auth0Client) {
            try {
                await auth0Client.loginWithRedirect();
            } catch (error) {
                console.error('Error during login redirect:', error);
                alert('Login failed. Please try again.');
            }
        } else {
            console.warn('Auth0 client not ready for login.');
        }
    }

    async function logout() {
        if (browser && auth0Client) {
            try {
                await auth0Client.logout({
                    logoutParams: {
                        returnTo: window.location.origin
                    }
                });
            } catch (error) {
                console.error('Error during logout:', error);
                alert('Logout failed.');
            }
        }
    }
</script>
<svelte:head>
  <title>Portfolio Admin</title>
</svelte:head>

{#if !isAuthenticated || (user && user.email !== adminEmail)}
    <h2>Please log in to access the admin panel.</h2>
    <button on:click={login}>Login with Auth0</button>
    {#if isAuthenticated && !githubPat && user && user.email === adminEmail}
        <p style="color: red;">Error: Could not retrieve GitHub PAT. Check Auth0 Action configuration.</p>
    {/if}
{:else}

<div class="container mx-auto p-6 max-w-4xl">
    <div class="flex justify-between items-center mb-6">
        <h1 class="text-3xl font-bold mb-8">Portfolio Admin</h1>
        <ThemeToggle class="mb-6" />
        <a href="/" class="btn btn-outline btn-sm">Back to Portfolio</a>
    </div>
  
  {#if form?.success}
    <div class="alert alert-success mb-4">
      Operation completed successfully!
    </div>
  {/if}
  
  {#if form?.error}
    <div class="alert alert-error mb-4">
      Error: {form.error}
    </div>
  {/if}

  <div class="mb-6">
    <button 
      on:click={showAdd}
      class="btn btn-primary"
    >
      Add New Project
    </button>
    <button on:click={showResume} class="btn btn-secondary">
      Update Resume
    </button>
  </div>

    <!-- Update Resume Form -->
  {#if showResumeForm}
    <div class="bg-base-200 p-6 rounded-lg mb-8">
      <h2 class="text-xl font-semibold mb-4">Update Resume</h2>
      <div class="mb-4">
        <span class="block text-sm font-medium mb-2">Current Resume:</span>
        {#if data.resume}
          <iframe src={data.resume} class="w-full h-96 border rounded" />
        {:else}
          <p class="italic text-base-content/60">No resume uploaded yet.</p>
        {/if}
      </div>
      <form method="POST" action="?/updateResume" enctype="multipart/form-data" use:enhance>
        <div class="mb-4">
          <label class="block text-sm font-medium mb-1">Upload New Resume (PDF)</label>
          <input
            type="file"
            name="resumeFile"
            accept="application/pdf"
            class="w-full file-input file-input-bordered"
          />
          <p class="text-sm mt-1">This will replace the current resume.</p>
        </div>
        <div class="mb-4">
          <label class="block text-sm font-medium mb-1">Or Resume Path</label>
          <input
            type="text"
            name="resumePath"
            placeholder="/assets/resume.pdf"
            class="w-full input input-bordered"
          />
          <p class="text-sm mt-1">Alternative: enter path manually (e.g. after uploading via FTP).</p>
        </div>
        <div class="flex gap-2">
          <button type="submit" class="btn btn-success">
            Update Resume
          </button>
          <button type="button" on:click={() => showResumeForm = false} class="btn">
            Cancel
          </button>
        </div>
      </form>
    </div>
  {/if}
  
  <!-- Add Project Form -->
  {#if showAddForm}
    <div class="bg-base-200 p-6 rounded-lg mb-8">
      <h2 class="text-xl font-semibold mb-4">Add New Project</h2>
      <form method="POST" action="?/addProject" enctype="multipart/form-data" use:enhance>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium mb-1">Name</label>
            <input 
              type="text" 
              name="name" 
              required 
              class="w-full input input-bordered"
            />
          </div>
          
          <div>
            <label class="block text-sm font-medium mb-1">URL</label>
            <input 
              type="url" 
              name="url" 
              class="w-full input input-bordered"
            />
          </div>
          
          <div>
            <label class="block text-sm font-medium mb-1">GitHub URL</label>
            <input 
              type="url" 
              name="github" 
              class="w-full input input-bordered"
            />
          </div>
          
          <div>
            <label class="block text-sm font-medium mb-1">Label</label>
            <select 
              name="label" 
              class="w-full input input-bordered"
            >
              <option value="">Select label</option>
              <option value="personal">Personal</option>
              <option value="open source">Open Source</option>
            </select>
          </div>
          
          <div>
            <label class="block text-sm font-medium mb-1">Tags (comma-separated)</label>
            <input 
              type="text" 
              name="tags" 
              placeholder="TypeScript, PostgreSQL, OpenAI"
              class="w-full input input-bordered"
            />
          </div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <label class="block text-sm font-medium mb-1">Upload Image</label>
            <input 
              type="file" 
              name="imageFile" 
              accept="image/png"
              class="w-full file-input file-input-bordered"
            />
            <p class="text-sm mt-1">Upload a PNG image for this project</p>
          </div>
          
          <div>
            <label class="block text-sm font-medium mb-1">Or Image Path</label>
            <input 
              type="text" 
              name="imagePath" 
              placeholder="/assets/project.png"
              class="w-full input input-bordered"
            />
            <p class="text-sm mt-1">Alternative: enter image path manually</p>
          </div>
        </div>
        
        <div class="mt-4">
          <label class="block text-sm font-medium mb-1">Description</label>
          <textarea 
            name="description" 
            rows="3" 
            class="w-full textarea textarea-bordered"
          ></textarea>
        </div>
        
        <div class="mt-4 flex gap-2">
          <button 
            type="submit" 
            class="btn btn-success"
          >
            Add Project
          </button>
          <button 
            type="button" 
            on:click={() => showAddForm = false}
            class="btn"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  {/if}

  <!-- Edit Project Form -->
  {#if editingProject}
    <div class="bg-base-200 p-6 rounded-lg mb-8">
      <h2 class="text-xl font-semibold mb-4">Edit Project</h2>
      <form method="POST" action="?/updateProject" enctype="multipart/form-data" use:enhance>
        <input type="hidden" name="originalName" value={editingProject.name} />
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium mb-1">Name</label>
            <input 
              type="text" 
              name="name" 
              bind:value={editingProject.name}
              required 
              class="w-full input input-bordered"
            />
          </div>
          
          <div>
            <label class="block text-sm font-medium mb-1">URL</label>
            <input 
              type="url" 
              name="url" 
              bind:value={editingProject.url}
              class="w-full input input-bordered"
            />
          </div>
          
          <div>
            <label class="block text-sm font-medium mb-1">GitHub URL</label>
            <input 
              type="url" 
              name="github" 
              bind:value={editingProject.github}
              class="w-full input input-bordered"
            />
          </div>
          
          <div>
            <label class="block text-sm font-medium mb-1">Label</label>
            <select 
              name="label" 
              bind:value={editingProject.label}
              class="w-full input input-bordered"
            >
              <option value="">Select label</option>
              <option value="personal">Personal</option>
              <option value="open source">Open Source</option>
            </select>
          </div>
          
          <div>
            <label class="block text-sm font-medium mb-1">Tags (comma-separated)</label>
            <input 
              type="text" 
              name="tags" 
              value={editingProject.tags?.join(', ') || ''}
              class="w-full input input-bordered"
            />
          </div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <label class="block text-sm font-medium mb-1">Upload New Image</label>
            <input 
              type="file" 
              name="imageFile" 
              accept="image/png"
              class="w-full file-input file-input-bordered"
            />
            <p class="text-sm mt-1">Leave empty to keep current image</p>
          </div>
          
          <div>
            <label class="block text-sm font-medium mb-1">Or Image Path</label>
            <input 
              type="text" 
              name="imagePath" 
              bind:value={editingProject.image}
              class="w-full input input-bordered"
            />
            <p class="text-sm mt-1">Current: {editingProject.image || 'No image'}</p>
          </div>
        </div>
        
        <div class="mt-4">
          <label class="block text-sm font-medium mb-1">Description</label>
          <textarea 
            name="description" 
            rows="3" 
            bind:value={editingProject.description}
            class="w-full textarea textarea-bordered"
          ></textarea>
        </div>
        
        <div class="mt-4 flex gap-2">
          <button 
            type="submit" 
            class="btn btn-primary"
          >
            Update Project
          </button>
          <button 
            type="button" 
            on:click={cancelEdit}
            class="btn"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  {/if}

  <!-- Projects List -->
  <div class="space-y-4">
    <h2 class="text-xl font-semibold">Current Projects</h2>
    
    {#each data.projects as project}
      <div class="border rounded-lg p-4 bg-base-100">
        <div class="flex justify-between items-start">
          <div class="flex-1">
            <h3 class="font-semibold text-lg">
              {project.name}
              {#if project.label}
                <span class="badge badge-info text-xs px-2 py-1 ml-2">{project.label}</span>
              {/if}
            </h3>
            <p class="mt-1">{project.description}</p>
            
            {#if project.tags?.length}
              <div class="flex flex-wrap gap-2 mt-2">
                {#each project.tags as tag}
                  <span class="badge badge-ghost text-sm px-2 py-1">{tag}</span>
                {/each}
              </div>
            {/if}
            
            <div class="flex gap-4 mt-2 text-sm">
              {#if project.url}
                <a href={project.url} target="_blank" class="link link-primary">Live Site</a>
              {/if}
              {#if project.github}
                <a href={project.github} target="_blank" class="link link-success">GitHub</a>
              {/if}
              {#if project.image}
                <span class="text-sm">Image: {project.image}</span>
              {/if}
            </div>
          </div>
          
          <div class="flex gap-2 ml-4">
            <button 
              on:click={() => editProject(project)}
              class="btn btn-warning btn-sm"
            >
              Edit
            </button>
            
            <form method="POST" action="?/deleteProject" use:enhance>
              <input type="hidden" name="name" value={project.name} />
              <button 
                type="submit" 
                class="btn btn-error btn-sm"
                on:click={(e) => {
                  if (!confirm('Are you sure you want to delete this project?')) {
                    e.preventDefault();
                  }
                }}
              >
                Delete
              </button>
            </form>
          </div>
        </div>
      </div>
    {/each}
    
    {#if data.projects.length === 0}
      <p class="italic">No projects yet. Add your first project above!</p>
    {/if}
  </div>
</div>
{/if}
<style>
  .container {
    font-family: system-ui, -apple-system, sans-serif;
  }
</style>