app.service('fizzBuzzApiService', ['$http', '$q', function($http, $q){
    this.getFizzBuzzLongList = function(numberParam){
        var data = {
            number: [numberParam]
        }
        console.log(data);

        return $http.post("http://localhost:4567/fizzbuzz/long", data).then(function(response){
            console.log(response.data);
            return response.data;
        })
        // $http.post("https://boiling-sands-95787.herokuapp.com/fizzbuzz/long", data).then(function (response) {
        //     console.log(response.data);
        //     return response.data;
        // });
    }
}])