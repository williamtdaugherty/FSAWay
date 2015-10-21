var fsaWayPageApp;
(function (fsaWayPageApp) {
    angular.module('fsaWayPageApp', ['ngMaterial', 'ngRoute', 'ngResource']).config(function ($routeProvider, $locationProvider) {
        //Page routing//
        $routeProvider
            .when('/', {
            templateUrl: '/fsApps/index.html',
            controller: 'HomeController as vm'
        })
            .when('/about', {
            templateUrl: '/fsApps/about.html',
        })
            .when('/support', {
            templateUrl: '/fsApps/support.html',
        })
            .when('/signup', {
            templateUrl: '/fsApps/signup.html',
        })
            .when('/registration', {
            templateUrl: '/fsApps/registration.html',
            controller: 'RegistrationController as vm'
        })
            .when('/terms', {
            templateUrl: '/fsApps/terms.html',
        })
            .when('/products', {
            templateUrl: '/fsApps/products.html',
            controller: 'ProductsController as vm'
        })
            .when('/fsacheck', {
            templateUrl: '/fsApps/fsacheck.html',
            controller: 'FSAcheckController as vm'
        })
            .when('/persbalance', {
            templateUrl: '/fsApps/persbalance.html',
            controller: 'PersbalanceController as vm'
        })
            .otherwise('/fsApps/notfound.html');
        $locationProvider.html5Mode(true);
    });
})(fsaWayPageApp || (fsaWayPageApp = {}));
