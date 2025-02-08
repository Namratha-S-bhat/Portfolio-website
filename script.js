document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const htmlElement = document.documentElement; // Access the <html> tag
    const savedTheme = localStorage.getItem("theme") || "light"; // Default to light mode

    // Apply the saved theme on page load
    htmlElement.setAttribute("data-theme", savedTheme);
    updateIcon(savedTheme);

    // Toggle dark/light mode on button click
    themeToggle.addEventListener("click", () => {
        const currentTheme = htmlElement.getAttribute("data-theme");
        const newTheme = currentTheme === "dark" ? "light" : "dark";

        // Update the theme and save to localStorage
        htmlElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme); // Save preference
        updateIcon(newTheme);
    });

    function updateIcon(theme) {
        themeToggle.innerHTML = theme === "dark" 
            ? '<i class="fas fa-moon"></i>' // Moon icon for dark mode
            : '<i class="fas fa-sun"></i>'; // Sun icon for light mode
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const designationText = [
        "Full-Stack Developer",
        "Front-end Developer",
        "Back-end Developer",
        "Machine Learning Enthusiast",
        "Android Developer",
        "Software Engineer"
    ];

    let currentIndex = 0; // Start from the first designation

    const designationElement = document.getElementById("designation");

    // Function to change the designation text with smooth transitions
    function changeDesignation() {
        // Fade out the current text quickly
        designationElement.style.opacity = 0;

        // Wait for the fade-out to complete, then change text
        setTimeout(() => {
            // Update the text to the next designation
            currentIndex = (currentIndex + 1) % designationText.length;
            designationElement.textContent = designationText[currentIndex];

            // Fade in the new text
            designationElement.style.opacity = 1;
        }, 300); // Match fade-out duration
    }

    // Call the changeDesignation function every 2.5 seconds
    setInterval(changeDesignation, 2500);
});