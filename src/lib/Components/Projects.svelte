<script lang="ts">
    import { Projects } from '$lib/Constants';
    import ProjectModal from './ProjectModal.svelte';
</script>

<section class="mb-8">
    
    <ul class="flex space-x-4 overflow-x-auto">
        {#each Projects as project}
        <ProjectModal
            image={project.image}
            title={project.name}
            description={project.description}
            url={project.url}
            github={project.github}
            label={project.label}
        />
        {/each}
    </ul>
</section>