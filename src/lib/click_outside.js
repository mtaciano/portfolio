// TODO: Add proper types.
/**
 * @param {any} node
 * @returns {any}
 */
export function clickOutside(node) {
  const handleClick = (/** @type {any} */ event) => {
    if (!node.contains(event.target)) {
      node.dispatchEvent(new CustomEvent("clickoutside"));
    }
  };

  document.addEventListener("click", handleClick, true);

  return {
    destroy() {
      document.removeEventListener("click", handleClick, true);
    },
  };
}
