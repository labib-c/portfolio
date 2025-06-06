<script lang="ts">
    import { CurrentProjects } from '$lib/Constants';
</script>

<section class="mb-8">
    <h2 class="text-2xl font-semibold mb-4">Currently Working On</h2>
    <ul class="list-disc pl-5">
        {#each CurrentProjects as project}
            <li>{project}</li>
        {/each}
    </ul>
</section>