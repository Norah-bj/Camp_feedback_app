
import express from 'express';
import {
  createFeedback,
  getAllFeedbacks,
  getFeedbacksByCamp,
  updateFeedback,
  deleteFeedback,
} from '../controller/feedbackController';

const feedbackRouter = express.Router();

// Create new feedback
feedbackRouter.post('/', createFeedback);

// Get all feedbacks
feedbackRouter.get('/', getAllFeedbacks);

// Get feedbacks for a specific camp
feedbackRouter.get('/camp/:campId', getFeedbacksByCamp);

// Update feedback by id
feedbackRouter.put('/:id', updateFeedback);

// Delete feedback by id
feedbackRouter.delete('/:id', deleteFeedback);

export default feedbackRouter;
