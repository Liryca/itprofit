window.addEventListener("load", () => {
  const modal = document.getElementById("modal");
  const openModalBtn = document.getElementById("openModal");
  const closeModalBtn = document.getElementById("closeModal");

  openModalBtn.addEventListener("click", () => {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  });

  closeModalBtn?.addEventListener("click", () => {
    modal?.classList.remove("active");
    document.body.style.overflow = "";
  });

  modal?.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal?.classList.remove("active");
      document.body.style.overflow = "";
    }
  });
});
