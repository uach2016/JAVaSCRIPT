
window.onload = function() {

// the following code adds event listeners to the buttons
// for this exercise, I am going to write the functions for
// what happens when the user clicks on the buttons.
//this code is link to a HTML document which you can find in my HTML forlder is called "index".
//INSPECT THE CODE To get comprehension about everything written below.
  var saveButton = document.getElementById('save-button');
  saveButton.addEventListener('click', addToDoItem, false);//WHEN WE CLICK IN SAVE-BUTTON

  var doneButton = document.getElementById('done-button');
  doneButton.addEventListener('click', markAsDone, false);//WHEN WE CLICK DONE-BUTTON


  function addToDoItem() {
        var formContents = document.getElementById('todo-input').value;//WE GET THE VALUE IN THE INPUT
        var newToDoItemContents = document.createTextNode(formContents);//WITH THE ABOVE VALUE WE CREATE A TextNode
        var newToDoItem = document.createElement('li');//WE CREATE A ITEM IN A LIST


        newToDoItem.appendChild(newToDoItemContents);//IN OUR ITEM LIST WE PUT OUR textNode AS A CHILD

        var toDoList = document.getElementsByClassName('todo-list-items')[0];//WE GET THE FIRST ELEMENT IN OUR CLASS 'todo-list-items'
        var firstLiItem = toDoList.getElementsByTagName('li')[0];//WE GET THE FIRST ITEM IN OUR LIST

        toDoList.insertBefore(newToDoItem, firstLiItem);//WE PUT THE ITEM WE CREATED WITH ITS CHILD BEFORE THE ITEM WE CHOOSE IN OUR CLASS ABOVE.

    }
  function markAsDone() {
        var toDoList = document.getElementsByClassName('todo-list-items')[0];//WE GET THE FIRST ELEMENT IN OUR CLASS 'todo-list-items'
        var removedItem = toDoList.getElementsByTagName('li')[0];//WE GET THE FIRST ITEM IN OUR LIST
        toDoList.removeChild(removedItem);//WE REMOVE THE ITEM WE CHOOSEN
        
        

        var DoneList = document.getElementsByClassName('done-list-items')[0];//WE GET THE FIRST ELEMENT IN OUR CLASS 'done-list-items'
        var firstLiItemd = DoneList.getElementsByTagName('li')[1];//WE GET THE SECOND ITEM IN OUR LIST

        DoneList.insertBefore(removedItem, firstLiItemd);//WE PUT THE ITEM WE REMOVED BEFORE THE ITEM WE CHOOSEN ABOVE IN OUR CLASS 'done-list-items'
 
  }
  
}


