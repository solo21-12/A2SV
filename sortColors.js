var sortColors = function (arr) {
    for (let i = 1; i < arr.length; i++) {
        j = i - 1;
        value = arr[i];
        while (j >= 0 && arr[j] > value) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = value;
    }
    return arr;
}
console.log(sortColors([2, 0, 1]));
