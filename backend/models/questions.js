const mongoose = require('mongoose');

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
});

const Question = mongoose.model('Question',questionSchema);

module.exports = Question;


// END OF QUESTION MODEL