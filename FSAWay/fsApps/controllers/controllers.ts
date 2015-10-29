namespace FsaWayApp.Controllers {


    export class HomeController {
        public healthproducts;

        constructor
            (
            private healthproductService: FsaWayApp.Services.HealthproductService,
            private $location: angular.ILocationService
            ) {
            this.healthproducts = this.healthproductService.listHealthproducts();
            debugger;
        }
        

    }


    export class ProductController {

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