// Get elements
const requirement = document.getElementById("requirement");
const buyFields = document.getElementById("buyFields");
const sellFields = document.getElementById("sellFields");

// Hide both sections initially
buyFields.style.display = "none";
sellFields.style.display = "none";

// Show fields based on selection
requirement.addEventListener("change", function () {

    if (this.value === "buy") {
        buyFields.style.display = "block";
        sellFields.style.display = "none";
    } 
    else if (this.value === "sell") {
        sellFields.style.display = "block";
        buyFields.style.display = "none";
    } 
    else {
        buyFields.style.display = "none";
        sellFields.style.display = "none";
    }
});

// Form submit
document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();
    alert("Thank you! We will contact you soon.");
});