const maxNumber = (arr1, arr2) => {
  const arrCombine = [...arr1, ...arr2];

  return Math.max(...arrCombine);
};

const array1 = [1, 2, 3, 4, 5];
const array2 = [6, 7, 8, 9, 10];
console.log(maxNumber(array1, array2));
