var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var changeSize = 700;
var ignoreInput = /** @class */ (function () {
    function ignoreInput() {
    }
    ignoreInput.debounce = function (cb, delay) {
        if (delay === void 0) { delay = 100; }
        clearTimeout(__classPrivateFieldGet(this, _a, "f", _ignoreInput_timeout));
        __classPrivateFieldSet(this, _a, setTimeout(function () {
            cb();
        }, delay), "f", _ignoreInput_timeout);
    };
    ignoreInput.throttle = function (cb, delay) {
        var _this = this;
        if (delay === void 0) { delay = 100; }
        (function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (__classPrivateFieldGet(_this, _a, "f", _ignoreInput_wait) == true) {
                __classPrivateFieldSet(_this, _a, args, "f", _ignoreInput_lastIn);
                return;
            }
            cb.apply(void 0, args);
            __classPrivateFieldSet(_this, _a, true, "f", _ignoreInput_wait);
            setTimeout(function () {
                if (__classPrivateFieldGet(_this, _a, "f", _ignoreInput_lastIn) != null)
                    cb.apply(void 0, __classPrivateFieldGet(_this, _a, "f", _ignoreInput_lastIn));
                __classPrivateFieldSet(_this, _a, null, "f", _ignoreInput_lastIn);
                __classPrivateFieldSet(_this, _a, false, "f", _ignoreInput_wait);
            }, delay);
        })();
    };
    var _a, _ignoreInput_timeout, _ignoreInput_wait, _ignoreInput_lastIn;
    _a = ignoreInput;
    _ignoreInput_timeout = { value: void 0 };
    _ignoreInput_wait = { value: false };
    _ignoreInput_lastIn = { value: void 0 };
    return ignoreInput;
}());
;
var throttle = function (cb, delay) {
    if (delay === void 0) { delay = 100; }
    ignoreInput.throttle(cb, delay);
};
var debounce = function (cb, delay) {
    if (delay === void 0) { delay = 100; }
    ignoreInput.debounce(cb, delay);
};
window.addEventListener('resize', function () {
    debounce(function () {
        if (window.innerWidth >= changeSize) {
            document.getElementsByClassName("line2")[0]
                .style.display = "block";
        }
        else
            document.getElementsByClassName("line2")[0]
                .style.display = "none";
    }, 250);
});
