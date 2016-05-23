/**
 * Created by lizhitao on 16-5-18.
 */
// 立即执行函数
var aa = (function (x) {
    return x * x;
}(10));
console.log(aa);

bbb();

function bbb() {
    console.log("bbb");
}

var strict = function () {
    return !this;
};
console.log(strict());

var calculator = {
    op1: 1,
    op2: 2,
    add: function () {
        this.result = this.op1 + this.op2;
    }
};
calculator.add();
console.log(calculator.result);


var testThis = function () {
    this.a = 111;
    var self = this;
    testB();
    function testB() {
        console.log("bbbb", self.a);
    }
};
testThis();

var obj = function () {
};
obj.m = function () {
    console.log("m");
};
obj.prototype.add = function (x, y) {
    console.log(x + y);
}

obj.m();
new obj().add(11, 22);


var o = {
    m: function () {
        var self = this;
        console.log(this === o);
        f();
        function f() {
            console.log(this === o);
            console.log(self === o);
        }
    }
};
o.m();
console.log("------------------")
new o.m();


function arg(x, y, z) {
    console.log(this.x);
    console.log(arguments.length);
}

arg(3, 4, 5);
new arg(3, 4, 5);


function max() {
    var max = Number.NEGATIVE_INFINITY;
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}

console.log("max", max(1, 34, 234, 54, 36, 4, 457, 457, 2354, 568, 67, 456, 45674, 5));

var factorial = function (x) {
    if (x <= 1) return 1;
    console.log(arguments.callee);
    return x * arguments.callee(x - 1);
};
console.log(factorial(4));

function arrayCopy(/*array*/from, /*index*/fromStart, /*array*/to, /*index*/toStart, /*integer*/length) {

}

function easyCopy(args) {
    arrayCopy(args.from, args.fromStart || 0, args.to, args.toStart || 0, args.length);
}
var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var b = [];
easyCopy({from: a, to: b, length: 4});

