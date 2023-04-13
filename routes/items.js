const express = require('express')
const router = express.Router()
const Item = require('../models/item')

// Creating new item
router.post('/', async (req, res) => {
    const item = new Item({
        name: req.body.name,
        id: req.body.id,
    })
    try {
        const newItem = await item.save()
        res.status(201).json(newItem)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

// Deleting one item
router.delete('/:id', getItem, async (req, res) => {
    try {
        await res.customer.deleteOne
        res.json({ message: 'Deleted customer' })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// Middleware
async function getItem(req, res, next) {
    let item
    try {
        item = await Item.findById(req.params.id)
        if (item == null) {
            return res.status(404).json({ message: 'Cannot find item'})
        }
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

    res.item = item
    next()
}

module.exports = router