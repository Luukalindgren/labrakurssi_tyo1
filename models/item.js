const mongoose = require('mongoose')

// Model for item
const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Item', itemSchema)