'use strict';

/**
 * Used to simulate an async delay
 * @returns {number}
 */
const randMS = () => {
	return Math.floor(Math.random() * 11) * 10;
};

const nextInt = (lastInt, callback) => {
	lastInt = lastInt || '0';
	lastInt = parseInt(lastInt);
	let nextInt = 0;
	if (lastInt === 0) {
		nextInt = 1;
	}
	else if (lastInt % 2 === 0) {			//if we get an odd starting number, get the first even.
		nextInt = lastInt + 2;
	} else {
		nextInt = lastInt + 1;
	}
	const randDelay = randMS();

	setTimeout(() => {
		console.log('even return:', 'nextInt', nextInt,'delay', randDelay);
		callback(null,nextInt);
	}, randDelay);
};

exports.nextInt = nextInt;