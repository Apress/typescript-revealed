function CelsiusToFahrenheit(celsius: number): number {
    return (celsius * (9 / 5) + 32);
}

function EncodeAndLog(
    unencodedString: string, 
    encodefn: (rawString: string) => string): void {
      console.log(encodefn(unencodedString));
}

function CalculateRectangularArea(rect: {width: number; height: number;}): number {
    return rect.width * rect.height;
}

function CalculateArea(shape : Square) : number;
function CalculateArea(shape : Ellipse) : number;
function CalculateArea(shape: Triangle): number;
function CalculateArea(shape : Shape) : number {     //  <-- The crucial line!!
   if (shape instanceof Square) {
     return (<Square>shape).x * (<Square>shape).y; 
   }
   if (shape instanceof Ellipse) {
     return (<Ellipse>shape).r1 * (<Ellipse>shape).r2 * Math.PI; 
   }
   if (shape instanceof Triangle) {
     return 0.5 * (<Triangle>shape).x * (<Triangle>shape).y;
   }
   throw new TypeError("Unsupported type!");
}


var converterFn : (celsius: number) => number = CelsiusToFahrenheit;
var encodeFn : (rawString: string) => string;  // Set to undefined
var areaFn : (ellipse: {r1: number; r2: number;}) => number = 
    function(ellipse) { 
        return Math.PI * ellipse.r1 * ellipse.r2; 
    };

var areaFn2: (rect: { height: number; width: number; }) => number = CalculateRectangularArea;

var kelvin: number;
function CelsiusConverter (celsius: number,
    calculateKelvinToo?: bool): number {
    if ( calculateKelvinToo) { kelvin = celsius -273.1;  }
    return (celsius * (9 / 5) +32);
}

class Dwarf { 
    height: number;
    name: string;
}

function DwarvesTallerThan(minHeight: number, ...dwarves: Dwarf[]) : number { 
    var count: number = 0;
    for (var i = 0; i < dwarves.length; i++) { 
        if (dwarves[i].height > minHeight) {
            count++;
        }
    }
    return count;
}


class Shape { sides: number; }

class Square extends Shape { 
    x: number;
    y: number;
}

class Ellipse extends Shape {
    r1: number;
    r2: number;
}

class Triangle extends Shape { 
    x: number;
    y: number;
}