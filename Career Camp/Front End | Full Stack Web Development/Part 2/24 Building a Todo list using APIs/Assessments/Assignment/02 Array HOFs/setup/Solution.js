function modifyArray(arr) {
	// Write the logic here
}

// Input and output has already been handled for you

process.stdin.resume();
process.stdin.setEncoding('utf8');

let remainder = '';
process.stdin.on('data', function (chunk) {
	let arr = chunk.toString().split(' ');
	arr = arr.map((val) => parseInt(val));

	let ans = modifyArray(arr);
	ans = ans.join(' ');

	process.stdout.write(ans);
	process.exit();
});
