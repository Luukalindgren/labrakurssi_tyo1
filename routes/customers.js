const express = require('express')
const router = express.Router()
const Customer = require('../models/customer')

// Get all customers
router.get('/', async (req, res) => {
    try {
        const customers = await Customer.find()
        res.json(customers)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// Get one customer
router.get('/:id', (req, res) => {
    res.send(req.params.id)
})

// Creating new customer
router.post('/', (req, res) => {
    
})

// Updating existing customer
router.patch('/:id', (req, res) => {
    
})

// Deleting one customer
router.delete('/:id', (req, res) => {
    
})

module.exports = router