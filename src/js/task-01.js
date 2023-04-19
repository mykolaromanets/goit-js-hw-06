const categories = document.querySelectorAll(".item");
console.log(`Number of categories: ${categories.length}`);

categories.forEach((category) => {
  const categoryTitle = category.firstElementChild.textContent;
  const categoryElement = category.children[1];
  const numberOfItems = categoryElement.children.length;
  console.log(`Category: ${categoryTitle}
    Elements: ${numberOfItems}`);
});
