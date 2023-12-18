import { Request, Response, Router } from 'express';
const router = Router();

router.post('/login', (req: Request, res: Response) => {
    const message = req.body.message
    console.log(message)
    res.status(200).json({ message: message });
});
router.post('/register', (req: Request, res: Response) => {
    const message = req.body.message
    console.log(message)
    res.status(200).json({ message: message });
}
);
router.post('/logout', (req: Request, res: Response) => {
    const message = req.body.message
    console.log(message)
    res.status(200).json({ message: message });
}
);

export default router;

module.exports = router
