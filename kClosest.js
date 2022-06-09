//Written by Dawit Solo21
var kClosest = function (points, k) {
    let arr = [], arr1 = [], o;
    for (i = 0; i < points.length; i++) {
        arr[i] = Math.sqrt(Math.pow(points[i][0], 2) + Math.pow(points[i][1], 2));
    }
    let sortArray = [...arr].sort(function (a, b) { return a - b });
    for (i = 0; i < k; i++) {
        o = arr.indexOf(sortArray[i]);
        arr1[i] = points[o];
        arr[o] = "b";
        points[o] = "b";
    }
    return arr1;
};
