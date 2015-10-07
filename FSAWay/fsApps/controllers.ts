namespace fsaWayPageApp.Controllers {



    class IndexController {
        constructor(
            public $route: ng.route.IRouteService
        ) { }
    }


    class AboutController {
        message = 'This is the about page';

    }

    angular.module('fsaWayPageApp').controller('AboutController', AboutController);

    class SupportController {
        message = 'This is the support page';

    }

    angular.module('fsaWayPageApp').controller('SupportController', SupportController);


    class LoginController {
        message = 'This is the login page';

    }

    angular.module('fsaWayPageApp').controller('LoginController', LoginController);

    class RegistrationController {
        message = 'This is the registration page';

    }

    angular.module('fsaWayPageApp').controller('RegistrationController', RegistrationController);

    class TermsController {
        message = 'This is the terms page';

    }

    angular.module('fsaWayPageApp').controller('TermsController', TermsController);


    class ProductsController {
        message = 'This is the products page';

    }

    angular.module('fsaWayPageApp').controller('ProductsController', ProductsController);


    class FSAcheckController {
        message = 'This is the FSAWay check page';

    }

    angular.module('fsaWayPageApp').controller('FSAcheckController', FSAcheckController);

    class PersbalanceController {
        message = 'This is the about page';

    }

    angular.module('fsaWayPageApp').controller('PersbalanceController', PersbalanceController);

}