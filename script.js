document.addEventListener('DOMContentLoaded', () => {

    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');
    const resultsContainer = document.getElementById('results-container');

    const API_BASE_URL = '/api/search?query=';

    const fetchProducts = async (query) => {
        resultsContainer.innerHTML = '<p class="loading-message">Buscando peças de verdade...</p>';

        try {
            const response = await fetch(`${API_BASE_URL}${encodeURIComponent(query)}`);
            if (!response.ok) {
                throw new Error('A resposta da rede não foi bem-sucedida.');
            }
            const data = await response.json();
            return data.results;
        } catch (error) {
            console.error('Erro ao buscar produtos:', error);
            resultsContainer.innerHTML = '<p class="error-message">Desculpe, algo deu errado na busca. Tente novamente.</p>';
            return [];
        }
    };
    
    // (O resto do ficheiro continua igual, com a função renderProducts e o Event Listener)
    const renderProducts = (products) => {
        resultsContainer.innerHTML = ''; 
        if (!products || products.length === 0) {
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