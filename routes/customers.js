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
router.get('/:id', getCustomer, (req, res) => {
    res.send(res.customer)
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
router.patch('/:id', getCustomer, (req, res) => {
    
})

// Deleting one customer (in progress)
router.delete('/:id', getCustomer, async (req, res) => {
    try {
        await res.customer.remove()
        res.json({ message: 'Deleted customer' })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})


// Middleware
async function getCustomer(req, res, next) {
    let customer
    try {
        customer = await Customer.findById(req.params.id)
        if (customer == null) {
            return res.status(404).json({ message: 'Cannot find customer'})
        }
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

    res.customer = customer
    next()
}

module.exports = router