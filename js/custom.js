var vlocityApp = angular.module('vlocityApp', ['ngAnimate', 'ui.bootstrap']);

vlocityApp.controller('vlocityAppCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.peopleLists = [];
    $scope.selectedUserData = [];
    $scope.searchUser = "";
    $http({
        method: 'GET',
        url: 'people_(5).json'
    }).then(function(response) {
        $scope.peopleLists = response.data.People;
        console.log($scope.peopleLists);
        $scope.selectedUserData = $scope.peopleLists[0];
    }, function(error) {
        console.log(status);
        console.log("Error occured")
    });


    $scope.selectedIndex = 0;
    $scope.getSelectedData = function(index, data) {
        $scope.selectedIndex = index;
        $scope.selectedUserData = data;
        console.log(data);
    };
    $scope.clearSearch = function() {
        $scope.searchUser = "";
    }
    $scope.rate = 3;
    $scope.max = 5;

    $scope.hoveringOver = function(value) {
        $scope.overStar = value;
        $scope.percent = 100 * (value / $scope.max);
    };

    $scope.ratingStates = [
        { stateOn: 'glyphicon-ok-sign', stateOff: 'glyphicon-ok-circle' },
        { stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty' },
        { stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle' },
        { stateOn: 'glyphicon-heart' },
        { stateOff: 'glyphicon-off' }
    ];

}]);