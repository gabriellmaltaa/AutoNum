import fetch from 'node-fetch';

export default async function (req, res) {
    const { query } = req.query;

    if (!query) {
        res.status(400).json({ error: 'Parâmetro de busca ausente.' });
        return;
    }

    try {
        const url = `https://api.mercadolibre.com/sites/MLB/search?q=${encodeURIComponent(query)}`;
        const response = await fetch(url);
        const data = await response.json();
        
        // Retorna a resposta completa da API do Mercado Livre
        res.status(200).json(data);
    } catch (error) {
        console.error('Erro ao buscar na API do Mercado Livre:', error);
        res.status(500).json({ error: 'Erro interno do servidor.' });
    }
}