import express from 'express'
import { deleteUserController, getAllusers, usercontroller } from '../controllers/userController.js';

const router = express.Router();

router.post('/contact', usercontroller);

router.get('/all-users', getAllusers);

router.delete('/remove/:id', deleteUserController);

export default router;


