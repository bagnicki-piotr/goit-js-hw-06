const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const ingredientsList = document.querySelector("#ingredients");

const liArray = ingredients.map((ing) => {
  let li = document.createElement("li");
  li.textContent = ing;
  li.classList.add("item");
  return li;
});

ingredientsList.append(...liArray);
