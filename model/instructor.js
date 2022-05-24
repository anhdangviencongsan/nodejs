const mongoose = require('mongoose');

const instructorSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  InstructorID: {
    type: String,
    required: true,
  },
  FullName: {
    type: String,
    required: true,
  },
  Phone: {
    type: String,
    required: true,
  },
 Email: {
     type:String,
     require:true

  },
}, { collection: 'Instructor' });

module.exports = mongoose.model('Instructor', instructorSchema);