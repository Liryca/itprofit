/******/ (() => { // webpackBootstrap
/*!******************************!*\
  !*** ./src/scripts/modal.js ***!
  \******************************/
document.addEventListener("DOMContentLoaded", function () {
  var modal = document.getElementById("modal");
  var openModalBtn = document.getElementById("openModal");
  var closeModalBtn = document.getElementById("closeModal");
  openModalBtn.addEventListener("click", function () {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  });
  closeModalBtn.addEventListener("click", function () {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  });
  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal === null || modal === void 0 || modal.classList.remove("active");
      document.body.style.overflow = "";
    }
  });
});
/******/ })()
;
//# sourceMappingURL=additional.bundle.js.map