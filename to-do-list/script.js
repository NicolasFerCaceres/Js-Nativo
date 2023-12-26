const form = document.querySelector("#toDoForm");
const toDoBody = document.getElementsByClassName("container");

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const toDoElement = document.getElementById('newTask');
    const newLi = document.createElement('li');
    newLi.innerHTML = '${toDoElement}';
    toDoBody.appendChild(newLi);
    console.log(toDoBody);
})



