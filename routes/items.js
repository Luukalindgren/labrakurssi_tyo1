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
        price: req.body.price,
        quantity: req.body.quantity,
        description: req.body.description
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
        await res.item.remove()
        res.json({ message: 'Deleted item' })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})