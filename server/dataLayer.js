define('dataLayer', [], function () {

    var inspect = require('util').inspect;
    var Client = require('mariasql');
    var client;


    function DataLayer() {

        client = new Client();
        client.connect({
            host: '127.0.0.1',
            user: 'root',
            password: 'FuckYou1!',
            db: 'please_explain'
        });


        client.on('connect', function() {
                console.log('Client connected');
            })
            .on('error', function(err) {
                console.log('Client error: ' + err);
            })
            .on('close', function(hadError) {
                console.log('Client closed');
            });

    }

    DataLayer.prototype.close = function () {
        client.end();
    };

    DataLayer.prototype.getQuestions = function(questionFilterModel) {
        var deferred = Q.defer();
        var dbQuestions = [];

        client.query('SELECT Question.*, count(Answer.QuestionId) as AnswerCount FROM Question left JOIN Answer on (Question.QuestionId = Answer.QuestionId) group by question.questionid')
            .on('result', function(res) {

                res.on('row', function (row) {
                        console.log(inspect(row));
                        dbQuestions.push(row);
                    })
                    .on('error', function(err) {
                        console.log('Result error: ' + inspect(err));
                    })
                    .on('end', function(info) {
                    });
            })
            .on('end', function() {
                deferred.resolve(dbQuestions);
            });

        return deferred.promise;
    };

    DataLayer.prototype.getAnswersForQuestion = function (questionFilterModel) {
        var deferred = Q.defer();
        var dbQuestions = [];

        var questionIds = dbQuestions.map(function (a) { return a.questionId; }).join(',');
        console.log(questionIds);
        var answers = {};
        client.query('SELECT * FROM Answer where QuestionId in (' + questionIds + ')')
                .on('result', function (res) {

                    res.on('row', function (row) {
                        if (!answers[row.QuestionId]) {
                            answers[row.QuestionId] = [];
                        }
                        answers[row.QuestionId].push(row.AnswerText);
                        console.log(answers[row.QuestionId]);
                        console.log('Result row: ' + inspect(row));
                    })
                        .on('error', function (err) {
                            console.log('Result error: ' + inspect(err));
                        })
                        .on('end', function (info) {
                            console.log('Result finished successfully');
                        });
                })
                .on('end', function () {

                    for (var i = 0; i < dbQuestions.length; i++) {
                        var dbQuestion = dbQuestions[i];
                        dbQuestion.answers = answers[dbQuestion.questionId] || [];
                        console.log(answers[dbQuestion.questionId]);
                    }

                    console.log('Done with all answers');
                    deferred.resolve(dbQuestions);
                });


        return deferred.promise;
    };

    DataLayer.prototype.getPotentialTags = function (potentialTag) {
        var deferred = Q.defer();
       
        return deferred.promise;
    };
    DataLayer.prototype.askQuestion = function (askQuestionModel) {
        var deferred = Q.defer();
       
        return deferred.promise;
    };
    DataLayer.prototype.getQuestion = function (questionId) {
        var deferred = Q.defer();
         
        return deferred.promise;
    };

    return new DataLayer();
});




