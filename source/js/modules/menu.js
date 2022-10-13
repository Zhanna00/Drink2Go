export default () => {
  const navElement = document.querySelector(".page-header__nav");
  const togglerElement = navElement.querySelector(".page-header__link--toggler");

  togglerElement.addEventListener("click", () => {
    const expanded = togglerElement.getAttribute("aria-expanded");
    togglerElement.setAttribute("aria-expanded", expanded === "true" ? "false" : "true");
  });

  navElement.classList.remove("page-header__nav--initial");
};
