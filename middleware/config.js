module.exports = function (app){
    const express = require('express')
    const path = require('path')
    const morgan = require('morgan')
    const hbs = require('hbs')
    const session = require('express-session')
    const FileStore = require('session-file-store')(session)
    const cookieParser = require('cookie-parser')



    app.use(express.urlencoded({extended:true}))
    app.use(express.json())
    app.use(morgan("dev"))
    app.use(cookieParser())



    app.use(
        session({
            store: new FileStore(),
            key: "user",
            secret: "secret",
            resave: false,
            saveUninitialized: false,
            cookie: {
                expires: 1000 * 60 * 60 * 24,
            },
        })
    );

    // app.use((req, res, next) => {
    //     if(req.session.user){
    //         res.locals.user = req.session.user
    //     }
    //     next()
    // })
    app.use(express.static(path.join(__dirname, '..', 'public')))


    app.set('view engine', 'hbs')
    app.set('views', path.join(__dirname, '..', 'views'))

}