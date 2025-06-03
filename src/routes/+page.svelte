<script lang="ts">
    import "../app.css";
    import TwemojiConstruction from 'virtual:icons/twemoji/construction';
    import { onMount } from "svelte";
    import { ResumePath, ThesisPath } from "$lib/Constants";

    let theme = "light"; // Default theme
    onMount(() => {
        theme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', theme);
    });

    function toggleTheme() {
        theme = theme === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', theme);
        document.documentElement.setAttribute('data-theme', theme);
    }
</script>
    
<main>
    <div class="centered-content">
        <TwemojiConstruction />
        <h1>Under Construction</h1>
        <TwemojiConstruction />
        <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl" on:click={toggleTheme}>
            Toggle Theme
        </button> 
        <a href="{ResumePath}" download class="btn btn-primary">
            Download Resume
        </a>
        <a href="{ThesisPath}" download class="btn btn-primary">
            Download Thesis
        </a>
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