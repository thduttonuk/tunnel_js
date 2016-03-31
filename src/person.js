define(["require", "exports"], function (require, exports) {
    var Person = (function () {
        function Person(firstname, lastname) {
            this.firstname = firstname;
            this.lastname = lastname;
        }
        return Person;
    })();
    exports.Person = Person;
});
