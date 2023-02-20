class Person {
	constructor(name) {
		this.name = name;
	}
}

//Define Student and teacher class here

// Input and output has already been handled for you

process.stdin.resume();
process.stdin.setEncoding('utf8');

let remainder = '';
process.stdin.on('data', function (chunk) {
	let arr = chunk.toString();
	arr = arr.replace('\r', '');
	arr = arr.replace('\n', '');
	arr = arr.split(' ');
	let s1 = new Student(arr[0], arr[1], arr[2]);
	let t1 = new Teacher(arr[3], arr[4], arr[5]);
	let ans = s1.getDetails().join(' ');
	ans += '\n' + t1.getDetails().join(' ');
	process.stdout.write(ans);
	process.exit();
});
