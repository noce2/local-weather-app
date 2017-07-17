/* eslint linebreak-style: ["error", "windows"]*/
$(document).ready(function() {
  let receivedLocation; 
  let weatherInfo;
  let tempUnitState;
  //preloading all images
  let clouds = new Image();
  clouds.src = "https://6oqgzq.dm2302.livefilestore.com/y3mbnimJ9Aho-WQm19eXtzZehSl8Lkzg7f5jlzi8JO0_sO7zSQAsZB2PQJw5ri0j04Fwh5yVmc7VALHofCZH3Fp77QAnmeNHJn_55H_9_GSgjv1PuhIftACFhWHwgHMPJFl7-gJNEXZpMOAC4ajdZZ-nl7XPthN7M6EUiLPR-3nl7U?width=1920&height=1080&cropmode=none";

  let snow = new Image();
  snow.src = "https://64qgzq.dm2302.livefilestore.com/y3mTqcwJAJHCDb9HKAYjp1lfnmJ5wgTTKTxvpuZZWGgAgjCx60-seM9XmLBb9gclvvtmdbxawPzR3GDCs24MxOrUYWNCTx55Ii5_cSWhyDZjJWE9dtPPM_eYnkcT2wzvHIWN21QBZvY2BgloMzhNMZxrmQxTiJWrrs1-H2LyarxF38?width=1920&height=1080&cropmode=none";

  let rain = new Image();
  rain.src = "https://64qfzq.dm2302.livefilestore.com/y3mvdQyoCQOr4E4va4LMvVDaKebonPzivzz3ciX6opJ9AdQHVlrrlPzPyOVeqfahu162gTygTFFvPAm2j7D8LlVSZulIGx8c7X5GGoFRZPKCi_G77UMtYXi7G3nrIJxAOfSfnEVTZxvM-ghs2pcJ6MjX4NcJRY_oM7dS94oUGNjHLc?width=1920&height=1079&cropmode=none";
  let thunderstorm = new Image();
  thunderstorm.src = "https://64qszq.dm2302.livefilestore.com/y3m9soZ-HtittBqk-zNil_svJIl-wuvoYZl8TTqbsfZ3pz6JWGISB-rjsR7i4PlIKgSOYNWuzixPLjqVfG5zXGV8FxJ1643V25vWKGseEOySiY0EMbiNlsFEdZxrtHsxfp77B7tCsRe5gGUvwGcCHQ7qeeoX_pktV1QKIojtxjdj6o?width=1920&height=1200&cropmode=none";
  let drizzle = new Image();
  drizzle.src = "https://6oqrzq.dm2302.livefilestore.com/y3mY3MWYeJylxdBzh_x1my-PU8qD86Qc-SBeD8KUEq3Ul73isBgV5CQP0JFh6yk4Tk6EL4FxMD3C6bVT7o_gJ-Uu8IKQ9GlC24iY0MMO_niWXlyCCVKcVZwTiFXu3z0mIHA0beJKH4H2WOErmu1Ze2zokAPi0kUtPJKeV22t12JQQA?width=1920&height=1280&cropmode=none";
  let clear = new Image();
  clear.src = "https://6oqozq.dm2302.livefilestore.com/y3m7JrhTzNBodIy2F5_aR4Q6VXjlcjWeZuNPOrsQmGwS7i_Vx_0EBNduQ9Asgiz370tC9XzIPKt6KKKWi3Gx2Ka5Q3UtARyK2cpp8JEsa0Z8kEN4PTsNhccI0_eWofDz4EtMvHmQwhA6fKmvJrNb6aL2JELQ3zyHpTsbuiFkQCneSQ?width=1920&height=1080&cropmode=none";
  let extreme = new Image();
  extreme.src = "https://6oqmzq.dm2302.livefilestore.com/y3mQYnh4t6apVgQm1i92ukqlk5kbP8OUFHOQONeA1QLTg8KFyo99YLpYT9bR2PnpOwkHK1xY7z4ik6zfkzz6I1dVnP8OctEbV9MPkkBieKx1Tlu-sTHWUtr3cezf4G3T4szJWgLj09aEHoaOJIU1Bd01wToJRWei7YKMKUzNqxb-D4?width=1920&height=1080&cropmode=none";
  let atmosphere = new Image();
  atmosphere.src = "https://6oqnzq.dm2302.livefilestore.com/y3mdLw347Azb5KrG2_ZnRUC0T7kY57jDcJcPdxA5RveP1qM4w-xMfmeX_WlHSIkdLfmGXRe-KVZis_OOg1JtHDYiBcQhWclCv--wgvHX1QzhA6S0i1xoBaZyzbI8vFtfqoWS4cVFqqhRaSFeLy9PqXsbbvHuREXsr_7kGAmkMUSwOw?width=1920&height=1080&cropmode=none"; 
  $("#giveMeWeather").on("click", function() {  
    getWeatherAndLocation("#cityAndCountryColn", "#weatherDescriptionColn", "#temperatureColn", "#changeUnitsButtonColn", "#weatherIconColn");

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

  function getWeatherAndLocation(locNode, descripNode, tempNode, chgBtnNode, iconNode) {
    let apiTarget = "https://stormy-fortress-66721.herokuapp.com/dondeestoy";

    $.getJSON(apiTarget, function(data, textStatus, jqXHR) {
        //console.log("the status of the getLocation getJSON is " + textStatus);

      })
      .done(function(data) {
        receivedLocation = {
          "lat": data.lat,
          "lon": data.lon
        };
        //console.log(receivedLocation);   
        getWeather(receivedLocation, locNode, descripNode, tempNode, chgBtnNode, iconNode);
      })
      .fail(function() {
        //console.log("the status of the getLocation getJSON failed");
      });

  }

  function getWeather(whereToLook, locNode, descripNode, tempNode, chgBtnNode, iconNode) {
    let apiTarget = "http://api.openweathermap.org/data/2.5/weather";
    let queryParams = whereToLook;
    queryParams.APPID = "078ecb2576afa59e6e132d1ce4c68684";  
    queryParams.units = "metric";

    tempUnitState = "C"; //because the call is to metric, I assign state to C, so there's no confusion
      
    $.getJSON(apiTarget, queryParams, function(data, textStatus, jqXHR) {
        //console.log("the status of the getLocation getJSON is " + textStatus);
      })
      .done(function(data) {
        //console.log("the getWeather getJSON request succeeded");   

        //console.log(jsonWeatherParser(data));
            //need to rewrite output for htmlConv
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

      })
      .fail(function() {
        //console.log("the getWeather getJSON request failed");
      });
  }

  function giveBkgrndUrlImgProp(inputCondition) {

    let backgroundImageLib = {
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