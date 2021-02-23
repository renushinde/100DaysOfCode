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

//4. Write a function called range that accepts two integers as arguments and returns an array of integers starting with the first argument up to one less than the second argument.- The range function must be called with the first argument less than or equal to the second argument; otherwise, return the string "First argument must be less than second".

function range ( num1, num2) {
  let arr = [];
  if (num1 > num2){
    return "First argument must be less than second";
  } else {
    for (let i = num1; i < num2; i ++) {
      arr.push(i);
    }
  }
  return arr;
}

console.log("The range is: " + range(5,9));

//5. Reverse the string with its characters in uppercase.

function reverse (str) {
  let reverseStr = "";
  reverseStr = str.split("").reverse().join("");

  return reverseStr.toUpperCase();
}
console.log("The reversed Uppercased string is " +reverse("hello"));

/* Another way */

function reverseWithFor (str) {
let newStr = "";
for (let i = str.length -1; i >=0; i--) {
  newStr +=str[i];
}
return newStr.toUpperCase();

}

console.log(reverseWithFor("Hello"));