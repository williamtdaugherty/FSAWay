namespace fsaWayPageApp {

 //Start FSAWay app.ts script//

//Angular Material Nav//

    let app = angular.module('fsaWayPageApp', ['ngMaterial']);

    app.controller('AppCtrl', ['$scope', '$mdSidenav', function ($scope, $mdSidenav) {
        $scope.toggleSidenav = function (menuId) {
            $mdSidenav(menuId).toggle();
        };

    }]);


//Page routing//

    angular.module('fsaWayPageApp', ['ngRoute']).config(($routeProvider: ng.route.IRouteProvider, $locationProvider: ng.ILocationProvider) => {


        $routeProvider

            .when('/', {
                templateUrl: '/fsApps/index.html',
                controller: 'IndexController as vm'

            })

            .when('/index', {
                templateUrl: '/fsApps/index.html',
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

}


// email authentication form 

angular.module('dynamicFormApp', [])

    .controller('mainController', function ($scope) {
        let users = [
            {
                name: 'Fred',
                email: ''
            },
            {
                name: 'Priya',
                email: ''
            }
        ];

        $scope.formDataTwo = {};
        $scope.formDataTwo.users = users;

    });