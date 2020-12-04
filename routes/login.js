const router = require('express').Router()
const User = require('../models/User')

router.get('/', (req, res) => {
    res.render('login')
})

router.post('/', (req, res) => {
    const {username, password} = req.body

    const user = User.findb

})

module.exports = router