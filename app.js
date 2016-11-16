/*
IP - user item through the form
OP - item added to the list with option to check or delete it

1. Add item using click or 'enter'

listen to the event click or enter
take value from the form
append new div with the item to the site

2. Check item



3. Delete item

*/

//stores all the information for the shopping list
var state = {
  items: []
};

//Modify state

  //adds new item to state
function addNewItem(userInput) {
  state.items.push({
    name: userInput,
    checked: false
  });
};

function checkItem(index) {
  state.items[index].checked = true;
};

function deleteItemFromArray(index){
  state.items.splice(index, 1);
}



//Render state

function renderList(selector) {
  var listHTML = [];
  for (var i = 0; i < state.items.length; i++) {
    listHTML.push(
      '<li class='+'"shoppingItem'+ i +'"">'+
      '<span class="shopping-item" id="' + i + '">' + state.items[i].name + '</span>' +
      '<div class="shopping-item-controls">' +
      '<button class="shopping-item-toggle" id="' + i + '">' +
      '<span class="button-label">check</span>' +
      '</button>'+
      '<button class="shopping-item-delete" id="' + i + '">' +
      '<span class="button-label">delete</span>' +
      '</button>' +
      '</div>' +
      '</li>'
    )};
  return $(selector).html(listHTML);
};

function checkItem(selector) {
  return $(selector).toggleClass('shopping-item__checked');
}

function deleteItem(selector){
  return $(selector).remove();
}

//Event listeners

$('#js-shopping-list-form').on('submit', function(event){
  event.preventDefault();
  var name = $('#shopping-list-entry').val();
  addNewItem(name);
  renderList($('.shopping-list'));

  $('.shopping-item-toggle').on('click', function(event){
    var itemId = '.shopping-item' + '[id='+$(this).attr('id')+']';
    console.log(itemId);
    checkItem(itemId);
  });

  $('.shopping-item-delete').on('click', function(event){
    var index = $(this).attr('id');
    deleteItemFromArray(index);
  });

  $('.shopping-item-delete').on('click', function(event){
    var selector = $(this).closest("li");
    deleteItem(selector);
  });

});


// //adds item to the storage
// function addItem(storage, item) {
//   storage.items.push(item);
// };
//
// //add html with the new item to the element
// //why if i write argument list (storage, list, element) it is not reading list as state.items
// function addItemHTML(storage, element) {
//   var itemHTML = storage.items.map(function(item) {
//     //how to make code below more readable???
//     return '<li><span class="shopping-item">' + item + '</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>'
//   });
//   element.html(itemHTML);
// };
//
// //check item by appending class
// function checkItem(selector){
//   debugger
//   selector.closest('span').toggleClass('shopping-item__checked');
// };
//
//
//
// $('#js-shopping-list-form').on('submit', function(event){
//   event.preventDefault();
//   addItem(state, $('#shopping-list-entry').val());
//   addItemHTML(state, $('.shopping-list'));
// });
//
// $('.shopping-item-toggle').on('click', function(event){
//   debugger
//   var selector = $(this);
//   checkItem(selector);
// });
