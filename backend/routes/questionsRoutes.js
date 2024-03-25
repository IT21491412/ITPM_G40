const express = require('express');
const QuestionController = require ('../controllers/questionsController');

const router = express.Router();

/*------------ Question routes -------------*/
router.post('/questions', QuestionController.createQuestion);

router.get('/questions', QuestionController.getAllQuestions);

router.get('/questions/:id', QuestionController.getQuestionById);

router.put('/questions/:id', QuestionController.updateQuestion);

router.delete('/questions/:id', QuestionController.deleteQuestion);

router.get('/', (req,res)=>{
    res.send("Hello q routes")
})


/*------------ Question routes ends - implement other question routes as needed -------------*/


module.exports = router;