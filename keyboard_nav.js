
      // Add keyboard navigation to the navigation links
      const navLinks = document.querySelectorAll("a");

      navLinks.forEach((link) => {
        link.addEventListener("keydown", (event) => {
          if (event.key === "Enter" || event.key === " ") {
            link.click();
          }
        });
      });
      document.addEventListener("DOMContentLoaded", function () {
        const helpPopup = document.getElementById("help-popup");
      
        // Check if it's not a mobile device
        if (!isMobileDevice()) {
          // Show the popup
          helpPopup.style.display = "block";
      
          // Hide the popup after 5 seconds
          setTimeout(function () {
            helpPopup.style.display = "none";
          }, 5000);
        }
      });
      
      function isMobileDevice() {
        return window.innerWidth <= 768; 
      }
      