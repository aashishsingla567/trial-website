window.scrollTo (1,0);

let windowSize: number;

function stopShowOff () {
    let body = document.getElementsByTagName("body")[0] as HTMLElement;
    let real_title = document.getElementsByClassName("real_title")[0] as HTMLElement;
    
    real_title.style.animation = "none";
    body.style.animation = "none";

}


let animationName = new Map <HTMLElement, string>();
function stopAnimation ( element : HTMLElement) {
    if (animationName.has(element))
        element.style.animation = "none";
    else animationName.set(element, element.style.animationName);
}
// function generateAnimationList () {
//     let doc = document.getElementsByTagName("div") as HTMLCollectionOf <HTMLElement>;
//     for (var i = 0; i < doc.length; i++) {
//         animationName.set(doc[i], doc[i].style.animationName);
//     }
// }
// generateAnimationList();

function startAnimation( element : HTMLElement) {
    if (animationName.has(element))
        element.style.animation = animationName.get(element);
}

let title = document.getElementsByTagName("header")[0] as HTMLElement;
windowSize = title.offsetHeight;
const scrollTimout = setTimeout ( () => {
    if (window.scrollY >= windowSize * 0.75) {
        clearTimeout(scrollTimout);
        console.log("YES");
    }
    else {
        window.scrollTo(0, windowSize);
        stopShowOff();
        console.log("oops");
    }
}, 10000); /// <--  CHANGE THIS !!! TO 10000

function sleep (ms: number = 0): Promise<unknown> {
    return new Promise (resolve => setTimeout (resolve, ms));
}

class ignoreInput {
    static #timeout;
    static debounce (cb, delay = 100) {
        clearTimeout(this.#timeout);
        this.#timeout = setTimeout(() => {
            cb();
        }
        , delay);
    }

    static #wait = false;
    static #lastIn;
    static throttle (cb, delay = 100) {
        ((...args) => {
        if (this.#wait == true) {
            this.#lastIn = args;
            return;
        }
        cb(...args);
        this.#wait = true;
        setTimeout(() => {
            if (this.#lastIn != null)
                cb(...this.#lastIn);
            this.#lastIn = null;
            this.#wait = false;
        }, delay);
        })();
    }    
};

const throttle = (cb, delay = 100) => {ignoreInput.throttle(cb, delay)};
const debounce = (cb, delay = 100) => {ignoreInput.debounce(cb, delay)};

async function checkScroll (ms: number = 100, scrollValue : number , fun : () => void) {
    // while (true) {
    //     await sleep (ms);
    //     if (window.scrollY >=  scrollValue) {
    //         fun();
    //         break;
    //     }
    // }
    let check = () => {
        debounce (() => {
            if (window.scrollY >=  scrollValue) {
                    fun();
                    document.removeEventListener("scroll", check);
                }
        }, 100);
    };
    document.addEventListener("scroll", check);
}

checkScroll (100, (windowSize * 0.5), stopShowOff);