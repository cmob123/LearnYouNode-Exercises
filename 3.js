// synchronously print number of newline characters in the string passed (learnyounode workshopper #3)

const fs = require('fs');
let input = fs.readFileSync(process.argv[2]).toString();
let array = input.split('\n');
console.log(array.length-1);
