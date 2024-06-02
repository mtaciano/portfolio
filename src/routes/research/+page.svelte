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
    <div class="section slide-right-left">
      <h3 class="section-title">Published Papers</h3>

      {#each published as { title, href, publisher, date, abstract }}
        {@render paper(title, href, publisher, date, abstract)}
      {/each}
    </div>
  </article>
</div>

<style lang="scss">
  .outer {
    padding-top: 10rem;
    overflow-x: hidden;

    @media screen and (max-width: $transition-size) {
      padding-top: 3rem;
    }
  }

  .section {
    padding-bottom: 3rem;

    &-title {
      @include section-title;
      @include text-underline(var(--theme-color-normal));

      color: var(--color-strong);
    }
  }

  .paper {
    &-title {
      @include text-underline(var(--theme-color-weaker));

      color: var(--color-strong);
      font: {
        family: var(--font-mono);
        size: 1.5rem;
        weight: 900;
      }
    }

    &-publisher {
      display: block;
      color: var(--color-normal);
      font: {
        size: 1.25rem;
        weight: 600;
      }
    }

    &-date {
      display: block;
      color: var(--color-weak);
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

  .slide {
    &-right-left {
      @include slide-right-left;
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
