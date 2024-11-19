
const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list");

menuIcon.addEventListener("click", () => {
  menuList.classList.toggle("hilang");
});

//java mengatur slide
let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

function changeSlide(direction) {
  // menyembunyikan gambar yang aktif
  slides[currentIndex].classList.remove("active");

  //menampilkan gambar berikutnya
  currentIndex += direction;

  //jika sudah sampai slide terakhir maka akan kembali ke awal
  if (currentIndex >= totalSlides) {
    currentIndex = 0;
  } else if (currentIndex < 0) {
    currentIndex = totalSlides -1;
  }

//   menampilkan gambar aktif
slides[currentIndex].classList.add('active');
}
