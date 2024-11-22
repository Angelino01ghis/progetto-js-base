const counterDisplay = document.getElementById("counter-display");
const incrementButton = document.getElementById("increment-btn");
const decrementButton = document.getElementById("decrement-btn");

let counterValue = 0;

incrementButton.addEventListener("click", () => {
    counterValue++;
    counterDisplay.textContent = counterValue;
});

decrementButton.addEventListener("click", () => {
    counterValue--;
    counterDisplay.textContent = counterValue;
});