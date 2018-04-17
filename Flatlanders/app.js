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