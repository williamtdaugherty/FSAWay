namespace fsaWayPageApp {

    angular.module('fsaWayPageApp', ['ngRoute']).config(($routeProvider: ng.route.IRouteProvider, $locationProvider: ng.ILocationProvider) => {
        

            $routeProvider
                .when('/index', {
                    templateUrl: '/fsApps/index.cshtml',
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
                .otherwise('/');

            $locationProvider.html5Mode(true);

        });

}