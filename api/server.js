// 1. Importar as ferramentas necessárias
import express from 'express';
import sqlite3 from 'sqlite3';
import cors from 'cors';

// 2. Configurar o nosso servidor
const app = express();
const port = 3000; // O nosso backend vai rodar na porta 3000

app.use(cors()); // Ativa o CORS para permitir a comunicação com o frontend

// 3. Ligar ao banco de dados
// O ficheiro 'produtos.db' que criámos no passo anterior
const db = new sqlite3.Database('./produtos.db', (err) => {
    if (err) {
        console.error('Erro ao abrir o banco de dados:', err.message);
    } else {
        console.log('Conectado ao banco de dados SQLite.');
    }
});

// 4. Criar a nossa primeira rota de API
// Quando o frontend pedir '/api/produtos', este código será executado
app.get('/api/produtos', (req, res) => {
    const sql = "SELECT * FROM produtos"; // Comando SQL para selecionar todos os produtos

    // Executa o comando SQL no banco de dados
    db.all(sql, [], (err, rows) => {
        if (err) {
            console.error('Erro ao executar a query:', err.message);
            res.status(500).json({ error: 'Erro interno do servidor' });
            return;
        }
        // Se tudo correr bem, envia os produtos como resposta JSON
        res.json(rows);
    });
});

// 5. Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor a rodar em http://localhost:${port}`);
});