//声明一个function叫clickit
function clickIt(e) {
	window.alert('Button is clicked') //弹出一个警告窗
}

//通过geteb拿到button
var button = document.getElementById('#button')
//添加事件监听
button.addEventListener('click', clickIt)

// EventEmiiter