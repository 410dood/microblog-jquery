

const form = document.getElementById("myForm");
form.addEventListener("submit", function() {
  event.preventDefault();

const inputValue = document.getElementById("content").value
//create new <p>tag with content entered into form"
  let newElement = document.createElement("p");
  //add content to <p> tag
  newElement.innerHTML = inputValue;
  //appending new p tag below form
  document.body.appendChild(newElement);
//remove text that is left in form
document.getElementById('content').value=''; //set value to zero
});
