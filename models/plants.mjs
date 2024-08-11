import mongoose from "mongoose";

const plantSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    minlength: 5,
    maxlength: 50,
    unique: true,
  },

  color: {
    type: String,
    require: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: 0,
  },
  forEat: Boolean,
});

//These indexes will improve the performance of queries that frequently search for data based on these fields.
// Index for querying by name
plantSchema.index({ name: 1 });

const plant = mongoose.model("plants", plantSchema);

export default plant;
