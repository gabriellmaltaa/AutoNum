// Aguarda o documento HTML ser completamente carregado para executar o script
document.addEventListener('DOMContentLoaded', () => {

    // --- FUNCIONALIDADE DAS ABAS DE BUSCA ---
    const tabVehicle = document.getElementById('tab-vehicle');
    const tabNumber = document.getElementById('tab-number');
    const formVehicle = document.getElementById('form-vehicle');
    const formNumber = document.getElementById('form-number');

    if (tabVehicle && tabNumber) { // Verifica se os elementos existem na página atual
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
    const cartIconContainer = document.getElementById('cart-icon-container');
    const cartModal = document.getElementById('cart-modal');
    const closeCartBtn = document.getElementById('close-cart-btn');
    const cartCountSpan = document.getElementById('cart-count');
    const cartItemsContainer = document.getElementById('cart-items-container');
    const cartTotalPriceSpan = document.getElementById('cart-total-price');

    // Inicializa o carrinho como um array vazio
    let cart = [];

    // Função para atualizar a interface do carrinho
    const updateCartUI = () => {
        // Limpa o container de itens do carrinho
        cartItemsContainer.innerHTML = '';

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p>Seu carrinho está vazio.</p>';
            cartCountSpan.classList.remove('visible');
        } else {
            cartCountSpan.classList.add('visible');
            cart.forEach((item, index) => {
                const cartItem = document.createElement('div');
                cartItem.className = 'cart-item';
                cartItem.innerHTML = `
                    <img src="${item.img}" alt="${item.name}">
                    <div class="cart-item-info">
                        <h4>${item.name}</h4>
                        <p class="cart-item-price">R$ ${parseFloat(item.price).toFixed(2).replace('.', ',')}</p>
                    </div>
                    <button class="cart-item-remove" data-index="${index}">&times;</button>
                `;
                cartItemsContainer.appendChild(cartItem);
            });
        }
        
        cartCountSpan.textContent = cart.length;

        const totalPrice = cart.reduce((sum, item) => sum + parseFloat(item.price), 0);
        cartTotalPriceSpan.textContent = totalPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

        addRemoveListeners();
    };

    // Função para adicionar um item ao carrinho
    const addToCart = (product) => {
        cart.push(product);
        updateCartUI();
    };
    
    // Função para remover um item do carrinho
    const removeFromCart = (index) => {
        cart.splice(index, 1);
        updateCartUI();
    };

    // Adiciona o evento de clique para cada botão "Adicionar ao Carrinho"
    addToCartButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const productCard = event.target.closest('.product-card');
            const product = {
                name: productCard.dataset.name,
                price: productCard.dataset.price,
                img: productCard.dataset.img
            };
            addToCart(product);
            alert(`${product.name} foi adicionado ao carrinho!`);
        });
    });

    // Função para adicionar eventos de clique aos botões de remover
    const addRemoveListeners = () => {
        const removeButtons = document.querySelectorAll('.cart-item-remove');
        removeButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                const index = event.target.dataset.index;
                removeFromCart(index);
            });
        });
    };

    // Eventos para abrir e fechar o modal do carrinho
    if (cartIconContainer) { // Verifica se o ícone do carrinho existe
        cartIconContainer.addEventListener('click', (event) => {
            event.preventDefault();
            cartModal.classList.add('show');
        });

        closeCartBtn.addEventListener('click', () => {
            cartModal.classList.remove('show');
        });

        cartModal.addEventListener('click', (event) => {
            if (event.target === cartModal) {
                cartModal.classList.remove('show');
            }
        });
    }

    // Inicia a UI do carrinho pela primeira vez ao carregar a página
    updateCartUI();
});