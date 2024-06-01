<script>
  import { professional, academic, volunteer } from "$lib/data/resume.json";

  const sections = [
    { title: "Professional Experience", jobs: professional },
    { title: "Academic Background", jobs: academic },
    { title: "Volunteer Experience", jobs: volunteer },
  ];
  const resume = "/pdfs/mtaciano_resume.pdf";
</script>

<svelte:head>
  <title>Miguel Taciano :: Résumé</title>

  <meta name="description" content="Miguel Taciano's Résumé" />
  <meta
    name="keywords"
    content="Johnson & Johnson, Embraer, Unifesp, Data Analytics, Machine Learning, Computer Vision, Software Development"
  />
</svelte:head>

{#snippet job(title, company, duration, place, responsibilities)}
  <p class="job">
    <span class="job-title">{title}</span>
    <span class="job-company">{company}</span>
    <span class="job-duration">{duration} ({place})</span>
  </p>

  <!-- Even if the `ul` is empty, we need it to keep the correct padding. -->
  <ul class="job-responsibilities">
    {#if responsibilities.length > 0}
      {#each responsibilities as r}
        <li>
          {r}
        </li>
      {/each}
    {/if}
  </ul>
{/snippet}

<div class="outer">
  <article>
    <div class="section">
      <h3 class="section-title">Introduction</h3>
      <p>
        Graduate in Computer Engineering at the Federal University of São Paulo
        (Unifesp). One year's experience in data analysis for Johnson &amp
        Johnson. Knowledge in multiple areas such as data analysis, machine
        learning, web development and embedded systems. Looking for
        opportunities in areas related to those mentioned above.
      </p>
    </div>

    {#each sections as { title, jobs }}
      <div class="section">
        <h3 class="section-title">{title}</h3>
        {#each jobs as { title, company, duration, location, responsibilities }}
          {@render job(title, company, duration, location, responsibilities)}
        {/each}
      </div>
    {/each}

    <p class="center">
      You can also view my résumé in <a href={resume}>PDF format</a>.
    </p>
  </article>
</div>

<style lang="scss">
  .outer {
    @include fade-in;

    padding-top: 3rem;
  }

  .job {
    &-title {
      @include text-underline(var(--theme-color-faint));

      color: var(--text-color-normal);
      font: {
        family: var(--font-mono);
        size: 1.625rem;
        weight: 900;
      }
    }

    &-company {
      display: block;
      font: {
        size: 1.25rem;
        weight: 500;
      }
    }

    &-duration {
      display: block;
      color: var(--text-color-weaker);
      font-size: 1rem;
    }

    &-responsibilities {
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

  .section {
    padding-bottom: 3rem;

    &-title {
      @include section-title;
      @include text-underline(var(--theme-color-weaker));

      color: var(--text-color-strong);
    }
  }

  /* TODO: Find a better name. */
  .center {
    @include flex-center;

    flex-wrap: wrap;
  }

  a {
    @include transition;
    @include link(var(--theme-color-weaker));
  }

  article {
    @include article;
  }
</style>
