$(document).ready(function(){

// Hide tic tac toe table.
$(".row").hide();
$(".end").hide();
$(".endGame").hide();
$(".endGameTie").hide();


// Store vals for winner.
var turns= ["#","#","#","#","#","#","#","#","#"];

//keeps track if it is the computers turn.
var gameLive = false;

//Keeps track of computers turn so no loop.
var count = 0; 
//Change computers turn to X and computers to O.

$('#turnX').click(function(){
$(".starter").hide();
$(".row").toggle();
turn = "O";
computersTurn= "X";
$("#turnX").removeClass("btn-primary");
$("#turnO").addClass("btn-primary");
reset();
});

$('#turnO').click(function(){
$(".starter").hide();
$(".row").toggle();
turn = "X";
computersTurn= "O";
$("#turnO").removeClass("btn-primary");
$("#turnX").addClass("btn-primary");
reset();
});

function reset(){
  turns= ["#","#","#","#","#","#","#","#","#"];
  count = 0;
  $(".tic").text("#");
  gameLive= false;
}
function computerTurn (){
// Break while loop.
var taken = false;
while(taken===false&& count !==5){
// Generates computers turn.

var computersMove=(Math.random()*10).toFixed();
var move= $("#"+computersMove).text();
if (move==="#") {
  $("#"+computersMove).text(computersTurn);
taken=true;
turns[computersMove] = computersTurn; 
}
}
}

function playerTurn(turn,id){
  var spotTaken = $("#"+id).text();
  if (spotTaken ==="#"){
    count++;
    turns[id]=turn;
    $("#"+id).text(turn);
    winCondition(turns,turn);
    if(gameLive===false){
      computerTurn();
      winCondition(turns,computersTurn);
    }
  }
}
// Logic if game finds that the user wins. 

function winCondition(turnArray, currentTurn){
  if (turnArray[0]===currentTurn && turnArray[1]===currentTurn && turnArray[2]===currentTurn ){
    gameLive = true;
 $(".row").hide();
    $(".end").toggle().html("Player "+currentTurn+" wins.");
    $(".endGame").toggle();

  } else if (turnArray[3]===currentTurn && turnArray[4]===currentTurn && turnArray[5]===currentTurn ){
    gameLive = true;
    $(".row").hide();
    $(".end").toggle().html("Player "+currentTurn+" wins.");
    $(".endGame").toggle();
   

  } else if (turnArray[6]===currentTurn && turnArray[7]===currentTurn && turnArray[8]===currentTurn ){
    gameLive = true;
 $(".row").hide();
    $(".end").toggle().html("Player "+currentTurn+" wins.");
    $(".endGame").toggle();


  } else if (turnArray[0]===currentTurn && turnArray[3]===currentTurn && turnArray[6]===currentTurn ){
    gameLive = true;
 $(".row").hide();
    $(".end").toggle().html("Player "+currentTurn+" wins.");
    $(".endGame").toggle();


  } else if (turnArray[1]===currentTurn && turnArray[4]===currentTurn && turnArray[7]===currentTurn ){
    gameLive = true;
 $(".row").hide();
    $(".end").toggle().html("Player "+currentTurn+" wins.");
    $(".endGame").toggle();


  } else if (turnArray[2]===currentTurn && turnArray[5]===currentTurn && turnArray[8]===currentTurn ){
    gameLive = true;
 $(".row").hide();
    $(".end").toggle().html("Player "+currentTurn+" wins.");
    $(".endGame").toggle();
 

  }else if (turnArray[0]===currentTurn && turnArray[4]===currentTurn && turnArray[8]===currentTurn ){
    gameLive = true;
 $(".row").hide();
    $(".end").toggle().html("Player "+currentTurn+" wins.");
    $(".endGame").toggle();


      }else if (turnArray[2]===currentTurn && turnArray[4]===currentTurn && turnArray[6]===currentTurn ){
    gameLive = true;
    $(".row").hide();
    $(".end").toggle().html("Player "+currentTurn+" wins.");
    $(".endGame").toggle();

  }else if (turnArray[1] != "#" && turnArray[2]!= "#" && turnArray[3] != "#" && turnArray[4] != "#" && turnArray[5] != "#" && turnArray[6] != "#" && turnArray[7] != "#" && turnArray[8] != "#" && turnArray[9]!= "#" ) {
    $(".row").hide();
    $(".tie").toggle().html("This game is a tie.");
    $(".endGameTie").show();
    console.log("tie");
 
   
  }

}



$(".tic").click(function(){
  var slot = $(this).attr('id');
  playerTurn(turn,slot);
});
});