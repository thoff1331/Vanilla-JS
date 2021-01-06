const findSum = inputArray => inputArray.reduce((acc, val) => acc + val);
const maximumSum = (arr = [], num = 1) => {
   let left = 0, right = left + num;
   let sum = findSum(arr.slice(left, right));
   for(; right <= arr.length; right++, left++){
      sum = Math.max(findSum(arr.slice(left, right)), sum);
   };
   return sum;
};
maximumSum([2, 3, 5, 1, 6],3)