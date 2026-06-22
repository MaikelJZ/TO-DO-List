Abaixo todo os comandos utilizados no console

# Cria as pastas do projeto de forma estruturada
mkdir client
mkdir -p server/src/config server/src/controllers server/src/models server/src/routes

# os pacotes (dependências) pertencem ao back-end, precisamos entrar na pasta server:
cd server

#  criar o arquivo package.json, que guardará o registro de todos os pacotes que vamos instalar:
npm init -y

# os pacotes essenciais que a aplicação precisa para rodar (Express para as rotas e pg para conectar ao PostgreSQL):
npm install express pg dotenv

# Elas servem para habilitar o TypeScript e reiniciar o servidor automaticamente a cada alteração:
npm install -D typescript @types/node @types/express @types/pg ts-node-dev

# Por fim, gere o arquivo de configuração do TypeScript (tsconfig.json):
npx tsc --init

Entrando na aplicação
No Console digite o comando abaixo
npm run dev
e acesse o link abaixo
http://127.0.0.1:5500/client/index.html