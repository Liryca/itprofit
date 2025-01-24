document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const openModalBtn = document.getElementById("openModal");
  const closeModalBtn = document.getElementById("closeModal");

  openModalBtn.addEventListener("click", () => {
    let scrollBarWidth = window.innerWidth - document.body.clientWidth;

    scrollBarWidth > 0
      ? document.body.style.setProperty(
          "--scrollbar-width",
          `${scrollBarWidth}px`
        )
      : document.body.style.setProperty(
          "--scrollbar-width",
          `${scrollBarWidth}px`
        );

    modal.classList.add("active");
    document.body.classList.add("modal-open");
  });

  closeModalBtn.addEventListener("click", () => {
    modal.classList.remove("active");
    document.body.classList.remove("modal-open");
  });

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.classList.remove("active");
      document.body.classList.remove("modal-open");
    }
  });
});
