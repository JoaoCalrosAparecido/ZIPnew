document.addEventListener('DOMContentLoaded', function() {
    updateCart();
});

function updateCart() {
    const cartContainer = document.getElementById('cart-items');
    const totalContainer = document.getElementById('total-price');
    let cartItems = localStorage.getItem('cartItems');
    cartItems = cartItems ? JSON.parse(cartItems) : [];
    let totalPrice = 0;
    
    cartContainer.innerHTML = '';
    cartItems.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item'); // Adiciona a classe 'cart-item'
        
        const productImage = document.createElement('img'); // Cria uma imagem
        productImage.src = '../../IMG/sacola/produtos/bolsa.png'; // Define o src da imagem como 'bolsa.png'
        productImage.alt = item.name; // Define o alt da imagem
        cartItem.appendChild(productImage); // Adiciona a imagem ao item do carrinho
        
        const productInfo = document.createElement('div');
        productInfo.innerHTML = `<h3>BOLSA PRETA CLÁSSICA</h3><h2>${item.name}</h2><p>Preço: R$ ${item.price.toFixed(2)}</p>`;
        cartItem.appendChild(productInfo);
        
        const removeButton = document.createElement('button');
        removeButton.textContent = '';
        removeButton.onclick = function() {
            removeFromCart(index);
        };
        cartItem.appendChild(removeButton);
        
        cartContainer.appendChild(cartItem);
        totalPrice += parseFloat(item.price);
    });

    totalContainer.textContent = totalPrice.toFixed(2);
}

function removeFromCart(index) {
    let cartItems = localStorage.getItem('cartItems');
    cartItems = cartItems ? JSON.parse(cartItems) : [];
    cartItems.splice(index, 1);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    updateCart();
}


