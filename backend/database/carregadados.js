require("./mongodb");
const livroModel = require("../models/livroModel");
const livros = require("./livros.json");


async function carregarDados() {
    try {
        await livroModel.deleteMany({});
        for (const livro of livros) {
            await livroModel.create(livro);
        }
        console.log("Carga de livros feita!");


    } catch (err) {
        console.log(err);
    } finally {
        process.exit();
    }
}

carregarDados();