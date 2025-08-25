document.addEventListener('DOMContentLoaded', () => {
    const resultsContainer = document.getElementById('results-container');
    const API_URL = 'http://localhost:3000/api/produtos';

    const fetchProducts = async () => {
        resultsContainer.innerHTML = '<p class="loading-message">A carregar produtos do nosso banco de dados...</p>';
        try {
            const response = await fetch(API_URL);
            if (!response.ok) {
                throw new Error('Não foi possível conectar ao servidor local.');
            }
            const products = await response.json();
            renderProducts(products);
        } catch (error) {
            console.error('Erro ao buscar produtos:', error);
            resultsContainer.innerHTML = '<p class="error-message">Erro ao carregar produtos. Verifique se o servidor (`server.js`) está a ser executado no terminal.</p>';
        }
    };

    const renderProducts = (products) => {
        resultsContainer.innerHTML = '';
        if (!products || products.length === 0) {
            resultsContainer.innerHTML = '<p class="no-results">Nenhum produto encontrado.</p>';
            return;
        }
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');

            // Formata o preço para a moeda brasileira
            const price = product.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

            productCard.innerHTML = `
                <img src="${product.imagem_url}" alt="${product.nome}" class="product-image">
                <div class="product-info">
                    <p class="product-code">Cód. ${product.codigo_peca}</p>
                    <h3 class="product-title">${product.nome}</h3>
                    <p class="product-application">${product.aplicacao}</p>
                    <a href="#" class="product-link">${price}</a>
                </div>
            `;
            resultsContainer.appendChild(productCard);
        });
    };

    fetchProducts();
});