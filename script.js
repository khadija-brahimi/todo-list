let form = document.getElementById("form");
let task = document.getElementById("task");
let taskList = document.getElementById("taskList");

form.addEventListener("submit", function(event) {
    event.preventDefault();

     let li = document.createElement("li");
    li.textContent = task.value;

    let button = document.createElement("button");
    button.textContent = "delet";

    li.appendChild(button);
    taskList.appendChild(li);

    button.addEventListener("click", function() {
        li.remove();
    });

    li.addEventListener("click", function() {
        li.classList.toggle("completed");
    });

    task.value = "";
});