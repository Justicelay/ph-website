// Hero Section Script
const phrases = [
  "Spotless Service Everytime",
  "Your Clean Home Awaits",
  "Clean Spaces, Happy Faces",
  "We Bring the Sparkle Back",
  "Breathe Fresh, Live Fresh",
];

const images = ["img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg", "img6.jpg"];

let currentIndex = 0;
const heroText = document.getElementById("hero-text");
const heroImage = document.querySelector(".hero-image");

function updateHero() {
  if (heroText && heroImage) {
    heroText.textContent = phrases[currentIndex];
    heroImage.src = images[currentIndex];
    currentIndex = (currentIndex + 1) % phrases.length;
  }
}

setInterval(updateHero, 15000);

// WhatsApp Message Script
function sendWhatsAppMessage(event) {
  event.preventDefault();

  try {
    // Get and validate form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    // Basic validation
    if (!name || !email || !message) {
      alert("Please fill in all required fields");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address");
      return;
    }

    // Format the message with proper encoding
    const formattedMessage = encodeURIComponent(
      `*New Message from Website*\n
Name: ${name}\n
Email: ${email}\n
Phone: ${phone}\n
Message: ${message}`
    );

    // WhatsApp link with properly formatted number and message
    const whatsappLink = `https://wa.me/233245730963?text=${formattedMessage}`;

    // Open WhatsApp in new window
    window.open(whatsappLink, "_blank");

    // Reset form
    document.getElementById("whatsappForm").reset();

    // Show success message
    alert("Message sent successfully!");
  } catch (error) {
    console.error("Error sending message:", error);
    alert("There was an error sending your message. Please try again.");
  }
}

// Event Listener for WhatsApp Form Submission
document
  .getElementById("whatsappForm")
  .addEventListener("submit", sendWhatsAppMessage);

// Read More Button Script
document.querySelector(".read-more-btn").addEventListener("click", function () {
  const expandedText = document.querySelector(".expanded-text");
  const btn = this;

  if (expandedText.style.display === "none" || !expandedText.style.display) {
    expandedText.style.display = "block";
    btn.textContent = "Read Less";
  } else {
    expandedText.style.display = "none";
    btn.textContent = "Read More";
  }
});

// Mobile Menu Toggle
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  menuToggle.classList.toggle("active");
});

// Close mobile menu when clicking a link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuToggle.classList.remove("active");
  });
});

// Close mobile menu when scrolling
let lastScrollTop = 0;
window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    navLinks.classList.remove("active");
    menuToggle.classList.remove("active");
  }
  lastScrollTop = scrollTop;
});
