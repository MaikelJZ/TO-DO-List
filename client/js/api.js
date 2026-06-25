
const API_URL = '/api/todos';

const todoService = {
    // GET 
    async getAll() {
        const response = await fetch(API_URL);
        return await response.json();
    },

    // POST 
    async create(tarefa) {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: tarefa })
        });
    return await response.json();
    },

    // PUT 
    async toggleStatus(id, status) { // agora passa 'P' ou 'C'
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ completed: status === 'C' }) 
        });
    return await response.json();
    },

    // DELETE 
    async delete(id) {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE'
        });
        return response.ok;
    },

    async updateText(id, novoTexto) {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: novoTexto })
        });
    return await response.json();
    }
};