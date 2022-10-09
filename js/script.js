import "./swiper.js";
const togglerElement = document.querySelector(".page-header__toggler");

togglerElement.addEventListener("click", () => {
  const expanded = togglerElement.getAttribute("aria-expanded");
  togglerElement.setAttribute("aria-expanded", expanded === "true" ? "false" : "true");
});
