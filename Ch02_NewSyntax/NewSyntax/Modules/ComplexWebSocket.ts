/// <reference path="SimpleWebSocket.ts" />
module MyWebApp.BusinessLogic {

    class ComplexWebSocket extends MyWebApp.BusinessLogic.SimpleWebSocket {
        constructor (url: string, protocol: string) {
            super(url);
            this.Protocol = protocol;
        }

        private protocol: string;
        get Protocol(): string {
            return this.protocol;
        }

        set Protocol(value: string) {
            this.protocol = value;
        }

        ThrowError(code: number) {
            // some code
            super.Close(code);
        }

        Send(data: any): void {
            super.messagesSent++;
        }
    }

    var cws = new ComplexWebSocket("asd", "qwe");

    class Test { 
        sws: MyWebApp.BusinessLogic.SimpleWebSocket;

        testMethod() { 
            var sws = new MyWebApp.BusinessLogic.SimpleWebSocket("http");

        }
    }
}