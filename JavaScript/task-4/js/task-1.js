function isEnoughCapacity(products, containerSize) {
  let totalCount = 0;
  const productCountArr = Object.values(products);
  for (let count of productCountArr) {
    totalCount += count;
  }
  return totalCount <= containerSize;
  // return Object.values(products).reduce((ac, el) => ac += el, 0) <= containerSize;
}

console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true

console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false

console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)); // true

console.log(isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)); // false
