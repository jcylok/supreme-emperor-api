const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');


router.get('/', ctrl.posts.showPost),
router.get('/:postId', ctrl.posts.showOnePost),
router.post('/:userId/:cityName', ctrl.posts.createPost),
router.put('/', ctrl.posts.updatePost),
router.get('/:id/posts', ctrl.posts.userPosts),
router.get('/city/:cityName', ctrl.posts.cityPosts),
router.delete('/', ctrl.posts.destroy)





module.exports = router;

