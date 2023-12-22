import express from 'express'
import { usercontroller } from '../controllers/userController.js';

const router = express.Router();

router.post('/contact', usercontroller)

export default router;


