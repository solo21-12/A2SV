function bubbleSort(arr) {
    'use strict';

    process.stdin.resume();
    process.stdin.setEncoding('utf-8');

    let inputString = '';
    let currentLine = 0;

    process.stdin.on('data', function (inputStdin) {
        inputString += inputStdin;
    });

    process.stdin.on('end', function () {
        inputString = inputString.split('\n');

        main();
    });

    function readLine() {
        return inputString[currentLine++];
    }

    /*
     * Complete the 'countSwaps' function below.
     *
     * The function accepts INTEGER_ARRAY a as parameter.
     */

    function countSwaps(arr) {
        // Write your code here
        let temp, COUNT = 0;
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    COUNT++;
                }
            }
        }
        console.log("Array is sorted in " + COUNT + " swaps.")
        console.log("First Element: " + arr[0]);
        console.log("Last Element: " + arr[arr.length - 1]);
    }
    function main() {
        const n = parseInt(readLine().trim(), 10);

        const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

        countSwaps(a);
    }

}