(function(){
    var app = angular.module('gemStore', []);

    app.controller('StoreController', function() {
        this.products = gems;
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
            images: [
                "images/gem-01.gif"
            ]
        },
        {
            name: "Pentagonal Gem",
            price: 5.95,
            description: "5 sided gem",
            canPurchase: false,
            images: [
                "images/gem-02.gif"
            ]
        }
    ];
})();