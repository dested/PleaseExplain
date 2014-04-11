define('dataLayer', [], function () {

    var mongoose = require('mongoose');

    var Question = mongoose.model('Question', dbQuestion.schema());
    var Tag = mongoose.model('Tag', dbTag.schema());
    var User = mongoose.model('User', dbUser.schema());

    function DataLayer() {
        mongoose.connect('mongodb://localhost/pleaseExplain');
    }

    DataLayer.prototype.getQuestions = function () {
        var deferred = Q.defer();

        Question.find().exec(function (err, data) {
            deferred.resolve(data);
        });

        return deferred.promise;
    };
    DataLayer.prototype.createQuestion = function (questionModel) {
        var deferred = Q.defer();
        console.log(questionModel);
        var question = new Question(questionModel);

        question.save(function (err, data) {
            deferred.resolve(data);
        });


        return deferred.promise;
    };
    return  new DataLayer();
});




