namespace FsaWayApp.Controllers {


    export class HomeController {


    }


    export class UserAdminController {

        public healthProducts;

        constructor(private healthproductService: FsaWayApp.Services.HealthproductService) {
            this.healthProducts = this.healthproductService.listHealthproducts();


        }

    }

    export class AddController {
        public healthProductToAdd;

        public save() {
            this.healthproductService.save(this.healthProductToAdd).then(() => {
                this.$location.path('/');
            });
        }

        constructor(
            private healthproductService: FsaWayApp.Services.HealthproductService,
            private $location: angular.ILocationService
        ) { }

    }






    export class ProductController {

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

    export class TermController {

   

    }

    }
