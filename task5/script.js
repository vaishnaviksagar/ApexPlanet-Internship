const products = [
    { id: 1, name: 'Women\'s Cute Crop Tee', price: 1200, category: 'dresses', img: 'https://th.bing.com/th/id/OIP.9wC1M8VITbltIIppvV6QjwHaHa?w=202&h=202&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3' },
    { id: 2, name: 'Men\'s Formal Shoes', price: 3500, category: 'dresses', img: 'https://th.bing.com/th/id/OIP.KNVzuBr5BwwC33tvIbTddQHaFL?w=172&h=150&c=6&o=7&dpr=1.5&pid=1.7&rm=3' },
    { id: 3, name: 'RayBan Sun Glasses Unisex', price: 1800, category: 'dresses', img: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=300&fit=crop' },
    { id: 4, name: 'Women\'s Evening Gown', price: 4500, category: 'dresses', img: 'https://th.bing.com/th/id/OIP.sfzM54cAOgd5149XP-IRhAHaHa?w=202&h=202&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3' },
    { id: 5, name: 'Party Dress for Girl\'s', price: 800, category: 'dresses', img: 'https://th.bing.com/th/id/OIP.tX96qTZ-50sHHyJRTKtLzgHaJ3?w=202&h=269&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3' },
    { id: 6, name: 'Party Dress for Boy\'s', price: 1500, category: 'dresses', img: 'https://th.bing.com/th/id/OIP.cf0_Ga1EmWPUJelQiwThpwAAAA?w=202&h=236&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3' },
    { id: 7, name: 'Smartphone', price: 25000, category: 'electronics', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop' },
    { id: 8, name: 'Wireless Headphones', price: 5000, category: 'electronics', img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop' },
    { id: 9, name: 'Laptop', price: 65000, category: 'electronics', img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop' },
    { id: 10, name: 'Laptop', price: 20000, category: 'electronics', img: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=400&h=300&fit=crop' },
    { id: 11, name: 'Smartwatch', price: 8000, category: 'electronics', img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop' },
    { id: 12, name: 'Bluetooth Speaker', price: 3000, category: 'electronics', img: 'https://th.bing.com/th/id/OIP.YPWvj_0n5TIaMNzsixUzMwHaHa?w=183&h=183&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3' },
    { id: 13, name: 'Organic Apples (1kg)', price: 200, category: 'groceries', img: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400&h=300&fit=crop' },
    { id: 14, name: 'Fresh Milk (1L)', price: 60, category: 'groceries', img: 'https://th.bing.com/th/id/OIP.xy-RWVowbR7T2yac4Fe_XQHaHa?w=206&h=206&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3' },
    { id: 15, name: 'Whole Wheat Bread', price: 80, category: 'groceries', img: 'https://th.bing.com/th/id/OIP.n_njqO8XaUsM8alhmfDIzgHaHa?w=202&h=202&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3' },
    { id: 16, name: 'Almonds (500g)', price: 500, category: 'groceries', img: 'https://th.bing.com/th/id/OIP.OniW2o1eugHhruQKLB4DtQHaHa?w=184&h=185&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3' },
    { id: 17, name: 'Olive Oil (1L)', price: 800, category: 'groceries', img: 'https://th.bing.com/th/id/OIP.3dmXIvY2Igp5J4ppbMXjIAHaHa?w=183&h=183&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3' },
    { id: 18, name: 'Dark Chocolate', price: 150, category: 'groceries', img: 'https://th.bing.com/th/id/OIP.VeVdBK9dzHdUR6Lcadl1fwHaHa?w=200&h=200&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3' }
];

let cart = [];

function renderProducts() {
    const categories = ['dresses', 'electronics', 'groceries'];
    categories.forEach(cat => {
        const container = document.getElementById(cat);
        const catProducts = products.filter(p => p.category === cat);
        container.innerHTML = catProducts.map(p => `
            <div class="product">
                <img src="${p.img}" alt="${p.name}" onerror="this.src='https://via.placeholder.com/400x300/ddd?text=${encodeURIComponent(p.name)}'">
                <div class="product-info">
                    <h3>${p.name}</h3>
                    <div class="price">₹${p.price}</div>
                    <button class="add-to-cart" onclick="addToCart(${p.id})">Add to Cart</button>
                </div>
            </div>
        `).join('');
    });
}

function addToCart(id) {
    const product = products.find(p => p.id === id);
    const cartItem = cart.find(item => item.id === id);
    if (cartItem) {
        cartItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    updateCart();
}

function updateCart() {
    document.getElementById('cart-count').textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
}

function showCart() {
    const cartEl = document.getElementById('cart');
    const cartItems = document.getElementById('cart-items');
    const totalEl = document.getElementById('total');
    cartItems.innerHTML = cart.map(item => `
        <li>${item.name} x${item.quantity} - ₹${item.price * item.quantity}</li>
    `).join('');
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    totalEl.textContent = `Total: ₹${total}`;
    cartEl.style.display = 'block';
}

function hideCart() {
    document.getElementById('cart').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    updateCart();
    document.getElementById('checkout').onclick = () => {
        alert('Thanks for shopping! Total: ₹' + cart.reduce((sum, item) => sum + item.price * item.quantity, 0));
        cart = [];
        updateCart();
        hideCart();
    };
});