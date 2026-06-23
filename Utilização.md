## Entrando na aplicação  
No Console do Visual Studio Code digite os comandos abaixo, para entrar na pasta do servidor
```
cd server
```
e depois este, para inicar o servidor
```
npm run dev
```
e acesse o link abaixo no navegador, que vai ser onde está a aplicação.
```
http://127.0.0.1:5500/client/index.html
```

## Abaixo todo os comandos que foram utilizados no console, para criar a aplicação

### Cria as pastas do projeto de forma estruturada:
```
mkdir client
mkdir -p server/src/config server/src/controllers server/src/models server/src/routes
```
###  os pacotes (dependências), precisa entrar na pasta server:
```
cd server
```
###  Criar o arquivo package.json, que guardará o registro de todos os pacotes:
```
npm init -y
```
###  Os pacotes essenciais que a aplicação precisa para rodar (Express para as rotas e pg para conectar ao PostgreSQL):
```
npm install express pg dotenv
```
###  Habilitar o TypeScript e reiniciar o servidor automaticamente a cada alteração:
```
npm install -D typescript @types/node @types/express @types/pg ts-node-dev
```
###  Arquivo de configuração do TypeScript (tsconfig.json):
```
npx tsc --init
```
###  Arquivo de configuração para navegador
npm install -D open