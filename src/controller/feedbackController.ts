// controllers/feedbackController.ts

import { Request, Response } from 'express';
import Feedback from '../models/feedback';

// Create new feedback
export const createFeedback = async (req: Request, res: Response) => {
  try {
    const { userId, campId, message, rating } = req.body;

    const feedback = await Feedback.create({
      userId,
      campId,
      message,
      rating,
    });

    res.status(201).json(feedback);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create feedback', details: err });
  }
};

// Get all feedbacks
export const getAllFeedbacks = async (_req: Request, res: Response) => {
  try {
    const feedbacks = await Feedback.find().populate('userId').populate('campId');
    res.status(200).json(feedbacks);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch feedbacks', details: err });
  }
};

// Get feedbacks for a specific camp
export const getFeedbacksByCamp = async (req: Request, res: Response) => {
  try {
    const { campId } = req.params;
    const feedbacks = await Feedback.find({ campId }).populate('userId');
    res.status(200).json(feedbacks);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch feedbacks for this camp', details: err });
  }
};

// Update feedback
export const updateFeedback = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updated = await Feedback.findByIdAndUpdate(id, req.body, { new: true });
    if (!updated) return res.status(404).json({ error: 'Feedback not found' });
    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update feedback', details: err });
  }
};

// Delete feedback
export const deleteFeedback = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deleted = await Feedback.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ error: 'Feedback not found' });
    res.status(200).json({ message: 'Feedback deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete feedback', details: err });
  }
};
