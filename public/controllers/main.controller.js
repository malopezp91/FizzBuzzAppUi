app.controller("MainCtrl", function($scope, fizzBuzzApiService){
    $scope.nombre = "Miguel";

    $scope.testing = function(){
        fizzBuzzApiService.getFizzBuzzLongList(5).then(function(dataFromSvc) {
            $scope.values = dataFromSvc;
        });
    }
})