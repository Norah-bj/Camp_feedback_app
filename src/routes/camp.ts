import express from 'express';
import { createCamp, getCamps, getCampById, updateCamp, deleteCamp } from '../controller/campController';

const router = express.Router();

router.post('/camps', createCamp);
router.get('/camps', getCamps);
router.get('/camps/:id', getCampById);
router.put('/camps/:id', updateCamp);
router.delete('/camps/:id', deleteCamp);

export default router;
