
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
    storedItems.forEach(function(item){
        // I create the li to later add the text content
        const li = document.createElement('li');
        // Adding the text
        li.textContent = item;
        // Appending the li to the list.
        list.appendChild(li);
    });
}
