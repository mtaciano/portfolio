<script>
  let { isOpen = $bindable(false) } = $props();
</script>

<button
  type="button"
  class="menu"
  onclick={() => (isOpen = !isOpen)}
  aria-label="Navigation menu"
>
  <div class="menu-inner">
    <span class="menu-bar" class:menu-open={isOpen}></span>
    <span class="menu-bar" class:menu-open={isOpen}></span>
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

      gap: 0.625rem;
      height: var(--button-inner-size);
      width: var(--button-inner-size);
      border-radius: var(--border-inner-radius);

      &:has(> .menu-open) {
        gap: 0;
      }

      &:hover {
        background-color: var(--button-selected-background);
      }

      &:active {
        background-color: var(--button-active-background);
      }
    }

    &-bar {
      @include transition;

      $height: 0.25rem;

      background-color: var(--button-color);
      border-radius: $height;
      height: $height;
      width: 1.25rem;
    }

    &-open {
      @include transition;

      $half-height: 0.125rem;

      &:nth-of-type(1) {
        /* First translateY by half the bar height to overlap both */
        transform: translateY($half-height) rotate(45deg);
        width: 1.5rem;
      }

      &:nth-of-type(2) {
        /* First translateY by half the bar heigth to overlap both */
        transform: translateY(-$half-height) rotate(-45deg);
        width: 1.5rem;
      }
    }
  }
</style>
