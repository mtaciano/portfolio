<script>
  import Socials from "./Socials.svelte";

  const sshKey = "/pubkeys/mtaciano.ssh.pub";
  const gpgKey = "/pubkeys/mtaciano.gpg.asc";
  const svelteKit = "https://kit.svelte.dev";
  const lucide = "https://lucide.dev";
  const simpleIcons = "https://simpleicons.org";
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
    <p>Made with <a target="_blank" href={svelteKit}>SvelteKit</a></p>
    <p>
      Icons by <a target="_blank" href={lucide}>Lucide</a> and
      <a target="_blank" href={simpleIcons}>Simple Icons</a>
    </p>
    <p>(c) 2024 Miguel Silva Taciano (<a target="_blank" href={mit}>MIT</a>)</p>
  </div>
</footer>

<style lang="scss">
  * {
    color: var(--text-color-weaker);
    font: {
      family: var(--font-mono);
      size: 0.875rem;
      weight: 600;
    }
    letter-spacing: -0.025rem;
  }

  .outer {
    @include flex-center(column);

    padding: {
      top: 0.625rem;
      bottom: 0.625rem;
    }
    margin: {
      top: 2rem;
      left: auto;
      right: auto;
    }
    border-top: {
      style: solid;
      width: var(--border-width);
      color: var(--text-color-faint);
    }
    max-width: 28rem;
  }

  .upper {
    @include flex-center(row);

    gap: 1rem;
    margin-bottom: 0.625rem;
  }

  .lower {
    @include flex-center(column);

    gap: 0.625rem;
  }

  .keys {
    @include flex-center(column);

    gap: 0.625rem;
  }

  abbr {
    color: inherit;
    text-decoration: none;
  }

  a {
    @include transition;

    color: var(--text-color-weak);
    text-decoration: {
      line: underline;
      style: solid;
      color: var(--theme-color-weaker);
      thickness: 0.175em;
    }

    &:hover {
      color: var(--text-color-strong);
      text-decoration-color: var(--theme-color-weak);
    }
  }
</style>
