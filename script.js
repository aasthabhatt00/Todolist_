document.addEventListener('DOMContentLoaded', (event) => {
    const inputBox = document.getElementById("input-box");
    const listContainer = document.getElementById("list-container");

    function addTask() {
        if (inputBox.value === '') {
            alert("You must write something!");
        } else {
            createTask(inputBox.value);
            saveData();
        }
    }

    function createTask(taskText) {
        let li = document.createElement("li");
        li.innerText = taskText; // Use innerText for text content
        
        let span = document.createElement("span");
        span.textContent = "\u00D7"; // Adds the "×" character
        span.className = "close"; // Add a class to style or identify the span
        span.onclick = function() {
            this.parentElement.remove();
            saveData();
        };

        li.appendChild(span);
        listContainer.appendChild(li);
        inputBox.value = ""; // Clear the input box after adding the task
    }

    inputBox.addEventListener('keypress', function(e) {
 
        if (e.key === 'Enter') {
            addTask();
            e.preventDefault(); // Prevent the default Enter key action
        }
    });

    

    listContainer.addEventListener("click", function(e) {
        if (e.target.tagName === "LI") {
            e.target.classList.toggle("checked");
            saveData();
        }
    }, false);

    document.querySelector(".todo-app button").onclick = addTask;

    function saveData() {
        localStorage.setItem("data", listContainer.innerHTML);
    }

    function showTask() {
        const savedData = localStorage.getItem("data");
        if (savedData) {
            listContainer.innerHTML = savedData;
            // Reattach event listeners to the spans after loading
            const spans = listContainer.getElementsByClassName("close");
            for (let span of spans) {
                span.onclick = function() {
                    this.parentElement.remove();
                    saveData();
                };
            }
        }
    }

    // Call showTask to display tasks saved in localStorage
    showTask();
});
