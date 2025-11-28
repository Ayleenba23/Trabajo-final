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
        'about-text1': 'Soy estudiante de Diseño Integral de la Pontificia Universidad Católica de Chile, apasionada por el diseño interdisciplinario y la innovación en procesos productivos.',
        'about-text2': 'Mi trabajo explora desde el diseño de producto hasta la experimentación con materiales y fabricación digital, integrando tecnología en proyectos creativos.',
        'experience-title': 'Experiencia Laboral',
        'education-title': 'Estudios',
        'skills-title': 'Manejo de Software',
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
        'about-text1': "I'm an Integral Design student at Pontificia Universidad Católica de Chile, passionate about interdisciplinary design and innovation in production processes.",
        'about-text2': 'My work explores from product design to experimentation with materials and digital fabrication, integrating technology in creative projects.',
        'experience-title': 'Work Experience',
        'education-title': 'Education',
        'skills-title': 'Software Skills',
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
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
}

document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        changeLanguage(btn.dataset.lang);
    });
});

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

setTimeout(observeAnimations, 100);

// ==========================================
// CARGAR PROYECTOS DESDE API JSON
// ==========================================

const carouselTrack = document.getElementById('carouselTrack');
const API_URL = 'https://api.myjson.online/v1/records/0b88c704-1bd9-4f65-b520-915b793737f2';

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
        console.error('Carousel track no encontrado');
        return;
    }

    try {
        const response = await fetch(API_URL);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        const proyectos = data.data || data;
        
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
            const slug = createSlug(title);
            
            const cardWrapper = document.createElement('div');
            cardWrapper.className = 'card-wrapper scroll-animate';
            
            cardWrapper.innerHTML = `
                <a href="proyecto-${slug}.html" class="project-card" tabindex="0" role="article" aria-label="${title}">
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

        setTimeout(() => {
            document.querySelectorAll('.card-wrapper').forEach(card => {
                observer.observe(card);
            });
        }, 100);
        
        console.log(`✅ ${proyectos.length} proyectos cargados correctamente`);
        
    } catch (error) {
        console.error('❌ Error al cargar proyectos:', error);
        if (carouselTrack) {
            carouselTrack.innerHTML = `
                <div style="text-align: center; width: 100%; padding: 40px; color: #666;">
                    <p>⚠️ No se pudieron cargar los proyectos.</p>
                    <p style="font-size: 0.9rem; margin-top: 10px;">Error: ${error.message}</p>
                </div>
            `;
        }
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', cargarProyectos);
} else {
    cargarProyectos();
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
            mensaje: formData.get('mensaje')
        };
        
        // Usando FormSubmit.co (servicio gratuito)
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
                throw new Error('Error al enviar');
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
        hour12: true,
        timeZone: 'America/Santiago'
    };
    
    clockElement.textContent = now.toLocaleTimeString('es-CL', options);
}

updateClock();
setInterval(updateClock, 1000);

// ==========================================
// PARALLAX SUAVE EN HERO
// ==========================================

let ticking = false;

function handleScroll() {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            const scrolled = window.pageYOffset;
            const heroContent = document.querySelector('.hero-content');
            
            if (heroContent && scrolled < window.innerHeight) {
                const opacity = Math.max(0, 1 - (scrolled / 600));
                const translateY = scrolled * 0.4;
                
                heroContent.style.transform = `translateY(${translateY}px)`;
                heroContent.style.opacity = opacity;
            }
            
            ticking = false;
        });
        
        ticking = true;
    }
}

window.addEventListener('scroll', handleScroll, { passive: true });

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
// MENSAJE EN CONSOLA
// ==========================================

console.log(
    '%c¡Hola! 👋',
    'font-size: 28px; font-weight: bold; color: #42a8a1; text-shadow: 2px 2px 4px rgba(0,0,0,0.2);'
);
console.log(
    '%cDiseñé y programé este sitio desde cero.\n¿Te gusta el código? Hablemos: ayleenbahamondezlatorre@gmail.com',
    'font-size: 14px; color: #666; line-height: 1.6;'
);

console.log('🚀 Portafolio Ayleen Bahamóndez inicializado correctamente');
