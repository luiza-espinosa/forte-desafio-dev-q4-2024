"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
let emprestimos = [];
let id = 1;
router.post('/', (req, res) => {
    const { livro, usuario } = req.body;
    const novoEmprestimo = { id, livro, usuario, status: 'emprestado' };
    emprestimos.push(novoEmprestimo);
    id++;
    res.status(201).json(novoEmprestimo);
});
router.get('/', (req, res) => {
    res.json(emprestimos);
});
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    const emprestimo = emprestimos.find(e => e.id === parseInt(id));
    if (!emprestimo)
        return res.status(404).json({ error: 'Empréstimo não encontrado.' });
    emprestimo.status = status;
    res.json(emprestimo);
});
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    emprestimos = emprestimos.filter(e => e.id !== parseInt(id));
    res.json({ message: 'Empréstimo removido com sucesso.' });
});
exports.default = router;
//# sourceMappingURL=bookLoans.js.map