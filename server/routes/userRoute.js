import express from 'express'
import { getAllusers, usercontroller } from '../controllers/userController.js';

const router = express.Router();

router.post('/contact', usercontroller);

router.get('/all-users', getAllusers);

export default router;


