(function testBuild() {
	const date = +new Date;
	const err = new Error;
	if (date % 2) {
		throw err;
	}
	else {
		console.log(date);
	}
})();