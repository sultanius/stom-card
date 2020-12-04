const router = require('express').Router()
const User = require('../models/User')


router.get('/', (req, res) => {
    res.render('registration')
})


router.post('/', async (req, res) => {
    const { username, email, password} = req.body

    const user = new User({
        username,
        email,
        password,
    })
    req.session.user = user

    await user.save()
    res.send('ura ')
})

module.exports = router