(function () {
    angular.module('notes', []);

    angular.module('notes').controller("NotesController", function(Note) {
        this.notes = {};

        this.notes = Note.query();
    });

    angular.module('notes').directive('note', function () {
        return {
            restrict: 'E',
            templateUrl: '/wwwroot/templates/note.html'
        };
    });

    angular.module('notes')
        .directive("noteCategorySelect", function(Category) {
            return {
                replace: true,
                restrict: "E",
                scope: {
                    activeCategory: "=",
                    notes: "="
                },
                templateUrl: "/wwwroot/templates/note-category-select.html",
                link: function(scope, element, attrs) {
                    scope.categories = Category.query();
                },
                controller: function($scope) {
                    this.getActiveCategory = function() {
                        return $scope.activeCategory;
                    };

                    this.setActiveCategory = function(category) {
                        $scope.activeCategory = category.Type;
                    };
                    return this;
                }
            };
        });

    angular.module('notes')
        .directive("noteCategoryItem", function() {
            return {
                restrict: "E",
                templateUrl: "/wwwroot/templates/note-category-item.html",
                scope: {
                    category: "="
                },
                require: "^noteCategorySelect",
                link: function(scope, element, attrs, noteCategorySelectCtrl) {
                    scope.makeActive = function() {
                        noteCategorySelectCtrl.setActiveCategory(scope.category);
                    };

                    scope.categoryActive = function() {
                        return noteCategorySelectCtrl.getActiveCategory() === scope.category.Type;
                    };
                }
            };
        });
})();
