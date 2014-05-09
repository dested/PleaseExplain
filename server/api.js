define('api', ['dataLayer'], function (dataLayer) {

    function API() {
    }

    API.prototype.getQuestions = function (questionFilterModel) {
        var deferred = Q.defer();
        dataLayer.getQuestions().then(function (data) {
            deferred.resolve(data.map(function (dbQuestion) {
                return QuestionInListModel.populateFromDb(dbQuestion);
            }));
        });
        return deferred.promise;
    };
    API.prototype.getPotentialTags = function (potentialTag) {
        return dataLayer.getPotentialTags(potentialTag);
    };
    API.prototype.getQuestion = function (questionId) {
        var deferred = Q.defer();
        dataLayer.getQuestion(questionId).then(function (data) {
            deferred.resolve(data.map(function (dbQuestion) {
                return QuestionModel.populateFromDb(dbQuestion);
            }));
        });
        return deferred.promise;
    };
    API.prototype.askQuestion = function (askQuestionModel) {
        return dataLayer.askQuestion(askQuestionModel);
    };
    return  new API();
});
