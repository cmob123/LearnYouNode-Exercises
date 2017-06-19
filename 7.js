// performs an HTTP GET request (learnyounode workshopper #7)
// still a work in progress

const http = require('http');

http.get(process.argv[2], callback);

function callback(response){
	response.on('data', function(data){
		console.log(data);
	});
}