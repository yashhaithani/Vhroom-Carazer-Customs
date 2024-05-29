// This event listener waits for the DOM content to be fully loaded before executing the provided function.
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
        document.querySelector(".preloader").style.display = "none";
    }, 2000);
});
    // Initialize slide index and fetch all slide elements and dot indicators
    let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

// Show initial slide and corresponding dot indicator
showSlides(slideIndex);

// Function to display the slide based on the given index
function showSlides(index) {
    // Handle boundary conditions for slide index
    if (index >= slides.length) {
        slideIndex = 0; // Reset to the first slide if index exceeds the length
    } else if (index < 0) {
        slideIndex = slides.length - 1; // Move to the last slide if index is negative
    } else {
        slideIndex = index; // Set the slide index to the provided value
    }

    // Hide all slides and deactivate all dot indicators
    slides.forEach(slide => (slide.style.display = "none"));
    dots.forEach(dot => dot.classList.remove("active"));

    // Display the current slide and activate the corresponding dot indicator
    slides[slideIndex].style.display = "block";
    dots[slideIndex].classList.add("active");
}

// Function to navigate to the next or previous slide
function plusSlides(n) {
    showSlides(slideIndex + n);
}

// Function to navigate to a specific slide by its 1-based index
function currentSlide(n) {
    showSlides(n - 1); // Convert 1-based index to 0-based index and display the slide
}

// Add event listeners for the previous and next slide buttons
document.querySelector(".prev").addEventListener("click", () => {
    plusSlides(-1); // Move to the previous slide
});

document.querySelector(".next").addEventListener("click", () => {
    plusSlides(1); // Move to the next slide
});

// Add event listeners for dot indicators to navigate to the corresponding slide
dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        currentSlide(index + 1); // Move to the slide indicated by the dot's index
    });
});

// Change the slide every 5 seconds
setInterval(() => {
    plusSlides(1); // Move to the next slide
}, 5000); // 5000 milliseconds = 5 seconds


// Dark/Light Mode Toggle
// Add an event listener to toggle between dark and light themes
document.addEventListener('DOMContentLoaded', function () {
    const toggleSwitch = document.querySelector("#toggle");

    toggleSwitch.addEventListener("change", () => {
        const body = document.body;
        const isChecked = toggleSwitch.checked;
        const navbar = document.querySelector(".navbar"); // Select the element with the 'navbar' class
        const navLinks = document.querySelectorAll('.nav-links li a'); // Select all anchor elements within .nav-links

        if (isChecked) {
            // Toggle button is checked (apply new styles)
            body.style.backgroundColor = "#c9c9c9";
            if (navbar) {
                navbar.style.backgroundColor = "#c9c9c9";
            }
            // Change text color of anchor elements within .nav-links li
            navLinks.forEach(link => {
                link.style.color = "black"; // Change text color to black
            });
        } else {
            // Toggle button is unchecked (return to original styles)
            body.style.backgroundColor = ""; // Restore default background
            body.style.color = ""; // Restore default text color
            if (navbar) {
                navbar.style.backgroundColor = ""; // Restore default navbar background
            }
            // Restore default text color of anchor elements within .nav-links li
            navLinks.forEach(link => {
                link.style.color = ""; // Restore default text color
            });
        }
    });
});
// Hamburger Icon
// Another event listener for when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Select elements for hamburger icon, sidebar, and lines representing the hamburger icon
    const hamburger = document.querySelector('.hamburger');
    const sidebar = document.querySelector('.sidebar');
    const lines = document.querySelectorAll('.line');

    // Function to toggle the sidebar and hamburger icon states
    function toggleSidebar() {
        sidebar.classList.toggle('open'); // Toggle the 'open' class on the sidebar

        // Toggle the 'active' classes on the lines to animate the hamburger icon
        lines.forEach((line, index) => {
            line.classList.toggle(`active${index + 1}`);
        });
    }

    // Add a click event listener to the hamburger icon
    hamburger.addEventListener('click', function() {
        toggleSidebar(); // Toggle the sidebar and hamburger icon states
    });

    // Add event listener to close sidebar when clicking anywhere on the page
    document.addEventListener('click', function(event) {
        const target = event.target;

        // Check if the click is outside the sidebar or on the hamburger icon
        if (!sidebar.contains(target) && !hamburger.contains(target)) {
            // Close the sidebar if it's open
            if (sidebar.classList.contains('open')) {
                toggleSidebar(); // Toggle the sidebar and hamburger icon states
            }
        }
    });
});

