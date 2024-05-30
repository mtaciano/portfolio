<script>
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

<article>
  <h3 class="section-title">Introduction</h3>
  <p class="summary space-bottom">
    Graduate in Computer Engineering at the Federal University of São Paulo
    (Unifesp). One year's experience in data analysis for Johnson &amp Johnson.
    Knowledge in multiple areas such as data analysis, machine learning, web
    development and embedded systems. Looking for opportunities in areas related
    to those mentioned above.
  </p>
  <h3 class="section-title">Professional Experience</h3>
  <p>
    <span class="block job italic highlight normal">Data Analyst</span>
    <span class="block bold small">Johnson &amp Johnson</span>
    <span class="block weaker smaller"
      >February 2023 — January 2024 (São Paulo, Brazil)</span
    >
  </p>
  <ul>
    <li>
      Development and maintenance of an information and utilities portal for use
      by all latin american countries.
    </li>
    <li>
      Creation of technical documentation for dashboards containing crucial
      information for new users to understand these metrics.
    </li>
    <li>
      Development of new dashboards, allowing monitoring and better
      decision-making by the various teams involved in the project.
    </li>
    <li>
      Monitoring and classifying of thousands of users across related products,
      in order to label and categorize consumption patterns with the ultimate
      aim of improving the product, thus increasing the company's KPIs.
    </li>
  </ul>
  <span class="block job italic highlight normal"
    >Machine Learning Researcher</span
  >
  <span class="block bold small">Embraer &amp CNPq</span>
  <span class="block weaker smaller"
    >May 2022 — April 2023 (São Paulo, Brazil)</span
  >
  <ul class="space-bottom">
    <li>
      Research and comparative analysis of state-of-the-art visual-puzzle
      solving methods using machine learning (mainly reinforcement learning) and
      computer vision aproaches, such as semantic segmentation.
    </li>
    <li>
      Development of a state-of-the-art method of solving visual-puzzle
      problems, using machine learning and semantic segmentation.
    </li>
  </ul>
  <h3 class="section-title">Academic Background</h3>
  <p class="space-bottom">
    <span class="block job italic highlight normal"
      >Bachelor's in Computer Engineering</span
    >
    <span class="block bold small"
      >Universidade Federal de São Paulo (Unifesp)</span
    >
    <span class="block weaker smaller"
      >March 2019 — December 2023 (São Paulo, Brazil)</span
    >
    <span class="block job italic highlight normal"
      >Bachelor's in Science and Technology</span
    >
    <span class="block bold small"
      >Universidade Federal de São Paulo (Unifesp)</span
    >
    <span class="block weaker smaller"
      >March 2019 — February 2022 (São Paulo, Brazil)</span
    >
  </p>
  <h3 class="section-title">Volunteer Experience</h3>
  <p>
    <span class="block job italic highlight normal">Game Designer</span>
    <span class="block bold small"
      >CEGI — Universidade Federal de São Paulo (Unifesp)</span
    >
    <span class="block weaker smaller"
      >November 2020 — February 2023 (São Paulo, Brazil)</span
    >
  </p>
  <ul class="space-bottom">
    <li>
      Design and development of multiple educational games made for public
      schools by the extension program group at Unifesp, CEGI (Center for Games
      and Internet Studies).
    </li>
  </ul>
  <p class="center space-top">
    You can also view my résumé in <a href={resume}>PDF Format</a>.
  </p>
</article>

<style lang="scss">
  .job {
    font: {
      family: var(--font-serif);
      size: 1.625rem;
      weight: 900;
    }
    padding: {
      top: 1.25rem;
      bottom: 0.25rem;
    }
  }

  .center {
    text-align: center;
  }

  .space {
    &-bottom {
      padding-bottom: 3rem;
    }

    &-top {
      padding-top: 3rem;
    }
  }

  .summary {
    padding-top: 1.25rem;
  }

  .block {
    display: block;
  }

  .small {
    font-size: 1.25rem;
  }

  .smaller {
    font-size: 1rem;
  }

  .bold {
    font-weight: 500;
  }

  .weaker {
    color: var(--text-color-weaker);
  }

  .normal {
    color: var(--text-color-normal);
  }

  .highlight {
    text-decoration: {
      line: underline;
      style: solid;
      color: var(--theme-color-faint);
      thickness: 0.175em;
    }
  }

  .section-title {
    color: var(--text-color-strong);
    font: {
      family: var(--font-mono);
      weight: 800;
      size: 2.25rem;
    }
    line-height: 1.25;
    text-decoration: {
      line: underline;
      style: solid;
      color: var(--theme-color-weaker);
      thickness: 0.175em;
    }
  }

  a {
    @include transition;

    color: var(--text-color-normal);
    font-weight: 600;
    padding: {
      left: 0.125rem;
      right: 0.125rem;
    }
    text-decoration: {
      line: underline;
      style: solid;
      color: var(--theme-color-weaker);
      thickness: 0.175em;
    }

    &:hover {
      color: var(--text-color-stronger);
      text-decoration-color: var(--theme-color-strong);
    }
  }

  article {
    line-height: 1.25;
    font-size: 1.125rem;
    margin: {
      left: auto;
      right: auto;
    }
    padding: {
      top: 3rem;
      left: 1rem;
      right: 1rem;
    }

    @media (min-width: $transition-size) {
      max-width: 36rem;
    }
  }

  ul {
    list-style: {
      type: square;
      position: inside;
    }
    padding: {
      left: 2rem;
    }
  }

  li {
    padding: {
      top: 0.25rem;
      bottom: 0.25rem;
    }

    &:last-of-type {
      padding-bottom: 0;
    }
  }
</style>
