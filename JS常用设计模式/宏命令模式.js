 //宏命令是一组命令的集合，通过执行宏命令的方式，可以一次执行一批命令。

//其实类似把页面的所有函数方法放在一个数组里面去，然后遍历这个数组，依次

//执行该方法的。

//代码如下：

var command1 = {
    execute: function(){
        console.log(1);
    }
}; 
var command2 = {
    execute: function(){
        console.log(2);
    }
};
var command3 = {
    execute: function(){
        console.log(3);
    }
};
// 定义宏命令，command.add方法把子命令添加进宏命令对象，
// 当调用宏命令对象的execute方法时，会迭代这一组命令对象，
// 并且依次执行他们的execute方法。
var command = function(){
    return {
        commandsList: [],
        add: function(command){
            this.commandsList.push(command);
        },
        execute: function(){
            for(var i = 0,commands = this.commandsList.length; i < commands; i+=1) {
                this.commandsList[i].execute();
            }
        }
    }
};
// 初始化宏命令
var c = command();
c.add(command1);
c.add(command2);
c.add(command3);
c.execute();  // 1,2,3