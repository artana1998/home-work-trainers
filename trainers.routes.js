import express from 'express';
import trainersService from './trainers.service.js';

const router = express.Router();

router.get('/', trainersService.getAllTrainers);

router.get('/:id', trainersService.getTrainerById);

router.post('/', trainersService.addTrainer);

router.put('/:id', trainersService.updateTrainer);

router.delete('/:id', trainersService.deleteTrainer);

router.delete('/', trainersService.deleteAllTrainers);

export default router;
