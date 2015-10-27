var FsaWayApp;
(function (FsaWayApp) {
    var Controllers;
    (function (Controllers) {
        angular.module('FsaWayApp').controller('HomeController', ['$scope', '$mdSidenav', function ($scope, $mdSidenav) {
                $scope.toggleSidenav = function (menuId) {
                    $mdSidenav(menuId).toggle();
                };
            }]);
        var HomeController = (function () {
            function HomeController(healthproductService, $location) {
                this.healthproductService = healthproductService;
                this.$location = $location;
                this.healthproducts = this.healthproductService.listHealthproducts();
            }
            return HomeController;
        })();
        Controllers.HomeController = HomeController;
        var AboutController = (function () {
            function AboutController() {
            }
            return AboutController;
        })();
        Controllers.AboutController = AboutController;
        var UserAdminController = (function () {
            function UserAdminController(movieService) {
                this.movieService = movieService;
                this.users = this.movieService.listUsers();
            }
            return UserAdminController;
        })();
        Controllers.UserAdminController = UserAdminController;
    })(Controllers = FsaWayApp.Controllers || (FsaWayApp.Controllers = {}));
})(FsaWayApp || (FsaWayApp = {}));
//# sourceMappingURL=controllers.js.map