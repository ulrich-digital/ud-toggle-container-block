/******/ (() => { // webpackBootstrap
/*!****************************!*\
  !*** ./src/js/frontend.js ***!
  \****************************/
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".ud-toggle-container").forEach(container => {
    const input = container.querySelector(".ud-toggle-toggle");
    if (!input) return;
    input.addEventListener("change", () => {
      const next = input.checked ? "two" : "one";
      container.setAttribute("data-active", next); // ⬅️ HIER wird es gesetzt!
    });
  });
});
/******/ })()
;
//# sourceMappingURL=frontend-script.js.map