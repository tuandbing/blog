// padStart()和padEnd()方法复制,填充字符,默认是空格
const value = 'foo';
// foo
console.log(value.padEnd(6));
//    foo
console.log(value.padStart(6));
// foo...
console.log(value.padEnd(6,'.'));
// ...foo
console.log(value.padStart(6,'.'));

// 如果所给长度小于字符长度，则会返回原始字符串

// foo
console.log(value.padStart(2));

// 将字符串分隔为数组
// [ 'f', 'o', 'o' ]
console.log([...value]);

// 数组的from方法
// 字符串被拆分为单字符数组

// [ 'm', 'a', 't', 'c', 'h' ]
console.log(Array.from('match'));

const arr = [1,,,,5];

// [ 6, <3 empty items>, 6 ]
console.log(arr.map(()=> 6));


// 1----5
console.log(arr.join('-'));

// 判断是否是数组
console.log(arr instanceof Array);

const arr2 = [1,2,3,4,5,6]

// [ 0, 1, 2, 3, 4, 5 ]
const arrKeys = Array.from(arr2.keys());

// [ 1, 2, 3, 4, 5, 6 ]
const arrValues = Array.from(arr2.values());

// [ [ 0, 1 ], [ 1, 2 ], [ 2, 3 ], [ 3, 4 ], [ 4, 5 ], [ 5, 6 ] ]
const arrEntrues = Array.from(arr2.entries());


console.log(arrKeys);
console.log(arrValues);
console.log(arrEntrues);

// 0:1
// 1:2
// 2:3
// 3:4
// 4:5
// 5:6
for(const [id,element] of arrEntrues){
    console.log(id+':'+element);
}

// 使用fill填充数组
const zeroes = [0,0,0,0,0,0];

// 用5填充数组
// [ 5, 5, 5, 5, 5, 5 ]
zeroes.fill(5);


// 用6填充索引在[3,5)的元素
// [ 5, 5, 5, 6, 6, 5 ]
zeroes.fill(6,3,5)

// fill静默忽略超出数组边界、零长度及方向相反的索引范围
// 索引过低
zeroes.fill(1,-10,-6);

// 索引过大
zeroes.fill(1,12,15);

// 索引反向
zeroes.fill(1,34,22);

// 索引部分可用，则填充可用部分
// [ 5, 5, 5, 1, 1, 1 ]
zeroes.fill(1,3,12); 
console.log(zeroes);

// copywithin() 按照指定范围浅复制数组中的部分内容，然后将它们插入到指定索引开始的位置

let ints,
res = () => ints=[0,1,2,3,4,5,6,7,8,9];
res();

// 从ints复制索引0开始的内容，插入到索引5开始的位置
// [
//     0, 1, 2, 3, 4,
//     0, 1, 2, 3, 4
// ]
ints.copyWithin(5);
res();

// 从ints中复制索引5开始的内容，插入到索引0开始的位置
// [
//     0, 1, 2, 3, 4,
//     0, 1, 2, 3, 4
// ]
ints.copyWithin(0,5)
res();

// 从ints中复制索引0开始到索引3结束的内容，插入到索引4开始的地方
// [
//     0, 1, 2, 3, 0,
//     1, 2, 7, 8, 9
// ]
ints.copyWithin(4,0,3);
console.log(ints);

let colors = ['red','blue','green'];

// red,blue,green
console.log(colors.toString());

// Object [Array Iterator] {}
console.log(colors.values());

// [ 'red', 'blue', 'green' ]
console.log(colors);

let person1 = {
    toLocaleString(){
        return '馒头';
    },
    toString(){
        return 'ab';
    }
}

let person2 = {
    toLocaleString(){
        return '旺仔';
    },
    toString(){
        return 'sb';
    }
}

let people = [person1,person2];

// ab,sb
console.log(people.toString());

// 馒头,旺仔
console.log(people.toLocaleString());

const array1 = [5,1,2,10,78,23];

// sort会将数值转换为字符串形式重新排序，故多数情况无法正确排序
// [ 1, 10, 2, 23, 5, 78 ]
// console.log(array1.sort());

// 可以接收一个比较函数，判断哪个值应该在前面
// 升序函数
function compare1(value1,value2){
    if(value1 < value2){
        return -1;
    }else if(value1 > value2){
        return 1;
    }else{
        return 0;
    }
}

// 降序函数
function compare2(value1,value2){
    if(value1 < value2){
        return 1;
    }else if(value1 > value2){
        return -1;
    }else{
        return 0;
    }
}

// [ 1, 2, 5, 10, 23, 78 ]
// console.log(array1.sort(compare1));

// 也可以使用箭头函数实现

// [ 78, 23, 10, 5, 2, 1 ]
// console.log(array1.sort((a,b) => a < b ? 1 : a > b ? -1 : 0));

// [ 1, 2, 5, 10, 23, 78 ]
// console.log(array1.sort((a,b) => a < b ? -1 : a > b ? 1 : 0));

// 如果元素是数值，也可以直接用减法,因为比较函数就是要返回小于0，0，大于0的数值

// [ 78, 23, 10, 5, 2, 1 ]
// console.log(array1.sort((a,b) => b-a));

// [ 1, 2, 5, 10, 23, 78 ]
console.log(array1.sort((a,b) => a-b));


// find()和findIndex()
const people2 = [
    {
        name:'馒头',
        age:19
    },
    {
        name:'花生',
        age:22
    }
]
// { name: '馒头', age: 19 }
console.log(people2.find((element,index,array) => element.age<20));

// 0
console.log(people2.findIndex((element,index,array) => element.age<20));

let testarr = arr2[Symbol.iterator]();

console.log(testarr.next());
console.log(testarr.next());
console.log(testarr.next());
console.log(testarr.next());
console.log(testarr.next());
console.log(testarr.next());
console.log(testarr.next());


function *test(){
    yield 'foo';
    yield 'push';
    yield '馒头'
}

// foo
// push
// 馒头
for(let i of test()){
    console.log(i);
}

// { value: 'foo', done: false }
// { value: 'push', done: false }
// { value: '馒头', done: false }
// { value: undefined, done: true }
let testarr2 = test();
console.log(testarr2.next());
console.log(testarr2.next());
console.log(testarr2.next());
console.log(testarr2.next());

function* generatorFn(initial) { 
    console.log(initial); 
    console.log(yield); 
    console.log(yield); 
} 
let generatorObject = generatorFn('foo'); 
generatorObject.next('bar'); 
generatorObject.next('花生');  
generatorObject.next('qux');  