document.addEventListener("DOMContentLoaded", () => {
  console.log("Partners page loaded.");

  // Example interactivity (future use)
  const logos = document.querySelectorAll(".partner-logo");
  logos.forEach((logo) => {
    logo.addEventListener("mouseover", () => {
      logo.style.transform = "scale(1.1)";
      logo.style.transition = "transform 0.3s ease";
    });

    logo.addEventListener("mouseout", () => {
      logo.style.transform = "scale(1)";
    });
  });
});
