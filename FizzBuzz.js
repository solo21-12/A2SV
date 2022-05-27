var fizzBuzz = function (n) {
    let answer = [];
    let num = 1;
    for (i = 0; i < n; i++) {
        if (num % 3 == 0 && num % 5 == 0) {
            answer[i] = "FizzBuzz";
            num++;
        }
        else if (num % 3 == 0) {
            answer[i] = "Fizz";
            num++;
        }
        else if (num % 5 == 0) {
            answer[i] = "Buzz";
            num++;
        }
        else {
            answer[i] = num.toString();
            num++;
        }
    }
    return answer;
}
console.log(fizzBuzz(3));