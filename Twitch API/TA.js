
//Jquery
$(document).ready(function(){

// Twitch Users
var users = ["ESL_SC2","brunofin","comster404","OgamingSC2","cretetion","freecodecamp","storbeck","habathcx","RobotCaleb","noobs2ninjas","ShoutFactoryTV","StreamerHouse"];

// Curent Online / Offline 
var current;

// Current for loop and data
for (var i = 0;i<users.length; i++) {

var url2 = 'https://wind-bow.glitch.me/twitch-api/streams/'+users[i];

$.getJSON(url2,function(data2){

if (data2.stream===null) {current='Currently Offline! ';}
else {current='Currently Live! ';}

});}// DATA 2 and URL 2

// If user does not exist below data will display.
for (var i = 0;i<users.length; i++) {
var url0 = 'https://wind-bow.glitch.me/twitch-api/channels/'+users[i]+'/?callback=?';
$.getJSON(url0).done(function(data0){

var logo;
var status;
var name;

if (data0.error){
logo="img/Twitch.png"
name= data0.message;
status = "No longer exist! "

$("#userInfo").prepend("<div class = 'row'>"+"<div class='col'>"+"<a target='_blank' href="+link+"><img src=' "+logo+"'</a>"+"</div>"+"<div class='col'>"+name+"</div>"+"<div class='col'>"+status+"<div class='last'>"+current+"</div></div>");
}
});}// DATA 0 and URL 0

// Gets Channel data
for (var i = 0;i<users.length; i++) {
var url1 = 'https://wind-bow.glitch.me/twitch-api/channels/'+users[i];
$.getJSON(url1,function(data1){

var logo=data1.logo;
if(logo===null){logo="img/Twitch.png"}
var status=data1.status;
if(status===null){status = "No active Status"}

var name= data1.display_name;

var link = data1.url;
$("#userInfo").prepend("<div class = 'row'>"+"<div class='col'>"+"<a target='_blank' href="+link+"><img src=' "+logo+"'</a>"+"</div>"+"<div class='col'>"+name+"</div>"+"<div class='col'> "+status+"<div class='last'>"+current+"</div></div>");
});}// DATA 1 and URL 1


});//JQUERY 


