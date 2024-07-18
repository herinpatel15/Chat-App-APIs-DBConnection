import express from 'express';
import { sendMessage, getMessage } from '../controllers/message.controller.js';
import loginCheck from '../middalware/loginCheck.js';

const router = express.Router();

router.post("/send/:id", loginCheck, sendMessage)
router.get("/:id", loginCheck, getMessage)

export default router;