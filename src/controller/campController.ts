import { Request, Response } from 'express';
import Camp from '../models/camp'; 

// Create a new camp
export const createCamp = async (req: Request, res: Response) => {
  try {
    const camp = new Camp(req.body);
    const savedCamp = await camp.save();
    res.status(201).json(savedCamp);
  } catch (error) {
    res.status(400).json({ message: 'Failed to create camp', error });
  }
};

// Get all camps
export const getCamps = async (_req: Request, res: Response) => {
  try {
    const camps = await Camp.find();
    res.status(200).json(camps);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch camps', error });
  }
};

// Get a single camp by id
export const getCampById = async (req: Request, res: Response) => {
  try {
    const camp = await Camp.findById(req.params.id);
    if (!camp) return res.status(404).json({ message: 'Camp not found' });
    res.status(200).json(camp);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching camp', error });
  }
};

// Update a camp by id
export const updateCamp = async (req: Request, res: Response) => {
  try {
    const updatedCamp = await Camp.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!updatedCamp) return res.status(404).json({ message: 'Camp not found' });
    res.status(200).json(updatedCamp);
  } catch (error) {
    res.status(400).json({ message: 'Failed to update camp', error });
  }
};

// Delete a camp by id
export const deleteCamp = async (req: Request, res: Response) => {
  try {
    const deletedCamp = await Camp.findByIdAndDelete(req.params.id);
    if (!deletedCamp) return res.status(404).json({ message: 'Camp not found' });
    res.status(200).json({ message: 'Camp deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete camp', error });
  }
};
