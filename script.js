// Aguarda o documento HTML ser completamente carregado
document.addEventListener('DOMContentLoaded', () => {

    // Seleciona todos os botões "Adicionar ao Carrinho"
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
            // Adiciona a classe 'visible' para mostrar o contador
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
        
        // Atualiza a contagem de itens no ícone
        cartCountSpan.textContent = cart.length;

        // Calcula e atualiza o preço total
        const totalPrice = cart.reduce((sum, item) => sum + parseFloat(item.price), 0);
        cartTotalPriceSpan.textContent = totalPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

        // Adiciona eventos aos botões de remover
        addRemoveListeners();
    };

    // Função para adicionar um item ao carrinho
    const addToCart = (product) => {
        cart.push(product);
        updateCartUI();
    };
    
    // Função para remover um item do carrinho
    const removeFromCart = (index) => {
        cart.splice(index, 1); // Remove o item do array pelo seu índice
        updateCartUI();
    };

    // Adiciona o evento de clique para cada botão
    addToCartButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const productCard = event.target.closest('.product-card');
            
            const product = {
                name: productCard.dataset.name,
                price: productCard.dataset.price,
                img: productCard.dataset.img
            };

            addToCart(product);
            
            // Opcional: mostrar um alerta ou uma notificação mais sofisticada
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

    // Eventos para abrir e fechar o modal
    cartIconContainer.addEventListener('click', (event) => {
        event.preventDefault(); // Previne o link de navegar
        cartModal.classList.add('show');
    });

    closeCartBtn.addEventListener('click', () => {
        cartModal.classList.remove('show');
    });

    // Fecha o modal se clicar fora do conteúdo
    cartModal.addEventListener('click', (event) => {
        if (event.target === cartModal) {
            cartModal.classList.remove('show');
        }
    });

    // Inicia a UI do carrinho pela primeira vez
    updateCartUI();
});