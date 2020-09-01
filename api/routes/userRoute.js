import express from 'express';
import {getUsers,deleteUser}  from '../controller/userController';


const router = express.Router();

// user routes
router.get('/user/list', getUsers);
router.post('/delete',deleteUser);




export default router;
