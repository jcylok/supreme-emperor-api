const bcrypt = require('bcryptjs');
const db = require('../models');

const register = (req, res) => {
    if (!req.body.name || !req.body.email || !req.body.password) {
        return res.status(400).json({ status: 400, message: 'Please enter your name, email and password'});
    }

    db.User.findOne({ email: req.body.email }, (err, foundUser) => {
        if (err) return res.status(500).json({ status: 500, message: 'Something went wrong. Please try again'});

        if (foundUser) return res.status(400).json({ status: 400, message: 'Email address has already been registered. Please try again' });

        bcrypt.genSalt(10, (err, salt) => {
            if (err) return res.status(500).json({ status: 500, message: 'Something went wrong. Please try again'});

            bcrypt.hash(req.body.password, salt, (err, hash) => {
                if (err) return res.status(500).json({ status: 500, message: 'Something went wrong. Please try again'});

                const newUser = {
                    name: req.body.name,
                    email: req.body.email,
                    password: hash,
                }

                db.User.create(newUser, (err, savedUser) => {
                    if (err) return res.status(500).json({ status: 500, message: err});
                    res.sendStatus(201);
                });
            });
        });
    });
};