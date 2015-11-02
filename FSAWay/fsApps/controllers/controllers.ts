namespace FsaWayApp.Controllers {


    export class HomeController {


    }

    //export class AddController {
    //    public healthproductToAdd;

    //    public save() {
    //        this.healthproductService.save(this.healthproductToAdd).then(() => {
    //            this.$location.path('/');
    //        });
             
    //    }

    //    constructor(
    //        private healthproductService: FsaWayApp.Services.HealthproductService,
    //        private $location: angular.ILocationService) { }
    //}



    export class UserAdminController {

        public users;

        constructor(private userService: FsaWayApp.Services.HealthproductService) {
            this.users = this.userService.listUsers();


        }

    }


    export class ProductController {

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

    export class AboutController {

    }

    export class TermController {

    }

    }
