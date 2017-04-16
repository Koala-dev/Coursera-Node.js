// var pet = {
// 	words: '...',
// 	speak: function() {
// 		console.log(this.words)
// 		console.log(this === pet) //判断this是否指向pet
// 	}
// }

// pet.speak()

// function pet(words) {

// 	this.words = words

// 	console.log(this.words)
// 	console.log(this === global)
// }

// pet('...')

function Pet(words) {
	//加入方法speak
	this.words = words
	this.speak = function() {
		console.log(this.words)
		console.log(this)
	}
}
//new 通过new定义一个实例对象，实例对象下面也会有words属性和speak方法
var cat = new Pet('Miao')
// 调用cat的speak方法
// speak方法是被cat实例对象调用的，在这里面this指向cat
cat.speak()