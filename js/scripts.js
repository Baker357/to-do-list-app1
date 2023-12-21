function newItem(){

    // //javascript
    // //1. Adding a new item to the list of items: 
    //    let li = document.createElement("li");
    //    let inputValue = document.getElementById("input").value;
    //    let text = document.createTextNode(inputValue);
    //    li.appendChild(text);
    
    //    if (inputValue === '') {
    //      alert("You must write something!");
    //    } else {
    //      let list = document.querySelector('#list');
    //      list.appendChild(li);
    //    }
    
    //  //2. Crossing out an item from the list of items:
    //    function crossOut() {
    //          li.classList.toggle("strike");
    //      }
    
    //      li.addEventListener("dblclick",crossOut);
    
    //  //3(i). Adding the delete button "X": 
    //    let crossOutButton = document.createElement("crossOutButton");
    //      crossOutButton.appendChild(document.createTextNode("X"));
    //      li.appendChild(crossOutButton);
    
    //      crossOutButton.addEventListener("click", deleteListItem);
    //  //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
    //    function deleteListItem(){
    //          li.classList.add("delete")
    //      }
    //  // 4. Reordering the items: 
    //    $('#list').sortable();
    
    // }
    
  

   // 1. Adding a new item to the list:
    
      let li = $('<li></li>');
      let inputValue = $('#input').val();
      li.append(inputValue);
    
      if (inputValue === '') {
        alert("You must write something!");
      } else {
        $('#list').append(li);
      }
     // 2. Crossing an item out:
      function crossOut() {
            li.toggleClass("strike");
        }
    
        li.on("dblclick", function crossOut() {
            li.toggleClass("strike");
        });
    //3. Adding a delete button
      let crossOutButton = $('<crossOutButton></crossOutButton>');
      crossOutButton.append(document.createTextNode('X'));
      li.append(crossOutButton);
    
       crossOutButton.on("click", deleteListItem);
       function deleteListItem(){
     		li.addClass("delete")
     	}
       $('#list').sortable();
}

//    //jQuery Code
//    // 1. Adding a new item to the list:
    
//    let li = $('<li></li>');
//    let inputValue = $('#input').val();
//    li.append(inputValue);
 
//    if (inputValue === '') {
//      alert("You must write something!");
//    } else {
//      $('#list').append(li);
//    }
//   // 2. Crossing an item out:
//    function crossOut() {
//          li.toggleClass("strike");
//      }
 
//      li.on("dblclick", function crossOut() {
//          li.toggleClass("strike");
//      });
//  //3. Adding a delete button
//    let crossOutButton = $('<crossOutButton></crossOutButton>');
//    crossOutButton.append(document.createTextNode('X'));
//    li.append(crossOutButton);
 
//     crossOutButton.on("click", deleteListItem);
//     function deleteListItem(){
//       li.addClass("delete")
//     }
//     $('#list').sortable();
// }

/*
add class
let inputs = $('input');
inputs.addClass('my-class');

$('.selectedElement').append('<li>some item</li>').
Tip: You can reuse createTextNode('X') in jQuery like this: deleteButton.append(document.createTextNode('X'));

dom transversal
let input = $('input');
input.parent(); // Get the parent element
input.children(); // Get all children
input.closest('.container'); // Go up the hierarchy of parents until the selector matches
input.siblings(); // Get all siblings

$('.notification')
  .addClass('bright-red')
  .delay(300)
  .removeClass('bright-red')

let newElement = document.createElement('div');
newElement.classList.add('new-class');
newElement.innerText = 'Content is here!';
document.querySelector('body').appendChild(newElement);


$ version of foreach 
$('input').each(function (i) {
  let inputValue = $(this).val();
  let inputName = $(this).attr('name');
  if(inputValue().length < 1){
    console.log('Please fill out the ' + inputName + ' field')
  }
});

var imageSource =  $('.my-image').attr('src');
console.log(imageSource); // this will log: https://picsum.photos/200/300

show or hide elements
let inputs = $('input');
inputs.show(); // Make the element(s) visible
inputs.hide(); // Hide the element(s)

inputs.fadeOut(); // Fade the element(s) out and then hide them
inputs.fadeIn(); // Fade the element(s) in and show them
inputs.fadeToggle(); // Fade the element(s) in or out depending on whether they're currently visible or not

inputs.slideDown(); // Slide the element(s) out of view and then hide them
inputs.slideUp(); // Slide the element(s) into view and show them
inputs.slideToggle(); // Slide the element(s) in or out

Events 
$('input').on('click', function (event) {
  // Do something
});
$('input').off('click'); // Remove all 'click' listeners

to test for errors and log it.
.catch(function(err){
  console.log('Caught an error:' + err.statusText);
});
*/