const categoriesList = document.querySelector("#categories");

// Nun categorías
const categoriesCount = categoriesList.querySelectorAll(".item").length;
console.log(`Number of categories: ${categoriesCount}`);

// Iterar  y obtener el nombre de la categoria y cantidad de elementos
categoriesList.querySelectorAll(".item").forEach((category) => {
  const title = category.querySelector("h2").textContent;
  const elementsCount = category.querySelectorAll("li").length;
  console.log(`Category: ${title}`);
  console.log(`Elements: ${elementsCount}`);
});
