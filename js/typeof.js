/**
 * Created by lizhitao on 16-4-7.
 */
console.log(typeof "sd");
console.log(typeof 1);
console.log(typeof 1.1);

var f = function () {
}

console.log(typeof f);
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof true);

// 块语句没有块级作用域，申明的变量并不是块级私有的
{
    var z = "this is block variable";
}

console.log(z);

console.log("========================================================");

var arr = new Array();
arr.push("aa");
arr.push("bb");
arr.push("cc");
arr.push("dd");

console.log(Array.prototype.forEach);

// IE不能兼容，IE中没有该方法
arr.forEach(function (ele) {
    console.log(ele);
})

for (var i in arr) {
    console.log(arr[i]);
}

var input = prompt("请输入数字：", 0);
console.log(input);

console.log("strict模式=================================+");
var hasStrictMode = (function () {
    "use strict";
    return this == undefined;
})();
console.log(hasStrictMode);

