const express = require('express');
const jsonBodyParser = require('body-parser').json();

const Pets = require('./pets.service');


const router = express.Router();
console.log(Pets)
router.get('/', (req, res, next) => {
    if (!Pets.getAll()) return res.status(404).json({ error: `No pets for adoption` });
    res.status(200).json(Pets.getAll())
})

router.get('/:type', (req, res, next) => {
    //return all pets currently for adoption by type
    const { type } = req.params;
    if (!Pets.get(type)) return res.status(404).json({ error: `No '${type}' for adoption` });
    return res.status(200).json(Pets.get(type));
});

router.delete('/:type', (req, res, next) => {
    //Remove a pet from adoption
    const { type } = req.params;
    if (!Pets.get(type)) return res.status(404).json({ error: `No '${type}' for adoption` });
    Pets.dequeue(type)
    res.status(204).end()
});

module.exports = router;