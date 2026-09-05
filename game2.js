// Ambil parameter dari URL
const urlParams = new URLSearchParams(window.location.search);
const title = urlParams.get('title');
const releaseDate = urlParams.get('releaseDate');

// Masukkan data ke halaman
document.getElementById('game-title').innerText = title || 'Game Title';
document.getElementById('game-release').innerText = `Release Date: ${releaseDate || 'Unknown'}`;

// Atur gambar dinamis berdasarkan judul
const gameImage = document.getElementById('game-image');
gameImage.src = `asset/${title ? title.replace(/ /g, '-').toLowerCase() : 'default'}.jpg`;
gameImage.alt = title || 'Game Image';
