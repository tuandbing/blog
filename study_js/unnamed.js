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


// NaN
let a = 0/''; 

// NaN
let b = 0/'';

console.log(a);
console.log(b);

// false
console.log(a===b);

const m = new Map().set(a,'馒头');

// 馒头
console.log(m.get(a));
//馒头
console.log(m.get(b));

const m2 = new Map();
m2.set('myName','馒头');
m2.set('age',18);
m2.set('className','软件2203');

// Map(3) { 'myName' => '馒头', 'age' => 18, 'className' => '软件2203' }
console.log(m2);

// [ [ 'myName', '馒头' ], [ 'age', 18 ], [ 'className', '软件2203' ] ]
console.log([...m2]);

// [ 'myName', '馒头' ]
// [ 'age', 18 ]
// [ 'className', '软件2203' ]
for(let pair of m2.entries()){
    console.log(pair);
}

// [ 'myName', '馒头' ]
// [ 'age', 18 ]
// [ 'className', '软件2203' ]
for(let pair of m2[Symbol.iterator]()){
    console.log(pair);
}

// myName->馒头
// age->18
// className->软件2203
m2.forEach((val,key)=>console.log(`${key}->${val}`));   // 注意是`不是'
// m2.forEach((val, key) => console.log(`${key}->${val}`));

