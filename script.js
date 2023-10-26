const title = "Full-stack Developer";
const typedTitle = document.getElementById("typed-title").querySelector("h2");

let i = 0;

function typeTitle() {
  if (i < title.length) {
    typedTitle.textContent += title.charAt(i);
    i++;
  } else {
    // Если достигнут конец строки, сбрасываем счетчик и очищаем текстовое поле
    i = 0;
    typedTitle.textContent = "";
  }
}

// Вызываем функцию каждые 100 миллисекунд (или 1 секунда, в зависимости от ваших требований)
setInterval(typeTitle, 150);
