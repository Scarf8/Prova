const livroModel = require('../models/livroModel');

class livroController {
    async salvar(req, res) {
        let livro = req.body;
        const max = await livroModel.findOne({}).sort({ codigo: -1 });
        livro.isbn = max == null ? 1 : max.isbn + 1;
        const resultado = await livroModel.create(livro);
        res.status(201).json(resultado);
    }

    async listar(req, res) {
        const resultado = await livroModel.find({});
        res.status(200).json(resultado);
    }

    async buscarPorisbn(req, res) {
        const isbn = req.params.isbn;
        const resultado = await livroModel.findOne({ 'isbn': isbn });
        res.status(200).json(resultado);
    }

    async atualizar(req, res) {
        const isbn = req.params.isbn;
        const _isbn = String((await livroModel.findOne({ 'isbn': isbn }))._isbn);
        await livroModel.findByisbnAndUpdate(String(_isbn), req.body);
        res.status(200).send();
    }

    async excluir(req, res) {
        const isbn = req.params.isbn;
        const _isbn = String((await livroModel.findOne({ 'isbn': isbn }))._isbn);
        await livroModel.findByidAndRemove(String(_isbn));
        res.status(200).send();
    }
}

module.exports = new livroController();