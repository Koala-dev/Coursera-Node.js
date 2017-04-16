var klass = require('./klass')
//先require班级，然后在班级调用add方法
//对这个学校加一个方法叫做exports.add, add里面接受一个参数，可能是一个数组klasses
//这个学校有好多个班级
exports.add = function(klasses) {
	//对班级klasses数组进行便利
    klasses.forEach(function(item, index) {
    	//然后拿到里面具体的一个班级
        var _klass = item
        var teacheName = item.teacheName
        var students = item.students
        //传入两个参数，第一个参数老师名字，第二个参数学生名字students这个数组
        klass.add(teacheName, students)
    })
}
