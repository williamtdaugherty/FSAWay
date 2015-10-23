var FsaWayApp;
(function (FsaWayApp) {
    var Controllers;
    (function (Controllers) {
        angular.module('FsaWayApp').controller('HomeController', ['$scope', '$mdSidenav', function ($scope, $mdSidenav) {
                $scope.toggleSidenav = function (menuId) {
                    $mdSidenav(menuId).toggle();
                };
            }]);
        //angular.module('FsaWayApp').controller('mainController', function ($scope) {
        //    let users = [
        //        {
        //            name: 'Fred',
        //            email: ''
        //        },
        //        {
        //            name: 'Priya',
        //            email: ''
        //        }
        //    ];
        //    $scope.formDataTwo = {};
        //    $scope.formDataTwo.users = users;
        //});
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
        angular.module('FsaWayApp').controller('ProductListController', ProductListController);
        //FSAWay page controllers//
        var HomeController = (function () {
            function HomeController($route) {
                this.$route = $route;
            }
            return HomeController;
        })();
        angular.module('FsaWayApp').controller('HomeController', HomeController);
        var RegistrationController = (function () {
            function RegistrationController() {
                this.message = 'This is the registration page';
            }
            return RegistrationController;
        })();
        angular.module('FsaWayApp').controller('RegistrationController', RegistrationController);
        var PrivacyController = (function () {
            function PrivacyController() {
                this.message = 'This is the privacy page';
            }
            return PrivacyController;
        })();
        angular.module('FsaWayApp').controller('PrivacyController', PrivacyController);
        var ProductsController = (function () {
            function ProductsController() {
                this.message = 'This is the products page';
            }
            return ProductsController;
        })();
        angular.module('FsaWayApp').controller('ProductsController', ProductsController);
        var AdminController = (function () {
            function AdminController() {
                this.message = 'This is the Admin backend page';
            }
            return AdminController;
        })();
        angular.module('FsaWayApp').controller('AdminController', AdminController);
    })(Controllers = FsaWayApp.Controllers || (FsaWayApp.Controllers = {}));
})(FsaWayApp || (FsaWayApp = {}));
//# sourceMappingURL=controllers.js.map