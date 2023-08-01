// 哈希表
// 存的是键值对
const hashMap = new Map();
// 存数据
hashMap.set('name', '馒头');
hashMap.set('color', { a: 'red' }); // 可以使用对象作为值
hashMap.set('passwd', 'cool');

// 取数据
console.log(hashMap.get('name'));
console.log(hashMap.get('color'));
console.log(hashMap.get('passwd'));

// 如果key值相同会被覆盖
hashMap.set('name', '花生');
console.log(hashMap.get('name'));

// 集合
// 存的是单一的值，里面的元素不会重复
const set = new Set([1, 1, 2, 3, 4]);
// 可以用来做基础数据类型的去重
console.log(set);