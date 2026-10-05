feather.replace();
const navbarNav = document.querySelector(".navbar-nav");
const hamburgerMenu = document.querySelector("#hamburger-menu");
hamburgerMenu.addEventListener("click", function (event) {
  event.preventDefault();
  navbarNav.classList.toggle("active");
});

document.addEventListener("click", function (event) {
  if (
    !hamburgerMenu.contains(event.target) &&
    !navbarNav.contains(event.target)
  ) {
    navbarNav.classList.remove("active");
  }
});

document.querySelectorAll(".navbar-nav a").forEach(function (link) {

  link.addEventListener("click", function () {
    navbarNav.classList.remove("active");
  });
});

const projects = [
  {
    image: "trash.hero.jpeg",
    tag: "Game Development",
    title: "Trash Hero",
    description:
      "Game 2D berbasis Unity dengan tema lingkungan. Pemain mengumpulkan sampah dan memilahnya menjadi organik dan anorganik.",
    meta: [
      "Unity",
      "2D Game",
      "OOP",
      "SDGs"
    ]
  },
  {
    image: "Jejak Rasa Nusantara.png",
    tag: "Animation",
    title: "Jejak Rasa Nusantara",
    description:
      "Proyek animasi 2D bertema budaya Indonesia yang mengangkat hubungan nenek dan cucu serta cerita tentang makanan tradisional.",
    meta: [
      "2D Animation",
      "Frame by Frame",
      "Cut-out",
      "VFX"
    ]
  },
  {
    image: "arizhem.png",
    tag: "Produksi Multimedia",
    title: "Game",
    description:
      "Kumpulan eksplorasi karya digital dalam bidang desain, visual, multimedia, dan pengembangan konten kreatif.",
    meta: [
      "Design",
      "Multimedia",
      "Visual"
    ]
  },
  {
    image: "homepage.png",
    tag: "Web & UI",
    title: "Digital Portfolio",
    description:
      "Eksplorasi pembuatan antarmuka website dengan HTML, CSS, dan JavaScript yang responsif dan interaktif.",
    meta: [
      "HTML",
      "CSS",
      "JavaScript",
      "UI"
    ]
  }
];

const projectList = document.querySelector("#project-list");
projectList.innerHTML = projects.map(function (project) {
  return `
    <article class="project-card">
      <div class="project-image">
        <img
          src="${project.image}"
          alt="${project.title}">
        <span class="project-tag">
          ${project.tag}
        </span>
      </div>
    
      <div class="project-content">
        <h3>
          ${project.title}
        </h3>
        <p>
          ${project.description}
        </p>

        <div class="project-meta">
          ${project.meta.map(function (item) {
            return `
              <span>
                ${item}
              </span>
            `;
          }).join("")}
        </div>
      </div>
    </article>
  `;
}).join("");

const contactForm =
  document.querySelector("#contact-form");
contactForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const name =
    document.querySelector("#name").value.trim();
  if (name) {
    alert(
      `Terima kasih, ${name}! Pesan kamu sudah dicatat.`
    );
    contactForm.reset();
  }
});
const sections =
  document.querySelectorAll("section[id]");
const navLinks =
  document.querySelectorAll(".navbar-nav a");
window.addEventListener("scroll", function () {
  let currentSection = "";
  sections.forEach(function (section) {
    const sectionTop =
      section.offsetTop - 120;
    const sectionHeight =
      section.offsetHeight;
    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      currentSection =
        section.getAttribute("id");
    }
  });

  navLinks.forEach(function (link) {
    link.classList.remove("active");


    if (
      link.getAttribute("href") ===
      `#${currentSection}`
    ) {

      link.classList.add("active");

    }
  });
});