// MOBILE MENU TOGGLE
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");
mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// FAQ TOGGLE
const faqButtons = document.querySelectorAll(".faq-btn");
faqButtons.forEach((btn) => {
  btn.addEventListener("click", function () {
    // Close any other open FAQ
    document.querySelectorAll(".faq-content").forEach((content) => {
      if (content !== this.nextElementSibling) {
        content.classList.add("hidden");
        content.previousElementSibling.querySelector(
          "span.text-xl"
        ).textContent = "+";
      }
    });

    // Toggle this FAQ
    const content = this.nextElementSibling;
    const icon = this.querySelector("span.text-xl");
    if (content.classList.contains("hidden")) {
      content.classList.remove("hidden");
      icon.textContent = "-";
    } else {
      content.classList.add("hidden");
      icon.textContent = "+";
    }
  });
});

// SCROLL-BASED ANIMATIONS (Intersection Observer)
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const element = entry.target;
        const animationClass = element.dataset.animate || "fadeInUp";
        const delay = element.dataset.delay || "0s";

        // Apply delay & animation
        element.style.animationDelay = delay;
        element.classList.add(animationClass);

        // Stop observing once animated
        observer.unobserve(element);
      }
    });
  },
  { threshold: 0.1 }
);

// Observe all elements with .js-animate
document.querySelectorAll(".js-animate").forEach((el) => {
  observer.observe(el);
});
