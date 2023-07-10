const mongoose = require('mongoose');

const livroSchema = new mongoose.Schema({
    
    isbn:Number,
    titulo:String,
    autor:String,
    ano: Number,
    tema:String, 
    alugado:Boolean
});

module.exports = mongoose.model('livros', livroSchema);