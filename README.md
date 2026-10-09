# BrightPath Academy — Rebrandable School Website

A responsive, static website template for pitching website services to private schools in Nigeria. The sample identity **BrightPath Academy** is fictional and should be replaced before a client-facing launch.

## Files

- `index.html` — page content, sections, form and metadata
- `styles.css` — responsive layout and styling
- `script.js` — school configuration, responsive navigation, fixed WhatsApp contact button and WhatsApp enquiry flow

## Run locally

Open `index.html` in a browser, or serve the folder with any static web server. No build step or package installation is required.

## Rebrand checklist

1. In `script.js`, update `SCHOOL_CONFIG.name`, `address`, `email`, and `whatsapp`.
2. The WhatsApp number must use country code and digits only, e.g. `2348012345678` (no plus sign or spaces).
3. Update the page title, meta description, programme names, address, opening hours and all copy in `index.html` to reflect the actual school.
4. Replace the Unsplash stock photos with client-approved school photos where possible. Unsplash images are used as illustrative demo imagery; review the [Unsplash License](https://unsplash.com/license) and image-specific considerations before launch.
5. Confirm the actual admissions process, school facilities, accreditations, testimonials, fees and contact details with the school. Do not publish placeholder claims as facts.
6. Add a favicon/logo if supplied by the school and update social sharing metadata.
7. Test the mobile menu, form validation, WhatsApp link, image loading and all navigation links on phone and desktop.

## Responsive behaviour

The layout is adapted for desktop, tablet, mobile phones, narrow phones and landscape mobile screens. The navigation collapses on smaller tablet and phone sizes. A floating WhatsApp admissions shortcut appears at the lower-right corner and automatically hides while the admissions contact section is in view, so it does not cover the form.

## Form and WhatsApp behaviour

The admissions form validates required fields and prepares a WhatsApp message. It does **not** store or email enquiries. The WhatsApp number is intentionally blank in the demo configuration so visitors are not sent to a fake number. Add the school's real number before presenting a rebranded copy. The floating button and enquiry form both use that setting. Replace the form with the school's preferred email/CRM integration if required.

## Images

Photos load from Unsplash image URLs and therefore require an internet connection. Unsplash allows broad commercial use under its license, but rights relating to recognisable people, brands and property may still apply. For a real school launch, use school-approved photos where possible (especially for children), and confirm the necessary parent/guardian permissions. Consider storing optimised local copies after confirming the applicable rights.
