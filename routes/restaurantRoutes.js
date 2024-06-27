const express = require('express');
const router = express.Router();
const restaurantServices = require ('../services/restaurantServices');
const {localMw} = require('../middlewares/exampleMW');

router.get('/', (req,res) => {
    const restaurants = restaurantServices.getAll()
    res.status(200).json({
        restaurants,
        message: 'Here is the restaurants list'
    });
});

router.get('/:id', (req,res) => {
    const restaurantId = req.params.id;
    console.log(restaurantId);
    const restaurant = restaurantServices.getOne(restaurantId);
    res.status(200).json({
        restaurant,
        message:'Here is the Restaurant'
    });
});

router.post('/', localMw, (req,res) =>{
    const info = req.body;
    restaurantServices.create(info);
    res.status(201).json({
        message:'Restaurant Added'
    });
});

router.patch('/update-name/:id', localMw, (req,res) => {
    const id = req.params.id;
    const name = req.body.name;
    restaurantServices.updateName(id, name)
    res.status(200).json({
        message:'Restaurant Updated'
    });
});

router.patch('/update-chef/:id', localMw, (req,res) => {
    const id = req.params.id;
    const idChef = req.body.idChef
    restaurantServices.updateChef(id, idChef)
    res.status(200).json({
        message:'Restaurant Updated with Chef info'
    })
})

router.delete('/:id', (req,res) => {
    const id = req.params.id;
    restaurantServices.remove(id);
    res.status(200).json({
        message:'Restaurant Deleted'
    });
});

module.exports = router;