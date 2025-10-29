const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

const products = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 2999,
    img: 'https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1113'
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 4999,
    img: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1172'
  },
  {
    id: 3,
    name: 'Gaming Mouse',
    price: 1999,
    img: 'https://images.unsplash.com/photo-1629429408209-1f912961dbd8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170'
  },
  {
    id: 4,
    name: 'Bluetooth Speaker',
    price: 2599,
    img: 'https://images.unsplash.com/photo-1589256469067-ea99122bbdc4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074'
  },
  {
    id: 5,
    name: 'DSLR Camera',
    price: 19999,
    img: 'https://images.unsplash.com/photo-1616423640778-28d1b53229bd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070'
  },
  {
    id: 6,
    name: 'Laptop',
    price: 45999,
    img: 'https://cdn.pixabay.com/photo/2015/01/21/14/14/apple-606761_1280.jpg'
  }
];

const productContainer = document.getElementById('product-container');

if (productContainer) {
  products.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('product-card');
    card.innerHTML = `
      <img src="${item.img}" alt="${item.name}">
      <div class="product-info">
        <h3>${item.name}</h3>
        <p class="price">₹${item.price}</p>
        <button class="buy-btn" onclick="viewProduct(${item.id})">Buy Now</button>
      </div>
    `;
    productContainer.appendChild(card);
  });
}

function viewProduct(id) {
  const product = products.find(p => p.id === id);
  localStorage.setItem('selectedProduct', JSON.stringify(product));
  window.location.href = 'product.html';
}

const productDetails = document.getElementById('product-details');

if (productDetails) {
  const product = JSON.parse(localStorage.getItem('selectedProduct'));
  if (product) {
    productDetails.innerHTML = `
      <img src="${product.img}" alt="${product.name}">
      <h2>${product.name}</h2>
      <p class="price">₹${product.price}</p>
      <button class="buy-btn">Proceed to Checkout</button>
    `;
  } else {
    productDetails.innerHTML = `<p>Product not found.</p>`;
  }
}
