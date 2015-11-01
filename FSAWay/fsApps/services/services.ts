namespace FsaWayApp.Services {


    export class HealthproductService {

        private HealthproductResource;

        private UserResource;

        public listHealthproducts() {
            return this.HealthproductResource.query();
        }

        public listUsers() {
            return this.UserResource.query();
        }

        constructor($resource: angular.resource.IResourceService) {
            this.HealthproductResource = $resource('/api/healthproducts/:id');
            this.UserResource = $resource('/api/users/:id');

        }
    }

    angular.module('FsaWayApp').service('healthproductService', HealthproductService);

}