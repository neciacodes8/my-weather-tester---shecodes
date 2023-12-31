let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  oslo: {
    temp: -5,
    humidity: 20,
  },
};
let searchCity = prompt("Enter a city,please.");
searchCity = searchCity.toLowerCase();

if (weather[searchCity] !== undefined) {
  let basetemp = weather[searchCity].temp;
  let ctemp = Math.round(basetemp);
  let ftemp = Math.round((basetemp * 9) / 5) + 32;
  let humidPercent = weather[searchCity].humidity;

  alert(
    `It is currently ${ctemp}°C (${ftemp}°F) in ${searchCity} with a humidity of ${humidPercent}%`,
  );
} else {
  alert(
    `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${searchCity}`,
  );
}
