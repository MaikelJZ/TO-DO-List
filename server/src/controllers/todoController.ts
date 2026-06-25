import { Request, Response } from 'express';
import { TodoModel } from '../models/todoModel';

export class TodoController {
  
  // GET
  static async getAll(req: Request, res: Response): Promise<void> {
    try {
      const todos = await TodoModel.getAll();
      res.json(todos);
    } catch (error: any) {
      res.status(500).json({ message: 'Erro ao buscar tarefas', error: error.message });
    }
  }

  // POST 
  static async create(req: Request, res: Response): Promise<void> {
    try {
      const { title } = req.body;

      // Validação simples
      if (!title || typeof title !== 'string' || title.trim() === '') {
        res.status(400).json({ message: 'O título da tarefa é obrigatório.' });
        return;
      }

      const newTodo = await TodoModel.create(title.trim());
      res.status(201).json(newTodo);
    } catch (error: any) {
      res.status(500).json({ message: 'Erro ao criar tarefa', error: error.message });
    }
  }

  // PUT 
  static async toggleStatus(req: Request, res: Response): Promise<void> {
    try {
      const id = Number(req.params.id);
      const { completed } = req.body;

      if (isNaN(id)) {
        res.status(400).json({ message: 'ID inválido.' });
        return;
      }

      if (typeof completed !== 'boolean') {
        res.status(400).json({ message: 'O campo completed deve ser um booleano.' });
        return;
      }

      const status = completed ? 'C' : 'P';
      const updatedTodo = await TodoModel.toggleStatus(id, status);

      if (!updatedTodo) {
        res.status(404).json({ message: 'Tarefa não encontrada.' });
        return;
      }

      res.json(updatedTodo);
    } catch (error: any) {
      res.status(500).json({ message: 'Erro ao atualizar tarefa', error: error.message });
    }
  }

  // DELETE 
  static async delete(req: Request, res: Response): Promise<void> {
    try {
      const id = Number(req.params.id);

      if (isNaN(id)) {
        res.status(400).json({ message: 'ID inválido.' });
        return;
      }

      const success = await TodoModel.delete(id);

      if (!success) {
        res.status(404).json({ message: 'Tarefa não encontrada para exclusão.' });
        return;
      }

      res.status(200).json({ message: 'Tarefa excluída com sucesso.' });
    } catch (error: any) {
      res.status(500).json({ message: 'Erro ao excluir tarefa', error: error.message });
    }
  }

  static async update(req: Request, res: Response): Promise<void> {
  try {
    const id = Number(req.params.id);
    const { title } = req.body; // Mantendo o padrão do body que você já usa

    if (isNaN(id)) {
      res.status(400).json({ message: 'ID inválido.' });
      return;
    }

    if (!title || typeof title !== 'string' || title.trim() === '') {
      res.status(400).json({ message: 'O novo texto da tarefa é obrigatório.' });
      return;
    }

    const updatedTodo = await TodoModel.update(id, title.trim());

    if (!updatedTodo) {
      res.status(404).json({ message: 'Tarefa não encontrada.' });
      return;
    }

    res.json(updatedTodo);
  } catch (error: any) {
    res.status(500).json({ message: 'Erro ao editar tarefa', error: error.message });
  }
}
}