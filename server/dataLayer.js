define('dataLayer', [], function () {

    var mongoose = require('mongoose');

    var Question = mongoose.model('Question', dbQuestion.schema());
    var Tag = mongoose.model('Tag', dbTag.schema());
    var User = mongoose.model('User', dbUser.schema());

    function DataLayer() {
        mongoose.connect('mongodb://localhost/pleaseExplain');
    }

    DataLayer.prototype.getQuestions = function (questionFilterModel) {
        var deferred = Q.defer();

        Question.find().exec(function (err, data) {
            deferred.resolve(data);
        });

        return deferred.promise;
    };
    DataLayer.prototype.getPotentialTags = function (potentialTag) {
        var deferred = Q.defer();
        Tag.find({ text: new RegExp("."+potentialTag+".",'i') })
           .limit(10)
           .exec(function (err, data) {
               deferred.resolve(data);
           });
        return deferred.promise;
    };
    DataLayer.prototype.askQuestion = function (askQuestionModel) {
        var deferred = Q.defer();
        var question = new Question(askQuestionModel);

        question.save(function (err, data) {
            deferred.resolve(data);
        });
        return deferred.promise;
    };
    DataLayer.prototype.getQuestion = function (questionId) {
        var deferred = Q.defer();

        Question.find().exec(function (err, data) {
            deferred.resolve(data);
        });

        return deferred.promise;
    };

    return  new DataLayer();
});




