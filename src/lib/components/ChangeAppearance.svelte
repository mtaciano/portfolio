<script>
  import { Sun, Moon } from "lucide-svelte";
  import { browser } from "$app/environment";

  // TODO: Save the mode after every session
  let isDarkMode = $state(false);

  $effect(() => {
    if (browser) {
      document.documentElement.classList.toggle("dark", isDarkMode);
    }
  });

  const strokeWidth = 2.25;
  const size = "1.5rem";
</script>

<button
  onclick={() => (isDarkMode = !isDarkMode)}
  type="button"
  class="menu"
  aria-label="Change appearance"
>
  <div class="menu-inner">
    {#if !isDarkMode}
      <Sun {strokeWidth} {size} />
    {:else}
      <Moon {strokeWidth} {size} />
    {/if}
  </div>
</button>

<style lang="scss">
  .menu {
    @include flex-center(column);
    @include transition;
    @include border;

    cursor: pointer;
    height: var(--button-size);
    width: var(--button-size);
    background-color: var(--background-color);

    &-inner {
      @include flex-center(column);
      @include transition;

      color: var(--button-color);
      height: var(--button-inner-size);
      width: var(--button-inner-size);
      border-radius: var(--border-inner-radius);

      &:hover {
        color: var(--button-hover-color);
        background-color: var(--button-selected-background);
      }

      &:active {
        background-color: var(--button-active-background);
      }
    }
  }
</style>
