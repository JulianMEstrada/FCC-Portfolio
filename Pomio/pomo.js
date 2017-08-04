$(document).ready(function(){
// Vars 
var alarm = new Audio('Pomio/ring.mp3');
var display = parseInt($("#timehold").html());	
var count = parseInt($("#breakhold").html());
var countS = parseInt($("#sessionhold").html());
var bek;
var timeB;





$("#stop").click(function(){
alarm.pause();
display = 1;
clearInterval(counter);
clearInterval(counterB);
});

// Add 1 to break time.
$("#breakup").click(function(){
		count +=1;
$("#breakhold").html(count);
});
// Minus 1 to break time as long as count is greater than 0.
$("#breakdown").click(function(){
	if (count>1) {count-=1;
$("#breakhold").html(count);
} // If count 
});// Minus 1 to break 

// Add 1 to session time.
$("#sessionup").click(function(){
		countS +=1;
		display = countS;

$("#sessionhold").html(countS);
$("#timehold").html(display);
});
// Minus 1 to break time as long as count is greater than 0.
$("#sessiondown").click(function(){
	if (countS>1) {countS-=1; display = countS;
$("#timehold").html(display);
$("#sessionhold").html(countS);
} // If count 
});// Minus 1 to break 


// Count Down function.

$("#startB").hide();
$("#start").click(function(){
$("#start").hide();
$("#sessionhold").hide();
$("#sessiondown").hide();
$("#sessionup").hide();
$("#breakhold").hide();
$("#breakdown").hide();
$("#breakup").hide();
$("#stop").hide();
$("#sees").hide();
$("#beeb").hide();

countS*=60;
var counter = setInterval(timer,1000)
function timer(){
countS-=1;
if (countS===0) {

alarm.play();
setTimeout(function(na) { alert("Pomio session time is now up. Press play to begin break."); }, 1000);
clearInterval(counter);
$("#start").hide();
$("#startB").show();
$("#stop").show();
display = count;
bek();
}

$("#timehold").html(countS);
if (countS%60>=10) {
$("#timehold").html(Math.floor(countS/60)+":"+countS%60);
}
else{
$("#timehold").html(Math.floor(countS/60)+":"+"0"+countS%60);
}
};
});




function bek(){
display = count;
$("#startB").click(function(){

	$("#startB").hide();
	$("#stop").hide();

var counterB = setInterval(timerB,1000);
count*=60;

function timerB(){
count-=1;
if (count===0) {
alarm.play();
setTimeout(function(naB) { alert("Pomio break time is up, please reset Primo."); }, 1000);
clearInterval(counterB);

}
$("#timehold").html(display);
if (count%60>=10) {
$("#timehold").html(Math.floor(count/60)+":"+count%60);
}
else{
$("#timehold").html(Math.floor(count/60)+":"+"0"+count%60);
}
};
});
};








// Count Down function.


// Reset
$("#restart").click(function(){
location.reload();
});

});// Java Function ready. 
