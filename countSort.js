function countingSort(arr) {
    // Write your code here
    let arr2 = [];
    let count = 0;
    for (let i = 0; i < 100; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] == i) {
                count++;
            }
            arr2[i] = count;
        }
        count = 0;
    }
    return arr2;
}

