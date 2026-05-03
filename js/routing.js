// Ambil elemen app
const app = document.getElementById('app');

// Load halaman dari file .txt
async function loadPage(page) {
    try {
        const response = await fetch(`https://goldenishark.github.io/0-1-/assets/txt/${page}.txt`);

        // Kalau file tidak ditemukan
        if (!response.ok) {
            throw new Error('Page not found');
        }

        const html = await response.text();

        // Tempel isi HTML ke app
        app.innerHTML = html;

        // Set title (biar rapi)
        document.title = page.charAt(0).toUpperCase() + page.slice(1);

    } catch (error) {
        app.innerHTML = `
            <div>
                <h1>404</h1>
                <p>Halaman "${page}" tidak ditemukan</p>
            </div>
        `;
        document.title = 'Error';
    }
}

// Handle routing
function handleRouting() {
    const hash = window.location.hash.substring(1);
    const page = hash || 'home'; // default home

    loadPage(page);
}

// Event listener
window.addEventListener('hashchange', handleRouting);
window.addEventListener('load', handleRouting);