// Elementos del DOM para Navegación
const menuToggle = document.getElementById('menuToggle');
const sideMenu = document.getElementById('sideMenu');
const overlay = document.getElementById('overlay');
const closeMenuLinks = document.querySelectorAll('.side-menu a');

// Elementos del DOM para Carrusel
const projectTrack = document.getElementById('projectTrack');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

// ==========================================
// 1. NAVEGACIÓN (Menú Desplegable)
// ==========================================
function toggleMenu() {
    menuToggle.classList.toggle('active');
    sideMenu.classList.toggle('active');
    overlay.classList.toggle('active');
    
    // Control de scroll del body
    document.body.style.overflow = sideMenu.classList.contains('active') ? 'hidden' : 'auto';
}

menuToggle.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);

closeMenuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        // Cierra el menú al hacer clic en un link
        if (sideMenu.classList.contains('active')) {
            toggleMenu();
        }
    });
});


// ==========================================
// 2. CARGA DE PROYECTOS Y CARRUSEL HORIZONTAL
// ==========================================

async function loadProjects() {
    try {
        // Carga el archivo datos.json localmente
        const response = await fetch('datos.json');
        const trabajos = await response.json();

        trabajos.forEach(trabajo => {
            // Genera la estructura de tarjeta para el carrusel con el nuevo diseño
            projectTrack.innerHTML += `
                <a href="#proyecto-${trabajo.title.toLowerCase().replace(/\s/g, '-')}" class="project-card">
                    <img src="${trabajo.photo}" alt="${trabajo.title}" class="project-image">
                    <div class="project-info">
                        <h3>${trabajo.title}</h3>
                        <p>${trabajo.category} · ${trabajo.year}</p>
                    </div>
                </a>
            `;
        });
        
        // Inicializa la funcionalidad del carrusel una vez cargados los datos
        initHorizontalScroll(projectTrack, nextBtn, prevBtn);

    } catch (error) {
        console.error("Error al cargar los datos:", error);
    }
}

/**
 * Lógica para la navegación y loop del carrusel horizontal.
 */
function initHorizontalScroll(track, nextBtn, prevBtn) {
    if (!track || !nextBtn || !prevBtn) return;

    // Obtiene el ancho de desplazamiento (ancho de tarjeta + margen)
    const getScrollAmount = () => {
        const firstCard = track.querySelector('.project-card');
        if (!firstCard) return 0;
        
        const cardWidth = firstCard.offsetWidth;
        const style = window.getComputedStyle(firstCard);
        const marginRight = parseFloat(style.marginRight);
        
        return cardWidth + marginRight;
    };

    // BOTÓN SIGUIENTE (Loop al inicio)
    nextBtn.addEventListener('click', () => {
        const amount = getScrollAmount();
        const maxScroll = track.scrollWidth - track.clientWidth;
        
        if (track.scrollLeft >= maxScroll - 10) {
            track.scrollTo({
                left: 0,
                behavior: 'smooth'
            });
        } else {
            track.scrollBy({
                left: amount,
                behavior: 'smooth'
            });
        }
    });

    // BOTÓN ANTERIOR (Loop al final)
    prevBtn.addEventListener('click', () => {
        const amount = getScrollAmount();

        if (track.scrollLeft <= 10) {
            track.scrollTo({
                left: track.scrollWidth,
                behavior: 'smooth'
            });
        } else {
            track.scrollBy({
                left: -amount,
                behavior: 'smooth'
            });
        }
    });
}

// ==========================================
// 3. SCROLL REVEAL (Efecto Pulso Hotel)
// ==========================================
// Usamos Intersection Observer para un rendimiento óptimo en la animación de revelado
const observerOptions = {
    root: null, // viewport
    rootMargin: '0px',
    threshold: 0.1 // El 10% del elemento debe ser visible
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target); // Detiene la observación después de mostrarse
        }
    });
}, observerOptions);

function initScrollAnimation() {
    document.querySelectorAll('.scroll-animate').forEach(element => {
        observer.observe(element);
    });
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
    initScrollAnimation();
});
            });
        }
    });
});
