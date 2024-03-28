const Question  = require('../models/questions');

/*------------ Add answers for a question -------------*/

exports.addAnswerToQuestion = async (req, res) => {
    try {
      const question = await Question.findById(req.params.id);
      if (!question) {
        return res.status(404).send();
      }
      question.answers.push(req.body);
      await question.save();
      res.status(201).send(question);
    } catch (error) {
      res.status(400).send(error);
    }
  };

/*------------ Delete a answer by id in a question -------------*/

  exports.deleteAnswerFromQuestion = async (req, res) => {
    try {
      const question = await Question.findById(req.params.questionId);
      if (!question) {
        return res.status(404).send();
      }
      
      // Find the index of the answer in the answer array
      const answerIndex = question.answers.findIndex(answer => answer._id.toString() === req.params.answerId);
      
      // If answer Index is -1, anwer not found
      if (answerIndex === -1) {
        return res.status(404).send({ message: "Answer not found in the question" });
      }
  
      // Remove the answer from the answer array
      question.answers.splice(answerIndex, 1);
  
      await room.save();
  
      res.send(question);
    } catch (error) {
      res.status(500).send(error);
    }
  };

  /*------------ Update the answer by id in a question -------------*/

  exports.editAnswer = async (req, res) => {
    try {
      const question = await Question.findById(req.params.questionId);
      if (!question) {
        return res.status(404).json({ error: 'Question not found' });
      }
      
      const answer = question.answers.id(req.params.answerId);
      if (!answer) {
        return res.status(404).json({ error: 'Answer not found' });
      }
      
      // Update answer properties if provided in the request body
      if (req.body.name) {
        answer.name = req.body.name;
      }
      if (req.body.answer) {
        answer.answer = req.body.answer;
      }
      
      await question.save();
      res.status(200).json(question);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

