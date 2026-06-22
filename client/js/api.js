const API_URL = 'http://localhost:3000/api/todos';

const todoService = {
    // GET /api/todos
    async getAll() {
        const response = await fetch(API_URL);
        return await response.json();
    },

    // POST /api/todos
    async create(title) {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title })
        });
        return await response.json();
    },

    // PUT /api/todos/:id
    async toggleStatus(id, completed) {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ completed })
        });
        return await response.json();
    },

    // DELETE /api/todos/:id
    async delete(id) {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE'
        });
        return response.ok;
    }
};