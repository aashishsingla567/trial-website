function fixHeader() {
    var head = document.getElementsByClassName(".header")[0];
    var style = head.style;
    style.display = "grid";
    style.position = "fixed";
    style.top = "1%";
}
fixHeader();
