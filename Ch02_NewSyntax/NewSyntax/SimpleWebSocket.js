var SimpleWebSocket = (function () {
    function SimpleWebSocket(url) {
        this.SocketState = {
            OPEN: 1,
            CLOSED: 2
        };
        if(url !== null && url !== undefined) {
            this.ServiceUrl = url;
        } else {
            this.ServiceUrl = "http://localhost:80";
        }
        this.state = this.SocketState.OPEN;
        this.messagesSent = 0;
    }
    Object.defineProperty(SimpleWebSocket.prototype, "ServiceUrl", {
        get: function () {
            return this.serviceUrl;
        },
        set: function (value) {
            this.serviceUrl = value;
        },
        enumerable: true,
        configurable: true
    });
    SimpleWebSocket.origin = "";
    SimpleWebSocket.Error = function Error(code) {
        this.Close(code);
    }
    SimpleWebSocket.prototype.Close = function (code, reason) {
        var logEntry = code.toString();
        if(reason) {
            logEntry += (" : " + reason);
        }
        console.log(logEntry);
        this.state = this.SocketState.CLOSED;
    };
    SimpleWebSocket.prototype.Send = function (data) {
        console.log(data);
        this.messagesSent++;
    };
    return SimpleWebSocket;
})();
var TestSocket = new SimpleWebSocket("http://testthis.com");
TestSocket.Send("Test the socket");
TestSocket.Close(200, "OK");
console.log(TestSocket.state.toString());
SimpleWebSocket.origin = "Program Name";
