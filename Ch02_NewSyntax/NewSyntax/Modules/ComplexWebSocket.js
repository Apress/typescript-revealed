var MyWebApp;
(function (MyWebApp) {
    (function (BusinessLogic) {
        var SimpleWebSocket = (function () {
            function SimpleWebSocket(url) {
                this.SocketState = {
                    OPEN: 1,
                    CLOSED: 2
                };
                this.ServiceUrl = url;
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
    })(MyWebApp.BusinessLogic || (MyWebApp.BusinessLogic = {}));
    var BusinessLogic = MyWebApp.BusinessLogic;
})(MyWebApp || (MyWebApp = {}));
var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var MyWebApp;
(function (MyWebApp) {
    (function (BusinessLogic) {
        var ComplexWebSocket = (function (_super) {
            __extends(ComplexWebSocket, _super);
            function ComplexWebSocket(url, protocol) {
                        _super.call(this, url);
                this.Protocol = protocol;
            }
            Object.defineProperty(ComplexWebSocket.prototype, "Protocol", {
                get: function () {
                    return this.protocol;
                },
                set: function (value) {
                    this.protocol = value;
                },
                enumerable: true,
                configurable: true
            });
            ComplexWebSocket.prototype.ThrowError = function (code) {
                _super.prototype.Close.call(this, code);
            };
            ComplexWebSocket.prototype.Send = function (data) {
                _super.prototype.messagesSent++;
            };
            return ComplexWebSocket;
        })(MyWebApp.BusinessLogic.SimpleWebSocket);        
        var cws = new ComplexWebSocket("asd", "qwe");
    })(MyWebApp.BusinessLogic || (MyWebApp.BusinessLogic = {}));
    var BusinessLogic = MyWebApp.BusinessLogic;
})(MyWebApp || (MyWebApp = {}));
