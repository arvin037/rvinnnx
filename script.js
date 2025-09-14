// Projects modal
function openModal(imageSrc, captionText) {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modalImage");
  const caption = document.getElementById("caption");

  modal.style.display = "block";
  modalImg.src = imageSrc;
  caption.innerText = captionText;
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}

// Close project modal when clicking outside image
window.addEventListener("click", (e) => {
  const modal = document.getElementById("modal");
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
