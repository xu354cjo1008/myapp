'use strict';

angular.module('myApp.project', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/project', {
    templateUrl: '/project/project',
    controller: 'ProjectCtrl'
  });
}])

.controller('ProjectCtrl', function($scope, $http) {
  $http.get('/projects_data').success(function(data) {
    $scope.projects = data;
  });

});
