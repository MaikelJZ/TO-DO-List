const API_URL = 'http://localhost:3000/api/todos';

const todoService = {
    // GET /api/todos
    async getAll() {
        const response = await fetch(API_URL);
        return await response.json();
    },

    // POST /api/todos
    async create(tarefa) { // trocado de title para tarefa
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: tarefa }) // O controller ainda espera 'title' do body, mapeando para o banco
        });
    return await response.json();
    },

    // PUT /api/todos/:id
    async toggleStatus(id, status) { // agora passa 'P' ou 'C'
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ completed: status === 'C' }) // Converte para o que o controller espera
        });
    return await response.json();
    },

    // DELETE /api/todos/:id
    async delete(id) {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE'
        });
        return response.ok;
    },

    // Adicione dentro do objeto todoService em client/js/api.js
    async updateText(id, novoTexto) {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: novoTexto })
        });
    return await response.json();
    }
};