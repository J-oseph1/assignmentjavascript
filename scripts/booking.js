/********* create variables *********/
const days = document.querySelectorAll(".day-selector li");  // All day buttons (Mon-Fri)
const rateButtons = document.querySelectorAll(".small-button"); // Full and Half day buttons
const clearButton = document.querySelector("#clear-button"); // Clear button
const calculatedCostElement = document.querySelector("#calculated-cost"); // Where the calculated cost will appear

let selectedDays = [];  // Array to hold selected days
let dailyRate = 35;     // Default rate for full-day
let totalCost = 0;      // Starting cost

/********* colour change days of week *********/
days.forEach(day => {
    day.addEventListener("click", () => {
        // Toggle the clicked class to change color
        if (!day.classList.contains("clicked")) {
            day.classList.add("clicked");
            selectedDays.push(day.id);
        } else {
            day.classList.remove("clicked");
            selectedDays = selectedDays.filter(d => d !== day.id);  // Remove day from selectedDays if clicked again
        }

        // Recalculate total cost
        calculateCost();
    });
});

/********* clear days *********/
clearButton.addEventListener("click", () => {
    days.forEach(day => day.classList.remove("clicked")); // Remove the "clicked" class from all days
    selectedDays = [];  // Clear selected days array
    calculateCost();    // Recalculate total cost (should be 0)
});

/********* change rate *********/
rateButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (button.id === "full") {
            dailyRate = 35;  // Full day rate
            document.getElementById("full").classList.add("clicked");
            document.getElementById("half").classList.remove("clicked");
        } else if (button.id === "half") {
            dailyRate = 20;  // Half day rate
            document.getElementById("half").classList.add("clicked");
            document.getElementById("full").classList.remove("clicked");
        }
        calculateCost();  // Recalculate the cost when the rate changes
    });
});

/********* calculate *********/
function calculateCost() {
    totalCost = selectedDays.length * dailyRate;  // Multiply the number of selected days by the daily rate
    calculatedCostElement.innerHTML = totalCost;  // Display the new cost
}
