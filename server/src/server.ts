import express from 'express';
import cors from 'cors';
import pool from './config/database';
import todoRoutes from './routes/todoRouter';

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares globais
app.use(cors()); // Permite que o front-end acesse a API sem erros de segurança
app.use(express.json());

// Vincula as rotas de tarefas ao prefixo '/api/todos'
app.use('/api/todos', todoRoutes);

// Rota base para verificação simples
app.get('/', async (req, res) => {
  res.json({ message: "API do TO-DO List online e operacional!" });
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT} e a aplicação em http://127.0.0.1:5500/client/index.html`);
});