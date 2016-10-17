/// <reference path="SimpleWebSocket.ts" />

import BL = MyWebApp.BusinessLogic;

// requires class is exported
var TestSocket = new BL.SimpleWebSocket("http");
TestSocket.Send("Some info");
TestSocket.Close("123");
console.log(TestSocket.state);

// Static class property 
BL.SimpleWebSocket.origin = "here";

// In MyWebApp.BusinessLogic module but not in class
// Must be exported individually
BL.Initialise();
BL.CurrentVisitors++;