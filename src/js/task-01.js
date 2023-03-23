const categories = document.querySelectorAll(".item");

console.log(`Number of categories: ${categories.length}`);

for (let i = 0; i < categories.length; i++) {
  console.log(
    `Category: ${categories[i].firstElementChild.innerText}
    Elements: ${categories[i].lastElementChild.children.length}`
  );
}
