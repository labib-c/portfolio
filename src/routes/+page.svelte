<script lang="ts">
    import { ResumePath, ThesisPath } from '$lib/Constants';
    import Contact from '$lib/Components/Contact.svelte';
    import Projects from '$lib/Components/Projects.svelte';
    import CurrentProjects from '$lib/Components/CurrentProject.svelte';
    import BooksReading from '$lib/Components/BooksReading.svelte';
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
        <ThemeToggle />
    </section>
    <Contact />
    <Projects />
    <CurrentProjects />
    <BooksReading />

    <section class="mb-8">
        <h2 class="text-2xl font-semibold mb-4">Downloads</h2>
        <ul class="list-disc pl-5">
            <li><a href={ResumePath} download class="link link-primary">Resume</a></li>
            <li><a href={ThesisPath} download class="link link-primary">Thesis</a></li>
        </ul>
    </section>
</main>