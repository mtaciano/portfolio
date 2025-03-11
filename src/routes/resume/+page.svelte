<script>
  import { professional, academic, volunteer } from "$lib/data/resume.json";

  const sections = [
    {
      title: "Professional Experience",
      jobs: professional,
      slide: "slide-left-right",
    },
    { title: "Academic Background", jobs: academic, slide: "slide-right-left" },
    {
      title: "Volunteer Experience",
      jobs: volunteer,
      slide: "slide-left-right",
    },
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
    <div class="section slide-right-left">
      <h3 class="section-title">Introduction</h3>
      <p>
        Computer Engineer with experience in front and back-end development,
        embedded systems, and data engineering. Highly proficient in C, Python,
        TypeScript, and Rust. Focused on delivering high-quality and scalable
        products. Looking for opportunities to apply my skills in a dedicated
        software engineering role where I can drive impactful solutions.
      </p>
    </div>

    {#each sections as { title, jobs, slide }}
      <div class="section {slide}">
        <h3 class="section-title">{title}</h3>
        {#each jobs as { title, company, duration, location, responsibilities }}
          {@render job(title, company, duration, location, responsibilities)}
        {/each}
      </div>
    {/each}

    <p class="center">
      You can also view my résumé in&nbsp;<a href={resume}>PDF format</a>.
    </p>
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

  .job {
    &-title {
      @include text-underline(var(--theme-color-weaker));

      color: var(--color-strong);
      font: {
        family: var(--font-mono);
        size: 1.5rem;
        weight: 900;
      }
    }

    &-company {
      display: block;
      color: var(--color-normal);
      font: {
        size: 1.25rem;
        weight: 600;
      }
    }

    &-duration {
      display: block;
      color: var(--color-weak);
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
      @include text-underline(var(--theme-color-normal));

      color: var(--color-strong);
    }
  }

  /* TODO: Find a better name. */
  .center {
    @include flex-center;

    flex-wrap: wrap;
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
    @include link(var(--theme-color-weaker));
  }

  article {
    @include article;
  }
</style>
