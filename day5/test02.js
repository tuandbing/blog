// Math数学对象，不是一个构造函数，我们不需要new来调用，而是直接使用里面的属性和方法即可
console.log(Math.PI); // 一个属性 圆周率
console.log(Math.max(1, 99, 23));
console.log(Math.max(-1, -10));
console.log(Math.max(1, 99, '馒头')); // NaN
console.log(Math.max()); // -Infinity

// 利用对象封装自己的数学函数，里面有PI 最大值 最小值
var myMath = {
    PI: 3.1415926535,
    max: function() {
        var max = arguments[0];
        for (var i = 1; i < arguments.length; i++) {
            if (arguments[i] > max) {
                max = arguments[i];
            }
        }
        return max;
    },
    min: function() {
        var min = arguments[0];
        for (var i = 1; i < arguments.length; i++) {
            if (arguments[i] < min) {
                min = arguments[i];
            }
        }
        return min;
    }
}


console.log(myMath.max(1, 2, 3, 4, 23, 12));

//得到一个两数之间的随机整数
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

//得到一个两数之间的随机整数，包括两个数在内
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 猜数字游戏
// var answer = getRandomIntInclusive(0, 100);
// var count = 0;
// while (true) {
//     count++;
//     var num = prompt('请输入您猜的数字');
//     if (num > answer) {
//         alert('您猜的数字太大啦');
//     } else if (num == answer) {
//         alert('恭喜您猜对啦,一共猜了' + count + '次');
//         break;
//     } else {
//         alert('您猜的数字太小啦');
//     }
// }

var now = new Date();
console.log(now);
console.log(Date('2023-7-24'));
console.log(now.getDate());

var date = new Date();
console.log(date.valueOf());
console.log(date.getTime());

var date1 = +new Date(); //返回的就是总的毫秒数
console.log(date1);

console.log(Date.now())

function countDown(time) {
    var nowTime = +new Date();
    var inputTime = +new Date(time);
    var times = (inputTime - nowTime) / 1000; // times是剩余时间总的秒数
    var day = parseInt(times / 60 / 60 / 24);
    day = day < 10 ? '0' + day : day;
    var hour = parseInt(times / 60 / 60 % 24);
    hour = hour < 10 ? '0' + hour : hour;
    var m = parseInt(times / 60 % 60);
    m = m < 10 ? '0' + m : m;
    var s = parseInt(times % 60);
    s = s < 10 ? '0' + s : s;
    return day + '天' + hour + '时' + m + '分' + s + '秒';
}
console.log(countDown('2023-7-24 18:0:0'));

var arr = [1, 2, 3]; //利用字面量方式创建数组
var arr2 = new Array(); //创建了一个空数组
var arr3 = new Array(2); //创建了一个长度为2的数组
var arr4 = new Array(2, 3); // 等价于 var arr4 = [2, 3];
if (arr instanceof Array) {

}
// 或者使用下面方法
Array.isArray(arr)