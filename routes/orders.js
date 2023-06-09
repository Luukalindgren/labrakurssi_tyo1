const express = require('express')
const router = express.Router()
const Order = require('../models/order')


// Creating a new order
router.post('/', async (req, res) => {
    const order = new Order({
        customerId: req.body.customerId,
        items: req.body.items
    })
    try {
        const newOrder = await order.save()
        res.status(201).json(newOrder)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

// Get all orders
router.get('/', async (req, res) => {
    try {
        const orders = await Order.find()
        res.json(orders)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
)

// Deleting one order
router.delete('/:id', getOrder, async (req, res) => {
    try {
        await res.order.deleteOne()
        res.json({ message: 'Deleted order' })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// Get all orders by customerId
router.get('/:id', async (req, res) => {
    try {
        const orders = await Order.find({customerId: req.params.id})
        res.json(orders)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
)

// Middleware
async function getOrder(req, res, next) {
    let order
    try {
        order = await Order.findById(req.params.id)
        if (order == null) {
            return res.status(404).json({ message: 'Cannot find order' })
        }
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
    res.order = order
    next()
}

module.exports = router
