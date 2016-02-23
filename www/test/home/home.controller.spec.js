'use strict';

describe('app.home module', function() {

    beforeEach(module('app.home'));

    describe('home controller', function(){

        var controller;
        beforeEach(inject(function($controller){
            controller = $controller('HomeController');
        }));

        it('should have controller', function(){
            expect(controller).toBeDefined();
        });

        it('should increase counter when click',function(){
            controller.clickMe();
            expect(controller.counter).toBe(1);
        });

        it('should setup users',inject(function(_$rootScope_,_$q_,_userService_,$controller){
            var $rootScope = _$rootScope_;
            var mockUsers = ['Patrick'];
            var scope = $rootScope.$new();

            var userService = _userService_;
            var getUserDeferred = _$q_.defer();
            getUserDeferred.resolve(mockUsers);

            spyOn(userService,'getUsers').and.returnValue(getUserDeferred.promise);

            controller = $controller('HomeController',{'userService': userService});
            scope.$digest();

            expect(controller.users.length).toEqual(1);
            expect(controller.users[0]).toEqual(mockUsers[0]);
        }));
    });
});