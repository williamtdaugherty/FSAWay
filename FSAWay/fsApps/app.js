var FsaWayApp;
(function (FsaWayApp) {
    angular.module('FsaWayApp', ['ngRoute', 'ngResource']).config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
            templateUrl: '/fsApps/views/home.html',
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
            .when('/products', {
            templateUrl: '/fsApps/views/products.html',
            controller: FsaWayApp.Controllers.ProductController,
            controllerAs: 'controller'
        })
            .when('/terms', {
            templateUrl: '/fsApps/views/terms.html',
            controller: FsaWayApp.Controllers.TermController,
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
            .when('/confirmEmail', {
            templateUrl: '/ngApp/views/confirmEmail.html',
            controller: FsaWayApp.Controllers.ConfirmEmailController,
            controllerAs: 'controller'
        })
            .otherwise({
            redirectTo: '/fsApps/views/notFound.html'
        });
        $locationProvider.html5Mode(true);
    });
    angular.module('FsaWayApp').factory('authInterceptor', function ($q, $window, $location) {
        return ({
            request: function (config) {
                config.headers = config.headers || {};
                var token = $window.sessionStorage.getItem('token');
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
        });
    });
    angular.module('FsaWayApp').config(function ($httpProvider) {
        $httpProvider.interceptors.push('authInterceptor');
    });
})(FsaWayApp || (FsaWayApp = {}));
//# sourceMappingURL=app.js.map