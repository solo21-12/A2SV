//Written By Dawit Solo21-12
var sortSentence = function (s) {
    let arr = [], o;
    let n = 0;
    let t = s.replace(/ /g, "");
    for (i = 0; i < t.length; i++) {
        if (isNaN(t.charAt(i))) {
            continue;
        }
        else {
            n = parseInt(t.charAt(i));
            o = s.indexOf(n);
            arr[n - 1] = s.slice(0, o);
            s = s.slice(o + 2);
        }
    }

    return arr.join(" ");
};
console.log(sortSentence("Myself2 Me1 I4 and3"));