(() => {
  const nav = document.querySelector("#navbar");
  const menuIcon = document.querySelector("#menu-icon");

  nav.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      nav.classList.remove("navbar-mobile");
      menuIcon.setAttribute("class", "bi bi-list mobile-nav-toggle");
    }
  });
})();
