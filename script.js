// Fungsi untuk memunculkan pendaftaran Toko UMKM
function bukaModalJualan() {
  // Di aplikasi nyata, ini akan membuka form registrasi Role = Seller (UMKM)
  alert(
    "Halaman Pendaftaran Mitra UMKM:\n\nSyarat Bergabung:\n1. Memiliki produk kerajinan lokal (Sasirangan, Rotan, Anyaman, dll).\n2. Memiliki KTP dan alamat produksi yang jelas.\n\nKlik OK untuk melanjutkan pengisian data.",
  );
}

// Simulasi interaksi Cart (Keranjang)
document
  .querySelector(".fa-shopping-cart")
  .parentElement.addEventListener("click", function () {
    alert("Membuka halaman Keranjang Belanja Anda.");
  });

// Contoh logic untuk membaca filter di Sidebar (Skala Besar)
const filterBtn = document.querySelector('button:contains("Terapkan Filter")');
if (filterBtn) {
  filterBtn.addEventListener("click", function () {
    // Di aplikasi nyata, ini akan mengirim request API ke backend untuk memfilter database produk
    console.log("Filter sedang diterapkan. Memuat ulang produk...");
  });
}
