(function(){
    var app = angular.module('gemStore', []);

    app.controller('StoreController', function() {
        this.products = gems;
    });

    var gems = [
        {
            name: "Dodecahedron",
            price: 2,
            description: 'Some gems have hidden qualities beyond their luster, beyond their shine... Dodeca is one of those gems.',
            canPurchase: true,
            soldOut: false
        },
        {
            name: "Pentagonal Gem",
            price: 5.95,
            description: "5 sided gem",
            canPurchase: false
        }
    ];
})();