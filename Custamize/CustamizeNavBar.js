document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
        document.querySelector(".preloader").style.display = "none";
    }, 2000);
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