const toggleBtn = document.getElementById("theme-toggle");
const iconContainer = document.getElementById("theme-icon");

const sunIcon = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <circle cx="12" cy="12" r="5"/>
  <g stroke="currentColor" stroke-width="2">
    <line x1="12" y1="1" x2="12" y2="3"/>
    <line x1="12" y1="21" x2="12" y2="23"/>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="1" y1="12" x2="3" y2="12"/>
    <line x1="21" y1="12" x2="23" y2="12"/>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </g>
</svg>`;

const moonIcon = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M21 12.79A9 9 0 0111.21 3 
  7 7 0 1012 21a9 9 0 009-8.21z"/>
</svg>`;

function setThemeFromStorage() {
  const isDark = localStorage.getItem("theme") === "dark";
  document.body.classList.toggle("dark", isDark);
  iconContainer.innerHTML = isDark ? moonIcon : sunIcon;
}

toggleBtn.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  iconContainer.innerHTML = isDark ? moonIcon : sunIcon;
});

setThemeFromStorage();

/* === Scroll Animation === */
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
      observer.unobserve(entry.target); // hanya animasi sekali
    }
  });
}, { threshold: 0.1 });

reveals.forEach(el => observer.observe(el));