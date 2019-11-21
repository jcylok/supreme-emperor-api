const bcrypt = require('bcryptjs');
const db = require('../models');


const showPost = (req, res) => {

  db.Event.findById()

    db.Post.find({}, (err, allPost) => {
        if (err) return res.status(500).json({
            status: 500,
            error: [{message: 'Something went wrong! Please try again'}],
        });
        res.json({
            status: 200,
            count: allPost.length,
            data: allPost,
            requestedAt: new Date().toLocaleString(),
        });
    });
};


const createPost = (req, res) => {
    db.Post.create(req.body, (err, createdPost) => {
        if (err) return res.status(500).json({
            status: 500,
            error: [{message: 'Something went wrong. Please try again'}]
        });
        res.status(201).json({
            status: 201,
            count: 1,
            data: createdPost,
            dateCreated: new Date().toLocaleString(),
        });
    });
};

// Update Post

const updatePost = (req, res) => {
    db.Post.findByIdAndUpdate(
      req.params.id,
      req.body,
      {new: true}, (error, updatedPost) => {
        if (err)  return res.status(500).json({
          status: 500,
          error: [{message: 'Something went wrong! Please try again'}],
        });
  
        res.json({
          status: 200,
          count: 1,
          data: updatedPost,
          requestedAt: new Date().toLocaleString()
        });
      });
  }


// Destroy Post

const destroy = (req, res) => {
    db.Post.findByIdAndDelete(
      req.params.id, (err, destroyPost) =>{
        if (err)  return res.status(500).json({
          status: 500,
          error: [{message: 'Something went wrong! Please try again'}],
        });
        res.json({
          status:200,
          count: 1,
          data: destroyPost,
          requestedAt: new Date().toLocaleString(),
        })
      })
  }


module.exports = {
    showPost,
    createPost,
    updatePost,
    destroy,
}