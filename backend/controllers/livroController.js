const livroModel = require('../models/livroModel');

class livroController {
    async salvar(req, res) {
        let livro = req.body;
        const max = await livroModel.findOne({}).sort({ codigo: -1 });
        livro.id = max == null ? 1 : max.id + 1;
        const resultado = await livroModel.create(livro);
        res.status(201).json(resultado);
    }

    async listar(req, res) {
        const resultado = await livroModel.find({});
        res.status(200).json(resultado);
    }

    async buscarPorid(req, res) {
        const id = req.params.id;
        const resultado = await livroModel.findOne({ 'isbn': id });
        res.status(200).json(resultado);
    }

    async atualizar(req, res) {
        const id = req.params.id;
        const _id = String((await livroModel.findOne({ 'isbn': id }))._id);
        await livroModel.findByidAndUpdate(String(_id), req.body);
        res.status(200).send();
    }

    async excluir(req, res) {
        const id = req.params.id;
        const _id = String((await livroModel.findOne({ 'isbn': id }))._id);
        await livroModel.findByidAndRemove(String(_id));
        res.status(200).send();
    }
}

module.exports = new livroController();