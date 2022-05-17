const slide = document.getElementsByClassName ("slide");
let last = -1;
let sNo = 0;
function displaySlide (i:number) {
    slide[i].style.animation = "slide_in";
    slide[i].style.display = "flex";
}

function hideSlide(i:number) {
    slide[i].style.display = "none";
    slide[i].style.animation = "none";
}

function loadSlide (i: number) {
    if (i == last)
        return;
    if (last != -1)
        hideSlide(last);
    displaySlide(i);
    last = i;
}

const nav_links = document.getElementsByClassName("bodyNav")[0].getElementsByClassName("navIcon");
let play : boolean = true;
function hover () {
    for (var i = 0; i < nav_links.length; i++) {
        nav_links[i].addEventListener (
           "mouseover", function (e) {
            const idx = [...this.parentElement.children].indexOf(this);
               loadSlide(idx);
           }
        );
        nav_links[i].addEventListener (
           "click", function (e) {
                const idx = [...this.parentElement.children].indexOf(this);
                play = false;
                loadSlide(idx);
           }
        );
    }
}

hover();

function nextSlide () {
    sNo = last + 1;
    if (sNo >= slide.length) {
        sNo = 0;
    }
    loadSlide(sNo);    
}

function sleep(ms:number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function start () {
   while (play == true) {
        nextSlide ();
        await sleep (5000);
   }
}

start();