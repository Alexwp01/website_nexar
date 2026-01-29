const yearEl = document.getElementById("year");
yearEl.textContent = new Date().getFullYear();

const ctaBtn = document.getElementById("ctaBtn");
ctaBtn.addEventListener("click", () => {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
});

const form = document.getElementById("signupForm");
const msg = document.getElementById("formMsg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const parent = data.get("parent");
  const age = data.get("age");
  const contact = data.get("contact");

  msg.textContent = `Thanks, ${parent}! We got your request (age ${age}). We'll reach out at: ${contact}.`;
  form.reset();
});
