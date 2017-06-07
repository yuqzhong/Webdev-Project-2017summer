(function () {
    angular
        .module('WAM')
        .controller('testController', testController);

    function testController(testService) {

        var model = this;

        model.countBmi = countBmi;

        function countBmi() {
            console.log("hey!");
            testService
                .countBmi()
                // .then()
        }

    }

})();