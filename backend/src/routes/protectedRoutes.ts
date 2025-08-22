import express from 'express';
import { protect } from '../middlewares/authMiddleware';

const router = express.Router();

router.get('/dashboard', protect, (req, res) => {
  res.json({ 
    message: 'Welcome to the dashboard',
    user: req.user 
  });
});

export default router;