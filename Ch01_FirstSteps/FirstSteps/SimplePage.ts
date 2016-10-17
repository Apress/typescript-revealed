/// <reference path="lib\jquery-1.8.d.ts" />

module TypeScript.Revealed {
    export class Chapter1 {
        static DisplayDate(): void {
            var currentDate: Date = new Date();
            $("#txtDemo").text(currentDate.toUTCString());
        }
    }
}

$("#btnGo").click(TypeScript.Revealed.Chapter1.DisplayDate);


//function displayDate() : void { 
//    var currentDate: Date = new Date();
//    document.getElementById("txtDemo").innerHTML = currentDate.toUTCString();
//}

//document.getElementById("btnGo").addEventListener("click", displayDate);
