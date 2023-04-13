const express = require('express')
const router = express.Router()
const Item = require('../models/item')

// Get all items
router.get('/', async (req, res) => {
    try {
        const items = await Item.find()
        res.json(items)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

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


// Deleting existing item
router.delete('/:id', getItem, async (req, res) => {
    try {
        await res.item.deleteOne()
        res.json({ message: 'Deleted item' })
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