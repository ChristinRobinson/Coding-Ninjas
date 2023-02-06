/* Declare and implement your function here 
eg: function example(parameter_name1,parameter_name2....){}
Handle the input/output from main()
*/

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = '';
var input_stdin_array = '';
var input_currentline = 0;

process.stdin.on('data', function (data) {
	input_stdin += data;
});

process.stdin.on('end', function () {
	input_stdin_array = input_stdin.split('\n');
	main();
});

function readLine() {
	return input_stdin_array[input_currentline++];
}

function sum(num) {
	var sum = 0;
	var idx = 1;
	while (idx <= num) {
		if (idx % 2 == 0) {
			sum += idx;
			idx++;
		}
	}
	return sum;
}

function main() {
	/* Read your input here 
    eg: For string variables:   let str = String(readLine()); 
        For int variables: let var_name = parseInt(readLine());
        For arrays : const arr = readLine().replace(/\s+$/g, '').split(' ');
    */
	var num = parseInt(readLine());

	/*
    Call your function with the input/parameters read above
    eg: let x = example(var_name, arr);
    */
	var ans = sum(num);

	/*
    Log your output here 
    eg: console.log(x);
   */
	console.log(ans);
}
