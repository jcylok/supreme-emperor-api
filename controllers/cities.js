const bcrypt = require('bcryptjs');
const db = require('../models');

// Show all Cities
const showCity = (req, res) => {
    db.City.find({}, (err, allCity) => {
        if (err) return res.status(500).json({
            status: 500,
            error: [{message: 'Something went wrong! Please try again'}],
        });
        res.json({
            status: 200,
            count: allCity.length,
            data: allCity,
            requestedAt: new Date().toLocaleString(),
        });
    });
};

// Show One City
const showOneCity = (req, res) => {
    // console.log(req.params.cityName)
    db.City.findOne({urlName: req.params.cityName}, (error, foundCity) => {
        if (error) return console.log(error);
        if (foundCity) {
            res.json({
                status: 200,
                count: 1,
                data: foundCity,
                requestedAt: new Date().toLocaleString(),
            });
        } else {
            res.json({
                status: 404,
                count: 0,
                data: `City with name ${req.params.cityName} was not found. Please try again.`
            })
        }
    })
}

// Show One City by ID
const showOneCityById = (req, res) => {
    db.City.findById({_id: req.params.id}, (error, foundCity) => {
        if (error) return console.log(error);
        if (foundCity) {
            res.json({
                status: 200,
                count: 1,
                data: foundCity,
                requestedAt: new Date().toLocaleString(),
            });
        } else {
            res.json({
                status: 404,
                count: 0,
                data: `City with ID ${req.params.id} was not found. Please try again.`
            })
        }
    })
}

// Create City
const createCity = (req, res) => {
    db.City.create(req.body, (err, createdCity) => {
        if (err) return res.status(500).json({
            status: 500,
            error: [{message: 'Something went wrong. Please try again'}]
        });
        res.status(201).json({
            status: 201,
            count: 1,
            data: createdCity,
            dateCreated: new Date().toLocaleString(),
        })
    });
};

module.exports = {
    showCity,
    showOneCity, // THIS IS SHOW BY cityName
    showOneCityById,
    createCity,
}