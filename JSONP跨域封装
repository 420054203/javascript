function jsonp(config) {
    var options = config || {};   // 需要配置url, success, time, fail四个属性
    var callbackName = ('jsonp_' + Math.random()).replace(".", "");
    var oHead = document.getElementsByTagName('head')[0];
    var oScript = document.createElement('script');
    oHead.appendChild(oScript);
    window[callbackName] = function(json) {  //创建jsonp回调函数
        oHead.removeChild(oScript);
        clearTimeout(oScript.timer);
        window[callbackName] = null;
        options.success && options.success(json);   //先删除script标签，实际上执行的是success函数
    };
    oScript.src = options.url + '?' + callbackName;    //发送请求
    if (options.time) {  //设置超时处理
        oScript.timer = setTimeout(function () {
            window[callbackName] = null;
            oHead.removeChild(oScript);
            options.fail && options.fail({ message: "超时" });
        }, options.time);
    }
};
// 使用方法：
jsonp({
    url: '/b.com/b.json',
    success: function(d){
        //数据处理
    },
    time: 5000,
    fail: function(){
        //错误处理
    }       
});