let count = 0;
const copyButtons = document.querySelectorAll(".copy-btn");

copyButtons.forEach((btn) => {
    btn.addEventListener("click", function() {
        count += 1;
        document.getElementById("countLabel").innerHTML = count + " Copy";

        // Grab the number from the h1
        const serviceNumber = document.querySelector(".service-number").innerText;

        // Copy to clipboard
        navigator.clipboard.writeText(serviceNumber);

        // Alert
        alert("Copied: " + serviceNumber);
    });
});
let sum=0;
const copyButtons2 = document.querySelectorAll(".heart-btn");

copyButtons2.forEach((btn) => {
    btn.addEventListener("click", function() {
        sum += 1;
        document.getElementById("countHeart").innerHTML = sum 
    }); 
});
