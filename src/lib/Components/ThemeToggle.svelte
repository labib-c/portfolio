<script lang="ts">
    import { onMount } from 'svelte';
    import RiSunLine from '~icons/ri/sun-line';
    import RiMoonClearLine from '~icons/ri/moon-clear-line';

    let theme = 'light';

    // Set the initial theme based on localStorage or default to light
    onMount(() => {
        theme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', theme);
    });

    // Toggle between light and dark themes
    function toggleTheme() {
        theme = theme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }
</script>

<div>
    <label class="swap swap-rotate">
        <input class="theme-controller" on:click={toggleTheme} type="checkbox" />
        <div class="swap-on icon moon"><RiMoonClearLine/></div>
        <div class="swap-off icon sun"><RiSunLine/></div>
    </label>
</div>

<style>
    .icon {
        width: 16px; /* Adjusted icon size */
        height: 16px; /* Adjusted icon size */
        position: absolute;
        top: 50%;
    }

    .sun {
        color: #f4d04e;
    }

    .moon {
        color:#5d40e0;
    }
</style>