var fsaWayPageApp;
(function (fsaWayPageApp) {
    angular.module('fsaWayPageApp', ['ngRoute']).config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
            templateUrl: '/fsApps/about.html',
            controller: 'AboutController as vm'
        })
            .when('/', {
            templateUrl: '/fsApps/support.html',
            controller: 'SupportController as vm'
        })
            .when('/', {
            templateUrl: '/fsApps/login.html',
            controller: 'LoginController as vm'
        })
            .when('/', {
            templateUrl: '/fsApps/registration.html',
            controller: 'RegistrationController as vm'
        })
            .when('/', {
            templateUrl: '/fsApps/terms.html',
            controller: 'TermsController as vm'
        })
            .when('/', {
            templateUrl: '/fsApps/products.html',
            controller: 'ProductsController as vm'
        })
            .when('/', {
            templateUrl: '/fsApps/fsacheck.html',
            controller: 'FSAcheckController as vm'
        })
            .when('/', {
            templateUrl: '/fsApps/persbalance.html',
            controller: 'PersbalanceController as vm'
        })
            .otherwise('/');
        $locationProvider.html5Mode(true);
    });
})(fsaWayPageApp || (fsaWayPageApp = {}));
//# sourceMappingURL=app.js.map