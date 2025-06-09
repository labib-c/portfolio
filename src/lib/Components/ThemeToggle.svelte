<script lang="ts">
    import { onMount } from 'svelte';
    import RiSunLine from '~icons/ri/sun-line';
    import RiMoonClearLine from '~icons/ri/moon-clear-line';

    let theme = 'caramellatte';
    let props = $props();
    // Set the initial theme based on localStorage or default to caramellatte
    onMount(() => {
        document.documentElement.setAttribute('data-theme', theme);
    });

    // Toggle between caramellatte and dracula themes
    function toggleTheme() {
        theme = theme === 'caramellatte' ? 'dracula' : 'caramellatte';
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }
</script>

<div class={props.class}>
    <label class="swap swap-rotate">
        <input class="theme-controller" onclick={toggleTheme} type="checkbox" />
        <div class="swap-on "><RiMoonClearLine/></div>
        <div class="swap-off"><RiSunLine/></div>
    </label>
</div>

<style>
    .icon {
        width: 16px; /* Adjusted icon size */
        height: 16px; /* Adjusted icon size */
        position: absolute;
        top: 50%;
    }
</style>