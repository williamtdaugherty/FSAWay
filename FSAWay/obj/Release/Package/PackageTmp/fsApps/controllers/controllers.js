var FsaWayApp;
(function (FsaWayApp) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController(healthproductService, $location) {
                this.healthproductService = healthproductService;
                this.$location = $location;
                this.healthproducts = this.healthproductService.listHealthproducts();
            }
            return HomeController;
        })();
        Controllers.HomeController = HomeController;
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
        var UserAdminController = (function () {
            function UserAdminController(userService) {
                this.userService = userService;
                this.users = this.userService.listUsers();
            }
            return UserAdminController;
        })();
        Controllers.UserAdminController = UserAdminController;
        var ProductController = (function () {
            function ProductController() {
            }
            return ProductController;
        })();
        Controllers.ProductController = ProductController;
        var AboutController = (function () {
            function AboutController() {
            }
            return AboutController;
        })();
        Controllers.AboutController = AboutController;
        var TermController = (function () {
            function TermController() {
            }
            return TermController;
        })();
        Controllers.TermController = TermController;
    })(Controllers = FsaWayApp.Controllers || (FsaWayApp.Controllers = {}));
})(FsaWayApp || (FsaWayApp = {}));
//# sourceMappingURL=controllers.js.map