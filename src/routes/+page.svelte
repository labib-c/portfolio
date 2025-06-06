<script lang="ts">
    import { ResumePath} from '$lib/Constants';
    import Contact from '$lib/Components/Contact.svelte';
    import Projects from '$lib/Components/Projects.svelte';
    import ThemeToggle from '$lib/Components/ThemeToggle.svelte';
    import { onMount } from "svelte";

    let theme = "light"; // Default theme
    onMount(() => {
        theme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', theme);
    });
</script>

<main class="p-8">
    <section class="mb-8">
        <h1 class="text-4xl font-bold mb-4">Labib Chowdhury</h1>
        <p class="text-lg">Welcome to my personal portfolio!</p>
        <button class="btn btn-primary mt-4">
            <a href={ResumePath} download>Resume</a>
        </button>
        <ThemeToggle />
    </section>
    <Projects />
    <Contact />
</main>