
interface WebSocket2 extends EventTarget { 
    url: string;
    
    // ready state
    CONNECTING: number;
    OPEN: number;
    CLOSING: number;
    CLOSED: number;
    readyState: number;
    bufferedAmount: number;

    // networking    
    onopen: (ev: Event) => any;
    onerror: (ev: ErrorEvent) => any;
    onclose: (ev: CloseEvent) => any;
    extensions: string;
    protocol: string;
    close(code?: number, reason?: string): void;
    
    // messaging
    onmessage: (ev: any) => any;
    binaryType: string;
    send(data: string): void;
    send(data: Blob): void;
    send(data: ArrayBuffer): void;
    send(data: ArrayBufferView): void;
}

declare var WebSocket2: {
    prototype: WebSocket2;
    new (url: string): WebSocket2;
    new (url: string, protocols: string): WebSocket2;
    new (url: string, protocols: string[]): WebSocket2;
    CONNECTING: number;
    OPEN: number;
    CLOSING: number;
    CLOSED: number;
}