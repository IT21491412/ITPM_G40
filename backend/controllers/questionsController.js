const Question  = require('../models/questions');

/*------------ Create a new Question -------------*/

exports.createQuestion = async (req, res) => {
    try {
        const question = new Question({
          title: req.body.title,
          content: req.body.content,
          name: req.body.name,
        });
        await question.save();
        res.status(201).json(question);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
};

/*------------ Get All Qustions -------------*/

exports.getAllQuestions = async (req, res) => {
    try {
      const questions = await Question.find();
      res.status(200).json(questions);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

/*------------ Get a question by ID -------------*/

exports.getQuestionById = async (req, res) => {
    try {
      const question = await Question.findById(req.params.id);
      if (!question) {
        return res.status(404).json({ error: 'Question not found !!' });
      }
      res.status(200).json(question);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

/*------------ Update a question by ID -------------*/

exports.updateQuestion = async (req, res) => {
    try {
      const question = await Question.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!question) {
        return res.status(404).json({ error: 'Question not found !!' });
      }
      res.status(200).json(question);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

/*------------ Delete a question by ID -------------*/

exports.deleteQuestion = async (req, res) => {
    try {
      const question = await Question.findByIdAndDelete(req.params.id);
      if (!question) {
        return res.status(404).json({ error: 'Question not found !!' });
      }
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };



// END OF QUESTION CONTROLLERS
