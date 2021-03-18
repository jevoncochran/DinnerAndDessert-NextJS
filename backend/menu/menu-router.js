const express = require('express');
const router = express.Router();

const menu = require('./menu-model');

// gets the full menu
router.get('/', (req, res) => {
    menu.getFullMenu()
        .then(m => {
            if (m) {
                res.status(200).json(m);
            } else {
                res.status(404).json({ msg: 'No menu items to show at this time' });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: 'A server error has occurred' });
        })
})

// gets menu items that are "available today"
router.get('/current', (req, res) => {
    menu.getTodaysMenu()
        .then(m => {
            if (m) {
                res.status(200).json(m);
            } else {
                res.status(404).json({ msg: 'No menu items available at this time' });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: 'A server error has occurred' });
        })
})

// adds new item to menu items list
router.post('/', (req, res) => {
    let newItem = req.body;

    if (!newItem.item || !newItem.price || !newItem.dinner_or_dessert) {
        res.status(400).json({ errMsg: 'Item, price and dinner_or_dessert are required fields' });
    } else {
        menu.addMenuItem(newItem)
            .then(item => {
                res.status(201).json(item);
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({ error: 'A server error has occurred' });
            })
    }
})

// updates menu items (price, description, image, available_today)
router.patch('/item:itemId', (req, res) => {
    const { itemId } = req.params;
    const update = req.body;

    menu.editMenuItem(update, itemId)
        .then(item => {
            res.status(200).json(item);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: 'A server error has occurred' });
        })
})

module.exports = router;