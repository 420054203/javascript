1.  ios new时间对象,需要用逗号隔开传日期的方式,
//   不支持 new Date('2019-03-01 08:00:00') 格式;
// 支持以下两种方式：
new Date(date.replace(/-/g,'/'))
var  time = new Date(2019,07,04,00,00)


2.h5底部输入框被键盘遮挡问题

方案一:

让dom元素出现在可见视图的顶部或底部
document.querySelector('#inputId').scrollIntoView();
 
//只要在input的点击事件，或者获取焦点的事件中，加入这个api就好了


3.iOS 系统中文输入法输入英文时,
字母之间可能会出现一个六分之一空格,
可以在进行value提交时用正则过滤再提交  如:
this.value = this.value.replace(/\u2006/g, '');

4.在ios和andriod中,audio元素和video元素在无法自动播放
应对方案：触屏即播

$('html').one('touchstart',function(){
    audio.play()
})

5. 往返缓存问题
点击浏览器的回退，有时候不会自动执行js，特别是在mobilesafari中。这与往返缓存(bfcache)有关系。

解决方法 ：window.onunload = function(){};




6. 在移动端修改难看的点击的高亮效果，iOS和安卓下都有效：
 

* {-webkit-tap-highlight-color:transparent}


7. 在各移动端浏览器中经常会出现这种页面高度100%的渲染错误,
页面低端和系统自带的导航条重合了,
高度的不正确我们需要重置修正它，通过javascript代码重置掉：

document.documentElement.style.height = window.innerHeight + 'px';


8.使用 $(window).resize(...) 无效。
可能由于框架或插件原因，有时候$(window).resize(...)不生效。

解决方案：使用 window.onresize = function () {...} 即可。


9.IOS中input键盘事件keyup、keydown、keypress支持不是很好, 用input监听键盘keyup事件，在安卓手机浏览器中是可以的，但是在ios手机浏览器中用输入法输入之后，并未立刻相应keyup事件，只有在通过删除之后才可以响应
方法：可以用html5的oninput事件去代替keyup

<input type="text" id="testInput">
<script type="text/javascript">
  document.getElementById('input').addEventListener('input', function(e){
    var value = e.target.value;
  });
</script>

10.移动端点透问题

案例如下：
<div id="haorooms">点头事件测试</div>
<a href="www.baidu.net">www.baidu.com</a>

div是绝对定位的蒙层,并且z-index高于a。而a标签是页面中的一个链接，我们给div绑定tap事件：
$('#haorooms').on('tap',function(){
    $(this).hide();
});

我们点击蒙层时 div正常消失，但是当我们在a标签上点击蒙层时，发现a链接被触发，这就是所谓的点透事件。
原因：
touchstart 早于 touchend 早于click。 亦即click的触发是有延迟的，这个时间大概在300ms左右，也就是说我们tap触发之后蒙层隐藏， 此时 click还没有触发，300ms之后由于蒙层隐藏，我们的click触发到了下面的a链接上。
解决：

尽量都使用touch事件来替换click事件。例如用touchend事件(推荐)。
用fastclick，https://github.com/ftlabs/fastclick

用preventDefault阻止a标签的click
延迟一定的时间(300ms+)来处理事件 （不推荐）
以上一般都能解决，实在不行就换成click事件。

下面介绍一下touchend事件，如下：
$("#haorooms").on("touchend",function(event) {
   event.preventDefault();
 });


11.移动端项目要求是全屏滚动，用的是 fullpage，上下滚动时安卓正常，苹果手机浏览器上下滚动时会出现底色问题

解决方案：
 document.body.addEventListener('touchmove', function (e) {
        e.preventDefault(); //阻止默认的处理方式(阻止下拉滑动的效果)
    }, {passive: false});
