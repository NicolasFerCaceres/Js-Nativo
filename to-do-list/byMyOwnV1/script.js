const form = document.querySelector("#toDoForm");
const toDoBody = document.getElementById("container");
const deleteBtn = document.getElementById("deleteBtn");




toDoBody.addEventListener('click', function(event) {
    // Check if the clicked element has the class "checked"
    if (event.target.classList.contains('checked')) {
        // If it has, remove the class
        event.target.classList.remove('checked');
    } else {
        // If it doesn't have, add the class
        event.target.classList.add('checked');
    }
});

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const toDoElement = document.getElementById('newTask');
    const newLi = document.createElement('li');
    newLi.innerHTML = `<li>${toDoElement.value}</li>`;
    toDoBody.appendChild(newLi); 
});


if (toDoBody && deleteBtn) {
    deleteBtn.addEventListener('click', function () {
        const checkedElements = toDoBody.querySelectorAll('.checked');

        checkedElements.forEach(function (element) {
            toDoBody.removeChild(element);
        });
    });
}