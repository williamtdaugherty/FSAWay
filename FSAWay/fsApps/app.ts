namespace FsaWayApp {


    angular.module('FsaWayApp', ['ngMaterial', 'ngRoute', 'ngResource']).config(($routeProvider: ng.route.IRouteProvider, $locationProvider: ng.ILocationProvider, $mdThemingProvider) => {

        $mdThemingProvider.theme('default')
            .primaryPalette('teal')
            .dark();



        $routeProvider
            .when('/', {
                templateUrl: '/fsApps/views/index.html',
                controller: FsaWayApp.Controllers.HomeController,
                controllerAs: 'controller'
            })
            .when('/about', {
                templateUrl: '/fsApps/views/about.html',
                controller: FsaWayApp.Controllers.AboutController,
                controllerAs: 'controller'
            })
     
          .when('/useradmin', {
                templateUrl: '/fsApps/views/UserAdmin.html',
                controller: FsaWayApp.Controllers.UserAdminController,
                controllerAs: 'controller'
                   
                  
            })
            .when('/login', {
                templateUrl: '/fsApps/views/login.html',
                controller: FsaWayApp.Controllers.LoginController,
                controllerAs: 'controller'
            })
            .when('/register', {
                templateUrl: '/fsApps/views/register.html',
                controller: FsaWayApp.Controllers.RegisterController,
                controllerAs: 'controller'
            })
            .when('/externalLogin', {
                templateUrl: '/fsApps/views/externalLogin.html',
                controller: FsaWayApp.Controllers.ExternalLoginController,
                controllerAs: 'controller'
            })
            .when('/externalRegister', {
                templateUrl: '/fsApps/views/externalRegister.html',
                controller: FsaWayApp.Controllers.ExternalRegisterController,
                controllerAs: 'controller'
            })
            .otherwise({
                redirectTo: '/fsApps/views/notFound.html'
            });

        $locationProvider.html5Mode(true);
    });

    angular.module('FsaWayApp').factory('authInterceptor', (
        $q: ng.IQService,
        $window: ng.IWindowService,
        $location: ng.ILocationService
    ) =>
        ({
            request: function (config) {
                config.headers = config.headers || {};
                let token = $window.sessionStorage.getItem('token');
                if (token) {
                    config.headers.Authorization = 'Bearer ' + token;
                }
                return config;
            },
            response: function (response) {
                if (response.status === 401) {
                    $location.path('/login');
                }
                return response || $q.when(response);
            }
        })
    );


    angular.module('FsaWayApp').config(function ($httpProvider) {
        $httpProvider.interceptors.push('authInterceptor');
    });

}