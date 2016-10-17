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
        BusinessLogic.SimpleWebSocket = SimpleWebSocket;        
        function Initialise() {
        }
        BusinessLogic.Initialise = Initialise;
        BusinessLogic.CurrentVisitors;
    })(MyWebApp.BusinessLogic || (MyWebApp.BusinessLogic = {}));
    var BusinessLogic = MyWebApp.BusinessLogic;
})(MyWebApp || (MyWebApp = {}));
