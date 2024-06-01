<script>
  import { published } from "$lib/data/research.json";
</script>

<svelte:head>
  <title>Miguel Taciano :: Research</title>

  <meta
    name="description"
    content="Miguel Taciano's research in different fields"
  />
  <meta
    name="keywords"
    content="Research, Machine Learning, Computer Vision, Puzzle-Solving"
  />
</svelte:head>

{#snippet paper(title, href, publisher, date, abstract)}
  <p class="paper">
    <a class="paper-title" {href} target="_blank">{title}</a>
    <span class="paper-publisher">{publisher}</span>
    <span class="paper-date">{date}</span>
  </p>

  <ul class="paper-abstract">
    <li>{abstract}</li>
  </ul>
{/snippet}

<div class="outer">
  <article>
    <div class="section">
      <h3 class="section-title">Published Papers</h3>

      {#each published as { title, href, publisher, date, abstract }}
        {@render paper(title, href, publisher, date, abstract)}
      {/each}
    </div>
  </article>
</div>

<style lang="scss">
  .outer {
    @include fade-in;

    padding-top: 3rem;
  }

  .section {
    padding-bottom: 3rem;

    &-title {
      @include section-title;
      @include text-underline(var(--theme-color-weaker));

      color: var(--text-color-strong);
    }
  }

  .paper {
    &-title {
      @include text-underline(var(--theme-color-faint));

      color: var(--text-color-normal);
      font: {
        family: var(--font-serif);
        size: 1.625rem;
        weight: 900;
      }
    }

    &-publisher {
      display: block;
      font: {
        size: 1.25rem;
        weight: 500;
      }
    }

    &-date {
      display: block;
      color: var(--text-color-weaker);
      font-size: 1rem;
    }

    &-abstract {
      list-style: {
        type: square;
        position: inside;
      }
      padding: {
        bottom: 1.5rem;
        left: 2rem;
      }
    }
  }

  a {
    @include transition;
    @include link(inherit);

    color: inherit;
    font: {
      family: inherit;
      weight: inherit;
    }
  }

  article {
    @include article;
  }
</style>
