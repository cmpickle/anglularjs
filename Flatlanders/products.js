(function() {
    var app = angular.module('store-products', []);

    app.controller("ReviewController", function() {
        this.review = {};

        this.addReview = function(product) {
            this.review.createdOn = Date.now();
            product.reviews.push(this.review);
            this.review = {};
        };
    });
    
    app.directive('productTitle', function() {
        return {
            restrict: 'E',
            templateUrl: 'product-title.html'
        };
    });

    app.directive('productDescription', function() {
        return {
            restrict: 'E',
            templateUrl: 'product-description.html'
        };
    });

    app.directive('productSpecifications', function() {
        return {
            restrict: 'E',
            templateUrl: 'product-specifications.html'
        };
    });

    app.directive('productReviews', function() {
        return {
            restrict: 'E',
            templateUrl: 'product-reviews.html'
        };
    });

    app.directive('productPanels', function() {
        return {
            restrict: 'E',
            templateUrl: 'product-panels.html',

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

    app.directive('productGallery', function() {
        return {
            restrict: 'E',
            templateUrl: "product-gallery.html",
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
