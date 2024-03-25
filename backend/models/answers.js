const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema({
    text: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    question: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Question',
      required: true,
    },
  });
  
  const Answer = mongoose.model('Comment', answerSchema);
  
  module.exports = Answer;
  