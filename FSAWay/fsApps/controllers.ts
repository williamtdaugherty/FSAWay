namespace FsaWayApp.Controllers {



    angular.module('FsaWayApp').controller('HomeController', ['$scope', '$mdSidenav', function ($scope, $mdSidenav) {
        $scope.toggleSidenav = function (menuId) {
            $mdSidenav(menuId).toggle();
        };

    }]);

    angular.module('FsaWayApp').controller('mainController', function ($scope) {
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




    //let request = new XMLHttpRequest();

    //request.open('GET', 'https://www.mockaroo.com/1feebdf0/download?count=100&key=cbd19840');

    //request.addEventListener('load', function (e) {
    //    let productlist = JSON.parse(request.responseText);
    //    console.dir(productlist);

    //});

    //request.send();


    //Ajax Mockaroo DB//

    const webAPIURL = 'https://www.mockaroo.com/1feebdf0/download?count=100&key=cbd19840';

    class ProductListController {

        public products;

        constructor(private $http: ng.IHttpService) {
            $http.get(webAPIURL + 'products').success((data) => {
                this.products = data;
            });

        }
    }


    angular.module('FsaWayApp').controller
        ('ProductListController', ProductListController);


    //FSAWay page controllers//

    class HomeController {
        constructor(
            public $route: ng.route.IRouteService
        ) { }
    }
    angular.module('FsaWayApp').controller('HomeController', HomeController);

    //class AboutController {
    //    message = 'This is the about page';

    //}

    //angular.module('FsaWayApp').controller('AboutController', AboutController);

    //class SupportController {
    //    message = 'This is the support page';

    //}

    //angular.module('FsaWayApp').controller('SupportController', SupportController);


    //class LoginController {
    //    message = 'This is the login page';

    //}

    //angular.module('FsaWayApp').controller('LoginController', LoginController);

    class RegistrationController {
        message = 'This is the registration page';

    }

    angular.module('FsaWayApp').controller('RegistrationController', RegistrationController);

    class TermsController {
        message = 'This is the terms page';

    }

    angular.module('FsaWayApp').controller('TermsController', TermsController);


    class ProductsController {
        message = 'This is the products page';

    }

    angular.module('FsaWayApp').controller('ProductsController', ProductsController);


    class FSAcheckController {
        message = 'This is the FSAWay check page';

    }

    angular.module('FsaWayApp').controller('FSAcheckController', FSAcheckController);

    class PersbalanceController {
        message = 'This is the about page';

    }

    angular.module('FsaWayApp').controller('PersbalanceController', PersbalanceController);

}
