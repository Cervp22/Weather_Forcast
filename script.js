const searchbtn = document.getElementById("btn");
const cityTitle = document.getElementById("citytitle");
const date = document.getElementById("date");
const temp = document.getElementById("temperature");
const wind = document.getElementById("wind");
const humidity = document.getElementById("humidity");
const currentIcon = document.getElementById("currenticon");
const btnGroup = document.getElementById("btn-group");

let cityName = "";

searchbtn.addEventListener("click", function () {
  const input = document.getElementById("cityinput").value.toLowerCase();
  cityName = input;

  const btn = document.createElement("button");
  btn.textContent = input;
  btnGroup.appendChild(btn);

  btnGroup.addEventListener("click", function (evt) {
    var element = evt.target;
    cityName = element.value;
  });

  let currentUrlRequest =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    cityName +
    "&appid=be1d2984600ae0278e127a91a379cfb8&units=imperial";

  fetch(currentUrlRequest)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      date.textContent = new Date();
      cityTitle.textContent = data.name;
      cityTitle.style.textDecoration = "underline";
      temp.textContent = data.main.temp;
      humidity.textContent = data.main.humidity;
      wind.textContent = data.wind.speed;

      if (temp.textContent <= 70) {
        currentIcon.src = "icons/cloudy icon.png";
        currentIcon.height = "40px";
        currentIcon.width = "40px";
      } else {
        currentIcon.src = "icons/sun icon.png";
      }
    });

  //5-day forecast
  let forecastUrlRequest =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    cityName +
    "&appid=be1d2984600ae0278e127a91a379cfb8&units=imperial";

  fetch(forecastUrlRequest)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      let city = data.city.name;

      const forecastTitle = document.getElementById("forcasttitle");
      const div1Date = document.getElementById("div1date");
      const div1Temp = document.getElementById("div1temp");
      const div1Wind = document.getElementById("div1wind");
      const div1Hum = document.getElementById("div1hum");
      const div1Icon = document.getElementById("div1icon");

      forecastTitle.textContent = "5 day forecast for the city of " + city;

      forecastTitle.style.textDecoration = "underline";

      div1Date.textContent = data.list[1].dt_txt;
      div1Temp.textContent = data.list[1].main.temp;
      div1Wind.textContent = data.list[1].wind.speed;
      div1Hum.textContent = data.list[1].main.humidity;

      if (div1Temp.textContent <= 70) {
        div1Icon.src = "icons/cloudy icon.png";
        div1Icon.style.height = "40px";
        div1Icon.style.width = "40px";
      } else {
        div1Icon.src = "icons/sun icon.png";
        div1Icon.style.height = "40px";
      }

      const div2Date = document.getElementById("div2date");
      const div2Temp = document.getElementById("div2temp");
      const div2Wind = document.getElementById("div2wind");
      const div2Hum = document.getElementById("div2hum");
      const div2Icon = document.getElementById("div2icon");

      div2Date.textContent = data.list[9].dt_txt;
      div2Temp.textContent = data.list[9].main.temp;
      div2Wind.textContent = data.list[9].wind.speed;
      div2Hum.textContent = data.list[9].main.humidity;

      if (div2Temp.textContent <= 70) {
        div2Icon.src = "icons/cloudy icon.png";
        div2Icon.style.height = "40px";
        div2Icon.style.width = "40px";
      } else {
        div2Icon.src = "icons/sun icon.png";
        div2Icon.style.height = "40px";
      }

      const div3Date = document.getElementById("div3date");
      const div3Temp = document.getElementById("div3temp");
      const div3Wind = document.getElementById("div3wind");
      const div3Hum = document.getElementById("div3hum");
      const div3Icon = document.getElementById("div3icon");

      div3Date.textContent = data.list[17].dt_txt;
      div3Temp.textContent = data.list[17].main.temp;
      div3Wind.textContent = data.list[17].wind.speed;
      div3Hum.textContent = data.list[17].main.humidity;

      if (div3Temp.textContent <= 70) {
        div3Icon.src = "icons/cloudy icon.png";
        div3Icon.style.height = "40px";
        div3Icon.style.width = "40px";
      } else {
        div3Icon.src = "icons/sun icon.png";
        div3Icon.style.height = "40px";
      }

      const div4Date = document.getElementById("div4date");
      const div4Temp = document.getElementById("div4temp");
      const div4Wind = document.getElementById("div4wind");
      const div4Hum = document.getElementById("div4hum");
      const div4Icon = document.getElementById("div4icon");

      div4Date.textContent = data.list[25].dt_txt;
      div4Temp.textContent = data.list[25].main.temp;
      div4Wind.textContent = data.list[25].wind.speed;
      div4Hum.textContent = data.list[25].main.humidity;

      if (div4Temp.textContent <= 70) {
        div4Icon.src = "icons/cloudy icon.png";
        div4Icon.style.height = "40px";
        div4Icon.style.width = "40px";
      } else {
        div4Icon.src = "icons/sun icon.png";
        div4Icon.style.height = "40px";
      }

      const div5Date = document.getElementById("div5date");
      const div5Temp = document.getElementById("div5temp");
      const div5Wind = document.getElementById("div5wind");
      const div5Hum = document.getElementById("div5hum");
      const div5Icon = document.getElementById("div5icon");

      div5Date.textContent = data.list[33].dt_txt;
      div5Temp.textContent = data.list[33].main.temp;
      div5Wind.textContent = data.list[33].wind.speed;
      div5Hum.textContent = data.list[33].main.humidity;

      if (div5Temp.textContent <= 70) {
        div5Icon.src = "icons/cloudy icon.png";
        div5Icon.style.height = "40px";
        div5Icon.style.width = "40px";
      } else {
        div5Icon.src = "icons/sun icon.png";
        div5Icon.style.height = "40px";
      }
    });
});

