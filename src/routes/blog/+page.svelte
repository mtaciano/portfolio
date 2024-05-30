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
    margin: {
      top: 5rem;
      bottom: 5rem;
    }
  }

  h1 {
    color: var(--text-color-strong);
    font: {
      family: var(--font-serif);
      size: clamp(4.125rem, 10vw, 6.125rem);
      weight: 900;
    }
    text-decoration: {
      line: underline;
      style: solid;
      color: var(--theme-color-normal);
      thickness: 0.175em;
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
