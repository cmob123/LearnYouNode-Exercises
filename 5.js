// takes a directory name and a file extension as input and returns a listing of the directory filtered by the extension (learnyounode workshopper #5)

const fs = require('fs');
let end = process.argv[3];
if (end.charAt(0) !== '.') { end = '.' + end; } // add '.' if it's not already there
fs.readdir(process.argv[2], function(err, list){
	for(let i=0; i < list.length; i += 1) {
		if(list[i].endsWith(end)) {
			console.log(list[i]);
		}
	}
});
