//add to do form 
const addToDoForm = document.getElementById('addToDoForm'); 

//new to do text (input tag)
var newToDoText = document.getElementById('newToDoText'); 

//to do list
var toDoList = document.getElementById("toDoList");
addToDoForm.addEventListener('submit', event => { 
    event.preventDefault(); 
    console.log("add function is running"); 
    
    //get the text 
    let title = newToDoText.value; 

    //create a new li 
    let newLi = document.createElement('li'); 
    
    // create a new input 
    let checkbox = document.createElement('input'); 

    //set the input's type to checkbox 
    checkbox.type = "checkbox"; 

    // set the title 
    newLi.textContent = title; 

    
    newLi.appendChild(checkbox);

    var deleteButton = document.createElement("button");
    deleteButton.innerHTML = "delete";
    deleteButton.setAttribute("class", "deleteBtn");
    
    deleteButton.addEventListener('click', function() {
        console.log("delete function is running");
       
        console.log(newLi);
        newLi.innerHTML = "";
      
    });


    
    
    // attach the checkbox to the Li 
    // newLi.appendChild(checkbox); 

    newLi.appendChild(deleteButton);


    // attach the li to the ul 
    toDoList.appendChild(newLi); 

    // empty the input 
    newToDoText.value = ''; 
});

// var deleteButton = document.createElement("button");
//     deleteButton.innerHTML = "delete";
//     deleteButton.setAttribute("class", "btn delete");
    
//     deleteButton.addEventListener('click', function() {
//         console.log(this);
//         console.log(this.parentElement.parentElement);
        
//         var parent = this.parentElement.parentElement;
//         parent.parentElement.removeChild(parent);
//     });

