// Fungsi untuk membuat animasi text per huruf
function animateText(selector) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
        const text = element.textContent;
        const animatedText = text
            .split('')
            .map((char, index) => `<span class="char" style="animation-delay: ${index * 0.08}s;">${char}</span>`)
            .join('');
        element.innerHTML = animatedText;
    });
}

// Definisi halaman
const pages = {
    home: `
        <div class="hero">
            <h1 class="animated-text">Welcome to Our Website</h1>
            <p>We are a company that provides excellent services.</p>
        </div>
    `,
    about: `
        <div class="hero">
            <h1 class="animated-text">About Us</h1>
            <p>Learn more about our company and mission.</p>
        </div>
    `,
    services: `
        <div class="hero">
            <h1 class="animated-text">Our Services</h1>
            <p>Discover the range of services we offer.</p>
        </div>
    `,
    contact: `
        <div class="hero">
            <h1 class="animated-text">Contact Us</h1>
            <p>Get in touch with us for any inquiries.</p>
        </div>
    `
};

// Fungsi untuk render halaman
function renderPage(page) {
    const app = document.getElementById('app');
    app.innerHTML = pages[page] || pages.home;
    document.title = `${page.charAt(0).toUpperCase() + page.slice(1)} - My Website`;
    
    // Jalankan animasi text setelah render
    animateText('.animated-text');
}



// Handle hash perubahan
function handleRouting() {
    const hash = window.location.hash.substring(1) || 'home';
    renderPage(hash);
}

// Listen ketika hash berubah
window.addEventListener('hashchange', handleRouting);

// Initial load
handleRouting();
