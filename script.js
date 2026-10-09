/* Rebrand settings: update these values before presenting this demo to a school. */
const SCHOOL_CONFIG = {
  name: "BrightPath",
  address: "School address, City, Nigeria",
  email: "admissions@example.com",
  whatsapp: "2348000000000" // Replace with the school's WhatsApp number, country code first, digits only.
};

document.querySelectorAll("[data-school-name]").forEach((node) => { node.textContent = SCHOOL_CONFIG.name; });
document.querySelectorAll("[data-school-address]").forEach((node) => { node.textContent = SCHOOL_CONFIG.address; });
document.querySelectorAll("[data-school-email]").forEach((node) => { node.textContent = SCHOOL_CONFIG.email; });
document.title = `${SCHOOL_CONFIG.name} Academy | Growing Bright Futures`;
document.getElementById("year").textContent = new Date().getFullYear();

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".primary-nav");
menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
  nav.classList.toggle("is-open", !isOpen);
});
nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  nav.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation");
}));

const enquiryForm = document.getElementById("enquiry-form");
const feedback = document.getElementById("form-feedback");
enquiryForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(enquiryForm);
  const parentName = String(data.get("parentName") || "").trim();
  const phone = String(data.get("phone") || "").trim();
  const programme = String(data.get("programme") || "").trim();
  const email = String(data.get("email") || "").trim();
  const message = String(data.get("message") || "").trim();

  if (!parentName || !phone || !programme) {
    feedback.textContent = "Please complete your name, phone number and programme of interest.";
    return;
  }
  if (!/^\d{10,15}$/.test(SCHOOL_CONFIG.whatsapp)) {
    feedback.textContent = "Demo setup: replace the WhatsApp number in script.js with the school's real number before using this form.";
    return;
  }

  const lines = [
    `Hello ${SCHOOL_CONFIG.name} Academy, I would like to make an admissions enquiry.`,
    "",
    `Parent/guardian: ${parentName}`,
    `Phone: ${phone}`,
    `Programme: ${programme}`,
    email ? `Email: ${email}` : "",
    message ? `Message: ${message}` : ""
  ].filter(Boolean);
  feedback.textContent = "Opening WhatsApp with your enquiry. Please review and send the message there.";
  window.open(`https://wa.me/${SCHOOL_CONFIG.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener,noreferrer");
});