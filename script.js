// This script handles the alternation of redirects
document.addEventListener('DOMContentLoaded', function() {
    let linkElements = document.querySelectorAll('.linklist a');

    linkElements.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default behavior to control redirect

            // Retrieve the 'step1' and 'step2' parameters from the URL query string
            let step1 = new URLSearchParams(window.location.search).get('step1');
            let step2 = new URLSearchParams(window.location.search).get('step2');

            if (!step1 || !step2) {
                console.error("Error: Missing step1 or step2 in the query string");
                alert("Error: Missing step1 or step2 URL in the query string.");
                return; // Stop further execution if URLs are missing
            }

            // Retrieve the click count from localStorage, or set to 0 if not found
            let clicks = parseInt(localStorage.getItem('clicks')) || 0;
            
            // Redirect logic: Alternating between step1 and step2 based on the click count
            if (clicks === 0) {
                // Redirect to step1 (intermediate link) on the first click
                console.log("Redirecting to step 1 (intermediate link):", step1);
                window.location.href = step1;
                clicks = 1; // Set count to 1 after first click
            } else if (clicks === 1) {
                // Redirect to step2 (final destination) on the second click
                console.log("Redirecting to step 2 (final destination):", step2);
                window.location.href = step2;
                clicks = 0; // Reset count to 0 after final click
            }

            // Store the updated click count in localStorage
            localStorage.setItem('clicks', clicks);
        });
    });
});


//BUTTON LINK LIST
document.getElementById('button1').addEventListener('click', function() {
    // Replace with your desired URL
    window.location.href = 'redirect.html?step1=https://www.google.com&step2=https://poawooptugroo.com/4/7672170';
});