(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-loc-open]"),
    closeModalBtn: document.querySelector("[data-loc-close]"),
    modal: document.querySelector("[data-loc]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();