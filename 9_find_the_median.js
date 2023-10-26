// Find the Median
// Expected output => 15
const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];

nums.sort();
if(nums.length%2 == 0)
  console.log((nums[Math.floor(nums.length/2)]+nums[Math.floor(nums.length/2)+1])/2);
else
  console.log(nums[Math.floor(nums.length/2)]);
