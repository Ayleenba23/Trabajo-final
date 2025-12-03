// ============================================
// TRADUCCIONES
// ============================================
const translations = {
  es: {
    'nav-work': 'Proyectos',
    'nav-partners': 'Colaboraciones',
    'nav-about': 'Sobre mí',
    'nav-contact': 'Contacto',
    'available': 'Disponible para proyectos',
    'hero-sub': 'Diseñadora integral',
    'btn-projects': 'Ver proyectos',
    'about-title': 'Sobre mí',
    'skills-title': 'Conocimientos en programas',
    'partners-title': 'Empresas que han confiado en mi trabajo',
    'works-title': 'Proyectos',
    'contact-headline': 'Hablemos',
    'see-work': 'Ver trabajo'
  },
  en: {
    'nav-work': 'Projects',
    'nav-partners': 'Collaborations',
    'nav-about': 'About',
    'nav-contact': 'Contact',
    'available': 'Available for projects',
    'hero-sub': 'Integral designer',
    'btn-projects': 'View projects',
    'about-title': 'About me',
    'skills-title': 'Software Skills',
    'partners-title': 'Companies that have trusted my work',
    'works-title': 'Projects',
    'contact-headline': "Let's talk",
    'see-work': 'See work'
  }
};

let currentLang = 'es';

function applyTranslations() {
  document.querySelectorAll('[data-translate]').forEach(el => {
    const key = el.getAttribute('data-translate');
    if (translations[currentLang]?.[key]) {
      el.textContent = translations[currentLang][key];
    }
  });
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
  });
  document.querySelectorAll('.see-work').forEach(el => {
    el.textContent = translations[currentLang]['see-work'];
  });
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    currentLang = btn.dataset.lang;
    applyTranslations();
  });
});

// ============================================
// MENÚ MÓVIL
// ============================================
const menuToggle = document.getElementById('menuToggle');
const sideMenu = document.getElementById('sideMenu');

if (menuToggle && sideMenu) {
  menuToggle.addEventListener('click', () => {
    sideMenu.classList.toggle('active');
  });
  sideMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => sideMenu.classList.remove('active'));
  });
}

// ============================================
// PALABRA ROTANTE
// ============================================
const words = ['solución', 'prototipo', 'forma', 'experiencia', 'tangible'];
let wordIndex = 0;
const rotatingEl = document.getElementById('rotatingWord');

function rotateWord() {
  if (!rotatingEl) return;
  wordIndex = (wordIndex + 1) % words.length;
  rotatingEl.classList.remove('animate');
  void rotatingEl.offsetWidth;
  rotatingEl.textContent = words[wordIndex];
  rotatingEl.classList.add('animate');
}

setInterval(rotateWord, 3200);

// ============================================
// SCROLL EFFECTS
// ============================================
function handleScroll() {
  const scrollY = window.scrollY;
  document.body.classList.toggle('scrolled', scrollY > 100);
  revealOnScroll();
}

window.addEventListener('scroll', () => {
  requestAnimationFrame(handleScroll);
});

function revealOnScroll() {
  document.querySelectorAll('.reveal').forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 150) {
      el.classList.add('active');
    }
  });
}

// ============================================
// MARQUEES
// ============================================
const servicesRow1 = [
  { icon: '◎', name: 'Diseño de Producto' },
  { icon: '▢', name: 'Modelado 3D' },
  { icon: '◈', name: 'Fabricación Digital' },
  { icon: '✧', name: 'Prototipado' },
  { icon: '◇', name: 'Corte Láser' },
  { icon: '⬡', name: 'Impresión 3D' },
  { icon: '◎', name: 'Diseño Industrial' },
  { icon: '▣', name: 'Robótica' }
];

const servicesRow2 = [
  { icon: '◉', name: 'Diseño Paramétrico' },
  { icon: '⬢', name: 'Renderizado' },
  { icon: '◆', name: 'Visualización' },
  { icon: '✦', name: 'Diseño de Alimentos' },
  { icon: '◈', name: 'Iluminación' },
  { icon: '▧', name: 'Packaging' },
  { icon: '◎', name: 'Branding' },
  { icon: '◇', name: 'Fotogrametría' }
];

function initPossibilitiesMarquee() {
  const m1 = document.getElementById('possibilitiesMarquee1');
  const m2 = document.getElementById('possibilitiesMarquee2');
  
  if (m1) {
    const c1 = servicesRow1.map(s => `<span class="service-pill"><span>${s.icon}</span> ${s.name}</span>`).join('');
    m1.innerHTML = `<div class="marquee-content">${c1}</div><div class="marquee-content">${c1}</div>`;
  }
  if (m2) {
    const c2 = servicesRow2.map(s => `<span class="service-pill"><span>${s.icon}</span> ${s.name}</span>`).join('');
    m2.innerHTML = `<div class="marquee-content">${c2}</div><div class="marquee-content">${c2}</div>`;
  }
}

const partners = ["Fabrinox", "Fundación Alma Chile", "Nestlé", "Barra Zero Alcohol", "Fight 4 Pits", "Low Tech", "ECIM"];

function initPartnersMarquee() {
  const pm = document.getElementById('partnersMarquee');
  if (pm) {
    const h = partners.map(n => `<span class="marquee-item">${n}</span><span class="marquee-separator"></span>`).join('');
    pm.innerHTML = `<div class="marquee-content">${h}</div><div class="marquee-content">${h}</div>`;
  }
}

// ============================================
// SKILLS
// ============================================
const skillsData = [
  { name: 'Rhinoceros', category: '3D' },
  { name: 'Grasshopper', category: '3D' },
  { name: 'Fusion 360', category: '3D' },
  { name: 'Blender', category: '3D' },
  { name: 'AutoCAD', category: '2D' },
  { name: 'Illustrator', category: '2D' },
  { name: 'Photoshop', category: '2D' },
  { name: 'Procreate', category: '2D' },
  { name: 'RobotStudio', category: 'Fab' },
  { name: 'Cura', category: 'Fab' },
  { name: 'RDWorks', category: 'Fab' },
  { name: 'Prusa Slicer', category: 'Fab' },
  { name: 'Nomad Sculpt', category: '3D' },
  { name: 'Meshmixer', category: '3D' },
  { name: 'Agisoft Metashape', category: '3D' },
  { name: 'Autodesk Inventor', category: '3D' }
];

const skillsGrid = document.getElementById('skillsGrid');
if (skillsGrid) {
  skillsData.forEach(skill => {
    const item = document.createElement('div');
    item.className = 'skill-item reveal';
    item.innerHTML = `<span class="skill-category">${skill.category}</span>${skill.name}`;
    skillsGrid.appendChild(item);
  });
}

// ============================================
// PROYECTOS
// ============================================
const projectsGrid = document.getElementById('projectsGrid');

async function fetchProjects() {
  try {
    const resp = await fetch('datos.json');
    if (!resp.ok) throw new Error('No JSON');
    return await resp.json();
  } catch(e) {
    console.warn('Usando datos de ejemplo');
    return [];
  }
}

function createProjectCard(project) {
  const card = document.createElement('a');
  card.className = 'project-card reveal';
  card.href = `proyecto.html?slug=${encodeURIComponent(project.slug)}`;
  
  const mediaDiv = document.createElement('div');
  mediaDiv.className = 'project-media';
  
  if (project.video) {
    const video = document.createElement('video');
    video.src = project.video;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.autoplay = true;
    video.onerror = () => {
      if (project.photo) {
        mediaDiv.innerHTML = `<img src="${project.photo}" alt="${project.title}" loading="lazy">`;
      }
    };
    card.addEventListener('mouseenter', () => video.play().catch(() => {}));
    mediaDiv.appendChild(video);
  } else if (project.photo) {
    const img = document.createElement('img');
    img.src = project.photo;
    img.alt = project.title;
    img.loading = 'lazy';
    img.onerror = () => {
      img.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300"><rect fill="%23f0f0f0" width="400" height="300"/><text fill="%23999" font-family="sans-serif" font-size="14" x="50%" y="50%" text-anchor="middle">Imagen</text></svg>';
    };
    mediaDiv.appendChild(img);
  }
  
  const overlay = document.createElement('div');
  overlay.className = 'project-overlay';
  overlay.innerHTML = `<span class="see-work">${translations[currentLang]['see-work']}</span>`;
  mediaDiv.appendChild(overlay);
  
  const categories = project.category ? project.category.split('·').map(c => c.trim()) : [];
  const tagsHTML = categories.map(cat => `<span class="project-tag">${cat}</span>`).join('');
  
  const infoDiv = document.createElement('div');
  infoDiv.className = 'project-info';
  infoDiv.innerHTML = `
    <h3 class="project-title">${project.title}</h3>
    <p class="project-description">${project.description || ''}</p>
    <div class="project-tags">${tagsHTML}</div>
    <div class="project-year">${project.year || ''}</div>
  `;
  
  card.appendChild(mediaDiv);
  card.appendChild(infoDiv);
  return card;
}

(async () => {
  try {
    const projects = await fetchProjects();
    
    if (projectsGrid && projects.length) {
      projectsGrid.innerHTML = '';
      projects.forEach(p => projectsGrid.appendChild(createProjectCard(p)));
    }
    
    initPossibilitiesMarquee();
    initPartnersMarquee();
    
    setTimeout(() => {
      const loader = document.getElementById('siteLoader');
      if (loader) {
        loader.classList.add('hidden');
        setTimeout(() => loader.style.display = 'none', 600);
      }
    }, 800);
    
    setTimeout(revealOnScroll, 100);
  } catch (error) {
    console.error('Error:', error);
    document.getElementById('siteLoader')?.classList.add('hidden');
  }
})();

// ============================================
// FOOTER YEAR
// ============================================
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ============================================
// CONTACT FORM
// ============================================
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('.btn-submit');
    const orig = btn.innerHTML;
    btn.innerHTML = '¡Mensaje enviado! ✓';
    btn.style.background = '#238089';
    btn.style.color = '#fff';
    setTimeout(() => {
      btn.innerHTML = orig;
      btn.style.background = '';
      btn.style.color = '';
      contactForm.reset();
    }, 3000);
  });
}

// ============================================
// INIT
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  applyTranslations();
  
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
  
  handleScroll();
});

// Intersection Observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('active');
  });
}, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' });

setTimeout(() => {
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}, 500);
