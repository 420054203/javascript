判断一个字符串中出现次数最多的字符，统计这个次数
···
var str = 'asdfssaaasasasasaa';
var json = {};

for (var i = 0; i < str.length; i++) {
if(!json[str.charAt(i)]){//如果json中没有该属性,就让该属性成立并给其赋值为1.
json[str.charAt(i)] = 1;
}else{
json[str.charAt(i)]++;//否则如果已存在该属性,就让该属性的值变为2或者更多
}
};
var iMax = 0;//初始最大次数
var iIndex = '';//初始一个最多的字符
for(var i in json){
if(json[i]>iMax){//如果json对象里的每个属性的值大于iMax,就让该属性的值等于iMax,iMax每次都会被赋予值,但最终会有一个属性的值是最大的,这样该iMax就确定了
iMax = json[i];
iIndex = i;//然后让iIndex等于 该出现次数最多的字符.
}
}
alert('出现次数最多的是:'+iIndex+'出现'+iMax+'次');
···

