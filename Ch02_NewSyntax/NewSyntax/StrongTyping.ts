// Declaring variables
var twelve: number = 12;
var aString: string = "Ball of twine";
var positive: bool = true;
var today: Date = new Date(2012, 10, 12, 13, 0, 0);
var emptyArray: any[] = new Array();
var actors: string[] =  ["Martin Freeman", "Ian Holm", "Elijah Wood"];
var trilogies: string[][] = [
    ["An Unexpected Journey", "The Desolation Of Smaug", "There And Back Again"],
    ["The Fellowship Of the Ring", "The Two Towers", "The Return Of The King"]
];
var stringFunctions: { (s: string): string; }[] = [
    function(s: string) { return "Hello " + s; },
    function (s: string) { return s + " fare thee well."; }
];
var button: HTMLElement = document.getElementById('myButton');


// Declaring functions
function CelsiusToFahrenheit(celsius: number): number {
    return (celsius * (9 / 5) + 32);
}

function EncodeAndLog(
    unencodedString: string, 
    encodefn: (rawString: string) => string):void {
    console.log(encodefn(unencodedString));
}

// Enums
enum GoodSpecies {
    Human,
    Elf,
    Hobbit,
    Dwarf,
}

var BadSpecies = {
    Goblin: "GOBLIN",
    Orc: "ORC",
    Ogre: "OGRE"
};