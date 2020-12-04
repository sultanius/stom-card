const router = require('express').Router()

// const router = express

router.get('/', (req, res) => {
    res.render('index')
})

module.exports = router;