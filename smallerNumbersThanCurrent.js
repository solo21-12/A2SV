/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
    // Write your code here
    let arr2 = [];
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] > nums[j]) {
                count++;
            }
            arr2[i] = count;
        }
        count = 0;
    }
    return arr2;
};