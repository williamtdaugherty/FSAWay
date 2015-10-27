namespace FsaWayApp.Controllers {




    angular.module('FsaWayApp').controller('HomeController', ['$scope', '$mdSidenav', function ($scope, $mdSidenav) {
        $scope.toggleSidenav = function (menuId) {
            $mdSidenav(menuId).toggle();
        };

    }]);



   

    export class HomeController {
        public healthproducts;

        constructor
            (
            private healthproductService: FsaWayApp.Services.HealthproductService,
            private $location: angular.ILocationService
            ) {
            this.healthproducts = this.healthproductService.listHealthproducts();
        }
    }


    export class AboutController {






    }
    export class UserAdminController {

        public users;

        constructor(private movieService: FsaWayApp.Services.HealthproductService) {
            this.users = this.movieService.listUsers();


        }


    }
}