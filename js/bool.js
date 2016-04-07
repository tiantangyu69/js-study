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