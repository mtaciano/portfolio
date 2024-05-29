<svelte:head>
  <title>Miguel Taciano :: 404</title>
</svelte:head>

<div class="outer">
  <h1>404</h1>
  <h2>Oops! Page not found.</h2>
  <h3>maybe try <a href="/">going back?</a></h3>
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
    color: var(--theme-color-weaker);
    font: {
      size: clamp(8rem, 20vw, 10rem);
      weight: 900;
    }
    line-height: 1;
  }

  h2 {
    color: var(--text-color-strong);
    font: {
      size: 2.5rem;
      weight: 600;
    }
    line-height: 1.5;
  }

  h3 {
    font: {
      size: 1.5rem;
      weight: 500;
    }
  }

  a {
    @include transition;

    color: var(--theme-color-normal);
    text-decoration: underline var(--theme-color-normal) 0.175rem;

    &:hover {
      color: var(--theme-color-weaker);
      text-decoration-color: var(--theme-color-weaker);
    }
  }
</style>
