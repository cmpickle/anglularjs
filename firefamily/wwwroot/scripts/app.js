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

    angular.module('firefamily').controller("ProductController", ['$http', '$scope', '$location', '$state', '$stateParams', function($http, $scope, $location, $state, $stateParams) {
        let controller = this;
        $scope.search = $location.$$search.search;

        controller.searchFunc = function(newVal) {
            $location.search("search", newVal);
        };

        $http({ method: 'GET', url: 'http://firefamily.dynu.net:8000/product'})
            .then(function(data) {
                controller.products = data.data;
            });
    }]);
})()