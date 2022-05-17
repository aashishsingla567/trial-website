function fixHeader () {
    let head = document.getElementsByClassName(".header")[0] as HTMLElement;
    let style = head.style;
    style.display = "grid";
    style.position = "fixed";
    style.top = "1%";
}

fixHeader ();