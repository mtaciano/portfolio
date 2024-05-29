<script>
  import HamburgerMenu from "$lib/components/HamburgerMenu.svelte";
  import Socials from "$lib/components/Socials.svelte";
  import ChangeAppearance from "$lib/components/ChangeAppearance.svelte";
  import { clickOutside } from "$lib/click_outside.js";
  import { page } from "$app/stores";

  const pages = [
    { title: "About", href: "/" },
    { title: "Projects", href: "/projects" },
    { title: "Research", href: "/research" },
    { title: "Blog", href: "/blog" },
    { title: "Résumé", href: "/resume" },
  ];

  let isOpen = $state(false);
  let innerWidth = $state(0);

  $effect(() => {
    if (innerWidth >= 860) {
      isOpen = false;
    }
  });
</script>

<svelte:window bind:innerWidth />

<div class="outer">
  <div use:clickOutside onclickoutside={() => (isOpen = false)}>
    <HamburgerMenu bind:isOpen />

    {#if isOpen}
      <nav>
        <ul>
          {#each Object.entries(pages) as [_, { title, href }]}
            <li class="nav-item">
              <a
                onclick={() => (isOpen = false)}
                class="nav-item-anchor"
                class:nav-item-current={$page.route.id === href}
                {href}>{title}</a
              >
            </li>
          {/each}
        </ul>
      </nav>
    {/if}
  </div>

  <div>
    <Socials />
  </div>
  <div>
    <ChangeAppearance />
  </div>
</div>

<style lang="scss">
  .outer {
    display: flex;
    flex-flow: row;
    width: 100%;
    border-bottom: var(--border-width) solid var(--border-color);

    > * {
      margin: {
        top: 0.625rem;
        bottom: 0.625rem;
        left: 1.25rem;
        right: auto;
      }
    }

    > *:nth-last-child(1) {
      margin: {
        left: 0.625rem;
        right: 1.25rem;
      }
    }

    > *:nth-last-child(2) {
      margin: {
        left: auto;
        right: 0;
      }
    }

    @media (min-width: $header-transition-size) {
      display: none;
    }
  }

  nav {
    @include border;

    position: absolute;
    left: 0.625rem;
    right: 0.625rem;
    top: calc(4.5rem + 0.625rem); /* header height + space */
    background-color: var(--bg-color);
  }

  .nav-item {
    @include flex-center(column);

    padding: {
      top: 0.625rem;
      bottom: 0.625rem;
    }
    border-bottom: {
      style: solid;
      width: var(--border-width);
    }
    border-image: {
      source: linear-gradient(
        to right,
        transparent 0 25%,
        var(--border-color) 25% 75%,
        transparent 75% 100%
      );
      slice: 1;
    }

    &:last-of-type {
      border-bottom: none;
    }

    &-anchor {
      @include flex-center(column);
      @include transition;

      color: var(--text-color-weaker);
      text-decoration: {
        line: underline;
        style: solid;
        color: transparent;
        thickness: 0.175em;
      }
      font: {
        family: var(--font-mono);
        weight: 800;
        size: 2.125rem;
      }
      padding: {
        /* Add some breathing room for the text */
        top: 0.25rem;
        bottom: calc(0.25rem + 0.175em); /* Center text with underline */
      }

      &:hover {
        color: var(--text-color-weak);
        text-decoration-color: var(--theme-color-faint);
      }
    }

    &-current {
      color: var(--text-color-strong);
      text-decoration-color: var(--theme-color-weak);

      &:hover,
      &:active {
        color: var(--text-color-strong);
        text-decoration-color: var(--theme-color-weak);
      }
    }
  }

  @media (min-width: $header-transition-size) {
    * {
      display: none;
    }
  }
</style>
