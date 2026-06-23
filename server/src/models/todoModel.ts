import pool from '../config/database';

// Ajustando a interface para refletir suas novas colunas
export interface ITodo {
  id: number;
  tarefa: string;
  status: 'P' | 'C'; // P = Pendente, C = Concluído
  data_criacao?: Date;
  data_atualizacao?: Date;
}

export class TodoModel {
  
  static async getAll(): Promise<ITodo[]> {
    // Busca ordenando pelas tarefas mais recentes
    const query = 'SELECT * FROM tarefas ORDER BY data_criacao DESC';
    const result = await pool.query(query);
    return result.rows;
  }

  static async create(tarefa: string): Promise<ITodo> {
    const query = 'INSERT INTO tarefas (tarefa, status) VALUES ($1, \'P\') RETURNING *';
    const values = [tarefa];
    const result = await pool.query(query, values);
    return result.rows[0];
  }

  static async toggleStatus(id: number, status: 'P' | 'C'): Promise<ITodo | null> {
    const query = 'UPDATE tarefas SET status = $1, data_atualizacao = CURRENT_TIMESTAMP WHERE id = $2 RETURNING *';
    const values = [status, id];
    const result = await pool.query(query, values);
    
    if (result.rows.length === 0) return null;
    return result.rows[0];
  }

  static async delete(id: number): Promise<boolean> {
    const query = 'DELETE FROM tarefas WHERE id = $1';
    const values = [id];
    const result = await pool.query(query, values);
    return (result.rowCount ?? 0) > 0;
  }

  static async update(id: number, novoTexto: string): Promise<ITodo | null> {
    const query = 'UPDATE tarefas SET tarefa = $1, data_atualizacao = CURRENT_TIMESTAMP WHERE id = $2 RETURNING *';
    const values = [novoTexto, id];
    const result = await pool.query(query, values);
    
    if (result.rows.length === 0) return null;
    return result.rows[0];
  }
}