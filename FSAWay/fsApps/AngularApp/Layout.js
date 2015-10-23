(function () {
    angular
        .module('layout', [])
        .controller('LayoutController', [LayoutController]);
    function LayoutController() {
        var self = this;
        self.title = 'FSAWay Future Page';
        self.sectionTitle = 'Section #1';
        self.sectionBody = 'This is a simple section.';
    }
})();
//# sourceMappingURL=Layout.js.map