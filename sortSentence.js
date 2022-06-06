var sortSentence = function (s) {
    let arr = [], o, arr2;
    let n = 0;
    let t = s.replace(/ /g, "");
    for (i = 0; i < t.length; i++) {
        if (isNaN(t.charAt(i))) {
            continue;
        }
        else {
            n = parseInt(t.charAt(i));
            if (isNaN(n)) {
                continue;
            }
            else {
                o = s.indexOf(n);
                arr[n - 1] = s.slice(0, o);
                s = s.slice(o + 2);
            }
        }
    }
    arr2 = arr.join(" ");
    return arr2.trim();
}
console.log(sortSentence("Myself2 Me1 I4 and3"));