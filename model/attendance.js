const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  StudentID: {
    type: String,
    required: true,
  },
  TimetableID: {
    type: String,
    required: true,
  },
  Status: {
    type: Boolean,
    required: true,
  },
  Datetime: {
    type: String,
    required: true,
  },
}, { collection: 'Attendance' });

module.exports = mongoose.model('Attendance', attendanceSchema);