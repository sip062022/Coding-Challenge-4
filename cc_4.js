// Task 1: If Statements // 

let purchaseAmount = 200; // declares variable purchaseAmount
let finalAmount = purchaseAmount; // declares finalAmount variable for the discount

if (purchaseAmount > 100) { // if statement to apply discount if greater than 100
    finalAmount = purchaseAmount * 0.8; // applies 20% discount
}

console.log(`Final amount after discount: $${finalAmount}`); // Displays final purchase amount

// Task 2: For Loop //

let sales = [20, 40, 60, 80, 100]; // Declares the array
let totalSales = 0; // Declares totalSales variable 

for (let i = 0; i < sales.length; i++) {  // Declares for loop 
    totalSales += sales[i]   // Says that totalSales are sum of the numbers in the loop
};

console.log(`Total Sales: $${totalSales}`);  // Displays Total sales amount

// Task 3: While Loop //

let stock = 10; // Defines stock variable
while (stock > 0) { // Initiates while loop to say loop should run until stock = 0
    console.log(`New Value After Decrement of 2: ${stock}`); // Displays New Value
    stock--;stock--; // Decreases stock by 2 for each loop
}