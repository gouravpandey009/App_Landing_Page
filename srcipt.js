document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const closeBtn = document.querySelector(".close-btn");
  const navLinks = document.querySelector(".nav-links");
  const switchModeButton = document.querySelector(".switch-mode");
  const body = document.body;
  const icon = switchModeButton.querySelector("i");
  const logoImg = document.querySelector(".logo-nav img");
  const footerImg = document.querySelector(".contact-left-footer img");

  const DARK_MODE_CLASS = "dark-mode";
  const DARK_TEXT_CLASS = "dark-text";
  const LOGO_LIGHT_SRC = "dir/images/logo.png";
  const LOGO_DARK_SRC = "dir/images/logo-white.png";

  // Fetch the JSON data
  fetch("data/data.json")
    .then((response) => response.json())
    .then((data) => {
      // Use the data in your application
      console.log(data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });

  // Function to toggle navigation menu
  const toggleNavMenu = (isOpen) => {
    if (isOpen) {
      navLinks.classList.add("open");
      closeBtn.style.display = "block";
    } else {
      navLinks.classList.remove("open");
      closeBtn.style.display = "none";
    }
  };

  // Event listener for opening the navigation menu
  menuToggle.addEventListener("click", () => {
    toggleNavMenu(true);
  });

  // Event listener for closing the navigation menu
  closeBtn.addEventListener("click", () => {
    toggleNavMenu(false);
  });

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    const isDarkMode = body.classList.toggle(DARK_MODE_CLASS);
    const allTextElements = document.querySelectorAll("body *");

    allTextElements.forEach((element) => {
      element.classList.toggle(DARK_TEXT_CLASS, isDarkMode);
    });

    // Toggle logo images based on the mode
    logoImg.src = isDarkMode ? LOGO_DARK_SRC : LOGO_LIGHT_SRC;
    footerImg.src = isDarkMode ? LOGO_DARK_SRC : LOGO_LIGHT_SRC;

    // Toggle icons for dark mode button
    icon.classList.toggle("fa-moon", !isDarkMode);
    icon.classList.toggle("fa-sun", isDarkMode);
  };

  // Event listener for switching modes
  switchModeButton.addEventListener("click", toggleDarkMode);

  // Function to initialize state based on local storage
  const initializeState = () => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    if (isDarkMode) {
      body.classList.add(DARK_MODE_CLASS);
      toggleDarkMode();
    }
  };

  // Save mode preference to local storage
  const saveModePreference = () => {
    const isDarkMode = body.classList.contains(DARK_MODE_CLASS);
    localStorage.setItem("darkMode", isDarkMode);
  };

  // Event listener for saving mode preference
  switchModeButton.addEventListener("click", saveModePreference);

  // Initialize the state on page load
  initializeState();
});

document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("toggleButton");
  const body = document.body;

  toggleButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
  });
});
