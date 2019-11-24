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
    console.log(req.params.cityName)
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
    })
}

// const createPost = (req, res) => {
//     db.Post.create(req.body, (err, createdPost) => {
//         if (err) return res.status(500).json({
//             status: 500,
//             error: [{message: 'Something went wrong. Please try again'}]
//         });
//         res.status(201).json({
//             status: 201,
//             count: 1,
//             data: createdPost,
//             dateCreated: new Date().toLocaleString(),
//         })
//         db.User.findById(req.body.author, (err, user) =>{
//           if (err) return console.log(err)
//           if (user){
//             user.posts.push(createdPost._id)
//             user.save((err, result) => {
//               if (err) return console.log(err)
//               console.log(result)
//             })
//           }
//         })
//     });
// };

module.exports = {
    showCity,
    showOneCity,
    createCity,
}