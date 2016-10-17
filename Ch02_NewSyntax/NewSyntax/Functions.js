var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
function CelsiusToFahrenheit(celsius) {
    return (celsius * (9 / 5) + 32);
}
function EncodeAndLog(unencodedString, encodefn) {
    console.log(encodefn(unencodedString));
}
function CalculateRectangularArea(rect) {
    return rect.width * rect.height;
}
function CalculateArea(shape) {
    if(shape instanceof Square) {
        return (shape).x * (shape).y;
    }
    if(shape instanceof Ellipse) {
        return (shape).r1 * (shape).r2 * Math.PI;
    }
    if(shape instanceof Triangle) {
        return 0.5 * (shape).x * (shape).y;
    }
    throw new TypeError("Unsupported type!");
}
var converterFn = CelsiusToFahrenheit;
var encodeFn;
var areaFn = function (ellipse) {
    return Math.PI * ellipse.r1 * ellipse.r2;
};
var areaFn2 = CalculateRectangularArea;
var kelvin;
function CelsiusConverter(celsius, calculateKelvinToo) {
    if(calculateKelvinToo) {
        kelvin = celsius - 273.1;
    }
    return (celsius * (9 / 5) + 32);
}
var Dwarf = (function () {
    function Dwarf() { }
    return Dwarf;
})();
function DwarvesTallerThan(minHeight) {
    var dwarves = [];
    for (var _i = 0; _i < (arguments.length - 1); _i++) {
        dwarves[_i] = arguments[_i + 1];
    }
    var count = 0;
    for(var i = 0; i < dwarves.length; i++) {
        if(dwarves[i].height > minHeight) {
            count++;
        }
    }
    return count;
}
var Shape = (function () {
    function Shape() { }
    return Shape;
})();
var Square = (function (_super) {
    __extends(Square, _super);
    function Square() {
        _super.apply(this, arguments);

    }
    return Square;
})(Shape);
var Ellipse = (function (_super) {
    __extends(Ellipse, _super);
    function Ellipse() {
        _super.apply(this, arguments);

    }
    return Ellipse;
})(Shape);
var Triangle = (function (_super) {
    __extends(Triangle, _super);
    function Triangle() {
        _super.apply(this, arguments);

    }
    return Triangle;
})(Shape);
