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
