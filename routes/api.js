const express = require('express');
const Ninja = require('../models/ninjaModel');


const router = express.Router();
router.get('/', (req, res) => {
    Ninja.find({
        longtude: req.query.lng,
        latitude: req.query.lat
    })
    .then(ninja => {
        res.json(ninja);
    })
    .catch(err => console.log(err));
});

router.post('/', (req, res, next) => {
    const ninja = new Ninja(req.body);
    ninja.save()
    .then(ninja => res.send(ninja))
    .catch(next);
});

router.put('/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    Ninja.findByIdAndUpdate(id, req.body)
    .then(() => {
        Ninja.findById(id)
        .then(ninja => res.send(ninja));
    });
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    Ninja.findByIdAndDelete(id)
    .then(ninja => {
        res.send(ninja);
    })
    .catch(err => console.log(err));
});

module.exports = router;