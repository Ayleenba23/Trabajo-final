// ==========================================
// SISTEMA DE TRADUCCIÓN MEJORADO
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
        'footer-credits': 'Designed & Coded by me',
        'back-top': 'Back to top →'
    }
};

let currentLang = 'es';

function changeLanguage(lang) {
    currentLang = lang;
    
    // Actualizar botones activos
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    
    // Actualizar todos los elementos con data-translate
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

// Event listeners para botones de idioma
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

// Observar elementos con scroll-animate
const observeAnimations = () => {
    document.querySelectorAll('.scroll-animate').forEach(el => {
        observer.observe(el);
    });
};

// Ejecutar después de cargar la página
setTimeout(observeAnimations, 100);

// ==========================================
// CARGAR PROYECTOS DESDE DATOS.JSON
// ==========================================

const carouselTrack = document.getElementById('carouselTrack');

async function cargarProyectos() {
    if (!carouselTrack) {
        console.error('Carousel track no encontrado');
        return;
    }

    try {
        const response = await fetch('datos.json');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const proyectos = await response.json();
        
        // Limpiar spinner
        carouselTrack.innerHTML = '';
        
        if (!Array.isArray(proyectos) || proyectos.length === 0) {
            carouselTrack.innerHTML = '<p style="color: #666; text-align: center; width: 100%;">No hay proyectos disponibles.</p>';
            return;
        }
        
        proyectos.forEach((proyecto, index) => {
            // Sanitizar datos
            const title = String(proyecto.title || 'Sin título').replace(/</g, '&lt;').replace(/>/g, '&gt;');
            const category = String(proyecto.category || 'Sin categoría').replace(/</g, '&lt;').replace(/>/g, '&gt;');
            const year = String(proyecto.year || '').replace(/</g, '&lt;').replace(/>/g, '&gt;');
            const photo = String(proyecto.photo || 'img/placeholder.webp');
            
            const cardWrapper = document.createElement('div');
            cardWrapper.className = 'card-wrapper scroll-animate';
            
            cardWrapper.innerHTML = `
                <div class="project-card" tabindex="0" role="article" aria-label="${title}">
                    <div class="card-image">
                        <img src="${photo}" alt="${title}" loading="lazy" onerror="this.src='img/placeholder.webp'">
                    </div>
                    <div class="card-content">
                        <span class="card-category">${category}</span>
                        <h3 class="card-title">${title}</h3>
                        <span class="card-year">${year}</span>
                    </div>
                </div>
            `;
            
            carouselTrack.appendChild(cardWrapper);
        });

        // Observar las nuevas tarjetas
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
                    <p style="font-size: 0.9rem; margin-top: 10px;">Verifica que el archivo <code>datos.json</code> existe.</p>
                </div>
            `;
        }
    }
}

// Cargar proyectos cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', cargarProyectos);
} else {
    cargarProyectos();
}

// ==========================================
// CARRUSEL - NAVEGACIÓN CIRCULAR
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
    // Pausar video cuando no está visible
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
    
    // Intentar reproducir video
    heroVideo.play().catch(e => {
        console.log('Video autoplay prevented, waiting for user interaction:', e);
    });
}

// ==========================================
// SEGURIDAD: SANITIZACIÓN DE CONTENIDO
// ==========================================

function sanitizeHTML(str) {
    const temp = document.createElement('div');
    temp.textContent = str;
    return temp.innerHTML;
}

// ==========================================
// MENSAJE EN CONSOLA
// ==========================================

console.log(
    '%c¡Hola! 👋',
    'font-size: 28px; font-weight: bold; color: #42a8a1; text-shadow: 2px 2px 4px rgba(0,0,0,0.2);'
);
console.log(
    '%cDiseñé y programé este sitio desde cero.\n¿Te gusta el código? Hablemos: ayleen.bahamondez@uc.cl',
    'font-size: 14px; color: #666; line-height: 1.6;'
);

// ==========================================
// PERFORMANCE: LAZY LOADING MEJORADO
// ==========================================

if ('loading' in HTMLImageElement.prototype) {
    // El navegador soporta loading="lazy" nativamente
    console.log('✅ Lazy loading nativo soportado');
} else {
    // Fallback para navegadores antiguos
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.src;
    });
}

// ==========================================
// ERROR HANDLING GLOBAL
// ==========================================

window.addEventListener('error', (e) => {
    console.error('Error capturado:', e.error);
}, true);

// ==========================================
// INICIALIZACIÓN COMPLETA
// ==========================================

console.log('🚀 Portafolio Ayleen Bahamóndez inicializado correctamente');
