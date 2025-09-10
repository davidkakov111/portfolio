// Scroll to section by id
export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    // Calculate offset to account for fixed navbar
    const appBar = document.querySelector("header");
    const yOffset = appBar ? -(appBar.clientHeight + 8) : -64;

    // Scroll to element with offset
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
};