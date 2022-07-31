import mongoose from 'mongoose';

// creating employee Schema
const employeeSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  DOB: {
    type: Date,
    default: Date.now(),
  },
  gender: {
    type: String,
    default: 'Male',
    required: true,
  },
  salary: {
    type: Number,
    default: 0,
    required: true,
  }
});

// creating employee Model
const Employee = mongoose.model("Employee", employeeSchema);

// Export the model
export default Employee;