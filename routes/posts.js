const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');


router.get('/', ctrl.posts.showPost),
router.get('/:postId', ctrl.posts.showOnePost),
router.post('/', ctrl.posts.createPost),
router.put('/', ctrl.posts.updatePost),
router.delete('/', ctrl.posts.destroy)





module.exports = router;

