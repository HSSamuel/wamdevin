# WAMDEVIN Official Website

This is the official repository for the **West African Management Development Institutes Network (WAMDEVIN)** website. It is a modern, responsive, static website built to showcase the network's mission, member institutions, training programs, and resources.

## 🚀 Features

* **Responsive Design:** Fully optimized for Desktops, Tablets, and Mobile phones.
* **Dynamic Dashboard:** Interactive "Split-View" directory for browsing Member Institutions by country.
* **Event Management:** "Ongoing," "Completed," and "Upcoming" event statuses are handled automatically based on dates.
* **Interactive Modals:**
    * **Leadership Profiles:** Popups for Executive Committee bios.
    * **Event Details:** Detailed view for workshops and meetings.
    * **News Feed:** Scrollable latest news updates.
    * **Resource Library:** Preview details before downloading documents.
* **Lightbox Gallery:** Full-screen image viewer for event photos.
* **Functional Forms:** AJAX-powered Contact and Membership forms integrated with **Formspree** (no backend required).
* **Toast Notifications:** Professional success/error popup alerts.

## 🛠️ Technology Stack

* **HTML5:** Semantic structure.
* **CSS3:** Custom styling, Flexbox, CSS Grid, Animations, and Variables.
* **JavaScript (ES6):** Dynamic content rendering, form handling, and UI logic.
* **FontAwesome:** For icons.
* **Google Fonts:** Typography.

## 📂 Project Structure

Ensure your folders are organized exactly like this for images and links to work:

```text
/ (Root)
│
├── index.html          # Homepage
├── about.html          # History & Mandate
├── leadership.html     # Executive Committee
├── contact.html        # Contact Form & Map
├── membership.html     # Application Form
├── events.html         # Calendar & Programmes
├── resources.html      # Downloads & Gallery
│
├── services/           # Service Pages
│   ├── training.html
│   ├── research.html
│   ├── publication.html
│   └── consultancy.html
│
├── style.css           # Main Stylesheet
├── script.js           # Main Logic & Data Store
│
├── images/             # General images (banners, events)
│   ├── logos/          # Member Institute logos (ascon.png, etc.)
│   └── ...
│
└── downloads/          # PDF Files for resources
    ├── WAMDEVIN_Constitution.pdf
    ├── Training_Brochure.pdf
    └── ...