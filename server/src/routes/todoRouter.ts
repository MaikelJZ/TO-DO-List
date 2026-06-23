import { Router } from 'express';
import { TodoController } from '../controllers/todoController';

const router = Router();

// Mapeamento dos endpoints da API
router.get('/', TodoController.getAll);          // Listar todas
router.post('/', TodoController.create);         // Criar nova
router.put('/:id', TodoController.toggleStatus); // Alterar status (concluído/pendente)
router.delete('/:id', TodoController.delete);    // Deletar
router.patch('/:id', TodoController.update);

export default router;