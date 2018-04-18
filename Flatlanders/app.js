(function(){
    var app = angular.module('gemStore', []);

    app.controller('StoreController', function() {
        this.products = gems;
    });

    app.controller('GalleryController', function() {
        this.current = 0;

        this.getCurrent = function() {
            return this.current;
        };

        this.setCurrent = function(newGallery) {
            this.current =(newGallery)? newGallery : 0;
        };
    });

    app.controller('PanelController', function() {
        this.tab = 1;

        this.selectTab = function(setTab) {
            this.tab = setTab;
        };

        this.isSelected = function(checkTab) {
            return this.tab === checkTab;
        };
    });

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

    var gems = [
        {
            name: "Dodecahedron",
            price: 2,
            description: 'Some gems have hidden qualities beyond their luster, beyond their shine... Dodeca is one of those gems.',
            canPurchase: true,
            soldOut: false,
            shine: 8,
            images: [
                "images/gem-01.gif"
            ],
            reviews: [
                {
                    stars: 5,
                    body: "I love this gem!",
                    author: "joe@example.org",
                    createdOn: 'Apr 18, 2017'
                }
            ]
        },
        {
            name: "Pentagonal Gem",
            price: 5.95,
            description: "5 sided gem",
            canPurchase: false,
            soldOut: false,
            shine: 9,
            images: [
                "images/gem-02.gif"
            ]
        }
    ];
})();