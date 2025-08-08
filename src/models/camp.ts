import mongoose from 'mongoose';

const campSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  description: { type: String }
}, { timestamps: true });

const Camp = mongoose.model('Camp', campSchema);

export default Camp;

