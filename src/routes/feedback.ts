
import express from 'express';
import {
  createFeedback,
  getAllFeedbacks,
  getFeedbacksByCamp,
  updateFeedback,
  deleteFeedback,
} from '../controller/feedbackController';

const router = express.Router();

// Create new feedback
router.post('/', createFeedback);

// Get all feedbacks
router.get('/', getAllFeedbacks);

// Get feedbacks for a specific camp
router.get('/camp/:campId', getFeedbacksByCamp);

// Update feedback by id
router.put('/:id', updateFeedback);

// Delete feedback by id
router.delete('/:id', deleteFeedback);

export default router;
