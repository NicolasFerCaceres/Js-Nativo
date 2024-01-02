
// Here I am declaring the variables that i will use
const form = document.getElementById('taskForm');
const formInput = document.getElementById('newTask');
const formBtn = document.getElementById('newTaskBtn');
const list = document.getElementById('list');
// I create a list to store the inputs 
const taskList = [];
// Here is the function that will take the form and manipulate it 

displayElements();

// THIS CODE WILL BRING ME THE CHANCE TO STORE THE INFO IN THE CACHE, THIS WILL BRING THE POSIBILITY TO THE USER TO NO LOOSE HIS INFO.
form.addEventListener('submit', function(event){
    event.preventDefault();
    // Here I will have all the stored information in the cache or in case that is empty it will create an empty array.
    const storedItems = JSON.parse(localStorage.getItem('items')) || [];
    // This will add the Task to the stored elements
    storedItems.push(formInput.value);
    // This will store all the data in the localStorage.
    localStorage.setItem('items', JSON.stringify(storedItems));
    // This will resete the input field
    this.reset();
    displayElements()
});

function displayElements() {
    // Clear the list 
    list.innerHTML = '';
    // Create the local variable that will handle the storage and input data.
    const storedItems = JSON.parse(localStorage.getItem('items')) || [];
    // With for each I will travel to the list and 
    storedItems.forEach(function(item, index){ //I pass the value and the index of each element in the function.
        // I create the li to later add the text content
        const li = document.createElement('li');
        // Adding the text
        li.textContent = item;        
        // Appending the li to the list.
        
        // Creaating the delete button
        const deleteBtn = document.createElement('button');
        // Adding delete button text
        deleteBtn.textContent = 'X'
        // Delete function 
        deleteBtn.addEventListener('click', function(){
            storedItems.splice(index, 1);
            localStorage.setItem('items', JSON.stringify(storedItems));
            displayElements();
            console.log(localStorage)
        });
        // Appending li and delete BTN
        li.appendChild(deleteBtn);

        list.appendChild(li);
    });
}

/* 
// THE DIFERENCE OF THE PREVOUIS CODE IS THAT HEAR I STORE THE INFO IN A CONST AND IS RENDERED LATER, GIVING ME MORE CONTROL OF THE DATA.

form.addEventListener('submit', function(event){   
    // THIS PREVENT THE DEFAULT FORM SUBMISSION BEHAIVOR
    event.preventDefault();
    // Const to store the input data.
    const userInput = formInput.value;
    // This will store the data inside of the list
    taskList.push(userInput);
    // This will resete the input field
    this.reset()
    // This will call the funtion that will show the tasks
    list.innerHTML = '';

    displayTasks ()
    
    function displayTasks () {
        // This will take every element in the list and will make something with each one
        taskList.forEach(task => {
            // Here I am creating a tag that later I will inject the text of the task inside
            const liTask = document.createElement('li');
            // Injecting the text inside.
            liTask.textContent = task;
            // Appending the element to the ul(list)
            list.appendChild(liTask);
        });
    };

// THIS IS THE FIRST TRY, THIS ONLY ADD ELEMENTS AND ANYTHING ELSE.
    
    // Const to store the input value
    const userInput = formInput.value;
    // Create a li element
    const liTask = document.createElement('li')
    // With this I will add the task text.
    liTask.textContent = userInput;
    // Now I will add this li element to the ul tag in the index.html
    list.appendChild(liTask)
    // This will resete the input variable field.
    formInput.value= ''; 
});

 */
