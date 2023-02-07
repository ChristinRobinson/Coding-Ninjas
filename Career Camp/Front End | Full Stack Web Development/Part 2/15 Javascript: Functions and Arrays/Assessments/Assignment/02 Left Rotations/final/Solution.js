//Write your function here

function rotateLeft(arr) {
	var newArr = [];
	for (var i = 0; i < arr.length; i++) {
		newArr.push(arr[i]);
	}
	newArr.push(arr[0]);
	return newArr;
}

// Input and output has already been handled for you

process.stdin.resume();
process.stdin.setEncoding('utf8');

let remainder = '';
process.stdin.on('data', function (chunk) {
	let arr = chunk.toString();
	arr = arr.split(' ');
	let nums = [];
	for (const c of arr) {
		nums.push(parseInt(c));
	}

	const ans = rotateLeft(nums).join(' ');
	process.stdout.write(ans);
	process.exit();
});
