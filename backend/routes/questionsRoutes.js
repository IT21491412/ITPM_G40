const express = require('express');
const QuestionController = require ('../controllers/questionsController');
const AnswerController  = require('../controllers/answersController')
const router = express.Router();

/*------------ Question routes -------------*/
router.post('/questions', QuestionController.createQuestion);

router.get('/questions', QuestionController.getAllQuestions);

router.get('/questions/:id', QuestionController.getQuestionById);

router.put('/questions/:id', QuestionController.updateQuestion);

router.delete('/questions/:id', QuestionController.deleteQuestion);

// router.get('/', (req,res)=>{
//     res.send("Hello q routes")
// })


/*------------ Question routes ends - implement other question routes as needed -------------*/


/*------------ Answer routes -------------*/

router.post('/questions/:id/answers', AnswerController.addAnswerToQuestion);

router.delete('/questions/:questionId/answers/:answerId', AnswerController.deleteAnswerFromQuestion);

router.put('/questions/:questionId/answers/:answerId', AnswerController.editAnswer);

/*------------ Answer routes ends - implement other question routes as needed -------------*/




module.exports = router;