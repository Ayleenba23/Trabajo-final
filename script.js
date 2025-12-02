// ==========================================
// SISTEMA DE TRADUCCIÓN
// ==========================================

const translations = {
    es: {
        'nav-home': 'Inicio',
        'nav-about': 'Sobre mí',
        'nav-work': 'Proyectos',
        'nav-contact': 'Contacto',
        'hero-subtitle': 'Diseñadora Integral UC',
        'btn-projects': 'Ver proyectos',
        'about-title': 'Sobre mí',
        'about-text1': 'Soy estudiante de Diseño Integral UC, impulsada por la innovación en procesos productivos y la integración de la tecnología en el diseño. Mi enfoque es interdisciplinario, abarcando desde el modelado 3D y la fabricación digital, hasta el desarrollo estratégico de productos.',
        'about-text2': 'Busco constantemente la convergencia entre la funcionalidad rigurosa y la calidad. Valoro el trabajo colaborativo, la gestión detallada del tiempo y la capacidad de transformar la curiosidad en proyectos tangibles, como este portafolio, que diseñé y programé desde cero.',
        'experience-title': 'Experiencia Laboral',
        'education-title': 'Estudios',
        'skills-title': 'Nivel Manejo de Software', // CAMBIO AQUÍ
        'exp1-title': 'Práctica Profesional',
        'exp2-title': 'Práctica de Servicio',
        'edu1-title': 'Diseño Integral',
        'edu1-school': 'Pontificia Universidad Católica de Chile',
        'works-title': 'Proyectos Destacados',
        'contact-title': 'Conversemos',
        'social-title': 'Redes',
        'form-title': 'Envíame un mensaje',
        'form-name': 'Nombre',
        'form-message': 'Mensaje',
        'form-send': 'Enviar mensaje',
        'footer-credits': 'Diseñado y programado por mí',
        'back-top': 'Volver arriba →'
    },
    en: {
        'nav-home': 'Home',
        'nav-about': 'About',
        'nav-work': 'Works',
        'nav-contact': 'Contact',
        'hero-subtitle': 'Integral Designer UC',
        'btn-projects': 'View projects',
        'about-title': 'About me',
        'about-text1': "I'm an Integral Design student at UC, driven by innovation in production processes and the integration of technology in design. My focus is interdisciplinary, spanning 3D modeling, digital fabrication, and strategic product development.",
        'about-text2': 'I constantly seek the convergence between rigorous functionality and quality. I value collaborative work, detailed time management, and the ability to transform curiosity into tangible projects, such as this portfolio, which I designed and coded from scratch.',
        'experience-title': 'Work Experience',
        'education-title': 'Education',
        'skills-title': 'Software Proficiency Level', // CAMBIO AQUÍ
        'exp1-title': 'Professional Internship',
        'exp2-title': 'Service Internship',
        'edu1-title': 'Integral Design',
        'edu1-school': 'Pontifical Catholic University of Chile',
        'works-title': 'Featured Projects',
        'contact-title': "Let's talk",
        'social-title': 'Social',
        'form-title': 'Send me a message',
        'form-name': 'Name',
        'form-message': 'Message',
        'form-send': 'Send message',
        'footer-credits': 'Designed & Coded by me',
        'back-top': 'Back to top →'
    }
};

let currentLang = 'es';

function changeLanguage(lang) {
    currentLang = lang;
    
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === 'LABEL') {
                const inputId = element.getAttribute('for');
                const inputElement = document.getElementById(inputId);
                if (inputElement && inputElement.value === '') {
                    element.textContent = translations[lang][key];
                } else if (!inputElement) {
                    element.textContent = translations[lang][key];
                }
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
    // Si estamos en la página principal, actualizamos el atributo para el efecto de color
    const worksTitle = document.querySelector('.section-title-color-change');
    if (worksTitle && translations[lang] && translations[lang]['works-title']) {
        worksTitle.setAttribute('data-translate-content', translations[lang]['works-title']);
    }
}

document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        changeLanguage(btn.dataset.lang);
    });
});
changeLanguage(currentLang);


// ==========================================
// MENÚ HAMBURGUESA
// ==========================================

const menuToggle = document.getElementById('menuToggle');
const sideMenu = document.getElementById('sideMenu');
const overlay = document.getElementById('overlay');
const menuLinks = document.querySelectorAll('.side-menu a');

function toggleMenu() {
    menuToggle.classList.toggle('active');
    sideMenu.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.style.overflow = sideMenu.classList.contains('active') ? 'hidden' : 'auto';
}

if (menuToggle && sideMenu && overlay) {
    menuToggle.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);
    
    menuLinks.forEach(link => {
        link.addEventListener('click', toggleMenu);
    });
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && sideMenu && sideMenu.classList.contains('active')) {
        toggleMenu();
    }
});

// ==========================================
// SMOOTH SCROLL
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        
        // Manejar la navegación entre index.html y proyecto.html
        if (this.hostname !== window.location.hostname || this.pathname !== window.location.pathname) {
             window.location.href = this.href;
             return;
        }

        if (targetId === '#' || targetId === '#home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }
        
        const target = document.querySelector(targetId);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ==========================================
// ANIMACIONES DE SCROLL
// ==========================================

const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

const observeAnimations = () => {
    document.querySelectorAll('.scroll-animate').forEach(el => {
        observer.observe(el);
    });
};

// ==========================================
// CARGAR PROYECTOS DESDE JSON Y LOCALSTORAGE
// ==========================================

const carouselTrack = document.getElementById('carouselTrack');
const API_URL = 'datos.json'; 

// Función para crear slug del título
function createSlug(title) {
    return title
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
}

async function cargarProyectos() {
    if (!carouselTrack) {
        return;
    }

    let proyectos;

    try {
        const response = await fetch(API_URL);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        proyectos = await response.json();
        
    } catch (error) {
        console.error('❌ Error al cargar proyectos desde API/JSON:', error);
        carouselTrack.innerHTML = `
            <div style="text-align: center; width: 100%; padding: 40px; color: #666;">
                <p>⚠️ No se pudieron cargar los proyectos. (Revisa la ruta del JSON o el Live Server)</p>
                <p style="font-size: 0.9rem; margin-top: 10px;">Error: ${error.message}</p>
            </div>
        `;
        return;
    }
    
    // GUARDAR EN LOCALSTORAGE para que proyecto.html lo use.
    localStorage.setItem('proyectos', JSON.stringify(proyectos));
    
    carouselTrack.innerHTML = '';
    
    if (!Array.isArray(proyectos) || proyectos.length === 0) {
        carouselTrack.innerHTML = '<p style="color: #666; text-align: center; width: 100%;">No hay proyectos disponibles.</p>';
        return;
    }
    
    proyectos.forEach((proyecto) => {
        const title = String(proyecto.title || 'Sin título');
        const category = String(proyecto.category || 'Sin categoría');
        const year = String(proyecto.year || '');
        const photo = String(proyecto.photo || 'img/placeholder.webp');
        const slug = String(proyecto.slug || createSlug(title));
        
        const cardWrapper = document.createElement('div');
        cardWrapper.className = 'card-wrapper scroll-animate';
        
        cardWrapper.innerHTML = `
            <a href="proyecto.html?slug=${slug}" class="project-card" tabindex="0" role="article" aria-label="${title}">
                <div class="card-image">
                    <img src="${photo}" alt="${title}" loading="lazy" onerror="this.src='img/placeholder.webp'">
                </div>
                <div class="card-content">
                    <span class="card-category">${category}</span>
                    <h3 class="card-title">${title}</h3>
                    <span class="card-year">${year}</span>
                    <span class="card-more">Ver más...</span>
                </div>
            </a>
        `;
        
        carouselTrack.appendChild(cardWrapper);
    });

    setTimeout(observeAnimations, 100);
    
    console.log(`✅ ${proyectos.length} proyectos cargados correctamente y guardados en localStorage.`);
}

if (document.getElementById('home')) {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', cargarProyectos);
    } else {
        cargarProyectos();
    }
}


// ==========================================
// CARRUSEL - NAVEGACIÓN
// ==========================================

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

if (carouselTrack && prevBtn && nextBtn) {
    
    const getScrollAmount = () => {
        const firstCard = carouselTrack.querySelector('.card-wrapper');
        return firstCard ? firstCard.offsetWidth + 35 : 300; 
    };

    nextBtn.addEventListener('click', () => {
        const amount = getScrollAmount();
        const maxScroll = carouselTrack.scrollWidth - carouselTrack.clientWidth;
        
        if (carouselTrack.scrollLeft >= maxScroll - 10) {
            carouselTrack.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
            carouselTrack.scrollBy({ left: amount, behavior: 'smooth' });
        }
    });

    prevBtn.addEventListener('click', () => {
        const amount = getScrollAmount();
        
        if (carouselTrack.scrollLeft <= 10) {
            carouselTrack.scrollTo({ left: carouselTrack.scrollWidth, behavior: 'smooth' });
        } else {
            carouselTrack.scrollBy({ left: -amount, behavior: 'smooth' });
        }
    });
}


// ==========================================
// FORMULARIO DE CONTACTO
// ==========================================

const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const data = {
            nombre: formData.get('nombre'),
            email: formData.get('email'),
            mensaje: formData.get('mensaje'),
            _subject: formData.get('_subject') 
        };
        
        try {
            const response = await fetch('https://formsubmit.co/ajax/ayleenbahamondezlatorre@gmail.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(data)
            });
            
            const result = await response.json();
            
            if (response.ok) {
                formMessage.textContent = '✓ Mensaje enviado correctamente. Te contactaré pronto!';
                formMessage.className = 'form-message success';
                contactForm.reset();
                
                setTimeout(() => {
                    formMessage.style.display = 'none';
                }, 5000);
            } else {
                throw new Error(result.message || 'Error al enviar');
            }
            
        } catch (error) {
            formMessage.textContent = '✗ Hubo un error al enviar el mensaje. Por favor, intenta nuevamente o escríbeme directamente al email.';
            formMessage.className = 'form-message error';
        }
    });
}


// ==========================================
// RELOJ EN TIEMPO REAL
// ==========================================

function updateClock() {
    const clockElement = document.getElementById('clock');
    if (!clockElement) return;
    
    const now = new Date();
    const options = { 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit',
        hour12: false, 
        timeZone: 'America/Santiago'
    };
    
    clockElement.textContent = now.toLocaleTimeString('es-CL', options);
}

updateClock();
if (document.getElementById('clock')) {
    setInterval(updateClock, 1000);
}


// ==========================================
// EFECTOS VISUALES EN SCROLL
// ==========================================

let ticking = false;

function handleScroll() {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    const heroSection = document.getElementById('home');
    const body = document.body;
    
    // 1. Efecto Parallax en Hero
    if (heroContent && scrolled < window.innerHeight) {
        if (!ticking) {
             window.requestAnimationFrame(() => {
                const opacity = Math.max(0, 1 - (scrolled / 600));
                const translateY = scrolled * 0.4;
                
                heroContent.style.transform = `translateY(${translateY}px)`;
                heroContent.style.opacity = opacity;
                ticking = false;
            });
            ticking = true;
        }
    }
    
    // 2. Efecto de Scroll Oscuro -> Claro (New Genre)
    if (heroSection) {
        const heroHeight = heroSection.offsetHeight;
        const transitionPoint = heroHeight * 0.7; 
        
        if (scrolled > transitionPoint) {
            body.classList.add('scrolled-to-light');
            
            const scrollDistance = scrolled - transitionPoint;
            const maxDistance = heroHeight - transitionPoint;
            const normalizedScroll = Math.min(1, Math.max(0, scrollDistance / maxDistance));
            
            const r = Math.round(32 + (255 - 32) * normalizedScroll); 
            const g = Math.round(32 + (255 - 32) * normalizedScroll); 
            const b = Math.round(32 + (255 - 32) * normalizedScroll); 
            
            body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            
        } else {
            body.classList.remove('scrolled-to-light');
            body.style.backgroundColor = `#202020`; 
        }
    }

    // 3. Efecto de Título que Cambia de Color (Outten Golden)
    const worksTitle = document.querySelector('.section-title-color-change');
    if (worksTitle) {
        const rect = worksTitle.getBoundingClientRect();
        const startChange = rect.top; 
        const endChange = rect.bottom; 

        if (startChange < window.innerHeight && endChange > 0) {
            const visibleHeight = window.innerHeight - startChange;
            const totalHeight = endChange - startChange + window.innerHeight;
            const scrollPercent = Math.min(1, Math.max(0, visibleHeight / totalHeight));
            
            if (!worksTitle.hasAttribute('data-translate-content')) {
                 changeLanguage(currentLang);
            }
            
            worksTitle.style.setProperty('--scroll-progress', `${scrollPercent * 100}%`);
        }
    }
}

// Solo aplicar efectos si estamos en la página principal
if (document.getElementById('home')) {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); 
}


// ==========================================
// OPTIMIZACIÓN DE VIDEO
// ==========================================

const heroVideo = document.getElementById('heroVideo');

if (heroVideo) {
    const videoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                heroVideo.play().catch(e => console.log('Video autoplay prevented:', e));
            } else {
                heroVideo.pause();
            }
        });
    }, { threshold: 0.5 });
    
    videoObserver.observe(heroVideo);
    
    heroVideo.play().catch(e => {
        console.log('Video autoplay prevented, waiting for user interaction:', e);
    });
}

// ==========================================
// LÓGICA DE PÁGINA DE PROYECTO (proyecto.html)
// ==========================================

document.addEventListener('DOMContentLoaded', initProjectPage);

function initProjectPage() {
    // Si no estamos en la página de proyecto, salimos.
    if (!document.querySelector('.project-page')) return;

    // Desactivar el color de fondo dinámico del body para esta página
    document.body.style.backgroundColor = '#ffffff';

    const urlParams = new URLSearchParams(window.location.search);
    const projectSlug = urlParams.get('slug');
    
    // Obtenemos los proyectos de localStorage
    const allProjects = JSON.parse(localStorage.getItem('proyectos'));
    const project = allProjects ? allProjects.find(p => p.slug === projectSlug) : null;

    if (!project) {
        document.getElementById('projectTitle').textContent = 'Proyecto No Encontrado';
        return;
    }

    // 1. Rellenar Información del Proyecto
    document.getElementById('projectTitle').textContent = project.title;
    document.getElementById('projectCategory').textContent = project.category;
    document.getElementById('projectYear').textContent = project.year;
    document.getElementById('projectContext').textContent = project.context;
    document.getElementById('projectRole').textContent = project.role_short || project.role; // Usamos la versión corta para el metadato
    document.getElementById('projectPrograms').textContent = project.programs;
    
    // Formatear la descripción usando saltos de línea (\n)
    document.getElementById('projectDescription').innerHTML = project.description_full.split('\n').map(p => p.trim() ? `<p class="scroll-animate">${p.trim()}</p>` : '').join('');
    
    document.getElementById('project-title-meta').textContent = `${project.title} · Portafolio Ayleen Bahamóndez`;


    // 2. Cargar Imagen Principal
    document.getElementById('projectMainImage').innerHTML = `<img src="${project.photo}" alt="Imagen principal de ${project.title}">`;

    // 3. Cargar Galería de Imágenes y Sketchfab
    const galleryContainer = document.getElementById('projectGallery');
    galleryContainer.innerHTML = ''; 
    
    // Añadir Sketchfab Embed
    if (project.sketchfab_id) {
        galleryContainer.innerHTML += `
            <div class="sketchfab-embed-container gallery-item scroll-animate">
                <iframe title="${project.title} Modelo 3D" 
                        frameborder="0" 
                        allowfullscreen 
                        mozallowfullscreen="true" 
                        webkitallowfullscreen="true" 
                        allow="autoplay; fullscreen; xr-spatial-tracking" 
                        xr-spatial-tracking 
                        execution-while-out-of-viewport 
                        execution-while-not-rendered 
                        web-share 
                        src="https://sketchfab.com/models/${project.sketchfab_id}/embed?autostart=0&amp;ui_theme=dark&amp;dnt=1">
                </iframe>
                <p class="gallery-caption">Modelo 3D interactivo. Ver más en <a href="https://sketchfab.com/ayleen.bahamndez" target="_blank">Sketchfab</a>.</p>
            </div>
        `;
    }

    // Añadir Imágenes Adicionales
    const folder = project.photo_folder || project.slug; 
    const count = project.images_count || 0;
    
    for (let i = 1; i <= count; i++) {
        // La ruta sigue el formato img/carpeta/carpeta-1.webp
        galleryContainer.innerHTML += `
            <div class="gallery-item scroll-animate">
                <img src="img/${folder}/${folder}-${i}.webp" alt="${project.title} - Foto ${i}" loading="lazy">
            </div>
        `;
    }

    // Aplicar animaciones de scroll a los nuevos elementos
    document.querySelectorAll('.project-gallery .scroll-animate').forEach(el => {
        observer.observe(el);
    });
    document.querySelectorAll('.project-description-block .scroll-animate').forEach(el => {
        observer.observe(el);
    });
    
    // 4. Cargar Paleta de Colores
    const paletteContainer = document.getElementById('colorPaletteContainer');
    if (project.palette && Array.isArray(project.palette) && project.palette.length > 0) {
        paletteContainer.innerHTML = project.palette.map(color => `
            <div class="color-swatch scroll-animate" style="background-color: ${color};">
                <span class="color-code" style="color: ${isDark(color) ? '#ffffff' : '#202020'};">${color}</span>
            </div>
        `).join('');
        
        // Observar swatches de color
        document.querySelectorAll('.color-swatch.scroll-animate').forEach(el => {
            observer.observe(el);
        });
        
    } else {
        document.querySelector('.color-palette-section').style.display = 'none';
    }

    // Función para determinar si el color de fondo es oscuro
    function isDark(hex) {
        const c = hex.substring(1);      
        const rgb = parseInt(c, 16);     
        const r = (rgb >> 16) & 0xff;    
        const g = (rgb >>  8) & 0xff;    
        const b = (rgb >>  0) & 0xff;    
        const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; 
        return luma < 150; 
    }

    // 5. Cargar Carrusel de "Otros Proyectos" (Radiant Style)
    const otherProjectsCarousel = document.getElementById('otherProjectsCarousel');
    if (allProjects) {
        // Filtramos el proyecto actual y mezclamos el resto
        const filteredProjects = allProjects.filter(p => p.slug !== projectSlug);
        
        if (filteredProjects.length > 0) {
             const shuffledProjects = filteredProjects.sort(() => 0.5 - Math.random()).slice(0, 4); 

            otherProjectsCarousel.innerHTML = shuffledProjects.map(p => `
                <div class="card-wrapper scroll-animate">
                    <a href="proyecto.html?slug=${p.slug}" class="project-card" tabindex="0" role="article" aria-label="${p.title}">
                        <div class="card-image">
                            <img src="${p.photo}" alt="${p.title}" loading="lazy" onerror="this.src='img/placeholder.webp'">
                        </div>
                        <div class="card-content">
                            <span class="card-category">${p.category}</span>
                            <h3 class="card-title">${p.title}</h3>
                            <span class="card-year">${p.year}</span>
                            <span class="card-more">Ver proyecto →</span>
                        </div>
                    </a>
                </div>
            `).join('');

            // Aplicar animaciones
            document.querySelectorAll('.other-projects-section .scroll-animate').forEach(el => {
                observer.observe(el);
            });
            
            // 6. Inicializar la Navegación del Carrusel Dinámico
            const section = document.querySelector('.other-projects-section');
            const controls = document.createElement('div');
            controls.className = 'carousel-controls';
            
            const tempPrevBtn = document.createElement('button');
            tempPrevBtn.className = 'carousel-btn';
            tempPrevBtn.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg>';
            tempPrevBtn.setAttribute('aria-label', 'Anterior proyecto');
            
            const tempNextBtn = document.createElement('button');
            tempNextBtn.className = 'carousel-btn';
            tempNextBtn.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>';
            tempNextBtn.setAttribute('aria-label', 'Siguiente proyecto');
            
            controls.appendChild(tempPrevBtn);
            controls.appendChild(tempNextBtn);
            
            const titleElement = section.querySelector('.other-projects-title');
            titleElement.insertAdjacentElement('afterend', controls);

            // Lógica de scroll para el carrusel de otros proyectos (duplicada de index.js)
            const getScrollAmount = () => {
                const firstCard = otherProjectsCarousel.querySelector('.card-wrapper');
                return firstCard ? firstCard.offsetWidth + 35 : 300;
            };
            
            tempNextBtn.addEventListener('click', () => {
                const amount = getScrollAmount();
                const maxScroll = otherProjectsCarousel.scrollWidth - otherProjectsCarousel.clientWidth;
                
                if (otherProjectsCarousel.scrollLeft >= maxScroll - 10) {
                    otherProjectsCarousel.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    otherProjectsCarousel.scrollBy({ left: amount, behavior: 'smooth' });
                }
            });

            tempPrevBtn.addEventListener('click', () => {
                const amount = getScrollAmount();
                
                if (otherProjectsCarousel.scrollLeft <= 10) {
                    otherProjectsCarousel.scrollTo({ left: otherProjectsCarousel.scrollWidth, behavior: 'smooth' });
                } else {
                    otherProjectsCarousel.scrollBy({ left: -amount, behavior: 'smooth' });
                }
            });
        } else {
             // Si no hay suficientes proyectos para mostrar (ej. solo tienes 1), ocultamos la sección
             document.querySelector('.other-projects-section').style.display = 'none';
        }
    }
}
