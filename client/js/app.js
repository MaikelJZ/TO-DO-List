// Elementos do DOM
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const emptyState = document.getElementById('empty-state');

// Carregar tarefas ao iniciar a página
document.addEventListener('DOMContentLoaded', fetchTodos);

// Função para buscar as tarefas do Back-end
async function fetchTodos() {
    try {
        // Quando integrarmos com o back-end, usaremos: const todos = await todoService.getAll();
        // Por enquanto, criamos um array vazio para a interface inicializar limpa
        const todos = []; 
        renderTodos(todos);
    } catch (error) {
        console.error('Erro ao buscar tarefas:', error);
    }
}

// Função para renderizar as tarefas na tela utilizando as classes do Bootstrap 5.3
function renderTodos(todos) {
    todoList.innerHTML = '';
    
    if (todos.length === 0) {
        emptyState.classList.remove('d-none');
        return;
    }
    
    emptyState.classList.add('d-none');

    todos.forEach(todo => {
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center px-0 py-3';
        
        li.innerHTML = `
            <div class="d-flex align-items-center">
                <input class="form-check-input me-3" type="checkbox" ${todo.completed ? 'checked' : ''} onchange="toggleTodo(${todo.id}, this.checked)">
                <span class="${todo.completed ? 'todo-completed' : ''}">${todo.title}</span>
            </div>
            <button class="btn btn-sm btn-outline-danger border-0" onclick="deleteTodo(${todo.id})">
                <i class="bi bi-trash"></i>
            </button>
        `;
        todoList.appendChild(li);
    });
}

// Evento de submissão do formulário (Adicionar Tarefa)
todoForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const title = todoInput.value.trim();
    if (!title) return;

    try {
        // Envia para o serviço da API
        // await todoService.create(title);
        
        todoInput.value = '';
        fetchTodos(); // Recarrega a lista
    } catch (error) {
        console.error('Erro ao adicionar tarefa:', error);
    }
});

// Funções globais para os eventos dos botões (temporárias até conectar o banco)
async function toggleTodo(id, completed) {
    // await todoService.toggleStatus(id, completed);
    // fetchTodos();
}

async function deleteTodo(id) {
    // await todoService.delete(id);
    // fetchTodos();
}