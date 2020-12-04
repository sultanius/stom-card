const router = require('express').Router()
const Appointment = require('../models/Appointment')
const dateFormat = require('dateformat');
const now = new Date();

router.get('/', async (req, res) => {
   const appoint = await Appointment.find().sort({time: 1})
    // const a = dateFormat(now)
    // console.log(a)
    // console.log( appoint.map((el)=> el.time))
    res.render('timetable', {appoint})
})


router.post('/', async (req, res) => {
    const {time, name, description, numberOfCard} = req.body

    const newAppoint = new Appointment({
        time,
        name,
        description,
        numberOfCard,
    })
    await newAppoint.save()
    res.redirect('back')
})

router.get('/:id', async (req, res)=> {
    const appoint = await Appointment.findById(req.params.id)
    res.render('editTable', {appoint})
})

router.put('/:id', async (req, res) => {
    const {id} = req.params
    const {time1, time2, name1, description1, numberOfCard1 } = req.body

    const doc = await Appointment.findById(id)
    doc.time = time1 +' '+ time2;             // чтобы получить время из двух инпутов, один с датой, другой с
    doc.name = name1;                           // временем нужно объединить строкой в массив(можно и без массива)
    doc.description = description1;
    doc.numberOfCard = numberOfCard1;
    await doc.save();

    return res.json({id})
})

module.exports = router