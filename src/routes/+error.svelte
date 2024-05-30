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
    color: var(--text-color-strong);
    font: {
      size: clamp(8rem, 20vw, 10rem);
      weight: 900;
    }
    line-height: 1;

    text-decoration: {
      line: underline;
      style: solid;
      color: var(--theme-color-weaker);
      thickness: 0.175em;
    }
    padding-bottom: 2rem;
  }

  h2 {
    color: var(--text-color-normal);
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

    &::after {
      content: "↗";
      font: {
        family: var(--font-sans);
        weight: 900;
        size: 0.75em;
      }
    }
  }
</style>
