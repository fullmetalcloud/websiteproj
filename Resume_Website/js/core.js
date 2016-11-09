
//client-server initiator/controller
var nameList = angular.module('nameList', []);

function mainController($scope, $http) {

    // when landing on the page, get all names and show them
    $http.get('/namelist')
        .success(function(data) {
            $scope.names = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });
    $http.get('/count')
        .success(function(data) {
            $scope.count = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

/*    // when submitting the add form, send the text to the node API
    $scope.createName = function() {
        var req = {
            "firstName": $scope.name.firstName,
            "lastName": $scope.name.lastName,
            "age": $scope.name.age
        }; 

        $http.post('/namelist', req)
        .success(function(data) {
            $scope.names = data;
            $scope.name = {};
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });
};

    // delete a todo after checking it
    $scope.deleteName = function(id) {
        $http.delete('/namelist/' + id)
            .success(function(data) {
                $scope.names = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };*/

}