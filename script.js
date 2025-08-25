document.addEventListener('DOMContentLoaded', () => {

    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');
    const resultsContainer = document.getElementById('results-container');

    // --- LÓGICA DA API DESATIVADA TEMPORARIAMENTE ---
    // const API_BASE_URL = '/api/search?query=';
    // const fetchProducts = async (query) => { ... };

    /**
     * Função para buscar produtos na nossa base de dados fictícia (database.js)
     * @param {string} query - O termo que o utilizador digitou para buscar.
     * @returns {Array} - Uma lista de produtos que correspondem à busca.
     */
    const searchLocalProducts = (query) => {
        const lowerCaseQuery = query.toLowerCase();

        // Filtra o array 'produtosFicticios' (que vem do database.js)
        const resultados = produtosFicticios.filter(product => {
            // Verifica se o título ou o código da peça contém o texto da busca
            const titulo = product.title.toLowerCase();
            const codigo = product.attributes.find(attr => attr.id === 'PART_NUMBER')?.value_name.toLowerCase() || '';

            return titulo.includes(lowerCaseQuery) || codigo.includes(lowerCaseQuery);
        });

        return resultados;
    };

    // Função para renderizar os produtos na tela (esta continua igual)
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

            const partNumberAttribute = product.attributes.find(attr => attr.id === 'PART_NUMBER' || attr.id === 'MPN');
            if (partNumberAttribute) {
                codigoPeca = partNumberAttribute.value_name;
            }

            const applicationAttribute = product.attributes.find(attr => attr.id === 'APPLICATIONS');
            if (applicationAttribute) {
                aplicacao = applicationAttribute.value_name;
            }

            productCard.innerHTML = `
                <img src="${product.thumbnail}" alt="${product.title}" class="product-image">
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

    // Adiciona um "ouvinte" ao formulário para o evento de submit
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault(); 

        const query = searchInput.value.trim();
        if (query) {
            // Agora chamamos a nossa função de busca local
            const products = searchLocalProducts(query);
            renderProducts(products); // Renderizamos o resultado
        } else {
            // Se a busca for vazia, mostra todos os produtos
            renderProducts(produtosFicticios);
        }
    });

    // Mostra todos os produtos fictícios assim que a página carrega
    renderProducts(produtosFicticios);
});