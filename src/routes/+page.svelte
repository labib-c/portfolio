<script lang="ts">
    import TwemojiConstruction from 'virtual:icons/twemoji/construction';
</script>
    
<main>
    <div class="centered-content">
        <TwemojiConstruction />
        <h1>Under Construction</h1>
        <TwemojiConstruction />
    </div>
</main>

<style>
    main {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh; /* Makes the main element take up the full viewport height */
        text-align: center;
    }

    .centered-content {
        display: flex;
        flex-direction: row; /* Places items in a row */
        align-items: center; /* Vertically aligns items */
        gap: 1rem; /* Adds spacing between the emojis and the text */
    }
</style>