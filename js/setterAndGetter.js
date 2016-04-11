/**
 * Created by lizhitao on 16-4-11.
 */

/**
 * inhert() 返回一个继承自原型对象p的属性的新对象
 * 这里使用ECMAScript 5中的Object.create()函数（如果存在的话）
 * 如果不存在Object.create,则退化使用其他方法
 * @param p
 * @returns {*}
 */
function inherit(p) {
    if (p == null) throw TypeError();// p是一个对象，但不能是null
    if (Object.create)// 如果 Object.create() 存在
        return Object.create(p);// 直接使用

    var t = typeof p; // 否则进行进一步检测
    if (t !== "object" && t !== "function") throw TypeError();
    function f() {
    };// 定义一个空构造函数
    f.prototype = p;// 将其原型属性设置为p
    return new f();// 使用f()创建p的继承对象
}


var p = {
    // x，y是可读写的数据属性
    x: 1.0,
    y: 1.0,
    get r() {
        return Math.sqrt(this.x * this.x + this.y * this.y)
    },
    set r(newValue) {
        var oldValue = Math.sqrt(this.x * this.x + this.y * this.y);
        var ratio = newValue / oldValue;
        this.x *= ratio;
        this.y *= ratio;
    },
    get theta() {
        return Math.atan2(this.y, this.x)
    }
};

var q = inherit(p);
q.x = 1;
q.y = 1;
console.log(q.r);
console.log(q.theta);
q.r = 11;
console.log(q.r);
console.log(q.theta);


var serialNum = {
    $n: 0,
    get next() {
        return this.$n++;
    },
    set next(n) {
        if (n >= this.$n)
            this.$n = n;
        else
            throw "序列号的值不能比当前值小";
    }
};

var ran = inherit(serialNum);
console.log(ran.next);
console.log(ran.next);
console.log(ran.next);
ran.next = 100;
console.log(ran.next);
console.log(ran.next);
console.log(ran.next);

//ECMAScript 5属性特性API

//getOwnPropertyDescriptor
console.log(Object.getOwnPropertyDescriptor({x: 1}, "x"));
console.log(Object.getOwnPropertyDescriptor(serialNum, "next"));
console.log(Object.getOwnPropertyDescriptor(p, "theta"));
console.log(Object.getOwnPropertyDescriptor({}, "x"));
console.log(Object.getOwnPropertyDescriptor({}, "toString"));

//defineProperty
var o = {};
Object.defineProperty(o, "x", {value: 1, writable: true, enumerable: false, configurable: true});
// 属性存在但不可枚举
console.log(o.x);
console.log(Object.keys(o));
Object.defineProperty(o, "x", {writable: false});// 将x变为只读
o.x = 2;// 修改失败，但不报错，严格模式下抛出类型错误异常
console.log(o.x);
Object.defineProperty(o, "x", {value: 2});// 属性是可配置的，可通过改方法改变x的值
console.log(o.x);
Object.defineProperty(o, "x", {// 修改为存取器属性
    get: function () {
        return 100;
    }
});
console.log(o.x);
