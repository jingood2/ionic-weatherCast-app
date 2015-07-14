angular.module('starter.controllers')
.controller('MenusCtrl', function($scope, $ionicModal, $timeout, Locations){

      $scope.locations = Locations.data;


});