/* ============================================================
   Myndus Theme System v4.0
   Handles both mobile and desktop toggle buttons
   ============================================================ */
(function () {
  var root = document.documentElement;
  var buttons = document.querySelectorAll(".theme-toggle");

  var savedTheme = localStorage.getItem("theme") || "dark";
  if (savedTheme === "light") {
    root.classList.add("light-mode");
  } else {
    root.classList.remove("light-mode");
  }

  function updateAllButtons() {
    var icon = root.classList.contains("light-mode") ? "☀️" : "🌙";
    var label = root.classList.contains("light-mode") ? "Switch to Dark Mode" : "Switch to Light Mode";
    buttons.forEach(function(btn) {
      btn.textContent = icon;
      btn.setAttribute("aria-label", label);
    });
  }

  updateAllButtons();

  buttons.forEach(function(btn) {
    btn.addEventListener("click", function() {
      root.classList.toggle("light-mode");
      localStorage.setItem("theme", root.classList.contains("light-mode") ? "light" : "dark");
      updateAllButtons();
    });
  });

  // Mobile hamburger menu — works on any page with a nav and a #mobile-menu-toggle button
  var menuToggle = document.getElementById("mobile-menu-toggle");
  var nav = document.querySelector("nav");
  if (menuToggle && nav) {
    menuToggle.addEventListener("click", function() {
      menuToggle.classList.toggle("active");
      nav.classList.toggle("active");
      document.body.style.overflow = nav.classList.contains("active") ? "hidden" : "";
    });
    document.querySelectorAll(".nav-link").forEach(function(l) {
      l.addEventListener("click", function() {
        menuToggle.classList.remove("active");
        nav.classList.remove("active");
        document.body.style.overflow = "";
      });
    });
  }
})();
