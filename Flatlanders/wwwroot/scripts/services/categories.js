(function() {
    angular.module("notes")
        .factory("Category", function CategoryFactory($resource) {
            return $resource("http://localhost:50089/api/category/:id", {}, {});
        });
})()