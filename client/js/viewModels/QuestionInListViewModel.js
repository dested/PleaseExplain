function QuestionInListViewModel(questionModel) {
    this.votes = questionModel.votes;
    this.answers = questionModel.answers.length;
    this.views = questionModel.views;
    this.text = questionModel.text;
    this.tags = questionModel.tags.map(function (tag) {
        return new TagViewModel(tag)
    });
    this.lastUpdatedTime = 0;
    this.lastPostedUser = questionModel.user && new UserViewModel(questionModel.user);
}
