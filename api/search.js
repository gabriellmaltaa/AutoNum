import fetch from 'node-fetch';

export default async function (req, res) {
    const ACCESS_TOKEN = process.env.ML_ACCESS_TOKEN;
    const { query } = req.query;

    if (!query) {
        return res.status(400).json({ error: 'Parâmetro de busca ausente.' });
    }

    if (!ACCESS_TOKEN) {
        // Este console.error aparecerá nos logs da Vercel
        console.error('Variável de ambiente ML_ACCESS_TOKEN não encontrada.');
        return res.status(500).json({ error: 'O Access Token do Mercado Livre não foi configurado no servidor.' });
    }

    try {
        const url = `https://api.mercadolibre.com/sites/MLB/search?q=${encodeURIComponent(query)}`;
        
        const response = await fetch(url, {
            headers: {
                'Authorization': `Bearer ${ACCESS_TOKEN}`
            }
        });

        // Se a resposta da API do ML não for 'ok' (ex: 401, 403, etc.)
        if (!response.ok) {
            const errorBody = await response.text(); // Pega o corpo do erro para vermos a mensagem real
            // Registra o erro detalhado nos logs da Vercel
            console.error('API do Mercado Livre respondeu com erro:', {
                status: response.status,
                statusText: response.statusText,
                body: errorBody
            });
            // Lança um erro para sermos apanhados pelo catch block
            throw new Error(`Erro da API do ML: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        res.status(200).json(data);

    } catch (error) {
        // Registra o erro completo nos logs da Vercel para depuração
        console.error('ERRO DETALHADO NO CATCH:', error);

        // Envia uma resposta de erro mais detalhada para o navegador
        res.status(500).json({
            error: 'Erro interno do servidor ao contatar a API do ML.',
            errorMessage: error.message 
        });
    }
}