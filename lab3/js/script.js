// Prices object storing cost for flavors, sizes, and toppings
const prices = {
    flavors: {
        original: 2.5,
        mango: 3.0,
        strawberry: 3.5
    },
    sizes: {
        small: 1.0,
        medium: 1.5,
        large: 2.0
    },
    toppings: {
        boba: 0.5,
        jelly: 0.75,
        pudding: 1.0
    }
};

// Function to calculate total price
function calculateTotalPrice(flavor, size, toppings) {
    let basePrice = prices.flavors[flavor]; // Get flavor price
    let toppingsPrice = toppings.reduce((total, topping) => total + prices.toppings[topping], 0); // Sum up toppings price
    return prices.sizes[size] * (basePrice + toppingsPrice); // Multiply by size multiplier
}

// Function to display order summary
function displayOrderSummary(order) {
    console.log(`You have ordered a ${order.size} ${order.flavor} boba with these toppings: ${order.toppings.join(" ")}`);
    console.log(`Total Price: $${order.finalPrice.toFixed(2)}`);
}

// Function to create and log an order
function placeOrder(flavor, size, toppings) {
    let totalPrice = calculateTotalPrice(flavor, size, toppings);
    let order = {
        flavor: flavor,
        size: size,
        toppings: toppings,
        finalPrice: totalPrice
    };
    displayOrderSummary(order);
}

// Test Cases
placeOrder("original", "medium", ["boba", "jelly"]);  // Expected: $5.63
placeOrder("strawberry", "large", ["pudding"]);       // Expected: $9.00
placeOrder("mango", "small", ["boba", "jelly", "pudding"]); // Expected: $5.25
