document.getElementById("mobile-menu").addEventListener("click", function () {
  const navList = document.querySelector(".nav-list");
  navList.classList.toggle("active");
});

document
  .getElementById("contactForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault(); // Stop the form from submitting traditionally

    const contactData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };

    const feedbackElement = document.getElementById("feedback");

    try {
      const response = await fetch("/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactData),
      });

      const result = await response.json();

      // Show feedback to the user
      if (response.ok) {
        feedbackElement.innerText = "Thanks for reaching out!";
        feedbackElement.classList.remove("error");
        feedbackElement.style.display = "block"; // Show the feedback message

        // Clear the form fields
        document.getElementById("contactForm").reset(); // Reset the form
      } else {
        feedbackElement.innerText = "Error submitting form: " + result.error;
        feedbackElement.classList.add("error");
        feedbackElement.style.display = "block"; // Show the feedback message
      }
    } catch (error) {
      feedbackElement.innerText = "Something went wrong. Please try again.";
      feedbackElement.classList.add("error");
      feedbackElement.style.display = "block"; // Show the feedback message
    }

    // Hide the message after 5 seconds
    setTimeout(() => {
      feedbackElement.style.display = "none";
    }, 5000);
  });
