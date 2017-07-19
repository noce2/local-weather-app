/* eslint linebreak-style: ["error", "windows"]*/
$(document).ready(function() {
  let weatherInfo;
  let tempUnitState;
  //preloading all images
    let clouds = new Image();
  clouds.src = "https://6oqlzq.dm2302.livefilestore.com/y4mwQzeFJAje5WerM2dauJJ72TVVFWCOBcO_oZvkpOcmUIPf30HKdLLSsm4o6zsrdkDPG2zSn7zEZc7bkDulS05W-ucHIRFMkxZVFmht3TRPchsdzgQyWfXCYXd3xKohVjOnYMP_HJ2Oka_wcdgMR2tueXDqB8meXXTsHcZpzUo2dWv-GQfMhHNVCWD5H8QyS3XV770tH9e7AAmm1WMyl4E4A?width=1920&height=1080&cropmode=none";

  let snow = new Image();
  snow.src = "https://64qgzq.dm2302.livefilestore.com/y4mTqcwJAJHCDb9HKAYjp1lfqXwljAtNZJv3DSZ0cEweDDQILQ30XeenfVzvsn0-zx2gS-37kCnbwoD62GkwNSDsypR4RLsYh7TP3AIG2igJ6UU1oMwUFcIiIXfjsPoZBN2sM2jK6J5CO7iLaTv5IDw9A1ZQlwUv33OIHKI9RNsPv71kCjg_3CM_lgxmbncIkELAHMz8_uXkc48e37TALnZmw?width=1920&height=1080&cropmode=none";

  let rain = new Image();
  rain.src = "https://64qfzq.dm2302.livefilestore.com/y4mvdQyoCQOr4E4va4LMvVDaH-kpgrktFLScZLw40-9_2TwySLvnh2H6flZXkbVN0ZfMnDhq_BzRGHFe63tYHa2qYLggCnGpmcqzIQ7DwKLTeQcbK00wrH_qCUXYjSKjn9cX0kUoSNN3JBtBm-YIXCWMDtHwEpUKM778R7pEPPom1uVoh4k9GCB0elsxCazKeuQjfRiiiJwehQoGyOqo2BGPQ?width=1920&height=1079&cropmode=none";
  let thunderstorm = new Image();
  thunderstorm.src = "https://64qszq.dm2302.livefilestore.com/y4m9soZ-HtittBqk-zNil_svHS6NXxJ-WeshexDfRBLaVn92it-QbsXyrERw3xJbw4hdUsTTXi8cbd6vZbO4_7WxKelwtiAplKh11XITQ4CYMHi8rBRVx11KyFmaMgEb3Q5i1IpqO5FiTHxx42RcABBkRvpFxBA7c3teTYSQpUEAbxpL3_aNfSl3C459uGEbGUcluOy5ISN5w7oK-TwgCXLOA?width=1920&height=1200&cropmode=none";
  let drizzle = new Image();
  drizzle.src = "https://6oqrzq.dm2302.livefilestore.com/y4mY3MWYeJylxdBzh_x1my-PZurdYCYsQgSHzoov71mP8ilVe25uVEhk5C9RTXvwpOgP927ZDDA96NT8crxYBTlpYqZ64Rnx4szt3dlHvc5JqiYHxGiiVhxyhq1ySah6JnJkFFGOh5yX4sulCVsZlIGNIIlhN9Cud-uO-p6FbAFnnbrIhTdF2F8Hg9AsSXxE7Gty4O0BrZzvQrko_UHhILnzg?width=1920&height=1280&cropmode=none";
  let clear = new Image();
  clear.src = "https://6oqozq.dm2302.livefilestore.com/y4m7JrhTzNBodIy2F5_aR4Q6dEZw8dhX1SrRVFzYrvd9c9MryT4ZbZWnYyj5iGr1utIz3nW_knxFIxvp1Vmoo9RhixdgSuCZAg_jUQHHWbkkpilByhPCfg8HSNyfA6mq0U7i0KBD9PViwyVjaxDEgfk1brZ80bl_GyyTXfvG-F7-u0dW7rH9smV2jAlkQFqj2MuE3YHKr9VpUD0-poqMOhOFA?width=1920&height=1080&cropmode=none";
  const extreme = new Image();
  extreme.src = "https://6oqmzq.dm2302.livefilestore.com/y4mQYnh4t6apVgQm1i92ukqlpY3-vjj_WKeajJXZ_amp9k1YItxuTEMdbO-j9LpY0NKCxIrhnv-vlXxL6JFyl22l0xlieHvUjOB_2VUlc01c3s-1fJsZurlhL_HN33LI87icW2L3CdxdIADjuwUt6DbA10XuHHKoItosH2B2ozN7iHVngd4ObnSduCGpLiQKU9tgZFZkLm4Ly6jDr7nezOdcQ?width=1920&height=1080&cropmode=none";
  let atmosphere = new Image();
  atmosphere.src = "https://6oqnzq.dm2302.livefilestore.com/y4mdLw347Azb5KrG2_ZnRUC0RERAbV5V-pKpNKK8HwvUOXF2IsR44ZDBzZC8yjJghSmBWAPycG6kDWH4-9kVIqvtCQz_U8mT6wycXr-_kKyl0J25Sn5-IQacVhTU8yKMNSdDzplWQSo6--tuz2CuT_LXcumw1LUNYoHZVYF1da5_QYj1Om2qDLKUzWxsBWTjHNophCgo6saAxFzuoIZC0PJgg?width=1920&height=1080&cropmode=none";
  $("#giveMeWeather").on("click", function() {
    getWeather("#cityAndCountryColn", "#weatherDescriptionColn", "#temperatureColn", "#changeUnitsButtonColn", "#weatherIconColn");

  });

  $('#changeUnitsButtonColn').on("change", "#changeUnits", function() {
    changeUnit('#temperature');
  });

  //below this point, just function declarations

  function changeUnit(target) {
    if ($(target).length !== 0 /*this will go to the other branch if the target ya no existe*/ ) {
      //console.log("now changing Temp");
      let tempText = ($(target).text()).split(" "); //this line splits the temperature into the symbol and number
      let justNumber = Number(tempText[0]); //converts the number, which is currently a string to type int

      //these 3 variables will be assigned variables in the switch statement
      let convertedTemp;
      let appends;
      let forButton;

      switch (tempUnitState) {
        case "C":

          convertedTemp = (toFarenheit(justNumber)).toString();
          appends = '&deg;F';
          //forButton = '&deg;C';
          tempUnitState = "F";
          break;
        case "F":
          convertedTemp = (toCelsius(justNumber)).toString();
          appends = '&deg;C';
          //forButton = '&deg;F';
          tempUnitState = "C";
          break;
        default:
          //console.log("is not in the right format, check the changeUnit & getWeather functions for errors");
      }
      //console.log(convertedTemp.concat(" ", appends));
      $(target).html(convertedTemp.concat(" ", appends));
      //$('#changeUnits').html(forButton);

    } else {
      alert("Please get weather before changing units");
    }
  }

  function toCelsius(numberToConvert) {
    return myOneDecimalRnding((numberToConvert - 32) * (5 / 9));
  }

  function toFarenheit(numberToConvert) {
    return myOneDecimalRnding((1.8 * numberToConvert) + 32);
  }

  function getWeather(locNode, descripNode, tempNode, chgBtnNode, iconNode) {
    const apiTarget = "https://stormy-fortress-66721.herokuapp.com/dameelclima";
    tempUnitState = 'C'; // because the call is to metric, I assign state to C, so there's no confusion

    $.getJSON(apiTarget, function(data, textStatus, jqXHR) {
        //console.log("the status of the getLocation getJSON is " + textStatus);
      })
      .done(function(data) {
        if(data.error){
          console.log(data);
        } else {
          objOfHTML = htmlConv(jsonWeatherParser(data));
          $(locNode).html(objOfHTML.cityAndCountry);    //access the appropriate prop in objofHTML
          $(descripNode).html(objOfHTML.weatherDescription);
          $(tempNode).html(objOfHTML.temperature);
          $(chgBtnNode).html(objOfHTML.changeUnitsButton);
          $('#changeUnits').bootstrapToggle(); //the toggle needs to be initialised for it to render properly
          $(iconNode).html(objOfHTML.weatherIcon);
          let backgroundURL = giveBkgrndUrlImgProp(objOfHTML.weatherMain);

          $("body").css("background-image", backgroundURL);
          $("#giveMeWeather").remove(); //take away the button after this has been used
        }
      })
      .fail(function() {
        //console.log("the getWeather getJSON request failed");
      });
  }

  function giveBkgrndUrlImgProp(inputCondition) {

    const backgroundImageLib = {
      Thunderstorm: thunderstorm.src,
      Drizzle: drizzle.src,
      Rain: rain.src,
      Snow: snow.src,
      Atmosphere: atmosphere.src,
      Clear: clear.src,
      Clouds: clouds.src,
      Extreme: extreme.src
    };
    return "url(" + backgroundImageLib[inputCondition] + ")";

  }

  function jsonWeatherParser(data) {  //Want to return an object with just temp and

    let rootKeysIWant = ["weather", "main", "sys", "name"];
    let outObj = nestedFilter(data, rootKeysIWant);   //console.log(outObj);

    return outObj;

  }

  //functions for nested filtering

  function nestedFilter(inputObj, firstLevelKeys /*,secondLevelKeys*/ ) {
    let firstFiltered = filterMyObj(inputObj, firstLevelKeys);
    //secondlevel ;
    return firstFiltered;
  }

  function filterMyObj(inputObj, arrOfDesiredKeys) {
    let result = {};
    for (let type in inputObj) {
      if (arrOfDesiredKeys.indexOf(type) !== -1) {
        result[type] = inputObj[type];
      }
    }
    return result;
  }

  function secondLevel(inputObj, arrOfDesiredKeys) {
    let result = {};
    for (let each in inputObj) {
      let temp = {};
      for (let subEach in inputObj[each]) {
        console.log(subEach);
        if (arrOfDesiredKeys.indexOf(subEach) !== -1) {
          temp[subEach] = inputObj[each][subEach];
        }
      }
      if (jQuery.isEmptyObject(temp)) {
        //result[each] = inputObj[each];
      } else {
        result[each] = temp;
      }

    }
    return result;

  }

  function htmlConv(toConvert) {
    let objToReturn = {};
    let temperature = String(myOneDecimalRnding(toConvert.main.temp)) + " &deg;C";
    let temperatureNode = '<p id="temperature" class="weatherInfo h1 tempAndButton">' + temperature + '</p>';
    let cityAndCountry = '<h2 id="cityAndCountry" class="weatherInfo">' + toConvert.name + ', ' + toConvert.sys.country + '</h2>';
    let weatherDescription = '<h3 id="weatherDescription" class="weatherInfo">' + capitaliseEveryFirstLetter(toConvert.weather[0].description) + '</h3>';
    let iconURL = "http://openweathermap.org/img/w/" + String(toConvert.weather[0].icon) + ".png";
    let weatherIcon = '<img src=' + iconURL + ' alt="an Icon of the current weather estara aqui"  id="weatherIcon" class="weatherInfo img-responsive center-block"/>';
    let changeUnitsButton = '<div class="outerToggle"><input type="checkbox" checked data-toggle="toggle" data-on="&deg;C" data-off="&deg;F" data-onstyle="primary" data-offstyle="info" data-style="android" id="changeUnits" data-size="large" ></div>';
    objToReturn.temperature = temperatureNode;
    objToReturn.cityAndCountry = cityAndCountry;
    objToReturn.weatherDescription = weatherDescription;
    objToReturn.changeUnitsButton = changeUnitsButton;
    objToReturn.weatherIcon = weatherIcon;
    objToReturn.weatherMain = toConvert.weather[0].main;
    return objToReturn;
  }

  function myOneDecimalRnding(inputNumber) {
    return ((Math.round(inputNumber * 10)) / 10);
  }

  function capitaliseFirstLetter(inputWord) {
    //error handling
    //console.log("estoy");
    let thingToReturn;
    if (inputWord.charAt(0) > 64 && inputWord.charAt(0) < 91) {

      thingToReturn = inputWord;
    } else {
      //console.log("soy");
      thingToReturn = inputWord.charAt(0).toUpperCase() + inputWord.slice(1);
    }
    return String(thingToReturn);
  }

  function capitaliseEveryFirstLetter(inputSentence) {
    return ((inputSentence.split(" ")).map(capitaliseFirstLetter)).join(" ");

  }

});