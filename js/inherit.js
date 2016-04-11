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

// 继承不会改变原型的值
var o = {value: "don't change this value"}
var o1 = inherit(o);
o1.value = "i change my value";
console.log("o value is:", o.value);
console.log("o1 value is:", o1.value);

// 属性的继承
var obj = {};
obj.x = 1;
var p = inherit(obj);
p.y = 2;
var q = inherit(p);
q.z = 3;
var s = q.toString();
console.log(q.x, q.y, q.z, obj.z);

var o = {x: 1};
console.log("x" in o);// true,x是o的属性
console.log("y" in o);// false,y不是o的属性
console.log("toString" in o);// true,o继承toString属性

console.log(o.hasOwnProperty("x"));// true,o中有一个自有属性x
console.log(o.hasOwnProperty("y"));// false,o中不存在属性y
console.log(o.hasOwnProperty("toString"));// false,toString是继承属性

var o = inherit({y: 2});
o.z = 5;
console.log(o.propertyIsEnumerable("y"));// false,y是继承来的
console.log(o.propertyIsEnumerable("z"));// true,o有一个可枚举的自有属性z
console.log(Object.prototype.propertyIsEnumerable("toString"));// false，不可枚举

// 使用!==方法判断属性是否为undefined
var o = {x: 1};
console.log(o.x !== undefined);
console.log(o.y !== undefined);
console.log(o.toString !== undefined);

// in可以区分不存在的属性和存在但值为undefined的属性
var o = {x: undefined};// 属性被显式赋值为undefined
console.log(o.x !== undefined);// false,属性存在但值为undefined
console.log(o.y !== undefined);// false,属性不存在
console.log("x" in o);// true,属性存在
console.log("y" in o);// false,属性不存在
delete o.x;// 删除了x属性
console.log("x" in o);// false，属性不再存在
