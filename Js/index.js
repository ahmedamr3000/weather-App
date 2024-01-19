var inputLocation = document.getElementById("search");

var jdata = [];
var weatherIcon = [];
var weatherHint = [];
var currentTemp = [];
var currentloc = [];

var searchValue = "cairo";

weather("cairo");

function searchh() {
  searchValue = inputLocation.value;
  weather(searchValue);
}

async function weather(e) {
  let apiData = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=93824416015f4b75901210944241301&q=${e}&days=3`
  );
  jdata = await apiData.json();
  weatherIcon = jdata.current.condition.icon;
  weatherHint = jdata.current.condition.text;
  currentTemp = jdata.current.temp_c;
  currentloc = jdata.location.name;
  currentDate = jdata.forecast.forecastday[0].date;
  currentDay = getDayName(new Date(`${currentDate}`));

  tommorwIcon = jdata.forecast.forecastday[1].day.condition.icon;
  tommorwHint = jdata.forecast.forecastday[1].day.condition.text;
  tommorwMax = jdata.forecast.forecastday[1].day.maxtemp_c;
  tommorwMin = jdata.forecast.forecastday[1].day.mintemp_c;
  tommorwDate = jdata.forecast.forecastday[1].date;
  tommorwDay = getTommorwoName(new Date(`${tommorwDate}`));

  day2Icon = jdata.forecast.forecastday[2].day.condition.icon;
  day2Hint = jdata.forecast.forecastday[2].day.condition.text;
  day2Max = jdata.forecast.forecastday[2].day.maxtemp_c;
  day2Min = jdata.forecast.forecastday[2].day.mintemp_c;
  day2Date = jdata.forecast.forecastday[2].date;
  day2Day = get2dayName(new Date(`${day2Date}`));

  document.getElementById(
    "table"
  ).innerHTML = `        <div class="container rounded d-flex">
  <div class="today">
    <div class="day-name d-flex justify-content-between">
      <div class="name">
        <span>${currentDay}</span>
      </div>
      <div class="date">
        <span>${currentDate}</span>
      </div>
    </div>
    <div class="today-body">
      <span class="loc-name">${currentloc}</span>

      <div class="degree d-flex justify-content-between">
        <div class="num">
        <div class="number"><h2>${currentTemp}<sup>o</sup>c</h2></div>        </div>
        <div class="deg-img">
          <img src=http:${weatherIcon} alt="" />
        </div>
      </div>
      <span class="weath-hint">${weatherHint} </span>

      <div class="d-flex justify-content-around icons">
        <span><i class="fa-solid fa-umbrella"></i> 20%</span>
        <span><i class="fa-solid fa-wind"></i> 18km/h </span>
        <span><i class="fa-solid fa-compass"></i> East</span>
      </div>
    </div>
  </div>
  <div class="today tom text-center">
    <div class="day-name">
      <div class="name">
        <span>${tommorwDay}</span>
      </div>
    </div>
    <div class="today-body day2">
      <div class="deg-img">
      <img src=http:${tommorwIcon} alt="" />
      </div>

      <div class="degree text-white">
      <div ><span>${tommorwMax}<sup>o</sup>c</س></div> 
      <div ><span>${tommorwMin}<sup>o</sup>c</span></div>       
      </div>
      <span class="weath-hint"> ${tommorwHint} </span>
    </div>
    <div class="layer w-100"></div>
  </div>
  <div class="today tom text-center">
    <div class="day-name">
      <div class="name">
        <span>sunday</span>
      </div>
    </div>
    <div class="today-body day2">
      <div class="deg-img">
      <img src=http:${day2Icon} alt="" />
      </div>

      <div class="degree text-white">
      <div ><span>${day2Max}<sup>o</sup>c</س></div> 
      <div ><span>${day2Min}<sup>o</sup>c</span></div> 
      </div>
      <span class="weath-hint"> ${day2Hint} </span>
    </div>
  </div>
</div>`;
}

inputLocation.addEventListener("input", function () {
  searchh();
});

function getDayName(date = new Date(), locale = "en-US") {
  return date.toLocaleDateString(locale, { weekday: "long" });
}

function getTommorwoName(date = new Date(), locale = "en-US") {
  return date.toLocaleDateString(locale, { weekday: "long" });
}

function get2dayName(date = new Date(), locale = "en-US") {
  return date.toLocaleDateString(locale, { weekday: "long" });
}
