// 利用对象字面量创建对象
// var obj = {}; // 创建了一个空的对象

// var mantou = {
//     uname: '馒头',
//     sex: '男',
//     age: 19,
//     height: 165,
//     sayHi: function() {
//         console.log('Hi~');
//     }
// }

// 里面的属性或方法采用键值对的形式。
// 多个属性和方法之间使用逗号间隔
// 方法冒号后面跟的是一个匿名函数

// 调用对象的属性采取的是 对象名.属性名，或者 对象名['属性名']
// 调用对象的方法采取 对象名.方法名()
// console.log(mantou.uname);
// console.log(mantou['age']);
// mantou.sayHi();

//利用new Object创建对象
// var obj = new Object();
// obj.age = 19;
// obj.name = '馒头';
// obj.sayHi = function() {
//     console.log('Hi~');
// }
// console.log(obj.name);

// 利用构造函数创建对象
// 一般来说首字母大写
// function Star(name, age, sex) {
//     this.name = name;
//     this.age = age;
//     this.sex = sex;
// }
// var first = new Star('馒头', 19, '男');
// // 调用函数返回的是一个对象
// console.log(typeof first);
// console.log(first);

function Hero(name, type, blood) {
    this.name = name;
    this.type = type;
    this.blood = blood;

    this.attack = function(way) {
        console.log(this.name + '的攻击方式为：' + way);
    }
}

var hero1 = new Hero('廉颇', '力量型', 500);
var hero2 = new Hero('后羿', '射手型', 100);
hero1.attack('近战');
hero2.attack('远程');

for (var k in hero1) {
    console.log(k); // 输出属性名
    console.log(hero1[k]); // 输出属性值
}