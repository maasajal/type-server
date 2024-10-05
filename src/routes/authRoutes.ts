import express from 'express';
import { registerUser, getUser } from '../controllers/authController';

const router = express.Router();

router.post('/register', registerUser);
router.get('/users', getUser);

export default router;
