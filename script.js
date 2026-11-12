// Fungsi untuk tombol "Mulai Jualan"
function bukaModalJualan() {
    alert("Daftar sebagai Penjual/Mitra UMKM\n\n(Di sistem nyata, tombol ini akan membuka form registrasi Role: Seller)");
}

// Logika untuk menampilkan/menyembunyikan Sidebar Filter di layar HP (Mobile)
const toggleFilterBtn = document.getElementById('toggleFilterBtn');
const filterArea = document.getElementById('filterArea');

if (toggleFilterBtn && filterArea) {
    toggleFilterBtn.addEventListener('click', () => {
        // Toggle class 'hidden' untuk menampilkan/menyembunyikan filter
        filterArea.classList.toggle('hidden');
        
        // Ubah teks tombol sesuai kondisi
        if (filterArea.classList.contains('hidden')) {
            toggleFilterBtn.innerHTML = '<i class="fas fa-filter"></i> Tampilkan Filter';
        } else {
            toggleFilterBtn.innerHTML = '<i class="fas fa-times"></i> Sembunyikan Filter';
        }
    });
}

// Efek Loading Simulasi saat menekan tombol "Terapkan Filter"
const btnFilter = document.getElementById('btnFilter');
if (btnFilter) {
    btnFilter.addEventListener('click', (e) => {
        const btn = e.target;
        const originalText = btn.innerText;
        
        // Ubah state tombol
        btn.innerText = "Memuat data...";
        btn.style.opacity = "0.7";
        
        // Kembalikan seperti semula setelah 1 detik (simulasi request ke server)
        setTimeout(() => {
            btn.innerText = originalText;
            btn.style.opacity = "1";
            
            // Di HP, otomatis sembunyikan filter lagi setelah diterapkan agar kembali melihat produk
            if (window.innerWidth < 1024) { // 1024px adalah batas layar laptop (lg)
                filterArea.classList.add('hidden');
                toggleFilterBtn.innerHTML = '<i class="fas fa-filter"></i> Tampilkan Filter';
            }
        }, 1000);
    });
}
