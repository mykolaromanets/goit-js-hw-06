const categoriesLists = document.querySelectorAll(".item");
console.log(`Number of categories:${categoriesLists.length}`);

categoriesLists.forEach((item) => {
  const heading = item.querySelector("h2");
  const listItems = item.querySelectorAll("li");
  console.log(`Category: ${heading.textContent}
Elements: ${listItems.length}`);
});
