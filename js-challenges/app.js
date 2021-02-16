// 1. Find second largest number in an array
function secondlargest(nums){
    let largest = 0;
    let secondlargest = 0
    for (let i =0; i<nums.length; i++) {
      if(nums[i] > largest){
        secondlargest = largest;
        console.log(secondlargest);
          largest = nums[i];
      
      }
      else if(nums[i]>secondlargest && nums[i]<largest){
                secondlargest = nums[i];
           } 
    }
         return secondlargest;
     }
     //calls the function on the array
     console.log("second largest number is " + secondlargest([2,3,6,6,5]));