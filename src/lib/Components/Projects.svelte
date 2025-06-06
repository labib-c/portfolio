<script lang="ts">
    import { Projects } from '$lib/Constants';
</script>

<section class="mb-8">
    <h2 class="text-2xl font-semibold mb-4">Projects</h2>
    <ul class="list-disc pl-5">
        {#each Projects as project}
            <li><a href={project.url} class="link link-primary">{project.name}</a></li>
        {/each}
    </ul>
</section>