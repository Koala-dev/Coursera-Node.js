
/*声明函数learn，参数something
这里面打印something
然后声明function叫we第一个参数回调函数callback
第二个参数something，把something改造加入字符串
把处理后的something传递给回调函数

调用we函数，第一个传递learn第二个传递字符串nodejs
（具名函数）*/
function learn(something) {
	console.log(something)
}

function we(callback, something) {
	something += ' is cool '
	callback(something)
}

we(learn, 'Nodejs')

//传递匿名函数，第二个函数jade

we(function(something) {
	console.log(something)
}, 'Jade')