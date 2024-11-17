import { Request, Response, Router } from 'express';
import { pool } from '../db';

const router = Router();

router.post('/', async (req: Request, res: Response) => {
  const {name, author, publicationYear} = req.body;
  const id = crypto.randomUUID ().slice (0,4);
  const result = await pool.query ("insert into lendings (id, name, author, publicationYear) values ($1,$2,$3,$4)",
    [id, name, author, publicationYear]);
  res.status(201).json(result);
});

router.get('/', async (req: Request, res: Response) => {
  const result = await pool.query ("select * from lendings");
  res.json(result.rows);
});

router.put('/:id', async (req: Request, res: Response) => {
  const {id} = req.params;
  const {name, author, publicationYear} = req.body;
  const result = await pool.query ("select * from lendings where id=$1 ", [id]);
  const emprestimo = result.rows [0]; //pegando o 1º item da lista
  emprestimo.name = name; 
  emprestimo.author = author;
  emprestimo.publicationYear = publicationYear;
  await pool.query ("update lendings set name = $2, author = $3, publicationYear = $4 where id = $1",
    [id, name, author, publicationYear]);
  res.json (emprestimo)
});

router.delete('/:id', async (req: Request, res: Response) => {
  const {id} = req.params;
  await pool.query ("delete from lendings where id = $1", [id]);
  res.json({ message: 'Empréstimo removido com sucesso.' });
});

export default router;