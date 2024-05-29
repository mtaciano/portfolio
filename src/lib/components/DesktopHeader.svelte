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
    display: none;
    @media (min-width: $header-transition-size) {
      display: flex;
    }
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
  }

  .nav-item {
    &-anchor {
      @include flex-center;
      @include transition;

      color: var(--text-color-weaker);
      height: var(--button-size);
      font: {
        family: var(--font-mono);
        weight: 800;
        size: 1.5rem;
      }
      text-decoration: {
        line: underline;
        style: solid;
        color: transparent;
        thickness: 0.175em;
      }
      padding-right: 1.25rem;

      &:hover {
        color: var(--text-color-weak);
        text-decoration-color: var(--theme-color-faint);
      }

      &:active {
        color: var(--text-color-strong);
        text-decoration-color: var(--theme-color-weak);
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

  ul {
    @include flex-center(row);
  }

  * {
    display: none;
  }
  @media (min-width: $header-transition-size) {
    * {
      display: block;
    }
  }
</style>
