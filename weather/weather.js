const request = require('request'); 

var getWeather = (latitude, longitude, callback) => {
	request({
		url: `https://api.darksky.net/forecast/83e9487214d0c95021c7d6d75b2c1cf7/${latitude},${longitude}`, 
		json: true
	}, (error, response, body) => {
		if (error) {
			callback('Unable to connect to forecast.io server');
		}else if (response.statusCode === 400) {
			callback('Unable to fetch weather');
		}else if (response.statusCode === 200) {
			callback(undefined, {
			temperature: body.currently.temperature,
			apparentTemperature: body.currently.apparentTemperature	
			});
		}
		
	});
};

module.exports.getWeather = getWeather;
 



