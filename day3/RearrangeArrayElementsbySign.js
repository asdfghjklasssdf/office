function rearrangeArray(nums) {
  const pos = [];
  const neg = [];
  
  for (let num of nums) {
    if (num > 0) pos.push(num);
    else neg.push(num);
  }

  const result = [];
  for (let i = 0; i < nums.length; i++) {
    result.push(pos[i]);
    result.push(neg[i]);
  }

  result.push(...pos.slice(minLength));
  result.push(...neg.slice(minLength));
  return result;
}

console.log(rearrangeArray([-3,-1,-2,-5,2,-4]));