var express = require('express');
var router = express.Router();
var Car = require('../models/cars.js');



// Get all cars
router.get('/cars', function (req, res, next) {
    Car.find(function(err, cars) {
        if(err){
            res.json({"message":err});
        }else{
            res.json(cars);
        }
    });
});
// get one car
router.get('/car/:id', function(req, res, next){
    Car.findById(req.params.id, function(err, car){
        if(err){
            res.json({"message":err});
        }else{
            res.json(car);
        }
    });
});
// Post a car
router.post('/cars', function(req,res,next){
    var newCar = new Car(req.body);
    newCar.save(function(err, car){
        res.json(car);
    });
});
// edit one car
router.put('/car/:id', function(req,res,next){
    var options = {"new":true};
    Car.findByIdAndUpdate(req.params.id, req.body, options, function(err, car){
        if (err){
            res.json({"Message": err});
        }else{
            res.json(car);
        }
    });
});
// delete a car
router.delete('/car/:id', function(req,res,next){
    Car.findByIdAndRemove(req.params.id, function(err, cars){
        if(err){
            res.json({"message":err});
        }else{
            res.json({"Message":"success"});
        }
    });
});

module.exports = router;
