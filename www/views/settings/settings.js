angular.module('starter.controllers')
.controller('SettingsCtrl', function($scope, Settings, Locations){

    $scope.settings = Settings;
    $scope.locations = Locations;
    $scope.canDelete = false;

    $scope.remove = function(index) {
        Locations.toggle(Locations.data[index]);
    };

});