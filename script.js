// --- Navbar Scroll Effect ---
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
        navbar.classList.add('shadow-md');
    } else {
        navbar.classList.remove('shadow-md');
    }
});

// --- Category Filtering Logic (Pills) ---
const categoryBtns = document.querySelectorAll('.category-btn');
const productCards = document.querySelectorAll('.product-card');

categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Hapus styling aktif dari semua tombol
        categoryBtns.forEach(b => {
            b.classList.remove('bg-kriya-brown', 'text-white', 'border-kriya-brown');
            b.classList.add('bg-white', 'text-gray-600', 'border-gray-300');
        });
        
        // Tambahkan styling aktif ke tombol yang diklik
        btn.classList.remove('bg-white', 'text-gray-600', 'border-gray-300');
        btn.classList.add('bg-kriya-brown', 'text-white', 'border-kriya-brown');

        const target = btn.getAttribute('data-target');

        // Filter produk berdasarkan kategori
        productCards.forEach(card => {
            if (target === 'all' || card.getAttribute('data-category') === target) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// --- Cart Functionality & Toast Notification ---
let cartCount = 0;
const cartBadge = document.getElementById('cart-count');
const toastContainer = document.getElementById('toast-container');

function addToCart(productName) {
    // Update angka di keranjang
    cartCount++;
    cartBadge.innerText = cartCount;
    
    // Animasi denyut kecil saat ditambah
    cartBadge.classList.add('scale-150');
    setTimeout(() => {
        cartBadge.classList.remove('scale-150');
    }, 200);

    // Tampilkan notifikasi Custom Toast
    showToast(productName);
}

function showToast(productName) {
    const toast = document.createElement('div');
    toast.className = 'bg-gray-900 text-white px-6 py-3 rounded-full shadow-xl flex items-center text-sm font-medium toast-enter pointer-events-auto';
    toast.innerHTML = `
        <i class="fa-solid fa-check-circle text-green-400 mr-2 text-lg"></i> 
        <span><strong>${productName}</strong> ditambahkan ke keranjang!</span>
    `;

    toastContainer.appendChild(toast);

    // Hapus toast setelah 3 detik
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translate(-50%, 20px)';
        toast.style.transition = 'all 0.4s ease';
        setTimeout(() => toast.remove(), 400);
    }, 3000);
}
