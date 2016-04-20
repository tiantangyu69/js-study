/**
 * Created by lizhitao on 16-4-20.
 */
Object.defineProperties(Object.prototype, "extend", {// 定义Object.prototype.extend
    writable: true,
    enumerable: false,// 将其定义为不可枚举的
    configurable: true,
    value: function (o) {// 值就是这个对象
        var names = Object.getOwnPropertyNames(o);// 得到所有的自有属性，包括不可枚举属性
        for (var i = 0; i < names.length; i++) {// 遍历
            if (names[i] in this) continue;// 如果属性存在则跳过
            var desc = Object.getOwnPropertyDescriptor(o, names[i]);// 获得o的属性描述符
            Object.defineProperties(this, names[i], desc);// 用它给this创建一个属性
        }
    }
})