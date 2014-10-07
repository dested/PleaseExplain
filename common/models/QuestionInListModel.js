function QuestionInListModel() {
    this.answerCount = 0;
    this.title = '';
    this.text = '';
}

QuestionInListModel.populateFromDb = function (questionDbModel) {
    var questionInListModel = new QuestionInListModel();
    questionInListModel.answerCount = questionDbModel.AnswerCount;
    questionInListModel.title = questionDbModel.QuestionTitle;
    questionInListModel.text = questionDbModel.QuestionText;
    return questionInListModel;
};