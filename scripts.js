let cart = [];

function addToCart(product) {
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Produto adicionado ao carrinho!');

    // Animação de balanço para o ícone do carrinho
    const cartIcon = document.querySelector('#cart-icon');
    if (cartIcon) {
        cartIcon.classList.add('animate-bounce');
        setTimeout(() => cartIcon.classList.remove('animate-bounce'), 1000);
    }
}

function buyNow(product) {
    addToCart(product);
    window.location.href = 'cart.html'; // Redireciona para a página do carrinho
}

document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const product = event.target.dataset.product;
            addToCart(product);
        });
    });

    const buyNowButtons = document.querySelectorAll('.buy-now');
    buyNowButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const product = event.target.dataset.product;
            buyNow(product);
        });
    });
});
