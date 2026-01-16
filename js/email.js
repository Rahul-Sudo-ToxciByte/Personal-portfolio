document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Get form field values
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Optional: Log or use the values
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Message:", message);

        // Send form using EmailJS
        emailjs.send("Phantom Ping", "template_cje7hqn", {
            name,
            email,
            message
        })
        .then(function (response) {
            alert("Message sent successfully!");
            form.reset();
        }, function (error) {
            alert("Failed to send message: " + JSON.stringify(error));
        });
    });
});