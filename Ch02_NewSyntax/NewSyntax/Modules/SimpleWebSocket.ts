
module MyWebApp.BusinessLogic {

    export class SimpleWebSocket {
        constructor (url: string) {
            this.ServiceUrl = url;
            this.state = this.SocketState.OPEN;
            this.messagesSent = 0;
        }

        SocketState = {
            OPEN: 1,
            CLOSED: 2
        };

        private serviceUrl: string;
        get ServiceUrl(): string {
            return this.serviceUrl;
        }

        set ServiceUrl(value: string) {
            this.serviceUrl = value;
        }

        state: number;
        messagesSent: number;

        static origin: string;

        static Error(code: number) {
            // some code
            this.Close(code);
        }

        Close(code: string): void;
        Close(code: string, reason: string): void;
        Close(code: number): void;
        Close(code: number, reason: string): void;
        Close(code: any, reason?: string): void {
            var logEntry: string = code.toString();
            if (reason) { logEntry += (" : " + reason); }
            console.log(logEntry);
            this.state = this.SocketState.CLOSED;
        }

        Send(data: string): void {
            console.log(data);
            this.messagesSent++;
        }
    }

    export function Initialise() { }

    export var CurrentVisitors: number;

}