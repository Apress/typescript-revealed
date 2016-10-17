var twelve = 12;
var aString = "Ball of twine";
var positive = true;
var today = new Date(2012, 10, 12, 13, 0, 0);
var emptyArray = new Array();
var actors = [
    "Martin Freeman", 
    "Ian Holm", 
    "Elijah Wood"
];
var trilogies = [
    [
        "An Unexpected Journey", 
        "The Desolation Of Smaug", 
        "There And Back Again"
    ], 
    [
        "The Fellowship Of the Ring", 
        "The Two Towers", 
        "The Return Of The King"
    ]
];
var stringFunctions = [
    function (s) {
        return "Hello " + s;
    }, 
    function (s) {
        return s + " fare thee well.";
    }];
var button = document.getElementById('myButton');
function CelsiusToFahrenheit(celsius) {
    return (celsius * (9 / 5) + 32);
}
function EncodeAndLog(unencodedString, encodefn) {
    console.log(encodefn(unencodedString));
}
var GoodSpecies;
(function (GoodSpecies) {
    GoodSpecies._map = [];
    GoodSpecies._map[0] = "Human";
    GoodSpecies.Human = 0;
    GoodSpecies._map[1] = "Elf";
    GoodSpecies.Elf = 1;
    GoodSpecies._map[2] = "Hobbit";
    GoodSpecies.Hobbit = 2;
    GoodSpecies._map[3] = "Dwarf";
    GoodSpecies.Dwarf = 3;
})(GoodSpecies || (GoodSpecies = {}));
var BadSpecies = {
    Goblin: "GOBLIN",
    Orc: "ORC",
    Ogre: "OGRE"
};
