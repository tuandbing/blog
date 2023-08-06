const str = 'hello';
// 注意indexOf如果匹配成功返回下标索引，匹配失败则返回-1
// 而不是0或者undefined，故使用下面代码时要注意
if (str.indexOf('le')) {
    console.log('hello');
}
// 使用includes方法返回的是true和false
console.log(str.includes('lo'));

// 学习正则表达式：https://www.runoob.com/regexp/regexp-syntax.html

// 字符串转换为数组的方法split
const str2 = '1234567890';
const strToArr = str2.split('');
console.log(strToArr);

// 数组变为字符串的方法join
console.log(strToArr.join(''));

console.log(str2.split('').join(':'));

// trim方法去除字符串两边的空格
const str3 = '   hello world   '
console.log(str3.trim())

// 实现将url转换为对象的形式
const url = 'https://www.baidu.com/s?wd=vue&rsv_spt=1&rsv_iqid=0xa5d93f9e0009e6e3&issp=1&f=8&rsv_bp=1&rsv_idx=2&ie=utf-8&tn=baiduhome_pg&rsv_enter=1&rsv_dl=tb&rsv_sug3=4&rsv_sug1=1&rsv_sug7=100&rsv_sug2=0&rsv_btype=i&prefixsug=vue&rsp=8&inputT=706&rsv_sug4=7723';

// 创建对象obj
const obj = {};

// 第一步：由问号分隔出来
const string = url.split('?')[1];

// 第二步：由&分隔处每组key和value
const arr = string.split('&');

// 第三步：循环获取每组的数据,注意，如果变量在for循环里面声明，只能使用var，不能使用const
for (var i = 0; i < arr.length; i++) {
    obj[arr[i].split('=')[0]] = arr[i].split('=')[1];
}

console.log(obj);

// 另一种实现方式
function urlParser(url) {
    const resultSet = {}
    url.split('?')[1].split('&').forEach(st => {
        const pair = st.split('=')
        resultSet[pair[0]] = pair[1]
    });
    return resultSet;
}

console.log(urlParser(url));