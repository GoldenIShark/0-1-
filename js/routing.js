// Definisi halaman
const pages = {
    home: `
        <div class="hero">
            <h1>Welcome</h1>
        </div>
    `,
    about: `
        <div class="hero">
            <h1>About Us</h1>
            <p>Learn more about our company and mission.</p>
        </div>
    `,
    services: `
        <div class="hero">
            <h1>Our Services</h1>
            <p>Discover the range of services we offer.</p>
        </div>
    `,
    profile: `
        <halaman-profile>
            <img-profile src="assets/images/profile.jpg" alt="Profile">
            <keterangan-profile>
                <h1>John Doe</h1>
                <p>Web Developer & Designer</p>
            </keterangan-profile>
        </halaman-profile>
    `
};

// Fungsi untuk render halaman
function renderPage(page) {
    const app = document.getElementById('app');
    app.innerHTML = pages[page] || pages.home;
    document.title = `${page.charAt(0).toUpperCase() + page.slice(1)} - My Website`;
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
