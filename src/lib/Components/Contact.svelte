<script lang="ts">
    import { LinkedInUrl, GithubUrl, Email } from '$lib/Constants';
    import RiGithubFill from '~icons/ri/github-fill';
    import RiLinkedinBoxFill from '~icons/ri/linkedin-box-fill';
    import RiMailFill from '~icons/ri/mail-fill';
</script>

<section class="mb-8">
    <ul class="flex space-x-4">
        <li>
            <a href={LinkedInUrl} class="icon link-accent" target="_blank" rel="noopener noreferrer">
                <RiLinkedinBoxFill />
            </a>
        </li>
        <li>
            <a href={GithubUrl} class="icon link-accent" target="_blank" rel="noopener noreferrer">
                <RiGithubFill />
            </a>
        </li>
        <li>
            <a href={`mailto:${Email}`} class="icon link-accent">
                <RiMailFill />
            </a>
        </li>
    </ul>
</section>

<style>
    .icon {
        width: 24px; /* Adjust icon size */
        height: 24px; /* Adjust icon size */
        transition: color 0.3s ease;
    }
</style>