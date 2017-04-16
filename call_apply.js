var pet = {
	world: '...',
	speak: function(say) {
		console.log(say + ' ' + this.words)
	}
}

//pet.speak('Speak')
//狗，对象自变量
//dog有了pet的一个技能，speak
var dog = {
	words: 'Wang'
}

pet.speak.call(dog, 'Speak')