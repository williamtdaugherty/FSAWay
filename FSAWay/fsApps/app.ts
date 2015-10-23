namespace FsaWayApp {


    angular.module('FsaWayApp', ['ngMaterial', 'ngRoute', 'ngResource']).config(($routeProvider: ng.route.IRouteProvider, $locationProvider: ng.ILocationProvider, $mdThemingProvider) => {

                $mdThemingProvider.theme('default')
                    .primaryPalette('teal')
                    .dark();




        //Page routing//

        $routeProvider

            .when('/', {
                templateUrl: '/fsApps/Views/index.html',
                controller: 'HomeController as vm'

            })


            .when('/about', {
                templateUrl: '/fsApps/Views/about.html'


            })


            .when('/support', {
                templateUrl: '/fsApps/Views/support.html'


            })


            .when('/registration', {
                templateUrl: '/fsApps/Views/registration.html',
                controller: 'RegistrationController as vm'

            })

            .when('/privacy', {
                templateUrl: '/fsApps/Views/privacy.html',


            })

            .when('/products', {
                templateUrl: '/fsApps/Views/products.html',
                controller: 'ProductsController as vm'

            })

            .when('/admin', {
                templateUrl: '/fsApps/Views/admin.html',
                controller: 'AdminController as vm'

            })

            .otherwise({templateUrl: '/fsApps/Views/notfound.html'});

        $locationProvider.html5Mode(true);

    });

    

}