document.addEventListener('DOMContentLoaded', (event) => {
    const inputBox = document.getElementById("input-box");
    const listContainer = document.getElementById("list-container");

    function addTask() {
        if (inputBox.value === '') {
            alert("You must write something!");
        } else {
            let li = document.createElement("li");
            li.innerText = inputBox.value; // Use innerText for text content
            let span = document.createElement("span");
            span.textContent = "\u00D7"; // Adds the "×" character
            span.className = "close"; // Add a class to style or identify the span
            li.appendChild(span);
            listContainer.appendChild(li);
            inputBox.value = ""; // Clear the input box after adding the task

            // Adding click event to the newly created span for removal
            span.onclick = function() {
                this.parentElement.remove();
            };
        }
    }

    // Event listener for the Enter key in the input box
    inputBox.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') { // Checking if the pressed key is Enter
            addTask();
            e.preventDefault(); // Prevent the default Enter key action
        }
    });

    // Event delegation for toggling 'checked' class on list items
    listContainer.addEventListener("click", function(e) {
        if (e.target.tagName === "LI") {
            e.target.classList.toggle("checked");
        }
    }, false);

    // Attach addTask function to the button via JS for click action
    document.querySelector(".todo-app button").onclick = addTask;
});
