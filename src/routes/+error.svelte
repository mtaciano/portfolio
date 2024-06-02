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
    padding-top: 10rem;

    @media screen and (max-width: $transition-size) {
      padding-top: 3rem;
    }
  }

  h1 {
    @include text-underline(var(--theme-color-strong));

    color: var(--color-strong);
    text-decoration-thickness: 0.15em; /* In this case 0.2em is *too* big */
    font: {
      size: clamp(10rem, 8.2609rem + 8.6957vi, 15rem);
      weight: 900;
    }
    padding-bottom: 2rem;
  }

  h2 {
    color: var(--color-normal);
    font: {
      size: 2.5rem;
      weight: 600;
    }
  }

  h3 {
    font: {
      size: 1.5rem;
      weight: 500;
    }
  }

  a {
    @include transition;
    @include link(var(--theme-color-weaker));
  }
</style>
