const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
	.options({
		a:{
			demand: true,
			alias: 'address',
			description: 'Address to fetch weather for',
			string: true
		}
})
	.help()
	.alias('help', 'h')
	.argv;

var encodedAddress = encodeURIComponent(argv.address);
var geoCodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`

axios.get(geoCodeUrl).then((response) => {
	if (response.data.status === 'ZERO_RESULTS') {
		throw new Error('Unable to find that address.');
	}
	var longitude = response.data.results[0].geometry.location.lat;
	var latitude = response.data.results[0].geometry.location.lng;

	var weatherUrl = `https://api.darksky.net/forecast/83e9487214d0c95021c7d6d75b2c1cf7/${latitude},${longitude}`;
	console.log(response.data.results[0].formatted_address);

	return axios.get(weatherUrl)
}).then((response) =>{
	var temperature = response.data.currently.temperature;
	var apparentTemperature = response.data.currently.apparentTemperature;
	console.log(`It currently ${temperature}. It feels like${apparentTemperature}`);

}).catch((e) =>{
	if (e.code === 'ENOTFOUND') {
		console.log('Unable to find API servers.');
	}else{
		console.log(e.message);
	}
});