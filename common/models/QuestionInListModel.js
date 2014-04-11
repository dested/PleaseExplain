function QuestionInListModel() {
    this.votes = 0;
    this.answers = 0;
    this.views = 0;
    this.text = '';
    this.tags = [];
    this.lastUpdatedTime = 0;
    this.lastPostedUser = null;
}

QuestionInListModel.populateFromDb = function (questionDbModel) {

    var questionInListModel = new QuestionInListModel();

    questionInListModel.votes = questionDbModel.votes;
    questionInListModel.answers = questionDbModel.answers.length;
    questionInListModel.views = questionDbModel.views;
    questionInListModel.text = questionDbModel.text;
    questionInListModel.tags = questionDbModel.tags.map(function (tagDbModel) {
        return TagViewModel.populateFromDb(tagDbModel)
    });
    questionInListModel.lastUpdatedTime = 0;
    questionInListModel.lastPostedUser =  questionDbModel.user && TagViewModel.populateFromDb(questionDbModel.user);
    return questionInListModel;
};