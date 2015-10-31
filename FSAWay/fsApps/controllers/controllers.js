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
        var AddController = (function () {
            function AddController(healthproductService, $location) {
                this.healthproductService = healthproductService;
                this.$location = $location;
            }
            AddController.prototype.save = function () {
                var _this = this;
                this.healthproductService.save(this.healthproductToAdd).then(function () {
                    _this.$location.path('/');
                });
            };
            return AddController;
        })();
        Controllers.AddController = AddController;
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
