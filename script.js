let love = document.getElementById ('manyLove');
let awan = document.getElementById ('awan');
let ayunan = document.getElementById ('ayunans');
var textElement = document.getElementById ('text8');
var list = document.querySelector('.list');
var prevBtn = document.getElementById('prev');
var nextBtn = document.getElementById('next');
window.addEventListener ('scroll', function ()  {
    let value = window.scrollY;
    love.style.left = value * 0.5 +'px';
    awan.style.top = value * 0.5 +'px';
    ayunan.style.top = value * 1.5 +'px';


});


// Menampilkan tulisan yang berbeda setiap 1 detik
setInterval(function() {
    // Array dengan daftar tulisan yang akan ditampilkan
    var textList = ["Selalu Ingin Bersama Mu!", "Sayaaaang Bangett sama Ikamm", "Cintaa Banget Sama Ikam"];
  
    // Variabel untuk menampung indeks dari tulisan yang akan ditampilkan
    var currentTextIndex = 0;
  
    // Fungsi untuk mengubah tulisan yang ditampilkan
    function changeText() {
      // Menampilkan tulisan yang berada pada indeks sekarang
      textElement.innerHTML = textList[currentTextIndex];
  
      // Mengubah indeks sekarang menjadi indeks selanjutnya
      currentTextIndex = (currentTextIndex + 1) % textList.length;
    }
  
    // Menjalankan fungsi changeText setiap 1.5 detik
    setInterval(changeText, 2000);
  }, 2000);

  // mendapatkan referensi ke elemen list dan tombol navigasi


  // menetapkan event handler untuk tombol navigasi
  prevBtn.addEventListener('click', function() {
    // menggeser daftar ke kiri
    list.scrollLeft -= 100;
  });
  nextBtn.addEventListener('click', function() {
    // menggeser daftar ke kanan
    list.scrollLeft += 100;
  });

