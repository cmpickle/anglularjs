(function () {
    angular.module('store-products', []);

    angular.module('store-products').controller("ProductController", ['$http', '$routeParams', function ($http, $routeParams) {
        let controller = this;

        $http({ method: 'GET', url: 'http://localhost:50089/api/products/get/' + $routeParams.id })
            .then(function (data) {
                controller.product = data.data;
            });

        $http({ method: 'GET', url: 'http://localhost:50089/api/products/reviewcount/' + $routeParams.id })
            .then(function (data) {
                controller.reviewCount = data.data;
            });

        function setFractionalRating(container, value) {
            var floor = Math.floor(value),
                ceil = Math.ceil(value),
                star = container.children[floor],
                slice = Array.prototype.slice,
                children = slice.call(container.children),
                visible = slice.call(children, 0, ceil),
                hidden = slice.call(children, ceil),
                size,
                width,
                portion;

            visible.forEach(function (star) {
                star.style.visibility = 'visible';
                star.style.width = '';
            });
            hidden.forEach(function (star) {
                star.style.visibility = 'hidden';
                star.style.width = '';
            });

            size = star && star.getBoundingClientRect();
            width = size && size.width;
            portion = value - floor;

            if (star && portion !== 0)
                star.style.width = (width * portion) + 'px';
        }

        $http({ method: 'GET', url: 'http://localhost:50089/api/products/reviewaverage/' + $routeParams.id })
        .then(function (data) {
            setFractionalRating(document.querySelector('.rating'),data.data);
        });
    }]);

    angular.module('store-products').controller("ReviewController", ['Gravatar', function(Gravatar) {
        this.review = {};

        this.addReview = function (product) {
            this.review.createdOn = Date.now();
            product.reviews.push(this.review);
            this.review = {};
        };

        this.gravatarUrl = function(email) {
            return Gravatar(email);
        }
    }]);

    angular.module('store-products').directive('productTitle', function () {
        return {
            restrict: 'E',
            templateUrl: '/wwwroot/templates/product-title.html'
        };
    });

    angular.module('store-products').directive('productDescription', function () {
        return {
            restrict: 'E',
            templateUrl: '/wwwroot/templates/product-description.html'
        };
    });

    angular.module('store-products').directive('productSpecifications', function () {
        return {
            restrict: 'E',
            templateUrl: '/wwwroot/templates/product-specifications.html'
        };
    });

    angular.module('store-products').directive('productReviews', function () {
        return {
            restrict: 'E',
            templateUrl: '/wwwroot/templates/product-reviews.html'
        };
    });

    angular.module('store-products').directive('productPanels', function () {
        return {
            restrict: 'E',
            templateUrl: '/wwwroot/templates/product-panels.html',

            controller: function () {
                this.tab = 1;

                this.selectTab = function (setTab) {
                    this.tab = setTab;
                };

                this.isSelected = function (checkTab) {
                    return this.tab === checkTab;
                };
            },
            controllerAs: 'panel'
        };
    });

    angular.module('store-products').directive('productGallery', function () {
        return {
            restrict: 'E',
            templateUrl: "/wwwroot/templates/product-gallery.html",
            controller: function () {
                this.current = 0;

                this.getCurrent = function () {
                    return this.current;
                };

                this.setCurrent = function (newGallery) {
                    this.current = (newGallery) ? newGallery : 0;
                };
            },
            controllerAs: 'gallery'
        };
    });
})();
