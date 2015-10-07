var fsaWayPageApp;
(function (fsaWayPageApp) {
    var MainController = (function () {
        function MainController($route) {
            this.$route = $route;
        }
        return MainController;
    })();
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
})(fsaWayPageApp || (fsaWayPageApp = {}));
//# sourceMappingURL=controllers.js.map