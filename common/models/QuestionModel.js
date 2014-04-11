function QuestionModel() {
    this.votes = 0;
    this.answers = [];
    this.views = 0;
    this.text = '';
    this.tags = [];
    this.lastUpdatedTime = 0;
    this.lastPostedUser = null;
}

QuestionModel.populateFromDb=function(questionDbModel)
{
    var questionModel = new QuestionModel();
    questionModel.votes = questionDbModel.votes;
    questionModel.answers = questionDbModel.answers;
    questionModel.views = questionDbModel.views;
    questionModel.text = questionDbModel.text;
    questionModel.tags = questionDbModel.tags;
    questionModel.lastUpdatedTime = questionDbModel.lastUpdatedTime;
    questionModel.lastPostedUser = questionDbModel.lastPostedUser;
    return questionModel;
};