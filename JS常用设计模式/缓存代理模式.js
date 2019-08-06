
//缓存代理的含义就是对第一次运行时候进行缓存，当再一次运行相同的时候，
//直接从缓存里面取，这样做的好处是避免重复一次运算功能，如果运算非常复杂的话，对性能很耗费，
//那么使用缓存对象可以提高性能;我们可以先来理解一个简单的缓存列子，就是网上常见的加法和乘法的运算。代码如下：
// 计算乘法
var mult = function(){
    var a = 1;
    for(var i = 0,ilen = arguments.length; i < ilen; i+=1) {
        a = a*arguments[i];
    }
    return a;
};
// 计算加法
var plus = function(){
    var a = 0;
    for(var i = 0,ilen = arguments.length; i < ilen; i+=1) {
        a += arguments[i];
    }
    return a;
}
// 代理函数
var proxyFunc = function(fn) {
    var cache = {};  // 缓存对象
    return function(){
        var args = Array.prototype.join.call(arguments,',');
        if(args in cache) {
            return cache[args];   // 使用缓存代理
        }
        return cache[args] = fn.apply(this,arguments);
    }
};
var proxyMult = proxyFunc(mult);
console.log(proxyMult(1,2,3,4)); // 24
console.log(proxyMult(1,2,3,4)); // 缓存取 24

var proxyPlus = proxyFunc(plus);
console.log(proxyPlus(1,2,3,4));  // 10
console.log(proxyPlus(1,2,3,4));  // 缓存取 10