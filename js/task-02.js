const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsAdd=[];
ingredients.forEach((ingredient)=>{
  const ingredientsToCreate=document.createElement("li");
  ingredientsToCreate.classList.add("item");
  ingredientsToCreate.textContent = ingredient;
  ingredientsAdd.push(ingredientsToCreate);
});



const list=document.querySelector("ul#ingredients");
list.append(...ingredientsAdd);