document.addEventListener('DOMContentLoaded', () => {

    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');
    const resultsContainer = document.getElementById('results-container');

    // URL base da API de busca do Mercado Livre
    const API_BASE_URL = '/api/search?query=';

    // Função para buscar produtos na API
    const fetchProducts = async (query) => {
        // Limpa a área de resultados e exibe uma mensagem de carregamento
        resultsContainer.innerHTML = '<p class="loading-message">Buscando peças...</p>';

        try {
            // Constrói a URL de busca
            const response = await fetch(`${API_BASE_URL}${encodeURIComponent(query)}`);

            // Verifica se a resposta foi bem-sucedida
            if (!response.ok) {
                throw new Error('Erro ao buscar na API do Mercado Livre.');
            }

            const data = await response.json();
            return data.results; // Retorna a lista de produtos
        } catch (error) {
            console.error('Erro:', error);
            resultsContainer.innerHTML = '<p class="error-message">Desculpe, algo deu errado. Tente novamente mais tarde.</p>';
            return [];
        }
    };

    // Função para renderizar os produtos na tela
    const renderProducts = (products) => {
        resultsContainer.innerHTML = ''; // Limpa os resultados anteriores

        if (products.length === 0) {
            resultsContainer.innerHTML = '<p class="no-results">Nenhum resultado encontrado. Tente uma busca diferente.</p>';
            return;
        }

        products.forEach(product => {
            // Cria um card para cada produto
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');

            // Formata o preço para o padrão brasileiro
            const price = product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

            // Adiciona o HTML do card com as informações do produto
            productCard.innerHTML = `
                <img src="${product.thumbnail}" alt="${product.title}" class="product-image">
                <div class="product-info">
                    <h3 class="product-title">${product.title}</h3>
                    <p class="product-price">${price}</p>
                    <a href="${product.permalink}" target="_blank" class="product-link">Ver no Mercado Livre</a>
                </div>
            `;
            
            // Adiciona o card ao contêiner de resultados
            resultsContainer.appendChild(productCard);
        });
    };

    // Adiciona um "ouvinte" ao formulário para o evento de submit
    searchForm.addEventListener('submit', async (e) => {
        e.preventDefault(); // Impede o envio do formulário (para não recarregar a página)

        const query = searchInput.value.trim();
        if (query) {
            const products = await fetchProducts(query);
            renderProducts(products);
        } else {
            resultsContainer.innerHTML = '<p class="no-results">Por favor, digite algo para buscar.</p>';
        }
    });
});