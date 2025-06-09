<script lang="ts">
    import { ResumePath, HeadShot } from '$lib/Constants';
    import Contact from '$lib/Components/Contact.svelte';
    import Projects from '$lib/Components/Projects.svelte';
    import ThemeToggle from '$lib/Components/ThemeToggle.svelte';
    import { onMount } from "svelte";

    let theme = "caramellatte"; // Default theme
    onMount(() => {
        document.documentElement.setAttribute('data-theme', theme);
    });
</script>

<div class="bg-gradient-to-b from-primary via-secondary to-accent min-h-screen ">
    <header class="sticky top-0 bg-opacity-80 backdrop-blur-md p-4 pr-8 flex items-center justify-between">
        <div class="mx-auto">
            <h1 class="text-4xl font-bold">Labib Chowdhury</h1>
        </div>
        <ThemeToggle />
    </header>
    <div class="divider divider-accent"></div>
    <main class="p-8">
        <section class="mb-8 text-center bg-base-100 shadow-lg rounded-lg p-6">
            <div class="flex justify-center mb-4">
                <img src={HeadShot} alt="Labib Chowdhury" class="w-36 h-36 rounded-full border-4 border-accent shadow-md object-cover transform transition duration-300 hover:scale-105" />
            </div>
            <p class="text-lg">
                I am currently a Software Engineer at Goldman Sachs. I hold a Master of Science in Cybersecurity from Queen's University and an Honours Bachelor of Science in Computer Science and Statistics from the University of Toronto. 
                My interests include infrastructure, machine learning, and cybersecurity. For more details, please see my full resume below!
            </p>
            <button class="btn btn-accent mt-4">
                <a href={ResumePath} download>Download Resume</a>
            </button>
        </section>

        <section class="mb-8">
            <Projects />
        </section>

        <section class="text-center flex justify-center">
            <Contact />
        </section>
    </main>
</div>

<style>
    header {
        z-index: 10;
    }

    .bg-gradient-to-b {
        background: linear-gradient(to bottom, var(--tw-gradient-stops));
    }
</style>