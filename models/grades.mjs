import mongoose from "mongoose";

const gradeSchema = new mongoose.Schema({
  studentName: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50,
    unique: true,
  },
  Type: String,
  score: {
    type: Number,
    required: true,
    min: [5, "score can not be less than 90."],
  },
  pass: {
    type: Boolean,
    default: false,
  },
});

// Indexes for frequently queried fields
gradeSchema.index({ studentName: 1 }); // Index for querying by name
gradeSchema.index({ type: 1 }); // Index for querying by color

const grade = mongoose.model("grades", gradeSchema);

export default grade;
