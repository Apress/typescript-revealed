var emptyArray = new Array();
var actors = [
    "Martin Freeman", 
    "Ian Holm", 
    "Elijah Wood"
];
for(var i = 0; i < actors.length; i++) {
    console.log(actors[i]);
}
for(var actor in actors) {
    console.log(actor);
}
var gotcha = actors["Ian Holm"];
var trilogies = new Array();
trilogies.push([
    "An Unexpected Journey", 
    "The Desolation of Smaug", 
    "There and Back Again"
]);
trilogies.push([
    "The Fellowship Of the Ring", 
    "The Two Towers", 
    "The Return Of The King"
]);
