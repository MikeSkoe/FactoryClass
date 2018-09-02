var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person;
}());
var Dancer = /** @class */ (function (_super) {
    __extends(Dancer, _super);
    function Dancer(state) {
        var _this = _super.call(this, state.name, state.age) || this;
        _this.dance = function () {
            console.log("dancer " + _this.name + " has " + _this.energy-- + " nrg");
        };
        Object.assign(_this, state);
        _this.energy = 100;
        return _this;
    }
    return Dancer;
}(Person));
var Painter = /** @class */ (function (_super) {
    __extends(Painter, _super);
    function Painter(state) {
        var _this = _super.call(this, state.name, state.age) || this;
        _this.paint = function () {
            console.log("painter " + _this.name + " paints with " + _this.colors-- + " colors");
        };
        Object.assign(_this, state);
        _this.colors = 7;
        return _this;
    }
    return Painter;
}(Person));
var Tester = /** @class */ (function () {
    function Tester() {
    }
    Tester.prototype.test = function () { };
    return Tester;
}());
var person = new Painter(new Dancer(new Person('jake', 32)));
person.dance();
person.paint();
person.name = 'Mike';
person.dance();
person.paint();
//(<Tester>person).test(); Error, cus` person doesn't have a test method
