/**
 * Created by lizhitao on 16-4-7.
 */
console.log(1 == 1);

var s = "test";
s.len = 4;
var t = s.len;
console.log(t)

var a;
if (a == undefined)
    console.log("a is undefined");

console.log(null == undefined);

function test(o) {
    var i = 0;
    console.log(typeof o)
    if (typeof o == "object") {
        var j = 2;
        for (var k = 0; k < 10; k++) {
            console.log(k);
        }
        console.log(k);
    }
    console.log("j is : ", j);
}

test(new Object());

var scope = "global";
function f() {
    console.log(scope);
    var scope = "local";
    console.log(scope);
}
f();

var aaa = "aaa";
console.log(aaa);
console.log(delete aaa);

bbb = "bb";
console.log(bbb);
//console.log(delete bbb);

var ccc = "bb";

console.log(ccc == bbb);

var point = {x: 1, y: 2};
console.log("x" in point);

console.log("=========================================这是一道华丽的分割线================");
var data = [7, 8, 9];
console.log("0" in data);
console.log(1 in data);
console.log(3 in data);
console.log(7 in data);

console.log("instanceof 运算符");
var d = new Date();
console.log(d instanceof Date);
console.log(d instanceof Object);
console.log(d instanceof String);
console.log(Object.prototype);

console.log("eval 表达式");
console.log(eval(3 * (7 + 5)));