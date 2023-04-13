const mongoose = require('mongoose')
const Item = require('./item')

// Model for order
const orderSchema = new mongoose.Schema({
    customerId: {
        type: String,
        required: true
    },
    items: [
        {
            itemName: {
                type: String,
                ref: Item,
                require: true
            },
            quantity: {
                type: Number,
                required: true
            }
        }
    ]
    
})

module.exports = mongoose.model('Order', orderSchema)