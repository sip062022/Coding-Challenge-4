// Task 1: If Statements // 

let purchaseAmount = 200; // declares variable purchaseAmount
let finalAmount = purchaseAmount; // declares finalAmount variable for the discount

if (purchaseAmount > 100) { // if statement to apply discount if greater than 100
    finalAmount = purchaseAmount * 0.8; // applies 20% discount
}

console.log(`Final amount after discount: $${finalAmount}`); // Displays final purchase amount