// Membuka modal pendaftaran UMKM
function bukaModalJualan() {
    alert("Daftar sebagai Penjual/Mitra UMKM\n\nSyarat Pendaftaran:\n1. KTP & NIB (Jika ada)\n2. Lokasi Workshop/Produksi di Kalsel\n3. Foto Produk Kerajinan Asli\n\n(Nantinya ini akan diarahkan ke halaman Register Role: Seller)");
}

// Simulasi tombol keranjang
const cartIcon = document.querySelector('.fa-shopping-cart').parentElement;
cartIcon.addEventListener('click', () => {
    alert("Menampilkan Drawer Keranjang Belanja Anda.");
});

// Simulasi tombol filter
const filterBtn = document.querySelector('button:contains("Terapkan Filter")');
if(filterBtn) {
    filterBtn.addEventListener('click', (e) => {
        const btn = e.target;
        const originalText = btn.innerText;
        btn.innerText = "Memuat...";
        btn.style.opacity = "0.7";
        
        // Simulasi loading dari database
        setTimeout(() => {
            btn.innerText = originalText;
            btn.style.opacity = "1";
            console.log("Data produk difilter (simulasi).");
        }, 800);
    });
}
