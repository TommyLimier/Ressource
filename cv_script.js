document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");
  
    menuToggle.addEventListener("click", () => {
      menu.classList.toggle("visible");
      menuToggle.setAttribute(
        "aria-expanded",
        menu.classList.contains("visible") ? "true" : "false"
      );
    });
  });
  