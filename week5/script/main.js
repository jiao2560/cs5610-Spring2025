// Task 1: Prompt user for radius and calculate area
function getRadius() {
    let radius = prompt("Enter the radius of the circle:");
    radius = parseFloat(radius);

    if (isNaN(radius) || radius <= 0) {
        document.getElementById("result").textContent = "Error: Invalid input!";
        return null;
    }

    document.getElementById("radius").textContent = `Value provided by the user: ${radius}`;
    return radius;
}

function calculateArea(radius) {
    if (radius !== null) {
        let area = Math.PI * Math.pow(radius, 2);
        document.getElementById("result").textContent = `Area of the circle: ${area.toFixed(2)}`;
    }
}

// Call functions on page load
let radius = getRadius();
calculateArea(radius);

// Task 2: Populate the shopping list
let shoppingItems = ["bread", "cheese", "green pepper"];
function populateShoppingList(items) {
    let ul = document.querySelector(".shopping");
    ul.innerHTML = ""; // Clear existing content
    items.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
    });
}
populateShoppingList(shoppingItems);

// Task 3: Change list marker type & highlight "green"
function changeListStyle() {
    let ul = document.querySelector(".shopping");
    ul.setAttribute("class", "shopping squareList");
    ul.classList.add("squareList");

    let listItems = ul.getElementsByTagName("li");
    for (let li of listItems) {
        if (li.textContent.includes("green")) {
            li.classList.add("green-text");
        }
    }
}
changeListStyle();

// Task 4: Event listener for updateImage button
let updateButton = document.getElementById("updateImage");
let shoppingCartImg = document.getElementById("shoppingCart");

function toggleButtonText() {
    let newText = updateButton.textContent === "Click Me!" ? "Clicked!" : "Click Me!";
    updateButton.textContent = newText;
    localStorage.setItem("updateButtonText", newText);
}

function updateImageOnce() {
    shoppingCartImg.src = "images/shoppingCart.png";
    shoppingCartImg.alt = "Shopping Cart";
    shoppingCartImg.width = 100;
    shoppingCartImg.height = 100;
    updateButton.removeEventListener("click", updateImageOnce);
}

// Restore button text from local storage when the page loads
document.addEventListener("DOMContentLoaded", function() {
    let savedButtonText = localStorage.getItem("updateButtonText");
    if (savedButtonText) {
        updateButton.textContent = savedButtonText;
    }
});

// Add event listeners
updateButton.addEventListener("click", toggleButtonText);
updateButton.addEventListener("click", updateImageOnce, { once: true });

// Task 5: Change button background color on hover
function changeBackgroundColor(event) {
    event.target.style.backgroundColor = event.target.textContent.toLowerCase();
}

let colorButtons = document.querySelectorAll("#colorButtons button");
colorButtons.forEach(button => {
    button.addEventListener("mouseover", changeBackgroundColor);
});

// Task 6: Event Delegation for color buttons
document.getElementById("colorButtons").addEventListener("mouseover", function(event) {
    if (event.target.tagName === "BUTTON") {
        event.target.style.backgroundColor = "green";
    }
});

// Task 7: Click event for strikethrough on shopping list items
document.querySelector(".shopping").addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
        event.target.style.textDecoration =
            event.target.style.textDecoration === "line-through" ? "none" : "line-through";
    }
});
