<script>
  import { ongoing, finished } from "$lib/data/projects.json";

  const sections = [
    { title: "Ongoing", projects: ongoing, slide: "slide-right-left" },
    { title: "Finished", projects: finished, slide: "slide-left-right" },
  ];
</script>

<svelte:head>
  <title>Miguel Taciano :: Projects</title>

  <meta name="description" content="Miguel Taciano's developed projects" />
  <meta
    name="keywords"
    content="Research, Machine Learning, Computer Vision, Puzzle-Solving"
  />
</svelte:head>

{#snippet project(title, href, description, languages)}
  <p class="project">
    <a class="project-title" {href} target="_blank">{title}</a>
    <span class="project-description">{description}</span>
    <span class="project-languages"
      ><span class="bold">Languages:&nbsp</span>{languages}.</span
    >
  </p>
{/snippet}

<div class="outer">
  <article>
    {#each sections as { title, projects, slide }}
      <div class="section {slide}">
        <h3 class="section-title">{title}</h3>

        {#each projects as { title, href, description, languages }}
          {@render project(title, href, description, languages)}
        {/each}
      </div>
    {/each}
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

  .bold {
    font-weight: 500;
  }

  .project {
    padding-bottom: 1.5rem;

    &-title {
      @include text-underline(var(--theme-color-weaker));

      color: var(--color-strong);
      font: {
        family: var(--font-mono);
        size: 1.5rem;
        weight: 900;
      }
    }

    &-description {
      display: block;
    }

    &-languages {
      display: block;
      color: var(--color-weak);
      font-size: 1rem;
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

  .slide {
    &-left-right {
      @include slide-left-right;
    }

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
