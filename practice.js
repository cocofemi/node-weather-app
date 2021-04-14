const request = require('request');

var getWeather = (lat, long) => {
	request({
		url:`https://dhzfjvafdvk/rdffjvhsvsaj/${lat}/${long}`
		json: true
	}, (error, response, body) => {
		if(error) {
			callback('Unable to connect to forcast.io server')
		}else if(response.statusCode == 404) {
			callback('Unable to fetch weather');
		}
	})
	
};



setTimeout(function () {
	
}, 200)

app.get( function () {
	
})

var somePromise = new Promise((resolve, reject) => {
	resolve('Hey i have been resolved');
	reject('It didn't work); //can o
});


somePromise.then((message) => {
	console.log('Success:', message)
}, (errorMessage) => {
	console.log('Error:', errorMessage);
});


var geocodeAddress = (address) => {
	return new Promise((resolve, reject) => {
		var encodedAddress = encodeURIComponent(address);
		request({
			url: `http://sdjzfghdkvukja/dfjhdk/dngf/${encodedAddress}`
		}, (error, response, body) => {
			if(error){
				reject('Unable to connect to Google Servers')
			}else if(body.status === 'ZERO_RESULTS') {
				reject('Unable to find that address.')
			}else if(body.status === 'OK'){
				resolve({
					address: body.results[0].formatted_address,
					Latitude:body.results[0].geometry.location.lat,
					Longitude:body.results[0].geometry.location.lng
				});
			}
		});
	});
};