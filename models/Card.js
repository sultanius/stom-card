const mongoose = require('mongoose')


const cardSchema = new  mongoose.Schema({
    numbCard: {type:Number},
    text: {type: String},
})

// const Card = mongoose.model('Card', cardSchema);

// const   af = new Card ({
//     numbCard: 4,
//     text: 'asdfsdfsdf',
// })
// af.save()
module.exports = mongoose.model('Card', cardSchema)

