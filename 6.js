// calls a module and prints what's returned to the console (learnyounode workshopper #6, modular version of #5)

let myModule = require('./myModule.js');
myModule(process.argv[2], process.argv[3], callback);

function callback(err, data){
	if (err) { console.log('ERROR'); }
	else {
		let len = data.length;
		for (let i=0; i < len; i += 1) {
			console.log(data[i]);
		}
	}
}
