// Fungsi untuk set posisi awal #btnhoverHome ke link Home
function setInitialBtnPosition() {
    const homeLink = document.querySelector('.navbar ul:first-child li a');
    const btnHoverHome = document.getElementById('btnhoverHome');
    
    if (homeLink) {
        const rect = homeLink.getBoundingClientRect();
        const navbarRect = document.querySelector('.navbar').getBoundingClientRect();
        
        // Hitung posisi relatif terhadap navbar (center dari link Home) dalam pixel
        const leftPosPx = rect.left - navbarRect.left + rect.width / 2 - btnHoverHome.offsetWidth / 2;
        
        // Konversi ke persentase
        const leftPosPercent = (leftPosPx / navbarRect.width) * 100;
        
        // Set posisi awal dan buat invisible
        btnHoverHome.style.left = leftPosPercent + '%';
        btnHoverHome.style.opacity = '0';
    }
}

// Fungsi untuk setup hover effect pada navbar
function setupNavbarHoverEffect() {
    const navbarLinks = document.querySelectorAll('.navbar ul:first-child li a');
    const btnHoverHome = document.getElementById('btnhoverHome');
    let isFirstHover = true;
    
    navbarLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            // Tampilkan pada hover pertama kali
            if (isFirstHover) {
                btnHoverHome.style.opacity = '1';
                isFirstHover = false;
            }
            
            const rect = this.getBoundingClientRect();
            const navbarRect = document.querySelector('.navbar').getBoundingClientRect();
            
            // Hitung posisi relatif terhadap navbar (center dari link) dalam pixel
            const leftPosPx = rect.left - navbarRect.left + rect.width / 2 - btnHoverHome.offsetWidth / 2;
            
            // Konversi ke persentase
            const leftPosPercent = (leftPosPx / navbarRect.width) * 100;
            
            // Update posisi left #btnhoverHome saja, width & height tetap
            btnHoverHome.style.left = leftPosPercent + '%';
            btnHoverHome.style.backgroundColor = 'rgba(216, 193, 121, 0.7)';
        });
    });
    
    // Saat mouse keluar dari navbar, hanya ubah warna, posisi tetap menetap
    document.querySelector('.navbar').addEventListener('mouseleave', function() {
        btnHoverHome.style.backgroundColor = 'rgb(216, 193, 121)';
    });
}

// Fungsi untuk setup hover effect pada #btnhoverHome
function setupBtnHoverHomeEffect() {
    const btnHoverHome = document.getElementById('btnhoverHome');
    
    btnHoverHome.addEventListener('mouseenter', function() {
        this.style.backgroundColor = '#0066cc'; // Biru laut
    });
    
    btnHoverHome.addEventListener('mouseleave', function() {
        this.style.backgroundColor = 'rgb(216, 193, 121)';
    });
}

// Initialize semua UI effects saat DOM siap
document.addEventListener('DOMContentLoaded', function() {
    setInitialBtnPosition();
    setupNavbarHoverEffect();
    setupBtnHoverHomeEffect();
});