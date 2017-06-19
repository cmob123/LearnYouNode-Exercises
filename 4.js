// asynchronously print number of newline characters in the string passed (learnyounode workshopper #4)

const fs = require('fs');
let input = "",
	array = [];
fs.readFile(process.argv[2], 'utf8', function(err, data){
	if(!err) { input = data; }
	else input = "ERROR";
	input = data;
	let array = input.split('\n');
	console.log(array.length-1);
});
