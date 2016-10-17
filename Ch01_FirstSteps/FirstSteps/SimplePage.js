var TypeScript;
(function (TypeScript) {
    (function (Revealed) {
        var Chapter1 = (function () {
            function Chapter1() { }
            Chapter1.DisplayDate = function DisplayDate() {
                var currentDate = new Date();
                $("#txtDemo").text(currentDate.toUTCString());
            }
            return Chapter1;
        })();
        Revealed.Chapter1 = Chapter1;        
    })(TypeScript.Revealed || (TypeScript.Revealed = {}));
    var Revealed = TypeScript.Revealed;

})(TypeScript || (TypeScript = {}));

$("#btnGo").click(TypeScript.Revealed.Chapter1.DisplayDate);
