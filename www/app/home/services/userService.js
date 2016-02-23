(function () {

    'use strict';
    angular
        .module('app.home')
        .factory('userService',  AuthService);

    AuthService.$inject = ['$http', '$q', '$timeout'];
            
    function AuthService($http, $q, $timeout) {

		var fakeUsers = ['Fangming Du', 'Patrick', 'Binod'];
		
		var service = {
			getUsers: getUsers
        };
        
        return service;
		
		function getUsers () {
			var deferred = $q.defer();
			$timeout(function(){
				deferred.resolve(fakeUsers);
			},100);
			return deferred.promise;
		}
    }
})();