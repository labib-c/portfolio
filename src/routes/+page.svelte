<script lang="ts">
    import { ResumePath } from '$lib/Constants';
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
    <section class="mb-8 flex items-center justify-between">
        <h1 class="text-4xl font-bold">Labib Chowdhury</h1>
        <ThemeToggle />
    </section>
    <section class="mb-8 text-center">
        <p class="text-lg">I am currently a Software Engineer at Goldman Sachs. I hold a Master of Science in Cybersecurity from Queen's University and an Honours Bachelor of Science in Computer Science and Statistics from the University of Toronto. 
            My interests include infrastructure, machine learning, and cybersecurity. For more details, please see my full resume below!</p>
        <button class="btn btn-primary mt-4">
            <a href={ResumePath} download>Resume</a>
        </button>
    </section>
    <Projects />
    <Contact />
</main>