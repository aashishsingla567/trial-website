var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
window.scrollTo(1, 0);
var windowSize;
function stopShowOff() {
    var body = document.getElementsByTagName("body")[0];
    var real_title = document.getElementsByClassName("real_title")[0];
    real_title.style.animation = "none";
    body.style.animation = "none";
}
var animationName = new Map();
function stopAnimation(element) {
    if (animationName.has(element))
        element.style.animation = "none";
    else
        animationName.set(element, element.style.animationName);
}
// function generateAnimationList () {
//     let doc = document.getElementsByTagName("div") as HTMLCollectionOf <HTMLElement>;
//     for (var i = 0; i < doc.length; i++) {
//         animationName.set(doc[i], doc[i].style.animationName);
//     }
// }
// generateAnimationList();
function startAnimation(element) {
    if (animationName.has(element))
        element.style.animation = animationName.get(element);
}
var title = document.getElementsByTagName("header")[0];
windowSize = title.offsetHeight;
var scrollTimout = setTimeout(function () {
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
function sleep(ms) {
    if (ms === void 0) { ms = 0; }
    return new Promise(function (resolve) { return setTimeout(resolve, ms); });
}
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
function checkScroll(ms, scrollValue, fun) {
    if (ms === void 0) { ms = 100; }
    return __awaiter(this, void 0, void 0, function () {
        var check;
        return __generator(this, function (_b) {
            check = function () {
                debounce(function () {
                    if (window.scrollY >= scrollValue) {
                        fun();
                        document.removeEventListener("scroll", check);
                    }
                }, 100);
            };
            document.addEventListener("scroll", check);
            return [2 /*return*/];
        });
    });
}
checkScroll(100, (windowSize * 0.5), stopShowOff);
