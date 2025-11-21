// Toggle Menu
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const nav = document.getElementById('nav');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close menu on link click
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Scroll effect on nav
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Skills animation on scroll
const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.skill-item').forEach(skill => {
    observer.observe(skill);
});

// Portfolio data with your images
const portfolioData = [
    {
        photo: 'https://i.postimg.cc/d3qS0W0g/image.png',
        title: 'Carroza Real',
        category: 'Diseño de Producto'
    },
    {
        photo: 'https://i.postimg.cc/KY3LthHq/image.png',
        title: 'Altar Zen',
        category: 'Diseño de Mobiliario'
    },
    {
        photo: 'https://i.postimg.cc/pLrNNqSQ/image.png',
        title: 'Experiencia Nocturna',
        category: 'Fotografía'
    },
    {
        photo: 'https://i.postimg.cc/KYjBz9T2/image.png',
        title: 'Monito del Monte',
        category: 'Modelado 3D'
    },
    {
        photo: 'https://i.postimg.cc/J0Y5tQnM/image.png',
        title: 'Sistema de Transporte',
        category: 'Ingeniería Industrial'
    },
    {
        photo: 'https://i.postimg.cc/qR7rHs2s/image.png',
        title: 'Romper el Hielo',
        category: 'Diseño de Producto'
    },
    {
        photo: 'https://i.postimg.cc/GhcFgVQy/image.png',
        title: 'Vela Artesanal',
        category: 'Diseño Decorativo'
    },
    {
        photo: 'https://i.postimg.cc/6qtWhYSY/image.png',
        title: 'Colección de Velas',
        category: 'Diseño de Producto'
    }
];

// Load portfolio
function loadPortfolio() {
    const portfolioGrid = document.getElementById('portfolioGrid');
    
    portfolioData.forEach(item => {
        const portfolioItem = document.createElement('div');
        portfolioItem.className = 'portfolio-item';
        portfolioItem.innerHTML = `
            <img src="${item.photo}" alt="${item.title}">
            <div class="portfolio-overlay">
                <h3>${item.title}</h3>
                <p>${item.category}</p>
            </div>
        `;
        portfolioGrid.appendChild(portfolioItem);
    });
}

loadPortfolio();

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
