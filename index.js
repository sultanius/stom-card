const app = require('express')()
const server = require('http').createServer(app)
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const passport = require('passport')
const cookieSession = require('cookie-session')
require('./passport-setup')
const {sessionChecker} = require('./middleware/sesCheck')


const indexRouter = require('./routes/index')
const registrationRouter = require('./routes/registration')
const loginRouter = require('./routes/login')
const timetableRouter = require('./routes/timetable')
const cardsRouter = require('./routes/cards')
// 
app.use(cookieSession({
    name: 'tim-session',
    keys: ['key1', 'key2']
}))

const isLoggedIn = (req, res, next) => {
    if(req.user) {
        next()
    } else {
        res.sendStatus(401);
    }
}
app.use(passport.initialize());
app.use(passport.session())

app.get('/failed', (req, res) => {res.send('you will failed to log in')})
app.get('/good',sessionChecker, (req, res) => {res.send(`Welcome mr ${req.user.email}`)})
app.get('/google',passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/google/callback',
    passport.authenticate('google', { failureRedirect: '/failed' }),
    function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/good');
    });

app.get('/logout', (req, res) => {
    req.session = null;
    req.logout()
    res.redirect('/')
})
// 
const appMiddleware = require('./middleware/config')

appMiddleware(app)

mongoose.connect('mongodb://localhost:27017/stomCard', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

// Разрешает использовать PUT, DELETE с формами.
app.use(methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        // look in urlencoded POST bodies and delete it
        const method = req.body._method;
        delete req.body._method;
        return method;
    }
}));

app.use('/', indexRouter)
app.use('/registration', registrationRouter)
app.use('/login', loginRouter)
app.use('/timetable', timetableRouter)
app.use('/cards', cardsRouter)


server.listen(3000)

module.exports = app;