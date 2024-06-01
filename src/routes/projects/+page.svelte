<script>
  import { ongoing, finished } from "$lib/data/projects.json";

  const sections = [
    { title: "Ongoing", projects: ongoing },
    { title: "Finished", projects: finished },
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
    {#each sections as { title, projects }}
      <div class="section">
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
    @include fade-in;

    padding-top: 3rem;
  }

  .bold {
    font-weight: 500;
  }

  .project {
    padding-bottom: 1.5rem;

    &-title {
      @include text-underline(var(--theme-color-faint));

      color: var(--text-color-normal);
      font: {
        family: var(--font-mono);
        size: 1.625rem;
        weight: 900;
      }
    }

    &-description {
      display: block;
    }

    &-languages {
      display: block;
      color: var(--text-color-weaker);
      font-size: 1rem;
    }
  }

  .section {
    padding-bottom: 3rem;

    &-title {
      @include section-title;
      @include text-underline(var(--theme-color-weaker));

      color: var(--text-color-strong);
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
