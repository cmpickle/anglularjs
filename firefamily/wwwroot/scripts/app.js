(function() {
    angular.module('firefamily', ['ngRoute', 'ui.router', 'angular.filter'])
        .config(['$routeProvider', '$stateProvider', function($routeProvider, $stateProvider) {
            $stateProvider
                .state('search', {
                    url: '/home',
                    controller: 'ProductController as productCtrl',
                    template: '/wwwroot/templates/index.html'
                })
                .state('query', {
                    url: '/home?q',
                    controller: 'ProductController as productCtrl',
                    template: '/wwwroot/templates/index.html'
                });

            $routeProvider
                .when('/', {
                    redirectTo: '/home'
                })
                .when('/home', {
                    templateUrl: '/wwwroot/templates/index.html'
                })
                .when('/new-product', {
                    templateUrl: '/wwwroot/templates/new-product.html'
                });
        }]);

    angular.module('firefamily').controller("ProductController", ['$http', '$scope', '$location', '$window', function($http, $scope, $location, $window) {
        let controller = this;
        $scope.search = $location.$$search.search;
        controller.product = {};

        controller.searchFunc = function(newVal) {
            $location.search("search", newVal);
        };

        $http({ method: 'GET', url: 'http://firefamily.dynu.net:8000/product'})
            .then(function(data) {
                controller.products = data.data;
            });


        controller.createProduct = function(product) {
            controller.product = product;
            $http({ method: 'POST', url: 'http://firefamily.dynu.net:8000/product/create', headers: {'Content-Type' : 'text/plain'}, data: controller.product})
                .then(function successCallback(data, status, headers, config) {
                    $scope.message = data;
                }, function errorCallback(data, status, headers, config) {
                    alert("Failed to create product!\n" + JSON.stringify({data: data}));
                });
            $http({ method: 'POST', url: 'http://firefamily.dynu.net:8000/inventory/update/' + product.sku + '/' + product.quantity})
            controller.product = {};
            $window.location.href = '/#!/home';
        }

        controller.increment = function(product) {
            $http({ method: 'POST', url: 'http://firefamily.dynu.net:8000/inventory/increment/' + product.sku, headers: {'Content-Type':'applicatoin/json'}})
                .then(function(data, status, headers, config) {
                    $scope.message = data;
                }, function(data, status, headers, config) {
                    alert("Falied to increment!\n" + JSON.stringify({data:data}));
                });
        }

        controller.decrement = function(product) {
            $http({ method: 'POST', url: 'http://firefamily.dynu.net:8000/inventory/decrement/' + product.sku, headers: {'Content-Type':'application/json'}})
                .then(function(data, status, headers, config) {
                    $scope.message = data;
                }, function(data, status, headers, config) {
                    alert("Falied to increment!\n" + JSON.stringify({data:data}));
                });
        }
    }]);
})()