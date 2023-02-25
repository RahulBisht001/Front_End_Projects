const options = {
	method: "GET",
	headers: {
		"X-RapidAPI-Key": "2e01635cadmsh78eb679f6efe659p1e42d1jsnb2e4c2329d84",
		"X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
	},
};

getWeather = async (city) => {
	await fetch(
		"https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
		options
	)
		.then((response) => response.json())
		.then((response) => {
			document.getElementById(
				"cityName"
			).innerHTML = `Weather Chart for ${city}`;
			cloud_pct.innerHTML = `cloud_pct  :${response.cloud_pct}`;
			max_temp.innerHTML = `Max_temp    :${response.max_temp}`;
			humidity.innerHTML = `humidity    : ${response.humidity}`;
			min_temp.innerHTML = `Min_temp    :${response.min_temp}`;
			sunrise.innerHTML = `sunrise: ${response.sunrise}`;
			sunset.innerHTML = `sunset: ${response.sunset}`;
			temp.innerHTML = `Temperature : ${response.temp}`;
			wind_degrees.innerHTML = `wind_degrees :${response.wind_degrees}`;
			wind_speed.innerHTML = `wind_speed  : ${response.wind_speed}`;
		})
		.catch((err) => {
			cloud_pct.innerHTML = "Not Available";
			max_temp.innerHTML = "Not Available";
			humidity.innerHTML = "Not Available";
			min_temp.innerHTML = "Not Available";
			sunrise.innerHTML = "Not Available";
			sunset.innerHTML = "Not Available";
			temp.innerHTML = "Not Available";
			wind_degrees.innerHTML = "Not Available";
			wind_speed.innerHTML = "Not Available";
		});
};

getWeather("Delhi");

search.addEventListener("click", (e) => {
	e.preventDefault();
	getWeather(city.value);
});
