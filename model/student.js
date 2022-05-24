const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  StudentID: {
    type: String,
    required: true,
  },
  Image: {
    type: String,
    required: true,
  },
  FullName: {
    type: Boolean,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  Class: {
    type: String,
    required: true,
  },
  Phone: {
    type: String,
    required: true,
  },
  Address: {
    type: String,
    required: true,
  },

}, { collection: 'Student' });

module.exports = mongoose.model('Student', studentSchema);