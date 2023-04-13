const mongoose = require('mongoose')

// Model for item
const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    id: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Item', itemSchema)