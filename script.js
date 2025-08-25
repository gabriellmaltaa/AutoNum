document.addEventListener('DOMContentLoaded', () => {

    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');
    const resultsContainer = document.getElementById('results-container');

    // ==================================================================
    //  API REATIVADA!
    // ==================================================================
    // URL base da nossa API intermediária que busca no Mercado Livre
    const API_BASE_URL = '/api/search?query=';

    /**
     * Função para buscar produtos na API em tempo real.
     * @param {string} query - O termo de busca.
     * @returns {Promise<Array>} - Uma promessa que resolve para a lista de produtos.
     */
    const fetchProducts = async (query) => {
        resultsContainer.innerHTML = '<p class="loading-message">Buscando peças de verdade...</p>';

        try {
            const response = await fetch(`${API_BASE_URL}${encodeURIComponent(query)}`);
            if (!response.ok) {
                throw new Error('A resposta da rede não foi bem-sucedida.');
            }
            const data = await response.json();
            console.log('Dados recebidos da API:', data.results); // Ótimo para depurar!
            return data.results;
        } catch (error) {
            console.error('Erro ao buscar produtos:', error);
            resultsContainer.innerHTML = '<p class="error-message">Desculpe, algo deu errado na busca. Tente novamente.</p>';
            return [];
        }
    };

    // --- A função de busca local (searchLocalProducts) foi removida, pois não é mais necessária ---

    /**
     * Função para renderizar os produtos na tela.
     * Ela agora receberá dados reais, incluindo o `permalink` funcional.
     */
    const renderProducts = (products) => {
        resultsContainer.innerHTML = ''; 

        if (products.length === 0) {
            resultsContainer.innerHTML = '<p class="no-results">Nenhum resultado encontrado. Tente uma busca diferente.</p>';
            return;
        }

        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');

            let codigoPeca = 'N/D';
            let aplicacao = 'N/D';
            
            // A API real pode não ter o atributo 'PART_NUMBER', então verificamos se 'attributes' existe.
            if (product.attributes) {
                const partNumberAttribute = product.attributes.find(attr => attr.id === 'PART_NUMBER' || attr.id === 'MPN');
                if (partNumberAttribute) {
                    codigoPeca = partNumberAttribute.value_name;
                }
            }

            // O atributo de aplicação é raro, então o deixamos como N/D na maioria dos casos.
            
            const highResImage = product.thumbnail.replace('-I.jpg', '-O.jpg');

            // AGORA o product.permalink terá o link real do Mercado Livre!
            productCard.innerHTML = `
                <img src="${highResImage}" alt="${product.title}" class="product-image" onerror="this.onerror=null;this.src='${product.thumbnail}';">
                <div class="product-info">
                    <p class="product-code">Cód. ${codigoPeca}</p>
                    <h3 class="product-title">${product.title}</h3>
                    <p class="product-application"><b>Aplicação:</b><br>${aplicacao}</p>
                    <a href="${product.permalink}" target="_blank" class="product-link">PARA VER O PREÇO</a>
                </div>
            `;
            
            resultsContainer.appendChild(productCard);
        });
    };

    // Adiciona um "ouvinte" ao formulário, agora usando a função da API
    searchForm.addEventListener('submit', async (e) => {
        e.preventDefault(); 
        const query = searchInput.value.trim();
        if (query) {
            // Chamando a função assíncrona que busca na internet
            const products = await fetchProducts(query);
            renderProducts(products);
        } else {
            resultsContainer.innerHTML = '<p class="no-results">Por favor, digite algo para buscar.</p>';
        }
    });

    // --- A linha que mostrava todos os produtos ao carregar foi removida, 
    // pois só faz sentido com a base de dados local. ---
});