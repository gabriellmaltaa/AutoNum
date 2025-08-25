document.addEventListener('DOMContentLoaded', () => {

    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');
    const resultsContainer = document.getElementById('results-container');

    /**
     * Função para buscar produtos na nossa base de dados fictícia (database.js)
     * @param {string} query - O termo que o utilizador digitou para buscar.
     * @returns {Array} - Uma lista de produtos que correspondem à busca.
     */
    const searchLocalProducts = (query) => {
        const lowerCaseQuery = query.toLowerCase();

        const resultados = produtosFicticios.filter(product => {
            const titulo = product.title.toLowerCase();
            const codigo = product.attributes.find(attr => attr.id === 'PART_NUMBER')?.value_name.toLowerCase() || '';

            return titulo.includes(lowerCaseQuery) || codigo.includes(lowerCaseQuery);
        });

        return resultados;
    };

    /**
     * Função para renderizar os produtos na tela
     * COM A LÓGICA PARA BUSCAR IMAGENS EM ALTA RESOLUÇÃO
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

            const partNumberAttribute = product.attributes.find(attr => attr.id === 'PART_NUMBER' || attr.id === 'MPN');
            if (partNumberAttribute) {
                codigoPeca = partNumberAttribute.value_name;
            }

            const applicationAttribute = product.attributes.find(attr => attr.id === 'APPLICATIONS');
            if (applicationAttribute) {
                aplicacao = applicationAttribute.value_name;
            }

            // --- LÓGICA PARA IMAGEM EM ALTA RESOLUÇÃO ---
            // Troca o final do URL da imagem para tentar obter a versão de alta qualidade.
            const highResImage = product.thumbnail.replace('-I.jpg', '-O.jpg');

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

    // Adiciona um "ouvinte" ao formulário para o evento de submit
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault(); 

        const query = searchInput.value.trim();
        if (query) {
            const products = searchLocalProducts(query);
            renderProducts(products);
        } else {
            renderProducts(produtosFicticios);
        }
    });

    // Mostra todos os produtos fictícios assim que a página carrega
    renderProducts(produtosFicticios);
});