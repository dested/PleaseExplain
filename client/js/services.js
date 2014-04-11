angular.module('PleaseExplain.services', [])
    .service('questionListService',
    ['$q', '$http', 'communicationConfig',
        function ($q, $http, communicationConfig) {
            this.getQuestionList = function () {
                var deferred = $q.defer();


                $http({method: 'GET', url: communicationConfig.httpServer + 'questions'}).
                    success(function (data, status, headers, config) {
                        deferred.resolve(data);
                    }).
                    error(function (data, status, headers, config) {
                    });

                return deferred.promise;
            };
            this.createQuestion = function (questionModel) {
                var deferred = $q.defer();
                $http({method: 'post', url: communicationConfig.httpServer + 'createQuestion', data: questionModel}).
                    success(function (data, status, headers, config) {
                        deferred.resolve(data);
                    }).
                    error(function (data, status, headers, config) {
                    });

                return deferred.promise;
            };
        }
    ]
);

