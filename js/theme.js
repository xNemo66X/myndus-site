/* ============================================================
   Myndus Theme System v2.0
   Works across all pages (index, neural-mirage, finance, etc.)
   - Uses localStorage to persist theme
   - Syncs button icon and state on page load
   ============================================================ */

(function () {
  const root = document.documentElement;
  const body = document.body;
  const button = document.getElementById("theme-toggle");

  // --- 1. Applica il tema salvato appena la pagina viene caricata ---
  const savedTheme = localStorage.getItem("theme") || "dark";
  if (savedTheme === "light") {
    root.classList.add("light-mode");
    body.classList.add("light-mode");
  } else {
    root.classList.remove("light-mode");
    body.classList.remove("light-mode");
  }

  // --- 2. Imposta l'icona del pulsante in base al tema corrente ---
  const updateButtonIcon = () => {
    if (!button) return;
    if (root.classList.contains("light-mode")) {
      button.textContent = "☀️"; // Light mode attivo
      button.setAttribute("aria-label", "Switch to Dark Mode");
    } else {
      button.textContent = "🌙"; // Dark mode attivo
      button.setAttribute("aria-label", "Switch to Light Mode");
    }
  };

  updateButtonIcon(); // aggiorna subito all'avvio

  // --- 3. Ascolta i click sul pulsante per cambiare tema ---
  if (button) {
    button.addEventListener("click", () => {
      const isLight = root.classList.toggle("light-mode");
      body.classList.toggle("light-mode", isLight);

      localStorage.setItem("theme", isLight ? "light" : "dark");
      updateButtonIcon();
    });
  }
})();
