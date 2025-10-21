// File: js/bg-otomatis.js

document.addEventListener("DOMContentLoaded", function () {
  const hero = document.getElementById("hero");
  if (!hero) return;

  // Daftar gambar background (bg1–bg9)
  const totalImages = 8;
  const imagePaths = Array.from({ length: totalImages }, (_, i) => `img/BG/BG${i + 1}.jpg`);

  let current = 0;

  // Fungsi ganti background
  function gantiBackground() {
    hero.style.backgroundImage = `url('${imagePaths[current]}')`;
    hero.style.transition = "background-image 1s ease-in-out";

    current = (current + 1) % totalImages; // kembali ke awal setelah bg9
  }

  // Ganti pertama kali dan set interval 5 detik
  gantiBackground();
  setInterval(gantiBackground, 5000);
});
