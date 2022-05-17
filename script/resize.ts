const changeSize = 700;


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

window.addEventListener ('resize', () => {
    debounce (() => {
        if (window.innerWidth >= changeSize) {
            (document.getElementsByClassName("line2")[0] as HTMLElement)
            .style.display = "block";
        } else (document.getElementsByClassName("line2")[0] as HTMLElement)
            .style.display = "none";
    }, 250)}
);