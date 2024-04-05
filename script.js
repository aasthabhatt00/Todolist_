const inputBox = document.getElementById("input-box"); // Corrected to match the case in HTML
const listContainer = document.getElementById("list-container");
function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00D7"; // This will add a "×" character to the span
        li.appendChild(span); // Corrected this line
    }
    inputBox.value = ''; // Clear the input box after adding the task
}