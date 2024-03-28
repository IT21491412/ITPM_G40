const mongoose = require('mongoose');


// DEFINE ANSWERS MODEL - ARRAY
const answerSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
  },
  answer: { 
    type: String, 
    required: true 
  }
});

//END OF ANSWERS MODEL

//===============================================================================================

// DEFINE QUESTION MODEL
const questionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
      },
      content: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      answers: [answerSchema] // Array of answers associated with the question
});

const Question = mongoose.model('Question',questionSchema);

module.exports = Question;


// END OF QUESTION MODEL