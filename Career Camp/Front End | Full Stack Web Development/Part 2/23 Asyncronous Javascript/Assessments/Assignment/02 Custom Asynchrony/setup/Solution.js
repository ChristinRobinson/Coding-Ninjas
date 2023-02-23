function randomAsyncFunction() {
	const time = Math.floor(Math.random * 100);
	const x = setTimeout(() => {
		console.log('finished!!');
	}, time);
}

async function asyncWithCallback(callback) {
	// Write logic here
}

asyncWithCallback(() => {
	console.log('fsdfsa');
});
