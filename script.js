function openModal(imgSrc, title) {
  document.getElementById("modal").style.display = "block";
  document.getElementById("modalImage").src = imgSrc;
  document.getElementById("caption").innerText = title;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
