const itemsOfCategories = document.querySelectorAll('.item');

console.log('Number of categories:', itemsOfCategories.length);

const firstItemOfCategories = itemsOfCategories[0];
const firstItemNameCategorie = firstItemOfCategories.firstElementChild;

console.log('Category:', firstItemNameCategorie.textContent);

const firstItemListElements = firstItemOfCategories.children;
console.log('Elements:', firstItemListElements[1].children.length);

const secondItemOfCategories = itemsOfCategories[1];
const secondItemNameCategorie = secondItemOfCategories.firstElementChild;

console.log('Category:', secondItemNameCategorie.textContent);

const secondItemListElements = secondItemOfCategories.children;
console.log('Elements:', secondItemListElements[1].children.length);

const thirdItemOfCategories = itemsOfCategories[2];
const thirdItemNameCategorie = thirdItemOfCategories.firstElementChild;

console.log('Category:', thirdItemNameCategorie.textContent);

const thirdItemListElements = thirdItemOfCategories.children;
console.log('Elements:', thirdItemListElements[1].children.length);
