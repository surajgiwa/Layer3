const express = require('express');
const router = express.Router();
const { authMiddleware, adminMiddleware } = require('../middleware/authMiddleware');
const { getUsers, getUserById, createUser, updateUser, deleteUser } = require('../controllers/userController');

router.get('/', authMiddleware, adminMiddleware, getUsers);
router.get('/:id', authMiddleware, adminMiddleware, getUserById);
router.post('/', authMiddleware, adminMiddleware, createUser);
router.put('/:id', authMiddleware, adminMiddleware, updateUser);
router.delete('/:id', authMiddleware, adminMiddleware, deleteUser);

module.exports = router;
