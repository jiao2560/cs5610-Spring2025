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
