//策略模式指的是 定义一系列的算法，把它们一个个封装起来，将不变的部分和变化的部分隔开，实际就是将算法的使用和实现分离出来；算法的使用方式是不变的，都是根据某个算法取得计算后的奖金数，而算法的实现是根据绩效对应不同的绩效规则；

//一个基于策略模式的程序至少由2部分组成，第一个部分是一组策略类，策略类封装了具体的算法，并负责具体的计算过程。第二个部分是环境类Context，该Context接收客户端的请求，随后把请求委托给某一个策略类。我们先使用传统面向对象来实现；
//比如公司的年终奖是根据员工的工资和绩效来考核的,
//绩效为A的人，年终奖为工资的4倍;绩效为B的人，年终奖为工资的3倍;绩效为C的人，年终奖为工资的2倍
//如下代码：

var performanceA = function(){};
performanceA.prototype.calculate = function(salary) {
    return salary * 4;
};      
var performanceB = function(){};
performanceB.prototype.calculate = function(salary) {
    return salary * 3;
};
var performanceC = function(){};
performanceC.prototype.calculate = function(salary) {
    return salary * 2;
};
// 奖金类
var Bouns = function(){
    this.salary = null;    // 原始工资
    this.levelObj = null;  // 绩效等级对应的策略对象
};
Bouns.prototype.setSalary = function(salary) {
    this.salary = salary;  // 保存员工的原始工资
};
Bouns.prototype.setlevelObj = function(levelObj){
    this.levelObj = levelObj;  // 设置员工绩效等级对应的策略对象
};
// 取得奖金数
Bouns.prototype.getBouns = function(){
    // 把计算奖金的操作委托给对应的策略对象
    return this.levelObj.calculate(this.salary);
};
var bouns = new Bouns();
bouns.setSalary(10000);
bouns.setlevelObj(new performanceA()); // 设置策略对象
console.log(bouns.getBouns());  // 40000
       
bouns.setlevelObj(new performanceB()); // 设置策略对象
console.log(bouns.getBouns());  // 30000