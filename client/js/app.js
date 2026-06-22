// Elementos do DOM
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const emptyState = document.getElementById('empty-state');

// Carregar tarefas do banco de dados assim que a página abrir
document.addEventListener('DOMContentLoaded', fetchTodos);

// Função para buscar as tarefas do Back-end
async function fetchTodos() {
    try {
        const todos = await todoService.getAll();
        renderTodos(todos);
    } catch (error) {
        console.error('Erro ao buscar tarefas:', error);
    }
}

// Função para renderizar as tarefas na tela (Bootstrap 5.3)
function renderTodos(todos) {
    todoList.innerHTML = '';
    
    if (!todos || todos.length === 0) {
        emptyState.classList.remove('d-none');
        return;
    }
    
    emptyState.classList.add('d-none');

    todos.forEach(todo => {
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center px-0 py-3';
        
        // Verifica se está concluído com base no caractere 'C'
        const isCompleted = todo.status === 'C';

        li.innerHTML = `
            <div class="d-flex align-items-center">
                <input class="form-check-input me-3" type="checkbox" ${isCompleted ? 'checked' : ''} onchange="toggleTodo(${todo.id}, this.checked)">
                <span class="${isCompleted ? 'todo-completed' : ''}">${todo.tarefa}</span>
            </div>
            <button class="btn btn-sm btn-outline-danger border-0" onclick="deleteTodo(${todo.id})">
                <i class="bi bi-trash"></i>
            </button>
        `;
        todoList.appendChild(li);
    });
}

// Evento para adicionar uma nova tarefa
todoForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const tarefaTexto = todoInput.value.trim();
    if (!tarefaTexto) return;

    try {
        await todoService.create(tarefaTexto);
        todoInput.value = ''; // Limpa o input
        fetchTodos();        // Atualiza a lista em tempo real
    } catch (error) {
        console.error('Erro ao adicionar tarefa:', error);
    }
});

// Função para alternar o status entre Pendente ('P') e Concluído ('C')
async function toggleTodo(id, isChecked) {
    try {
        const novoStatus = isChecked ? 'C' : 'P';
        await todoService.toggleStatus(id, novoStatus);
        fetchTodos(); // Atualiza o visual
    } catch (error) {
        console.error('Erro ao atualizar status:', error);
    }
}

// Função para deletar a tarefa do banco de dados
async function deleteTodo(id) {
    if (confirm('Deseja realmente excluir esta tarefa?')) {
        try {
            await todoService.delete(id);
            fetchTodos(); // Atualiza a lista
        } catch (error) {
            console.error('Erro ao excluir tarefa:', error);
        }
    }
}