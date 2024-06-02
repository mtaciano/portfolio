<svelte:head>
  <title>Miguel Taciano :: Blog</title>
</svelte:head>

<div class="outer">
  <h1>Coming Soon<sup>TM</sup></h1>
</div>

<style lang="scss">
  * {
    text-align: center;
  }

  .outer {
    @include fade-in;

    padding: {
      top: 12rem;
      bottom: 10rem;
    }

    @media screen and (max-width: $transition-size) {
      padding: {
        top: 5rem;
        bottom: 5rem;
      }
    }
  }

  h1 {
    @include text-underline(var(--theme-color-normal));

    color: var(--color-strong);
    letter-spacing: 0.05em;
    font: {
      family: var(--font-serif);
      size: clamp(4.125rem, 10vw, 6.125rem);
      weight: 900;
    }
    padding: {
      left: 1rem;
      right: 1rem;
    }
  }

  sup {
    font: {
      family: inherit;
      size: 0.5em;
      weight: inherit;
    }
  }
</style>
