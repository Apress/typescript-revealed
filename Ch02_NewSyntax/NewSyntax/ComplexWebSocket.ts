/// <reference path="SimpleWebSocket.ts" />

class ComplexWebSocket extends SimpleWebSocket { 
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
