import express from 'express';
import { createCamp, getCamps, getCampById, updateCamp, deleteCamp } from '../controller/campController';

const campRouter = express.Router();

campRouter.post('/camps', createCamp);
campRouter.get('/camps', getCamps);
campRouter.get('/camps/:id', getCampById);
campRouter.put('/camps/:id', updateCamp);
campRouter.delete('/camps/:id', deleteCamp);

export default campRouter;
