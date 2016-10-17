
class SimpleWebSocket {
    constructor ();
    constructor (url: string);
    constructor (url?: string) {
        if (url !== null && url !== undefined) {
            this.ServiceUrl = url;
        }
        else {
            this.ServiceUrl = "http://localhost:80";
        }
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

    static origin: string;

    static Error(code: number) {
        // some code
        this.Close(code);
    }

    state: number;
    messagesSent: number;
    
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

var TestSocket = new SimpleWebSocket("http://testthis.com");
TestSocket.Send("Test the socket");
TestSocket.Close(200, "OK");
console.log(TestSocket.state.toString());
SimpleWebSocket.origin = "Program Name";

