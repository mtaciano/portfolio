<script>
  const jnj = "https://www.jnj.com";
  const embraer = "https://embraer.com";
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

<div class="outer">
  <div class="title">
    <div>
      <h1 class="title-name">miguel</h1>
      <h1 class="title-surname">taciano</h1>
    </div>
    <div class="title-motto">
      <p>
        Creating
        <span class="background-skew"
          ><span class="background-unskew">elegant</span></span
        >
        software <span class="highlight">solutions</span> to complex problems.
      </p>
    </div>
  </div>

  <article>
    <h1 class="section-title">About</h1>

    <p>
      Hello! My name is Miguel Taciano, and I'm a computer engineer. My most
      recent position was as a data engineer at <a target="_blank" href={jnj}
        >Johnson &amp; Johnson</a
      >. I also contributed to the development of automated website testing.
      Before that, I collaborated with
      <a target="_blank" href={embraer}>Embraer</a>
      during the research of automated jigsaw puzzle solvers using machine learning
      and computer vision. During that period, I developed
      <a target="_blank" href={jigsaw}>my own novel approach</a> to the problem,
      using semantic segmentation to beat state-of-the-art solutions in a restricted
      environment.
    </p>

    <p>
      My other big project was the development of a <a
        target="_blank"
        href={risc}>32-bit RISC CPU</a
      >
      with its own operating system using FPGAs (Field-Programmable Gate Arrays)
      and Verilog, for which I also developed an
      <a target="_blank" href={cminus}>accompanying compiler</a>
      based on a small subset of the C programming language. My current side project
      is a
      <a target="_blank" href={sol}>complete rewrite</a> of it, with better code,
      more features and fewer bugs!
    </p>

    <p>
      As for my education, I received my B.Sc. from
      <a target="_blank" href={unifesp}>Universidade Federal de São Paulo</a>,
      in Brazil. During that time, I became interested in multiple
      technology-related fields, such as web development, security and
      cryptography, language design, embedded systems, and more. My current
      most-used languages are C, Python, JS/TS, and Rust.
    </p>
  </article>
</div>

<style lang="scss">
  .background {
    &-skew {
      display: inline-block;
      background-color: var(--theme-color-strong);
      padding-inline: 0.25rem;
      border-radius: 1px;
      transform: skewY(-2deg) skewX(2deg);
    }

    &-unskew {
      display: inline-block;
      color: var(--color-inverted-strong);
      transform: skewY(2deg) skewX(-2deg);
    }
  }

  .highlight {
    @include text-underline(var(--theme-color-strong));
  }

  .title {
    display: grid;
    grid-auto-flow: column;
    gap: clamp(2.5rem, 1.6304rem + 4.3478vi, 5rem);
    padding: {
      top: 10rem;
      bottom: 12rem;
    }
    margin: {
      left: auto;
      right: auto;
    }
    width: min(90%, 50rem);

    &-name,
    &-surname {
      @include text-underline(var(--theme-color-strong));
      @include slide-top-bottom($function: ease-out);

      color: var(--color-strong);
      font: {
        family: var(--font-serif);
        size: clamp(5rem, 4.0217rem + 4.8913vi, 7.8125rem);
      }
    }

    &-motto {
      @include fade-in($delay: 0.2s, $function: ease-in-out);

      display: flex;
      flex-flow: column;
      justify-content: end;
      align-items: start;
      font: {
        weight: 800;
        size: clamp(1.5rem, 1.3913rem + 0.5435vi, 1.8125rem);
      }
      animation-fill-mode: both;

      p {
        padding: 0;
      }
    }

    @media screen and (max-width: 560px) {
      grid-auto-flow: row;
      padding-top: 3rem;
      padding-bottom: 5rem;
    }
  }

  .section-title {
    @include text-underline(var(--theme-color-normal));
    @include section-title;
  }

  article {
    @include article;
    @include slide-bottom-top($delay: 0.15s, $function: ease-in-out);

    animation-fill-mode: both;
  }

  p {
    padding-bottom: 1rem;
  }

  a {
    @include transition;
    @include link(var(--theme-color-weaker));
  }
</style>
