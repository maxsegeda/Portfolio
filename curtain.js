document.addEventListener("DOMContentLoaded", function () {
  const overlay = document.getElementById("overlay");
  const closeButton = document.getElementById("closeButton");

  overlay.style.display = "flex";

  closeButton.addEventListener("click", function () {
    overlay.style.display = "none";
  });
});
