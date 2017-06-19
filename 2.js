// print the sum of arguments passed (learnyounode workshopper #2)

const args = process.argv;
let index, sum = 0;
for(index=2; index < args.length; index += 1) {
	sum += parseInt(args[index], 10);
}
console.log(sum);
