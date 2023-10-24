const testimonialsButton = document.querySelector(".toggle-testimonials-button");
const testimonials = document.querySelectorAll(".card");

let testimonialsVisible = false;

testimonialsButton.addEventListener("click", () => {
  testimonialsVisible = !testimonialsVisible;

  testimonials.forEach((card) => {
    if (testimonialsVisible) {
      card.classList.remove("animate-out");
      card.classList.add("animate-in");
      testimonialsButton.textContent = "Hide Testimonials";
    } else {
      card.classList.remove("animate-in");
      card.classList.add("animate-out");
      testimonialsButton.textContent = "Show Testimonials";
    }
  });
});
