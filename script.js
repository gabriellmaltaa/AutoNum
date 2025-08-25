document.addEventListener('DOMContentLoaded', () => {

    // --- FUNCIONALIDADE DAS ABAS DE BUSCA ---
    const tabVehicle = document.getElementById('tab-vehicle');
    const tabNumber = document.getElementById('tab-number');
    const formVehicle = document.getElementById('form-vehicle');
    const formNumber = document.getElementById('form-number');

    if (tabVehicle && tabNumber) {
        tabVehicle.addEventListener('click', () => {
            tabVehicle.classList.add('active');
            tabNumber.classList.remove('active');
            formVehicle.style.display = 'flex';
            formNumber.style.display = 'none';
        });
        tabNumber.addEventListener('click', () => {
            tabNumber.classList.add('active');
            tabVehicle.classList.remove('active');
            formNumber.style.display = 'flex';
            formVehicle.style.display = 'none';
        });
    }

    // --- FUNCIONALIDADE DO CARRINHO DE COMPRAS ---
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    const cartModal = document.getElementById('cart-modal');
    const cartIconContainer = document.getElementById('cart-icon-container');
    const closeCartBtn = document.getElementById('close-cart-btn');
    const cartCountSpan = document.getElementById('cart-count');
    const cartItemsContainer = document.getElementById('cart-items-container');
    const cartTotalPriceSpan = document.getElementById('cart-total-price');
    const notification = document.getElementById('add-to-cart-notification');
    const notificationMessage = document.getElementById('notification-message');
    
    let cart = [];

    // Função para adicionar um item ao carrinho
    const addToCart = (product) => {
        const existingItem = cart.find(item => item.name === product.name);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        updateCartUI();
        showNotification(`${product.name} foi adicionado ao carrinho!`);
    };

    // Função para alterar a quantidade de um item
    const handleQuantityChange = (productName, action) => {
        const item = cart.find(item => item.name === productName);
        if (!item) return;

        if (action === 'increase') {
            item.quantity++;
        } else if (action === 'decrease') {
            item.quantity--;
            if (item.quantity <= 0) {
                cart = cart.filter(cartItem => cartItem.name !== productName);
            }
        }
        updateCartUI();
    };

    // Função para atualizar a interface do carrinho
    const updateCartUI = () => {
        cartItemsContainer.innerHTML = '';

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p>Seu carrinho está vazio.</p>';
            cartCountSpan.classList.remove('visible');
            cartCountSpan.textContent = '0';
        } else {
            cartCountSpan.classList.add('visible');
            const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
            cartCountSpan.textContent = totalItems;

            cart.forEach(item => {
                const cartItem = document.createElement('div');
                cartItem.className = 'cart-item';
                cartItem.innerHTML = `
                    <img src="${item.img}" alt="${item.name}">
                    <div class="cart-item-info">
                        <div class="cart-item-details">
                            <h4>${item.name}</h4>
                            <p class="cart-item-price">${(item.price * item.quantity).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                        </div>
                        <div class="cart-item-quantity">
                            <button class="quantity-change" data-name="${item.name}" data-action="decrease">-</button>
                            <span>${item.quantity}</span>
                            <button class="quantity-change" data-name="${item.name}" data-action="increase">+</button>
                        </div>
                    </div>
                `;
                cartItemsContainer.appendChild(cartItem);
            });
        }

        const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        cartTotalPriceSpan.textContent = totalPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        
        // Adiciona eventos aos novos botões de quantidade
        addQuantityListeners();
    };

    // Função para mostrar notificação
    const showNotification = (message) => {
        notificationMessage.textContent = message;
        notification.classList.add('show');
        setTimeout(() => notification.classList.remove('show'), 3000);
    };

    // Função para adicionar eventos aos botões de quantidade
    const addQuantityListeners = () => {
        document.querySelectorAll('.quantity-change').forEach(button => {
            button.addEventListener('click', (e) => {
                const name = e.target.dataset.name;
                const action = e.target.dataset.action;
                handleQuantityChange(name, action);
            });
        });
    };

    // Eventos de clique nos botões "Adicionar ao Carrinho"
    addToCartButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const productCard = e.target.closest('.product-card');
            const product = {
                name: productCard.dataset.name,
                price: parseFloat(productCard.dataset.price),
                img: productCard.dataset.img
            };
            addToCart(product);
        });
    });

    // Eventos para abrir/fechar o modal
    if (cartIconContainer) {
        cartIconContainer.addEventListener('click', (e) => {
            e.preventDefault();
            cartModal.classList.add('show');
        });
        closeCartBtn.addEventListener('click', () => cartModal.classList.remove('show'));
        cartModal.addEventListener('click', (e) => {
            if (e.target === cartModal) cartModal.classList.remove('show');
        });
    }

    updateCartUI(); // Inicia a UI
});