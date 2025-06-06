<script lang="ts">
    import { onMount } from 'svelte';
    import RiSunLine from '~icons/ri/sun-line';
    import RiMoonClearLine from '~icons/ri/moon-clear-line';

    let theme = 'retro';

    // Set the initial theme based on localStorage or default to retro
    onMount(() => {
        document.documentElement.setAttribute('data-theme', theme);
    });

    // Toggle between retro and coffee themes
    function toggleTheme() {
        theme = theme === 'retro' ? 'coffee' : 'retro';
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }
</script>

<div>
    <label class="swap swap-rotate">
        <input class="theme-controller" on:click={toggleTheme} type="checkbox" />
        <div class="swap-on icon"><RiMoonClearLine/></div>
        <div class="swap-off icon"><RiSunLine/></div>
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