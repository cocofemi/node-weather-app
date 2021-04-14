console.log('starting app');

const request = require('request');

console.log(request);

setTimeout(() => {
	console.log('Inside of callback'); 
}, 2000);

setTimeout(() => {
	console.log('Second setTimeout'); 
}, 0);

console.log('Finishing app');
