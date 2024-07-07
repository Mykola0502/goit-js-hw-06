const categories = document.querySelector("#categories");

console.log("Number of categories: ", categories.children.length);

[...categories.children].forEach((category) => {
  console.log("Category: ", category.firstElementChild.textContent);
  console.log(
    "Elements: ",
    category.firstElementChild.nextElementSibling.children.length
  );
});


// const itemsOfCategories = document.querySelectorAll('.item');

// console.log('Number of categories:', itemsOfCategories.length);

// /**
//  *    forEach
//  */
// itemsOfCategories.forEach(function (element, index) {
//   const ItemOfCategories = itemsOfCategories[index];
//   const ItemNameCategorie = ItemOfCategories.firstElementChild;

//   console.log('Category:', ItemNameCategorie.textContent);

//   const ItemListElements = ItemOfCategories.children;
//   console.log('Elements:', ItemListElements[1].children.length);
// });

/**
 *     for
 */
// for (let i = 0; i < itemsOfCategories.length; i += 1) {
//   const ItemOfCategories = itemsOfCategories[i];
//   const ItemNameCategorie = ItemOfCategories.firstElementChild;
//   console.log('Category:', ItemNameCategorie.textContent);
//   const ItemListElements = ItemOfCategories.children;
//   console.log('Elements:', ItemListElements[1].children.length);
// }

/**
 *     Тест методом ручного перебору
 *
 */
// const firstItemOfCategories = itemsOfCategories[0];
// const firstItemNameCategorie = firstItemOfCategories.firstElementChild;

// console.log('Category:', firstItemNameCategorie.textContent);

// const firstItemListElements = firstItemOfCategories.children;
// console.log('Elements:', firstItemListElements[1].children.length);

// const secondItemOfCategories = itemsOfCategories[1];
// const secondItemNameCategorie = secondItemOfCategories.firstElementChild;

// console.log('Category:', secondItemNameCategorie.textContent);

// const secondItemListElements = secondItemOfCategories.children;
// console.log('Elements:', secondItemListElements[1].children.length);

// const thirdItemOfCategories = itemsOfCategories[2];
// const thirdItemNameCategorie = thirdItemOfCategories.firstElementChild;

// console.log('Category:', thirdItemNameCategorie.textContent);

// const thirdItemListElements = thirdItemOfCategories.children;
// console.log('Elements:', thirdItemListElements[1].children.length);
