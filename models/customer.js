const mongoose = require('mongoose')

// Model for customer
const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    joiningDate: {
        type: Date,
        required: true,
        default: Date.now
    },
    phoneNumber: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    membership: {
        type: Boolean,
        required: true
    }
})

module.exports = mongoose.model('Customer', customerSchema)