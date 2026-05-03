// Data profil user (bisa diubah atau dimuat dari server)
let userData = {
    name: 'John Doe',
    title: 'Web Developer',
    bio: 'Passionate developer creating amazing web experiences.',
    image: 'assets/img/profile.jpg',
    projects: 25,
    experience: 5
};

// Fungsi untuk memuat data profil ke halaman
function loadUserProfile() {
    const userName = document.getElementById('userName');
    const userTitle = document.getElementById('userTitle');
    const userBio = document.getElementById('userBio');
    const profileImage = document.getElementById('profileImage');

    if (userName) userName.textContent = userData.name;
    if (userTitle) userTitle.textContent = userData.title;
    if (userBio) userBio.textContent = userData.bio;
    if (profileImage) profileImage.src = userData.image;

    // Update stats
    const stats = document.querySelectorAll('.stat-number');
    if (stats.length >= 3) {
        stats[0].textContent = userData.projects + '+';
        stats[1].textContent = userData.experience + '+';
    }

    // Setup edit button
    const editBtn = document.getElementById('editProfileBtn');
    if (editBtn) {
        editBtn.addEventListener('click', openEditProfile);
    }
}

// Fungsi untuk membuka dialog edit profil
function openEditProfile() {
    const newName = prompt('Masukkan nama:', userData.name);
    
    if (newName !== null && newName.trim() !== '') {
        userData.name = newName.trim();
        
        const newTitle = prompt('Masukkan jabatan:', userData.title);
        if (newTitle !== null && newTitle.trim() !== '') {
            userData.title = newTitle.trim();
            
            const newBio = prompt('Masukkan bio:', userData.bio);
            if (newBio !== null && newBio.trim() !== '') {
                userData.bio = newBio.trim();
                
                // Simpan ke localStorage
                saveProfileData();
                
                // Reload profil
                loadUserProfile();
                
                alert('Profil berhasil diperbarui!');
            }
        }
    }
}

// Fungsi untuk menyimpan data profil ke localStorage
function saveProfileData() {
    localStorage.setItem('userData', JSON.stringify(userData));
}

// Fungsi untuk memuat data profil dari localStorage
function loadProfileDataFromStorage() {
    const stored = localStorage.getItem('userData');
    if (stored) {
        userData = JSON.parse(stored);
    }
}

// Load data saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    loadProfileDataFromStorage();
    loadUserProfile();
});

// Observer untuk mengecek kapan halaman profile dimuat
const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.addedNodes.length) {
            const hasProfile = document.querySelector('.profile-container');
            if (hasProfile) {
                loadUserProfile();
            }
        }
    });
});

const appElement = document.getElementById('app');
if (appElement) {
    observer.observe(appElement, { childList: true, subtree: true });
}
