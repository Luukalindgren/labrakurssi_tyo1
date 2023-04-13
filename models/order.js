const mongoose = require('mongoose')
const Item = require('./item')
const Customer = require('./customer')

// Model for order
const orderSchema = new mongoose.Schema({
    customerName: {
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