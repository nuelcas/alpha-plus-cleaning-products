// Define products and their corresponding sizes
const products = {
  "Liquid Soap": ["5 litre", "10 litres", "25 litres", "50 litres", "others"],
  "Tile Cleaner": [
    "1 litre",
    "5 litres",
    "10 litres",
    "25 litres",
    "50 litres",
    "others",
  ],
  "Toilet Cleaner": ["450 ml", "1 litre", "5 litres", "10 litres", "others"],
  Germicide: ["500 ml", "1 litre", "5 litres", "others"],
};

// Get references to the product and size dropdowns
const productSelect = document.getElementById("product");
const sizeSelect = document.getElementById("size");

// Populate the product dropdown
function populateProducts() {
  for (const product in products) {
    const option = document.createElement("option");
    option.value = product;
    option.textContent = product;
    productSelect.appendChild(option);
  }
}

// Update the size dropdown based on the selected product
function updateSizes() {
  const selectedProduct = productSelect.value;
  const sizes = products[selectedProduct];

  // Clear the size dropdown
  sizeSelect.innerHTML = "";

  // Populate the size dropdown with sizes for the selected product
  sizes.forEach((size) => {
    const option = document.createElement("option");
    option.value = size;
    option.textContent = size;
    sizeSelect.appendChild(option);
  });
}

// Initialize the product dropdown and add event listeners
document.addEventListener("DOMContentLoaded", () => {
  populateProducts(); // Populate the product dropdown when the page loads

  // Update the sizes when a product is selected
  productSelect.addEventListener("change", updateSizes);

  // Trigger size update for the initial selected product
  updateSizes();
});

// JavaScript to handle mobile menu toggle
document.getElementById("mobile-menu").addEventListener("click", function () {
  const navList = document.querySelector(".nav-list");
  navList.classList.toggle("active");
});

// Add event listener to handle form submission
document
  .getElementById("orderForm")
  .addEventListener("submit", async (event) => {
    event.preventDefault(); // Prevent the form from submitting the default way
    console.log("Form submission triggered"); // Debugging line to check if submission is working

    // Get form data
    const orderData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      address: document.getElementById("address").value,
      phone: document.getElementById("phone").value,
      product: document.getElementById("product").value,
      size: document.getElementById("size").value,
      message: document.getElementById("message").value,
    };

    const feedbackElement = document.getElementById("feedback");

    try {
      const response = await fetch("/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      const result = await response.json();

      // Show feedback to the user
      if (response.ok) {
        feedbackElement.innerText = "Order Placed Successfully!";
        feedbackElement.classList.remove("error");
        feedbackElement.style.display = "block"; // Show the feedback message

        // Clear the form fields
        document.getElementById("orderForm").reset(); // Reset the form
      } else {
        feedbackElement.innerText = "Error Placing Order: " + result.error;
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
