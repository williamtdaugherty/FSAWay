var fsaWayPageApp;
(function (fsaWayPageApp) {
    var Controllers;
    (function (Controllers) {
        //let request = new XMLHttpRequest();
        //request.open('GET', 'https://www.mockaroo.com/1feebdf0/download?count=100&key=cbd19840');
        //request.addEventListener('load', function (e) {
        //    let productlist = JSON.parse(request.responseText);
        //    console.dir(productlist);
        //});
        //request.send();
        //Ajax Mockaroo DB//
        var webAPIURL = 'https://www.mockaroo.com/1feebdf0/download?count=100&key=cbd19840';
        var ProductListController = (function () {
            function ProductListController($http) {
                var _this = this;
                this.$http = $http;
                $http.get(webAPIURL + 'products').success(function (data) {
                    _this.products = data;
                });
            }
            return ProductListController;
        })();
        angular.module('fsaWayPageApp').controller('ProductListController', ProductListController);
    })(Controllers = fsaWayPageApp.Controllers || (fsaWayPageApp.Controllers = {}));
})(fsaWayPageApp || (fsaWayPageApp = {}));
//FSAWay page controllers//
var IndexController = (function () {
    function IndexController($route) {
        this.$route = $route;
    }
    return IndexController;
})();
angular.module('fsaWayPageApp').controller('IndexController', IndexController);
var AboutController = (function () {
    function AboutController() {
        this.message = 'This is the about page';
    }
    return AboutController;
})();
angular.module('fsaWayPageApp').controller('AboutController', AboutController);
var SupportController = (function () {
    function SupportController() {
        this.message = 'This is the support page';
    }
    return SupportController;
})();
angular.module('fsaWayPageApp').controller('SupportController', SupportController);
var LoginController = (function () {
    function LoginController() {
        this.message = 'This is the login page';
    }
    return LoginController;
})();
angular.module('fsaWayPageApp').controller('LoginController', LoginController);
var RegistrationController = (function () {
    function RegistrationController() {
        this.message = 'This is the registration page';
    }
    return RegistrationController;
})();
angular.module('fsaWayPageApp').controller('RegistrationController', RegistrationController);
var TermsController = (function () {
    function TermsController() {
        this.message = 'This is the terms page';
    }
    return TermsController;
})();
angular.module('fsaWayPageApp').controller('TermsController', TermsController);
var ProductsController = (function () {
    function ProductsController() {
        this.message = 'This is the products page';
    }
    return ProductsController;
})();
angular.module('fsaWayPageApp').controller('ProductsController', ProductsController);
var FSAcheckController = (function () {
    function FSAcheckController() {
        this.message = 'This is the FSAWay check page';
    }
    return FSAcheckController;
})();
angular.module('fsaWayPageApp').controller('FSAcheckController', FSAcheckController);
var PersbalanceController = (function () {
    function PersbalanceController() {
        this.message = 'This is the about page';
    }
    return PersbalanceController;
})();
angular.module('fsaWayPageApp').controller('PersbalanceController', PersbalanceController);
//# sourceMappingURL=controllers.js.map