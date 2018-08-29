$(document).ready(function(){
// Holds Inputs.

var inputs = [""];
// Store currents input string.

var totalString; 
//Operators Validation . NO dot.

var operatorsOne = ["+","-","/","*"];
//Operators Validation WITH dot.

var operatorsTwo = ["."];
//Numbers for Validation.

var numbers = [0,1,2,3,4,5,6,7,8,9];

function getValue(input){
if(operatorsTwo.includes(inputs[inputs.length-1]===true && input===".")){
	console.log("Duplicat '.' ")
}
else if(inputs.length-1 && operatorsOne.includes(input)===false){
	inputs.push(input);
}
else if(operatorsOne.includes(input[inputs.length-1])===false){
	inputs.push(input);
}
else if (numbers.includes(Number(input))) {
	inputs.push(input);
}
update();
}

function update(){
totalString = inputs.join("");
$("#calc").html(totalString);
}

// Function that adds up total evaluation. 

function getTotal(){
totalString=inputs.join("");
$("#calc").html(eval(totalString));
}
//On click of button do the following. 

$("a").on("click",function(){
// When AC is activated.

if (this.id==="clear") {

location.reload();
}
// When total is activated.

else if (this.id==="total"){
	getTotal();
}
// Other Evaluations.

else{
if (inputs[inputs.length-1].indexOf("+","-","/","*",".")=== -1) {
	getValue(this.id);
}
else{
	getValue(this.id);

}
}
})
});