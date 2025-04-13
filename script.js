function toggleDropdown() {
    const menu = document.getElementById('dropdown-menu');
    const arrow = document.getElementById('dropdown-arrow');

    if (menu.style.display === 'block') {
        menu.style.display = 'none';
        arrow.classList.remove('up'); 
    } else {
        menu.style.display = 'block';
        arrow.classList.add('up'); 
    }
}
function closeDropdown() {
    const menu = document.getElementById('dropdown-menu');
    const arrow = document.getElementById('dropdown-arrow');
    menu.style.display = 'none';
    arrow.classList.remove('up');
}


const translations = {
    English: {
        // Navbar
        home: "Home",
        contact: "Contact",
        about: "About",
        booking: "Booking",

        // Footer
        footer: "© 2023 Barcelona Taxi Service. All Rights Reserved.",

        // Home Page
        heroHeading: "Welcome to Barcelona Taxi Service",
        heroText: "Your trusted partner for exploring the vibrant city of Barcelona.",
        backgroundTitle: "Barcelona Taxi Service",
        backgroundSubtitle: "Chief Executive: Junaid Sarwar Akhtar",
        airportHeading: "Airport Pick & Drop",
        airportDescription: "Josep Tarradellas Barcelona-El Prat Airport",
        dropOffTitle: "Drop Off Services Only",
        dropOffText: "We also provide drop-off services to Girona Airport, Rius Airport, and all inter-urban areas, including La Roca Village (the shopping hub).",
        sagradaFamilia: "La Sagrada Familia",
        parkGuell: "Park Güell",
        lasRamblas: "Las Ramblas",
        paymentTitle: "Payment Options",
        paymentDescription: "We accept all major cards, digital wallets, and cash payments on the spot.",

        // About Page
        aboutHeading: "Reliable and Comfortable Taxi Services for Tourists in Barcelona",
        aboutParagraph1:
            "Exploring Barcelona is a delightful experience, and having a reliable taxi service ensures a smooth and comfortable journey through the city’s vibrant streets. Whether you’re arriving at El Prat Airport, visiting famous landmarks like Sagrada Família and Park Güell, or heading to the beautiful beaches of Barceloneta, taxis provide a convenient and efficient way to travel.",
        aboutParagraph2:
            "For first-time visitors, taxis offer a hassle-free alternative to public transport, allowing you to enjoy the city at your own pace. Our drivers speak English and are knowledgeable about the best routes, tourist spots, and local recommendations. Whether you need a short ride within the city or a longer journey to destinations like Montserrat, Sitges, or the Costa Brava, taxis offer comfort and safety.",
        aboutParagraph3:
            "With 24/7 availability, wheelchair-accessible vehicles, and options for larger groups, Barcelona taxi services are the perfect choice for tourists who want to explore the city effortlessly. Sit back, relax, and let Barcelona’s taxis take you on an unforgettable journey.",

        // Contact Page
        contactHeroTitle: "Contact Us",
        contactTitle: "Get in Touch",
        contactText:
            "Have questions? Need a taxi? We're here to help! Contact us through the details below and we’ll get back to you as soon as possible.",
        contactNumber: "Contact: +34 691 73 92 60",
        contactAddress: "Address: Carrer de Ramiro de Maetzu 56, Badalona, 08913, Spain.",
        contactEmail: "For inquiries, feel free to email us at <a href='mailto:contact@btaxi.es'>contact@btaxi.es</a>.",
        contactSupport: "Our team is available 24/7 to assist you with bookings, queries, or general support.",

        // Booking Page
        bookingHeroTitle: "Bookings",
        bookingTitle: "Bookings",
        bookingText:
            "All bookings can be made easily through WhatsApp: +34 691 73 92 60. Our customer support team is available 24/7 to assist you with your booking inquiries. Whether you're planning a city tour, a ride to the airport, or just need a reliable taxi service, we're here to help. Book now to experience seamless and comfortable travel with Barcelona Taxi Service!"
    },
    Español: {
        // Navbar
        home: "Inicio",
        contact: "Contacto",
        about: "Acerca de",
        booking: "Reservas",

        // Footer
        footer: "© 2023 Servicio de Taxi de Barcelona. Todos los derechos reservados.",

        // Home Page
        heroHeading: "Bienvenido al Servicio de Taxis de Barcelona",
        heroText: "Tu socio de confianza para explorar la vibrante ciudad de Barcelona.",
        backgroundTitle: "Servicio de Taxi de Barcelona",
        backgroundSubtitle: "Director Ejecutivo: Junaid Sarwar Akhtar",
        airportHeading: "Recogida y Entrega en el Aeropuerto",
        dropOffTitle: "Solo servicios de entrega",
        dropOffText: "También ofrecemos servicios de entrega en el Aeropuerto de Girona, el Aeropuerto de Rius y todas las áreas interurbanas, incluido La Roca Village (el centro comercial).",
        airportDescription: "Aeropuerto Josep Tarradellas Barcelona-El Prat",
        sagradaFamilia: "La Sagrada Familia",
        parkGuell: "Park Güell",
        lasRamblas: "Las Ramblas",
        paymentTitle: "Opciones de Pago",
        paymentDescription:
            "Aceptamos todas las principales tarjetas, billeteras digitales y pagos en efectivo en el acto.",

        // About Page
        aboutHeading: "Servicios de taxi confiables y cómodos para turistas en Barcelona",
        aboutParagraph1:
            "Explorar Barcelona es una experiencia encantadora, y tener un servicio de taxi confiable asegura un viaje fluido y cómodo por las vibrantes calles de la ciudad. Ya sea que llegues al Aeropuerto El Prat, visites lugares famosos como la Sagrada Familia y el Park Güell, o te dirijas a las hermosas playas de la Barceloneta, los taxis ofrecen una forma conveniente y eficiente de viajar.",
        aboutParagraph2:
            "Para los visitantes primerizos, los taxis ofrecen una alternativa sin complicaciones al transporte público, lo que te permite disfrutar de la ciudad a tu propio ritmo. Muchos conductores hablan inglés y tienen conocimientos sobre las mejores rutas, lugares turísticos y recomendaciones locales.",
        aboutParagraph3:
            "Con disponibilidad las 24 horas, vehículos accesibles para sillas de ruedas y opciones para grupos grandes, los servicios de taxi de Barcelona son la elección perfecta para turistas que desean explorar la ciudad sin esfuerzo. Relájate y deja que los taxis de Barcelona te lleven en un viaje inolvidable.",

        // Contact Page
        contactHeroTitle: "Contáctanos",
        contactTitle: "Ponte en contacto",
        contactText:
            "¿Tienes preguntas? ¿Necesitas un taxi? ¡Estamos aquí para ayudar! Contáctanos a través de los detalles a continuación y te responderemos lo antes posible.",
        contactNumber: "Contacto: +34 691 73 92 60",
        contactAddress: "Dirección: Carrer de Ramiro de Maetzu 56, Badalona, 08913, España.",
        contactEmail:
            "Para consultas, no dudes en enviarnos un correo electrónico a <a href='mailto:contact@btaxi.es'>contact@btaxi.es</a>.",
        contactSupport:
            "Nuestro equipo está disponible 24/7 para ayudarte con reservas, consultas o soporte general.",

        // Booking Page
        bookingHeroTitle: "Reservas",
        bookingTitle: "Reservas",
        bookingText:
            "Todas las reservas se pueden hacer fácilmente a través de WhatsApp: +34 691 73 92 60. Nuestro equipo de atención al cliente está disponible 24/7 para ayudarte con tus consultas de reserva. Ya sea que estés planeando un recorrido por la ciudad, un viaje al aeropuerto o simplemente necesites un servicio de taxi confiable, estamos aquí para ayudarte. ¡Reserva ahora para experimentar un viaje sin inconvenientes y cómodo con el Servicio de Taxis de Barcelona!"
    }
};

function switchLanguage(language) {
    
    const dropdownButton = document.querySelector('.selected-language');
    if (dropdownButton) {
        dropdownButton.textContent = language === 'English' ? 'English' : 'Español';
    }
    // Saving the selected language to localStorage
    localStorage.setItem('selectedLanguage', language)
    // Navbar
    // Update Navbar Links
    const navbarLinks = document.querySelectorAll('.navbar a[data-key]');
    navbarLinks.forEach((link) => {
        const key = link.getAttribute('data-key');
        if (key && translations[language][key]) {
            link.textContent = translations[language][key];
        }
    });
    // Home Page
    const backgroundText = document.querySelector(".background-text");
    if (backgroundText) {
        backgroundText.querySelector("h2").innerHTML = translations[language].backgroundTitle;
        backgroundText.querySelector("h3").textContent = translations[language].backgroundSubtitle;
    }

    const heroSection = document.querySelector(".hero-overlay");
    if (heroSection) {
        heroSection.querySelector("h2").textContent = translations[language].heroHeading;
        heroSection.querySelector("p").textContent = translations[language].heroText;
    }

    const dropOffTitle = document.querySelector(".drop .dpf");
    const dropOffText = document.querySelector(".drop .serv");

    if (dropOffTitle) dropOffTitle.textContent = translations[language].dropOffTitle;
    if (dropOffText) dropOffText.textContent = translations[language].dropOffText;

    const airportSection = document.querySelector(".airport-heading");
    if (airportSection) {
        airportSection.querySelector("h2").textContent = translations[language].airportHeading;
        airportSection.querySelector(".para").innerHTML = translations[language].airportDescription;
    }

    const tariffSection = document.querySelectorAll(".tarrif-container h2");
    if (tariffSection.length) {
        tariffSection[0].textContent = translations[language].sagradaFamilia;
        tariffSection[1].textContent = translations[language].parkGuell;
        tariffSection[2].textContent = translations[language].lasRamblas;
    }

    const paymentSection = document.querySelector(".payment-options-modern");
    if (paymentSection) {
        paymentSection.querySelector("h3").textContent = translations[language].paymentTitle;
        paymentSection.querySelector("p").textContent = translations[language].paymentDescription;
    }

    // About Page
    const aboutSection = document.querySelector(".about-text");
    if (aboutSection) {
        aboutSection.querySelector("h3").textContent = translations[language].aboutHeading;
        const aboutParagraphs = aboutSection.querySelectorAll("p");
        aboutParagraphs[0].textContent = translations[language].aboutParagraph1;
        aboutParagraphs[1].textContent = translations[language].aboutParagraph2;
        aboutParagraphs[2].textContent = translations[language].aboutParagraph3;
    }

    // Contact Page
    const contactHero = document.querySelector(".contact-hero h2");
    if (contactHero) {
        contactHero.textContent = translations[language].contactHeroTitle;
    }
    const contactSection = document.querySelector(".info-text");
    if (contactSection) {
        contactSection.querySelector("h2").textContent = translations[language].contactTitle;
        const contactParagraphs = contactSection.querySelectorAll("p");
        contactParagraphs[0].textContent = translations[language].contactText;
        contactParagraphs[1].textContent = translations[language].contactNumber;
        contactParagraphs[2].textContent = translations[language].contactAddress;
        contactParagraphs[3].innerHTML = translations[language].contactEmail;
        contactParagraphs[4].textContent = translations[language].contactSupport;
    }

    // Booking Page
    const bookingHero = document.querySelector(".book-hero h2");
    if (bookingHero) {
        bookingHero.textContent = translations[language].bookingHeroTitle;
    }

    const bookingSection = document.querySelector(".info-textt");
    if (bookingSection) {
        bookingSection.querySelector("h2").textContent = translations[language].bookingTitle;
        bookingSection.querySelector("p").textContent = translations[language].bookingText;
    }

    // Footer
    document.querySelector("footer p").textContent = translations[language].footer;
    closeDropdown()
}

function applySavedLanguage() {
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'English';

    document.querySelector('.selected-language').textContent = savedLanguage === 'English' ? 'English' : 'Español';

    switchLanguage(savedLanguage);
}

document.addEventListener("DOMContentLoaded", function () {
    applySavedLanguage();
});



function switchToEnglish() {
    switchLanguage("English");
}

function switchToSpanish() {
    switchLanguage("Español");
}


document.addEventListener('click', function (event) {
    const dropdown = document.querySelector('.language-dropdown');
    const menu = document.getElementById('dropdown-menu');
    const arrow = document.getElementById('dropdown-arrow');

    if (!dropdown.contains(event.target)) {
        menu.style.display = 'none'; 
        arrow.classList.remove('up'); 
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const menuBars = document.getElementById("menu-bars");
    const navbar = document.querySelector(".navbar");

    
    menuBars.addEventListener("click", function () {
        navbar.classList.toggle("active"); 
    });
});

