<script lang="ts">
    import { BooksReading } from '$lib/Constants';
</script>

<section>
    <h2 class="text-2xl font-semibold mb-4">Books I'm Reading</h2>
    <ul class="list-disc pl-5">
        {#each BooksReading as book}
            <li>{book}</li>
        {/each}
    </ul>
</section>