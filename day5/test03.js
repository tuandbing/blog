var arr = [2, 1, 4, 23, 77, 7];
arr.sort(function(a, b) {
    return a - b; //升序的顺序排列
});

function unique(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (newArr.indexOf(arr[i]) === -1) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
var demo = unique(['c', 'b', 'a', 's', 'a', 'c', 's', 'v', 'b']);
console.log(demo);