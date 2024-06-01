<script>
  import { Github, Linkedin, Mail } from "lucide-svelte";

  const strokeWidth = 2;
  const size = "1.875rem";
  const color = "var(--button-color)";

  const linkedin = "https://www.linkedin.com/in/mtaciano/";
  const github = "https://www.github.com/mtaciano/";
  const email = "mailto:contact@mtaciano.com";
</script>

<div class="socials">
  <a target="_blank" class="socials-item" href={linkedin} aria-label="LinkedIn">
    <Linkedin {strokeWidth} {size} {color} />
  </a>
  <a target="_blank" class="socials-item" href={github} aria-label="GitHub">
    <Github {strokeWidth} {size} {color} />
  </a>
  <a target="_blank" class="socials-item" href={email} aria-label="e-mail">
    <Mail {strokeWidth} {size} {color} />
  </a>
</div>

<style lang="scss">
  .socials {
    @include border;

    cursor: pointer;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: var(--button-size);
    width: calc(2.8 * var(--button-size));

    &-item {
      @include flex-center;
      @include transition;

      color: inherit;
      text-decoration: none;
      height: var(--button-inner-size);
      width: var(--button-inner-size);
      border-radius: var(--border-inner-radius);

      &:hover {
        background-color: var(--button-selected-background);
      }

      &:active {
        background-color: var(--button-active-background);
      }
    }
  }
</style>
