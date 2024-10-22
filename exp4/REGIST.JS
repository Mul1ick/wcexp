document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('registrationForm');


    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form from submitting


        const name = form.elements['name'].value;
        const password = form.elements['password'].value;
        const email = form.elements['email'].value;
        const phone = form.elements['phone'].value;


        let isValid = true;
        let errorMessages = [];


        // Validate name
        if (!/^[a-zA-Z]+$/.test(name) || name.length < 4 ) {
            isValid = false;
            errorMessages.push("Name must be at least 4 alphabetic characters long.");
        }


        // Validate password
        if (password.length < 6) {
            isValid = false;
            errorMessages.push("Password must be at least 6 characters long.");
        }


        // Validate email
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            isValid = false;
            errorMessages.push("Email must be in the format name@domain.com.");
        }


        // Validate phone number
        if (!/^\d{10}$/.test(phone)) {
            isValid = false;
            errorMessages.push("Phone number must contain exactly 10 digits.");
        }


        // Display error messages if invalid
        if (!isValid) {
            alert(errorMessages.join('\n'));
            return;
        }


        // Form is valid, proceed with submission (for demonstration)
        alert("Form submitted successfully!");
    });
});

