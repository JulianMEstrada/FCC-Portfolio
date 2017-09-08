// Global Document Ready function.
$(document).ready(function(){

// Sounds 
sound0 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3'),
sound1 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3'),
sound2 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3'),
sound3 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');

// Const for colors. 
const red = "red";
const blue = "blue";
const yellow = "yellow";
const green = "green"; 
var strictcon = false;
// Counter html parse
var count = parseInt($("#countHold").html());
// Hide on page load
$(".onbtn").hide();	
$(".startButtonOn").hide();	
$(".startButtonOffOn").hide();
$(".strictOn").hide();
$(".win").hide();	

// On click of interface buttons, on .. off .. start

$(".offbtn").click(function(){ // off btn clicked to turn on
$(".offbtn").hide();	
$(".onbtn").toggle();
$(".startButtonOff").hide();
$(".startButtonOn").show();	
	
});

$(".onbtn").click(function(){ // on btn clicked to turn off
$(".onbtn").hide();	
$(".offbtn").toggle();
location.reload();
});

$(".startButtonOn").on('click', function(){ // start btn
simonGame.nextLevel();

count = 1; // counter
$("#countHold").html(count+"&nbsp;&nbsp;&nbsp;"); // counter html

$(".startButtonOn").hide();	
$(".startButtonOffOn").show();	
});

$(".strictOff").click(function(){ // Strict Off
$(".strictOff").hide();	
$(".strictOn").toggle();
strictcon = true;
});
$(".strictOn").click(function(){ // Strict On
$(".strictOn").hide();	
$(".strictOff").toggle();
strictcon = false;
});


// Color function to identify colors. And simonGame variable.... logic nested.
var simonGame = {currentColor:function(color){

// evaluates if sequence is followed. 
if (color === simonGame.colorLevels[simonGame.step]){

//Win condition. If sequence is followed.
if (simonGame.step===simonGame.colorLevels.length-1) {
count = simonGame.colorLevels.length+1; // counter
$("#countHold").html(count+"&nbsp;&nbsp;&nbsp;"); // counter html
console.log("Completed!");
simonGame.step = 0; 
simonGame.nextLevel();
}
else {
simonGame.step++;
}
}

// Failure condition
else if (color != simonGame.colorLevels[simonGame.step] && strictcon === false){
alert("Wrong");
simonGame.colorLevels.pop();
simonGame.step = 0; 
simonGame.nextLevel();
}


// Failure condition
else if (color != simonGame.colorLevels[simonGame.step] && strictcon === true){
alert("Wrong");
simonGame.colorLevels= [];
simonGame.step = 0; 
simonGame.nextLevel();
console.log('strict bitch');
count = 0;
$("#countHold").html(count);
}

 else if(count === 20) {
 	colorLevels = [];
 	$(".body").hide();
 	$(".win").toggle();		
}

},

// Array of all colors.
colorsArr: [red,blue,yellow,green],
//Empty array for pushed colors.
colorLevels: [],
step: 0,

// Generates random color from color array.
nextLevel: function(){
var randomColor = simonGame.colorsArr[Math.floor(Math.random()*simonGame.colorsArr.length)];
//Push the colors to colorlevels.
simonGame.colorLevels.push(randomColor);
console.log(simonGame.colorLevels);



// Computer Display of colors and sounds for each game level
for(i = 0; i <= simonGame.colorLevels.length; i++){
(function(i){

var timeDel = 1000;
var flickerDel = 500;

if (count>6) {timeDel = 600; flickerDel = 200};

setTimeout(function(){
if (simonGame.colorLevels[i]==='red') {
setTimeout(function()
{	
sound0.play();	
$("#red").css('opacity', '1.0');
setTimeout(function() {
$("#red").css("opacity", "0.7");
}, flickerDel);
}, timeDel);
}

if (simonGame.colorLevels[i]==='blue'){
setTimeout(function()
{	
sound1.play();
$("#blue").css('opacity', '1.0');
setTimeout(function() {
$("#blue").css('opacity', '0.7');
}, flickerDel);
}, timeDel);
}

if (simonGame.colorLevels[i]==='yellow'){
setTimeout(function()
{
sound2.play();
$("#yellow").css('opacity', '1.0');
setTimeout(function() {
$("#yellow").css('opacity', '0.7');
}, flickerDel);
}, timeDel);
}

if (simonGame.colorLevels[i]==='green') {
setTimeout(function()
{
sound3.play();
$("#green").css('opacity', '1.0');
setTimeout(function() {
$("#green").css('opacity', '0.7');
}, flickerDel);
}, timeDel);
} 

}, timeDel * i);
}(i));
}


} // next					
		
};// Simon.Game


// On click of interface buttons by user, code will recognize the color, highlight color, play sound, and add color to verify.
$(document).ready(function(){
$("#red").mousedown(function(){$("#red").css("opacity", "1.0");setTimeout(function(){$("#red").css("opacity", "0.7");}, 500); sound0.play(); simonGame.currentColor(red)});
$("#blue").mousedown(function(){$("#blue").css("opacity", "1.0");setTimeout(function(){$("#blue").css("opacity", "0.7");}, 500); sound1.play(); simonGame.currentColor(blue)});
$("#yellow").mousedown(function(){$("#yellow").css("opacity", "1.0");setTimeout(function(){$("#yellow").css("opacity", "0.7");}, 500); sound2.play();  simonGame.currentColor(yellow)}); 
$("#green").mousedown(function(){$("#green").css("opacity", "1.0");setTimeout(function(){$("#green").css("opacity", "0.7");}, 500); sound3.play();   simonGame.currentColor(green)});
});



});


