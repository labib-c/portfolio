<script lang="ts">
    import projects from '$lib/data/projects.json'
    import ProjectModal from './ProjectModal.svelte';
</script>

<section class="mb-8">
    
    <ul class="flex space-x-4 overflow-x-auto">
        {#each projects as project}
        <ProjectModal
            image={project.image}
            title={project.name}
            description={project.description}
            url={project.url}
            github={project.github}
            label={project.label}
            tags={project.tags}
        />
        {/each}
    </ul>
</section>