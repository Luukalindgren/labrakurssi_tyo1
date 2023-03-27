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

// Get one customer (in progress)
router.get('/:id', (req, res) => {
    res.send(req.params.id)
})

// Creating new customer
router.post('/', async (req, res) => {
    const customer = new Customer({
        name: req.body.name,
        dateOfBirth: req.body.dateOfBirth,
        joiningDate: req.body.joiningDate,
        phoneNumber: req.body.phoneNumber,
        email: req.body.email,
        address: req.body.address,
        membership: req.body.membership
    })
    try {
        const newCustomer = await customer.save()
        res.status(201).json(newCustomer)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

// Updating existing customer (in progress)
router.patch('/:id', (req, res) => {
    
})

// Deleting one customer (in progress)
router.delete('/:id', (req, res) => {
    
})

module.exports = router