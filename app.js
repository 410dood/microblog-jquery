
//
// const form = document.getElementById("myForm");
// form.addEventListener("submit", function() {
//   event.preventDefault();


$(document).ready(function(){

//delete button
$( document ).on( "click", "#delete", function() {
    $(this.parentElement.parentElement).remove();
} );

$("#submit").on('click', function(){
	event.preventDefault();
	var newBlogPost = $('#content').val();
	console.log(newBlogPost);
  //create variable for date
  var date = Date();
  //create variable for delete button
	var deleteButton = '<button id="delete" class="btn btn-danger"><span class="glyphicon glyphicon-minus" aria-hidden="true"></span></button>';
  //add a box (panel) for new blog post. Make it appear top->botton new->old
  // $('#blogBox').prepend('<div class="panel-info:after"><div class= "panel-body:after"><div class="panel-heading:after">'+ newBlogPost+date+deleteButton+'</div></div></div>');
  $('#blogBox').prepend('<h1><h2>' + newBlogPost + deleteButton + '</h1></h2>');
  // $('#blogBox').prepend('<div class="panel panel-default"><div class="panel panel-body:after">'+ newBlogPost+'</div></div>');
  // $('#blogBox').prepend('<div class="panel panel-info"> '+ date +'<div class="panel-heading">' + deleteButton + '<div class="panel-body">" + 'newBlogPost' + </div></div></div>');


// deleteButton+date+

//
//   function prependText() {
//     var txt1 = "<p>Text.</p>";              // Create text with HTML
//     var txt2 = $("<p></p>").text("Text.");  // Create text with jQuery
//     var txt3 = document.createElement("p");
//     txt3.innerHTML = "Text.";               // Create text with DOM
//     $("p").prepend(txt1, txt2, txt3);       // Prepend new elements
// }




//Panel with panel-info class
//Panel Content
  // $('#blogBox').prepend('<div class="panel panel-info"> '+ date +'<div class="panel-heading">' + deleteButton + '<div class="panel-body">" + 'newBlogPost' + </div></div></div>');
// $('#blogContent').append('<div class="panel panel-default"><div class="panel-body">'+ newBlogPost+deleteButton+'</div></div>');

// $("#blogBox").prepend(function(n){
//            return "<b>This p element has index " + n + "</b>. ";

});


});
//
// $'#blogBox').prepend(newBlogPost);

//
// });

// '<id #blogBox>' + Date()
//
// const inputValue = document.getElementById("content").value
// //create new <p>tag with content entered into form"
//   let newElement = document.createElement("p");
//   //add content to <p> tag
//   newElement.innerHTML = inputValue;
//   //appending new p tag below form
//   document.body.appendChild(newElement);
// //remove text that is left in form
// document.getElementById('content').value=''; //set value to zero
// });
//
// $(document).ready(function(){
//     $("form").submit(function(){
//               event.preventDefault();
//         alert("Submitted");
//     });
//
//
//
//
//     $(document).ready(function(){
//
//     //delete button
//     $( document ).on( "click", "#delete", function() {
//         $(this.parentElement.parentElement).remove();
//     } );
//
//     $("#submit").on('click', function(){
//     	event.preventDefault();
//     	var newBlogPost = $('#content').val();
//     	console.log(newBlogPost);
//     	var deleteButton = '<button id="delete" class="btn btn-danger"><span class="glyphicon glyphicon-minus" aria-hidden="true"></span></button>';
//     $('#blogContent').append('<div class="panel panel-default"><div class="panel-body">'+ newBlogPost+deleteButton+'</div></div>');
//
//     });
//
//
//     });
