//我们什么时候使用模块模式？

//如果我们必须创建一个对象并以某些数据进行初始化，同时还要公开一些能够访问这些私有数据的方法，那么我们这个时候就可以使用模块模式了。

//理解增强的模块模式

//增强的模块模式的使用场合是：适合那些单列必须是某种类型的实例，同时还必须添加某些属性或方法对其加以增强的情况。比如如下代码：
function CustomType() {
    this.name = "gaopeng";
};
CustomType.prototype.getName = function(){
    return this.name;
}
var application = (function(){
    // 定义私有
    var privateA = "aa";
    // 定义私有函数
    function A(){};

    // 实例化一个对象后，返回该实例，然后为该实例增加一些公有属性和方法
    var object = new CustomType();

    // 添加公有属性
    object.A = "aa";
    // 添加公有方法
    object.B = function(){
        return privateA;
    }
    // 返回该对象
    return object;
})();
//下面我们来打印下application该对象；如下：

console.log(application);



//继续打印该公有属性和方法如下：

console.log(application.A);// aa

console.log(application.B()); // aa

console.log(application.name); // gaopeng

console.log(application.getName());// gaopeng