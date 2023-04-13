const mongoose = require('mongoose')

// Model for order
const orderSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },

    // ?????????????
    items: {
        type: Item,
        required: true
    }

})

module.exports = mongoose.model('Order', orderSchema)