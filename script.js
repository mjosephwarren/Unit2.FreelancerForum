// Starting data for each array type
const names = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const occupations = ["Writer", "Teacher", "Programmer", "Designer", "Photographer"];
const startingPrices = [30, 50, 70, 90, 110];
const freelancers = [
    { name: "Alice", occupation: "Writer", price: 30 },
    { name: "Bob", occupation: "Teacher", price: 50 }
];

// Calculate average starting price of all freelancers
function calculateAveragePrice() {
    let total = 0;
    for (let i = 0; i < freelancers.length; i++) {
        total = total + freelancers[i].price;  // Add price of each freelancer
    }
    let average = total / freelancers.length;  // Get average price
    return average;
}

// Display all freelancers
function displayFreelancers() {
    const listArea = document.querySelector("#freelancer-list");
    listArea.innerHTML = "";

    // Loop through each freelancer in the array and add to display
    for (let i = 0; i < freelancers.length; i++) {
        const row = document.createElement("tr");  // Create new row for each freelancer

        // Add name
        const nameCell = document.createElement("td");
        nameCell.textContent = freelancers[i].name;
        row.appendChild(nameCell);

        // Add job
        const jobCell = document.createElement("td");
        jobCell.textContent = freelancers[i].occupation;
        row.appendChild(jobCell);

        // Add price
        const priceCell = document.createElement("td");
        priceCell.textContent = "$" + freelancers[i].price;
        row.appendChild(priceCell);

        listArea.appendChild(row);  // Add row to table
    }

    // Display average starting price
    const averagePriceDisplay = document.querySelector("#average-price");
    averagePriceDisplay.textContent = "The average starting price is $" + calculateAveragePrice().toFixed(2);
}

// Create a random freelancer
function makeRandomFreelancer() {
    // Choose random name, job, and price
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomJob = occupations[Math.floor(Math.random() * occupations.length)];
    const randomPrice = startingPrices[Math.floor(Math.random() * startingPrices.length)];

    // Return new freelancer
    return {
        name: randomName,
        occupation: randomJob,
        price: randomPrice
    };
}

// Display initial freelancers in the array
displayFreelancers();

// Add a new random freelancer and update page every few seconds
setInterval(function() {
    const newFreelancer = makeRandomFreelancer();
    freelancers.push(newFreelancer);  // Add  new freelancer to list
    displayFreelancers();  // Update page
}, 3000);
