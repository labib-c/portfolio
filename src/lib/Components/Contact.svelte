<script lang="ts">
    import { LinkedInUrl, GithubUrl, Email } from '$lib/Constants';
</script>

<section class="mb-8">
    <h2 class="text-2xl font-semibold mb-4">Contact</h2>
    <ul class="list-disc pl-5">
        <li><a href={LinkedInUrl} class="link link-primary">LinkedIn</a></li>
        <li><a href={GithubUrl} class="link link-primary">GitHub</a></li>
        <li><a href={`mailto:${Email}`} class="link link-primary">Email</a></li>
    </ul>
</section>