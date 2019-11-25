const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');


router.get('/', ctrl.cities.showCity),
router.get('/:cityName', ctrl.cities.showOneCity),
router.get('/id/:id', ctrl.cities.showOneCityById),
router.post('/', ctrl.cities.createCity)



module.exports = router;
