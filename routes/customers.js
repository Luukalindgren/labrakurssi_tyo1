const express = require('express')
const router = express.Router()

// Get all customers
router.get('/', (req, res) => {
    res.send('Get request sent')
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