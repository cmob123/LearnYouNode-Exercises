// takes a directory name and a file extension as input and returns a listing of the directory filtered with the extension (learnyounode workshopper #6, modular version of #5)

const fs = require('fs');

module.exports = function (dirName, end, callback) {
	if (end.charAt(0) !== '.') { end = '.' + end; } // add '.' if it's not already there
	fs.readdir(dirName, function(err, list){
		if (err) { return callback(err); }
		let len = list.length;
		for(let i=0; i < len; i += 1) {
			if(list[i].endsWith(end) !== true) { // if incorrect extension is found, remove file from listing
				list.splice(i, 1);
				i -= 1; // decrement i, avoid indexing mismatch error
				len -= 1;
			}
		}
		callback(null, list);
	});
};
