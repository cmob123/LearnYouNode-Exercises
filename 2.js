// print sum of arguments passed (learnyounode workshopper #2)

var index, sum = 0;
var args = process.argv
for(index=2; index < args.length; index++){
	sum += parseInt(args[index])
}
console.log(sum)