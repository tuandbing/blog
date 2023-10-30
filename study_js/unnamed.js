// function add (num1,num2){
//     var sum = num1+num2;
//     return sum;
// }

// add(2,4);
// 报错，sum在函数外无法访问
// console.log(sum);



// function add (num1,num2){
//     sum = num1+num2;
//     return sum;
// }

// add(2,4);
// sum可以访问，sum变成了全局变量
// 在严格模式下，未经声明就初始化变量会报错
// console.log(sum);


// var myname = 'jack';
// 等价于下面两句代码
// myname = 'jack';
// var myname;
// console.log(myname);

const num1 = 999;

// 用科学计数法表示
// toPrecision()可以指定位数，但是存在四舍五入的情况
// 9.99e+2
console.log(num1.toExponential());
// 1e+3
console.log(num1.toPrecision(1));
// 1.0e+3
console.log(num1.toPrecision(2));
//999 
console.log(num1.toPrecision(3));

// isInteger判断是否是整数

// true
console.log(Number.isInteger(1));

//true
console.log(Number.isInteger(1.00));

//false
console.log(Number.isInteger(1.01));


