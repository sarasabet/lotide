const flatten = (array) => {
  let flattenedArr = [];
  for (const element of array) {
    let isArr = false;// make a flag , the ele is by defult a num/str so it is not an array
    if (Array.isArray(element)) {
      isArr = true;// if the el is an array , change it  to true
      for (const el of element) {
        flattenedArr.push(el);
      }
    }
    if (!isArr) { //use this flag to avoid douplicatio
      flattenedArr.push(element);
    }
  }
  return flattenedArr;
};

module.exports = flatten;
console.log(flatten([1, 2, [3, 4], 5, [6]]));