const bcrypt = require('bcryptjs');
const db = require('../models');

// Show all Posts

const showPost = (req, res) => {
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

// Show One post

const showOnePost = (req, res) => {
  db.Post.findById(req.params.postId, (error, foundPost) => {
    if (error) return console.log (error);
    if (foundPost) {
      res.json({
        status: 200,
        count: 1,
        data: foundPost,
        requestedAt: new Date().toLocaleString(),
      });
    } else {
      res.json({
        status: 404,
        count: 0,
        data: `Post with ID ${req.params.postId} was not found. Please try again.`
        })
      }
    })
  }

// Create Post

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
    showOnePost,
    createPost,
    updatePost,
    destroy,
}