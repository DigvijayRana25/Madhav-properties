document.getElementById("contactForm").addEventListener("submit", function(e){

e.preventDefault();

const formData = {
name: this.name.value,
phone: this.phone.value,
email: this.email.value,
requirement: this.requirement.value,
property_type: this.property_type.value,
location: this.location.value,
budget: this.budget.value,
details: this.details.value
};

fetch("https://script.google.com/macros/s/AKfycbwfNGf4-OPShjwC0atFzcSoY37xBmibdiFAAA9K--6pYUkIy9YbJTeLkho2rhDbo4z4/exec", {
method: "POST",
body: JSON.stringify(formData)
})
.then(res => res.json())
.then(data => {

alert("Thank you! Your request has been recorded.");

document.getElementById("contactForm").reset();

})
.catch(err => console.log(err));

});
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