angular.module('PleaseExplain.controllers', [])
    .controller('QuestionsCtrl', ['$scope', 'questionListService', function ($scope, questionListService) {
        $scope.model = {};
        $scope.callback = {};
        $scope.model.questions = [];

        $scope.callback.refreshQuestions = function () {
            questionListService.getQuestionList().then(function (questions) {
                $scope.model.questions = questions.map(function (question) {
                    return new QuestionInListViewModel(question);
                });
            });
        };

        $scope.callback.createQuestion = function () {
            var question = new QuestionModel();
            question.text = 'shoes';
            question.votes = 12;
            questionListService.createQuestion(question).then(function () {
                $scope.callback.refreshQuestions();
            });

        };
       $scope.callback.refreshQuestions();
    }])
    .controller('QuestionCtrl', [function () {

    }]);
