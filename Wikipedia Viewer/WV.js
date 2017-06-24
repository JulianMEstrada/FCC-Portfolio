$(document).ready(function(){
//When search is activated 
$('#search').click(function(){
//Get Search input

var searchTerm= $('#searchTerm').val();
//API url
var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+searchTerm+"&format=json&callback=?";

$.ajax({
type:"GET",
url:url,
async:false,
dataType:"json",
success:function(data){
console.log(data);
$('#output').html(''); // erase outputed data so new search is free.
$('#searchTerm').val(''); // erase search term once looked up.
for (var i = 0; i<data[1].length;i++) {
$('#output').prepend("<li><a target= _blank href="+data[3][i]+">"+data[1][i]+"</a><p>"+data[2][i]+"</p></li>");
} // for loop
}, // data
error: function(errorMessage){
alert("Error, please refresh page.");
}//error
});//ajax
});//search click function

$('#searchTerm').keypress(function(e){    // When Enter is pressed, then click function will run.
if (e.which==13) {
$('#search').click();
}
});// When Enter is pressed, then click function will run.



});//document ready
