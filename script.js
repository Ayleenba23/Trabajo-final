<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ayleen Bahamóndez · Diseñadora Integral</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    
    <!-- LOGO PORTAFOLIO (Esquina superior izquierda) -->
    <a href="#home" class="logo-portafolio" data-es="Portafolio" data-en="Portfolio">Portafolio</a>

    <!-- SELECTOR DE IDIOMA -->
    <div class="language-selector">
        <button class="lang-btn active" data-lang="es">ES</button>
        <span class="lang-separator">/</span>
        <button class="lang-btn" data-lang="en">EN</button>
    </div>

    <!-- MENÚ HAMBURGUESA -->
    <button class="menu-toggle" id="menuToggle" aria-label="Abrir menú">
        <span></span>
        <span></span>
        <span></span>
    </button>

    <!-- MENÚ LATERAL -->
    <nav class="side-menu" id="sideMenu">
        <ul class="main-menu">
            <li><a href="#home" class="main-link" data-es="Inicio" data-en="Home">Inicio</a></li>
            <li><a href="#about" class="main-link" data-es="Sobre mí" data-en="About">Sobre mí</a></li>
            <li><a href="#work" class="main-link" data-es="Proyectos" data-en="Works">Proyectos</a></li>
            <li><a href="#contact" class="main-link" data-es="Contacto" data-en="Contact">Contacto</a></li>
        </ul>
    </nav>

    <div class="overlay" id="overlay"></div>

    <!-- SECCIÓN HERO CON VIDEO -->
    <section class="hero" id="home">
        <!-- Video de fondo -->
        <div class="hero-video">
            <video autoplay muted loop playsinline id="heroVideo">
                <source src="videos/glaze.webm" type="video/webm">
                <source src="videos/glaze.mp4" type="video/mp4">
                Tu navegador no soporta videos HTML5.
            </video>
            <div class="video-overlay"></div>
        </div>

        <!-- Contenido Hero -->
        <div class="hero-content">
            <h1 class="hero-title">Ayleen Bahamondez</h1>
            <p class="hero-subtitle" data-es="Diseñadora Integral UC" data-en="Integral Designer UC">Diseñadora Integral UC</p>
            <a href="#work" class="btn-projects" data-es="Ver proyectos" data-en="View projects">Ver proyectos</a>
        </div>

        <!-- Scroll indicator -->
        <div class="scroll-indicator">
            <div class="mouse">
                <div class="wheel"></div>
            </div>
        </div>
    </section>

    <!-- SECCIÓN ABOUT -->
    <section id="about" class="about-section">
        <div class="about-container">
            
            <!-- COLUMNA IZQUIERDA: Texto -->
            <div class="about-text-column">
                <h2 class="about-title scroll-animate" data-es="Sobre mí" data-en="About me">Sobre mí</h2>
                
                <div class="about-content scroll-animate">
                    <p class="about-bio" data-es="Soy estudiante de Diseño Integral de la Pontificia Universidad Católica de Chile, apasionada por el diseño interdisciplinario y la innovación en procesos productivos." data-en="I'm an Integral Design student at Pontificia Universidad Católica de Chile, passionate about interdisciplinary design and innovation in production processes.">
                        Soy estudiante de Diseño Integral de la <strong>Pontificia Universidad Católica de Chile</strong>, apasionada por el diseño interdisciplinario y la innovación en procesos productivos.
                    </p>
                    <p class="about-bio" data-es="Mi trabajo explora desde el diseño de producto hasta la experimentación con materiales y fabricación digital, integrando tecnología en proyectos creativos." data-en="My work explores from product design to experimentation with materials and digital fabrication, integrating technology in creative projects.">
                        Mi trabajo explora desde el diseño de producto hasta la experimentación con materiales y fabricación digital, integrando tecnología en proyectos creativos.
                    </p>

                    <!-- FOTO CIRCULAR (más pequeña, aquí abajo) -->
                    <div class="about-photo-small scroll-animate">
                        <img src="img/yo.jpg" alt="Ayleen Bahamóndez">
                    </div>
                </div>
            </div>

            <!-- COLUMNA DERECHA: Resume -->
            <div class="about-resume">
                
                <!-- EXPERIENCIA -->
                <div class="resume-block scroll-animate">
                    <h4 class="resume-title" data-es="Experiencia Laboral" data-en="Work Experience">Experiencia Laboral</h4>
                    
                    <div class="resume-item scroll-animate">
                        <span class="year">2024</span>
                        <div class="info">
                            <strong data-es="Práctica Profesional" data-en="Professional Internship">Práctica Profesional</strong>
                            <p><a href="https://fabrinox.cl/" target="_blank">Fabrinox</a></p>
                        </div>
                    </div>

                    <div class="resume-item scroll-animate">
                        <span class="year">2025</span>
                        <div class="info">
                            <strong data-es="Práctica de Servicio" data-en="Service Internship">Práctica de Servicio</strong>
                            <p><a href="https://www.fundacionalmachile.com/" target="_blank">Fundación Alma Chile</a></p>
                        </div>
                    </div>
                </div>

                <!-- ESTUDIOS -->
                <div class="resume-block scroll-animate">
                    <h4 class="resume-title" data-es="Estudios" data-en="Education">Estudios</h4>
                    
                    <div class="resume-item scroll-animate">
                        <span class="year">2021 - 2026</span>
                        <div class="info">
                            <strong data-es="Diseño Integral" data-en="Integral Design">Diseño Integral</strong>
                            <p data-es="Pontificia Universidad Católica de Chile" data-en="Pontifical Catholic University of Chile">Pontificia Universidad Católica de Chile</p>
                        </div>
                    </div>
                </div>

                <!-- HABILIDADES -->
                <div class="resume-block scroll-animate">
                    <h4 class="resume-title" data-es="Manejo de Software" data-en="Software Skills">Manejo de Software</h4>
                    
                    <div class="skill-bar scroll-animate">
                        <span class="skill-name">Fusion 360</span>
                        <div class="bar-container">
                            <div class="bar-fill" style="width: 100%;"></div>
                        </div>
                    </div>

                    <div class="skill-bar scroll-animate">
                        <span class="skill-name">Inventor</span>
                        <div class="bar-container">
                            <div class="bar-fill" style="width: 80%;"></div>
                        </div>
                    </div>

                    <div class="skill-bar scroll-animate">
                        <span class="skill-name">Illustrator</span>
                        <div class="bar-container">
                            <div class="bar-fill" style="width: 50%;"></div>
                        </div>
                    </div>

                    <div class="skill-bar scroll-animate">
                        <span class="skill-name">Photoshop</span>
                        <div class="bar-container">
                            <div class="bar-fill" style="width: 40%;"></div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- SECCIÓN WORKS (CARRUSEL) -->
    <section id="work" class="works-section">
        <div class="works-container">
            
            <div class="works-header scroll-animate">
                <h2 class="section-title" data-es="Proyectos Destacados" data-en="Featured Projects">Proyectos Destacados</h2>
                <div class="carousel-controls">
                    <button id="prevBtn" class="carousel-btn" aria-label="Anterior">←</button>
                    <button id="nextBtn" class="carousel-btn" aria-label="Siguiente">→</button>
                </div>
            </div>

            <!-- Se cargará dinámicamente desde datos.json -->
            <div class="carousel-track" id="carouselTrack"></div>
        </div>
    </section>

    <!-- CINTA MARQUEE -->
    <div class="marquee-container">
        <div class="marquee-content">
            <span>DISEÑO DE PRODUCTO &nbsp;•&nbsp; FABRICACIÓN DIGITAL &nbsp;•&nbsp; INNOVACIÓN &nbsp;•&nbsp; MODELADO 3D &nbsp;•&nbsp; </span>
            <span>DISEÑO DE PRODUCTO &nbsp;•&nbsp; FABRICACIÓN DIGITAL &nbsp;•&nbsp; INNOVACIÓN &nbsp;•&nbsp; MODELADO 3D &nbsp;•&nbsp; </span>
        </div>
    </div>

    <!-- SECCIÓN CONTACTO -->
    <section id="contact" class="contact-section">
        <div class="contact-container">
            
            <div class="contact-main-content">
                
                <!-- COLUMNA IZQUIERDA -->
                <div class="contact-left scroll-animate">
                    <div class="big-arrow-container">
                        <svg width="50" height="50" viewBox="0 0 24 24" fill="none">
                            <path d="M12 4V20M12 20L18 14M12 20L6 14" stroke="#42a8a1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <h2 class="contact-big-title" data-es="Conversemos" data-en="Let's talk">Conversemos</h2>
                </div>
                
                <!-- COLUMNA DERECHA -->
                <div class="contact-right scroll-animate">
                    
                    <div class="contact-details-top">
                        <div class="contact-block">
                            <h4 class="block-label">Email</h4>
                            <a href="mailto:ayleen.bahamondez@uc.cl" class="contact-email-link">
                                ayleen.bahamondez@uc.cl
                                <span class="arrow-icon">↗</span>
                            </a>
                        </div>

                        <div class="contact-block">
                            <h4 class="block-label" data-es="Redes" data-en="Social">Redes</h4>
                            <ul class="social-list">
                                <li><a href="https://www.linkedin.com/in/ayleen-bahamondez" target="_blank">LinkedIn</a></li>
                                <li><a href="https://www.behance.net/ayleenbahamondez" target="_blank">Behance</a></li>
                                <li><a href="https://www.instagram.com/ayleenbahamondez" target="_blank">Instagram</a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="meta-info">
                        <div class="status-dot"></div>
                        <span class="location">SANTIAGO, CL</span>
                        <span id="clock" class="clock">00:00:00 AM</span>
                    </div>

                </div>
            </div>

            <!-- FOOTER -->
            <footer class="contact-footer scroll-animate">
                <div class="footer-left">
                    <p>© 2025 Ayleen Bahamóndez</p>
                    <p class="credits" data-es="Diseñado y programado por mí" data-en="Designed & Coded by me">Diseñado y programado por mí</p>
                </div>
                <div class="footer-right">
                    <p>Santiago, Chile</p>
                    <a href="#home" class="back-to-top" data-es="Volver arriba →" data-en="Back to top →">Volver arriba →</a>
                </div>
            </footer>

        </div>
    </section>

    <script src="script.js"></script>
</body>
</html>
