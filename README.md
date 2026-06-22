O objetivo é desenvolver do zero uma aplicação web completa de gerenciamento
de tarefas (TO-DO List).<br>
O projeto consiste em construir uma solução full-stack moderna que utiliza Node.js com Express no
back-end, tipagem estática com TypeScript, persistência de dados em um banco de dados relacional
PostgreSQL e front-end em HTML5, Bootstrap 5.3 e Javascript.<br>
O foco principal é garantir uma arquitetura limpa com a separação clara entre a camada de
controle/dados (back-end) e a interface do usuário (front-end).

<h2>REQUISITOS DA APLICAÇÃO</h2> <Br>
<h3>Persistência em Banco de Dados (PostgreSQL)</h3>
- Modelar e criar uma tabela estruturada no PostgreSQL para o armazenamento das tarefas.<Br>
- A tabela de tarefas deve conter campos essenciais como: id, tarefa, status
(pendente/concluído), data de criação e data de atualização.
<h3>Back-end (Node.js + Express + TypeScript)</h3>
- Configurar e estruturar o ambiente de desenvolvimento backend utilizando TypeScript.<Br>
- Desenvolver rotas e controladores para o CRUD completo de tarefas:<Br>
- GET /todo: Listar todas as tarefas cadastradas.<Br>
- POST /todo: Cadastrar uma nova tarefa.<Br>
- PUT /todo/:id: Atualizar as informações ou o status de uma tarefa.<Br>
- DELETE /todo/:id: Excluir uma tarefa do banco de dados.<Br>
<h3>Front-end Dinâmico e Responsivo</h3>
- Desenvolver a interface do usuário utilizando HTML5, CSS3, JavaScript moderno e Bootstrap
para garantir a responsividade.<Br>
- Consumir os dados via requisições assíncronas (fetch – async/await) para carregar, criar,
atualizar e deletar as tarefas em tempo real, sem a necessidade de recarregar a página.
