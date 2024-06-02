<script>
  import Socials from "./Socials.svelte";

  const sshKey = "/pubkeys/mtaciano.ssh.pub";
  const gpgKey = "/pubkeys/mtaciano.gpg.asc";
  const svelteKit = "https://kit.svelte.dev";
  const lucide = "https://lucide.dev";
  const mit = "https://opensource.org/license/mit";
</script>

<footer class="outer">
  <div class="upper">
    <div>
      <Socials />
    </div>
    <div class="keys">
      <a href={sshKey} target="_blank" download
        ><abbr title="SHA256:CcdAWEMdTf7LzNt9kWB7SGQHFs0K1kF8ldA3NdbaSJk"
          >CcdAWE...dbaSJk</abbr
        > (SSH)</a
      >
      <a href={gpgKey} target="_blank" download
        ><abbr title="8313A90354AA2D6139FAE531F059B8F3B9AE19D4"
          >8313A9...AE19D4</abbr
        > (GPG)</a
      >
    </div>
  </div>
  <div class="lower">
    <p>
      Icons by <a target="_blank" href={lucide}>Lucide</a>
    </p>
    <p>Made with <a target="_blank" href={svelteKit}>SvelteKit</a></p>
    <p>(c) 2024 Miguel Silva Taciano (<a target="_blank" href={mit}>MIT</a>)</p>
  </div>
</footer>

<style lang="scss">
  * {
    color: var(--color-weak);
    font: {
      family: var(--font-mono);
      size: 0.85rem;
      weight: 600;
    }
  }

  .outer {
    @include flex-center(column);
    @include fade-in;

    padding: {
      top: 1rem;
      bottom: 0.5rem;
    }
    margin: {
      top: 2rem;
      left: auto;
      right: auto;
    }
    border-top: {
      style: solid;
      width: var(--border-width);
      color: var(--border-color);
    }
    max-width: 28rem;
  }

  .upper {
    @include flex-center(row);

    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 0.5rem;
  }

  .lower {
    @include flex-center(column);

    gap: 0.5rem;
  }

  .keys {
    @include flex-center(column);

    gap: 0.5rem;
  }

  abbr {
    color: inherit;
    text-decoration: none;
  }

  a {
    @include transition;
    @include link(var(--theme-color-weaker));

    &::after {
      content: none;
    }
  }
</style>
