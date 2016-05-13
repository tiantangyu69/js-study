/**
 * Created by lizhitao on 16-4-20.
 * 获取类属性
 */
function classof(o) {
    if (o == null) return "Null";
    if (o == undefined) return "Undefined";
    return Object.prototype.toString.call(o).slice(8, -1);
}

var test = function () {
};

console.log(classof(test));
console.log(classof(new test()));
