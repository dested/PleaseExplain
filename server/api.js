define('api', ['dataLayer'], function (dataLayer) {

    function API() {
    }
    API.prototype.getQuestions = function () {
        var deferred = Q.defer();

        dataLayer.getQuestions().then(function(data){
            deferred.resolve(data.map(function(dbQuestion){
                return QuestionInListModel.populateFromDb(dbQuestion);
            }));
        });
        return deferred.promise;

    };
    API.prototype.createQuestion = function (questionModel) {
        var deferred = Q.defer();
        dataLayer.createQuestion(questionModel).then(function(){
            deferred.resolve();
        });
        return deferred.promise;
    };
    return  new API();
});
