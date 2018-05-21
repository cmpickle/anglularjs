(function () {
    angular.module('firefamily', ['ngRoute', 'ui.router', 'angular.filter'])
        .config(['$routeProvider', '$stateProvider', function ($routeProvider, $stateProvider) {
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
                })
                .when('/edit-product/:sku', {
                    templateUrl: '/wwwroot/templates/edit-product.html'
                });
        }]);

    angular.module('firefamily').controller("InventoryController", ['$http', '$route', function ($http, $route) {
        let controller = this;

        let scannerOpt = localStorage.getItem("scannerOpt");
        if (scannerOpt !== null) {
            $("#scannerOpt").val(scannerOpt);
        } else {
            scannerOpt = $("#scannerOpt").val();
        }
        $("#scannerOpt").on("change", function () {
            scannerOpt = $(this).val();
            localStorage.setItem("scannerOpt", scannerOpt);
            $("#sku").focus();
        });

        controller.scan = function (sku) {
            if (scannerOpt === "increment") {
                $http({ method: 'POST', url: 'http://10.0.0.200:8000/inventory/increment/' + sku })
                    .then(function(data) {
                        controller.message = data;
                    }, function(data) {
                        alert("Failed to increment sku: " + sku + "\n" + JSON.stringify({data: data}));
                    });
            } else {
                $http({ method: 'POST', url: 'http://10.0.0.200:8000/inventory/decrement/' + sku })
                    .then(function(data) {
                        controller.message = data;
                    }, function(data) {
                        alert("Failed to decrement sku: " + sku + "\n" + JSON.stringify({data: data}));
                    });
            }
            $("#sku").val('');
            $route.reload();
            $("#sku").focus();
        };
        $("#sku").focus();
    }]);

    angular.module('firefamily').controller("ProductController", ['$http', '$scope', '$location', '$window', '$routeParams', '$route', function ($http, $scope, $location, $window, $routeParams, $route) {
        let controller = this;
        $scope.search = $location.$$search.search;
        controller.product = {};

        controller.setProduct = function (sku) {
            $http({ method: 'GET', url: 'http://10.0.0.200:8000/product/' + sku })
                .then(function (data) {
                    controller.product = data.data[0];
                }, function (data) {
                    alert("Failed to retrieve product SKU = " + sku + "\n" + JSON.stringify({data: data}));
                });
        };

        if ($routeParams.sku) {
            controller.setProduct($routeParams.sku);
        }

        controller.getProduct = function () {
            let test = controller.product;
            return test;
        };

        controller.searchFunc = function (newVal) {
            $location.search("search", newVal);
        };

        controller.loadEdit = function (product) {
            controller.product = product;
            $window.location.href = '/#!/edit-product/' + product.sku;
        };

        $http({ method: 'GET', url: 'http://10.0.0.200:8000/product' })
            .then(function (data) {
                controller.products = data.data;
            });

        controller.createProduct = function (product) {
            controller.product = product;
            $http({ method: 'POST', url: 'http://10.0.0.200:8000/product/create', headers: { 'Content-Type': 'text/plain' }, data: controller.product })
                .then(function successCallback(data, status, headers, config) {
                    $scope.message = data;
                }, function errorCallback(data, status, headers, config) {
                    alert("Failed to create product!\n" + JSON.stringify({ data: data }));
                });
            $http({ method: 'POST', url: 'http://10.0.0.200:8000/inventory/update/' + product.sku + '/' + product.quantity })
            controller.product = {};
            $window.location.href = '/#!/home';
        }

        controller.edit = function (product) {
            controller.product = product;
            $http({ method: 'POST', url: 'http://10.0.0.200:8000/product/update/' + product.sku, headers: { 'Content-Type': 'text/plain' }, data: controller.product })
                .then(function successCallback(data, status, headers, config) {
                    $scope.message = data;
                }, function errorCallback(data, status, headers, config) {
                    alert("Failed to edit product!\n" + JSON.stringify({ data: data }));
                });
            $http({ method: 'POST', url: 'http://10.0.0.200:8000/inventory/update/' + product.sku + '/' + product.quantity })
            controller.product = {};
            $window.location.href = '/#!/home';
        }

        controller.increment = function (product) {
            $http({ method: 'POST', url: 'http://10.0.0.200:8000/inventory/increment/' + product.sku, headers: { 'Content-Type': 'applicatoin/json' } })
                .then(function (data, status, headers, config) {
                    $scope.message = data;
                }, function (data, status, headers, config) {
                    alert("Falied to increment!\n" + JSON.stringify({ data: data }));
                });
            $route.reload();
        }

        controller.decrement = function (product) {
            $http({ method: 'POST', url: 'http://10.0.0.200:8000/inventory/decrement/' + product.sku, headers: { 'Content-Type': 'application/json' } })
                .then(function (data, status, headers, config) {
                    $scope.message = data;
                }, function (data, status, headers, config) {
                    alert("Falied to increment!\n" + JSON.stringify({ data: data }));
                });
            $route.reload()
        }

        controller.delete = function (product) {
            $http({ method: 'POST', url: 'http://10.0.0.200:8000/product/delete/' + product.sku })
                .then(function (data, status, headers, config) {
                    $scope.message = data;
                }, function (data, status, headers, config) {
                    alert("Failed to delete product!\n" + JSON.stringify({ data: data }));
                });
        }
    }]);
})()