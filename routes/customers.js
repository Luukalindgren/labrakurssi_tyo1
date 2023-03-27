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

// Updating existing customer
router.patch('/:id', getCustomer, async (req, res) => {
    if (req.body.name != null)  {
        res.customer.name = req.body.name
    }
    if (req.body.dateOfBirth != null)  {
        res.customer.dateOfBirth = req.body.dateOfBirth
    }
    if (req.body.joiningDate != null)  {
        res.customer.joiningDate = req.body.joiningDate
    }
    if (req.body.phoneNumber != null)  {
        res.customer.phoneNumber = req.body.phoneNumber
    }
    if (req.body.email != null)  {
        res.customer.email = req.body.email
    }
    if (req.body.address != null)  {
        res.customer.address = req.body.address
    }
    if (req.body.membership != null)  {
        res.customer.membership = req.body.membership
    }
    try {
        const updatedCustomer = await res.customer.save()
        res.json(updatedCustomer)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

// Deleting one customer
router.delete('/:id', getCustomer, async (req, res) => {
    try {
        await res.customer.deleteOne
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