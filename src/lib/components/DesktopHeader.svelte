<script>
  import Socials from "$lib/components/Socials.svelte";
  import ChangeAppearance from "$lib/components/ChangeAppearance.svelte";
  import { page } from "$app/stores";

  const pages = [
    { title: "About", href: "/" },
    { title: "Projects", href: "/projects" },
    { title: "Research", href: "/research" },
    { title: "Blog", href: "/blog" },
    { title: "Résumé", href: "/resume" },
  ];
</script>

<div class="outer">
  <nav>
    <ul>
      {#each Object.entries(pages) as [_, { title, href }]}
        <li class="nav-item">
          <a
            class="nav-item-anchor"
            class:nav-item-current={$page.route.id === href}
            {href}>{title}</a
          >
        </li>
      {/each}
    </ul>
  </nav>

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

    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    display: none;
    @media (min-width: $transition-size) {
      display: flex;
    }
    gap: 1rem;
    flex-flow: row;
    z-index: 100;
    margin: {
      top: 1rem;
      bottom: 1rem;
    }
  }

  .nav-item {
    &-anchor {
      @include flex-center;
      @include transition;
      @include text-underline(transparent);

      color: var(--color-inactive);
      height: var(--button-size);
      font: {
        family: var(--font-mono);
        weight: 800;
        size: 1.5rem;
      }
      padding-inline: 1rem;

      &:hover {
        color: var(--color-weak);
        text-decoration-color: var(--theme-color-weaker);
        padding-bottom: 0.2em;
      }

      &:active {
        color: var(--color-strong);
        text-decoration-color: var(--theme-color-weak);
      }
    }

    &-current {
      color: var(--text-color-strong);
      text-decoration-color: var(--theme-color-weak);
      padding-bottom: 0.2em;

      &:hover,
      &:active {
        color: var(--text-color-strong);
        text-decoration-color: var(--theme-color-weak);
      }
    }
  }

  ul {
    @include flex-center(row);
    @include transition;
    @include border;

    background-color: var(--background-color);
    height: var(--button-size);
    padding-inline: 1rem;
  }

  * {
    display: none;
  }
  @media (min-width: $transition-size) {
    * {
      display: block;
    }
  }
</style>
