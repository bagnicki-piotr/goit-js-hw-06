const sizeControl = document.querySelector("input#font-size-control");
const span = document.querySelector("span#text");
span.style.fontSize = `${sizeControl.value}px`;

sizeControl.addEventListener("input", () => {
  span.style.fontSize = `${sizeControl.value}px`;
});
