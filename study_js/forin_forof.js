const arr = [2,4,6,8,10];

// 2,4,6,8,10
for (const num of arr){
    console.log(num);
}

// 0,1,2,3,4
for (const num in arr){
    console.log(num);
}

const obj = {
    name:'馒头',
    age:18,
    education:'collage'
}

// 报错
// for(const key of obj){
//     console.log(key);
// }


// name:馒头
// age:18
// education:collage
for(const key in obj){
    console.log(key+':'+obj[key]);
}