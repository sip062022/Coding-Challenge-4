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

// Task 4: Do...While Loop //

responses = 0; // Declares responses variable

do {         // Defines what program will do
    console.log(`Response: ${responses}`);  // Program will display response...
    responses++;  // ...With increment by 1 for each response...
} while (responses<=3);  // ...until there are three responses

// Task 5: For...In Loop // 

let employee = {name: "Alice", position: "Manager", salary: 75000}; // Defines object employee
for (let property in employee) {  // Defines the for..in loop for properties within employee
    console.log(`${property}: ${employee[property]}`);  // Displays each property within employee 
}

// Task 6: For...Of Loop //

let products = ["Cheese", "Bread", "Mustard"]; // Declares products array
for(let product of products){  // Defines for...of loop for products within product array
    console.log(`Product: ${product}`);  // Displays products from the array
}

// Task 7: forEach() Method //

let orders = [101, 102, 103]; // Declares the orders array
orders.forEach((orders, index) => {  // Declares forEach method for the orders
    console.log(`Order ${index + 1}: ${orders}`); // Displays each order number
});

// Task 8: Function Declaration //

function calculateTax(price, taxRate) { // Defines the function variables
    return price*taxRate; // Defines formula to be used
} 

let taxAmount = calculateTax(20, 0.1); // Defines variables to be inserted into formula

console.log(`Tax Amount: $${taxAmount}`); // Displays tax amount

// Task 9: Function Expressions //

function applyDiscount(price, discount) { // Defines function variables
    return price*discount; // Defines formula
}

let discountAmount = applyDiscount(40,0.95); // Defines variables to be inserted into formula

console.log(`Price After Discount: $${discountAmount}`); // Displays discounted price

// Task 10: Arrow Functions //

const calculatePoints = (purchaseAmount) => purchaseAmount * 0.1; // defines function

let amount = 500; // defines purchase amount
let points = calculatePoints(amount); // defines that points should be calculated by using calculatePoints formula with respect to amount
console.log(`Points Earned: ${points}`); // Displays points earned