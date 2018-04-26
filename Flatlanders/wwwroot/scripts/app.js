(function () {
  angular.module('gemStore', ['store-products', 'ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider
        .when('/', {
          redirectTo: '/home'
        })
        .when('/home', {
          templateUrl: 'wwwroot/templates/index.html'
        })
        .when('/hello', {
          templateUrl: 'wwwroot/templates/hello.html'
        });
    }]);

  angular.module('gemStore').controller('StoreController', ['$http', function ($http) {
    let store = this;
    store.products = [];

    $http.get('http://localhost:50089/api/values').then(function (data) {
      store.products = data.data;
    });
  }]);

  var gems = [{
    name: 'Azurite',
    description: "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
    shine: 8,
    price: 110.50,
    rarity: 7,
    color: '#CCC',
    faces: 14,
    images: [
      "images/gem-02.gif",
      "images/gem-05.gif",
      "images/gem-09.gif"
    ],
    reviews: [{
      stars: 5,
      body: "I love this gem!",
      author: "joe@example.org",
      createdOn: "Apr 04, 2018"

    }, {
      stars: 1,
      body: "This gem sucks.",
      author: "tim@example.org",
      createdOn: "Apr 04, 2018"

    }]
  }, {
    name: 'Bloodstone',
    description: "Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.",
    shine: 9,
    price: 22.90,
    rarity: 6,
    color: '#EEE',
    faces: 12,
    images: [
      "images/gem-01.gif",
      "images/gem-03.gif",
      "images/gem-04.gif"
    ],
    reviews: [{
      stars: 3,
      body: "I think this gem was just OK, could honestly use more shine, IMO.",
      author: "JimmyDean@example.org",
      createdOn: "Apr 04, 2018"
    }, {
      stars: 4,
      body: "Any gem with 12 faces is for me!",
      author: "gemsRock@example.org",
      createdOn: "Apr 04, 2018"
    }]
  }, {
    name: 'Zircon',
    description: "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
    shine: 70,
    price: 1100,
    rarity: 2,
    color: '#000',
    faces: 6,
    images: [
      "images/gem-06.gif",
      "images/gem-07.gif",
      "images/gem-08.gif"
    ],
    reviews: [{
      stars: 1,
      body: "This gem is WAY too expensive for its rarity value.",
      author: "turtleguyy@example.org",
      createdOn: "Apr 04, 2018"
    }, {
      stars: 1,
      body: "BBW: High Shine != High Quality.",
      author: "LouisW407@example.org",
      createdOn: "Apr 04, 2018"
    }, {
      stars: 1,
      body: "Don't waste your rubles!",
      author: "nat@example.org",
      createdOn: "Apr 04, 2018"
    }]
  }];
})();