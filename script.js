document.addEventListener('DOMContentLoaded', () => {

    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');
    const resultsContainer = document.getElementById('results-container');

    // ==================================================================
    //  MUDANÇA PRINCIPAL: AGORA APONTAMOS DIRETAMENTE PARA O MERCADO LIVRE
    // ==================================================================
    const API_MERCADO_LIVRE_URL = 'https://api.mercadolibre.com/sites/MLB/search?q=';

    /**
     * Função para buscar produtos DIRETAMENTE na API do Mercado Livre
     */
    const fetchProducts = async (query) => {
        resultsContainer.innerHTML = '<p class="loading-message">Buscando direto no Mercado Livre...</p>';

        try {
            // A chamada agora é para a URL completa do Mercado Livre
            const response = await fetch(`${API_MERCADO_LIVRE_URL}${encodeURIComponent(query)}`);
            
            if (!response.ok) {
                // Se a resposta não for OK, pode ser um erro de rede ou um bloqueio CORS
                throw new Error('A resposta da rede não foi bem-sucedida. Verifique a consola por erros de CORS.');
            }
            const data = await response.json();
            console.log('Dados recebidos da API:', data.results);
            return data.results;
        } catch (error) {
            console.error('Erro ao buscar produtos:', error);
            // Mensagem de erro mais específica para ajudar a depurar o CORS
            resultsContainer.innerHTML = `<p class="error-message">
                Desculpe, algo deu errado na busca. <br>
                Abra a consola (F12) e verifique se há um erro relacionado a 'CORS'.
            </p>`;
            return [];
        }
    };

    /**
     * Função para renderizar os produtos na tela (sem alterações)
     */
    const renderProducts = (products) => {
        resultsContainer.innerHTML = ''; 
        if (products.length === 0) {
            resultsContainer.innerHTML = '<p class="no-results">Nenhum resultado encontrado.</p>';
            return;
        }
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
            let codigoPeca = 'N/D';
            if (product.attributes) {
                const partNumberAttribute = product.attributes.find(attr => attr.id === 'PART_NUMBER' || attr.id === 'MPN');
                if (partNumberAttribute) {
                    codigoPeca = partNumberAttribute.value_name;
                }
            }
            const highResImage = product.thumbnail.replace('-I.jpg', '-O.jpg');
            productCard.innerHTML = `
                <img src="${highResImage}" alt="${product.title}" class="product-image" onerror="this.onerror=null;this.src='${product.thumbnail}';">
                <div class="product-info">
                    <p class="product-code">Cód. ${codigoPeca}</p>
                    <h3 class="product-title">${product.title}</h3>
                    <p class="product-application"><b>Aplicação:</b><br>N/D</p>
                    <a href="${product.permalink}" target="_blank" class="product-link">PARA VER O PREÇO</a>
                </div>
            `;
            resultsContainer.appendChild(productCard);
        });
    };

    // Event listener do formulário (sem alterações na sua lógica principal)
    searchForm.addEventListener('submit', async (e) => {
        e.preventDefault(); 
        const query = searchInput.value.trim();
        if (query) {
            const products = await fetchProducts(query);
            renderProducts(products);
        } else {
            resultsContainer.innerHTML = '<p class="no-results">Por favor, digite algo para buscar.</p>';
        }
    });
});