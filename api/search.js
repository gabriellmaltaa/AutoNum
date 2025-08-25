import fetch from 'node-fetch';

export default async function (req, res) {
    // ❗️ COLA O TEU ACCESS TOKEN AQUI DENTRO DAS ASPAS ❗️
    const ACCESS_TOKEN = 'OdUSHq48jnwuC8Rdl8vX60cyHI3KAZn1';

    const { query } = req.query;

    if (!query) {
        return res.status(400).json({ error: 'Parâmetro de busca ausente.' });
    }

    if (ACCESS_TOKEN === 'OdUSHq48jnwuC8Rdl8vX60cyHI3KAZn1') {
        return res.status(500).json({ error: 'O Access Token do Mercado Livre não foi configurado no servidor.' });
    }

    try {
        const url = `https://api.mercadolibre.com/sites/MLB/search?q=${encodeURIComponent(query)}`;
        
        // Agora fazemos a chamada com o cabeçalho de autorização
        const response = await fetch(url, {
            headers: {
                'Authorization': `Bearer ${ACCESS_TOKEN}`
            }
        });

        if (!response.ok) {
            // Se a resposta não for OK, lança um erro com o status
            throw new Error(`Erro da API do Mercado Livre: ${response.statusText}`);
        }

        const data = await response.json();
        res.status(200).json(data);

    } catch (error) {
        console.error('Erro ao buscar na API do Mercado Livre:', error);
        res.status(500).json({ error: 'Erro interno do servidor ao contatar a API do Mercado Livre.' });
    }
}