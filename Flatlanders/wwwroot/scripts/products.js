(function() {
    angular.module('store-products', []);

    angular.module('store-products').controller("ProductController", function($http, $routeParams) {
        let product = this;

        $http({method:'GET', url: '/product/' + $routeParams.productId})
        .success(function(data) {
            controller.product = data;
        })
    });

    angular.module('store-products').controller("ReviewController", function() {
        this.review = {};

        this.addReview = function(product) {
            this.review.createdOn = Date.now();
            product.reviews.push(this.review);
            this.review = {};
        };
    });
    
    angular.module('store-products').directive('productTitle', function() {
        return {
            restrict: 'E',
            templateUrl: '/wwwroot/templates/product-title.html'
        };
    });

    angular.module('store-products').directive('productDescription', function() {
        return {
            restrict: 'E',
            templateUrl: '/wwwroot/templates/product-description.html'
        };
    });

    angular.module('store-products').directive('productSpecifications', function() {
        return {
            restrict: 'E',
            templateUrl: '/wwwroot/templates/product-specifications.html'
        };
    });

    angular.module('store-products').directive('productReviews', function() {
        return {
            restrict: 'E',
            templateUrl: '/wwwroot/templates/product-reviews.html'
        };
    });

    angular.module('store-products').directive('productPanels', function() {
        return {
            restrict: 'E',
            templateUrl: '/wwwroot/templates/product-panels.html',

            controller:function() {
                this.tab = 1;
    
                this.selectTab = function(setTab) {
                    this.tab = setTab;
                };
    
                this.isSelected = function(checkTab) {
                    return this.tab === checkTab;
                };
            },
            controllerAs: 'panel'
        };
    });

    angular.module('store-products').directive('productGallery', function() {
        return {
            restrict: 'E',
            templateUrl: "/wwwroot/templates/product-gallery.html",
            controller:function() {
                this.current = 0;
        
                this.getCurrent = function() {
                    return this.current;
                };
        
                this.setCurrent = function(newGallery) {
                    this.current =(newGallery)? newGallery : 0;
                };
            },
            controllerAs: 'gallery'
        };
    });
})();
