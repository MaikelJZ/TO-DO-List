import express from 'express';
import cors from 'cors';
import path from 'path';
import open from 'open';
import pool from './config/database';
import todoRoutes from './routes/todoRouter';

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares globais
app.use(cors()); // Permite que o front-end acesse a API sem erros de segurança
app.use(express.json());

const caminhoClient = path.resolve(__dirname, '../../client');
app.use(express.static(caminhoClient));

// Vincula as rotas de tarefas ao prefixo '/api/todos'
app.use('/api/todos', todoRoutes);

// Rota base para verificação simples
app.get('/', (req, res) => {
  res.sendFile(path.join(caminhoClient, 'index.html'));
});

app.listen(PORT, async() => {
  console.log(`Servidor e Aplicação rodando em http://localhost:${PORT}`);
});