'use strict';

const args = process.argv;
let nums = args.slice(2);
const sumOfArgs = () => {
  let sum = parseInt(nums[0]) + parseInt(nums[1]);
  return sum;
};

console.log(sumOfArgs());