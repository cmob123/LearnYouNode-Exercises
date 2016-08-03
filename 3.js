// synchronously print number of newline characters in the string passed (learnyounode workshopper #3)

var fs = require('fs')
var input = fs.readFileSync(process.argv[2]).toString()
var array = input.split('\n')
console.log(array.length-1)