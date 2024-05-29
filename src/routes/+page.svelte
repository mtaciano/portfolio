<script>
  const unifesp = "https://www.unifesp.br";
  const jigsaw = "https://doi.org/10.5753/wvc.2023.27545";
  const risc = "https://github.com/mtaciano/fpgmips";
  const cminus = "https://github.com/mtaciano/cmc";
  const sol = "https://github.com/mtaciano/sol";
</script>

<svelte:head>
  <title>Miguel Taciano</title>
  <meta name="description" content="Miguel Taciano's portfolio" />
  <meta
    name="keywords"
    content="SolidJS, SolidStart, TailwindCSS, Portfolio, Computer Engineer, Unifesp"
  />
</svelte:head>

<h1 class="title">Miguel Taciano</h1>
<h2 class="subtitle">Computer::Engineer</h2>

<article>
  <h3 class="section-title">About</h3>
  <p>
    Hello! I'm a computer engineer who recently received my bachelor's degree
    from
    <a target="_blank" href={unifesp}>Universidade Federal de São Paulo</a>, in
    Brazil. I'm interested in all computer-related fields, such as web
    development, security and cryptography, language design, embedded systems
    and more. My current most-used languages are C, Python and Rust.
  </p>
  <p>
    During my time at the university, my most researched fields were Machine
    learning (mainly Reinforcement Learning) and Computer Vision. In that
    period, I developed a <a target="_blank" href={jigsaw}
      >Jigsaw Puzzle Solver</a
    > that used Semantic Segmentation and Machine Learning to solve jigsaw puzzles
    (visual puzzles).
  </p>
  <p>
    My other big project was the development of a <a target="_blank" href={risc}
      >32-bit RISC CPU</a
    >
    using FPGAs (Field-Programmable Gate Arrays) and Verilog, for which I also developed
    an <a target="_blank" href={cminus}>accompanying compiler</a> based on a
    small subset of the C programming language. My current side project is a
    <a target="_blank" href={sol}>complete rewrite</a> of it, with better code, more
    features and fewer bugs!
  </p>
</article>

<style lang="scss">
  .title {
    color: var(--text-color-strong);
    font: {
      family: var(--font-serif);
      weight: 900;
      size: 5.625rem;
    }
    text-align: center;
    line-height: 1;
    padding: {
      top: 1.25rem;
      bottom: 1.25rem;
    }
    text-decoration: {
      line: underline;
      style: solid;
      color: var(--theme-color-normal);
      thickness: 0.125em;
    }
  }

  .subtitle {
    color: var(--text-color-strong);
    font: {
      family: var(--font-mono);
      weight: 800;
      size: 2rem;
      style: italic;
    }
    text-align: center;
    line-height: 1;
    padding: {
      bottom: 3.125rem;
    }
  }

  .section-title {
    color: var(--text-color-strong);
    font: {
      family: var(--font-mono);
      weight: 800;
      size: 2.25rem;
    }
    line-height: 1;
    padding: {
      bottom: 1.25rem;
    }
    text-decoration: {
      line: underline;
      style: solid;
      color: var(--theme-color-weaker);
      thickness: 0.175em;
    }
  }

  article {
    line-height: 1.625;
    font-size: 1.125rem;
    margin: {
      left: auto;
      right: auto;
    }
    padding: {
      left: 1rem;
      right: 1rem;
    }

    @media (min-width: $transition-size) {
      max-width: 36rem;
    }
  }

  p {
    padding-bottom: 1rem;
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
</style>
