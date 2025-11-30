// ==========================================
// 1. MEMBER INSTITUTIONS DATA (DASHBOARD LOGIC)
// ==========================================
const membersData = [
  // --- NIGERIA 🇳🇬 ---
  {
    name: "Administrative Staff College of Nigeria (ASCON)",
    dg: "Dr (Mrs.) Funke F. Adepoju",
    country: "Nigeria",
    flagUrl: "https://flagcdn.com/w40/ng.png",
    website: "http://www.ascon.gov.ng",
    logo: "images/logos/ascon.png",
  },
  {
    name: "Centre for Management Development (CMD)",
    dg: "Mr. Bitrus D. Chinoko",
    country: "Nigeria",
    flagUrl: "https://flagcdn.com/w40/ng.png",
    website: "http://www.cmd.gov.ng",
    logo: "images/logos/cmd.png",
  },
  {
    name: "Lagos State Public Service Staff Development Center (PSSDC)",
    dg: "Mr. Adekunmilola Adio-Moses",
    country: "Nigeria",
    flagUrl: "https://flagcdn.com/w40/ng.png",
    website: "http://www.pssdc.ng",
    logo: "images/logos/pssdc.png",
  },
  {
    name: "Agricultural & Rural Management Training Institute (ARMTI)",
    dg: "Dr. Olufemi Oladunni",
    country: "Nigeria",
    flagUrl: "https://flagcdn.com/w40/ng.png",
    website: "http://www.armti.gov.ng",
    logo: "images/logos/armti.png",
  },
  {
    name: "Public Service Institute of Nigeria (PSIN)",
    dg: "Barrister Imeh Okon",
    country: "Nigeria",
    flagUrl: "https://flagcdn.com/w40/ng.png",
    website: "http://www.psin.gov.ng",
    logo: "images/logos/psin.png",
  },
  {
    name: "Industrial Training Fund (ITF)",
    dg: "Dr Afiz Ogun Oluwatoyin",
    country: "Nigeria",
    flagUrl: "https://flagcdn.com/w40/ng.png",
    website: "http://www.itf.gov.ng",
    logo: "images/logos/itf.png",
  },
  {
    name: "Michael Imoudu National Institute for Labour Studies (MINILS)",
    dg: "Comrade Issa Aremu",
    country: "Nigeria",
    flagUrl: "https://flagcdn.com/w40/ng.png",
    website: "http://www.minils.gov.ng",
    logo: "images/logos/minils.png",
  },
  {
    name: "Nigeria Institute for Transport Technology (NITT)",
    dg: "Dr. Bayero Salih Farah",
    country: "Nigeria",
    flagUrl: "https://flagcdn.com/w40/ng.png",
    website: "http://www.nitt.gov.ng",
    logo: "images/logos/nitt.png",
  },
  {
    name: "Nigerian College of Aviation Technology (NCAT)",
    dg: "Dr. Danjuma A. Ismaila",
    country: "Nigeria",
    flagUrl: "https://flagcdn.com/w40/ng.png",
    website: "http://www.ncat.gov.ng",
    logo: "images/logos/ncat.png",
  },
  {
    name: "Simeon Adebo Staff Development Centre (SASDC)",
    dg: "Mrs S. O. Okedum",
    country: "Nigeria",
    flagUrl: "https://flagcdn.com/w40/ng.png",
    website: "http://www.sasdc.oyostate.gov.ng",
    logo: "images/logos/sasdc.png",
  },

  // --- GHANA 🇬🇭 ---
  {
    name: "Ghana Institute of Management and Public Administration (GIMPA)",
    dg: "Prof. Samuel Kwaku Bonsu",
    country: "Ghana",
    flagUrl: "https://flagcdn.com/w40/gh.png",
    website: "http://www.gimpa.edu.gh",
    logo: "images/logos/gimpa.png",
  },
  {
    name: "Management Development and Productivity Institute (MDPI)",
    dg: "Professor Elijah Yendaw",
    country: "Ghana",
    flagUrl: "https://flagcdn.com/w40/gh.png",
    website: "http://www.mdpi.gov.gh",
    logo: "images/logos/mdpi.png",
  },

  // --- SIERRA LEONE 🇸🇱 ---
  {
    name: "Institute of Public Administration and Management (IPAM)",
    dg: "Prof. Ezekiel Duramany-Lakkoh",
    country: "Sierra Leone",
    flagUrl: "https://flagcdn.com/w40/sl.png",
    website: "http://www.usl.edu.sl",
    logo: "images/logos/ipam.png",
  },

  // --- THE GAMBIA 🇬🇲 ---
  {
    name: "Management Development Institute (MDI)",
    dg: "Mr. Alieu K. Jarju",
    country: "Gambia",
    flagUrl: "https://flagcdn.com/w40/gm.png",
    website: "http://www.mdi.edu.gm",
    logo: "images/logos/mdi.png",
  },

  // --- LIBERIA 🇱🇷 ---
  {
    name: "Liberia Institute of Public Administration (LIPA)",
    dg: "Hon. Nee-Alah T. Varpilah",
    country: "Liberia",
    flagUrl: "https://flagcdn.com/w40/lr.png",
    website: "http://www.lipaliberia.com",
    logo: "images/logos/lipa.png",
  },

  // --- CAMEROON 🇨🇲 ---
  {
    name: "Pan African Institute for Development (PAID-WA)",
    dg: "Dr. Gladys Njoukiang Asaah",
    country: "Cameroon",
    flagUrl: "https://flagcdn.com/w40/cm.png",
    website: "http://www.paidwestafrica.org",
    logo: "images/logos/paid.png",
  },
];

// ==========================================
// 2. DASHBOARD LOGIC (The Extraordinary View)
// ==========================================
const menuContainer = document.getElementById("country-menu");
const displayHeader = document.getElementById("display-header");
const displayGrid = document.getElementById("members-grid-display");

const countryOrder = [
  "Nigeria",
  "Ghana",
  "Sierra Leone",
  "Gambia",
  "Liberia",
  "Cameroon",
];

function initDashboard() {
  if (!menuContainer) return;

  menuContainer.innerHTML = "";

  countryOrder.forEach((country, index) => {
    const rep = membersData.find((m) => m.country === country);
    const flagUrl = rep ? rep.flagUrl : "";

    const btn = document.createElement("button");
    btn.className = `country-btn ${index === 0 ? "active" : ""}`;
    btn.innerHTML = `<img src="${flagUrl}" alt="${country}"> ${country}`;

    btn.addEventListener("click", () => {
      document
        .querySelectorAll(".country-btn")
        .forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderCountryMembers(country);
    });

    menuContainer.appendChild(btn);
  });

  renderCountryMembers(countryOrder[0]);
}

function renderCountryMembers(countryName) {
  displayHeader.innerHTML = `<h3>Member Institutes in ${countryName}</h3>`;
  const countryMembers = membersData.filter((m) => m.country === countryName);
  displayGrid.innerHTML = "";

  countryMembers.forEach((member) => {
    const cardHTML = `
            <div class="compact-card slide-up">
                <div class="compact-header">
                    <img src="${member.logo}" alt="${member.name}" class="compact-logo"
                    onerror="this.style.display='none'; this.parentNode.innerHTML='<i class=\'fas fa-university\' style=\'font-size:2rem; color:var(--primary-blue);\'></i>'">
                </div>
                <div class="compact-body">
                    <h4>${member.name}</h4>
                    <p class="compact-role"><strong>Head:</strong> ${member.dg}</p>
                    <a href="${member.website}" target="_blank" class="compact-link">Visit Website &rarr;</a>
                </div>
            </div>
        `;
    displayGrid.innerHTML += cardHTML;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initDashboard();
});

// ==========================================
// 3. MOBILE MENU TOGGLE
// ==========================================
const mobileMenuBtn = document.getElementById("mobile-menu");
const navLinks = document.getElementById("navLinks");

if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    const icon = mobileMenuBtn.querySelector("i");
    if (navLinks.classList.contains("active")) {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-times");
    } else {
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
    }
  });
}

// ==========================================
// 15. MOBILE DROPDOWN TOGGLE
// ==========================================
const dropdownBtns = document.querySelectorAll(".dropbtn");

dropdownBtns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    // Only run this logic on mobile screens (768px or smaller)
    if (window.innerWidth <= 768) {
      e.preventDefault(); // Stop the link from jumping to top

      // 1. Get the parent <li>
      const parentDropdown = this.parentElement;

      // 2. Close other open dropdowns
      document.querySelectorAll(".dropdown").forEach((item) => {
        if (item !== parentDropdown) {
          item.classList.remove("active");
        }
      });

      // 3. Toggle the clicked one
      parentDropdown.classList.toggle("active");
    }
  });
});

// ==========================================
// 4. HERO BACKGROUND SLIDESHOW
// ==========================================
const heroImages = [
  "images/hero-1.jpg",
  "images/hero-2.jpg",
  "images/hero-3.jpg",
  "images/hero-4.jpg",
  "images/hero-5.jpg",
];

let currentImageIndex = 0;
const heroSection = document.querySelector(".hero");

function rotateHeroImage() {
  if (heroSection) {
    currentImageIndex = (currentImageIndex + 1) % heroImages.length;
    heroSection.style.backgroundImage = `url('${heroImages[currentImageIndex]}')`;
  }
}

if (heroSection) {
  setInterval(rotateHeroImage, 5000);
}

// ==========================================
// 5. TOAST NOTIFICATION FUNCTION
// ==========================================
function showToast(message, type = "success", title = "Notification") {
  const container = document.getElementById("toast-container");

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;

  const iconClass =
    type === "success" ? "fa-check-circle" : "fa-exclamation-circle";

  toast.innerHTML = `
        <i class="fas ${iconClass}" style="font-size: 1.5rem;"></i>
        <div class="toast-content">
            <h4>${title}</h4>
            <p>${message}</p>
        </div>
    `;

  if (container) {
    container.appendChild(toast);
    setTimeout(() => {
      toast.style.animation = "fadeOut 0.5s ease-forwards";
      setTimeout(() => {
        toast.remove();
      }, 500);
    }, 4000);
  } else {
    console.error("Toast container missing in HTML");
  }
}

// ==========================================
// 6. CONTACT FORM SUBMISSION (FORMSPREE FIXED)
// ==========================================
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const btn = document.querySelector(".submit-btn");
    const originalBtnContent = btn.innerHTML;

    // 1. Loading State
    btn.innerHTML =
      '<span>Sending...</span> <i class="fas fa-spinner fa-spin"></i>';
    btn.style.opacity = "0.7";
    btn.disabled = true;

    // 2. Prepare Data (Convert to JSON)
    const formData = new FormData(contactForm);
    // Convert FormData to a plain JavaScript object
    const data = Object.fromEntries(formData.entries());
    const json = JSON.stringify(data);

    // Get user's name for the success message (fallback to "Partner")
    const userName = data.name || "Partner";

    try {
      // 3. Send to Formspree (Using your ID: mgvbqbda)
      const response = await fetch("https://formspree.io/f/mgvbqbda", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json, // Send the clean JSON string
      });

      const result = await response.json();

      if (response.ok) {
        // 4. Success Toast
        showToast(
          `Thank you, ${userName}! Your application has been sent.`,
          "success",
          "Application Sent"
        );
        contactForm.reset();
      } else {
        // 5. Formspree Specific Error (e.g. invalid email)
        if (result.errors) {
          showToast(
            result.errors.map((error) => error.message).join(", "),
            "error",
            "Error"
          );
        } else {
          showToast(
            "Something went wrong. Please try again.",
            "error",
            "Submission Failed"
          );
        }
      }
    } catch (error) {
      // 6. Network Error
      showToast("Check your internet connection.", "error", "Network Error");
      console.error(error);
    } finally {
      // 7. Reset Button
      btn.innerHTML = originalBtnContent;
      btn.style.opacity = "1";
      btn.disabled = false;
    }
  });
}

// ==========================================
// 7. EXCO PROFILE MODAL LOGIC
// ==========================================
const excoProfiles = {
  leader1: {
    name: "Alh. Alieu K. Jarju",
    role: "PRESIDENT",
    org: "Director-General, Management Development Institute (MDI), The Gambia",
    img: "images/exco-1.jpg",
    bio: `
            <p>Alh. Alieu K. Jarju is the Director-General of the Management Development Institute (MDI), The Gambia, where he has served in senior leadership roles since the mid-2000s, including Deputy DG and Head of the IT/Computer Department. Under his leadership, MDI has expanded from a traditional training centre into a degree-awarding institution, launching accredited bachelor’s and master’s programmes in partnership with institutions such as GIMPA (Ghana).</p>
            <p>He has overseen major reforms including the rollout of postgraduate programmes (e.g., Master of Public Sector Management, MSc Project Management, MA Monitoring & Evaluation), capacity-building trainings for civil servants, and high-level public lectures on governance, diplomacy, and national development. MDI has also strengthened its national and international collaborations to support public-sector modernization.</p>
        `,
  },
  leader2: {
    name: "Dr. (Mrs) Funke Adepoju",
    role: "1ST VICE PRESIDENT",
    org: "Director-General, Administrative Staff College of Nigeria (ASCON)",
    img: "images/exco-2.jpg",
    bio: `
            <p>Dr. (Mrs.) Funke Adepoju is the Director-General of the Administrative Staff College of Nigeria (ASCON), appointed in 2025. She has over 30 years of experience in public administration and institutional reform, with prior leadership roles including Executive Secretary of the Lagos State Water Regulatory Commission. Adepoju holds an MBA, is a doctoral student at Lagos State University, and has completed executive training at top global institutions, including Harvard and Oxford.</p>
            <p>As ASCON DG, she is transforming the institution into a national reform hub, emphasizing digital learning, e-governance, and public-sector capacity-building aligned with Nigeria’s civil service reform agenda. In 2025, she was named a Visiting Fellow at the Blavatnik School of Government, University of Oxford, and ASCON under her leadership received national recognition for innovation in public-sector training.</p>
        `,
  },
  leader3: {
    name: "Professor Samuel Kwaku Bonsu",
    role: "2ND VICE PRESIDENT",
    org: "Rector, Ghana Institute of Management and Public Administration (GIMPA), Ghana",
    img: "images/exco-3.jpg",
    bio: `
            <p>Prof. Samuel Kwaku Bonsu was born to Mr. Kwadwo Bonsu of Antoa and Ms. Agnes Barwuah of Parkoso. He began his education at St. Anne’s Anglican (ECM) School, Ash-Town, Kumasi, before attending Cambridge International School, Kwadaso, and later Prempeh College. He pursued higher education at Kwame Nkrumah University of Science and Technology, then earned a Bachelor’s degree in Business Administration at the University of Prince Edward Island, an MBA at Simon Fraser University, Canada, and a Ph.D. from the University of Rhode Island, USA. Prof. Bonsu lectured at SFU in 1999/2000, joined the University of North Carolina, Greensboro in 2000, and later became a tenured professor and Director of the PhD Marketing programme at Schulich School of Business, York University. At GIMPA, he served as Dean of the School of Governance and Leadership, Dean of the Business School, and Director of Academic Planning & Quality Assurance before his appointment as Rector. He is widely recognized for his principled character.</p>
            <p>Prof. Bonsu has held Visiting Professor and Researcher positions at universities including University of Southern Denmark, L’Université Lille 2, Hanken School of Economics (Finland), IUBAT (Bangladesh), and KNUST. He has published groundbreaking research in prestigious journals and books, with funding from SSHRC (Canada), CODESRIA, and the Ministry of Foreign Affairs, Denmark. His scholarship has earned him global respect, and he serves on the editorial boards of several high-impact journals.</p>
        `,
  },
  leader4: {
    name: "Hon. Nee-Alah T. Varpilah",
    role: "EXCO MEMBER",
    org: "Director-General, LIPA Liberia",
    img: "images/exco-4.jpg",
    bio: `
          <p>Hon. Nee Alah T. Varpilah is the Director General of the Liberia Institute of Public Administration (LIPA). Under his leadership, LIPA has modernized public-sector training by securing international partnerships, including becoming an Authorized Training Partner of the Project Management Institute (PMI), and signing MOUs with the Amos Claudius Sawyer Foundation and Liberian civil-service institutions.</p>
            
          <p>He has expanded LIPA’s programs to include professional certifications, governance training, and institutional reform support, strengthening Liberia’s public-sector human capital. Publicly available information focuses mainly on his institutional role rather than personal biography.</p>
        `,
  },
  leader5: {
    name: "Dr. Gladys Njoukiang Asaah",
    role: "EXCO MEMBER",
    org: "Regional Director, PAID-WA Cameroon",
    img: "images/exco-5.jpg",
    bio: `
           <p>Dr. Gladys Njoukiang Asaah is the Regional Director of the Pan African Institute for Development – West Africa (PAID‑WA), based in Buea, Cameroon. She holds a Doctorate in Investment Management, an MSc in Banking and Finance, and a PGD in Economics. Before her current role, she worked as a branch manager at a microfinance institution and lectured part-time at the Catholic University Institute of Buea.</p>
           <p>Under her leadership, PAID‑WA provides diverse academic and professional programmes across West Africa, including finance, governance, ICT, health, and development studies. She has strengthened institutional partnerships, expanded capacity-building initiatives, and modernized the institute to meet regional development needs, making PAID‑WA a key centre for training and research in West Africa.</p> 
        `,
  },
  leader6: {
    name: "Professor Ezekiel Duramany-Lakkoh",
    role: "EXCO MEMBER",
    org: "Deputy VC, IPAM Sierra Leone",
    img: "images/exco-6.jpg",
    bio: `
            <p>Ezekiel Duramany‑Lakkoh is the Deputy Vice‑Chancellor of the Institute of Public Administration and Management (IPAM), University of Sierra Leone, appointed in 2025. He previously served as Dean of the Faculty of Accounting & Finance at IPAM and holds a PhD in finance/accounting. He is also active in the private sector as CEO of JIT Capital Group and involved in media through AYV Media.</p>
            <p>Duramany‑Lakkoh has contributed to expanding IPAM’s academic programmes, strengthening institutional infrastructure, and promoting digital and ICT-based learning. His research focuses on finance, public-sector management, and economic development. He is recognized for combining academic scholarship with practical leadership to advance education, governance, and financial capacity in Sierra Leone and West Africa.</p>
        `,
  },
  leader7: {
    name: "Olaolu A. Adewumi",
    role: "EXECUTIVE SECRETARY",
    org: "Executive Secretary, WAMDEVIN Secretariat",
    img: "images/exco-7.jpg",
    bio: `
            <p style="text-align: justify;">Olaolu A. Adewumi is the Executive Secretary of the West African Management Development Institutes Network (WAMDEVIN), appointed in 2025. He has over 30 years of experience with WAMDEVIN, previously serving as Deputy Director of Studies. He holds a B.Sc. in Government & Public Administration, an MPA, and is pursuing a Ph.D. Adewumi is a recognized management professional and fellow/member of several professional bodies. As Executive Secretary, he leads WAMDEVIN’s capacity-building, research, training, and policy-consultancy initiatives across West Africa.</p>
        `,
  },
};

function openExcoModal(leaderId) {
  const modal = document.getElementById("exco-modal-overlay");
  const data = excoProfiles[leaderId];
  if (data && modal) {
    document.getElementById("modal-img").src = data.img;
    document.getElementById("modal-name").innerText = data.name;
    document.getElementById("modal-role").innerText = data.role;
    document.getElementById("modal-org").innerText = data.org;
    document.getElementById("modal-bio").innerHTML = data.bio;

    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function closeExcoModal() {
  const modal = document.getElementById("exco-modal-overlay");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "auto";
  }
}

// ==========================================
// 8. KEY METRICS COUNT UP ANIMATION
// ==========================================
const counters = document.querySelectorAll(".counter");
const metricsSection = document.querySelector(".metrics-section");
let started = false;

function startCounting() {
  counters.forEach((counter) => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;
    const increment = target / 100;

    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(startCounting, 20);
    } else {
      counter.innerText = target;
    }
  });
}

if (metricsSection) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !started) {
          counters.forEach((c) => {
            const updateCounter = () => {
              const target = +c.getAttribute("data-target");
              const count = +c.innerText;
              const increment = target / 50;

              if (count < target) {
                c.innerText = Math.ceil(count + increment);
                setTimeout(updateCounter, 30);
              } else {
                c.innerText = target;
              }
            };
            updateCounter();
          });
          started = true;
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(metricsSection);
}

// ==========================================
// 9. EVENT MODAL LOGIC (Corrected)
// ==========================================
const eventsData = {
  event1: {
    title: "A 3-Day High-Level Networking Workshop",
    date: "Nov 25 - Nov 27, 2025",
    location: "CMD, Ikeja, Lagos",
    status: "COMPLETED",
    statusClass: "completed",
    img: "images/workshop.jpg",
    btnText: "Contact Organizers",
    btnLink: "contact.html",
    desc: `
            <p><strong>Theme:</strong> Strategic Leadership for National Transformation Through Collaboration, Innovation and Institutional Excellence</p>
            <p>The West African Management Development Institutes Network (WAMDEVIN) recently convened a high-level international workshop under the theme “Strategic Leadership for National Transformation through Collaboration, Innovation and Institutional Excellence.” The event, which was held at the Centre for Management Development (CMD), Ikeja, Lagos from 25th - 27th November, 2025 brought together leaders and practitioners from public sector institutions, academia and private organisations across West Africa.</p>
            
            <p><strong>Key Sessions & Facilitators:</strong></p>
            <ul style="margin-left: 20px; list-style: disc; margin-bottom: 15px;">
                <li><strong>Leadership Lessons From The Frontline: Insights From Military And Industry Leaders:</strong> Delivered by Dr. P. M. Tunde Reis (PMO)</li>
                <li><strong>The Strategic Role of WAMDEVIN in Advancing Collaboration and Networking for Africa’s Transformation:</strong> Facilitated by Olaolu A. Adewumi</li>
                <li><strong>Driving Organisational Change and Innovation In a Complex and Volatile Environment:</strong> Facilitated by Shehu Zubairu</li>
                <li><strong>Institutional Collaboration and Partnership for Organisational Renewal:</strong> Presented by G. A. Audu.</li>
                <li><strong>Global Best Practices in Cross-Sector Partnerships for National Transformation:</strong> Handled by Dr. Ayodele Aderinwale</li>
            </ul>
        `,
  },
  event2: {
    title: "A 2-Day Workshop on Performance Optimization",
    date: "Sept. 1 & 2, 2025",
    location: "ASCON, Badagry",
    status: "COMPLETED",
    statusClass: "completed",
    img: "images/workshop-staff.jpg",
    btnText: "Access Resources",
    btnLink: "resources.html",
    desc: `
            <p><strong>Objective:</strong> Strengthening Institutional Efficiency and Enhancing Staff Capacity.</p>
            <p>WAMDEVIN recently organized an intensive 2-day workshop for its Secretariat staff, designed to equip the team with actionable strategies for organizational excellence. The programme featured seasoned experts delivering sessions on management, leadership, and operational development.</p>
            
            <p><strong>Key Sessions & Facilitators:</strong></p>
            <ul style="margin-left: 20px; list-style: disc; margin-bottom: 15px;">
                <li><strong>Professional Conduct & Mindset Shift:</strong> Delivered by Mr. Ladipo O. O.</li>
                <li><strong>Performance Optimization Strategies:</strong> Facilitated by Mr. Audu G. A.</li>
                <li><strong>Life Management:</strong> Presented by Olaolu A. Adewumi.</li>
                <li><strong>Records Management:</strong> Handled by Mr. Shittu A. O.</li>
            </ul>
            <p>In his opening remarks, the Executive Secretary noted that <em>"Secretariat staff form the backbone of WAMDEVIN's operations."</em></p>
        `,
  },
  event2026_1: {
    title: "Work-life Balance and Organizational Commitment",
    date: "25th - 26th February, 2026",
    location: "ASCON, Topo - Badagry, Lagos, Nigeria",
    status: "UPCOMING",
    statusClass: "completed",
    img: "images/event-board.jpg",
    btnText: "Register Interest",
    btnLink: "contact.html",
    desc: `
            <p><strong>Objectives:</strong></p>
            <ul style="margin-left: 20px; list-style: disc; margin-bottom: 15px; text-align: justify;">
                <li><strong>Equip participants with practical strategies</strong> for achieving a healthy balance between professional responsibilities and personal life.</li>
                <li><strong>Enhance understanding of how work-life balance influences organizational commitment,</strong> productivity, and employee well-being.</li>
                <li><strong>Strengthen managerial capacity</strong> to design and implement workplace policies that support flexible, healthy, and high-performance work environments.</li>
                <li><strong>Promote positive organizational culture</strong> by fostering employee engagement, motivation, and long-term loyalty.</li>
                <li><strong>Develop skills for managing stress and workload,</strong> ensuring sustainable performance across all levels of the organization.</li>
                <li><strong>Provide actionable tools and frameworks</strong> for aligning individual well-being with organizational goals.</li>
            </ul>
            <p><strong>Target Audience:</strong> Executive, Administrative, Finance and Faculty Staff.</p>
        `,
  },
  event2026_2: {
    title:
      "Application of Modern ICT Tools for Training Delivery and Evaluation",
    date: "11th - 12th March, 2026",
    location: "Virtual",
    status: "UPCOMING",
    statusClass: "completed",
    img: "images/ai-tool.jpg",
    btnText: "Register Interest",
    btnLink: "contact.html",
    desc: `
            <p><strong>Target Audience:</strong></p>
            <p style="text-align: justify;">This Management Capacity Building (MCB) workshop is designed for mid-level civil servants, administrators, and Staff of MDIs in West Africa, focusing on strengthening their ability to integrate modern ICT tools into training delivery and evaluation processes. It aims to bridge the gap between traditional training methods and technology-driven approaches, enhancing efficiency, learner engagement, and data-informed decision-making.</p>
            
            <p><strong>Objectives:</strong></p>
            <ul style="margin-left: 20px; list-style: disc; margin-bottom: 15px; text-align: justify;">
                <li>Deepen participants’ mastery of modern ICT tools for designing and delivering high-quality training programmes that meet contemporary learning standards.</li>
                <li>Strengthen trainers’ ability to create interactive, technology-enhanced learning experiences, using tools that improve participation, retention, and knowledge application.</li>
                <li>Build capacity for data-driven evaluation through the use of digital assessment systems, analytics dashboards, and automated feedback tools to measure learning outcomes.</li>
                <li>Promote organizational readiness for digital learning transformation, enabling institutions to adopt scalable, efficient, and innovative training solutions.</li>
            </ul>
        `,
  },
  event2026_3: {
    title: "Advanced Mentorship Training",
    date: "15th - 16th April, 2026",
    location: "Virtual",
    status: "UPCOMING",
    statusClass: "completed",
    img: "images/mentorship.jpg",
    btnText: "Register Interest",
    btnLink: "contact.html",
    desc: `
            <p><strong>Introduction:</strong></p>
            <p style="text-align: justify;">Advanced Mentorship Training focuses on strengthening the ability of leaders and professionals to effectively guide, inspire, and develop others. It introduces refined mentorship techniques, enhanced communication skills, and structured approaches that support personal and organizational growth.</p>
            
            <p><strong>Objectives:</strong></p>
            <ul style="margin-left: 20px; list-style: disc; margin-bottom: 15px; text-align: justify;">
                <li>Build skills for effective and structured mentorship.</li>
                <li>Strengthen communication and guidance techniques.</li>
                <li>Improve delivery of constructive feedback.</li>
                <li>Enhance ability to identify and develop talent.</li>
            </ul>
            <p><strong>Target Audience:</strong> Staff of Management Development Institutions in West Africa.</p>
        `,
  },
  event2026_4: {
    title: "Train-The-Trainers (Blended)",
    date: "June 8 - 26, 2026",
    location: "Virtual & ASCON, Topo - Badagry, Lagos, Nigeria",
    status: "UPCOMING",
    statusClass: "completed",
    img: "images/ttt.jpg",
    btnText: "Register Interest",
    btnLink: "contact.html",
    desc: `
            <p><strong>Introduction:</strong></p>
            <p style="text-align: justify;">Train-The-Trainers (Blended) is designed to equip facilitators with the skills and methods needed to deliver impactful training using both in-person and digital approaches. This programme strengthens instructional techniques, enhances learner engagement, and prepares trainers to operate confidently in today’s hybrid learning environment.</p>
            
            <p><strong>Objectives:</strong></p>
            <ul style="margin-left: 20px; list-style: disc; margin-bottom: 15px; text-align: justify;">
                <li>Equip trainers with core skills for effective in-person and digital training delivery.</li>
                <li>Strengthen facilitation techniques that enhance learner engagement in blended settings.</li>
                <li>Build capacity to design, organize, and implement hybrid training sessions.</li>
                <li>Improve the use of modern tools and methods for assessment and feedback in blended learning.</li>
            </ul>
            <p><strong>Target Audience:</strong> Staff of Management Development Institutions in West Africa.</p>
        `,
  },
};

function openEventModal(eventId) {
  const modal = document.getElementById("event-modal-overlay");
  const data = eventsData[eventId];

  if (data && modal) {
    document.getElementById("event-modal-title").innerText = data.title;
    document.getElementById("event-modal-date").innerText = data.date;
    document.getElementById("event-modal-location").innerText = data.location;
    document.getElementById("event-modal-desc").innerHTML = data.desc;

    const imgElement = document.getElementById("event-modal-img");
    if (imgElement) {
      imgElement.src = data.img
        ? data.img
        : "https://via.placeholder.com/600x400?text=Event+Image";
    }

    const statusBadge = document.getElementById("event-modal-status");
    if (statusBadge) {
      statusBadge.innerText = data.status;
      statusBadge.className = `status-badge ${data.statusClass}`;
    }

    const modalBtn = document.getElementById("event-modal-btn");
    if (modalBtn) {
      modalBtn.innerText = data.btnText || "Register Interest";
      modalBtn.href = data.btnLink || "contact.html";
    }

    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function closeEventModal() {
  const modal = document.getElementById("event-modal-overlay");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "auto";
  }
}

// ==========================================
// 10. AUTO-UPDATE EVENT STATUS
// ==========================================
function checkEventDates() {
  const cards = document.querySelectorAll(".member-card[data-end-date]");
  const today = new Date();

  cards.forEach((card) => {
    const endDateStr = card.getAttribute("data-end-date");
    const endDate = new Date(endDateStr);
    endDate.setHours(23, 59, 59, 999);

    if (today > endDate) {
      const badge = card.querySelector(".status-badge");
      if (badge) {
        badge.innerText = "COMPLETED";
        badge.className = "status-badge completed";
      }
      const actionBtn = card.querySelector("a.know-more-btn");
      if (actionBtn) {
        actionBtn.innerText = "Access Resources";
        actionBtn.href = "resources.html";
        actionBtn.style.backgroundColor = "#333";
      }
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  checkEventDates();
});

// ==========================================
// 11. NEWS FEED LOGIC
// ==========================================
const newsData = [
  {
    title:
      "WAMDEVIN Holds International High-level Workshop, Elects New President",
    date: "Nov 25 - 27, 2025",
    category: "Training & 38th Anniversary",
    img: "images/anniversary.jpg",
    link: "https://independent.ng/wamdevin-holds-high-level-workshop-elects-new-president/?utm_source=chatgpt.com",
    content: `WAMDEVIN held a three-day high-level workshop at CMD Lagos, bringing together senior officials and experts from across West Africa to strengthen cooperation, leadership capacity, and institutional excellence. The event which also marked WAMDEVIN's 38th anniversary, featured technical and peer-learning sessions and confirmed Mr. Alieu Jarju, DG of MDI/CSU The Gambia, as the new WAMDEVIN President. He pledged to deepen regional collaboration, strengthen institutional capacity, and expand partnerships. CMD and member institutions were commended, while Executive Secretary Olaolu Adewumi reaffirmed WAMDEVIN’s commitment to capacity building across the region.`,
  },
  {
    title: "New Executive Secretary Assumes Office",
    date: "March 17, 2025",
    category: "Secretariat",
    img: "images/es.jpg",
    link: "https://thenationonlineng.net/institute-appoints-executive-secretary/?utm_source=chatgpt.com",
    content: `Mr. Olaolu A. Adewumi has officially assumed office as the 3rd Executive Secretary/CEO of the WAMDEVIN Secretariat effective from March 17, 2025, after acting in the position for four months.`,
  },
  {
    title: "Revival of WAMDEVIN Newsletter",
    date: "April 2025",
    category: "Publications",
    img: "https://thenationonlineng.net/institute-appoints-executive-secretary/?utm_source=chatgpt.com", // Placeholder URL might need fixing if this is meant to be an image
    link: "downloads/WAMDEVIN_Newsletter_Q4_2025.pdf",
    content: `After a 15-year hiatus, the WAMDEVIN Newsletter has been successfully revived. The October–December, June - September, April - May, and January - March editions have been circulated to stakeholders to boost information dissemination. You can access the latest edition <a href="downloads/WAMDEVIN_Newsletter_Q4_2025.pdf" target="_blank" style="color: var(--primary-blue); font-weight: bold; text-decoration: none; border-bottom: 2px solid var(--accent-gold); padding-bottom: 2px;">here</a>.`,
  },
  {
    title: "New Research on Graduate Employment",
    date: "Feb 2025",
    category: "Research",
    img: "images/research.jpg",
    link: "https://ujbee.com/index.php/UJBEE/article/view/20?utm_source=chatgpt.com",
    content: `The Network has embarked on a pivotal research study titled "The Impact of Entrepreneurship Programmes of Universities on Graduate Employment" to determine the efficacy of current tertiary programmes. While research is ongoing, here is a related research recommended for your study. <a href="https://ujbee.com/index.php/UJBEE/article/view/20/20" target="_blank" style="color: var(--primary-blue); font-weight: bold; text-decoration: none; border-bottom: 2px solid var(--accent-gold); padding-bottom: 2px;">here</a>.`,
  },
  {
    title: "Network Expansion: Membership Increases",
    date: "Jan 2025",
    category: "Growth",
    img: "https://via.placeholder.com/600x300/333333/ffffff?text=Network+Growth",
    link: "", // LINK REMOVED HERE
    content: `Following an aggressive membership drive, WAMDEVIN has successfully increased its membership from 14 to 16 institutions, strengthening the network's collaborative capacity.`,
  },
];

function openNewsModal() {
  const modal = document.getElementById("news-modal-overlay");
  const container = document.getElementById("news-feed-container");

  if (modal && container) {
    container.innerHTML = "";
    newsData.forEach((news) => {
      const newsItem = document.createElement("div");
      newsItem.style.cssText = `
                background: white; 
                padding: 20px; 
                border-radius: 8px; 
                margin-bottom: 30px; 
                box-shadow: 0 2px 10px rgba(0,0,0,0.08); 
                border-left: 4px solid var(--accent-gold);
                overflow: hidden;
                display: block; 
            `;
      let linkHTML = "";
      if (news.link && news.link !== "" && news.link !== "#") {
        linkHTML = `
            <a href="${news.link}" target="_blank" style="align-self: flex-start; color: var(--primary-blue); font-weight: bold; font-size: 0.9rem; text-decoration: none; border-bottom: 2px solid var(--accent-gold); padding-bottom: 2px;">
                Read Full Story &rarr;
            </a>`;
      }
      newsItem.innerHTML = `
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                    <span style="background: #eef2f6; color: var(--primary-blue); padding: 4px 10px; border-radius: 4px; font-size: 0.75rem; font-weight: bold; text-transform: uppercase;">${news.category}</span>
                    <span style="font-size: 0.8rem; color: #888;">${news.date}</span>
                </div>
                <h3 style="color: #333; margin-bottom: 15px; font-size: 1.2rem; line-height: 1.4;">${news.title}</h3>
                <img src="${news.img}" alt="${news.title}" class="news-card-img" onerror="this.style.display='none'">
                <p style="color: #555; line-height: 1.6; font-size: 0.95rem; text-align: justify; margin-bottom: 15px;">${news.content}</p>
                ${linkHTML}
            `;
      container.appendChild(newsItem);
    });
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function closeNewsModal() {
  const modal = document.getElementById("news-modal-overlay");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "auto";
  }
}

// ==========================================
// 12. LIGHTBOX GALLERY LOGIC (Auto-Slideshow)
// ==========================================
const photoCollections = {
  retreat: [
    {
      src: "images/ceo-1.jpg",
      caption:
        "Opening Ceremony of a 3-Day International Networking Workshop held at CMD, Lgaos from 25th - 27th Nov., 2025",
    },
    {
      src: "images/ceo-2.jpg",
      caption: "Cross-section of participants and facilitators",
    },
    {
      src: "images/ceo-3.jpg",
      caption:
        "Executive Secretary of WAMDEVIN, Olaolu A. Adewumi, The President of WAMDEVIN, ably represented by Mrs. Fatou presenting an award of distinction to Mr. Shehu Zubairu (Facilitator)",
    },
    {
      src: "images/ceo-4.jpg",
      caption:
        "Mrs. Fatou, representing the President of WAMDEVIN, presenting an award of distinction to Mr. Audu G. A. (Facilitator)",
    },
    {
      src: "images/ceo-5.jpg",
      caption:
        "Executive Secretary presenting a Certificate of Membership to the DG of CMD ably reprented by Mrs Edem Stella.",
    },
    {
      src: "images/ceo-6.jpg",
      caption:
        "ES presenting a Certificate of Membership to The President, WAMDEVIN & DG, MDI/CSU, ably represented by Mrs Fatou.",
    },
    {
      src: "images/ceo-7.jpg",
      caption:
        "ES presenting a Certificate of Membership to the DG, PSSDC (participant)",
    },
    {
      src: "images/ceo-8.jpg",
      caption:
        "ES presenting an Award of Excellence to Mr. Momodou Mboob (participant)",
    },
    {
      src: "images/ceo-9.jpg",
      caption:
        "ES presenting an Award of Excellence to Adams Isa Ohida (participant)",
    },
    {
      src: "images/ceo-10.jpg",
      caption:
        "ES presenting an Award of Excellence to Mr. Sillah Conateh (participant)",
    },
    {
      src: "images/ceo-11.jpg",
      caption: "Mumuni, S. O. receiving a Long Service Award from DG, PSSDC",
    },
    {
      src: "images/ceo-12.jpg",
      caption:
        "ES presenting a Certificate of Participation to Dauda Yahaya (participant)",
    },
    {
      src: "images/ceo-13.jpg",
      caption:
        "Mr. Sillah Conateh presenting Appreciation Award to Mrs. Adeyemo",
    },
    {
      src: "images/ceo-14.jpg",
      caption: "Cross-section of Participants at the Workshop",
    },
  ],
  summit: [
    {
      src: "images/archive-1.jpg",
      caption:
        "Dr. S. K. Olowe, erstwhile ES (standing), Mr. Eniaiyejuni (left), and Mr. Samuel in class during Train-The-Trainers' held in 2019.",
    },
    {
      src: "images/archive-2.jpg",
      caption:
        "ES, WAMDEVIN and members of Staff during a courtesy visit to Director-General of the Public Service Institute of Nigeria, Dr. Abdul-Ganiyu (late)",
    },
    {
      src: "images/archive-3.jpg",
      caption:
        "The Executive Secretary presents a plaque to the 2nd Vice President of WAMDEVIN & Director-General, ASCON in recognition of her remarkable first 100 days in office.",
    },
  ],
  workshop: [
    {
      src: "images/ttt-1.jpg",
      caption:
        "Group Photograph of Participants on the course: “Navigating Manpower Development Process for Learning and Development  Practitioners” organised by WAMDEVIN from 24th - 28th March & 14th - 18th April, 2025",
    },
    {
      src: "images/ttt-2.jpg",
      caption:
        "Group photo of Participants at the Productivity Enhancement Course held in 2025.",
    },
  ],
  networking: [
    {
      src: "images/session-1.jpg",
      caption:
        "Executive Secretary in attendance with the members of the House of Representatives Committee on Public Service Matters during an oversight visit to ASCON to assess ongoing projects and review capacity-building initiatives.",
    },
    {
      src: "images/session-2.jpg",
      caption:
        "Cross section of the ES and DG, MDI/CSU The Gambia (represented by Mrs. Fatou) at the General Assembly Meeting held in Nov. 25, 2025",
    },
  ],
};

let currentGalleryId = "";
let lightboxIndex = 0;
let slideTimer;

function openLightbox(galleryId) {
  const gallery = photoCollections[galleryId];
  const lightboxOverlay = document.getElementById("lightbox-overlay");

  if (gallery && gallery.length > 0 && lightboxOverlay) {
    currentGalleryId = galleryId;
    lightboxIndex = 0;

    updateLightboxImage();

    lightboxOverlay.style.display = "block";
    document.body.style.overflow = "hidden";

    startSlideshow(); // Start the timer
  }
}

function closeLightbox() {
  const lightboxOverlay = document.getElementById("lightbox-overlay");
  if (lightboxOverlay) {
    lightboxOverlay.style.display = "none";
    document.body.style.overflow = "auto";
    stopSlideshow(); // Kill the timer immediately
  }
}

function changeSlide(n) {
  // 1. STOP the timer immediately so it doesn't double-jump
  stopSlideshow();

  const gallery = photoCollections[currentGalleryId];
  if (gallery) {
    // 2. Change the slide
    lightboxIndex = (lightboxIndex + n + gallery.length) % gallery.length;
    updateLightboxImage();

    // 3. RESTART the timer (User is done clicking, resume auto-play)
    startSlideshow();
  }
}

function updateLightboxImage() {
  const gallery = photoCollections[currentGalleryId];
  const item = gallery[lightboxIndex];

  document.getElementById("lightbox-img").src = item.src;
  document.getElementById("lightbox-caption").innerText = item.caption;
  document.getElementById("lightbox-counter").innerText = `${
    lightboxIndex + 1
  } / ${gallery.length}`;
}

// --- TIMER FUNCTIONS ---

function startSlideshow() {
  clearInterval(slideTimer); // Safety clear
  slideTimer = setInterval(() => {
    // We call the update logic directly to avoid infinite loops
    const gallery = photoCollections[currentGalleryId];
    if (gallery) {
      lightboxIndex = (lightboxIndex + 1) % gallery.length;
      updateLightboxImage();
    }
  }, 3000); // 3 Seconds
}

function stopSlideshow() {
  clearInterval(slideTimer);
}

// ==========================================
// 13. RESOURCE DETAILS MODAL
// ==========================================
const resourcesData = {
  res1: {
    title: "WAMDEVIN Constitution",
    icon: "fa-gavel",
    file: "downloads/WAMDEVIN_Constitution.pdf",
    desc: "The fundamental legal document outlining the governance structure, membership rights, and operational by-laws of the network. Essential reading for all new member institutes.",
  },
  res2: {
    title: "Membership Directory 2025",
    icon: "fa-address-book",
    file: "downloads/Member_Directory_2025.pdf",
    desc: "A complete contact list of all 16 Member Institutions, including Director Generals, Registrars, and focal points across the 6 member countries.",
  },
  res3: {
    title: "Strategic Plan (2025-2030)",
    icon: "fa-chess",
    file: "downloads/Strategic_Plan_2025-2029.pdf",
    desc: "Our 5-year rolling plan focusing on Full Engagement of Stakeholders, Financial Sustainability, and Digital Transformation of the Secretariat.",
  },
  res4: {
    title: "2024 Annual Report",
    icon: "fa-chart-bar",
    file: "downloads/Annual_Report_2024.pdf",
    desc: "A detailed breakdown of activities, financial performance, and impact assessments from the previous fiscal year.",
  },
  res5: {
    title: "2026 Programme of Activities",
    icon: "fa-calendar-alt",
    file: "downloads/WAMDEVIN_2026_Calendar.pdf",
    desc: "The comprehensive schedule for 2026, including the Q1 Board Meeting in Gambia, MCB Workshop in Ghana, and the AGM in Sierra Leone.",
  },
  res6: {
    title: "Brand Assets Package",
    icon: "fa-images",
    file: "downloads/WAMDEVIN_Logos.zip",
    desc: "Official high-resolution logos (PNG/JPG) and brand usage guidelines for partners and press usage.",
  },
};

function openResourceModal(resId) {
  const modal = document.getElementById("res-modal-overlay");
  const data = resourcesData[resId];
  if (data && modal) {
    document.getElementById("res-title").innerText = data.title;
    document.getElementById("res-desc").innerText = data.desc;
    document.getElementById(
      "res-icon-container"
    ).innerHTML = `<i class="fas ${data.icon}"></i>`;
    document.getElementById("res-download-btn").href = data.file;
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function closeResModal() {
  const modal = document.getElementById("res-modal-overlay");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "auto";
  }
}

// ==========================================
// 14. SCROLL TO TOP
// ==========================================
const scrollBtn = document.createElement("button");
scrollBtn.id = "scrollToTopBtn";
scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
document.body.appendChild(scrollBtn);

window.onscroll = function () {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    scrollBtn.classList.add("showBtn");
  } else {
    scrollBtn.classList.remove("showBtn");
  }
};

scrollBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ==========================================
// 15. RESOURCE SEARCH FUNCTION
// ==========================================
function filterResources() {
  // 1. Get the search term
  const input = document.getElementById("resource-search");
  const filter = input.value.toLowerCase();

  // 2. Get all searchable items (Documents & Gallery Photos)
  // We select both classes at once
  const cards = document.querySelectorAll(".member-card, .gallery-item");

  // 3. Loop through all items
  cards.forEach((card) => {
    // Get the text content of the card (Title, Description, Caption)
    const text = card.textContent || card.innerText;

    // 4. Check if the search term is inside the text
    if (text.toLowerCase().indexOf(filter) > -1) {
      card.style.display = ""; // Show it
    } else {
      card.style.display = "none"; // Hide it
    }
  });
}

// ==========================================
// 16. NEWSLETTER SUBSCRIPTION LOGIC
// ==========================================
const newsletterForm = document.getElementById("newsletterForm");

if (newsletterForm) {
  newsletterForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const btn = newsletterForm.querySelector("button");
    const originalText = btn.innerText;
    const emailInput = document.getElementById("sub-email").value;

    btn.innerText = "Subscribing...";
    btn.disabled = true;

    // Note: You can use the same Formspree ID or create a new one specifically for Newsletters
    const formData = new FormData();
    formData.append("email", emailInput);
    formData.append("subject", "Newsletter Subscription");

    try {
      const response = await fetch("https://formspree.io/f/mgvbqbda", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        showToast(
          "Welcome to the community! Subscription successful.",
          "success",
          "Subscribed"
        );
        newsletterForm.reset();
      } else {
        showToast("Could not subscribe. Please try again.", "error", "Error");
      }
    } catch (error) {
      showToast("Check your internet connection.", "error", "Network Error");
    } finally {
      btn.innerText = originalText;
      btn.disabled = false;
    }
  });
}

// ==========================================
// 17. DARK MODE TOGGLE
// ==========================================

// 1. Create the toggle button
const themeBtn = document.createElement("button");
themeBtn.id = "theme-toggle";
themeBtn.innerHTML = '<i class="fas fa-moon"></i>'; // Default icon
themeBtn.title = "Toggle Dark Mode";
document.body.appendChild(themeBtn);

// 2. Check for saved preference
const currentTheme = localStorage.getItem("theme");
if (currentTheme === "dark") {
  document.body.classList.add("dark-mode");
  themeBtn.innerHTML = '<i class="fas fa-sun"></i>'; // Switch to sun icon
}

// 3. Add Click Event
themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  // Logic to switch icon and save preference
  if (document.body.classList.contains("dark-mode")) {
    themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
    localStorage.setItem("theme", "dark");
  } else {
    themeBtn.innerHTML = '<i class="fas fa-moon"></i>';
    localStorage.setItem("theme", "light");
  }
});
