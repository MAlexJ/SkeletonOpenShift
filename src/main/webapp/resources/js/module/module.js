'use strict';

var myApp = angular.module('myApp', ["ngRoute"]).config(function ($routeProvider) {

    // ************  Home Page  ******************
    $routeProvider.when('/home',
        {
            templateUrl: './home.html',
            controller: 'homeController'
        });

    // ************  Default Page  ******************
    $routeProvider.otherwise({redirectTo: '/home'});
});




