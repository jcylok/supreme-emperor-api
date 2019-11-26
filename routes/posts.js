const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');


router.get('/', ctrl.posts.showPost),
router.get('/:postId', ctrl.posts.showOnePost),
router.post('/:userId/:cityName', ctrl.posts.createPost),
router.put('/:postid', ctrl.posts.updatePost),
router.get('/:id/posts', ctrl.posts.userPosts),
router.get('/author/:id', ctrl.posts.authorName),
router.get('/city/:cityName', ctrl.posts.cityPosts),
router.delete('/:id', ctrl.posts.destroy)

module.exports = router;

