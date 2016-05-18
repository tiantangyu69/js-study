/**
 * Created by lizhitao on 16-5-13.
 */
var empty = [];// 没有元素的数组
var primes = [2, 3, 4, 5, 6, 7, 8, 9];// 有8个元素的数组
var misc = [1.1, "aa", true,];// 三种不同类型的元素和结尾的逗号

// 数组直接量中值可以是任何表达式
var base = 1024;
var table = [base, base + 1, base + 2];

var b = [[1, {x: 1, y: 2}], [2, {x: 3, y: 4}]];// 可以包含对象直接量或其他数组直接量

var count = [1, , 3, , , , , , 10];
var undefs = [, ,];// 数组的长度为2，数组直接量语法允许有可选的结尾的逗号
console.log("undefs length is: " + undefs.length);
console.log(count[1]);

// 调用构造函数 Array()
var a = new Array();// 等同于[]
var c = new Array(10);// 创建指定长度的数组

a.push("a");
a.push("b");
console.log(a);

a.pop();
console.log(a);


console.log(primes.length);
delete primes[3];
console.log(primes.length, ":" + primes[3]);

console.log(primes.join("#"));

var d = new Array(10);
console.log(d.join("*"));
console.log(primes.reverse());
console.log(primes.sort());
console.log(primes.sort(function (s, t) {
    return t - s;
}));

// 返回指定数组的片段或子数组
var a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(a.slice(0, 3));
console.log(a.slice(3));
console.log(a.slice(1, -1));
console.log(a.slice(-3, -2));

var a = [1, 2, 3];
console.log(a.concat(4, 5, 6));
console.log(a.concat([4, 5, 6]));
console.log(a.concat(4, [5, 6]));
console.log(a.concat([4, [5, 6]]));

// 在数组中插入或删除元素
var a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(a.splice(4), a);
var a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(a.splice(1, 2), a);
var a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(a.splice(1, 1), a);
var a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(a.splice(2, 0, 'a', 'b'), a);
var a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(a.splice(2, 2, [1, 2], 3), a);

var a = [];
a.unshift('a');
a.unshift('22');
console.log(a);
a.shift();
console.log(a);

// ECMAScript5
console.log(Array.isArray([]));
console.log(Array.isArray({}));

var isArray = Function.isArray || function (o) {
        return typeof o === "object" && Object.prototype.toString.call(o) === "[object Array]";
    };

console.log(isArray([]));
console.log(isArray({}));

// ECMAScript5 新增方法
var data = [1, 2, 3, 4, 5];
var sum = 0;
data.forEach(function (value) {
    sum += value;
});
console.log("sum:", sum);

data.forEach(function (v, i, a) {
    console.log(v, i, a);
});

var a = [1, 2, 3];
b = a.map(function (x) {
    return x * x;
});
console.log(b);

a = [5, 4, 3, 2, 1];
smallVlaues = a.filter(function (x) {
    return x < 3;
});
everyOther = a.filter(function (x, i) {
    return i % 2 == 0;
});
console.log("smallValues:", smallVlaues);
console.log("everyOther:", everyOther);

a = [1, 2, 3, 4, 5];
flag1 = a.every(function (x) {
    return x < 10;
});
flag2 = a.every(function (x) {
    return x % 2 === 0;
});
console.log(flag1, flag2);

flag3 = a.some(function (x) {
    return x % 2 === 0;
});
console.log(flag3);


var a = [1, 2, 3, 4, 5];
var sum = a.reduce(function (x, y) {
    return x + y;
}, 0);
console.log(sum);
var product = a.reduce(function (x, y) {
    return x * y;
}, 1);
console.log(product);