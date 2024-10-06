import express from 'express';
import { registerUser, getUser, updateUserByEmail } from '../controllers/authController';

const router = express.Router();

router.post('/register', registerUser);
router.get('/users', getUser);
router.patch('/user/:email', updateUserByEmail);

export default router;
