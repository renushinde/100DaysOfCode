// 1. Find second largest number in an array
function secondlargest(nums) {
  let largest = 0;
  let secondlargest = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > largest) {
      secondlargest = largest;
      console.log(secondlargest);
      largest = nums[i];
    } else if (nums[i] > secondlargest && nums[i] < largest) {
      secondlargest = nums[i];
    }
  }
  return secondlargest;
}
//calls the function on the array

console.log("second largest number is " + secondlargest([2, 3, 6, 6, 5]));


// 2. Given two already sorted lists, return new list of elements, sorted. 

let arr1 = ["artichoke", "asparagus", "celery"];
let arr2 = ["apple", "berry", "cherry"];

let arr3 = arr1.concat(arr2);
console.log("New array with sorted elements: " + arr3.sort());


// 3. Write a function called sumNumbers that accepts a single array of numbers and returns the sum of the numbers in the array.If the array is empty, return 0 (zero).

function sum (arr) {
  let total = 0;
  for (let i =0; i < arr.length; i++) {
    if(arr.length === 0) return false;
    else {
      total += arr[i];
    }
  }
  return total;
}
console.log("The sum of array is: " + sum([5,10]));