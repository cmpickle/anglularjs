(function() {
angular.module("store-products")
    .factory("Gravatar", function GravatarFactory() {
        var avatarSize = 80;
        var avatarUrl = "http://www.gravatar.com/avatar/";
        return function(email) {
            console.log("email " + email);
            console.log("hash " + CryptoJS.MD5(email));
            return avatarUrl + CryptoJS.MD5(email) + "?size=" + avatarSize.toString();
        };
    });
})()