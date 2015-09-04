'use strict';

angular
    .module('fullstackApp')
    .controller('NavbarCtrl', 
        function (
            $scope, 
            $location, 
            Auth,
            Navbar
        ) {
            
        var promise = Navbar.get();

        promise.then(function (response) {
            $scope.menu = response;
        });

        // $scope.menu = [
        //     {
        //         'title': 'Android',
        //         'link': '/android'
        //     },
        //     {
        //         'title': 'iOS',
        //         'link': '/ios'
        //     },
        //     {
        //         'title': 'HTML5',
        //         'link': '/html5'
        //     },
        //     {
        //         'title': 'Marketing',
        //         'link': '/marketing'
        //     }
        // ];
    });