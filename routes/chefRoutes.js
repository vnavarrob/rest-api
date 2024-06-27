const express = require('express');
const router = express.Router();
const chefServices = require ('../services/chefServices');
const {localMw} = require('../middlewares/exampleMW');

router.get('/', (req, res) => {
    const chefs = chefServices.getAll()
    res.status(200).json({
        chefs,
        message: 'Here is the chef list'
    });
});

router.get('/:id', localMw, (req, res) => {
        const chefId = req.params.id;
        console.log(chefId);
        const chef = chefServices.getOne(chefId);
        res.status(200).json({
            chef,
            message: 'Here is the Chef'
        });
    });

    router.post('/', localMw, (req,res) => {
        const info = req.body;
        chefServices.create(info);
        res.status(201).json({
            message: 'Chef added'
        });
    });

    router.patch('/update-speciality/:id', localMw, (req,res) => {
            const id = req.params.id;
            const speciality = req.body.speciality;
            console.log(req.params);
            chefServices.updateSpeciality(id, speciality)
            res.status(200).json({
                message:'Chef Updated'
            });
        });

        router.delete('/:id', (req,res) => {
            const id = req.params.id;
            chefServices.remove(id);
            res.status(200).json({
                message:'Chef deleted'
            });
        });

        module.exports = router;