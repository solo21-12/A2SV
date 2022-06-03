var targetIndices = function (nums, target) {
    let arr = nums.sort(function (a, b) { return a - b });
    let arr2 = [], n = 0;
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] == target) {
            arr2[n] = j;
            n++;
        }
    }
    return arr2;
};