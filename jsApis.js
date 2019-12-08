//判断是否是个数组

function isArray(arr) {
  return Object.prototype.toString.call(arr) === '[object Array]';
}


//判断是否是一个函数
function isFunction(fn) {
  return Object.prototype.toString.call(fn) === '[object Function]';
  return fn.constructor == Function;
  return fn instanceof Function;
  return typeof (fn) == Function;
}


//数组去重，只考虑数组中元素为数字或者字符串
function newarr(arr) {
  var arrs = [];
  for (var i = 0; i < arr.length; i++) {
    if (arrs.indexOf(arr[i]) == -1) {
      arrs.push(arr[i])
    }
  }
  return arrs;
}
//去除字符串空格(包含三种情况)


function trim(str) {
  return str.replace(/^[" "||"　"]*/, "").replace(/[" "|"　"]*$/, ""); // 去除头和尾
  return str.replace(/\s/g, ''); //去除所有空格
  return str.replace(/(\s*$)/g, ""); //去除右边所有空格
}


// 判断是否为邮箱地址

function isEmail(emailStr) {
  var reg = /^[a-zA-Z0-9]+([._-]*[a-zA-Z0-9]*)*@[a-zA-Z0-9]+.[a-zA-Z0-9{2,5}$]/;
  var result = reg.test(emailStr);
  if (result) {
    alert("ok");
  } else {
    alert("error");
  }
}


//判断是否为手机号
function isMobilePhone(phone) {
  var reg = /^1\d{10}$/;
  if (reg.test(phone)) {
    alert('ok');
  } else {
    alert('error');
  }
}

// 获取一个对象里面第一次元素的数量

function getObjectLength(obj) {
  var i = 0;
  for (var attr in obj) {
    if (obj.hasOwnProperty(attr)) {
      i++;
    }
  }

}


// 获取元素相对于浏览器窗口的位置，返回一个{x,y}对象


function getPosition(element) {
  var offsety = 0;
  offsety += element.offsetTop;
  var offsetx = 0;
  offsetx += element.offsetLeft;
  if (element.offsetParent != null) {
    getPosition(element.offsetParent);
  }
  return {
    Left: offsetx,
    Top: offsety
  };
}


// 判断某个字母在字符串中出现的次数

var str = 'To be, or not to be, that is the question.';
var count = 0;
var pos = str.indexOf('e');
while (pos !== -1) {
  count++;
  pos = str.indexOf('e', pos + 1);
}



// 计算出数组中出现次数最多的元素
// 在ana函数里先遍历一遍arr，
// 维护一个数组newArr 用于将所有数值相同的放在数组中的同一个块内。
// 另外一个数组unique 用于维护数值唯一，判断当前的item是否已存在于newArr中。
// 为了方便比较对象的数值相同，将所有item均转为string类型来比较。
// 再通过re函数遍历newArr并提取出length最大的项及数值（们）。
function getmostElement(arr) {

  let newArr = []; //新建空数组容器
  let unique = []; //维护数值唯一
  for (let i of arr) {
    i = JSON.stringify(i);
    //如果已有数值相同的元素存在
    if (unique.includes(i)) {
      newArr[unique.indexOf(i)].push(i)
    } else {
      let arr = [];
      arr.push(i);
      unique.push(i);
      newArr.push(arr)
    }
  }
  let maxCount = 0;
  let thisChar = [];
  for (let i of newArr) {
    if (i.length >= maxCount) {
      maxCount = i.length;
    }
  }
  for (let i of newArr) {
    if (i.length === maxCount) {
      thisChar.push(JSON.parse(i[0]));
    }
  }
  return {
    maxCount,
    thisChar
  }

}





//数组filter（搜索功能）

// 举例var fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];
function filterItems(query) {
  return fruits.filter(function (el) {
    return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
  })
}

// console.log(filterItems('ap')); // ['apple', 'grapes']



//深度克隆对象



function deepClone(origin, target) {
  var target = target || {},
    toStr = Object.prototype.toString,
    arrStr = "[object Array]";

  for (var prop in origin) {
    if (origin.hasOwnProperty(prop)) {
      if (origin[prop] != "null" && typeof (origin[prop]) == 'object') { //判断原型链
        target[prop] = (toStr.call(origin[prop]) == arrStr) ? [] : {} //判断obj的key是否是数组
        deepClone(origin[prop], target[prop]); //递归的方式
      } else {
        target[prop] = origin[prop];
      }
    }
  }
  return target

}


//使用childNodes获取元素节点
function cNodes(obj) {
  var arr = new Array();
  for (var i = 0; i < obj.childNodes.length; i++) {
    if (obj.childNodes[i].nodeType == 1) {
      arr.push(obj.childNodes[i]);
    } else {
      console.log("内层" + i + "不是元素节点");
    }
  }
  return arr;
}


//获取计算后的样式
function getStyle(obj, attr) {
  if (obj.currentStyle) {
    return obj.currentStyle[attr]; //IE
  } else {
    return getComputedStyle(obj, null)[attr];
  }
}


// html标签替换

function mystring(str) {
  var ret = str;
  while (ret.indexOf(">") >= 0 || ret.indexOf("<") >= 0) {
    ret = ret.replace("<", "&lt;").replace(">", "&gt;");
  }
  return ret;
}

// 时间拼接

function time() {
  var t = new Date();
  var n = t.getFullYear();
  var y = bianhuan(t.getMonth() + 1);
  var r = bianhuan(t.getDate());
  var s = bianhuan(t.getHours());
  var f = bianhuan(t.getMinutes());
  var m = bianhuan(t.getSeconds());
  var time = n + "-" + y + "-" + r + " " + s + ":" + f + ":" + m;
  return time;
}


// 返回刷新 

function CheckReload() {
  if (window.name != bencalie) {
    location.reload();
    window.name = bencalie;
  } else {
    window.name = '';
  }

}
// 获得两个日期之间相差的天数

//startDate="2018-01-10";
//  endDate="2018-01-15";
function getDays(date1, date2) {
  var date1Str = date1.split("-"); //将日期字符串分隔为数组,数组元素分别为年.月.日  
  //根据年 . 月 . 日的值创建Date对象  
  var date1Obj = new Date(date1Str[0], (date1Str[1] - 1), date1Str[2]);
  var date2Str = date2.split("-");
  var date2Obj = new Date(date2Str[0], (date2Str[1] - 1), date2Str[2]);
  var t1 = date1Obj.getTime();
  var t2 = date2Obj.getTime();
  var dateTime = 1000 * 60 * 60 * 24; //每一天的毫秒数  
  var minusDays = Math.floor(((t2 - t1) / dateTime)); //计算出两个日期的天数差  
  var days = Math.abs(minusDays); //取绝对值  
  return days;
}



// 生成六位不重复验证码函数

function sixVerifyCode() {
  //定义存储6位验证码的字符串
  var a = "";
  //定义计数器
  var count = 0;
  while (true) { //生成验证码
    var y = parseInt(Math.random() * 10);
    //不重复判断，将生成的验证码y和最后的a去对比
    if (a.indexOf(y) == -1) {
      a = a + y;
      count++;
    }
    if (count == 6) //判断验证码是不是6位
    {
      break;
    }
  }
  return a;
}


//解决js浮点误差
function strip(num, precision = 12) {
  return +parseFloat(num.toPrecision(precision));
}



//判断手机还是电脑访问


//flag返回值为true则说明是电脑客户端
function check() {
  var userAgentInfo = navigator.userAgent;
  var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod", "BlackBerry", "webOS");
  var flag = true;
  for (var v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false;
      break;
    }
  }
  return flag ? '电脑访问' : '移动设备访问';

}


// 页面禁止查看源代码函数
document.onkeydown = function () {
  var e = window.event || arguments[0];
  if (e.keyCode == 123) {
    alert('请尊重劳动成果！');
    return false;
  } else if ((e.ctrlKey) && (e.shiftKey) && (e.keyCode == 73)) {
    alert('请尊重劳动成果！');
    return false;
  } else if ((e.ctrlKey) && (e.keyCode == 85)) {
    alert('请尊重劳动成果！');
    return false;
  } else if ((e.ctrlKey) && (e.keyCode == 83)) {
    alert('请尊重劳动成果！');
    return false;
  }
}
document.oncontextmenu = function () {
  alert('请尊重劳动成果！');
  return false;
}

//阻止蒙层滑动

$('div').on("touchmove", function (e) {
  e.preventDefault();
})



//对象拼接成查询参数字符串
function getContactParamsString(paramMap) {
  var str = "";
  for (var key in paramMap) {
    str = str + key + "=" + paramMap[key] + "&";
  }
  return str;
}

//移动端为文档绑定触摸事件
document.ontouchmove = function () {
  $('.btngroups').css({
    'bottom': '-2rem',
    'transition': '1s',
  });
}
document.ontouchend = function () {
  $('.btngroups').css({
    'bottom': '0.2rem',
    'transition': '1s',
  });
}


// 2.数组去重
function unique1(arr) {
  return [...new Set(arr)]
}

function unique2(arr) {
  var obj = {};
  return arr.filter(ele => {
    if (!obj[ele]) {
      obj[ele] = true;
      return true;
    }
  })
}

function unique3(arr) {
  var result = [];
  arr.forEach(ele => {
    if (result.indexOf(ele) == -1) {
      result.push(ele)
    }
  })
  return result;
}

//3.字符串去重 
String.prototype.removeStrRepeat = function () {
  var obj = {},
    str = '',
    len = this.length;
  for (var i = 0; i < len; i++) {
    if (!obj[this[i]]) {
      str += this[i];
      obj[this[i]] = true;
    }
  }
  return str;
}


//6. 圣杯模式的继承
function inherit(Target, Origin) {
  function F() {};
  F.prototype = Origin.prototype;
  Target.prototype = new F();
  Target.prototype.constructor = Target;
  // 最终的原型指向
  Target.prop.uber = Origin.prototype;
}

//10. 获取DOM元素的所有子级DOM元素,解决浏览器的兼容问题
function myChildren(e) {
  var children = e.childNodes,
    arr = [],
    len = children.length;
  for (var i = 0; i < len; i++) {
    if (children[i].nodeType === 1) {
      arr.push(children[i])
    }
  }
  return arr;
}
//   14.获得滚动条的滚动距离(横纵)
function getScrollOffset() {
  if (window.pageXOffset) {
    return {
      x: window.pageXOffset,
      y: window.pageYOffset
    }
  } else {
    return {
      x: document.body.scrollLeft + document.documentElement.scrollLeft,
      y: document.body.scrollTop + document.documentElement.scrollTop
    }
  }
}


//    15.兼容获得视口的尺寸
function getViewportOffset() {
  if (window.innerWidth) {
    return {
      w: window.innerWidth,
      h: window.innerHeight
    }
  } else {
    // ie8及其以下
    if (document.compatMode === "BackCompat") {
      // 怪异模式
      return {
        w: document.body.clientWidth,
        h: document.body.clientHeight
      }
    } else {
      // 标准模式
      return {
        w: document.documentElement.clientWidth,
        h: document.documentElement.clientHeight
      }
    }
  }
}
// 16.获取任一元素的任意属性
function getStyle(elem, prop) {
  return window.getComputedStyle ? window.getComputedStyle(elem, null)[prop] : elem.currentStyle[prop]
}

// 17.绑定事件的兼容代码
function addEvent(elem, type, handle) {
  if (elem.addEventListener) { //非ie和非ie9
    elem.addEventListener(type, handle, false);
  } else if (elem.attachEvent) { //ie6到ie8
    elem.attachEvent('on' + type, function () {
      handle.call(elem);
    })
  } else {
    elem['on' + type] = handle;
  }
}


// 18.解绑事件
function removeEvent(elem, type, handle) {
  if (elem.removeEventListener) { //非ie和非ie9
    elem.removeEventListener(type, handle, false);
  } else if (elem.detachEvent) { //ie6到ie8
    elem.detachEvent('on' + type, handle);
  } else {
    elem['on' + type] = null;
  }
}

//   19.取消冒泡的兼容代码
function stopBubble(e) {
  if (e && e.stopPropagation) {
    e.stopPropagation();
  } else {
    window.event.cancelBubble = true;
  }
}

// 22.兼容getElementsByClassName方法
Element.prototype.getElementsByClassName = Document.prototype.getElementsByClassName = function (_className) {
  var allDomArray = document.getElementsByTagName('*');
  var lastDomArray = [];

  function trimSpace(strClass) {
    var reg = /\s+/g;
    return strClass.replace(reg, ' ').trim()
  }
  for (var i = 0; i < allDomArray.length; i++) {
    var classArray = trimSpace(allDomArray[i].className).split(' ');
    for (var j = 0; j < classArray.length; j++) {
      if (classArray[j] == _className) {
        lastDomArray.push(allDomArray[i]);
        break;
      }
    }
  }
  return lastDomArray;
}


// 25.封装自己的forEach方法
Array.prototype.myForEach = function (func, obj) {
  var len = this.length;
  var _this = arguments[1] ? arguments[1] : window;
  // var _this=arguments[1]||window;
  for (var i = 0; i < len; i++) {
    func.call(_this, this[i], i, this)
  }
}

// 26.封装自己的filter方法
Array.prototype.myFilter = function (func, obj) {
  var len = this.length;
  var arr = [];
  var _this = arguments[1] || window;
  for (var i = 0; i < len; i++) {
    func.call(_this, this[i], i, this) && arr.push(this[i]);
  }
  return arr;
}

//  27.数组map方法
Array.prototype.myMap = function (func) {
  var arr = [];
  var len = this.length;
  var _this = arguments[1] || window;
  for (var i = 0; i < len; i++) {
    arr.push(func.call(_this, this[i], i, this));
  }
  return arr;
}

// 28.数组every方法
Array.prototype.myEvery = function (func) {
  var flag = true;
  var len = this.length;
  var _this = arguments[1] || window;
  for (var i = 0; i < len; i++) {
    if (func.apply(_this, [this[i], i, this]) == false) {
      flag = false;
      break;
    }
  }
  return flag;
}

// 29.数组reduce方法
Array.prototype.myReduce = function (func, initialValue) {
  var len = this.length,
    nextValue,
    i;
  if (!initialValue) {
    // 没有传第二个参数
    nextValue = this[0];
    i = 1;
  } else {
    // 传了第二个参数
    nextValue = initialValue;
    i = 0;
  }
  for (; i < len; i++) {
    nextValue = func(nextValue, this[i], i, this);
  }
  return nextValue;
}



//  31.数组排序
// 快排 [left] + min + [right]
function quickArr(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  var left = [],
    right = [];
  var pIndex = Math.floor(arr.length / 2);
  var p = arr.splice(pIndex, 1)[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] <= p) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  // 递归
  return quickArr(left).concat([p], quickArr(right));
}


// 32.遍历Dom树
// 给定页面上的DOM元素,将访问元素本身及其所有后代(不仅仅是它的直接子元素)
// 对于每个访问的元素，函数讲元素传递给提供的回调函数
function traverse(element, callback) {
  callback(element);
  var list = element.children;
  for (var i = 0; i < list.length; i++) {
    traverse(list[i], callback);
  }
}


// 33.原生js封装ajax
function ajax(method, url, callback, data, flag) {
  var xhr;
  flag = flag || true; //是否异步请求,一般为默认
  method = method.toUpperCase();

  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else {
    xhr = new ActiveXObject('Microsoft.XMLHttp');
  }

  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      console.log(2)
      callback(xhr.responseText);
    }
  }

  if (method == 'GET') {
    var date = new Date(),
      timer = date.getTime();
    xhr.open('GET', url + '?' + data + '&timer' + timer, flag);
    xhr.send()
  } else if (method == 'POST') {
    xhr.open('POST', url, flag);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(data);
  }
}



// 34.异步加载script
function loadScript(url, callback) {
  var oscript = document.createElement('script');
  if (oscript.readyState) { // ie8及以下版本
    oscript.onreadystatechange = function () {
      if (oscript.readyState === 'complete' || oscript.readyState === 'loaded') {
        callback();
      }
    }
  } else {
    oscript.onload = function () {
      callback()
    };
  }
  oscript.src = url;
  document.body.appendChild(oscript);
}


// 35.cookie管理
var cookie = {
  set: function (name, value, time) {
    document.cookie = name + '=' + value + '; max-age=' + time;
    return this;
  },
  remove: function (name) {
    return this.setCookie(name, '', -1);
  },
  get: function (name, callback) {
    var allCookieArr = document.cookie.split('; ');
    for (var i = 0; i < allCookieArr.length; i++) {
      var itemCookieArr = allCookieArr[i].split('=');
      if (itemCookieArr[0] === name) {
        return itemCookieArr[1]
      }
    }
    return undefined;
  }
}

// 39.事件防抖
function debounce(handle, delay) {
  var timer = null;
  return function () {
    var _self = this,
      _args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      handle.apply(_self, _args)
    }, delay)
  }
}

// 40.事件节流
function throttle(handler, wait) {
  var lastTime = 0;
  return function (e) {
    var nowTime = new Date().getTime();
    if (nowTime - lastTime > wait) {
      handler.apply(this, arguments);
      lastTime = nowTime;
    }
  }
}


// 43.jsonp底层方法
function jsonp(url, callback) {
  var oscript = document.createElement('script');
  if (oscript.readyState) { // ie8及以下版本
    oscript.onreadystatechange = function () {
      if (oscript.readyState === 'complete' || oscript.readyState === 'loaded') {
        callback();
      }
    }
  } else {
    oscript.onload = function () {
      callback()
    };
  }
  oscript.src = url;
  document.body.appendChild(oscript);
}


// 44.获取url上的参数
function getUrlParam(sUrl, sKey) {
  var result = {};
  sUrl.replace(/(\w+)=(\w+)(?=[&|#])/g, function (ele, key, val) {
    if (!result[key]) {
      result[key] = val;
    } else {
      var temp = result[key];
      result[key] = [].concat(temp, val);
    }
  })
  if (!sKey) {
    return result;
  } else {
    return result[sKey] || '';
  }
}


//表单及常用验证
var formValidate = {
  //百家姓验证
  chineseFirstName: function (str) {
    var firstName = '赵钱孙李周吴郑王冯陈褚卫蒋沈韩杨朱秦尤许何吕施张孔曹严华金魏陶姜戚谢邹喻柏水窦章云苏潘葛奚范彭郎鲁韦昌马苗凤花方俞任袁柳酆鲍史唐费廉岑薛雷贺倪汤滕殷罗毕郝邬安常乐于时傅皮卞齐康伍余元卜顾孟平黄和穆萧尹姚邵湛汪祁毛禹狄米贝明臧计伏成戴谈宋茅庞熊纪舒屈项祝董梁杜阮蓝闵席季麻强贾路娄危江童颜郭梅盛林刁钟徐丘骆高夏蔡田樊胡凌霍虞万支柯昝管卢莫经房裘缪干解应宗丁宣贲邓郁单杭洪包诸左石崔吉钮龚程嵇邢滑裴陆荣翁荀羊于惠甄曲家封芮羿储靳汲邴糜松井段富巫乌焦巴弓牧隗山谷车侯宓蓬全郗班仰秋仲伊宫宁仇栾暴甘钭厉戎祖武符刘景詹束龙叶幸司韶郜黎蓟薄印宿白怀蒲邰从鄂索咸籍赖卓蔺屠蒙池乔阴郁胥能苍双闻莘党翟谭贡劳逄姬申扶堵冉宰郦雍郤璩桑桂濮牛寿通边扈燕冀郏浦尚农柴瞿阎充慕连茹习宦艾鱼容向古易慎戈廖庾终暨居衡步都耿满弘匡国文寇广禄阙东欧殳沃利蔚越夔隆师巩厍聂晁勾敖融冷訾辛阚那简饶空曾毋沙乜养鞠须丰巢关蒯相查后荆红游竺权逯盖益桓公万俟司马上官欧阳夏候诸葛闻人东方赫连皇甫尉迟公羊澹台公治宗政濮阳淳于单于太叔申屠公孙仲孙辕轩令狐钟离宇文长孙幕容鲜于闾丘司徒司空丌官司寇仉督子车颛孙端木巫马公西漆雕乐正壤驷公良拓拔夹谷宰父谷梁晋楚阎法汝鄢涂钦段干百里东郭南门呼延归海羊舌微生岳帅缑亢况后有琴梁丘左丘东门西门商牟佘佴佰赏南官墨哈谯笪年爱阳佟第五言福百家姓终百家姓以外的:万俟司马上官欧阳夏候诸葛闻人东方赫连皇甫尉迟公羊澹台公治宗政濮阳淳于单于太叔申屠公孙仲孙辕轩令狐钟离宇文长孙幕容鲜于闾丘司徒司空丌官司寇仉督子车颛孙端木巫马公西漆雕乐正壤驷公良拓拔夹谷宰父谷梁晋楚阎法汝鄢涂钦段干百里东郭南门呼延归海羊舌微生岳帅缑亢况后有琴梁丘左丘东门西门商牟佘佴佰赏南官墨哈谯笪年爱阳佟第五言福';
    var nameStr1 = str.substring(0, 1); //获取输入的第一个字
    var nameStr2 = str.substring(0, 2); //获取输入的前两个字
    var hasName = (firstName.indexOf(nameStr1) != -1) || (firstName.indexOf(nameStr2) != -1); //判断是否含有姓氏
    //判断是否属于百家姓
    if (hasName) {
      return true;
    } else {
      return false;
    }
  },
  number: function (number) {
    var pattern = /^[0-9]$/;
    if (pattern.test(number)) {
      return true;
    } else {
      return false;
    }
  },
  //中文字符验证
  chinese: function (str) {
    var pattern = /[\u4e00-\u9fa5]/;
    if (pattern.test(number)) {
      return true;
    } else {
      return false;
    }
  },
  //字母数字中文及下划线（一般用于用户名验证）
  wordsNumber_: function (str) {
    var pattern = /[A-Za-z0-9_\-\u4e00-\u9fa5]+/;
    if (pattern.test(str)) {
      return true;
    } else {
      return false;
    }
  },
  //英文验证
  english: function (str) {
    var pattern = /^[a-zA-Z]$/;
    if (pattern.test(str)) {
      return true;
    } else {
      return false;
    }
  },
  //电子邮箱验证
  email: function (str) {
    var pattern = /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/;
    if (pattern.test(str)) {
      return true;
    } else {
      return false;
    }
  },
  //手机号码验证非+86
  cellphone: function (number) {
    var pattern = /^1[3|4|5|7|8]\d{9}$/;
    if (pattern.test(number)) {
      return true;
    } else {
      return false;
    }
  },
  //电话验证
  tellphone: function (number) {
    var pattern = /[0-9-()（）]{7,18}/;
    if (pattern.test(number)) {
      return true;
    } else {
      return false;
    }
  },
  //网址验证
  website: function (str) {
    var pattern = /^((https|http|ftp|rtsp|mms)?:\/\/)[^\s]+/;
    if (pattern.test(str)) {
      return true;
    } else {
      return false;
    }
  },
  ipAddress: function (str) {
    var pattern = /(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)\.(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)\.(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)\.(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)/;
    if (pattern.test(str)) {
      return true;
    } else {
      return false;
    }
  },
  //身份证验证
  idCard: function (number) {
    var pattern = /\d{17}[\d|x]|\d{15}/;
    if (pattern.test(number)) {
      return true;
    } else {
      return false;
    }
  },
  //邮编验证
  postCodes: function (number) {
    var pattern = /\d{6}/;
    if (pattern.test(number)) {
      return true;
    } else {
      return false;
    }
  },
  //QQ验证
  tencentQQ: function (number) {
    var pattern = /[1-9]([0-9]{5,11})/;
    if (pattern.test(number)) {
      return true;
    } else {
      return false;
    }
  },

  //强密码验证(必须包含大小写字母和数字的组合，不能使用特殊字符，长度在8-16之间)
  strongPassword: function (str) {
    var pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/;
    if (pattern.test(str)) {
      return true;
    } else {
      return false;
    }
  },
  //日期格式验证 2016-01-01这种格式
  dataFormat: function (str) {
    var pattern = /^[1-9]{1}\d{3}-[0-1]{1}\d{0,1}-[0-1]{1}\d{0,1}/;
    if (pattern.test(str)) {
      return true;
    } else {
      return false;
    }
  }
}


//去除空格
// type   0：去除全部空格，1：去除左边空格，2：去除右边空格
function cTrim(sInputString, type) {
  var sTmpStr = ' ';
  var i = -1;

  if (type == 0 || type == 1) {
    while (sTmpStr == ' ') {
      ++i;
      sTmpStr = sInputString.substr(i, 1);
    }
    sInputString = sInputString.substring(i);
  }

  if (type == 0 || type == 2) {
    sTmpStr = ' ';
    i = sInputString.length;
    while (sTmpStr == ' ') {
      --i;
      sTmpStr = sInputString.substr(i, 1);
    }
    sInputString = sInputString.substring(0, i + 1);
  }
  return sInputString;
}


//获取设备号，安卓，ios，web

function getDeviceType() {
  var deviceType = 'WEB' //其他
  var u = navigator.userAgent
  var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1
  var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
  if (isAndroid) {
    deviceType = 'ANDROID'
  } else if (isiOS) {
    deviceType = 'IOS'
  }
  return deviceType
}
//身份证打码
function idCardMask(idCard = '') {
  return idCard.substr(0, 1) + idCard.slice(1, -4).replace(/\d/g, '*') + idCard.substr(-4)
}




// 金额的格式化,一般小数点儿两位

const formatNum = (s, n) => {

  n = n > 0 && n <= 20 ? n : 2
  s = parseFloat((s + '').replace(/[^\d\.-]/g, '')).toFixed(n) + ''
  var l = s.split('.')[0].split('').reverse(),
    r = s.split('.')[1]
  t = ''
  for (i = 0; i < l.length; i++) {
    t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? ',' : '')
  }
  return t.split('').reverse().join('') + '.' + r
}


// 13位时间戳转日期
var getLocalTime = function(nS) {
  //return new Date(parseInt(nS)).toLocaleString().replace(/:\d{1,2}$/,' ');
  var date = new Date(nS);
  var Y = date.getFullYear() + '/';
  var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '/';
  var D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' ';
  var h = date.getHours() + ':';
  var m = (date.getMinutes() < 10 ? '0' + (date.getMinutes()) : date.getMinutes()) + ' ';
  //var s = date.getSeconds();
  return Y + M + D + h + m;
}



//查找数组中重复的元素
  // 利用sort方法，先使用sort方法将数组排序，再来判断找出重复元素
  function res(arr) {

    var temp = [];

    arr.sort().sort(function (a, b) {

      if (a === b && temp.indexOf(a) === -1) {

        temp.push(a)

      }

    })

    return temp;



  }



   //事件句柄绑定与解绑//匿名函数无法解绑,需定义有函数名字的函数
  var eventHandle = {

    addEvent: function (element, type, handler) {
      if (element.addEventListener) {
        element.addEventListener(type, handler, false);
      } else if (element.attachEvent) {
        element.attachEvent('on' + type, handler);
      } else {
        element['on' + type] = handler;
      }
    },
    removeEvent: function (element, type, handler) {
      if (element.removeEventListener) { //非ie和非ie9
        element.removeEventListener(type, handler, false);
      } else if (elem.detachEvent) { //ie6到ie8
        element.detachEvent('on' + type, handler);
      } else {
        element['on' + type] = null;
      }
    }

  }
 
  function fn(){
    console.log('这是普通的点击事件')
  }

  eventHandle.addEvent(document, 'click', fn);
  eventHandle.addEvent(document, 'mousewheel', function(){console.log('非火狐浏览器的滚轮事件')});
  eventHandle.addEvent(document, 'DOMMouseScroll', function(){console.log('火狐浏览器的滚轮事件')});
  eventHandle.removeEvent(document,'click',fn)



  //事件句柄封装2
  //
  //
  var eventUtil = {
    //绑定事件
    addEventHandle:function(element,eventType,fn){
        if(element.addEventListener){//非IE
            element.addEventListener(eventType,fn,false);
        }else if(element.attachEvent){//IE
            element.attachEvent('on'+eventType,fn);
        }else{
            element['on'+eventType] = fn;//这里使用[]方式实现对象的属性添加，相当于.的作用
        }
    },
    //解绑事件,匿名函数无法解绑
    removeEventHandle:function(element,eventType,fn){
        if(element.removeEventListener){
            element.removeEventListener(eventType,fn,false);
        }else if(element.detachEvent){//IE,带'on'
            element.detachEvent('on'+eventType,fn);
        }else{
            element['on'+eventType] = fn;
        }

    },
    //获取事件源对象
    getEvent:function(event){
       return event?event:window.event;
    },
    //获取事件类型
    getType:function(event){
        return event.type;
    },
    //获取目标元素
    getTarget:function(event){
        return event.target||event.srcElement;
    },
    //阻止默认事件
    preventDefault:function(event){
        if(event.preventDefault){
            event.preventDefault();//非IE
        }else{
            event.returnValue = false;//针对IE
        }

    },
    //阻止冒泡
    stopPropagation:function(event){
        if(event.stopPrapagation){
            event.stopPropagation();//非IE
        }else{
            event.cancelBubble = true;//针对IE
        }
    }
}



 // 获得页面滚动距离的函数
function getScroll () {
  var scrollLeft = document.body.scrollLeft || document.documentElement.scrollLeft;
  var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
  return {
      scrollLeft: scrollLeft,
      scrollTop:  scrollTop
  }
  scrollLeft = null;
  scrollTop = null;
}


//获取pageX pageY
//
 //获取pagex, pageY
 //@param event
 //@returns {{pageX: (*|number), pageY: (*|number)}}
 
function getPageXY(event) {
    let pageX ,pageY;
    pageX = event.pageX || (event.clientX + (window.pageXOffset || document.body.scrollLeft || document.documentElement.scrollLeft))
    pageY = event.pageY || (event.clientY + (window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop))
    return {pageX, pageY};
}


//获取OffsetX，OffsetY


/**
 * 获取OffsetX，OffsetY
 * @param event
 * @returns {{offsetX: number, offsetY: number}}
 */
function getOffsetXY(event) {
    let elem = event.target || event.srcElement;
    return {
        offsetX: event.offsetX || (event.clientX - elem.getBoundingClientRect().left),
        offsetY: event.offsetY || (event.clientY - elem.getBoundingClientRect().top)
    }
}



// 获得选项option的value值
var obj=document.getElementById('mySelect');
var index=obj.selectedIndex; //序号，取当前选中选项的序号
var val = obj.options[index].value;
// 获得选项option的文本

var obj1=document.getElementById('mySelect');
var index1=obj.selectedIndex; //序号，取当前选中选项的序号
var val1 = obj.options[index].text;
