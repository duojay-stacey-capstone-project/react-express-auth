const findQuiz = async (req, res) => {
    const {
      db: { Quizzes }, // this req.db.User property is put here by the addModelsToRequest middleware
      params: { id }, // this req.params.id is a part of the request URL
    } = req;
  
    const quiz = await Quizzes.find(id);
    if (!quiz) return res.sendStatus(404);
  
    res.send(quiz);
  };
  
  module.exports = findQuiz;
  