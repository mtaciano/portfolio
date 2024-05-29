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
</script>

<button onclick={() => (isDarkMode = !isDarkMode)} type="button" class="menu">
  <div class="menu-inner">
    {#if !isDarkMode}
      <Sun strokeWidth={2} size="1.875rem" color="var(--button-color)" />
    {:else}
      <Moon strokeWidth={2} size="1.875rem" color="var(--button-color)" />
    {/if}
  </div>
</button>

<style lang="scss">
  .menu {
    @include flex-center(column);
    @include border;

    cursor: pointer;
    height: var(--button-size);
    width: var(--button-size);
    background-color: transparent;

    &-inner {
      @include flex-center(column);
      @include transition;

      height: var(--button-inner-size);
      width: var(--button-inner-size);
      border-radius: var(--border-inner-radius);

      &:hover {
        background-color: var(--button-selected-background);
      }

      &:active {
        background-color: var(--button-active-background);
      }
    }
  }
</style>
