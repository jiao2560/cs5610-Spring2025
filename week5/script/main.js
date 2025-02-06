// Task 1: Prompt user for radius and calculate area
function getRadius() {
    let radius = prompt("Enter the radius of the circle:");
    radius = parseFloat(radius);

    if (isNaN(radius) || radius <= 0) {
        document.getElementById("result").textContent = "Please enter a valid positive number.";
        return null;
    }

    document.getElementById("radius").textContent = `Value provided by the user: ${radius}`;
    return radius;
}

function calculateArea(radius) {
    if (radius !== null) {
        let area = Math.PI * Math.pow(radius, 2);
        document.getElementById("result").textContent = `The area of the circle is: ${area.toFixed(2)}`;
    }
}

// Call functions when the script loads
let radius = getRadius();
calculateArea(radius);

// Task 2: Populate the shopping list
let shoppingItems = ["bread", "cheese", "green pepper"];
function populateShoppingList(items) {
    let ul = document.querySelector(".shopping");

    if (!ul) {
        console.error("Shopping list element not found.");
        return;
    }

    ul.innerHTML = ""; // Clear existing content

    items.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
    });
}
populateShoppingList(shoppingItems);

// Task 3: Change list marker type & highlight "green"
function applySquareListClass() {
    let ul = document.querySelector(".shopping");
    if (ul) {
        ul.classList.add("squareList");
    }
}

function applySquareListUsingAttribute() {
    let ul = document.querySelector(".shopping");
    if (ul) {
        ul.setAttribute("class", "shopping squareList");
    }
}

function highlightGreenItems() {
    let listItems = document.querySelectorAll("li");

    listItems.forEach(li => {
        if (li.textContent.toLowerCase().includes("green")) {
            li.classList.add("green-text");
        }
    });
}

// Apply styles when the page loads
applySquareListClass();
highlightGreenItems();

// Task 4: Event listener for updateImage button
const updateImageButton = document.getElementById("updateImage");

function toggleButtonText() {
    if (updateImageButton) {
        let newText = updateImageButton.textContent === "Click Me!" ? "Clicked!" : "Click Me!";
        updateImageButton.textContent = newText;
        localStorage.setItem("updateImageButtonText", newText);
    }
}

function restoreButtonText() {
    if (updateImageButton) {
        let savedText = localStorage.getItem("updateImageButtonText");
        if (savedText) {
            updateImageButton.textContent = savedText;
        }
    }
}

// Restore button text when the page loads
document.addEventListener("DOMContentLoaded", restoreButtonText);

// Add event listener for toggling text
if (updateImageButton) {
    updateImageButton.addEventListener("click", toggleButtonText);
}

// Task 5: Update image attributes (only runs once)
function updateImage() {
    let img = document.getElementById("shoppingCart");
    if (img) {
        img.src = "images/shoppingCart.png";
        img.alt = "Shopping Cart";
        img.width = 200;
        img.height = 200;
    }

    updateImageButton.removeEventListener("click", updateImage);
}

// Attach event listener for image update (only runs once)
if (updateImageButton) {
    updateImageButton.addEventListener("click", updateImage, { once: true });
}

// Task 6: Change background color based on button text
function changeBackgroundColor(event) {
    let target = event.target;

    // Ensure the event was triggered by a BUTTON
    if (target.tagName === "BUTTON") {
        let color = target.textContent.trim().toLowerCase(); // Normalize text
        document.body.style.backgroundColor = color;
    }
}

// Attach event listener to color buttons inside #colorButtons
document.querySelectorAll("#colorButtons button").forEach(button => {
    button.addEventListener("mouseover", changeBackgroundColor);
});

// Task 7: Event Delegation for color buttons (turns background green)
document.getElementById("colorButtons").addEventListener("mouseover", (event) => {
    if (event.target.tagName === "BUTTON") {
        event.target.style.backgroundColor = "green";
    }
});

// Task 8: Click event for strikethrough on shopping list items
document.querySelector(".shopping").addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        event.target.style.textDecoration =
            event.target.style.textDecoration === "line-through" ? "none" : "line-through";
    }
});


