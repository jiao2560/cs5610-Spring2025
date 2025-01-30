// Using a for loop to log powers of 2 from 2 to 1024
console.log("Powers of 2 using a for loop:");
for (let i = 2; i <= 1024; i *= 2) {
    console.log(i);
}

// Using a while loop to log powers of 2 from 2 to 1024
console.log("Powers of 2 using a while loop:");
let num = 2;
while (num <= 1024) {
    console.log(num);
    num *= 2;
}

// Prompt user for their name with validation
let userName;
do {
    userName = prompt("Enter your name (must be at least 2 letters and not a number):");

    // Check if input is a number or only 1 character
} while (!userName || userName.trim().length < 2 || !isNaN(userName));

alert("Welcome, " + userName + "!");

// Function to calculate total price
function calculateTotalPrice(billAmount, taxRate = 0.12, tipRate = 0.15) {
    let taxAmount = billAmount * taxRate;
    let tipAmount = billAmount * tipRate;
    return billAmount + taxAmount + tipAmount;
}

// Function to log total price
function logTotalPrice(billAmount) {
    let totalPrice = calculateTotalPrice(billAmount);
    console.log(`For a bill of $${billAmount.toFixed(2)}, the total price including tax and tip is: $${totalPrice.toFixed(2)}`);
}

// Example Usage:
logTotalPrice(100); // Logs total for a $100 bill
logTotalPrice(50);  // Logs total for a $50 bill
