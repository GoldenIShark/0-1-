// Definisi halaman - diload dari GitHub
let pages = {};
let loadError = false;

// Load JSON dari GitHub
async function loadPages() {
    try {
        // Ganti USERNAME dan REPO dengan milik Anda
        const url = 'https://goldenishark.github.io/0-1-/assets/pages.json';
        const response = await fetch(url);
        const data = await response.json();
        pages = data.pages;
    } catch (error) {
        console.error('Error loading pages:', error);
        loadError = true;
    }
}

// Fungsi untuk render halaman
function renderPage(page) {
    const app = document.getElementById('app');
    
    if (loadError) {
        app.innerHTML = '<div class="error"><h1>Error 500</h1><p>Failed to load pages from server.</p></div>';
        document.title = 'Error - My Website';
        return;
    }
    
    const pageData = pages[page] || pages.home;
    app.innerHTML = pageData.content;
    document.title = `${pageData.title} - My Website`;
}

// Handle hash perubahan
function handleRouting() {
    const hash = window.location.hash.substring(1) || 'home';
    renderPage(hash);
}

// Listen ketika hash berubah
window.addEventListener('hashchange', handleRouting);

// Load pages dari GitHub kemudian initial render
loadPages().then(() => handleRouting());
