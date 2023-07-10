const express = require('express');
const router = express.Router();
const livroController = require('../controllers/livroController');

router.get('/', livroController.listar);
router.post('/', livroController.salvar);
router.get('/:isbn', livroController.buscarPorisbn);
router.put('/:isbn', livroController.atualizar);
router.delete('/:isbn', livroController.excluir);

module.exports = router;