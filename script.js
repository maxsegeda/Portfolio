const title = "Full-stack Developer";
const typedTitle = document.getElementById("typed-title").querySelector("h2");

let i = 0;

function typeTitle() {
  if (i < title.length) {
    typedTitle.textContent += title.charAt(i);
    i++;
  } else {
    i = 0;
    typedTitle.textContent = "";
  }
}

setInterval(typeTitle, 150);
