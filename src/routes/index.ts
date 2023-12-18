import {Router} from 'express'; 
import userRoute from './userRoute'
const router = Router();
router.use('/api/auth', userRoute);
export default router;