// Declare app level module which depends on filters, and services
angular.module('PleaseExplain', [
    'ngRoute',
    'PleaseExplain.filters',
    'PleaseExplain.config',
    'PleaseExplain.services',
    'PleaseExplain.directives',
    'PleaseExplain.controllers'
]).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/questions', {templateUrl: 'partials/questions.html', controller: 'QuestionsCtrl'});
        $routeProvider.when('/question', {templateUrl: 'partials/question.html', controller: 'QuestionCtrl'});
        $routeProvider.otherwise({redirectTo: '/questions'});
    }]);