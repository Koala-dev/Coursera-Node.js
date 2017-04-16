// <script src='a.js'></script>
// <script src='a.js'></script>
// <script src='a.js'></script>

//同步，阻塞
//var i = 0
//while(true) {
//	i++
//}

// 异步
var c = 0

function printIt() {
    console.log(c)
}

function plus(callback) {
    setTimeout(function() {
        c += 1
        callback()
    }, 1000)
}

plus(printIt)

