const categories = document.querySelectorAll("li.item");
console.log(`Number of categories: ${categories.length}\n`);

categories.forEach((cat) => {
  console.log(`\nCategory: ${cat.querySelector(`h2`).innerText}`);
  console.log(`Elements: ${cat.querySelectorAll("li").length}`);
});
