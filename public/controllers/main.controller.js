app.controller("MainCtrl", function($scope, fizzBuzzApiService){
    $scope.nombre = "Miguel";
    $scope.displayResult = false;
    $scope.displayError = false;

    $scope.callAPIWith = function(param){
        $scope.reset();
        
        fizzBuzzApiService.getFizzBuzzLongList(param).then(function(dataFromSvc) {
            $scope.fizBuzzResponse = dataFromSvc.fizzBuzz;
            $scope.displayResult = true;
        }).catch(function(error) {
            $scope.displayError = true;
            $scope.fizBuzzError = error.data.message;
        });
    }

    $scope.reset = function(){
        $scope.number = "";
        $scope.displayError = false;
        $scope.displayResult = false;
    }
})