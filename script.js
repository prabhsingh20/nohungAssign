document.addEventListener("scroll", () => {
  const totalSection = document.querySelector(".total_section");
  const threshold = 100;

  if (window.scrollY > threshold) {
    totalSection.classList.add("show");
    totalSection.classList.remove("hidden");
  } else {
    totalSection.classList.remove("show");
    totalSection.classList.add("hidden");
  }
});
