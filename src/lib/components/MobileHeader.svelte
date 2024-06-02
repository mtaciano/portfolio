<script>
  import HamburgerMenu from "$lib/components/HamburgerMenu.svelte";
  import Socials from "$lib/components/Socials.svelte";
  import ChangeAppearance from "$lib/components/ChangeAppearance.svelte";
  import { clickOutside } from "$lib/click_outside.js";
  import { page } from "$app/stores";
  import { fade } from "svelte/transition";
  import { cubicOut } from "svelte/easing";

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
      <nav out:fade={{ duration: 250, easing: cubicOut }}>
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
    @include fade-in;

    display: flex;
    flex-flow: row;
    width: 100%;
    border-bottom: var(--border-width) solid var(--border-color);

    > * {
      margin: {
        top: 1rem;
        bottom: 1rem;
        left: 1rem;
        right: auto;
      }
    }

    > *:nth-last-child(1) {
      margin: {
        left: 1rem;
        right: 1rem;
      }
    }

    > *:nth-last-child(2) {
      margin: {
        left: auto;
        right: 0;
      }
    }

    @media (min-width: $transition-size) {
      display: none;
    }
  }

  nav {
    @include border;
    @include slide-bottom-top($duration: 0.5s);

    position: absolute;
    z-index: 999;
    left: 1rem;
    right: 1rem;
    top: (4.8rem + 1rem); /* header height (approx) + 1rem */
    background-color: var(--background-color);
  }

  .nav-item {
    @include flex-center(column);

    padding: {
      top: 0.5rem;
      bottom: 0.5rem;
    }
    border-bottom: {
      style: solid;
      width: var(--border-width);
    }
    border-image: {
      source: linear-gradient(
        to right,
        transparent 0 20%,
        var(--border-color) 20% 80%,
        transparent 80% 100%
      );
      slice: 1;
    }

    &:last-of-type {
      border-bottom: none;
    }

    &-anchor {
      @include flex-center(column);
      @include text-underline(transparent);
      @include transition;

      color: var(--color-inactive);
      font: {
        family: var(--font-mono);
        weight: 800;
        size: 2.125rem;
      }
      padding: {
        /* Add some breathing room for the text */
        top: 0.25rem;
        bottom: 0.25rem;
      }

      &:hover {
        color: var(--color-weak);
        text-decoration-color: var(--theme-color-weaker);
      }
    }

    &-current {
      color: var(--color-strong);
      text-decoration-color: var(--theme-color-weak);
      padding-bottom: calc(0.25rem + 0.175em); /* Center text with underline */

      &:hover,
      &:active {
        color: var(--color-strong);
        text-decoration-color: var(--theme-color-weak);
      }
    }
  }

  @media (min-width: $transition-size) {
    * {
      display: none;
    }
  }
</style>
