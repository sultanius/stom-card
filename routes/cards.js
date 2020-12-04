const router = require('express').Router()
const Card = require('../models/Card')

router.get('/', async (req, res) => {
   const allCard = await Card.find()
    res.render('cards', {allCard})
})

router.get('/:id', async (req, res) => {
    const {id} = req.params
    const card = await Card.findOne({numbCard:id})
    res.render('oneCard', {card})
})

module.exports = router