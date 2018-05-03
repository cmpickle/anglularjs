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
                templateUrl: "/templates/note-category-select.html",
                link: function(scope, element, attrs) {
                    scope.categories = Category.query();
                }
            };
        });

    angular.module('notes')
        .directive("noteCategoryItem", function() {
            return {
                restrict: "E",
                templateUrl: "/templates/note-category-item.html",
                scope: {
                    category: "="
                }
            };
        });
})();
