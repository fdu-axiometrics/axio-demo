(function () {
    'use strict';

    angular
        .module('app.home')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['userService'];
    /* @ngInject */
    function HomeController(userService) {
        var vm = this;       
        vm.title = 'Home';
        vm.users = [];
        vm.counter = 0;
        setupUsers();

        vm.clickMe = function () {
            vm.counter ++;
        };

        function setupUsers () {
            userService.getUsers()
                .then(function(users){
                   vm.users = users;
                });
        }

    }
})();
