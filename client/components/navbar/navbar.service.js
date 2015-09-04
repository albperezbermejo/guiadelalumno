'use strict';

angular.module('fullstackApp')
    .factory('Navbar', 
        function ($q, $http) {

            var url = 'http://www.mocky.io/v2/55e9e5c665ec06f4190125ee?callback=JSON_CALLBACK';
            var deferred = $q.defer();
            
            return {
                get: function() {
                    $http
                        .jsonp(url)
                        .success(function (data) {
                            debugger;
                            deferred.resolve(data);
                        })
                        .error(function (err) {
                            debugger;
                            deferred.reject(err);
                        });
                    return deferred.promise;
                }
            }


            // return $resource(url, 
            //     {
            //         id: '@_id' 
            //     }, {
            //         getItems: {
            //             method: 'JSONP',
            //             params: {}
            //         }
            //     }
            // );
        }
    );
