const urlInput = document.getElementById('url-input');
const playButton = document.getElementById('play-button');
const fileInput = document.getElementById('file-input');
const videoPlayer = document.getElementById('my-video');
const userIpDisplay = document.getElementById('user-ip'); // Elemen untuk menampilkan IP

// Fungsi untuk mengambil IP pengguna
function fetchUserIP() {
  fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
      userIpDisplay.textContent = `IP Anda: ${data.ip}`;
    })
    .catch(error => {
      userIpDisplay.textContent = 'Gagal mengambil IP';
      console.error('Error fetching IP:', error);
    });
}

// Memanggil fungsi untuk mengambil IP saat halaman dimuat
fetchUserIP();

playButton.addEventListener('click', () => {
  const url = urlInput.value;
  if (url) {
    videoPlayer.src = url;
    videoPlayer.play();
  }
});

fileInput.addEventListener('change', (event) => {
  const file = event.target.files[0];
  const fileURL = URL.createObjectURL(file);
  videoPlayer.src = fileURL;
  videoPlayer.play();
});