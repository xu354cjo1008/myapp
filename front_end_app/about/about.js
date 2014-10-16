'use strict';

angular.module('myApp.about', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/about', {
    templateUrl: '/about/about',
    controller: 'AboutCtrl'
  });
}])

.controller('AboutCtrl', function($scope) {

});