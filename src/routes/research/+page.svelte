<script>
  const segsempuzzle = "https://doi.org/10.5753/wvc.2023.27545";
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

<article>
  <h3 class="section-title">Published Papers</h3>
  <p>
    <span class="block job italic highlight normal"
      ><a href={segsempuzzle} target="_blank"
        >SegSemPuzzle: Solving Jigsaw Puzzles with Semantic Segmentation</a
      ></span
    >
    <span class="block bold small"
      >Workshop de Visão Computacional (WVC) — SBC-OpenLib</span
    >
    <span class="block weaker smaller">November 2023</span>
  </p>
  <ul>
    <li>
      The traditional Jigsaw Puzzle is a challenging task performed by humans,
      mainly due to its hardness and proven to be a NP-Complete problem. Even
      so, recent efforts show better performance in this task using different
      methods involving complex computer vision and machine learning techniques.
      In this sense, this paper proposes new approaches based on the semantic
      segmentation (SS) task to solve jigsaw puzzles (visual puzzles) in reduced
      training scenario. To the best of our knowledge, this is the first work in
      the literature that uses SS for the target application. In the performed
      experiments, it was possible to demonstrate that SegSemPuzzle and
      SegSemPuzzle-G obtained excellent results when compared with other
      approaches existing in literature for 3 × 3 puzzle solving tasks.
    </li>
  </ul>
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

    color: inherit;
    font: {
      family: inherit;
      weight: inherit;
    }
    padding: {
      left: 0.125rem;
      right: 0.125rem;
    }
    text-decoration: {
      line: underline;
      style: solid;
      color: var(--theme-color-faint);
      thickness: 0.175em;
    }

    &:hover {
      color: var(--text-color-stronger);
      text-decoration-color: var(--theme-color-strong);
    }

    &::after {
      content: "↗";
      font: {
        family: var(--font-sans);
        weight: 900;
        size: 0.75em;
      }
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
