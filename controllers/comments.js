const bcrypt = require('bcryptjs');
const db = require('../models');


// Show all Comments

const showComment = (req, res) => {
    db.Comment.find({}, (err, allComment) => {
        if (err) return res.status(500).json({
            status: 500,
            error: [{message: 'Something went wrong! Please try again'}],
        });
        res.json({
            status: 200,
            count: allComment.length,
            data: allComment,
            requestedAt: new Date().toLocaleString(),
        });
    });
};


// Create Comment

const createComment = (req, res) => {
    db.Comment.create(req.body, (err, createdComment) => {
        if (err) return res.status(500).json({
            status: 500,
            error: [{ message: 'Something went wrong. Please try again'}]
        });
        res.status(201).json({
            status: 201,
            count: 1,
            data: createdComment,
            dateCreated: new Date().toLocaleString(),
        });
    });
};


// Update Post

const updateComment











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