//var days = daysBetween('2016-11-01','2016-11-02');
/**
* 根据两个日期，判断相差天数
* @param sDate1 开始日期 如：2016-11-01
* @param sDate2 结束日期 如：2016-11-02
* @returns {number} 返回相差天数
*/
//获取两个日期的天数
function getDateDiff(sDate1,sDate2){
//Date.parse() 解析一个日期时间字符串，并返回1970/1/1 午夜距离该日期时间的毫秒数
var time1 = Date.parse(new Date(sDate1));
var time2 = Date.parse(new Date(sDate2));
var nDays = Math.abs(parseInt((time2 - time1)/1000/3600/24));
return  nDays;
};
 //例子
 console.log(dateDiff('2019-7-1','2019-8-15'))//45天


 //获取两个日期的小时数
 //
 function getHourDiff(s1, s2) {
  s1 = new Date(s1.replace(/-/g, '/'));
  s2 = new Date(s2.replace(/-/g, '/'));
  var ms = Math.abs(s2.getTime() - s1.getTime());
  var  hours= (ms / 1000 / 60 / 60).toFixed(1);
  return hours;          
}
//例子
console.log(getHourDiff('2019-7-1','2019-8-15'))//1080小时



// 获得两个日期之间相差的天数

//startDate="2018-01-10";
//  endDate="2018-01-15";
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