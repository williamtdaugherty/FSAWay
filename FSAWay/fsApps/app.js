var fsaWayPageApp;
(function (fsaWayPageApp) {
    //Start FSAWay app.ts script//
    //Angular Material Nav//
    var app = angular.module('StarterApp', ['ngMaterial']);
    app.controller('AppCtrl', ['$scope', '$mdSidenav', function ($scope, $mdSidenav) {
            $scope.toggleSidenav = function (menuId) {
                $mdSidenav(menuId).toggle();
            };
        }]);
    //Angular Material Page colors//
    app.config(function ($mdThemingProvider) {
        var customBlueMap = $mdThemingProvider.extendPalette('light-blue', {
            'contrastDefaultColor': 'light',
            'contrastDarkColors': ['50'],
            '50': 'ffffff'
        });
        $mdThemingProvider.definePalette('customBlue', customBlueMap);
        $mdThemingProvider.theme('default')
            .primaryPalette('customBlue', {
            'default': '500',
            'hue-1': '50'
        })
            .accentPalette('pink');
        $mdThemingProvider.theme('input', 'default')
            .primaryPalette('grey');
    });
    //Page routing//
    angular.module('fsaWayPageApp', ['ngRoute']).config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
            templateUrl: '/fsApps/home.html',
            controller: 'IndexController as vm'
        })
            .when('/index', {
            templateUrl: '/fsApps/home.html',
            controller: 'IndexController as vm'
        })
            .when('/about', {
            templateUrl: '/fsApps/about.html',
            controller: 'SupportController as vm'
        })
            .when('/support', {
            templateUrl: '/fsApps/support.html',
            controller: 'SupportController as vm'
        })
            .when('/login', {
            templateUrl: '/fsApps/login.html',
            controller: 'LoginController as vm'
        })
            .when('/registration', {
            templateUrl: '/fsApps/registration.html',
            controller: 'RegistrationController as vm'
        })
            .when('/terms', {
            templateUrl: '/fsApps/terms.html',
            controller: 'TermsController as vm'
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
