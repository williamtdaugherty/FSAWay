var FsaWayApp;
(function (FsaWayApp) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController(healthproductService, $location) {
                this.healthproductService = healthproductService;
                this.$location = $location;
                this.healthproducts = this.healthproductService.listHealthproducts();
                debugger;
            }
            return HomeController;
        })();
        Controllers.HomeController = HomeController;
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