const array = [1, 2, 3, 4, 5];
const callback = (ele, index, array) => console.log(ele, index, array);
array.forEach(callback);
// array.forEach((item) => console.log(item))



function handle(item) {
    return item + 1;
}


const newArr = array.map(handle);
console.log(newArr);

array.map((item) => item + 1).forEach(item => console.log(item))

// 数组的includes方法，查看数组中是否包含某元素
console.log(array.includes(2));

// 将数组中的元素拼接起来可以使用join方法，中间添加参数为分隔符，不需要可以使用''
console.log(array.join(':'));