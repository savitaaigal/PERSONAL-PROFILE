
document.addEventListener("DOMContentLoaded", function () {
  // 1. Display the current year in the footer
  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  // 2. Mobile navigation menu
  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.getElementById("navigation");

  if (menuButton && navigation) {
    menuButton.addEventListener("click", function () {
      const isOpen =
        menuButton.getAttribute("aria-expanded") === "true";

      menuButton.setAttribute("aria-expanded", String(!isOpen));
      navigation.classList.toggle("is-open", !isOpen);
    });
  }

  // 3. Light and dark theme switch
  const themeButton = document.querySelector(".theme-toggle");

  if (themeButton) {
    themeButton.addEventListener("click", function () {
      const isDark = document.body.classList.toggle("dark-theme");

      themeButton.setAttribute("aria-pressed", String(isDark));
      themeButton.setAttribute(
        "aria-label",
        isDark ? "Switch to light theme" : "Switch to dark theme"
      );
    });
  }

  // 4. Contact form validation
  const contactForm = document.getElementById("contact-form");
  const formStatus = document.getElementById("form-status");

  if (contactForm && formStatus) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      if (!contactForm.checkValidity()) {
        formStatus.textContent =
          "Please complete all required fields correctly.";

        contactForm.reportValidity();
        return;
      }

      formStatus.textContent =
        "Form validation successful! Demo only: no message was sent.";

      contactForm.reset();
    });
  }
});
