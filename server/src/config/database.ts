import { Pool } from 'pg';
import dotenv from 'dotenv';

// Carrega as variáveis de ambiente do arquivo .env
dotenv.config();

// Configura o Pool de conexões com o PostgreSQL
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT) || 5432,
});

// Para testar a conexão ao iniciar a aplicação
/*
pool.connect((err, client, release) => {
  if (err) {
    console.error(' Erro ao conectar-se ao banco:', err.message);
    console.error('Verifique se o seu PostgreSQL está ativo e se a base de dados "TO-DO" foi criado.');
  } else {
    console.log(' Conexão com o PostgreSQL estabelecida com sucesso!');
    release(); // Libera o cliente de volta para o pool
  }
});
*/

export default pool;