// takes a directory name and a file extension as input and returns a listing of the directory filtered with the extension (learnyounode workshopper #6)

var fs = require('fs')
var input = ""
var array = []
fs.readdir(process.argv[2], function(err, list){
	for(var i=0; i<list.length; i++){
		//console.log("   " + list[i])
		if(list[i].endsWith(process.argv[3]) && list[i].includes('.'))
			console.log(list[i])
	}
})