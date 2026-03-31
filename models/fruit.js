const mongoose = require('mongoose')


const fruitSchema = mongoose.Schema({

    name: String,
    family: String,
    order: String,

    genus: String,


    nutrition: {
        calories: String,
        fat: String,
        sugar: String,
        carbohydrates: String,
        protein: String,
    }
})

const Fruit = mongoose.model('Fruit', fruitSchema);

module.exports = Fruit;