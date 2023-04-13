const mongoose = require('mongoose')
const Item = require('./item')
const Customer = require('./customer')

// Model for order
const orderSchema = new mongoose.Schema({
    customerId: {
        type: String,
        ref: Customer,
        required: true
    },
    items: [
        {
            itemId: {
                type: Number,
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