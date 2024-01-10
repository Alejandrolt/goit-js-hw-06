const categoriesList = document.querySelector("#categories");

// Número de categorías
const categoriesCount = categoriesList.querySelectorAll(".item").length;
console.log(`Number of categories: ${categoriesCount}`);

// Iterar a través de cada categoría y obtener el nombre de la categoria y la cantidad de elementos
categoriesList.querySelectorAll(".item").forEach((category) => {
  const title = category.querySelector("h2").textContent;
  const elementsCount = category.querySelectorAll("li").length;
    console.log(`Category: ${title}`);
    console.log(`Elements: ${elementsCount}`)
});

