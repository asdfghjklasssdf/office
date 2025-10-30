function Jump(nums) {
  let length = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > length) return false;    
    length = max(length, i + nums[i]);
  }
  return true;
}


console.log(Jump([2,3,1,1,4])); 
