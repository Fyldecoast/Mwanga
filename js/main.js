document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector("[data-menu-btn]");
  const mobileNav = document.querySelector("[data-mobile-nav]");

  if (menuBtn && mobileNav) {
    menuBtn.addEventListener("click", () => {
      const isOpen = mobileNav.classList.toggle("active");
      menuBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }
});