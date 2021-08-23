'use strict';

const args = process.argv;
let nums = args.slice(2);
const sum = () => {
  let sum = parseInt(nums[0]) + parseInt(nums[1]);
  return sum;
};

module.exports = sum;
console.log(sumOfArgs());