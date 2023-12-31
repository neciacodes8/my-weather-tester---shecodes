function showTemperature(response) {
  let tempNumberElement = document.querySelector("#temp-number");
  let tempCurrent = Math.round(response.data.temperature.current);
  tempNumberElement.innerHTML = tempCurrent;
}

function giveMeResults(event) {
  event.preventDefault();

  let citElement = document.querySelector("#current-city");
  let inputBarElement = document.querySelector("#inputBar");
  let city = inputBarElement.value;
  let apiKey = "59b3e3d0a54fofe83cd678bccc0837t3";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;

  axios.get(apiUrl).then(showTemperature);
  citElement.innerHTML = city;
}

let resultBar = document.querySelector("#searchResult");
resultBar.addEventListener("submit", giveMeResults);

let dayTime = document.querySelector("#day-time");

let currentTime = new Date();
let hour = currentTime.getHours();
let mins = currentTime.getMinutes();

let week = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let day = week[currentTime.getDay()];

dayTime.innerHTML = `${day} ${hour}:${mins}`;
