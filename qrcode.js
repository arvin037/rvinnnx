// QR Code modal
const qrCode = document.getElementById("qrCode");
const qrModal = document.getElementById("qrModal");
const qrCloseBtn = qrModal.querySelector(".close");

// Show QR modal
qrCode.onclick = () => {
  qrModal.style.display = "flex";
};

// Close when clicking X
qrCloseBtn.onclick = () => {
  qrModal.style.display = "none";
};

// Close when clicking outside
window.addEventListener("click", (e) => {
  if (e.target === qrModal) {
    qrModal.style.display = "none";
  }
});
