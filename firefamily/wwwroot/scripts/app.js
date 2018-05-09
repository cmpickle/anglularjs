(function() {
    angular.module('firefamily', ['ngRoute', 'angular.filter'])
        .config(['$routeProvider', function($routeProvider) {
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

    angular.module('firefamily').controller("ProductController", ['$http', function($http) {
        let controller = this;

        $http({ method: 'GET', url: 'http://firefamily.dynu.net:8000/product'})
            .then(function(data) {
                controller.products = data.data;
            });
    }]);
})()