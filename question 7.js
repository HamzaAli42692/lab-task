function first_last_10(nums)
{


  var end_pos = nums.length - 1;
  if(nums.length>=2){
  return nums[0] == 10 || nums[end_pos] == 10;
  }
}
console.log(first_last_10([10]));
console.log(first_last_10([1, 3, 5, 10]));
console.log(first_last_10([2, 4, 6]));