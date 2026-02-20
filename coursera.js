const destinations = document.querySelectorAll(".destination img");
destinations.forEach(img => {
  img.addEventListener("mouseover", () => img.style.transform = "scale(1.05)");
  img.addEventListener("mouseout", () => img.style.transform = "scale(1)");
});