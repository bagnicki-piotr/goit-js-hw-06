const decrButton = document.querySelector('button[data-action="decrement"]');
const incrButton = document.querySelector('button[data-action="increment"]');
const span = document.querySelector("span");
let value = 0;

decrButton.addEventListener("click", () => {
  value -= 1;
  span.textContent = value;
});

incrButton.addEventListener("click", () => {
  value += 1;
  span.textContent = value;
});
