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

// Function to validate user selection
function validateSelection(flavor, size) {
    if (!flavor || !size) {
        alert("Please select both a flavor and a size before placing your order.");
        return false;
    }
    return true;
}

// Function to calculate total price
function calculateTotalPrice(flavor, size, toppings) {
    let basePrice = prices.flavors[flavor]; // Get flavor price
    let toppingsPrice = toppings.reduce((total, topping) => total + (prices.toppings[topping] || 0), 0); // Sum up toppings price
    return prices.sizes[size] * (basePrice + toppingsPrice); // Multiply by size multiplier
}

// Function to display order summary
function displayOrderSummary(order) {
    let toppingsText = order.toppings.length > 0 ? order.toppings.join(", ") : "no toppings";
    let summaryText = `You have ordered a ${order.size} ${order.flavor} boba with these toppings: ${toppingsText}. Total Price: $${order.finalPrice.toFixed(2)}`;

    document.getElementById("summary-text").textContent = summaryText;
}

// Function to create and log an order
function placeOrder() {
    const flavor = document.getElementById("flavor").value;
    const size = document.getElementById("size").value;
    const toppings = Array.from(document.getElementById("toppings").selectedOptions).map(option => option.value);

    if (!validateSelection(flavor, size)) return; // Validate selection

    let totalPrice = calculateTotalPrice(flavor, size, toppings);
    let order = { flavor, size, toppings, finalPrice: totalPrice };

    displayOrderSummary(order);
}

// Add event listener to button
document.getElementById("order-button").addEventListener("click", placeOrder);
