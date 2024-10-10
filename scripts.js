const products = [
    { id: 1, name: 'Winter Jacket', price: 'Rp 300,000', image: 'https://via.placeholder.com/200?text=Winter+Jacket', description: 'Jaket hangat yang cocok untuk musim dingin.' },
    { id: 2, name: 'Snow Boots', price: 'Rp 500,000', image: 'https://via.placeholder.com/200?text=Snow+Boots', description: 'Sepatu bot anti-selip untuk jalan di atas salju.' },
    { id: 3, name: 'Knitted Scarf', price: 'Rp 150,000', image: 'https://via.placeholder.com/200?text=Knitted+Scarf', description: 'Syal rajut nyaman yang akan menghangatkan leher Anda.' },
];

const productGrid = document.getElementById('product-grid');
if (productGrid) {
    products.forEach(product => {
        const productElement = `
            <div class="product-item">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.price}</p>
                <a href="detail.html?id=${product.id}">Detail Produk</a>
            </div>
        `;
        productGrid.innerHTML += productElement;
    });
}

const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');
const productDetailElement = document.getElementById('product-detail');

if (productDetailElement) {
    const productDetail = products.find(product => product.id == productId);
    if (productDetail) {
        const productDetailHTML = `
            <img src="${productDetail.image}" alt="${productDetail.name}">
            <h2>${productDetail.name}</h2>
            <p>${productDetail.price}</p>
            <p>${productDetail.description}</p>
            <a href="index.html">Kembali ke Katalog</a>
        `;
        productDetailElement.innerHTML = productDetailHTML;
    }
}

// Slider otomatis
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000);
}

function changeSlide(n) {
    slideIndex += n;
    let slides = document.getElementsByClassName("slide");
    if (slideIndex > slides.length) { slideIndex = 1 }
    if (slideIndex < 1) { slideIndex = slides.length }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}
