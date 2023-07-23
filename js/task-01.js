const numberOfCategories = document.querySelectorAll("ul#categories li.item");
console.log(`Number of categories: ${numberOfCategories.length}`);

numberOfCategories.forEach((category) => {
    const categoryName=category.querySelector("h2");
    const categoryList=category.querySelectorAll("li");
    console.log(`Category: ${categoryName.innerText}`);
    console.log(`Elements: ${categoryList.length}`);
  });
