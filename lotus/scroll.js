document.addEventListener("DOMContentLoaded", () => {
  // 1. Create the button element dynamically
  const scrollBtn = document.createElement("button");
  scrollBtn.innerHTML = "&#8593;"; // Up arrow character code
  scrollBtn.setAttribute("aria-label", "Scroll to top");
  
  // 2. Apply styling directly via JS so you don't have to change 5 different CSS files
  Object.assign(scrollBtn.style, {
    position: "fixed",
    bottom: "90px", // Placed slightly above your chatbot bubble (which is at 20px) so they don't overlap
    right: "20px",
    width: "45px",
    height: "45px",
    borderRadius: "50%",
    backgroundColor: "#1C219F", // Matches your theme's deep blue primary color
    color: "#fff",
    border: "none",
    fontSize: "20px",
    fontWeight: "bold",
    cursor: "pointer",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
    zIndex: "1000",
    opacity: "0", // Hidden by default
    visibility: "hidden",
    transition: "all 0.3s ease",
  });

  // Add a hover effect
  scrollBtn.addEventListener("mouseenter", () => scrollBtn.style.backgroundColor = "#161a80");
  scrollBtn.addEventListener("mouseleave", () => scrollBtn.style.backgroundColor = "#1C219F");

  // Append button to the body
  document.body.appendChild(scrollBtn);

  // 3. Monitor scroll position
  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      scrollBtn.style.opacity = "1";
      scrollBtn.style.visibility = "visible";
    } else {
      scrollBtn.style.opacity = "0";
      scrollBtn.style.visibility = "hidden";
    }
  });

  // 4. Click event to scroll smoothly to the top
  scrollBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
