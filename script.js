/* Rebrand settings: update these values before presenting this demo to a school. */
const SCHOOL_CONFIG = {
  name: "BrightPath",
  address: "School address, City, Nigeria",
  email: "admissions@example.com",
  whatsapp: "" // Replace with the real WhatsApp number: country code first, digits only, e.g. 2348012345678.
};

document.querySelectorAll("[data-school-name]").forEach((node) => { node.textContent = SCHOOL_CONFIG.name; });
document.querySelectorAll("[data-school-address]").forEach((node) => { node.textContent = SCHOOL_CONFIG.address; });
document.querySelectorAll("[data-school-email]").forEach((node) => { node.textContent = SCHOOL_CONFIG.email; });
document.title = `${SCHOOL_CONFIG.name} Academy | Growing Bright Futures`;
const descriptionMeta = document.querySelector('meta[name="description"]');
if (descriptionMeta) {
  descriptionMeta.content = `Discover ${SCHOOL_CONFIG.name} Academy. Explore learning programmes, school life and admissions enquiries.`;
}
document.getElementById("year").textContent = new Date().getFullYear();

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".primary-nav");
const closeMenu = () => {
  nav.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation");
};
menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
  nav.classList.toggle("is-open", !isOpen);
});
nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
document.addEventListener("click", (event) => {
  if (!nav.contains(event.target) && !menuToggle.contains(event.target)) closeMenu();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});
window.addEventListener("resize", () => {
  if (window.innerWidth > 860) closeMenu();
});

const enquiryForm = document.getElementById("enquiry-form");
const feedback = document.getElementById("form-feedback");
const floatingWhatsApp = document.getElementById("whatsapp-float");
const contactSection = document.querySelector(".contact-section");

function getWhatsAppNumber() {
  return String(SCHOOL_CONFIG.whatsapp || "").replace(/\D/g, "");
}
function hasValidWhatsAppNumber() {
  const number = getWhatsAppNumber();
  return /^\d{10,15}$/.test(number) && !/^0+$/.test(number);
}

floatingWhatsApp.addEventListener("click", (event) => {
  if (!hasValidWhatsAppNumber()) {
    // Keep the link's #contact behaviour in preview mode instead of messaging a fake number.
    feedback.textContent = "Demo preview: add the school's real WhatsApp number in script.js to activate chat.";
    return;
  }
  event.preventDefault();
  const message = `Hello ${SCHOOL_CONFIG.name} Academy, I would like to ask about admissions.`;
  window.open(`https://wa.me/${getWhatsAppNumber()}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
});

// The fixed contact shortcut remains visible. Extra form padding and a high
// stacking order keep it usable; it must not disappear on section intersection.

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
  if (!hasValidWhatsAppNumber()) {
    feedback.textContent = "Demo preview: replace the empty WhatsApp setting in script.js with the school's real number before using this form.";
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
  window.open(`https://wa.me/${getWhatsAppNumber()}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener,noreferrer");
});
