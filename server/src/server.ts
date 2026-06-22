import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para permitir que o Express entenda JSON no corpo das requisições
app.use(express.json());

// Rota inicial de teste
app.get('/', (req, res) => {
  res.json({ message: "Servidor do TO-DO List a rodar com sucesso!" });
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor iniciado na porta http://localhost:${PORT}`);
});""