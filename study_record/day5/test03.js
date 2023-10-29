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

// 下面是一个简单的基本包装类型的例子
var str = 'andy';
console.log(str.length);

// 其实质是
// (1)把简单数据类型包装为复杂数据类型
var temp = new String('andy');
// (2)把临时变量的值给str
str = temp;
//(3)销毁这个临时变量
temp = null;

// 统计一个字符串中某个字符出现的次数，以及对应的下标
var str = 'abcabsakhaskdbaskdjxbkasdx';
var index = str.indexOf('b');
while (index !== -1) {
    console.log(index);
    index = str.indexOf('b', index + 1);
}


o = {

}
for (var i = 0; i < str.length; i++) {
    var chars = str.charAt(i);
    if (o[chars]) {
        o[chars]++;
    } else {
        o[chars] = 1;
    }
}
console.log(o);
var max = 0;
var ch = '';
for (var k in o) {
    if (max < o[k]) {
        max = o[k];
        ch = k;
    }
}
console.log(max);
console.log(ch);

function count(o, a) {
    if (o[a]) {
        o[a]++;
    } else {
        o[a] = 1;
    }
}
var j = {

}
for (var i = 0; i < str.length; i++) {
    count(j, str.charAt(i));
}
console.log(j);