var FsaWayApp;
(function (FsaWayApp) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController() {
            }
            return HomeController;
        })();
        Controllers.HomeController = HomeController;
        var UserAdminController = (function () {
            function UserAdminController(healthproductService) {
                this.healthproductService = healthproductService;
                this.healthProducts = this.healthproductService.listHealthproducts();
            }
            return UserAdminController;
        })();
        Controllers.UserAdminController = UserAdminController;
        var AddController = (function () {
            function AddController(healthproductService, $location) {
                this.healthproductService = healthproductService;
                this.$location = $location;
            }
            AddController.prototype.save = function () {
                var _this = this;
                this.healthproductService.save(this.healthProductToAdd).then(function () {
                    _this.$location.path('/');
                });
            };
            return AddController;
        })();
        Controllers.AddController = AddController;
        var ProductController = (function () {
            function ProductController(healthproductService, $location) {
                this.healthproductService = healthproductService;
                this.$location = $location;
                this.healthproducts = this.healthproductService.listHealthproducts();
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