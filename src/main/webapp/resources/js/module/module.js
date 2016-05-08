'use strict';

var myApp = angular.module('myApp', ["ngRoute"]).config(function ($routeProvider) {

    $(".button-collapse").sideNav();

    // ************  Home Page  ******************
    $routeProvider.when('/home',
        {
            templateUrl: './home.html',
            controller: 'homeController'
        });

    // ************  Articles Page  ******************
    $routeProvider.when('/articles',
        {
            templateUrl: './articles.html',
            controller: 'articlesController'
        });

    // ************  Info Page  ******************
    $routeProvider.when('/info',
        {
            templateUrl: './info.html',
            controller: 'infoController'
        });

    // ************  Default Page  ******************
    $routeProvider.otherwise({redirectTo: '/home'});
});




