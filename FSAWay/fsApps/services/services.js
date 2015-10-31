var FsaWayApp;
(function (FsaWayApp) {
    var Services;
    (function (Services) {
        var HealthproductService = (function () {
            function HealthproductService($resource) {
                this.HealthproductResource = $resource('/api/healthproducts/:id');
                this.UserResource = $resource('/api/users/:id');
            }
            HealthproductService.prototype.listHealthproducts = function () {
                return this.HealthproductResource.query();
            };
            HealthproductService.prototype.listUsers = function () {
                return this.UserResource.query();
            };
            return HealthproductService;
        })();
        Services.HealthproductService = HealthproductService;
        angular.module('FsaWayApp').service('healthproductService', HealthproductService);
    })(Services = FsaWayApp.Services || (FsaWayApp.Services = {}));
})(FsaWayApp || (FsaWayApp = {}));
