document.addEventListener('DOMContentLoaded', () => {
    const resultsContainer = document.getElementById('results-container');
    // A URL do nosso próprio backend que criámos!
    const API_URL = 'http://localhost:3000/api/produtos';

    // Função para buscar os produtos da nossa API
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
            resultsContainer.innerHTML = '<p class="error-message">Erro ao carregar produtos. Verifique se o servidor (`server.js`) está a ser executado.</p>';
        }
    };

    // Função para renderizar os produtos na tela
    const renderProducts = (products) => {
        resultsContainer.innerHTML = '';
        if (!products || products.length === 0) {
            resultsContainer.innerHTML = '<p class="no-results">Nenhum produto encontrado.</p>';
            return;
        }
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');

            productCard.innerHTML = `
                <img src="${product.imagem_url}" alt="${product.nome}" class="product-image">
                <div class="product-info">
                    <p class="product-code">Cód. ${product.codigo_peca}</p>
                    <h3 class="product-title">${product.nome}</h3>
                    <p class="product-application"><b>Aplicação:</b><br>${product.aplicacao}</p>
                    <a href="#" target="_blank" class="product-link">VER DETALHES</a>
                </div>
            `;
            resultsContainer.appendChild(productCard);
        });
    };

    // Busca os produtos assim que a página estiver pronta
    fetchProducts();
});