const title = "JavaScript Developer";
const typedTitle = document.getElementById("typed-title").querySelector("h2");
let i = 0;
let isDeleting = false;

function typeTitle() {
  const currentText = typedTitle.textContent;

  if (!isDeleting && i <= title.length) {
    typedTitle.textContent = title.substring(0, i);
    i++;

    if (i === title.length + 1) {
      isDeleting = true;
      setTimeout(() => {
        isDeleting = true;
        typeTitle();
      }, 1000);
    } else {
      setTimeout(typeTitle, 180);
    }
  } else if (isDeleting && i >= 0) {
    typedTitle.textContent = title.substring(0, i);
    i--;

    if (i === 0) {
      isDeleting = false;
      typeTitle();
    } else {
      setTimeout(typeTitle, 60);
    }
  }
}

typeTitle();
