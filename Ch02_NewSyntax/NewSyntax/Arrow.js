var UITester = (function () {
    function UITester() { }
    UITester.prototype.beginMenuTest = function () {
        this.menuTouches = 0;
        menu.onmouseenter = function (e) {
            this.menuTouches++;
        };
    };
    UITester.prototype.beginSidebarTest = function () {
        var _this = this;
        this.sidebarTouches = 0;
        sideBar.onmousemove = function (e) {
            _this.sidebarTouches++;
        };
    };
    return UITester;
})();
