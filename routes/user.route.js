import express from 'express';
import loginCheck from '../middalware/loginCheck.js';
import { getUserForSidebar } from '../controllers/user.controller.js';

const router = express.Router()

router.get('/', loginCheck, getUserForSidebar)

export default router