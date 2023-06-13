const express = require('express');
const router = express.Router();

router.get('/get-all-prod', (req, res) => {
    res.send([
        {
            id: 1,
            name: 'Laptop i3',
            price: 100000,
            brand: 'Dell'
        },
        {
            id: 2,
            name: 'Laptop i5',
            price: 100000,
            brand: 'Dell'
        },
        {
            id: 3,
            name: 'Laptop i7',
            price: 100000,
            brand: 'Dell'
        },
        {
            id: 4,
            name: 'Laptop i5',
            price: 100000,
            brand: 'Asus'
        },
        {
            id: 5,
            name: 'Laptop i',
            price: 100000,
            brand: 'Asus'
        }
    ])
})

module.exports = router;