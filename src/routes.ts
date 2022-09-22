import { Router } from 'express';
import { addMessage, getMessage } from './controllers/messages';

const router: Router = Router();

router.post('/add', addMessage);
router.get('/read', getMessage);

export default router;
