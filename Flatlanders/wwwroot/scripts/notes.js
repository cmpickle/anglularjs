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
})();
