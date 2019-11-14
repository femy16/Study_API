let request = new XMLHttpRequest();
let forecastrequest = new XMLHttpRequest();
let APIKEY ="5ac3a287f3b75e6586581f4393004be5";

function displayNicely(apiData){
    apiData= JSON.parse(apiData);
    console.log(apiData);
    let htmlString = apiData.name+ '<br />'+" Current weather " +apiData.weather[0].description + '<br />';
      htmlString +=`<img src="http://openweathermap.org/img/w/${apiData.weather[0].icon}.png">`+ '<br />';
     htmlString +=  "Current Temperature: " + ((apiData.main.temp)- (273.15))+ '<br />';
     htmlString += "Air Pressure: " + (apiData.main.pressure)+ '<br />'+" Wind Speed: " +(apiData.wind.speed);
      
    
    document.getElementById("weatherData").innerHTML=htmlString;
}
function displayforecast(apiData1){
    apiData1= JSON.parse(apiData1);
    console.log(apiData1);
    let htmlString1 = apiData1.city.name +  '<br />';
    for(let i=0;i<=15;i++){
    htmlString1 += "Date: "+ apiData1.list[i].dt_txt +  '<br />';
    htmlString1 +=" Weather: " +apiData1.list[i].weather[0].description + '<br />';
    htmlString1 +=`<img src="http://openweathermap.org/img/w/${apiData1.list[i].weather[0].icon}.png">`+ '<br />';
    htmlString1 +=  "Temperature: "+ ((apiData1.list[i].main.temp)- (273.15))
    htmlString1 += "Air Pressure: "+apiData1.list[i].main.pressure+ '<br />'+" Wind Speed: " +apiData1.list[i].wind.speed+'<br />';
        }
        document.getElementById("forecastData").innerHTML=htmlString1;
}
function submitCity(){
    let cityName= document.getElementById("cityform")["city"].value;
    request.open("GET","https://api.openweathermap.org/data/2.5/weather?q=" +cityName 
    + "&APPID=" +APIKEY);
    request.send();
}
function submitforecastCity(){
    let cityName= document.getElementById("cityform")["city"].value;
    forecastrequest.open("GET","https://api.openweathermap.org/data/2.5/forecast?q=" +cityName 
    + "&APPID=" +APIKEY);
    forecastrequest.send();
}
request.onreadystatechange =function(){
    if(this.readyState==4){
        if(this.status==200){
            displayNicely(this.responseText);
           // displayforecast(this.responseText);
        }
        else if(this.status==404)
        {
            document.getElementById("weatherData").innerHTML="<h2>city not found! Please try again. </h2>";
        }
    }
}
forecastrequest.onreadystatechange =function(){
    if(this.readyState==4){
        if(this.status==200){
            //displayNicely(this.responseText);
            displayforecast(this.responseText);
        }
        else if(this.status==404)
        {
            document.getElementById("forecastData").innerHTML="<h2>city not found! Please try again. </h2>";
        }
    }
}