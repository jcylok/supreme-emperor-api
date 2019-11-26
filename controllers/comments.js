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
