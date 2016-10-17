declare var menu: HTMLElement;
declare var sideBar: HTMLElement;

class UITester {
    menuTouches : number;
    sidebarTouches : number;

    beginMenuTest(): void {
        this.menuTouches = 0;   // Right!!
        menu.onmouseenter = function (e) {
            this.menuTouches++;  // Wrong!! 
        }
    }

    beginSidebarTest(): void {
        this.sidebarTouches = 0;  // Right!!
        sideBar.onmousemove = e => {
            this.sidebarTouches++;  // Still right!!
        }
    }
}