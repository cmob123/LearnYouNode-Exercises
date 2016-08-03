// asynchronously print number of newline characters in the string passed (learnyounode workshopper #4)

var fs = require('fs')
var input = ""
var array = []
fs.readFile(process.argv[2], 'utf8', function(err, data){
	if(!err) input = data
	else input = "ERROR"
	input = data
	var array = input.split('\n')
	console.log(array.length-1)
})
