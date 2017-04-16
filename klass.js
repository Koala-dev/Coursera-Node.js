//node里没有全局名名空间
//使用模块前，要用require来导入
//student和teacher是被引入的脚本，每一个被当前脚本导入的模块
//都会向当前脚本暴露一组公开的API,
var student = require('./student') //模块对象付值给变量student
var teacher = require('./teacher') 
//指定一个老师
teacher.add('Scott')

//实现班级代码，添加add方法，传入两个参数：老师的名字和学生的名字
function add (teacherName, students) {
	teacher.add(teacherName) 

	//学生是个数组，对学生进行遍历通过forEach这个方法
	//在回调方法里面拿到一个item和index
	//item是学生在这个数组里的学生名，index是学生在这个数组里的序号
	students.forEach(function(item,index){
		student.add(item)
	})
}
//把属性赋予给成为传统的模块实例exports和给特别的对象类型使用module.exports
exports.add = add
//是module。exports的辅助方法
