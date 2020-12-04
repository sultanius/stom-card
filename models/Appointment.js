const mongoose = require('mongoose')

const appointmentSchema = new mongoose.Schema({
    time: {type: Date},
    name:{type: String},
    description: {type: String},
    numberOfCard: {type:Number}
})


module.exports = mongoose.model('Appointment', appointmentSchema)


// const  a = new Appointment({
//     time: new Date(2020, 4, 5, 12,00),
//     name: 'Ivanov Ivan',
//     description: 'первичка',
// })
// const  b = new Appointment({
//     time: new Date(2020, 4, 5, 13,00),
//     name: 'Ivanov Ivan',
//     description: 'хронический пульпит, не оплатил прошлый раз',
// })
// const  c = new Appointment({
//     time: new Date(2020, 4, 5, 15,00),
//     name: 'Ivanov Ivan',
//     description: 'сильная боль в области 4.7',
// })
// a.save()
//
// b.save()
//
// c.save()