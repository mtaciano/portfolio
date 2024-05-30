<script>
  const fpgmips = "https://github.com/mtaciano/fpgmips";
  const sol = "https://github.com/mtaciano/sol";
  const uartPhone = "https://github.com/mtaciano/uart-phone";
  const mempager = "https://github.com/mtaciano/mempager";
  const monkeyScripts = "https://github.com/mtaciano/monkey-scripts";
  const cmc = "https://github.com/mtaciano/cmc";
  const redapro = "https://github.com/mtaciano/redapro";
</script>

<svelte:head>
  <title>Miguel Taciano :: Projects</title>
  <meta
    name="description"
    content="Miguel Taciano's research in different fields"
  />
  <meta
    name="keywords"
    content="Research, Machine Learning, Computer Vision, Puzzle-Solving"
  />
</svelte:head>

<article>
  <h3 class="section-title">Ongoing</h3>
  <p class="space-bottom">
    <span class="block job italic highlight normal"
      ><a href={sol} target="_blank">Sol</a></span
    >
    <span class="block bold small"
      >The sol language, the spiritual successor of the C- language, developed
      to compile human-readable code into FPGMIPS machine code.</span
    >
    <span class="block weaker smaller"
      ><span class="bold">Languages:</span> Rust.</span
    >

    <span class="block job italic highlight normal"
      ><a href={redapro} target="_blank">redapro</a></span
    >
    <span class="block bold small"
      >A by-the-spec implementation of the <span class="super-bold">Re</span
      >liable
      <span class="super-bold">Da</span>ta
      <span class="super-bold">Pro</span>tocol. A UDP-layer implementation that
      can guarantee the integrity and reliability of the communications made
      using it, as if the user were using TCP sockets.</span
    >
    <span class="block weaker smaller"
      ><span class="bold">Languages:</span> C.</span
    >

    <span class="block job italic highlight normal"
      ><a href={monkeyScripts} target="_blank">Monkey Scripts</a></span
    >
    <span class="block bold small"
      >A collection of scripts for grease/tamper/violent-monkey that I made and
      use sporadically.</span
    >
    <span class="block weaker smaller"
      ><span class="bold">Languages:</span> JavaScript.</span
    >
  </p>

  <h3 class="section-title">Finished</h3>
  <p class="space-bottom">
    <span class="block job italic highlight normal"
      ><a href={fpgmips} target="_blank">FPGMIPS</a></span
    >
    <span class="block bold small"
      >A fully functional CPU based on the 32-bit RISC MIPS mono-cycle
      architecture. With it also comes an OS capable of preempting user-compiled
      programs. Those programs are currently written in C-, and in the future
      they should be capable of being written in sol.</span
    >
    <span class="block weaker smaller"
      ><span class="bold">Languages:</span> Verilog, C-.</span
    >

    <span class="block job italic highlight normal"
      ><a href={cmc} target="_blank">CMC</a></span
    >
    <span class="block bold small"
      >A compiler for the C- language, a subset of C. Created to be used with
      the FPGMIPS CPU. This compiler receives human-readable code as an input
      and outputs machine code instructions specifically tailored to the FPGMIPS
      CPU. Written partially in C and Rust, as it was the time when I was first
      experimenting with the language.</span
    >
    <span class="block weaker smaller"
      ><span class="bold">Languages:</span> C, Rust, Flex, Bison.</span
    >

    <span class="block job italic highlight normal"
      ><a href={uartPhone} target="_blank">UART-Phone</a></span
    >
    <span class="block bold small"
      >A simulation of the capabilities of conversing between two cellphones
      using FPGAs. This is done using Bluetooth. As the FPGAs connect with each
      other, they use the UART protocol to communicate between themselves.</span
    >
    <span class="block weaker smaller"
      ><span class="bold">Languages:</span> Verilog.</span
    >

    <span class="block job italic highlight normal"
      ><a href={mempager} target="_blank">mempager</a></span
    >
    <span class="block bold small"
      >A simulation of two different implemented paging algorithms hit-and-miss
      ratios as they move pages from the swap to the RAM and vice versa.
    </span>
    <span class="block weaker smaller"
      ><span class="bold">Languages:</span> C.</span
    >
  </p>
</article>

<style lang="scss">
  .job {
    font: {
      family: var(--font-mono);
      size: 1.625rem;
      weight: 900;
    }
    padding: {
      top: 1.25rem;
      bottom: 0.25rem;
    }
  }

  .space {
    &-bottom {
      padding-bottom: 3rem;
    }
  }

  .block {
    display: block;
  }

  .small {
    font-size: 1.25rem;
  }

  .smaller {
    font-size: 1rem;
  }

  .bold {
    font-weight: 500;
  }

  .super-bold {
    font-weight: 800;
  }

  .weaker {
    color: var(--text-color-weaker);
  }

  .normal {
    color: var(--text-color-normal);
  }

  .highlight {
    text-decoration: {
      line: underline;
      style: solid;
      color: var(--theme-color-faint);
      thickness: 0.175em;
    }
  }

  .section-title {
    color: var(--text-color-strong);
    font: {
      family: var(--font-serif);
      weight: 800;
      size: 2.25rem;
    }
    line-height: 1.25;
    text-decoration: {
      line: underline;
      style: solid;
      color: var(--theme-color-weaker);
      thickness: 0.175em;
    }
  }

  a {
    @include transition;

    color: inherit;
    font: {
      family: inherit;
      weight: inherit;
    }
    padding: {
      left: 0.125rem;
      right: 0.125rem;
    }
    text-decoration: {
      line: underline;
      style: solid;
      color: var(--theme-color-faint);
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

  article {
    line-height: 1.25;
    font-size: 1.125rem;
    margin: {
      left: auto;
      right: auto;
    }
    padding: {
      top: 3rem;
      left: 1rem;
      right: 1rem;
    }

    @media (min-width: $transition-size) {
      max-width: 36rem;
    }
  }
</style>
