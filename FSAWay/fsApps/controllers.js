var fsaWayPageApp;
(function (fsaWayPageApp) {
    var Controllers;
    (function (Controllers) {
        angular.module('fsaWayPageApp').controller('HomeController', ['$scope', '$mdSidenav', function ($scope, $mdSidenav) {
                $scope.toggleSidenav = function (menuId) {
                    $mdSidenav(menuId).toggle();
                };
            }]);
        angular.module('fsaWayPageApp').controller('mainController', function ($scope) {
            var users = [
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
        var webAPIURL = 'https://www.mockaroo.com/1feebdf0/download?count=100&key=cbd19840';
        var ProductListController = (function () {
            function ProductListController($http) {
                var _this = this;
                this.$http = $http;
                $http.get(webAPIURL + 'products').success(function (data) {
                    _this.products = data;
                });
            }
            return ProductListController;
        })();
        angular.module('fsaWayPageApp').controller('ProductListController', ProductListController);
        //FSAWay page controllers//
        var HomeController = (function () {
            function HomeController($route) {
                this.$route = $route;
            }
            return HomeController;
        })();
        angular.module('fsaWayPageApp').controller('HomeController', HomeController);
        //class AboutController {
        //    message = 'This is the about page';
        //}
        //angular.module('fsaWayPageApp').controller('AboutController', AboutController);
        //class SupportController {
        //    message = 'This is the support page';
        //}
        //angular.module('fsaWayPageApp').controller('SupportController', SupportController);
        //class LoginController {
        //    message = 'This is the login page';
        //}
        //angular.module('fsaWayPageApp').controller('LoginController', LoginController);
        var RegistrationController = (function () {
            function RegistrationController() {
                this.message = 'This is the registration page';
            }
            return RegistrationController;
        })();
        angular.module('fsaWayPageApp').controller('RegistrationController', RegistrationController);
        var TermsController = (function () {
            function TermsController() {
                this.message = 'This is the terms page';
            }
            return TermsController;
        })();
        angular.module('fsaWayPageApp').controller('TermsController', TermsController);
        var ProductsController = (function () {
            function ProductsController() {
                this.message = 'This is the products page';
            }
            return ProductsController;
        })();
        angular.module('fsaWayPageApp').controller('ProductsController', ProductsController);
        var FSAcheckController = (function () {
            function FSAcheckController() {
                this.message = 'This is the FSAWay check page';
            }
            return FSAcheckController;
        })();
        angular.module('fsaWayPageApp').controller('FSAcheckController', FSAcheckController);
        var PersbalanceController = (function () {
            function PersbalanceController() {
                this.message = 'This is the about page';
            }
            return PersbalanceController;
        })();
        angular.module('fsaWayPageApp').controller('PersbalanceController', PersbalanceController);
    })(Controllers = fsaWayPageApp.Controllers || (fsaWayPageApp.Controllers = {}));
})(fsaWayPageApp || (fsaWayPageApp = {}));
