// Api Forcast : api.openweathermap.org/data/2.5/weather?id=2172797
// key : 3eee4fff74819fdb76aac7df9901fe75
$(document).ready(function(){
// All var statments
	var lat;
	var lon;
    var fTemp;
    var cTemp;
    var kTemp;
    var tempSwap;
    var now = new Date();
    var hours = now.getHours();
    // API to get geo location
$.getJSON("http://ip-api.com/json",function(data2){
	lat = data2.lat;
	lon = data2.lon;

//Open Weather API using geo location
var api = 'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid=3eee4fff74819fdb76aac7df9901fe75';
//JSON call to Open Weather data
$.getJSON(api,function(data){
var weatherType=data.weather[0].description;
var kTemp = data.main.temp;
var humidity = data.main.humidity;

var maxTemp = data.main.temp_max;
var mTemp;

var windSpeed = data.wind.speed;
windSpeed = (2.237*(windSpeed)).toFixed(1);
var city = data.name;
var icon = data.weather[0].icon ;
var time = new Date();
var iconUrl = "http://openweathermap.org/img/w/"+icon+".png";
console.log(icon);
console.log(api);
console.log(time);

// Temp In Kelvin
fTemp = (kTemp*(9/5)-459.67).toFixed(1);
maxTemp = (kTemp*(9/5)-459.67).toFixed(1);

//Temp in F 
cTemp = (kTemp - 273).toFixed(1);
mTemp = (maxTemp - 273).toFixed(1);

// Display data in html
$('#city').html("City: "+city);
$('#time').html(time);
$('#weatherType').html(weatherType);
$('#windSpeed').html("Wind Speed: "+windSpeed + " mph")
$('#humidity').html("Humidity: " +humidity)
$('#maxTemp').html("Max:"+maxTemp+ "&#8457;").click(function(){

if (tempSwap===false){
$("#maxTemp").html("Max:"+maxTemp + "&#8457;");
tempSwap=true;
}
else{
$("#maxTemp").html("Max:"+mTemp + "&#8451;");
tempSwap=false;
}

}); // #maxTemp function


$(iconW).attr("src",iconUrl);
$("#fTemp").html(fTemp+ " &#8457;").click(function(){
// F to C temp on click 
if (tempSwap===false){
$("#fTemp").html(fTemp + " &#8457;");
tempSwap=true;
}
else{
$("#fTemp").html(cTemp + " &#8451;");
tempSwap=false;
}

}); // #Temp function

// Change Themometer based of temp

if(fTemp <= -30){
$(themo).attr("src","Img/Ticon/fTemp<=-30.png")
}
else if (fTemp <= 30){
$(themo).attr("src","Img/Ticon/fTemp<=30.png")	
}
else if (fTemp <= 69){
$(themo).attr("src","Img/Ticon/fTemp<=69.png")
}
else if (fTemp <=89){
$(themo).attr("src","Img/Ticon/fTemp<=89.png")
}
else if (fTemp <=120){
$(themo).attr("src","Img/Ticon/fTemp<=120.png")
}

// Change background Image based off temp and weather type 
//18-19 night
 if (hours > 17 && hours < 20){
$('body').css('background-image','url(Img/background/night.jpg)');
}
//20-21 night
else if (hours > 19 && hours < 22){
$('body').css('background-image','url(Img/background/night.jpg)');
}
//22-4 night
else if (hours > 21 || hours < 5){
$('body').css('background-image','url(Img/background/night.jpg)');
}
else if(fTemp <=39){
$('body').css('background-image','url(Img/background/cold.jpg)');
}
else if (fTemp<=75){
$('body').css('background-image','url(Img/background/scold.jpg)');
}
else if (fTemp<=120){
$('body').css('background-image','url(Img/background/hot.jpg)');
}
else if (weatherType ="thunderstorm"||"rain" ||"shower rain"){
$('body').css('background-image','url(Img/background/rain.jpg)');
}
else if (weatherType = mist){
$('body').css('background-image','url(Img/background/mist.jpg)');
}
else if (weatherType = "broken clouds" || "scattered clouds"){
$('body').css('background-image','url(Img/background/cloud.jpg)');
}


});//JSON call to Open Weather data

});// API to get geo location

});// Document ready function






