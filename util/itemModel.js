const openModal = document.getElementById("addNewItemBtn");
const closeModalButtons = document.querySelectorAll(
  "#closeItemModal, #closeItemModalFooter"
);
const modal = document.getElementById("itemModel");

// Open modal
openModal.addEventListener("click", () => {
  modal.style.display = "flex";
});

// Close modal
closeModalButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    modal.style.display = "none";
  });
});
