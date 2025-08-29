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
