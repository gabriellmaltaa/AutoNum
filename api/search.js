import fetch from 'node-fetch';

export default async function (req, res) {
    // O código agora lê o token de forma segura das Variáveis de Ambiente
    const ACCESS_TOKEN = process.env.ML_ACCESS_TOKEN;

    const { query } = req.query;

    if (!query) {
        return res.status(400).json({ error: 'Parâmetro de busca ausente.' });
    }

    // Se a variável de ambiente não estiver configurada, o servidor retornará um erro claro.
    if (!ACCESS_TOKEN) {
        return res.status(500).json({ error: 'O Access Token do Mercado Livre não foi configurado no servidor.' });
    }

    try {
        const url = `https://api.mercadolibre.com/sites/MLB/search?q=${encodeURIComponent(query)}`;
        
        const response = await fetch(url, {
            headers: {
                'Authorization': `Bearer ${ACCESS_TOKEN}`
            }
        });

        if (!response.ok) {
            throw new Error(`Erro da API do Mercado Livre: ${response.statusText}`);
        }

        const data = await response.json();
        res.status(200).json(data);

    } catch (error) {
        console.error('Erro ao buscar na API do Mercado Livre:', error);
        res.status(500).json({ error: 'Erro interno do servidor ao contatar a API do Mercado Livre.' });
    }
}