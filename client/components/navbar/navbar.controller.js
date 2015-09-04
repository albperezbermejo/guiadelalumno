'use strict';

angular.module('fullstackApp')
    .controller('NavbarCtrl', function ($scope, $location, Auth) {
        $scope.menu = [
            {
                'title': 'Android',
                'link': '/android'
            },
            {
                'title': 'iOS',
                'link': '/ios'
            },
            {
                'title': 'HTML5',
                'link': '/html5'
            },
            {
                'title': 'Marketing',
                'link': '/marketing'
            }
        ];
    });