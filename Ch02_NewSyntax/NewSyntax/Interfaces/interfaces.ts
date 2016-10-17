// Funtion type
interface IfnStringManipulator {
    (input: string): string;
}

var sayHello: IfnStringManipulator;

sayHello = function (s: string) {
    return "Hello " + s;
}

var stringUtils: { (input: string): string; }[];
stringUtils.push(sayHello);

// Behavioral functions
interface IComparable {
    CompareTo(obj: any): number;
}

interface IEnumerable {
    [index: number]: any;
}

interface ICloneable {
    Clone(): any;
}

function ImplementsICloneable(obj: any): bool {
    return (obj && obj.Clone);
}

// Entire Class Interface
interface IWebSocket {
    // use 'new' to indicate constructor
    new (url: string) : SimpleWebSocket;

    // fields
    state: number;
    messagesSent: number;

    // optional fields
    protocols?: string;

    // properties can be added
    // but getters and setters cannot be enforced
    ServiceUrl: string;

    // methods
    Send(data: string): void;
    onError(errorCode: number, message: string): void;

    // overloaded method
    Close(code: string): void;
    Close(code: string, reason: string): void;
    Close(code: number): void;
    Close(code: number, reason: string): void;
}
