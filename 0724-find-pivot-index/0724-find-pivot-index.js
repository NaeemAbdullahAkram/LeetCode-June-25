/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
   let totalSum=findSum(nums);
   let leftSum=0
   for(let i=0;i<nums.length;i++){
    let rightSum=totalSum-leftSum-nums[i]

    if(rightSum==leftSum){
        return i
    }
    leftSum+=nums[i]

   }
   return -1

};

function findSum(array){
    let sum=0
    for(let i=0;i<array.length;i++){
      sum=sum+array[i]
    }
    return sum;
}