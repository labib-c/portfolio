<script lang="ts">
    import RiExternalLinkFill from '~icons/ri/external-link-fill';
    import RiGithubFill from '~icons/ri/github-fill';
    let props = $props();
</script>

<div class="card bg-base-100 w-96 shadow-sm transform transition duration-300 hover:scale-105">
    <figure class="image-container">
        <img src={props.image} alt={props.title} />
    </figure>
    <div class="card-body">
        <h2 class="card-title">
            {props.title}
            {#if props.label === 'open source'}
                <div class="badge badge-dash badge-success">Open Source</div>
            {:else if props.label === 'personal'}
                <div class="badge badge-dash badge-info">Personal</div>
            {/if}
        </h2>

        <p>{props.description}</p>
        <div class="card-actions justify-end">

            {#if props.url}
                <div class="badge badge-outline link-accent">
                    <a href={props.url} target="_blank" rel="noopener noreferrer">
                        <RiExternalLinkFill />
                    </a>
                </div>
            {/if}
            {#if props.github}
                <div class="badge badge-outline link-accent">
                    <a href={props.github} target="_blank" rel="noopener noreferrer">
                        <RiGithubFill />
                    </a>
                </div>
            {/if}
        </div>
    </div>
</div>

<style>
        .image-container {
        width: 100%; /* Ensures the container matches the card width */
        height: 200px; /* Fixed height for all images */
        overflow: hidden; /* Prevents overflow if the image is larger */
    }

    img {
        width: 100%; /* Makes the image fill the container width */
        height: 100%; /* Makes the image fill the container height */
        object-fit: cover; /* Ensures the image is cropped to fit the container */
    }
</style>