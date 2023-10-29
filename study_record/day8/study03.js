const arr = [1,2,4,5,7,9];
const result = [];

// for(var i = 0;i<arr.length;i++){
//     const num = function(){return i};
//     result.push(num);
// }

// for(let i = 0;i<arr.length;i++){
//     const num = function(){return i};
//     result.push(num);
// }

// for(var i = 0;i<arr.length;i++){
//     function wrapper(i){return function(){return i;}};
//     result.push(wrapper(i));
// }

// 立即执行函数
for(var i = 0;i<arr.length;i++){
    const col = (function(i){return function(){return i;}})(i);
    result.push(col);
}

// for(var i = 0;i<result.length;i++){
//     console.log(result[i]());
// }

for(let i = 0;i<result.length;i++){
    console.log(result[i]());
}

// 函数currying,柯里化：
// 函数只有一个参数 y = f(x)
// 函数有多个参数 y = f(x,z,m,n)
// 将函数从多个参数转变为一个参数的过程叫做函数柯里化

// 示例
function addMulParam(a,b,c){
    return add(a)(b)(c);
}
function add(a){
    return function(b){
        return function (c){
            return a+b+c;
        }
    }
}
console.log(addMulParam(3,2,3));
