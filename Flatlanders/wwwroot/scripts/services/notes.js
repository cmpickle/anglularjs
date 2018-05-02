(function() {
    angular.module("notes")
        .factory("Note", function NoteFactory($resource) {
            return $resource("http://localhost:50089/api/notes/:id", {}, {});
        });
})()