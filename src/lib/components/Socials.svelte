<script>
  import { Github, Linkedin, Mail } from "lucide-svelte";

  const strokeWidth = 2.25;
  const size = "1.5rem";

  const linkedin = "https://www.linkedin.com/in/mtaciano/";
  const github = "https://www.github.com/mtaciano/";
  const email = "mailto:contact@mtaciano.com";
</script>

<div class="socials">
  <a target="_blank" class="socials-item" href={linkedin} aria-label="LinkedIn">
    <Linkedin {strokeWidth} {size} />
  </a>
  <a target="_blank" class="socials-item" href={github} aria-label="GitHub">
    <Github {strokeWidth} {size} />
  </a>
  <a target="_blank" class="socials-item" href={email} aria-label="e-mail">
    <Mail {strokeWidth} {size} />
  </a>
</div>

<style lang="scss">
  .socials {
    @include transition;
    @include border;

    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding-inline: 0.25rem;
    height: var(--button-size);
    background-color: var(--background-color);

    &-item {
      @include flex-center;
      @include transition;

      cursor: pointer;
      color: var(--button-color);
      text-decoration: none;
      height: var(--button-inner-size);
      width: var(--button-inner-size);
      border-radius: var(--border-inner-radius);

      &:hover {
        color: var(--button-hover-color);
        background-color: var(--button-selected-background);
      }

      &:active {
        background-color: var(--button-active-background);
      }
    }
  }
</style>
