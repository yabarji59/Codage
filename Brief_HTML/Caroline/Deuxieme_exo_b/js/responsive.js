function showMenu() {
    var menu = document.getElementById("menu-responsive");
    var link = document.getElementById("hamburger_icon");
    var root = document.getElementById("root");
    var normal = document.getElementById("normalburger");
    var open = document.getElementById("openburger");
    if (menu.className === "") {
        menu.className = "open";
        link.className = "open";
        normal.className = "hidden";
        open.className = "shown";
        root.style.overflowY = "hidden";
    } else {
        menu.className = "";
        link.className = "closed";
        normal.className ="shown";
        open.className="hidden";
        root.style.overflowY = "";
    }
}