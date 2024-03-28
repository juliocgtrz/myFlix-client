
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

      var $parcel$global = globalThis;
    
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequireaec4"];

if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequireaec4"] = parcelRequire;
}

var parcelRegister = parcelRequire.register;
parcelRegister("4WnG3", function(module, exports) {

$parcel$export(module.exports, "Fragment", () => $398ef20bfcd6b165$export$ffb0004e005737fa, (v) => $398ef20bfcd6b165$export$ffb0004e005737fa = v);
$parcel$export(module.exports, "jsx", () => $398ef20bfcd6b165$export$34b9dba7ce09269b, (v) => $398ef20bfcd6b165$export$34b9dba7ce09269b = v);
$parcel$export(module.exports, "jsxs", () => $398ef20bfcd6b165$export$25062201e9e25d76, (v) => $398ef20bfcd6b165$export$25062201e9e25d76 = v);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $398ef20bfcd6b165$export$ffb0004e005737fa;
var $398ef20bfcd6b165$export$34b9dba7ce09269b;
var $398ef20bfcd6b165$export$25062201e9e25d76;
"use strict";

var $d4J5n = parcelRequire("d4J5n");
var $398ef20bfcd6b165$var$k = Symbol.for("react.element"), $398ef20bfcd6b165$var$l = Symbol.for("react.fragment"), $398ef20bfcd6b165$var$m = Object.prototype.hasOwnProperty, $398ef20bfcd6b165$var$n = $d4J5n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, $398ef20bfcd6b165$var$p = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function $398ef20bfcd6b165$var$q(c, a, g) {
    var b, d = {}, e = null, h = null;
    void 0 !== g && (e = "" + g);
    void 0 !== a.key && (e = "" + a.key);
    void 0 !== a.ref && (h = a.ref);
    for(b in a)$398ef20bfcd6b165$var$m.call(a, b) && !$398ef20bfcd6b165$var$p.hasOwnProperty(b) && (d[b] = a[b]);
    if (c && c.defaultProps) for(b in a = c.defaultProps, a)void 0 === d[b] && (d[b] = a[b]);
    return {
        $$typeof: $398ef20bfcd6b165$var$k,
        type: c,
        key: e,
        ref: h,
        props: d,
        _owner: $398ef20bfcd6b165$var$n.current
    };
}
$398ef20bfcd6b165$export$ffb0004e005737fa = $398ef20bfcd6b165$var$l;
$398ef20bfcd6b165$export$34b9dba7ce09269b = $398ef20bfcd6b165$var$q;
$398ef20bfcd6b165$export$25062201e9e25d76 = $398ef20bfcd6b165$var$q;

});
parcelRegister("d4J5n", function(module, exports) {
"use strict";

module.exports = (parcelRequire("7uDWo"));

});
parcelRegister("7uDWo", function(module, exports) {

$parcel$export(module.exports, "Children", () => $574a51285872e9b8$export$dca3b0875bd9a954, (v) => $574a51285872e9b8$export$dca3b0875bd9a954 = v);
$parcel$export(module.exports, "Component", () => $574a51285872e9b8$export$16fa2f45be04daa8, (v) => $574a51285872e9b8$export$16fa2f45be04daa8 = v);
$parcel$export(module.exports, "Fragment", () => $574a51285872e9b8$export$ffb0004e005737fa, (v) => $574a51285872e9b8$export$ffb0004e005737fa = v);
$parcel$export(module.exports, "Profiler", () => $574a51285872e9b8$export$e2c29f18771995cb, (v) => $574a51285872e9b8$export$e2c29f18771995cb = v);
$parcel$export(module.exports, "PureComponent", () => $574a51285872e9b8$export$221d75b3f55bb0bd, (v) => $574a51285872e9b8$export$221d75b3f55bb0bd = v);
$parcel$export(module.exports, "StrictMode", () => $574a51285872e9b8$export$5f8d39834fd61797, (v) => $574a51285872e9b8$export$5f8d39834fd61797 = v);
$parcel$export(module.exports, "Suspense", () => $574a51285872e9b8$export$74bf444e3cd11ea5, (v) => $574a51285872e9b8$export$74bf444e3cd11ea5 = v);
$parcel$export(module.exports, "__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED", () => $574a51285872e9b8$export$ae55be85d98224ed, (v) => $574a51285872e9b8$export$ae55be85d98224ed = v);
$parcel$export(module.exports, "cloneElement", () => $574a51285872e9b8$export$e530037191fcd5d7, (v) => $574a51285872e9b8$export$e530037191fcd5d7 = v);
$parcel$export(module.exports, "createContext", () => $574a51285872e9b8$export$fd42f52fd3ae1109, (v) => $574a51285872e9b8$export$fd42f52fd3ae1109 = v);
$parcel$export(module.exports, "createElement", () => $574a51285872e9b8$export$c8a8987d4410bf2d, (v) => $574a51285872e9b8$export$c8a8987d4410bf2d = v);
$parcel$export(module.exports, "createFactory", () => $574a51285872e9b8$export$d38cd72104c1f0e9, (v) => $574a51285872e9b8$export$d38cd72104c1f0e9 = v);
$parcel$export(module.exports, "createRef", () => $574a51285872e9b8$export$7d1e3a5e95ceca43, (v) => $574a51285872e9b8$export$7d1e3a5e95ceca43 = v);
$parcel$export(module.exports, "forwardRef", () => $574a51285872e9b8$export$257a8862b851cb5b, (v) => $574a51285872e9b8$export$257a8862b851cb5b = v);
$parcel$export(module.exports, "isValidElement", () => $574a51285872e9b8$export$a8257692ac88316c, (v) => $574a51285872e9b8$export$a8257692ac88316c = v);
$parcel$export(module.exports, "lazy", () => $574a51285872e9b8$export$488013bae63b21da, (v) => $574a51285872e9b8$export$488013bae63b21da = v);
$parcel$export(module.exports, "memo", () => $574a51285872e9b8$export$7c73462e0d25e514, (v) => $574a51285872e9b8$export$7c73462e0d25e514 = v);
$parcel$export(module.exports, "startTransition", () => $574a51285872e9b8$export$7568632d0d33d16d, (v) => $574a51285872e9b8$export$7568632d0d33d16d = v);
$parcel$export(module.exports, "unstable_act", () => $574a51285872e9b8$export$88948ce120ea2619, (v) => $574a51285872e9b8$export$88948ce120ea2619 = v);
$parcel$export(module.exports, "useCallback", () => $574a51285872e9b8$export$35808ee640e87ca7, (v) => $574a51285872e9b8$export$35808ee640e87ca7 = v);
$parcel$export(module.exports, "useContext", () => $574a51285872e9b8$export$fae74005e78b1a27, (v) => $574a51285872e9b8$export$fae74005e78b1a27 = v);
$parcel$export(module.exports, "useDebugValue", () => $574a51285872e9b8$export$dc8fbce3eb94dc1e, (v) => $574a51285872e9b8$export$dc8fbce3eb94dc1e = v);
$parcel$export(module.exports, "useDeferredValue", () => $574a51285872e9b8$export$6a7bc4e911dc01cf, (v) => $574a51285872e9b8$export$6a7bc4e911dc01cf = v);
$parcel$export(module.exports, "useEffect", () => $574a51285872e9b8$export$6d9c69b0de29b591, (v) => $574a51285872e9b8$export$6d9c69b0de29b591 = v);
$parcel$export(module.exports, "useId", () => $574a51285872e9b8$export$f680877a34711e37, (v) => $574a51285872e9b8$export$f680877a34711e37 = v);
$parcel$export(module.exports, "useImperativeHandle", () => $574a51285872e9b8$export$d5a552a76deda3c2, (v) => $574a51285872e9b8$export$d5a552a76deda3c2 = v);
$parcel$export(module.exports, "useInsertionEffect", () => $574a51285872e9b8$export$aaabe4eda9ed9969, (v) => $574a51285872e9b8$export$aaabe4eda9ed9969 = v);
$parcel$export(module.exports, "useLayoutEffect", () => $574a51285872e9b8$export$e5c5a5f917a5871c, (v) => $574a51285872e9b8$export$e5c5a5f917a5871c = v);
$parcel$export(module.exports, "useMemo", () => $574a51285872e9b8$export$1538c33de8887b59, (v) => $574a51285872e9b8$export$1538c33de8887b59 = v);
$parcel$export(module.exports, "useReducer", () => $574a51285872e9b8$export$13e3392192263954, (v) => $574a51285872e9b8$export$13e3392192263954 = v);
$parcel$export(module.exports, "useRef", () => $574a51285872e9b8$export$b8f5890fc79d6aca, (v) => $574a51285872e9b8$export$b8f5890fc79d6aca = v);
$parcel$export(module.exports, "useState", () => $574a51285872e9b8$export$60241385465d0a34, (v) => $574a51285872e9b8$export$60241385465d0a34 = v);
$parcel$export(module.exports, "useSyncExternalStore", () => $574a51285872e9b8$export$306c0aa65ff9ec16, (v) => $574a51285872e9b8$export$306c0aa65ff9ec16 = v);
$parcel$export(module.exports, "useTransition", () => $574a51285872e9b8$export$7b286972b8d8ccbf, (v) => $574a51285872e9b8$export$7b286972b8d8ccbf = v);
$parcel$export(module.exports, "version", () => $574a51285872e9b8$export$83d89fbfd8236492, (v) => $574a51285872e9b8$export$83d89fbfd8236492 = v);
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $574a51285872e9b8$export$dca3b0875bd9a954;
var $574a51285872e9b8$export$16fa2f45be04daa8;
var $574a51285872e9b8$export$ffb0004e005737fa;
var $574a51285872e9b8$export$e2c29f18771995cb;
var $574a51285872e9b8$export$221d75b3f55bb0bd;
var $574a51285872e9b8$export$5f8d39834fd61797;
var $574a51285872e9b8$export$74bf444e3cd11ea5;
var $574a51285872e9b8$export$ae55be85d98224ed;
var $574a51285872e9b8$export$e530037191fcd5d7;
var $574a51285872e9b8$export$fd42f52fd3ae1109;
var $574a51285872e9b8$export$c8a8987d4410bf2d;
var $574a51285872e9b8$export$d38cd72104c1f0e9;
var $574a51285872e9b8$export$7d1e3a5e95ceca43;
var $574a51285872e9b8$export$257a8862b851cb5b;
var $574a51285872e9b8$export$a8257692ac88316c;
var $574a51285872e9b8$export$488013bae63b21da;
var $574a51285872e9b8$export$7c73462e0d25e514;
var $574a51285872e9b8$export$7568632d0d33d16d;
var $574a51285872e9b8$export$88948ce120ea2619;
var $574a51285872e9b8$export$35808ee640e87ca7;
var $574a51285872e9b8$export$fae74005e78b1a27;
var $574a51285872e9b8$export$dc8fbce3eb94dc1e;
var $574a51285872e9b8$export$6a7bc4e911dc01cf;
var $574a51285872e9b8$export$6d9c69b0de29b591;
var $574a51285872e9b8$export$f680877a34711e37;
var $574a51285872e9b8$export$d5a552a76deda3c2;
var $574a51285872e9b8$export$aaabe4eda9ed9969;
var $574a51285872e9b8$export$e5c5a5f917a5871c;
var $574a51285872e9b8$export$1538c33de8887b59;
var $574a51285872e9b8$export$13e3392192263954;
var $574a51285872e9b8$export$b8f5890fc79d6aca;
var $574a51285872e9b8$export$60241385465d0a34;
var $574a51285872e9b8$export$306c0aa65ff9ec16;
var $574a51285872e9b8$export$7b286972b8d8ccbf;
var $574a51285872e9b8$export$83d89fbfd8236492;
"use strict";
var $574a51285872e9b8$var$l = Symbol.for("react.element"), $574a51285872e9b8$var$n = Symbol.for("react.portal"), $574a51285872e9b8$var$p = Symbol.for("react.fragment"), $574a51285872e9b8$var$q = Symbol.for("react.strict_mode"), $574a51285872e9b8$var$r = Symbol.for("react.profiler"), $574a51285872e9b8$var$t = Symbol.for("react.provider"), $574a51285872e9b8$var$u = Symbol.for("react.context"), $574a51285872e9b8$var$v = Symbol.for("react.forward_ref"), $574a51285872e9b8$var$w = Symbol.for("react.suspense"), $574a51285872e9b8$var$x = Symbol.for("react.memo"), $574a51285872e9b8$var$y = Symbol.for("react.lazy"), $574a51285872e9b8$var$z = Symbol.iterator;
function $574a51285872e9b8$var$A(a) {
    if (null === a || "object" !== typeof a) return null;
    a = $574a51285872e9b8$var$z && a[$574a51285872e9b8$var$z] || a["@@iterator"];
    return "function" === typeof a ? a : null;
}
var $574a51285872e9b8$var$B = {
    isMounted: function() {
        return !1;
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}, $574a51285872e9b8$var$C = Object.assign, $574a51285872e9b8$var$D = {};
function $574a51285872e9b8$var$E(a, b, e) {
    this.props = a;
    this.context = b;
    this.refs = $574a51285872e9b8$var$D;
    this.updater = e || $574a51285872e9b8$var$B;
}
$574a51285872e9b8$var$E.prototype.isReactComponent = {};
$574a51285872e9b8$var$E.prototype.setState = function(a, b) {
    if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, a, b, "setState");
};
$574a51285872e9b8$var$E.prototype.forceUpdate = function(a) {
    this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};
function $574a51285872e9b8$var$F() {}
$574a51285872e9b8$var$F.prototype = $574a51285872e9b8$var$E.prototype;
function $574a51285872e9b8$var$G(a, b, e) {
    this.props = a;
    this.context = b;
    this.refs = $574a51285872e9b8$var$D;
    this.updater = e || $574a51285872e9b8$var$B;
}
var $574a51285872e9b8$var$H = $574a51285872e9b8$var$G.prototype = new $574a51285872e9b8$var$F;
$574a51285872e9b8$var$H.constructor = $574a51285872e9b8$var$G;
$574a51285872e9b8$var$C($574a51285872e9b8$var$H, $574a51285872e9b8$var$E.prototype);
$574a51285872e9b8$var$H.isPureReactComponent = !0;
var $574a51285872e9b8$var$I = Array.isArray, $574a51285872e9b8$var$J = Object.prototype.hasOwnProperty, $574a51285872e9b8$var$K = {
    current: null
}, $574a51285872e9b8$var$L = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function $574a51285872e9b8$var$M(a, b, e) {
    var d, c = {}, k = null, h = null;
    if (null != b) for(d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), b)$574a51285872e9b8$var$J.call(b, d) && !$574a51285872e9b8$var$L.hasOwnProperty(d) && (c[d] = b[d]);
    var g = arguments.length - 2;
    if (1 === g) c.children = e;
    else if (1 < g) {
        for(var f = Array(g), m = 0; m < g; m++)f[m] = arguments[m + 2];
        c.children = f;
    }
    if (a && a.defaultProps) for(d in g = a.defaultProps, g)void 0 === c[d] && (c[d] = g[d]);
    return {
        $$typeof: $574a51285872e9b8$var$l,
        type: a,
        key: k,
        ref: h,
        props: c,
        _owner: $574a51285872e9b8$var$K.current
    };
}
function $574a51285872e9b8$var$N(a, b) {
    return {
        $$typeof: $574a51285872e9b8$var$l,
        type: a.type,
        key: b,
        ref: a.ref,
        props: a.props,
        _owner: a._owner
    };
}
function $574a51285872e9b8$var$O(a) {
    return "object" === typeof a && null !== a && a.$$typeof === $574a51285872e9b8$var$l;
}
function $574a51285872e9b8$var$escape(a) {
    var b = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + a.replace(/[=:]/g, function(a) {
        return b[a];
    });
}
var $574a51285872e9b8$var$P = /\/+/g;
function $574a51285872e9b8$var$Q(a, b) {
    return "object" === typeof a && null !== a && null != a.key ? $574a51285872e9b8$var$escape("" + a.key) : b.toString(36);
}
function $574a51285872e9b8$var$R(a, b, e, d, c) {
    var k = typeof a;
    if ("undefined" === k || "boolean" === k) a = null;
    var h = !1;
    if (null === a) h = !0;
    else switch(k){
        case "string":
        case "number":
            h = !0;
            break;
        case "object":
            switch(a.$$typeof){
                case $574a51285872e9b8$var$l:
                case $574a51285872e9b8$var$n:
                    h = !0;
            }
    }
    if (h) return h = a, c = c(h), a = "" === d ? "." + $574a51285872e9b8$var$Q(h, 0) : d, $574a51285872e9b8$var$I(c) ? (e = "", null != a && (e = a.replace($574a51285872e9b8$var$P, "$&/") + "/"), $574a51285872e9b8$var$R(c, b, e, "", function(a) {
        return a;
    })) : null != c && ($574a51285872e9b8$var$O(c) && (c = $574a51285872e9b8$var$N(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace($574a51285872e9b8$var$P, "$&/") + "/") + a)), b.push(c)), 1;
    h = 0;
    d = "" === d ? "." : d + ":";
    if ($574a51285872e9b8$var$I(a)) for(var g = 0; g < a.length; g++){
        k = a[g];
        var f = d + $574a51285872e9b8$var$Q(k, g);
        h += $574a51285872e9b8$var$R(k, b, e, f, c);
    }
    else if (f = $574a51285872e9b8$var$A(a), "function" === typeof f) for(a = f.call(a), g = 0; !(k = a.next()).done;)k = k.value, f = d + $574a51285872e9b8$var$Q(k, g++), h += $574a51285872e9b8$var$R(k, b, e, f, c);
    else if ("object" === k) throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
    return h;
}
function $574a51285872e9b8$var$S(a, b, e) {
    if (null == a) return a;
    var d = [], c = 0;
    $574a51285872e9b8$var$R(a, d, "", "", function(a) {
        return b.call(e, a, c++);
    });
    return d;
}
function $574a51285872e9b8$var$T(a) {
    if (-1 === a._status) {
        var b = a._result;
        b = b();
        b.then(function(b) {
            if (0 === a._status || -1 === a._status) a._status = 1, a._result = b;
        }, function(b) {
            if (0 === a._status || -1 === a._status) a._status = 2, a._result = b;
        });
        -1 === a._status && (a._status = 0, a._result = b);
    }
    if (1 === a._status) return a._result.default;
    throw a._result;
}
var $574a51285872e9b8$var$U = {
    current: null
}, $574a51285872e9b8$var$V = {
    transition: null
}, $574a51285872e9b8$var$W = {
    ReactCurrentDispatcher: $574a51285872e9b8$var$U,
    ReactCurrentBatchConfig: $574a51285872e9b8$var$V,
    ReactCurrentOwner: $574a51285872e9b8$var$K
};
$574a51285872e9b8$export$dca3b0875bd9a954 = {
    map: $574a51285872e9b8$var$S,
    forEach: function(a, b, e) {
        $574a51285872e9b8$var$S(a, function() {
            b.apply(this, arguments);
        }, e);
    },
    count: function(a) {
        var b = 0;
        $574a51285872e9b8$var$S(a, function() {
            b++;
        });
        return b;
    },
    toArray: function(a) {
        return $574a51285872e9b8$var$S(a, function(a) {
            return a;
        }) || [];
    },
    only: function(a) {
        if (!$574a51285872e9b8$var$O(a)) throw Error("React.Children.only expected to receive a single React element child.");
        return a;
    }
};
$574a51285872e9b8$export$16fa2f45be04daa8 = $574a51285872e9b8$var$E;
$574a51285872e9b8$export$ffb0004e005737fa = $574a51285872e9b8$var$p;
$574a51285872e9b8$export$e2c29f18771995cb = $574a51285872e9b8$var$r;
$574a51285872e9b8$export$221d75b3f55bb0bd = $574a51285872e9b8$var$G;
$574a51285872e9b8$export$5f8d39834fd61797 = $574a51285872e9b8$var$q;
$574a51285872e9b8$export$74bf444e3cd11ea5 = $574a51285872e9b8$var$w;
$574a51285872e9b8$export$ae55be85d98224ed = $574a51285872e9b8$var$W;
$574a51285872e9b8$export$e530037191fcd5d7 = function(a, b, e) {
    if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
    var d = $574a51285872e9b8$var$C({}, a.props), c = a.key, k = a.ref, h = a._owner;
    if (null != b) {
        void 0 !== b.ref && (k = b.ref, h = $574a51285872e9b8$var$K.current);
        void 0 !== b.key && (c = "" + b.key);
        if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
        for(f in b)$574a51285872e9b8$var$J.call(b, f) && !$574a51285872e9b8$var$L.hasOwnProperty(f) && (d[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
    }
    var f = arguments.length - 2;
    if (1 === f) d.children = e;
    else if (1 < f) {
        g = Array(f);
        for(var m = 0; m < f; m++)g[m] = arguments[m + 2];
        d.children = g;
    }
    return {
        $$typeof: $574a51285872e9b8$var$l,
        type: a.type,
        key: c,
        ref: k,
        props: d,
        _owner: h
    };
};
$574a51285872e9b8$export$fd42f52fd3ae1109 = function(a) {
    a = {
        $$typeof: $574a51285872e9b8$var$u,
        _currentValue: a,
        _currentValue2: a,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    };
    a.Provider = {
        $$typeof: $574a51285872e9b8$var$t,
        _context: a
    };
    return a.Consumer = a;
};
$574a51285872e9b8$export$c8a8987d4410bf2d = $574a51285872e9b8$var$M;
$574a51285872e9b8$export$d38cd72104c1f0e9 = function(a) {
    var b = $574a51285872e9b8$var$M.bind(null, a);
    b.type = a;
    return b;
};
$574a51285872e9b8$export$7d1e3a5e95ceca43 = function() {
    return {
        current: null
    };
};
$574a51285872e9b8$export$257a8862b851cb5b = function(a) {
    return {
        $$typeof: $574a51285872e9b8$var$v,
        render: a
    };
};
$574a51285872e9b8$export$a8257692ac88316c = $574a51285872e9b8$var$O;
$574a51285872e9b8$export$488013bae63b21da = function(a) {
    return {
        $$typeof: $574a51285872e9b8$var$y,
        _payload: {
            _status: -1,
            _result: a
        },
        _init: $574a51285872e9b8$var$T
    };
};
$574a51285872e9b8$export$7c73462e0d25e514 = function(a, b) {
    return {
        $$typeof: $574a51285872e9b8$var$x,
        type: a,
        compare: void 0 === b ? null : b
    };
};
$574a51285872e9b8$export$7568632d0d33d16d = function(a) {
    var b = $574a51285872e9b8$var$V.transition;
    $574a51285872e9b8$var$V.transition = {};
    try {
        a();
    } finally{
        $574a51285872e9b8$var$V.transition = b;
    }
};
$574a51285872e9b8$export$88948ce120ea2619 = function() {
    throw Error("act(...) is not supported in production builds of React.");
};
$574a51285872e9b8$export$35808ee640e87ca7 = function(a, b) {
    return $574a51285872e9b8$var$U.current.useCallback(a, b);
};
$574a51285872e9b8$export$fae74005e78b1a27 = function(a) {
    return $574a51285872e9b8$var$U.current.useContext(a);
};
$574a51285872e9b8$export$dc8fbce3eb94dc1e = function() {};
$574a51285872e9b8$export$6a7bc4e911dc01cf = function(a) {
    return $574a51285872e9b8$var$U.current.useDeferredValue(a);
};
$574a51285872e9b8$export$6d9c69b0de29b591 = function(a, b) {
    return $574a51285872e9b8$var$U.current.useEffect(a, b);
};
$574a51285872e9b8$export$f680877a34711e37 = function() {
    return $574a51285872e9b8$var$U.current.useId();
};
$574a51285872e9b8$export$d5a552a76deda3c2 = function(a, b, e) {
    return $574a51285872e9b8$var$U.current.useImperativeHandle(a, b, e);
};
$574a51285872e9b8$export$aaabe4eda9ed9969 = function(a, b) {
    return $574a51285872e9b8$var$U.current.useInsertionEffect(a, b);
};
$574a51285872e9b8$export$e5c5a5f917a5871c = function(a, b) {
    return $574a51285872e9b8$var$U.current.useLayoutEffect(a, b);
};
$574a51285872e9b8$export$1538c33de8887b59 = function(a, b) {
    return $574a51285872e9b8$var$U.current.useMemo(a, b);
};
$574a51285872e9b8$export$13e3392192263954 = function(a, b, e) {
    return $574a51285872e9b8$var$U.current.useReducer(a, b, e);
};
$574a51285872e9b8$export$b8f5890fc79d6aca = function(a) {
    return $574a51285872e9b8$var$U.current.useRef(a);
};
$574a51285872e9b8$export$60241385465d0a34 = function(a) {
    return $574a51285872e9b8$var$U.current.useState(a);
};
$574a51285872e9b8$export$306c0aa65ff9ec16 = function(a, b, e) {
    return $574a51285872e9b8$var$U.current.useSyncExternalStore(a, b, e);
};
$574a51285872e9b8$export$7b286972b8d8ccbf = function() {
    return $574a51285872e9b8$var$U.current.useTransition();
};
$574a51285872e9b8$export$83d89fbfd8236492 = "18.2.0";

});



parcelRegister("bgpZC", function(module, exports) {

$parcel$export(module.exports, "__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED", () => $833559fe574b4225$export$ae55be85d98224ed, (v) => $833559fe574b4225$export$ae55be85d98224ed = v);
$parcel$export(module.exports, "createPortal", () => $833559fe574b4225$export$d39a5bbd09211389, (v) => $833559fe574b4225$export$d39a5bbd09211389 = v);
$parcel$export(module.exports, "createRoot", () => $833559fe574b4225$export$882461b6382ed46c, (v) => $833559fe574b4225$export$882461b6382ed46c = v);
$parcel$export(module.exports, "findDOMNode", () => $833559fe574b4225$export$466bfc07425424d5, (v) => $833559fe574b4225$export$466bfc07425424d5 = v);
$parcel$export(module.exports, "flushSync", () => $833559fe574b4225$export$cd75ccfd720a3cd4, (v) => $833559fe574b4225$export$cd75ccfd720a3cd4 = v);
$parcel$export(module.exports, "hydrate", () => $833559fe574b4225$export$fa8d919ba61d84db, (v) => $833559fe574b4225$export$fa8d919ba61d84db = v);
$parcel$export(module.exports, "hydrateRoot", () => $833559fe574b4225$export$757ceba2d55c277e, (v) => $833559fe574b4225$export$757ceba2d55c277e = v);
$parcel$export(module.exports, "render", () => $833559fe574b4225$export$b3890eb0ae9dca99, (v) => $833559fe574b4225$export$b3890eb0ae9dca99 = v);
$parcel$export(module.exports, "unmountComponentAtNode", () => $833559fe574b4225$export$502457920280e6be, (v) => $833559fe574b4225$export$502457920280e6be = v);
$parcel$export(module.exports, "unstable_batchedUpdates", () => $833559fe574b4225$export$c78a37762a8d58e1, (v) => $833559fe574b4225$export$c78a37762a8d58e1 = v);
$parcel$export(module.exports, "unstable_renderSubtreeIntoContainer", () => $833559fe574b4225$export$dc54d992c10e8a18, (v) => $833559fe574b4225$export$dc54d992c10e8a18 = v);
$parcel$export(module.exports, "version", () => $833559fe574b4225$export$83d89fbfd8236492, (v) => $833559fe574b4225$export$83d89fbfd8236492 = v);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ /*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/ var $833559fe574b4225$export$ae55be85d98224ed;
var $833559fe574b4225$export$d39a5bbd09211389;
var $833559fe574b4225$export$882461b6382ed46c;
var $833559fe574b4225$export$466bfc07425424d5;
var $833559fe574b4225$export$cd75ccfd720a3cd4;
var $833559fe574b4225$export$fa8d919ba61d84db;
var $833559fe574b4225$export$757ceba2d55c277e;
var $833559fe574b4225$export$b3890eb0ae9dca99;
var $833559fe574b4225$export$502457920280e6be;
var $833559fe574b4225$export$c78a37762a8d58e1;
var $833559fe574b4225$export$dc54d992c10e8a18;
var $833559fe574b4225$export$83d89fbfd8236492;
"use strict";

var $d4J5n = parcelRequire("d4J5n");

var $fw68E = parcelRequire("fw68E");
function $833559fe574b4225$var$p(a) {
    for(var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++)b += "&args[]=" + encodeURIComponent(arguments[c]);
    return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var $833559fe574b4225$var$da = new Set, $833559fe574b4225$var$ea = {};
function $833559fe574b4225$var$fa(a, b) {
    $833559fe574b4225$var$ha(a, b);
    $833559fe574b4225$var$ha(a + "Capture", b);
}
function $833559fe574b4225$var$ha(a, b) {
    $833559fe574b4225$var$ea[a] = b;
    for(a = 0; a < b.length; a++)$833559fe574b4225$var$da.add(b[a]);
}
var $833559fe574b4225$var$ia = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement), $833559fe574b4225$var$ja = Object.prototype.hasOwnProperty, $833559fe574b4225$var$ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, $833559fe574b4225$var$la = {}, $833559fe574b4225$var$ma = {};
function $833559fe574b4225$var$oa(a) {
    if ($833559fe574b4225$var$ja.call($833559fe574b4225$var$ma, a)) return !0;
    if ($833559fe574b4225$var$ja.call($833559fe574b4225$var$la, a)) return !1;
    if ($833559fe574b4225$var$ka.test(a)) return $833559fe574b4225$var$ma[a] = !0;
    $833559fe574b4225$var$la[a] = !0;
    return !1;
}
function $833559fe574b4225$var$pa(a, b, c, d) {
    if (null !== c && 0 === c.type) return !1;
    switch(typeof b){
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            if (d) return !1;
            if (null !== c) return !c.acceptsBooleans;
            a = a.toLowerCase().slice(0, 5);
            return "data-" !== a && "aria-" !== a;
        default:
            return !1;
    }
}
function $833559fe574b4225$var$qa(a, b, c, d) {
    if (null === b || "undefined" === typeof b || $833559fe574b4225$var$pa(a, b, c, d)) return !0;
    if (d) return !1;
    if (null !== c) switch(c.type){
        case 3:
            return !b;
        case 4:
            return !1 === b;
        case 5:
            return isNaN(b);
        case 6:
            return isNaN(b) || 1 > b;
    }
    return !1;
}
function $833559fe574b4225$var$v(a, b, c, d, e, f, g) {
    this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
    this.attributeName = d;
    this.attributeNamespace = e;
    this.mustUseProperty = c;
    this.propertyName = a;
    this.type = b;
    this.sanitizeURL = f;
    this.removeEmptyString = g;
}
var $833559fe574b4225$var$z = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
    $833559fe574b4225$var$z[a] = new $833559fe574b4225$var$v(a, 0, !1, a, null, !1, !1);
});
[
    [
        "acceptCharset",
        "accept-charset"
    ],
    [
        "className",
        "class"
    ],
    [
        "htmlFor",
        "for"
    ],
    [
        "httpEquiv",
        "http-equiv"
    ]
].forEach(function(a) {
    var b = a[0];
    $833559fe574b4225$var$z[b] = new $833559fe574b4225$var$v(b, 1, !1, a[1], null, !1, !1);
});
[
    "contentEditable",
    "draggable",
    "spellCheck",
    "value"
].forEach(function(a) {
    $833559fe574b4225$var$z[a] = new $833559fe574b4225$var$v(a, 2, !1, a.toLowerCase(), null, !1, !1);
});
[
    "autoReverse",
    "externalResourcesRequired",
    "focusable",
    "preserveAlpha"
].forEach(function(a) {
    $833559fe574b4225$var$z[a] = new $833559fe574b4225$var$v(a, 2, !1, a, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
    $833559fe574b4225$var$z[a] = new $833559fe574b4225$var$v(a, 3, !1, a.toLowerCase(), null, !1, !1);
});
[
    "checked",
    "multiple",
    "muted",
    "selected"
].forEach(function(a) {
    $833559fe574b4225$var$z[a] = new $833559fe574b4225$var$v(a, 3, !0, a, null, !1, !1);
});
[
    "capture",
    "download"
].forEach(function(a) {
    $833559fe574b4225$var$z[a] = new $833559fe574b4225$var$v(a, 4, !1, a, null, !1, !1);
});
[
    "cols",
    "rows",
    "size",
    "span"
].forEach(function(a) {
    $833559fe574b4225$var$z[a] = new $833559fe574b4225$var$v(a, 6, !1, a, null, !1, !1);
});
[
    "rowSpan",
    "start"
].forEach(function(a) {
    $833559fe574b4225$var$z[a] = new $833559fe574b4225$var$v(a, 5, !1, a.toLowerCase(), null, !1, !1);
});
var $833559fe574b4225$var$ra = /[\-:]([a-z])/g;
function $833559fe574b4225$var$sa(a) {
    return a[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
    var b = a.replace($833559fe574b4225$var$ra, $833559fe574b4225$var$sa);
    $833559fe574b4225$var$z[b] = new $833559fe574b4225$var$v(b, 1, !1, a, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
    var b = a.replace($833559fe574b4225$var$ra, $833559fe574b4225$var$sa);
    $833559fe574b4225$var$z[b] = new $833559fe574b4225$var$v(b, 1, !1, a, "http://www.w3.org/1999/xlink", !1, !1);
});
[
    "xml:base",
    "xml:lang",
    "xml:space"
].forEach(function(a) {
    var b = a.replace($833559fe574b4225$var$ra, $833559fe574b4225$var$sa);
    $833559fe574b4225$var$z[b] = new $833559fe574b4225$var$v(b, 1, !1, a, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
[
    "tabIndex",
    "crossOrigin"
].forEach(function(a) {
    $833559fe574b4225$var$z[a] = new $833559fe574b4225$var$v(a, 1, !1, a.toLowerCase(), null, !1, !1);
});
$833559fe574b4225$var$z.xlinkHref = new $833559fe574b4225$var$v("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
[
    "src",
    "href",
    "action",
    "formAction"
].forEach(function(a) {
    $833559fe574b4225$var$z[a] = new $833559fe574b4225$var$v(a, 1, !1, a.toLowerCase(), null, !0, !0);
});
function $833559fe574b4225$var$ta(a, b, c, d) {
    var e = $833559fe574b4225$var$z.hasOwnProperty(b) ? $833559fe574b4225$var$z[b] : null;
    if (null !== e ? 0 !== e.type : d || !(2 < b.length) || "o" !== b[0] && "O" !== b[0] || "n" !== b[1] && "N" !== b[1]) $833559fe574b4225$var$qa(b, c, e, d) && (c = null), d || null === e ? $833559fe574b4225$var$oa(b) && (null === c ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = null === c ? 3 === e.type ? !1 : "" : c : (b = e.attributeName, d = e.attributeNamespace, null === c ? a.removeAttribute(b) : (e = e.type, c = 3 === e || 4 === e && !0 === c ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c)));
}
var $833559fe574b4225$var$ua = $d4J5n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, $833559fe574b4225$var$va = Symbol.for("react.element"), $833559fe574b4225$var$wa = Symbol.for("react.portal"), $833559fe574b4225$var$ya = Symbol.for("react.fragment"), $833559fe574b4225$var$za = Symbol.for("react.strict_mode"), $833559fe574b4225$var$Aa = Symbol.for("react.profiler"), $833559fe574b4225$var$Ba = Symbol.for("react.provider"), $833559fe574b4225$var$Ca = Symbol.for("react.context"), $833559fe574b4225$var$Da = Symbol.for("react.forward_ref"), $833559fe574b4225$var$Ea = Symbol.for("react.suspense"), $833559fe574b4225$var$Fa = Symbol.for("react.suspense_list"), $833559fe574b4225$var$Ga = Symbol.for("react.memo"), $833559fe574b4225$var$Ha = Symbol.for("react.lazy");
Symbol.for("react.scope");
Symbol.for("react.debug_trace_mode");
var $833559fe574b4225$var$Ia = Symbol.for("react.offscreen");
Symbol.for("react.legacy_hidden");
Symbol.for("react.cache");
Symbol.for("react.tracing_marker");
var $833559fe574b4225$var$Ja = Symbol.iterator;
function $833559fe574b4225$var$Ka(a) {
    if (null === a || "object" !== typeof a) return null;
    a = $833559fe574b4225$var$Ja && a[$833559fe574b4225$var$Ja] || a["@@iterator"];
    return "function" === typeof a ? a : null;
}
var $833559fe574b4225$var$A = Object.assign, $833559fe574b4225$var$La;
function $833559fe574b4225$var$Ma(a) {
    if (void 0 === $833559fe574b4225$var$La) try {
        throw Error();
    } catch (c) {
        var b = c.stack.trim().match(/\n( *(at )?)/);
        $833559fe574b4225$var$La = b && b[1] || "";
    }
    return "\n" + $833559fe574b4225$var$La + a;
}
var $833559fe574b4225$var$Na = !1;
function $833559fe574b4225$var$Oa(a, b) {
    if (!a || $833559fe574b4225$var$Na) return "";
    $833559fe574b4225$var$Na = !0;
    var c = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (b) {
            if (b = function() {
                throw Error();
            }, Object.defineProperty(b.prototype, "props", {
                set: function() {
                    throw Error();
                }
            }), "object" === typeof Reflect && Reflect.construct) {
                try {
                    Reflect.construct(b, []);
                } catch (l) {
                    var d = l;
                }
                Reflect.construct(a, [], b);
            } else {
                try {
                    b.call();
                } catch (l) {
                    d = l;
                }
                a.call(b.prototype);
            }
        } else {
            try {
                throw Error();
            } catch (l) {
                d = l;
            }
            a();
        }
    } catch (l) {
        if (l && d && "string" === typeof l.stack) {
            for(var e = l.stack.split("\n"), f = d.stack.split("\n"), g = e.length - 1, h = f.length - 1; 1 <= g && 0 <= h && e[g] !== f[h];)h--;
            for(; 1 <= g && 0 <= h; g--, h--)if (e[g] !== f[h]) {
                if (1 !== g || 1 !== h) {
                    do if (g--, h--, 0 > h || e[g] !== f[h]) {
                        var k = "\n" + e[g].replace(" at new ", " at ");
                        a.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", a.displayName));
                        return k;
                    }
                    while (1 <= g && 0 <= h);
                }
                break;
            }
        }
    } finally{
        $833559fe574b4225$var$Na = !1, Error.prepareStackTrace = c;
    }
    return (a = a ? a.displayName || a.name : "") ? $833559fe574b4225$var$Ma(a) : "";
}
function $833559fe574b4225$var$Pa(a) {
    switch(a.tag){
        case 5:
            return $833559fe574b4225$var$Ma(a.type);
        case 16:
            return $833559fe574b4225$var$Ma("Lazy");
        case 13:
            return $833559fe574b4225$var$Ma("Suspense");
        case 19:
            return $833559fe574b4225$var$Ma("SuspenseList");
        case 0:
        case 2:
        case 15:
            return a = $833559fe574b4225$var$Oa(a.type, !1), a;
        case 11:
            return a = $833559fe574b4225$var$Oa(a.type.render, !1), a;
        case 1:
            return a = $833559fe574b4225$var$Oa(a.type, !0), a;
        default:
            return "";
    }
}
function $833559fe574b4225$var$Qa(a) {
    if (null == a) return null;
    if ("function" === typeof a) return a.displayName || a.name || null;
    if ("string" === typeof a) return a;
    switch(a){
        case $833559fe574b4225$var$ya:
            return "Fragment";
        case $833559fe574b4225$var$wa:
            return "Portal";
        case $833559fe574b4225$var$Aa:
            return "Profiler";
        case $833559fe574b4225$var$za:
            return "StrictMode";
        case $833559fe574b4225$var$Ea:
            return "Suspense";
        case $833559fe574b4225$var$Fa:
            return "SuspenseList";
    }
    if ("object" === typeof a) switch(a.$$typeof){
        case $833559fe574b4225$var$Ca:
            return (a.displayName || "Context") + ".Consumer";
        case $833559fe574b4225$var$Ba:
            return (a._context.displayName || "Context") + ".Provider";
        case $833559fe574b4225$var$Da:
            var b = a.render;
            a = a.displayName;
            a || (a = b.displayName || b.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
            return a;
        case $833559fe574b4225$var$Ga:
            return b = a.displayName || null, null !== b ? b : $833559fe574b4225$var$Qa(a.type) || "Memo";
        case $833559fe574b4225$var$Ha:
            b = a._payload;
            a = a._init;
            try {
                return $833559fe574b4225$var$Qa(a(b));
            } catch (c) {}
    }
    return null;
}
function $833559fe574b4225$var$Ra(a) {
    var b = a.type;
    switch(a.tag){
        case 24:
            return "Cache";
        case 9:
            return (b.displayName || "Context") + ".Consumer";
        case 10:
            return (b._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return a = b.render, a = a.displayName || a.name || "", b.displayName || ("" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return b;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return $833559fe574b4225$var$Qa(b);
        case 8:
            return b === $833559fe574b4225$var$za ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if ("function" === typeof b) return b.displayName || b.name || null;
            if ("string" === typeof b) return b;
    }
    return null;
}
function $833559fe574b4225$var$Sa(a) {
    switch(typeof a){
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return a;
        case "object":
            return a;
        default:
            return "";
    }
}
function $833559fe574b4225$var$Ta(a) {
    var b = a.type;
    return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b || "radio" === b);
}
function $833559fe574b4225$var$Ua(a) {
    var b = $833559fe574b4225$var$Ta(a) ? "checked" : "value", c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b), d = "" + a[b];
    if (!a.hasOwnProperty(b) && "undefined" !== typeof c && "function" === typeof c.get && "function" === typeof c.set) {
        var e = c.get, f = c.set;
        Object.defineProperty(a, b, {
            configurable: !0,
            get: function() {
                return e.call(this);
            },
            set: function(a) {
                d = "" + a;
                f.call(this, a);
            }
        });
        Object.defineProperty(a, b, {
            enumerable: c.enumerable
        });
        return {
            getValue: function() {
                return d;
            },
            setValue: function(a) {
                d = "" + a;
            },
            stopTracking: function() {
                a._valueTracker = null;
                delete a[b];
            }
        };
    }
}
function $833559fe574b4225$var$Va(a) {
    a._valueTracker || (a._valueTracker = $833559fe574b4225$var$Ua(a));
}
function $833559fe574b4225$var$Wa(a) {
    if (!a) return !1;
    var b = a._valueTracker;
    if (!b) return !0;
    var c = b.getValue();
    var d = "";
    a && (d = $833559fe574b4225$var$Ta(a) ? a.checked ? "true" : "false" : a.value);
    a = d;
    return a !== c ? (b.setValue(a), !0) : !1;
}
function $833559fe574b4225$var$Xa(a) {
    a = a || ("undefined" !== typeof document ? document : void 0);
    if ("undefined" === typeof a) return null;
    try {
        return a.activeElement || a.body;
    } catch (b) {
        return a.body;
    }
}
function $833559fe574b4225$var$Ya(a, b) {
    var c = b.checked;
    return $833559fe574b4225$var$A({}, b, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: null != c ? c : a._wrapperState.initialChecked
    });
}
function $833559fe574b4225$var$Za(a, b) {
    var c = null == b.defaultValue ? "" : b.defaultValue, d = null != b.checked ? b.checked : b.defaultChecked;
    c = $833559fe574b4225$var$Sa(null != b.value ? b.value : c);
    a._wrapperState = {
        initialChecked: d,
        initialValue: c,
        controlled: "checkbox" === b.type || "radio" === b.type ? null != b.checked : null != b.value
    };
}
function $833559fe574b4225$var$ab(a, b) {
    b = b.checked;
    null != b && $833559fe574b4225$var$ta(a, "checked", b, !1);
}
function $833559fe574b4225$var$bb(a, b) {
    $833559fe574b4225$var$ab(a, b);
    var c = $833559fe574b4225$var$Sa(b.value), d = b.type;
    if (null != c) {
        if ("number" === d) {
            if (0 === c && "" === a.value || a.value != c) a.value = "" + c;
        } else a.value !== "" + c && (a.value = "" + c);
    } else if ("submit" === d || "reset" === d) {
        a.removeAttribute("value");
        return;
    }
    b.hasOwnProperty("value") ? $833559fe574b4225$var$cb(a, b.type, c) : b.hasOwnProperty("defaultValue") && $833559fe574b4225$var$cb(a, b.type, $833559fe574b4225$var$Sa(b.defaultValue));
    null == b.checked && null != b.defaultChecked && (a.defaultChecked = !!b.defaultChecked);
}
function $833559fe574b4225$var$db(a, b, c) {
    if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
        var d = b.type;
        if (!("submit" !== d && "reset" !== d || void 0 !== b.value && null !== b.value)) return;
        b = "" + a._wrapperState.initialValue;
        c || b === a.value || (a.value = b);
        a.defaultValue = b;
    }
    c = a.name;
    "" !== c && (a.name = "");
    a.defaultChecked = !!a._wrapperState.initialChecked;
    "" !== c && (a.name = c);
}
function $833559fe574b4225$var$cb(a, b, c) {
    if ("number" !== b || $833559fe574b4225$var$Xa(a.ownerDocument) !== a) null == c ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
}
var $833559fe574b4225$var$eb = Array.isArray;
function $833559fe574b4225$var$fb(a, b, c, d) {
    a = a.options;
    if (b) {
        b = {};
        for(var e = 0; e < c.length; e++)b["$" + c[e]] = !0;
        for(c = 0; c < a.length; c++)e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), e && d && (a[c].defaultSelected = !0);
    } else {
        c = "" + $833559fe574b4225$var$Sa(c);
        b = null;
        for(e = 0; e < a.length; e++){
            if (a[e].value === c) {
                a[e].selected = !0;
                d && (a[e].defaultSelected = !0);
                return;
            }
            null !== b || a[e].disabled || (b = a[e]);
        }
        null !== b && (b.selected = !0);
    }
}
function $833559fe574b4225$var$gb(a, b) {
    if (null != b.dangerouslySetInnerHTML) throw Error($833559fe574b4225$var$p(91));
    return $833559fe574b4225$var$A({}, b, {
        value: void 0,
        defaultValue: void 0,
        children: "" + a._wrapperState.initialValue
    });
}
function $833559fe574b4225$var$hb(a, b) {
    var c = b.value;
    if (null == c) {
        c = b.children;
        b = b.defaultValue;
        if (null != c) {
            if (null != b) throw Error($833559fe574b4225$var$p(92));
            if ($833559fe574b4225$var$eb(c)) {
                if (1 < c.length) throw Error($833559fe574b4225$var$p(93));
                c = c[0];
            }
            b = c;
        }
        null == b && (b = "");
        c = b;
    }
    a._wrapperState = {
        initialValue: $833559fe574b4225$var$Sa(c)
    };
}
function $833559fe574b4225$var$ib(a, b) {
    var c = $833559fe574b4225$var$Sa(b.value), d = $833559fe574b4225$var$Sa(b.defaultValue);
    null != c && (c = "" + c, c !== a.value && (a.value = c), null == b.defaultValue && a.defaultValue !== c && (a.defaultValue = c));
    null != d && (a.defaultValue = "" + d);
}
function $833559fe574b4225$var$jb(a) {
    var b = a.textContent;
    b === a._wrapperState.initialValue && "" !== b && null !== b && (a.value = b);
}
function $833559fe574b4225$var$kb(a) {
    switch(a){
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml";
    }
}
function $833559fe574b4225$var$lb(a, b) {
    return null == a || "http://www.w3.org/1999/xhtml" === a ? $833559fe574b4225$var$kb(b) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b ? "http://www.w3.org/1999/xhtml" : a;
}
var $833559fe574b4225$var$mb, $833559fe574b4225$var$nb = function(a) {
    return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b, c, d, e) {
        MSApp.execUnsafeLocalFunction(function() {
            return a(b, c, d, e);
        });
    } : a;
}(function(a, b) {
    if ("http://www.w3.org/2000/svg" !== a.namespaceURI || "innerHTML" in a) a.innerHTML = b;
    else {
        $833559fe574b4225$var$mb = $833559fe574b4225$var$mb || document.createElement("div");
        $833559fe574b4225$var$mb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";
        for(b = $833559fe574b4225$var$mb.firstChild; a.firstChild;)a.removeChild(a.firstChild);
        for(; b.firstChild;)a.appendChild(b.firstChild);
    }
});
function $833559fe574b4225$var$ob(a, b) {
    if (b) {
        var c = a.firstChild;
        if (c && c === a.lastChild && 3 === c.nodeType) {
            c.nodeValue = b;
            return;
        }
    }
    a.textContent = b;
}
var $833559fe574b4225$var$pb = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}, $833559fe574b4225$var$qb = [
    "Webkit",
    "ms",
    "Moz",
    "O"
];
Object.keys($833559fe574b4225$var$pb).forEach(function(a) {
    $833559fe574b4225$var$qb.forEach(function(b) {
        b = b + a.charAt(0).toUpperCase() + a.substring(1);
        $833559fe574b4225$var$pb[b] = $833559fe574b4225$var$pb[a];
    });
});
function $833559fe574b4225$var$rb(a, b, c) {
    return null == b || "boolean" === typeof b || "" === b ? "" : c || "number" !== typeof b || 0 === b || $833559fe574b4225$var$pb.hasOwnProperty(a) && $833559fe574b4225$var$pb[a] ? ("" + b).trim() : b + "px";
}
function $833559fe574b4225$var$sb(a, b) {
    a = a.style;
    for(var c in b)if (b.hasOwnProperty(c)) {
        var d = 0 === c.indexOf("--"), e = $833559fe574b4225$var$rb(c, b[c], d);
        "float" === c && (c = "cssFloat");
        d ? a.setProperty(c, e) : a[c] = e;
    }
}
var $833559fe574b4225$var$tb = $833559fe574b4225$var$A({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function $833559fe574b4225$var$ub(a, b) {
    if (b) {
        if ($833559fe574b4225$var$tb[a] && (null != b.children || null != b.dangerouslySetInnerHTML)) throw Error($833559fe574b4225$var$p(137, a));
        if (null != b.dangerouslySetInnerHTML) {
            if (null != b.children) throw Error($833559fe574b4225$var$p(60));
            if ("object" !== typeof b.dangerouslySetInnerHTML || !("__html" in b.dangerouslySetInnerHTML)) throw Error($833559fe574b4225$var$p(61));
        }
        if (null != b.style && "object" !== typeof b.style) throw Error($833559fe574b4225$var$p(62));
    }
}
function $833559fe574b4225$var$vb(a, b) {
    if (-1 === a.indexOf("-")) return "string" === typeof b.is;
    switch(a){
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0;
    }
}
var $833559fe574b4225$var$wb = null;
function $833559fe574b4225$var$xb(a) {
    a = a.target || a.srcElement || window;
    a.correspondingUseElement && (a = a.correspondingUseElement);
    return 3 === a.nodeType ? a.parentNode : a;
}
var $833559fe574b4225$var$yb = null, $833559fe574b4225$var$zb = null, $833559fe574b4225$var$Ab = null;
function $833559fe574b4225$var$Bb(a) {
    if (a = $833559fe574b4225$var$Cb(a)) {
        if ("function" !== typeof $833559fe574b4225$var$yb) throw Error($833559fe574b4225$var$p(280));
        var b = a.stateNode;
        b && (b = $833559fe574b4225$var$Db(b), $833559fe574b4225$var$yb(a.stateNode, a.type, b));
    }
}
function $833559fe574b4225$var$Eb(a) {
    $833559fe574b4225$var$zb ? $833559fe574b4225$var$Ab ? $833559fe574b4225$var$Ab.push(a) : $833559fe574b4225$var$Ab = [
        a
    ] : $833559fe574b4225$var$zb = a;
}
function $833559fe574b4225$var$Fb() {
    if ($833559fe574b4225$var$zb) {
        var a = $833559fe574b4225$var$zb, b = $833559fe574b4225$var$Ab;
        $833559fe574b4225$var$Ab = $833559fe574b4225$var$zb = null;
        $833559fe574b4225$var$Bb(a);
        if (b) for(a = 0; a < b.length; a++)$833559fe574b4225$var$Bb(b[a]);
    }
}
function $833559fe574b4225$var$Gb(a, b) {
    return a(b);
}
function $833559fe574b4225$var$Hb() {}
var $833559fe574b4225$var$Ib = !1;
function $833559fe574b4225$var$Jb(a, b, c) {
    if ($833559fe574b4225$var$Ib) return a(b, c);
    $833559fe574b4225$var$Ib = !0;
    try {
        return $833559fe574b4225$var$Gb(a, b, c);
    } finally{
        if ($833559fe574b4225$var$Ib = !1, null !== $833559fe574b4225$var$zb || null !== $833559fe574b4225$var$Ab) $833559fe574b4225$var$Hb(), $833559fe574b4225$var$Fb();
    }
}
function $833559fe574b4225$var$Kb(a, b) {
    var c = a.stateNode;
    if (null === c) return null;
    var d = $833559fe574b4225$var$Db(c);
    if (null === d) return null;
    c = d[b];
    a: switch(b){
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (d = !d.disabled) || (a = a.type, d = !("button" === a || "input" === a || "select" === a || "textarea" === a));
            a = !d;
            break a;
        default:
            a = !1;
    }
    if (a) return null;
    if (c && "function" !== typeof c) throw Error($833559fe574b4225$var$p(231, b, typeof c));
    return c;
}
var $833559fe574b4225$var$Lb = !1;
if ($833559fe574b4225$var$ia) try {
    var $833559fe574b4225$var$Mb = {};
    Object.defineProperty($833559fe574b4225$var$Mb, "passive", {
        get: function() {
            $833559fe574b4225$var$Lb = !0;
        }
    });
    window.addEventListener("test", $833559fe574b4225$var$Mb, $833559fe574b4225$var$Mb);
    window.removeEventListener("test", $833559fe574b4225$var$Mb, $833559fe574b4225$var$Mb);
} catch (a) {
    $833559fe574b4225$var$Lb = !1;
}
function $833559fe574b4225$var$Nb(a, b, c, d, e, f, g, h, k) {
    var l = Array.prototype.slice.call(arguments, 3);
    try {
        b.apply(c, l);
    } catch (m) {
        this.onError(m);
    }
}
var $833559fe574b4225$var$Ob = !1, $833559fe574b4225$var$Pb = null, $833559fe574b4225$var$Qb = !1, $833559fe574b4225$var$Rb = null, $833559fe574b4225$var$Sb = {
    onError: function(a) {
        $833559fe574b4225$var$Ob = !0;
        $833559fe574b4225$var$Pb = a;
    }
};
function $833559fe574b4225$var$Tb(a, b, c, d, e, f, g, h, k) {
    $833559fe574b4225$var$Ob = !1;
    $833559fe574b4225$var$Pb = null;
    $833559fe574b4225$var$Nb.apply($833559fe574b4225$var$Sb, arguments);
}
function $833559fe574b4225$var$Ub(a, b, c, d, e, f, g, h, k) {
    $833559fe574b4225$var$Tb.apply(this, arguments);
    if ($833559fe574b4225$var$Ob) {
        if ($833559fe574b4225$var$Ob) {
            var l = $833559fe574b4225$var$Pb;
            $833559fe574b4225$var$Ob = !1;
            $833559fe574b4225$var$Pb = null;
        } else throw Error($833559fe574b4225$var$p(198));
        $833559fe574b4225$var$Qb || ($833559fe574b4225$var$Qb = !0, $833559fe574b4225$var$Rb = l);
    }
}
function $833559fe574b4225$var$Vb(a) {
    var b = a, c = a;
    if (a.alternate) for(; b.return;)b = b.return;
    else {
        a = b;
        do b = a, 0 !== (b.flags & 4098) && (c = b.return), a = b.return;
        while (a);
    }
    return 3 === b.tag ? c : null;
}
function $833559fe574b4225$var$Wb(a) {
    if (13 === a.tag) {
        var b = a.memoizedState;
        null === b && (a = a.alternate, null !== a && (b = a.memoizedState));
        if (null !== b) return b.dehydrated;
    }
    return null;
}
function $833559fe574b4225$var$Xb(a) {
    if ($833559fe574b4225$var$Vb(a) !== a) throw Error($833559fe574b4225$var$p(188));
}
function $833559fe574b4225$var$Yb(a) {
    var b = a.alternate;
    if (!b) {
        b = $833559fe574b4225$var$Vb(a);
        if (null === b) throw Error($833559fe574b4225$var$p(188));
        return b !== a ? null : a;
    }
    for(var c = a, d = b;;){
        var e = c.return;
        if (null === e) break;
        var f = e.alternate;
        if (null === f) {
            d = e.return;
            if (null !== d) {
                c = d;
                continue;
            }
            break;
        }
        if (e.child === f.child) {
            for(f = e.child; f;){
                if (f === c) return $833559fe574b4225$var$Xb(e), a;
                if (f === d) return $833559fe574b4225$var$Xb(e), b;
                f = f.sibling;
            }
            throw Error($833559fe574b4225$var$p(188));
        }
        if (c.return !== d.return) c = e, d = f;
        else {
            for(var g = !1, h = e.child; h;){
                if (h === c) {
                    g = !0;
                    c = e;
                    d = f;
                    break;
                }
                if (h === d) {
                    g = !0;
                    d = e;
                    c = f;
                    break;
                }
                h = h.sibling;
            }
            if (!g) {
                for(h = f.child; h;){
                    if (h === c) {
                        g = !0;
                        c = f;
                        d = e;
                        break;
                    }
                    if (h === d) {
                        g = !0;
                        d = f;
                        c = e;
                        break;
                    }
                    h = h.sibling;
                }
                if (!g) throw Error($833559fe574b4225$var$p(189));
            }
        }
        if (c.alternate !== d) throw Error($833559fe574b4225$var$p(190));
    }
    if (3 !== c.tag) throw Error($833559fe574b4225$var$p(188));
    return c.stateNode.current === c ? a : b;
}
function $833559fe574b4225$var$Zb(a) {
    a = $833559fe574b4225$var$Yb(a);
    return null !== a ? $833559fe574b4225$var$$b(a) : null;
}
function $833559fe574b4225$var$$b(a) {
    if (5 === a.tag || 6 === a.tag) return a;
    for(a = a.child; null !== a;){
        var b = $833559fe574b4225$var$$b(a);
        if (null !== b) return b;
        a = a.sibling;
    }
    return null;
}
var $833559fe574b4225$var$ac = $fw68E.unstable_scheduleCallback, $833559fe574b4225$var$bc = $fw68E.unstable_cancelCallback, $833559fe574b4225$var$cc = $fw68E.unstable_shouldYield, $833559fe574b4225$var$dc = $fw68E.unstable_requestPaint, $833559fe574b4225$var$B = $fw68E.unstable_now, $833559fe574b4225$var$ec = $fw68E.unstable_getCurrentPriorityLevel, $833559fe574b4225$var$fc = $fw68E.unstable_ImmediatePriority, $833559fe574b4225$var$gc = $fw68E.unstable_UserBlockingPriority, $833559fe574b4225$var$hc = $fw68E.unstable_NormalPriority, $833559fe574b4225$var$ic = $fw68E.unstable_LowPriority, $833559fe574b4225$var$jc = $fw68E.unstable_IdlePriority, $833559fe574b4225$var$kc = null, $833559fe574b4225$var$lc = null;
function $833559fe574b4225$var$mc(a) {
    if ($833559fe574b4225$var$lc && "function" === typeof $833559fe574b4225$var$lc.onCommitFiberRoot) try {
        $833559fe574b4225$var$lc.onCommitFiberRoot($833559fe574b4225$var$kc, a, void 0, 128 === (a.current.flags & 128));
    } catch (b) {}
}
var $833559fe574b4225$var$oc = Math.clz32 ? Math.clz32 : $833559fe574b4225$var$nc, $833559fe574b4225$var$pc = Math.log, $833559fe574b4225$var$qc = Math.LN2;
function $833559fe574b4225$var$nc(a) {
    a >>>= 0;
    return 0 === a ? 32 : 31 - ($833559fe574b4225$var$pc(a) / $833559fe574b4225$var$qc | 0) | 0;
}
var $833559fe574b4225$var$rc = 64, $833559fe574b4225$var$sc = 4194304;
function $833559fe574b4225$var$tc(a) {
    switch(a & -a){
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return a & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return a & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return a;
    }
}
function $833559fe574b4225$var$uc(a, b) {
    var c = a.pendingLanes;
    if (0 === c) return 0;
    var d = 0, e = a.suspendedLanes, f = a.pingedLanes, g = c & 268435455;
    if (0 !== g) {
        var h = g & ~e;
        0 !== h ? d = $833559fe574b4225$var$tc(h) : (f &= g, 0 !== f && (d = $833559fe574b4225$var$tc(f)));
    } else g = c & ~e, 0 !== g ? d = $833559fe574b4225$var$tc(g) : 0 !== f && (d = $833559fe574b4225$var$tc(f));
    if (0 === d) return 0;
    if (0 !== b && b !== d && 0 === (b & e) && (e = d & -d, f = b & -b, e >= f || 16 === e && 0 !== (f & 4194240))) return b;
    0 !== (d & 4) && (d |= c & 16);
    b = a.entangledLanes;
    if (0 !== b) for(a = a.entanglements, b &= d; 0 < b;)c = 31 - $833559fe574b4225$var$oc(b), e = 1 << c, d |= a[c], b &= ~e;
    return d;
}
function $833559fe574b4225$var$vc(a, b) {
    switch(a){
        case 1:
        case 2:
        case 4:
            return b + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return b + 5E3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1;
    }
}
function $833559fe574b4225$var$wc(a, b) {
    for(var c = a.suspendedLanes, d = a.pingedLanes, e = a.expirationTimes, f = a.pendingLanes; 0 < f;){
        var g = 31 - $833559fe574b4225$var$oc(f), h = 1 << g, k = e[g];
        if (-1 === k) {
            if (0 === (h & c) || 0 !== (h & d)) e[g] = $833559fe574b4225$var$vc(h, b);
        } else k <= b && (a.expiredLanes |= h);
        f &= ~h;
    }
}
function $833559fe574b4225$var$xc(a) {
    a = a.pendingLanes & -1073741825;
    return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
}
function $833559fe574b4225$var$yc() {
    var a = $833559fe574b4225$var$rc;
    $833559fe574b4225$var$rc <<= 1;
    0 === ($833559fe574b4225$var$rc & 4194240) && ($833559fe574b4225$var$rc = 64);
    return a;
}
function $833559fe574b4225$var$zc(a) {
    for(var b = [], c = 0; 31 > c; c++)b.push(a);
    return b;
}
function $833559fe574b4225$var$Ac(a, b, c) {
    a.pendingLanes |= b;
    536870912 !== b && (a.suspendedLanes = 0, a.pingedLanes = 0);
    a = a.eventTimes;
    b = 31 - $833559fe574b4225$var$oc(b);
    a[b] = c;
}
function $833559fe574b4225$var$Bc(a, b) {
    var c = a.pendingLanes & ~b;
    a.pendingLanes = b;
    a.suspendedLanes = 0;
    a.pingedLanes = 0;
    a.expiredLanes &= b;
    a.mutableReadLanes &= b;
    a.entangledLanes &= b;
    b = a.entanglements;
    var d = a.eventTimes;
    for(a = a.expirationTimes; 0 < c;){
        var e = 31 - $833559fe574b4225$var$oc(c), f = 1 << e;
        b[e] = 0;
        d[e] = -1;
        a[e] = -1;
        c &= ~f;
    }
}
function $833559fe574b4225$var$Cc(a, b) {
    var c = a.entangledLanes |= b;
    for(a = a.entanglements; c;){
        var d = 31 - $833559fe574b4225$var$oc(c), e = 1 << d;
        e & b | a[d] & b && (a[d] |= b);
        c &= ~e;
    }
}
var $833559fe574b4225$var$C = 0;
function $833559fe574b4225$var$Dc(a) {
    a &= -a;
    return 1 < a ? 4 < a ? 0 !== (a & 268435455) ? 16 : 536870912 : 4 : 1;
}
var $833559fe574b4225$var$Ec, $833559fe574b4225$var$Fc, $833559fe574b4225$var$Gc, $833559fe574b4225$var$Hc, $833559fe574b4225$var$Ic, $833559fe574b4225$var$Jc = !1, $833559fe574b4225$var$Kc = [], $833559fe574b4225$var$Lc = null, $833559fe574b4225$var$Mc = null, $833559fe574b4225$var$Nc = null, $833559fe574b4225$var$Oc = new Map, $833559fe574b4225$var$Pc = new Map, $833559fe574b4225$var$Qc = [], $833559fe574b4225$var$Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function $833559fe574b4225$var$Sc(a, b) {
    switch(a){
        case "focusin":
        case "focusout":
            $833559fe574b4225$var$Lc = null;
            break;
        case "dragenter":
        case "dragleave":
            $833559fe574b4225$var$Mc = null;
            break;
        case "mouseover":
        case "mouseout":
            $833559fe574b4225$var$Nc = null;
            break;
        case "pointerover":
        case "pointerout":
            $833559fe574b4225$var$Oc.delete(b.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            $833559fe574b4225$var$Pc.delete(b.pointerId);
    }
}
function $833559fe574b4225$var$Tc(a, b, c, d, e, f) {
    if (null === a || a.nativeEvent !== f) return a = {
        blockedOn: b,
        domEventName: c,
        eventSystemFlags: d,
        nativeEvent: f,
        targetContainers: [
            e
        ]
    }, null !== b && (b = $833559fe574b4225$var$Cb(b), null !== b && $833559fe574b4225$var$Fc(b)), a;
    a.eventSystemFlags |= d;
    b = a.targetContainers;
    null !== e && -1 === b.indexOf(e) && b.push(e);
    return a;
}
function $833559fe574b4225$var$Uc(a, b, c, d, e) {
    switch(b){
        case "focusin":
            return $833559fe574b4225$var$Lc = $833559fe574b4225$var$Tc($833559fe574b4225$var$Lc, a, b, c, d, e), !0;
        case "dragenter":
            return $833559fe574b4225$var$Mc = $833559fe574b4225$var$Tc($833559fe574b4225$var$Mc, a, b, c, d, e), !0;
        case "mouseover":
            return $833559fe574b4225$var$Nc = $833559fe574b4225$var$Tc($833559fe574b4225$var$Nc, a, b, c, d, e), !0;
        case "pointerover":
            var f = e.pointerId;
            $833559fe574b4225$var$Oc.set(f, $833559fe574b4225$var$Tc($833559fe574b4225$var$Oc.get(f) || null, a, b, c, d, e));
            return !0;
        case "gotpointercapture":
            return f = e.pointerId, $833559fe574b4225$var$Pc.set(f, $833559fe574b4225$var$Tc($833559fe574b4225$var$Pc.get(f) || null, a, b, c, d, e)), !0;
    }
    return !1;
}
function $833559fe574b4225$var$Vc(a) {
    var b = $833559fe574b4225$var$Wc(a.target);
    if (null !== b) {
        var c = $833559fe574b4225$var$Vb(b);
        if (null !== c) {
            if (b = c.tag, 13 === b) {
                if (b = $833559fe574b4225$var$Wb(c), null !== b) {
                    a.blockedOn = b;
                    $833559fe574b4225$var$Ic(a.priority, function() {
                        $833559fe574b4225$var$Gc(c);
                    });
                    return;
                }
            } else if (3 === b && c.stateNode.current.memoizedState.isDehydrated) {
                a.blockedOn = 3 === c.tag ? c.stateNode.containerInfo : null;
                return;
            }
        }
    }
    a.blockedOn = null;
}
function $833559fe574b4225$var$Xc(a) {
    if (null !== a.blockedOn) return !1;
    for(var b = a.targetContainers; 0 < b.length;){
        var c = $833559fe574b4225$var$Yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
        if (null === c) {
            c = a.nativeEvent;
            var d = new c.constructor(c.type, c);
            $833559fe574b4225$var$wb = d;
            c.target.dispatchEvent(d);
            $833559fe574b4225$var$wb = null;
        } else return b = $833559fe574b4225$var$Cb(c), null !== b && $833559fe574b4225$var$Fc(b), a.blockedOn = c, !1;
        b.shift();
    }
    return !0;
}
function $833559fe574b4225$var$Zc(a, b, c) {
    $833559fe574b4225$var$Xc(a) && c.delete(b);
}
function $833559fe574b4225$var$$c() {
    $833559fe574b4225$var$Jc = !1;
    null !== $833559fe574b4225$var$Lc && $833559fe574b4225$var$Xc($833559fe574b4225$var$Lc) && ($833559fe574b4225$var$Lc = null);
    null !== $833559fe574b4225$var$Mc && $833559fe574b4225$var$Xc($833559fe574b4225$var$Mc) && ($833559fe574b4225$var$Mc = null);
    null !== $833559fe574b4225$var$Nc && $833559fe574b4225$var$Xc($833559fe574b4225$var$Nc) && ($833559fe574b4225$var$Nc = null);
    $833559fe574b4225$var$Oc.forEach($833559fe574b4225$var$Zc);
    $833559fe574b4225$var$Pc.forEach($833559fe574b4225$var$Zc);
}
function $833559fe574b4225$var$ad(a, b) {
    a.blockedOn === b && (a.blockedOn = null, $833559fe574b4225$var$Jc || ($833559fe574b4225$var$Jc = !0, $fw68E.unstable_scheduleCallback($fw68E.unstable_NormalPriority, $833559fe574b4225$var$$c)));
}
function $833559fe574b4225$var$bd(a) {
    function b(b) {
        return $833559fe574b4225$var$ad(b, a);
    }
    if (0 < $833559fe574b4225$var$Kc.length) {
        $833559fe574b4225$var$ad($833559fe574b4225$var$Kc[0], a);
        for(var c = 1; c < $833559fe574b4225$var$Kc.length; c++){
            var d = $833559fe574b4225$var$Kc[c];
            d.blockedOn === a && (d.blockedOn = null);
        }
    }
    null !== $833559fe574b4225$var$Lc && $833559fe574b4225$var$ad($833559fe574b4225$var$Lc, a);
    null !== $833559fe574b4225$var$Mc && $833559fe574b4225$var$ad($833559fe574b4225$var$Mc, a);
    null !== $833559fe574b4225$var$Nc && $833559fe574b4225$var$ad($833559fe574b4225$var$Nc, a);
    $833559fe574b4225$var$Oc.forEach(b);
    $833559fe574b4225$var$Pc.forEach(b);
    for(c = 0; c < $833559fe574b4225$var$Qc.length; c++)d = $833559fe574b4225$var$Qc[c], d.blockedOn === a && (d.blockedOn = null);
    for(; 0 < $833559fe574b4225$var$Qc.length && (c = $833559fe574b4225$var$Qc[0], null === c.blockedOn);)$833559fe574b4225$var$Vc(c), null === c.blockedOn && $833559fe574b4225$var$Qc.shift();
}
var $833559fe574b4225$var$cd = $833559fe574b4225$var$ua.ReactCurrentBatchConfig, $833559fe574b4225$var$dd = !0;
function $833559fe574b4225$var$ed(a, b, c, d) {
    var e = $833559fe574b4225$var$C, f = $833559fe574b4225$var$cd.transition;
    $833559fe574b4225$var$cd.transition = null;
    try {
        $833559fe574b4225$var$C = 1, $833559fe574b4225$var$fd(a, b, c, d);
    } finally{
        $833559fe574b4225$var$C = e, $833559fe574b4225$var$cd.transition = f;
    }
}
function $833559fe574b4225$var$gd(a, b, c, d) {
    var e = $833559fe574b4225$var$C, f = $833559fe574b4225$var$cd.transition;
    $833559fe574b4225$var$cd.transition = null;
    try {
        $833559fe574b4225$var$C = 4, $833559fe574b4225$var$fd(a, b, c, d);
    } finally{
        $833559fe574b4225$var$C = e, $833559fe574b4225$var$cd.transition = f;
    }
}
function $833559fe574b4225$var$fd(a, b, c, d) {
    if ($833559fe574b4225$var$dd) {
        var e = $833559fe574b4225$var$Yc(a, b, c, d);
        if (null === e) $833559fe574b4225$var$hd(a, b, d, $833559fe574b4225$var$id, c), $833559fe574b4225$var$Sc(a, d);
        else if ($833559fe574b4225$var$Uc(e, a, b, c, d)) d.stopPropagation();
        else if ($833559fe574b4225$var$Sc(a, d), b & 4 && -1 < $833559fe574b4225$var$Rc.indexOf(a)) {
            for(; null !== e;){
                var f = $833559fe574b4225$var$Cb(e);
                null !== f && $833559fe574b4225$var$Ec(f);
                f = $833559fe574b4225$var$Yc(a, b, c, d);
                null === f && $833559fe574b4225$var$hd(a, b, d, $833559fe574b4225$var$id, c);
                if (f === e) break;
                e = f;
            }
            null !== e && d.stopPropagation();
        } else $833559fe574b4225$var$hd(a, b, d, null, c);
    }
}
var $833559fe574b4225$var$id = null;
function $833559fe574b4225$var$Yc(a, b, c, d) {
    $833559fe574b4225$var$id = null;
    a = $833559fe574b4225$var$xb(d);
    a = $833559fe574b4225$var$Wc(a);
    if (null !== a) {
        if (b = $833559fe574b4225$var$Vb(a), null === b) a = null;
        else if (c = b.tag, 13 === c) {
            a = $833559fe574b4225$var$Wb(b);
            if (null !== a) return a;
            a = null;
        } else if (3 === c) {
            if (b.stateNode.current.memoizedState.isDehydrated) return 3 === b.tag ? b.stateNode.containerInfo : null;
            a = null;
        } else b !== a && (a = null);
    }
    $833559fe574b4225$var$id = a;
    return null;
}
function $833559fe574b4225$var$jd(a) {
    switch(a){
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch($833559fe574b4225$var$ec()){
                case $833559fe574b4225$var$fc:
                    return 1;
                case $833559fe574b4225$var$gc:
                    return 4;
                case $833559fe574b4225$var$hc:
                case $833559fe574b4225$var$ic:
                    return 16;
                case $833559fe574b4225$var$jc:
                    return 536870912;
                default:
                    return 16;
            }
        default:
            return 16;
    }
}
var $833559fe574b4225$var$kd = null, $833559fe574b4225$var$ld = null, $833559fe574b4225$var$md = null;
function $833559fe574b4225$var$nd() {
    if ($833559fe574b4225$var$md) return $833559fe574b4225$var$md;
    var a, b = $833559fe574b4225$var$ld, c = b.length, d, e = "value" in $833559fe574b4225$var$kd ? $833559fe574b4225$var$kd.value : $833559fe574b4225$var$kd.textContent, f = e.length;
    for(a = 0; a < c && b[a] === e[a]; a++);
    var g = c - a;
    for(d = 1; d <= g && b[c - d] === e[f - d]; d++);
    return $833559fe574b4225$var$md = e.slice(a, 1 < d ? 1 - d : void 0);
}
function $833559fe574b4225$var$od(a) {
    var b = a.keyCode;
    "charCode" in a ? (a = a.charCode, 0 === a && 13 === b && (a = 13)) : a = b;
    10 === a && (a = 13);
    return 32 <= a || 13 === a ? a : 0;
}
function $833559fe574b4225$var$pd() {
    return !0;
}
function $833559fe574b4225$var$qd() {
    return !1;
}
function $833559fe574b4225$var$rd(a) {
    function b(b, d, e, f, g) {
        this._reactName = b;
        this._targetInst = e;
        this.type = d;
        this.nativeEvent = f;
        this.target = g;
        this.currentTarget = null;
        for(var c in a)a.hasOwnProperty(c) && (b = a[c], this[c] = b ? b(f) : f[c]);
        this.isDefaultPrevented = (null != f.defaultPrevented ? f.defaultPrevented : !1 === f.returnValue) ? $833559fe574b4225$var$pd : $833559fe574b4225$var$qd;
        this.isPropagationStopped = $833559fe574b4225$var$qd;
        return this;
    }
    $833559fe574b4225$var$A(b.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var a = this.nativeEvent;
            a && (a.preventDefault ? a.preventDefault() : "unknown" !== typeof a.returnValue && (a.returnValue = !1), this.isDefaultPrevented = $833559fe574b4225$var$pd);
        },
        stopPropagation: function() {
            var a = this.nativeEvent;
            a && (a.stopPropagation ? a.stopPropagation() : "unknown" !== typeof a.cancelBubble && (a.cancelBubble = !0), this.isPropagationStopped = $833559fe574b4225$var$pd);
        },
        persist: function() {},
        isPersistent: $833559fe574b4225$var$pd
    });
    return b;
}
var $833559fe574b4225$var$sd = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(a) {
        return a.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
}, $833559fe574b4225$var$td = $833559fe574b4225$var$rd($833559fe574b4225$var$sd), $833559fe574b4225$var$ud = $833559fe574b4225$var$A({}, $833559fe574b4225$var$sd, {
    view: 0,
    detail: 0
}), $833559fe574b4225$var$vd = $833559fe574b4225$var$rd($833559fe574b4225$var$ud), $833559fe574b4225$var$wd, $833559fe574b4225$var$xd, $833559fe574b4225$var$yd, $833559fe574b4225$var$Ad = $833559fe574b4225$var$A({}, $833559fe574b4225$var$ud, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: $833559fe574b4225$var$zd,
    button: 0,
    buttons: 0,
    relatedTarget: function(a) {
        return void 0 === a.relatedTarget ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
    },
    movementX: function(a) {
        if ("movementX" in a) return a.movementX;
        a !== $833559fe574b4225$var$yd && ($833559fe574b4225$var$yd && "mousemove" === a.type ? ($833559fe574b4225$var$wd = a.screenX - $833559fe574b4225$var$yd.screenX, $833559fe574b4225$var$xd = a.screenY - $833559fe574b4225$var$yd.screenY) : $833559fe574b4225$var$xd = $833559fe574b4225$var$wd = 0, $833559fe574b4225$var$yd = a);
        return $833559fe574b4225$var$wd;
    },
    movementY: function(a) {
        return "movementY" in a ? a.movementY : $833559fe574b4225$var$xd;
    }
}), $833559fe574b4225$var$Bd = $833559fe574b4225$var$rd($833559fe574b4225$var$Ad), $833559fe574b4225$var$Cd = $833559fe574b4225$var$A({}, $833559fe574b4225$var$Ad, {
    dataTransfer: 0
}), $833559fe574b4225$var$Dd = $833559fe574b4225$var$rd($833559fe574b4225$var$Cd), $833559fe574b4225$var$Ed = $833559fe574b4225$var$A({}, $833559fe574b4225$var$ud, {
    relatedTarget: 0
}), $833559fe574b4225$var$Fd = $833559fe574b4225$var$rd($833559fe574b4225$var$Ed), $833559fe574b4225$var$Gd = $833559fe574b4225$var$A({}, $833559fe574b4225$var$sd, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), $833559fe574b4225$var$Hd = $833559fe574b4225$var$rd($833559fe574b4225$var$Gd), $833559fe574b4225$var$Id = $833559fe574b4225$var$A({}, $833559fe574b4225$var$sd, {
    clipboardData: function(a) {
        return "clipboardData" in a ? a.clipboardData : window.clipboardData;
    }
}), $833559fe574b4225$var$Jd = $833559fe574b4225$var$rd($833559fe574b4225$var$Id), $833559fe574b4225$var$Kd = $833559fe574b4225$var$A({}, $833559fe574b4225$var$sd, {
    data: 0
}), $833559fe574b4225$var$Ld = $833559fe574b4225$var$rd($833559fe574b4225$var$Kd), $833559fe574b4225$var$Md = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, $833559fe574b4225$var$Nd = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, $833559fe574b4225$var$Od = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function $833559fe574b4225$var$Pd(a) {
    var b = this.nativeEvent;
    return b.getModifierState ? b.getModifierState(a) : (a = $833559fe574b4225$var$Od[a]) ? !!b[a] : !1;
}
function $833559fe574b4225$var$zd() {
    return $833559fe574b4225$var$Pd;
}
var $833559fe574b4225$var$Qd = $833559fe574b4225$var$A({}, $833559fe574b4225$var$ud, {
    key: function(a) {
        if (a.key) {
            var b = $833559fe574b4225$var$Md[a.key] || a.key;
            if ("Unidentified" !== b) return b;
        }
        return "keypress" === a.type ? (a = $833559fe574b4225$var$od(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? $833559fe574b4225$var$Nd[a.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: $833559fe574b4225$var$zd,
    charCode: function(a) {
        return "keypress" === a.type ? $833559fe574b4225$var$od(a) : 0;
    },
    keyCode: function(a) {
        return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
    },
    which: function(a) {
        return "keypress" === a.type ? $833559fe574b4225$var$od(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
    }
}), $833559fe574b4225$var$Rd = $833559fe574b4225$var$rd($833559fe574b4225$var$Qd), $833559fe574b4225$var$Sd = $833559fe574b4225$var$A({}, $833559fe574b4225$var$Ad, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
}), $833559fe574b4225$var$Td = $833559fe574b4225$var$rd($833559fe574b4225$var$Sd), $833559fe574b4225$var$Ud = $833559fe574b4225$var$A({}, $833559fe574b4225$var$ud, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: $833559fe574b4225$var$zd
}), $833559fe574b4225$var$Vd = $833559fe574b4225$var$rd($833559fe574b4225$var$Ud), $833559fe574b4225$var$Wd = $833559fe574b4225$var$A({}, $833559fe574b4225$var$sd, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), $833559fe574b4225$var$Xd = $833559fe574b4225$var$rd($833559fe574b4225$var$Wd), $833559fe574b4225$var$Yd = $833559fe574b4225$var$A({}, $833559fe574b4225$var$Ad, {
    deltaX: function(a) {
        return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
    },
    deltaY: function(a) {
        return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
}), $833559fe574b4225$var$Zd = $833559fe574b4225$var$rd($833559fe574b4225$var$Yd), $833559fe574b4225$var$$d = [
    9,
    13,
    27,
    32
], $833559fe574b4225$var$ae = $833559fe574b4225$var$ia && "CompositionEvent" in window, $833559fe574b4225$var$be = null;
$833559fe574b4225$var$ia && "documentMode" in document && ($833559fe574b4225$var$be = document.documentMode);
var $833559fe574b4225$var$ce = $833559fe574b4225$var$ia && "TextEvent" in window && !$833559fe574b4225$var$be, $833559fe574b4225$var$de = $833559fe574b4225$var$ia && (!$833559fe574b4225$var$ae || $833559fe574b4225$var$be && 8 < $833559fe574b4225$var$be && 11 >= $833559fe574b4225$var$be), $833559fe574b4225$var$ee = String.fromCharCode(32), $833559fe574b4225$var$fe = !1;
function $833559fe574b4225$var$ge(a, b) {
    switch(a){
        case "keyup":
            return -1 !== $833559fe574b4225$var$$d.indexOf(b.keyCode);
        case "keydown":
            return 229 !== b.keyCode;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1;
    }
}
function $833559fe574b4225$var$he(a) {
    a = a.detail;
    return "object" === typeof a && "data" in a ? a.data : null;
}
var $833559fe574b4225$var$ie = !1;
function $833559fe574b4225$var$je(a, b) {
    switch(a){
        case "compositionend":
            return $833559fe574b4225$var$he(b);
        case "keypress":
            if (32 !== b.which) return null;
            $833559fe574b4225$var$fe = !0;
            return $833559fe574b4225$var$ee;
        case "textInput":
            return a = b.data, a === $833559fe574b4225$var$ee && $833559fe574b4225$var$fe ? null : a;
        default:
            return null;
    }
}
function $833559fe574b4225$var$ke(a, b) {
    if ($833559fe574b4225$var$ie) return "compositionend" === a || !$833559fe574b4225$var$ae && $833559fe574b4225$var$ge(a, b) ? (a = $833559fe574b4225$var$nd(), $833559fe574b4225$var$md = $833559fe574b4225$var$ld = $833559fe574b4225$var$kd = null, $833559fe574b4225$var$ie = !1, a) : null;
    switch(a){
        case "paste":
            return null;
        case "keypress":
            if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
                if (b.char && 1 < b.char.length) return b.char;
                if (b.which) return String.fromCharCode(b.which);
            }
            return null;
        case "compositionend":
            return $833559fe574b4225$var$de && "ko" !== b.locale ? null : b.data;
        default:
            return null;
    }
}
var $833559fe574b4225$var$le = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function $833559fe574b4225$var$me(a) {
    var b = a && a.nodeName && a.nodeName.toLowerCase();
    return "input" === b ? !!$833559fe574b4225$var$le[a.type] : "textarea" === b ? !0 : !1;
}
function $833559fe574b4225$var$ne(a, b, c, d) {
    $833559fe574b4225$var$Eb(d);
    b = $833559fe574b4225$var$oe(b, "onChange");
    0 < b.length && (c = new $833559fe574b4225$var$td("onChange", "change", null, c, d), a.push({
        event: c,
        listeners: b
    }));
}
var $833559fe574b4225$var$pe = null, $833559fe574b4225$var$qe = null;
function $833559fe574b4225$var$re(a) {
    $833559fe574b4225$var$se(a, 0);
}
function $833559fe574b4225$var$te(a) {
    var b = $833559fe574b4225$var$ue(a);
    if ($833559fe574b4225$var$Wa(b)) return a;
}
function $833559fe574b4225$var$ve(a, b) {
    if ("change" === a) return b;
}
var $833559fe574b4225$var$we = !1;
if ($833559fe574b4225$var$ia) {
    var $833559fe574b4225$var$xe;
    if ($833559fe574b4225$var$ia) {
        var $833559fe574b4225$var$ye = "oninput" in document;
        if (!$833559fe574b4225$var$ye) {
            var $833559fe574b4225$var$ze = document.createElement("div");
            $833559fe574b4225$var$ze.setAttribute("oninput", "return;");
            $833559fe574b4225$var$ye = "function" === typeof $833559fe574b4225$var$ze.oninput;
        }
        $833559fe574b4225$var$xe = $833559fe574b4225$var$ye;
    } else $833559fe574b4225$var$xe = !1;
    $833559fe574b4225$var$we = $833559fe574b4225$var$xe && (!document.documentMode || 9 < document.documentMode);
}
function $833559fe574b4225$var$Ae() {
    $833559fe574b4225$var$pe && ($833559fe574b4225$var$pe.detachEvent("onpropertychange", $833559fe574b4225$var$Be), $833559fe574b4225$var$qe = $833559fe574b4225$var$pe = null);
}
function $833559fe574b4225$var$Be(a) {
    if ("value" === a.propertyName && $833559fe574b4225$var$te($833559fe574b4225$var$qe)) {
        var b = [];
        $833559fe574b4225$var$ne(b, $833559fe574b4225$var$qe, a, $833559fe574b4225$var$xb(a));
        $833559fe574b4225$var$Jb($833559fe574b4225$var$re, b);
    }
}
function $833559fe574b4225$var$Ce(a, b, c) {
    "focusin" === a ? ($833559fe574b4225$var$Ae(), $833559fe574b4225$var$pe = b, $833559fe574b4225$var$qe = c, $833559fe574b4225$var$pe.attachEvent("onpropertychange", $833559fe574b4225$var$Be)) : "focusout" === a && $833559fe574b4225$var$Ae();
}
function $833559fe574b4225$var$De(a) {
    if ("selectionchange" === a || "keyup" === a || "keydown" === a) return $833559fe574b4225$var$te($833559fe574b4225$var$qe);
}
function $833559fe574b4225$var$Ee(a, b) {
    if ("click" === a) return $833559fe574b4225$var$te(b);
}
function $833559fe574b4225$var$Fe(a, b) {
    if ("input" === a || "change" === a) return $833559fe574b4225$var$te(b);
}
function $833559fe574b4225$var$Ge(a, b) {
    return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
}
var $833559fe574b4225$var$He = "function" === typeof Object.is ? Object.is : $833559fe574b4225$var$Ge;
function $833559fe574b4225$var$Ie(a, b) {
    if ($833559fe574b4225$var$He(a, b)) return !0;
    if ("object" !== typeof a || null === a || "object" !== typeof b || null === b) return !1;
    var c = Object.keys(a), d = Object.keys(b);
    if (c.length !== d.length) return !1;
    for(d = 0; d < c.length; d++){
        var e = c[d];
        if (!$833559fe574b4225$var$ja.call(b, e) || !$833559fe574b4225$var$He(a[e], b[e])) return !1;
    }
    return !0;
}
function $833559fe574b4225$var$Je(a) {
    for(; a && a.firstChild;)a = a.firstChild;
    return a;
}
function $833559fe574b4225$var$Ke(a, b) {
    var c = $833559fe574b4225$var$Je(a);
    a = 0;
    for(var d; c;){
        if (3 === c.nodeType) {
            d = a + c.textContent.length;
            if (a <= b && d >= b) return {
                node: c,
                offset: b - a
            };
            a = d;
        }
        a: {
            for(; c;){
                if (c.nextSibling) {
                    c = c.nextSibling;
                    break a;
                }
                c = c.parentNode;
            }
            c = void 0;
        }
        c = $833559fe574b4225$var$Je(c);
    }
}
function $833559fe574b4225$var$Le(a, b) {
    return a && b ? a === b ? !0 : a && 3 === a.nodeType ? !1 : b && 3 === b.nodeType ? $833559fe574b4225$var$Le(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : !1 : !1;
}
function $833559fe574b4225$var$Me() {
    for(var a = window, b = $833559fe574b4225$var$Xa(); b instanceof a.HTMLIFrameElement;){
        try {
            var c = "string" === typeof b.contentWindow.location.href;
        } catch (d) {
            c = !1;
        }
        if (c) a = b.contentWindow;
        else break;
        b = $833559fe574b4225$var$Xa(a.document);
    }
    return b;
}
function $833559fe574b4225$var$Ne(a) {
    var b = a && a.nodeName && a.nodeName.toLowerCase();
    return b && ("input" === b && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b || "true" === a.contentEditable);
}
function $833559fe574b4225$var$Oe(a) {
    var b = $833559fe574b4225$var$Me(), c = a.focusedElem, d = a.selectionRange;
    if (b !== c && c && c.ownerDocument && $833559fe574b4225$var$Le(c.ownerDocument.documentElement, c)) {
        if (null !== d && $833559fe574b4225$var$Ne(c)) {
            if (b = d.start, a = d.end, void 0 === a && (a = b), "selectionStart" in c) c.selectionStart = b, c.selectionEnd = Math.min(a, c.value.length);
            else if (a = (b = c.ownerDocument || document) && b.defaultView || window, a.getSelection) {
                a = a.getSelection();
                var e = c.textContent.length, f = Math.min(d.start, e);
                d = void 0 === d.end ? f : Math.min(d.end, e);
                !a.extend && f > d && (e = d, d = f, f = e);
                e = $833559fe574b4225$var$Ke(c, f);
                var g = $833559fe574b4225$var$Ke(c, d);
                e && g && (1 !== a.rangeCount || a.anchorNode !== e.node || a.anchorOffset !== e.offset || a.focusNode !== g.node || a.focusOffset !== g.offset) && (b = b.createRange(), b.setStart(e.node, e.offset), a.removeAllRanges(), f > d ? (a.addRange(b), a.extend(g.node, g.offset)) : (b.setEnd(g.node, g.offset), a.addRange(b)));
            }
        }
        b = [];
        for(a = c; a = a.parentNode;)1 === a.nodeType && b.push({
            element: a,
            left: a.scrollLeft,
            top: a.scrollTop
        });
        "function" === typeof c.focus && c.focus();
        for(c = 0; c < b.length; c++)a = b[c], a.element.scrollLeft = a.left, a.element.scrollTop = a.top;
    }
}
var $833559fe574b4225$var$Pe = $833559fe574b4225$var$ia && "documentMode" in document && 11 >= document.documentMode, $833559fe574b4225$var$Qe = null, $833559fe574b4225$var$Re = null, $833559fe574b4225$var$Se = null, $833559fe574b4225$var$Te = !1;
function $833559fe574b4225$var$Ue(a, b, c) {
    var d = c.window === c ? c.document : 9 === c.nodeType ? c : c.ownerDocument;
    $833559fe574b4225$var$Te || null == $833559fe574b4225$var$Qe || $833559fe574b4225$var$Qe !== $833559fe574b4225$var$Xa(d) || (d = $833559fe574b4225$var$Qe, "selectionStart" in d && $833559fe574b4225$var$Ne(d) ? d = {
        start: d.selectionStart,
        end: d.selectionEnd
    } : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = {
        anchorNode: d.anchorNode,
        anchorOffset: d.anchorOffset,
        focusNode: d.focusNode,
        focusOffset: d.focusOffset
    }), $833559fe574b4225$var$Se && $833559fe574b4225$var$Ie($833559fe574b4225$var$Se, d) || ($833559fe574b4225$var$Se = d, d = $833559fe574b4225$var$oe($833559fe574b4225$var$Re, "onSelect"), 0 < d.length && (b = new $833559fe574b4225$var$td("onSelect", "select", null, b, c), a.push({
        event: b,
        listeners: d
    }), b.target = $833559fe574b4225$var$Qe)));
}
function $833559fe574b4225$var$Ve(a, b) {
    var c = {};
    c[a.toLowerCase()] = b.toLowerCase();
    c["Webkit" + a] = "webkit" + b;
    c["Moz" + a] = "moz" + b;
    return c;
}
var $833559fe574b4225$var$We = {
    animationend: $833559fe574b4225$var$Ve("Animation", "AnimationEnd"),
    animationiteration: $833559fe574b4225$var$Ve("Animation", "AnimationIteration"),
    animationstart: $833559fe574b4225$var$Ve("Animation", "AnimationStart"),
    transitionend: $833559fe574b4225$var$Ve("Transition", "TransitionEnd")
}, $833559fe574b4225$var$Xe = {}, $833559fe574b4225$var$Ye = {};
$833559fe574b4225$var$ia && ($833559fe574b4225$var$Ye = document.createElement("div").style, "AnimationEvent" in window || (delete $833559fe574b4225$var$We.animationend.animation, delete $833559fe574b4225$var$We.animationiteration.animation, delete $833559fe574b4225$var$We.animationstart.animation), "TransitionEvent" in window || delete $833559fe574b4225$var$We.transitionend.transition);
function $833559fe574b4225$var$Ze(a) {
    if ($833559fe574b4225$var$Xe[a]) return $833559fe574b4225$var$Xe[a];
    if (!$833559fe574b4225$var$We[a]) return a;
    var b = $833559fe574b4225$var$We[a], c;
    for(c in b)if (b.hasOwnProperty(c) && c in $833559fe574b4225$var$Ye) return $833559fe574b4225$var$Xe[a] = b[c];
    return a;
}
var $833559fe574b4225$var$$e = $833559fe574b4225$var$Ze("animationend"), $833559fe574b4225$var$af = $833559fe574b4225$var$Ze("animationiteration"), $833559fe574b4225$var$bf = $833559fe574b4225$var$Ze("animationstart"), $833559fe574b4225$var$cf = $833559fe574b4225$var$Ze("transitionend"), $833559fe574b4225$var$df = new Map, $833559fe574b4225$var$ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function $833559fe574b4225$var$ff(a, b) {
    $833559fe574b4225$var$df.set(a, b);
    $833559fe574b4225$var$fa(b, [
        a
    ]);
}
for(var $833559fe574b4225$var$gf = 0; $833559fe574b4225$var$gf < $833559fe574b4225$var$ef.length; $833559fe574b4225$var$gf++){
    var $833559fe574b4225$var$hf = $833559fe574b4225$var$ef[$833559fe574b4225$var$gf], $833559fe574b4225$var$jf = $833559fe574b4225$var$hf.toLowerCase(), $833559fe574b4225$var$kf = $833559fe574b4225$var$hf[0].toUpperCase() + $833559fe574b4225$var$hf.slice(1);
    $833559fe574b4225$var$ff($833559fe574b4225$var$jf, "on" + $833559fe574b4225$var$kf);
}
$833559fe574b4225$var$ff($833559fe574b4225$var$$e, "onAnimationEnd");
$833559fe574b4225$var$ff($833559fe574b4225$var$af, "onAnimationIteration");
$833559fe574b4225$var$ff($833559fe574b4225$var$bf, "onAnimationStart");
$833559fe574b4225$var$ff("dblclick", "onDoubleClick");
$833559fe574b4225$var$ff("focusin", "onFocus");
$833559fe574b4225$var$ff("focusout", "onBlur");
$833559fe574b4225$var$ff($833559fe574b4225$var$cf, "onTransitionEnd");
$833559fe574b4225$var$ha("onMouseEnter", [
    "mouseout",
    "mouseover"
]);
$833559fe574b4225$var$ha("onMouseLeave", [
    "mouseout",
    "mouseover"
]);
$833559fe574b4225$var$ha("onPointerEnter", [
    "pointerout",
    "pointerover"
]);
$833559fe574b4225$var$ha("onPointerLeave", [
    "pointerout",
    "pointerover"
]);
$833559fe574b4225$var$fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
$833559fe574b4225$var$fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
$833559fe574b4225$var$fa("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
]);
$833559fe574b4225$var$fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
$833559fe574b4225$var$fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
$833559fe574b4225$var$fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var $833559fe574b4225$var$lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), $833559fe574b4225$var$mf = new Set("cancel close invalid load scroll toggle".split(" ").concat($833559fe574b4225$var$lf));
function $833559fe574b4225$var$nf(a, b, c) {
    var d = a.type || "unknown-event";
    a.currentTarget = c;
    $833559fe574b4225$var$Ub(d, b, void 0, a);
    a.currentTarget = null;
}
function $833559fe574b4225$var$se(a, b) {
    b = 0 !== (b & 4);
    for(var c = 0; c < a.length; c++){
        var d = a[c], e = d.event;
        d = d.listeners;
        a: {
            var f = void 0;
            if (b) for(var g = d.length - 1; 0 <= g; g--){
                var h = d[g], k = h.instance, l = h.currentTarget;
                h = h.listener;
                if (k !== f && e.isPropagationStopped()) break a;
                $833559fe574b4225$var$nf(e, h, l);
                f = k;
            }
            else for(g = 0; g < d.length; g++){
                h = d[g];
                k = h.instance;
                l = h.currentTarget;
                h = h.listener;
                if (k !== f && e.isPropagationStopped()) break a;
                $833559fe574b4225$var$nf(e, h, l);
                f = k;
            }
        }
    }
    if ($833559fe574b4225$var$Qb) throw a = $833559fe574b4225$var$Rb, $833559fe574b4225$var$Qb = !1, $833559fe574b4225$var$Rb = null, a;
}
function $833559fe574b4225$var$D(a, b) {
    var c = b[$833559fe574b4225$var$of];
    void 0 === c && (c = b[$833559fe574b4225$var$of] = new Set);
    var d = a + "__bubble";
    c.has(d) || ($833559fe574b4225$var$pf(b, a, 2, !1), c.add(d));
}
function $833559fe574b4225$var$qf(a, b, c) {
    var d = 0;
    b && (d |= 4);
    $833559fe574b4225$var$pf(c, a, d, b);
}
var $833559fe574b4225$var$rf = "_reactListening" + Math.random().toString(36).slice(2);
function $833559fe574b4225$var$sf(a) {
    if (!a[$833559fe574b4225$var$rf]) {
        a[$833559fe574b4225$var$rf] = !0;
        $833559fe574b4225$var$da.forEach(function(b) {
            "selectionchange" !== b && ($833559fe574b4225$var$mf.has(b) || $833559fe574b4225$var$qf(b, !1, a), $833559fe574b4225$var$qf(b, !0, a));
        });
        var b = 9 === a.nodeType ? a : a.ownerDocument;
        null === b || b[$833559fe574b4225$var$rf] || (b[$833559fe574b4225$var$rf] = !0, $833559fe574b4225$var$qf("selectionchange", !1, b));
    }
}
function $833559fe574b4225$var$pf(a, b, c, d) {
    switch($833559fe574b4225$var$jd(b)){
        case 1:
            var e = $833559fe574b4225$var$ed;
            break;
        case 4:
            e = $833559fe574b4225$var$gd;
            break;
        default:
            e = $833559fe574b4225$var$fd;
    }
    c = e.bind(null, b, c, a);
    e = void 0;
    !$833559fe574b4225$var$Lb || "touchstart" !== b && "touchmove" !== b && "wheel" !== b || (e = !0);
    d ? void 0 !== e ? a.addEventListener(b, c, {
        capture: !0,
        passive: e
    }) : a.addEventListener(b, c, !0) : void 0 !== e ? a.addEventListener(b, c, {
        passive: e
    }) : a.addEventListener(b, c, !1);
}
function $833559fe574b4225$var$hd(a, b, c, d, e) {
    var f = d;
    if (0 === (b & 1) && 0 === (b & 2) && null !== d) a: for(;;){
        if (null === d) return;
        var g = d.tag;
        if (3 === g || 4 === g) {
            var h = d.stateNode.containerInfo;
            if (h === e || 8 === h.nodeType && h.parentNode === e) break;
            if (4 === g) for(g = d.return; null !== g;){
                var k = g.tag;
                if (3 === k || 4 === k) {
                    if (k = g.stateNode.containerInfo, k === e || 8 === k.nodeType && k.parentNode === e) return;
                }
                g = g.return;
            }
            for(; null !== h;){
                g = $833559fe574b4225$var$Wc(h);
                if (null === g) return;
                k = g.tag;
                if (5 === k || 6 === k) {
                    d = f = g;
                    continue a;
                }
                h = h.parentNode;
            }
        }
        d = d.return;
    }
    $833559fe574b4225$var$Jb(function() {
        var d = f, e = $833559fe574b4225$var$xb(c), g = [];
        a: {
            var h = $833559fe574b4225$var$df.get(a);
            if (void 0 !== h) {
                var k = $833559fe574b4225$var$td, n = a;
                switch(a){
                    case "keypress":
                        if (0 === $833559fe574b4225$var$od(c)) break a;
                    case "keydown":
                    case "keyup":
                        k = $833559fe574b4225$var$Rd;
                        break;
                    case "focusin":
                        n = "focus";
                        k = $833559fe574b4225$var$Fd;
                        break;
                    case "focusout":
                        n = "blur";
                        k = $833559fe574b4225$var$Fd;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        k = $833559fe574b4225$var$Fd;
                        break;
                    case "click":
                        if (2 === c.button) break a;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        k = $833559fe574b4225$var$Bd;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        k = $833559fe574b4225$var$Dd;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        k = $833559fe574b4225$var$Vd;
                        break;
                    case $833559fe574b4225$var$$e:
                    case $833559fe574b4225$var$af:
                    case $833559fe574b4225$var$bf:
                        k = $833559fe574b4225$var$Hd;
                        break;
                    case $833559fe574b4225$var$cf:
                        k = $833559fe574b4225$var$Xd;
                        break;
                    case "scroll":
                        k = $833559fe574b4225$var$vd;
                        break;
                    case "wheel":
                        k = $833559fe574b4225$var$Zd;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        k = $833559fe574b4225$var$Jd;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        k = $833559fe574b4225$var$Td;
                }
                var t = 0 !== (b & 4), J = !t && "scroll" === a, x = t ? null !== h ? h + "Capture" : null : h;
                t = [];
                for(var w = d, u; null !== w;){
                    u = w;
                    var F = u.stateNode;
                    5 === u.tag && null !== F && (u = F, null !== x && (F = $833559fe574b4225$var$Kb(w, x), null != F && t.push($833559fe574b4225$var$tf(w, F, u))));
                    if (J) break;
                    w = w.return;
                }
                0 < t.length && (h = new k(h, n, null, c, e), g.push({
                    event: h,
                    listeners: t
                }));
            }
        }
        if (0 === (b & 7)) {
            a: {
                h = "mouseover" === a || "pointerover" === a;
                k = "mouseout" === a || "pointerout" === a;
                if (h && c !== $833559fe574b4225$var$wb && (n = c.relatedTarget || c.fromElement) && ($833559fe574b4225$var$Wc(n) || n[$833559fe574b4225$var$uf])) break a;
                if (k || h) {
                    h = e.window === e ? e : (h = e.ownerDocument) ? h.defaultView || h.parentWindow : window;
                    if (k) {
                        if (n = c.relatedTarget || c.toElement, k = d, n = n ? $833559fe574b4225$var$Wc(n) : null, null !== n && (J = $833559fe574b4225$var$Vb(n), n !== J || 5 !== n.tag && 6 !== n.tag)) n = null;
                    } else k = null, n = d;
                    if (k !== n) {
                        t = $833559fe574b4225$var$Bd;
                        F = "onMouseLeave";
                        x = "onMouseEnter";
                        w = "mouse";
                        if ("pointerout" === a || "pointerover" === a) t = $833559fe574b4225$var$Td, F = "onPointerLeave", x = "onPointerEnter", w = "pointer";
                        J = null == k ? h : $833559fe574b4225$var$ue(k);
                        u = null == n ? h : $833559fe574b4225$var$ue(n);
                        h = new t(F, w + "leave", k, c, e);
                        h.target = J;
                        h.relatedTarget = u;
                        F = null;
                        $833559fe574b4225$var$Wc(e) === d && (t = new t(x, w + "enter", n, c, e), t.target = u, t.relatedTarget = J, F = t);
                        J = F;
                        if (k && n) b: {
                            t = k;
                            x = n;
                            w = 0;
                            for(u = t; u; u = $833559fe574b4225$var$vf(u))w++;
                            u = 0;
                            for(F = x; F; F = $833559fe574b4225$var$vf(F))u++;
                            for(; 0 < w - u;)t = $833559fe574b4225$var$vf(t), w--;
                            for(; 0 < u - w;)x = $833559fe574b4225$var$vf(x), u--;
                            for(; w--;){
                                if (t === x || null !== x && t === x.alternate) break b;
                                t = $833559fe574b4225$var$vf(t);
                                x = $833559fe574b4225$var$vf(x);
                            }
                            t = null;
                        }
                        else t = null;
                        null !== k && $833559fe574b4225$var$wf(g, h, k, t, !1);
                        null !== n && null !== J && $833559fe574b4225$var$wf(g, J, n, t, !0);
                    }
                }
            }
            a: {
                h = d ? $833559fe574b4225$var$ue(d) : window;
                k = h.nodeName && h.nodeName.toLowerCase();
                if ("select" === k || "input" === k && "file" === h.type) var na = $833559fe574b4225$var$ve;
                else if ($833559fe574b4225$var$me(h)) {
                    if ($833559fe574b4225$var$we) na = $833559fe574b4225$var$Fe;
                    else {
                        na = $833559fe574b4225$var$De;
                        var xa = $833559fe574b4225$var$Ce;
                    }
                } else (k = h.nodeName) && "input" === k.toLowerCase() && ("checkbox" === h.type || "radio" === h.type) && (na = $833559fe574b4225$var$Ee);
                if (na && (na = na(a, d))) {
                    $833559fe574b4225$var$ne(g, na, c, e);
                    break a;
                }
                xa && xa(a, h, d);
                "focusout" === a && (xa = h._wrapperState) && xa.controlled && "number" === h.type && $833559fe574b4225$var$cb(h, "number", h.value);
            }
            xa = d ? $833559fe574b4225$var$ue(d) : window;
            switch(a){
                case "focusin":
                    if ($833559fe574b4225$var$me(xa) || "true" === xa.contentEditable) $833559fe574b4225$var$Qe = xa, $833559fe574b4225$var$Re = d, $833559fe574b4225$var$Se = null;
                    break;
                case "focusout":
                    $833559fe574b4225$var$Se = $833559fe574b4225$var$Re = $833559fe574b4225$var$Qe = null;
                    break;
                case "mousedown":
                    $833559fe574b4225$var$Te = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    $833559fe574b4225$var$Te = !1;
                    $833559fe574b4225$var$Ue(g, c, e);
                    break;
                case "selectionchange":
                    if ($833559fe574b4225$var$Pe) break;
                case "keydown":
                case "keyup":
                    $833559fe574b4225$var$Ue(g, c, e);
            }
            var $a;
            if ($833559fe574b4225$var$ae) b: {
                switch(a){
                    case "compositionstart":
                        var ba = "onCompositionStart";
                        break b;
                    case "compositionend":
                        ba = "onCompositionEnd";
                        break b;
                    case "compositionupdate":
                        ba = "onCompositionUpdate";
                        break b;
                }
                ba = void 0;
            }
            else $833559fe574b4225$var$ie ? $833559fe574b4225$var$ge(a, c) && (ba = "onCompositionEnd") : "keydown" === a && 229 === c.keyCode && (ba = "onCompositionStart");
            ba && ($833559fe574b4225$var$de && "ko" !== c.locale && ($833559fe574b4225$var$ie || "onCompositionStart" !== ba ? "onCompositionEnd" === ba && $833559fe574b4225$var$ie && ($a = $833559fe574b4225$var$nd()) : ($833559fe574b4225$var$kd = e, $833559fe574b4225$var$ld = "value" in $833559fe574b4225$var$kd ? $833559fe574b4225$var$kd.value : $833559fe574b4225$var$kd.textContent, $833559fe574b4225$var$ie = !0)), xa = $833559fe574b4225$var$oe(d, ba), 0 < xa.length && (ba = new $833559fe574b4225$var$Ld(ba, a, null, c, e), g.push({
                event: ba,
                listeners: xa
            }), $a ? ba.data = $a : ($a = $833559fe574b4225$var$he(c), null !== $a && (ba.data = $a))));
            if ($a = $833559fe574b4225$var$ce ? $833559fe574b4225$var$je(a, c) : $833559fe574b4225$var$ke(a, c)) d = $833559fe574b4225$var$oe(d, "onBeforeInput"), 0 < d.length && (e = new $833559fe574b4225$var$Ld("onBeforeInput", "beforeinput", null, c, e), g.push({
                event: e,
                listeners: d
            }), e.data = $a);
        }
        $833559fe574b4225$var$se(g, b);
    });
}
function $833559fe574b4225$var$tf(a, b, c) {
    return {
        instance: a,
        listener: b,
        currentTarget: c
    };
}
function $833559fe574b4225$var$oe(a, b) {
    for(var c = b + "Capture", d = []; null !== a;){
        var e = a, f = e.stateNode;
        5 === e.tag && null !== f && (e = f, f = $833559fe574b4225$var$Kb(a, c), null != f && d.unshift($833559fe574b4225$var$tf(a, f, e)), f = $833559fe574b4225$var$Kb(a, b), null != f && d.push($833559fe574b4225$var$tf(a, f, e)));
        a = a.return;
    }
    return d;
}
function $833559fe574b4225$var$vf(a) {
    if (null === a) return null;
    do a = a.return;
    while (a && 5 !== a.tag);
    return a ? a : null;
}
function $833559fe574b4225$var$wf(a, b, c, d, e) {
    for(var f = b._reactName, g = []; null !== c && c !== d;){
        var h = c, k = h.alternate, l = h.stateNode;
        if (null !== k && k === d) break;
        5 === h.tag && null !== l && (h = l, e ? (k = $833559fe574b4225$var$Kb(c, f), null != k && g.unshift($833559fe574b4225$var$tf(c, k, h))) : e || (k = $833559fe574b4225$var$Kb(c, f), null != k && g.push($833559fe574b4225$var$tf(c, k, h))));
        c = c.return;
    }
    0 !== g.length && a.push({
        event: b,
        listeners: g
    });
}
var $833559fe574b4225$var$xf = /\r\n?/g, $833559fe574b4225$var$yf = /\u0000|\uFFFD/g;
function $833559fe574b4225$var$zf(a) {
    return ("string" === typeof a ? a : "" + a).replace($833559fe574b4225$var$xf, "\n").replace($833559fe574b4225$var$yf, "");
}
function $833559fe574b4225$var$Af(a, b, c) {
    b = $833559fe574b4225$var$zf(b);
    if ($833559fe574b4225$var$zf(a) !== b && c) throw Error($833559fe574b4225$var$p(425));
}
function $833559fe574b4225$var$Bf() {}
var $833559fe574b4225$var$Cf = null, $833559fe574b4225$var$Df = null;
function $833559fe574b4225$var$Ef(a, b) {
    return "textarea" === a || "noscript" === a || "string" === typeof b.children || "number" === typeof b.children || "object" === typeof b.dangerouslySetInnerHTML && null !== b.dangerouslySetInnerHTML && null != b.dangerouslySetInnerHTML.__html;
}
var $833559fe574b4225$var$Ff = "function" === typeof setTimeout ? setTimeout : void 0, $833559fe574b4225$var$Gf = "function" === typeof clearTimeout ? clearTimeout : void 0, $833559fe574b4225$var$Hf = "function" === typeof Promise ? Promise : void 0, $833559fe574b4225$var$Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof $833559fe574b4225$var$Hf ? function(a) {
    return $833559fe574b4225$var$Hf.resolve(null).then(a).catch($833559fe574b4225$var$If);
} : $833559fe574b4225$var$Ff;
function $833559fe574b4225$var$If(a) {
    setTimeout(function() {
        throw a;
    });
}
function $833559fe574b4225$var$Kf(a, b) {
    var c = b, d = 0;
    do {
        var e = c.nextSibling;
        a.removeChild(c);
        if (e && 8 === e.nodeType) {
            if (c = e.data, "/$" === c) {
                if (0 === d) {
                    a.removeChild(e);
                    $833559fe574b4225$var$bd(b);
                    return;
                }
                d--;
            } else "$" !== c && "$?" !== c && "$!" !== c || d++;
        }
        c = e;
    }while (c);
    $833559fe574b4225$var$bd(b);
}
function $833559fe574b4225$var$Lf(a) {
    for(; null != a; a = a.nextSibling){
        var b = a.nodeType;
        if (1 === b || 3 === b) break;
        if (8 === b) {
            b = a.data;
            if ("$" === b || "$!" === b || "$?" === b) break;
            if ("/$" === b) return null;
        }
    }
    return a;
}
function $833559fe574b4225$var$Mf(a) {
    a = a.previousSibling;
    for(var b = 0; a;){
        if (8 === a.nodeType) {
            var c = a.data;
            if ("$" === c || "$!" === c || "$?" === c) {
                if (0 === b) return a;
                b--;
            } else "/$" === c && b++;
        }
        a = a.previousSibling;
    }
    return null;
}
var $833559fe574b4225$var$Nf = Math.random().toString(36).slice(2), $833559fe574b4225$var$Of = "__reactFiber$" + $833559fe574b4225$var$Nf, $833559fe574b4225$var$Pf = "__reactProps$" + $833559fe574b4225$var$Nf, $833559fe574b4225$var$uf = "__reactContainer$" + $833559fe574b4225$var$Nf, $833559fe574b4225$var$of = "__reactEvents$" + $833559fe574b4225$var$Nf, $833559fe574b4225$var$Qf = "__reactListeners$" + $833559fe574b4225$var$Nf, $833559fe574b4225$var$Rf = "__reactHandles$" + $833559fe574b4225$var$Nf;
function $833559fe574b4225$var$Wc(a) {
    var b = a[$833559fe574b4225$var$Of];
    if (b) return b;
    for(var c = a.parentNode; c;){
        if (b = c[$833559fe574b4225$var$uf] || c[$833559fe574b4225$var$Of]) {
            c = b.alternate;
            if (null !== b.child || null !== c && null !== c.child) for(a = $833559fe574b4225$var$Mf(a); null !== a;){
                if (c = a[$833559fe574b4225$var$Of]) return c;
                a = $833559fe574b4225$var$Mf(a);
            }
            return b;
        }
        a = c;
        c = a.parentNode;
    }
    return null;
}
function $833559fe574b4225$var$Cb(a) {
    a = a[$833559fe574b4225$var$Of] || a[$833559fe574b4225$var$uf];
    return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
}
function $833559fe574b4225$var$ue(a) {
    if (5 === a.tag || 6 === a.tag) return a.stateNode;
    throw Error($833559fe574b4225$var$p(33));
}
function $833559fe574b4225$var$Db(a) {
    return a[$833559fe574b4225$var$Pf] || null;
}
var $833559fe574b4225$var$Sf = [], $833559fe574b4225$var$Tf = -1;
function $833559fe574b4225$var$Uf(a) {
    return {
        current: a
    };
}
function $833559fe574b4225$var$E(a) {
    0 > $833559fe574b4225$var$Tf || (a.current = $833559fe574b4225$var$Sf[$833559fe574b4225$var$Tf], $833559fe574b4225$var$Sf[$833559fe574b4225$var$Tf] = null, $833559fe574b4225$var$Tf--);
}
function $833559fe574b4225$var$G(a, b) {
    $833559fe574b4225$var$Tf++;
    $833559fe574b4225$var$Sf[$833559fe574b4225$var$Tf] = a.current;
    a.current = b;
}
var $833559fe574b4225$var$Vf = {}, $833559fe574b4225$var$H = $833559fe574b4225$var$Uf($833559fe574b4225$var$Vf), $833559fe574b4225$var$Wf = $833559fe574b4225$var$Uf(!1), $833559fe574b4225$var$Xf = $833559fe574b4225$var$Vf;
function $833559fe574b4225$var$Yf(a, b) {
    var c = a.type.contextTypes;
    if (!c) return $833559fe574b4225$var$Vf;
    var d = a.stateNode;
    if (d && d.__reactInternalMemoizedUnmaskedChildContext === b) return d.__reactInternalMemoizedMaskedChildContext;
    var e = {}, f;
    for(f in c)e[f] = b[f];
    d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
    return e;
}
function $833559fe574b4225$var$Zf(a) {
    a = a.childContextTypes;
    return null !== a && void 0 !== a;
}
function $833559fe574b4225$var$$f() {
    $833559fe574b4225$var$E($833559fe574b4225$var$Wf);
    $833559fe574b4225$var$E($833559fe574b4225$var$H);
}
function $833559fe574b4225$var$ag(a, b, c) {
    if ($833559fe574b4225$var$H.current !== $833559fe574b4225$var$Vf) throw Error($833559fe574b4225$var$p(168));
    $833559fe574b4225$var$G($833559fe574b4225$var$H, b);
    $833559fe574b4225$var$G($833559fe574b4225$var$Wf, c);
}
function $833559fe574b4225$var$bg(a, b, c) {
    var d = a.stateNode;
    b = b.childContextTypes;
    if ("function" !== typeof d.getChildContext) return c;
    d = d.getChildContext();
    for(var e in d)if (!(e in b)) throw Error($833559fe574b4225$var$p(108, $833559fe574b4225$var$Ra(a) || "Unknown", e));
    return $833559fe574b4225$var$A({}, c, d);
}
function $833559fe574b4225$var$cg(a) {
    a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || $833559fe574b4225$var$Vf;
    $833559fe574b4225$var$Xf = $833559fe574b4225$var$H.current;
    $833559fe574b4225$var$G($833559fe574b4225$var$H, a);
    $833559fe574b4225$var$G($833559fe574b4225$var$Wf, $833559fe574b4225$var$Wf.current);
    return !0;
}
function $833559fe574b4225$var$dg(a, b, c) {
    var d = a.stateNode;
    if (!d) throw Error($833559fe574b4225$var$p(169));
    c ? (a = $833559fe574b4225$var$bg(a, b, $833559fe574b4225$var$Xf), d.__reactInternalMemoizedMergedChildContext = a, $833559fe574b4225$var$E($833559fe574b4225$var$Wf), $833559fe574b4225$var$E($833559fe574b4225$var$H), $833559fe574b4225$var$G($833559fe574b4225$var$H, a)) : $833559fe574b4225$var$E($833559fe574b4225$var$Wf);
    $833559fe574b4225$var$G($833559fe574b4225$var$Wf, c);
}
var $833559fe574b4225$var$eg = null, $833559fe574b4225$var$fg = !1, $833559fe574b4225$var$gg = !1;
function $833559fe574b4225$var$hg(a) {
    null === $833559fe574b4225$var$eg ? $833559fe574b4225$var$eg = [
        a
    ] : $833559fe574b4225$var$eg.push(a);
}
function $833559fe574b4225$var$ig(a) {
    $833559fe574b4225$var$fg = !0;
    $833559fe574b4225$var$hg(a);
}
function $833559fe574b4225$var$jg() {
    if (!$833559fe574b4225$var$gg && null !== $833559fe574b4225$var$eg) {
        $833559fe574b4225$var$gg = !0;
        var a = 0, b = $833559fe574b4225$var$C;
        try {
            var c = $833559fe574b4225$var$eg;
            for($833559fe574b4225$var$C = 1; a < c.length; a++){
                var d = c[a];
                do d = d(!0);
                while (null !== d);
            }
            $833559fe574b4225$var$eg = null;
            $833559fe574b4225$var$fg = !1;
        } catch (e) {
            throw null !== $833559fe574b4225$var$eg && ($833559fe574b4225$var$eg = $833559fe574b4225$var$eg.slice(a + 1)), $833559fe574b4225$var$ac($833559fe574b4225$var$fc, $833559fe574b4225$var$jg), e;
        } finally{
            $833559fe574b4225$var$C = b, $833559fe574b4225$var$gg = !1;
        }
    }
    return null;
}
var $833559fe574b4225$var$kg = [], $833559fe574b4225$var$lg = 0, $833559fe574b4225$var$mg = null, $833559fe574b4225$var$ng = 0, $833559fe574b4225$var$og = [], $833559fe574b4225$var$pg = 0, $833559fe574b4225$var$qg = null, $833559fe574b4225$var$rg = 1, $833559fe574b4225$var$sg = "";
function $833559fe574b4225$var$tg(a, b) {
    $833559fe574b4225$var$kg[$833559fe574b4225$var$lg++] = $833559fe574b4225$var$ng;
    $833559fe574b4225$var$kg[$833559fe574b4225$var$lg++] = $833559fe574b4225$var$mg;
    $833559fe574b4225$var$mg = a;
    $833559fe574b4225$var$ng = b;
}
function $833559fe574b4225$var$ug(a, b, c) {
    $833559fe574b4225$var$og[$833559fe574b4225$var$pg++] = $833559fe574b4225$var$rg;
    $833559fe574b4225$var$og[$833559fe574b4225$var$pg++] = $833559fe574b4225$var$sg;
    $833559fe574b4225$var$og[$833559fe574b4225$var$pg++] = $833559fe574b4225$var$qg;
    $833559fe574b4225$var$qg = a;
    var d = $833559fe574b4225$var$rg;
    a = $833559fe574b4225$var$sg;
    var e = 32 - $833559fe574b4225$var$oc(d) - 1;
    d &= ~(1 << e);
    c += 1;
    var f = 32 - $833559fe574b4225$var$oc(b) + e;
    if (30 < f) {
        var g = e - e % 5;
        f = (d & (1 << g) - 1).toString(32);
        d >>= g;
        e -= g;
        $833559fe574b4225$var$rg = 1 << 32 - $833559fe574b4225$var$oc(b) + e | c << e | d;
        $833559fe574b4225$var$sg = f + a;
    } else $833559fe574b4225$var$rg = 1 << f | c << e | d, $833559fe574b4225$var$sg = a;
}
function $833559fe574b4225$var$vg(a) {
    null !== a.return && ($833559fe574b4225$var$tg(a, 1), $833559fe574b4225$var$ug(a, 1, 0));
}
function $833559fe574b4225$var$wg(a) {
    for(; a === $833559fe574b4225$var$mg;)$833559fe574b4225$var$mg = $833559fe574b4225$var$kg[--$833559fe574b4225$var$lg], $833559fe574b4225$var$kg[$833559fe574b4225$var$lg] = null, $833559fe574b4225$var$ng = $833559fe574b4225$var$kg[--$833559fe574b4225$var$lg], $833559fe574b4225$var$kg[$833559fe574b4225$var$lg] = null;
    for(; a === $833559fe574b4225$var$qg;)$833559fe574b4225$var$qg = $833559fe574b4225$var$og[--$833559fe574b4225$var$pg], $833559fe574b4225$var$og[$833559fe574b4225$var$pg] = null, $833559fe574b4225$var$sg = $833559fe574b4225$var$og[--$833559fe574b4225$var$pg], $833559fe574b4225$var$og[$833559fe574b4225$var$pg] = null, $833559fe574b4225$var$rg = $833559fe574b4225$var$og[--$833559fe574b4225$var$pg], $833559fe574b4225$var$og[$833559fe574b4225$var$pg] = null;
}
var $833559fe574b4225$var$xg = null, $833559fe574b4225$var$yg = null, $833559fe574b4225$var$I = !1, $833559fe574b4225$var$zg = null;
function $833559fe574b4225$var$Ag(a, b) {
    var c = $833559fe574b4225$var$Bg(5, null, null, 0);
    c.elementType = "DELETED";
    c.stateNode = b;
    c.return = a;
    b = a.deletions;
    null === b ? (a.deletions = [
        c
    ], a.flags |= 16) : b.push(c);
}
function $833559fe574b4225$var$Cg(a, b) {
    switch(a.tag){
        case 5:
            var c = a.type;
            b = 1 !== b.nodeType || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
            return null !== b ? (a.stateNode = b, $833559fe574b4225$var$xg = a, $833559fe574b4225$var$yg = $833559fe574b4225$var$Lf(b.firstChild), !0) : !1;
        case 6:
            return b = "" === a.pendingProps || 3 !== b.nodeType ? null : b, null !== b ? (a.stateNode = b, $833559fe574b4225$var$xg = a, $833559fe574b4225$var$yg = null, !0) : !1;
        case 13:
            return b = 8 !== b.nodeType ? null : b, null !== b ? (c = null !== $833559fe574b4225$var$qg ? {
                id: $833559fe574b4225$var$rg,
                overflow: $833559fe574b4225$var$sg
            } : null, a.memoizedState = {
                dehydrated: b,
                treeContext: c,
                retryLane: 1073741824
            }, c = $833559fe574b4225$var$Bg(18, null, null, 0), c.stateNode = b, c.return = a, a.child = c, $833559fe574b4225$var$xg = a, $833559fe574b4225$var$yg = null, !0) : !1;
        default:
            return !1;
    }
}
function $833559fe574b4225$var$Dg(a) {
    return 0 !== (a.mode & 1) && 0 === (a.flags & 128);
}
function $833559fe574b4225$var$Eg(a) {
    if ($833559fe574b4225$var$I) {
        var b = $833559fe574b4225$var$yg;
        if (b) {
            var c = b;
            if (!$833559fe574b4225$var$Cg(a, b)) {
                if ($833559fe574b4225$var$Dg(a)) throw Error($833559fe574b4225$var$p(418));
                b = $833559fe574b4225$var$Lf(c.nextSibling);
                var d = $833559fe574b4225$var$xg;
                b && $833559fe574b4225$var$Cg(a, b) ? $833559fe574b4225$var$Ag(d, c) : (a.flags = a.flags & -4097 | 2, $833559fe574b4225$var$I = !1, $833559fe574b4225$var$xg = a);
            }
        } else {
            if ($833559fe574b4225$var$Dg(a)) throw Error($833559fe574b4225$var$p(418));
            a.flags = a.flags & -4097 | 2;
            $833559fe574b4225$var$I = !1;
            $833559fe574b4225$var$xg = a;
        }
    }
}
function $833559fe574b4225$var$Fg(a) {
    for(a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag;)a = a.return;
    $833559fe574b4225$var$xg = a;
}
function $833559fe574b4225$var$Gg(a) {
    if (a !== $833559fe574b4225$var$xg) return !1;
    if (!$833559fe574b4225$var$I) return $833559fe574b4225$var$Fg(a), $833559fe574b4225$var$I = !0, !1;
    var b;
    (b = 3 !== a.tag) && !(b = 5 !== a.tag) && (b = a.type, b = "head" !== b && "body" !== b && !$833559fe574b4225$var$Ef(a.type, a.memoizedProps));
    if (b && (b = $833559fe574b4225$var$yg)) {
        if ($833559fe574b4225$var$Dg(a)) throw $833559fe574b4225$var$Hg(), Error($833559fe574b4225$var$p(418));
        for(; b;)$833559fe574b4225$var$Ag(a, b), b = $833559fe574b4225$var$Lf(b.nextSibling);
    }
    $833559fe574b4225$var$Fg(a);
    if (13 === a.tag) {
        a = a.memoizedState;
        a = null !== a ? a.dehydrated : null;
        if (!a) throw Error($833559fe574b4225$var$p(317));
        a: {
            a = a.nextSibling;
            for(b = 0; a;){
                if (8 === a.nodeType) {
                    var c = a.data;
                    if ("/$" === c) {
                        if (0 === b) {
                            $833559fe574b4225$var$yg = $833559fe574b4225$var$Lf(a.nextSibling);
                            break a;
                        }
                        b--;
                    } else "$" !== c && "$!" !== c && "$?" !== c || b++;
                }
                a = a.nextSibling;
            }
            $833559fe574b4225$var$yg = null;
        }
    } else $833559fe574b4225$var$yg = $833559fe574b4225$var$xg ? $833559fe574b4225$var$Lf(a.stateNode.nextSibling) : null;
    return !0;
}
function $833559fe574b4225$var$Hg() {
    for(var a = $833559fe574b4225$var$yg; a;)a = $833559fe574b4225$var$Lf(a.nextSibling);
}
function $833559fe574b4225$var$Ig() {
    $833559fe574b4225$var$yg = $833559fe574b4225$var$xg = null;
    $833559fe574b4225$var$I = !1;
}
function $833559fe574b4225$var$Jg(a) {
    null === $833559fe574b4225$var$zg ? $833559fe574b4225$var$zg = [
        a
    ] : $833559fe574b4225$var$zg.push(a);
}
var $833559fe574b4225$var$Kg = $833559fe574b4225$var$ua.ReactCurrentBatchConfig;
function $833559fe574b4225$var$Lg(a, b) {
    if (a && a.defaultProps) {
        b = $833559fe574b4225$var$A({}, b);
        a = a.defaultProps;
        for(var c in a)void 0 === b[c] && (b[c] = a[c]);
        return b;
    }
    return b;
}
var $833559fe574b4225$var$Mg = $833559fe574b4225$var$Uf(null), $833559fe574b4225$var$Ng = null, $833559fe574b4225$var$Og = null, $833559fe574b4225$var$Pg = null;
function $833559fe574b4225$var$Qg() {
    $833559fe574b4225$var$Pg = $833559fe574b4225$var$Og = $833559fe574b4225$var$Ng = null;
}
function $833559fe574b4225$var$Rg(a) {
    var b = $833559fe574b4225$var$Mg.current;
    $833559fe574b4225$var$E($833559fe574b4225$var$Mg);
    a._currentValue = b;
}
function $833559fe574b4225$var$Sg(a, b, c) {
    for(; null !== a;){
        var d = a.alternate;
        (a.childLanes & b) !== b ? (a.childLanes |= b, null !== d && (d.childLanes |= b)) : null !== d && (d.childLanes & b) !== b && (d.childLanes |= b);
        if (a === c) break;
        a = a.return;
    }
}
function $833559fe574b4225$var$Tg(a, b) {
    $833559fe574b4225$var$Ng = a;
    $833559fe574b4225$var$Pg = $833559fe574b4225$var$Og = null;
    a = a.dependencies;
    null !== a && null !== a.firstContext && (0 !== (a.lanes & b) && ($833559fe574b4225$var$Ug = !0), a.firstContext = null);
}
function $833559fe574b4225$var$Vg(a) {
    var b = a._currentValue;
    if ($833559fe574b4225$var$Pg !== a) {
        if (a = {
            context: a,
            memoizedValue: b,
            next: null
        }, null === $833559fe574b4225$var$Og) {
            if (null === $833559fe574b4225$var$Ng) throw Error($833559fe574b4225$var$p(308));
            $833559fe574b4225$var$Og = a;
            $833559fe574b4225$var$Ng.dependencies = {
                lanes: 0,
                firstContext: a
            };
        } else $833559fe574b4225$var$Og = $833559fe574b4225$var$Og.next = a;
    }
    return b;
}
var $833559fe574b4225$var$Wg = null;
function $833559fe574b4225$var$Xg(a) {
    null === $833559fe574b4225$var$Wg ? $833559fe574b4225$var$Wg = [
        a
    ] : $833559fe574b4225$var$Wg.push(a);
}
function $833559fe574b4225$var$Yg(a, b, c, d) {
    var e = b.interleaved;
    null === e ? (c.next = c, $833559fe574b4225$var$Xg(b)) : (c.next = e.next, e.next = c);
    b.interleaved = c;
    return $833559fe574b4225$var$Zg(a, d);
}
function $833559fe574b4225$var$Zg(a, b) {
    a.lanes |= b;
    var c = a.alternate;
    null !== c && (c.lanes |= b);
    c = a;
    for(a = a.return; null !== a;)a.childLanes |= b, c = a.alternate, null !== c && (c.childLanes |= b), c = a, a = a.return;
    return 3 === c.tag ? c.stateNode : null;
}
var $833559fe574b4225$var$$g = !1;
function $833559fe574b4225$var$ah(a) {
    a.updateQueue = {
        baseState: a.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    };
}
function $833559fe574b4225$var$bh(a, b) {
    a = a.updateQueue;
    b.updateQueue === a && (b.updateQueue = {
        baseState: a.baseState,
        firstBaseUpdate: a.firstBaseUpdate,
        lastBaseUpdate: a.lastBaseUpdate,
        shared: a.shared,
        effects: a.effects
    });
}
function $833559fe574b4225$var$ch(a, b) {
    return {
        eventTime: a,
        lane: b,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    };
}
function $833559fe574b4225$var$dh(a, b, c) {
    var d = a.updateQueue;
    if (null === d) return null;
    d = d.shared;
    if (0 !== ($833559fe574b4225$var$K & 2)) {
        var e = d.pending;
        null === e ? b.next = b : (b.next = e.next, e.next = b);
        d.pending = b;
        return $833559fe574b4225$var$Zg(a, c);
    }
    e = d.interleaved;
    null === e ? (b.next = b, $833559fe574b4225$var$Xg(d)) : (b.next = e.next, e.next = b);
    d.interleaved = b;
    return $833559fe574b4225$var$Zg(a, c);
}
function $833559fe574b4225$var$eh(a, b, c) {
    b = b.updateQueue;
    if (null !== b && (b = b.shared, 0 !== (c & 4194240))) {
        var d = b.lanes;
        d &= a.pendingLanes;
        c |= d;
        b.lanes = c;
        $833559fe574b4225$var$Cc(a, c);
    }
}
function $833559fe574b4225$var$fh(a, b) {
    var c = a.updateQueue, d = a.alternate;
    if (null !== d && (d = d.updateQueue, c === d)) {
        var e = null, f = null;
        c = c.firstBaseUpdate;
        if (null !== c) {
            do {
                var g = {
                    eventTime: c.eventTime,
                    lane: c.lane,
                    tag: c.tag,
                    payload: c.payload,
                    callback: c.callback,
                    next: null
                };
                null === f ? e = f = g : f = f.next = g;
                c = c.next;
            }while (null !== c);
            null === f ? e = f = b : f = f.next = b;
        } else e = f = b;
        c = {
            baseState: d.baseState,
            firstBaseUpdate: e,
            lastBaseUpdate: f,
            shared: d.shared,
            effects: d.effects
        };
        a.updateQueue = c;
        return;
    }
    a = c.lastBaseUpdate;
    null === a ? c.firstBaseUpdate = b : a.next = b;
    c.lastBaseUpdate = b;
}
function $833559fe574b4225$var$gh(a, b, c, d) {
    var e = a.updateQueue;
    $833559fe574b4225$var$$g = !1;
    var f = e.firstBaseUpdate, g = e.lastBaseUpdate, h = e.shared.pending;
    if (null !== h) {
        e.shared.pending = null;
        var k = h, l = k.next;
        k.next = null;
        null === g ? f = l : g.next = l;
        g = k;
        var m = a.alternate;
        null !== m && (m = m.updateQueue, h = m.lastBaseUpdate, h !== g && (null === h ? m.firstBaseUpdate = l : h.next = l, m.lastBaseUpdate = k));
    }
    if (null !== f) {
        var q = e.baseState;
        g = 0;
        m = l = k = null;
        h = f;
        do {
            var r = h.lane, y = h.eventTime;
            if ((d & r) === r) {
                null !== m && (m = m.next = {
                    eventTime: y,
                    lane: 0,
                    tag: h.tag,
                    payload: h.payload,
                    callback: h.callback,
                    next: null
                });
                a: {
                    var n = a, t = h;
                    r = b;
                    y = c;
                    switch(t.tag){
                        case 1:
                            n = t.payload;
                            if ("function" === typeof n) {
                                q = n.call(y, q, r);
                                break a;
                            }
                            q = n;
                            break a;
                        case 3:
                            n.flags = n.flags & -65537 | 128;
                        case 0:
                            n = t.payload;
                            r = "function" === typeof n ? n.call(y, q, r) : n;
                            if (null === r || void 0 === r) break a;
                            q = $833559fe574b4225$var$A({}, q, r);
                            break a;
                        case 2:
                            $833559fe574b4225$var$$g = !0;
                    }
                }
                null !== h.callback && 0 !== h.lane && (a.flags |= 64, r = e.effects, null === r ? e.effects = [
                    h
                ] : r.push(h));
            } else y = {
                eventTime: y,
                lane: r,
                tag: h.tag,
                payload: h.payload,
                callback: h.callback,
                next: null
            }, null === m ? (l = m = y, k = q) : m = m.next = y, g |= r;
            h = h.next;
            if (null === h) {
                if (h = e.shared.pending, null === h) break;
                else r = h, h = r.next, r.next = null, e.lastBaseUpdate = r, e.shared.pending = null;
            }
        }while (1);
        null === m && (k = q);
        e.baseState = k;
        e.firstBaseUpdate = l;
        e.lastBaseUpdate = m;
        b = e.shared.interleaved;
        if (null !== b) {
            e = b;
            do g |= e.lane, e = e.next;
            while (e !== b);
        } else null === f && (e.shared.lanes = 0);
        $833559fe574b4225$var$hh |= g;
        a.lanes = g;
        a.memoizedState = q;
    }
}
function $833559fe574b4225$var$ih(a, b, c) {
    a = b.effects;
    b.effects = null;
    if (null !== a) for(b = 0; b < a.length; b++){
        var d = a[b], e = d.callback;
        if (null !== e) {
            d.callback = null;
            d = c;
            if ("function" !== typeof e) throw Error($833559fe574b4225$var$p(191, e));
            e.call(d);
        }
    }
}
var $833559fe574b4225$var$jh = (new $d4J5n.Component).refs;
function $833559fe574b4225$var$kh(a, b, c, d) {
    b = a.memoizedState;
    c = c(d, b);
    c = null === c || void 0 === c ? b : $833559fe574b4225$var$A({}, b, c);
    a.memoizedState = c;
    0 === a.lanes && (a.updateQueue.baseState = c);
}
var $833559fe574b4225$var$nh = {
    isMounted: function(a) {
        return (a = a._reactInternals) ? $833559fe574b4225$var$Vb(a) === a : !1;
    },
    enqueueSetState: function(a, b, c) {
        a = a._reactInternals;
        var d = $833559fe574b4225$var$L(), e = $833559fe574b4225$var$lh(a), f = $833559fe574b4225$var$ch(d, e);
        f.payload = b;
        void 0 !== c && null !== c && (f.callback = c);
        b = $833559fe574b4225$var$dh(a, f, e);
        null !== b && ($833559fe574b4225$var$mh(b, a, e, d), $833559fe574b4225$var$eh(b, a, e));
    },
    enqueueReplaceState: function(a, b, c) {
        a = a._reactInternals;
        var d = $833559fe574b4225$var$L(), e = $833559fe574b4225$var$lh(a), f = $833559fe574b4225$var$ch(d, e);
        f.tag = 1;
        f.payload = b;
        void 0 !== c && null !== c && (f.callback = c);
        b = $833559fe574b4225$var$dh(a, f, e);
        null !== b && ($833559fe574b4225$var$mh(b, a, e, d), $833559fe574b4225$var$eh(b, a, e));
    },
    enqueueForceUpdate: function(a, b) {
        a = a._reactInternals;
        var c = $833559fe574b4225$var$L(), d = $833559fe574b4225$var$lh(a), e = $833559fe574b4225$var$ch(c, d);
        e.tag = 2;
        void 0 !== b && null !== b && (e.callback = b);
        b = $833559fe574b4225$var$dh(a, e, d);
        null !== b && ($833559fe574b4225$var$mh(b, a, d, c), $833559fe574b4225$var$eh(b, a, d));
    }
};
function $833559fe574b4225$var$oh(a, b, c, d, e, f, g) {
    a = a.stateNode;
    return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f, g) : b.prototype && b.prototype.isPureReactComponent ? !$833559fe574b4225$var$Ie(c, d) || !$833559fe574b4225$var$Ie(e, f) : !0;
}
function $833559fe574b4225$var$ph(a, b, c) {
    var d = !1, e = $833559fe574b4225$var$Vf;
    var f = b.contextType;
    "object" === typeof f && null !== f ? f = $833559fe574b4225$var$Vg(f) : (e = $833559fe574b4225$var$Zf(b) ? $833559fe574b4225$var$Xf : $833559fe574b4225$var$H.current, d = b.contextTypes, f = (d = null !== d && void 0 !== d) ? $833559fe574b4225$var$Yf(a, e) : $833559fe574b4225$var$Vf);
    b = new b(c, f);
    a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
    b.updater = $833559fe574b4225$var$nh;
    a.stateNode = b;
    b._reactInternals = a;
    d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f);
    return b;
}
function $833559fe574b4225$var$qh(a, b, c, d) {
    a = b.state;
    "function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
    "function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
    b.state !== a && $833559fe574b4225$var$nh.enqueueReplaceState(b, b.state, null);
}
function $833559fe574b4225$var$rh(a, b, c, d) {
    var e = a.stateNode;
    e.props = c;
    e.state = a.memoizedState;
    e.refs = $833559fe574b4225$var$jh;
    $833559fe574b4225$var$ah(a);
    var f = b.contextType;
    "object" === typeof f && null !== f ? e.context = $833559fe574b4225$var$Vg(f) : (f = $833559fe574b4225$var$Zf(b) ? $833559fe574b4225$var$Xf : $833559fe574b4225$var$H.current, e.context = $833559fe574b4225$var$Yf(a, f));
    e.state = a.memoizedState;
    f = b.getDerivedStateFromProps;
    "function" === typeof f && ($833559fe574b4225$var$kh(a, b, f, c), e.state = a.memoizedState);
    "function" === typeof b.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b !== e.state && $833559fe574b4225$var$nh.enqueueReplaceState(e, e.state, null), $833559fe574b4225$var$gh(a, c, e, d), e.state = a.memoizedState);
    "function" === typeof e.componentDidMount && (a.flags |= 4194308);
}
function $833559fe574b4225$var$sh(a, b, c) {
    a = c.ref;
    if (null !== a && "function" !== typeof a && "object" !== typeof a) {
        if (c._owner) {
            c = c._owner;
            if (c) {
                if (1 !== c.tag) throw Error($833559fe574b4225$var$p(309));
                var d = c.stateNode;
            }
            if (!d) throw Error($833559fe574b4225$var$p(147, a));
            var e = d, f = "" + a;
            if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === f) return b.ref;
            b = function(a) {
                var b = e.refs;
                b === $833559fe574b4225$var$jh && (b = e.refs = {});
                null === a ? delete b[f] : b[f] = a;
            };
            b._stringRef = f;
            return b;
        }
        if ("string" !== typeof a) throw Error($833559fe574b4225$var$p(284));
        if (!c._owner) throw Error($833559fe574b4225$var$p(290, a));
    }
    return a;
}
function $833559fe574b4225$var$th(a, b) {
    a = Object.prototype.toString.call(b);
    throw Error($833559fe574b4225$var$p(31, "[object Object]" === a ? "object with keys {" + Object.keys(b).join(", ") + "}" : a));
}
function $833559fe574b4225$var$uh(a) {
    var b = a._init;
    return b(a._payload);
}
function $833559fe574b4225$var$vh(a) {
    function b(b, c) {
        if (a) {
            var d = b.deletions;
            null === d ? (b.deletions = [
                c
            ], b.flags |= 16) : d.push(c);
        }
    }
    function c(c, d) {
        if (!a) return null;
        for(; null !== d;)b(c, d), d = d.sibling;
        return null;
    }
    function d(a, b) {
        for(a = new Map; null !== b;)null !== b.key ? a.set(b.key, b) : a.set(b.index, b), b = b.sibling;
        return a;
    }
    function e(a, b) {
        a = $833559fe574b4225$var$wh(a, b);
        a.index = 0;
        a.sibling = null;
        return a;
    }
    function f(b, c, d) {
        b.index = d;
        if (!a) return b.flags |= 1048576, c;
        d = b.alternate;
        if (null !== d) return d = d.index, d < c ? (b.flags |= 2, c) : d;
        b.flags |= 2;
        return c;
    }
    function g(b) {
        a && null === b.alternate && (b.flags |= 2);
        return b;
    }
    function h(a, b, c, d) {
        if (null === b || 6 !== b.tag) return b = $833559fe574b4225$var$xh(c, a.mode, d), b.return = a, b;
        b = e(b, c);
        b.return = a;
        return b;
    }
    function k(a, b, c, d) {
        var f = c.type;
        if (f === $833559fe574b4225$var$ya) return m(a, b, c.props.children, d, c.key);
        if (null !== b && (b.elementType === f || "object" === typeof f && null !== f && f.$$typeof === $833559fe574b4225$var$Ha && $833559fe574b4225$var$uh(f) === b.type)) return d = e(b, c.props), d.ref = $833559fe574b4225$var$sh(a, b, c), d.return = a, d;
        d = $833559fe574b4225$var$yh(c.type, c.key, c.props, null, a.mode, d);
        d.ref = $833559fe574b4225$var$sh(a, b, c);
        d.return = a;
        return d;
    }
    function l(a, b, c, d) {
        if (null === b || 4 !== b.tag || b.stateNode.containerInfo !== c.containerInfo || b.stateNode.implementation !== c.implementation) return b = $833559fe574b4225$var$zh(c, a.mode, d), b.return = a, b;
        b = e(b, c.children || []);
        b.return = a;
        return b;
    }
    function m(a, b, c, d, f) {
        if (null === b || 7 !== b.tag) return b = $833559fe574b4225$var$Ah(c, a.mode, d, f), b.return = a, b;
        b = e(b, c);
        b.return = a;
        return b;
    }
    function q(a, b, c) {
        if ("string" === typeof b && "" !== b || "number" === typeof b) return b = $833559fe574b4225$var$xh("" + b, a.mode, c), b.return = a, b;
        if ("object" === typeof b && null !== b) {
            switch(b.$$typeof){
                case $833559fe574b4225$var$va:
                    return c = $833559fe574b4225$var$yh(b.type, b.key, b.props, null, a.mode, c), c.ref = $833559fe574b4225$var$sh(a, null, b), c.return = a, c;
                case $833559fe574b4225$var$wa:
                    return b = $833559fe574b4225$var$zh(b, a.mode, c), b.return = a, b;
                case $833559fe574b4225$var$Ha:
                    var d = b._init;
                    return q(a, d(b._payload), c);
            }
            if ($833559fe574b4225$var$eb(b) || $833559fe574b4225$var$Ka(b)) return b = $833559fe574b4225$var$Ah(b, a.mode, c, null), b.return = a, b;
            $833559fe574b4225$var$th(a, b);
        }
        return null;
    }
    function r(a, b, c, d) {
        var e = null !== b ? b.key : null;
        if ("string" === typeof c && "" !== c || "number" === typeof c) return null !== e ? null : h(a, b, "" + c, d);
        if ("object" === typeof c && null !== c) {
            switch(c.$$typeof){
                case $833559fe574b4225$var$va:
                    return c.key === e ? k(a, b, c, d) : null;
                case $833559fe574b4225$var$wa:
                    return c.key === e ? l(a, b, c, d) : null;
                case $833559fe574b4225$var$Ha:
                    return e = c._init, r(a, b, e(c._payload), d);
            }
            if ($833559fe574b4225$var$eb(c) || $833559fe574b4225$var$Ka(c)) return null !== e ? null : m(a, b, c, d, null);
            $833559fe574b4225$var$th(a, c);
        }
        return null;
    }
    function y(a, b, c, d, e) {
        if ("string" === typeof d && "" !== d || "number" === typeof d) return a = a.get(c) || null, h(b, a, "" + d, e);
        if ("object" === typeof d && null !== d) {
            switch(d.$$typeof){
                case $833559fe574b4225$var$va:
                    return a = a.get(null === d.key ? c : d.key) || null, k(b, a, d, e);
                case $833559fe574b4225$var$wa:
                    return a = a.get(null === d.key ? c : d.key) || null, l(b, a, d, e);
                case $833559fe574b4225$var$Ha:
                    var f = d._init;
                    return y(a, b, c, f(d._payload), e);
            }
            if ($833559fe574b4225$var$eb(d) || $833559fe574b4225$var$Ka(d)) return a = a.get(c) || null, m(b, a, d, e, null);
            $833559fe574b4225$var$th(b, d);
        }
        return null;
    }
    function n(e, g, h, k) {
        for(var l = null, m = null, u = g, w = g = 0, x = null; null !== u && w < h.length; w++){
            u.index > w ? (x = u, u = null) : x = u.sibling;
            var n = r(e, u, h[w], k);
            if (null === n) {
                null === u && (u = x);
                break;
            }
            a && u && null === n.alternate && b(e, u);
            g = f(n, g, w);
            null === m ? l = n : m.sibling = n;
            m = n;
            u = x;
        }
        if (w === h.length) return c(e, u), $833559fe574b4225$var$I && $833559fe574b4225$var$tg(e, w), l;
        if (null === u) {
            for(; w < h.length; w++)u = q(e, h[w], k), null !== u && (g = f(u, g, w), null === m ? l = u : m.sibling = u, m = u);
            $833559fe574b4225$var$I && $833559fe574b4225$var$tg(e, w);
            return l;
        }
        for(u = d(e, u); w < h.length; w++)x = y(u, e, w, h[w], k), null !== x && (a && null !== x.alternate && u.delete(null === x.key ? w : x.key), g = f(x, g, w), null === m ? l = x : m.sibling = x, m = x);
        a && u.forEach(function(a) {
            return b(e, a);
        });
        $833559fe574b4225$var$I && $833559fe574b4225$var$tg(e, w);
        return l;
    }
    function t(e, g, h, k) {
        var l = $833559fe574b4225$var$Ka(h);
        if ("function" !== typeof l) throw Error($833559fe574b4225$var$p(150));
        h = l.call(h);
        if (null == h) throw Error($833559fe574b4225$var$p(151));
        for(var u = l = null, m = g, w = g = 0, x = null, n = h.next(); null !== m && !n.done; w++, n = h.next()){
            m.index > w ? (x = m, m = null) : x = m.sibling;
            var t = r(e, m, n.value, k);
            if (null === t) {
                null === m && (m = x);
                break;
            }
            a && m && null === t.alternate && b(e, m);
            g = f(t, g, w);
            null === u ? l = t : u.sibling = t;
            u = t;
            m = x;
        }
        if (n.done) return c(e, m), $833559fe574b4225$var$I && $833559fe574b4225$var$tg(e, w), l;
        if (null === m) {
            for(; !n.done; w++, n = h.next())n = q(e, n.value, k), null !== n && (g = f(n, g, w), null === u ? l = n : u.sibling = n, u = n);
            $833559fe574b4225$var$I && $833559fe574b4225$var$tg(e, w);
            return l;
        }
        for(m = d(e, m); !n.done; w++, n = h.next())n = y(m, e, w, n.value, k), null !== n && (a && null !== n.alternate && m.delete(null === n.key ? w : n.key), g = f(n, g, w), null === u ? l = n : u.sibling = n, u = n);
        a && m.forEach(function(a) {
            return b(e, a);
        });
        $833559fe574b4225$var$I && $833559fe574b4225$var$tg(e, w);
        return l;
    }
    function J(a, d, f, h) {
        "object" === typeof f && null !== f && f.type === $833559fe574b4225$var$ya && null === f.key && (f = f.props.children);
        if ("object" === typeof f && null !== f) {
            switch(f.$$typeof){
                case $833559fe574b4225$var$va:
                    a: {
                        for(var k = f.key, l = d; null !== l;){
                            if (l.key === k) {
                                k = f.type;
                                if (k === $833559fe574b4225$var$ya) {
                                    if (7 === l.tag) {
                                        c(a, l.sibling);
                                        d = e(l, f.props.children);
                                        d.return = a;
                                        a = d;
                                        break a;
                                    }
                                } else if (l.elementType === k || "object" === typeof k && null !== k && k.$$typeof === $833559fe574b4225$var$Ha && $833559fe574b4225$var$uh(k) === l.type) {
                                    c(a, l.sibling);
                                    d = e(l, f.props);
                                    d.ref = $833559fe574b4225$var$sh(a, l, f);
                                    d.return = a;
                                    a = d;
                                    break a;
                                }
                                c(a, l);
                                break;
                            } else b(a, l);
                            l = l.sibling;
                        }
                        f.type === $833559fe574b4225$var$ya ? (d = $833559fe574b4225$var$Ah(f.props.children, a.mode, h, f.key), d.return = a, a = d) : (h = $833559fe574b4225$var$yh(f.type, f.key, f.props, null, a.mode, h), h.ref = $833559fe574b4225$var$sh(a, d, f), h.return = a, a = h);
                    }
                    return g(a);
                case $833559fe574b4225$var$wa:
                    a: {
                        for(l = f.key; null !== d;){
                            if (d.key === l) {
                                if (4 === d.tag && d.stateNode.containerInfo === f.containerInfo && d.stateNode.implementation === f.implementation) {
                                    c(a, d.sibling);
                                    d = e(d, f.children || []);
                                    d.return = a;
                                    a = d;
                                    break a;
                                } else {
                                    c(a, d);
                                    break;
                                }
                            } else b(a, d);
                            d = d.sibling;
                        }
                        d = $833559fe574b4225$var$zh(f, a.mode, h);
                        d.return = a;
                        a = d;
                    }
                    return g(a);
                case $833559fe574b4225$var$Ha:
                    return l = f._init, J(a, d, l(f._payload), h);
            }
            if ($833559fe574b4225$var$eb(f)) return n(a, d, f, h);
            if ($833559fe574b4225$var$Ka(f)) return t(a, d, f, h);
            $833559fe574b4225$var$th(a, f);
        }
        return "string" === typeof f && "" !== f || "number" === typeof f ? (f = "" + f, null !== d && 6 === d.tag ? (c(a, d.sibling), d = e(d, f), d.return = a, a = d) : (c(a, d), d = $833559fe574b4225$var$xh(f, a.mode, h), d.return = a, a = d), g(a)) : c(a, d);
    }
    return J;
}
var $833559fe574b4225$var$Bh = $833559fe574b4225$var$vh(!0), $833559fe574b4225$var$Ch = $833559fe574b4225$var$vh(!1), $833559fe574b4225$var$Dh = {}, $833559fe574b4225$var$Eh = $833559fe574b4225$var$Uf($833559fe574b4225$var$Dh), $833559fe574b4225$var$Fh = $833559fe574b4225$var$Uf($833559fe574b4225$var$Dh), $833559fe574b4225$var$Gh = $833559fe574b4225$var$Uf($833559fe574b4225$var$Dh);
function $833559fe574b4225$var$Hh(a) {
    if (a === $833559fe574b4225$var$Dh) throw Error($833559fe574b4225$var$p(174));
    return a;
}
function $833559fe574b4225$var$Ih(a, b) {
    $833559fe574b4225$var$G($833559fe574b4225$var$Gh, b);
    $833559fe574b4225$var$G($833559fe574b4225$var$Fh, a);
    $833559fe574b4225$var$G($833559fe574b4225$var$Eh, $833559fe574b4225$var$Dh);
    a = b.nodeType;
    switch(a){
        case 9:
        case 11:
            b = (b = b.documentElement) ? b.namespaceURI : $833559fe574b4225$var$lb(null, "");
            break;
        default:
            a = 8 === a ? b.parentNode : b, b = a.namespaceURI || null, a = a.tagName, b = $833559fe574b4225$var$lb(b, a);
    }
    $833559fe574b4225$var$E($833559fe574b4225$var$Eh);
    $833559fe574b4225$var$G($833559fe574b4225$var$Eh, b);
}
function $833559fe574b4225$var$Jh() {
    $833559fe574b4225$var$E($833559fe574b4225$var$Eh);
    $833559fe574b4225$var$E($833559fe574b4225$var$Fh);
    $833559fe574b4225$var$E($833559fe574b4225$var$Gh);
}
function $833559fe574b4225$var$Kh(a) {
    $833559fe574b4225$var$Hh($833559fe574b4225$var$Gh.current);
    var b = $833559fe574b4225$var$Hh($833559fe574b4225$var$Eh.current);
    var c = $833559fe574b4225$var$lb(b, a.type);
    b !== c && ($833559fe574b4225$var$G($833559fe574b4225$var$Fh, a), $833559fe574b4225$var$G($833559fe574b4225$var$Eh, c));
}
function $833559fe574b4225$var$Lh(a) {
    $833559fe574b4225$var$Fh.current === a && ($833559fe574b4225$var$E($833559fe574b4225$var$Eh), $833559fe574b4225$var$E($833559fe574b4225$var$Fh));
}
var $833559fe574b4225$var$M = $833559fe574b4225$var$Uf(0);
function $833559fe574b4225$var$Mh(a) {
    for(var b = a; null !== b;){
        if (13 === b.tag) {
            var c = b.memoizedState;
            if (null !== c && (c = c.dehydrated, null === c || "$?" === c.data || "$!" === c.data)) return b;
        } else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
            if (0 !== (b.flags & 128)) return b;
        } else if (null !== b.child) {
            b.child.return = b;
            b = b.child;
            continue;
        }
        if (b === a) break;
        for(; null === b.sibling;){
            if (null === b.return || b.return === a) return null;
            b = b.return;
        }
        b.sibling.return = b.return;
        b = b.sibling;
    }
    return null;
}
var $833559fe574b4225$var$Nh = [];
function $833559fe574b4225$var$Oh() {
    for(var a = 0; a < $833559fe574b4225$var$Nh.length; a++)$833559fe574b4225$var$Nh[a]._workInProgressVersionPrimary = null;
    $833559fe574b4225$var$Nh.length = 0;
}
var $833559fe574b4225$var$Ph = $833559fe574b4225$var$ua.ReactCurrentDispatcher, $833559fe574b4225$var$Qh = $833559fe574b4225$var$ua.ReactCurrentBatchConfig, $833559fe574b4225$var$Rh = 0, $833559fe574b4225$var$N = null, $833559fe574b4225$var$O = null, $833559fe574b4225$var$P = null, $833559fe574b4225$var$Sh = !1, $833559fe574b4225$var$Th = !1, $833559fe574b4225$var$Uh = 0, $833559fe574b4225$var$Vh = 0;
function $833559fe574b4225$var$Q() {
    throw Error($833559fe574b4225$var$p(321));
}
function $833559fe574b4225$var$Wh(a, b) {
    if (null === b) return !1;
    for(var c = 0; c < b.length && c < a.length; c++)if (!$833559fe574b4225$var$He(a[c], b[c])) return !1;
    return !0;
}
function $833559fe574b4225$var$Xh(a, b, c, d, e, f) {
    $833559fe574b4225$var$Rh = f;
    $833559fe574b4225$var$N = b;
    b.memoizedState = null;
    b.updateQueue = null;
    b.lanes = 0;
    $833559fe574b4225$var$Ph.current = null === a || null === a.memoizedState ? $833559fe574b4225$var$Yh : $833559fe574b4225$var$Zh;
    a = c(d, e);
    if ($833559fe574b4225$var$Th) {
        f = 0;
        do {
            $833559fe574b4225$var$Th = !1;
            $833559fe574b4225$var$Uh = 0;
            if (25 <= f) throw Error($833559fe574b4225$var$p(301));
            f += 1;
            $833559fe574b4225$var$P = $833559fe574b4225$var$O = null;
            b.updateQueue = null;
            $833559fe574b4225$var$Ph.current = $833559fe574b4225$var$$h;
            a = c(d, e);
        }while ($833559fe574b4225$var$Th);
    }
    $833559fe574b4225$var$Ph.current = $833559fe574b4225$var$ai;
    b = null !== $833559fe574b4225$var$O && null !== $833559fe574b4225$var$O.next;
    $833559fe574b4225$var$Rh = 0;
    $833559fe574b4225$var$P = $833559fe574b4225$var$O = $833559fe574b4225$var$N = null;
    $833559fe574b4225$var$Sh = !1;
    if (b) throw Error($833559fe574b4225$var$p(300));
    return a;
}
function $833559fe574b4225$var$bi() {
    var a = 0 !== $833559fe574b4225$var$Uh;
    $833559fe574b4225$var$Uh = 0;
    return a;
}
function $833559fe574b4225$var$ci() {
    var a = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    null === $833559fe574b4225$var$P ? $833559fe574b4225$var$N.memoizedState = $833559fe574b4225$var$P = a : $833559fe574b4225$var$P = $833559fe574b4225$var$P.next = a;
    return $833559fe574b4225$var$P;
}
function $833559fe574b4225$var$di() {
    if (null === $833559fe574b4225$var$O) {
        var a = $833559fe574b4225$var$N.alternate;
        a = null !== a ? a.memoizedState : null;
    } else a = $833559fe574b4225$var$O.next;
    var b = null === $833559fe574b4225$var$P ? $833559fe574b4225$var$N.memoizedState : $833559fe574b4225$var$P.next;
    if (null !== b) $833559fe574b4225$var$P = b, $833559fe574b4225$var$O = a;
    else {
        if (null === a) throw Error($833559fe574b4225$var$p(310));
        $833559fe574b4225$var$O = a;
        a = {
            memoizedState: $833559fe574b4225$var$O.memoizedState,
            baseState: $833559fe574b4225$var$O.baseState,
            baseQueue: $833559fe574b4225$var$O.baseQueue,
            queue: $833559fe574b4225$var$O.queue,
            next: null
        };
        null === $833559fe574b4225$var$P ? $833559fe574b4225$var$N.memoizedState = $833559fe574b4225$var$P = a : $833559fe574b4225$var$P = $833559fe574b4225$var$P.next = a;
    }
    return $833559fe574b4225$var$P;
}
function $833559fe574b4225$var$ei(a, b) {
    return "function" === typeof b ? b(a) : b;
}
function $833559fe574b4225$var$fi(a) {
    var b = $833559fe574b4225$var$di(), c = b.queue;
    if (null === c) throw Error($833559fe574b4225$var$p(311));
    c.lastRenderedReducer = a;
    var d = $833559fe574b4225$var$O, e = d.baseQueue, f = c.pending;
    if (null !== f) {
        if (null !== e) {
            var g = e.next;
            e.next = f.next;
            f.next = g;
        }
        d.baseQueue = e = f;
        c.pending = null;
    }
    if (null !== e) {
        f = e.next;
        d = d.baseState;
        var h = g = null, k = null, l = f;
        do {
            var m = l.lane;
            if (($833559fe574b4225$var$Rh & m) === m) null !== k && (k = k.next = {
                lane: 0,
                action: l.action,
                hasEagerState: l.hasEagerState,
                eagerState: l.eagerState,
                next: null
            }), d = l.hasEagerState ? l.eagerState : a(d, l.action);
            else {
                var q = {
                    lane: m,
                    action: l.action,
                    hasEagerState: l.hasEagerState,
                    eagerState: l.eagerState,
                    next: null
                };
                null === k ? (h = k = q, g = d) : k = k.next = q;
                $833559fe574b4225$var$N.lanes |= m;
                $833559fe574b4225$var$hh |= m;
            }
            l = l.next;
        }while (null !== l && l !== f);
        null === k ? g = d : k.next = h;
        $833559fe574b4225$var$He(d, b.memoizedState) || ($833559fe574b4225$var$Ug = !0);
        b.memoizedState = d;
        b.baseState = g;
        b.baseQueue = k;
        c.lastRenderedState = d;
    }
    a = c.interleaved;
    if (null !== a) {
        e = a;
        do f = e.lane, $833559fe574b4225$var$N.lanes |= f, $833559fe574b4225$var$hh |= f, e = e.next;
        while (e !== a);
    } else null === e && (c.lanes = 0);
    return [
        b.memoizedState,
        c.dispatch
    ];
}
function $833559fe574b4225$var$gi(a) {
    var b = $833559fe574b4225$var$di(), c = b.queue;
    if (null === c) throw Error($833559fe574b4225$var$p(311));
    c.lastRenderedReducer = a;
    var d = c.dispatch, e = c.pending, f = b.memoizedState;
    if (null !== e) {
        c.pending = null;
        var g = e = e.next;
        do f = a(f, g.action), g = g.next;
        while (g !== e);
        $833559fe574b4225$var$He(f, b.memoizedState) || ($833559fe574b4225$var$Ug = !0);
        b.memoizedState = f;
        null === b.baseQueue && (b.baseState = f);
        c.lastRenderedState = f;
    }
    return [
        f,
        d
    ];
}
function $833559fe574b4225$var$hi() {}
function $833559fe574b4225$var$ii(a, b) {
    var c = $833559fe574b4225$var$N, d = $833559fe574b4225$var$di(), e = b(), f = !$833559fe574b4225$var$He(d.memoizedState, e);
    f && (d.memoizedState = e, $833559fe574b4225$var$Ug = !0);
    d = d.queue;
    $833559fe574b4225$var$ji($833559fe574b4225$var$ki.bind(null, c, d, a), [
        a
    ]);
    if (d.getSnapshot !== b || f || null !== $833559fe574b4225$var$P && $833559fe574b4225$var$P.memoizedState.tag & 1) {
        c.flags |= 2048;
        $833559fe574b4225$var$li(9, $833559fe574b4225$var$mi.bind(null, c, d, e, b), void 0, null);
        if (null === $833559fe574b4225$var$R) throw Error($833559fe574b4225$var$p(349));
        0 !== ($833559fe574b4225$var$Rh & 30) || $833559fe574b4225$var$ni(c, b, e);
    }
    return e;
}
function $833559fe574b4225$var$ni(a, b, c) {
    a.flags |= 16384;
    a = {
        getSnapshot: b,
        value: c
    };
    b = $833559fe574b4225$var$N.updateQueue;
    null === b ? (b = {
        lastEffect: null,
        stores: null
    }, $833559fe574b4225$var$N.updateQueue = b, b.stores = [
        a
    ]) : (c = b.stores, null === c ? b.stores = [
        a
    ] : c.push(a));
}
function $833559fe574b4225$var$mi(a, b, c, d) {
    b.value = c;
    b.getSnapshot = d;
    $833559fe574b4225$var$oi(b) && $833559fe574b4225$var$pi(a);
}
function $833559fe574b4225$var$ki(a, b, c) {
    return c(function() {
        $833559fe574b4225$var$oi(b) && $833559fe574b4225$var$pi(a);
    });
}
function $833559fe574b4225$var$oi(a) {
    var b = a.getSnapshot;
    a = a.value;
    try {
        var c = b();
        return !$833559fe574b4225$var$He(a, c);
    } catch (d) {
        return !0;
    }
}
function $833559fe574b4225$var$pi(a) {
    var b = $833559fe574b4225$var$Zg(a, 1);
    null !== b && $833559fe574b4225$var$mh(b, a, 1, -1);
}
function $833559fe574b4225$var$qi(a) {
    var b = $833559fe574b4225$var$ci();
    "function" === typeof a && (a = a());
    b.memoizedState = b.baseState = a;
    a = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: $833559fe574b4225$var$ei,
        lastRenderedState: a
    };
    b.queue = a;
    a = a.dispatch = $833559fe574b4225$var$ri.bind(null, $833559fe574b4225$var$N, a);
    return [
        b.memoizedState,
        a
    ];
}
function $833559fe574b4225$var$li(a, b, c, d) {
    a = {
        tag: a,
        create: b,
        destroy: c,
        deps: d,
        next: null
    };
    b = $833559fe574b4225$var$N.updateQueue;
    null === b ? (b = {
        lastEffect: null,
        stores: null
    }, $833559fe574b4225$var$N.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, null === c ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
    return a;
}
function $833559fe574b4225$var$si() {
    return $833559fe574b4225$var$di().memoizedState;
}
function $833559fe574b4225$var$ti(a, b, c, d) {
    var e = $833559fe574b4225$var$ci();
    $833559fe574b4225$var$N.flags |= a;
    e.memoizedState = $833559fe574b4225$var$li(1 | b, c, void 0, void 0 === d ? null : d);
}
function $833559fe574b4225$var$ui(a, b, c, d) {
    var e = $833559fe574b4225$var$di();
    d = void 0 === d ? null : d;
    var f = void 0;
    if (null !== $833559fe574b4225$var$O) {
        var g = $833559fe574b4225$var$O.memoizedState;
        f = g.destroy;
        if (null !== d && $833559fe574b4225$var$Wh(d, g.deps)) {
            e.memoizedState = $833559fe574b4225$var$li(b, c, f, d);
            return;
        }
    }
    $833559fe574b4225$var$N.flags |= a;
    e.memoizedState = $833559fe574b4225$var$li(1 | b, c, f, d);
}
function $833559fe574b4225$var$vi(a, b) {
    return $833559fe574b4225$var$ti(8390656, 8, a, b);
}
function $833559fe574b4225$var$ji(a, b) {
    return $833559fe574b4225$var$ui(2048, 8, a, b);
}
function $833559fe574b4225$var$wi(a, b) {
    return $833559fe574b4225$var$ui(4, 2, a, b);
}
function $833559fe574b4225$var$xi(a, b) {
    return $833559fe574b4225$var$ui(4, 4, a, b);
}
function $833559fe574b4225$var$yi(a, b) {
    if ("function" === typeof b) return a = a(), b(a), function() {
        b(null);
    };
    if (null !== b && void 0 !== b) return a = a(), b.current = a, function() {
        b.current = null;
    };
}
function $833559fe574b4225$var$zi(a, b, c) {
    c = null !== c && void 0 !== c ? c.concat([
        a
    ]) : null;
    return $833559fe574b4225$var$ui(4, 4, $833559fe574b4225$var$yi.bind(null, b, a), c);
}
function $833559fe574b4225$var$Ai() {}
function $833559fe574b4225$var$Bi(a, b) {
    var c = $833559fe574b4225$var$di();
    b = void 0 === b ? null : b;
    var d = c.memoizedState;
    if (null !== d && null !== b && $833559fe574b4225$var$Wh(b, d[1])) return d[0];
    c.memoizedState = [
        a,
        b
    ];
    return a;
}
function $833559fe574b4225$var$Ci(a, b) {
    var c = $833559fe574b4225$var$di();
    b = void 0 === b ? null : b;
    var d = c.memoizedState;
    if (null !== d && null !== b && $833559fe574b4225$var$Wh(b, d[1])) return d[0];
    a = a();
    c.memoizedState = [
        a,
        b
    ];
    return a;
}
function $833559fe574b4225$var$Di(a, b, c) {
    if (0 === ($833559fe574b4225$var$Rh & 21)) return a.baseState && (a.baseState = !1, $833559fe574b4225$var$Ug = !0), a.memoizedState = c;
    $833559fe574b4225$var$He(c, b) || (c = $833559fe574b4225$var$yc(), $833559fe574b4225$var$N.lanes |= c, $833559fe574b4225$var$hh |= c, a.baseState = !0);
    return b;
}
function $833559fe574b4225$var$Ei(a, b) {
    var c = $833559fe574b4225$var$C;
    $833559fe574b4225$var$C = 0 !== c && 4 > c ? c : 4;
    a(!0);
    var d = $833559fe574b4225$var$Qh.transition;
    $833559fe574b4225$var$Qh.transition = {};
    try {
        a(!1), b();
    } finally{
        $833559fe574b4225$var$C = c, $833559fe574b4225$var$Qh.transition = d;
    }
}
function $833559fe574b4225$var$Fi() {
    return $833559fe574b4225$var$di().memoizedState;
}
function $833559fe574b4225$var$Gi(a, b, c) {
    var d = $833559fe574b4225$var$lh(a);
    c = {
        lane: d,
        action: c,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if ($833559fe574b4225$var$Hi(a)) $833559fe574b4225$var$Ii(b, c);
    else if (c = $833559fe574b4225$var$Yg(a, b, c, d), null !== c) {
        var e = $833559fe574b4225$var$L();
        $833559fe574b4225$var$mh(c, a, d, e);
        $833559fe574b4225$var$Ji(c, b, d);
    }
}
function $833559fe574b4225$var$ri(a, b, c) {
    var d = $833559fe574b4225$var$lh(a), e = {
        lane: d,
        action: c,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if ($833559fe574b4225$var$Hi(a)) $833559fe574b4225$var$Ii(b, e);
    else {
        var f = a.alternate;
        if (0 === a.lanes && (null === f || 0 === f.lanes) && (f = b.lastRenderedReducer, null !== f)) try {
            var g = b.lastRenderedState, h = f(g, c);
            e.hasEagerState = !0;
            e.eagerState = h;
            if ($833559fe574b4225$var$He(h, g)) {
                var k = b.interleaved;
                null === k ? (e.next = e, $833559fe574b4225$var$Xg(b)) : (e.next = k.next, k.next = e);
                b.interleaved = e;
                return;
            }
        } catch (l) {} finally{}
        c = $833559fe574b4225$var$Yg(a, b, e, d);
        null !== c && (e = $833559fe574b4225$var$L(), $833559fe574b4225$var$mh(c, a, d, e), $833559fe574b4225$var$Ji(c, b, d));
    }
}
function $833559fe574b4225$var$Hi(a) {
    var b = a.alternate;
    return a === $833559fe574b4225$var$N || null !== b && b === $833559fe574b4225$var$N;
}
function $833559fe574b4225$var$Ii(a, b) {
    $833559fe574b4225$var$Th = $833559fe574b4225$var$Sh = !0;
    var c = a.pending;
    null === c ? b.next = b : (b.next = c.next, c.next = b);
    a.pending = b;
}
function $833559fe574b4225$var$Ji(a, b, c) {
    if (0 !== (c & 4194240)) {
        var d = b.lanes;
        d &= a.pendingLanes;
        c |= d;
        b.lanes = c;
        $833559fe574b4225$var$Cc(a, c);
    }
}
var $833559fe574b4225$var$ai = {
    readContext: $833559fe574b4225$var$Vg,
    useCallback: $833559fe574b4225$var$Q,
    useContext: $833559fe574b4225$var$Q,
    useEffect: $833559fe574b4225$var$Q,
    useImperativeHandle: $833559fe574b4225$var$Q,
    useInsertionEffect: $833559fe574b4225$var$Q,
    useLayoutEffect: $833559fe574b4225$var$Q,
    useMemo: $833559fe574b4225$var$Q,
    useReducer: $833559fe574b4225$var$Q,
    useRef: $833559fe574b4225$var$Q,
    useState: $833559fe574b4225$var$Q,
    useDebugValue: $833559fe574b4225$var$Q,
    useDeferredValue: $833559fe574b4225$var$Q,
    useTransition: $833559fe574b4225$var$Q,
    useMutableSource: $833559fe574b4225$var$Q,
    useSyncExternalStore: $833559fe574b4225$var$Q,
    useId: $833559fe574b4225$var$Q,
    unstable_isNewReconciler: !1
}, $833559fe574b4225$var$Yh = {
    readContext: $833559fe574b4225$var$Vg,
    useCallback: function(a, b) {
        $833559fe574b4225$var$ci().memoizedState = [
            a,
            void 0 === b ? null : b
        ];
        return a;
    },
    useContext: $833559fe574b4225$var$Vg,
    useEffect: $833559fe574b4225$var$vi,
    useImperativeHandle: function(a, b, c) {
        c = null !== c && void 0 !== c ? c.concat([
            a
        ]) : null;
        return $833559fe574b4225$var$ti(4194308, 4, $833559fe574b4225$var$yi.bind(null, b, a), c);
    },
    useLayoutEffect: function(a, b) {
        return $833559fe574b4225$var$ti(4194308, 4, a, b);
    },
    useInsertionEffect: function(a, b) {
        return $833559fe574b4225$var$ti(4, 2, a, b);
    },
    useMemo: function(a, b) {
        var c = $833559fe574b4225$var$ci();
        b = void 0 === b ? null : b;
        a = a();
        c.memoizedState = [
            a,
            b
        ];
        return a;
    },
    useReducer: function(a, b, c) {
        var d = $833559fe574b4225$var$ci();
        b = void 0 !== c ? c(b) : b;
        d.memoizedState = d.baseState = b;
        a = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: a,
            lastRenderedState: b
        };
        d.queue = a;
        a = a.dispatch = $833559fe574b4225$var$Gi.bind(null, $833559fe574b4225$var$N, a);
        return [
            d.memoizedState,
            a
        ];
    },
    useRef: function(a) {
        var b = $833559fe574b4225$var$ci();
        a = {
            current: a
        };
        return b.memoizedState = a;
    },
    useState: $833559fe574b4225$var$qi,
    useDebugValue: $833559fe574b4225$var$Ai,
    useDeferredValue: function(a) {
        return $833559fe574b4225$var$ci().memoizedState = a;
    },
    useTransition: function() {
        var a = $833559fe574b4225$var$qi(!1), b = a[0];
        a = $833559fe574b4225$var$Ei.bind(null, a[1]);
        $833559fe574b4225$var$ci().memoizedState = a;
        return [
            b,
            a
        ];
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(a, b, c) {
        var d = $833559fe574b4225$var$N, e = $833559fe574b4225$var$ci();
        if ($833559fe574b4225$var$I) {
            if (void 0 === c) throw Error($833559fe574b4225$var$p(407));
            c = c();
        } else {
            c = b();
            if (null === $833559fe574b4225$var$R) throw Error($833559fe574b4225$var$p(349));
            0 !== ($833559fe574b4225$var$Rh & 30) || $833559fe574b4225$var$ni(d, b, c);
        }
        e.memoizedState = c;
        var f = {
            value: c,
            getSnapshot: b
        };
        e.queue = f;
        $833559fe574b4225$var$vi($833559fe574b4225$var$ki.bind(null, d, f, a), [
            a
        ]);
        d.flags |= 2048;
        $833559fe574b4225$var$li(9, $833559fe574b4225$var$mi.bind(null, d, f, c, b), void 0, null);
        return c;
    },
    useId: function() {
        var a = $833559fe574b4225$var$ci(), b = $833559fe574b4225$var$R.identifierPrefix;
        if ($833559fe574b4225$var$I) {
            var c = $833559fe574b4225$var$sg;
            var d = $833559fe574b4225$var$rg;
            c = (d & ~(1 << 32 - $833559fe574b4225$var$oc(d) - 1)).toString(32) + c;
            b = ":" + b + "R" + c;
            c = $833559fe574b4225$var$Uh++;
            0 < c && (b += "H" + c.toString(32));
            b += ":";
        } else c = $833559fe574b4225$var$Vh++, b = ":" + b + "r" + c.toString(32) + ":";
        return a.memoizedState = b;
    },
    unstable_isNewReconciler: !1
}, $833559fe574b4225$var$Zh = {
    readContext: $833559fe574b4225$var$Vg,
    useCallback: $833559fe574b4225$var$Bi,
    useContext: $833559fe574b4225$var$Vg,
    useEffect: $833559fe574b4225$var$ji,
    useImperativeHandle: $833559fe574b4225$var$zi,
    useInsertionEffect: $833559fe574b4225$var$wi,
    useLayoutEffect: $833559fe574b4225$var$xi,
    useMemo: $833559fe574b4225$var$Ci,
    useReducer: $833559fe574b4225$var$fi,
    useRef: $833559fe574b4225$var$si,
    useState: function() {
        return $833559fe574b4225$var$fi($833559fe574b4225$var$ei);
    },
    useDebugValue: $833559fe574b4225$var$Ai,
    useDeferredValue: function(a) {
        var b = $833559fe574b4225$var$di();
        return $833559fe574b4225$var$Di(b, $833559fe574b4225$var$O.memoizedState, a);
    },
    useTransition: function() {
        var a = $833559fe574b4225$var$fi($833559fe574b4225$var$ei)[0], b = $833559fe574b4225$var$di().memoizedState;
        return [
            a,
            b
        ];
    },
    useMutableSource: $833559fe574b4225$var$hi,
    useSyncExternalStore: $833559fe574b4225$var$ii,
    useId: $833559fe574b4225$var$Fi,
    unstable_isNewReconciler: !1
}, $833559fe574b4225$var$$h = {
    readContext: $833559fe574b4225$var$Vg,
    useCallback: $833559fe574b4225$var$Bi,
    useContext: $833559fe574b4225$var$Vg,
    useEffect: $833559fe574b4225$var$ji,
    useImperativeHandle: $833559fe574b4225$var$zi,
    useInsertionEffect: $833559fe574b4225$var$wi,
    useLayoutEffect: $833559fe574b4225$var$xi,
    useMemo: $833559fe574b4225$var$Ci,
    useReducer: $833559fe574b4225$var$gi,
    useRef: $833559fe574b4225$var$si,
    useState: function() {
        return $833559fe574b4225$var$gi($833559fe574b4225$var$ei);
    },
    useDebugValue: $833559fe574b4225$var$Ai,
    useDeferredValue: function(a) {
        var b = $833559fe574b4225$var$di();
        return null === $833559fe574b4225$var$O ? b.memoizedState = a : $833559fe574b4225$var$Di(b, $833559fe574b4225$var$O.memoizedState, a);
    },
    useTransition: function() {
        var a = $833559fe574b4225$var$gi($833559fe574b4225$var$ei)[0], b = $833559fe574b4225$var$di().memoizedState;
        return [
            a,
            b
        ];
    },
    useMutableSource: $833559fe574b4225$var$hi,
    useSyncExternalStore: $833559fe574b4225$var$ii,
    useId: $833559fe574b4225$var$Fi,
    unstable_isNewReconciler: !1
};
function $833559fe574b4225$var$Ki(a, b) {
    try {
        var c = "", d = b;
        do c += $833559fe574b4225$var$Pa(d), d = d.return;
        while (d);
        var e = c;
    } catch (f) {
        e = "\nError generating stack: " + f.message + "\n" + f.stack;
    }
    return {
        value: a,
        source: b,
        stack: e,
        digest: null
    };
}
function $833559fe574b4225$var$Li(a, b, c) {
    return {
        value: a,
        source: null,
        stack: null != c ? c : null,
        digest: null != b ? b : null
    };
}
function $833559fe574b4225$var$Mi(a, b) {
    try {
        console.error(b.value);
    } catch (c) {
        setTimeout(function() {
            throw c;
        });
    }
}
var $833559fe574b4225$var$Ni = "function" === typeof WeakMap ? WeakMap : Map;
function $833559fe574b4225$var$Oi(a, b, c) {
    c = $833559fe574b4225$var$ch(-1, c);
    c.tag = 3;
    c.payload = {
        element: null
    };
    var d = b.value;
    c.callback = function() {
        $833559fe574b4225$var$Pi || ($833559fe574b4225$var$Pi = !0, $833559fe574b4225$var$Qi = d);
        $833559fe574b4225$var$Mi(a, b);
    };
    return c;
}
function $833559fe574b4225$var$Ri(a, b, c) {
    c = $833559fe574b4225$var$ch(-1, c);
    c.tag = 3;
    var d = a.type.getDerivedStateFromError;
    if ("function" === typeof d) {
        var e = b.value;
        c.payload = function() {
            return d(e);
        };
        c.callback = function() {
            $833559fe574b4225$var$Mi(a, b);
        };
    }
    var f = a.stateNode;
    null !== f && "function" === typeof f.componentDidCatch && (c.callback = function() {
        $833559fe574b4225$var$Mi(a, b);
        "function" !== typeof d && (null === $833559fe574b4225$var$Si ? $833559fe574b4225$var$Si = new Set([
            this
        ]) : $833559fe574b4225$var$Si.add(this));
        var c = b.stack;
        this.componentDidCatch(b.value, {
            componentStack: null !== c ? c : ""
        });
    });
    return c;
}
function $833559fe574b4225$var$Ti(a, b, c) {
    var d = a.pingCache;
    if (null === d) {
        d = a.pingCache = new $833559fe574b4225$var$Ni;
        var e = new Set;
        d.set(b, e);
    } else e = d.get(b), void 0 === e && (e = new Set, d.set(b, e));
    e.has(c) || (e.add(c), a = $833559fe574b4225$var$Ui.bind(null, a, b, c), b.then(a, a));
}
function $833559fe574b4225$var$Vi(a) {
    do {
        var b;
        if (b = 13 === a.tag) b = a.memoizedState, b = null !== b ? null !== b.dehydrated ? !0 : !1 : !0;
        if (b) return a;
        a = a.return;
    }while (null !== a);
    return null;
}
function $833559fe574b4225$var$Wi(a, b, c, d, e) {
    if (0 === (a.mode & 1)) return a === b ? a.flags |= 65536 : (a.flags |= 128, c.flags |= 131072, c.flags &= -52805, 1 === c.tag && (null === c.alternate ? c.tag = 17 : (b = $833559fe574b4225$var$ch(-1, 1), b.tag = 2, $833559fe574b4225$var$dh(c, b, 1))), c.lanes |= 1), a;
    a.flags |= 65536;
    a.lanes = e;
    return a;
}
var $833559fe574b4225$var$Xi = $833559fe574b4225$var$ua.ReactCurrentOwner, $833559fe574b4225$var$Ug = !1;
function $833559fe574b4225$var$Yi(a, b, c, d) {
    b.child = null === a ? $833559fe574b4225$var$Ch(b, null, c, d) : $833559fe574b4225$var$Bh(b, a.child, c, d);
}
function $833559fe574b4225$var$Zi(a, b, c, d, e) {
    c = c.render;
    var f = b.ref;
    $833559fe574b4225$var$Tg(b, e);
    d = $833559fe574b4225$var$Xh(a, b, c, d, f, e);
    c = $833559fe574b4225$var$bi();
    if (null !== a && !$833559fe574b4225$var$Ug) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, $833559fe574b4225$var$$i(a, b, e);
    $833559fe574b4225$var$I && c && $833559fe574b4225$var$vg(b);
    b.flags |= 1;
    $833559fe574b4225$var$Yi(a, b, d, e);
    return b.child;
}
function $833559fe574b4225$var$aj(a, b, c, d, e) {
    if (null === a) {
        var f = c.type;
        if ("function" === typeof f && !$833559fe574b4225$var$bj(f) && void 0 === f.defaultProps && null === c.compare && void 0 === c.defaultProps) return b.tag = 15, b.type = f, $833559fe574b4225$var$cj(a, b, f, d, e);
        a = $833559fe574b4225$var$yh(c.type, null, d, b, b.mode, e);
        a.ref = b.ref;
        a.return = b;
        return b.child = a;
    }
    f = a.child;
    if (0 === (a.lanes & e)) {
        var g = f.memoizedProps;
        c = c.compare;
        c = null !== c ? c : $833559fe574b4225$var$Ie;
        if (c(g, d) && a.ref === b.ref) return $833559fe574b4225$var$$i(a, b, e);
    }
    b.flags |= 1;
    a = $833559fe574b4225$var$wh(f, d);
    a.ref = b.ref;
    a.return = b;
    return b.child = a;
}
function $833559fe574b4225$var$cj(a, b, c, d, e) {
    if (null !== a) {
        var f = a.memoizedProps;
        if ($833559fe574b4225$var$Ie(f, d) && a.ref === b.ref) {
            if ($833559fe574b4225$var$Ug = !1, b.pendingProps = d = f, 0 !== (a.lanes & e)) 0 !== (a.flags & 131072) && ($833559fe574b4225$var$Ug = !0);
            else return b.lanes = a.lanes, $833559fe574b4225$var$$i(a, b, e);
        }
    }
    return $833559fe574b4225$var$dj(a, b, c, d, e);
}
function $833559fe574b4225$var$ej(a, b, c) {
    var d = b.pendingProps, e = d.children, f = null !== a ? a.memoizedState : null;
    if ("hidden" === d.mode) {
        if (0 === (b.mode & 1)) b.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, $833559fe574b4225$var$G($833559fe574b4225$var$fj, $833559fe574b4225$var$gj), $833559fe574b4225$var$gj |= c;
        else {
            if (0 === (c & 1073741824)) return a = null !== f ? f.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, b.memoizedState = {
                baseLanes: a,
                cachePool: null,
                transitions: null
            }, b.updateQueue = null, $833559fe574b4225$var$G($833559fe574b4225$var$fj, $833559fe574b4225$var$gj), $833559fe574b4225$var$gj |= a, null;
            b.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            };
            d = null !== f ? f.baseLanes : c;
            $833559fe574b4225$var$G($833559fe574b4225$var$fj, $833559fe574b4225$var$gj);
            $833559fe574b4225$var$gj |= d;
        }
    } else null !== f ? (d = f.baseLanes | c, b.memoizedState = null) : d = c, $833559fe574b4225$var$G($833559fe574b4225$var$fj, $833559fe574b4225$var$gj), $833559fe574b4225$var$gj |= d;
    $833559fe574b4225$var$Yi(a, b, e, c);
    return b.child;
}
function $833559fe574b4225$var$hj(a, b) {
    var c = b.ref;
    if (null === a && null !== c || null !== a && a.ref !== c) b.flags |= 512, b.flags |= 2097152;
}
function $833559fe574b4225$var$dj(a, b, c, d, e) {
    var f = $833559fe574b4225$var$Zf(c) ? $833559fe574b4225$var$Xf : $833559fe574b4225$var$H.current;
    f = $833559fe574b4225$var$Yf(b, f);
    $833559fe574b4225$var$Tg(b, e);
    c = $833559fe574b4225$var$Xh(a, b, c, d, f, e);
    d = $833559fe574b4225$var$bi();
    if (null !== a && !$833559fe574b4225$var$Ug) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, $833559fe574b4225$var$$i(a, b, e);
    $833559fe574b4225$var$I && d && $833559fe574b4225$var$vg(b);
    b.flags |= 1;
    $833559fe574b4225$var$Yi(a, b, c, e);
    return b.child;
}
function $833559fe574b4225$var$ij(a, b, c, d, e) {
    if ($833559fe574b4225$var$Zf(c)) {
        var f = !0;
        $833559fe574b4225$var$cg(b);
    } else f = !1;
    $833559fe574b4225$var$Tg(b, e);
    if (null === b.stateNode) $833559fe574b4225$var$jj(a, b), $833559fe574b4225$var$ph(b, c, d), $833559fe574b4225$var$rh(b, c, d, e), d = !0;
    else if (null === a) {
        var g = b.stateNode, h = b.memoizedProps;
        g.props = h;
        var k = g.context, l = c.contextType;
        "object" === typeof l && null !== l ? l = $833559fe574b4225$var$Vg(l) : (l = $833559fe574b4225$var$Zf(c) ? $833559fe574b4225$var$Xf : $833559fe574b4225$var$H.current, l = $833559fe574b4225$var$Yf(b, l));
        var m = c.getDerivedStateFromProps, q = "function" === typeof m || "function" === typeof g.getSnapshotBeforeUpdate;
        q || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k !== l) && $833559fe574b4225$var$qh(b, g, d, l);
        $833559fe574b4225$var$$g = !1;
        var r = b.memoizedState;
        g.state = r;
        $833559fe574b4225$var$gh(b, d, g, e);
        k = b.memoizedState;
        h !== d || r !== k || $833559fe574b4225$var$Wf.current || $833559fe574b4225$var$$g ? ("function" === typeof m && ($833559fe574b4225$var$kh(b, c, m, d), k = b.memoizedState), (h = $833559fe574b4225$var$$g || $833559fe574b4225$var$oh(b, c, h, d, r, k, l)) ? (q || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b.flags |= 4194308)) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), b.memoizedProps = d, b.memoizedState = k), g.props = d, g.state = k, g.context = l, d = h) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), d = !1);
    } else {
        g = b.stateNode;
        $833559fe574b4225$var$bh(a, b);
        h = b.memoizedProps;
        l = b.type === b.elementType ? h : $833559fe574b4225$var$Lg(b.type, h);
        g.props = l;
        q = b.pendingProps;
        r = g.context;
        k = c.contextType;
        "object" === typeof k && null !== k ? k = $833559fe574b4225$var$Vg(k) : (k = $833559fe574b4225$var$Zf(c) ? $833559fe574b4225$var$Xf : $833559fe574b4225$var$H.current, k = $833559fe574b4225$var$Yf(b, k));
        var y = c.getDerivedStateFromProps;
        (m = "function" === typeof y || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== q || r !== k) && $833559fe574b4225$var$qh(b, g, d, k);
        $833559fe574b4225$var$$g = !1;
        r = b.memoizedState;
        g.state = r;
        $833559fe574b4225$var$gh(b, d, g, e);
        var n = b.memoizedState;
        h !== q || r !== n || $833559fe574b4225$var$Wf.current || $833559fe574b4225$var$$g ? ("function" === typeof y && ($833559fe574b4225$var$kh(b, c, y, d), n = b.memoizedState), (l = $833559fe574b4225$var$$g || $833559fe574b4225$var$oh(b, c, l, d, r, n, k) || !1) ? (m || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, n, k), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, n, k)), "function" === typeof g.componentDidUpdate && (b.flags |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b.flags |= 1024)) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 1024), b.memoizedProps = d, b.memoizedState = n), g.props = d, g.state = n, g.context = k, d = l) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 1024), d = !1);
    }
    return $833559fe574b4225$var$kj(a, b, c, d, f, e);
}
function $833559fe574b4225$var$kj(a, b, c, d, e, f) {
    $833559fe574b4225$var$hj(a, b);
    var g = 0 !== (b.flags & 128);
    if (!d && !g) return e && $833559fe574b4225$var$dg(b, c, !1), $833559fe574b4225$var$$i(a, b, f);
    d = b.stateNode;
    $833559fe574b4225$var$Xi.current = b;
    var h = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
    b.flags |= 1;
    null !== a && g ? (b.child = $833559fe574b4225$var$Bh(b, a.child, null, f), b.child = $833559fe574b4225$var$Bh(b, null, h, f)) : $833559fe574b4225$var$Yi(a, b, h, f);
    b.memoizedState = d.state;
    e && $833559fe574b4225$var$dg(b, c, !0);
    return b.child;
}
function $833559fe574b4225$var$lj(a) {
    var b = a.stateNode;
    b.pendingContext ? $833559fe574b4225$var$ag(a, b.pendingContext, b.pendingContext !== b.context) : b.context && $833559fe574b4225$var$ag(a, b.context, !1);
    $833559fe574b4225$var$Ih(a, b.containerInfo);
}
function $833559fe574b4225$var$mj(a, b, c, d, e) {
    $833559fe574b4225$var$Ig();
    $833559fe574b4225$var$Jg(e);
    b.flags |= 256;
    $833559fe574b4225$var$Yi(a, b, c, d);
    return b.child;
}
var $833559fe574b4225$var$nj = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function $833559fe574b4225$var$oj(a) {
    return {
        baseLanes: a,
        cachePool: null,
        transitions: null
    };
}
function $833559fe574b4225$var$pj(a, b, c) {
    var d = b.pendingProps, e = $833559fe574b4225$var$M.current, f = !1, g = 0 !== (b.flags & 128), h;
    (h = g) || (h = null !== a && null === a.memoizedState ? !1 : 0 !== (e & 2));
    if (h) f = !0, b.flags &= -129;
    else if (null === a || null !== a.memoizedState) e |= 1;
    $833559fe574b4225$var$G($833559fe574b4225$var$M, e & 1);
    if (null === a) {
        $833559fe574b4225$var$Eg(b);
        a = b.memoizedState;
        if (null !== a && (a = a.dehydrated, null !== a)) return 0 === (b.mode & 1) ? b.lanes = 1 : "$!" === a.data ? b.lanes = 8 : b.lanes = 1073741824, null;
        g = d.children;
        a = d.fallback;
        return f ? (d = b.mode, f = b.child, g = {
            mode: "hidden",
            children: g
        }, 0 === (d & 1) && null !== f ? (f.childLanes = 0, f.pendingProps = g) : f = $833559fe574b4225$var$qj(g, d, 0, null), a = $833559fe574b4225$var$Ah(a, d, c, null), f.return = b, a.return = b, f.sibling = a, b.child = f, b.child.memoizedState = $833559fe574b4225$var$oj(c), b.memoizedState = $833559fe574b4225$var$nj, a) : $833559fe574b4225$var$rj(b, g);
    }
    e = a.memoizedState;
    if (null !== e && (h = e.dehydrated, null !== h)) return $833559fe574b4225$var$sj(a, b, g, d, h, e, c);
    if (f) {
        f = d.fallback;
        g = b.mode;
        e = a.child;
        h = e.sibling;
        var k = {
            mode: "hidden",
            children: d.children
        };
        0 === (g & 1) && b.child !== e ? (d = b.child, d.childLanes = 0, d.pendingProps = k, b.deletions = null) : (d = $833559fe574b4225$var$wh(e, k), d.subtreeFlags = e.subtreeFlags & 14680064);
        null !== h ? f = $833559fe574b4225$var$wh(h, f) : (f = $833559fe574b4225$var$Ah(f, g, c, null), f.flags |= 2);
        f.return = b;
        d.return = b;
        d.sibling = f;
        b.child = d;
        d = f;
        f = b.child;
        g = a.child.memoizedState;
        g = null === g ? $833559fe574b4225$var$oj(c) : {
            baseLanes: g.baseLanes | c,
            cachePool: null,
            transitions: g.transitions
        };
        f.memoizedState = g;
        f.childLanes = a.childLanes & ~c;
        b.memoizedState = $833559fe574b4225$var$nj;
        return d;
    }
    f = a.child;
    a = f.sibling;
    d = $833559fe574b4225$var$wh(f, {
        mode: "visible",
        children: d.children
    });
    0 === (b.mode & 1) && (d.lanes = c);
    d.return = b;
    d.sibling = null;
    null !== a && (c = b.deletions, null === c ? (b.deletions = [
        a
    ], b.flags |= 16) : c.push(a));
    b.child = d;
    b.memoizedState = null;
    return d;
}
function $833559fe574b4225$var$rj(a, b) {
    b = $833559fe574b4225$var$qj({
        mode: "visible",
        children: b
    }, a.mode, 0, null);
    b.return = a;
    return a.child = b;
}
function $833559fe574b4225$var$tj(a, b, c, d) {
    null !== d && $833559fe574b4225$var$Jg(d);
    $833559fe574b4225$var$Bh(b, a.child, null, c);
    a = $833559fe574b4225$var$rj(b, b.pendingProps.children);
    a.flags |= 2;
    b.memoizedState = null;
    return a;
}
function $833559fe574b4225$var$sj(a, b, c, d, e, f, g) {
    if (c) {
        if (b.flags & 256) return b.flags &= -257, d = $833559fe574b4225$var$Li(Error($833559fe574b4225$var$p(422))), $833559fe574b4225$var$tj(a, b, g, d);
        if (null !== b.memoizedState) return b.child = a.child, b.flags |= 128, null;
        f = d.fallback;
        e = b.mode;
        d = $833559fe574b4225$var$qj({
            mode: "visible",
            children: d.children
        }, e, 0, null);
        f = $833559fe574b4225$var$Ah(f, e, g, null);
        f.flags |= 2;
        d.return = b;
        f.return = b;
        d.sibling = f;
        b.child = d;
        0 !== (b.mode & 1) && $833559fe574b4225$var$Bh(b, a.child, null, g);
        b.child.memoizedState = $833559fe574b4225$var$oj(g);
        b.memoizedState = $833559fe574b4225$var$nj;
        return f;
    }
    if (0 === (b.mode & 1)) return $833559fe574b4225$var$tj(a, b, g, null);
    if ("$!" === e.data) {
        d = e.nextSibling && e.nextSibling.dataset;
        if (d) var h = d.dgst;
        d = h;
        f = Error($833559fe574b4225$var$p(419));
        d = $833559fe574b4225$var$Li(f, d, void 0);
        return $833559fe574b4225$var$tj(a, b, g, d);
    }
    h = 0 !== (g & a.childLanes);
    if ($833559fe574b4225$var$Ug || h) {
        d = $833559fe574b4225$var$R;
        if (null !== d) {
            switch(g & -g){
                case 4:
                    e = 2;
                    break;
                case 16:
                    e = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    e = 32;
                    break;
                case 536870912:
                    e = 268435456;
                    break;
                default:
                    e = 0;
            }
            e = 0 !== (e & (d.suspendedLanes | g)) ? 0 : e;
            0 !== e && e !== f.retryLane && (f.retryLane = e, $833559fe574b4225$var$Zg(a, e), $833559fe574b4225$var$mh(d, a, e, -1));
        }
        $833559fe574b4225$var$uj();
        d = $833559fe574b4225$var$Li(Error($833559fe574b4225$var$p(421)));
        return $833559fe574b4225$var$tj(a, b, g, d);
    }
    if ("$?" === e.data) return b.flags |= 128, b.child = a.child, b = $833559fe574b4225$var$vj.bind(null, a), e._reactRetry = b, null;
    a = f.treeContext;
    $833559fe574b4225$var$yg = $833559fe574b4225$var$Lf(e.nextSibling);
    $833559fe574b4225$var$xg = b;
    $833559fe574b4225$var$I = !0;
    $833559fe574b4225$var$zg = null;
    null !== a && ($833559fe574b4225$var$og[$833559fe574b4225$var$pg++] = $833559fe574b4225$var$rg, $833559fe574b4225$var$og[$833559fe574b4225$var$pg++] = $833559fe574b4225$var$sg, $833559fe574b4225$var$og[$833559fe574b4225$var$pg++] = $833559fe574b4225$var$qg, $833559fe574b4225$var$rg = a.id, $833559fe574b4225$var$sg = a.overflow, $833559fe574b4225$var$qg = b);
    b = $833559fe574b4225$var$rj(b, d.children);
    b.flags |= 4096;
    return b;
}
function $833559fe574b4225$var$wj(a, b, c) {
    a.lanes |= b;
    var d = a.alternate;
    null !== d && (d.lanes |= b);
    $833559fe574b4225$var$Sg(a.return, b, c);
}
function $833559fe574b4225$var$xj(a, b, c, d, e) {
    var f = a.memoizedState;
    null === f ? a.memoizedState = {
        isBackwards: b,
        rendering: null,
        renderingStartTime: 0,
        last: d,
        tail: c,
        tailMode: e
    } : (f.isBackwards = b, f.rendering = null, f.renderingStartTime = 0, f.last = d, f.tail = c, f.tailMode = e);
}
function $833559fe574b4225$var$yj(a, b, c) {
    var d = b.pendingProps, e = d.revealOrder, f = d.tail;
    $833559fe574b4225$var$Yi(a, b, d.children, c);
    d = $833559fe574b4225$var$M.current;
    if (0 !== (d & 2)) d = d & 1 | 2, b.flags |= 128;
    else {
        if (null !== a && 0 !== (a.flags & 128)) a: for(a = b.child; null !== a;){
            if (13 === a.tag) null !== a.memoizedState && $833559fe574b4225$var$wj(a, c, b);
            else if (19 === a.tag) $833559fe574b4225$var$wj(a, c, b);
            else if (null !== a.child) {
                a.child.return = a;
                a = a.child;
                continue;
            }
            if (a === b) break a;
            for(; null === a.sibling;){
                if (null === a.return || a.return === b) break a;
                a = a.return;
            }
            a.sibling.return = a.return;
            a = a.sibling;
        }
        d &= 1;
    }
    $833559fe574b4225$var$G($833559fe574b4225$var$M, d);
    if (0 === (b.mode & 1)) b.memoizedState = null;
    else switch(e){
        case "forwards":
            c = b.child;
            for(e = null; null !== c;)a = c.alternate, null !== a && null === $833559fe574b4225$var$Mh(a) && (e = c), c = c.sibling;
            c = e;
            null === c ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
            $833559fe574b4225$var$xj(b, !1, e, c, f);
            break;
        case "backwards":
            c = null;
            e = b.child;
            for(b.child = null; null !== e;){
                a = e.alternate;
                if (null !== a && null === $833559fe574b4225$var$Mh(a)) {
                    b.child = e;
                    break;
                }
                a = e.sibling;
                e.sibling = c;
                c = e;
                e = a;
            }
            $833559fe574b4225$var$xj(b, !0, c, null, f);
            break;
        case "together":
            $833559fe574b4225$var$xj(b, !1, null, null, void 0);
            break;
        default:
            b.memoizedState = null;
    }
    return b.child;
}
function $833559fe574b4225$var$jj(a, b) {
    0 === (b.mode & 1) && null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
}
function $833559fe574b4225$var$$i(a, b, c) {
    null !== a && (b.dependencies = a.dependencies);
    $833559fe574b4225$var$hh |= b.lanes;
    if (0 === (c & b.childLanes)) return null;
    if (null !== a && b.child !== a.child) throw Error($833559fe574b4225$var$p(153));
    if (null !== b.child) {
        a = b.child;
        c = $833559fe574b4225$var$wh(a, a.pendingProps);
        b.child = c;
        for(c.return = b; null !== a.sibling;)a = a.sibling, c = c.sibling = $833559fe574b4225$var$wh(a, a.pendingProps), c.return = b;
        c.sibling = null;
    }
    return b.child;
}
function $833559fe574b4225$var$zj(a, b, c) {
    switch(b.tag){
        case 3:
            $833559fe574b4225$var$lj(b);
            $833559fe574b4225$var$Ig();
            break;
        case 5:
            $833559fe574b4225$var$Kh(b);
            break;
        case 1:
            $833559fe574b4225$var$Zf(b.type) && $833559fe574b4225$var$cg(b);
            break;
        case 4:
            $833559fe574b4225$var$Ih(b, b.stateNode.containerInfo);
            break;
        case 10:
            var d = b.type._context, e = b.memoizedProps.value;
            $833559fe574b4225$var$G($833559fe574b4225$var$Mg, d._currentValue);
            d._currentValue = e;
            break;
        case 13:
            d = b.memoizedState;
            if (null !== d) {
                if (null !== d.dehydrated) return $833559fe574b4225$var$G($833559fe574b4225$var$M, $833559fe574b4225$var$M.current & 1), b.flags |= 128, null;
                if (0 !== (c & b.child.childLanes)) return $833559fe574b4225$var$pj(a, b, c);
                $833559fe574b4225$var$G($833559fe574b4225$var$M, $833559fe574b4225$var$M.current & 1);
                a = $833559fe574b4225$var$$i(a, b, c);
                return null !== a ? a.sibling : null;
            }
            $833559fe574b4225$var$G($833559fe574b4225$var$M, $833559fe574b4225$var$M.current & 1);
            break;
        case 19:
            d = 0 !== (c & b.childLanes);
            if (0 !== (a.flags & 128)) {
                if (d) return $833559fe574b4225$var$yj(a, b, c);
                b.flags |= 128;
            }
            e = b.memoizedState;
            null !== e && (e.rendering = null, e.tail = null, e.lastEffect = null);
            $833559fe574b4225$var$G($833559fe574b4225$var$M, $833559fe574b4225$var$M.current);
            if (d) break;
            else return null;
        case 22:
        case 23:
            return b.lanes = 0, $833559fe574b4225$var$ej(a, b, c);
    }
    return $833559fe574b4225$var$$i(a, b, c);
}
var $833559fe574b4225$var$Aj, $833559fe574b4225$var$Bj, $833559fe574b4225$var$Cj, $833559fe574b4225$var$Dj;
$833559fe574b4225$var$Aj = function(a, b) {
    for(var c = b.child; null !== c;){
        if (5 === c.tag || 6 === c.tag) a.appendChild(c.stateNode);
        else if (4 !== c.tag && null !== c.child) {
            c.child.return = c;
            c = c.child;
            continue;
        }
        if (c === b) break;
        for(; null === c.sibling;){
            if (null === c.return || c.return === b) return;
            c = c.return;
        }
        c.sibling.return = c.return;
        c = c.sibling;
    }
};
$833559fe574b4225$var$Bj = function() {};
$833559fe574b4225$var$Cj = function(a, b, c, d) {
    var e = a.memoizedProps;
    if (e !== d) {
        a = b.stateNode;
        $833559fe574b4225$var$Hh($833559fe574b4225$var$Eh.current);
        var f = null;
        switch(c){
            case "input":
                e = $833559fe574b4225$var$Ya(a, e);
                d = $833559fe574b4225$var$Ya(a, d);
                f = [];
                break;
            case "select":
                e = $833559fe574b4225$var$A({}, e, {
                    value: void 0
                });
                d = $833559fe574b4225$var$A({}, d, {
                    value: void 0
                });
                f = [];
                break;
            case "textarea":
                e = $833559fe574b4225$var$gb(a, e);
                d = $833559fe574b4225$var$gb(a, d);
                f = [];
                break;
            default:
                "function" !== typeof e.onClick && "function" === typeof d.onClick && (a.onclick = $833559fe574b4225$var$Bf);
        }
        $833559fe574b4225$var$ub(c, d);
        var g;
        c = null;
        for(l in e)if (!d.hasOwnProperty(l) && e.hasOwnProperty(l) && null != e[l]) {
            if ("style" === l) {
                var h = e[l];
                for(g in h)h.hasOwnProperty(g) && (c || (c = {}), c[g] = "");
            } else "dangerouslySetInnerHTML" !== l && "children" !== l && "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && "autoFocus" !== l && ($833559fe574b4225$var$ea.hasOwnProperty(l) ? f || (f = []) : (f = f || []).push(l, null));
        }
        for(l in d){
            var k = d[l];
            h = null != e ? e[l] : void 0;
            if (d.hasOwnProperty(l) && k !== h && (null != k || null != h)) {
                if ("style" === l) {
                    if (h) {
                        for(g in h)!h.hasOwnProperty(g) || k && k.hasOwnProperty(g) || (c || (c = {}), c[g] = "");
                        for(g in k)k.hasOwnProperty(g) && h[g] !== k[g] && (c || (c = {}), c[g] = k[g]);
                    } else c || (f || (f = []), f.push(l, c)), c = k;
                } else "dangerouslySetInnerHTML" === l ? (k = k ? k.__html : void 0, h = h ? h.__html : void 0, null != k && h !== k && (f = f || []).push(l, k)) : "children" === l ? "string" !== typeof k && "number" !== typeof k || (f = f || []).push(l, "" + k) : "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && ($833559fe574b4225$var$ea.hasOwnProperty(l) ? (null != k && "onScroll" === l && $833559fe574b4225$var$D("scroll", a), f || h === k || (f = [])) : (f = f || []).push(l, k));
            }
        }
        c && (f = f || []).push("style", c);
        var l = f;
        if (b.updateQueue = l) b.flags |= 4;
    }
};
$833559fe574b4225$var$Dj = function(a, b, c, d) {
    c !== d && (b.flags |= 4);
};
function $833559fe574b4225$var$Ej(a, b) {
    if (!$833559fe574b4225$var$I) switch(a.tailMode){
        case "hidden":
            b = a.tail;
            for(var c = null; null !== b;)null !== b.alternate && (c = b), b = b.sibling;
            null === c ? a.tail = null : c.sibling = null;
            break;
        case "collapsed":
            c = a.tail;
            for(var d = null; null !== c;)null !== c.alternate && (d = c), c = c.sibling;
            null === d ? b || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
    }
}
function $833559fe574b4225$var$S(a) {
    var b = null !== a.alternate && a.alternate.child === a.child, c = 0, d = 0;
    if (b) for(var e = a.child; null !== e;)c |= e.lanes | e.childLanes, d |= e.subtreeFlags & 14680064, d |= e.flags & 14680064, e.return = a, e = e.sibling;
    else for(e = a.child; null !== e;)c |= e.lanes | e.childLanes, d |= e.subtreeFlags, d |= e.flags, e.return = a, e = e.sibling;
    a.subtreeFlags |= d;
    a.childLanes = c;
    return b;
}
function $833559fe574b4225$var$Fj(a, b, c) {
    var d = b.pendingProps;
    $833559fe574b4225$var$wg(b);
    switch(b.tag){
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return $833559fe574b4225$var$S(b), null;
        case 1:
            return $833559fe574b4225$var$Zf(b.type) && $833559fe574b4225$var$$f(), $833559fe574b4225$var$S(b), null;
        case 3:
            d = b.stateNode;
            $833559fe574b4225$var$Jh();
            $833559fe574b4225$var$E($833559fe574b4225$var$Wf);
            $833559fe574b4225$var$E($833559fe574b4225$var$H);
            $833559fe574b4225$var$Oh();
            d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
            if (null === a || null === a.child) $833559fe574b4225$var$Gg(b) ? b.flags |= 4 : null === a || a.memoizedState.isDehydrated && 0 === (b.flags & 256) || (b.flags |= 1024, null !== $833559fe574b4225$var$zg && ($833559fe574b4225$var$Gj($833559fe574b4225$var$zg), $833559fe574b4225$var$zg = null));
            $833559fe574b4225$var$Bj(a, b);
            $833559fe574b4225$var$S(b);
            return null;
        case 5:
            $833559fe574b4225$var$Lh(b);
            var e = $833559fe574b4225$var$Hh($833559fe574b4225$var$Gh.current);
            c = b.type;
            if (null !== a && null != b.stateNode) $833559fe574b4225$var$Cj(a, b, c, d, e), a.ref !== b.ref && (b.flags |= 512, b.flags |= 2097152);
            else {
                if (!d) {
                    if (null === b.stateNode) throw Error($833559fe574b4225$var$p(166));
                    $833559fe574b4225$var$S(b);
                    return null;
                }
                a = $833559fe574b4225$var$Hh($833559fe574b4225$var$Eh.current);
                if ($833559fe574b4225$var$Gg(b)) {
                    d = b.stateNode;
                    c = b.type;
                    var f = b.memoizedProps;
                    d[$833559fe574b4225$var$Of] = b;
                    d[$833559fe574b4225$var$Pf] = f;
                    a = 0 !== (b.mode & 1);
                    switch(c){
                        case "dialog":
                            $833559fe574b4225$var$D("cancel", d);
                            $833559fe574b4225$var$D("close", d);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            $833559fe574b4225$var$D("load", d);
                            break;
                        case "video":
                        case "audio":
                            for(e = 0; e < $833559fe574b4225$var$lf.length; e++)$833559fe574b4225$var$D($833559fe574b4225$var$lf[e], d);
                            break;
                        case "source":
                            $833559fe574b4225$var$D("error", d);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            $833559fe574b4225$var$D("error", d);
                            $833559fe574b4225$var$D("load", d);
                            break;
                        case "details":
                            $833559fe574b4225$var$D("toggle", d);
                            break;
                        case "input":
                            $833559fe574b4225$var$Za(d, f);
                            $833559fe574b4225$var$D("invalid", d);
                            break;
                        case "select":
                            d._wrapperState = {
                                wasMultiple: !!f.multiple
                            };
                            $833559fe574b4225$var$D("invalid", d);
                            break;
                        case "textarea":
                            $833559fe574b4225$var$hb(d, f), $833559fe574b4225$var$D("invalid", d);
                    }
                    $833559fe574b4225$var$ub(c, f);
                    e = null;
                    for(var g in f)if (f.hasOwnProperty(g)) {
                        var h = f[g];
                        "children" === g ? "string" === typeof h ? d.textContent !== h && (!0 !== f.suppressHydrationWarning && $833559fe574b4225$var$Af(d.textContent, h, a), e = [
                            "children",
                            h
                        ]) : "number" === typeof h && d.textContent !== "" + h && (!0 !== f.suppressHydrationWarning && $833559fe574b4225$var$Af(d.textContent, h, a), e = [
                            "children",
                            "" + h
                        ]) : $833559fe574b4225$var$ea.hasOwnProperty(g) && null != h && "onScroll" === g && $833559fe574b4225$var$D("scroll", d);
                    }
                    switch(c){
                        case "input":
                            $833559fe574b4225$var$Va(d);
                            $833559fe574b4225$var$db(d, f, !0);
                            break;
                        case "textarea":
                            $833559fe574b4225$var$Va(d);
                            $833559fe574b4225$var$jb(d);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            "function" === typeof f.onClick && (d.onclick = $833559fe574b4225$var$Bf);
                    }
                    d = e;
                    b.updateQueue = d;
                    null !== d && (b.flags |= 4);
                } else {
                    g = 9 === e.nodeType ? e : e.ownerDocument;
                    "http://www.w3.org/1999/xhtml" === a && (a = $833559fe574b4225$var$kb(c));
                    "http://www.w3.org/1999/xhtml" === a ? "script" === c ? (a = g.createElement("div"), a.innerHTML = "<script></script>", a = a.removeChild(a.firstChild)) : "string" === typeof d.is ? a = g.createElement(c, {
                        is: d.is
                    }) : (a = g.createElement(c), "select" === c && (g = a, d.multiple ? g.multiple = !0 : d.size && (g.size = d.size))) : a = g.createElementNS(a, c);
                    a[$833559fe574b4225$var$Of] = b;
                    a[$833559fe574b4225$var$Pf] = d;
                    $833559fe574b4225$var$Aj(a, b, !1, !1);
                    b.stateNode = a;
                    a: {
                        g = $833559fe574b4225$var$vb(c, d);
                        switch(c){
                            case "dialog":
                                $833559fe574b4225$var$D("cancel", a);
                                $833559fe574b4225$var$D("close", a);
                                e = d;
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                $833559fe574b4225$var$D("load", a);
                                e = d;
                                break;
                            case "video":
                            case "audio":
                                for(e = 0; e < $833559fe574b4225$var$lf.length; e++)$833559fe574b4225$var$D($833559fe574b4225$var$lf[e], a);
                                e = d;
                                break;
                            case "source":
                                $833559fe574b4225$var$D("error", a);
                                e = d;
                                break;
                            case "img":
                            case "image":
                            case "link":
                                $833559fe574b4225$var$D("error", a);
                                $833559fe574b4225$var$D("load", a);
                                e = d;
                                break;
                            case "details":
                                $833559fe574b4225$var$D("toggle", a);
                                e = d;
                                break;
                            case "input":
                                $833559fe574b4225$var$Za(a, d);
                                e = $833559fe574b4225$var$Ya(a, d);
                                $833559fe574b4225$var$D("invalid", a);
                                break;
                            case "option":
                                e = d;
                                break;
                            case "select":
                                a._wrapperState = {
                                    wasMultiple: !!d.multiple
                                };
                                e = $833559fe574b4225$var$A({}, d, {
                                    value: void 0
                                });
                                $833559fe574b4225$var$D("invalid", a);
                                break;
                            case "textarea":
                                $833559fe574b4225$var$hb(a, d);
                                e = $833559fe574b4225$var$gb(a, d);
                                $833559fe574b4225$var$D("invalid", a);
                                break;
                            default:
                                e = d;
                        }
                        $833559fe574b4225$var$ub(c, e);
                        h = e;
                        for(f in h)if (h.hasOwnProperty(f)) {
                            var k = h[f];
                            "style" === f ? $833559fe574b4225$var$sb(a, k) : "dangerouslySetInnerHTML" === f ? (k = k ? k.__html : void 0, null != k && $833559fe574b4225$var$nb(a, k)) : "children" === f ? "string" === typeof k ? ("textarea" !== c || "" !== k) && $833559fe574b4225$var$ob(a, k) : "number" === typeof k && $833559fe574b4225$var$ob(a, "" + k) : "suppressContentEditableWarning" !== f && "suppressHydrationWarning" !== f && "autoFocus" !== f && ($833559fe574b4225$var$ea.hasOwnProperty(f) ? null != k && "onScroll" === f && $833559fe574b4225$var$D("scroll", a) : null != k && $833559fe574b4225$var$ta(a, f, k, g));
                        }
                        switch(c){
                            case "input":
                                $833559fe574b4225$var$Va(a);
                                $833559fe574b4225$var$db(a, d, !1);
                                break;
                            case "textarea":
                                $833559fe574b4225$var$Va(a);
                                $833559fe574b4225$var$jb(a);
                                break;
                            case "option":
                                null != d.value && a.setAttribute("value", "" + $833559fe574b4225$var$Sa(d.value));
                                break;
                            case "select":
                                a.multiple = !!d.multiple;
                                f = d.value;
                                null != f ? $833559fe574b4225$var$fb(a, !!d.multiple, f, !1) : null != d.defaultValue && $833559fe574b4225$var$fb(a, !!d.multiple, d.defaultValue, !0);
                                break;
                            default:
                                "function" === typeof e.onClick && (a.onclick = $833559fe574b4225$var$Bf);
                        }
                        switch(c){
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                d = !!d.autoFocus;
                                break a;
                            case "img":
                                d = !0;
                                break a;
                            default:
                                d = !1;
                        }
                    }
                    d && (b.flags |= 4);
                }
                null !== b.ref && (b.flags |= 512, b.flags |= 2097152);
            }
            $833559fe574b4225$var$S(b);
            return null;
        case 6:
            if (a && null != b.stateNode) $833559fe574b4225$var$Dj(a, b, a.memoizedProps, d);
            else {
                if ("string" !== typeof d && null === b.stateNode) throw Error($833559fe574b4225$var$p(166));
                c = $833559fe574b4225$var$Hh($833559fe574b4225$var$Gh.current);
                $833559fe574b4225$var$Hh($833559fe574b4225$var$Eh.current);
                if ($833559fe574b4225$var$Gg(b)) {
                    d = b.stateNode;
                    c = b.memoizedProps;
                    d[$833559fe574b4225$var$Of] = b;
                    if (f = d.nodeValue !== c) {
                        if (a = $833559fe574b4225$var$xg, null !== a) switch(a.tag){
                            case 3:
                                $833559fe574b4225$var$Af(d.nodeValue, c, 0 !== (a.mode & 1));
                                break;
                            case 5:
                                !0 !== a.memoizedProps.suppressHydrationWarning && $833559fe574b4225$var$Af(d.nodeValue, c, 0 !== (a.mode & 1));
                        }
                    }
                    f && (b.flags |= 4);
                } else d = (9 === c.nodeType ? c : c.ownerDocument).createTextNode(d), d[$833559fe574b4225$var$Of] = b, b.stateNode = d;
            }
            $833559fe574b4225$var$S(b);
            return null;
        case 13:
            $833559fe574b4225$var$E($833559fe574b4225$var$M);
            d = b.memoizedState;
            if (null === a || null !== a.memoizedState && null !== a.memoizedState.dehydrated) {
                if ($833559fe574b4225$var$I && null !== $833559fe574b4225$var$yg && 0 !== (b.mode & 1) && 0 === (b.flags & 128)) $833559fe574b4225$var$Hg(), $833559fe574b4225$var$Ig(), b.flags |= 98560, f = !1;
                else if (f = $833559fe574b4225$var$Gg(b), null !== d && null !== d.dehydrated) {
                    if (null === a) {
                        if (!f) throw Error($833559fe574b4225$var$p(318));
                        f = b.memoizedState;
                        f = null !== f ? f.dehydrated : null;
                        if (!f) throw Error($833559fe574b4225$var$p(317));
                        f[$833559fe574b4225$var$Of] = b;
                    } else $833559fe574b4225$var$Ig(), 0 === (b.flags & 128) && (b.memoizedState = null), b.flags |= 4;
                    $833559fe574b4225$var$S(b);
                    f = !1;
                } else null !== $833559fe574b4225$var$zg && ($833559fe574b4225$var$Gj($833559fe574b4225$var$zg), $833559fe574b4225$var$zg = null), f = !0;
                if (!f) return b.flags & 65536 ? b : null;
            }
            if (0 !== (b.flags & 128)) return b.lanes = c, b;
            d = null !== d;
            d !== (null !== a && null !== a.memoizedState) && d && (b.child.flags |= 8192, 0 !== (b.mode & 1) && (null === a || 0 !== ($833559fe574b4225$var$M.current & 1) ? 0 === $833559fe574b4225$var$T && ($833559fe574b4225$var$T = 3) : $833559fe574b4225$var$uj()));
            null !== b.updateQueue && (b.flags |= 4);
            $833559fe574b4225$var$S(b);
            return null;
        case 4:
            return $833559fe574b4225$var$Jh(), $833559fe574b4225$var$Bj(a, b), null === a && $833559fe574b4225$var$sf(b.stateNode.containerInfo), $833559fe574b4225$var$S(b), null;
        case 10:
            return $833559fe574b4225$var$Rg(b.type._context), $833559fe574b4225$var$S(b), null;
        case 17:
            return $833559fe574b4225$var$Zf(b.type) && $833559fe574b4225$var$$f(), $833559fe574b4225$var$S(b), null;
        case 19:
            $833559fe574b4225$var$E($833559fe574b4225$var$M);
            f = b.memoizedState;
            if (null === f) return $833559fe574b4225$var$S(b), null;
            d = 0 !== (b.flags & 128);
            g = f.rendering;
            if (null === g) {
                if (d) $833559fe574b4225$var$Ej(f, !1);
                else {
                    if (0 !== $833559fe574b4225$var$T || null !== a && 0 !== (a.flags & 128)) for(a = b.child; null !== a;){
                        g = $833559fe574b4225$var$Mh(a);
                        if (null !== g) {
                            b.flags |= 128;
                            $833559fe574b4225$var$Ej(f, !1);
                            d = g.updateQueue;
                            null !== d && (b.updateQueue = d, b.flags |= 4);
                            b.subtreeFlags = 0;
                            d = c;
                            for(c = b.child; null !== c;)f = c, a = d, f.flags &= 14680066, g = f.alternate, null === g ? (f.childLanes = 0, f.lanes = a, f.child = null, f.subtreeFlags = 0, f.memoizedProps = null, f.memoizedState = null, f.updateQueue = null, f.dependencies = null, f.stateNode = null) : (f.childLanes = g.childLanes, f.lanes = g.lanes, f.child = g.child, f.subtreeFlags = 0, f.deletions = null, f.memoizedProps = g.memoizedProps, f.memoizedState = g.memoizedState, f.updateQueue = g.updateQueue, f.type = g.type, a = g.dependencies, f.dependencies = null === a ? null : {
                                lanes: a.lanes,
                                firstContext: a.firstContext
                            }), c = c.sibling;
                            $833559fe574b4225$var$G($833559fe574b4225$var$M, $833559fe574b4225$var$M.current & 1 | 2);
                            return b.child;
                        }
                        a = a.sibling;
                    }
                    null !== f.tail && $833559fe574b4225$var$B() > $833559fe574b4225$var$Hj && (b.flags |= 128, d = !0, $833559fe574b4225$var$Ej(f, !1), b.lanes = 4194304);
                }
            } else {
                if (!d) {
                    if (a = $833559fe574b4225$var$Mh(g), null !== a) {
                        if (b.flags |= 128, d = !0, c = a.updateQueue, null !== c && (b.updateQueue = c, b.flags |= 4), $833559fe574b4225$var$Ej(f, !0), null === f.tail && "hidden" === f.tailMode && !g.alternate && !$833559fe574b4225$var$I) return $833559fe574b4225$var$S(b), null;
                    } else 2 * $833559fe574b4225$var$B() - f.renderingStartTime > $833559fe574b4225$var$Hj && 1073741824 !== c && (b.flags |= 128, d = !0, $833559fe574b4225$var$Ej(f, !1), b.lanes = 4194304);
                }
                f.isBackwards ? (g.sibling = b.child, b.child = g) : (c = f.last, null !== c ? c.sibling = g : b.child = g, f.last = g);
            }
            if (null !== f.tail) return b = f.tail, f.rendering = b, f.tail = b.sibling, f.renderingStartTime = $833559fe574b4225$var$B(), b.sibling = null, c = $833559fe574b4225$var$M.current, $833559fe574b4225$var$G($833559fe574b4225$var$M, d ? c & 1 | 2 : c & 1), b;
            $833559fe574b4225$var$S(b);
            return null;
        case 22:
        case 23:
            return $833559fe574b4225$var$Ij(), d = null !== b.memoizedState, null !== a && null !== a.memoizedState !== d && (b.flags |= 8192), d && 0 !== (b.mode & 1) ? 0 !== ($833559fe574b4225$var$gj & 1073741824) && ($833559fe574b4225$var$S(b), b.subtreeFlags & 6 && (b.flags |= 8192)) : $833559fe574b4225$var$S(b), null;
        case 24:
            return null;
        case 25:
            return null;
    }
    throw Error($833559fe574b4225$var$p(156, b.tag));
}
function $833559fe574b4225$var$Jj(a, b) {
    $833559fe574b4225$var$wg(b);
    switch(b.tag){
        case 1:
            return $833559fe574b4225$var$Zf(b.type) && $833559fe574b4225$var$$f(), a = b.flags, a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
        case 3:
            return $833559fe574b4225$var$Jh(), $833559fe574b4225$var$E($833559fe574b4225$var$Wf), $833559fe574b4225$var$E($833559fe574b4225$var$H), $833559fe574b4225$var$Oh(), a = b.flags, 0 !== (a & 65536) && 0 === (a & 128) ? (b.flags = a & -65537 | 128, b) : null;
        case 5:
            return $833559fe574b4225$var$Lh(b), null;
        case 13:
            $833559fe574b4225$var$E($833559fe574b4225$var$M);
            a = b.memoizedState;
            if (null !== a && null !== a.dehydrated) {
                if (null === b.alternate) throw Error($833559fe574b4225$var$p(340));
                $833559fe574b4225$var$Ig();
            }
            a = b.flags;
            return a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
        case 19:
            return $833559fe574b4225$var$E($833559fe574b4225$var$M), null;
        case 4:
            return $833559fe574b4225$var$Jh(), null;
        case 10:
            return $833559fe574b4225$var$Rg(b.type._context), null;
        case 22:
        case 23:
            return $833559fe574b4225$var$Ij(), null;
        case 24:
            return null;
        default:
            return null;
    }
}
var $833559fe574b4225$var$Kj = !1, $833559fe574b4225$var$U = !1, $833559fe574b4225$var$Lj = "function" === typeof WeakSet ? WeakSet : Set, $833559fe574b4225$var$V = null;
function $833559fe574b4225$var$Mj(a, b) {
    var c = a.ref;
    if (null !== c) {
        if ("function" === typeof c) try {
            c(null);
        } catch (d) {
            $833559fe574b4225$var$W(a, b, d);
        }
        else c.current = null;
    }
}
function $833559fe574b4225$var$Nj(a, b, c) {
    try {
        c();
    } catch (d) {
        $833559fe574b4225$var$W(a, b, d);
    }
}
var $833559fe574b4225$var$Oj = !1;
function $833559fe574b4225$var$Pj(a, b) {
    $833559fe574b4225$var$Cf = $833559fe574b4225$var$dd;
    a = $833559fe574b4225$var$Me();
    if ($833559fe574b4225$var$Ne(a)) {
        if ("selectionStart" in a) var c = {
            start: a.selectionStart,
            end: a.selectionEnd
        };
        else a: {
            c = (c = a.ownerDocument) && c.defaultView || window;
            var d = c.getSelection && c.getSelection();
            if (d && 0 !== d.rangeCount) {
                c = d.anchorNode;
                var e = d.anchorOffset, f = d.focusNode;
                d = d.focusOffset;
                try {
                    c.nodeType, f.nodeType;
                } catch (F) {
                    c = null;
                    break a;
                }
                var g = 0, h = -1, k = -1, l = 0, m = 0, q = a, r = null;
                b: for(;;){
                    for(var y;;){
                        q !== c || 0 !== e && 3 !== q.nodeType || (h = g + e);
                        q !== f || 0 !== d && 3 !== q.nodeType || (k = g + d);
                        3 === q.nodeType && (g += q.nodeValue.length);
                        if (null === (y = q.firstChild)) break;
                        r = q;
                        q = y;
                    }
                    for(;;){
                        if (q === a) break b;
                        r === c && ++l === e && (h = g);
                        r === f && ++m === d && (k = g);
                        if (null !== (y = q.nextSibling)) break;
                        q = r;
                        r = q.parentNode;
                    }
                    q = y;
                }
                c = -1 === h || -1 === k ? null : {
                    start: h,
                    end: k
                };
            } else c = null;
        }
        c = c || {
            start: 0,
            end: 0
        };
    } else c = null;
    $833559fe574b4225$var$Df = {
        focusedElem: a,
        selectionRange: c
    };
    $833559fe574b4225$var$dd = !1;
    for($833559fe574b4225$var$V = b; null !== $833559fe574b4225$var$V;)if (b = $833559fe574b4225$var$V, a = b.child, 0 !== (b.subtreeFlags & 1028) && null !== a) a.return = b, $833559fe574b4225$var$V = a;
    else for(; null !== $833559fe574b4225$var$V;){
        b = $833559fe574b4225$var$V;
        try {
            var n = b.alternate;
            if (0 !== (b.flags & 1024)) switch(b.tag){
                case 0:
                case 11:
                case 15:
                    break;
                case 1:
                    if (null !== n) {
                        var t = n.memoizedProps, J = n.memoizedState, x = b.stateNode, w = x.getSnapshotBeforeUpdate(b.elementType === b.type ? t : $833559fe574b4225$var$Lg(b.type, t), J);
                        x.__reactInternalSnapshotBeforeUpdate = w;
                    }
                    break;
                case 3:
                    var u = b.stateNode.containerInfo;
                    1 === u.nodeType ? u.textContent = "" : 9 === u.nodeType && u.documentElement && u.removeChild(u.documentElement);
                    break;
                case 5:
                case 6:
                case 4:
                case 17:
                    break;
                default:
                    throw Error($833559fe574b4225$var$p(163));
            }
        } catch (F) {
            $833559fe574b4225$var$W(b, b.return, F);
        }
        a = b.sibling;
        if (null !== a) {
            a.return = b.return;
            $833559fe574b4225$var$V = a;
            break;
        }
        $833559fe574b4225$var$V = b.return;
    }
    n = $833559fe574b4225$var$Oj;
    $833559fe574b4225$var$Oj = !1;
    return n;
}
function $833559fe574b4225$var$Qj(a, b, c) {
    var d = b.updateQueue;
    d = null !== d ? d.lastEffect : null;
    if (null !== d) {
        var e = d = d.next;
        do {
            if ((e.tag & a) === a) {
                var f = e.destroy;
                e.destroy = void 0;
                void 0 !== f && $833559fe574b4225$var$Nj(b, c, f);
            }
            e = e.next;
        }while (e !== d);
    }
}
function $833559fe574b4225$var$Rj(a, b) {
    b = b.updateQueue;
    b = null !== b ? b.lastEffect : null;
    if (null !== b) {
        var c = b = b.next;
        do {
            if ((c.tag & a) === a) {
                var d = c.create;
                c.destroy = d();
            }
            c = c.next;
        }while (c !== b);
    }
}
function $833559fe574b4225$var$Sj(a) {
    var b = a.ref;
    if (null !== b) {
        var c = a.stateNode;
        switch(a.tag){
            case 5:
                a = c;
                break;
            default:
                a = c;
        }
        "function" === typeof b ? b(a) : b.current = a;
    }
}
function $833559fe574b4225$var$Tj(a) {
    var b = a.alternate;
    null !== b && (a.alternate = null, $833559fe574b4225$var$Tj(b));
    a.child = null;
    a.deletions = null;
    a.sibling = null;
    5 === a.tag && (b = a.stateNode, null !== b && (delete b[$833559fe574b4225$var$Of], delete b[$833559fe574b4225$var$Pf], delete b[$833559fe574b4225$var$of], delete b[$833559fe574b4225$var$Qf], delete b[$833559fe574b4225$var$Rf]));
    a.stateNode = null;
    a.return = null;
    a.dependencies = null;
    a.memoizedProps = null;
    a.memoizedState = null;
    a.pendingProps = null;
    a.stateNode = null;
    a.updateQueue = null;
}
function $833559fe574b4225$var$Uj(a) {
    return 5 === a.tag || 3 === a.tag || 4 === a.tag;
}
function $833559fe574b4225$var$Vj(a) {
    a: for(;;){
        for(; null === a.sibling;){
            if (null === a.return || $833559fe574b4225$var$Uj(a.return)) return null;
            a = a.return;
        }
        a.sibling.return = a.return;
        for(a = a.sibling; 5 !== a.tag && 6 !== a.tag && 18 !== a.tag;){
            if (a.flags & 2) continue a;
            if (null === a.child || 4 === a.tag) continue a;
            else a.child.return = a, a = a.child;
        }
        if (!(a.flags & 2)) return a.stateNode;
    }
}
function $833559fe574b4225$var$Wj(a, b, c) {
    var d = a.tag;
    if (5 === d || 6 === d) a = a.stateNode, b ? 8 === c.nodeType ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (8 === c.nodeType ? (b = c.parentNode, b.insertBefore(a, c)) : (b = c, b.appendChild(a)), c = c._reactRootContainer, null !== c && void 0 !== c || null !== b.onclick || (b.onclick = $833559fe574b4225$var$Bf));
    else if (4 !== d && (a = a.child, null !== a)) for($833559fe574b4225$var$Wj(a, b, c), a = a.sibling; null !== a;)$833559fe574b4225$var$Wj(a, b, c), a = a.sibling;
}
function $833559fe574b4225$var$Xj(a, b, c) {
    var d = a.tag;
    if (5 === d || 6 === d) a = a.stateNode, b ? c.insertBefore(a, b) : c.appendChild(a);
    else if (4 !== d && (a = a.child, null !== a)) for($833559fe574b4225$var$Xj(a, b, c), a = a.sibling; null !== a;)$833559fe574b4225$var$Xj(a, b, c), a = a.sibling;
}
var $833559fe574b4225$var$X = null, $833559fe574b4225$var$Yj = !1;
function $833559fe574b4225$var$Zj(a, b, c) {
    for(c = c.child; null !== c;)$833559fe574b4225$var$ak(a, b, c), c = c.sibling;
}
function $833559fe574b4225$var$ak(a, b, c) {
    if ($833559fe574b4225$var$lc && "function" === typeof $833559fe574b4225$var$lc.onCommitFiberUnmount) try {
        $833559fe574b4225$var$lc.onCommitFiberUnmount($833559fe574b4225$var$kc, c);
    } catch (h) {}
    switch(c.tag){
        case 5:
            $833559fe574b4225$var$U || $833559fe574b4225$var$Mj(c, b);
        case 6:
            var d = $833559fe574b4225$var$X, e = $833559fe574b4225$var$Yj;
            $833559fe574b4225$var$X = null;
            $833559fe574b4225$var$Zj(a, b, c);
            $833559fe574b4225$var$X = d;
            $833559fe574b4225$var$Yj = e;
            null !== $833559fe574b4225$var$X && ($833559fe574b4225$var$Yj ? (a = $833559fe574b4225$var$X, c = c.stateNode, 8 === a.nodeType ? a.parentNode.removeChild(c) : a.removeChild(c)) : $833559fe574b4225$var$X.removeChild(c.stateNode));
            break;
        case 18:
            null !== $833559fe574b4225$var$X && ($833559fe574b4225$var$Yj ? (a = $833559fe574b4225$var$X, c = c.stateNode, 8 === a.nodeType ? $833559fe574b4225$var$Kf(a.parentNode, c) : 1 === a.nodeType && $833559fe574b4225$var$Kf(a, c), $833559fe574b4225$var$bd(a)) : $833559fe574b4225$var$Kf($833559fe574b4225$var$X, c.stateNode));
            break;
        case 4:
            d = $833559fe574b4225$var$X;
            e = $833559fe574b4225$var$Yj;
            $833559fe574b4225$var$X = c.stateNode.containerInfo;
            $833559fe574b4225$var$Yj = !0;
            $833559fe574b4225$var$Zj(a, b, c);
            $833559fe574b4225$var$X = d;
            $833559fe574b4225$var$Yj = e;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!$833559fe574b4225$var$U && (d = c.updateQueue, null !== d && (d = d.lastEffect, null !== d))) {
                e = d = d.next;
                do {
                    var f = e, g = f.destroy;
                    f = f.tag;
                    void 0 !== g && (0 !== (f & 2) ? $833559fe574b4225$var$Nj(c, b, g) : 0 !== (f & 4) && $833559fe574b4225$var$Nj(c, b, g));
                    e = e.next;
                }while (e !== d);
            }
            $833559fe574b4225$var$Zj(a, b, c);
            break;
        case 1:
            if (!$833559fe574b4225$var$U && ($833559fe574b4225$var$Mj(c, b), d = c.stateNode, "function" === typeof d.componentWillUnmount)) try {
                d.props = c.memoizedProps, d.state = c.memoizedState, d.componentWillUnmount();
            } catch (h) {
                $833559fe574b4225$var$W(c, b, h);
            }
            $833559fe574b4225$var$Zj(a, b, c);
            break;
        case 21:
            $833559fe574b4225$var$Zj(a, b, c);
            break;
        case 22:
            c.mode & 1 ? ($833559fe574b4225$var$U = (d = $833559fe574b4225$var$U) || null !== c.memoizedState, $833559fe574b4225$var$Zj(a, b, c), $833559fe574b4225$var$U = d) : $833559fe574b4225$var$Zj(a, b, c);
            break;
        default:
            $833559fe574b4225$var$Zj(a, b, c);
    }
}
function $833559fe574b4225$var$bk(a) {
    var b = a.updateQueue;
    if (null !== b) {
        a.updateQueue = null;
        var c = a.stateNode;
        null === c && (c = a.stateNode = new $833559fe574b4225$var$Lj);
        b.forEach(function(b) {
            var d = $833559fe574b4225$var$ck.bind(null, a, b);
            c.has(b) || (c.add(b), b.then(d, d));
        });
    }
}
function $833559fe574b4225$var$dk(a, b) {
    var c = b.deletions;
    if (null !== c) for(var d = 0; d < c.length; d++){
        var e = c[d];
        try {
            var f = a, g = b, h = g;
            a: for(; null !== h;){
                switch(h.tag){
                    case 5:
                        $833559fe574b4225$var$X = h.stateNode;
                        $833559fe574b4225$var$Yj = !1;
                        break a;
                    case 3:
                        $833559fe574b4225$var$X = h.stateNode.containerInfo;
                        $833559fe574b4225$var$Yj = !0;
                        break a;
                    case 4:
                        $833559fe574b4225$var$X = h.stateNode.containerInfo;
                        $833559fe574b4225$var$Yj = !0;
                        break a;
                }
                h = h.return;
            }
            if (null === $833559fe574b4225$var$X) throw Error($833559fe574b4225$var$p(160));
            $833559fe574b4225$var$ak(f, g, e);
            $833559fe574b4225$var$X = null;
            $833559fe574b4225$var$Yj = !1;
            var k = e.alternate;
            null !== k && (k.return = null);
            e.return = null;
        } catch (l) {
            $833559fe574b4225$var$W(e, b, l);
        }
    }
    if (b.subtreeFlags & 12854) for(b = b.child; null !== b;)$833559fe574b4225$var$ek(b, a), b = b.sibling;
}
function $833559fe574b4225$var$ek(a, b) {
    var c = a.alternate, d = a.flags;
    switch(a.tag){
        case 0:
        case 11:
        case 14:
        case 15:
            $833559fe574b4225$var$dk(b, a);
            $833559fe574b4225$var$fk(a);
            if (d & 4) {
                try {
                    $833559fe574b4225$var$Qj(3, a, a.return), $833559fe574b4225$var$Rj(3, a);
                } catch (t) {
                    $833559fe574b4225$var$W(a, a.return, t);
                }
                try {
                    $833559fe574b4225$var$Qj(5, a, a.return);
                } catch (t) {
                    $833559fe574b4225$var$W(a, a.return, t);
                }
            }
            break;
        case 1:
            $833559fe574b4225$var$dk(b, a);
            $833559fe574b4225$var$fk(a);
            d & 512 && null !== c && $833559fe574b4225$var$Mj(c, c.return);
            break;
        case 5:
            $833559fe574b4225$var$dk(b, a);
            $833559fe574b4225$var$fk(a);
            d & 512 && null !== c && $833559fe574b4225$var$Mj(c, c.return);
            if (a.flags & 32) {
                var e = a.stateNode;
                try {
                    $833559fe574b4225$var$ob(e, "");
                } catch (t) {
                    $833559fe574b4225$var$W(a, a.return, t);
                }
            }
            if (d & 4 && (e = a.stateNode, null != e)) {
                var f = a.memoizedProps, g = null !== c ? c.memoizedProps : f, h = a.type, k = a.updateQueue;
                a.updateQueue = null;
                if (null !== k) try {
                    "input" === h && "radio" === f.type && null != f.name && $833559fe574b4225$var$ab(e, f);
                    $833559fe574b4225$var$vb(h, g);
                    var l = $833559fe574b4225$var$vb(h, f);
                    for(g = 0; g < k.length; g += 2){
                        var m = k[g], q = k[g + 1];
                        "style" === m ? $833559fe574b4225$var$sb(e, q) : "dangerouslySetInnerHTML" === m ? $833559fe574b4225$var$nb(e, q) : "children" === m ? $833559fe574b4225$var$ob(e, q) : $833559fe574b4225$var$ta(e, m, q, l);
                    }
                    switch(h){
                        case "input":
                            $833559fe574b4225$var$bb(e, f);
                            break;
                        case "textarea":
                            $833559fe574b4225$var$ib(e, f);
                            break;
                        case "select":
                            var r = e._wrapperState.wasMultiple;
                            e._wrapperState.wasMultiple = !!f.multiple;
                            var y = f.value;
                            null != y ? $833559fe574b4225$var$fb(e, !!f.multiple, y, !1) : r !== !!f.multiple && (null != f.defaultValue ? $833559fe574b4225$var$fb(e, !!f.multiple, f.defaultValue, !0) : $833559fe574b4225$var$fb(e, !!f.multiple, f.multiple ? [] : "", !1));
                    }
                    e[$833559fe574b4225$var$Pf] = f;
                } catch (t) {
                    $833559fe574b4225$var$W(a, a.return, t);
                }
            }
            break;
        case 6:
            $833559fe574b4225$var$dk(b, a);
            $833559fe574b4225$var$fk(a);
            if (d & 4) {
                if (null === a.stateNode) throw Error($833559fe574b4225$var$p(162));
                e = a.stateNode;
                f = a.memoizedProps;
                try {
                    e.nodeValue = f;
                } catch (t) {
                    $833559fe574b4225$var$W(a, a.return, t);
                }
            }
            break;
        case 3:
            $833559fe574b4225$var$dk(b, a);
            $833559fe574b4225$var$fk(a);
            if (d & 4 && null !== c && c.memoizedState.isDehydrated) try {
                $833559fe574b4225$var$bd(b.containerInfo);
            } catch (t) {
                $833559fe574b4225$var$W(a, a.return, t);
            }
            break;
        case 4:
            $833559fe574b4225$var$dk(b, a);
            $833559fe574b4225$var$fk(a);
            break;
        case 13:
            $833559fe574b4225$var$dk(b, a);
            $833559fe574b4225$var$fk(a);
            e = a.child;
            e.flags & 8192 && (f = null !== e.memoizedState, e.stateNode.isHidden = f, !f || null !== e.alternate && null !== e.alternate.memoizedState || ($833559fe574b4225$var$gk = $833559fe574b4225$var$B()));
            d & 4 && $833559fe574b4225$var$bk(a);
            break;
        case 22:
            m = null !== c && null !== c.memoizedState;
            a.mode & 1 ? ($833559fe574b4225$var$U = (l = $833559fe574b4225$var$U) || m, $833559fe574b4225$var$dk(b, a), $833559fe574b4225$var$U = l) : $833559fe574b4225$var$dk(b, a);
            $833559fe574b4225$var$fk(a);
            if (d & 8192) {
                l = null !== a.memoizedState;
                if ((a.stateNode.isHidden = l) && !m && 0 !== (a.mode & 1)) for($833559fe574b4225$var$V = a, m = a.child; null !== m;){
                    for(q = $833559fe574b4225$var$V = m; null !== $833559fe574b4225$var$V;){
                        r = $833559fe574b4225$var$V;
                        y = r.child;
                        switch(r.tag){
                            case 0:
                            case 11:
                            case 14:
                            case 15:
                                $833559fe574b4225$var$Qj(4, r, r.return);
                                break;
                            case 1:
                                $833559fe574b4225$var$Mj(r, r.return);
                                var n = r.stateNode;
                                if ("function" === typeof n.componentWillUnmount) {
                                    d = r;
                                    c = r.return;
                                    try {
                                        b = d, n.props = b.memoizedProps, n.state = b.memoizedState, n.componentWillUnmount();
                                    } catch (t) {
                                        $833559fe574b4225$var$W(d, c, t);
                                    }
                                }
                                break;
                            case 5:
                                $833559fe574b4225$var$Mj(r, r.return);
                                break;
                            case 22:
                                if (null !== r.memoizedState) {
                                    $833559fe574b4225$var$hk(q);
                                    continue;
                                }
                        }
                        null !== y ? (y.return = r, $833559fe574b4225$var$V = y) : $833559fe574b4225$var$hk(q);
                    }
                    m = m.sibling;
                }
                a: for(m = null, q = a;;){
                    if (5 === q.tag) {
                        if (null === m) {
                            m = q;
                            try {
                                e = q.stateNode, l ? (f = e.style, "function" === typeof f.setProperty ? f.setProperty("display", "none", "important") : f.display = "none") : (h = q.stateNode, k = q.memoizedProps.style, g = void 0 !== k && null !== k && k.hasOwnProperty("display") ? k.display : null, h.style.display = $833559fe574b4225$var$rb("display", g));
                            } catch (t) {
                                $833559fe574b4225$var$W(a, a.return, t);
                            }
                        }
                    } else if (6 === q.tag) {
                        if (null === m) try {
                            q.stateNode.nodeValue = l ? "" : q.memoizedProps;
                        } catch (t) {
                            $833559fe574b4225$var$W(a, a.return, t);
                        }
                    } else if ((22 !== q.tag && 23 !== q.tag || null === q.memoizedState || q === a) && null !== q.child) {
                        q.child.return = q;
                        q = q.child;
                        continue;
                    }
                    if (q === a) break a;
                    for(; null === q.sibling;){
                        if (null === q.return || q.return === a) break a;
                        m === q && (m = null);
                        q = q.return;
                    }
                    m === q && (m = null);
                    q.sibling.return = q.return;
                    q = q.sibling;
                }
            }
            break;
        case 19:
            $833559fe574b4225$var$dk(b, a);
            $833559fe574b4225$var$fk(a);
            d & 4 && $833559fe574b4225$var$bk(a);
            break;
        case 21:
            break;
        default:
            $833559fe574b4225$var$dk(b, a), $833559fe574b4225$var$fk(a);
    }
}
function $833559fe574b4225$var$fk(a) {
    var b = a.flags;
    if (b & 2) {
        try {
            a: {
                for(var c = a.return; null !== c;){
                    if ($833559fe574b4225$var$Uj(c)) {
                        var d = c;
                        break a;
                    }
                    c = c.return;
                }
                throw Error($833559fe574b4225$var$p(160));
            }
            switch(d.tag){
                case 5:
                    var e = d.stateNode;
                    d.flags & 32 && ($833559fe574b4225$var$ob(e, ""), d.flags &= -33);
                    var f = $833559fe574b4225$var$Vj(a);
                    $833559fe574b4225$var$Xj(a, f, e);
                    break;
                case 3:
                case 4:
                    var g = d.stateNode.containerInfo, h = $833559fe574b4225$var$Vj(a);
                    $833559fe574b4225$var$Wj(a, h, g);
                    break;
                default:
                    throw Error($833559fe574b4225$var$p(161));
            }
        } catch (k) {
            $833559fe574b4225$var$W(a, a.return, k);
        }
        a.flags &= -3;
    }
    b & 4096 && (a.flags &= -4097);
}
function $833559fe574b4225$var$ik(a, b, c) {
    $833559fe574b4225$var$V = a;
    $833559fe574b4225$var$jk(a, b, c);
}
function $833559fe574b4225$var$jk(a, b, c) {
    for(var d = 0 !== (a.mode & 1); null !== $833559fe574b4225$var$V;){
        var e = $833559fe574b4225$var$V, f = e.child;
        if (22 === e.tag && d) {
            var g = null !== e.memoizedState || $833559fe574b4225$var$Kj;
            if (!g) {
                var h = e.alternate, k = null !== h && null !== h.memoizedState || $833559fe574b4225$var$U;
                h = $833559fe574b4225$var$Kj;
                var l = $833559fe574b4225$var$U;
                $833559fe574b4225$var$Kj = g;
                if (($833559fe574b4225$var$U = k) && !l) for($833559fe574b4225$var$V = e; null !== $833559fe574b4225$var$V;)g = $833559fe574b4225$var$V, k = g.child, 22 === g.tag && null !== g.memoizedState ? $833559fe574b4225$var$kk(e) : null !== k ? (k.return = g, $833559fe574b4225$var$V = k) : $833559fe574b4225$var$kk(e);
                for(; null !== f;)$833559fe574b4225$var$V = f, $833559fe574b4225$var$jk(f, b, c), f = f.sibling;
                $833559fe574b4225$var$V = e;
                $833559fe574b4225$var$Kj = h;
                $833559fe574b4225$var$U = l;
            }
            $833559fe574b4225$var$lk(a, b, c);
        } else 0 !== (e.subtreeFlags & 8772) && null !== f ? (f.return = e, $833559fe574b4225$var$V = f) : $833559fe574b4225$var$lk(a, b, c);
    }
}
function $833559fe574b4225$var$lk(a) {
    for(; null !== $833559fe574b4225$var$V;){
        var b = $833559fe574b4225$var$V;
        if (0 !== (b.flags & 8772)) {
            var c = b.alternate;
            try {
                if (0 !== (b.flags & 8772)) switch(b.tag){
                    case 0:
                    case 11:
                    case 15:
                        $833559fe574b4225$var$U || $833559fe574b4225$var$Rj(5, b);
                        break;
                    case 1:
                        var d = b.stateNode;
                        if (b.flags & 4 && !$833559fe574b4225$var$U) {
                            if (null === c) d.componentDidMount();
                            else {
                                var e = b.elementType === b.type ? c.memoizedProps : $833559fe574b4225$var$Lg(b.type, c.memoizedProps);
                                d.componentDidUpdate(e, c.memoizedState, d.__reactInternalSnapshotBeforeUpdate);
                            }
                        }
                        var f = b.updateQueue;
                        null !== f && $833559fe574b4225$var$ih(b, f, d);
                        break;
                    case 3:
                        var g = b.updateQueue;
                        if (null !== g) {
                            c = null;
                            if (null !== b.child) switch(b.child.tag){
                                case 5:
                                    c = b.child.stateNode;
                                    break;
                                case 1:
                                    c = b.child.stateNode;
                            }
                            $833559fe574b4225$var$ih(b, g, c);
                        }
                        break;
                    case 5:
                        var h = b.stateNode;
                        if (null === c && b.flags & 4) {
                            c = h;
                            var k = b.memoizedProps;
                            switch(b.type){
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    k.autoFocus && c.focus();
                                    break;
                                case "img":
                                    k.src && (c.src = k.src);
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (null === b.memoizedState) {
                            var l = b.alternate;
                            if (null !== l) {
                                var m = l.memoizedState;
                                if (null !== m) {
                                    var q = m.dehydrated;
                                    null !== q && $833559fe574b4225$var$bd(q);
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error($833559fe574b4225$var$p(163));
                }
                $833559fe574b4225$var$U || b.flags & 512 && $833559fe574b4225$var$Sj(b);
            } catch (r) {
                $833559fe574b4225$var$W(b, b.return, r);
            }
        }
        if (b === a) {
            $833559fe574b4225$var$V = null;
            break;
        }
        c = b.sibling;
        if (null !== c) {
            c.return = b.return;
            $833559fe574b4225$var$V = c;
            break;
        }
        $833559fe574b4225$var$V = b.return;
    }
}
function $833559fe574b4225$var$hk(a) {
    for(; null !== $833559fe574b4225$var$V;){
        var b = $833559fe574b4225$var$V;
        if (b === a) {
            $833559fe574b4225$var$V = null;
            break;
        }
        var c = b.sibling;
        if (null !== c) {
            c.return = b.return;
            $833559fe574b4225$var$V = c;
            break;
        }
        $833559fe574b4225$var$V = b.return;
    }
}
function $833559fe574b4225$var$kk(a) {
    for(; null !== $833559fe574b4225$var$V;){
        var b = $833559fe574b4225$var$V;
        try {
            switch(b.tag){
                case 0:
                case 11:
                case 15:
                    var c = b.return;
                    try {
                        $833559fe574b4225$var$Rj(4, b);
                    } catch (k) {
                        $833559fe574b4225$var$W(b, c, k);
                    }
                    break;
                case 1:
                    var d = b.stateNode;
                    if ("function" === typeof d.componentDidMount) {
                        var e = b.return;
                        try {
                            d.componentDidMount();
                        } catch (k) {
                            $833559fe574b4225$var$W(b, e, k);
                        }
                    }
                    var f = b.return;
                    try {
                        $833559fe574b4225$var$Sj(b);
                    } catch (k) {
                        $833559fe574b4225$var$W(b, f, k);
                    }
                    break;
                case 5:
                    var g = b.return;
                    try {
                        $833559fe574b4225$var$Sj(b);
                    } catch (k) {
                        $833559fe574b4225$var$W(b, g, k);
                    }
            }
        } catch (k) {
            $833559fe574b4225$var$W(b, b.return, k);
        }
        if (b === a) {
            $833559fe574b4225$var$V = null;
            break;
        }
        var h = b.sibling;
        if (null !== h) {
            h.return = b.return;
            $833559fe574b4225$var$V = h;
            break;
        }
        $833559fe574b4225$var$V = b.return;
    }
}
var $833559fe574b4225$var$mk = Math.ceil, $833559fe574b4225$var$nk = $833559fe574b4225$var$ua.ReactCurrentDispatcher, $833559fe574b4225$var$ok = $833559fe574b4225$var$ua.ReactCurrentOwner, $833559fe574b4225$var$pk = $833559fe574b4225$var$ua.ReactCurrentBatchConfig, $833559fe574b4225$var$K = 0, $833559fe574b4225$var$R = null, $833559fe574b4225$var$Y = null, $833559fe574b4225$var$Z = 0, $833559fe574b4225$var$gj = 0, $833559fe574b4225$var$fj = $833559fe574b4225$var$Uf(0), $833559fe574b4225$var$T = 0, $833559fe574b4225$var$qk = null, $833559fe574b4225$var$hh = 0, $833559fe574b4225$var$rk = 0, $833559fe574b4225$var$sk = 0, $833559fe574b4225$var$tk = null, $833559fe574b4225$var$uk = null, $833559fe574b4225$var$gk = 0, $833559fe574b4225$var$Hj = Infinity, $833559fe574b4225$var$vk = null, $833559fe574b4225$var$Pi = !1, $833559fe574b4225$var$Qi = null, $833559fe574b4225$var$Si = null, $833559fe574b4225$var$wk = !1, $833559fe574b4225$var$xk = null, $833559fe574b4225$var$yk = 0, $833559fe574b4225$var$zk = 0, $833559fe574b4225$var$Ak = null, $833559fe574b4225$var$Bk = -1, $833559fe574b4225$var$Ck = 0;
function $833559fe574b4225$var$L() {
    return 0 !== ($833559fe574b4225$var$K & 6) ? $833559fe574b4225$var$B() : -1 !== $833559fe574b4225$var$Bk ? $833559fe574b4225$var$Bk : $833559fe574b4225$var$Bk = $833559fe574b4225$var$B();
}
function $833559fe574b4225$var$lh(a) {
    if (0 === (a.mode & 1)) return 1;
    if (0 !== ($833559fe574b4225$var$K & 2) && 0 !== $833559fe574b4225$var$Z) return $833559fe574b4225$var$Z & -$833559fe574b4225$var$Z;
    if (null !== $833559fe574b4225$var$Kg.transition) return 0 === $833559fe574b4225$var$Ck && ($833559fe574b4225$var$Ck = $833559fe574b4225$var$yc()), $833559fe574b4225$var$Ck;
    a = $833559fe574b4225$var$C;
    if (0 !== a) return a;
    a = window.event;
    a = void 0 === a ? 16 : $833559fe574b4225$var$jd(a.type);
    return a;
}
function $833559fe574b4225$var$mh(a, b, c, d) {
    if (50 < $833559fe574b4225$var$zk) throw $833559fe574b4225$var$zk = 0, $833559fe574b4225$var$Ak = null, Error($833559fe574b4225$var$p(185));
    $833559fe574b4225$var$Ac(a, c, d);
    if (0 === ($833559fe574b4225$var$K & 2) || a !== $833559fe574b4225$var$R) a === $833559fe574b4225$var$R && (0 === ($833559fe574b4225$var$K & 2) && ($833559fe574b4225$var$rk |= c), 4 === $833559fe574b4225$var$T && $833559fe574b4225$var$Dk(a, $833559fe574b4225$var$Z)), $833559fe574b4225$var$Ek(a, d), 1 === c && 0 === $833559fe574b4225$var$K && 0 === (b.mode & 1) && ($833559fe574b4225$var$Hj = $833559fe574b4225$var$B() + 500, $833559fe574b4225$var$fg && $833559fe574b4225$var$jg());
}
function $833559fe574b4225$var$Ek(a, b) {
    var c = a.callbackNode;
    $833559fe574b4225$var$wc(a, b);
    var d = $833559fe574b4225$var$uc(a, a === $833559fe574b4225$var$R ? $833559fe574b4225$var$Z : 0);
    if (0 === d) null !== c && $833559fe574b4225$var$bc(c), a.callbackNode = null, a.callbackPriority = 0;
    else if (b = d & -d, a.callbackPriority !== b) {
        null != c && $833559fe574b4225$var$bc(c);
        if (1 === b) 0 === a.tag ? $833559fe574b4225$var$ig($833559fe574b4225$var$Fk.bind(null, a)) : $833559fe574b4225$var$hg($833559fe574b4225$var$Fk.bind(null, a)), $833559fe574b4225$var$Jf(function() {
            0 === ($833559fe574b4225$var$K & 6) && $833559fe574b4225$var$jg();
        }), c = null;
        else {
            switch($833559fe574b4225$var$Dc(d)){
                case 1:
                    c = $833559fe574b4225$var$fc;
                    break;
                case 4:
                    c = $833559fe574b4225$var$gc;
                    break;
                case 16:
                    c = $833559fe574b4225$var$hc;
                    break;
                case 536870912:
                    c = $833559fe574b4225$var$jc;
                    break;
                default:
                    c = $833559fe574b4225$var$hc;
            }
            c = $833559fe574b4225$var$Gk(c, $833559fe574b4225$var$Hk.bind(null, a));
        }
        a.callbackPriority = b;
        a.callbackNode = c;
    }
}
function $833559fe574b4225$var$Hk(a, b) {
    $833559fe574b4225$var$Bk = -1;
    $833559fe574b4225$var$Ck = 0;
    if (0 !== ($833559fe574b4225$var$K & 6)) throw Error($833559fe574b4225$var$p(327));
    var c = a.callbackNode;
    if ($833559fe574b4225$var$Ik() && a.callbackNode !== c) return null;
    var d = $833559fe574b4225$var$uc(a, a === $833559fe574b4225$var$R ? $833559fe574b4225$var$Z : 0);
    if (0 === d) return null;
    if (0 !== (d & 30) || 0 !== (d & a.expiredLanes) || b) b = $833559fe574b4225$var$Jk(a, d);
    else {
        b = d;
        var e = $833559fe574b4225$var$K;
        $833559fe574b4225$var$K |= 2;
        var f = $833559fe574b4225$var$Kk();
        if ($833559fe574b4225$var$R !== a || $833559fe574b4225$var$Z !== b) $833559fe574b4225$var$vk = null, $833559fe574b4225$var$Hj = $833559fe574b4225$var$B() + 500, $833559fe574b4225$var$Lk(a, b);
        for(;;)try {
            $833559fe574b4225$var$Mk();
            break;
        } catch (h) {
            $833559fe574b4225$var$Nk(a, h);
        }
        $833559fe574b4225$var$Qg();
        $833559fe574b4225$var$nk.current = f;
        $833559fe574b4225$var$K = e;
        null !== $833559fe574b4225$var$Y ? b = 0 : ($833559fe574b4225$var$R = null, $833559fe574b4225$var$Z = 0, b = $833559fe574b4225$var$T);
    }
    if (0 !== b) {
        2 === b && (e = $833559fe574b4225$var$xc(a), 0 !== e && (d = e, b = $833559fe574b4225$var$Ok(a, e)));
        if (1 === b) throw c = $833559fe574b4225$var$qk, $833559fe574b4225$var$Lk(a, 0), $833559fe574b4225$var$Dk(a, d), $833559fe574b4225$var$Ek(a, $833559fe574b4225$var$B()), c;
        if (6 === b) $833559fe574b4225$var$Dk(a, d);
        else {
            e = a.current.alternate;
            if (0 === (d & 30) && !$833559fe574b4225$var$Pk(e) && (b = $833559fe574b4225$var$Jk(a, d), 2 === b && (f = $833559fe574b4225$var$xc(a), 0 !== f && (d = f, b = $833559fe574b4225$var$Ok(a, f))), 1 === b)) throw c = $833559fe574b4225$var$qk, $833559fe574b4225$var$Lk(a, 0), $833559fe574b4225$var$Dk(a, d), $833559fe574b4225$var$Ek(a, $833559fe574b4225$var$B()), c;
            a.finishedWork = e;
            a.finishedLanes = d;
            switch(b){
                case 0:
                case 1:
                    throw Error($833559fe574b4225$var$p(345));
                case 2:
                    $833559fe574b4225$var$Qk(a, $833559fe574b4225$var$uk, $833559fe574b4225$var$vk);
                    break;
                case 3:
                    $833559fe574b4225$var$Dk(a, d);
                    if ((d & 130023424) === d && (b = $833559fe574b4225$var$gk + 500 - $833559fe574b4225$var$B(), 10 < b)) {
                        if (0 !== $833559fe574b4225$var$uc(a, 0)) break;
                        e = a.suspendedLanes;
                        if ((e & d) !== d) {
                            $833559fe574b4225$var$L();
                            a.pingedLanes |= a.suspendedLanes & e;
                            break;
                        }
                        a.timeoutHandle = $833559fe574b4225$var$Ff($833559fe574b4225$var$Qk.bind(null, a, $833559fe574b4225$var$uk, $833559fe574b4225$var$vk), b);
                        break;
                    }
                    $833559fe574b4225$var$Qk(a, $833559fe574b4225$var$uk, $833559fe574b4225$var$vk);
                    break;
                case 4:
                    $833559fe574b4225$var$Dk(a, d);
                    if ((d & 4194240) === d) break;
                    b = a.eventTimes;
                    for(e = -1; 0 < d;){
                        var g = 31 - $833559fe574b4225$var$oc(d);
                        f = 1 << g;
                        g = b[g];
                        g > e && (e = g);
                        d &= ~f;
                    }
                    d = e;
                    d = $833559fe574b4225$var$B() - d;
                    d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3E3 > d ? 3E3 : 4320 > d ? 4320 : 1960 * $833559fe574b4225$var$mk(d / 1960)) - d;
                    if (10 < d) {
                        a.timeoutHandle = $833559fe574b4225$var$Ff($833559fe574b4225$var$Qk.bind(null, a, $833559fe574b4225$var$uk, $833559fe574b4225$var$vk), d);
                        break;
                    }
                    $833559fe574b4225$var$Qk(a, $833559fe574b4225$var$uk, $833559fe574b4225$var$vk);
                    break;
                case 5:
                    $833559fe574b4225$var$Qk(a, $833559fe574b4225$var$uk, $833559fe574b4225$var$vk);
                    break;
                default:
                    throw Error($833559fe574b4225$var$p(329));
            }
        }
    }
    $833559fe574b4225$var$Ek(a, $833559fe574b4225$var$B());
    return a.callbackNode === c ? $833559fe574b4225$var$Hk.bind(null, a) : null;
}
function $833559fe574b4225$var$Ok(a, b) {
    var c = $833559fe574b4225$var$tk;
    a.current.memoizedState.isDehydrated && ($833559fe574b4225$var$Lk(a, b).flags |= 256);
    a = $833559fe574b4225$var$Jk(a, b);
    2 !== a && (b = $833559fe574b4225$var$uk, $833559fe574b4225$var$uk = c, null !== b && $833559fe574b4225$var$Gj(b));
    return a;
}
function $833559fe574b4225$var$Gj(a) {
    null === $833559fe574b4225$var$uk ? $833559fe574b4225$var$uk = a : $833559fe574b4225$var$uk.push.apply($833559fe574b4225$var$uk, a);
}
function $833559fe574b4225$var$Pk(a) {
    for(var b = a;;){
        if (b.flags & 16384) {
            var c = b.updateQueue;
            if (null !== c && (c = c.stores, null !== c)) for(var d = 0; d < c.length; d++){
                var e = c[d], f = e.getSnapshot;
                e = e.value;
                try {
                    if (!$833559fe574b4225$var$He(f(), e)) return !1;
                } catch (g) {
                    return !1;
                }
            }
        }
        c = b.child;
        if (b.subtreeFlags & 16384 && null !== c) c.return = b, b = c;
        else {
            if (b === a) break;
            for(; null === b.sibling;){
                if (null === b.return || b.return === a) return !0;
                b = b.return;
            }
            b.sibling.return = b.return;
            b = b.sibling;
        }
    }
    return !0;
}
function $833559fe574b4225$var$Dk(a, b) {
    b &= ~$833559fe574b4225$var$sk;
    b &= ~$833559fe574b4225$var$rk;
    a.suspendedLanes |= b;
    a.pingedLanes &= ~b;
    for(a = a.expirationTimes; 0 < b;){
        var c = 31 - $833559fe574b4225$var$oc(b), d = 1 << c;
        a[c] = -1;
        b &= ~d;
    }
}
function $833559fe574b4225$var$Fk(a) {
    if (0 !== ($833559fe574b4225$var$K & 6)) throw Error($833559fe574b4225$var$p(327));
    $833559fe574b4225$var$Ik();
    var b = $833559fe574b4225$var$uc(a, 0);
    if (0 === (b & 1)) return $833559fe574b4225$var$Ek(a, $833559fe574b4225$var$B()), null;
    var c = $833559fe574b4225$var$Jk(a, b);
    if (0 !== a.tag && 2 === c) {
        var d = $833559fe574b4225$var$xc(a);
        0 !== d && (b = d, c = $833559fe574b4225$var$Ok(a, d));
    }
    if (1 === c) throw c = $833559fe574b4225$var$qk, $833559fe574b4225$var$Lk(a, 0), $833559fe574b4225$var$Dk(a, b), $833559fe574b4225$var$Ek(a, $833559fe574b4225$var$B()), c;
    if (6 === c) throw Error($833559fe574b4225$var$p(345));
    a.finishedWork = a.current.alternate;
    a.finishedLanes = b;
    $833559fe574b4225$var$Qk(a, $833559fe574b4225$var$uk, $833559fe574b4225$var$vk);
    $833559fe574b4225$var$Ek(a, $833559fe574b4225$var$B());
    return null;
}
function $833559fe574b4225$var$Rk(a, b) {
    var c = $833559fe574b4225$var$K;
    $833559fe574b4225$var$K |= 1;
    try {
        return a(b);
    } finally{
        $833559fe574b4225$var$K = c, 0 === $833559fe574b4225$var$K && ($833559fe574b4225$var$Hj = $833559fe574b4225$var$B() + 500, $833559fe574b4225$var$fg && $833559fe574b4225$var$jg());
    }
}
function $833559fe574b4225$var$Sk(a) {
    null !== $833559fe574b4225$var$xk && 0 === $833559fe574b4225$var$xk.tag && 0 === ($833559fe574b4225$var$K & 6) && $833559fe574b4225$var$Ik();
    var b = $833559fe574b4225$var$K;
    $833559fe574b4225$var$K |= 1;
    var c = $833559fe574b4225$var$pk.transition, d = $833559fe574b4225$var$C;
    try {
        if ($833559fe574b4225$var$pk.transition = null, $833559fe574b4225$var$C = 1, a) return a();
    } finally{
        $833559fe574b4225$var$C = d, $833559fe574b4225$var$pk.transition = c, $833559fe574b4225$var$K = b, 0 === ($833559fe574b4225$var$K & 6) && $833559fe574b4225$var$jg();
    }
}
function $833559fe574b4225$var$Ij() {
    $833559fe574b4225$var$gj = $833559fe574b4225$var$fj.current;
    $833559fe574b4225$var$E($833559fe574b4225$var$fj);
}
function $833559fe574b4225$var$Lk(a, b) {
    a.finishedWork = null;
    a.finishedLanes = 0;
    var c = a.timeoutHandle;
    -1 !== c && (a.timeoutHandle = -1, $833559fe574b4225$var$Gf(c));
    if (null !== $833559fe574b4225$var$Y) for(c = $833559fe574b4225$var$Y.return; null !== c;){
        var d = c;
        $833559fe574b4225$var$wg(d);
        switch(d.tag){
            case 1:
                d = d.type.childContextTypes;
                null !== d && void 0 !== d && $833559fe574b4225$var$$f();
                break;
            case 3:
                $833559fe574b4225$var$Jh();
                $833559fe574b4225$var$E($833559fe574b4225$var$Wf);
                $833559fe574b4225$var$E($833559fe574b4225$var$H);
                $833559fe574b4225$var$Oh();
                break;
            case 5:
                $833559fe574b4225$var$Lh(d);
                break;
            case 4:
                $833559fe574b4225$var$Jh();
                break;
            case 13:
                $833559fe574b4225$var$E($833559fe574b4225$var$M);
                break;
            case 19:
                $833559fe574b4225$var$E($833559fe574b4225$var$M);
                break;
            case 10:
                $833559fe574b4225$var$Rg(d.type._context);
                break;
            case 22:
            case 23:
                $833559fe574b4225$var$Ij();
        }
        c = c.return;
    }
    $833559fe574b4225$var$R = a;
    $833559fe574b4225$var$Y = a = $833559fe574b4225$var$wh(a.current, null);
    $833559fe574b4225$var$Z = $833559fe574b4225$var$gj = b;
    $833559fe574b4225$var$T = 0;
    $833559fe574b4225$var$qk = null;
    $833559fe574b4225$var$sk = $833559fe574b4225$var$rk = $833559fe574b4225$var$hh = 0;
    $833559fe574b4225$var$uk = $833559fe574b4225$var$tk = null;
    if (null !== $833559fe574b4225$var$Wg) {
        for(b = 0; b < $833559fe574b4225$var$Wg.length; b++)if (c = $833559fe574b4225$var$Wg[b], d = c.interleaved, null !== d) {
            c.interleaved = null;
            var e = d.next, f = c.pending;
            if (null !== f) {
                var g = f.next;
                f.next = e;
                d.next = g;
            }
            c.pending = d;
        }
        $833559fe574b4225$var$Wg = null;
    }
    return a;
}
function $833559fe574b4225$var$Nk(a, b) {
    do {
        var c = $833559fe574b4225$var$Y;
        try {
            $833559fe574b4225$var$Qg();
            $833559fe574b4225$var$Ph.current = $833559fe574b4225$var$ai;
            if ($833559fe574b4225$var$Sh) {
                for(var d = $833559fe574b4225$var$N.memoizedState; null !== d;){
                    var e = d.queue;
                    null !== e && (e.pending = null);
                    d = d.next;
                }
                $833559fe574b4225$var$Sh = !1;
            }
            $833559fe574b4225$var$Rh = 0;
            $833559fe574b4225$var$P = $833559fe574b4225$var$O = $833559fe574b4225$var$N = null;
            $833559fe574b4225$var$Th = !1;
            $833559fe574b4225$var$Uh = 0;
            $833559fe574b4225$var$ok.current = null;
            if (null === c || null === c.return) {
                $833559fe574b4225$var$T = 1;
                $833559fe574b4225$var$qk = b;
                $833559fe574b4225$var$Y = null;
                break;
            }
            a: {
                var f = a, g = c.return, h = c, k = b;
                b = $833559fe574b4225$var$Z;
                h.flags |= 32768;
                if (null !== k && "object" === typeof k && "function" === typeof k.then) {
                    var l = k, m = h, q = m.tag;
                    if (0 === (m.mode & 1) && (0 === q || 11 === q || 15 === q)) {
                        var r = m.alternate;
                        r ? (m.updateQueue = r.updateQueue, m.memoizedState = r.memoizedState, m.lanes = r.lanes) : (m.updateQueue = null, m.memoizedState = null);
                    }
                    var y = $833559fe574b4225$var$Vi(g);
                    if (null !== y) {
                        y.flags &= -257;
                        $833559fe574b4225$var$Wi(y, g, h, f, b);
                        y.mode & 1 && $833559fe574b4225$var$Ti(f, l, b);
                        b = y;
                        k = l;
                        var n = b.updateQueue;
                        if (null === n) {
                            var t = new Set;
                            t.add(k);
                            b.updateQueue = t;
                        } else n.add(k);
                        break a;
                    } else {
                        if (0 === (b & 1)) {
                            $833559fe574b4225$var$Ti(f, l, b);
                            $833559fe574b4225$var$uj();
                            break a;
                        }
                        k = Error($833559fe574b4225$var$p(426));
                    }
                } else if ($833559fe574b4225$var$I && h.mode & 1) {
                    var J = $833559fe574b4225$var$Vi(g);
                    if (null !== J) {
                        0 === (J.flags & 65536) && (J.flags |= 256);
                        $833559fe574b4225$var$Wi(J, g, h, f, b);
                        $833559fe574b4225$var$Jg($833559fe574b4225$var$Ki(k, h));
                        break a;
                    }
                }
                f = k = $833559fe574b4225$var$Ki(k, h);
                4 !== $833559fe574b4225$var$T && ($833559fe574b4225$var$T = 2);
                null === $833559fe574b4225$var$tk ? $833559fe574b4225$var$tk = [
                    f
                ] : $833559fe574b4225$var$tk.push(f);
                f = g;
                do {
                    switch(f.tag){
                        case 3:
                            f.flags |= 65536;
                            b &= -b;
                            f.lanes |= b;
                            var x = $833559fe574b4225$var$Oi(f, k, b);
                            $833559fe574b4225$var$fh(f, x);
                            break a;
                        case 1:
                            h = k;
                            var w = f.type, u = f.stateNode;
                            if (0 === (f.flags & 128) && ("function" === typeof w.getDerivedStateFromError || null !== u && "function" === typeof u.componentDidCatch && (null === $833559fe574b4225$var$Si || !$833559fe574b4225$var$Si.has(u)))) {
                                f.flags |= 65536;
                                b &= -b;
                                f.lanes |= b;
                                var F = $833559fe574b4225$var$Ri(f, h, b);
                                $833559fe574b4225$var$fh(f, F);
                                break a;
                            }
                    }
                    f = f.return;
                }while (null !== f);
            }
            $833559fe574b4225$var$Tk(c);
        } catch (na) {
            b = na;
            $833559fe574b4225$var$Y === c && null !== c && ($833559fe574b4225$var$Y = c = c.return);
            continue;
        }
        break;
    }while (1);
}
function $833559fe574b4225$var$Kk() {
    var a = $833559fe574b4225$var$nk.current;
    $833559fe574b4225$var$nk.current = $833559fe574b4225$var$ai;
    return null === a ? $833559fe574b4225$var$ai : a;
}
function $833559fe574b4225$var$uj() {
    if (0 === $833559fe574b4225$var$T || 3 === $833559fe574b4225$var$T || 2 === $833559fe574b4225$var$T) $833559fe574b4225$var$T = 4;
    null === $833559fe574b4225$var$R || 0 === ($833559fe574b4225$var$hh & 268435455) && 0 === ($833559fe574b4225$var$rk & 268435455) || $833559fe574b4225$var$Dk($833559fe574b4225$var$R, $833559fe574b4225$var$Z);
}
function $833559fe574b4225$var$Jk(a, b) {
    var c = $833559fe574b4225$var$K;
    $833559fe574b4225$var$K |= 2;
    var d = $833559fe574b4225$var$Kk();
    if ($833559fe574b4225$var$R !== a || $833559fe574b4225$var$Z !== b) $833559fe574b4225$var$vk = null, $833559fe574b4225$var$Lk(a, b);
    for(;;)try {
        $833559fe574b4225$var$Uk();
        break;
    } catch (e) {
        $833559fe574b4225$var$Nk(a, e);
    }
    $833559fe574b4225$var$Qg();
    $833559fe574b4225$var$K = c;
    $833559fe574b4225$var$nk.current = d;
    if (null !== $833559fe574b4225$var$Y) throw Error($833559fe574b4225$var$p(261));
    $833559fe574b4225$var$R = null;
    $833559fe574b4225$var$Z = 0;
    return $833559fe574b4225$var$T;
}
function $833559fe574b4225$var$Uk() {
    for(; null !== $833559fe574b4225$var$Y;)$833559fe574b4225$var$Vk($833559fe574b4225$var$Y);
}
function $833559fe574b4225$var$Mk() {
    for(; null !== $833559fe574b4225$var$Y && !$833559fe574b4225$var$cc();)$833559fe574b4225$var$Vk($833559fe574b4225$var$Y);
}
function $833559fe574b4225$var$Vk(a) {
    var b = $833559fe574b4225$var$Wk(a.alternate, a, $833559fe574b4225$var$gj);
    a.memoizedProps = a.pendingProps;
    null === b ? $833559fe574b4225$var$Tk(a) : $833559fe574b4225$var$Y = b;
    $833559fe574b4225$var$ok.current = null;
}
function $833559fe574b4225$var$Tk(a) {
    var b = a;
    do {
        var c = b.alternate;
        a = b.return;
        if (0 === (b.flags & 32768)) {
            if (c = $833559fe574b4225$var$Fj(c, b, $833559fe574b4225$var$gj), null !== c) {
                $833559fe574b4225$var$Y = c;
                return;
            }
        } else {
            c = $833559fe574b4225$var$Jj(c, b);
            if (null !== c) {
                c.flags &= 32767;
                $833559fe574b4225$var$Y = c;
                return;
            }
            if (null !== a) a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null;
            else {
                $833559fe574b4225$var$T = 6;
                $833559fe574b4225$var$Y = null;
                return;
            }
        }
        b = b.sibling;
        if (null !== b) {
            $833559fe574b4225$var$Y = b;
            return;
        }
        $833559fe574b4225$var$Y = b = a;
    }while (null !== b);
    0 === $833559fe574b4225$var$T && ($833559fe574b4225$var$T = 5);
}
function $833559fe574b4225$var$Qk(a, b, c) {
    var d = $833559fe574b4225$var$C, e = $833559fe574b4225$var$pk.transition;
    try {
        $833559fe574b4225$var$pk.transition = null, $833559fe574b4225$var$C = 1, $833559fe574b4225$var$Xk(a, b, c, d);
    } finally{
        $833559fe574b4225$var$pk.transition = e, $833559fe574b4225$var$C = d;
    }
    return null;
}
function $833559fe574b4225$var$Xk(a, b, c, d) {
    do $833559fe574b4225$var$Ik();
    while (null !== $833559fe574b4225$var$xk);
    if (0 !== ($833559fe574b4225$var$K & 6)) throw Error($833559fe574b4225$var$p(327));
    c = a.finishedWork;
    var e = a.finishedLanes;
    if (null === c) return null;
    a.finishedWork = null;
    a.finishedLanes = 0;
    if (c === a.current) throw Error($833559fe574b4225$var$p(177));
    a.callbackNode = null;
    a.callbackPriority = 0;
    var f = c.lanes | c.childLanes;
    $833559fe574b4225$var$Bc(a, f);
    a === $833559fe574b4225$var$R && ($833559fe574b4225$var$Y = $833559fe574b4225$var$R = null, $833559fe574b4225$var$Z = 0);
    0 === (c.subtreeFlags & 2064) && 0 === (c.flags & 2064) || $833559fe574b4225$var$wk || ($833559fe574b4225$var$wk = !0, $833559fe574b4225$var$Gk($833559fe574b4225$var$hc, function() {
        $833559fe574b4225$var$Ik();
        return null;
    }));
    f = 0 !== (c.flags & 15990);
    if (0 !== (c.subtreeFlags & 15990) || f) {
        f = $833559fe574b4225$var$pk.transition;
        $833559fe574b4225$var$pk.transition = null;
        var g = $833559fe574b4225$var$C;
        $833559fe574b4225$var$C = 1;
        var h = $833559fe574b4225$var$K;
        $833559fe574b4225$var$K |= 4;
        $833559fe574b4225$var$ok.current = null;
        $833559fe574b4225$var$Pj(a, c);
        $833559fe574b4225$var$ek(c, a);
        $833559fe574b4225$var$Oe($833559fe574b4225$var$Df);
        $833559fe574b4225$var$dd = !!$833559fe574b4225$var$Cf;
        $833559fe574b4225$var$Df = $833559fe574b4225$var$Cf = null;
        a.current = c;
        $833559fe574b4225$var$ik(c, a, e);
        $833559fe574b4225$var$dc();
        $833559fe574b4225$var$K = h;
        $833559fe574b4225$var$C = g;
        $833559fe574b4225$var$pk.transition = f;
    } else a.current = c;
    $833559fe574b4225$var$wk && ($833559fe574b4225$var$wk = !1, $833559fe574b4225$var$xk = a, $833559fe574b4225$var$yk = e);
    f = a.pendingLanes;
    0 === f && ($833559fe574b4225$var$Si = null);
    $833559fe574b4225$var$mc(c.stateNode, d);
    $833559fe574b4225$var$Ek(a, $833559fe574b4225$var$B());
    if (null !== b) for(d = a.onRecoverableError, c = 0; c < b.length; c++)e = b[c], d(e.value, {
        componentStack: e.stack,
        digest: e.digest
    });
    if ($833559fe574b4225$var$Pi) throw $833559fe574b4225$var$Pi = !1, a = $833559fe574b4225$var$Qi, $833559fe574b4225$var$Qi = null, a;
    0 !== ($833559fe574b4225$var$yk & 1) && 0 !== a.tag && $833559fe574b4225$var$Ik();
    f = a.pendingLanes;
    0 !== (f & 1) ? a === $833559fe574b4225$var$Ak ? $833559fe574b4225$var$zk++ : ($833559fe574b4225$var$zk = 0, $833559fe574b4225$var$Ak = a) : $833559fe574b4225$var$zk = 0;
    $833559fe574b4225$var$jg();
    return null;
}
function $833559fe574b4225$var$Ik() {
    if (null !== $833559fe574b4225$var$xk) {
        var a = $833559fe574b4225$var$Dc($833559fe574b4225$var$yk), b = $833559fe574b4225$var$pk.transition, c = $833559fe574b4225$var$C;
        try {
            $833559fe574b4225$var$pk.transition = null;
            $833559fe574b4225$var$C = 16 > a ? 16 : a;
            if (null === $833559fe574b4225$var$xk) var d = !1;
            else {
                a = $833559fe574b4225$var$xk;
                $833559fe574b4225$var$xk = null;
                $833559fe574b4225$var$yk = 0;
                if (0 !== ($833559fe574b4225$var$K & 6)) throw Error($833559fe574b4225$var$p(331));
                var e = $833559fe574b4225$var$K;
                $833559fe574b4225$var$K |= 4;
                for($833559fe574b4225$var$V = a.current; null !== $833559fe574b4225$var$V;){
                    var f = $833559fe574b4225$var$V, g = f.child;
                    if (0 !== ($833559fe574b4225$var$V.flags & 16)) {
                        var h = f.deletions;
                        if (null !== h) {
                            for(var k = 0; k < h.length; k++){
                                var l = h[k];
                                for($833559fe574b4225$var$V = l; null !== $833559fe574b4225$var$V;){
                                    var m = $833559fe574b4225$var$V;
                                    switch(m.tag){
                                        case 0:
                                        case 11:
                                        case 15:
                                            $833559fe574b4225$var$Qj(8, m, f);
                                    }
                                    var q = m.child;
                                    if (null !== q) q.return = m, $833559fe574b4225$var$V = q;
                                    else for(; null !== $833559fe574b4225$var$V;){
                                        m = $833559fe574b4225$var$V;
                                        var r = m.sibling, y = m.return;
                                        $833559fe574b4225$var$Tj(m);
                                        if (m === l) {
                                            $833559fe574b4225$var$V = null;
                                            break;
                                        }
                                        if (null !== r) {
                                            r.return = y;
                                            $833559fe574b4225$var$V = r;
                                            break;
                                        }
                                        $833559fe574b4225$var$V = y;
                                    }
                                }
                            }
                            var n = f.alternate;
                            if (null !== n) {
                                var t = n.child;
                                if (null !== t) {
                                    n.child = null;
                                    do {
                                        var J = t.sibling;
                                        t.sibling = null;
                                        t = J;
                                    }while (null !== t);
                                }
                            }
                            $833559fe574b4225$var$V = f;
                        }
                    }
                    if (0 !== (f.subtreeFlags & 2064) && null !== g) g.return = f, $833559fe574b4225$var$V = g;
                    else b: for(; null !== $833559fe574b4225$var$V;){
                        f = $833559fe574b4225$var$V;
                        if (0 !== (f.flags & 2048)) switch(f.tag){
                            case 0:
                            case 11:
                            case 15:
                                $833559fe574b4225$var$Qj(9, f, f.return);
                        }
                        var x = f.sibling;
                        if (null !== x) {
                            x.return = f.return;
                            $833559fe574b4225$var$V = x;
                            break b;
                        }
                        $833559fe574b4225$var$V = f.return;
                    }
                }
                var w = a.current;
                for($833559fe574b4225$var$V = w; null !== $833559fe574b4225$var$V;){
                    g = $833559fe574b4225$var$V;
                    var u = g.child;
                    if (0 !== (g.subtreeFlags & 2064) && null !== u) u.return = g, $833559fe574b4225$var$V = u;
                    else b: for(g = w; null !== $833559fe574b4225$var$V;){
                        h = $833559fe574b4225$var$V;
                        if (0 !== (h.flags & 2048)) try {
                            switch(h.tag){
                                case 0:
                                case 11:
                                case 15:
                                    $833559fe574b4225$var$Rj(9, h);
                            }
                        } catch (na) {
                            $833559fe574b4225$var$W(h, h.return, na);
                        }
                        if (h === g) {
                            $833559fe574b4225$var$V = null;
                            break b;
                        }
                        var F = h.sibling;
                        if (null !== F) {
                            F.return = h.return;
                            $833559fe574b4225$var$V = F;
                            break b;
                        }
                        $833559fe574b4225$var$V = h.return;
                    }
                }
                $833559fe574b4225$var$K = e;
                $833559fe574b4225$var$jg();
                if ($833559fe574b4225$var$lc && "function" === typeof $833559fe574b4225$var$lc.onPostCommitFiberRoot) try {
                    $833559fe574b4225$var$lc.onPostCommitFiberRoot($833559fe574b4225$var$kc, a);
                } catch (na) {}
                d = !0;
            }
            return d;
        } finally{
            $833559fe574b4225$var$C = c, $833559fe574b4225$var$pk.transition = b;
        }
    }
    return !1;
}
function $833559fe574b4225$var$Yk(a, b, c) {
    b = $833559fe574b4225$var$Ki(c, b);
    b = $833559fe574b4225$var$Oi(a, b, 1);
    a = $833559fe574b4225$var$dh(a, b, 1);
    b = $833559fe574b4225$var$L();
    null !== a && ($833559fe574b4225$var$Ac(a, 1, b), $833559fe574b4225$var$Ek(a, b));
}
function $833559fe574b4225$var$W(a, b, c) {
    if (3 === a.tag) $833559fe574b4225$var$Yk(a, a, c);
    else for(; null !== b;){
        if (3 === b.tag) {
            $833559fe574b4225$var$Yk(b, a, c);
            break;
        } else if (1 === b.tag) {
            var d = b.stateNode;
            if ("function" === typeof b.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === $833559fe574b4225$var$Si || !$833559fe574b4225$var$Si.has(d))) {
                a = $833559fe574b4225$var$Ki(c, a);
                a = $833559fe574b4225$var$Ri(b, a, 1);
                b = $833559fe574b4225$var$dh(b, a, 1);
                a = $833559fe574b4225$var$L();
                null !== b && ($833559fe574b4225$var$Ac(b, 1, a), $833559fe574b4225$var$Ek(b, a));
                break;
            }
        }
        b = b.return;
    }
}
function $833559fe574b4225$var$Ui(a, b, c) {
    var d = a.pingCache;
    null !== d && d.delete(b);
    b = $833559fe574b4225$var$L();
    a.pingedLanes |= a.suspendedLanes & c;
    $833559fe574b4225$var$R === a && ($833559fe574b4225$var$Z & c) === c && (4 === $833559fe574b4225$var$T || 3 === $833559fe574b4225$var$T && ($833559fe574b4225$var$Z & 130023424) === $833559fe574b4225$var$Z && 500 > $833559fe574b4225$var$B() - $833559fe574b4225$var$gk ? $833559fe574b4225$var$Lk(a, 0) : $833559fe574b4225$var$sk |= c);
    $833559fe574b4225$var$Ek(a, b);
}
function $833559fe574b4225$var$Zk(a, b) {
    0 === b && (0 === (a.mode & 1) ? b = 1 : (b = $833559fe574b4225$var$sc, $833559fe574b4225$var$sc <<= 1, 0 === ($833559fe574b4225$var$sc & 130023424) && ($833559fe574b4225$var$sc = 4194304)));
    var c = $833559fe574b4225$var$L();
    a = $833559fe574b4225$var$Zg(a, b);
    null !== a && ($833559fe574b4225$var$Ac(a, b, c), $833559fe574b4225$var$Ek(a, c));
}
function $833559fe574b4225$var$vj(a) {
    var b = a.memoizedState, c = 0;
    null !== b && (c = b.retryLane);
    $833559fe574b4225$var$Zk(a, c);
}
function $833559fe574b4225$var$ck(a, b) {
    var c = 0;
    switch(a.tag){
        case 13:
            var d = a.stateNode;
            var e = a.memoizedState;
            null !== e && (c = e.retryLane);
            break;
        case 19:
            d = a.stateNode;
            break;
        default:
            throw Error($833559fe574b4225$var$p(314));
    }
    null !== d && d.delete(b);
    $833559fe574b4225$var$Zk(a, c);
}
var $833559fe574b4225$var$Wk;
$833559fe574b4225$var$Wk = function(a, b, c) {
    if (null !== a) {
        if (a.memoizedProps !== b.pendingProps || $833559fe574b4225$var$Wf.current) $833559fe574b4225$var$Ug = !0;
        else {
            if (0 === (a.lanes & c) && 0 === (b.flags & 128)) return $833559fe574b4225$var$Ug = !1, $833559fe574b4225$var$zj(a, b, c);
            $833559fe574b4225$var$Ug = 0 !== (a.flags & 131072) ? !0 : !1;
        }
    } else $833559fe574b4225$var$Ug = !1, $833559fe574b4225$var$I && 0 !== (b.flags & 1048576) && $833559fe574b4225$var$ug(b, $833559fe574b4225$var$ng, b.index);
    b.lanes = 0;
    switch(b.tag){
        case 2:
            var d = b.type;
            $833559fe574b4225$var$jj(a, b);
            a = b.pendingProps;
            var e = $833559fe574b4225$var$Yf(b, $833559fe574b4225$var$H.current);
            $833559fe574b4225$var$Tg(b, c);
            e = $833559fe574b4225$var$Xh(null, b, d, a, e, c);
            var f = $833559fe574b4225$var$bi();
            b.flags |= 1;
            "object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof ? (b.tag = 1, b.memoizedState = null, b.updateQueue = null, $833559fe574b4225$var$Zf(d) ? (f = !0, $833559fe574b4225$var$cg(b)) : f = !1, b.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null, $833559fe574b4225$var$ah(b), e.updater = $833559fe574b4225$var$nh, b.stateNode = e, e._reactInternals = b, $833559fe574b4225$var$rh(b, d, a, c), b = $833559fe574b4225$var$kj(null, b, d, !0, f, c)) : (b.tag = 0, $833559fe574b4225$var$I && f && $833559fe574b4225$var$vg(b), $833559fe574b4225$var$Yi(null, b, e, c), b = b.child);
            return b;
        case 16:
            d = b.elementType;
            a: {
                $833559fe574b4225$var$jj(a, b);
                a = b.pendingProps;
                e = d._init;
                d = e(d._payload);
                b.type = d;
                e = b.tag = $833559fe574b4225$var$$k(d);
                a = $833559fe574b4225$var$Lg(d, a);
                switch(e){
                    case 0:
                        b = $833559fe574b4225$var$dj(null, b, d, a, c);
                        break a;
                    case 1:
                        b = $833559fe574b4225$var$ij(null, b, d, a, c);
                        break a;
                    case 11:
                        b = $833559fe574b4225$var$Zi(null, b, d, a, c);
                        break a;
                    case 14:
                        b = $833559fe574b4225$var$aj(null, b, d, $833559fe574b4225$var$Lg(d.type, a), c);
                        break a;
                }
                throw Error($833559fe574b4225$var$p(306, d, ""));
            }
            return b;
        case 0:
            return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : $833559fe574b4225$var$Lg(d, e), $833559fe574b4225$var$dj(a, b, d, e, c);
        case 1:
            return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : $833559fe574b4225$var$Lg(d, e), $833559fe574b4225$var$ij(a, b, d, e, c);
        case 3:
            a: {
                $833559fe574b4225$var$lj(b);
                if (null === a) throw Error($833559fe574b4225$var$p(387));
                d = b.pendingProps;
                f = b.memoizedState;
                e = f.element;
                $833559fe574b4225$var$bh(a, b);
                $833559fe574b4225$var$gh(b, d, null, c);
                var g = b.memoizedState;
                d = g.element;
                if (f.isDehydrated) {
                    if (f = {
                        element: d,
                        isDehydrated: !1,
                        cache: g.cache,
                        pendingSuspenseBoundaries: g.pendingSuspenseBoundaries,
                        transitions: g.transitions
                    }, b.updateQueue.baseState = f, b.memoizedState = f, b.flags & 256) {
                        e = $833559fe574b4225$var$Ki(Error($833559fe574b4225$var$p(423)), b);
                        b = $833559fe574b4225$var$mj(a, b, d, c, e);
                        break a;
                    } else if (d !== e) {
                        e = $833559fe574b4225$var$Ki(Error($833559fe574b4225$var$p(424)), b);
                        b = $833559fe574b4225$var$mj(a, b, d, c, e);
                        break a;
                    } else for($833559fe574b4225$var$yg = $833559fe574b4225$var$Lf(b.stateNode.containerInfo.firstChild), $833559fe574b4225$var$xg = b, $833559fe574b4225$var$I = !0, $833559fe574b4225$var$zg = null, c = $833559fe574b4225$var$Ch(b, null, d, c), b.child = c; c;)c.flags = c.flags & -3 | 4096, c = c.sibling;
                } else {
                    $833559fe574b4225$var$Ig();
                    if (d === e) {
                        b = $833559fe574b4225$var$$i(a, b, c);
                        break a;
                    }
                    $833559fe574b4225$var$Yi(a, b, d, c);
                }
                b = b.child;
            }
            return b;
        case 5:
            return $833559fe574b4225$var$Kh(b), null === a && $833559fe574b4225$var$Eg(b), d = b.type, e = b.pendingProps, f = null !== a ? a.memoizedProps : null, g = e.children, $833559fe574b4225$var$Ef(d, e) ? g = null : null !== f && $833559fe574b4225$var$Ef(d, f) && (b.flags |= 32), $833559fe574b4225$var$hj(a, b), $833559fe574b4225$var$Yi(a, b, g, c), b.child;
        case 6:
            return null === a && $833559fe574b4225$var$Eg(b), null;
        case 13:
            return $833559fe574b4225$var$pj(a, b, c);
        case 4:
            return $833559fe574b4225$var$Ih(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = $833559fe574b4225$var$Bh(b, null, d, c) : $833559fe574b4225$var$Yi(a, b, d, c), b.child;
        case 11:
            return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : $833559fe574b4225$var$Lg(d, e), $833559fe574b4225$var$Zi(a, b, d, e, c);
        case 7:
            return $833559fe574b4225$var$Yi(a, b, b.pendingProps, c), b.child;
        case 8:
            return $833559fe574b4225$var$Yi(a, b, b.pendingProps.children, c), b.child;
        case 12:
            return $833559fe574b4225$var$Yi(a, b, b.pendingProps.children, c), b.child;
        case 10:
            a: {
                d = b.type._context;
                e = b.pendingProps;
                f = b.memoizedProps;
                g = e.value;
                $833559fe574b4225$var$G($833559fe574b4225$var$Mg, d._currentValue);
                d._currentValue = g;
                if (null !== f) {
                    if ($833559fe574b4225$var$He(f.value, g)) {
                        if (f.children === e.children && !$833559fe574b4225$var$Wf.current) {
                            b = $833559fe574b4225$var$$i(a, b, c);
                            break a;
                        }
                    } else for(f = b.child, null !== f && (f.return = b); null !== f;){
                        var h = f.dependencies;
                        if (null !== h) {
                            g = f.child;
                            for(var k = h.firstContext; null !== k;){
                                if (k.context === d) {
                                    if (1 === f.tag) {
                                        k = $833559fe574b4225$var$ch(-1, c & -c);
                                        k.tag = 2;
                                        var l = f.updateQueue;
                                        if (null !== l) {
                                            l = l.shared;
                                            var m = l.pending;
                                            null === m ? k.next = k : (k.next = m.next, m.next = k);
                                            l.pending = k;
                                        }
                                    }
                                    f.lanes |= c;
                                    k = f.alternate;
                                    null !== k && (k.lanes |= c);
                                    $833559fe574b4225$var$Sg(f.return, c, b);
                                    h.lanes |= c;
                                    break;
                                }
                                k = k.next;
                            }
                        } else if (10 === f.tag) g = f.type === b.type ? null : f.child;
                        else if (18 === f.tag) {
                            g = f.return;
                            if (null === g) throw Error($833559fe574b4225$var$p(341));
                            g.lanes |= c;
                            h = g.alternate;
                            null !== h && (h.lanes |= c);
                            $833559fe574b4225$var$Sg(g, c, b);
                            g = f.sibling;
                        } else g = f.child;
                        if (null !== g) g.return = f;
                        else for(g = f; null !== g;){
                            if (g === b) {
                                g = null;
                                break;
                            }
                            f = g.sibling;
                            if (null !== f) {
                                f.return = g.return;
                                g = f;
                                break;
                            }
                            g = g.return;
                        }
                        f = g;
                    }
                }
                $833559fe574b4225$var$Yi(a, b, e.children, c);
                b = b.child;
            }
            return b;
        case 9:
            return e = b.type, d = b.pendingProps.children, $833559fe574b4225$var$Tg(b, c), e = $833559fe574b4225$var$Vg(e), d = d(e), b.flags |= 1, $833559fe574b4225$var$Yi(a, b, d, c), b.child;
        case 14:
            return d = b.type, e = $833559fe574b4225$var$Lg(d, b.pendingProps), e = $833559fe574b4225$var$Lg(d.type, e), $833559fe574b4225$var$aj(a, b, d, e, c);
        case 15:
            return $833559fe574b4225$var$cj(a, b, b.type, b.pendingProps, c);
        case 17:
            return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : $833559fe574b4225$var$Lg(d, e), $833559fe574b4225$var$jj(a, b), b.tag = 1, $833559fe574b4225$var$Zf(d) ? (a = !0, $833559fe574b4225$var$cg(b)) : a = !1, $833559fe574b4225$var$Tg(b, c), $833559fe574b4225$var$ph(b, d, e), $833559fe574b4225$var$rh(b, d, e, c), $833559fe574b4225$var$kj(null, b, d, !0, a, c);
        case 19:
            return $833559fe574b4225$var$yj(a, b, c);
        case 22:
            return $833559fe574b4225$var$ej(a, b, c);
    }
    throw Error($833559fe574b4225$var$p(156, b.tag));
};
function $833559fe574b4225$var$Gk(a, b) {
    return $833559fe574b4225$var$ac(a, b);
}
function $833559fe574b4225$var$al(a, b, c, d) {
    this.tag = a;
    this.key = c;
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
    this.index = 0;
    this.ref = null;
    this.pendingProps = b;
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
    this.mode = d;
    this.subtreeFlags = this.flags = 0;
    this.deletions = null;
    this.childLanes = this.lanes = 0;
    this.alternate = null;
}
function $833559fe574b4225$var$Bg(a, b, c, d) {
    return new $833559fe574b4225$var$al(a, b, c, d);
}
function $833559fe574b4225$var$bj(a) {
    a = a.prototype;
    return !(!a || !a.isReactComponent);
}
function $833559fe574b4225$var$$k(a) {
    if ("function" === typeof a) return $833559fe574b4225$var$bj(a) ? 1 : 0;
    if (void 0 !== a && null !== a) {
        a = a.$$typeof;
        if (a === $833559fe574b4225$var$Da) return 11;
        if (a === $833559fe574b4225$var$Ga) return 14;
    }
    return 2;
}
function $833559fe574b4225$var$wh(a, b) {
    var c = a.alternate;
    null === c ? (c = $833559fe574b4225$var$Bg(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.type = a.type, c.flags = 0, c.subtreeFlags = 0, c.deletions = null);
    c.flags = a.flags & 14680064;
    c.childLanes = a.childLanes;
    c.lanes = a.lanes;
    c.child = a.child;
    c.memoizedProps = a.memoizedProps;
    c.memoizedState = a.memoizedState;
    c.updateQueue = a.updateQueue;
    b = a.dependencies;
    c.dependencies = null === b ? null : {
        lanes: b.lanes,
        firstContext: b.firstContext
    };
    c.sibling = a.sibling;
    c.index = a.index;
    c.ref = a.ref;
    return c;
}
function $833559fe574b4225$var$yh(a, b, c, d, e, f) {
    var g = 2;
    d = a;
    if ("function" === typeof a) $833559fe574b4225$var$bj(a) && (g = 1);
    else if ("string" === typeof a) g = 5;
    else a: switch(a){
        case $833559fe574b4225$var$ya:
            return $833559fe574b4225$var$Ah(c.children, e, f, b);
        case $833559fe574b4225$var$za:
            g = 8;
            e |= 8;
            break;
        case $833559fe574b4225$var$Aa:
            return a = $833559fe574b4225$var$Bg(12, c, b, e | 2), a.elementType = $833559fe574b4225$var$Aa, a.lanes = f, a;
        case $833559fe574b4225$var$Ea:
            return a = $833559fe574b4225$var$Bg(13, c, b, e), a.elementType = $833559fe574b4225$var$Ea, a.lanes = f, a;
        case $833559fe574b4225$var$Fa:
            return a = $833559fe574b4225$var$Bg(19, c, b, e), a.elementType = $833559fe574b4225$var$Fa, a.lanes = f, a;
        case $833559fe574b4225$var$Ia:
            return $833559fe574b4225$var$qj(c, e, f, b);
        default:
            if ("object" === typeof a && null !== a) switch(a.$$typeof){
                case $833559fe574b4225$var$Ba:
                    g = 10;
                    break a;
                case $833559fe574b4225$var$Ca:
                    g = 9;
                    break a;
                case $833559fe574b4225$var$Da:
                    g = 11;
                    break a;
                case $833559fe574b4225$var$Ga:
                    g = 14;
                    break a;
                case $833559fe574b4225$var$Ha:
                    g = 16;
                    d = null;
                    break a;
            }
            throw Error($833559fe574b4225$var$p(130, null == a ? a : typeof a, ""));
    }
    b = $833559fe574b4225$var$Bg(g, c, b, e);
    b.elementType = a;
    b.type = d;
    b.lanes = f;
    return b;
}
function $833559fe574b4225$var$Ah(a, b, c, d) {
    a = $833559fe574b4225$var$Bg(7, a, d, b);
    a.lanes = c;
    return a;
}
function $833559fe574b4225$var$qj(a, b, c, d) {
    a = $833559fe574b4225$var$Bg(22, a, d, b);
    a.elementType = $833559fe574b4225$var$Ia;
    a.lanes = c;
    a.stateNode = {
        isHidden: !1
    };
    return a;
}
function $833559fe574b4225$var$xh(a, b, c) {
    a = $833559fe574b4225$var$Bg(6, a, null, b);
    a.lanes = c;
    return a;
}
function $833559fe574b4225$var$zh(a, b, c) {
    b = $833559fe574b4225$var$Bg(4, null !== a.children ? a.children : [], a.key, b);
    b.lanes = c;
    b.stateNode = {
        containerInfo: a.containerInfo,
        pendingChildren: null,
        implementation: a.implementation
    };
    return b;
}
function $833559fe574b4225$var$bl(a, b, c, d, e) {
    this.tag = b;
    this.containerInfo = a;
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
    this.timeoutHandle = -1;
    this.callbackNode = this.pendingContext = this.context = null;
    this.callbackPriority = 0;
    this.eventTimes = $833559fe574b4225$var$zc(0);
    this.expirationTimes = $833559fe574b4225$var$zc(-1);
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
    this.entanglements = $833559fe574b4225$var$zc(0);
    this.identifierPrefix = d;
    this.onRecoverableError = e;
    this.mutableSourceEagerHydrationData = null;
}
function $833559fe574b4225$var$cl(a, b, c, d, e, f, g, h, k) {
    a = new $833559fe574b4225$var$bl(a, b, c, h, k);
    1 === b ? (b = 1, !0 === f && (b |= 8)) : b = 0;
    f = $833559fe574b4225$var$Bg(3, null, null, b);
    a.current = f;
    f.stateNode = a;
    f.memoizedState = {
        element: d,
        isDehydrated: c,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    };
    $833559fe574b4225$var$ah(f);
    return a;
}
function $833559fe574b4225$var$dl(a, b, c) {
    var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
    return {
        $$typeof: $833559fe574b4225$var$wa,
        key: null == d ? null : "" + d,
        children: a,
        containerInfo: b,
        implementation: c
    };
}
function $833559fe574b4225$var$el(a) {
    if (!a) return $833559fe574b4225$var$Vf;
    a = a._reactInternals;
    a: {
        if ($833559fe574b4225$var$Vb(a) !== a || 1 !== a.tag) throw Error($833559fe574b4225$var$p(170));
        var b = a;
        do {
            switch(b.tag){
                case 3:
                    b = b.stateNode.context;
                    break a;
                case 1:
                    if ($833559fe574b4225$var$Zf(b.type)) {
                        b = b.stateNode.__reactInternalMemoizedMergedChildContext;
                        break a;
                    }
            }
            b = b.return;
        }while (null !== b);
        throw Error($833559fe574b4225$var$p(171));
    }
    if (1 === a.tag) {
        var c = a.type;
        if ($833559fe574b4225$var$Zf(c)) return $833559fe574b4225$var$bg(a, c, b);
    }
    return b;
}
function $833559fe574b4225$var$fl(a, b, c, d, e, f, g, h, k) {
    a = $833559fe574b4225$var$cl(c, d, !0, a, e, f, g, h, k);
    a.context = $833559fe574b4225$var$el(null);
    c = a.current;
    d = $833559fe574b4225$var$L();
    e = $833559fe574b4225$var$lh(c);
    f = $833559fe574b4225$var$ch(d, e);
    f.callback = void 0 !== b && null !== b ? b : null;
    $833559fe574b4225$var$dh(c, f, e);
    a.current.lanes = e;
    $833559fe574b4225$var$Ac(a, e, d);
    $833559fe574b4225$var$Ek(a, d);
    return a;
}
function $833559fe574b4225$var$gl(a, b, c, d) {
    var e = b.current, f = $833559fe574b4225$var$L(), g = $833559fe574b4225$var$lh(e);
    c = $833559fe574b4225$var$el(c);
    null === b.context ? b.context = c : b.pendingContext = c;
    b = $833559fe574b4225$var$ch(f, g);
    b.payload = {
        element: a
    };
    d = void 0 === d ? null : d;
    null !== d && (b.callback = d);
    a = $833559fe574b4225$var$dh(e, b, g);
    null !== a && ($833559fe574b4225$var$mh(a, e, g, f), $833559fe574b4225$var$eh(a, e, g));
    return g;
}
function $833559fe574b4225$var$hl(a) {
    a = a.current;
    if (!a.child) return null;
    switch(a.child.tag){
        case 5:
            return a.child.stateNode;
        default:
            return a.child.stateNode;
    }
}
function $833559fe574b4225$var$il(a, b) {
    a = a.memoizedState;
    if (null !== a && null !== a.dehydrated) {
        var c = a.retryLane;
        a.retryLane = 0 !== c && c < b ? c : b;
    }
}
function $833559fe574b4225$var$jl(a, b) {
    $833559fe574b4225$var$il(a, b);
    (a = a.alternate) && $833559fe574b4225$var$il(a, b);
}
function $833559fe574b4225$var$kl() {
    return null;
}
var $833559fe574b4225$var$ll = "function" === typeof reportError ? reportError : function(a) {
    console.error(a);
};
function $833559fe574b4225$var$ml(a) {
    this._internalRoot = a;
}
$833559fe574b4225$var$nl.prototype.render = $833559fe574b4225$var$ml.prototype.render = function(a) {
    var b = this._internalRoot;
    if (null === b) throw Error($833559fe574b4225$var$p(409));
    $833559fe574b4225$var$gl(a, b, null, null);
};
$833559fe574b4225$var$nl.prototype.unmount = $833559fe574b4225$var$ml.prototype.unmount = function() {
    var a = this._internalRoot;
    if (null !== a) {
        this._internalRoot = null;
        var b = a.containerInfo;
        $833559fe574b4225$var$Sk(function() {
            $833559fe574b4225$var$gl(null, a, null, null);
        });
        b[$833559fe574b4225$var$uf] = null;
    }
};
function $833559fe574b4225$var$nl(a) {
    this._internalRoot = a;
}
$833559fe574b4225$var$nl.prototype.unstable_scheduleHydration = function(a) {
    if (a) {
        var b = $833559fe574b4225$var$Hc();
        a = {
            blockedOn: null,
            target: a,
            priority: b
        };
        for(var c = 0; c < $833559fe574b4225$var$Qc.length && 0 !== b && b < $833559fe574b4225$var$Qc[c].priority; c++);
        $833559fe574b4225$var$Qc.splice(c, 0, a);
        0 === c && $833559fe574b4225$var$Vc(a);
    }
};
function $833559fe574b4225$var$ol(a) {
    return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType);
}
function $833559fe574b4225$var$pl(a) {
    return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
}
function $833559fe574b4225$var$ql() {}
function $833559fe574b4225$var$rl(a, b, c, d, e) {
    if (e) {
        if ("function" === typeof d) {
            var f = d;
            d = function() {
                var a = $833559fe574b4225$var$hl(g);
                f.call(a);
            };
        }
        var g = $833559fe574b4225$var$fl(b, d, a, 0, null, !1, !1, "", $833559fe574b4225$var$ql);
        a._reactRootContainer = g;
        a[$833559fe574b4225$var$uf] = g.current;
        $833559fe574b4225$var$sf(8 === a.nodeType ? a.parentNode : a);
        $833559fe574b4225$var$Sk();
        return g;
    }
    for(; e = a.lastChild;)a.removeChild(e);
    if ("function" === typeof d) {
        var h = d;
        d = function() {
            var a = $833559fe574b4225$var$hl(k);
            h.call(a);
        };
    }
    var k = $833559fe574b4225$var$cl(a, 0, !1, null, null, !1, !1, "", $833559fe574b4225$var$ql);
    a._reactRootContainer = k;
    a[$833559fe574b4225$var$uf] = k.current;
    $833559fe574b4225$var$sf(8 === a.nodeType ? a.parentNode : a);
    $833559fe574b4225$var$Sk(function() {
        $833559fe574b4225$var$gl(b, k, c, d);
    });
    return k;
}
function $833559fe574b4225$var$sl(a, b, c, d, e) {
    var f = c._reactRootContainer;
    if (f) {
        var g = f;
        if ("function" === typeof e) {
            var h = e;
            e = function() {
                var a = $833559fe574b4225$var$hl(g);
                h.call(a);
            };
        }
        $833559fe574b4225$var$gl(b, g, a, e);
    } else g = $833559fe574b4225$var$rl(c, b, a, e, d);
    return $833559fe574b4225$var$hl(g);
}
$833559fe574b4225$var$Ec = function(a) {
    switch(a.tag){
        case 3:
            var b = a.stateNode;
            if (b.current.memoizedState.isDehydrated) {
                var c = $833559fe574b4225$var$tc(b.pendingLanes);
                0 !== c && ($833559fe574b4225$var$Cc(b, c | 1), $833559fe574b4225$var$Ek(b, $833559fe574b4225$var$B()), 0 === ($833559fe574b4225$var$K & 6) && ($833559fe574b4225$var$Hj = $833559fe574b4225$var$B() + 500, $833559fe574b4225$var$jg()));
            }
            break;
        case 13:
            $833559fe574b4225$var$Sk(function() {
                var b = $833559fe574b4225$var$Zg(a, 1);
                if (null !== b) {
                    var c = $833559fe574b4225$var$L();
                    $833559fe574b4225$var$mh(b, a, 1, c);
                }
            }), $833559fe574b4225$var$jl(a, 1);
    }
};
$833559fe574b4225$var$Fc = function(a) {
    if (13 === a.tag) {
        var b = $833559fe574b4225$var$Zg(a, 134217728);
        if (null !== b) {
            var c = $833559fe574b4225$var$L();
            $833559fe574b4225$var$mh(b, a, 134217728, c);
        }
        $833559fe574b4225$var$jl(a, 134217728);
    }
};
$833559fe574b4225$var$Gc = function(a) {
    if (13 === a.tag) {
        var b = $833559fe574b4225$var$lh(a), c = $833559fe574b4225$var$Zg(a, b);
        if (null !== c) {
            var d = $833559fe574b4225$var$L();
            $833559fe574b4225$var$mh(c, a, b, d);
        }
        $833559fe574b4225$var$jl(a, b);
    }
};
$833559fe574b4225$var$Hc = function() {
    return $833559fe574b4225$var$C;
};
$833559fe574b4225$var$Ic = function(a, b) {
    var c = $833559fe574b4225$var$C;
    try {
        return $833559fe574b4225$var$C = a, b();
    } finally{
        $833559fe574b4225$var$C = c;
    }
};
$833559fe574b4225$var$yb = function(a, b, c) {
    switch(b){
        case "input":
            $833559fe574b4225$var$bb(a, c);
            b = c.name;
            if ("radio" === c.type && null != b) {
                for(c = a; c.parentNode;)c = c.parentNode;
                c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');
                for(b = 0; b < c.length; b++){
                    var d = c[b];
                    if (d !== a && d.form === a.form) {
                        var e = $833559fe574b4225$var$Db(d);
                        if (!e) throw Error($833559fe574b4225$var$p(90));
                        $833559fe574b4225$var$Wa(d);
                        $833559fe574b4225$var$bb(d, e);
                    }
                }
            }
            break;
        case "textarea":
            $833559fe574b4225$var$ib(a, c);
            break;
        case "select":
            b = c.value, null != b && $833559fe574b4225$var$fb(a, !!c.multiple, b, !1);
    }
};
$833559fe574b4225$var$Gb = $833559fe574b4225$var$Rk;
$833559fe574b4225$var$Hb = $833559fe574b4225$var$Sk;
var $833559fe574b4225$var$tl = {
    usingClientEntryPoint: !1,
    Events: [
        $833559fe574b4225$var$Cb,
        $833559fe574b4225$var$ue,
        $833559fe574b4225$var$Db,
        $833559fe574b4225$var$Eb,
        $833559fe574b4225$var$Fb,
        $833559fe574b4225$var$Rk
    ]
}, $833559fe574b4225$var$ul = {
    findFiberByHostInstance: $833559fe574b4225$var$Wc,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom"
};
var $833559fe574b4225$var$vl = {
    bundleType: $833559fe574b4225$var$ul.bundleType,
    version: $833559fe574b4225$var$ul.version,
    rendererPackageName: $833559fe574b4225$var$ul.rendererPackageName,
    rendererConfig: $833559fe574b4225$var$ul.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: $833559fe574b4225$var$ua.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(a) {
        a = $833559fe574b4225$var$Zb(a);
        return null === a ? null : a.stateNode;
    },
    findFiberByHostInstance: $833559fe574b4225$var$ul.findFiberByHostInstance || $833559fe574b4225$var$kl,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
};
if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
    var $833559fe574b4225$var$wl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!$833559fe574b4225$var$wl.isDisabled && $833559fe574b4225$var$wl.supportsFiber) try {
        $833559fe574b4225$var$kc = $833559fe574b4225$var$wl.inject($833559fe574b4225$var$vl), $833559fe574b4225$var$lc = $833559fe574b4225$var$wl;
    } catch (a) {}
}
$833559fe574b4225$export$ae55be85d98224ed = $833559fe574b4225$var$tl;
$833559fe574b4225$export$d39a5bbd09211389 = function(a, b) {
    var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
    if (!$833559fe574b4225$var$ol(b)) throw Error($833559fe574b4225$var$p(200));
    return $833559fe574b4225$var$dl(a, b, null, c);
};
$833559fe574b4225$export$882461b6382ed46c = function(a, b) {
    if (!$833559fe574b4225$var$ol(a)) throw Error($833559fe574b4225$var$p(299));
    var c = !1, d = "", e = $833559fe574b4225$var$ll;
    null !== b && void 0 !== b && (!0 === b.unstable_strictMode && (c = !0), void 0 !== b.identifierPrefix && (d = b.identifierPrefix), void 0 !== b.onRecoverableError && (e = b.onRecoverableError));
    b = $833559fe574b4225$var$cl(a, 1, !1, null, null, c, !1, d, e);
    a[$833559fe574b4225$var$uf] = b.current;
    $833559fe574b4225$var$sf(8 === a.nodeType ? a.parentNode : a);
    return new $833559fe574b4225$var$ml(b);
};
$833559fe574b4225$export$466bfc07425424d5 = function(a) {
    if (null == a) return null;
    if (1 === a.nodeType) return a;
    var b = a._reactInternals;
    if (void 0 === b) {
        if ("function" === typeof a.render) throw Error($833559fe574b4225$var$p(188));
        a = Object.keys(a).join(",");
        throw Error($833559fe574b4225$var$p(268, a));
    }
    a = $833559fe574b4225$var$Zb(b);
    a = null === a ? null : a.stateNode;
    return a;
};
$833559fe574b4225$export$cd75ccfd720a3cd4 = function(a) {
    return $833559fe574b4225$var$Sk(a);
};
$833559fe574b4225$export$fa8d919ba61d84db = function(a, b, c) {
    if (!$833559fe574b4225$var$pl(b)) throw Error($833559fe574b4225$var$p(200));
    return $833559fe574b4225$var$sl(null, a, b, !0, c);
};
$833559fe574b4225$export$757ceba2d55c277e = function(a, b, c) {
    if (!$833559fe574b4225$var$ol(a)) throw Error($833559fe574b4225$var$p(405));
    var d = null != c && c.hydratedSources || null, e = !1, f = "", g = $833559fe574b4225$var$ll;
    null !== c && void 0 !== c && (!0 === c.unstable_strictMode && (e = !0), void 0 !== c.identifierPrefix && (f = c.identifierPrefix), void 0 !== c.onRecoverableError && (g = c.onRecoverableError));
    b = $833559fe574b4225$var$fl(b, null, a, 1, null != c ? c : null, e, !1, f, g);
    a[$833559fe574b4225$var$uf] = b.current;
    $833559fe574b4225$var$sf(a);
    if (d) for(a = 0; a < d.length; a++)c = d[a], e = c._getVersion, e = e(c._source), null == b.mutableSourceEagerHydrationData ? b.mutableSourceEagerHydrationData = [
        c,
        e
    ] : b.mutableSourceEagerHydrationData.push(c, e);
    return new $833559fe574b4225$var$nl(b);
};
$833559fe574b4225$export$b3890eb0ae9dca99 = function(a, b, c) {
    if (!$833559fe574b4225$var$pl(b)) throw Error($833559fe574b4225$var$p(200));
    return $833559fe574b4225$var$sl(null, a, b, !1, c);
};
$833559fe574b4225$export$502457920280e6be = function(a) {
    if (!$833559fe574b4225$var$pl(a)) throw Error($833559fe574b4225$var$p(40));
    return a._reactRootContainer ? ($833559fe574b4225$var$Sk(function() {
        $833559fe574b4225$var$sl(null, null, a, !1, function() {
            a._reactRootContainer = null;
            a[$833559fe574b4225$var$uf] = null;
        });
    }), !0) : !1;
};
$833559fe574b4225$export$c78a37762a8d58e1 = $833559fe574b4225$var$Rk;
$833559fe574b4225$export$dc54d992c10e8a18 = function(a, b, c, d) {
    if (!$833559fe574b4225$var$pl(c)) throw Error($833559fe574b4225$var$p(200));
    if (null == a || void 0 === a._reactInternals) throw Error($833559fe574b4225$var$p(38));
    return $833559fe574b4225$var$sl(a, b, c, !1, d);
};
$833559fe574b4225$export$83d89fbfd8236492 = "18.2.0-next-9e3b772b8-20220608";

});
parcelRegister("fw68E", function(module, exports) {
"use strict";

module.exports = (parcelRequire("d2ro6"));

});
parcelRegister("d2ro6", function(module, exports) {

$parcel$export(module.exports, "unstable_now", () => $97e0b4ea877737f9$export$c4744153514ff05d, (v) => $97e0b4ea877737f9$export$c4744153514ff05d = v);
$parcel$export(module.exports, "unstable_IdlePriority", () => $97e0b4ea877737f9$export$3e506c1ccc9cc1a7, (v) => $97e0b4ea877737f9$export$3e506c1ccc9cc1a7 = v);
$parcel$export(module.exports, "unstable_ImmediatePriority", () => $97e0b4ea877737f9$export$e26fe2ed2fa76875, (v) => $97e0b4ea877737f9$export$e26fe2ed2fa76875 = v);
$parcel$export(module.exports, "unstable_LowPriority", () => $97e0b4ea877737f9$export$502329bbf4b505b1, (v) => $97e0b4ea877737f9$export$502329bbf4b505b1 = v);
$parcel$export(module.exports, "unstable_NormalPriority", () => $97e0b4ea877737f9$export$6e3807111c4874c4, (v) => $97e0b4ea877737f9$export$6e3807111c4874c4 = v);
$parcel$export(module.exports, "unstable_Profiling", () => $97e0b4ea877737f9$export$c27134553091fb3a, (v) => $97e0b4ea877737f9$export$c27134553091fb3a = v);
$parcel$export(module.exports, "unstable_UserBlockingPriority", () => $97e0b4ea877737f9$export$33ee1acdc04fd2a2, (v) => $97e0b4ea877737f9$export$33ee1acdc04fd2a2 = v);
$parcel$export(module.exports, "unstable_cancelCallback", () => $97e0b4ea877737f9$export$b00a404bbd5edef2, (v) => $97e0b4ea877737f9$export$b00a404bbd5edef2 = v);
$parcel$export(module.exports, "unstable_continueExecution", () => $97e0b4ea877737f9$export$8352ce38b91d0c62, (v) => $97e0b4ea877737f9$export$8352ce38b91d0c62 = v);
$parcel$export(module.exports, "unstable_forceFrameRate", () => $97e0b4ea877737f9$export$d66a1c1c77bd778b, (v) => $97e0b4ea877737f9$export$d66a1c1c77bd778b = v);
$parcel$export(module.exports, "unstable_getCurrentPriorityLevel", () => $97e0b4ea877737f9$export$d3dfb8e4810cb555, (v) => $97e0b4ea877737f9$export$d3dfb8e4810cb555 = v);
$parcel$export(module.exports, "unstable_getFirstCallbackNode", () => $97e0b4ea877737f9$export$839f9183b0465a69, (v) => $97e0b4ea877737f9$export$839f9183b0465a69 = v);
$parcel$export(module.exports, "unstable_next", () => $97e0b4ea877737f9$export$72fdf0e06517287b, (v) => $97e0b4ea877737f9$export$72fdf0e06517287b = v);
$parcel$export(module.exports, "unstable_pauseExecution", () => $97e0b4ea877737f9$export$4b844e58a3e414b4, (v) => $97e0b4ea877737f9$export$4b844e58a3e414b4 = v);
$parcel$export(module.exports, "unstable_requestPaint", () => $97e0b4ea877737f9$export$816d2913ae6b83b1, (v) => $97e0b4ea877737f9$export$816d2913ae6b83b1 = v);
$parcel$export(module.exports, "unstable_runWithPriority", () => $97e0b4ea877737f9$export$61bcfe829111a1d0, (v) => $97e0b4ea877737f9$export$61bcfe829111a1d0 = v);
$parcel$export(module.exports, "unstable_scheduleCallback", () => $97e0b4ea877737f9$export$7ee8c9beb337bc3f, (v) => $97e0b4ea877737f9$export$7ee8c9beb337bc3f = v);
$parcel$export(module.exports, "unstable_shouldYield", () => $97e0b4ea877737f9$export$b5836b71941fa3ed, (v) => $97e0b4ea877737f9$export$b5836b71941fa3ed = v);
$parcel$export(module.exports, "unstable_wrapCallback", () => $97e0b4ea877737f9$export$cf845f2c119da08a, (v) => $97e0b4ea877737f9$export$cf845f2c119da08a = v);
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $97e0b4ea877737f9$export$c4744153514ff05d;
var $97e0b4ea877737f9$export$3e506c1ccc9cc1a7;
var $97e0b4ea877737f9$export$e26fe2ed2fa76875;
var $97e0b4ea877737f9$export$502329bbf4b505b1;
var $97e0b4ea877737f9$export$6e3807111c4874c4;
var $97e0b4ea877737f9$export$c27134553091fb3a;
var $97e0b4ea877737f9$export$33ee1acdc04fd2a2;
var $97e0b4ea877737f9$export$b00a404bbd5edef2;
var $97e0b4ea877737f9$export$8352ce38b91d0c62;
var $97e0b4ea877737f9$export$d66a1c1c77bd778b;
var $97e0b4ea877737f9$export$d3dfb8e4810cb555;
var $97e0b4ea877737f9$export$839f9183b0465a69;
var $97e0b4ea877737f9$export$72fdf0e06517287b;
var $97e0b4ea877737f9$export$4b844e58a3e414b4;
var $97e0b4ea877737f9$export$816d2913ae6b83b1;
var $97e0b4ea877737f9$export$61bcfe829111a1d0;
var $97e0b4ea877737f9$export$7ee8c9beb337bc3f;
var $97e0b4ea877737f9$export$b5836b71941fa3ed;
var $97e0b4ea877737f9$export$cf845f2c119da08a;
"use strict";
function $97e0b4ea877737f9$var$f(a, b) {
    var c = a.length;
    a.push(b);
    a: for(; 0 < c;){
        var d = c - 1 >>> 1, e = a[d];
        if (0 < $97e0b4ea877737f9$var$g(e, b)) a[d] = b, a[c] = e, c = d;
        else break a;
    }
}
function $97e0b4ea877737f9$var$h(a) {
    return 0 === a.length ? null : a[0];
}
function $97e0b4ea877737f9$var$k(a) {
    if (0 === a.length) return null;
    var b = a[0], c = a.pop();
    if (c !== b) {
        a[0] = c;
        a: for(var d = 0, e = a.length, w = e >>> 1; d < w;){
            var m = 2 * (d + 1) - 1, C = a[m], n = m + 1, x = a[n];
            if (0 > $97e0b4ea877737f9$var$g(C, c)) n < e && 0 > $97e0b4ea877737f9$var$g(x, C) ? (a[d] = x, a[n] = c, d = n) : (a[d] = C, a[m] = c, d = m);
            else if (n < e && 0 > $97e0b4ea877737f9$var$g(x, c)) a[d] = x, a[n] = c, d = n;
            else break a;
        }
    }
    return b;
}
function $97e0b4ea877737f9$var$g(a, b) {
    var c = a.sortIndex - b.sortIndex;
    return 0 !== c ? c : a.id - b.id;
}
if ("object" === typeof performance && "function" === typeof performance.now) {
    var $97e0b4ea877737f9$var$l = performance;
    $97e0b4ea877737f9$export$c4744153514ff05d = function() {
        return $97e0b4ea877737f9$var$l.now();
    };
} else {
    var $97e0b4ea877737f9$var$p = Date, $97e0b4ea877737f9$var$q = $97e0b4ea877737f9$var$p.now();
    $97e0b4ea877737f9$export$c4744153514ff05d = function() {
        return $97e0b4ea877737f9$var$p.now() - $97e0b4ea877737f9$var$q;
    };
}
var $97e0b4ea877737f9$var$r = [], $97e0b4ea877737f9$var$t = [], $97e0b4ea877737f9$var$u = 1, $97e0b4ea877737f9$var$v = null, $97e0b4ea877737f9$var$y = 3, $97e0b4ea877737f9$var$z = !1, $97e0b4ea877737f9$var$A = !1, $97e0b4ea877737f9$var$B = !1, $97e0b4ea877737f9$var$D = "function" === typeof setTimeout ? setTimeout : null, $97e0b4ea877737f9$var$E = "function" === typeof clearTimeout ? clearTimeout : null, $97e0b4ea877737f9$var$F = "undefined" !== typeof setImmediate ? setImmediate : null;
"undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
function $97e0b4ea877737f9$var$G(a) {
    for(var b = $97e0b4ea877737f9$var$h($97e0b4ea877737f9$var$t); null !== b;){
        if (null === b.callback) $97e0b4ea877737f9$var$k($97e0b4ea877737f9$var$t);
        else if (b.startTime <= a) $97e0b4ea877737f9$var$k($97e0b4ea877737f9$var$t), b.sortIndex = b.expirationTime, $97e0b4ea877737f9$var$f($97e0b4ea877737f9$var$r, b);
        else break;
        b = $97e0b4ea877737f9$var$h($97e0b4ea877737f9$var$t);
    }
}
function $97e0b4ea877737f9$var$H(a) {
    $97e0b4ea877737f9$var$B = !1;
    $97e0b4ea877737f9$var$G(a);
    if (!$97e0b4ea877737f9$var$A) {
        if (null !== $97e0b4ea877737f9$var$h($97e0b4ea877737f9$var$r)) $97e0b4ea877737f9$var$A = !0, $97e0b4ea877737f9$var$I($97e0b4ea877737f9$var$J);
        else {
            var b = $97e0b4ea877737f9$var$h($97e0b4ea877737f9$var$t);
            null !== b && $97e0b4ea877737f9$var$K($97e0b4ea877737f9$var$H, b.startTime - a);
        }
    }
}
function $97e0b4ea877737f9$var$J(a, b) {
    $97e0b4ea877737f9$var$A = !1;
    $97e0b4ea877737f9$var$B && ($97e0b4ea877737f9$var$B = !1, $97e0b4ea877737f9$var$E($97e0b4ea877737f9$var$L), $97e0b4ea877737f9$var$L = -1);
    $97e0b4ea877737f9$var$z = !0;
    var c = $97e0b4ea877737f9$var$y;
    try {
        $97e0b4ea877737f9$var$G(b);
        for($97e0b4ea877737f9$var$v = $97e0b4ea877737f9$var$h($97e0b4ea877737f9$var$r); null !== $97e0b4ea877737f9$var$v && (!($97e0b4ea877737f9$var$v.expirationTime > b) || a && !$97e0b4ea877737f9$var$M());){
            var d = $97e0b4ea877737f9$var$v.callback;
            if ("function" === typeof d) {
                $97e0b4ea877737f9$var$v.callback = null;
                $97e0b4ea877737f9$var$y = $97e0b4ea877737f9$var$v.priorityLevel;
                var e = d($97e0b4ea877737f9$var$v.expirationTime <= b);
                b = $97e0b4ea877737f9$export$c4744153514ff05d();
                "function" === typeof e ? $97e0b4ea877737f9$var$v.callback = e : $97e0b4ea877737f9$var$v === $97e0b4ea877737f9$var$h($97e0b4ea877737f9$var$r) && $97e0b4ea877737f9$var$k($97e0b4ea877737f9$var$r);
                $97e0b4ea877737f9$var$G(b);
            } else $97e0b4ea877737f9$var$k($97e0b4ea877737f9$var$r);
            $97e0b4ea877737f9$var$v = $97e0b4ea877737f9$var$h($97e0b4ea877737f9$var$r);
        }
        if (null !== $97e0b4ea877737f9$var$v) var w = !0;
        else {
            var m = $97e0b4ea877737f9$var$h($97e0b4ea877737f9$var$t);
            null !== m && $97e0b4ea877737f9$var$K($97e0b4ea877737f9$var$H, m.startTime - b);
            w = !1;
        }
        return w;
    } finally{
        $97e0b4ea877737f9$var$v = null, $97e0b4ea877737f9$var$y = c, $97e0b4ea877737f9$var$z = !1;
    }
}
var $97e0b4ea877737f9$var$N = !1, $97e0b4ea877737f9$var$O = null, $97e0b4ea877737f9$var$L = -1, $97e0b4ea877737f9$var$P = 5, $97e0b4ea877737f9$var$Q = -1;
function $97e0b4ea877737f9$var$M() {
    return $97e0b4ea877737f9$export$c4744153514ff05d() - $97e0b4ea877737f9$var$Q < $97e0b4ea877737f9$var$P ? !1 : !0;
}
function $97e0b4ea877737f9$var$R() {
    if (null !== $97e0b4ea877737f9$var$O) {
        var a = $97e0b4ea877737f9$export$c4744153514ff05d();
        $97e0b4ea877737f9$var$Q = a;
        var b = !0;
        try {
            b = $97e0b4ea877737f9$var$O(!0, a);
        } finally{
            b ? $97e0b4ea877737f9$var$S() : ($97e0b4ea877737f9$var$N = !1, $97e0b4ea877737f9$var$O = null);
        }
    } else $97e0b4ea877737f9$var$N = !1;
}
var $97e0b4ea877737f9$var$S;
if ("function" === typeof $97e0b4ea877737f9$var$F) $97e0b4ea877737f9$var$S = function() {
    $97e0b4ea877737f9$var$F($97e0b4ea877737f9$var$R);
};
else if ("undefined" !== typeof MessageChannel) {
    var $97e0b4ea877737f9$var$T = new MessageChannel, $97e0b4ea877737f9$var$U = $97e0b4ea877737f9$var$T.port2;
    $97e0b4ea877737f9$var$T.port1.onmessage = $97e0b4ea877737f9$var$R;
    $97e0b4ea877737f9$var$S = function() {
        $97e0b4ea877737f9$var$U.postMessage(null);
    };
} else $97e0b4ea877737f9$var$S = function() {
    $97e0b4ea877737f9$var$D($97e0b4ea877737f9$var$R, 0);
};
function $97e0b4ea877737f9$var$I(a) {
    $97e0b4ea877737f9$var$O = a;
    $97e0b4ea877737f9$var$N || ($97e0b4ea877737f9$var$N = !0, $97e0b4ea877737f9$var$S());
}
function $97e0b4ea877737f9$var$K(a, b) {
    $97e0b4ea877737f9$var$L = $97e0b4ea877737f9$var$D(function() {
        a($97e0b4ea877737f9$export$c4744153514ff05d());
    }, b);
}
$97e0b4ea877737f9$export$3e506c1ccc9cc1a7 = 5;
$97e0b4ea877737f9$export$e26fe2ed2fa76875 = 1;
$97e0b4ea877737f9$export$502329bbf4b505b1 = 4;
$97e0b4ea877737f9$export$6e3807111c4874c4 = 3;
$97e0b4ea877737f9$export$c27134553091fb3a = null;
$97e0b4ea877737f9$export$33ee1acdc04fd2a2 = 2;
$97e0b4ea877737f9$export$b00a404bbd5edef2 = function(a) {
    a.callback = null;
};
$97e0b4ea877737f9$export$8352ce38b91d0c62 = function() {
    $97e0b4ea877737f9$var$A || $97e0b4ea877737f9$var$z || ($97e0b4ea877737f9$var$A = !0, $97e0b4ea877737f9$var$I($97e0b4ea877737f9$var$J));
};
$97e0b4ea877737f9$export$d66a1c1c77bd778b = function(a) {
    0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : $97e0b4ea877737f9$var$P = 0 < a ? Math.floor(1E3 / a) : 5;
};
$97e0b4ea877737f9$export$d3dfb8e4810cb555 = function() {
    return $97e0b4ea877737f9$var$y;
};
$97e0b4ea877737f9$export$839f9183b0465a69 = function() {
    return $97e0b4ea877737f9$var$h($97e0b4ea877737f9$var$r);
};
$97e0b4ea877737f9$export$72fdf0e06517287b = function(a) {
    switch($97e0b4ea877737f9$var$y){
        case 1:
        case 2:
        case 3:
            var b = 3;
            break;
        default:
            b = $97e0b4ea877737f9$var$y;
    }
    var c = $97e0b4ea877737f9$var$y;
    $97e0b4ea877737f9$var$y = b;
    try {
        return a();
    } finally{
        $97e0b4ea877737f9$var$y = c;
    }
};
$97e0b4ea877737f9$export$4b844e58a3e414b4 = function() {};
$97e0b4ea877737f9$export$816d2913ae6b83b1 = function() {};
$97e0b4ea877737f9$export$61bcfe829111a1d0 = function(a, b) {
    switch(a){
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            a = 3;
    }
    var c = $97e0b4ea877737f9$var$y;
    $97e0b4ea877737f9$var$y = a;
    try {
        return b();
    } finally{
        $97e0b4ea877737f9$var$y = c;
    }
};
$97e0b4ea877737f9$export$7ee8c9beb337bc3f = function(a, b, c) {
    var d = $97e0b4ea877737f9$export$c4744153514ff05d();
    "object" === typeof c && null !== c ? (c = c.delay, c = "number" === typeof c && 0 < c ? d + c : d) : c = d;
    switch(a){
        case 1:
            var e = -1;
            break;
        case 2:
            e = 250;
            break;
        case 5:
            e = 1073741823;
            break;
        case 4:
            e = 1E4;
            break;
        default:
            e = 5E3;
    }
    e = c + e;
    a = {
        id: $97e0b4ea877737f9$var$u++,
        callback: b,
        priorityLevel: a,
        startTime: c,
        expirationTime: e,
        sortIndex: -1
    };
    c > d ? (a.sortIndex = c, $97e0b4ea877737f9$var$f($97e0b4ea877737f9$var$t, a), null === $97e0b4ea877737f9$var$h($97e0b4ea877737f9$var$r) && a === $97e0b4ea877737f9$var$h($97e0b4ea877737f9$var$t) && ($97e0b4ea877737f9$var$B ? ($97e0b4ea877737f9$var$E($97e0b4ea877737f9$var$L), $97e0b4ea877737f9$var$L = -1) : $97e0b4ea877737f9$var$B = !0, $97e0b4ea877737f9$var$K($97e0b4ea877737f9$var$H, c - d))) : (a.sortIndex = e, $97e0b4ea877737f9$var$f($97e0b4ea877737f9$var$r, a), $97e0b4ea877737f9$var$A || $97e0b4ea877737f9$var$z || ($97e0b4ea877737f9$var$A = !0, $97e0b4ea877737f9$var$I($97e0b4ea877737f9$var$J)));
    return a;
};
$97e0b4ea877737f9$export$b5836b71941fa3ed = $97e0b4ea877737f9$var$M;
$97e0b4ea877737f9$export$cf845f2c119da08a = function(a) {
    var b = $97e0b4ea877737f9$var$y;
    return function() {
        var c = $97e0b4ea877737f9$var$y;
        $97e0b4ea877737f9$var$y = b;
        try {
            return a.apply(this, arguments);
        } finally{
            $97e0b4ea877737f9$var$y = c;
        }
    };
};

});



parcelRegister("aSxGG", function(module, exports) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";

var $gR6sg = parcelRequire("gR6sg");
function $7eb91429e284f8f2$var$emptyFunction() {}
function $7eb91429e284f8f2$var$emptyFunctionWithReset() {}
$7eb91429e284f8f2$var$emptyFunctionWithReset.resetWarningCache = $7eb91429e284f8f2$var$emptyFunction;
module.exports = function() {
    function shim(props, propName, componentName, location, propFullName, secret) {
        if (secret === $gR6sg) // It is still safe when called from React.
        return;
        var err = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
        err.name = "Invariant Violation";
        throw err;
    }
    shim.isRequired = shim;
    function getShim() {
        return shim;
    }
    // Important!
    // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
    var ReactPropTypes = {
        array: shim,
        bigint: shim,
        bool: shim,
        func: shim,
        number: shim,
        object: shim,
        string: shim,
        symbol: shim,
        any: shim,
        arrayOf: getShim,
        element: shim,
        elementType: shim,
        instanceOf: getShim,
        node: shim,
        objectOf: getShim,
        oneOf: getShim,
        oneOfType: getShim,
        shape: getShim,
        exact: getShim,
        checkPropTypes: $7eb91429e284f8f2$var$emptyFunctionWithReset,
        resetWarningCache: $7eb91429e284f8f2$var$emptyFunction
    };
    ReactPropTypes.PropTypes = ReactPropTypes;
    return ReactPropTypes;
};

});
parcelRegister("gR6sg", function(module, exports) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
var $c4569a61786c8538$var$ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
module.exports = $c4569a61786c8538$var$ReactPropTypesSecret;

});


var $17b288f07ec57b56$exports = {};
"use strict";

$17b288f07ec57b56$exports = (parcelRequire("4WnG3"));


var $fef8548889890d4d$export$882461b6382ed46c;
var $fef8548889890d4d$export$757ceba2d55c277e;
"use strict";
var $4723f549251dd88b$exports = {};
"use strict";
function $4723f549251dd88b$var$checkDCE() {
    /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */ if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") return;
    try {
        // Verify that the code above has been dead code eliminated (DCE'd).
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($4723f549251dd88b$var$checkDCE);
    } catch (err) {
        // DevTools shouldn't crash React, no matter what.
        // We should still report in case we break this code.
        console.error(err);
    }
}
// DCE check should happen before ReactDOM bundle executes so that
// DevTools can report bad minification during injection.
$4723f549251dd88b$var$checkDCE();

$4723f549251dd88b$exports = (parcelRequire("bgpZC"));


var $fef8548889890d4d$var$i;
$fef8548889890d4d$export$882461b6382ed46c = $4723f549251dd88b$exports.createRoot;
$fef8548889890d4d$export$757ceba2d55c277e = $4723f549251dd88b$exports.hydrateRoot;




var $d4J5n = parcelRequire("d4J5n");


var $d4J5n = parcelRequire("d4J5n");
var $2cf4efeb0ce83047$exports = {};
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $2cf4efeb0ce83047$var$ReactIs, $2cf4efeb0ce83047$var$throwOnDirectAccess;

// By explicitly using `prop-types` you are opting into new production behavior.
// http://fb.me/prop-types-in-prod
$2cf4efeb0ce83047$exports = (parcelRequire("aSxGG"))();


var $4f96bb9b3141308a$exports = {};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ /* global define */ (function() {
    "use strict";
    var hasOwn = {}.hasOwnProperty;
    function classNames() {
        var classes = "";
        for(var i = 0; i < arguments.length; i++){
            var arg = arguments[i];
            if (arg) classes = appendClass(classes, parseValue(arg));
        }
        return classes;
    }
    function parseValue(arg) {
        if (typeof arg === "string" || typeof arg === "number") return arg;
        if (typeof arg !== "object") return "";
        if (Array.isArray(arg)) return classNames.apply(null, arg);
        if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) return arg.toString();
        var classes = "";
        for(var key in arg)if (hasOwn.call(arg, key) && arg[key]) classes = appendClass(classes, key);
        return classes;
    }
    function appendClass(value, newClass) {
        if (!newClass) return value;
        if (value) return value + " " + newClass;
        return value + newClass;
    }
    if (0, $4f96bb9b3141308a$exports) {
        classNames.default = classNames;
        $4f96bb9b3141308a$exports = classNames;
    } else if (typeof define === "function" && typeof define.amd === "object" && define.amd) // register as 'classnames', consistent with npm package name
    define("classnames", [], function() {
        return classNames;
    });
    else window.classNames = classNames;
})();



var $d4J5n = parcelRequire("d4J5n");

var $d4J5n = parcelRequire("d4J5n");

const $94324ba0fffd0f98$var$_excluded = [
    "as",
    "disabled"
];
function $94324ba0fffd0f98$var$_objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function $94324ba0fffd0f98$export$72369ab2cc99204b(href) {
    return !href || href.trim() === "#";
}
function $94324ba0fffd0f98$export$a0ee72f2c720a5c3({ tagName: tagName, disabled: disabled, href: href, target: target, rel: rel, role: role, onClick: onClick, tabIndex: tabIndex = 0, type: type }) {
    if (!tagName) {
        if (href != null || target != null || rel != null) tagName = "a";
        else tagName = "button";
    }
    const meta = {
        tagName: tagName
    };
    if (tagName === "button") return [
        {
            type: type || "button",
            disabled: disabled
        },
        meta
    ];
    const handleClick = (event)=>{
        if (disabled || tagName === "a" && $94324ba0fffd0f98$export$72369ab2cc99204b(href)) event.preventDefault();
        if (disabled) {
            event.stopPropagation();
            return;
        }
        onClick == null || onClick(event);
    };
    const handleKeyDown = (event)=>{
        if (event.key === " ") {
            event.preventDefault();
            handleClick(event);
        }
    };
    if (tagName === "a") {
        // Ensure there's a href so Enter can trigger anchor button.
        href || (href = "#");
        if (disabled) href = undefined;
    }
    return [
        {
            role: role != null ? role : "button",
            // explicitly undefined so that it overrides the props disabled in a spread
            // e.g. <Tag {...props} {...hookProps} />
            disabled: undefined,
            tabIndex: disabled ? undefined : tabIndex,
            href: href,
            target: tagName === "a" ? target : undefined,
            "aria-disabled": !disabled ? undefined : disabled,
            rel: tagName === "a" ? rel : undefined,
            onClick: handleClick,
            onKeyDown: handleKeyDown
        },
        meta
    ];
}
const $94324ba0fffd0f98$var$Button = /*#__PURE__*/ $d4J5n.forwardRef((_ref, ref)=>{
    let { as: asProp, disabled: disabled } = _ref, props = $94324ba0fffd0f98$var$_objectWithoutPropertiesLoose(_ref, $94324ba0fffd0f98$var$_excluded);
    const [buttonProps, { tagName: Component }] = $94324ba0fffd0f98$export$a0ee72f2c720a5c3(Object.assign({
        tagName: asProp,
        disabled: disabled
    }, props));
    return /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)(Component, Object.assign({}, props, buttonProps, {
        ref: ref
    }));
});
$94324ba0fffd0f98$var$Button.displayName = "Button";
var $94324ba0fffd0f98$export$2e2bcd8739ae039 = $94324ba0fffd0f98$var$Button;



var $d4J5n = parcelRequire("d4J5n");

"use client";
const $d2965fbad540669a$export$666ad80b5007f835 = [
    "xxl",
    "xl",
    "lg",
    "md",
    "sm",
    "xs"
];
const $d2965fbad540669a$export$ff817e17bad2e091 = "xs";
const $d2965fbad540669a$var$ThemeContext = /*#__PURE__*/ $d4J5n.createContext({
    prefixes: {},
    breakpoints: $d2965fbad540669a$export$666ad80b5007f835,
    minBreakpoint: $d2965fbad540669a$export$ff817e17bad2e091
});
const { Consumer: $d2965fbad540669a$export$b631efc24e9d5e2f, Provider: $d2965fbad540669a$var$Provider } = $d2965fbad540669a$var$ThemeContext;
function $d2965fbad540669a$var$ThemeProvider({ prefixes: prefixes = {}, breakpoints: breakpoints = $d2965fbad540669a$export$666ad80b5007f835, minBreakpoint: minBreakpoint = $d2965fbad540669a$export$ff817e17bad2e091, dir: dir, children: children }) {
    const contextValue = (0, $d4J5n.useMemo)(()=>({
            prefixes: {
                ...prefixes
            },
            breakpoints: breakpoints,
            minBreakpoint: minBreakpoint,
            dir: dir
        }), [
        prefixes,
        breakpoints,
        minBreakpoint,
        dir
    ]);
    return /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)($d2965fbad540669a$var$Provider, {
        value: contextValue,
        children: children
    });
}
function $d2965fbad540669a$export$7f387860ebffb32c(prefix, defaultPrefix) {
    const { prefixes: prefixes } = (0, $d4J5n.useContext)($d2965fbad540669a$var$ThemeContext);
    return prefix || prefixes[defaultPrefix] || defaultPrefix;
}
function $d2965fbad540669a$export$8970c8db816a5863() {
    const { breakpoints: breakpoints } = (0, $d4J5n.useContext)($d2965fbad540669a$var$ThemeContext);
    return breakpoints;
}
function $d2965fbad540669a$export$d926d6ef38f3fd32() {
    const { minBreakpoint: minBreakpoint } = (0, $d4J5n.useContext)($d2965fbad540669a$var$ThemeContext);
    return minBreakpoint;
}
function $d2965fbad540669a$export$35e511eefa30ac5a() {
    const { dir: dir } = (0, $d4J5n.useContext)($d2965fbad540669a$var$ThemeContext);
    return dir === "rtl";
}
function $d2965fbad540669a$export$ce75053c20498f85(Component, opts) {
    if (typeof opts === "string") opts = {
        prefix: opts
    };
    const isClassy = Component.prototype && Component.prototype.isReactComponent;
    // If it's a functional component make sure we don't break it with a ref
    const { prefix: prefix, forwardRefAs: forwardRefAs = isClassy ? "ref" : "innerRef" } = opts;
    const Wrapped = /*#__PURE__*/ $d4J5n.forwardRef(({ ...props }, ref)=>{
        props[forwardRefAs] = ref;
        const bsPrefix = $d2965fbad540669a$export$7f387860ebffb32c(props.bsPrefix, prefix);
        return /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)(Component, {
            ...props,
            bsPrefix: bsPrefix
        });
    });
    Wrapped.displayName = `Bootstrap(${Component.displayName || Component.name})`;
    return Wrapped;
}
var $d2965fbad540669a$export$2e2bcd8739ae039 = $d2965fbad540669a$var$ThemeProvider;



"use client";
const $28f73d2964a5e7b1$var$Button = /*#__PURE__*/ $d4J5n.forwardRef(({ as: as, bsPrefix: bsPrefix, variant: variant = "primary", size: size, active: active = false, disabled: disabled = false, className: className, ...props }, ref)=>{
    const prefix = (0, $d2965fbad540669a$export$7f387860ebffb32c)(bsPrefix, "btn");
    const [buttonProps, { tagName: tagName }] = (0, $94324ba0fffd0f98$export$a0ee72f2c720a5c3)({
        tagName: as,
        disabled: disabled,
        ...props
    });
    const Component = tagName;
    return /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)(Component, {
        ...buttonProps,
        ...props,
        ref: ref,
        disabled: disabled,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($4f96bb9b3141308a$exports)))(className, prefix, active && "active", variant && `${prefix}-${variant}`, size && `${prefix}-${size}`, props.href && disabled && "disabled")
    });
});
$28f73d2964a5e7b1$var$Button.displayName = "Button";
var $28f73d2964a5e7b1$export$2e2bcd8739ae039 = $28f73d2964a5e7b1$var$Button;



var $d4J5n = parcelRequire("d4J5n");


var $d4J5n = parcelRequire("d4J5n");



"use client";
const $a90ae544a4a9160e$var$CardBody = /*#__PURE__*/ $d4J5n.forwardRef(({ className: className, bsPrefix: bsPrefix, as: Component = "div", ...props }, ref)=>{
    bsPrefix = (0, $d2965fbad540669a$export$7f387860ebffb32c)(bsPrefix, "card-body");
    return /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)(Component, {
        ref: ref,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($4f96bb9b3141308a$exports)))(className, bsPrefix),
        ...props
    });
});
$a90ae544a4a9160e$var$CardBody.displayName = "CardBody";
var $a90ae544a4a9160e$export$2e2bcd8739ae039 = $a90ae544a4a9160e$var$CardBody;



var $d4J5n = parcelRequire("d4J5n");



"use client";
const $bad633b57dd1ad4b$var$CardFooter = /*#__PURE__*/ $d4J5n.forwardRef(({ className: className, bsPrefix: bsPrefix, as: Component = "div", ...props }, ref)=>{
    bsPrefix = (0, $d2965fbad540669a$export$7f387860ebffb32c)(bsPrefix, "card-footer");
    return /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)(Component, {
        ref: ref,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($4f96bb9b3141308a$exports)))(className, bsPrefix),
        ...props
    });
});
$bad633b57dd1ad4b$var$CardFooter.displayName = "CardFooter";
var $bad633b57dd1ad4b$export$2e2bcd8739ae039 = $bad633b57dd1ad4b$var$CardFooter;




var $d4J5n = parcelRequire("d4J5n");


var $d4J5n = parcelRequire("d4J5n");
"use client";
const $e1b132b1bac156c2$var$context = /*#__PURE__*/ $d4J5n.createContext(null);
$e1b132b1bac156c2$var$context.displayName = "CardHeaderContext";
var $e1b132b1bac156c2$export$2e2bcd8739ae039 = $e1b132b1bac156c2$var$context;



"use client";
const $e99d8dba882fad8d$var$CardHeader = /*#__PURE__*/ $d4J5n.forwardRef(({ bsPrefix: bsPrefix, className: className, // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
as: Component = "div", ...props }, ref)=>{
    const prefix = (0, $d2965fbad540669a$export$7f387860ebffb32c)(bsPrefix, "card-header");
    const contextValue = (0, $d4J5n.useMemo)(()=>({
            cardHeaderBsPrefix: prefix
        }), [
        prefix
    ]);
    return /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $e1b132b1bac156c2$export$2e2bcd8739ae039).Provider, {
        value: contextValue,
        children: /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)(Component, {
            ref: ref,
            ...props,
            className: (0, (/*@__PURE__*/$parcel$interopDefault($4f96bb9b3141308a$exports)))(className, prefix)
        })
    });
});
$e99d8dba882fad8d$var$CardHeader.displayName = "CardHeader";
var $e99d8dba882fad8d$export$2e2bcd8739ae039 = $e99d8dba882fad8d$var$CardHeader;




var $d4J5n = parcelRequire("d4J5n");


"use client";
const $b78452dc822c76ba$var$CardImg = /*#__PURE__*/ $d4J5n.forwardRef(// Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
({ bsPrefix: bsPrefix, className: className, variant: variant, as: Component = "img", ...props }, ref)=>{
    const prefix = (0, $d2965fbad540669a$export$7f387860ebffb32c)(bsPrefix, "card-img");
    return /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)(Component, {
        ref: ref,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($4f96bb9b3141308a$exports)))(variant ? `${prefix}-${variant}` : prefix, className),
        ...props
    });
});
$b78452dc822c76ba$var$CardImg.displayName = "CardImg";
var $b78452dc822c76ba$export$2e2bcd8739ae039 = $b78452dc822c76ba$var$CardImg;



var $d4J5n = parcelRequire("d4J5n");



"use client";
const $e8dadfa9fab0e046$var$CardImgOverlay = /*#__PURE__*/ $d4J5n.forwardRef(({ className: className, bsPrefix: bsPrefix, as: Component = "div", ...props }, ref)=>{
    bsPrefix = (0, $d2965fbad540669a$export$7f387860ebffb32c)(bsPrefix, "card-img-overlay");
    return /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)(Component, {
        ref: ref,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($4f96bb9b3141308a$exports)))(className, bsPrefix),
        ...props
    });
});
$e8dadfa9fab0e046$var$CardImgOverlay.displayName = "CardImgOverlay";
var $e8dadfa9fab0e046$export$2e2bcd8739ae039 = $e8dadfa9fab0e046$var$CardImgOverlay;



var $d4J5n = parcelRequire("d4J5n");



"use client";
const $47bf2eda8e189a95$var$CardLink = /*#__PURE__*/ $d4J5n.forwardRef(({ className: className, bsPrefix: bsPrefix, as: Component = "a", ...props }, ref)=>{
    bsPrefix = (0, $d2965fbad540669a$export$7f387860ebffb32c)(bsPrefix, "card-link");
    return /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)(Component, {
        ref: ref,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($4f96bb9b3141308a$exports)))(className, bsPrefix),
        ...props
    });
});
$47bf2eda8e189a95$var$CardLink.displayName = "CardLink";
var $47bf2eda8e189a95$export$2e2bcd8739ae039 = $47bf2eda8e189a95$var$CardLink;



var $d4J5n = parcelRequire("d4J5n");



var $d4J5n = parcelRequire("d4J5n");


var $d6967463906b333e$export$2e2bcd8739ae039 = (className)=>/*#__PURE__*/ $d4J5n.forwardRef((p, ref)=>/*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)("div", {
            ...p,
            ref: ref,
            className: (0, (/*@__PURE__*/$parcel$interopDefault($4f96bb9b3141308a$exports)))(p.className, className)
        }));



"use client";
const $793861edb10fd001$var$DivStyledAsH6 = (0, $d6967463906b333e$export$2e2bcd8739ae039)("h6");
const $793861edb10fd001$var$CardSubtitle = /*#__PURE__*/ $d4J5n.forwardRef(({ className: className, bsPrefix: bsPrefix, as: Component = $793861edb10fd001$var$DivStyledAsH6, ...props }, ref)=>{
    bsPrefix = (0, $d2965fbad540669a$export$7f387860ebffb32c)(bsPrefix, "card-subtitle");
    return /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)(Component, {
        ref: ref,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($4f96bb9b3141308a$exports)))(className, bsPrefix),
        ...props
    });
});
$793861edb10fd001$var$CardSubtitle.displayName = "CardSubtitle";
var $793861edb10fd001$export$2e2bcd8739ae039 = $793861edb10fd001$var$CardSubtitle;



var $d4J5n = parcelRequire("d4J5n");



"use client";
const $0ae91b9cbdad8eb9$var$CardText = /*#__PURE__*/ $d4J5n.forwardRef(({ className: className, bsPrefix: bsPrefix, as: Component = "p", ...props }, ref)=>{
    bsPrefix = (0, $d2965fbad540669a$export$7f387860ebffb32c)(bsPrefix, "card-text");
    return /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)(Component, {
        ref: ref,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($4f96bb9b3141308a$exports)))(className, bsPrefix),
        ...props
    });
});
$0ae91b9cbdad8eb9$var$CardText.displayName = "CardText";
var $0ae91b9cbdad8eb9$export$2e2bcd8739ae039 = $0ae91b9cbdad8eb9$var$CardText;



var $d4J5n = parcelRequire("d4J5n");




"use client";
const $23f6c077e839cb88$var$DivStyledAsH5 = (0, $d6967463906b333e$export$2e2bcd8739ae039)("h5");
const $23f6c077e839cb88$var$CardTitle = /*#__PURE__*/ $d4J5n.forwardRef(({ className: className, bsPrefix: bsPrefix, as: Component = $23f6c077e839cb88$var$DivStyledAsH5, ...props }, ref)=>{
    bsPrefix = (0, $d2965fbad540669a$export$7f387860ebffb32c)(bsPrefix, "card-title");
    return /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)(Component, {
        ref: ref,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($4f96bb9b3141308a$exports)))(className, bsPrefix),
        ...props
    });
});
$23f6c077e839cb88$var$CardTitle.displayName = "CardTitle";
var $23f6c077e839cb88$export$2e2bcd8739ae039 = $23f6c077e839cb88$var$CardTitle;



"use client";
const $a88e4ade28693468$var$Card = /*#__PURE__*/ $d4J5n.forwardRef(({ bsPrefix: bsPrefix, className: className, bg: bg, text: text, border: border, body: body = false, children: children, // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
as: Component = "div", ...props }, ref)=>{
    const prefix = (0, $d2965fbad540669a$export$7f387860ebffb32c)(bsPrefix, "card");
    return /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)(Component, {
        ref: ref,
        ...props,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($4f96bb9b3141308a$exports)))(className, prefix, bg && `bg-${bg}`, text && `text-${text}`, border && `border-${border}`),
        children: body ? /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $a90ae544a4a9160e$export$2e2bcd8739ae039), {
            children: children
        }) : children
    });
});
$a88e4ade28693468$var$Card.displayName = "Card";
var $a88e4ade28693468$export$2e2bcd8739ae039 = Object.assign($a88e4ade28693468$var$Card, {
    Img: (0, $b78452dc822c76ba$export$2e2bcd8739ae039),
    Title: (0, $23f6c077e839cb88$export$2e2bcd8739ae039),
    Subtitle: (0, $793861edb10fd001$export$2e2bcd8739ae039),
    Body: (0, $a90ae544a4a9160e$export$2e2bcd8739ae039),
    Link: (0, $47bf2eda8e189a95$export$2e2bcd8739ae039),
    Text: (0, $0ae91b9cbdad8eb9$export$2e2bcd8739ae039),
    Header: (0, $e99d8dba882fad8d$export$2e2bcd8739ae039),
    Footer: (0, $bad633b57dd1ad4b$export$2e2bcd8739ae039),
    ImgOverlay: (0, $e8dadfa9fab0e046$export$2e2bcd8739ae039)
});


/**
 * React Router DOM v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ 
var $d4J5n = parcelRequire("d4J5n");

/**
 * @remix-run/router v1.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function $0e856af10b3b08bf$var$_extends() {
    $0e856af10b3b08bf$var$_extends = Object.assign ? Object.assign.bind() : function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return $0e856af10b3b08bf$var$_extends.apply(this, arguments);
}
////////////////////////////////////////////////////////////////////////////////
//#region Types and Constants
////////////////////////////////////////////////////////////////////////////////
/**
 * Actions represent the type of change to a location value.
 */ var $0e856af10b3b08bf$export$e19cd5f9376f8cee;
(function(Action) {
    /**
   * A POP indicates a change to an arbitrary index in the history stack, such
   * as a back or forward navigation. It does not describe the direction of the
   * navigation, only that the current index changed.
   *
   * Note: This is the default action for newly created history objects.
   */ Action["Pop"] = "POP";
    /**
   * A PUSH indicates a new entry being added to the history stack, such as when
   * a link is clicked and a new page loads. When this happens, all subsequent
   * entries in the stack are lost.
   */ Action["Push"] = "PUSH";
    /**
   * A REPLACE indicates the entry at the current index in the history stack
   * being replaced by a new one.
   */ Action["Replace"] = "REPLACE";
})($0e856af10b3b08bf$export$e19cd5f9376f8cee || ($0e856af10b3b08bf$export$e19cd5f9376f8cee = {}));
const $0e856af10b3b08bf$var$PopStateEventType = "popstate";
/**
 * Memory history stores the current location in memory. It is designed for use
 * in stateful non-browser environments like tests and React Native.
 */ function $0e856af10b3b08bf$export$2b76ad033c6e6d08(options) {
    if (options === void 0) options = {};
    let { initialEntries: initialEntries = [
        "/"
    ], initialIndex: initialIndex, v5Compat: v5Compat = false } = options;
    let entries; // Declare so we can access from createMemoryLocation
    entries = initialEntries.map((entry, index)=>createMemoryLocation(entry, typeof entry === "string" ? null : entry.state, index === 0 ? "default" : undefined));
    let index = clampIndex(initialIndex == null ? entries.length - 1 : initialIndex);
    let action = $0e856af10b3b08bf$export$e19cd5f9376f8cee.Pop;
    let listener = null;
    function clampIndex(n) {
        return Math.min(Math.max(n, 0), entries.length - 1);
    }
    function getCurrentLocation() {
        return entries[index];
    }
    function createMemoryLocation(to, state, key) {
        if (state === void 0) state = null;
        let location = $0e856af10b3b08bf$var$createLocation(entries ? getCurrentLocation().pathname : "/", to, state, key);
        $0e856af10b3b08bf$export$c0e02632e14916fd(location.pathname.charAt(0) === "/", "relative pathnames are not supported in memory history: " + JSON.stringify(to));
        return location;
    }
    function createHref(to) {
        return typeof to === "string" ? to : $0e856af10b3b08bf$export$fe53371bee54353d(to);
    }
    let history = {
        get index () {
            return index;
        },
        get action () {
            return action;
        },
        get location () {
            return getCurrentLocation();
        },
        createHref: createHref,
        createURL (to) {
            return new URL(createHref(to), "http://localhost");
        },
        encodeLocation (to) {
            let path = typeof to === "string" ? $0e856af10b3b08bf$export$8ccf933b0513f8d0(to) : to;
            return {
                pathname: path.pathname || "",
                search: path.search || "",
                hash: path.hash || ""
            };
        },
        push (to, state) {
            action = $0e856af10b3b08bf$export$e19cd5f9376f8cee.Push;
            let nextLocation = createMemoryLocation(to, state);
            index += 1;
            entries.splice(index, entries.length, nextLocation);
            if (v5Compat && listener) listener({
                action: action,
                location: nextLocation,
                delta: 1
            });
        },
        replace (to, state) {
            action = $0e856af10b3b08bf$export$e19cd5f9376f8cee.Replace;
            let nextLocation = createMemoryLocation(to, state);
            entries[index] = nextLocation;
            if (v5Compat && listener) listener({
                action: action,
                location: nextLocation,
                delta: 0
            });
        },
        go (delta) {
            action = $0e856af10b3b08bf$export$e19cd5f9376f8cee.Pop;
            let nextIndex = clampIndex(index + delta);
            let nextLocation = entries[nextIndex];
            index = nextIndex;
            if (listener) listener({
                action: action,
                location: nextLocation,
                delta: delta
            });
        },
        listen (fn) {
            listener = fn;
            return ()=>{
                listener = null;
            };
        }
    };
    return history;
}
/**
 * Browser history stores the location in regular URLs. This is the standard for
 * most web apps, but it requires some configuration on the server to ensure you
 * serve the same app at multiple URLs.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#createbrowserhistory
 */ function $0e856af10b3b08bf$export$719fc203c4e16dee(options) {
    if (options === void 0) options = {};
    function createBrowserLocation(window1, globalHistory) {
        let { pathname: pathname, search: search, hash: hash } = window1.location;
        return $0e856af10b3b08bf$var$createLocation("", {
            pathname: pathname,
            search: search,
            hash: hash
        }, // state defaults to `null` because `window.history.state` does
        globalHistory.state && globalHistory.state.usr || null, globalHistory.state && globalHistory.state.key || "default");
    }
    function createBrowserHref(window1, to) {
        return typeof to === "string" ? to : $0e856af10b3b08bf$export$fe53371bee54353d(to);
    }
    return $0e856af10b3b08bf$var$getUrlBasedHistory(createBrowserLocation, createBrowserHref, null, options);
}
/**
 * Hash history stores the location in window.location.hash. This makes it ideal
 * for situations where you don't want to send the location to the server for
 * some reason, either because you do cannot configure it or the URL space is
 * reserved for something else.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#createhashhistory
 */ function $0e856af10b3b08bf$export$b71fdd3798280242(options) {
    if (options === void 0) options = {};
    function createHashLocation(window1, globalHistory) {
        let { pathname: pathname = "/", search: search = "", hash: hash = "" } = $0e856af10b3b08bf$export$8ccf933b0513f8d0(window1.location.hash.substr(1));
        // Hash URL should always have a leading / just like window.location.pathname
        // does, so if an app ends up at a route like /#something then we add a
        // leading slash so all of our path-matching behaves the same as if it would
        // in a browser router.  This is particularly important when there exists a
        // root splat route (<Route path="*">) since that matches internally against
        // "/*" and we'd expect /#something to 404 in a hash router app.
        if (!pathname.startsWith("/") && !pathname.startsWith(".")) pathname = "/" + pathname;
        return $0e856af10b3b08bf$var$createLocation("", {
            pathname: pathname,
            search: search,
            hash: hash
        }, // state defaults to `null` because `window.history.state` does
        globalHistory.state && globalHistory.state.usr || null, globalHistory.state && globalHistory.state.key || "default");
    }
    function createHashHref(window1, to) {
        let base = window1.document.querySelector("base");
        let href = "";
        if (base && base.getAttribute("href")) {
            let url = window1.location.href;
            let hashIndex = url.indexOf("#");
            href = hashIndex === -1 ? url : url.slice(0, hashIndex);
        }
        return href + "#" + (typeof to === "string" ? to : $0e856af10b3b08bf$export$fe53371bee54353d(to));
    }
    function validateHashLocation(location, to) {
        $0e856af10b3b08bf$export$c0e02632e14916fd(location.pathname.charAt(0) === "/", "relative pathnames are not supported in hash history.push(" + JSON.stringify(to) + ")");
    }
    return $0e856af10b3b08bf$var$getUrlBasedHistory(createHashLocation, createHashHref, validateHashLocation, options);
}
function $0e856af10b3b08bf$export$3e9cee6b33872309(value, message) {
    if (value === false || value === null || typeof value === "undefined") throw new Error(message);
}
function $0e856af10b3b08bf$export$c0e02632e14916fd(cond, message) {
    if (!cond) {
        // eslint-disable-next-line no-console
        if (typeof console !== "undefined") console.warn(message);
        try {
            // Welcome to debugging history!
            //
            // This error is thrown as a convenience, so you can more easily
            // find the source for a warning that appears in the console by
            // enabling "pause on exceptions" in your JavaScript debugger.
            throw new Error(message);
        // eslint-disable-next-line no-empty
        } catch (e) {}
    }
}
function $0e856af10b3b08bf$var$createKey() {
    return Math.random().toString(36).substr(2, 8);
}
/**
 * For browser-based histories, we combine the state and key into an object
 */ function $0e856af10b3b08bf$var$getHistoryState(location, index) {
    return {
        usr: location.state,
        key: location.key,
        idx: index
    };
}
/**
 * Creates a Location object with a unique key from the given Path
 */ function $0e856af10b3b08bf$var$createLocation(current, to, state, key) {
    if (state === void 0) state = null;
    let location = $0e856af10b3b08bf$var$_extends({
        pathname: typeof current === "string" ? current : current.pathname,
        search: "",
        hash: ""
    }, typeof to === "string" ? $0e856af10b3b08bf$export$8ccf933b0513f8d0(to) : to, {
        state: state,
        // TODO: This could be cleaned up.  push/replace should probably just take
        // full Locations now and avoid the need to run through this flow at all
        // But that's a pretty big refactor to the current test suite so going to
        // keep as is for the time being and just let any incoming keys take precedence
        key: to && to.key || key || $0e856af10b3b08bf$var$createKey()
    });
    return location;
}
/**
 * Creates a string URL path from the given pathname, search, and hash components.
 */ function $0e856af10b3b08bf$export$fe53371bee54353d(_ref) {
    let { pathname: pathname = "/", search: search = "", hash: hash = "" } = _ref;
    if (search && search !== "?") pathname += search.charAt(0) === "?" ? search : "?" + search;
    if (hash && hash !== "#") pathname += hash.charAt(0) === "#" ? hash : "#" + hash;
    return pathname;
}
/**
 * Parses a string URL path into its separate pathname, search, and hash components.
 */ function $0e856af10b3b08bf$export$8ccf933b0513f8d0(path) {
    let parsedPath = {};
    if (path) {
        let hashIndex = path.indexOf("#");
        if (hashIndex >= 0) {
            parsedPath.hash = path.substr(hashIndex);
            path = path.substr(0, hashIndex);
        }
        let searchIndex = path.indexOf("?");
        if (searchIndex >= 0) {
            parsedPath.search = path.substr(searchIndex);
            path = path.substr(0, searchIndex);
        }
        if (path) parsedPath.pathname = path;
    }
    return parsedPath;
}
function $0e856af10b3b08bf$var$getUrlBasedHistory(getLocation, createHref, validateLocation, options) {
    if (options === void 0) options = {};
    let { window: window1 = document.defaultView, v5Compat: v5Compat = false } = options;
    let globalHistory = window1.history;
    let action = $0e856af10b3b08bf$export$e19cd5f9376f8cee.Pop;
    let listener = null;
    let index = getIndex();
    // Index should only be null when we initialize. If not, it's because the
    // user called history.pushState or history.replaceState directly, in which
    // case we should log a warning as it will result in bugs.
    if (index == null) {
        index = 0;
        globalHistory.replaceState($0e856af10b3b08bf$var$_extends({}, globalHistory.state, {
            idx: index
        }), "");
    }
    function getIndex() {
        let state = globalHistory.state || {
            idx: null
        };
        return state.idx;
    }
    function handlePop() {
        action = $0e856af10b3b08bf$export$e19cd5f9376f8cee.Pop;
        let nextIndex = getIndex();
        let delta = nextIndex == null ? null : nextIndex - index;
        index = nextIndex;
        if (listener) listener({
            action: action,
            location: history.location,
            delta: delta
        });
    }
    function push(to, state) {
        action = $0e856af10b3b08bf$export$e19cd5f9376f8cee.Push;
        let location = $0e856af10b3b08bf$var$createLocation(history.location, to, state);
        if (validateLocation) validateLocation(location, to);
        index = getIndex() + 1;
        let historyState = $0e856af10b3b08bf$var$getHistoryState(location, index);
        let url = history.createHref(location);
        // try...catch because iOS limits us to 100 pushState calls :/
        try {
            globalHistory.pushState(historyState, "", url);
        } catch (error) {
            // If the exception is because `state` can't be serialized, let that throw
            // outwards just like a replace call would so the dev knows the cause
            // https://html.spec.whatwg.org/multipage/nav-history-apis.html#shared-history-push/replace-state-steps
            // https://html.spec.whatwg.org/multipage/structured-data.html#structuredserializeinternal
            if (error instanceof DOMException && error.name === "DataCloneError") throw error;
            // They are going to lose state here, but there is no real
            // way to warn them about it since the page will refresh...
            window1.location.assign(url);
        }
        if (v5Compat && listener) listener({
            action: action,
            location: history.location,
            delta: 1
        });
    }
    function replace(to, state) {
        action = $0e856af10b3b08bf$export$e19cd5f9376f8cee.Replace;
        let location = $0e856af10b3b08bf$var$createLocation(history.location, to, state);
        if (validateLocation) validateLocation(location, to);
        index = getIndex();
        let historyState = $0e856af10b3b08bf$var$getHistoryState(location, index);
        let url = history.createHref(location);
        globalHistory.replaceState(historyState, "", url);
        if (v5Compat && listener) listener({
            action: action,
            location: history.location,
            delta: 0
        });
    }
    function createURL(to) {
        // window.location.origin is "null" (the literal string value) in Firefox
        // under certain conditions, notably when serving from a local HTML file
        // See https://bugzilla.mozilla.org/show_bug.cgi?id=878297
        let base = window1.location.origin !== "null" ? window1.location.origin : window1.location.href;
        let href = typeof to === "string" ? to : $0e856af10b3b08bf$export$fe53371bee54353d(to);
        // Treating this as a full URL will strip any trailing spaces so we need to
        // pre-encode them since they might be part of a matching splat param from
        // an ancestor route
        href = href.replace(/ $/, "%20");
        $0e856af10b3b08bf$export$3e9cee6b33872309(base, "No window.location.(origin|href) available to create URL for href: " + href);
        return new URL(href, base);
    }
    let history = {
        get action () {
            return action;
        },
        get location () {
            return getLocation(window1, globalHistory);
        },
        listen (fn) {
            if (listener) throw new Error("A history only accepts one active listener");
            window1.addEventListener($0e856af10b3b08bf$var$PopStateEventType, handlePop);
            listener = fn;
            return ()=>{
                window1.removeEventListener($0e856af10b3b08bf$var$PopStateEventType, handlePop);
                listener = null;
            };
        },
        createHref (to) {
            return createHref(window1, to);
        },
        createURL: createURL,
        encodeLocation (to) {
            // Encode a Location the same way window.location would
            let url = createURL(to);
            return {
                pathname: url.pathname,
                search: url.search,
                hash: url.hash
            };
        },
        push: push,
        replace: replace,
        go (n) {
            return globalHistory.go(n);
        }
    };
    return history;
}
//#endregion
var $0e856af10b3b08bf$var$ResultType;
(function(ResultType) {
    ResultType["data"] = "data";
    ResultType["deferred"] = "deferred";
    ResultType["redirect"] = "redirect";
    ResultType["error"] = "error";
})($0e856af10b3b08bf$var$ResultType || ($0e856af10b3b08bf$var$ResultType = {}));
const $0e856af10b3b08bf$var$immutableRouteKeys = new Set([
    "lazy",
    "caseSensitive",
    "path",
    "id",
    "index",
    "children"
]);
function $0e856af10b3b08bf$var$isIndexRoute(route) {
    return route.index === true;
}
// Walk the route tree generating unique IDs where necessary, so we are working
// solely with AgnosticDataRouteObject's within the Router
function $0e856af10b3b08bf$export$4a6d22b32134ea5d(routes, mapRouteProperties, parentPath, manifest) {
    if (parentPath === void 0) parentPath = [];
    if (manifest === void 0) manifest = {};
    return routes.map((route, index)=>{
        let treePath = [
            ...parentPath,
            index
        ];
        let id = typeof route.id === "string" ? route.id : treePath.join("-");
        $0e856af10b3b08bf$export$3e9cee6b33872309(route.index !== true || !route.children, "Cannot specify children on an index route");
        $0e856af10b3b08bf$export$3e9cee6b33872309(!manifest[id], 'Found a route id collision on id "' + id + '".  Route ' + "id's must be globally unique within Data Router usages");
        if ($0e856af10b3b08bf$var$isIndexRoute(route)) {
            let indexRoute = $0e856af10b3b08bf$var$_extends({}, route, mapRouteProperties(route), {
                id: id
            });
            manifest[id] = indexRoute;
            return indexRoute;
        } else {
            let pathOrLayoutRoute = $0e856af10b3b08bf$var$_extends({}, route, mapRouteProperties(route), {
                id: id,
                children: undefined
            });
            manifest[id] = pathOrLayoutRoute;
            if (route.children) pathOrLayoutRoute.children = $0e856af10b3b08bf$export$4a6d22b32134ea5d(route.children, mapRouteProperties, treePath, manifest);
            return pathOrLayoutRoute;
        }
    });
}
/**
 * Matches the given routes to a location and returns the match data.
 *
 * @see https://reactrouter.com/utils/match-routes
 */ function $0e856af10b3b08bf$export$2708184779ceb39d(routes, locationArg, basename) {
    if (basename === void 0) basename = "/";
    let location = typeof locationArg === "string" ? $0e856af10b3b08bf$export$8ccf933b0513f8d0(locationArg) : locationArg;
    let pathname = $0e856af10b3b08bf$export$b69e3301ce081aa3(location.pathname || "/", basename);
    if (pathname == null) return null;
    let branches = $0e856af10b3b08bf$var$flattenRoutes(routes);
    $0e856af10b3b08bf$var$rankRouteBranches(branches);
    let matches = null;
    for(let i = 0; matches == null && i < branches.length; ++i){
        // Incoming pathnames are generally encoded from either window.location
        // or from router.navigate, but we want to match against the unencoded
        // paths in the route definitions.  Memory router locations won't be
        // encoded here but there also shouldn't be anything to decode so this
        // should be a safe operation.  This avoids needing matchRoutes to be
        // history-aware.
        let decoded = $0e856af10b3b08bf$var$decodePath(pathname);
        matches = $0e856af10b3b08bf$var$matchRouteBranch(branches[i], decoded);
    }
    return matches;
}
function $0e856af10b3b08bf$export$b3fac024fad9e8ff(match, loaderData) {
    let { route: route, pathname: pathname, params: params } = match;
    return {
        id: route.id,
        pathname: pathname,
        params: params,
        data: loaderData[route.id],
        handle: route.handle
    };
}
function $0e856af10b3b08bf$var$flattenRoutes(routes, branches, parentsMeta, parentPath) {
    if (branches === void 0) branches = [];
    if (parentsMeta === void 0) parentsMeta = [];
    if (parentPath === void 0) parentPath = "";
    let flattenRoute = (route, index, relativePath)=>{
        let meta = {
            relativePath: relativePath === undefined ? route.path || "" : relativePath,
            caseSensitive: route.caseSensitive === true,
            childrenIndex: index,
            route: route
        };
        if (meta.relativePath.startsWith("/")) {
            $0e856af10b3b08bf$export$3e9cee6b33872309(meta.relativePath.startsWith(parentPath), 'Absolute route path "' + meta.relativePath + '" nested under path ' + ('"' + parentPath + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes.");
            meta.relativePath = meta.relativePath.slice(parentPath.length);
        }
        let path = $0e856af10b3b08bf$export$86d9a7913e44197e([
            parentPath,
            meta.relativePath
        ]);
        let routesMeta = parentsMeta.concat(meta);
        // Add the children before adding this route to the array, so we traverse the
        // route tree depth-first and child routes appear before their parents in
        // the "flattened" version.
        if (route.children && route.children.length > 0) {
            $0e856af10b3b08bf$export$3e9cee6b33872309(// Our types know better, but runtime JS may not!
            // @ts-expect-error
            route.index !== true, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + path + '".'));
            $0e856af10b3b08bf$var$flattenRoutes(route.children, branches, routesMeta, path);
        }
        // Routes without a path shouldn't ever match by themselves unless they are
        // index routes, so don't add them to the list of possible branches.
        if (route.path == null && !route.index) return;
        branches.push({
            path: path,
            score: $0e856af10b3b08bf$var$computeScore(path, route.index),
            routesMeta: routesMeta
        });
    };
    routes.forEach((route, index)=>{
        var _route$path;
        // coarse-grain check for optional params
        if (route.path === "" || !((_route$path = route.path) != null && _route$path.includes("?"))) flattenRoute(route, index);
        else for (let exploded of $0e856af10b3b08bf$var$explodeOptionalSegments(route.path))flattenRoute(route, index, exploded);
    });
    return branches;
}
/**
 * Computes all combinations of optional path segments for a given path,
 * excluding combinations that are ambiguous and of lower priority.
 *
 * For example, `/one/:two?/three/:four?/:five?` explodes to:
 * - `/one/three`
 * - `/one/:two/three`
 * - `/one/three/:four`
 * - `/one/three/:five`
 * - `/one/:two/three/:four`
 * - `/one/:two/three/:five`
 * - `/one/three/:four/:five`
 * - `/one/:two/three/:four/:five`
 */ function $0e856af10b3b08bf$var$explodeOptionalSegments(path) {
    let segments = path.split("/");
    if (segments.length === 0) return [];
    let [first, ...rest] = segments;
    // Optional path segments are denoted by a trailing `?`
    let isOptional = first.endsWith("?");
    // Compute the corresponding required segment: `foo?` -> `foo`
    let required = first.replace(/\?$/, "");
    if (rest.length === 0) // Intepret empty string as omitting an optional segment
    // `["one", "", "three"]` corresponds to omitting `:two` from `/one/:two?/three` -> `/one/three`
    return isOptional ? [
        required,
        ""
    ] : [
        required
    ];
    let restExploded = $0e856af10b3b08bf$var$explodeOptionalSegments(rest.join("/"));
    let result = [];
    // All child paths with the prefix.  Do this for all children before the
    // optional version for all children, so we get consistent ordering where the
    // parent optional aspect is preferred as required.  Otherwise, we can get
    // child sections interspersed where deeper optional segments are higher than
    // parent optional segments, where for example, /:two would explode _earlier_
    // then /:one.  By always including the parent as required _for all children_
    // first, we avoid this issue
    result.push(...restExploded.map((subpath)=>subpath === "" ? required : [
            required,
            subpath
        ].join("/")));
    // Then, if this is an optional value, add all child versions without
    if (isOptional) result.push(...restExploded);
    // for absolute paths, ensure `/` instead of empty segment
    return result.map((exploded)=>path.startsWith("/") && exploded === "" ? "/" : exploded);
}
function $0e856af10b3b08bf$var$rankRouteBranches(branches) {
    branches.sort((a, b)=>a.score !== b.score ? b.score - a.score // Higher score first
         : $0e856af10b3b08bf$var$compareIndexes(a.routesMeta.map((meta)=>meta.childrenIndex), b.routesMeta.map((meta)=>meta.childrenIndex)));
}
const $0e856af10b3b08bf$var$paramRe = /^:[\w-]+$/;
const $0e856af10b3b08bf$var$dynamicSegmentValue = 3;
const $0e856af10b3b08bf$var$indexRouteValue = 2;
const $0e856af10b3b08bf$var$emptySegmentValue = 1;
const $0e856af10b3b08bf$var$staticSegmentValue = 10;
const $0e856af10b3b08bf$var$splatPenalty = -2;
const $0e856af10b3b08bf$var$isSplat = (s)=>s === "*";
function $0e856af10b3b08bf$var$computeScore(path, index) {
    let segments = path.split("/");
    let initialScore = segments.length;
    if (segments.some($0e856af10b3b08bf$var$isSplat)) initialScore += $0e856af10b3b08bf$var$splatPenalty;
    if (index) initialScore += $0e856af10b3b08bf$var$indexRouteValue;
    return segments.filter((s)=>!$0e856af10b3b08bf$var$isSplat(s)).reduce((score, segment)=>score + ($0e856af10b3b08bf$var$paramRe.test(segment) ? $0e856af10b3b08bf$var$dynamicSegmentValue : segment === "" ? $0e856af10b3b08bf$var$emptySegmentValue : $0e856af10b3b08bf$var$staticSegmentValue), initialScore);
}
function $0e856af10b3b08bf$var$compareIndexes(a, b) {
    let siblings = a.length === b.length && a.slice(0, -1).every((n, i)=>n === b[i]);
    return siblings ? // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    a[a.length - 1] - b[b.length - 1] : // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0;
}
function $0e856af10b3b08bf$var$matchRouteBranch(branch, pathname) {
    let { routesMeta: routesMeta } = branch;
    let matchedParams = {};
    let matchedPathname = "/";
    let matches = [];
    for(let i = 0; i < routesMeta.length; ++i){
        let meta = routesMeta[i];
        let end = i === routesMeta.length - 1;
        let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
        let match = $0e856af10b3b08bf$export$81336c211d5ff295({
            path: meta.relativePath,
            caseSensitive: meta.caseSensitive,
            end: end
        }, remainingPathname);
        if (!match) return null;
        Object.assign(matchedParams, match.params);
        let route = meta.route;
        matches.push({
            // TODO: Can this as be avoided?
            params: matchedParams,
            pathname: $0e856af10b3b08bf$export$86d9a7913e44197e([
                matchedPathname,
                match.pathname
            ]),
            pathnameBase: $0e856af10b3b08bf$export$a5c6d149b50c1d86($0e856af10b3b08bf$export$86d9a7913e44197e([
                matchedPathname,
                match.pathnameBase
            ])),
            route: route
        });
        if (match.pathnameBase !== "/") matchedPathname = $0e856af10b3b08bf$export$86d9a7913e44197e([
            matchedPathname,
            match.pathnameBase
        ]);
    }
    return matches;
}
/**
 * Returns a path with params interpolated.
 *
 * @see https://reactrouter.com/utils/generate-path
 */ function $0e856af10b3b08bf$export$82476f982757e71e(originalPath, params) {
    if (params === void 0) params = {};
    let path = originalPath;
    if (path.endsWith("*") && path !== "*" && !path.endsWith("/*")) {
        $0e856af10b3b08bf$export$c0e02632e14916fd(false, 'Route path "' + path + '" will be treated as if it were ' + ('"' + path.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + path.replace(/\*$/, "/*") + '".'));
        path = path.replace(/\*$/, "/*");
    }
    // ensure `/` is added at the beginning if the path is absolute
    const prefix = path.startsWith("/") ? "/" : "";
    const stringify = (p)=>p == null ? "" : typeof p === "string" ? p : String(p);
    const segments = path.split(/\/+/).map((segment, index, array)=>{
        const isLastSegment = index === array.length - 1;
        // only apply the splat if it's the last segment
        if (isLastSegment && segment === "*") {
            const star = "*";
            // Apply the splat
            return stringify(params[star]);
        }
        const keyMatch = segment.match(/^:([\w-]+)(\??)$/);
        if (keyMatch) {
            const [, key, optional] = keyMatch;
            let param = params[key];
            $0e856af10b3b08bf$export$3e9cee6b33872309(optional === "?" || param != null, 'Missing ":' + key + '" param');
            return stringify(param);
        }
        // Remove any optional markers from optional static segments
        return segment.replace(/\?$/g, "");
    })// Remove empty segments
    .filter((segment)=>!!segment);
    return prefix + segments.join("/");
}
/**
 * Performs pattern matching on a URL pathname and returns information about
 * the match.
 *
 * @see https://reactrouter.com/utils/match-path
 */ function $0e856af10b3b08bf$export$81336c211d5ff295(pattern, pathname) {
    if (typeof pattern === "string") pattern = {
        path: pattern,
        caseSensitive: false,
        end: true
    };
    let [matcher, compiledParams] = $0e856af10b3b08bf$var$compilePath(pattern.path, pattern.caseSensitive, pattern.end);
    let match = pathname.match(matcher);
    if (!match) return null;
    let matchedPathname = match[0];
    let pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
    let captureGroups = match.slice(1);
    let params = compiledParams.reduce((memo, _ref, index)=>{
        let { paramName: paramName, isOptional: isOptional } = _ref;
        // We need to compute the pathnameBase here using the raw splat value
        // instead of using params["*"] later because it will be decoded then
        if (paramName === "*") {
            let splatValue = captureGroups[index] || "";
            pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
        }
        const value = captureGroups[index];
        if (isOptional && !value) memo[paramName] = undefined;
        else memo[paramName] = (value || "").replace(/%2F/g, "/");
        return memo;
    }, {});
    return {
        params: params,
        pathname: matchedPathname,
        pathnameBase: pathnameBase,
        pattern: pattern
    };
}
function $0e856af10b3b08bf$var$compilePath(path, caseSensitive, end) {
    if (caseSensitive === void 0) caseSensitive = false;
    if (end === void 0) end = true;
    $0e856af10b3b08bf$export$c0e02632e14916fd(path === "*" || !path.endsWith("*") || path.endsWith("/*"), 'Route path "' + path + '" will be treated as if it were ' + ('"' + path.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + path.replace(/\*$/, "/*") + '".'));
    let params = [];
    let regexpSource = "^" + path.replace(/\/*\*?$/, "") // Ignore trailing / and /*, we'll handle it below
    .replace(/^\/*/, "/") // Make sure it has a leading /
    .replace(/[\\.*+^${}|()[\]]/g, "\\$&") // Escape special regex chars
    .replace(/\/:([\w-]+)(\?)?/g, (_, paramName, isOptional)=>{
        params.push({
            paramName: paramName,
            isOptional: isOptional != null
        });
        return isOptional ? "/?([^\\/]+)?" : "/([^\\/]+)";
    });
    if (path.endsWith("*")) {
        params.push({
            paramName: "*"
        });
        regexpSource += path === "*" || path === "/*" ? "(.*)$" // Already matched the initial /, just match the rest
         : "(?:\\/(.+)|\\/*)$"; // Don't include the / in params["*"]
    } else if (end) // When matching to the end, ignore trailing slashes
    regexpSource += "\\/*$";
    else if (path !== "" && path !== "/") // If our path is non-empty and contains anything beyond an initial slash,
    // then we have _some_ form of path in our regex, so we should expect to
    // match only if we find the end of this path segment.  Look for an optional
    // non-captured trailing slash (to match a portion of the URL) or the end
    // of the path (if we've matched to the end).  We used to do this with a
    // word boundary but that gives false positives on routes like
    // /user-preferences since `-` counts as a word boundary.
    regexpSource += "(?:(?=\\/|$))";
    let matcher = new RegExp(regexpSource, caseSensitive ? undefined : "i");
    return [
        matcher,
        params
    ];
}
function $0e856af10b3b08bf$var$decodePath(value) {
    try {
        return value.split("/").map((v)=>decodeURIComponent(v).replace(/\//g, "%2F")).join("/");
    } catch (error) {
        $0e856af10b3b08bf$export$c0e02632e14916fd(false, 'The URL path "' + value + '" could not be decoded because it is is a ' + "malformed URL segment. This is probably due to a bad percent " + ("encoding (" + error + ")."));
        return value;
    }
}
/**
 * @private
 */ function $0e856af10b3b08bf$export$b69e3301ce081aa3(pathname, basename) {
    if (basename === "/") return pathname;
    if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) return null;
    // We want to leave trailing slash behavior in the user's control, so if they
    // specify a basename with a trailing slash, we should support it
    let startIndex = basename.endsWith("/") ? basename.length - 1 : basename.length;
    let nextChar = pathname.charAt(startIndex);
    if (nextChar && nextChar !== "/") // pathname does not start with basename/
    return null;
    return pathname.slice(startIndex) || "/";
}
/**
 * Returns a resolved path object relative to the given pathname.
 *
 * @see https://reactrouter.com/utils/resolve-path
 */ function $0e856af10b3b08bf$export$b09f2ff0bbcb43c7(to, fromPathname) {
    if (fromPathname === void 0) fromPathname = "/";
    let { pathname: toPathname, search: search = "", hash: hash = "" } = typeof to === "string" ? $0e856af10b3b08bf$export$8ccf933b0513f8d0(to) : to;
    let pathname = toPathname ? toPathname.startsWith("/") ? toPathname : $0e856af10b3b08bf$var$resolvePathname(toPathname, fromPathname) : fromPathname;
    return {
        pathname: pathname,
        search: $0e856af10b3b08bf$var$normalizeSearch(search),
        hash: $0e856af10b3b08bf$var$normalizeHash(hash)
    };
}
function $0e856af10b3b08bf$var$resolvePathname(relativePath, fromPathname) {
    let segments = fromPathname.replace(/\/+$/, "").split("/");
    let relativeSegments = relativePath.split("/");
    relativeSegments.forEach((segment)=>{
        if (segment === "..") // Keep the root "" segment so the pathname starts at /
        {
            if (segments.length > 1) segments.pop();
        } else if (segment !== ".") segments.push(segment);
    });
    return segments.length > 1 ? segments.join("/") : "/";
}
function $0e856af10b3b08bf$var$getInvalidPathError(char, field, dest, path) {
    return "Cannot include a '" + char + "' character in a manually specified " + ("`to." + field + "` field [" + JSON.stringify(path) + "].  Please separate it out to the ") + ("`to." + dest + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
}
/**
 * @private
 *
 * When processing relative navigation we want to ignore ancestor routes that
 * do not contribute to the path, such that index/pathless layout routes don't
 * interfere.
 *
 * For example, when moving a route element into an index route and/or a
 * pathless layout route, relative link behavior contained within should stay
 * the same.  Both of the following examples should link back to the root:
 *
 *   <Route path="/">
 *     <Route path="accounts" element={<Link to=".."}>
 *   </Route>
 *
 *   <Route path="/">
 *     <Route path="accounts">
 *       <Route element={<AccountsLayout />}>       // <-- Does not contribute
 *         <Route index element={<Link to=".."} />  // <-- Does not contribute
 *       </Route
 *     </Route>
 *   </Route>
 */ function $0e856af10b3b08bf$var$getPathContributingMatches(matches) {
    return matches.filter((match, index)=>index === 0 || match.route.path && match.route.path.length > 0);
}
// Return the array of pathnames for the current route matches - used to
// generate the routePathnames input for resolveTo()
function $0e856af10b3b08bf$export$a5784978eca585fa(matches, v7_relativeSplatPath) {
    let pathMatches = $0e856af10b3b08bf$var$getPathContributingMatches(matches);
    // When v7_relativeSplatPath is enabled, use the full pathname for the leaf
    // match so we include splat values for "." links.  See:
    // https://github.com/remix-run/react-router/issues/11052#issuecomment-1836589329
    if (v7_relativeSplatPath) return pathMatches.map((match, idx)=>idx === matches.length - 1 ? match.pathname : match.pathnameBase);
    return pathMatches.map((match)=>match.pathnameBase);
}
/**
 * @private
 */ function $0e856af10b3b08bf$export$cae722b0cc860f13(toArg, routePathnames, locationPathname, isPathRelative) {
    if (isPathRelative === void 0) isPathRelative = false;
    let to;
    if (typeof toArg === "string") to = $0e856af10b3b08bf$export$8ccf933b0513f8d0(toArg);
    else {
        to = $0e856af10b3b08bf$var$_extends({}, toArg);
        $0e856af10b3b08bf$export$3e9cee6b33872309(!to.pathname || !to.pathname.includes("?"), $0e856af10b3b08bf$var$getInvalidPathError("?", "pathname", "search", to));
        $0e856af10b3b08bf$export$3e9cee6b33872309(!to.pathname || !to.pathname.includes("#"), $0e856af10b3b08bf$var$getInvalidPathError("#", "pathname", "hash", to));
        $0e856af10b3b08bf$export$3e9cee6b33872309(!to.search || !to.search.includes("#"), $0e856af10b3b08bf$var$getInvalidPathError("#", "search", "hash", to));
    }
    let isEmptyPath = toArg === "" || to.pathname === "";
    let toPathname = isEmptyPath ? "/" : to.pathname;
    let from;
    // Routing is relative to the current pathname if explicitly requested.
    //
    // If a pathname is explicitly provided in `to`, it should be relative to the
    // route context. This is explained in `Note on `<Link to>` values` in our
    // migration guide from v5 as a means of disambiguation between `to` values
    // that begin with `/` and those that do not. However, this is problematic for
    // `to` values that do not provide a pathname. `to` can simply be a search or
    // hash string, in which case we should assume that the navigation is relative
    // to the current location's pathname and *not* the route pathname.
    if (toPathname == null) from = locationPathname;
    else {
        let routePathnameIndex = routePathnames.length - 1;
        // With relative="route" (the default), each leading .. segment means
        // "go up one route" instead of "go up one URL segment".  This is a key
        // difference from how <a href> works and a major reason we call this a
        // "to" value instead of a "href".
        if (!isPathRelative && toPathname.startsWith("..")) {
            let toSegments = toPathname.split("/");
            while(toSegments[0] === ".."){
                toSegments.shift();
                routePathnameIndex -= 1;
            }
            to.pathname = toSegments.join("/");
        }
        from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
    }
    let path = $0e856af10b3b08bf$export$b09f2ff0bbcb43c7(to, from);
    // Ensure the pathname has a trailing slash if the original "to" had one
    let hasExplicitTrailingSlash = toPathname && toPathname !== "/" && toPathname.endsWith("/");
    // Or if this was a link to the current path which has a trailing slash
    let hasCurrentTrailingSlash = (isEmptyPath || toPathname === ".") && locationPathname.endsWith("/");
    if (!path.pathname.endsWith("/") && (hasExplicitTrailingSlash || hasCurrentTrailingSlash)) path.pathname += "/";
    return path;
}
/**
 * @private
 */ function $0e856af10b3b08bf$export$f5655dfea9d981c7(to) {
    // Empty strings should be treated the same as / paths
    return to === "" || to.pathname === "" ? "/" : typeof to === "string" ? $0e856af10b3b08bf$export$8ccf933b0513f8d0(to).pathname : to.pathname;
}
/**
 * @private
 */ const $0e856af10b3b08bf$export$86d9a7913e44197e = (paths)=>paths.join("/").replace(/\/\/+/g, "/");
/**
 * @private
 */ const $0e856af10b3b08bf$export$a5c6d149b50c1d86 = (pathname)=>pathname.replace(/\/+$/, "").replace(/^\/*/, "/");
/**
 * @private
 */ const $0e856af10b3b08bf$var$normalizeSearch = (search)=>!search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;
/**
 * @private
 */ const $0e856af10b3b08bf$var$normalizeHash = (hash)=>!hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;
/**
 * This is a shortcut for creating `application/json` responses. Converts `data`
 * to JSON and sets the `Content-Type` header.
 */ const $0e856af10b3b08bf$export$7b419323e6ed4f31 = function json(data, init) {
    if (init === void 0) init = {};
    let responseInit = typeof init === "number" ? {
        status: init
    } : init;
    let headers = new Headers(responseInit.headers);
    if (!headers.has("Content-Type")) headers.set("Content-Type", "application/json; charset=utf-8");
    return new Response(JSON.stringify(data), $0e856af10b3b08bf$var$_extends({}, responseInit, {
        headers: headers
    }));
};
class $0e856af10b3b08bf$export$42a99a7a4bc0e76a extends Error {
}
class $0e856af10b3b08bf$export$61d759255b4eec65 {
    constructor(data, responseInit){
        this.pendingKeysSet = new Set();
        this.subscribers = new Set();
        this.deferredKeys = [];
        $0e856af10b3b08bf$export$3e9cee6b33872309(data && typeof data === "object" && !Array.isArray(data), "defer() only accepts plain objects");
        // Set up an AbortController + Promise we can race against to exit early
        // cancellation
        let reject;
        this.abortPromise = new Promise((_, r)=>reject = r);
        this.controller = new AbortController();
        let onAbort = ()=>reject(new $0e856af10b3b08bf$export$42a99a7a4bc0e76a("Deferred data aborted"));
        this.unlistenAbortSignal = ()=>this.controller.signal.removeEventListener("abort", onAbort);
        this.controller.signal.addEventListener("abort", onAbort);
        this.data = Object.entries(data).reduce((acc, _ref2)=>{
            let [key, value] = _ref2;
            return Object.assign(acc, {
                [key]: this.trackPromise(key, value)
            });
        }, {});
        if (this.done) // All incoming values were resolved
        this.unlistenAbortSignal();
        this.init = responseInit;
    }
    trackPromise(key, value) {
        if (!(value instanceof Promise)) return value;
        this.deferredKeys.push(key);
        this.pendingKeysSet.add(key);
        // We store a little wrapper promise that will be extended with
        // _data/_error props upon resolve/reject
        let promise = Promise.race([
            value,
            this.abortPromise
        ]).then((data)=>this.onSettle(promise, key, undefined, data), (error)=>this.onSettle(promise, key, error));
        // Register rejection listeners to avoid uncaught promise rejections on
        // errors or aborted deferred values
        promise.catch(()=>{});
        Object.defineProperty(promise, "_tracked", {
            get: ()=>true
        });
        return promise;
    }
    onSettle(promise, key, error, data) {
        if (this.controller.signal.aborted && error instanceof $0e856af10b3b08bf$export$42a99a7a4bc0e76a) {
            this.unlistenAbortSignal();
            Object.defineProperty(promise, "_error", {
                get: ()=>error
            });
            return Promise.reject(error);
        }
        this.pendingKeysSet.delete(key);
        if (this.done) // Nothing left to abort!
        this.unlistenAbortSignal();
        // If the promise was resolved/rejected with undefined, we'll throw an error as you
        // should always resolve with a value or null
        if (error === undefined && data === undefined) {
            let undefinedError = new Error('Deferred data for key "' + key + '" resolved/rejected with `undefined`, ' + "you must resolve/reject with a value or `null`.");
            Object.defineProperty(promise, "_error", {
                get: ()=>undefinedError
            });
            this.emit(false, key);
            return Promise.reject(undefinedError);
        }
        if (data === undefined) {
            Object.defineProperty(promise, "_error", {
                get: ()=>error
            });
            this.emit(false, key);
            return Promise.reject(error);
        }
        Object.defineProperty(promise, "_data", {
            get: ()=>data
        });
        this.emit(false, key);
        return data;
    }
    emit(aborted, settledKey) {
        this.subscribers.forEach((subscriber)=>subscriber(aborted, settledKey));
    }
    subscribe(fn) {
        this.subscribers.add(fn);
        return ()=>this.subscribers.delete(fn);
    }
    cancel() {
        this.controller.abort();
        this.pendingKeysSet.forEach((v, k)=>this.pendingKeysSet.delete(k));
        this.emit(true);
    }
    async resolveData(signal) {
        let aborted = false;
        if (!this.done) {
            let onAbort = ()=>this.cancel();
            signal.addEventListener("abort", onAbort);
            aborted = await new Promise((resolve)=>{
                this.subscribe((aborted)=>{
                    signal.removeEventListener("abort", onAbort);
                    if (aborted || this.done) resolve(aborted);
                });
            });
        }
        return aborted;
    }
    get done() {
        return this.pendingKeysSet.size === 0;
    }
    get unwrappedData() {
        $0e856af10b3b08bf$export$3e9cee6b33872309(this.data !== null && this.done, "Can only unwrap data on initialized and settled deferreds");
        return Object.entries(this.data).reduce((acc, _ref3)=>{
            let [key, value] = _ref3;
            return Object.assign(acc, {
                [key]: $0e856af10b3b08bf$var$unwrapTrackedPromise(value)
            });
        }, {});
    }
    get pendingKeys() {
        return Array.from(this.pendingKeysSet);
    }
}
function $0e856af10b3b08bf$var$isTrackedPromise(value) {
    return value instanceof Promise && value._tracked === true;
}
function $0e856af10b3b08bf$var$unwrapTrackedPromise(value) {
    if (!$0e856af10b3b08bf$var$isTrackedPromise(value)) return value;
    if (value._error) throw value._error;
    return value._data;
}
const $0e856af10b3b08bf$export$260e5c0943f31606 = function defer(data, init) {
    if (init === void 0) init = {};
    let responseInit = typeof init === "number" ? {
        status: init
    } : init;
    return new $0e856af10b3b08bf$export$61d759255b4eec65(data, responseInit);
};
/**
 * A redirect response. Sets the status code and the `Location` header.
 * Defaults to "302 Found".
 */ const $0e856af10b3b08bf$export$89e12c5b50f7529d = function redirect(url, init) {
    if (init === void 0) init = 302;
    let responseInit = init;
    if (typeof responseInit === "number") responseInit = {
        status: responseInit
    };
    else if (typeof responseInit.status === "undefined") responseInit.status = 302;
    let headers = new Headers(responseInit.headers);
    headers.set("Location", url);
    return new Response(null, $0e856af10b3b08bf$var$_extends({}, responseInit, {
        headers: headers
    }));
};
/**
 * A redirect response that will force a document reload to the new location.
 * Sets the status code and the `Location` header.
 * Defaults to "302 Found".
 */ const $0e856af10b3b08bf$export$a6cd19cd1951a23c = (url, init)=>{
    let response = $0e856af10b3b08bf$export$89e12c5b50f7529d(url, init);
    response.headers.set("X-Remix-Reload-Document", "true");
    return response;
};
/**
 * @private
 * Utility class we use to hold auto-unwrapped 4xx/5xx Response bodies
 *
 * We don't export the class for public use since it's an implementation
 * detail, but we export the interface above so folks can build their own
 * abstractions around instances via isRouteErrorResponse()
 */ class $0e856af10b3b08bf$export$6c6580e81da25755 {
    constructor(status, statusText, data, internal){
        if (internal === void 0) internal = false;
        this.status = status;
        this.statusText = statusText || "";
        this.internal = internal;
        if (data instanceof Error) {
            this.data = data.toString();
            this.error = data;
        } else this.data = data;
    }
}
/**
 * Check if the given error is an ErrorResponse generated from a 4xx/5xx
 * Response thrown from an action/loader
 */ function $0e856af10b3b08bf$export$972111febbeef05b(error) {
    return error != null && typeof error.status === "number" && typeof error.statusText === "string" && typeof error.internal === "boolean" && "data" in error;
}
const $0e856af10b3b08bf$var$validMutationMethodsArr = [
    "post",
    "put",
    "patch",
    "delete"
];
const $0e856af10b3b08bf$var$validMutationMethods = new Set($0e856af10b3b08bf$var$validMutationMethodsArr);
const $0e856af10b3b08bf$var$validRequestMethodsArr = [
    "get",
    ...$0e856af10b3b08bf$var$validMutationMethodsArr
];
const $0e856af10b3b08bf$var$validRequestMethods = new Set($0e856af10b3b08bf$var$validRequestMethodsArr);
const $0e856af10b3b08bf$var$redirectStatusCodes = new Set([
    301,
    302,
    303,
    307,
    308
]);
const $0e856af10b3b08bf$var$redirectPreserveMethodStatusCodes = new Set([
    307,
    308
]);
const $0e856af10b3b08bf$export$ed3e14b2f9e105d0 = {
    state: "idle",
    location: undefined,
    formMethod: undefined,
    formAction: undefined,
    formEncType: undefined,
    formData: undefined,
    json: undefined,
    text: undefined
};
const $0e856af10b3b08bf$export$52eace9c284d3585 = {
    state: "idle",
    data: undefined,
    formMethod: undefined,
    formAction: undefined,
    formEncType: undefined,
    formData: undefined,
    json: undefined,
    text: undefined
};
const $0e856af10b3b08bf$export$386d57f03f0b2883 = {
    state: "unblocked",
    proceed: undefined,
    reset: undefined,
    location: undefined
};
const $0e856af10b3b08bf$var$ABSOLUTE_URL_REGEX = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
const $0e856af10b3b08bf$var$defaultMapRouteProperties = (route)=>({
        hasErrorBoundary: Boolean(route.hasErrorBoundary)
    });
const $0e856af10b3b08bf$var$TRANSITIONS_STORAGE_KEY = "remix-router-transitions";
//#endregion
////////////////////////////////////////////////////////////////////////////////
//#region createRouter
////////////////////////////////////////////////////////////////////////////////
/**
 * Create a router and listen to history POP navigations
 */ function $0e856af10b3b08bf$export$baddd0131ee8c05b(init) {
    const routerWindow = init.window ? init.window : typeof window !== "undefined" ? window : undefined;
    const isBrowser = typeof routerWindow !== "undefined" && typeof routerWindow.document !== "undefined" && typeof routerWindow.document.createElement !== "undefined";
    const isServer = !isBrowser;
    $0e856af10b3b08bf$export$3e9cee6b33872309(init.routes.length > 0, "You must provide a non-empty routes array to createRouter");
    let mapRouteProperties;
    if (init.mapRouteProperties) mapRouteProperties = init.mapRouteProperties;
    else if (init.detectErrorBoundary) {
        // If they are still using the deprecated version, wrap it with the new API
        let detectErrorBoundary = init.detectErrorBoundary;
        mapRouteProperties = (route)=>({
                hasErrorBoundary: detectErrorBoundary(route)
            });
    } else mapRouteProperties = $0e856af10b3b08bf$var$defaultMapRouteProperties;
    // Routes keyed by ID
    let manifest = {};
    // Routes in tree format for matching
    let dataRoutes = $0e856af10b3b08bf$export$4a6d22b32134ea5d(init.routes, mapRouteProperties, undefined, manifest);
    let inFlightDataRoutes;
    let basename = init.basename || "/";
    // Config driven behavior flags
    let future = $0e856af10b3b08bf$var$_extends({
        v7_fetcherPersist: false,
        v7_normalizeFormMethod: false,
        v7_partialHydration: false,
        v7_prependBasename: false,
        v7_relativeSplatPath: false
    }, init.future);
    // Cleanup function for history
    let unlistenHistory = null;
    // Externally-provided functions to call on all state changes
    let subscribers = new Set();
    // Externally-provided object to hold scroll restoration locations during routing
    let savedScrollPositions = null;
    // Externally-provided function to get scroll restoration keys
    let getScrollRestorationKey = null;
    // Externally-provided function to get current scroll position
    let getScrollPosition = null;
    // One-time flag to control the initial hydration scroll restoration.  Because
    // we don't get the saved positions from <ScrollRestoration /> until _after_
    // the initial render, we need to manually trigger a separate updateState to
    // send along the restoreScrollPosition
    // Set to true if we have `hydrationData` since we assume we were SSR'd and that
    // SSR did the initial scroll restoration.
    let initialScrollRestored = init.hydrationData != null;
    let initialMatches = $0e856af10b3b08bf$export$2708184779ceb39d(dataRoutes, init.history.location, basename);
    let initialErrors = null;
    if (initialMatches == null) {
        // If we do not match a user-provided-route, fall back to the root
        // to allow the error boundary to take over
        let error = $0e856af10b3b08bf$var$getInternalRouterError(404, {
            pathname: init.history.location.pathname
        });
        let { matches: matches, route: route } = $0e856af10b3b08bf$var$getShortCircuitMatches(dataRoutes);
        initialMatches = matches;
        initialErrors = {
            [route.id]: error
        };
    }
    let initialized;
    let hasLazyRoutes = initialMatches.some((m)=>m.route.lazy);
    let hasLoaders = initialMatches.some((m)=>m.route.loader);
    if (hasLazyRoutes) // All initialMatches need to be loaded before we're ready.  If we have lazy
    // functions around still then we'll need to run them in initialize()
    initialized = false;
    else if (!hasLoaders) // If we've got no loaders to run, then we're good to go
    initialized = true;
    else if (future.v7_partialHydration) {
        // If partial hydration is enabled, we're initialized so long as we were
        // provided with hydrationData for every route with a loader, and no loaders
        // were marked for explicit hydration
        let loaderData = init.hydrationData ? init.hydrationData.loaderData : null;
        let errors = init.hydrationData ? init.hydrationData.errors : null;
        let isRouteInitialized = (m)=>{
            // No loader, nothing to initialize
            if (!m.route.loader) return true;
            // Explicitly opting-in to running on hydration
            if (m.route.loader.hydrate === true) return false;
            // Otherwise, initialized if hydrated with data or an error
            return loaderData && loaderData[m.route.id] !== undefined || errors && errors[m.route.id] !== undefined;
        };
        // If errors exist, don't consider routes below the boundary
        if (errors) {
            let idx = initialMatches.findIndex((m)=>errors[m.route.id] !== undefined);
            initialized = initialMatches.slice(0, idx + 1).every(isRouteInitialized);
        } else initialized = initialMatches.every(isRouteInitialized);
    } else // Without partial hydration - we're initialized if we were provided any
    // hydrationData - which is expected to be complete
    initialized = init.hydrationData != null;
    let router;
    let state = {
        historyAction: init.history.action,
        location: init.history.location,
        matches: initialMatches,
        initialized: initialized,
        navigation: $0e856af10b3b08bf$export$ed3e14b2f9e105d0,
        // Don't restore on initial updateState() if we were SSR'd
        restoreScrollPosition: init.hydrationData != null ? false : null,
        preventScrollReset: false,
        revalidation: "idle",
        loaderData: init.hydrationData && init.hydrationData.loaderData || {},
        actionData: init.hydrationData && init.hydrationData.actionData || null,
        errors: init.hydrationData && init.hydrationData.errors || initialErrors,
        fetchers: new Map(),
        blockers: new Map()
    };
    // -- Stateful internal variables to manage navigations --
    // Current navigation in progress (to be committed in completeNavigation)
    let pendingAction = $0e856af10b3b08bf$export$e19cd5f9376f8cee.Pop;
    // Should the current navigation prevent the scroll reset if scroll cannot
    // be restored?
    let pendingPreventScrollReset = false;
    // AbortController for the active navigation
    let pendingNavigationController;
    // Should the current navigation enable document.startViewTransition?
    let pendingViewTransitionEnabled = false;
    // Store applied view transitions so we can apply them on POP
    let appliedViewTransitions = new Map();
    // Cleanup function for persisting applied transitions to sessionStorage
    let removePageHideEventListener = null;
    // We use this to avoid touching history in completeNavigation if a
    // revalidation is entirely uninterrupted
    let isUninterruptedRevalidation = false;
    // Use this internal flag to force revalidation of all loaders:
    //  - submissions (completed or interrupted)
    //  - useRevalidator()
    //  - X-Remix-Revalidate (from redirect)
    let isRevalidationRequired = false;
    // Use this internal array to capture routes that require revalidation due
    // to a cancelled deferred on action submission
    let cancelledDeferredRoutes = [];
    // Use this internal array to capture fetcher loads that were cancelled by an
    // action navigation and require revalidation
    let cancelledFetcherLoads = [];
    // AbortControllers for any in-flight fetchers
    let fetchControllers = new Map();
    // Track loads based on the order in which they started
    let incrementingLoadId = 0;
    // Track the outstanding pending navigation data load to be compared against
    // the globally incrementing load when a fetcher load lands after a completed
    // navigation
    let pendingNavigationLoadId = -1;
    // Fetchers that triggered data reloads as a result of their actions
    let fetchReloadIds = new Map();
    // Fetchers that triggered redirect navigations
    let fetchRedirectIds = new Set();
    // Most recent href/match for fetcher.load calls for fetchers
    let fetchLoadMatches = new Map();
    // Ref-count mounted fetchers so we know when it's ok to clean them up
    let activeFetchers = new Map();
    // Fetchers that have requested a delete when using v7_fetcherPersist,
    // they'll be officially removed after they return to idle
    let deletedFetchers = new Set();
    // Store DeferredData instances for active route matches.  When a
    // route loader returns defer() we stick one in here.  Then, when a nested
    // promise resolves we update loaderData.  If a new navigation starts we
    // cancel active deferreds for eliminated routes.
    let activeDeferreds = new Map();
    // Store blocker functions in a separate Map outside of router state since
    // we don't need to update UI state if they change
    let blockerFunctions = new Map();
    // Flag to ignore the next history update, so we can revert the URL change on
    // a POP navigation that was blocked by the user without touching router state
    let ignoreNextHistoryUpdate = false;
    // Initialize the router, all side effects should be kicked off from here.
    // Implemented as a Fluent API for ease of:
    //   let router = createRouter(init).initialize();
    function initialize() {
        // If history informs us of a POP navigation, start the navigation but do not update
        // state.  We'll update our own state once the navigation completes
        unlistenHistory = init.history.listen((_ref)=>{
            let { action: historyAction, location: location, delta: delta } = _ref;
            // Ignore this event if it was just us resetting the URL from a
            // blocked POP navigation
            if (ignoreNextHistoryUpdate) {
                ignoreNextHistoryUpdate = false;
                return;
            }
            $0e856af10b3b08bf$export$c0e02632e14916fd(blockerFunctions.size === 0 || delta != null, "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");
            let blockerKey = shouldBlockNavigation({
                currentLocation: state.location,
                nextLocation: location,
                historyAction: historyAction
            });
            if (blockerKey && delta != null) {
                // Restore the URL to match the current UI, but don't update router state
                ignoreNextHistoryUpdate = true;
                init.history.go(delta * -1);
                // Put the blocker into a blocked state
                updateBlocker(blockerKey, {
                    state: "blocked",
                    location: location,
                    proceed () {
                        updateBlocker(blockerKey, {
                            state: "proceeding",
                            proceed: undefined,
                            reset: undefined,
                            location: location
                        });
                        // Re-do the same POP navigation we just blocked
                        init.history.go(delta);
                    },
                    reset () {
                        let blockers = new Map(state.blockers);
                        blockers.set(blockerKey, $0e856af10b3b08bf$export$386d57f03f0b2883);
                        updateState({
                            blockers: blockers
                        });
                    }
                });
                return;
            }
            return startNavigation(historyAction, location);
        });
        if (isBrowser) {
            // FIXME: This feels gross.  How can we cleanup the lines between
            // scrollRestoration/appliedTransitions persistance?
            $0e856af10b3b08bf$var$restoreAppliedTransitions(routerWindow, appliedViewTransitions);
            let _saveAppliedTransitions = ()=>$0e856af10b3b08bf$var$persistAppliedTransitions(routerWindow, appliedViewTransitions);
            routerWindow.addEventListener("pagehide", _saveAppliedTransitions);
            removePageHideEventListener = ()=>routerWindow.removeEventListener("pagehide", _saveAppliedTransitions);
        }
        // Kick off initial data load if needed.  Use Pop to avoid modifying history
        // Note we don't do any handling of lazy here.  For SPA's it'll get handled
        // in the normal navigation flow.  For SSR it's expected that lazy modules are
        // resolved prior to router creation since we can't go into a fallbackElement
        // UI for SSR'd apps
        if (!state.initialized) startNavigation($0e856af10b3b08bf$export$e19cd5f9376f8cee.Pop, state.location, {
            initialHydration: true
        });
        return router;
    }
    // Clean up a router and it's side effects
    function dispose() {
        if (unlistenHistory) unlistenHistory();
        if (removePageHideEventListener) removePageHideEventListener();
        subscribers.clear();
        pendingNavigationController && pendingNavigationController.abort();
        state.fetchers.forEach((_, key)=>deleteFetcher(key));
        state.blockers.forEach((_, key)=>deleteBlocker(key));
    }
    // Subscribe to state updates for the router
    function subscribe(fn) {
        subscribers.add(fn);
        return ()=>subscribers.delete(fn);
    }
    // Update our state and notify the calling context of the change
    function updateState(newState, opts) {
        if (opts === void 0) opts = {};
        state = $0e856af10b3b08bf$var$_extends({}, state, newState);
        // Prep fetcher cleanup so we can tell the UI which fetcher data entries
        // can be removed
        let completedFetchers = [];
        let deletedFetchersKeys = [];
        if (future.v7_fetcherPersist) state.fetchers.forEach((fetcher, key)=>{
            if (fetcher.state === "idle") {
                if (deletedFetchers.has(key)) // Unmounted from the UI and can be totally removed
                deletedFetchersKeys.push(key);
                else // Returned to idle but still mounted in the UI, so semi-remains for
                // revalidations and such
                completedFetchers.push(key);
            }
        });
        // Iterate over a local copy so that if flushSync is used and we end up
        // removing and adding a new subscriber due to the useCallback dependencies,
        // we don't get ourselves into a loop calling the new subscriber immediately
        [
            ...subscribers
        ].forEach((subscriber)=>subscriber(state, {
                deletedFetchers: deletedFetchersKeys,
                unstable_viewTransitionOpts: opts.viewTransitionOpts,
                unstable_flushSync: opts.flushSync === true
            }));
        // Remove idle fetchers from state since we only care about in-flight fetchers.
        if (future.v7_fetcherPersist) {
            completedFetchers.forEach((key)=>state.fetchers.delete(key));
            deletedFetchersKeys.forEach((key)=>deleteFetcher(key));
        }
    }
    // Complete a navigation returning the state.navigation back to the IDLE_NAVIGATION
    // and setting state.[historyAction/location/matches] to the new route.
    // - Location is a required param
    // - Navigation will always be set to IDLE_NAVIGATION
    // - Can pass any other state in newState
    function completeNavigation(location, newState, _temp) {
        var _location$state, _location$state2;
        let { flushSync: flushSync } = _temp === void 0 ? {} : _temp;
        // Deduce if we're in a loading/actionReload state:
        // - We have committed actionData in the store
        // - The current navigation was a mutation submission
        // - We're past the submitting state and into the loading state
        // - The location being loaded is not the result of a redirect
        let isActionReload = state.actionData != null && state.navigation.formMethod != null && $0e856af10b3b08bf$var$isMutationMethod(state.navigation.formMethod) && state.navigation.state === "loading" && ((_location$state = location.state) == null ? void 0 : _location$state._isRedirect) !== true;
        let actionData;
        if (newState.actionData) {
            if (Object.keys(newState.actionData).length > 0) actionData = newState.actionData;
            else // Empty actionData -> clear prior actionData due to an action error
            actionData = null;
        } else if (isActionReload) // Keep the current data if we're wrapping up the action reload
        actionData = state.actionData;
        else // Clear actionData on any other completed navigations
        actionData = null;
        // Always preserve any existing loaderData from re-used routes
        let loaderData = newState.loaderData ? $0e856af10b3b08bf$var$mergeLoaderData(state.loaderData, newState.loaderData, newState.matches || [], newState.errors) : state.loaderData;
        // On a successful navigation we can assume we got through all blockers
        // so we can start fresh
        let blockers = state.blockers;
        if (blockers.size > 0) {
            blockers = new Map(blockers);
            blockers.forEach((_, k)=>blockers.set(k, $0e856af10b3b08bf$export$386d57f03f0b2883));
        }
        // Always respect the user flag.  Otherwise don't reset on mutation
        // submission navigations unless they redirect
        let preventScrollReset = pendingPreventScrollReset === true || state.navigation.formMethod != null && $0e856af10b3b08bf$var$isMutationMethod(state.navigation.formMethod) && ((_location$state2 = location.state) == null ? void 0 : _location$state2._isRedirect) !== true;
        if (inFlightDataRoutes) {
            dataRoutes = inFlightDataRoutes;
            inFlightDataRoutes = undefined;
        }
        if (isUninterruptedRevalidation) ;
        else if (pendingAction === $0e856af10b3b08bf$export$e19cd5f9376f8cee.Pop) ;
        else if (pendingAction === $0e856af10b3b08bf$export$e19cd5f9376f8cee.Push) init.history.push(location, location.state);
        else if (pendingAction === $0e856af10b3b08bf$export$e19cd5f9376f8cee.Replace) init.history.replace(location, location.state);
        let viewTransitionOpts;
        // On POP, enable transitions if they were enabled on the original navigation
        if (pendingAction === $0e856af10b3b08bf$export$e19cd5f9376f8cee.Pop) {
            // Forward takes precedence so they behave like the original navigation
            let priorPaths = appliedViewTransitions.get(state.location.pathname);
            if (priorPaths && priorPaths.has(location.pathname)) viewTransitionOpts = {
                currentLocation: state.location,
                nextLocation: location
            };
            else if (appliedViewTransitions.has(location.pathname)) // If we don't have a previous forward nav, assume we're popping back to
            // the new location and enable if that location previously enabled
            viewTransitionOpts = {
                currentLocation: location,
                nextLocation: state.location
            };
        } else if (pendingViewTransitionEnabled) {
            // Store the applied transition on PUSH/REPLACE
            let toPaths = appliedViewTransitions.get(state.location.pathname);
            if (toPaths) toPaths.add(location.pathname);
            else {
                toPaths = new Set([
                    location.pathname
                ]);
                appliedViewTransitions.set(state.location.pathname, toPaths);
            }
            viewTransitionOpts = {
                currentLocation: state.location,
                nextLocation: location
            };
        }
        updateState($0e856af10b3b08bf$var$_extends({}, newState, {
            actionData: actionData,
            loaderData: loaderData,
            historyAction: pendingAction,
            location: location,
            initialized: true,
            navigation: $0e856af10b3b08bf$export$ed3e14b2f9e105d0,
            revalidation: "idle",
            restoreScrollPosition: getSavedScrollPosition(location, newState.matches || state.matches),
            preventScrollReset: preventScrollReset,
            blockers: blockers
        }), {
            viewTransitionOpts: viewTransitionOpts,
            flushSync: flushSync === true
        });
        // Reset stateful navigation vars
        pendingAction = $0e856af10b3b08bf$export$e19cd5f9376f8cee.Pop;
        pendingPreventScrollReset = false;
        pendingViewTransitionEnabled = false;
        isUninterruptedRevalidation = false;
        isRevalidationRequired = false;
        cancelledDeferredRoutes = [];
        cancelledFetcherLoads = [];
    }
    // Trigger a navigation event, which can either be a numerical POP or a PUSH
    // replace with an optional submission
    async function navigate(to, opts) {
        if (typeof to === "number") {
            init.history.go(to);
            return;
        }
        let normalizedPath = $0e856af10b3b08bf$var$normalizeTo(state.location, state.matches, basename, future.v7_prependBasename, to, future.v7_relativeSplatPath, opts == null ? void 0 : opts.fromRouteId, opts == null ? void 0 : opts.relative);
        let { path: path, submission: submission, error: error } = $0e856af10b3b08bf$var$normalizeNavigateOptions(future.v7_normalizeFormMethod, false, normalizedPath, opts);
        let currentLocation = state.location;
        let nextLocation = $0e856af10b3b08bf$var$createLocation(state.location, path, opts && opts.state);
        // When using navigate as a PUSH/REPLACE we aren't reading an already-encoded
        // URL from window.location, so we need to encode it here so the behavior
        // remains the same as POP and non-data-router usages.  new URL() does all
        // the same encoding we'd get from a history.pushState/window.location read
        // without having to touch history
        nextLocation = $0e856af10b3b08bf$var$_extends({}, nextLocation, init.history.encodeLocation(nextLocation));
        let userReplace = opts && opts.replace != null ? opts.replace : undefined;
        let historyAction = $0e856af10b3b08bf$export$e19cd5f9376f8cee.Push;
        if (userReplace === true) historyAction = $0e856af10b3b08bf$export$e19cd5f9376f8cee.Replace;
        else if (userReplace === false) ;
        else if (submission != null && $0e856af10b3b08bf$var$isMutationMethod(submission.formMethod) && submission.formAction === state.location.pathname + state.location.search) // By default on submissions to the current location we REPLACE so that
        // users don't have to double-click the back button to get to the prior
        // location.  If the user redirects to a different location from the
        // action/loader this will be ignored and the redirect will be a PUSH
        historyAction = $0e856af10b3b08bf$export$e19cd5f9376f8cee.Replace;
        let preventScrollReset = opts && "preventScrollReset" in opts ? opts.preventScrollReset === true : undefined;
        let flushSync = (opts && opts.unstable_flushSync) === true;
        let blockerKey = shouldBlockNavigation({
            currentLocation: currentLocation,
            nextLocation: nextLocation,
            historyAction: historyAction
        });
        if (blockerKey) {
            // Put the blocker into a blocked state
            updateBlocker(blockerKey, {
                state: "blocked",
                location: nextLocation,
                proceed () {
                    updateBlocker(blockerKey, {
                        state: "proceeding",
                        proceed: undefined,
                        reset: undefined,
                        location: nextLocation
                    });
                    // Send the same navigation through
                    navigate(to, opts);
                },
                reset () {
                    let blockers = new Map(state.blockers);
                    blockers.set(blockerKey, $0e856af10b3b08bf$export$386d57f03f0b2883);
                    updateState({
                        blockers: blockers
                    });
                }
            });
            return;
        }
        return await startNavigation(historyAction, nextLocation, {
            submission: submission,
            // Send through the formData serialization error if we have one so we can
            // render at the right error boundary after we match routes
            pendingError: error,
            preventScrollReset: preventScrollReset,
            replace: opts && opts.replace,
            enableViewTransition: opts && opts.unstable_viewTransition,
            flushSync: flushSync
        });
    }
    // Revalidate all current loaders.  If a navigation is in progress or if this
    // is interrupted by a navigation, allow this to "succeed" by calling all
    // loaders during the next loader round
    function revalidate() {
        interruptActiveLoads();
        updateState({
            revalidation: "loading"
        });
        // If we're currently submitting an action, we don't need to start a new
        // navigation, we'll just let the follow up loader execution call all loaders
        if (state.navigation.state === "submitting") return;
        // If we're currently in an idle state, start a new navigation for the current
        // action/location and mark it as uninterrupted, which will skip the history
        // update in completeNavigation
        if (state.navigation.state === "idle") {
            startNavigation(state.historyAction, state.location, {
                startUninterruptedRevalidation: true
            });
            return;
        }
        // Otherwise, if we're currently in a loading state, just start a new
        // navigation to the navigation.location but do not trigger an uninterrupted
        // revalidation so that history correctly updates once the navigation completes
        startNavigation(pendingAction || state.historyAction, state.navigation.location, {
            overrideNavigation: state.navigation
        });
    }
    // Start a navigation to the given action/location.  Can optionally provide a
    // overrideNavigation which will override the normalLoad in the case of a redirect
    // navigation
    async function startNavigation(historyAction, location, opts) {
        // Abort any in-progress navigations and start a new one. Unset any ongoing
        // uninterrupted revalidations unless told otherwise, since we want this
        // new navigation to update history normally
        pendingNavigationController && pendingNavigationController.abort();
        pendingNavigationController = null;
        pendingAction = historyAction;
        isUninterruptedRevalidation = (opts && opts.startUninterruptedRevalidation) === true;
        // Save the current scroll position every time we start a new navigation,
        // and track whether we should reset scroll on completion
        saveScrollPosition(state.location, state.matches);
        pendingPreventScrollReset = (opts && opts.preventScrollReset) === true;
        pendingViewTransitionEnabled = (opts && opts.enableViewTransition) === true;
        let routesToUse = inFlightDataRoutes || dataRoutes;
        let loadingNavigation = opts && opts.overrideNavigation;
        let matches = $0e856af10b3b08bf$export$2708184779ceb39d(routesToUse, location, basename);
        let flushSync = (opts && opts.flushSync) === true;
        // Short circuit with a 404 on the root error boundary if we match nothing
        if (!matches) {
            let error = $0e856af10b3b08bf$var$getInternalRouterError(404, {
                pathname: location.pathname
            });
            let { matches: notFoundMatches, route: route } = $0e856af10b3b08bf$var$getShortCircuitMatches(routesToUse);
            // Cancel all pending deferred on 404s since we don't keep any routes
            cancelActiveDeferreds();
            completeNavigation(location, {
                matches: notFoundMatches,
                loaderData: {},
                errors: {
                    [route.id]: error
                }
            }, {
                flushSync: flushSync
            });
            return;
        }
        // Short circuit if it's only a hash change and not a revalidation or
        // mutation submission.
        //
        // Ignore on initial page loads because since the initial load will always
        // be "same hash".  For example, on /page#hash and submit a <Form method="post">
        // which will default to a navigation to /page
        if (state.initialized && !isRevalidationRequired && $0e856af10b3b08bf$var$isHashChangeOnly(state.location, location) && !(opts && opts.submission && $0e856af10b3b08bf$var$isMutationMethod(opts.submission.formMethod))) {
            completeNavigation(location, {
                matches: matches
            }, {
                flushSync: flushSync
            });
            return;
        }
        // Create a controller/Request for this navigation
        pendingNavigationController = new AbortController();
        let request = $0e856af10b3b08bf$var$createClientSideRequest(init.history, location, pendingNavigationController.signal, opts && opts.submission);
        let pendingActionData;
        let pendingError;
        if (opts && opts.pendingError) // If we have a pendingError, it means the user attempted a GET submission
        // with binary FormData so assign here and skip to handleLoaders.  That
        // way we handle calling loaders above the boundary etc.  It's not really
        // different from an actionError in that sense.
        pendingError = {
            [$0e856af10b3b08bf$var$findNearestBoundary(matches).route.id]: opts.pendingError
        };
        else if (opts && opts.submission && $0e856af10b3b08bf$var$isMutationMethod(opts.submission.formMethod)) {
            // Call action if we received an action submission
            let actionOutput = await handleAction(request, location, opts.submission, matches, {
                replace: opts.replace,
                flushSync: flushSync
            });
            if (actionOutput.shortCircuited) return;
            pendingActionData = actionOutput.pendingActionData;
            pendingError = actionOutput.pendingActionError;
            loadingNavigation = $0e856af10b3b08bf$var$getLoadingNavigation(location, opts.submission);
            flushSync = false;
            // Create a GET request for the loaders
            request = new Request(request.url, {
                signal: request.signal
            });
        }
        // Call loaders
        let { shortCircuited: shortCircuited, loaderData: loaderData, errors: errors } = await handleLoaders(request, location, matches, loadingNavigation, opts && opts.submission, opts && opts.fetcherSubmission, opts && opts.replace, opts && opts.initialHydration === true, flushSync, pendingActionData, pendingError);
        if (shortCircuited) return;
        // Clean up now that the action/loaders have completed.  Don't clean up if
        // we short circuited because pendingNavigationController will have already
        // been assigned to a new controller for the next navigation
        pendingNavigationController = null;
        completeNavigation(location, $0e856af10b3b08bf$var$_extends({
            matches: matches
        }, pendingActionData ? {
            actionData: pendingActionData
        } : {}, {
            loaderData: loaderData,
            errors: errors
        }));
    }
    // Call the action matched by the leaf route for this navigation and handle
    // redirects/errors
    async function handleAction(request, location, submission, matches, opts) {
        if (opts === void 0) opts = {};
        interruptActiveLoads();
        // Put us in a submitting state
        let navigation = $0e856af10b3b08bf$var$getSubmittingNavigation(location, submission);
        updateState({
            navigation: navigation
        }, {
            flushSync: opts.flushSync === true
        });
        // Call our action and get the result
        let result;
        let actionMatch = $0e856af10b3b08bf$var$getTargetMatch(matches, location);
        if (!actionMatch.route.action && !actionMatch.route.lazy) result = {
            type: $0e856af10b3b08bf$var$ResultType.error,
            error: $0e856af10b3b08bf$var$getInternalRouterError(405, {
                method: request.method,
                pathname: location.pathname,
                routeId: actionMatch.route.id
            })
        };
        else {
            result = await $0e856af10b3b08bf$var$callLoaderOrAction("action", request, actionMatch, matches, manifest, mapRouteProperties, basename, future.v7_relativeSplatPath);
            if (request.signal.aborted) return {
                shortCircuited: true
            };
        }
        if ($0e856af10b3b08bf$var$isRedirectResult(result)) {
            let replace;
            if (opts && opts.replace != null) replace = opts.replace;
            else // If the user didn't explicity indicate replace behavior, replace if
            // we redirected to the exact same location we're currently at to avoid
            // double back-buttons
            replace = result.location === state.location.pathname + state.location.search;
            await startRedirectNavigation(state, result, {
                submission: submission,
                replace: replace
            });
            return {
                shortCircuited: true
            };
        }
        if ($0e856af10b3b08bf$var$isErrorResult(result)) {
            // Store off the pending error - we use it to determine which loaders
            // to call and will commit it when we complete the navigation
            let boundaryMatch = $0e856af10b3b08bf$var$findNearestBoundary(matches, actionMatch.route.id);
            // By default, all submissions are REPLACE navigations, but if the
            // action threw an error that'll be rendered in an errorElement, we fall
            // back to PUSH so that the user can use the back button to get back to
            // the pre-submission form location to try again
            if ((opts && opts.replace) !== true) pendingAction = $0e856af10b3b08bf$export$e19cd5f9376f8cee.Push;
            return {
                // Send back an empty object we can use to clear out any prior actionData
                pendingActionData: {},
                pendingActionError: {
                    [boundaryMatch.route.id]: result.error
                }
            };
        }
        if ($0e856af10b3b08bf$var$isDeferredResult(result)) throw $0e856af10b3b08bf$var$getInternalRouterError(400, {
            type: "defer-action"
        });
        return {
            pendingActionData: {
                [actionMatch.route.id]: result.data
            }
        };
    }
    // Call all applicable loaders for the given matches, handling redirects,
    // errors, etc.
    async function handleLoaders(request, location, matches, overrideNavigation, submission, fetcherSubmission, replace, initialHydration, flushSync, pendingActionData, pendingError) {
        // Figure out the right navigation we want to use for data loading
        let loadingNavigation = overrideNavigation || $0e856af10b3b08bf$var$getLoadingNavigation(location, submission);
        // If this was a redirect from an action we don't have a "submission" but
        // we have it on the loading navigation so use that if available
        let activeSubmission = submission || fetcherSubmission || $0e856af10b3b08bf$var$getSubmissionFromNavigation(loadingNavigation);
        let routesToUse = inFlightDataRoutes || dataRoutes;
        let [matchesToLoad, revalidatingFetchers] = $0e856af10b3b08bf$var$getMatchesToLoad(init.history, state, matches, activeSubmission, location, future.v7_partialHydration && initialHydration === true, isRevalidationRequired, cancelledDeferredRoutes, cancelledFetcherLoads, deletedFetchers, fetchLoadMatches, fetchRedirectIds, routesToUse, basename, pendingActionData, pendingError);
        // Cancel pending deferreds for no-longer-matched routes or routes we're
        // about to reload.  Note that if this is an action reload we would have
        // already cancelled all pending deferreds so this would be a no-op
        cancelActiveDeferreds((routeId)=>!(matches && matches.some((m)=>m.route.id === routeId)) || matchesToLoad && matchesToLoad.some((m)=>m.route.id === routeId));
        pendingNavigationLoadId = ++incrementingLoadId;
        // Short circuit if we have no loaders to run
        if (matchesToLoad.length === 0 && revalidatingFetchers.length === 0) {
            let updatedFetchers = markFetchRedirectsDone();
            completeNavigation(location, $0e856af10b3b08bf$var$_extends({
                matches: matches,
                loaderData: {},
                // Commit pending error if we're short circuiting
                errors: pendingError || null
            }, pendingActionData ? {
                actionData: pendingActionData
            } : {}, updatedFetchers ? {
                fetchers: new Map(state.fetchers)
            } : {}), {
                flushSync: flushSync
            });
            return {
                shortCircuited: true
            };
        }
        // If this is an uninterrupted revalidation, we remain in our current idle
        // state.  If not, we need to switch to our loading state and load data,
        // preserving any new action data or existing action data (in the case of
        // a revalidation interrupting an actionReload)
        // If we have partialHydration enabled, then don't update the state for the
        // initial data load since it's not a "navigation"
        if (!isUninterruptedRevalidation && (!future.v7_partialHydration || !initialHydration)) {
            revalidatingFetchers.forEach((rf)=>{
                let fetcher = state.fetchers.get(rf.key);
                let revalidatingFetcher = $0e856af10b3b08bf$var$getLoadingFetcher(undefined, fetcher ? fetcher.data : undefined);
                state.fetchers.set(rf.key, revalidatingFetcher);
            });
            let actionData = pendingActionData || state.actionData;
            updateState($0e856af10b3b08bf$var$_extends({
                navigation: loadingNavigation
            }, actionData ? Object.keys(actionData).length === 0 ? {
                actionData: null
            } : {
                actionData: actionData
            } : {}, revalidatingFetchers.length > 0 ? {
                fetchers: new Map(state.fetchers)
            } : {}), {
                flushSync: flushSync
            });
        }
        revalidatingFetchers.forEach((rf)=>{
            if (fetchControllers.has(rf.key)) abortFetcher(rf.key);
            if (rf.controller) // Fetchers use an independent AbortController so that aborting a fetcher
            // (via deleteFetcher) does not abort the triggering navigation that
            // triggered the revalidation
            fetchControllers.set(rf.key, rf.controller);
        });
        // Proxy navigation abort through to revalidation fetchers
        let abortPendingFetchRevalidations = ()=>revalidatingFetchers.forEach((f)=>abortFetcher(f.key));
        if (pendingNavigationController) pendingNavigationController.signal.addEventListener("abort", abortPendingFetchRevalidations);
        let { results: results, loaderResults: loaderResults, fetcherResults: fetcherResults } = await callLoadersAndMaybeResolveData(state.matches, matches, matchesToLoad, revalidatingFetchers, request);
        if (request.signal.aborted) return {
            shortCircuited: true
        };
        // Clean up _after_ loaders have completed.  Don't clean up if we short
        // circuited because fetchControllers would have been aborted and
        // reassigned to new controllers for the next navigation
        if (pendingNavigationController) pendingNavigationController.signal.removeEventListener("abort", abortPendingFetchRevalidations);
        revalidatingFetchers.forEach((rf)=>fetchControllers.delete(rf.key));
        // If any loaders returned a redirect Response, start a new REPLACE navigation
        let redirect = $0e856af10b3b08bf$var$findRedirect(results);
        if (redirect) {
            if (redirect.idx >= matchesToLoad.length) {
                // If this redirect came from a fetcher make sure we mark it in
                // fetchRedirectIds so it doesn't get revalidated on the next set of
                // loader executions
                let fetcherKey = revalidatingFetchers[redirect.idx - matchesToLoad.length].key;
                fetchRedirectIds.add(fetcherKey);
            }
            await startRedirectNavigation(state, redirect.result, {
                replace: replace
            });
            return {
                shortCircuited: true
            };
        }
        // Process and commit output from loaders
        let { loaderData: loaderData, errors: errors } = $0e856af10b3b08bf$var$processLoaderData(state, matches, matchesToLoad, loaderResults, pendingError, revalidatingFetchers, fetcherResults, activeDeferreds);
        // Wire up subscribers to update loaderData as promises settle
        activeDeferreds.forEach((deferredData, routeId)=>{
            deferredData.subscribe((aborted)=>{
                // Note: No need to updateState here since the TrackedPromise on
                // loaderData is stable across resolve/reject
                // Remove this instance if we were aborted or if promises have settled
                if (aborted || deferredData.done) activeDeferreds.delete(routeId);
            });
        });
        // During partial hydration, preserve SSR errors for routes that don't re-run
        if (future.v7_partialHydration && initialHydration && state.errors) Object.entries(state.errors).filter((_ref2)=>{
            let [id] = _ref2;
            return !matchesToLoad.some((m)=>m.route.id === id);
        }).forEach((_ref3)=>{
            let [routeId, error] = _ref3;
            errors = Object.assign(errors || {}, {
                [routeId]: error
            });
        });
        let updatedFetchers = markFetchRedirectsDone();
        let didAbortFetchLoads = abortStaleFetchLoads(pendingNavigationLoadId);
        let shouldUpdateFetchers = updatedFetchers || didAbortFetchLoads || revalidatingFetchers.length > 0;
        return $0e856af10b3b08bf$var$_extends({
            loaderData: loaderData,
            errors: errors
        }, shouldUpdateFetchers ? {
            fetchers: new Map(state.fetchers)
        } : {});
    }
    // Trigger a fetcher load/submit for the given fetcher key
    function fetch(key, routeId, href, opts) {
        if (isServer) throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");
        if (fetchControllers.has(key)) abortFetcher(key);
        let flushSync = (opts && opts.unstable_flushSync) === true;
        let routesToUse = inFlightDataRoutes || dataRoutes;
        let normalizedPath = $0e856af10b3b08bf$var$normalizeTo(state.location, state.matches, basename, future.v7_prependBasename, href, future.v7_relativeSplatPath, routeId, opts == null ? void 0 : opts.relative);
        let matches = $0e856af10b3b08bf$export$2708184779ceb39d(routesToUse, normalizedPath, basename);
        if (!matches) {
            setFetcherError(key, routeId, $0e856af10b3b08bf$var$getInternalRouterError(404, {
                pathname: normalizedPath
            }), {
                flushSync: flushSync
            });
            return;
        }
        let { path: path, submission: submission, error: error } = $0e856af10b3b08bf$var$normalizeNavigateOptions(future.v7_normalizeFormMethod, true, normalizedPath, opts);
        if (error) {
            setFetcherError(key, routeId, error, {
                flushSync: flushSync
            });
            return;
        }
        let match = $0e856af10b3b08bf$var$getTargetMatch(matches, path);
        pendingPreventScrollReset = (opts && opts.preventScrollReset) === true;
        if (submission && $0e856af10b3b08bf$var$isMutationMethod(submission.formMethod)) {
            handleFetcherAction(key, routeId, path, match, matches, flushSync, submission);
            return;
        }
        // Store off the match so we can call it's shouldRevalidate on subsequent
        // revalidations
        fetchLoadMatches.set(key, {
            routeId: routeId,
            path: path
        });
        handleFetcherLoader(key, routeId, path, match, matches, flushSync, submission);
    }
    // Call the action for the matched fetcher.submit(), and then handle redirects,
    // errors, and revalidation
    async function handleFetcherAction(key, routeId, path, match, requestMatches, flushSync, submission) {
        interruptActiveLoads();
        fetchLoadMatches.delete(key);
        if (!match.route.action && !match.route.lazy) {
            let error = $0e856af10b3b08bf$var$getInternalRouterError(405, {
                method: submission.formMethod,
                pathname: path,
                routeId: routeId
            });
            setFetcherError(key, routeId, error, {
                flushSync: flushSync
            });
            return;
        }
        // Put this fetcher into it's submitting state
        let existingFetcher = state.fetchers.get(key);
        updateFetcherState(key, $0e856af10b3b08bf$var$getSubmittingFetcher(submission, existingFetcher), {
            flushSync: flushSync
        });
        // Call the action for the fetcher
        let abortController = new AbortController();
        let fetchRequest = $0e856af10b3b08bf$var$createClientSideRequest(init.history, path, abortController.signal, submission);
        fetchControllers.set(key, abortController);
        let originatingLoadId = incrementingLoadId;
        let actionResult = await $0e856af10b3b08bf$var$callLoaderOrAction("action", fetchRequest, match, requestMatches, manifest, mapRouteProperties, basename, future.v7_relativeSplatPath);
        if (fetchRequest.signal.aborted) {
            // We can delete this so long as we weren't aborted by our own fetcher
            // re-submit which would have put _new_ controller is in fetchControllers
            if (fetchControllers.get(key) === abortController) fetchControllers.delete(key);
            return;
        }
        // When using v7_fetcherPersist, we don't want errors bubbling up to the UI
        // or redirects processed for unmounted fetchers so we just revert them to
        // idle
        if (future.v7_fetcherPersist && deletedFetchers.has(key)) {
            if ($0e856af10b3b08bf$var$isRedirectResult(actionResult) || $0e856af10b3b08bf$var$isErrorResult(actionResult)) {
                updateFetcherState(key, $0e856af10b3b08bf$var$getDoneFetcher(undefined));
                return;
            }
        } else {
            if ($0e856af10b3b08bf$var$isRedirectResult(actionResult)) {
                fetchControllers.delete(key);
                if (pendingNavigationLoadId > originatingLoadId) {
                    // A new navigation was kicked off after our action started, so that
                    // should take precedence over this redirect navigation.  We already
                    // set isRevalidationRequired so all loaders for the new route should
                    // fire unless opted out via shouldRevalidate
                    updateFetcherState(key, $0e856af10b3b08bf$var$getDoneFetcher(undefined));
                    return;
                } else {
                    fetchRedirectIds.add(key);
                    updateFetcherState(key, $0e856af10b3b08bf$var$getLoadingFetcher(submission));
                    return startRedirectNavigation(state, actionResult, {
                        fetcherSubmission: submission
                    });
                }
            }
            // Process any non-redirect errors thrown
            if ($0e856af10b3b08bf$var$isErrorResult(actionResult)) {
                setFetcherError(key, routeId, actionResult.error);
                return;
            }
        }
        if ($0e856af10b3b08bf$var$isDeferredResult(actionResult)) throw $0e856af10b3b08bf$var$getInternalRouterError(400, {
            type: "defer-action"
        });
        // Start the data load for current matches, or the next location if we're
        // in the middle of a navigation
        let nextLocation = state.navigation.location || state.location;
        let revalidationRequest = $0e856af10b3b08bf$var$createClientSideRequest(init.history, nextLocation, abortController.signal);
        let routesToUse = inFlightDataRoutes || dataRoutes;
        let matches = state.navigation.state !== "idle" ? $0e856af10b3b08bf$export$2708184779ceb39d(routesToUse, state.navigation.location, basename) : state.matches;
        $0e856af10b3b08bf$export$3e9cee6b33872309(matches, "Didn't find any matches after fetcher action");
        let loadId = ++incrementingLoadId;
        fetchReloadIds.set(key, loadId);
        let loadFetcher = $0e856af10b3b08bf$var$getLoadingFetcher(submission, actionResult.data);
        state.fetchers.set(key, loadFetcher);
        let [matchesToLoad, revalidatingFetchers] = $0e856af10b3b08bf$var$getMatchesToLoad(init.history, state, matches, submission, nextLocation, false, isRevalidationRequired, cancelledDeferredRoutes, cancelledFetcherLoads, deletedFetchers, fetchLoadMatches, fetchRedirectIds, routesToUse, basename, {
            [match.route.id]: actionResult.data
        }, undefined // No need to send through errors since we short circuit above
        );
        // Put all revalidating fetchers into the loading state, except for the
        // current fetcher which we want to keep in it's current loading state which
        // contains it's action submission info + action data
        revalidatingFetchers.filter((rf)=>rf.key !== key).forEach((rf)=>{
            let staleKey = rf.key;
            let existingFetcher = state.fetchers.get(staleKey);
            let revalidatingFetcher = $0e856af10b3b08bf$var$getLoadingFetcher(undefined, existingFetcher ? existingFetcher.data : undefined);
            state.fetchers.set(staleKey, revalidatingFetcher);
            if (fetchControllers.has(staleKey)) abortFetcher(staleKey);
            if (rf.controller) fetchControllers.set(staleKey, rf.controller);
        });
        updateState({
            fetchers: new Map(state.fetchers)
        });
        let abortPendingFetchRevalidations = ()=>revalidatingFetchers.forEach((rf)=>abortFetcher(rf.key));
        abortController.signal.addEventListener("abort", abortPendingFetchRevalidations);
        let { results: results, loaderResults: loaderResults, fetcherResults: fetcherResults } = await callLoadersAndMaybeResolveData(state.matches, matches, matchesToLoad, revalidatingFetchers, revalidationRequest);
        if (abortController.signal.aborted) return;
        abortController.signal.removeEventListener("abort", abortPendingFetchRevalidations);
        fetchReloadIds.delete(key);
        fetchControllers.delete(key);
        revalidatingFetchers.forEach((r)=>fetchControllers.delete(r.key));
        let redirect = $0e856af10b3b08bf$var$findRedirect(results);
        if (redirect) {
            if (redirect.idx >= matchesToLoad.length) {
                // If this redirect came from a fetcher make sure we mark it in
                // fetchRedirectIds so it doesn't get revalidated on the next set of
                // loader executions
                let fetcherKey = revalidatingFetchers[redirect.idx - matchesToLoad.length].key;
                fetchRedirectIds.add(fetcherKey);
            }
            return startRedirectNavigation(state, redirect.result);
        }
        // Process and commit output from loaders
        let { loaderData: loaderData, errors: errors } = $0e856af10b3b08bf$var$processLoaderData(state, state.matches, matchesToLoad, loaderResults, undefined, revalidatingFetchers, fetcherResults, activeDeferreds);
        // Since we let revalidations complete even if the submitting fetcher was
        // deleted, only put it back to idle if it hasn't been deleted
        if (state.fetchers.has(key)) {
            let doneFetcher = $0e856af10b3b08bf$var$getDoneFetcher(actionResult.data);
            state.fetchers.set(key, doneFetcher);
        }
        abortStaleFetchLoads(loadId);
        // If we are currently in a navigation loading state and this fetcher is
        // more recent than the navigation, we want the newer data so abort the
        // navigation and complete it with the fetcher data
        if (state.navigation.state === "loading" && loadId > pendingNavigationLoadId) {
            $0e856af10b3b08bf$export$3e9cee6b33872309(pendingAction, "Expected pending action");
            pendingNavigationController && pendingNavigationController.abort();
            completeNavigation(state.navigation.location, {
                matches: matches,
                loaderData: loaderData,
                errors: errors,
                fetchers: new Map(state.fetchers)
            });
        } else {
            // otherwise just update with the fetcher data, preserving any existing
            // loaderData for loaders that did not need to reload.  We have to
            // manually merge here since we aren't going through completeNavigation
            updateState({
                errors: errors,
                loaderData: $0e856af10b3b08bf$var$mergeLoaderData(state.loaderData, loaderData, matches, errors),
                fetchers: new Map(state.fetchers)
            });
            isRevalidationRequired = false;
        }
    }
    // Call the matched loader for fetcher.load(), handling redirects, errors, etc.
    async function handleFetcherLoader(key, routeId, path, match, matches, flushSync, submission) {
        let existingFetcher = state.fetchers.get(key);
        updateFetcherState(key, $0e856af10b3b08bf$var$getLoadingFetcher(submission, existingFetcher ? existingFetcher.data : undefined), {
            flushSync: flushSync
        });
        // Call the loader for this fetcher route match
        let abortController = new AbortController();
        let fetchRequest = $0e856af10b3b08bf$var$createClientSideRequest(init.history, path, abortController.signal);
        fetchControllers.set(key, abortController);
        let originatingLoadId = incrementingLoadId;
        let result = await $0e856af10b3b08bf$var$callLoaderOrAction("loader", fetchRequest, match, matches, manifest, mapRouteProperties, basename, future.v7_relativeSplatPath);
        // Deferred isn't supported for fetcher loads, await everything and treat it
        // as a normal load.  resolveDeferredData will return undefined if this
        // fetcher gets aborted, so we just leave result untouched and short circuit
        // below if that happens
        if ($0e856af10b3b08bf$var$isDeferredResult(result)) result = await $0e856af10b3b08bf$var$resolveDeferredData(result, fetchRequest.signal, true) || result;
        // We can delete this so long as we weren't aborted by our our own fetcher
        // re-load which would have put _new_ controller is in fetchControllers
        if (fetchControllers.get(key) === abortController) fetchControllers.delete(key);
        if (fetchRequest.signal.aborted) return;
        // We don't want errors bubbling up or redirects followed for unmounted
        // fetchers, so short circuit here if it was removed from the UI
        if (deletedFetchers.has(key)) {
            updateFetcherState(key, $0e856af10b3b08bf$var$getDoneFetcher(undefined));
            return;
        }
        // If the loader threw a redirect Response, start a new REPLACE navigation
        if ($0e856af10b3b08bf$var$isRedirectResult(result)) {
            if (pendingNavigationLoadId > originatingLoadId) {
                // A new navigation was kicked off after our loader started, so that
                // should take precedence over this redirect navigation
                updateFetcherState(key, $0e856af10b3b08bf$var$getDoneFetcher(undefined));
                return;
            } else {
                fetchRedirectIds.add(key);
                await startRedirectNavigation(state, result);
                return;
            }
        }
        // Process any non-redirect errors thrown
        if ($0e856af10b3b08bf$var$isErrorResult(result)) {
            setFetcherError(key, routeId, result.error);
            return;
        }
        $0e856af10b3b08bf$export$3e9cee6b33872309(!$0e856af10b3b08bf$var$isDeferredResult(result), "Unhandled fetcher deferred data");
        // Put the fetcher back into an idle state
        updateFetcherState(key, $0e856af10b3b08bf$var$getDoneFetcher(result.data));
    }
    /**
   * Utility function to handle redirects returned from an action or loader.
   * Normally, a redirect "replaces" the navigation that triggered it.  So, for
   * example:
   *
   *  - user is on /a
   *  - user clicks a link to /b
   *  - loader for /b redirects to /c
   *
   * In a non-JS app the browser would track the in-flight navigation to /b and
   * then replace it with /c when it encountered the redirect response.  In
   * the end it would only ever update the URL bar with /c.
   *
   * In client-side routing using pushState/replaceState, we aim to emulate
   * this behavior and we also do not update history until the end of the
   * navigation (including processed redirects).  This means that we never
   * actually touch history until we've processed redirects, so we just use
   * the history action from the original navigation (PUSH or REPLACE).
   */ async function startRedirectNavigation(state, redirect, _temp2) {
        let { submission: submission, fetcherSubmission: fetcherSubmission, replace: replace } = _temp2 === void 0 ? {} : _temp2;
        if (redirect.revalidate) isRevalidationRequired = true;
        let redirectLocation = $0e856af10b3b08bf$var$createLocation(state.location, redirect.location, {
            _isRedirect: true
        });
        $0e856af10b3b08bf$export$3e9cee6b33872309(redirectLocation, "Expected a location on the redirect navigation");
        if (isBrowser) {
            let isDocumentReload = false;
            if (redirect.reloadDocument) // Hard reload if the response contained X-Remix-Reload-Document
            isDocumentReload = true;
            else if ($0e856af10b3b08bf$var$ABSOLUTE_URL_REGEX.test(redirect.location)) {
                const url = init.history.createURL(redirect.location);
                isDocumentReload = // Hard reload if it's an absolute URL to a new origin
                url.origin !== routerWindow.location.origin || // Hard reload if it's an absolute URL that does not match our basename
                $0e856af10b3b08bf$export$b69e3301ce081aa3(url.pathname, basename) == null;
            }
            if (isDocumentReload) {
                if (replace) routerWindow.location.replace(redirect.location);
                else routerWindow.location.assign(redirect.location);
                return;
            }
        }
        // There's no need to abort on redirects, since we don't detect the
        // redirect until the action/loaders have settled
        pendingNavigationController = null;
        let redirectHistoryAction = replace === true ? $0e856af10b3b08bf$export$e19cd5f9376f8cee.Replace : $0e856af10b3b08bf$export$e19cd5f9376f8cee.Push;
        // Use the incoming submission if provided, fallback on the active one in
        // state.navigation
        let { formMethod: formMethod, formAction: formAction, formEncType: formEncType } = state.navigation;
        if (!submission && !fetcherSubmission && formMethod && formAction && formEncType) submission = $0e856af10b3b08bf$var$getSubmissionFromNavigation(state.navigation);
        // If this was a 307/308 submission we want to preserve the HTTP method and
        // re-submit the GET/POST/PUT/PATCH/DELETE as a submission navigation to the
        // redirected location
        let activeSubmission = submission || fetcherSubmission;
        if ($0e856af10b3b08bf$var$redirectPreserveMethodStatusCodes.has(redirect.status) && activeSubmission && $0e856af10b3b08bf$var$isMutationMethod(activeSubmission.formMethod)) await startNavigation(redirectHistoryAction, redirectLocation, {
            submission: $0e856af10b3b08bf$var$_extends({}, activeSubmission, {
                formAction: redirect.location
            }),
            // Preserve this flag across redirects
            preventScrollReset: pendingPreventScrollReset
        });
        else {
            // If we have a navigation submission, we will preserve it through the
            // redirect navigation
            let overrideNavigation = $0e856af10b3b08bf$var$getLoadingNavigation(redirectLocation, submission);
            await startNavigation(redirectHistoryAction, redirectLocation, {
                overrideNavigation: overrideNavigation,
                fetcherSubmission: // Send fetcher submissions through for shouldRevalidate
                fetcherSubmission,
                // Preserve this flag across redirects
                preventScrollReset: pendingPreventScrollReset
            });
        }
    }
    async function callLoadersAndMaybeResolveData(currentMatches, matches, matchesToLoad, fetchersToLoad, request) {
        // Call all navigation loaders and revalidating fetcher loaders in parallel,
        // then slice off the results into separate arrays so we can handle them
        // accordingly
        let results = await Promise.all([
            ...matchesToLoad.map((match)=>$0e856af10b3b08bf$var$callLoaderOrAction("loader", request, match, matches, manifest, mapRouteProperties, basename, future.v7_relativeSplatPath)),
            ...fetchersToLoad.map((f)=>{
                if (f.matches && f.match && f.controller) return $0e856af10b3b08bf$var$callLoaderOrAction("loader", $0e856af10b3b08bf$var$createClientSideRequest(init.history, f.path, f.controller.signal), f.match, f.matches, manifest, mapRouteProperties, basename, future.v7_relativeSplatPath);
                else {
                    let error = {
                        type: $0e856af10b3b08bf$var$ResultType.error,
                        error: $0e856af10b3b08bf$var$getInternalRouterError(404, {
                            pathname: f.path
                        })
                    };
                    return error;
                }
            })
        ]);
        let loaderResults = results.slice(0, matchesToLoad.length);
        let fetcherResults = results.slice(matchesToLoad.length);
        await Promise.all([
            $0e856af10b3b08bf$var$resolveDeferredResults(currentMatches, matchesToLoad, loaderResults, loaderResults.map(()=>request.signal), false, state.loaderData),
            $0e856af10b3b08bf$var$resolveDeferredResults(currentMatches, fetchersToLoad.map((f)=>f.match), fetcherResults, fetchersToLoad.map((f)=>f.controller ? f.controller.signal : null), true)
        ]);
        return {
            results: results,
            loaderResults: loaderResults,
            fetcherResults: fetcherResults
        };
    }
    function interruptActiveLoads() {
        // Every interruption triggers a revalidation
        isRevalidationRequired = true;
        // Cancel pending route-level deferreds and mark cancelled routes for
        // revalidation
        cancelledDeferredRoutes.push(...cancelActiveDeferreds());
        // Abort in-flight fetcher loads
        fetchLoadMatches.forEach((_, key)=>{
            if (fetchControllers.has(key)) {
                cancelledFetcherLoads.push(key);
                abortFetcher(key);
            }
        });
    }
    function updateFetcherState(key, fetcher, opts) {
        if (opts === void 0) opts = {};
        state.fetchers.set(key, fetcher);
        updateState({
            fetchers: new Map(state.fetchers)
        }, {
            flushSync: (opts && opts.flushSync) === true
        });
    }
    function setFetcherError(key, routeId, error, opts) {
        if (opts === void 0) opts = {};
        let boundaryMatch = $0e856af10b3b08bf$var$findNearestBoundary(state.matches, routeId);
        deleteFetcher(key);
        updateState({
            errors: {
                [boundaryMatch.route.id]: error
            },
            fetchers: new Map(state.fetchers)
        }, {
            flushSync: (opts && opts.flushSync) === true
        });
    }
    function getFetcher(key) {
        if (future.v7_fetcherPersist) {
            activeFetchers.set(key, (activeFetchers.get(key) || 0) + 1);
            // If this fetcher was previously marked for deletion, unmark it since we
            // have a new instance
            if (deletedFetchers.has(key)) deletedFetchers.delete(key);
        }
        return state.fetchers.get(key) || $0e856af10b3b08bf$export$52eace9c284d3585;
    }
    function deleteFetcher(key) {
        let fetcher = state.fetchers.get(key);
        // Don't abort the controller if this is a deletion of a fetcher.submit()
        // in it's loading phase since - we don't want to abort the corresponding
        // revalidation and want them to complete and land
        if (fetchControllers.has(key) && !(fetcher && fetcher.state === "loading" && fetchReloadIds.has(key))) abortFetcher(key);
        fetchLoadMatches.delete(key);
        fetchReloadIds.delete(key);
        fetchRedirectIds.delete(key);
        deletedFetchers.delete(key);
        state.fetchers.delete(key);
    }
    function deleteFetcherAndUpdateState(key) {
        if (future.v7_fetcherPersist) {
            let count = (activeFetchers.get(key) || 0) - 1;
            if (count <= 0) {
                activeFetchers.delete(key);
                deletedFetchers.add(key);
            } else activeFetchers.set(key, count);
        } else deleteFetcher(key);
        updateState({
            fetchers: new Map(state.fetchers)
        });
    }
    function abortFetcher(key) {
        let controller = fetchControllers.get(key);
        $0e856af10b3b08bf$export$3e9cee6b33872309(controller, "Expected fetch controller: " + key);
        controller.abort();
        fetchControllers.delete(key);
    }
    function markFetchersDone(keys) {
        for (let key of keys){
            let fetcher = getFetcher(key);
            let doneFetcher = $0e856af10b3b08bf$var$getDoneFetcher(fetcher.data);
            state.fetchers.set(key, doneFetcher);
        }
    }
    function markFetchRedirectsDone() {
        let doneKeys = [];
        let updatedFetchers = false;
        for (let key of fetchRedirectIds){
            let fetcher = state.fetchers.get(key);
            $0e856af10b3b08bf$export$3e9cee6b33872309(fetcher, "Expected fetcher: " + key);
            if (fetcher.state === "loading") {
                fetchRedirectIds.delete(key);
                doneKeys.push(key);
                updatedFetchers = true;
            }
        }
        markFetchersDone(doneKeys);
        return updatedFetchers;
    }
    function abortStaleFetchLoads(landedId) {
        let yeetedKeys = [];
        for (let [key, id] of fetchReloadIds)if (id < landedId) {
            let fetcher = state.fetchers.get(key);
            $0e856af10b3b08bf$export$3e9cee6b33872309(fetcher, "Expected fetcher: " + key);
            if (fetcher.state === "loading") {
                abortFetcher(key);
                fetchReloadIds.delete(key);
                yeetedKeys.push(key);
            }
        }
        markFetchersDone(yeetedKeys);
        return yeetedKeys.length > 0;
    }
    function getBlocker(key, fn) {
        let blocker = state.blockers.get(key) || $0e856af10b3b08bf$export$386d57f03f0b2883;
        if (blockerFunctions.get(key) !== fn) blockerFunctions.set(key, fn);
        return blocker;
    }
    function deleteBlocker(key) {
        state.blockers.delete(key);
        blockerFunctions.delete(key);
    }
    // Utility function to update blockers, ensuring valid state transitions
    function updateBlocker(key, newBlocker) {
        let blocker = state.blockers.get(key) || $0e856af10b3b08bf$export$386d57f03f0b2883;
        // Poor mans state machine :)
        // https://mermaid.live/edit#pako:eNqVkc9OwzAMxl8l8nnjAYrEtDIOHEBIgwvKJTReGy3_lDpIqO27k6awMG0XcrLlnz87nwdonESogKXXBuE79rq75XZO3-yHds0RJVuv70YrPlUrCEe2HfrORS3rubqZfuhtpg5C9wk5tZ4VKcRUq88q9Z8RS0-48cE1iHJkL0ugbHuFLus9L6spZy8nX9MP2CNdomVaposqu3fGayT8T8-jJQwhepo_UtpgBQaDEUom04dZhAN1aJBDlUKJBxE1ceB2Smj0Mln-IBW5AFU2dwUiktt_2Qaq2dBfaKdEup85UV7Yd-dKjlnkabl2Pvr0DTkTreM
        $0e856af10b3b08bf$export$3e9cee6b33872309(blocker.state === "unblocked" && newBlocker.state === "blocked" || blocker.state === "blocked" && newBlocker.state === "blocked" || blocker.state === "blocked" && newBlocker.state === "proceeding" || blocker.state === "blocked" && newBlocker.state === "unblocked" || blocker.state === "proceeding" && newBlocker.state === "unblocked", "Invalid blocker state transition: " + blocker.state + " -> " + newBlocker.state);
        let blockers = new Map(state.blockers);
        blockers.set(key, newBlocker);
        updateState({
            blockers: blockers
        });
    }
    function shouldBlockNavigation(_ref4) {
        let { currentLocation: currentLocation, nextLocation: nextLocation, historyAction: historyAction } = _ref4;
        if (blockerFunctions.size === 0) return;
        // We ony support a single active blocker at the moment since we don't have
        // any compelling use cases for multi-blocker yet
        if (blockerFunctions.size > 1) $0e856af10b3b08bf$export$c0e02632e14916fd(false, "A router only supports one blocker at a time");
        let entries = Array.from(blockerFunctions.entries());
        let [blockerKey, blockerFunction] = entries[entries.length - 1];
        let blocker = state.blockers.get(blockerKey);
        if (blocker && blocker.state === "proceeding") // If the blocker is currently proceeding, we don't need to re-check
        // it and can let this navigation continue
        return;
        // At this point, we know we're unblocked/blocked so we need to check the
        // user-provided blocker function
        if (blockerFunction({
            currentLocation: currentLocation,
            nextLocation: nextLocation,
            historyAction: historyAction
        })) return blockerKey;
    }
    function cancelActiveDeferreds(predicate) {
        let cancelledRouteIds = [];
        activeDeferreds.forEach((dfd, routeId)=>{
            if (!predicate || predicate(routeId)) {
                // Cancel the deferred - but do not remove from activeDeferreds here -
                // we rely on the subscribers to do that so our tests can assert proper
                // cleanup via _internalActiveDeferreds
                dfd.cancel();
                cancelledRouteIds.push(routeId);
                activeDeferreds.delete(routeId);
            }
        });
        return cancelledRouteIds;
    }
    // Opt in to capturing and reporting scroll positions during navigations,
    // used by the <ScrollRestoration> component
    function enableScrollRestoration(positions, getPosition, getKey) {
        savedScrollPositions = positions;
        getScrollPosition = getPosition;
        getScrollRestorationKey = getKey || null;
        // Perform initial hydration scroll restoration, since we miss the boat on
        // the initial updateState() because we've not yet rendered <ScrollRestoration/>
        // and therefore have no savedScrollPositions available
        if (!initialScrollRestored && state.navigation === $0e856af10b3b08bf$export$ed3e14b2f9e105d0) {
            initialScrollRestored = true;
            let y = getSavedScrollPosition(state.location, state.matches);
            if (y != null) updateState({
                restoreScrollPosition: y
            });
        }
        return ()=>{
            savedScrollPositions = null;
            getScrollPosition = null;
            getScrollRestorationKey = null;
        };
    }
    function getScrollKey(location, matches) {
        if (getScrollRestorationKey) {
            let key = getScrollRestorationKey(location, matches.map((m)=>$0e856af10b3b08bf$export$b3fac024fad9e8ff(m, state.loaderData)));
            return key || location.key;
        }
        return location.key;
    }
    function saveScrollPosition(location, matches) {
        if (savedScrollPositions && getScrollPosition) {
            let key = getScrollKey(location, matches);
            savedScrollPositions[key] = getScrollPosition();
        }
    }
    function getSavedScrollPosition(location, matches) {
        if (savedScrollPositions) {
            let key = getScrollKey(location, matches);
            let y = savedScrollPositions[key];
            if (typeof y === "number") return y;
        }
        return null;
    }
    function _internalSetRoutes(newRoutes) {
        manifest = {};
        inFlightDataRoutes = $0e856af10b3b08bf$export$4a6d22b32134ea5d(newRoutes, mapRouteProperties, undefined, manifest);
    }
    router = {
        get basename () {
            return basename;
        },
        get future () {
            return future;
        },
        get state () {
            return state;
        },
        get routes () {
            return dataRoutes;
        },
        get window () {
            return routerWindow;
        },
        initialize: initialize,
        subscribe: subscribe,
        enableScrollRestoration: enableScrollRestoration,
        navigate: navigate,
        fetch: fetch,
        revalidate: revalidate,
        // Passthrough to history-aware createHref used by useHref so we get proper
        // hash-aware URLs in DOM paths
        createHref: (to)=>init.history.createHref(to),
        encodeLocation: (to)=>init.history.encodeLocation(to),
        getFetcher: getFetcher,
        deleteFetcher: deleteFetcherAndUpdateState,
        dispose: dispose,
        getBlocker: getBlocker,
        deleteBlocker: deleteBlocker,
        _internalFetchControllers: fetchControllers,
        _internalActiveDeferreds: activeDeferreds,
        _internalSetRoutes: // TODO: Remove setRoutes, it's temporary to avoid dealing with
        // updating the tree while validating the update algorithm.
        _internalSetRoutes
    };
    return router;
}
//#endregion
////////////////////////////////////////////////////////////////////////////////
//#region createStaticHandler
////////////////////////////////////////////////////////////////////////////////
const $0e856af10b3b08bf$export$4d0306f8f6a4585b = Symbol("deferred");
function $0e856af10b3b08bf$export$3336b097a6fbc59a(routes, opts) {
    $0e856af10b3b08bf$export$3e9cee6b33872309(routes.length > 0, "You must provide a non-empty routes array to createStaticHandler");
    let manifest = {};
    let basename = (opts ? opts.basename : null) || "/";
    let mapRouteProperties;
    if (opts != null && opts.mapRouteProperties) mapRouteProperties = opts.mapRouteProperties;
    else if (opts != null && opts.detectErrorBoundary) {
        // If they are still using the deprecated version, wrap it with the new API
        let detectErrorBoundary = opts.detectErrorBoundary;
        mapRouteProperties = (route)=>({
                hasErrorBoundary: detectErrorBoundary(route)
            });
    } else mapRouteProperties = $0e856af10b3b08bf$var$defaultMapRouteProperties;
    // Config driven behavior flags
    let future = $0e856af10b3b08bf$var$_extends({
        v7_relativeSplatPath: false,
        v7_throwAbortReason: false
    }, opts ? opts.future : null);
    let dataRoutes = $0e856af10b3b08bf$export$4a6d22b32134ea5d(routes, mapRouteProperties, undefined, manifest);
    /**
   * The query() method is intended for document requests, in which we want to
   * call an optional action and potentially multiple loaders for all nested
   * routes.  It returns a StaticHandlerContext object, which is very similar
   * to the router state (location, loaderData, actionData, errors, etc.) and
   * also adds SSR-specific information such as the statusCode and headers
   * from action/loaders Responses.
   *
   * It _should_ never throw and should report all errors through the
   * returned context.errors object, properly associating errors to their error
   * boundary.  Additionally, it tracks _deepestRenderedBoundaryId which can be
   * used to emulate React error boundaries during SSr by performing a second
   * pass only down to the boundaryId.
   *
   * The one exception where we do not return a StaticHandlerContext is when a
   * redirect response is returned or thrown from any action/loader.  We
   * propagate that out and return the raw Response so the HTTP server can
   * return it directly.
   */ async function query(request, _temp3) {
        let { requestContext: requestContext } = _temp3 === void 0 ? {} : _temp3;
        let url = new URL(request.url);
        let method = request.method;
        let location = $0e856af10b3b08bf$var$createLocation("", $0e856af10b3b08bf$export$fe53371bee54353d(url), null, "default");
        let matches = $0e856af10b3b08bf$export$2708184779ceb39d(dataRoutes, location, basename);
        // SSR supports HEAD requests while SPA doesn't
        if (!$0e856af10b3b08bf$var$isValidMethod(method) && method !== "HEAD") {
            let error = $0e856af10b3b08bf$var$getInternalRouterError(405, {
                method: method
            });
            let { matches: methodNotAllowedMatches, route: route } = $0e856af10b3b08bf$var$getShortCircuitMatches(dataRoutes);
            return {
                basename: basename,
                location: location,
                matches: methodNotAllowedMatches,
                loaderData: {},
                actionData: null,
                errors: {
                    [route.id]: error
                },
                statusCode: error.status,
                loaderHeaders: {},
                actionHeaders: {},
                activeDeferreds: null
            };
        } else if (!matches) {
            let error = $0e856af10b3b08bf$var$getInternalRouterError(404, {
                pathname: location.pathname
            });
            let { matches: notFoundMatches, route: route } = $0e856af10b3b08bf$var$getShortCircuitMatches(dataRoutes);
            return {
                basename: basename,
                location: location,
                matches: notFoundMatches,
                loaderData: {},
                actionData: null,
                errors: {
                    [route.id]: error
                },
                statusCode: error.status,
                loaderHeaders: {},
                actionHeaders: {},
                activeDeferreds: null
            };
        }
        let result = await queryImpl(request, location, matches, requestContext);
        if ($0e856af10b3b08bf$var$isResponse(result)) return result;
        // When returning StaticHandlerContext, we patch back in the location here
        // since we need it for React Context.  But this helps keep our submit and
        // loadRouteData operating on a Request instead of a Location
        return $0e856af10b3b08bf$var$_extends({
            location: location,
            basename: basename
        }, result);
    }
    /**
   * The queryRoute() method is intended for targeted route requests, either
   * for fetch ?_data requests or resource route requests.  In this case, we
   * are only ever calling a single action or loader, and we are returning the
   * returned value directly.  In most cases, this will be a Response returned
   * from the action/loader, but it may be a primitive or other value as well -
   * and in such cases the calling context should handle that accordingly.
   *
   * We do respect the throw/return differentiation, so if an action/loader
   * throws, then this method will throw the value.  This is important so we
   * can do proper boundary identification in Remix where a thrown Response
   * must go to the Catch Boundary but a returned Response is happy-path.
   *
   * One thing to note is that any Router-initiated Errors that make sense
   * to associate with a status code will be thrown as an ErrorResponse
   * instance which include the raw Error, such that the calling context can
   * serialize the error as they see fit while including the proper response
   * code.  Examples here are 404 and 405 errors that occur prior to reaching
   * any user-defined loaders.
   */ async function queryRoute(request, _temp4) {
        let { routeId: routeId, requestContext: requestContext } = _temp4 === void 0 ? {} : _temp4;
        let url = new URL(request.url);
        let method = request.method;
        let location = $0e856af10b3b08bf$var$createLocation("", $0e856af10b3b08bf$export$fe53371bee54353d(url), null, "default");
        let matches = $0e856af10b3b08bf$export$2708184779ceb39d(dataRoutes, location, basename);
        // SSR supports HEAD requests while SPA doesn't
        if (!$0e856af10b3b08bf$var$isValidMethod(method) && method !== "HEAD" && method !== "OPTIONS") throw $0e856af10b3b08bf$var$getInternalRouterError(405, {
            method: method
        });
        else if (!matches) throw $0e856af10b3b08bf$var$getInternalRouterError(404, {
            pathname: location.pathname
        });
        let match = routeId ? matches.find((m)=>m.route.id === routeId) : $0e856af10b3b08bf$var$getTargetMatch(matches, location);
        if (routeId && !match) throw $0e856af10b3b08bf$var$getInternalRouterError(403, {
            pathname: location.pathname,
            routeId: routeId
        });
        else if (!match) // This should never hit I don't think?
        throw $0e856af10b3b08bf$var$getInternalRouterError(404, {
            pathname: location.pathname
        });
        let result = await queryImpl(request, location, matches, requestContext, match);
        if ($0e856af10b3b08bf$var$isResponse(result)) return result;
        let error = result.errors ? Object.values(result.errors)[0] : undefined;
        if (error !== undefined) // If we got back result.errors, that means the loader/action threw
        // _something_ that wasn't a Response, but it's not guaranteed/required
        // to be an `instanceof Error` either, so we have to use throw here to
        // preserve the "error" state outside of queryImpl.
        throw error;
        // Pick off the right state value to return
        if (result.actionData) return Object.values(result.actionData)[0];
        if (result.loaderData) {
            var _result$activeDeferre;
            let data = Object.values(result.loaderData)[0];
            if ((_result$activeDeferre = result.activeDeferreds) != null && _result$activeDeferre[match.route.id]) data[$0e856af10b3b08bf$export$4d0306f8f6a4585b] = result.activeDeferreds[match.route.id];
            return data;
        }
        return undefined;
    }
    async function queryImpl(request, location, matches, requestContext, routeMatch) {
        $0e856af10b3b08bf$export$3e9cee6b33872309(request.signal, "query()/queryRoute() requests must contain an AbortController signal");
        try {
            if ($0e856af10b3b08bf$var$isMutationMethod(request.method.toLowerCase())) {
                let result = await submit(request, matches, routeMatch || $0e856af10b3b08bf$var$getTargetMatch(matches, location), requestContext, routeMatch != null);
                return result;
            }
            let result = await loadRouteData(request, matches, requestContext, routeMatch);
            return $0e856af10b3b08bf$var$isResponse(result) ? result : $0e856af10b3b08bf$var$_extends({}, result, {
                actionData: null,
                actionHeaders: {}
            });
        } catch (e) {
            // If the user threw/returned a Response in callLoaderOrAction, we throw
            // it to bail out and then return or throw here based on whether the user
            // returned or threw
            if ($0e856af10b3b08bf$var$isQueryRouteResponse(e)) {
                if (e.type === $0e856af10b3b08bf$var$ResultType.error) throw e.response;
                return e.response;
            }
            // Redirects are always returned since they don't propagate to catch
            // boundaries
            if ($0e856af10b3b08bf$var$isRedirectResponse(e)) return e;
            throw e;
        }
    }
    async function submit(request, matches, actionMatch, requestContext, isRouteRequest) {
        let result;
        if (!actionMatch.route.action && !actionMatch.route.lazy) {
            let error = $0e856af10b3b08bf$var$getInternalRouterError(405, {
                method: request.method,
                pathname: new URL(request.url).pathname,
                routeId: actionMatch.route.id
            });
            if (isRouteRequest) throw error;
            result = {
                type: $0e856af10b3b08bf$var$ResultType.error,
                error: error
            };
        } else {
            result = await $0e856af10b3b08bf$var$callLoaderOrAction("action", request, actionMatch, matches, manifest, mapRouteProperties, basename, future.v7_relativeSplatPath, {
                isStaticRequest: true,
                isRouteRequest: isRouteRequest,
                requestContext: requestContext
            });
            if (request.signal.aborted) $0e856af10b3b08bf$var$throwStaticHandlerAbortedError(request, isRouteRequest, future);
        }
        if ($0e856af10b3b08bf$var$isRedirectResult(result)) // Uhhhh - this should never happen, we should always throw these from
        // callLoaderOrAction, but the type narrowing here keeps TS happy and we
        // can get back on the "throw all redirect responses" train here should
        // this ever happen :/
        throw new Response(null, {
            status: result.status,
            headers: {
                Location: result.location
            }
        });
        if ($0e856af10b3b08bf$var$isDeferredResult(result)) {
            let error = $0e856af10b3b08bf$var$getInternalRouterError(400, {
                type: "defer-action"
            });
            if (isRouteRequest) throw error;
            result = {
                type: $0e856af10b3b08bf$var$ResultType.error,
                error: error
            };
        }
        if (isRouteRequest) {
            // Note: This should only be non-Response values if we get here, since
            // isRouteRequest should throw any Response received in callLoaderOrAction
            if ($0e856af10b3b08bf$var$isErrorResult(result)) throw result.error;
            return {
                matches: [
                    actionMatch
                ],
                loaderData: {},
                actionData: {
                    [actionMatch.route.id]: result.data
                },
                errors: null,
                // Note: statusCode + headers are unused here since queryRoute will
                // return the raw Response or value
                statusCode: 200,
                loaderHeaders: {},
                actionHeaders: {},
                activeDeferreds: null
            };
        }
        if ($0e856af10b3b08bf$var$isErrorResult(result)) {
            // Store off the pending error - we use it to determine which loaders
            // to call and will commit it when we complete the navigation
            let boundaryMatch = $0e856af10b3b08bf$var$findNearestBoundary(matches, actionMatch.route.id);
            let context = await loadRouteData(request, matches, requestContext, undefined, {
                [boundaryMatch.route.id]: result.error
            });
            // action status codes take precedence over loader status codes
            return $0e856af10b3b08bf$var$_extends({}, context, {
                statusCode: $0e856af10b3b08bf$export$972111febbeef05b(result.error) ? result.error.status : 500,
                actionData: null,
                actionHeaders: $0e856af10b3b08bf$var$_extends({}, result.headers ? {
                    [actionMatch.route.id]: result.headers
                } : {})
            });
        }
        // Create a GET request for the loaders
        let loaderRequest = new Request(request.url, {
            headers: request.headers,
            redirect: request.redirect,
            signal: request.signal
        });
        let context = await loadRouteData(loaderRequest, matches, requestContext);
        return $0e856af10b3b08bf$var$_extends({}, context, result.statusCode ? {
            statusCode: result.statusCode
        } : {}, {
            actionData: {
                [actionMatch.route.id]: result.data
            },
            actionHeaders: $0e856af10b3b08bf$var$_extends({}, result.headers ? {
                [actionMatch.route.id]: result.headers
            } : {})
        });
    }
    async function loadRouteData(request, matches, requestContext, routeMatch, pendingActionError) {
        let isRouteRequest = routeMatch != null;
        // Short circuit if we have no loaders to run (queryRoute())
        if (isRouteRequest && !(routeMatch != null && routeMatch.route.loader) && !(routeMatch != null && routeMatch.route.lazy)) throw $0e856af10b3b08bf$var$getInternalRouterError(400, {
            method: request.method,
            pathname: new URL(request.url).pathname,
            routeId: routeMatch == null ? void 0 : routeMatch.route.id
        });
        let requestMatches = routeMatch ? [
            routeMatch
        ] : $0e856af10b3b08bf$var$getLoaderMatchesUntilBoundary(matches, Object.keys(pendingActionError || {})[0]);
        let matchesToLoad = requestMatches.filter((m)=>m.route.loader || m.route.lazy);
        // Short circuit if we have no loaders to run (query())
        if (matchesToLoad.length === 0) return {
            matches: matches,
            // Add a null for all matched routes for proper revalidation on the client
            loaderData: matches.reduce((acc, m)=>Object.assign(acc, {
                    [m.route.id]: null
                }), {}),
            errors: pendingActionError || null,
            statusCode: 200,
            loaderHeaders: {},
            activeDeferreds: null
        };
        let results = await Promise.all([
            ...matchesToLoad.map((match)=>$0e856af10b3b08bf$var$callLoaderOrAction("loader", request, match, matches, manifest, mapRouteProperties, basename, future.v7_relativeSplatPath, {
                    isStaticRequest: true,
                    isRouteRequest: isRouteRequest,
                    requestContext: requestContext
                }))
        ]);
        if (request.signal.aborted) $0e856af10b3b08bf$var$throwStaticHandlerAbortedError(request, isRouteRequest, future);
        // Process and commit output from loaders
        let activeDeferreds = new Map();
        let context = $0e856af10b3b08bf$var$processRouteLoaderData(matches, matchesToLoad, results, pendingActionError, activeDeferreds);
        // Add a null for any non-loader matches for proper revalidation on the client
        let executedLoaders = new Set(matchesToLoad.map((match)=>match.route.id));
        matches.forEach((match)=>{
            if (!executedLoaders.has(match.route.id)) context.loaderData[match.route.id] = null;
        });
        return $0e856af10b3b08bf$var$_extends({}, context, {
            matches: matches,
            activeDeferreds: activeDeferreds.size > 0 ? Object.fromEntries(activeDeferreds.entries()) : null
        });
    }
    return {
        dataRoutes: dataRoutes,
        query: query,
        queryRoute: queryRoute
    };
}
//#endregion
////////////////////////////////////////////////////////////////////////////////
//#region Helpers
////////////////////////////////////////////////////////////////////////////////
/**
 * Given an existing StaticHandlerContext and an error thrown at render time,
 * provide an updated StaticHandlerContext suitable for a second SSR render
 */ function $0e856af10b3b08bf$export$fec11da027c70692(routes, context, error) {
    let newContext = $0e856af10b3b08bf$var$_extends({}, context, {
        statusCode: $0e856af10b3b08bf$export$972111febbeef05b(error) ? error.status : 500,
        errors: {
            [context._deepestRenderedBoundaryId || routes[0].id]: error
        }
    });
    return newContext;
}
function $0e856af10b3b08bf$var$throwStaticHandlerAbortedError(request, isRouteRequest, future) {
    if (future.v7_throwAbortReason && request.signal.reason !== undefined) throw request.signal.reason;
    let method = isRouteRequest ? "queryRoute" : "query";
    throw new Error(method + "() call aborted: " + request.method + " " + request.url);
}
function $0e856af10b3b08bf$var$isSubmissionNavigation(opts) {
    return opts != null && ("formData" in opts && opts.formData != null || "body" in opts && opts.body !== undefined);
}
function $0e856af10b3b08bf$var$normalizeTo(location, matches, basename, prependBasename, to, v7_relativeSplatPath, fromRouteId, relative) {
    let contextualMatches;
    let activeRouteMatch;
    if (fromRouteId) {
        // Grab matches up to the calling route so our route-relative logic is
        // relative to the correct source route
        contextualMatches = [];
        for (let match of matches){
            contextualMatches.push(match);
            if (match.route.id === fromRouteId) {
                activeRouteMatch = match;
                break;
            }
        }
    } else {
        contextualMatches = matches;
        activeRouteMatch = matches[matches.length - 1];
    }
    // Resolve the relative path
    let path = $0e856af10b3b08bf$export$cae722b0cc860f13(to ? to : ".", $0e856af10b3b08bf$export$a5784978eca585fa(contextualMatches, v7_relativeSplatPath), $0e856af10b3b08bf$export$b69e3301ce081aa3(location.pathname, basename) || location.pathname, relative === "path");
    // When `to` is not specified we inherit search/hash from the current
    // location, unlike when to="." and we just inherit the path.
    // See https://github.com/remix-run/remix/issues/927
    if (to == null) {
        path.search = location.search;
        path.hash = location.hash;
    }
    // Add an ?index param for matched index routes if we don't already have one
    if ((to == null || to === "" || to === ".") && activeRouteMatch && activeRouteMatch.route.index && !$0e856af10b3b08bf$var$hasNakedIndexQuery(path.search)) path.search = path.search ? path.search.replace(/^\?/, "?index&") : "?index";
    // If we're operating within a basename, prepend it to the pathname.  If
    // this is a root navigation, then just use the raw basename which allows
    // the basename to have full control over the presence of a trailing slash
    // on root actions
    if (prependBasename && basename !== "/") path.pathname = path.pathname === "/" ? basename : $0e856af10b3b08bf$export$86d9a7913e44197e([
        basename,
        path.pathname
    ]);
    return $0e856af10b3b08bf$export$fe53371bee54353d(path);
}
// Normalize navigation options by converting formMethod=GET formData objects to
// URLSearchParams so they behave identically to links with query params
function $0e856af10b3b08bf$var$normalizeNavigateOptions(normalizeFormMethod, isFetcher, path, opts) {
    // Return location verbatim on non-submission navigations
    if (!opts || !$0e856af10b3b08bf$var$isSubmissionNavigation(opts)) return {
        path: path
    };
    if (opts.formMethod && !$0e856af10b3b08bf$var$isValidMethod(opts.formMethod)) return {
        path: path,
        error: $0e856af10b3b08bf$var$getInternalRouterError(405, {
            method: opts.formMethod
        })
    };
    let getInvalidBodyError = ()=>({
            path: path,
            error: $0e856af10b3b08bf$var$getInternalRouterError(400, {
                type: "invalid-body"
            })
        });
    // Create a Submission on non-GET navigations
    let rawFormMethod = opts.formMethod || "get";
    let formMethod = normalizeFormMethod ? rawFormMethod.toUpperCase() : rawFormMethod.toLowerCase();
    let formAction = $0e856af10b3b08bf$var$stripHashFromPath(path);
    if (opts.body !== undefined) {
        if (opts.formEncType === "text/plain") {
            // text only support POST/PUT/PATCH/DELETE submissions
            if (!$0e856af10b3b08bf$var$isMutationMethod(formMethod)) return getInvalidBodyError();
            let text = typeof opts.body === "string" ? opts.body : opts.body instanceof FormData || opts.body instanceof URLSearchParams ? // https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#plain-text-form-data
            Array.from(opts.body.entries()).reduce((acc, _ref5)=>{
                let [name, value] = _ref5;
                return "" + acc + name + "=" + value + "\n";
            }, "") : String(opts.body);
            return {
                path: path,
                submission: {
                    formMethod: formMethod,
                    formAction: formAction,
                    formEncType: opts.formEncType,
                    formData: undefined,
                    json: undefined,
                    text: text
                }
            };
        } else if (opts.formEncType === "application/json") {
            // json only supports POST/PUT/PATCH/DELETE submissions
            if (!$0e856af10b3b08bf$var$isMutationMethod(formMethod)) return getInvalidBodyError();
            try {
                let json = typeof opts.body === "string" ? JSON.parse(opts.body) : opts.body;
                return {
                    path: path,
                    submission: {
                        formMethod: formMethod,
                        formAction: formAction,
                        formEncType: opts.formEncType,
                        formData: undefined,
                        json: json,
                        text: undefined
                    }
                };
            } catch (e) {
                return getInvalidBodyError();
            }
        }
    }
    $0e856af10b3b08bf$export$3e9cee6b33872309(typeof FormData === "function", "FormData is not available in this environment");
    let searchParams;
    let formData;
    if (opts.formData) {
        searchParams = $0e856af10b3b08bf$var$convertFormDataToSearchParams(opts.formData);
        formData = opts.formData;
    } else if (opts.body instanceof FormData) {
        searchParams = $0e856af10b3b08bf$var$convertFormDataToSearchParams(opts.body);
        formData = opts.body;
    } else if (opts.body instanceof URLSearchParams) {
        searchParams = opts.body;
        formData = $0e856af10b3b08bf$var$convertSearchParamsToFormData(searchParams);
    } else if (opts.body == null) {
        searchParams = new URLSearchParams();
        formData = new FormData();
    } else try {
        searchParams = new URLSearchParams(opts.body);
        formData = $0e856af10b3b08bf$var$convertSearchParamsToFormData(searchParams);
    } catch (e) {
        return getInvalidBodyError();
    }
    let submission = {
        formMethod: formMethod,
        formAction: formAction,
        formEncType: opts && opts.formEncType || "application/x-www-form-urlencoded",
        formData: formData,
        json: undefined,
        text: undefined
    };
    if ($0e856af10b3b08bf$var$isMutationMethod(submission.formMethod)) return {
        path: path,
        submission: submission
    };
    // Flatten submission onto URLSearchParams for GET submissions
    let parsedPath = $0e856af10b3b08bf$export$8ccf933b0513f8d0(path);
    // On GET navigation submissions we can drop the ?index param from the
    // resulting location since all loaders will run.  But fetcher GET submissions
    // only run a single loader so we need to preserve any incoming ?index params
    if (isFetcher && parsedPath.search && $0e856af10b3b08bf$var$hasNakedIndexQuery(parsedPath.search)) searchParams.append("index", "");
    parsedPath.search = "?" + searchParams;
    return {
        path: $0e856af10b3b08bf$export$fe53371bee54353d(parsedPath),
        submission: submission
    };
}
// Filter out all routes below any caught error as they aren't going to
// render so we don't need to load them
function $0e856af10b3b08bf$var$getLoaderMatchesUntilBoundary(matches, boundaryId) {
    let boundaryMatches = matches;
    if (boundaryId) {
        let index = matches.findIndex((m)=>m.route.id === boundaryId);
        if (index >= 0) boundaryMatches = matches.slice(0, index);
    }
    return boundaryMatches;
}
function $0e856af10b3b08bf$var$getMatchesToLoad(history, state, matches, submission, location, isInitialLoad, isRevalidationRequired, cancelledDeferredRoutes, cancelledFetcherLoads, deletedFetchers, fetchLoadMatches, fetchRedirectIds, routesToUse, basename, pendingActionData, pendingError) {
    let actionResult = pendingError ? Object.values(pendingError)[0] : pendingActionData ? Object.values(pendingActionData)[0] : undefined;
    let currentUrl = history.createURL(state.location);
    let nextUrl = history.createURL(location);
    // Pick navigation matches that are net-new or qualify for revalidation
    let boundaryId = pendingError ? Object.keys(pendingError)[0] : undefined;
    let boundaryMatches = $0e856af10b3b08bf$var$getLoaderMatchesUntilBoundary(matches, boundaryId);
    let navigationMatches = boundaryMatches.filter((match, index)=>{
        let { route: route } = match;
        if (route.lazy) // We haven't loaded this route yet so we don't know if it's got a loader!
        return true;
        if (route.loader == null) return false;
        if (isInitialLoad) {
            if (route.loader.hydrate) return true;
            return state.loaderData[route.id] === undefined && // Don't re-run if the loader ran and threw an error
            (!state.errors || state.errors[route.id] === undefined);
        }
        // Always call the loader on new route instances and pending defer cancellations
        if ($0e856af10b3b08bf$var$isNewLoader(state.loaderData, state.matches[index], match) || cancelledDeferredRoutes.some((id)=>id === match.route.id)) return true;
        // This is the default implementation for when we revalidate.  If the route
        // provides it's own implementation, then we give them full control but
        // provide this value so they can leverage it if needed after they check
        // their own specific use cases
        let currentRouteMatch = state.matches[index];
        let nextRouteMatch = match;
        return $0e856af10b3b08bf$var$shouldRevalidateLoader(match, $0e856af10b3b08bf$var$_extends({
            currentUrl: currentUrl,
            currentParams: currentRouteMatch.params,
            nextUrl: nextUrl,
            nextParams: nextRouteMatch.params
        }, submission, {
            actionResult: actionResult,
            defaultShouldRevalidate: // Forced revalidation due to submission, useRevalidator, or X-Remix-Revalidate
            isRevalidationRequired || // Clicked the same link, resubmitted a GET form
            currentUrl.pathname + currentUrl.search === nextUrl.pathname + nextUrl.search || // Search params affect all loaders
            currentUrl.search !== nextUrl.search || $0e856af10b3b08bf$var$isNewRouteInstance(currentRouteMatch, nextRouteMatch)
        }));
    });
    // Pick fetcher.loads that need to be revalidated
    let revalidatingFetchers = [];
    fetchLoadMatches.forEach((f, key)=>{
        // Don't revalidate:
        //  - on initial load (shouldn't be any fetchers then anyway)
        //  - if fetcher won't be present in the subsequent render
        //    - no longer matches the URL (v7_fetcherPersist=false)
        //    - was unmounted but persisted due to v7_fetcherPersist=true
        if (isInitialLoad || !matches.some((m)=>m.route.id === f.routeId) || deletedFetchers.has(key)) return;
        let fetcherMatches = $0e856af10b3b08bf$export$2708184779ceb39d(routesToUse, f.path, basename);
        // If the fetcher path no longer matches, push it in with null matches so
        // we can trigger a 404 in callLoadersAndMaybeResolveData.  Note this is
        // currently only a use-case for Remix HMR where the route tree can change
        // at runtime and remove a route previously loaded via a fetcher
        if (!fetcherMatches) {
            revalidatingFetchers.push({
                key: key,
                routeId: f.routeId,
                path: f.path,
                matches: null,
                match: null,
                controller: null
            });
            return;
        }
        // Revalidating fetchers are decoupled from the route matches since they
        // load from a static href.  They revalidate based on explicit revalidation
        // (submission, useRevalidator, or X-Remix-Revalidate)
        let fetcher = state.fetchers.get(key);
        let fetcherMatch = $0e856af10b3b08bf$var$getTargetMatch(fetcherMatches, f.path);
        let shouldRevalidate = false;
        if (fetchRedirectIds.has(key)) // Never trigger a revalidation of an actively redirecting fetcher
        shouldRevalidate = false;
        else if (cancelledFetcherLoads.includes(key)) // Always revalidate if the fetcher was cancelled
        shouldRevalidate = true;
        else if (fetcher && fetcher.state !== "idle" && fetcher.data === undefined) // If the fetcher hasn't ever completed loading yet, then this isn't a
        // revalidation, it would just be a brand new load if an explicit
        // revalidation is required
        shouldRevalidate = isRevalidationRequired;
        else // Otherwise fall back on any user-defined shouldRevalidate, defaulting
        // to explicit revalidations only
        shouldRevalidate = $0e856af10b3b08bf$var$shouldRevalidateLoader(fetcherMatch, $0e856af10b3b08bf$var$_extends({
            currentUrl: currentUrl,
            currentParams: state.matches[state.matches.length - 1].params,
            nextUrl: nextUrl,
            nextParams: matches[matches.length - 1].params
        }, submission, {
            actionResult: actionResult,
            defaultShouldRevalidate: isRevalidationRequired
        }));
        if (shouldRevalidate) revalidatingFetchers.push({
            key: key,
            routeId: f.routeId,
            path: f.path,
            matches: fetcherMatches,
            match: fetcherMatch,
            controller: new AbortController()
        });
    });
    return [
        navigationMatches,
        revalidatingFetchers
    ];
}
function $0e856af10b3b08bf$var$isNewLoader(currentLoaderData, currentMatch, match) {
    let isNew = // [a] -> [a, b]
    !currentMatch || // [a, b] -> [a, c]
    match.route.id !== currentMatch.route.id;
    // Handle the case that we don't have data for a re-used route, potentially
    // from a prior error or from a cancelled pending deferred
    let isMissingData = currentLoaderData[match.route.id] === undefined;
    // Always load if this is a net-new route or we don't yet have data
    return isNew || isMissingData;
}
function $0e856af10b3b08bf$var$isNewRouteInstance(currentMatch, match) {
    let currentPath = currentMatch.route.path;
    return(// param change for this match, /users/123 -> /users/456
    currentMatch.pathname !== match.pathname || // splat param changed, which is not present in match.path
    // e.g. /files/images/avatar.jpg -> files/finances.xls
    currentPath != null && currentPath.endsWith("*") && currentMatch.params["*"] !== match.params["*"]);
}
function $0e856af10b3b08bf$var$shouldRevalidateLoader(loaderMatch, arg) {
    if (loaderMatch.route.shouldRevalidate) {
        let routeChoice = loaderMatch.route.shouldRevalidate(arg);
        if (typeof routeChoice === "boolean") return routeChoice;
    }
    return arg.defaultShouldRevalidate;
}
/**
 * Execute route.lazy() methods to lazily load route modules (loader, action,
 * shouldRevalidate) and update the routeManifest in place which shares objects
 * with dataRoutes so those get updated as well.
 */ async function $0e856af10b3b08bf$var$loadLazyRouteModule(route, mapRouteProperties, manifest) {
    if (!route.lazy) return;
    let lazyRoute = await route.lazy();
    // If the lazy route function was executed and removed by another parallel
    // call then we can return - first lazy() to finish wins because the return
    // value of lazy is expected to be static
    if (!route.lazy) return;
    let routeToUpdate = manifest[route.id];
    $0e856af10b3b08bf$export$3e9cee6b33872309(routeToUpdate, "No route found in manifest");
    // Update the route in place.  This should be safe because there's no way
    // we could yet be sitting on this route as we can't get there without
    // resolving lazy() first.
    //
    // This is different than the HMR "update" use-case where we may actively be
    // on the route being updated.  The main concern boils down to "does this
    // mutation affect any ongoing navigations or any current state.matches
    // values?".  If not, it should be safe to update in place.
    let routeUpdates = {};
    for(let lazyRouteProperty in lazyRoute){
        let staticRouteValue = routeToUpdate[lazyRouteProperty];
        let isPropertyStaticallyDefined = staticRouteValue !== undefined && // This property isn't static since it should always be updated based
        // on the route updates
        lazyRouteProperty !== "hasErrorBoundary";
        $0e856af10b3b08bf$export$c0e02632e14916fd(!isPropertyStaticallyDefined, 'Route "' + routeToUpdate.id + '" has a static property "' + lazyRouteProperty + '" ' + "defined but its lazy function is also returning a value for this property. " + ('The lazy route property "' + lazyRouteProperty + '" will be ignored.'));
        if (!isPropertyStaticallyDefined && !$0e856af10b3b08bf$var$immutableRouteKeys.has(lazyRouteProperty)) routeUpdates[lazyRouteProperty] = lazyRoute[lazyRouteProperty];
    }
    // Mutate the route with the provided updates.  Do this first so we pass
    // the updated version to mapRouteProperties
    Object.assign(routeToUpdate, routeUpdates);
    // Mutate the `hasErrorBoundary` property on the route based on the route
    // updates and remove the `lazy` function so we don't resolve the lazy
    // route again.
    Object.assign(routeToUpdate, $0e856af10b3b08bf$var$_extends({}, mapRouteProperties(routeToUpdate), {
        lazy: undefined
    }));
}
async function $0e856af10b3b08bf$var$callLoaderOrAction(type, request, match, matches, manifest, mapRouteProperties, basename, v7_relativeSplatPath, opts) {
    if (opts === void 0) opts = {};
    let resultType;
    let result;
    let onReject;
    let runHandler = (handler)=>{
        // Setup a promise we can race against so that abort signals short circuit
        let reject;
        let abortPromise = new Promise((_, r)=>reject = r);
        onReject = ()=>reject();
        request.signal.addEventListener("abort", onReject);
        return Promise.race([
            handler({
                request: request,
                params: match.params,
                context: opts.requestContext
            }),
            abortPromise
        ]);
    };
    try {
        let handler = match.route[type];
        if (match.route.lazy) {
            if (handler) {
                // Run statically defined handler in parallel with lazy()
                let handlerError;
                let values = await Promise.all([
                    // If the handler throws, don't let it immediately bubble out,
                    // since we need to let the lazy() execution finish so we know if this
                    // route has a boundary that can handle the error
                    runHandler(handler).catch((e)=>{
                        handlerError = e;
                    }),
                    $0e856af10b3b08bf$var$loadLazyRouteModule(match.route, mapRouteProperties, manifest)
                ]);
                if (handlerError) throw handlerError;
                result = values[0];
            } else {
                // Load lazy route module, then run any returned handler
                await $0e856af10b3b08bf$var$loadLazyRouteModule(match.route, mapRouteProperties, manifest);
                handler = match.route[type];
                if (handler) // Handler still run even if we got interrupted to maintain consistency
                // with un-abortable behavior of handler execution on non-lazy or
                // previously-lazy-loaded routes
                result = await runHandler(handler);
                else if (type === "action") {
                    let url = new URL(request.url);
                    let pathname = url.pathname + url.search;
                    throw $0e856af10b3b08bf$var$getInternalRouterError(405, {
                        method: request.method,
                        pathname: pathname,
                        routeId: match.route.id
                    });
                } else // lazy() route has no loader to run.  Short circuit here so we don't
                // hit the invariant below that errors on returning undefined.
                return {
                    type: $0e856af10b3b08bf$var$ResultType.data,
                    data: undefined
                };
            }
        } else if (!handler) {
            let url = new URL(request.url);
            let pathname = url.pathname + url.search;
            throw $0e856af10b3b08bf$var$getInternalRouterError(404, {
                pathname: pathname
            });
        } else result = await runHandler(handler);
        $0e856af10b3b08bf$export$3e9cee6b33872309(result !== undefined, "You defined " + (type === "action" ? "an action" : "a loader") + " for route " + ('"' + match.route.id + "\" but didn't return anything from your `" + type + "` ") + "function. Please return a value or `null`.");
    } catch (e) {
        resultType = $0e856af10b3b08bf$var$ResultType.error;
        result = e;
    } finally{
        if (onReject) request.signal.removeEventListener("abort", onReject);
    }
    if ($0e856af10b3b08bf$var$isResponse(result)) {
        let status = result.status;
        // Process redirects
        if ($0e856af10b3b08bf$var$redirectStatusCodes.has(status)) {
            let location = result.headers.get("Location");
            $0e856af10b3b08bf$export$3e9cee6b33872309(location, "Redirects returned/thrown from loaders/actions must have a Location header");
            // Support relative routing in internal redirects
            if (!$0e856af10b3b08bf$var$ABSOLUTE_URL_REGEX.test(location)) location = $0e856af10b3b08bf$var$normalizeTo(new URL(request.url), matches.slice(0, matches.indexOf(match) + 1), basename, true, location, v7_relativeSplatPath);
            else if (!opts.isStaticRequest) {
                // Strip off the protocol+origin for same-origin + same-basename absolute
                // redirects. If this is a static request, we can let it go back to the
                // browser as-is
                let currentUrl = new URL(request.url);
                let url = location.startsWith("//") ? new URL(currentUrl.protocol + location) : new URL(location);
                let isSameBasename = $0e856af10b3b08bf$export$b69e3301ce081aa3(url.pathname, basename) != null;
                if (url.origin === currentUrl.origin && isSameBasename) location = url.pathname + url.search + url.hash;
            }
            // Don't process redirects in the router during static requests requests.
            // Instead, throw the Response and let the server handle it with an HTTP
            // redirect.  We also update the Location header in place in this flow so
            // basename and relative routing is taken into account
            if (opts.isStaticRequest) {
                result.headers.set("Location", location);
                throw result;
            }
            return {
                type: $0e856af10b3b08bf$var$ResultType.redirect,
                status: status,
                location: location,
                revalidate: result.headers.get("X-Remix-Revalidate") !== null,
                reloadDocument: result.headers.get("X-Remix-Reload-Document") !== null
            };
        }
        // For SSR single-route requests, we want to hand Responses back directly
        // without unwrapping.  We do this with the QueryRouteResponse wrapper
        // interface so we can know whether it was returned or thrown
        if (opts.isRouteRequest) {
            let queryRouteResponse = {
                type: resultType === $0e856af10b3b08bf$var$ResultType.error ? $0e856af10b3b08bf$var$ResultType.error : $0e856af10b3b08bf$var$ResultType.data,
                response: result
            };
            throw queryRouteResponse;
        }
        let data;
        try {
            let contentType = result.headers.get("Content-Type");
            // Check between word boundaries instead of startsWith() due to the last
            // paragraph of https://httpwg.org/specs/rfc9110.html#field.content-type
            if (contentType && /\bapplication\/json\b/.test(contentType)) {
                if (result.body == null) data = null;
                else data = await result.json();
            } else data = await result.text();
        } catch (e) {
            return {
                type: $0e856af10b3b08bf$var$ResultType.error,
                error: e
            };
        }
        if (resultType === $0e856af10b3b08bf$var$ResultType.error) return {
            type: resultType,
            error: new $0e856af10b3b08bf$export$6c6580e81da25755(status, result.statusText, data),
            headers: result.headers
        };
        return {
            type: $0e856af10b3b08bf$var$ResultType.data,
            data: data,
            statusCode: result.status,
            headers: result.headers
        };
    }
    if (resultType === $0e856af10b3b08bf$var$ResultType.error) return {
        type: resultType,
        error: result
    };
    if ($0e856af10b3b08bf$export$fbcedacb60443473(result)) {
        var _result$init, _result$init2;
        return {
            type: $0e856af10b3b08bf$var$ResultType.deferred,
            deferredData: result,
            statusCode: (_result$init = result.init) == null ? void 0 : _result$init.status,
            headers: ((_result$init2 = result.init) == null ? void 0 : _result$init2.headers) && new Headers(result.init.headers)
        };
    }
    return {
        type: $0e856af10b3b08bf$var$ResultType.data,
        data: result
    };
}
// Utility method for creating the Request instances for loaders/actions during
// client-side navigations and fetches.  During SSR we will always have a
// Request instance from the static handler (query/queryRoute)
function $0e856af10b3b08bf$var$createClientSideRequest(history, location, signal, submission) {
    let url = history.createURL($0e856af10b3b08bf$var$stripHashFromPath(location)).toString();
    let init = {
        signal: signal
    };
    if (submission && $0e856af10b3b08bf$var$isMutationMethod(submission.formMethod)) {
        let { formMethod: formMethod, formEncType: formEncType } = submission;
        // Didn't think we needed this but it turns out unlike other methods, patch
        // won't be properly normalized to uppercase and results in a 405 error.
        // See: https://fetch.spec.whatwg.org/#concept-method
        init.method = formMethod.toUpperCase();
        if (formEncType === "application/json") {
            init.headers = new Headers({
                "Content-Type": formEncType
            });
            init.body = JSON.stringify(submission.json);
        } else if (formEncType === "text/plain") // Content-Type is inferred (https://fetch.spec.whatwg.org/#dom-request)
        init.body = submission.text;
        else if (formEncType === "application/x-www-form-urlencoded" && submission.formData) // Content-Type is inferred (https://fetch.spec.whatwg.org/#dom-request)
        init.body = $0e856af10b3b08bf$var$convertFormDataToSearchParams(submission.formData);
        else // Content-Type is inferred (https://fetch.spec.whatwg.org/#dom-request)
        init.body = submission.formData;
    }
    return new Request(url, init);
}
function $0e856af10b3b08bf$var$convertFormDataToSearchParams(formData) {
    let searchParams = new URLSearchParams();
    for (let [key, value] of formData.entries())// https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#converting-an-entry-list-to-a-list-of-name-value-pairs
    searchParams.append(key, typeof value === "string" ? value : value.name);
    return searchParams;
}
function $0e856af10b3b08bf$var$convertSearchParamsToFormData(searchParams) {
    let formData = new FormData();
    for (let [key, value] of searchParams.entries())formData.append(key, value);
    return formData;
}
function $0e856af10b3b08bf$var$processRouteLoaderData(matches, matchesToLoad, results, pendingError, activeDeferreds) {
    // Fill in loaderData/errors from our loaders
    let loaderData = {};
    let errors = null;
    let statusCode;
    let foundError = false;
    let loaderHeaders = {};
    // Process loader results into state.loaderData/state.errors
    results.forEach((result, index)=>{
        let id = matchesToLoad[index].route.id;
        $0e856af10b3b08bf$export$3e9cee6b33872309(!$0e856af10b3b08bf$var$isRedirectResult(result), "Cannot handle redirect results in processLoaderData");
        if ($0e856af10b3b08bf$var$isErrorResult(result)) {
            // Look upwards from the matched route for the closest ancestor
            // error boundary, defaulting to the root match
            let boundaryMatch = $0e856af10b3b08bf$var$findNearestBoundary(matches, id);
            let error = result.error;
            // If we have a pending action error, we report it at the highest-route
            // that throws a loader error, and then clear it out to indicate that
            // it was consumed
            if (pendingError) {
                error = Object.values(pendingError)[0];
                pendingError = undefined;
            }
            errors = errors || {};
            // Prefer higher error values if lower errors bubble to the same boundary
            if (errors[boundaryMatch.route.id] == null) errors[boundaryMatch.route.id] = error;
            // Clear our any prior loaderData for the throwing route
            loaderData[id] = undefined;
            // Once we find our first (highest) error, we set the status code and
            // prevent deeper status codes from overriding
            if (!foundError) {
                foundError = true;
                statusCode = $0e856af10b3b08bf$export$972111febbeef05b(result.error) ? result.error.status : 500;
            }
            if (result.headers) loaderHeaders[id] = result.headers;
        } else {
            if ($0e856af10b3b08bf$var$isDeferredResult(result)) {
                activeDeferreds.set(id, result.deferredData);
                loaderData[id] = result.deferredData.data;
            } else loaderData[id] = result.data;
            // Error status codes always override success status codes, but if all
            // loaders are successful we take the deepest status code.
            if (result.statusCode != null && result.statusCode !== 200 && !foundError) statusCode = result.statusCode;
            if (result.headers) loaderHeaders[id] = result.headers;
        }
    });
    // If we didn't consume the pending action error (i.e., all loaders
    // resolved), then consume it here.  Also clear out any loaderData for the
    // throwing route
    if (pendingError) {
        errors = pendingError;
        loaderData[Object.keys(pendingError)[0]] = undefined;
    }
    return {
        loaderData: loaderData,
        errors: errors,
        statusCode: statusCode || 200,
        loaderHeaders: loaderHeaders
    };
}
function $0e856af10b3b08bf$var$processLoaderData(state, matches, matchesToLoad, results, pendingError, revalidatingFetchers, fetcherResults, activeDeferreds) {
    let { loaderData: loaderData, errors: errors } = $0e856af10b3b08bf$var$processRouteLoaderData(matches, matchesToLoad, results, pendingError, activeDeferreds);
    // Process results from our revalidating fetchers
    for(let index = 0; index < revalidatingFetchers.length; index++){
        let { key: key, match: match, controller: controller } = revalidatingFetchers[index];
        $0e856af10b3b08bf$export$3e9cee6b33872309(fetcherResults !== undefined && fetcherResults[index] !== undefined, "Did not find corresponding fetcher result");
        let result = fetcherResults[index];
        // Process fetcher non-redirect errors
        if (controller && controller.signal.aborted) continue;
        else if ($0e856af10b3b08bf$var$isErrorResult(result)) {
            let boundaryMatch = $0e856af10b3b08bf$var$findNearestBoundary(state.matches, match == null ? void 0 : match.route.id);
            if (!(errors && errors[boundaryMatch.route.id])) errors = $0e856af10b3b08bf$var$_extends({}, errors, {
                [boundaryMatch.route.id]: result.error
            });
            state.fetchers.delete(key);
        } else if ($0e856af10b3b08bf$var$isRedirectResult(result)) // Should never get here, redirects should get processed above, but we
        // keep this to type narrow to a success result in the else
        $0e856af10b3b08bf$export$3e9cee6b33872309(false, "Unhandled fetcher revalidation redirect");
        else if ($0e856af10b3b08bf$var$isDeferredResult(result)) // Should never get here, deferred data should be awaited for fetchers
        // in resolveDeferredResults
        $0e856af10b3b08bf$export$3e9cee6b33872309(false, "Unhandled fetcher deferred data");
        else {
            let doneFetcher = $0e856af10b3b08bf$var$getDoneFetcher(result.data);
            state.fetchers.set(key, doneFetcher);
        }
    }
    return {
        loaderData: loaderData,
        errors: errors
    };
}
function $0e856af10b3b08bf$var$mergeLoaderData(loaderData, newLoaderData, matches, errors) {
    let mergedLoaderData = $0e856af10b3b08bf$var$_extends({}, newLoaderData);
    for (let match of matches){
        let id = match.route.id;
        if (newLoaderData.hasOwnProperty(id)) {
            if (newLoaderData[id] !== undefined) mergedLoaderData[id] = newLoaderData[id];
        } else if (loaderData[id] !== undefined && match.route.loader) // Preserve existing keys not included in newLoaderData and where a loader
        // wasn't removed by HMR
        mergedLoaderData[id] = loaderData[id];
        if (errors && errors.hasOwnProperty(id)) break;
    }
    return mergedLoaderData;
}
// Find the nearest error boundary, looking upwards from the leaf route (or the
// route specified by routeId) for the closest ancestor error boundary,
// defaulting to the root match
function $0e856af10b3b08bf$var$findNearestBoundary(matches, routeId) {
    let eligibleMatches = routeId ? matches.slice(0, matches.findIndex((m)=>m.route.id === routeId) + 1) : [
        ...matches
    ];
    return eligibleMatches.reverse().find((m)=>m.route.hasErrorBoundary === true) || matches[0];
}
function $0e856af10b3b08bf$var$getShortCircuitMatches(routes) {
    // Prefer a root layout route if present, otherwise shim in a route object
    let route = routes.length === 1 ? routes[0] : routes.find((r)=>r.index || !r.path || r.path === "/") || {
        id: "__shim-error-route__"
    };
    return {
        matches: [
            {
                params: {},
                pathname: "",
                pathnameBase: "",
                route: route
            }
        ],
        route: route
    };
}
function $0e856af10b3b08bf$var$getInternalRouterError(status, _temp5) {
    let { pathname: pathname, routeId: routeId, method: method, type: type } = _temp5 === void 0 ? {} : _temp5;
    let statusText = "Unknown Server Error";
    let errorMessage = "Unknown @remix-run/router error";
    if (status === 400) {
        statusText = "Bad Request";
        if (method && pathname && routeId) errorMessage = "You made a " + method + ' request to "' + pathname + '" but ' + ('did not provide a `loader` for route "' + routeId + '", ') + "so there is no way to handle the request.";
        else if (type === "defer-action") errorMessage = "defer() is not supported in actions";
        else if (type === "invalid-body") errorMessage = "Unable to encode submission body";
    } else if (status === 403) {
        statusText = "Forbidden";
        errorMessage = 'Route "' + routeId + '" does not match URL "' + pathname + '"';
    } else if (status === 404) {
        statusText = "Not Found";
        errorMessage = 'No route matches URL "' + pathname + '"';
    } else if (status === 405) {
        statusText = "Method Not Allowed";
        if (method && pathname && routeId) errorMessage = "You made a " + method.toUpperCase() + ' request to "' + pathname + '" but ' + ('did not provide an `action` for route "' + routeId + '", ') + "so there is no way to handle the request.";
        else if (method) errorMessage = 'Invalid request method "' + method.toUpperCase() + '"';
    }
    return new $0e856af10b3b08bf$export$6c6580e81da25755(status || 500, statusText, new Error(errorMessage), true);
}
// Find any returned redirect errors, starting from the lowest match
function $0e856af10b3b08bf$var$findRedirect(results) {
    for(let i = results.length - 1; i >= 0; i--){
        let result = results[i];
        if ($0e856af10b3b08bf$var$isRedirectResult(result)) return {
            result: result,
            idx: i
        };
    }
}
function $0e856af10b3b08bf$var$stripHashFromPath(path) {
    let parsedPath = typeof path === "string" ? $0e856af10b3b08bf$export$8ccf933b0513f8d0(path) : path;
    return $0e856af10b3b08bf$export$fe53371bee54353d($0e856af10b3b08bf$var$_extends({}, parsedPath, {
        hash: ""
    }));
}
function $0e856af10b3b08bf$var$isHashChangeOnly(a, b) {
    if (a.pathname !== b.pathname || a.search !== b.search) return false;
    if (a.hash === "") // /page -> /page#hash
    return b.hash !== "";
    else if (a.hash === b.hash) // /page#hash -> /page#hash
    return true;
    else if (b.hash !== "") // /page#hash -> /page#other
    return true;
    // If the hash is removed the browser will re-perform a request to the server
    // /page#hash -> /page
    return false;
}
function $0e856af10b3b08bf$var$isDeferredResult(result) {
    return result.type === $0e856af10b3b08bf$var$ResultType.deferred;
}
function $0e856af10b3b08bf$var$isErrorResult(result) {
    return result.type === $0e856af10b3b08bf$var$ResultType.error;
}
function $0e856af10b3b08bf$var$isRedirectResult(result) {
    return (result && result.type) === $0e856af10b3b08bf$var$ResultType.redirect;
}
function $0e856af10b3b08bf$export$fbcedacb60443473(value) {
    let deferred = value;
    return deferred && typeof deferred === "object" && typeof deferred.data === "object" && typeof deferred.subscribe === "function" && typeof deferred.cancel === "function" && typeof deferred.resolveData === "function";
}
function $0e856af10b3b08bf$var$isResponse(value) {
    return value != null && typeof value.status === "number" && typeof value.statusText === "string" && typeof value.headers === "object" && typeof value.body !== "undefined";
}
function $0e856af10b3b08bf$var$isRedirectResponse(result) {
    if (!$0e856af10b3b08bf$var$isResponse(result)) return false;
    let status = result.status;
    let location = result.headers.get("Location");
    return status >= 300 && status <= 399 && location != null;
}
function $0e856af10b3b08bf$var$isQueryRouteResponse(obj) {
    return obj && $0e856af10b3b08bf$var$isResponse(obj.response) && (obj.type === $0e856af10b3b08bf$var$ResultType.data || obj.type === $0e856af10b3b08bf$var$ResultType.error);
}
function $0e856af10b3b08bf$var$isValidMethod(method) {
    return $0e856af10b3b08bf$var$validRequestMethods.has(method.toLowerCase());
}
function $0e856af10b3b08bf$var$isMutationMethod(method) {
    return $0e856af10b3b08bf$var$validMutationMethods.has(method.toLowerCase());
}
async function $0e856af10b3b08bf$var$resolveDeferredResults(currentMatches, matchesToLoad, results, signals, isFetcher, currentLoaderData) {
    for(let index = 0; index < results.length; index++){
        let result = results[index];
        let match = matchesToLoad[index];
        // If we don't have a match, then we can have a deferred result to do
        // anything with.  This is for revalidating fetchers where the route was
        // removed during HMR
        if (!match) continue;
        let currentMatch = currentMatches.find((m)=>m.route.id === match.route.id);
        let isRevalidatingLoader = currentMatch != null && !$0e856af10b3b08bf$var$isNewRouteInstance(currentMatch, match) && (currentLoaderData && currentLoaderData[match.route.id]) !== undefined;
        if ($0e856af10b3b08bf$var$isDeferredResult(result) && (isFetcher || isRevalidatingLoader)) {
            // Note: we do not have to touch activeDeferreds here since we race them
            // against the signal in resolveDeferredData and they'll get aborted
            // there if needed
            let signal = signals[index];
            $0e856af10b3b08bf$export$3e9cee6b33872309(signal, "Expected an AbortSignal for revalidating fetcher deferred result");
            await $0e856af10b3b08bf$var$resolveDeferredData(result, signal, isFetcher).then((result)=>{
                if (result) results[index] = result || results[index];
            });
        }
    }
}
async function $0e856af10b3b08bf$var$resolveDeferredData(result, signal, unwrap) {
    if (unwrap === void 0) unwrap = false;
    let aborted = await result.deferredData.resolveData(signal);
    if (aborted) return;
    if (unwrap) try {
        return {
            type: $0e856af10b3b08bf$var$ResultType.data,
            data: result.deferredData.unwrappedData
        };
    } catch (e) {
        // Handle any TrackedPromise._error values encountered while unwrapping
        return {
            type: $0e856af10b3b08bf$var$ResultType.error,
            error: e
        };
    }
    return {
        type: $0e856af10b3b08bf$var$ResultType.data,
        data: result.deferredData.data
    };
}
function $0e856af10b3b08bf$var$hasNakedIndexQuery(search) {
    return new URLSearchParams(search).getAll("index").some((v)=>v === "");
}
function $0e856af10b3b08bf$var$getTargetMatch(matches, location) {
    let search = typeof location === "string" ? $0e856af10b3b08bf$export$8ccf933b0513f8d0(location).search : location.search;
    if (matches[matches.length - 1].route.index && $0e856af10b3b08bf$var$hasNakedIndexQuery(search || "")) // Return the leaf index route when index is present
    return matches[matches.length - 1];
    // Otherwise grab the deepest "path contributing" match (ignoring index and
    // pathless layout routes)
    let pathMatches = $0e856af10b3b08bf$var$getPathContributingMatches(matches);
    return pathMatches[pathMatches.length - 1];
}
function $0e856af10b3b08bf$var$getSubmissionFromNavigation(navigation) {
    let { formMethod: formMethod, formAction: formAction, formEncType: formEncType, text: text, formData: formData, json: json } = navigation;
    if (!formMethod || !formAction || !formEncType) return;
    if (text != null) return {
        formMethod: formMethod,
        formAction: formAction,
        formEncType: formEncType,
        formData: undefined,
        json: undefined,
        text: text
    };
    else if (formData != null) return {
        formMethod: formMethod,
        formAction: formAction,
        formEncType: formEncType,
        formData: formData,
        json: undefined,
        text: undefined
    };
    else if (json !== undefined) return {
        formMethod: formMethod,
        formAction: formAction,
        formEncType: formEncType,
        formData: undefined,
        json: json,
        text: undefined
    };
}
function $0e856af10b3b08bf$var$getLoadingNavigation(location, submission) {
    if (submission) {
        let navigation = {
            state: "loading",
            location: location,
            formMethod: submission.formMethod,
            formAction: submission.formAction,
            formEncType: submission.formEncType,
            formData: submission.formData,
            json: submission.json,
            text: submission.text
        };
        return navigation;
    } else {
        let navigation = {
            state: "loading",
            location: location,
            formMethod: undefined,
            formAction: undefined,
            formEncType: undefined,
            formData: undefined,
            json: undefined,
            text: undefined
        };
        return navigation;
    }
}
function $0e856af10b3b08bf$var$getSubmittingNavigation(location, submission) {
    let navigation = {
        state: "submitting",
        location: location,
        formMethod: submission.formMethod,
        formAction: submission.formAction,
        formEncType: submission.formEncType,
        formData: submission.formData,
        json: submission.json,
        text: submission.text
    };
    return navigation;
}
function $0e856af10b3b08bf$var$getLoadingFetcher(submission, data) {
    if (submission) {
        let fetcher = {
            state: "loading",
            formMethod: submission.formMethod,
            formAction: submission.formAction,
            formEncType: submission.formEncType,
            formData: submission.formData,
            json: submission.json,
            text: submission.text,
            data: data
        };
        return fetcher;
    } else {
        let fetcher = {
            state: "loading",
            formMethod: undefined,
            formAction: undefined,
            formEncType: undefined,
            formData: undefined,
            json: undefined,
            text: undefined,
            data: data
        };
        return fetcher;
    }
}
function $0e856af10b3b08bf$var$getSubmittingFetcher(submission, existingFetcher) {
    let fetcher = {
        state: "submitting",
        formMethod: submission.formMethod,
        formAction: submission.formAction,
        formEncType: submission.formEncType,
        formData: submission.formData,
        json: submission.json,
        text: submission.text,
        data: existingFetcher ? existingFetcher.data : undefined
    };
    return fetcher;
}
function $0e856af10b3b08bf$var$getDoneFetcher(data) {
    let fetcher = {
        state: "idle",
        formMethod: undefined,
        formAction: undefined,
        formEncType: undefined,
        formData: undefined,
        json: undefined,
        text: undefined,
        data: data
    };
    return fetcher;
}
function $0e856af10b3b08bf$var$restoreAppliedTransitions(_window, transitions) {
    try {
        let sessionPositions = _window.sessionStorage.getItem($0e856af10b3b08bf$var$TRANSITIONS_STORAGE_KEY);
        if (sessionPositions) {
            let json = JSON.parse(sessionPositions);
            for (let [k, v] of Object.entries(json || {}))if (v && Array.isArray(v)) transitions.set(k, new Set(v || []));
        }
    } catch (e) {
    // no-op, use default empty object
    }
}
function $0e856af10b3b08bf$var$persistAppliedTransitions(_window, transitions) {
    if (transitions.size > 0) {
        let json = {};
        for (let [k, v] of transitions)json[k] = [
            ...v
        ];
        try {
            _window.sessionStorage.setItem($0e856af10b3b08bf$var$TRANSITIONS_STORAGE_KEY, JSON.stringify(json));
        } catch (error) {
            $0e856af10b3b08bf$export$c0e02632e14916fd(false, "Failed to save applied view transitions in sessionStorage (" + error + ").");
        }
    }
}

/**
 * React Router v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ 
var $d4J5n = parcelRequire("d4J5n");

function $5b1ea468d903474a$var$_extends() {
    $5b1ea468d903474a$var$_extends = Object.assign ? Object.assign.bind() : function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return $5b1ea468d903474a$var$_extends.apply(this, arguments);
}
// Create react-specific types from the agnostic types in @remix-run/router to
// export from react-router
const $5b1ea468d903474a$export$3add0d5dce533e2e = /*#__PURE__*/ $d4J5n.createContext(null);
const $5b1ea468d903474a$export$145dfa71566a64dc = /*#__PURE__*/ $d4J5n.createContext(null);
const $5b1ea468d903474a$var$AwaitContext = /*#__PURE__*/ $d4J5n.createContext(null);
/**
 * A Navigator is a "location changer"; it's how you get to different locations.
 *
 * Every history instance conforms to the Navigator interface, but the
 * distinction is useful primarily when it comes to the low-level `<Router>` API
 * where both the location and a navigator must be provided separately in order
 * to avoid "tearing" that may occur in a suspense-enabled app if the action
 * and/or location were to be read directly from the history instance.
 */ const $5b1ea468d903474a$export$26749e8557646306 = /*#__PURE__*/ $d4J5n.createContext(null);
const $5b1ea468d903474a$export$c7914228fb69b0f5 = /*#__PURE__*/ $d4J5n.createContext(null);
const $5b1ea468d903474a$export$9072aa6dd1f93057 = /*#__PURE__*/ $d4J5n.createContext({
    outlet: null,
    matches: [],
    isDataRoute: false
});
const $5b1ea468d903474a$var$RouteErrorContext = /*#__PURE__*/ $d4J5n.createContext(null);
/**
 * Returns the full href for the given "to" value. This is useful for building
 * custom links that are also accessible and preserve right-click behavior.
 *
 * @see https://reactrouter.com/hooks/use-href
 */ function $5b1ea468d903474a$export$b66bb29c5006f12f(to, _temp) {
    let { relative: relative } = _temp === void 0 ? {} : _temp;
    !$5b1ea468d903474a$export$9c954a9d03d32f4a() && (0, $0e856af10b3b08bf$export$3e9cee6b33872309)(false);
    let { basename: basename, navigator: navigator } = $d4J5n.useContext($5b1ea468d903474a$export$26749e8557646306);
    let { hash: hash, pathname: pathname, search: search } = $5b1ea468d903474a$export$e75d2a2d1b3c245b(to, {
        relative: relative
    });
    let joinedPathname = pathname;
    // If we're operating within a basename, prepend it to the pathname prior
    // to creating the href.  If this is a root navigation, then just use the raw
    // basename which allows the basename to have full control over the presence
    // of a trailing slash on root links
    if (basename !== "/") joinedPathname = pathname === "/" ? basename : (0, $0e856af10b3b08bf$export$86d9a7913e44197e)([
        basename,
        pathname
    ]);
    return navigator.createHref({
        pathname: joinedPathname,
        search: search,
        hash: hash
    });
}
/**
 * Returns true if this component is a descendant of a `<Router>`.
 *
 * @see https://reactrouter.com/hooks/use-in-router-context
 */ function $5b1ea468d903474a$export$9c954a9d03d32f4a() {
    return $d4J5n.useContext($5b1ea468d903474a$export$c7914228fb69b0f5) != null;
}
/**
 * Returns the current location object, which represents the current URL in web
 * browsers.
 *
 * Note: If you're using this it may mean you're doing some of your own
 * "routing" in your app, and we'd like to know what your use case is. We may
 * be able to provide something higher-level to better suit your needs.
 *
 * @see https://reactrouter.com/hooks/use-location
 */ function $5b1ea468d903474a$export$45d76561a5302f2b() {
    !$5b1ea468d903474a$export$9c954a9d03d32f4a() && (0, $0e856af10b3b08bf$export$3e9cee6b33872309)(false);
    return $d4J5n.useContext($5b1ea468d903474a$export$c7914228fb69b0f5).location;
}
/**
 * Returns the current navigation action which describes how the router came to
 * the current location, either by a pop, push, or replace on the history stack.
 *
 * @see https://reactrouter.com/hooks/use-navigation-type
 */ function $5b1ea468d903474a$export$1b3f31771c5d07c() {
    return $d4J5n.useContext($5b1ea468d903474a$export$c7914228fb69b0f5).navigationType;
}
/**
 * Returns a PathMatch object if the given pattern matches the current URL.
 * This is useful for components that need to know "active" state, e.g.
 * `<NavLink>`.
 *
 * @see https://reactrouter.com/hooks/use-match
 */ function $5b1ea468d903474a$export$6c330e8992e8a295(pattern) {
    !$5b1ea468d903474a$export$9c954a9d03d32f4a() && (0, $0e856af10b3b08bf$export$3e9cee6b33872309)(false);
    let { pathname: pathname } = $5b1ea468d903474a$export$45d76561a5302f2b();
    return $d4J5n.useMemo(()=>(0, $0e856af10b3b08bf$export$81336c211d5ff295)(pattern, pathname), [
        pathname,
        pattern
    ]);
}
/**
 * The interface for the navigate() function returned from useNavigate().
 */ const $5b1ea468d903474a$var$navigateEffectWarning = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
// Mute warnings for calls to useNavigate in SSR environments
function $5b1ea468d903474a$var$useIsomorphicLayoutEffect(cb) {
    let isStatic = $d4J5n.useContext($5b1ea468d903474a$export$26749e8557646306).static;
    if (!isStatic) // We should be able to get rid of this once react 18.3 is released
    // See: https://github.com/facebook/react/pull/26395
    // eslint-disable-next-line react-hooks/rules-of-hooks
    $d4J5n.useLayoutEffect(cb);
}
/**
 * Returns an imperative method for changing the location. Used by `<Link>`s, but
 * may also be used by other elements to change the location.
 *
 * @see https://reactrouter.com/hooks/use-navigate
 */ function $5b1ea468d903474a$export$9770f232ac06a008() {
    let { isDataRoute: isDataRoute } = $d4J5n.useContext($5b1ea468d903474a$export$9072aa6dd1f93057);
    // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return isDataRoute ? $5b1ea468d903474a$var$useNavigateStable() : $5b1ea468d903474a$var$useNavigateUnstable();
}
function $5b1ea468d903474a$var$useNavigateUnstable() {
    !$5b1ea468d903474a$export$9c954a9d03d32f4a() && (0, $0e856af10b3b08bf$export$3e9cee6b33872309)(false);
    let dataRouterContext = $d4J5n.useContext($5b1ea468d903474a$export$3add0d5dce533e2e);
    let { basename: basename, future: future, navigator: navigator } = $d4J5n.useContext($5b1ea468d903474a$export$26749e8557646306);
    let { matches: matches } = $d4J5n.useContext($5b1ea468d903474a$export$9072aa6dd1f93057);
    let { pathname: locationPathname } = $5b1ea468d903474a$export$45d76561a5302f2b();
    let routePathnamesJson = JSON.stringify((0, $0e856af10b3b08bf$export$a5784978eca585fa)(matches, future.v7_relativeSplatPath));
    let activeRef = $d4J5n.useRef(false);
    $5b1ea468d903474a$var$useIsomorphicLayoutEffect(()=>{
        activeRef.current = true;
    });
    let navigate = $d4J5n.useCallback(function(to, options) {
        if (options === void 0) options = {};
        // Short circuit here since if this happens on first render the navigate
        // is useless because we haven't wired up our history listener yet
        if (!activeRef.current) return;
        if (typeof to === "number") {
            navigator.go(to);
            return;
        }
        let path = (0, $0e856af10b3b08bf$export$cae722b0cc860f13)(to, JSON.parse(routePathnamesJson), locationPathname, options.relative === "path");
        // If we're operating within a basename, prepend it to the pathname prior
        // to handing off to history (but only if we're not in a data router,
        // otherwise it'll prepend the basename inside of the router).
        // If this is a root navigation, then we navigate to the raw basename
        // which allows the basename to have full control over the presence of a
        // trailing slash on root links
        if (dataRouterContext == null && basename !== "/") path.pathname = path.pathname === "/" ? basename : (0, $0e856af10b3b08bf$export$86d9a7913e44197e)([
            basename,
            path.pathname
        ]);
        (!!options.replace ? navigator.replace : navigator.push)(path, options.state, options);
    }, [
        basename,
        navigator,
        routePathnamesJson,
        locationPathname,
        dataRouterContext
    ]);
    return navigate;
}
const $5b1ea468d903474a$var$OutletContext = /*#__PURE__*/ $d4J5n.createContext(null);
/**
 * Returns the context (if provided) for the child route at this level of the route
 * hierarchy.
 * @see https://reactrouter.com/hooks/use-outlet-context
 */ function $5b1ea468d903474a$export$4138103a3ae699cc() {
    return $d4J5n.useContext($5b1ea468d903474a$var$OutletContext);
}
/**
 * Returns the element for the child route at this level of the route
 * hierarchy. Used internally by `<Outlet>` to render child routes.
 *
 * @see https://reactrouter.com/hooks/use-outlet
 */ function $5b1ea468d903474a$export$a3be3530d8e40d0b(context) {
    let outlet = $d4J5n.useContext($5b1ea468d903474a$export$9072aa6dd1f93057).outlet;
    if (outlet) return /*#__PURE__*/ $d4J5n.createElement($5b1ea468d903474a$var$OutletContext.Provider, {
        value: context
    }, outlet);
    return outlet;
}
/**
 * Returns an object of key/value pairs of the dynamic params from the current
 * URL that were matched by the route path.
 *
 * @see https://reactrouter.com/hooks/use-params
 */ function $5b1ea468d903474a$export$99eaa27ddbbb95ef() {
    let { matches: matches } = $d4J5n.useContext($5b1ea468d903474a$export$9072aa6dd1f93057);
    let routeMatch = matches[matches.length - 1];
    return routeMatch ? routeMatch.params : {};
}
/**
 * Resolves the pathname of the given `to` value against the current location.
 *
 * @see https://reactrouter.com/hooks/use-resolved-path
 */ function $5b1ea468d903474a$export$e75d2a2d1b3c245b(to, _temp2) {
    let { relative: relative } = _temp2 === void 0 ? {} : _temp2;
    let { future: future } = $d4J5n.useContext($5b1ea468d903474a$export$26749e8557646306);
    let { matches: matches } = $d4J5n.useContext($5b1ea468d903474a$export$9072aa6dd1f93057);
    let { pathname: locationPathname } = $5b1ea468d903474a$export$45d76561a5302f2b();
    let routePathnamesJson = JSON.stringify((0, $0e856af10b3b08bf$export$a5784978eca585fa)(matches, future.v7_relativeSplatPath));
    return $d4J5n.useMemo(()=>(0, $0e856af10b3b08bf$export$cae722b0cc860f13)(to, JSON.parse(routePathnamesJson), locationPathname, relative === "path"), [
        to,
        routePathnamesJson,
        locationPathname,
        relative
    ]);
}
/**
 * Returns the element of the route that matched the current location, prepared
 * with the correct context to render the remainder of the route tree. Route
 * elements in the tree must render an `<Outlet>` to render their child route's
 * element.
 *
 * @see https://reactrouter.com/hooks/use-routes
 */ function $5b1ea468d903474a$export$5d3fca4a98652595(routes, locationArg) {
    return $5b1ea468d903474a$export$5fcee62552a12fbf(routes, locationArg);
}
// Internal implementation with accept optional param for RouterProvider usage
function $5b1ea468d903474a$export$5fcee62552a12fbf(routes, locationArg, dataRouterState, future) {
    !$5b1ea468d903474a$export$9c954a9d03d32f4a() && (0, $0e856af10b3b08bf$export$3e9cee6b33872309)(false);
    let { navigator: navigator } = $d4J5n.useContext($5b1ea468d903474a$export$26749e8557646306);
    let { matches: parentMatches } = $d4J5n.useContext($5b1ea468d903474a$export$9072aa6dd1f93057);
    let routeMatch = parentMatches[parentMatches.length - 1];
    let parentParams = routeMatch ? routeMatch.params : {};
    let parentPathname = routeMatch ? routeMatch.pathname : "/";
    let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
    let parentRoute = routeMatch && routeMatch.route;
    let locationFromContext = $5b1ea468d903474a$export$45d76561a5302f2b();
    let location;
    if (locationArg) {
        var _parsedLocationArg$pa;
        let parsedLocationArg = typeof locationArg === "string" ? (0, $0e856af10b3b08bf$export$8ccf933b0513f8d0)(locationArg) : locationArg;
        !(parentPathnameBase === "/" || ((_parsedLocationArg$pa = parsedLocationArg.pathname) == null ? void 0 : _parsedLocationArg$pa.startsWith(parentPathnameBase))) && (0, $0e856af10b3b08bf$export$3e9cee6b33872309)(false);
        location = parsedLocationArg;
    } else location = locationFromContext;
    let pathname = location.pathname || "/";
    let remainingPathname = pathname;
    if (parentPathnameBase !== "/") {
        // Determine the remaining pathname by removing the # of URL segments the
        // parentPathnameBase has, instead of removing based on character count.
        // This is because we can't guarantee that incoming/outgoing encodings/
        // decodings will match exactly.
        // We decode paths before matching on a per-segment basis with
        // decodeURIComponent(), but we re-encode pathnames via `new URL()` so they
        // match what `window.location.pathname` would reflect.  Those don't 100%
        // align when it comes to encoded URI characters such as % and &.
        //
        // So we may end up with:
        //   pathname:           "/descendant/a%25b/match"
        //   parentPathnameBase: "/descendant/a%b"
        //
        // And the direct substring removal approach won't work :/
        let parentSegments = parentPathnameBase.replace(/^\//, "").split("/");
        let segments = pathname.replace(/^\//, "").split("/");
        remainingPathname = "/" + segments.slice(parentSegments.length).join("/");
    }
    let matches = (0, $0e856af10b3b08bf$export$2708184779ceb39d)(routes, {
        pathname: remainingPathname
    });
    let renderedMatches = $5b1ea468d903474a$var$_renderMatches(matches && matches.map((match)=>Object.assign({}, match, {
            params: Object.assign({}, parentParams, match.params),
            pathname: (0, $0e856af10b3b08bf$export$86d9a7913e44197e)([
                parentPathnameBase,
                // Re-encode pathnames that were decoded inside matchRoutes
                navigator.encodeLocation ? navigator.encodeLocation(match.pathname).pathname : match.pathname
            ]),
            pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : (0, $0e856af10b3b08bf$export$86d9a7913e44197e)([
                parentPathnameBase,
                // Re-encode pathnames that were decoded inside matchRoutes
                navigator.encodeLocation ? navigator.encodeLocation(match.pathnameBase).pathname : match.pathnameBase
            ])
        })), parentMatches, dataRouterState, future);
    // When a user passes in a `locationArg`, the associated routes need to
    // be wrapped in a new `LocationContext.Provider` in order for `useLocation`
    // to use the scoped location instead of the global location.
    if (locationArg && renderedMatches) return /*#__PURE__*/ $d4J5n.createElement($5b1ea468d903474a$export$c7914228fb69b0f5.Provider, {
        value: {
            location: $5b1ea468d903474a$var$_extends({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, location),
            navigationType: (0, $0e856af10b3b08bf$export$e19cd5f9376f8cee).Pop
        }
    }, renderedMatches);
    return renderedMatches;
}
function $5b1ea468d903474a$var$DefaultErrorComponent() {
    let error = $5b1ea468d903474a$export$ed527bf60f6e05f2();
    let message = (0, $0e856af10b3b08bf$export$972111febbeef05b)(error) ? error.status + " " + error.statusText : error instanceof Error ? error.message : JSON.stringify(error);
    let stack = error instanceof Error ? error.stack : null;
    let lightgrey = "rgba(200,200,200, 0.5)";
    let preStyles = {
        padding: "0.5rem",
        backgroundColor: lightgrey
    };
    let codeStyles = {
        padding: "2px 4px",
        backgroundColor: lightgrey
    };
    let devInfo = null;
    return /*#__PURE__*/ $d4J5n.createElement($d4J5n.Fragment, null, /*#__PURE__*/ $d4J5n.createElement("h2", null, "Unexpected Application Error!"), /*#__PURE__*/ $d4J5n.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, message), stack ? /*#__PURE__*/ $d4J5n.createElement("pre", {
        style: preStyles
    }, stack) : null, devInfo);
}
const $5b1ea468d903474a$var$defaultErrorElement = /*#__PURE__*/ $d4J5n.createElement($5b1ea468d903474a$var$DefaultErrorComponent, null);
class $5b1ea468d903474a$var$RenderErrorBoundary extends $d4J5n.Component {
    constructor(props){
        super(props);
        this.state = {
            location: props.location,
            revalidation: props.revalidation,
            error: props.error
        };
    }
    static getDerivedStateFromError(error) {
        return {
            error: error
        };
    }
    static getDerivedStateFromProps(props, state) {
        // When we get into an error state, the user will likely click "back" to the
        // previous page that didn't have an error. Because this wraps the entire
        // application, that will have no effect--the error page continues to display.
        // This gives us a mechanism to recover from the error when the location changes.
        //
        // Whether we're in an error state or not, we update the location in state
        // so that when we are in an error state, it gets reset when a new location
        // comes in and the user recovers from the error.
        if (state.location !== props.location || state.revalidation !== "idle" && props.revalidation === "idle") return {
            error: props.error,
            location: props.location,
            revalidation: props.revalidation
        };
        // If we're not changing locations, preserve the location but still surface
        // any new errors that may come through. We retain the existing error, we do
        // this because the error provided from the app state may be cleared without
        // the location changing.
        return {
            error: props.error !== undefined ? props.error : state.error,
            location: state.location,
            revalidation: props.revalidation || state.revalidation
        };
    }
    componentDidCatch(error, errorInfo) {
        console.error("React Router caught the following error during render", error, errorInfo);
    }
    render() {
        return this.state.error !== undefined ? /*#__PURE__*/ $d4J5n.createElement($5b1ea468d903474a$export$9072aa6dd1f93057.Provider, {
            value: this.props.routeContext
        }, /*#__PURE__*/ $d4J5n.createElement($5b1ea468d903474a$var$RouteErrorContext.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children;
    }
}
function $5b1ea468d903474a$var$RenderedRoute(_ref) {
    let { routeContext: routeContext, match: match, children: children } = _ref;
    let dataRouterContext = $d4J5n.useContext($5b1ea468d903474a$export$3add0d5dce533e2e);
    // Track how deep we got in our render pass to emulate SSR componentDidCatch
    // in a DataStaticRouter
    if (dataRouterContext && dataRouterContext.static && dataRouterContext.staticContext && (match.route.errorElement || match.route.ErrorBoundary)) dataRouterContext.staticContext._deepestRenderedBoundaryId = match.route.id;
    return /*#__PURE__*/ $d4J5n.createElement($5b1ea468d903474a$export$9072aa6dd1f93057.Provider, {
        value: routeContext
    }, children);
}
function $5b1ea468d903474a$var$_renderMatches(matches, parentMatches, dataRouterState, future) {
    var _dataRouterState2;
    if (parentMatches === void 0) parentMatches = [];
    if (dataRouterState === void 0) dataRouterState = null;
    if (future === void 0) future = null;
    if (matches == null) {
        var _dataRouterState;
        if ((_dataRouterState = dataRouterState) != null && _dataRouterState.errors) // Don't bail if we have data router errors so we can render them in the
        // boundary.  Use the pre-matched (or shimmed) matches
        matches = dataRouterState.matches;
        else return null;
    }
    let renderedMatches = matches;
    // If we have data errors, trim matches to the highest error boundary
    let errors = (_dataRouterState2 = dataRouterState) == null ? void 0 : _dataRouterState2.errors;
    if (errors != null) {
        let errorIndex = renderedMatches.findIndex((m)=>m.route.id && (errors == null ? void 0 : errors[m.route.id]));
        !(errorIndex >= 0) && (0, $0e856af10b3b08bf$export$3e9cee6b33872309)(false);
        renderedMatches = renderedMatches.slice(0, Math.min(renderedMatches.length, errorIndex + 1));
    }
    // If we're in a partial hydration mode, detect if we need to render down to
    // a given HydrateFallback while we load the rest of the hydration data
    let renderFallback = false;
    let fallbackIndex = -1;
    if (dataRouterState && future && future.v7_partialHydration) for(let i = 0; i < renderedMatches.length; i++){
        let match = renderedMatches[i];
        // Track the deepest fallback up until the first route without data
        if (match.route.HydrateFallback || match.route.hydrateFallbackElement) fallbackIndex = i;
        if (match.route.id) {
            let { loaderData: loaderData, errors: errors } = dataRouterState;
            let needsToRunLoader = match.route.loader && loaderData[match.route.id] === undefined && (!errors || errors[match.route.id] === undefined);
            if (match.route.lazy || needsToRunLoader) {
                // We found the first route that's not ready to render (waiting on
                // lazy, or has a loader that hasn't run yet).  Flag that we need to
                // render a fallback and render up until the appropriate fallback
                renderFallback = true;
                if (fallbackIndex >= 0) renderedMatches = renderedMatches.slice(0, fallbackIndex + 1);
                else renderedMatches = [
                    renderedMatches[0]
                ];
                break;
            }
        }
    }
    return renderedMatches.reduceRight((outlet, match, index)=>{
        // Only data routers handle errors/fallbacks
        let error;
        let shouldRenderHydrateFallback = false;
        let errorElement = null;
        let hydrateFallbackElement = null;
        if (dataRouterState) {
            error = errors && match.route.id ? errors[match.route.id] : undefined;
            errorElement = match.route.errorElement || $5b1ea468d903474a$var$defaultErrorElement;
            if (renderFallback) {
                if (fallbackIndex < 0 && index === 0) {
                    $5b1ea468d903474a$var$warningOnce("route-fallback", false, "No `HydrateFallback` element provided to render during initial hydration");
                    shouldRenderHydrateFallback = true;
                    hydrateFallbackElement = null;
                } else if (fallbackIndex === index) {
                    shouldRenderHydrateFallback = true;
                    hydrateFallbackElement = match.route.hydrateFallbackElement || null;
                }
            }
        }
        let matches = parentMatches.concat(renderedMatches.slice(0, index + 1));
        let getChildren = ()=>{
            let children;
            if (error) children = errorElement;
            else if (shouldRenderHydrateFallback) children = hydrateFallbackElement;
            else if (match.route.Component) // Note: This is a de-optimized path since React won't re-use the
            // ReactElement since it's identity changes with each new
            // React.createElement call.  We keep this so folks can use
            // `<Route Component={...}>` in `<Routes>` but generally `Component`
            // usage is only advised in `RouterProvider` when we can convert it to
            // `element` ahead of time.
            children = /*#__PURE__*/ $d4J5n.createElement(match.route.Component, null);
            else if (match.route.element) children = match.route.element;
            else children = outlet;
            return /*#__PURE__*/ $d4J5n.createElement($5b1ea468d903474a$var$RenderedRoute, {
                match: match,
                routeContext: {
                    outlet: outlet,
                    matches: matches,
                    isDataRoute: dataRouterState != null
                },
                children: children
            });
        };
        // Only wrap in an error boundary within data router usages when we have an
        // ErrorBoundary/errorElement on this route.  Otherwise let it bubble up to
        // an ancestor ErrorBoundary/errorElement
        return dataRouterState && (match.route.ErrorBoundary || match.route.errorElement || index === 0) ? /*#__PURE__*/ $d4J5n.createElement($5b1ea468d903474a$var$RenderErrorBoundary, {
            location: dataRouterState.location,
            revalidation: dataRouterState.revalidation,
            component: errorElement,
            error: error,
            children: getChildren(),
            routeContext: {
                outlet: null,
                matches: matches,
                isDataRoute: true
            }
        }) : getChildren();
    }, null);
}
var $5b1ea468d903474a$var$DataRouterHook = /*#__PURE__*/ function(DataRouterHook) {
    DataRouterHook["UseBlocker"] = "useBlocker";
    DataRouterHook["UseRevalidator"] = "useRevalidator";
    DataRouterHook["UseNavigateStable"] = "useNavigate";
    return DataRouterHook;
}($5b1ea468d903474a$var$DataRouterHook || {});
var $5b1ea468d903474a$var$DataRouterStateHook = /*#__PURE__*/ function(DataRouterStateHook) {
    DataRouterStateHook["UseBlocker"] = "useBlocker";
    DataRouterStateHook["UseLoaderData"] = "useLoaderData";
    DataRouterStateHook["UseActionData"] = "useActionData";
    DataRouterStateHook["UseRouteError"] = "useRouteError";
    DataRouterStateHook["UseNavigation"] = "useNavigation";
    DataRouterStateHook["UseRouteLoaderData"] = "useRouteLoaderData";
    DataRouterStateHook["UseMatches"] = "useMatches";
    DataRouterStateHook["UseRevalidator"] = "useRevalidator";
    DataRouterStateHook["UseNavigateStable"] = "useNavigate";
    DataRouterStateHook["UseRouteId"] = "useRouteId";
    return DataRouterStateHook;
}($5b1ea468d903474a$var$DataRouterStateHook || {});
function $5b1ea468d903474a$var$getDataRouterConsoleError(hookName) {
    return hookName + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}
function $5b1ea468d903474a$var$useDataRouterContext(hookName) {
    let ctx = $d4J5n.useContext($5b1ea468d903474a$export$3add0d5dce533e2e);
    !ctx && (0, $0e856af10b3b08bf$export$3e9cee6b33872309)(false);
    return ctx;
}
function $5b1ea468d903474a$var$useDataRouterState(hookName) {
    let state = $d4J5n.useContext($5b1ea468d903474a$export$145dfa71566a64dc);
    !state && (0, $0e856af10b3b08bf$export$3e9cee6b33872309)(false);
    return state;
}
function $5b1ea468d903474a$var$useRouteContext(hookName) {
    let route = $d4J5n.useContext($5b1ea468d903474a$export$9072aa6dd1f93057);
    !route && (0, $0e856af10b3b08bf$export$3e9cee6b33872309)(false);
    return route;
}
// Internal version with hookName-aware debugging
function $5b1ea468d903474a$var$useCurrentRouteId(hookName) {
    let route = $5b1ea468d903474a$var$useRouteContext(hookName);
    let thisRoute = route.matches[route.matches.length - 1];
    !thisRoute.route.id && (0, $0e856af10b3b08bf$export$3e9cee6b33872309)(false);
    return thisRoute.route.id;
}
/**
 * Returns the ID for the nearest contextual route
 */ function $5b1ea468d903474a$export$5fc8298006ad9e58() {
    return $5b1ea468d903474a$var$useCurrentRouteId($5b1ea468d903474a$var$DataRouterStateHook.UseRouteId);
}
/**
 * Returns the current navigation, defaulting to an "idle" navigation when
 * no navigation is in progress
 */ function $5b1ea468d903474a$export$d0fd4b7106de2769() {
    let state = $5b1ea468d903474a$var$useDataRouterState($5b1ea468d903474a$var$DataRouterStateHook.UseNavigation);
    return state.navigation;
}
/**
 * Returns a revalidate function for manually triggering revalidation, as well
 * as the current state of any manual revalidations
 */ function $5b1ea468d903474a$export$600dc272ed516c15() {
    let dataRouterContext = $5b1ea468d903474a$var$useDataRouterContext($5b1ea468d903474a$var$DataRouterHook.UseRevalidator);
    let state = $5b1ea468d903474a$var$useDataRouterState($5b1ea468d903474a$var$DataRouterStateHook.UseRevalidator);
    return $d4J5n.useMemo(()=>({
            revalidate: dataRouterContext.router.revalidate,
            state: state.revalidation
        }), [
        dataRouterContext.router.revalidate,
        state.revalidation
    ]);
}
/**
 * Returns the active route matches, useful for accessing loaderData for
 * parent/child routes or the route "handle" property
 */ function $5b1ea468d903474a$export$2378eb7f5ff86053() {
    let { matches: matches, loaderData: loaderData } = $5b1ea468d903474a$var$useDataRouterState($5b1ea468d903474a$var$DataRouterStateHook.UseMatches);
    return $d4J5n.useMemo(()=>matches.map((m)=>(0, $0e856af10b3b08bf$export$b3fac024fad9e8ff)(m, loaderData)), [
        matches,
        loaderData
    ]);
}
/**
 * Returns the loader data for the nearest ancestor Route loader
 */ function $5b1ea468d903474a$export$1448a5050d252c4d() {
    let state = $5b1ea468d903474a$var$useDataRouterState($5b1ea468d903474a$var$DataRouterStateHook.UseLoaderData);
    let routeId = $5b1ea468d903474a$var$useCurrentRouteId($5b1ea468d903474a$var$DataRouterStateHook.UseLoaderData);
    if (state.errors && state.errors[routeId] != null) {
        console.error("You cannot `useLoaderData` in an errorElement (routeId: " + routeId + ")");
        return undefined;
    }
    return state.loaderData[routeId];
}
/**
 * Returns the loaderData for the given routeId
 */ function $5b1ea468d903474a$export$fd5d37484eab868d(routeId) {
    let state = $5b1ea468d903474a$var$useDataRouterState($5b1ea468d903474a$var$DataRouterStateHook.UseRouteLoaderData);
    return state.loaderData[routeId];
}
/**
 * Returns the action data for the nearest ancestor Route action
 */ function $5b1ea468d903474a$export$fdc00f3f26066d5e() {
    let state = $5b1ea468d903474a$var$useDataRouterState($5b1ea468d903474a$var$DataRouterStateHook.UseActionData);
    let routeId = $5b1ea468d903474a$var$useCurrentRouteId($5b1ea468d903474a$var$DataRouterStateHook.UseLoaderData);
    return state.actionData ? state.actionData[routeId] : undefined;
}
/**
 * Returns the nearest ancestor Route error, which could be a loader/action
 * error or a render error.  This is intended to be called from your
 * ErrorBoundary/errorElement to display a proper error message.
 */ function $5b1ea468d903474a$export$ed527bf60f6e05f2() {
    var _state$errors;
    let error = $d4J5n.useContext($5b1ea468d903474a$var$RouteErrorContext);
    let state = $5b1ea468d903474a$var$useDataRouterState($5b1ea468d903474a$var$DataRouterStateHook.UseRouteError);
    let routeId = $5b1ea468d903474a$var$useCurrentRouteId($5b1ea468d903474a$var$DataRouterStateHook.UseRouteError);
    // If this was a render error, we put it in a RouteError context inside
    // of RenderErrorBoundary
    if (error !== undefined) return error;
    // Otherwise look for errors from our data router state
    return (_state$errors = state.errors) == null ? void 0 : _state$errors[routeId];
}
/**
 * Returns the happy-path data from the nearest ancestor `<Await />` value
 */ function $5b1ea468d903474a$export$78a72ddb39bdd145() {
    let value = $d4J5n.useContext($5b1ea468d903474a$var$AwaitContext);
    return value == null ? void 0 : value._data;
}
/**
 * Returns the error from the nearest ancestor `<Await />` value
 */ function $5b1ea468d903474a$export$17f53340677d5831() {
    let value = $d4J5n.useContext($5b1ea468d903474a$var$AwaitContext);
    return value == null ? void 0 : value._error;
}
let $5b1ea468d903474a$var$blockerId = 0;
/**
 * Allow the application to block navigations within the SPA and present the
 * user a confirmation dialog to confirm the navigation.  Mostly used to avoid
 * using half-filled form data.  This does not handle hard-reloads or
 * cross-origin navigations.
 */ function $5b1ea468d903474a$export$b273b3273281a049(shouldBlock) {
    let { router: router, basename: basename } = $5b1ea468d903474a$var$useDataRouterContext($5b1ea468d903474a$var$DataRouterHook.UseBlocker);
    let state = $5b1ea468d903474a$var$useDataRouterState($5b1ea468d903474a$var$DataRouterStateHook.UseBlocker);
    let [blockerKey, setBlockerKey] = $d4J5n.useState("");
    let blockerFunction = $d4J5n.useCallback((arg)=>{
        if (typeof shouldBlock !== "function") return !!shouldBlock;
        if (basename === "/") return shouldBlock(arg);
        // If they provided us a function and we've got an active basename, strip
        // it from the locations we expose to the user to match the behavior of
        // useLocation
        let { currentLocation: currentLocation, nextLocation: nextLocation, historyAction: historyAction } = arg;
        return shouldBlock({
            currentLocation: $5b1ea468d903474a$var$_extends({}, currentLocation, {
                pathname: (0, $0e856af10b3b08bf$export$b69e3301ce081aa3)(currentLocation.pathname, basename) || currentLocation.pathname
            }),
            nextLocation: $5b1ea468d903474a$var$_extends({}, nextLocation, {
                pathname: (0, $0e856af10b3b08bf$export$b69e3301ce081aa3)(nextLocation.pathname, basename) || nextLocation.pathname
            }),
            historyAction: historyAction
        });
    }, [
        basename,
        shouldBlock
    ]);
    // This effect is in charge of blocker key assignment and deletion (which is
    // tightly coupled to the key)
    $d4J5n.useEffect(()=>{
        let key = String(++$5b1ea468d903474a$var$blockerId);
        setBlockerKey(key);
        return ()=>router.deleteBlocker(key);
    }, [
        router
    ]);
    // This effect handles assigning the blockerFunction.  This is to handle
    // unstable blocker function identities, and happens only after the prior
    // effect so we don't get an orphaned blockerFunction in the router with a
    // key of "".  Until then we just have the IDLE_BLOCKER.
    $d4J5n.useEffect(()=>{
        if (blockerKey !== "") router.getBlocker(blockerKey, blockerFunction);
    }, [
        router,
        blockerKey,
        blockerFunction
    ]);
    // Prefer the blocker from `state` not `router.state` since DataRouterContext
    // is memoized so this ensures we update on blocker state updates
    return blockerKey && state.blockers.has(blockerKey) ? state.blockers.get(blockerKey) : (0, $0e856af10b3b08bf$export$386d57f03f0b2883);
}
/**
 * Stable version of useNavigate that is used when we are in the context of
 * a RouterProvider.
 */ function $5b1ea468d903474a$var$useNavigateStable() {
    let { router: router } = $5b1ea468d903474a$var$useDataRouterContext($5b1ea468d903474a$var$DataRouterHook.UseNavigateStable);
    let id = $5b1ea468d903474a$var$useCurrentRouteId($5b1ea468d903474a$var$DataRouterStateHook.UseNavigateStable);
    let activeRef = $d4J5n.useRef(false);
    $5b1ea468d903474a$var$useIsomorphicLayoutEffect(()=>{
        activeRef.current = true;
    });
    let navigate = $d4J5n.useCallback(function(to, options) {
        if (options === void 0) options = {};
        // Short circuit here since if this happens on first render the navigate
        // is useless because we haven't wired up our router subscriber yet
        if (!activeRef.current) return;
        if (typeof to === "number") router.navigate(to);
        else router.navigate(to, $5b1ea468d903474a$var$_extends({
            fromRouteId: id
        }, options));
    }, [
        router,
        id
    ]);
    return navigate;
}
const $5b1ea468d903474a$var$alreadyWarned = {};
function $5b1ea468d903474a$var$warningOnce(key, cond, message) {
    if (!cond && !$5b1ea468d903474a$var$alreadyWarned[key]) $5b1ea468d903474a$var$alreadyWarned[key] = true;
}
/**
  Webpack + React 17 fails to compile on any of the following because webpack
  complains that `startTransition` doesn't exist in `React`:
  * import { startTransition } from "react"
  * import * as React from from "react";
    "startTransition" in React ? React.startTransition(() => setState()) : setState()
  * import * as React from from "react";
    "startTransition" in React ? React["startTransition"](() => setState()) : setState()

  Moving it to a constant such as the following solves the Webpack/React 17 issue:
  * import * as React from from "react";
    const START_TRANSITION = "startTransition";
    START_TRANSITION in React ? React[START_TRANSITION](() => setState()) : setState()

  However, that introduces webpack/terser minification issues in production builds
  in React 18 where minification/obfuscation ends up removing the call of
  React.startTransition entirely from the first half of the ternary.  Grabbing
  this exported reference once up front resolves that issue.

  See https://github.com/remix-run/react-router/issues/10579
*/ const $5b1ea468d903474a$var$START_TRANSITION = "startTransition";
const $5b1ea468d903474a$var$startTransitionImpl = $d4J5n[$5b1ea468d903474a$var$START_TRANSITION];
/**
 * Given a Remix Router instance, render the appropriate UI
 */ function $5b1ea468d903474a$export$323e4fc2fa4753fb(_ref) {
    let { fallbackElement: fallbackElement, router: router, future: future } = _ref;
    let [state, setStateImpl] = $d4J5n.useState(router.state);
    let { v7_startTransition: v7_startTransition } = future || {};
    let setState = $d4J5n.useCallback((newState)=>{
        if (v7_startTransition && $5b1ea468d903474a$var$startTransitionImpl) $5b1ea468d903474a$var$startTransitionImpl(()=>setStateImpl(newState));
        else setStateImpl(newState);
    }, [
        setStateImpl,
        v7_startTransition
    ]);
    // Need to use a layout effect here so we are subscribed early enough to
    // pick up on any render-driven redirects/navigations (useEffect/<Navigate>)
    $d4J5n.useLayoutEffect(()=>router.subscribe(setState), [
        router,
        setState
    ]);
    $d4J5n.useEffect(()=>{
    // Only log this once on initial mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    let navigator = $d4J5n.useMemo(()=>{
        return {
            createHref: router.createHref,
            encodeLocation: router.encodeLocation,
            go: (n)=>router.navigate(n),
            push: (to, state, opts)=>router.navigate(to, {
                    state: state,
                    preventScrollReset: opts == null ? void 0 : opts.preventScrollReset
                }),
            replace: (to, state, opts)=>router.navigate(to, {
                    replace: true,
                    state: state,
                    preventScrollReset: opts == null ? void 0 : opts.preventScrollReset
                })
        };
    }, [
        router
    ]);
    let basename = router.basename || "/";
    let dataRouterContext = $d4J5n.useMemo(()=>({
            router: router,
            navigator: navigator,
            static: false,
            basename: basename
        }), [
        router,
        navigator,
        basename
    ]);
    // The fragment and {null} here are important!  We need them to keep React 18's
    // useId happy when we are server-rendering since we may have a <script> here
    // containing the hydrated server-side staticContext (from StaticRouterProvider).
    // useId relies on the component tree structure to generate deterministic id's
    // so we need to ensure it remains the same on the client even though
    // we don't need the <script> tag
    return /*#__PURE__*/ $d4J5n.createElement($d4J5n.Fragment, null, /*#__PURE__*/ $d4J5n.createElement($5b1ea468d903474a$export$3add0d5dce533e2e.Provider, {
        value: dataRouterContext
    }, /*#__PURE__*/ $d4J5n.createElement($5b1ea468d903474a$export$145dfa71566a64dc.Provider, {
        value: state
    }, /*#__PURE__*/ $d4J5n.createElement($5b1ea468d903474a$export$55185c17a0fcbe46, {
        basename: basename,
        location: state.location,
        navigationType: state.historyAction,
        navigator: navigator,
        future: {
            v7_relativeSplatPath: router.future.v7_relativeSplatPath
        }
    }, state.initialized || router.future.v7_partialHydration ? /*#__PURE__*/ $d4J5n.createElement($5b1ea468d903474a$var$DataRoutes, {
        routes: router.routes,
        future: router.future,
        state: state
    }) : fallbackElement))), null);
}
function $5b1ea468d903474a$var$DataRoutes(_ref2) {
    let { routes: routes, future: future, state: state } = _ref2;
    return $5b1ea468d903474a$export$5fcee62552a12fbf(routes, undefined, state, future);
}
/**
 * A `<Router>` that stores all entries in memory.
 *
 * @see https://reactrouter.com/router-components/memory-router
 */ function $5b1ea468d903474a$export$ae46f04cfaffe093(_ref3) {
    let { basename: basename, children: children, initialEntries: initialEntries, initialIndex: initialIndex, future: future } = _ref3;
    let historyRef = $d4J5n.useRef();
    if (historyRef.current == null) historyRef.current = (0, $0e856af10b3b08bf$export$2b76ad033c6e6d08)({
        initialEntries: initialEntries,
        initialIndex: initialIndex,
        v5Compat: true
    });
    let history = historyRef.current;
    let [state, setStateImpl] = $d4J5n.useState({
        action: history.action,
        location: history.location
    });
    let { v7_startTransition: v7_startTransition } = future || {};
    let setState = $d4J5n.useCallback((newState)=>{
        v7_startTransition && $5b1ea468d903474a$var$startTransitionImpl ? $5b1ea468d903474a$var$startTransitionImpl(()=>setStateImpl(newState)) : setStateImpl(newState);
    }, [
        setStateImpl,
        v7_startTransition
    ]);
    $d4J5n.useLayoutEffect(()=>history.listen(setState), [
        history,
        setState
    ]);
    return /*#__PURE__*/ $d4J5n.createElement($5b1ea468d903474a$export$55185c17a0fcbe46, {
        basename: basename,
        children: children,
        location: state.location,
        navigationType: state.action,
        navigator: history,
        future: future
    });
}
/**
 * Changes the current location.
 *
 * Note: This API is mostly useful in React.Component subclasses that are not
 * able to use hooks. In functional components, we recommend you use the
 * `useNavigate` hook instead.
 *
 * @see https://reactrouter.com/components/navigate
 */ function $5b1ea468d903474a$export$444b3ab0cb9aec40(_ref4) {
    let { to: to, replace: replace, state: state, relative: relative } = _ref4;
    !$5b1ea468d903474a$export$9c954a9d03d32f4a() && (0, $0e856af10b3b08bf$export$3e9cee6b33872309)(false);
    let { future: future, static: isStatic } = $d4J5n.useContext($5b1ea468d903474a$export$26749e8557646306);
    let { matches: matches } = $d4J5n.useContext($5b1ea468d903474a$export$9072aa6dd1f93057);
    let { pathname: locationPathname } = $5b1ea468d903474a$export$45d76561a5302f2b();
    let navigate = $5b1ea468d903474a$export$9770f232ac06a008();
    // Resolve the path outside of the effect so that when effects run twice in
    // StrictMode they navigate to the same place
    let path = (0, $0e856af10b3b08bf$export$cae722b0cc860f13)(to, (0, $0e856af10b3b08bf$export$a5784978eca585fa)(matches, future.v7_relativeSplatPath), locationPathname, relative === "path");
    let jsonPath = JSON.stringify(path);
    $d4J5n.useEffect(()=>navigate(JSON.parse(jsonPath), {
            replace: replace,
            state: state,
            relative: relative
        }), [
        navigate,
        jsonPath,
        relative,
        replace,
        state
    ]);
    return null;
}
/**
 * Renders the child route's element, if there is one.
 *
 * @see https://reactrouter.com/components/outlet
 */ function $5b1ea468d903474a$export$910ae8079b2c2852(props) {
    return $5b1ea468d903474a$export$a3be3530d8e40d0b(props.context);
}
/**
 * Declares an element that should be rendered at a certain URL path.
 *
 * @see https://reactrouter.com/components/route
 */ function $5b1ea468d903474a$export$e7b0ac011bb776c6(_props) {
    (0, $0e856af10b3b08bf$export$3e9cee6b33872309)(false);
}
/**
 * Provides location context for the rest of the app.
 *
 * Note: You usually won't render a `<Router>` directly. Instead, you'll render a
 * router that is more specific to your environment such as a `<BrowserRouter>`
 * in web browsers or a `<StaticRouter>` for server rendering.
 *
 * @see https://reactrouter.com/router-components/router
 */ function $5b1ea468d903474a$export$55185c17a0fcbe46(_ref5) {
    let { basename: basenameProp = "/", children: children = null, location: locationProp, navigationType: navigationType = (0, $0e856af10b3b08bf$export$e19cd5f9376f8cee).Pop, navigator: navigator, static: staticProp = false, future: future } = _ref5;
    !!$5b1ea468d903474a$export$9c954a9d03d32f4a() && (0, $0e856af10b3b08bf$export$3e9cee6b33872309)(false);
    // Preserve trailing slashes on basename, so we can let the user control
    // the enforcement of trailing slashes throughout the app
    let basename = basenameProp.replace(/^\/*/, "/");
    let navigationContext = $d4J5n.useMemo(()=>({
            basename: basename,
            navigator: navigator,
            static: staticProp,
            future: $5b1ea468d903474a$var$_extends({
                v7_relativeSplatPath: false
            }, future)
        }), [
        basename,
        future,
        navigator,
        staticProp
    ]);
    if (typeof locationProp === "string") locationProp = (0, $0e856af10b3b08bf$export$8ccf933b0513f8d0)(locationProp);
    let { pathname: pathname = "/", search: search = "", hash: hash = "", state: state = null, key: key = "default" } = locationProp;
    let locationContext = $d4J5n.useMemo(()=>{
        let trailingPathname = (0, $0e856af10b3b08bf$export$b69e3301ce081aa3)(pathname, basename);
        if (trailingPathname == null) return null;
        return {
            location: {
                pathname: trailingPathname,
                search: search,
                hash: hash,
                state: state,
                key: key
            },
            navigationType: navigationType
        };
    }, [
        basename,
        pathname,
        search,
        hash,
        state,
        key,
        navigationType
    ]);
    if (locationContext == null) return null;
    return /*#__PURE__*/ $d4J5n.createElement($5b1ea468d903474a$export$26749e8557646306.Provider, {
        value: navigationContext
    }, /*#__PURE__*/ $d4J5n.createElement($5b1ea468d903474a$export$c7914228fb69b0f5.Provider, {
        children: children,
        value: locationContext
    }));
}
/**
 * A container for a nested tree of `<Route>` elements that renders the branch
 * that best matches the current location.
 *
 * @see https://reactrouter.com/components/routes
 */ function $5b1ea468d903474a$export$3565eb3d00ca5a74(_ref6) {
    let { children: children, location: location } = _ref6;
    return $5b1ea468d903474a$export$5d3fca4a98652595($5b1ea468d903474a$export$16da398f5434bdec(children), location);
}
/**
 * Component to use for rendering lazily loaded data from returning defer()
 * in a loader function
 */ function $5b1ea468d903474a$export$6ddabde395c8c576(_ref7) {
    let { children: children, errorElement: errorElement, resolve: resolve } = _ref7;
    return /*#__PURE__*/ $d4J5n.createElement($5b1ea468d903474a$var$AwaitErrorBoundary, {
        resolve: resolve,
        errorElement: errorElement
    }, /*#__PURE__*/ $d4J5n.createElement($5b1ea468d903474a$var$ResolveAwait, null, children));
}
var $5b1ea468d903474a$var$AwaitRenderStatus = /*#__PURE__*/ function(AwaitRenderStatus) {
    AwaitRenderStatus[AwaitRenderStatus["pending"] = 0] = "pending";
    AwaitRenderStatus[AwaitRenderStatus["success"] = 1] = "success";
    AwaitRenderStatus[AwaitRenderStatus["error"] = 2] = "error";
    return AwaitRenderStatus;
}($5b1ea468d903474a$var$AwaitRenderStatus || {});
const $5b1ea468d903474a$var$neverSettledPromise = new Promise(()=>{});
class $5b1ea468d903474a$var$AwaitErrorBoundary extends $d4J5n.Component {
    constructor(props){
        super(props);
        this.state = {
            error: null
        };
    }
    static getDerivedStateFromError(error) {
        return {
            error: error
        };
    }
    componentDidCatch(error, errorInfo) {
        console.error("<Await> caught the following error during render", error, errorInfo);
    }
    render() {
        let { children: children, errorElement: errorElement, resolve: resolve } = this.props;
        let promise = null;
        let status = $5b1ea468d903474a$var$AwaitRenderStatus.pending;
        if (!(resolve instanceof Promise)) {
            // Didn't get a promise - provide as a resolved promise
            status = $5b1ea468d903474a$var$AwaitRenderStatus.success;
            promise = Promise.resolve();
            Object.defineProperty(promise, "_tracked", {
                get: ()=>true
            });
            Object.defineProperty(promise, "_data", {
                get: ()=>resolve
            });
        } else if (this.state.error) {
            // Caught a render error, provide it as a rejected promise
            status = $5b1ea468d903474a$var$AwaitRenderStatus.error;
            let renderError = this.state.error;
            promise = Promise.reject().catch(()=>{}); // Avoid unhandled rejection warnings
            Object.defineProperty(promise, "_tracked", {
                get: ()=>true
            });
            Object.defineProperty(promise, "_error", {
                get: ()=>renderError
            });
        } else if (resolve._tracked) {
            // Already tracked promise - check contents
            promise = resolve;
            status = promise._error !== undefined ? $5b1ea468d903474a$var$AwaitRenderStatus.error : promise._data !== undefined ? $5b1ea468d903474a$var$AwaitRenderStatus.success : $5b1ea468d903474a$var$AwaitRenderStatus.pending;
        } else {
            // Raw (untracked) promise - track it
            status = $5b1ea468d903474a$var$AwaitRenderStatus.pending;
            Object.defineProperty(resolve, "_tracked", {
                get: ()=>true
            });
            promise = resolve.then((data)=>Object.defineProperty(resolve, "_data", {
                    get: ()=>data
                }), (error)=>Object.defineProperty(resolve, "_error", {
                    get: ()=>error
                }));
        }
        if (status === $5b1ea468d903474a$var$AwaitRenderStatus.error && promise._error instanceof (0, $0e856af10b3b08bf$export$42a99a7a4bc0e76a)) // Freeze the UI by throwing a never resolved promise
        throw $5b1ea468d903474a$var$neverSettledPromise;
        if (status === $5b1ea468d903474a$var$AwaitRenderStatus.error && !errorElement) // No errorElement, throw to the nearest route-level error boundary
        throw promise._error;
        if (status === $5b1ea468d903474a$var$AwaitRenderStatus.error) // Render via our errorElement
        return /*#__PURE__*/ $d4J5n.createElement($5b1ea468d903474a$var$AwaitContext.Provider, {
            value: promise,
            children: errorElement
        });
        if (status === $5b1ea468d903474a$var$AwaitRenderStatus.success) // Render children with resolved value
        return /*#__PURE__*/ $d4J5n.createElement($5b1ea468d903474a$var$AwaitContext.Provider, {
            value: promise,
            children: children
        });
        // Throw to the suspense boundary
        throw promise;
    }
}
/**
 * @private
 * Indirection to leverage useAsyncValue for a render-prop API on `<Await>`
 */ function $5b1ea468d903474a$var$ResolveAwait(_ref8) {
    let { children: children } = _ref8;
    let data = $5b1ea468d903474a$export$78a72ddb39bdd145();
    let toRender = typeof children === "function" ? children(data) : children;
    return /*#__PURE__*/ $d4J5n.createElement($d4J5n.Fragment, null, toRender);
}
///////////////////////////////////////////////////////////////////////////////
// UTILS
///////////////////////////////////////////////////////////////////////////////
/**
 * Creates a route config from a React "children" object, which is usually
 * either a `<Route>` element or an array of them. Used internally by
 * `<Routes>` to create a route config from its children.
 *
 * @see https://reactrouter.com/utils/create-routes-from-children
 */ function $5b1ea468d903474a$export$16da398f5434bdec(children, parentPath) {
    if (parentPath === void 0) parentPath = [];
    let routes = [];
    $d4J5n.Children.forEach(children, (element, index)=>{
        if (!/*#__PURE__*/ $d4J5n.isValidElement(element)) // Ignore non-elements. This allows people to more easily inline
        // conditionals in their route config.
        return;
        let treePath = [
            ...parentPath,
            index
        ];
        if (element.type === $d4J5n.Fragment) {
            // Transparently support React.Fragment and its children.
            routes.push.apply(routes, $5b1ea468d903474a$export$16da398f5434bdec(element.props.children, treePath));
            return;
        }
        !(element.type === $5b1ea468d903474a$export$e7b0ac011bb776c6) && (0, $0e856af10b3b08bf$export$3e9cee6b33872309)(false);
        !(!element.props.index || !element.props.children) && (0, $0e856af10b3b08bf$export$3e9cee6b33872309)(false);
        let route = {
            id: element.props.id || treePath.join("-"),
            caseSensitive: element.props.caseSensitive,
            element: element.props.element,
            Component: element.props.Component,
            index: element.props.index,
            path: element.props.path,
            loader: element.props.loader,
            action: element.props.action,
            errorElement: element.props.errorElement,
            ErrorBoundary: element.props.ErrorBoundary,
            hasErrorBoundary: element.props.ErrorBoundary != null || element.props.errorElement != null,
            shouldRevalidate: element.props.shouldRevalidate,
            handle: element.props.handle,
            lazy: element.props.lazy
        };
        if (element.props.children) route.children = $5b1ea468d903474a$export$16da398f5434bdec(element.props.children, treePath);
        routes.push(route);
    });
    return routes;
}
/**
 * Renders the result of `matchRoutes()` into a React element.
 */ function $5b1ea468d903474a$export$daf73786167a7f72(matches) {
    return $5b1ea468d903474a$var$_renderMatches(matches);
}
function $5b1ea468d903474a$export$52b333d321859367(route) {
    let updates = {
        // Note: this check also occurs in createRoutesFromChildren so update
        // there if you change this -- please and thank you!
        hasErrorBoundary: route.ErrorBoundary != null || route.errorElement != null
    };
    if (route.Component) Object.assign(updates, {
        element: /*#__PURE__*/ $d4J5n.createElement(route.Component),
        Component: undefined
    });
    if (route.HydrateFallback) Object.assign(updates, {
        hydrateFallbackElement: /*#__PURE__*/ $d4J5n.createElement(route.HydrateFallback),
        HydrateFallback: undefined
    });
    if (route.ErrorBoundary) Object.assign(updates, {
        errorElement: /*#__PURE__*/ $d4J5n.createElement(route.ErrorBoundary),
        ErrorBoundary: undefined
    });
    return updates;
}
function $5b1ea468d903474a$export$f30f7e456d254e83(routes, opts) {
    return (0, $0e856af10b3b08bf$export$baddd0131ee8c05b)({
        basename: opts == null ? void 0 : opts.basename,
        future: $5b1ea468d903474a$var$_extends({}, opts == null ? void 0 : opts.future, {
            v7_prependBasename: true
        }),
        history: (0, $0e856af10b3b08bf$export$2b76ad033c6e6d08)({
            initialEntries: opts == null ? void 0 : opts.initialEntries,
            initialIndex: opts == null ? void 0 : opts.initialIndex
        }),
        hydrationData: opts == null ? void 0 : opts.hydrationData,
        routes: routes,
        mapRouteProperties: $5b1ea468d903474a$export$52b333d321859367
    }).initialize();
}



function $7b9bbaa53cb01344$var$_extends() {
    $7b9bbaa53cb01344$var$_extends = Object.assign ? Object.assign.bind() : function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return $7b9bbaa53cb01344$var$_extends.apply(this, arguments);
}
function $7b9bbaa53cb01344$var$_objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
const $7b9bbaa53cb01344$var$defaultMethod = "get";
const $7b9bbaa53cb01344$var$defaultEncType = "application/x-www-form-urlencoded";
function $7b9bbaa53cb01344$var$isHtmlElement(object) {
    return object != null && typeof object.tagName === "string";
}
function $7b9bbaa53cb01344$var$isButtonElement(object) {
    return $7b9bbaa53cb01344$var$isHtmlElement(object) && object.tagName.toLowerCase() === "button";
}
function $7b9bbaa53cb01344$var$isFormElement(object) {
    return $7b9bbaa53cb01344$var$isHtmlElement(object) && object.tagName.toLowerCase() === "form";
}
function $7b9bbaa53cb01344$var$isInputElement(object) {
    return $7b9bbaa53cb01344$var$isHtmlElement(object) && object.tagName.toLowerCase() === "input";
}
function $7b9bbaa53cb01344$var$isModifiedEvent(event) {
    return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
function $7b9bbaa53cb01344$var$shouldProcessLinkClick(event, target) {
    return event.button === 0 && // Ignore everything but left clicks
    (!target || target === "_self") && // Let browser handle "target=_blank" etc.
    !$7b9bbaa53cb01344$var$isModifiedEvent(event) // Ignore clicks with modifier keys
    ;
}
/**
 * Creates a URLSearchParams object using the given initializer.
 *
 * This is identical to `new URLSearchParams(init)` except it also
 * supports arrays as values in the object form of the initializer
 * instead of just strings. This is convenient when you need multiple
 * values for a given key, but don't want to use an array initializer.
 *
 * For example, instead of:
 *
 *   let searchParams = new URLSearchParams([
 *     ['sort', 'name'],
 *     ['sort', 'price']
 *   ]);
 *
 * you can do:
 *
 *   let searchParams = createSearchParams({
 *     sort: ['name', 'price']
 *   });
 */ function $7b9bbaa53cb01344$export$a2e4e2dcc7b1f22f(init) {
    if (init === void 0) init = "";
    return new URLSearchParams(typeof init === "string" || Array.isArray(init) || init instanceof URLSearchParams ? init : Object.keys(init).reduce((memo, key)=>{
        let value = init[key];
        return memo.concat(Array.isArray(value) ? value.map((v)=>[
                key,
                v
            ]) : [
            [
                key,
                value
            ]
        ]);
    }, []));
}
function $7b9bbaa53cb01344$var$getSearchParamsForLocation(locationSearch, defaultSearchParams) {
    let searchParams = $7b9bbaa53cb01344$export$a2e4e2dcc7b1f22f(locationSearch);
    if (defaultSearchParams) // Use `defaultSearchParams.forEach(...)` here instead of iterating of
    // `defaultSearchParams.keys()` to work-around a bug in Firefox related to
    // web extensions. Relevant Bugzilla tickets:
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1414602
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1023984
    defaultSearchParams.forEach((_, key)=>{
        if (!searchParams.has(key)) defaultSearchParams.getAll(key).forEach((value)=>{
            searchParams.append(key, value);
        });
    });
    return searchParams;
}
// One-time check for submitter support
let $7b9bbaa53cb01344$var$_formDataSupportsSubmitter = null;
function $7b9bbaa53cb01344$var$isFormDataSubmitterSupported() {
    if ($7b9bbaa53cb01344$var$_formDataSupportsSubmitter === null) try {
        new FormData(document.createElement("form"), // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0);
        $7b9bbaa53cb01344$var$_formDataSupportsSubmitter = false;
    } catch (e) {
        $7b9bbaa53cb01344$var$_formDataSupportsSubmitter = true;
    }
    return $7b9bbaa53cb01344$var$_formDataSupportsSubmitter;
}
const $7b9bbaa53cb01344$var$supportedFormEncTypes = new Set([
    "application/x-www-form-urlencoded",
    "multipart/form-data",
    "text/plain"
]);
function $7b9bbaa53cb01344$var$getFormEncType(encType) {
    if (encType != null && !$7b9bbaa53cb01344$var$supportedFormEncTypes.has(encType)) return null;
    return encType;
}
function $7b9bbaa53cb01344$var$getFormSubmissionInfo(target, basename) {
    let method;
    let action;
    let encType;
    let formData;
    let body;
    if ($7b9bbaa53cb01344$var$isFormElement(target)) {
        // When grabbing the action from the element, it will have had the basename
        // prefixed to ensure non-JS scenarios work, so strip it since we'll
        // re-prefix in the router
        let attr = target.getAttribute("action");
        action = attr ? (0, $0e856af10b3b08bf$export$b69e3301ce081aa3)(attr, basename) : null;
        method = target.getAttribute("method") || $7b9bbaa53cb01344$var$defaultMethod;
        encType = $7b9bbaa53cb01344$var$getFormEncType(target.getAttribute("enctype")) || $7b9bbaa53cb01344$var$defaultEncType;
        formData = new FormData(target);
    } else if ($7b9bbaa53cb01344$var$isButtonElement(target) || $7b9bbaa53cb01344$var$isInputElement(target) && (target.type === "submit" || target.type === "image")) {
        let form = target.form;
        if (form == null) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
        // <button>/<input type="submit"> may override attributes of <form>
        // When grabbing the action from the element, it will have had the basename
        // prefixed to ensure non-JS scenarios work, so strip it since we'll
        // re-prefix in the router
        let attr = target.getAttribute("formaction") || form.getAttribute("action");
        action = attr ? (0, $0e856af10b3b08bf$export$b69e3301ce081aa3)(attr, basename) : null;
        method = target.getAttribute("formmethod") || form.getAttribute("method") || $7b9bbaa53cb01344$var$defaultMethod;
        encType = $7b9bbaa53cb01344$var$getFormEncType(target.getAttribute("formenctype")) || $7b9bbaa53cb01344$var$getFormEncType(form.getAttribute("enctype")) || $7b9bbaa53cb01344$var$defaultEncType;
        // Build a FormData object populated from a form and submitter
        formData = new FormData(form, target);
        // If this browser doesn't support the `FormData(el, submitter)` format,
        // then tack on the submitter value at the end.  This is a lightweight
        // solution that is not 100% spec compliant.  For complete support in older
        // browsers, consider using the `formdata-submitter-polyfill` package
        if (!$7b9bbaa53cb01344$var$isFormDataSubmitterSupported()) {
            let { name: name, type: type, value: value } = target;
            if (type === "image") {
                let prefix = name ? name + "." : "";
                formData.append(prefix + "x", "0");
                formData.append(prefix + "y", "0");
            } else if (name) formData.append(name, value);
        }
    } else if ($7b9bbaa53cb01344$var$isHtmlElement(target)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
    else {
        method = $7b9bbaa53cb01344$var$defaultMethod;
        action = null;
        encType = $7b9bbaa53cb01344$var$defaultEncType;
        body = target;
    }
    // Send body for <Form encType="text/plain" so we encode it into text
    if (formData && encType === "text/plain") {
        body = formData;
        formData = undefined;
    }
    return {
        action: action,
        method: method.toLowerCase(),
        encType: encType,
        formData: formData,
        body: body
    };
}
const $7b9bbaa53cb01344$var$_excluded = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition"
], $7b9bbaa53cb01344$var$_excluded2 = [
    "aria-current",
    "caseSensitive",
    "className",
    "end",
    "style",
    "to",
    "unstable_viewTransition",
    "children"
], $7b9bbaa53cb01344$var$_excluded3 = [
    "fetcherKey",
    "navigate",
    "reloadDocument",
    "replace",
    "state",
    "method",
    "action",
    "onSubmit",
    "relative",
    "preventScrollReset",
    "unstable_viewTransition"
];
// HEY YOU! DON'T TOUCH THIS VARIABLE!
//
// It is replaced with the proper version at build time via a babel plugin in
// the rollup config.
//
// Export a global property onto the window for React Router detection by the
// Core Web Vitals Technology Report.  This way they can configure the `wappalyzer`
// to detect and properly classify live websites as being built with React Router:
// https://github.com/HTTPArchive/wappalyzer/blob/main/src/technologies/r.json
const $7b9bbaa53cb01344$var$REACT_ROUTER_VERSION = "6";
try {
    window.__reactRouterVersion = $7b9bbaa53cb01344$var$REACT_ROUTER_VERSION;
} catch (e) {
// no-op
}
function $7b9bbaa53cb01344$export$1f3f55432a00e06d(routes, opts) {
    return (0, $0e856af10b3b08bf$export$baddd0131ee8c05b)({
        basename: opts == null ? void 0 : opts.basename,
        future: $7b9bbaa53cb01344$var$_extends({}, opts == null ? void 0 : opts.future, {
            v7_prependBasename: true
        }),
        history: (0, $0e856af10b3b08bf$export$719fc203c4e16dee)({
            window: opts == null ? void 0 : opts.window
        }),
        hydrationData: (opts == null ? void 0 : opts.hydrationData) || $7b9bbaa53cb01344$var$parseHydrationData(),
        routes: routes,
        mapRouteProperties: (0, $5b1ea468d903474a$export$52b333d321859367),
        window: opts == null ? void 0 : opts.window
    }).initialize();
}
function $7b9bbaa53cb01344$export$1ba7ed8a3a7b3765(routes, opts) {
    return (0, $0e856af10b3b08bf$export$baddd0131ee8c05b)({
        basename: opts == null ? void 0 : opts.basename,
        future: $7b9bbaa53cb01344$var$_extends({}, opts == null ? void 0 : opts.future, {
            v7_prependBasename: true
        }),
        history: (0, $0e856af10b3b08bf$export$b71fdd3798280242)({
            window: opts == null ? void 0 : opts.window
        }),
        hydrationData: (opts == null ? void 0 : opts.hydrationData) || $7b9bbaa53cb01344$var$parseHydrationData(),
        routes: routes,
        mapRouteProperties: (0, $5b1ea468d903474a$export$52b333d321859367),
        window: opts == null ? void 0 : opts.window
    }).initialize();
}
function $7b9bbaa53cb01344$var$parseHydrationData() {
    var _window;
    let state = (_window = window) == null ? void 0 : _window.__staticRouterHydrationData;
    if (state && state.errors) state = $7b9bbaa53cb01344$var$_extends({}, state, {
        errors: $7b9bbaa53cb01344$var$deserializeErrors(state.errors)
    });
    return state;
}
function $7b9bbaa53cb01344$var$deserializeErrors(errors) {
    if (!errors) return null;
    let entries = Object.entries(errors);
    let serialized = {};
    for (let [key, val] of entries){
        // Hey you!  If you change this, please change the corresponding logic in
        // serializeErrors in react-router-dom/server.tsx :)
        if (val && val.__type === "RouteErrorResponse") serialized[key] = new (0, $0e856af10b3b08bf$export$6c6580e81da25755)(val.status, val.statusText, val.data, val.internal === true);
        else if (val && val.__type === "Error") {
            // Attempt to reconstruct the right type of Error (i.e., ReferenceError)
            if (val.__subType) {
                let ErrorConstructor = window[val.__subType];
                if (typeof ErrorConstructor === "function") try {
                    // @ts-expect-error
                    let error = new ErrorConstructor(val.message);
                    // Wipe away the client-side stack trace.  Nothing to fill it in with
                    // because we don't serialize SSR stack traces for security reasons
                    error.stack = "";
                    serialized[key] = error;
                } catch (e) {
                // no-op - fall through and create a normal Error
                }
            }
            if (serialized[key] == null) {
                let error = new Error(val.message);
                // Wipe away the client-side stack trace.  Nothing to fill it in with
                // because we don't serialize SSR stack traces for security reasons
                error.stack = "";
                serialized[key] = error;
            }
        } else serialized[key] = val;
    }
    return serialized;
}
const $7b9bbaa53cb01344$export$7ad602f0e94e62d1 = /*#__PURE__*/ $d4J5n.createContext({
    isTransitioning: false
});
const $7b9bbaa53cb01344$export$148fd98d095596d4 = /*#__PURE__*/ $d4J5n.createContext(new Map());
//#endregion
////////////////////////////////////////////////////////////////////////////////
//#region Components
////////////////////////////////////////////////////////////////////////////////
/**
  Webpack + React 17 fails to compile on any of the following because webpack
  complains that `startTransition` doesn't exist in `React`:
  * import { startTransition } from "react"
  * import * as React from from "react";
    "startTransition" in React ? React.startTransition(() => setState()) : setState()
  * import * as React from from "react";
    "startTransition" in React ? React["startTransition"](() => setState()) : setState()

  Moving it to a constant such as the following solves the Webpack/React 17 issue:
  * import * as React from from "react";
    const START_TRANSITION = "startTransition";
    START_TRANSITION in React ? React[START_TRANSITION](() => setState()) : setState()

  However, that introduces webpack/terser minification issues in production builds
  in React 18 where minification/obfuscation ends up removing the call of
  React.startTransition entirely from the first half of the ternary.  Grabbing
  this exported reference once up front resolves that issue.

  See https://github.com/remix-run/react-router/issues/10579
*/ const $7b9bbaa53cb01344$var$START_TRANSITION = "startTransition";
const $7b9bbaa53cb01344$var$startTransitionImpl = $d4J5n[$7b9bbaa53cb01344$var$START_TRANSITION];
const $7b9bbaa53cb01344$var$FLUSH_SYNC = "flushSync";
const $7b9bbaa53cb01344$var$flushSyncImpl = $4723f549251dd88b$exports[$7b9bbaa53cb01344$var$FLUSH_SYNC];
const $7b9bbaa53cb01344$var$USE_ID = "useId";
const $7b9bbaa53cb01344$var$useIdImpl = $d4J5n[$7b9bbaa53cb01344$var$USE_ID];
function $7b9bbaa53cb01344$var$startTransitionSafe(cb) {
    if ($7b9bbaa53cb01344$var$startTransitionImpl) $7b9bbaa53cb01344$var$startTransitionImpl(cb);
    else cb();
}
function $7b9bbaa53cb01344$var$flushSyncSafe(cb) {
    if ($7b9bbaa53cb01344$var$flushSyncImpl) $7b9bbaa53cb01344$var$flushSyncImpl(cb);
    else cb();
}
class $7b9bbaa53cb01344$var$Deferred {
    constructor(){
        this.status = "pending";
        this.promise = new Promise((resolve, reject)=>{
            this.resolve = (value)=>{
                if (this.status === "pending") {
                    this.status = "resolved";
                    resolve(value);
                }
            };
            this.reject = (reason)=>{
                if (this.status === "pending") {
                    this.status = "rejected";
                    reject(reason);
                }
            };
        });
    }
}
/**
 * Given a Remix Router instance, render the appropriate UI
 */ function $7b9bbaa53cb01344$export$323e4fc2fa4753fb(_ref) {
    let { fallbackElement: fallbackElement, router: router, future: future } = _ref;
    let [state, setStateImpl] = $d4J5n.useState(router.state);
    let [pendingState, setPendingState] = $d4J5n.useState();
    let [vtContext, setVtContext] = $d4J5n.useState({
        isTransitioning: false
    });
    let [renderDfd, setRenderDfd] = $d4J5n.useState();
    let [transition, setTransition] = $d4J5n.useState();
    let [interruption, setInterruption] = $d4J5n.useState();
    let fetcherData = $d4J5n.useRef(new Map());
    let { v7_startTransition: v7_startTransition } = future || {};
    let optInStartTransition = $d4J5n.useCallback((cb)=>{
        if (v7_startTransition) $7b9bbaa53cb01344$var$startTransitionSafe(cb);
        else cb();
    }, [
        v7_startTransition
    ]);
    let setState = $d4J5n.useCallback((newState, _ref2)=>{
        let { deletedFetchers: deletedFetchers, unstable_flushSync: flushSync, unstable_viewTransitionOpts: viewTransitionOpts } = _ref2;
        deletedFetchers.forEach((key)=>fetcherData.current.delete(key));
        newState.fetchers.forEach((fetcher, key)=>{
            if (fetcher.data !== undefined) fetcherData.current.set(key, fetcher.data);
        });
        let isViewTransitionUnavailable = router.window == null || typeof router.window.document.startViewTransition !== "function";
        // If this isn't a view transition or it's not available in this browser,
        // just update and be done with it
        if (!viewTransitionOpts || isViewTransitionUnavailable) {
            if (flushSync) $7b9bbaa53cb01344$var$flushSyncSafe(()=>setStateImpl(newState));
            else optInStartTransition(()=>setStateImpl(newState));
            return;
        }
        // flushSync + startViewTransition
        if (flushSync) {
            // Flush through the context to mark DOM elements as transition=ing
            $7b9bbaa53cb01344$var$flushSyncSafe(()=>{
                // Cancel any pending transitions
                if (transition) {
                    renderDfd && renderDfd.resolve();
                    transition.skipTransition();
                }
                setVtContext({
                    isTransitioning: true,
                    flushSync: true,
                    currentLocation: viewTransitionOpts.currentLocation,
                    nextLocation: viewTransitionOpts.nextLocation
                });
            });
            // Update the DOM
            let t = router.window.document.startViewTransition(()=>{
                $7b9bbaa53cb01344$var$flushSyncSafe(()=>setStateImpl(newState));
            });
            // Clean up after the animation completes
            t.finished.finally(()=>{
                $7b9bbaa53cb01344$var$flushSyncSafe(()=>{
                    setRenderDfd(undefined);
                    setTransition(undefined);
                    setPendingState(undefined);
                    setVtContext({
                        isTransitioning: false
                    });
                });
            });
            $7b9bbaa53cb01344$var$flushSyncSafe(()=>setTransition(t));
            return;
        }
        // startTransition + startViewTransition
        if (transition) {
            // Interrupting an in-progress transition, cancel and let everything flush
            // out, and then kick off a new transition from the interruption state
            renderDfd && renderDfd.resolve();
            transition.skipTransition();
            setInterruption({
                state: newState,
                currentLocation: viewTransitionOpts.currentLocation,
                nextLocation: viewTransitionOpts.nextLocation
            });
        } else {
            // Completed navigation update with opted-in view transitions, let 'er rip
            setPendingState(newState);
            setVtContext({
                isTransitioning: true,
                flushSync: false,
                currentLocation: viewTransitionOpts.currentLocation,
                nextLocation: viewTransitionOpts.nextLocation
            });
        }
    }, [
        router.window,
        transition,
        renderDfd,
        fetcherData,
        optInStartTransition
    ]);
    // Need to use a layout effect here so we are subscribed early enough to
    // pick up on any render-driven redirects/navigations (useEffect/<Navigate>)
    $d4J5n.useLayoutEffect(()=>router.subscribe(setState), [
        router,
        setState
    ]);
    // When we start a view transition, create a Deferred we can use for the
    // eventual "completed" render
    $d4J5n.useEffect(()=>{
        if (vtContext.isTransitioning && !vtContext.flushSync) setRenderDfd(new $7b9bbaa53cb01344$var$Deferred());
    }, [
        vtContext
    ]);
    // Once the deferred is created, kick off startViewTransition() to update the
    // DOM and then wait on the Deferred to resolve (indicating the DOM update has
    // happened)
    $d4J5n.useEffect(()=>{
        if (renderDfd && pendingState && router.window) {
            let newState = pendingState;
            let renderPromise = renderDfd.promise;
            let transition = router.window.document.startViewTransition(async ()=>{
                optInStartTransition(()=>setStateImpl(newState));
                await renderPromise;
            });
            transition.finished.finally(()=>{
                setRenderDfd(undefined);
                setTransition(undefined);
                setPendingState(undefined);
                setVtContext({
                    isTransitioning: false
                });
            });
            setTransition(transition);
        }
    }, [
        optInStartTransition,
        pendingState,
        renderDfd,
        router.window
    ]);
    // When the new location finally renders and is committed to the DOM, this
    // effect will run to resolve the transition
    $d4J5n.useEffect(()=>{
        if (renderDfd && pendingState && state.location.key === pendingState.location.key) renderDfd.resolve();
    }, [
        renderDfd,
        transition,
        state.location,
        pendingState
    ]);
    // If we get interrupted with a new navigation during a transition, we skip
    // the active transition, let it cleanup, then kick it off again here
    $d4J5n.useEffect(()=>{
        if (!vtContext.isTransitioning && interruption) {
            setPendingState(interruption.state);
            setVtContext({
                isTransitioning: true,
                flushSync: false,
                currentLocation: interruption.currentLocation,
                nextLocation: interruption.nextLocation
            });
            setInterruption(undefined);
        }
    }, [
        vtContext.isTransitioning,
        interruption
    ]);
    $d4J5n.useEffect(()=>{
    // Only log this once on initial mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    let navigator = $d4J5n.useMemo(()=>{
        return {
            createHref: router.createHref,
            encodeLocation: router.encodeLocation,
            go: (n)=>router.navigate(n),
            push: (to, state, opts)=>router.navigate(to, {
                    state: state,
                    preventScrollReset: opts == null ? void 0 : opts.preventScrollReset
                }),
            replace: (to, state, opts)=>router.navigate(to, {
                    replace: true,
                    state: state,
                    preventScrollReset: opts == null ? void 0 : opts.preventScrollReset
                })
        };
    }, [
        router
    ]);
    let basename = router.basename || "/";
    let dataRouterContext = $d4J5n.useMemo(()=>({
            router: router,
            navigator: navigator,
            static: false,
            basename: basename
        }), [
        router,
        navigator,
        basename
    ]);
    // The fragment and {null} here are important!  We need them to keep React 18's
    // useId happy when we are server-rendering since we may have a <script> here
    // containing the hydrated server-side staticContext (from StaticRouterProvider).
    // useId relies on the component tree structure to generate deterministic id's
    // so we need to ensure it remains the same on the client even though
    // we don't need the <script> tag
    return /*#__PURE__*/ $d4J5n.createElement($d4J5n.Fragment, null, /*#__PURE__*/ $d4J5n.createElement((0, $5b1ea468d903474a$export$3add0d5dce533e2e).Provider, {
        value: dataRouterContext
    }, /*#__PURE__*/ $d4J5n.createElement((0, $5b1ea468d903474a$export$145dfa71566a64dc).Provider, {
        value: state
    }, /*#__PURE__*/ $d4J5n.createElement($7b9bbaa53cb01344$export$148fd98d095596d4.Provider, {
        value: fetcherData.current
    }, /*#__PURE__*/ $d4J5n.createElement($7b9bbaa53cb01344$export$7ad602f0e94e62d1.Provider, {
        value: vtContext
    }, /*#__PURE__*/ $d4J5n.createElement((0, $5b1ea468d903474a$export$55185c17a0fcbe46), {
        basename: basename,
        location: state.location,
        navigationType: state.historyAction,
        navigator: navigator,
        future: {
            v7_relativeSplatPath: router.future.v7_relativeSplatPath
        }
    }, state.initialized || router.future.v7_partialHydration ? /*#__PURE__*/ $d4J5n.createElement($7b9bbaa53cb01344$var$DataRoutes, {
        routes: router.routes,
        future: router.future,
        state: state
    }) : fallbackElement))))), null);
}
function $7b9bbaa53cb01344$var$DataRoutes(_ref3) {
    let { routes: routes, future: future, state: state } = _ref3;
    return (0, $5b1ea468d903474a$export$5fcee62552a12fbf)(routes, undefined, state, future);
}
/**
 * A `<Router>` for use in web browsers. Provides the cleanest URLs.
 */ function $7b9bbaa53cb01344$export$9ba4e89fdfa1fc54(_ref4) {
    let { basename: basename, children: children, future: future, window: window1 } = _ref4;
    let historyRef = $d4J5n.useRef();
    if (historyRef.current == null) historyRef.current = (0, $0e856af10b3b08bf$export$719fc203c4e16dee)({
        window: window1,
        v5Compat: true
    });
    let history = historyRef.current;
    let [state, setStateImpl] = $d4J5n.useState({
        action: history.action,
        location: history.location
    });
    let { v7_startTransition: v7_startTransition } = future || {};
    let setState = $d4J5n.useCallback((newState)=>{
        v7_startTransition && $7b9bbaa53cb01344$var$startTransitionImpl ? $7b9bbaa53cb01344$var$startTransitionImpl(()=>setStateImpl(newState)) : setStateImpl(newState);
    }, [
        setStateImpl,
        v7_startTransition
    ]);
    $d4J5n.useLayoutEffect(()=>history.listen(setState), [
        history,
        setState
    ]);
    return /*#__PURE__*/ $d4J5n.createElement((0, $5b1ea468d903474a$export$55185c17a0fcbe46), {
        basename: basename,
        children: children,
        location: state.location,
        navigationType: state.action,
        navigator: history,
        future: future
    });
}
/**
 * A `<Router>` for use in web browsers. Stores the location in the hash
 * portion of the URL so it is not sent to the server.
 */ function $7b9bbaa53cb01344$export$7221d69dcfc8e36b(_ref5) {
    let { basename: basename, children: children, future: future, window: window1 } = _ref5;
    let historyRef = $d4J5n.useRef();
    if (historyRef.current == null) historyRef.current = (0, $0e856af10b3b08bf$export$b71fdd3798280242)({
        window: window1,
        v5Compat: true
    });
    let history = historyRef.current;
    let [state, setStateImpl] = $d4J5n.useState({
        action: history.action,
        location: history.location
    });
    let { v7_startTransition: v7_startTransition } = future || {};
    let setState = $d4J5n.useCallback((newState)=>{
        v7_startTransition && $7b9bbaa53cb01344$var$startTransitionImpl ? $7b9bbaa53cb01344$var$startTransitionImpl(()=>setStateImpl(newState)) : setStateImpl(newState);
    }, [
        setStateImpl,
        v7_startTransition
    ]);
    $d4J5n.useLayoutEffect(()=>history.listen(setState), [
        history,
        setState
    ]);
    return /*#__PURE__*/ $d4J5n.createElement((0, $5b1ea468d903474a$export$55185c17a0fcbe46), {
        basename: basename,
        children: children,
        location: state.location,
        navigationType: state.action,
        navigator: history,
        future: future
    });
}
/**
 * A `<Router>` that accepts a pre-instantiated history object. It's important
 * to note that using your own history object is highly discouraged and may add
 * two versions of the history library to your bundles unless you use the same
 * version of the history library that React Router uses internally.
 */ function $7b9bbaa53cb01344$export$eefb0c834599897e(_ref6) {
    let { basename: basename, children: children, future: future, history: history } = _ref6;
    let [state, setStateImpl] = $d4J5n.useState({
        action: history.action,
        location: history.location
    });
    let { v7_startTransition: v7_startTransition } = future || {};
    let setState = $d4J5n.useCallback((newState)=>{
        v7_startTransition && $7b9bbaa53cb01344$var$startTransitionImpl ? $7b9bbaa53cb01344$var$startTransitionImpl(()=>setStateImpl(newState)) : setStateImpl(newState);
    }, [
        setStateImpl,
        v7_startTransition
    ]);
    $d4J5n.useLayoutEffect(()=>history.listen(setState), [
        history,
        setState
    ]);
    return /*#__PURE__*/ $d4J5n.createElement((0, $5b1ea468d903474a$export$55185c17a0fcbe46), {
        basename: basename,
        children: children,
        location: state.location,
        navigationType: state.action,
        navigator: history,
        future: future
    });
}
const $7b9bbaa53cb01344$var$isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
const $7b9bbaa53cb01344$var$ABSOLUTE_URL_REGEX = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
/**
 * The public API for rendering a history-aware `<a>`.
 */ const $7b9bbaa53cb01344$export$a6c7ac8248d6e38a = /*#__PURE__*/ $d4J5n.forwardRef(function LinkWithRef(_ref7, ref) {
    let { onClick: onClick, relative: relative, reloadDocument: reloadDocument, replace: replace, state: state, target: target, to: to, preventScrollReset: preventScrollReset, unstable_viewTransition: unstable_viewTransition } = _ref7, rest = $7b9bbaa53cb01344$var$_objectWithoutPropertiesLoose(_ref7, $7b9bbaa53cb01344$var$_excluded);
    let { basename: basename } = $d4J5n.useContext((0, $5b1ea468d903474a$export$26749e8557646306));
    // Rendered into <a href> for absolute URLs
    let absoluteHref;
    let isExternal = false;
    if (typeof to === "string" && $7b9bbaa53cb01344$var$ABSOLUTE_URL_REGEX.test(to)) {
        // Render the absolute href server- and client-side
        absoluteHref = to;
        // Only check for external origins client-side
        if ($7b9bbaa53cb01344$var$isBrowser) try {
            let currentUrl = new URL(window.location.href);
            let targetUrl = to.startsWith("//") ? new URL(currentUrl.protocol + to) : new URL(to);
            let path = (0, $0e856af10b3b08bf$export$b69e3301ce081aa3)(targetUrl.pathname, basename);
            if (targetUrl.origin === currentUrl.origin && path != null) // Strip the protocol/origin/basename for same-origin absolute URLs
            to = path + targetUrl.search + targetUrl.hash;
            else isExternal = true;
        } catch (e) {}
    }
    // Rendered into <a href> for relative URLs
    let href = (0, $5b1ea468d903474a$export$b66bb29c5006f12f)(to, {
        relative: relative
    });
    let internalOnClick = $7b9bbaa53cb01344$export$67621102c14d847(to, {
        replace: replace,
        state: state,
        target: target,
        preventScrollReset: preventScrollReset,
        relative: relative,
        unstable_viewTransition: unstable_viewTransition
    });
    function handleClick(event) {
        if (onClick) onClick(event);
        if (!event.defaultPrevented) internalOnClick(event);
    }
    return(/*#__PURE__*/ // eslint-disable-next-line jsx-a11y/anchor-has-content
    $d4J5n.createElement("a", $7b9bbaa53cb01344$var$_extends({}, rest, {
        href: absoluteHref || href,
        onClick: isExternal || reloadDocument ? onClick : handleClick,
        ref: ref,
        target: target
    })));
});
/**
 * A `<Link>` wrapper that knows if it's "active" or not.
 */ const $7b9bbaa53cb01344$export$b0d92dbee9b5b60d = /*#__PURE__*/ $d4J5n.forwardRef(function NavLinkWithRef(_ref8, ref) {
    let { "aria-current": ariaCurrentProp = "page", caseSensitive: caseSensitive = false, className: classNameProp = "", end: end = false, style: styleProp, to: to, unstable_viewTransition: unstable_viewTransition, children: children } = _ref8, rest = $7b9bbaa53cb01344$var$_objectWithoutPropertiesLoose(_ref8, $7b9bbaa53cb01344$var$_excluded2);
    let path = (0, $5b1ea468d903474a$export$e75d2a2d1b3c245b)(to, {
        relative: rest.relative
    });
    let location = (0, $5b1ea468d903474a$export$45d76561a5302f2b)();
    let routerState = $d4J5n.useContext((0, $5b1ea468d903474a$export$145dfa71566a64dc));
    let { navigator: navigator, basename: basename } = $d4J5n.useContext((0, $5b1ea468d903474a$export$26749e8557646306));
    let isTransitioning = routerState != null && // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    $7b9bbaa53cb01344$export$328fe15191788e7f(path) && unstable_viewTransition === true;
    let toPathname = navigator.encodeLocation ? navigator.encodeLocation(path).pathname : path.pathname;
    let locationPathname = location.pathname;
    let nextLocationPathname = routerState && routerState.navigation && routerState.navigation.location ? routerState.navigation.location.pathname : null;
    if (!caseSensitive) {
        locationPathname = locationPathname.toLowerCase();
        nextLocationPathname = nextLocationPathname ? nextLocationPathname.toLowerCase() : null;
        toPathname = toPathname.toLowerCase();
    }
    if (nextLocationPathname && basename) nextLocationPathname = (0, $0e856af10b3b08bf$export$b69e3301ce081aa3)(nextLocationPathname, basename) || nextLocationPathname;
    // If the `to` has a trailing slash, look at that exact spot.  Otherwise,
    // we're looking for a slash _after_ what's in `to`.  For example:
    //
    // <NavLink to="/users"> and <NavLink to="/users/">
    // both want to look for a / at index 6 to match URL `/users/matt`
    const endSlashPosition = toPathname !== "/" && toPathname.endsWith("/") ? toPathname.length - 1 : toPathname.length;
    let isActive = locationPathname === toPathname || !end && locationPathname.startsWith(toPathname) && locationPathname.charAt(endSlashPosition) === "/";
    let isPending = nextLocationPathname != null && (nextLocationPathname === toPathname || !end && nextLocationPathname.startsWith(toPathname) && nextLocationPathname.charAt(toPathname.length) === "/");
    let renderProps = {
        isActive: isActive,
        isPending: isPending,
        isTransitioning: isTransitioning
    };
    let ariaCurrent = isActive ? ariaCurrentProp : undefined;
    let className;
    if (typeof classNameProp === "function") className = classNameProp(renderProps);
    else // If the className prop is not a function, we use a default `active`
    // class for <NavLink />s that are active. In v5 `active` was the default
    // value for `activeClassName`, but we are removing that API and can still
    // use the old default behavior for a cleaner upgrade path and keep the
    // simple styling rules working as they currently do.
    className = [
        classNameProp,
        isActive ? "active" : null,
        isPending ? "pending" : null,
        isTransitioning ? "transitioning" : null
    ].filter(Boolean).join(" ");
    let style = typeof styleProp === "function" ? styleProp(renderProps) : styleProp;
    return /*#__PURE__*/ $d4J5n.createElement($7b9bbaa53cb01344$export$a6c7ac8248d6e38a, $7b9bbaa53cb01344$var$_extends({}, rest, {
        "aria-current": ariaCurrent,
        className: className,
        ref: ref,
        style: style,
        to: to,
        unstable_viewTransition: unstable_viewTransition
    }), typeof children === "function" ? children(renderProps) : children);
});
/**
 * A `@remix-run/router`-aware `<form>`. It behaves like a normal form except
 * that the interaction with the server is with `fetch` instead of new document
 * requests, allowing components to add nicer UX to the page as the form is
 * submitted and returns with data.
 */ const $7b9bbaa53cb01344$export$a7fed597f4b8afd8 = /*#__PURE__*/ $d4J5n.forwardRef((_ref9, forwardedRef)=>{
    let { fetcherKey: fetcherKey, navigate: navigate, reloadDocument: reloadDocument, replace: replace, state: state, method: method = $7b9bbaa53cb01344$var$defaultMethod, action: action, onSubmit: onSubmit, relative: relative, preventScrollReset: preventScrollReset, unstable_viewTransition: unstable_viewTransition } = _ref9, props = $7b9bbaa53cb01344$var$_objectWithoutPropertiesLoose(_ref9, $7b9bbaa53cb01344$var$_excluded3);
    let submit = $7b9bbaa53cb01344$export$47c85c6e3a081d3();
    let formAction = $7b9bbaa53cb01344$export$89a6bd6db0d97c56(action, {
        relative: relative
    });
    let formMethod = method.toLowerCase() === "get" ? "get" : "post";
    let submitHandler = (event)=>{
        onSubmit && onSubmit(event);
        if (event.defaultPrevented) return;
        event.preventDefault();
        let submitter = event.nativeEvent.submitter;
        let submitMethod = (submitter == null ? void 0 : submitter.getAttribute("formmethod")) || method;
        submit(submitter || event.currentTarget, {
            fetcherKey: fetcherKey,
            method: submitMethod,
            navigate: navigate,
            replace: replace,
            state: state,
            relative: relative,
            preventScrollReset: preventScrollReset,
            unstable_viewTransition: unstable_viewTransition
        });
    };
    return /*#__PURE__*/ $d4J5n.createElement("form", $7b9bbaa53cb01344$var$_extends({
        ref: forwardedRef,
        method: formMethod,
        action: formAction,
        onSubmit: reloadDocument ? onSubmit : submitHandler
    }, props));
});
/**
 * This component will emulate the browser's scroll restoration on location
 * changes.
 */ function $7b9bbaa53cb01344$export$11aac1aab828f1fa(_ref10) {
    let { getKey: getKey, storageKey: storageKey } = _ref10;
    $7b9bbaa53cb01344$export$25057cfe5591e3e9({
        getKey: getKey,
        storageKey: storageKey
    });
    return null;
}
//#endregion
////////////////////////////////////////////////////////////////////////////////
//#region Hooks
////////////////////////////////////////////////////////////////////////////////
var $7b9bbaa53cb01344$var$DataRouterHook;
(function(DataRouterHook) {
    DataRouterHook["UseScrollRestoration"] = "useScrollRestoration";
    DataRouterHook["UseSubmit"] = "useSubmit";
    DataRouterHook["UseSubmitFetcher"] = "useSubmitFetcher";
    DataRouterHook["UseFetcher"] = "useFetcher";
    DataRouterHook["useViewTransitionState"] = "useViewTransitionState";
})($7b9bbaa53cb01344$var$DataRouterHook || ($7b9bbaa53cb01344$var$DataRouterHook = {}));
var $7b9bbaa53cb01344$var$DataRouterStateHook;
(function(DataRouterStateHook) {
    DataRouterStateHook["UseFetcher"] = "useFetcher";
    DataRouterStateHook["UseFetchers"] = "useFetchers";
    DataRouterStateHook["UseScrollRestoration"] = "useScrollRestoration";
})($7b9bbaa53cb01344$var$DataRouterStateHook || ($7b9bbaa53cb01344$var$DataRouterStateHook = {}));
// Internal hooks
function $7b9bbaa53cb01344$var$getDataRouterConsoleError(hookName) {
    return hookName + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}
function $7b9bbaa53cb01344$var$useDataRouterContext(hookName) {
    let ctx = $d4J5n.useContext((0, $5b1ea468d903474a$export$3add0d5dce533e2e));
    !ctx && (0, $0e856af10b3b08bf$export$3e9cee6b33872309)(false);
    return ctx;
}
function $7b9bbaa53cb01344$var$useDataRouterState(hookName) {
    let state = $d4J5n.useContext((0, $5b1ea468d903474a$export$145dfa71566a64dc));
    !state && (0, $0e856af10b3b08bf$export$3e9cee6b33872309)(false);
    return state;
}
// External hooks
/**
 * Handles the click behavior for router `<Link>` components. This is useful if
 * you need to create custom `<Link>` components with the same click behavior we
 * use in our exported `<Link>`.
 */ function $7b9bbaa53cb01344$export$67621102c14d847(to, _temp) {
    let { target: target, replace: replaceProp, state: state, preventScrollReset: preventScrollReset, relative: relative, unstable_viewTransition: unstable_viewTransition } = _temp === void 0 ? {} : _temp;
    let navigate = (0, $5b1ea468d903474a$export$9770f232ac06a008)();
    let location = (0, $5b1ea468d903474a$export$45d76561a5302f2b)();
    let path = (0, $5b1ea468d903474a$export$e75d2a2d1b3c245b)(to, {
        relative: relative
    });
    return $d4J5n.useCallback((event)=>{
        if ($7b9bbaa53cb01344$var$shouldProcessLinkClick(event, target)) {
            event.preventDefault();
            // If the URL hasn't changed, a regular <a> will do a replace instead of
            // a push, so do the same here unless the replace prop is explicitly set
            let replace = replaceProp !== undefined ? replaceProp : (0, $0e856af10b3b08bf$export$fe53371bee54353d)(location) === (0, $0e856af10b3b08bf$export$fe53371bee54353d)(path);
            navigate(to, {
                replace: replace,
                state: state,
                preventScrollReset: preventScrollReset,
                relative: relative,
                unstable_viewTransition: unstable_viewTransition
            });
        }
    }, [
        location,
        navigate,
        path,
        replaceProp,
        state,
        target,
        to,
        preventScrollReset,
        relative,
        unstable_viewTransition
    ]);
}
/**
 * A convenient wrapper for reading and writing search parameters via the
 * URLSearchParams interface.
 */ function $7b9bbaa53cb01344$export$f1a78c17382fe22a(defaultInit) {
    let defaultSearchParamsRef = $d4J5n.useRef($7b9bbaa53cb01344$export$a2e4e2dcc7b1f22f(defaultInit));
    let hasSetSearchParamsRef = $d4J5n.useRef(false);
    let location = (0, $5b1ea468d903474a$export$45d76561a5302f2b)();
    let searchParams = $d4J5n.useMemo(()=>// Only merge in the defaults if we haven't yet called setSearchParams.
        // Once we call that we want those to take precedence, otherwise you can't
        // remove a param with setSearchParams({}) if it has an initial value
        $7b9bbaa53cb01344$var$getSearchParamsForLocation(location.search, hasSetSearchParamsRef.current ? null : defaultSearchParamsRef.current), [
        location.search
    ]);
    let navigate = (0, $5b1ea468d903474a$export$9770f232ac06a008)();
    let setSearchParams = $d4J5n.useCallback((nextInit, navigateOptions)=>{
        const newSearchParams = $7b9bbaa53cb01344$export$a2e4e2dcc7b1f22f(typeof nextInit === "function" ? nextInit(searchParams) : nextInit);
        hasSetSearchParamsRef.current = true;
        navigate("?" + newSearchParams, navigateOptions);
    }, [
        navigate,
        searchParams
    ]);
    return [
        searchParams,
        setSearchParams
    ];
}
function $7b9bbaa53cb01344$var$validateClientSideSubmission() {
    if (typeof document === "undefined") throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.");
}
let $7b9bbaa53cb01344$var$fetcherId = 0;
let $7b9bbaa53cb01344$var$getUniqueFetcherId = ()=>"__" + String(++$7b9bbaa53cb01344$var$fetcherId) + "__";
/**
 * Returns a function that may be used to programmatically submit a form (or
 * some arbitrary data) to the server.
 */ function $7b9bbaa53cb01344$export$47c85c6e3a081d3() {
    let { router: router } = $7b9bbaa53cb01344$var$useDataRouterContext($7b9bbaa53cb01344$var$DataRouterHook.UseSubmit);
    let { basename: basename } = $d4J5n.useContext((0, $5b1ea468d903474a$export$26749e8557646306));
    let currentRouteId = (0, $5b1ea468d903474a$export$5fc8298006ad9e58)();
    return $d4J5n.useCallback(function(target, options) {
        if (options === void 0) options = {};
        $7b9bbaa53cb01344$var$validateClientSideSubmission();
        let { action: action, method: method, encType: encType, formData: formData, body: body } = $7b9bbaa53cb01344$var$getFormSubmissionInfo(target, basename);
        if (options.navigate === false) {
            let key = options.fetcherKey || $7b9bbaa53cb01344$var$getUniqueFetcherId();
            router.fetch(key, currentRouteId, options.action || action, {
                preventScrollReset: options.preventScrollReset,
                formData: formData,
                body: body,
                formMethod: options.method || method,
                formEncType: options.encType || encType,
                unstable_flushSync: options.unstable_flushSync
            });
        } else router.navigate(options.action || action, {
            preventScrollReset: options.preventScrollReset,
            formData: formData,
            body: body,
            formMethod: options.method || method,
            formEncType: options.encType || encType,
            replace: options.replace,
            state: options.state,
            fromRouteId: currentRouteId,
            unstable_flushSync: options.unstable_flushSync,
            unstable_viewTransition: options.unstable_viewTransition
        });
    }, [
        router,
        basename,
        currentRouteId
    ]);
}
// v7: Eventually we should deprecate this entirely in favor of using the
// router method directly?
function $7b9bbaa53cb01344$export$89a6bd6db0d97c56(action, _temp2) {
    let { relative: relative } = _temp2 === void 0 ? {} : _temp2;
    let { basename: basename } = $d4J5n.useContext((0, $5b1ea468d903474a$export$26749e8557646306));
    let routeContext = $d4J5n.useContext((0, $5b1ea468d903474a$export$9072aa6dd1f93057));
    !routeContext && (0, $0e856af10b3b08bf$export$3e9cee6b33872309)(false);
    let [match] = routeContext.matches.slice(-1);
    // Shallow clone path so we can modify it below, otherwise we modify the
    // object referenced by useMemo inside useResolvedPath
    let path = $7b9bbaa53cb01344$var$_extends({}, (0, $5b1ea468d903474a$export$e75d2a2d1b3c245b)(action ? action : ".", {
        relative: relative
    }));
    // If no action was specified, browsers will persist current search params
    // when determining the path, so match that behavior
    // https://github.com/remix-run/remix/issues/927
    let location = (0, $5b1ea468d903474a$export$45d76561a5302f2b)();
    if (action == null) {
        // Safe to write to this directly here since if action was undefined, we
        // would have called useResolvedPath(".") which will never include a search
        path.search = location.search;
        // When grabbing search params from the URL, remove any included ?index param
        // since it might not apply to our contextual route.  We add it back based
        // on match.route.index below
        let params = new URLSearchParams(path.search);
        if (params.has("index") && params.get("index") === "") {
            params.delete("index");
            path.search = params.toString() ? "?" + params.toString() : "";
        }
    }
    if ((!action || action === ".") && match.route.index) path.search = path.search ? path.search.replace(/^\?/, "?index&") : "?index";
    // If we're operating within a basename, prepend it to the pathname prior
    // to creating the form action.  If this is a root navigation, then just use
    // the raw basename which allows the basename to have full control over the
    // presence of a trailing slash on root actions
    if (basename !== "/") path.pathname = path.pathname === "/" ? basename : (0, $0e856af10b3b08bf$export$86d9a7913e44197e)([
        basename,
        path.pathname
    ]);
    return (0, $0e856af10b3b08bf$export$fe53371bee54353d)(path);
}
// TODO: (v7) Change the useFetcher generic default from `any` to `unknown`
/**
 * Interacts with route loaders and actions without causing a navigation. Great
 * for any interaction that stays on the same page.
 */ function $7b9bbaa53cb01344$export$5b0d2d9a9921565a(_temp3) {
    var _route$matches;
    let { key: key } = _temp3 === void 0 ? {} : _temp3;
    let { router: router } = $7b9bbaa53cb01344$var$useDataRouterContext($7b9bbaa53cb01344$var$DataRouterHook.UseFetcher);
    let state = $7b9bbaa53cb01344$var$useDataRouterState($7b9bbaa53cb01344$var$DataRouterStateHook.UseFetcher);
    let fetcherData = $d4J5n.useContext($7b9bbaa53cb01344$export$148fd98d095596d4);
    let route = $d4J5n.useContext((0, $5b1ea468d903474a$export$9072aa6dd1f93057));
    let routeId = (_route$matches = route.matches[route.matches.length - 1]) == null ? void 0 : _route$matches.route.id;
    !fetcherData && (0, $0e856af10b3b08bf$export$3e9cee6b33872309)(false);
    !route && (0, $0e856af10b3b08bf$export$3e9cee6b33872309)(false);
    !(routeId != null) && (0, $0e856af10b3b08bf$export$3e9cee6b33872309)(false);
    // Fetcher key handling
    // OK to call conditionally to feature detect `useId`
    // eslint-disable-next-line react-hooks/rules-of-hooks
    let defaultKey = $7b9bbaa53cb01344$var$useIdImpl ? $7b9bbaa53cb01344$var$useIdImpl() : "";
    let [fetcherKey, setFetcherKey] = $d4J5n.useState(key || defaultKey);
    if (key && key !== fetcherKey) setFetcherKey(key);
    else if (!fetcherKey) // We will only fall through here when `useId` is not available
    setFetcherKey($7b9bbaa53cb01344$var$getUniqueFetcherId());
    // Registration/cleanup
    $d4J5n.useEffect(()=>{
        router.getFetcher(fetcherKey);
        return ()=>{
            // Tell the router we've unmounted - if v7_fetcherPersist is enabled this
            // will not delete immediately but instead queue up a delete after the
            // fetcher returns to an `idle` state
            router.deleteFetcher(fetcherKey);
        };
    }, [
        router,
        fetcherKey
    ]);
    // Fetcher additions
    let load = $d4J5n.useCallback((href, opts)=>{
        !routeId && (0, $0e856af10b3b08bf$export$3e9cee6b33872309)(false);
        router.fetch(fetcherKey, routeId, href, opts);
    }, [
        fetcherKey,
        routeId,
        router
    ]);
    let submitImpl = $7b9bbaa53cb01344$export$47c85c6e3a081d3();
    let submit = $d4J5n.useCallback((target, opts)=>{
        submitImpl(target, $7b9bbaa53cb01344$var$_extends({}, opts, {
            navigate: false,
            fetcherKey: fetcherKey
        }));
    }, [
        fetcherKey,
        submitImpl
    ]);
    let FetcherForm = $d4J5n.useMemo(()=>{
        let FetcherForm = /*#__PURE__*/ $d4J5n.forwardRef((props, ref)=>{
            return /*#__PURE__*/ $d4J5n.createElement($7b9bbaa53cb01344$export$a7fed597f4b8afd8, $7b9bbaa53cb01344$var$_extends({}, props, {
                navigate: false,
                fetcherKey: fetcherKey,
                ref: ref
            }));
        });
        return FetcherForm;
    }, [
        fetcherKey
    ]);
    // Exposed FetcherWithComponents
    let fetcher = state.fetchers.get(fetcherKey) || (0, $0e856af10b3b08bf$export$52eace9c284d3585);
    let data = fetcherData.get(fetcherKey);
    let fetcherWithComponents = $d4J5n.useMemo(()=>$7b9bbaa53cb01344$var$_extends({
            Form: FetcherForm,
            submit: submit,
            load: load
        }, fetcher, {
            data: data
        }), [
        FetcherForm,
        submit,
        load,
        fetcher,
        data
    ]);
    return fetcherWithComponents;
}
/**
 * Provides all fetchers currently on the page. Useful for layouts and parent
 * routes that need to provide pending/optimistic UI regarding the fetch.
 */ function $7b9bbaa53cb01344$export$fa996778a3a31087() {
    let state = $7b9bbaa53cb01344$var$useDataRouterState($7b9bbaa53cb01344$var$DataRouterStateHook.UseFetchers);
    return Array.from(state.fetchers.entries()).map((_ref11)=>{
        let [key, fetcher] = _ref11;
        return $7b9bbaa53cb01344$var$_extends({}, fetcher, {
            key: key
        });
    });
}
const $7b9bbaa53cb01344$var$SCROLL_RESTORATION_STORAGE_KEY = "react-router-scroll-positions";
let $7b9bbaa53cb01344$var$savedScrollPositions = {};
/**
 * When rendered inside a RouterProvider, will restore scroll positions on navigations
 */ function $7b9bbaa53cb01344$export$25057cfe5591e3e9(_temp4) {
    let { getKey: getKey, storageKey: storageKey } = _temp4 === void 0 ? {} : _temp4;
    let { router: router } = $7b9bbaa53cb01344$var$useDataRouterContext($7b9bbaa53cb01344$var$DataRouterHook.UseScrollRestoration);
    let { restoreScrollPosition: restoreScrollPosition, preventScrollReset: preventScrollReset } = $7b9bbaa53cb01344$var$useDataRouterState($7b9bbaa53cb01344$var$DataRouterStateHook.UseScrollRestoration);
    let { basename: basename } = $d4J5n.useContext((0, $5b1ea468d903474a$export$26749e8557646306));
    let location = (0, $5b1ea468d903474a$export$45d76561a5302f2b)();
    let matches = (0, $5b1ea468d903474a$export$2378eb7f5ff86053)();
    let navigation = (0, $5b1ea468d903474a$export$d0fd4b7106de2769)();
    // Trigger manual scroll restoration while we're active
    $d4J5n.useEffect(()=>{
        window.history.scrollRestoration = "manual";
        return ()=>{
            window.history.scrollRestoration = "auto";
        };
    }, []);
    // Save positions on pagehide
    $7b9bbaa53cb01344$var$usePageHide($d4J5n.useCallback(()=>{
        if (navigation.state === "idle") {
            let key = (getKey ? getKey(location, matches) : null) || location.key;
            $7b9bbaa53cb01344$var$savedScrollPositions[key] = window.scrollY;
        }
        try {
            sessionStorage.setItem(storageKey || $7b9bbaa53cb01344$var$SCROLL_RESTORATION_STORAGE_KEY, JSON.stringify($7b9bbaa53cb01344$var$savedScrollPositions));
        } catch (error) {}
        window.history.scrollRestoration = "auto";
    }, [
        storageKey,
        getKey,
        navigation.state,
        location,
        matches
    ]));
    // Read in any saved scroll locations
    if (typeof document !== "undefined") {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        $d4J5n.useLayoutEffect(()=>{
            try {
                let sessionPositions = sessionStorage.getItem(storageKey || $7b9bbaa53cb01344$var$SCROLL_RESTORATION_STORAGE_KEY);
                if (sessionPositions) $7b9bbaa53cb01344$var$savedScrollPositions = JSON.parse(sessionPositions);
            } catch (e) {
            // no-op, use default empty object
            }
        }, [
            storageKey
        ]);
        // Enable scroll restoration in the router
        // eslint-disable-next-line react-hooks/rules-of-hooks
        $d4J5n.useLayoutEffect(()=>{
            let getKeyWithoutBasename = getKey && basename !== "/" ? (location, matches)=>getKey($7b9bbaa53cb01344$var$_extends({}, location, {
                    pathname: (0, $0e856af10b3b08bf$export$b69e3301ce081aa3)(location.pathname, basename) || location.pathname
                }), matches) : getKey;
            let disableScrollRestoration = router == null ? void 0 : router.enableScrollRestoration($7b9bbaa53cb01344$var$savedScrollPositions, ()=>window.scrollY, getKeyWithoutBasename);
            return ()=>disableScrollRestoration && disableScrollRestoration();
        }, [
            router,
            basename,
            getKey
        ]);
        // Restore scrolling when state.restoreScrollPosition changes
        // eslint-disable-next-line react-hooks/rules-of-hooks
        $d4J5n.useLayoutEffect(()=>{
            // Explicit false means don't do anything (used for submissions)
            if (restoreScrollPosition === false) return;
            // been here before, scroll to it
            if (typeof restoreScrollPosition === "number") {
                window.scrollTo(0, restoreScrollPosition);
                return;
            }
            // try to scroll to the hash
            if (location.hash) {
                let el = document.getElementById(decodeURIComponent(location.hash.slice(1)));
                if (el) {
                    el.scrollIntoView();
                    return;
                }
            }
            // Don't reset if this navigation opted out
            if (preventScrollReset === true) return;
            // otherwise go to the top on new locations
            window.scrollTo(0, 0);
        }, [
            location,
            restoreScrollPosition,
            preventScrollReset
        ]);
    }
}
/**
 * Setup a callback to be fired on the window's `beforeunload` event. This is
 * useful for saving some data to `window.localStorage` just before the page
 * refreshes.
 *
 * Note: The `callback` argument should be a function created with
 * `React.useCallback()`.
 */ function $7b9bbaa53cb01344$export$c0a586b329cae57d(callback, options) {
    let { capture: capture } = options || {};
    $d4J5n.useEffect(()=>{
        let opts = capture != null ? {
            capture: capture
        } : undefined;
        window.addEventListener("beforeunload", callback, opts);
        return ()=>{
            window.removeEventListener("beforeunload", callback, opts);
        };
    }, [
        callback,
        capture
    ]);
}
/**
 * Setup a callback to be fired on the window's `pagehide` event. This is
 * useful for saving some data to `window.localStorage` just before the page
 * refreshes.  This event is better supported than beforeunload across browsers.
 *
 * Note: The `callback` argument should be a function created with
 * `React.useCallback()`.
 */ function $7b9bbaa53cb01344$var$usePageHide(callback, options) {
    let { capture: capture } = options || {};
    $d4J5n.useEffect(()=>{
        let opts = capture != null ? {
            capture: capture
        } : undefined;
        window.addEventListener("pagehide", callback, opts);
        return ()=>{
            window.removeEventListener("pagehide", callback, opts);
        };
    }, [
        callback,
        capture
    ]);
}
/**
 * Wrapper around useBlocker to show a window.confirm prompt to users instead
 * of building a custom UI with useBlocker.
 *
 * Warning: This has *a lot of rough edges* and behaves very differently (and
 * very incorrectly in some cases) across browsers if user click addition
 * back/forward navigations while the confirm is open.  Use at your own risk.
 */ function $7b9bbaa53cb01344$export$39f4eb3dbd812741(_ref12) {
    let { when: when, message: message } = _ref12;
    let blocker = (0, $5b1ea468d903474a$export$b273b3273281a049)(when);
    $d4J5n.useEffect(()=>{
        if (blocker.state === "blocked") {
            let proceed = window.confirm(message);
            if (proceed) // This timeout is needed to avoid a weird "race" on POP navigations
            // between the `window.history` revert navigation and the result of
            // `window.confirm`
            setTimeout(blocker.proceed, 0);
            else blocker.reset();
        }
    }, [
        blocker,
        message
    ]);
    $d4J5n.useEffect(()=>{
        if (blocker.state === "blocked" && !when) blocker.reset();
    }, [
        blocker,
        when
    ]);
}
/**
 * Return a boolean indicating if there is an active view transition to the
 * given href.  You can use this value to render CSS classes or viewTransitionName
 * styles onto your elements
 *
 * @param href The destination href
 * @param [opts.relative] Relative routing type ("route" | "path")
 */ function $7b9bbaa53cb01344$export$328fe15191788e7f(to, opts) {
    if (opts === void 0) opts = {};
    let vtContext = $d4J5n.useContext($7b9bbaa53cb01344$export$7ad602f0e94e62d1);
    !(vtContext != null) && (0, $0e856af10b3b08bf$export$3e9cee6b33872309)(false);
    let { basename: basename } = $7b9bbaa53cb01344$var$useDataRouterContext($7b9bbaa53cb01344$var$DataRouterHook.useViewTransitionState);
    let path = (0, $5b1ea468d903474a$export$e75d2a2d1b3c245b)(to, {
        relative: opts.relative
    });
    if (!vtContext.isTransitioning) return false;
    let currentPath = (0, $0e856af10b3b08bf$export$b69e3301ce081aa3)(vtContext.currentLocation.pathname, basename) || vtContext.currentLocation.pathname;
    let nextPath = (0, $0e856af10b3b08bf$export$b69e3301ce081aa3)(vtContext.nextLocation.pathname, basename) || vtContext.nextLocation.pathname;
    // Transition is active if we're going to or coming from the indicated
    // destination.  This ensures that other PUSH navigations that reverse
    // an indicated transition apply.  I.e., on the list view you have:
    //
    //   <NavLink to="/details/1" unstable_viewTransition>
    //
    // If you click the breadcrumb back to the list view:
    //
    //   <NavLink to="/list" unstable_viewTransition>
    //
    // We should apply the transition because it's indicated as active going
    // from /list -> /details/1 and therefore should be active on the reverse
    // (even though this isn't strictly a POP reverse)
    return (0, $0e856af10b3b08bf$export$81336c211d5ff295)(path.pathname, nextPath) != null || (0, $0e856af10b3b08bf$export$81336c211d5ff295)(path.pathname, currentPath) != null;
}


const $3320258428206076$export$9bd698419030e459 = ({ movie: movie, isFavorite: isFavorite })=>{
    const storedToken = localStorage.getItem("token");
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const [user, setUser] = (0, $d4J5n.useState)(storedUser ? storedUser : null);
    const [token, setToken] = (0, $d4J5n.useState)(storedToken ? storedToken : null);
    const [addTitle, setAddTitle] = (0, $d4J5n.useState)("");
    const [delTitle, setDelTitle] = (0, $d4J5n.useState)("");
    (0, $d4J5n.useEffect)(()=>{
        const addToFavorites = ()=>{
            fetch(`https://my-movies-flix-db-60666e043a4b.herokuapp.com/users/${user.username}/movies/${encodeURIComponent(movie.title)}`, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            }).then((response)=>{
                if (!response.ok) throw new Error("Failed to add movie to favorites.");
                alert("Movie added to favorites successfully!");
                window.location.reload();
                return response.json();
            }).then((user)=>{
                if (user) {
                    localStorage.setItem("user", JSON.stringify(user));
                    setUser(user);
                }
            }).catch((error)=>{
                console.error(error);
            });
        };
        const removeFromFavorites = ()=>{
            fetch(`https://my-movies-flix-db-60666e043a4b.herokuapp.com/users/${user.username}/movies/${encodeURIComponent(movie.title)}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            }).then((response)=>{
                if (!response.ok) throw new Error("Failed to remove movie from favorites.");
                alert("Movie removed from favorites successfully!");
                window.location.reload();
                return response.json();
            }).then((user)=>{
                if (user) {
                    localStorage.setItem("user", JSON.stringify(user));
                    setUser(user);
                }
            }).catch((error)=>{
                console.error(error);
            });
        };
        if (addTitle) addToFavorites();
        if (delTitle) removeFromFavorites();
    }, [
        addTitle,
        delTitle,
        token
    ]);
    const handleAddToFavorites = ()=>{
        setAddTitle(movie.title);
    };
    const handleRemoveFromFavorites = ()=>{
        setDelTitle(movie.title);
    };
    return /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsxs)((0, $17b288f07ec57b56$exports.Fragment), {
        children: [
            /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $7b9bbaa53cb01344$export$a6c7ac8248d6e38a), {
                to: `/movies/${encodeURIComponent(movie.id)}`,
                className: "movie-view",
                children: /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsxs)((0, $a88e4ade28693468$export$2e2bcd8739ae039), {
                    className: "h-100",
                    children: [
                        /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $a88e4ade28693468$export$2e2bcd8739ae039).Img, {
                            variant: "top",
                            src: movie.image,
                            className: "object-fit-cover"
                        }),
                        /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsxs)((0, $a88e4ade28693468$export$2e2bcd8739ae039).Body, {
                            children: [
                                /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $a88e4ade28693468$export$2e2bcd8739ae039).Title, {
                                    children: movie.title
                                }),
                                /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $a88e4ade28693468$export$2e2bcd8739ae039).Text, {
                                    children: movie.director
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $a88e4ade28693468$export$2e2bcd8739ae039), {
                children: isFavorite ? /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $28f73d2964a5e7b1$export$2e2bcd8739ae039), {
                    variant: "primary",
                    onClick: handleRemoveFromFavorites,
                    children: "Remove"
                }) : /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $28f73d2964a5e7b1$export$2e2bcd8739ae039), {
                    variant: "primary",
                    onClick: handleAddToFavorites,
                    children: "Add"
                })
            })
        ]
    });
};
$3320258428206076$export$9bd698419030e459.PropTypes = {
    isFavorite: (0, (/*@__PURE__*/$parcel$interopDefault($2cf4efeb0ce83047$exports))).bool.isRequired,
    movie: (0, (/*@__PURE__*/$parcel$interopDefault($2cf4efeb0ce83047$exports))).shape({
        id: (0, (/*@__PURE__*/$parcel$interopDefault($2cf4efeb0ce83047$exports))).string.isRequired,
        title: (0, (/*@__PURE__*/$parcel$interopDefault($2cf4efeb0ce83047$exports))).string.isRequired,
        image: (0, (/*@__PURE__*/$parcel$interopDefault($2cf4efeb0ce83047$exports))).string.isRequired,
        description: (0, (/*@__PURE__*/$parcel$interopDefault($2cf4efeb0ce83047$exports))).string.isRequired,
        genre: (0, (/*@__PURE__*/$parcel$interopDefault($2cf4efeb0ce83047$exports))).string.isRequired,
        director: (0, (/*@__PURE__*/$parcel$interopDefault($2cf4efeb0ce83047$exports))).string.isRequired,
        featured: (0, (/*@__PURE__*/$parcel$interopDefault($2cf4efeb0ce83047$exports))).bool
    }).isRequired
};



parcelRequire("d4J5n");




const $d511bcfbcdb493dd$export$78d497080ea8f89a = ({ movies: movies })=>{
    const { movieId: movieId } = (0, $5b1ea468d903474a$export$99eaa27ddbbb95ef)();
    const movie = movies.find((m)=>m.id === movieId);
    return /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)("div", {
                children: /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)("img", {
                    src: movie.image,
                    className: "justify-content-md-center"
                })
            }),
            /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)("span", {
                        children: "Title: "
                    }),
                    /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)("span", {
                        children: movie.title
                    })
                ]
            }),
            /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)("span", {
                        children: "Description: "
                    }),
                    /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)("span", {
                        children: movie.description
                    })
                ]
            }),
            /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)("span", {
                        children: "Genre: "
                    }),
                    /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)("span", {
                        children: movie.genre
                    })
                ]
            }),
            /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)("span", {
                        children: "Director: "
                    }),
                    /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)("span", {
                        children: movie.director
                    })
                ]
            }),
            /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)("span", {
                        children: "Featured: "
                    }),
                    /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)("span", {
                        children: movie.featured ? "True" : "False"
                    })
                ]
            }),
            /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $7b9bbaa53cb01344$export$a6c7ac8248d6e38a), {
                to: `/`,
                children: /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $28f73d2964a5e7b1$export$2e2bcd8739ae039), {
                    className: "back-button",
                    style: {
                        cursor: "pointer"
                    },
                    children: "Back"
                })
            })
        ]
    });
};
$d511bcfbcdb493dd$export$78d497080ea8f89a.PropTypes = {
    movies: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        genre: PropTypes.string,
        director: PropTypes.string
    }).isRequired
};




var $d4J5n = parcelRequire("d4J5n");





var $d4J5n = parcelRequire("d4J5n");


var $d4J5n = parcelRequire("d4J5n");


var $d4J5n = parcelRequire("d4J5n");


const $99f02886325c8983$var$propTypes = {
    /**
   * Specify whether the feedback is for valid or invalid fields
   *
   * @type {('valid'|'invalid')}
   */ type: (0, (/*@__PURE__*/$parcel$interopDefault($2cf4efeb0ce83047$exports))).string,
    /** Display feedback as a tooltip. */ tooltip: (0, (/*@__PURE__*/$parcel$interopDefault($2cf4efeb0ce83047$exports))).bool,
    as: (0, (/*@__PURE__*/$parcel$interopDefault($2cf4efeb0ce83047$exports))).elementType
};
const $99f02886325c8983$var$Feedback = /*#__PURE__*/ $d4J5n.forwardRef(// Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
({ as: Component = "div", className: className, type: type = "valid", tooltip: tooltip = false, ...props }, ref)=>/*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)(Component, {
        ...props,
        ref: ref,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($4f96bb9b3141308a$exports)))(className, `${type}-${tooltip ? "tooltip" : "feedback"}`)
    }));
$99f02886325c8983$var$Feedback.displayName = "Feedback";
$99f02886325c8983$var$Feedback.propTypes = $99f02886325c8983$var$propTypes;
var $99f02886325c8983$export$2e2bcd8739ae039 = $99f02886325c8983$var$Feedback;




var $d4J5n = parcelRequire("d4J5n");

var $d4J5n = parcelRequire("d4J5n");
"use client";
// TODO
const $93a8d02e0e6ef3b4$var$FormContext = /*#__PURE__*/ $d4J5n.createContext({});
var $93a8d02e0e6ef3b4$export$2e2bcd8739ae039 = $93a8d02e0e6ef3b4$var$FormContext;




"use client";
const $4fe26eff7d937d74$var$FormCheckInput = /*#__PURE__*/ $d4J5n.forwardRef(({ id: id, bsPrefix: bsPrefix, className: className, type: type = "checkbox", isValid: isValid = false, isInvalid: isInvalid = false, // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
as: Component = "input", ...props }, ref)=>{
    const { controlId: controlId } = (0, $d4J5n.useContext)((0, $93a8d02e0e6ef3b4$export$2e2bcd8739ae039));
    bsPrefix = (0, $d2965fbad540669a$export$7f387860ebffb32c)(bsPrefix, "form-check-input");
    return /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)(Component, {
        ...props,
        ref: ref,
        type: type,
        id: id || controlId,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($4f96bb9b3141308a$exports)))(className, bsPrefix, isValid && "is-valid", isInvalid && "is-invalid")
    });
});
$4fe26eff7d937d74$var$FormCheckInput.displayName = "FormCheckInput";
var $4fe26eff7d937d74$export$2e2bcd8739ae039 = $4fe26eff7d937d74$var$FormCheckInput;




var $d4J5n = parcelRequire("d4J5n");



"use client";
const $9d45adf77f591b11$var$FormCheckLabel = /*#__PURE__*/ $d4J5n.forwardRef(({ bsPrefix: bsPrefix, className: className, htmlFor: htmlFor, ...props }, ref)=>{
    const { controlId: controlId } = (0, $d4J5n.useContext)((0, $93a8d02e0e6ef3b4$export$2e2bcd8739ae039));
    bsPrefix = (0, $d2965fbad540669a$export$7f387860ebffb32c)(bsPrefix, "form-check-label");
    return /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)("label", {
        ...props,
        ref: ref,
        htmlFor: htmlFor || controlId,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($4f96bb9b3141308a$exports)))(className, bsPrefix)
    });
});
$9d45adf77f591b11$var$FormCheckLabel.displayName = "FormCheckLabel";
var $9d45adf77f591b11$export$2e2bcd8739ae039 = $9d45adf77f591b11$var$FormCheckLabel;





var $d4J5n = parcelRequire("d4J5n");
/**
 * Iterates through children that are typically specified as `props.children`,
 * but only maps over children that are "valid elements".
 *
 * The mapFunction provided index will be normalised to the components mapped,
 * so an invalid component would not increase the index.
 *
 */ function $c79ad894bd0de69c$export$871de8747c9eaa88(children, func) {
    let index = 0;
    return $d4J5n.Children.map(children, (child)=>/*#__PURE__*/ $d4J5n.isValidElement(child) ? func(child, index++) : child);
}
/**
 * Iterates through children that are "valid elements".
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child with the index reflecting the position relative to "valid components".
 */ function $c79ad894bd0de69c$export$4b80e395e36b5a56(children, func) {
    let index = 0;
    $d4J5n.Children.forEach(children, (child)=>{
        if (/*#__PURE__*/ $d4J5n.isValidElement(child)) func(child, index++);
    });
}
/**
 * Finds whether a component's `children` prop includes a React element of the
 * specified type.
 */ function $c79ad894bd0de69c$export$500fd6099226ffae(children, type) {
    return $d4J5n.Children.toArray(children).some((child)=>/*#__PURE__*/ $d4J5n.isValidElement(child) && child.type === type);
}



"use client";
const $32745e6f4e96c9e3$var$FormCheck = /*#__PURE__*/ $d4J5n.forwardRef(({ id: id, bsPrefix: bsPrefix, bsSwitchPrefix: bsSwitchPrefix, inline: inline = false, reverse: reverse = false, disabled: disabled = false, isValid: isValid = false, isInvalid: isInvalid = false, feedbackTooltip: feedbackTooltip = false, feedback: feedback, feedbackType: feedbackType, className: className, style: style, title: title = "", type: type = "checkbox", label: label, children: children, as: // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
as = "input", ...props }, ref)=>{
    bsPrefix = (0, $d2965fbad540669a$export$7f387860ebffb32c)(bsPrefix, "form-check");
    bsSwitchPrefix = (0, $d2965fbad540669a$export$7f387860ebffb32c)(bsSwitchPrefix, "form-switch");
    const { controlId: controlId } = (0, $d4J5n.useContext)((0, $93a8d02e0e6ef3b4$export$2e2bcd8739ae039));
    const innerFormContext = (0, $d4J5n.useMemo)(()=>({
            controlId: id || controlId
        }), [
        controlId,
        id
    ]);
    const hasLabel = !children && label != null && label !== false || (0, $c79ad894bd0de69c$export$500fd6099226ffae)(children, (0, $9d45adf77f591b11$export$2e2bcd8739ae039));
    const input = /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $4fe26eff7d937d74$export$2e2bcd8739ae039), {
        ...props,
        type: type === "switch" ? "checkbox" : type,
        ref: ref,
        isValid: isValid,
        isInvalid: isInvalid,
        disabled: disabled,
        as: as
    });
    return /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $93a8d02e0e6ef3b4$export$2e2bcd8739ae039).Provider, {
        value: innerFormContext,
        children: /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)("div", {
            style: style,
            className: (0, (/*@__PURE__*/$parcel$interopDefault($4f96bb9b3141308a$exports)))(className, hasLabel && bsPrefix, inline && `${bsPrefix}-inline`, reverse && `${bsPrefix}-reverse`, type === "switch" && bsSwitchPrefix),
            children: children || /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsxs)((0, $17b288f07ec57b56$exports.Fragment), {
                children: [
                    input,
                    hasLabel && /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $9d45adf77f591b11$export$2e2bcd8739ae039), {
                        title: title,
                        children: label
                    }),
                    feedback && /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $99f02886325c8983$export$2e2bcd8739ae039), {
                        type: feedbackType,
                        tooltip: feedbackTooltip,
                        children: feedback
                    })
                ]
            })
        })
    });
});
$32745e6f4e96c9e3$var$FormCheck.displayName = "FormCheck";
var $32745e6f4e96c9e3$export$2e2bcd8739ae039 = Object.assign($32745e6f4e96c9e3$var$FormCheck, {
    Input: (0, $4fe26eff7d937d74$export$2e2bcd8739ae039),
    Label: (0, $9d45adf77f591b11$export$2e2bcd8739ae039)
});




var $d4J5n = parcelRequire("d4J5n");
var $e9fcd470667b0e10$exports = {};
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */ var $e9fcd470667b0e10$var$__DEV__ = false;
var $e9fcd470667b0e10$var$warning = function() {};
if ($e9fcd470667b0e10$var$__DEV__) {
    var $e9fcd470667b0e10$var$printWarning = function printWarning(format, args) {
        var len = arguments.length;
        args = new Array(len > 1 ? len - 1 : 0);
        for(var key = 1; key < len; key++)args[key - 1] = arguments[key];
        var argIndex = 0;
        var message = "Warning: " + format.replace(/%s/g, function() {
            return args[argIndex++];
        });
        if (typeof console !== "undefined") console.error(message);
        try {
            // --- Welcome to debugging React ---
            // This error was thrown as a convenience so that you can use this stack
            // to find the callsite that caused this warning to fire.
            throw new Error(message);
        } catch (x) {}
    };
    $e9fcd470667b0e10$var$warning = function(condition, format, args) {
        var len = arguments.length;
        args = new Array(len > 2 ? len - 2 : 0);
        for(var key = 2; key < len; key++)args[key - 2] = arguments[key];
        if (format === undefined) throw new Error("`warning(condition, format, ...args)` requires a warning message argument");
        if (!condition) $e9fcd470667b0e10$var$printWarning.apply(null, [
            format
        ].concat(args));
    };
}
$e9fcd470667b0e10$exports = $e9fcd470667b0e10$var$warning;






"use client";
const $2a6645959f1fb1de$var$FormControl = /*#__PURE__*/ $d4J5n.forwardRef(({ bsPrefix: bsPrefix, type: type, size: size, htmlSize: htmlSize, id: id, className: className, isValid: isValid = false, isInvalid: isInvalid = false, plaintext: plaintext, readOnly: readOnly, // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
as: Component = "input", ...props }, ref)=>{
    const { controlId: controlId } = (0, $d4J5n.useContext)((0, $93a8d02e0e6ef3b4$export$2e2bcd8739ae039));
    bsPrefix = (0, $d2965fbad540669a$export$7f387860ebffb32c)(bsPrefix, "form-control");
    return /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)(Component, {
        ...props,
        type: type,
        size: htmlSize,
        ref: ref,
        readOnly: readOnly,
        id: id || controlId,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($4f96bb9b3141308a$exports)))(className, plaintext ? `${bsPrefix}-plaintext` : bsPrefix, size && `${bsPrefix}-${size}`, type === "color" && `${bsPrefix}-color`, isValid && "is-valid", isInvalid && "is-invalid")
    });
});
$2a6645959f1fb1de$var$FormControl.displayName = "FormControl";
var $2a6645959f1fb1de$export$2e2bcd8739ae039 = Object.assign($2a6645959f1fb1de$var$FormControl, {
    Feedback: $99f02886325c8983$export$2e2bcd8739ae039
});



var $d4J5n = parcelRequire("d4J5n");



"use client";
const $9a9c6b7667500ef0$var$FormFloating = /*#__PURE__*/ $d4J5n.forwardRef(({ className: className, bsPrefix: bsPrefix, as: Component = "div", ...props }, ref)=>{
    bsPrefix = (0, $d2965fbad540669a$export$7f387860ebffb32c)(bsPrefix, "form-floating");
    return /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)(Component, {
        ref: ref,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($4f96bb9b3141308a$exports)))(className, bsPrefix),
        ...props
    });
});
$9a9c6b7667500ef0$var$FormFloating.displayName = "FormFloating";
var $9a9c6b7667500ef0$export$2e2bcd8739ae039 = $9a9c6b7667500ef0$var$FormFloating;



var $d4J5n = parcelRequire("d4J5n");


const $3066ccf8bc8d4719$var$FormGroup = /*#__PURE__*/ $d4J5n.forwardRef(({ controlId: controlId, // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
as: Component = "div", ...props }, ref)=>{
    const context = (0, $d4J5n.useMemo)(()=>({
            controlId: controlId
        }), [
        controlId
    ]);
    return /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $93a8d02e0e6ef3b4$export$2e2bcd8739ae039).Provider, {
        value: context,
        children: /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)(Component, {
            ...props,
            ref: ref
        })
    });
});
$3066ccf8bc8d4719$var$FormGroup.displayName = "FormGroup";
var $3066ccf8bc8d4719$export$2e2bcd8739ae039 = $3066ccf8bc8d4719$var$FormGroup;




var $d4J5n = parcelRequire("d4J5n");



var $d4J5n = parcelRequire("d4J5n");


"use client";
function $e0a530bac7696c79$export$2ed43d61a0a9f5a3({ as: as, bsPrefix: bsPrefix, className: className, ...props }) {
    bsPrefix = (0, $d2965fbad540669a$export$7f387860ebffb32c)(bsPrefix, "col");
    const breakpoints = (0, $d2965fbad540669a$export$8970c8db816a5863)();
    const minBreakpoint = (0, $d2965fbad540669a$export$d926d6ef38f3fd32)();
    const spans = [];
    const classes = [];
    breakpoints.forEach((brkPoint)=>{
        const propValue = props[brkPoint];
        delete props[brkPoint];
        let span;
        let offset;
        let order;
        if (typeof propValue === "object" && propValue != null) ({ span: span, offset: offset, order: order } = propValue);
        else span = propValue;
        const infix = brkPoint !== minBreakpoint ? `-${brkPoint}` : "";
        if (span) spans.push(span === true ? `${bsPrefix}${infix}` : `${bsPrefix}${infix}-${span}`);
        if (order != null) classes.push(`order${infix}-${order}`);
        if (offset != null) classes.push(`offset${infix}-${offset}`);
    });
    return [
        {
            ...props,
            className: (0, (/*@__PURE__*/$parcel$interopDefault($4f96bb9b3141308a$exports)))(className, ...spans, ...classes)
        },
        {
            as: as,
            bsPrefix: bsPrefix,
            spans: spans
        }
    ];
}
const $e0a530bac7696c79$var$Col = /*#__PURE__*/ $d4J5n.forwardRef(// Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
(props, ref)=>{
    const [{ className: className, ...colProps }, { as: Component = "div", bsPrefix: bsPrefix, spans: spans }] = $e0a530bac7696c79$export$2ed43d61a0a9f5a3(props);
    return /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)(Component, {
        ...colProps,
        ref: ref,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($4f96bb9b3141308a$exports)))(className, !spans.length && bsPrefix)
    });
});
$e0a530bac7696c79$var$Col.displayName = "Col";
var $e0a530bac7696c79$export$2e2bcd8739ae039 = $e0a530bac7696c79$var$Col;





"use client";
const $ddcb1ed810b4c12b$var$FormLabel = /*#__PURE__*/ $d4J5n.forwardRef(({ // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
as: Component = "label", bsPrefix: bsPrefix, column: column = false, visuallyHidden: visuallyHidden = false, className: className, htmlFor: htmlFor, ...props }, ref)=>{
    const { controlId: controlId } = (0, $d4J5n.useContext)((0, $93a8d02e0e6ef3b4$export$2e2bcd8739ae039));
    bsPrefix = (0, $d2965fbad540669a$export$7f387860ebffb32c)(bsPrefix, "form-label");
    let columnClass = "col-form-label";
    if (typeof column === "string") columnClass = `${columnClass} ${columnClass}-${column}`;
    const classes = (0, (/*@__PURE__*/$parcel$interopDefault($4f96bb9b3141308a$exports)))(className, bsPrefix, visuallyHidden && "visually-hidden", column && columnClass);
    htmlFor = htmlFor || controlId;
    if (column) return /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $e0a530bac7696c79$export$2e2bcd8739ae039), {
        ref: ref,
        as: "label",
        className: classes,
        htmlFor: htmlFor,
        ...props
    });
    return(/*#__PURE__*/ // eslint-disable-next-line jsx-a11y/label-has-for, jsx-a11y/label-has-associated-control
    (0, $17b288f07ec57b56$exports.jsx)(Component, {
        ref: ref,
        className: classes,
        htmlFor: htmlFor,
        ...props
    }));
});
$ddcb1ed810b4c12b$var$FormLabel.displayName = "FormLabel";
var $ddcb1ed810b4c12b$export$2e2bcd8739ae039 = $ddcb1ed810b4c12b$var$FormLabel;




var $d4J5n = parcelRequire("d4J5n");



"use client";
const $bc7d8b807f5c3077$var$FormRange = /*#__PURE__*/ $d4J5n.forwardRef(({ bsPrefix: bsPrefix, className: className, id: id, ...props }, ref)=>{
    const { controlId: controlId } = (0, $d4J5n.useContext)((0, $93a8d02e0e6ef3b4$export$2e2bcd8739ae039));
    bsPrefix = (0, $d2965fbad540669a$export$7f387860ebffb32c)(bsPrefix, "form-range");
    return /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)("input", {
        ...props,
        type: "range",
        ref: ref,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($4f96bb9b3141308a$exports)))(className, bsPrefix),
        id: id || controlId
    });
});
$bc7d8b807f5c3077$var$FormRange.displayName = "FormRange";
var $bc7d8b807f5c3077$export$2e2bcd8739ae039 = $bc7d8b807f5c3077$var$FormRange;




var $d4J5n = parcelRequire("d4J5n");



"use client";
const $c61dc2b7161cd4a4$var$FormSelect = /*#__PURE__*/ $d4J5n.forwardRef(({ bsPrefix: bsPrefix, size: size, htmlSize: htmlSize, className: className, isValid: isValid = false, isInvalid: isInvalid = false, id: id, ...props }, ref)=>{
    const { controlId: controlId } = (0, $d4J5n.useContext)((0, $93a8d02e0e6ef3b4$export$2e2bcd8739ae039));
    bsPrefix = (0, $d2965fbad540669a$export$7f387860ebffb32c)(bsPrefix, "form-select");
    return /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)("select", {
        ...props,
        size: htmlSize,
        ref: ref,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($4f96bb9b3141308a$exports)))(className, bsPrefix, size && `${bsPrefix}-${size}`, isValid && `is-valid`, isInvalid && `is-invalid`),
        id: id || controlId
    });
});
$c61dc2b7161cd4a4$var$FormSelect.displayName = "FormSelect";
var $c61dc2b7161cd4a4$export$2e2bcd8739ae039 = $c61dc2b7161cd4a4$var$FormSelect;




var $d4J5n = parcelRequire("d4J5n");


"use client";
const $1fcc09871a4f0fb9$var$FormText = /*#__PURE__*/ $d4J5n.forwardRef(// Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
({ bsPrefix: bsPrefix, className: className, as: Component = "small", muted: muted, ...props }, ref)=>{
    bsPrefix = (0, $d2965fbad540669a$export$7f387860ebffb32c)(bsPrefix, "form-text");
    return /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)(Component, {
        ...props,
        ref: ref,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($4f96bb9b3141308a$exports)))(className, bsPrefix, muted && "text-muted")
    });
});
$1fcc09871a4f0fb9$var$FormText.displayName = "FormText";
var $1fcc09871a4f0fb9$export$2e2bcd8739ae039 = $1fcc09871a4f0fb9$var$FormText;



var $d4J5n = parcelRequire("d4J5n");


const $18a2fc339d2281f2$var$Switch = /*#__PURE__*/ $d4J5n.forwardRef((props, ref)=>/*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $32745e6f4e96c9e3$export$2e2bcd8739ae039), {
        ...props,
        ref: ref,
        type: "switch"
    }));
$18a2fc339d2281f2$var$Switch.displayName = "Switch";
var $18a2fc339d2281f2$export$2e2bcd8739ae039 = Object.assign($18a2fc339d2281f2$var$Switch, {
    Input: (0, $32745e6f4e96c9e3$export$2e2bcd8739ae039).Input,
    Label: (0, $32745e6f4e96c9e3$export$2e2bcd8739ae039).Label
});




var $d4J5n = parcelRequire("d4J5n");



"use client";
const $356da7292971b443$var$FloatingLabel = /*#__PURE__*/ $d4J5n.forwardRef(({ bsPrefix: bsPrefix, className: className, children: children, controlId: controlId, label: label, ...props }, ref)=>{
    bsPrefix = (0, $d2965fbad540669a$export$7f387860ebffb32c)(bsPrefix, "form-floating");
    return /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsxs)((0, $3066ccf8bc8d4719$export$2e2bcd8739ae039), {
        ref: ref,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($4f96bb9b3141308a$exports)))(className, bsPrefix),
        controlId: controlId,
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)("label", {
                htmlFor: controlId,
                children: label
            })
        ]
    });
});
$356da7292971b443$var$FloatingLabel.displayName = "FloatingLabel";
var $356da7292971b443$export$2e2bcd8739ae039 = $356da7292971b443$var$FloatingLabel;



const $500f6b476db973c5$var$propTypes = {
    /**
   * The Form `ref` will be forwarded to the underlying element,
   * which means, unless it's rendered `as` a composite component,
   * it will be a DOM node, when resolved.
   *
   * @type {ReactRef}
   * @alias ref
   */ _ref: (0, (/*@__PURE__*/$parcel$interopDefault($2cf4efeb0ce83047$exports))).any,
    /**
   * Mark a form as having been validated. Setting it to `true` will
   * toggle any validation styles on the forms elements.
   */ validated: (0, (/*@__PURE__*/$parcel$interopDefault($2cf4efeb0ce83047$exports))).bool,
    as: (0, (/*@__PURE__*/$parcel$interopDefault($2cf4efeb0ce83047$exports))).elementType
};
const $500f6b476db973c5$var$Form = /*#__PURE__*/ $d4J5n.forwardRef(({ className: className, validated: validated, // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
as: Component = "form", ...props }, ref)=>/*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)(Component, {
        ...props,
        ref: ref,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($4f96bb9b3141308a$exports)))(className, validated && "was-validated")
    }));
$500f6b476db973c5$var$Form.displayName = "Form";
$500f6b476db973c5$var$Form.propTypes = $500f6b476db973c5$var$propTypes;
var $500f6b476db973c5$export$2e2bcd8739ae039 = Object.assign($500f6b476db973c5$var$Form, {
    Group: (0, $3066ccf8bc8d4719$export$2e2bcd8739ae039),
    Control: (0, $2a6645959f1fb1de$export$2e2bcd8739ae039),
    Floating: (0, $9a9c6b7667500ef0$export$2e2bcd8739ae039),
    Check: (0, $32745e6f4e96c9e3$export$2e2bcd8739ae039),
    Switch: $18a2fc339d2281f2$export$2e2bcd8739ae039,
    Label: (0, $ddcb1ed810b4c12b$export$2e2bcd8739ae039),
    Text: (0, $1fcc09871a4f0fb9$export$2e2bcd8739ae039),
    Range: (0, $bc7d8b807f5c3077$export$2e2bcd8739ae039),
    Select: (0, $c61dc2b7161cd4a4$export$2e2bcd8739ae039),
    FloatingLabel: $356da7292971b443$export$2e2bcd8739ae039
});


const $7138a60219a89fa9$export$1582048ca8384970 = ({ onLoggedIn: onLoggedIn })=>{
    const [username, setUsername] = (0, $d4J5n.useState)("");
    const [password, setPassword] = (0, $d4J5n.useState)("");
    const handleSubmit = (event)=>{
        //this prevents the default behavior of the form which is to reload the entire page
        event.preventDefault();
        const data = {
            Username: username,
            Password: password
        };
        fetch("https://my-movies-flix-db-60666e043a4b.herokuapp.com/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then((response)=>response.json()).then((data)=>{
            console.log("Login response: ", data);
            if (data.user) {
                localStorage.setItem("user", JSON.stringify(data.user));
                localStorage.setItem("token", data.token);
                onLoggedIn(data.user, data.token);
            } else alert("No such user");
        }).catch((e)=>{
            console.error("login error: ", e);
            alert("Something went wrong");
        });
    };
    return /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsxs)((0, $500f6b476db973c5$export$2e2bcd8739ae039), {
        onSubmit: handleSubmit,
        children: [
            /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsxs)((0, $500f6b476db973c5$export$2e2bcd8739ae039).Group, {
                controlId: "formUsername",
                children: [
                    /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $500f6b476db973c5$export$2e2bcd8739ae039).Label, {
                        children: "Username:"
                    }),
                    /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $500f6b476db973c5$export$2e2bcd8739ae039).Control, {
                        type: "text",
                        minLength: "5",
                        value: username,
                        onChange: (e)=>setUsername(e.target.value),
                        required: true,
                        className: "mb-4"
                    })
                ]
            }),
            /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsxs)((0, $500f6b476db973c5$export$2e2bcd8739ae039).Group, {
                controlId: "formPassword",
                children: [
                    /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $500f6b476db973c5$export$2e2bcd8739ae039).Label, {
                        children: "Password:"
                    }),
                    /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $500f6b476db973c5$export$2e2bcd8739ae039).Control, {
                        type: "password",
                        value: password,
                        onChange: (e)=>setPassword(e.target.value),
                        required: true,
                        className: "mb-4"
                    })
                ]
            }),
            /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $28f73d2964a5e7b1$export$2e2bcd8739ae039), {
                variant: "primary",
                type: "submit",
                children: "Login"
            })
        ]
    });
};
$7138a60219a89fa9$export$1582048ca8384970.PropTypes = {
    onLoggedIn: (0, (/*@__PURE__*/$parcel$interopDefault($2cf4efeb0ce83047$exports))).func.isRequired
};




var $d4J5n = parcelRequire("d4J5n");


const $44e984fc6201510c$export$25f3896ea1e09820 = ()=>{
    const [username, setUsername] = (0, $d4J5n.useState)("");
    const [password, setPassword] = (0, $d4J5n.useState)("");
    const [email, setEmail] = (0, $d4J5n.useState)("");
    const [birthday, setBirthday] = (0, $d4J5n.useState)("");
    const handleSubmit = (event)=>{
        event.preventDefault();
        const data = {
            Username: username,
            Password: password,
            Email: email,
            Birthday: birthday
        };
        fetch("https://my-movies-flix-db-60666e043a4b.herokuapp.com/users", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then((response)=>{
            if (response.ok) {
                alert("Signup successful");
                window.location.reload();
            } else alert("Signup failed");
        });
    };
    return /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsxs)((0, $500f6b476db973c5$export$2e2bcd8739ae039), {
        onSubmit: handleSubmit,
        children: [
            /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsxs)((0, $500f6b476db973c5$export$2e2bcd8739ae039).Group, {
                controlId: "signUpFormUsername",
                children: [
                    /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $500f6b476db973c5$export$2e2bcd8739ae039).Label, {
                        children: "Username:"
                    }),
                    /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $500f6b476db973c5$export$2e2bcd8739ae039).Control, {
                        type: "text",
                        value: username,
                        onChange: (e)=>setUsername(e.target.value),
                        required: true,
                        minLength: "3",
                        className: "mb-4"
                    })
                ]
            }),
            /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsxs)((0, $500f6b476db973c5$export$2e2bcd8739ae039).Group, {
                controlId: "signUpFormPassword",
                children: [
                    /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $500f6b476db973c5$export$2e2bcd8739ae039).Label, {
                        children: "Password:"
                    }),
                    /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $500f6b476db973c5$export$2e2bcd8739ae039).Control, {
                        type: "password",
                        value: password,
                        onChange: (e)=>setPassword(e.target.value),
                        required: true,
                        className: "mb-4"
                    })
                ]
            }),
            /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsxs)((0, $500f6b476db973c5$export$2e2bcd8739ae039).Group, {
                controlId: "signUpFormEmail",
                children: [
                    /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $500f6b476db973c5$export$2e2bcd8739ae039).Label, {
                        children: "Email:"
                    }),
                    /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $500f6b476db973c5$export$2e2bcd8739ae039).Control, {
                        type: "email",
                        value: email,
                        onChange: (e)=>setEmail(e.target.value),
                        required: true,
                        className: "mb-4"
                    })
                ]
            }),
            /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsxs)((0, $500f6b476db973c5$export$2e2bcd8739ae039).Group, {
                controlId: "signUpFormBirthday",
                children: [
                    /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $500f6b476db973c5$export$2e2bcd8739ae039).Label, {
                        children: "Birthday:"
                    }),
                    /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $500f6b476db973c5$export$2e2bcd8739ae039).Control, {
                        type: "date",
                        value: birthday,
                        onChange: (e)=>setBirthday(e.target.value),
                        required: true,
                        className: "mb-4"
                    })
                ]
            }),
            /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $28f73d2964a5e7b1$export$2e2bcd8739ae039), {
                variant: "primary",
                type: "submit",
                children: "Sign up"
            })
        ]
    });
};





var $d4J5n = parcelRequire("d4J5n");


"use client";
const $361ced934de455a9$var$Row = /*#__PURE__*/ $d4J5n.forwardRef(({ bsPrefix: bsPrefix, className: className, // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
as: Component = "div", ...props }, ref)=>{
    const decoratedBsPrefix = (0, $d2965fbad540669a$export$7f387860ebffb32c)(bsPrefix, "row");
    const breakpoints = (0, $d2965fbad540669a$export$8970c8db816a5863)();
    const minBreakpoint = (0, $d2965fbad540669a$export$d926d6ef38f3fd32)();
    const sizePrefix = `${decoratedBsPrefix}-cols`;
    const classes = [];
    breakpoints.forEach((brkPoint)=>{
        const propValue = props[brkPoint];
        delete props[brkPoint];
        let cols;
        if (propValue != null && typeof propValue === "object") ({ cols: cols } = propValue);
        else cols = propValue;
        const infix = brkPoint !== minBreakpoint ? `-${brkPoint}` : "";
        if (cols != null) classes.push(`${sizePrefix}${infix}-${cols}`);
    });
    return /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)(Component, {
        ref: ref,
        ...props,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($4f96bb9b3141308a$exports)))(className, decoratedBsPrefix, ...classes)
    });
});
$361ced934de455a9$var$Row.displayName = "Row";
var $361ced934de455a9$export$2e2bcd8739ae039 = $361ced934de455a9$var$Row;







var $d4J5n = parcelRequire("d4J5n");


"use client";
const $c2086d5149465e07$var$Container = /*#__PURE__*/ $d4J5n.forwardRef(({ bsPrefix: bsPrefix, fluid: fluid = false, // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
as: Component = "div", className: className, ...props }, ref)=>{
    const prefix = (0, $d2965fbad540669a$export$7f387860ebffb32c)(bsPrefix, "container");
    const suffix = typeof fluid === "string" ? `-${fluid}` : "-fluid";
    return /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)(Component, {
        ref: ref,
        ...props,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($4f96bb9b3141308a$exports)))(className, fluid ? `${prefix}${suffix}` : prefix)
    });
});
$c2086d5149465e07$var$Container.displayName = "Container";
var $c2086d5149465e07$export$2e2bcd8739ae039 = $c2086d5149465e07$var$Container;


var $c0251050dc2d5b4d$exports = {};
"use strict";
Object.defineProperty($c0251050dc2d5b4d$exports, "__esModule", {
    value: true
});
$c0251050dc2d5b4d$exports.default = $c0251050dc2d5b4d$var$all;
var $47900377b049c398$exports = {};
"use strict";
Object.defineProperty($47900377b049c398$exports, "__esModule", {
    value: true
});
$47900377b049c398$exports.default = $47900377b049c398$var$createChainableTypeChecker;
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */ // Mostly taken from ReactPropTypes.
function $47900377b049c398$var$createChainableTypeChecker(validate) {
    function checkType(isRequired, props, propName, componentName, location, propFullName) {
        var componentNameSafe = componentName || "<<anonymous>>";
        var propFullNameSafe = propFullName || propName;
        if (props[propName] == null) {
            if (isRequired) return new Error("Required " + location + " `" + propFullNameSafe + "` was not specified " + ("in `" + componentNameSafe + "`."));
            return null;
        }
        for(var _len = arguments.length, args = Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++)args[_key - 6] = arguments[_key];
        return validate.apply(undefined, [
            props,
            propName,
            componentNameSafe,
            location,
            propFullNameSafe
        ].concat(args));
    }
    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);
    return chainedCheckType;
}
$47900377b049c398$exports = $47900377b049c398$exports["default"];


var $c0251050dc2d5b4d$var$_createChainableTypeChecker2 = $c0251050dc2d5b4d$var$_interopRequireDefault($47900377b049c398$exports);
function $c0251050dc2d5b4d$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function $c0251050dc2d5b4d$var$all() {
    for(var _len = arguments.length, validators = Array(_len), _key = 0; _key < _len; _key++)validators[_key] = arguments[_key];
    function allPropTypes() {
        for(var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++)args[_key2] = arguments[_key2];
        var error = null;
        validators.forEach(function(validator) {
            if (error != null) return;
            var result = validator.apply(undefined, args);
            if (result != null) error = result;
        });
        return error;
    }
    return (0, $c0251050dc2d5b4d$var$_createChainableTypeChecker2.default)(allPropTypes);
}
$c0251050dc2d5b4d$exports = $c0251050dc2d5b4d$exports["default"];



var $d4J5n = parcelRequire("d4J5n");
function $19121be03c962dba$export$2e2bcd8739ae039() {
    $19121be03c962dba$export$2e2bcd8739ae039 = Object.assign ? Object.assign.bind() : function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return $19121be03c962dba$export$2e2bcd8739ae039.apply(this, arguments);
}


function $746383c9ca16b298$export$2e2bcd8739ae039(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}



var $d4J5n = parcelRequire("d4J5n");
var $ad35e18c35d5e0a9$exports = {};
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */ var $ad35e18c35d5e0a9$var$invariant = function(condition, format, a, b, c, d, e, f) {
    if (!condition) {
        var error;
        if (format === undefined) error = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
        else {
            var args = [
                a,
                b,
                c,
                d,
                e,
                f
            ];
            var argIndex = 0;
            error = new Error(format.replace(/%s/g, function() {
                return args[argIndex++];
            }));
            error.name = "Invariant Violation";
        }
        error.framesToPop = 1; // we don't care about invariant's own frame
        throw error;
    }
};
$ad35e18c35d5e0a9$exports = $ad35e18c35d5e0a9$var$invariant;


var $0cb63d0f59d1eeae$var$noop = function noop() {};
function $0cb63d0f59d1eeae$var$readOnlyPropType(handler, name) {
    return function(props, propName) {
        if (props[propName] !== undefined) {
            if (!props[handler]) return new Error("You have provided a `" + propName + "` prop to `" + name + "` " + ("without an `" + handler + "` handler prop. This will render a read-only field. ") + ("If the field should be mutable use `" + $0cb63d0f59d1eeae$export$26cbf8c37e721e67(propName) + "`. ") + ("Otherwise, set `" + handler + "`."));
        }
    };
}
function $0cb63d0f59d1eeae$export$8abd944bed26e726(controlledValues, displayName) {
    var propTypes = {};
    Object.keys(controlledValues).forEach(function(prop) {
        // add default propTypes for folks that use runtime checks
        propTypes[$0cb63d0f59d1eeae$export$26cbf8c37e721e67(prop)] = $0cb63d0f59d1eeae$var$noop;
        var handler;
    });
    return propTypes;
}
function $0cb63d0f59d1eeae$export$12ae2baa35bd9b8b(props, prop) {
    return props[prop] !== undefined;
}
function $0cb63d0f59d1eeae$export$26cbf8c37e721e67(key) {
    return "default" + key.charAt(0).toUpperCase() + key.substr(1);
}
function $0cb63d0f59d1eeae$export$95e5b18573b29087(component) {
    return !!component && (typeof component !== "function" || component.prototype && component.prototype.isReactComponent);
}


function $cc3cb09e031e9c82$var$_toPropertyKey(arg) {
    var key = $cc3cb09e031e9c82$var$_toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
}
function $cc3cb09e031e9c82$var$_toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (typeof res !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
function $cc3cb09e031e9c82$export$2ee51287a16ca325(propValue, defaultValue, handler) {
    var wasPropRef = (0, $d4J5n.useRef)(propValue !== undefined);
    var _useState = (0, $d4J5n.useState)(defaultValue), stateValue = _useState[0], setState = _useState[1];
    var isProp = propValue !== undefined;
    var wasProp = wasPropRef.current;
    wasPropRef.current = isProp;
    /**
   * If a prop switches from controlled to Uncontrolled
   * reset its value to the defaultValue
   */ if (!isProp && wasProp && stateValue !== defaultValue) setState(defaultValue);
    return [
        isProp ? propValue : stateValue,
        (0, $d4J5n.useCallback)(function(value) {
            for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)args[_key - 1] = arguments[_key];
            if (handler) handler.apply(void 0, [
                value
            ].concat(args));
            setState(value);
        }, [
            handler
        ])
    ];
}
function $cc3cb09e031e9c82$export$2e2bcd8739ae039(props, config) {
    return Object.keys(config).reduce(function(result, fieldName) {
        var _extends2;
        var _ref = result, defaultValue = _ref[$0cb63d0f59d1eeae$export$26cbf8c37e721e67(fieldName)], propsValue = _ref[fieldName], rest = (0, $746383c9ca16b298$export$2e2bcd8739ae039)(_ref, [
            $0cb63d0f59d1eeae$export$26cbf8c37e721e67(fieldName),
            fieldName
        ].map($cc3cb09e031e9c82$var$_toPropertyKey));
        var handlerName = config[fieldName];
        var _useUncontrolledProp = $cc3cb09e031e9c82$export$2ee51287a16ca325(propsValue, defaultValue, props[handlerName]), value = _useUncontrolledProp[0], handler = _useUncontrolledProp[1];
        return (0, $19121be03c962dba$export$2e2bcd8739ae039)({}, rest, (_extends2 = {}, _extends2[fieldName] = value, _extends2[handlerName] = handler, _extends2));
    }, props);
}




function $5ec05790c66d983c$export$2e2bcd8739ae039(o, p) {
    $5ec05790c66d983c$export$2e2bcd8739ae039 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return $5ec05790c66d983c$export$2e2bcd8739ae039(o, p);
}


function $b23bf179b32f510c$export$2e2bcd8739ae039(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    (0, $5ec05790c66d983c$export$2e2bcd8739ae039)(subClass, superClass);
}



var $d4J5n = parcelRequire("d4J5n");
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function $237980aaa4fab6f1$var$componentWillMount() {
    // Call this.constructor.gDSFP to support sub-classes.
    var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
    if (state !== null && state !== undefined) this.setState(state);
}
function $237980aaa4fab6f1$var$componentWillReceiveProps(nextProps) {
    // Call this.constructor.gDSFP to support sub-classes.
    // Use the setState() updater to ensure state isn't stale in certain edge cases.
    function updater(prevState) {
        var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
        return state !== null && state !== undefined ? state : null;
    }
    // Binding "this" is important for shallow renderer support.
    this.setState(updater.bind(this));
}
function $237980aaa4fab6f1$var$componentWillUpdate(nextProps, nextState) {
    try {
        var prevProps = this.props;
        var prevState = this.state;
        this.props = nextProps;
        this.state = nextState;
        this.__reactInternalSnapshotFlag = true;
        this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(prevProps, prevState);
    } finally{
        this.props = prevProps;
        this.state = prevState;
    }
}
// React may warn about cWM/cWRP/cWU methods being deprecated.
// Add a flag to suppress these warnings for this special case.
$237980aaa4fab6f1$var$componentWillMount.__suppressDeprecationWarning = true;
$237980aaa4fab6f1$var$componentWillReceiveProps.__suppressDeprecationWarning = true;
$237980aaa4fab6f1$var$componentWillUpdate.__suppressDeprecationWarning = true;
function $237980aaa4fab6f1$export$cea1c58a6db52bca(Component) {
    var prototype = Component.prototype;
    if (!prototype || !prototype.isReactComponent) throw new Error("Can only polyfill class components");
    if (typeof Component.getDerivedStateFromProps !== "function" && typeof prototype.getSnapshotBeforeUpdate !== "function") return Component;
    // If new component APIs are defined, "unsafe" lifecycles won't be called.
    // Error if any of these lifecycles are present,
    // Because they would work differently between older and newer (16.3+) versions of React.
    var foundWillMountName = null;
    var foundWillReceivePropsName = null;
    var foundWillUpdateName = null;
    if (typeof prototype.componentWillMount === "function") foundWillMountName = "componentWillMount";
    else if (typeof prototype.UNSAFE_componentWillMount === "function") foundWillMountName = "UNSAFE_componentWillMount";
    if (typeof prototype.componentWillReceiveProps === "function") foundWillReceivePropsName = "componentWillReceiveProps";
    else if (typeof prototype.UNSAFE_componentWillReceiveProps === "function") foundWillReceivePropsName = "UNSAFE_componentWillReceiveProps";
    if (typeof prototype.componentWillUpdate === "function") foundWillUpdateName = "componentWillUpdate";
    else if (typeof prototype.UNSAFE_componentWillUpdate === "function") foundWillUpdateName = "UNSAFE_componentWillUpdate";
    if (foundWillMountName !== null || foundWillReceivePropsName !== null || foundWillUpdateName !== null) {
        var componentName = Component.displayName || Component.name;
        var newApiName = typeof Component.getDerivedStateFromProps === "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
        throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n" + componentName + " uses " + newApiName + " but also contains the following legacy lifecycles:" + (foundWillMountName !== null ? "\n  " + foundWillMountName : "") + (foundWillReceivePropsName !== null ? "\n  " + foundWillReceivePropsName : "") + (foundWillUpdateName !== null ? "\n  " + foundWillUpdateName : "") + "\n\nThe above lifecycles should be removed. Learn more about this warning here:\n" + "https://fb.me/react-async-component-lifecycle-hooks");
    }
    // React <= 16.2 does not support static getDerivedStateFromProps.
    // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
    // Newer versions of React will ignore these lifecycles if gDSFP exists.
    if (typeof Component.getDerivedStateFromProps === "function") {
        prototype.componentWillMount = $237980aaa4fab6f1$var$componentWillMount;
        prototype.componentWillReceiveProps = $237980aaa4fab6f1$var$componentWillReceiveProps;
    }
    // React <= 16.2 does not support getSnapshotBeforeUpdate.
    // As a workaround, use cWU to invoke the new lifecycle.
    // Newer versions of React will ignore that lifecycle if gSBU exists.
    if (typeof prototype.getSnapshotBeforeUpdate === "function") {
        if (typeof prototype.componentDidUpdate !== "function") throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");
        prototype.componentWillUpdate = $237980aaa4fab6f1$var$componentWillUpdate;
        var componentDidUpdate = prototype.componentDidUpdate;
        prototype.componentDidUpdate = function componentDidUpdatePolyfill(prevProps, prevState, maybeSnapshot) {
            // 16.3+ will not execute our will-update method;
            // It will pass a snapshot value to did-update though.
            // Older versions will require our polyfilled will-update value.
            // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
            // Because for <= 15.x versions this might be a "prevContext" object.
            // We also can't just check "__reactInternalSnapshot",
            // Because get-snapshot might return a falsy value.
            // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
            var snapshot = this.__reactInternalSnapshotFlag ? this.__reactInternalSnapshot : maybeSnapshot;
            componentDidUpdate.call(this, prevProps, prevState, snapshot);
        };
    }
    return Component;
}




var $1eb5e44443cd27f3$var$_jsxFileName = "/Users/jquense/src/uncontrollable/src/uncontrollable.js";
function $1eb5e44443cd27f3$export$2e2bcd8739ae039(Component, controlledValues, methods) {
    if (methods === void 0) methods = [];
    var displayName = Component.displayName || Component.name || "Component";
    var canAcceptRef = $0cb63d0f59d1eeae$export$95e5b18573b29087(Component);
    var controlledProps = Object.keys(controlledValues);
    var PROPS_TO_OMIT = controlledProps.map($0cb63d0f59d1eeae$export$26cbf8c37e721e67);
    !(canAcceptRef || !methods.length) && (0, (/*@__PURE__*/$parcel$interopDefault($ad35e18c35d5e0a9$exports)))(false);
    var UncontrolledComponent = /*#__PURE__*/ function(_React$Component) {
        (0, $b23bf179b32f510c$export$2e2bcd8739ae039)(UncontrolledComponent, _React$Component);
        function UncontrolledComponent() {
            var _this;
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
            _this = _React$Component.call.apply(_React$Component, [
                this
            ].concat(args)) || this;
            _this.handlers = Object.create(null);
            controlledProps.forEach(function(propName) {
                var handlerName = controlledValues[propName];
                var handleChange = function handleChange(value) {
                    if (_this.props[handlerName]) {
                        var _this$props;
                        _this._notifying = true;
                        for(var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++)args[_key2 - 1] = arguments[_key2];
                        (_this$props = _this.props)[handlerName].apply(_this$props, [
                            value
                        ].concat(args));
                        _this._notifying = false;
                    }
                    if (!_this.unmounted) _this.setState(function(_ref) {
                        var _extends2;
                        var values = _ref.values;
                        return {
                            values: (0, $19121be03c962dba$export$2e2bcd8739ae039)(Object.create(null), values, (_extends2 = {}, _extends2[propName] = value, _extends2))
                        };
                    });
                };
                _this.handlers[handlerName] = handleChange;
            });
            if (methods.length) _this.attachRef = function(ref) {
                _this.inner = ref;
            };
            var values = Object.create(null);
            controlledProps.forEach(function(key) {
                values[key] = _this.props[$0cb63d0f59d1eeae$export$26cbf8c37e721e67(key)];
            });
            _this.state = {
                values: values,
                prevProps: {}
            };
            return _this;
        }
        var _proto = UncontrolledComponent.prototype;
        _proto.shouldComponentUpdate = function shouldComponentUpdate() {
            //let setState trigger the update
            return !this._notifying;
        };
        UncontrolledComponent.getDerivedStateFromProps = function getDerivedStateFromProps(props, _ref2) {
            var values = _ref2.values, prevProps = _ref2.prevProps;
            var nextState = {
                values: (0, $19121be03c962dba$export$2e2bcd8739ae039)(Object.create(null), values),
                prevProps: {}
            };
            controlledProps.forEach(function(key) {
                /**
         * If a prop switches from controlled to Uncontrolled
         * reset its value to the defaultValue
         */ nextState.prevProps[key] = props[key];
                if (!$0cb63d0f59d1eeae$export$12ae2baa35bd9b8b(props, key) && $0cb63d0f59d1eeae$export$12ae2baa35bd9b8b(prevProps, key)) nextState.values[key] = props[$0cb63d0f59d1eeae$export$26cbf8c37e721e67(key)];
            });
            return nextState;
        };
        _proto.componentWillUnmount = function componentWillUnmount() {
            this.unmounted = true;
        };
        _proto.render = function render() {
            var _this2 = this;
            var _this$props2 = this.props, innerRef = _this$props2.innerRef, props = (0, $746383c9ca16b298$export$2e2bcd8739ae039)(_this$props2, [
                "innerRef"
            ]);
            PROPS_TO_OMIT.forEach(function(prop) {
                delete props[prop];
            });
            var newProps = {};
            controlledProps.forEach(function(propName) {
                var propValue = _this2.props[propName];
                newProps[propName] = propValue !== undefined ? propValue : _this2.state.values[propName];
            });
            return (0, (/*@__PURE__*/$parcel$interopDefault($d4J5n))).createElement(Component, (0, $19121be03c962dba$export$2e2bcd8739ae039)({}, props, newProps, this.handlers, {
                ref: innerRef || this.attachRef
            }));
        };
        return UncontrolledComponent;
    }((0, (/*@__PURE__*/$parcel$interopDefault($d4J5n))).Component);
    (0, $237980aaa4fab6f1$export$cea1c58a6db52bca)(UncontrolledComponent);
    UncontrolledComponent.displayName = "Uncontrolled(" + displayName + ")";
    UncontrolledComponent.propTypes = (0, $19121be03c962dba$export$2e2bcd8739ae039)({
        innerRef: function innerRef() {}
    }, $0cb63d0f59d1eeae$export$8abd944bed26e726(controlledValues, displayName));
    methods.forEach(function(method) {
        UncontrolledComponent.prototype[method] = function $proxiedMethod() {
            var _this$inner;
            return (_this$inner = this.inner)[method].apply(_this$inner, arguments);
        };
    });
    var WrappedComponent = UncontrolledComponent;
    if ((0, (/*@__PURE__*/$parcel$interopDefault($d4J5n))).forwardRef) {
        WrappedComponent = (0, (/*@__PURE__*/$parcel$interopDefault($d4J5n))).forwardRef(function(props, ref) {
            return (0, (/*@__PURE__*/$parcel$interopDefault($d4J5n))).createElement(UncontrolledComponent, (0, $19121be03c962dba$export$2e2bcd8739ae039)({}, props, {
                innerRef: ref,
                __source: {
                    fileName: $1eb5e44443cd27f3$var$_jsxFileName,
                    lineNumber: 128
                },
                __self: this
            }));
        });
        WrappedComponent.propTypes = UncontrolledComponent.propTypes;
    }
    WrappedComponent.ControlledComponent = Component;
    /**
   * useful when wrapping a Component and you want to control
   * everything
   */ WrappedComponent.deferControlTo = function(newComponent, additions, nextMethods) {
        if (additions === void 0) additions = {};
        return $1eb5e44443cd27f3$export$2e2bcd8739ae039(newComponent, (0, $19121be03c962dba$export$2e2bcd8739ae039)({}, controlledValues, additions), nextMethods);
    };
    return WrappedComponent;
}




var $7c9dd8f4e017282f$var$toArray = Function.prototype.bind.call(Function.prototype.call, [].slice);
function $7c9dd8f4e017282f$export$2e2bcd8739ae039(element, selector) {
    return $7c9dd8f4e017282f$var$toArray(element.querySelectorAll(selector));
}



var $d4J5n = parcelRequire("d4J5n");

var $d4J5n = parcelRequire("d4J5n");
function $0745efd091dd71ba$export$2e2bcd8739ae039() {
    // The toggling state value is designed to defeat React optimizations for skipping
    // updates when they are strictly equal to the last state value
    const [, dispatch] = (0, $d4J5n.useReducer)((state)=>!state, false);
    return dispatch;
}



var $d4J5n = parcelRequire("d4J5n");
const $a9894662a4aebec5$var$toFnRef = (ref)=>!ref || typeof ref === "function" ? ref : (value)=>{
        ref.current = value;
    };
function $a9894662a4aebec5$export$c9058316764c140e(refA, refB) {
    const a = $a9894662a4aebec5$var$toFnRef(refA);
    const b = $a9894662a4aebec5$var$toFnRef(refB);
    return (value)=>{
        if (a) a(value);
        if (b) b(value);
    };
}
/**
 * Create and returns a single callback ref composed from two other Refs.
 *
 * ```tsx
 * const Button = React.forwardRef((props, ref) => {
 *   const [element, attachRef] = useCallbackRef<HTMLButtonElement>();
 *   const mergedRef = useMergedRefs(ref, attachRef);
 *
 *   return <button ref={mergedRef} {...props}/>
 * })
 * ```
 *
 * @param refA A Callback or mutable Ref
 * @param refB A Callback or mutable Ref
 * @category refs
 */ function $a9894662a4aebec5$var$useMergedRefs(refA, refB) {
    return (0, $d4J5n.useMemo)(()=>$a9894662a4aebec5$export$c9058316764c140e(refA, refB), [
        refA,
        refB
    ]);
}
var $a9894662a4aebec5$export$2e2bcd8739ae039 = $a9894662a4aebec5$var$useMergedRefs;



var $d4J5n = parcelRequire("d4J5n");
const $7ce1868aac440b26$var$NavContext = /*#__PURE__*/ $d4J5n.createContext(null);
$7ce1868aac440b26$var$NavContext.displayName = "NavContext";
var $7ce1868aac440b26$export$2e2bcd8739ae039 = $7ce1868aac440b26$var$NavContext;



var $d4J5n = parcelRequire("d4J5n");
const $fea965168a445b6e$var$SelectableContext = /*#__PURE__*/ $d4J5n.createContext(null);
const $fea965168a445b6e$export$eef49b42fde998a3 = (eventKey, href = null)=>{
    if (eventKey != null) return String(eventKey);
    return href || null;
};
var $fea965168a445b6e$export$2e2bcd8739ae039 = $fea965168a445b6e$var$SelectableContext;



var $d4J5n = parcelRequire("d4J5n");
const $06495c87746c2c26$var$TabContext = /*#__PURE__*/ $d4J5n.createContext(null);
var $06495c87746c2c26$export$2e2bcd8739ae039 = $06495c87746c2c26$var$TabContext;


const $c70750af2cc7912b$export$fd7bcb7e9bef4e8a = `data-rr-ui-`;
const $c70750af2cc7912b$export$635202801f9383a0 = `rrUi`;
function $c70750af2cc7912b$export$5cc3b7b83e34ade7(property) {
    return `${$c70750af2cc7912b$export$fd7bcb7e9bef4e8a}${property}`;
}
function $c70750af2cc7912b$export$7776c0a7cd2eb3e0(property) {
    return `${$c70750af2cc7912b$export$635202801f9383a0}${property}`;
}



var $d4J5n = parcelRequire("d4J5n");

var $d4J5n = parcelRequire("d4J5n");

var $d4J5n = parcelRequire("d4J5n");
/**
 * Creates a `Ref` whose value is updated in an effect, ensuring the most recent
 * value is the one rendered with. Generally only required for Concurrent mode usage
 * where previous work in `render()` may be discarded before being used.
 *
 * This is safe to access in an event handler.
 *
 * @param value The `Ref` value
 */ function $6b2b8cca0659d383$var$useCommittedRef(value) {
    const ref = (0, $d4J5n.useRef)(value);
    (0, $d4J5n.useEffect)(()=>{
        ref.current = value;
    }, [
        value
    ]);
    return ref;
}
var $6b2b8cca0659d383$export$2e2bcd8739ae039 = $6b2b8cca0659d383$var$useCommittedRef;


function $68afd5c9279b438e$export$2e2bcd8739ae039(fn) {
    const ref = (0, $6b2b8cca0659d383$export$2e2bcd8739ae039)(fn);
    return (0, $d4J5n.useCallback)(function(...args) {
        return ref.current && ref.current(...args);
    }, [
        ref
    ]);
}








const $37721f51549418b4$var$_excluded = [
    "as",
    "active",
    "eventKey"
];
function $37721f51549418b4$var$_objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function $37721f51549418b4$export$d7a68693710982a({ key: key, onClick: onClick, active: active, id: id, role: role, disabled: disabled }) {
    const parentOnSelect = (0, $d4J5n.useContext)((0, $fea965168a445b6e$export$2e2bcd8739ae039));
    const navContext = (0, $d4J5n.useContext)((0, $7ce1868aac440b26$export$2e2bcd8739ae039));
    const tabContext = (0, $d4J5n.useContext)((0, $06495c87746c2c26$export$2e2bcd8739ae039));
    let isActive = active;
    const props = {
        role: role
    };
    if (navContext) {
        if (!role && navContext.role === "tablist") props.role = "tab";
        const contextControllerId = navContext.getControllerId(key != null ? key : null);
        const contextControlledId = navContext.getControlledId(key != null ? key : null);
        // @ts-ignore
        props[(0, $c70750af2cc7912b$export$5cc3b7b83e34ade7)("event-key")] = key;
        props.id = contextControllerId || id;
        isActive = active == null && key != null ? navContext.activeKey === key : active;
        /**
     * Simplified scenario for `mountOnEnter`.
     *
     * While it would make sense to keep 'aria-controls' for tabs that have been mounted at least
     * once, it would also complicate the code quite a bit, for very little gain.
     * The following implementation is probably good enough.
     *
     * @see https://github.com/react-restart/ui/pull/40#issuecomment-1009971561
     */ if (isActive || !(tabContext != null && tabContext.unmountOnExit) && !(tabContext != null && tabContext.mountOnEnter)) props["aria-controls"] = contextControlledId;
    }
    if (props.role === "tab") {
        props["aria-selected"] = isActive;
        if (!isActive) props.tabIndex = -1;
        if (disabled) {
            props.tabIndex = -1;
            props["aria-disabled"] = true;
        }
    }
    props.onClick = (0, $68afd5c9279b438e$export$2e2bcd8739ae039)((e)=>{
        if (disabled) return;
        onClick == null || onClick(e);
        if (key == null) return;
        if (parentOnSelect && !e.isPropagationStopped()) parentOnSelect(key, e);
    });
    return [
        props,
        {
            isActive: isActive
        }
    ];
}
const $37721f51549418b4$var$NavItem = /*#__PURE__*/ $d4J5n.forwardRef((_ref, ref)=>{
    let { as: Component = (0, $94324ba0fffd0f98$export$2e2bcd8739ae039), active: active, eventKey: eventKey } = _ref, options = $37721f51549418b4$var$_objectWithoutPropertiesLoose(_ref, $37721f51549418b4$var$_excluded);
    const [props, meta] = $37721f51549418b4$export$d7a68693710982a(Object.assign({
        key: (0, $fea965168a445b6e$export$eef49b42fde998a3)(eventKey, options.href),
        active: active
    }, options));
    // @ts-ignore
    props[(0, $c70750af2cc7912b$export$5cc3b7b83e34ade7)("active")] = meta.isActive;
    return /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)(Component, Object.assign({}, options, props, {
        ref: ref
    }));
});
$37721f51549418b4$var$NavItem.displayName = "NavItem";
var $37721f51549418b4$export$2e2bcd8739ae039 = $37721f51549418b4$var$NavItem;



const $4d67c7f712fbf24e$var$_excluded = [
    "as",
    "onSelect",
    "activeKey",
    "role",
    "onKeyDown"
];
function $4d67c7f712fbf24e$var$_objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
// eslint-disable-next-line @typescript-eslint/no-empty-function
const $4d67c7f712fbf24e$var$noop = ()=>{};
const $4d67c7f712fbf24e$var$EVENT_KEY_ATTR = (0, $c70750af2cc7912b$export$5cc3b7b83e34ade7)("event-key");
const $4d67c7f712fbf24e$var$Nav = /*#__PURE__*/ $d4J5n.forwardRef((_ref, ref)=>{
    let { // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: Component = "div", onSelect: onSelect, activeKey: activeKey, role: role, onKeyDown: onKeyDown } = _ref, props = $4d67c7f712fbf24e$var$_objectWithoutPropertiesLoose(_ref, $4d67c7f712fbf24e$var$_excluded);
    // A ref and forceUpdate for refocus, b/c we only want to trigger when needed
    // and don't want to reset the set in the effect
    const forceUpdate = (0, $0745efd091dd71ba$export$2e2bcd8739ae039)();
    const needsRefocusRef = (0, $d4J5n.useRef)(false);
    const parentOnSelect = (0, $d4J5n.useContext)((0, $fea965168a445b6e$export$2e2bcd8739ae039));
    const tabContext = (0, $d4J5n.useContext)((0, $06495c87746c2c26$export$2e2bcd8739ae039));
    let getControlledId, getControllerId;
    if (tabContext) {
        role = role || "tablist";
        activeKey = tabContext.activeKey;
        // TODO: do we need to duplicate these?
        getControlledId = tabContext.getControlledId;
        getControllerId = tabContext.getControllerId;
    }
    const listNode = (0, $d4J5n.useRef)(null);
    const getNextActiveTab = (offset)=>{
        const currentListNode = listNode.current;
        if (!currentListNode) return null;
        const items = (0, $7c9dd8f4e017282f$export$2e2bcd8739ae039)(currentListNode, `[${$4d67c7f712fbf24e$var$EVENT_KEY_ATTR}]:not([aria-disabled=true])`);
        const activeChild = currentListNode.querySelector("[aria-selected=true]");
        if (!activeChild || activeChild !== document.activeElement) return null;
        const index = items.indexOf(activeChild);
        if (index === -1) return null;
        let nextIndex = index + offset;
        if (nextIndex >= items.length) nextIndex = 0;
        if (nextIndex < 0) nextIndex = items.length - 1;
        return items[nextIndex];
    };
    const handleSelect = (key, event)=>{
        if (key == null) return;
        onSelect == null || onSelect(key, event);
        parentOnSelect == null || parentOnSelect(key, event);
    };
    const handleKeyDown = (event)=>{
        onKeyDown == null || onKeyDown(event);
        if (!tabContext) return;
        let nextActiveChild;
        switch(event.key){
            case "ArrowLeft":
            case "ArrowUp":
                nextActiveChild = getNextActiveTab(-1);
                break;
            case "ArrowRight":
            case "ArrowDown":
                nextActiveChild = getNextActiveTab(1);
                break;
            default:
                return;
        }
        if (!nextActiveChild) return;
        event.preventDefault();
        handleSelect(nextActiveChild.dataset[(0, $c70750af2cc7912b$export$7776c0a7cd2eb3e0)("EventKey")] || null, event);
        needsRefocusRef.current = true;
        forceUpdate();
    };
    (0, $d4J5n.useEffect)(()=>{
        if (listNode.current && needsRefocusRef.current) {
            const activeChild = listNode.current.querySelector(`[${$4d67c7f712fbf24e$var$EVENT_KEY_ATTR}][aria-selected=true]`);
            activeChild == null || activeChild.focus();
        }
        needsRefocusRef.current = false;
    });
    const mergedRef = (0, $a9894662a4aebec5$export$2e2bcd8739ae039)(ref, listNode);
    return /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $fea965168a445b6e$export$2e2bcd8739ae039).Provider, {
        value: handleSelect,
        children: /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $7ce1868aac440b26$export$2e2bcd8739ae039).Provider, {
            value: {
                role: role,
                // used by NavLink to determine it's role
                activeKey: (0, $fea965168a445b6e$export$eef49b42fde998a3)(activeKey),
                getControlledId: getControlledId || $4d67c7f712fbf24e$var$noop,
                getControllerId: getControllerId || $4d67c7f712fbf24e$var$noop
            },
            children: /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)(Component, Object.assign({}, props, {
                onKeyDown: handleKeyDown,
                ref: mergedRef,
                role: role
            }))
        })
    });
});
$4d67c7f712fbf24e$var$Nav.displayName = "Nav";
var $4d67c7f712fbf24e$export$2e2bcd8739ae039 = Object.assign($4d67c7f712fbf24e$var$Nav, {
    Item: (0, $37721f51549418b4$export$2e2bcd8739ae039)
});




var $d4J5n = parcelRequire("d4J5n");
"use client";
// TODO: check
const $9bbbbca1aebd7b07$var$context = /*#__PURE__*/ $d4J5n.createContext(null);
$9bbbbca1aebd7b07$var$context.displayName = "NavbarContext";
var $9bbbbca1aebd7b07$export$2e2bcd8739ae039 = $9bbbbca1aebd7b07$var$context;




var $d4J5n = parcelRequire("d4J5n");



"use client";
const $64a09de64588ec7a$var$NavItem = /*#__PURE__*/ $d4J5n.forwardRef(({ className: className, bsPrefix: bsPrefix, as: Component = "div", ...props }, ref)=>{
    bsPrefix = (0, $d2965fbad540669a$export$7f387860ebffb32c)(bsPrefix, "nav-item");
    return /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)(Component, {
        ref: ref,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($4f96bb9b3141308a$exports)))(className, bsPrefix),
        ...props
    });
});
$64a09de64588ec7a$var$NavItem.displayName = "NavItem";
var $64a09de64588ec7a$export$2e2bcd8739ae039 = $64a09de64588ec7a$var$NavItem;




var $d4J5n = parcelRequire("d4J5n");

var $d4J5n = parcelRequire("d4J5n");

var $d4J5n = parcelRequire("d4J5n");
function $34a1e439cec2030f$export$2e2bcd8739ae039() {
    return (0, $d4J5n.useState)(null);
}





var $d4J5n = parcelRequire("d4J5n");

function $1d1c5570f40fecd6$export$2e2bcd8739ae039(eventTarget, event, listener, capture = false) {
    const handler = (0, $68afd5c9279b438e$export$2e2bcd8739ae039)(listener);
    (0, $d4J5n.useEffect)(()=>{
        const target = typeof eventTarget === "function" ? eventTarget() : eventTarget;
        target.addEventListener(event, handler, capture);
        return ()=>target.removeEventListener(event, handler, capture);
    }, [
        eventTarget
    ]);
}




var $d4J5n = parcelRequire("d4J5n");
function $2632d8dcb577094f$export$2e2bcd8739ae039(event, handler, capture = false) {
    const documentTarget = (0, $d4J5n.useCallback)(()=>document, []);
    return (0, $1d1c5570f40fecd6$export$2e2bcd8739ae039)(documentTarget, event, handler, capture);
}



var $d4J5n = parcelRequire("d4J5n");

/**
 * Creates a `setInterval` that is properly cleaned up when a component unmounted
 *
 * ```tsx
 *  function Timer() {
 *    const [timer, setTimer] = useState(0)
 *    useInterval(() => setTimer(i => i + 1), 1000)
 *
 *    return <span>{timer} seconds past</span>
 *  }
 * ```
 *
 * @param fn an function run on each interval
 * @param ms The milliseconds duration of the interval
 */ /**
 * Creates a pausable `setInterval` that is properly cleaned up when a component unmounted
 *
 * ```tsx
 *  const [paused, setPaused] = useState(false)
 *  const [timer, setTimer] = useState(0)
 *
 *  useInterval(() => setTimer(i => i + 1), 1000, paused)
 *
 *  return (
 *    <span>
 *      {timer} seconds past
 *
 *      <button onClick={() => setPaused(p => !p)}>{paused ? 'Play' : 'Pause' }</button>
 *    </span>
 * )
 * ```
 *
 * @param fn an function run on each interval
 * @param ms The milliseconds duration of the interval
 * @param paused Whether or not the interval is currently running
 */ /**
 * Creates a pausable `setInterval` that _fires_ immediately and is
 * properly cleaned up when a component unmounted
 *
 * ```tsx
 *  const [timer, setTimer] = useState(-1)
 *  useInterval(() => setTimer(i => i + 1), 1000, false, true)
 *
 *  // will update to 0 on the first effect
 *  return <span>{timer} seconds past</span>
 * ```
 *
 * @param fn an function run on each interval
 * @param ms The milliseconds duration of the interval
 * @param paused Whether or not the interval is currently running
 * @param runImmediately Whether to run the function immediately on mount or unpause
 * rather than waiting for the first interval to elapse
 *

 */ function $5db77f0b79342152$var$useInterval(fn, ms, paused = false, runImmediately = false) {
    let handle;
    const fnRef = (0, $6b2b8cca0659d383$export$2e2bcd8739ae039)(fn);
    // this ref is necessary b/c useEffect will sometimes miss a paused toggle
    // orphaning a setTimeout chain in the aether, so relying on it's refresh logic is not reliable.
    const pausedRef = (0, $6b2b8cca0659d383$export$2e2bcd8739ae039)(paused);
    const tick = ()=>{
        if (pausedRef.current) return;
        fnRef.current();
        schedule(); // eslint-disable-line no-use-before-define
    };
    const schedule = ()=>{
        clearTimeout(handle);
        handle = setTimeout(tick, ms);
    };
    (0, $d4J5n.useEffect)(()=>{
        if (runImmediately) tick();
        else schedule();
        return ()=>clearTimeout(handle);
    }, [
        paused,
        runImmediately
    ]);
}
var $5db77f0b79342152$export$2e2bcd8739ae039 = $5db77f0b79342152$var$useInterval;



var $d4J5n = parcelRequire("d4J5n");

function $c04be2a745d7e6f8$var$useRafInterval(fn, ms, paused = false) {
    let handle;
    let start = new Date().getTime();
    const fnRef = (0, $6b2b8cca0659d383$export$2e2bcd8739ae039)(fn);
    // this ref is necessary b/c useEffect will sometimes miss a paused toggle
    // orphaning a setTimeout chain in the aether, so relying on it's refresh logic is not reliable.
    const pausedRef = (0, $6b2b8cca0659d383$export$2e2bcd8739ae039)(paused);
    function loop() {
        const current = new Date().getTime();
        const delta = current - start;
        if (pausedRef.current) return;
        if (delta >= ms && fnRef.current) {
            fnRef.current();
            start = new Date().getTime();
        }
        cancelAnimationFrame(handle);
        handle = requestAnimationFrame(loop);
    }
    (0, $d4J5n.useEffect)(()=>{
        handle = requestAnimationFrame(loop);
        return ()=>cancelAnimationFrame(handle);
    }, []);
}
var $c04be2a745d7e6f8$export$2e2bcd8739ae039 = $c04be2a745d7e6f8$var$useRafInterval;



var $d4J5n = parcelRequire("d4J5n");
function $30613c7b25c72110$export$2e2bcd8739ae039(initialState) {
    const [state, setState] = (0, $d4J5n.useState)(initialState);
    const updater = (0, $d4J5n.useCallback)((update)=>{
        if (update === null) return;
        if (typeof update === "function") setState((state)=>{
            const nextState = update(state);
            return nextState == null ? state : Object.assign({}, state, nextState);
        });
        else setState((state)=>Object.assign({}, state, update));
    }, [
        setState
    ]);
    return [
        state,
        updater
    ];
}



function $d4f9c92c60590d29$export$2e2bcd8739ae039(props, gDSFP, initialState) {
    const [state, setState] = (0, $30613c7b25c72110$export$2e2bcd8739ae039)(initialState);
    const nextState = gDSFP(props, state);
    if (nextState !== null) setState(nextState);
    return [
        state,
        setState
    ];
}



var $d4J5n = parcelRequire("d4J5n");
function $c1016c3ed292ce8c$export$2e2bcd8739ae039() {
    const mounted = (0, $d4J5n.useRef)(true);
    const isMounted = (0, $d4J5n.useRef)(()=>mounted.current);
    (0, $d4J5n.useEffect)(()=>{
        mounted.current = true;
        return ()=>{
            mounted.current = false;
        };
    }, []);
    return isMounted.current;
}



var $d4J5n = parcelRequire("d4J5n");
function $80bb719e1b4dbca8$export$2e2bcd8739ae039(value) {
    const ref = (0, $d4J5n.useRef)(null);
    (0, $d4J5n.useEffect)(()=>{
        ref.current = value;
    });
    return ref.current;
}



var $d4J5n = parcelRequire("d4J5n");
function $703c3914353dc215$export$2e2bcd8739ae039(imageOrUrl, crossOrigin) {
    const [state, setState] = (0, $d4J5n.useState)({
        image: null,
        error: null
    });
    (0, $d4J5n.useEffect)(()=>{
        if (!imageOrUrl) return undefined;
        let image;
        if (typeof imageOrUrl === "string") {
            image = new Image();
            if (crossOrigin) image.crossOrigin = crossOrigin;
            image.src = imageOrUrl;
        } else {
            image = imageOrUrl;
            if (image.complete && image.naturalHeight > 0) {
                setState({
                    image: image,
                    error: null
                });
                return;
            }
        }
        function onLoad() {
            setState({
                image: image,
                error: null
            });
        }
        function onError(error) {
            setState({
                image: image,
                error: error
            });
        }
        image.addEventListener("load", onLoad);
        image.addEventListener("error", onError);
        return ()=>{
            image.removeEventListener("load", onLoad);
            image.removeEventListener("error", onError);
        };
    }, [
        imageOrUrl,
        crossOrigin
    ]);
    return state;
}



var $d4J5n = parcelRequire("d4J5n");

var $d4J5n = parcelRequire("d4J5n");
const $26361069f244b9de$var$isReactNative = typeof $parcel$global !== "undefined" && // @ts-ignore
$parcel$global.navigator && // @ts-ignore
$parcel$global.navigator.product === "ReactNative";
const $26361069f244b9de$var$isDOM = typeof document !== "undefined";
var /**
 * Is `useLayoutEffect` in a DOM or React Native environment, otherwise resolves to useEffect
 * Only useful to avoid the console warning.
 *
 * PREFER `useEffect` UNLESS YOU KNOW WHAT YOU ARE DOING.
 *
 * @category effects
 */ $26361069f244b9de$export$2e2bcd8739ae039 = $26361069f244b9de$var$isDOM || $26361069f244b9de$var$isReactNative ? (0, $d4J5n.useLayoutEffect) : (0, $d4J5n.useEffect);


const $b47323a1bb12cc5e$var$targetMap = new WeakMap();
let $b47323a1bb12cc5e$var$resizeObserver;
function $b47323a1bb12cc5e$var$getResizeObserver() {
    // eslint-disable-next-line no-return-assign
    return $b47323a1bb12cc5e$var$resizeObserver = $b47323a1bb12cc5e$var$resizeObserver || new window.ResizeObserver((entries)=>{
        entries.forEach((entry)=>{
            const handler = $b47323a1bb12cc5e$var$targetMap.get(entry.target);
            if (handler) handler(entry.contentRect);
        });
    });
}
function $b47323a1bb12cc5e$export$2e2bcd8739ae039(element) {
    const [rect, setRect] = (0, $d4J5n.useState)(null);
    (0, $26361069f244b9de$export$2e2bcd8739ae039)(()=>{
        if (!element) return;
        $b47323a1bb12cc5e$var$getResizeObserver().observe(element);
        setRect(element.getBoundingClientRect());
        $b47323a1bb12cc5e$var$targetMap.set(element, (rect)=>{
            setRect(rect);
        });
        return ()=>{
            $b47323a1bb12cc5e$var$targetMap.delete(element);
        };
    }, [
        element
    ]);
    return rect;
}






const $e90ad3ae5cd6cdbd$var$_excluded = [
    "onKeyDown"
];
function $e90ad3ae5cd6cdbd$var$_objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function $e90ad3ae5cd6cdbd$export$72369ab2cc99204b(href) {
    return !href || href.trim() === "#";
}
/**
 * An generic `<a>` component that covers a few A11y cases, ensuring that
 * cases where the `href` is missing or trivial like "#" are treated like buttons.
 */ const $e90ad3ae5cd6cdbd$var$Anchor = /*#__PURE__*/ $d4J5n.forwardRef((_ref, ref)=>{
    let { onKeyDown: onKeyDown } = _ref, props = $e90ad3ae5cd6cdbd$var$_objectWithoutPropertiesLoose(_ref, $e90ad3ae5cd6cdbd$var$_excluded);
    const [buttonProps] = (0, $94324ba0fffd0f98$export$a0ee72f2c720a5c3)(Object.assign({
        tagName: "a"
    }, props));
    const handleKeyDown = (0, $68afd5c9279b438e$export$2e2bcd8739ae039)((e)=>{
        buttonProps.onKeyDown(e);
        onKeyDown == null || onKeyDown(e);
    });
    if ($e90ad3ae5cd6cdbd$export$72369ab2cc99204b(props.href) || props.role === "button") return /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)("a", Object.assign({
        ref: ref
    }, props, buttonProps, {
        onKeyDown: handleKeyDown
    }));
    return /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)("a", Object.assign({
        ref: ref
    }, props, {
        onKeyDown: onKeyDown
    }));
});
$e90ad3ae5cd6cdbd$var$Anchor.displayName = "Anchor";
var $e90ad3ae5cd6cdbd$export$2e2bcd8739ae039 = $e90ad3ae5cd6cdbd$var$Anchor;






"use client";
const $a61578c6939a4b26$var$NavLink = /*#__PURE__*/ $d4J5n.forwardRef(({ bsPrefix: bsPrefix, className: className, as: Component = (0, $e90ad3ae5cd6cdbd$export$2e2bcd8739ae039), active: active, eventKey: eventKey, disabled: disabled = false, ...props }, ref)=>{
    bsPrefix = (0, $d2965fbad540669a$export$7f387860ebffb32c)(bsPrefix, "nav-link");
    const [navItemProps, meta] = (0, $37721f51549418b4$export$d7a68693710982a)({
        key: (0, $fea965168a445b6e$export$eef49b42fde998a3)(eventKey, props.href),
        active: active,
        disabled: disabled,
        ...props
    });
    return /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)(Component, {
        ...props,
        ...navItemProps,
        ref: ref,
        disabled: disabled,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($4f96bb9b3141308a$exports)))(className, bsPrefix, disabled && "disabled", meta.isActive && "active")
    });
});
$a61578c6939a4b26$var$NavLink.displayName = "NavLink";
var $a61578c6939a4b26$export$2e2bcd8739ae039 = $a61578c6939a4b26$var$NavLink;



"use client";
const $9fe589e2b6a6581d$var$Nav = /*#__PURE__*/ $d4J5n.forwardRef((uncontrolledProps, ref)=>{
    const { as: as = "div", bsPrefix: initialBsPrefix, variant: variant, fill: fill = false, justify: justify = false, navbar: navbar, navbarScroll: navbarScroll, className: className, activeKey: activeKey, ...props } = (0, $cc3cb09e031e9c82$export$2e2bcd8739ae039)(uncontrolledProps, {
        activeKey: "onSelect"
    });
    const bsPrefix = (0, $d2965fbad540669a$export$7f387860ebffb32c)(initialBsPrefix, "nav");
    let navbarBsPrefix;
    let cardHeaderBsPrefix;
    let isNavbar = false;
    const navbarContext = (0, $d4J5n.useContext)((0, $9bbbbca1aebd7b07$export$2e2bcd8739ae039));
    const cardHeaderContext = (0, $d4J5n.useContext)((0, $e1b132b1bac156c2$export$2e2bcd8739ae039));
    if (navbarContext) {
        navbarBsPrefix = navbarContext.bsPrefix;
        isNavbar = navbar == null ? true : navbar;
    } else if (cardHeaderContext) ({ cardHeaderBsPrefix: cardHeaderBsPrefix } = cardHeaderContext);
    return /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $4d67c7f712fbf24e$export$2e2bcd8739ae039), {
        as: as,
        ref: ref,
        activeKey: activeKey,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($4f96bb9b3141308a$exports)))(className, {
            [bsPrefix]: !isNavbar,
            [`${navbarBsPrefix}-nav`]: isNavbar,
            [`${navbarBsPrefix}-nav-scroll`]: isNavbar && navbarScroll,
            [`${cardHeaderBsPrefix}-${variant}`]: !!cardHeaderBsPrefix,
            [`${bsPrefix}-${variant}`]: !!variant,
            [`${bsPrefix}-fill`]: fill,
            [`${bsPrefix}-justified`]: justify
        }),
        ...props
    });
});
$9fe589e2b6a6581d$var$Nav.displayName = "Nav";
var $9fe589e2b6a6581d$export$2e2bcd8739ae039 = Object.assign($9fe589e2b6a6581d$var$Nav, {
    Item: (0, $64a09de64588ec7a$export$2e2bcd8739ae039),
    Link: (0, $a61578c6939a4b26$export$2e2bcd8739ae039)
});



var $d4J5n = parcelRequire("d4J5n");




var $d4J5n = parcelRequire("d4J5n");


"use client";
const $2444b991a83dd5f7$var$NavbarBrand = /*#__PURE__*/ $d4J5n.forwardRef(({ bsPrefix: bsPrefix, className: className, as: as, ...props }, ref)=>{
    bsPrefix = (0, $d2965fbad540669a$export$7f387860ebffb32c)(bsPrefix, "navbar-brand");
    const Component = as || (props.href ? "a" : "span");
    return /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)(Component, {
        ...props,
        ref: ref,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($4f96bb9b3141308a$exports)))(className, bsPrefix)
    });
});
$2444b991a83dd5f7$var$NavbarBrand.displayName = "NavbarBrand";
var $2444b991a83dd5f7$export$2e2bcd8739ae039 = $2444b991a83dd5f7$var$NavbarBrand;



var $d4J5n = parcelRequire("d4J5n");

/**
 * Returns the owner document of a given element.
 * 
 * @param node the element
 */ function $faf5fcb415a4acb7$export$2e2bcd8739ae039(node) {
    return node && node.ownerDocument || document;
}


function $a7e4fd235e93932f$export$2e2bcd8739ae039(node) {
    var doc = (0, $faf5fcb415a4acb7$export$2e2bcd8739ae039)(node);
    return doc && doc.defaultView || window;
}


function $7f000679841b216a$export$2e2bcd8739ae039(node, psuedoElement) {
    return (0, $a7e4fd235e93932f$export$2e2bcd8739ae039)(node).getComputedStyle(node, psuedoElement);
}


/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/hyphenateStyleName.js
 */ var $2ed54cfe976b5504$var$rUpper = /([A-Z])/g;
function $2ed54cfe976b5504$export$2e2bcd8739ae039(string) {
    return string.replace($2ed54cfe976b5504$var$rUpper, "-$1").toLowerCase();
}


var $51e0826a530b70ec$var$msPattern = /^ms-/;
function $51e0826a530b70ec$export$2e2bcd8739ae039(string) {
    return (0, $2ed54cfe976b5504$export$2e2bcd8739ae039)(string).replace($51e0826a530b70ec$var$msPattern, "-ms-");
}


var $1d7be15c2283fd1b$var$supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function $1d7be15c2283fd1b$export$2e2bcd8739ae039(value) {
    return !!(value && $1d7be15c2283fd1b$var$supportedTransforms.test(value));
}


function $38cb2da359586ba6$var$style(node, property) {
    var css = "";
    var transforms = "";
    if (typeof property === "string") return node.style.getPropertyValue((0, $51e0826a530b70ec$export$2e2bcd8739ae039)(property)) || (0, $7f000679841b216a$export$2e2bcd8739ae039)(node).getPropertyValue((0, $51e0826a530b70ec$export$2e2bcd8739ae039)(property));
    Object.keys(property).forEach(function(key) {
        var value = property[key];
        if (!value && value !== 0) node.style.removeProperty((0, $51e0826a530b70ec$export$2e2bcd8739ae039)(key));
        else if ((0, $1d7be15c2283fd1b$export$2e2bcd8739ae039)(key)) transforms += key + "(" + value + ") ";
        else css += (0, $51e0826a530b70ec$export$2e2bcd8739ae039)(key) + ": " + value + ";";
    });
    if (transforms) css += "transform: " + transforms + ";";
    node.style.cssText += ";" + css;
}
var $38cb2da359586ba6$export$2e2bcd8739ae039 = $38cb2da359586ba6$var$style;



var $d4J5n = parcelRequire("d4J5n");




var $d4J5n = parcelRequire("d4J5n");

var $d6f4fa15f047b29a$export$2e2bcd8739ae039 = {
    disabled: false
};




var $d4J5n = parcelRequire("d4J5n");
var $f7573ca97d71f4ae$export$2e2bcd8739ae039 = (0, (/*@__PURE__*/$parcel$interopDefault($d4J5n))).createContext(null);


var $2887d0e90505b157$export$7d26bbb1236dafd6 = function forceReflow(node) {
    return node.scrollTop;
};


var $3f4090778342b254$export$bb38bb9a1161268 = "unmounted";
var $3f4090778342b254$export$84cbff306f539230 = "exited";
var $3f4090778342b254$export$df38205c966be359 = "entering";
var $3f4090778342b254$export$78e9e6e3e014d60a = "entered";
var $3f4090778342b254$export$4aacc83d4d59139f = "exiting";
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 1 },
 *   entered:  { opacity: 1 },
 *   exiting:  { opacity: 0 },
 *   exited:  { opacity: 0 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */ var $3f4090778342b254$var$Transition = /*#__PURE__*/ function(_React$Component) {
    (0, $b23bf179b32f510c$export$2e2bcd8739ae039)(Transition, _React$Component);
    function Transition(props, context) {
        var _this;
        _this = _React$Component.call(this, props, context) || this;
        var parentGroup = context; // In the context of a TransitionGroup all enters are really appears
        var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
        var initialStatus;
        _this.appearStatus = null;
        if (props.in) {
            if (appear) {
                initialStatus = $3f4090778342b254$export$84cbff306f539230;
                _this.appearStatus = $3f4090778342b254$export$df38205c966be359;
            } else initialStatus = $3f4090778342b254$export$78e9e6e3e014d60a;
        } else if (props.unmountOnExit || props.mountOnEnter) initialStatus = $3f4090778342b254$export$bb38bb9a1161268;
        else initialStatus = $3f4090778342b254$export$84cbff306f539230;
        _this.state = {
            status: initialStatus
        };
        _this.nextCallback = null;
        return _this;
    }
    Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
        var nextIn = _ref.in;
        if (nextIn && prevState.status === $3f4090778342b254$export$bb38bb9a1161268) return {
            status: $3f4090778342b254$export$84cbff306f539230
        };
        return null;
    } // getSnapshotBeforeUpdate(prevProps) {
    ;
    var _proto = Transition.prototype;
    _proto.componentDidMount = function componentDidMount() {
        this.updateStatus(true, this.appearStatus);
    };
    _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
        var nextStatus = null;
        if (prevProps !== this.props) {
            var status = this.state.status;
            if (this.props.in) {
                if (status !== $3f4090778342b254$export$df38205c966be359 && status !== $3f4090778342b254$export$78e9e6e3e014d60a) nextStatus = $3f4090778342b254$export$df38205c966be359;
            } else if (status === $3f4090778342b254$export$df38205c966be359 || status === $3f4090778342b254$export$78e9e6e3e014d60a) nextStatus = $3f4090778342b254$export$4aacc83d4d59139f;
        }
        this.updateStatus(false, nextStatus);
    };
    _proto.componentWillUnmount = function componentWillUnmount() {
        this.cancelNextCallback();
    };
    _proto.getTimeouts = function getTimeouts() {
        var timeout = this.props.timeout;
        var exit, enter, appear;
        exit = enter = appear = timeout;
        if (timeout != null && typeof timeout !== "number") {
            exit = timeout.exit;
            enter = timeout.enter; // TODO: remove fallback for next major
            appear = timeout.appear !== undefined ? timeout.appear : enter;
        }
        return {
            exit: exit,
            enter: enter,
            appear: appear
        };
    };
    _proto.updateStatus = function updateStatus(mounting, nextStatus) {
        if (mounting === void 0) mounting = false;
        if (nextStatus !== null) {
            // nextStatus will always be ENTERING or EXITING.
            this.cancelNextCallback();
            if (nextStatus === $3f4090778342b254$export$df38205c966be359) {
                if (this.props.unmountOnExit || this.props.mountOnEnter) {
                    var node = this.props.nodeRef ? this.props.nodeRef.current : (0, (/*@__PURE__*/$parcel$interopDefault($4723f549251dd88b$exports))).findDOMNode(this); // https://github.com/reactjs/react-transition-group/pull/749
                    // With unmountOnExit or mountOnEnter, the enter animation should happen at the transition between `exited` and `entering`.
                    // To make the animation happen,  we have to separate each rendering and avoid being processed as batched.
                    if (node) (0, $2887d0e90505b157$export$7d26bbb1236dafd6)(node);
                }
                this.performEnter(mounting);
            } else this.performExit();
        } else if (this.props.unmountOnExit && this.state.status === $3f4090778342b254$export$84cbff306f539230) this.setState({
            status: $3f4090778342b254$export$bb38bb9a1161268
        });
    };
    _proto.performEnter = function performEnter(mounting) {
        var _this2 = this;
        var enter = this.props.enter;
        var appearing = this.context ? this.context.isMounting : mounting;
        var _ref2 = this.props.nodeRef ? [
            appearing
        ] : [
            (0, (/*@__PURE__*/$parcel$interopDefault($4723f549251dd88b$exports))).findDOMNode(this),
            appearing
        ], maybeNode = _ref2[0], maybeAppearing = _ref2[1];
        var timeouts = this.getTimeouts();
        var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
        // if we are mounting and running this it means appear _must_ be set
        if (!mounting && !enter || (0, $d6f4fa15f047b29a$export$2e2bcd8739ae039).disabled) {
            this.safeSetState({
                status: $3f4090778342b254$export$78e9e6e3e014d60a
            }, function() {
                _this2.props.onEntered(maybeNode);
            });
            return;
        }
        this.props.onEnter(maybeNode, maybeAppearing);
        this.safeSetState({
            status: $3f4090778342b254$export$df38205c966be359
        }, function() {
            _this2.props.onEntering(maybeNode, maybeAppearing);
            _this2.onTransitionEnd(enterTimeout, function() {
                _this2.safeSetState({
                    status: $3f4090778342b254$export$78e9e6e3e014d60a
                }, function() {
                    _this2.props.onEntered(maybeNode, maybeAppearing);
                });
            });
        });
    };
    _proto.performExit = function performExit() {
        var _this3 = this;
        var exit = this.props.exit;
        var timeouts = this.getTimeouts();
        var maybeNode = this.props.nodeRef ? undefined : (0, (/*@__PURE__*/$parcel$interopDefault($4723f549251dd88b$exports))).findDOMNode(this); // no exit animation skip right to EXITED
        if (!exit || (0, $d6f4fa15f047b29a$export$2e2bcd8739ae039).disabled) {
            this.safeSetState({
                status: $3f4090778342b254$export$84cbff306f539230
            }, function() {
                _this3.props.onExited(maybeNode);
            });
            return;
        }
        this.props.onExit(maybeNode);
        this.safeSetState({
            status: $3f4090778342b254$export$4aacc83d4d59139f
        }, function() {
            _this3.props.onExiting(maybeNode);
            _this3.onTransitionEnd(timeouts.exit, function() {
                _this3.safeSetState({
                    status: $3f4090778342b254$export$84cbff306f539230
                }, function() {
                    _this3.props.onExited(maybeNode);
                });
            });
        });
    };
    _proto.cancelNextCallback = function cancelNextCallback() {
        if (this.nextCallback !== null) {
            this.nextCallback.cancel();
            this.nextCallback = null;
        }
    };
    _proto.safeSetState = function safeSetState(nextState, callback) {
        // This shouldn't be necessary, but there are weird race conditions with
        // setState callbacks and unmounting in testing, so always make sure that
        // we can cancel any pending setState callbacks after we unmount.
        callback = this.setNextCallback(callback);
        this.setState(nextState, callback);
    };
    _proto.setNextCallback = function setNextCallback(callback) {
        var _this4 = this;
        var active = true;
        this.nextCallback = function(event) {
            if (active) {
                active = false;
                _this4.nextCallback = null;
                callback(event);
            }
        };
        this.nextCallback.cancel = function() {
            active = false;
        };
        return this.nextCallback;
    };
    _proto.onTransitionEnd = function onTransitionEnd(timeout, handler) {
        this.setNextCallback(handler);
        var node = this.props.nodeRef ? this.props.nodeRef.current : (0, (/*@__PURE__*/$parcel$interopDefault($4723f549251dd88b$exports))).findDOMNode(this);
        var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;
        if (!node || doesNotHaveTimeoutOrListener) {
            setTimeout(this.nextCallback, 0);
            return;
        }
        if (this.props.addEndListener) {
            var _ref3 = this.props.nodeRef ? [
                this.nextCallback
            ] : [
                node,
                this.nextCallback
            ], maybeNode = _ref3[0], maybeNextCallback = _ref3[1];
            this.props.addEndListener(maybeNode, maybeNextCallback);
        }
        if (timeout != null) setTimeout(this.nextCallback, timeout);
    };
    _proto.render = function render() {
        var status = this.state.status;
        if (status === $3f4090778342b254$export$bb38bb9a1161268) return null;
        var _this$props = this.props, children = _this$props.children, _in = _this$props.in, _mountOnEnter = _this$props.mountOnEnter, _unmountOnExit = _this$props.unmountOnExit, _appear = _this$props.appear, _enter = _this$props.enter, _exit = _this$props.exit, _timeout = _this$props.timeout, _addEndListener = _this$props.addEndListener, _onEnter = _this$props.onEnter, _onEntering = _this$props.onEntering, _onEntered = _this$props.onEntered, _onExit = _this$props.onExit, _onExiting = _this$props.onExiting, _onExited = _this$props.onExited, _nodeRef = _this$props.nodeRef, childProps = (0, $746383c9ca16b298$export$2e2bcd8739ae039)(_this$props, [
            "children",
            "in",
            "mountOnEnter",
            "unmountOnExit",
            "appear",
            "enter",
            "exit",
            "timeout",
            "addEndListener",
            "onEnter",
            "onEntering",
            "onEntered",
            "onExit",
            "onExiting",
            "onExited",
            "nodeRef"
        ]);
        return(/*#__PURE__*/ // allows for nested Transitions
        (0, (/*@__PURE__*/$parcel$interopDefault($d4J5n))).createElement((0, $f7573ca97d71f4ae$export$2e2bcd8739ae039).Provider, {
            value: null
        }, typeof children === "function" ? children(status, childProps) : (0, (/*@__PURE__*/$parcel$interopDefault($d4J5n))).cloneElement((0, (/*@__PURE__*/$parcel$interopDefault($d4J5n))).Children.only(children), childProps)));
    };
    return Transition;
}((0, (/*@__PURE__*/$parcel$interopDefault($d4J5n))).Component);
$3f4090778342b254$var$Transition.contextType = (0, $f7573ca97d71f4ae$export$2e2bcd8739ae039);
$3f4090778342b254$var$Transition.propTypes = {}; // Name the function so it is clearer in the documentation
function $3f4090778342b254$var$noop() {}
$3f4090778342b254$var$Transition.defaultProps = {
    in: false,
    mountOnEnter: false,
    unmountOnExit: false,
    appear: false,
    enter: true,
    exit: true,
    onEnter: $3f4090778342b254$var$noop,
    onEntering: $3f4090778342b254$var$noop,
    onEntered: $3f4090778342b254$var$noop,
    onExit: $3f4090778342b254$var$noop,
    onExiting: $3f4090778342b254$var$noop,
    onExited: $3f4090778342b254$var$noop
};
$3f4090778342b254$var$Transition.UNMOUNTED = $3f4090778342b254$export$bb38bb9a1161268;
$3f4090778342b254$var$Transition.EXITED = $3f4090778342b254$export$84cbff306f539230;
$3f4090778342b254$var$Transition.ENTERING = $3f4090778342b254$export$df38205c966be359;
$3f4090778342b254$var$Transition.ENTERED = $3f4090778342b254$export$78e9e6e3e014d60a;
$3f4090778342b254$var$Transition.EXITING = $3f4090778342b254$export$4aacc83d4d59139f;
var $3f4090778342b254$export$2e2bcd8739ae039 = $3f4090778342b254$var$Transition;




/* eslint-disable no-return-assign */ var $58451f2675491163$export$2e2bcd8739ae039 = !!(typeof window !== "undefined" && window.document && window.document.createElement);


var $a3728d7a696c5261$export$63fefd044b2bc624 = false;
var $a3728d7a696c5261$export$a614c6b395900f69 = false;
try {
    var $a3728d7a696c5261$var$options = {
        get passive () {
            return $a3728d7a696c5261$export$63fefd044b2bc624 = true;
        },
        get once () {
            // eslint-disable-next-line no-multi-assign
            return $a3728d7a696c5261$export$a614c6b395900f69 = $a3728d7a696c5261$export$63fefd044b2bc624 = true;
        }
    };
    if (0, $58451f2675491163$export$2e2bcd8739ae039) {
        window.addEventListener("test", $a3728d7a696c5261$var$options, $a3728d7a696c5261$var$options);
        window.removeEventListener("test", $a3728d7a696c5261$var$options, true);
    }
} catch (e) {
/* */ }
/**
 * An `addEventListener` ponyfill, supports the `once` option
 * 
 * @param node the element
 * @param eventName the event name
 * @param handle the handler
 * @param options event options
 */ function $a3728d7a696c5261$var$addEventListener(node, eventName, handler, options) {
    if (options && typeof options !== "boolean" && !$a3728d7a696c5261$export$a614c6b395900f69) {
        var once = options.once, capture = options.capture;
        var wrappedHandler = handler;
        if (!$a3728d7a696c5261$export$a614c6b395900f69 && once) {
            wrappedHandler = handler.__once || function onceHandler(event) {
                this.removeEventListener(eventName, onceHandler, capture);
                handler.call(this, event);
            };
            handler.__once = wrappedHandler;
        }
        node.addEventListener(eventName, wrappedHandler, $a3728d7a696c5261$export$63fefd044b2bc624 ? options : capture);
    }
    node.addEventListener(eventName, handler, options);
}
var $a3728d7a696c5261$export$2e2bcd8739ae039 = $a3728d7a696c5261$var$addEventListener;


/**
 * A `removeEventListener` ponyfill
 * 
 * @param node the element
 * @param eventName the event name
 * @param handle the handler
 * @param options event options
 */ function $2e116e2caaf7ad7a$var$removeEventListener(node, eventName, handler, options) {
    var capture = options && typeof options !== "boolean" ? options.capture : options;
    node.removeEventListener(eventName, handler, capture);
    if (handler.__once) node.removeEventListener(eventName, handler.__once, capture);
}
var $2e116e2caaf7ad7a$export$2e2bcd8739ae039 = $2e116e2caaf7ad7a$var$removeEventListener;


function $5cd5956423aa7273$var$listen(node, eventName, handler, options) {
    (0, $a3728d7a696c5261$export$2e2bcd8739ae039)(node, eventName, handler, options);
    return function() {
        (0, $2e116e2caaf7ad7a$export$2e2bcd8739ae039)(node, eventName, handler, options);
    };
}
var $5cd5956423aa7273$export$2e2bcd8739ae039 = $5cd5956423aa7273$var$listen;


/**
 * Triggers an event on a given element.
 * 
 * @param node the element
 * @param eventName the event name to trigger
 * @param bubbles whether the event should bubble up
 * @param cancelable whether the event should be cancelable
 */ function $ac20ef9e83b60dfa$export$2e2bcd8739ae039(node, eventName, bubbles, cancelable) {
    if (bubbles === void 0) bubbles = false;
    if (cancelable === void 0) cancelable = true;
    if (node) {
        var event = document.createEvent("HTMLEvents");
        event.initEvent(eventName, bubbles, cancelable);
        node.dispatchEvent(event);
    }
}


function $4e71cc95161d08ad$var$parseDuration(node) {
    var str = (0, $38cb2da359586ba6$export$2e2bcd8739ae039)(node, "transitionDuration") || "";
    var mult = str.indexOf("ms") === -1 ? 1000 : 1;
    return parseFloat(str) * mult;
}
function $4e71cc95161d08ad$var$emulateTransitionEnd(element, duration, padding) {
    if (padding === void 0) padding = 5;
    var called = false;
    var handle = setTimeout(function() {
        if (!called) (0, $ac20ef9e83b60dfa$export$2e2bcd8739ae039)(element, "transitionend", true);
    }, duration + padding);
    var remove = (0, $5cd5956423aa7273$export$2e2bcd8739ae039)(element, "transitionend", function() {
        called = true;
    }, {
        once: true
    });
    return function() {
        clearTimeout(handle);
        remove();
    };
}
function $4e71cc95161d08ad$export$2e2bcd8739ae039(element, handler, duration, padding) {
    if (duration == null) duration = $4e71cc95161d08ad$var$parseDuration(element) || 0;
    var removeEmulate = $4e71cc95161d08ad$var$emulateTransitionEnd(element, duration, padding);
    var remove = (0, $5cd5956423aa7273$export$2e2bcd8739ae039)(element, "transitionend", handler);
    return function() {
        removeEmulate();
        remove();
    };
}


function $5b1dd67c84e7f95b$var$parseDuration(node, property) {
    const str = (0, $38cb2da359586ba6$export$2e2bcd8739ae039)(node, property) || "";
    const mult = str.indexOf("ms") === -1 ? 1000 : 1;
    return parseFloat(str) * mult;
}
function $5b1dd67c84e7f95b$export$2e2bcd8739ae039(element, handler) {
    const duration = $5b1dd67c84e7f95b$var$parseDuration(element, "transitionDuration");
    const delay = $5b1dd67c84e7f95b$var$parseDuration(element, "transitionDelay");
    const remove = (0, $4e71cc95161d08ad$export$2e2bcd8739ae039)(element, (e)=>{
        if (e.target === element) {
            remove();
            handler(e);
        }
    }, duration + delay);
}


/**
 * Safe chained function
 *
 * Will only create a new function if needed,
 * otherwise will pass back existing functions or null.
 *
 * @param {function} functions to chain
 * @returns {function|null}
 */ function $b038c923864f5df1$var$createChainedFunction(...funcs) {
    return funcs.filter((f)=>f != null).reduce((acc, f)=>{
        if (typeof f !== "function") throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");
        if (acc === null) return f;
        return function chainedFunction(...args) {
            // @ts-ignore
            acc.apply(this, args);
            // @ts-ignore
            f.apply(this, args);
        };
    }, null);
}
var $b038c923864f5df1$export$2e2bcd8739ae039 = $b038c923864f5df1$var$createChainedFunction;


// reading a dimension prop will cause the browser to recalculate,
// which will let our animations work
function $4d17e9d44738863d$export$2e2bcd8739ae039(node) {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    node.offsetHeight;
}



var $d4J5n = parcelRequire("d4J5n");



function $7f4aa3ef83e9a32e$export$2e2bcd8739ae039(componentOrElement) {
    if (componentOrElement && "setState" in componentOrElement) return (0, (/*@__PURE__*/$parcel$interopDefault($4723f549251dd88b$exports))).findDOMNode(componentOrElement);
    return componentOrElement != null ? componentOrElement : null;
}



"use client";
// Normalizes Transition callbacks when nodeRef is used.
const $f25667ced1e5fc34$var$TransitionWrapper = /*#__PURE__*/ (0, (/*@__PURE__*/$parcel$interopDefault($d4J5n))).forwardRef(({ onEnter: onEnter, onEntering: onEntering, onEntered: onEntered, onExit: onExit, onExiting: onExiting, onExited: onExited, addEndListener: addEndListener, children: children, childRef: childRef, ...props }, ref)=>{
    const nodeRef = (0, $d4J5n.useRef)(null);
    const mergedRef = (0, $a9894662a4aebec5$export$2e2bcd8739ae039)(nodeRef, childRef);
    const attachRef = (r)=>{
        mergedRef((0, $7f4aa3ef83e9a32e$export$2e2bcd8739ae039)(r));
    };
    const normalize = (callback)=>(param)=>{
            if (callback && nodeRef.current) callback(nodeRef.current, param);
        };
    /* eslint-disable react-hooks/exhaustive-deps */ const handleEnter = (0, $d4J5n.useCallback)(normalize(onEnter), [
        onEnter
    ]);
    const handleEntering = (0, $d4J5n.useCallback)(normalize(onEntering), [
        onEntering
    ]);
    const handleEntered = (0, $d4J5n.useCallback)(normalize(onEntered), [
        onEntered
    ]);
    const handleExit = (0, $d4J5n.useCallback)(normalize(onExit), [
        onExit
    ]);
    const handleExiting = (0, $d4J5n.useCallback)(normalize(onExiting), [
        onExiting
    ]);
    const handleExited = (0, $d4J5n.useCallback)(normalize(onExited), [
        onExited
    ]);
    const handleAddEndListener = (0, $d4J5n.useCallback)(normalize(addEndListener), [
        addEndListener
    ]);
    /* eslint-enable react-hooks/exhaustive-deps */ return /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $3f4090778342b254$export$2e2bcd8739ae039), {
        ref: ref,
        ...props,
        onEnter: handleEnter,
        onEntered: handleEntered,
        onEntering: handleEntering,
        onExit: handleExit,
        onExited: handleExited,
        onExiting: handleExiting,
        addEndListener: handleAddEndListener,
        nodeRef: nodeRef,
        children: typeof children === "function" ? (status, innerProps)=>// TODO: Types for RTG missing innerProps, so need to cast.
            children(status, {
                ...innerProps,
                ref: attachRef
            }) : /*#__PURE__*/ (0, (/*@__PURE__*/$parcel$interopDefault($d4J5n))).cloneElement(children, {
            ref: attachRef
        })
    });
});
var $f25667ced1e5fc34$export$2e2bcd8739ae039 = $f25667ced1e5fc34$var$TransitionWrapper;



const $b49e61d49a7a50a9$var$MARGINS = {
    height: [
        "marginTop",
        "marginBottom"
    ],
    width: [
        "marginLeft",
        "marginRight"
    ]
};
function $b49e61d49a7a50a9$var$getDefaultDimensionValue(dimension, elem) {
    const offset = `offset${dimension[0].toUpperCase()}${dimension.slice(1)}`;
    const value = elem[offset];
    const margins = $b49e61d49a7a50a9$var$MARGINS[dimension];
    return value + // @ts-ignore
    parseInt((0, $38cb2da359586ba6$export$2e2bcd8739ae039)(elem, margins[0]), 10) + // @ts-ignore
    parseInt((0, $38cb2da359586ba6$export$2e2bcd8739ae039)(elem, margins[1]), 10);
}
const $b49e61d49a7a50a9$var$collapseStyles = {
    [(0, $3f4090778342b254$export$84cbff306f539230)]: "collapse",
    [(0, $3f4090778342b254$export$4aacc83d4d59139f)]: "collapsing",
    [(0, $3f4090778342b254$export$df38205c966be359)]: "collapsing",
    [(0, $3f4090778342b254$export$78e9e6e3e014d60a)]: "collapse show"
};
const $b49e61d49a7a50a9$var$Collapse = /*#__PURE__*/ (0, (/*@__PURE__*/$parcel$interopDefault($d4J5n))).forwardRef(({ onEnter: onEnter, onEntering: onEntering, onEntered: onEntered, onExit: onExit, onExiting: onExiting, className: className, children: children, dimension: dimension = "height", in: inProp = false, timeout: timeout = 300, mountOnEnter: mountOnEnter = false, unmountOnExit: unmountOnExit = false, appear: appear = false, getDimensionValue: getDimensionValue = $b49e61d49a7a50a9$var$getDefaultDimensionValue, ...props }, ref)=>{
    /* Compute dimension */ const computedDimension = typeof dimension === "function" ? dimension() : dimension;
    /* -- Expanding -- */ const handleEnter = (0, $d4J5n.useMemo)(()=>(0, $b038c923864f5df1$export$2e2bcd8739ae039)((elem)=>{
            elem.style[computedDimension] = "0";
        }, onEnter), [
        computedDimension,
        onEnter
    ]);
    const handleEntering = (0, $d4J5n.useMemo)(()=>(0, $b038c923864f5df1$export$2e2bcd8739ae039)((elem)=>{
            const scroll = `scroll${computedDimension[0].toUpperCase()}${computedDimension.slice(1)}`;
            elem.style[computedDimension] = `${elem[scroll]}px`;
        }, onEntering), [
        computedDimension,
        onEntering
    ]);
    const handleEntered = (0, $d4J5n.useMemo)(()=>(0, $b038c923864f5df1$export$2e2bcd8739ae039)((elem)=>{
            elem.style[computedDimension] = null;
        }, onEntered), [
        computedDimension,
        onEntered
    ]);
    /* -- Collapsing -- */ const handleExit = (0, $d4J5n.useMemo)(()=>(0, $b038c923864f5df1$export$2e2bcd8739ae039)((elem)=>{
            elem.style[computedDimension] = `${getDimensionValue(computedDimension, elem)}px`;
            (0, $4d17e9d44738863d$export$2e2bcd8739ae039)(elem);
        }, onExit), [
        onExit,
        getDimensionValue,
        computedDimension
    ]);
    const handleExiting = (0, $d4J5n.useMemo)(()=>(0, $b038c923864f5df1$export$2e2bcd8739ae039)((elem)=>{
            elem.style[computedDimension] = null;
        }, onExiting), [
        computedDimension,
        onExiting
    ]);
    return /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $f25667ced1e5fc34$export$2e2bcd8739ae039), {
        ref: ref,
        addEndListener: (0, $5b1dd67c84e7f95b$export$2e2bcd8739ae039),
        ...props,
        "aria-expanded": props.role ? inProp : null,
        onEnter: handleEnter,
        onEntering: handleEntering,
        onEntered: handleEntered,
        onExit: handleExit,
        onExiting: handleExiting,
        childRef: children.ref,
        in: inProp,
        timeout: timeout,
        mountOnEnter: mountOnEnter,
        unmountOnExit: unmountOnExit,
        appear: appear,
        children: (state, innerProps)=>/*#__PURE__*/ (0, (/*@__PURE__*/$parcel$interopDefault($d4J5n))).cloneElement(children, {
                ...innerProps,
                className: (0, (/*@__PURE__*/$parcel$interopDefault($4f96bb9b3141308a$exports)))(className, children.props.className, $b49e61d49a7a50a9$var$collapseStyles[state], computedDimension === "width" && "collapse-horizontal")
            })
    });
});
var // @ts-ignore
$b49e61d49a7a50a9$export$2e2bcd8739ae039 = $b49e61d49a7a50a9$var$Collapse;





"use client";
const $7f864fe6de641ad8$var$NavbarCollapse = /*#__PURE__*/ $d4J5n.forwardRef(({ children: children, bsPrefix: bsPrefix, ...props }, ref)=>{
    bsPrefix = (0, $d2965fbad540669a$export$7f387860ebffb32c)(bsPrefix, "navbar-collapse");
    const context = (0, $d4J5n.useContext)((0, $9bbbbca1aebd7b07$export$2e2bcd8739ae039));
    return /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $b49e61d49a7a50a9$export$2e2bcd8739ae039), {
        in: !!(context && context.expanded),
        ...props,
        children: /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)("div", {
            ref: ref,
            className: bsPrefix,
            children: children
        })
    });
});
$7f864fe6de641ad8$var$NavbarCollapse.displayName = "NavbarCollapse";
var $7f864fe6de641ad8$export$2e2bcd8739ae039 = $7f864fe6de641ad8$var$NavbarCollapse;




var $d4J5n = parcelRequire("d4J5n");




"use client";
const $5d5005df7bbc3a17$var$NavbarToggle = /*#__PURE__*/ $d4J5n.forwardRef(({ bsPrefix: bsPrefix, className: className, children: children, label: label = "Toggle navigation", // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
as: Component = "button", onClick: onClick, ...props }, ref)=>{
    bsPrefix = (0, $d2965fbad540669a$export$7f387860ebffb32c)(bsPrefix, "navbar-toggler");
    const { onToggle: onToggle, expanded: expanded } = (0, $d4J5n.useContext)((0, $9bbbbca1aebd7b07$export$2e2bcd8739ae039)) || {};
    const handleClick = (0, $68afd5c9279b438e$export$2e2bcd8739ae039)((e)=>{
        if (onClick) onClick(e);
        if (onToggle) onToggle();
    });
    if (Component === "button") props.type = "button";
    return /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)(Component, {
        ...props,
        ref: ref,
        onClick: handleClick,
        "aria-label": label,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($4f96bb9b3141308a$exports)))(className, bsPrefix, !expanded && "collapsed"),
        children: children || /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)("span", {
            className: `${bsPrefix}-icon`
        })
    });
});
$5d5005df7bbc3a17$var$NavbarToggle.displayName = "NavbarToggle";
var $5d5005df7bbc3a17$export$2e2bcd8739ae039 = $5d5005df7bbc3a17$var$NavbarToggle;



var $d4J5n = parcelRequire("d4J5n");



var $d4J5n = parcelRequire("d4J5n");
const $0029f99d22d95d11$var$matchersByWindow = new WeakMap();
const $0029f99d22d95d11$var$getMatcher = (query, targetWindow)=>{
    if (!query || !targetWindow) return undefined;
    const matchers = $0029f99d22d95d11$var$matchersByWindow.get(targetWindow) || new Map();
    $0029f99d22d95d11$var$matchersByWindow.set(targetWindow, matchers);
    let mql = matchers.get(query);
    if (!mql) {
        mql = targetWindow.matchMedia(query);
        mql.refCount = 0;
        matchers.set(mql.media, mql);
    }
    return mql;
};
function $0029f99d22d95d11$export$2e2bcd8739ae039(query, targetWindow = typeof window === "undefined" ? undefined : window) {
    const mql = $0029f99d22d95d11$var$getMatcher(query, targetWindow);
    const [matches, setMatches] = (0, $d4J5n.useState)(()=>mql ? mql.matches : false);
    (0, $26361069f244b9de$export$2e2bcd8739ae039)(()=>{
        let mql = $0029f99d22d95d11$var$getMatcher(query, targetWindow);
        if (!mql) return setMatches(false);
        let matchers = $0029f99d22d95d11$var$matchersByWindow.get(targetWindow);
        const handleChange = ()=>{
            setMatches(mql.matches);
        };
        mql.refCount++;
        mql.addListener(handleChange);
        handleChange();
        return ()=>{
            mql.removeListener(handleChange);
            mql.refCount--;
            if (mql.refCount <= 0) matchers == null || matchers.delete(mql.media);
            mql = undefined;
        };
    }, [
        query
    ]);
    return matches;
}



var $d4J5n = parcelRequire("d4J5n");
function $a6cd4d109b0c8d09$export$9c6950edc251641e(breakpointValues) {
    const names = Object.keys(breakpointValues);
    function and(query, next) {
        if (query === next) return next;
        return query ? `${query} and ${next}` : next;
    }
    function getNext(breakpoint) {
        return names[Math.min(names.indexOf(breakpoint) + 1, names.length - 1)];
    }
    function getMaxQuery(breakpoint) {
        const next = getNext(breakpoint);
        let value = breakpointValues[next];
        if (typeof value === "number") value = `${value - 0.2}px`;
        else value = `calc(${value} - 0.2px)`;
        return `(max-width: ${value})`;
    }
    function getMinQuery(breakpoint) {
        let value = breakpointValues[breakpoint];
        if (typeof value === "number") value = `${value}px`;
        return `(min-width: ${value})`;
    }
    /**
   * Match a set of breakpoints
   *
   * ```tsx
   * const MidSizeOnly = () => {
   *   const isMid = useBreakpoint({ lg: 'down', sm: 'up' });
   *
   *   if (isMid) return <div>On a Reasonable sized Screen!</div>
   *   return null;
   * }
   * ```
   * @param breakpointMap An object map of breakpoints and directions, queries are constructed using "and" to join
   * breakpoints together
   * @param window Optionally specify the target window to match against (useful when rendering into iframes)
   */ /**
   * Match a single breakpoint exactly, up, or down.
   *
   * ```tsx
   * const PhoneOnly = () => {
   *   const isSmall = useBreakpoint('sm', 'down');
   *
   *   if (isSmall) return <div>On a Small Screen!</div>
   *   return null;
   * }
   * ```
   *
   * @param breakpoint The breakpoint key
   * @param direction A direction 'up' for a max, 'down' for min, true to match only the breakpoint
   * @param window Optionally specify the target window to match against (useful when rendering into iframes)
   */ function useBreakpoint(breakpointOrMap, direction, window) {
        let breakpointMap;
        if (typeof breakpointOrMap === "object") {
            breakpointMap = breakpointOrMap;
            window = direction;
            direction = true;
        } else {
            direction = direction || true;
            breakpointMap = {
                [breakpointOrMap]: direction
            };
        }
        let query = (0, $d4J5n.useMemo)(()=>Object.entries(breakpointMap).reduce((query, [key, direction])=>{
                if (direction === "up" || direction === true) query = and(query, getMinQuery(key));
                if (direction === "down" || direction === true) query = and(query, getMaxQuery(key));
                return query;
            }, ""), [
            JSON.stringify(breakpointMap)
        ]);
        return (0, $0029f99d22d95d11$export$2e2bcd8739ae039)(query, window);
    }
    return useBreakpoint;
}
const $a6cd4d109b0c8d09$var$useBreakpoint = $a6cd4d109b0c8d09$export$9c6950edc251641e({
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1400
});
var $a6cd4d109b0c8d09$export$2e2bcd8739ae039 = $a6cd4d109b0c8d09$var$useBreakpoint;




var $d4J5n = parcelRequire("d4J5n");

function $db83e6d2eac2d5d3$export$2e2bcd8739ae039(doc) {
    if (doc === void 0) doc = (0, $faf5fcb415a4acb7$export$2e2bcd8739ae039)();
    // Support: IE 9 only
    // IE9 throws an "Unspecified error" accessing document.activeElement from an <iframe>
    try {
        var active = doc.activeElement; // IE11 returns a seemingly empty object in some cases when accessing
        // document.activeElement from an <iframe>
        if (!active || !active.nodeName) return null;
        return active;
    } catch (e) {
        /* ie throws if no active element */ return doc.body;
    }
}


/* eslint-disable no-bitwise, no-cond-assign */ /**
 * Checks if an element contains another given element.
 * 
 * @param context the context element
 * @param node the element to check
 */ function $a0159a063b152c6b$export$2e2bcd8739ae039(context, node) {
    // HTML DOM and SVG DOM may have different support levels,
    // so we need to check on context instead of a document root element.
    if (context.contains) return context.contains(node);
    if (context.compareDocumentPosition) return context === node || !!(context.compareDocumentPosition(node) & 16);
}





var $d4J5n = parcelRequire("d4J5n");



var $d4J5n = parcelRequire("d4J5n");
function $887ec243063c80da$export$2e2bcd8739ae039(value) {
    const valueRef = (0, $d4J5n.useRef)(value);
    valueRef.current = value;
    return valueRef;
}



var $d4J5n = parcelRequire("d4J5n");
function $4c6f8169c25b62ff$export$2e2bcd8739ae039(fn) {
    const onUnmount = (0, $887ec243063c80da$export$2e2bcd8739ae039)(fn);
    (0, $d4J5n.useEffect)(()=>()=>onUnmount.current(), []);
}






/**
 * Get the width of the vertical window scrollbar if it's visible
 */ function $d49278ce2ad6dd01$export$2e2bcd8739ae039(ownerDocument = document) {
    const window = ownerDocument.defaultView;
    return Math.abs(window.innerWidth - ownerDocument.documentElement.clientWidth);
}


const $7ed3c25f7b0554d2$export$1a88c12b8b979fa0 = (0, $c70750af2cc7912b$export$5cc3b7b83e34ade7)("modal-open");
/**
 * Manages a stack of Modals as well as ensuring
 * body scrolling is is disabled and padding accounted for
 */ class $7ed3c25f7b0554d2$var$ModalManager {
    constructor({ ownerDocument: ownerDocument, handleContainerOverflow: handleContainerOverflow = true, isRTL: isRTL = false } = {}){
        this.handleContainerOverflow = handleContainerOverflow;
        this.isRTL = isRTL;
        this.modals = [];
        this.ownerDocument = ownerDocument;
    }
    getScrollbarWidth() {
        return (0, $d49278ce2ad6dd01$export$2e2bcd8739ae039)(this.ownerDocument);
    }
    getElement() {
        return (this.ownerDocument || document).body;
    }
    setModalAttributes(_modal) {
    // For overriding
    }
    removeModalAttributes(_modal) {
    // For overriding
    }
    setContainerStyle(containerState) {
        const style = {
            overflow: "hidden"
        };
        // we are only interested in the actual `style` here
        // because we will override it
        const paddingProp = this.isRTL ? "paddingLeft" : "paddingRight";
        const container = this.getElement();
        containerState.style = {
            overflow: container.style.overflow,
            [paddingProp]: container.style[paddingProp]
        };
        if (containerState.scrollBarWidth) // use computed style, here to get the real padding
        // to add our scrollbar width
        style[paddingProp] = `${parseInt((0, $38cb2da359586ba6$export$2e2bcd8739ae039)(container, paddingProp) || "0", 10) + containerState.scrollBarWidth}px`;
        container.setAttribute($7ed3c25f7b0554d2$export$1a88c12b8b979fa0, "");
        (0, $38cb2da359586ba6$export$2e2bcd8739ae039)(container, style);
    }
    reset() {
        [
            ...this.modals
        ].forEach((m)=>this.remove(m));
    }
    removeContainerStyle(containerState) {
        const container = this.getElement();
        container.removeAttribute($7ed3c25f7b0554d2$export$1a88c12b8b979fa0);
        Object.assign(container.style, containerState.style);
    }
    add(modal) {
        let modalIdx = this.modals.indexOf(modal);
        if (modalIdx !== -1) return modalIdx;
        modalIdx = this.modals.length;
        this.modals.push(modal);
        this.setModalAttributes(modal);
        if (modalIdx !== 0) return modalIdx;
        this.state = {
            scrollBarWidth: this.getScrollbarWidth(),
            style: {}
        };
        if (this.handleContainerOverflow) this.setContainerStyle(this.state);
        return modalIdx;
    }
    remove(modal) {
        const modalIdx = this.modals.indexOf(modal);
        if (modalIdx === -1) return;
        this.modals.splice(modalIdx, 1);
        // if that was the last modal in a container,
        // clean up the container
        if (!this.modals.length && this.handleContainerOverflow) this.removeContainerStyle(this.state);
        this.removeModalAttributes(modal);
    }
    isTopModal(modal) {
        return !!this.modals.length && this.modals[this.modals.length - 1] === modal;
    }
}
var $7ed3c25f7b0554d2$export$2e2bcd8739ae039 = $7ed3c25f7b0554d2$var$ModalManager;





var $d4J5n = parcelRequire("d4J5n");

var $d4J5n = parcelRequire("d4J5n");

const $91885701e67952e7$var$Context = /*#__PURE__*/ (0, $d4J5n.createContext)((0, $58451f2675491163$export$2e2bcd8739ae039) ? window : undefined);
const $91885701e67952e7$export$f7d306aeb1cf5fbc = $91885701e67952e7$var$Context.Provider;
function $91885701e67952e7$export$2e2bcd8739ae039() {
    return (0, $d4J5n.useContext)($91885701e67952e7$var$Context);
}


const $9c7ecb213823f82d$export$c91fd81e6d65f84a = (ref, document)=>{
    if (!(0, $58451f2675491163$export$2e2bcd8739ae039)) return null;
    if (ref == null) return (document || (0, $faf5fcb415a4acb7$export$2e2bcd8739ae039)()).body;
    if (typeof ref === "function") ref = ref();
    if (ref && "current" in ref) ref = ref.current;
    if (ref && ("nodeType" in ref || ref.getBoundingClientRect)) return ref;
    return null;
};
function $9c7ecb213823f82d$export$2e2bcd8739ae039(ref, onResolved) {
    const window = (0, $91885701e67952e7$export$2e2bcd8739ae039)();
    const [resolvedRef, setRef] = (0, $d4J5n.useState)(()=>$9c7ecb213823f82d$export$c91fd81e6d65f84a(ref, window == null ? void 0 : window.document));
    if (!resolvedRef) {
        const earlyRef = $9c7ecb213823f82d$export$c91fd81e6d65f84a(ref);
        if (earlyRef) setRef(earlyRef);
    }
    (0, $d4J5n.useEffect)(()=>{
        if (onResolved && resolvedRef) onResolved(resolvedRef);
    }, [
        onResolved,
        resolvedRef
    ]);
    (0, $d4J5n.useEffect)(()=>{
        const nextRef = $9c7ecb213823f82d$export$c91fd81e6d65f84a(ref);
        if (nextRef !== resolvedRef) setRef(nextRef);
    }, [
        ref,
        resolvedRef
    ]);
    return resolvedRef;
}







var $d4J5n = parcelRequire("d4J5n");



var $d4J5n = parcelRequire("d4J5n");
function $b912932c83bc02bb$var$NoopTransition({ children: children, in: inProp, onExited: onExited, mountOnEnter: mountOnEnter, unmountOnExit: unmountOnExit }) {
    const ref = (0, $d4J5n.useRef)(null);
    const hasEnteredRef = (0, $d4J5n.useRef)(inProp);
    const handleExited = (0, $68afd5c9279b438e$export$2e2bcd8739ae039)(onExited);
    (0, $d4J5n.useEffect)(()=>{
        if (inProp) hasEnteredRef.current = true;
        else handleExited(ref.current);
    }, [
        inProp,
        handleExited
    ]);
    const combinedRef = (0, $a9894662a4aebec5$export$2e2bcd8739ae039)(ref, children.ref);
    const child = /*#__PURE__*/ (0, $d4J5n.cloneElement)(children, {
        ref: combinedRef
    });
    if (inProp) return child;
    if (unmountOnExit) return null;
    if (!hasEnteredRef.current && mountOnEnter) return null;
    return child;
}
var $b912932c83bc02bb$export$2e2bcd8739ae039 = $b912932c83bc02bb$var$NoopTransition;



var $d4J5n = parcelRequire("d4J5n");

var $d4J5n = parcelRequire("d4J5n");

const $9874b208faef6654$var$_excluded = [
    "onEnter",
    "onEntering",
    "onEntered",
    "onExit",
    "onExiting",
    "onExited",
    "addEndListener",
    "children"
];
function $9874b208faef6654$var$_objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function $9874b208faef6654$export$2e2bcd8739ae039(_ref) {
    let { onEnter: onEnter, onEntering: onEntering, onEntered: onEntered, onExit: onExit, onExiting: onExiting, onExited: onExited, addEndListener: addEndListener, children: children } = _ref, props = $9874b208faef6654$var$_objectWithoutPropertiesLoose(_ref, $9874b208faef6654$var$_excluded);
    const nodeRef = (0, $d4J5n.useRef)(null);
    const mergedRef = (0, $a9894662a4aebec5$export$2e2bcd8739ae039)(nodeRef, typeof children === "function" ? null : children.ref);
    const normalize = (callback)=>(param)=>{
            if (callback && nodeRef.current) callback(nodeRef.current, param);
        };
    /* eslint-disable react-hooks/exhaustive-deps */ const handleEnter = (0, $d4J5n.useCallback)(normalize(onEnter), [
        onEnter
    ]);
    const handleEntering = (0, $d4J5n.useCallback)(normalize(onEntering), [
        onEntering
    ]);
    const handleEntered = (0, $d4J5n.useCallback)(normalize(onEntered), [
        onEntered
    ]);
    const handleExit = (0, $d4J5n.useCallback)(normalize(onExit), [
        onExit
    ]);
    const handleExiting = (0, $d4J5n.useCallback)(normalize(onExiting), [
        onExiting
    ]);
    const handleExited = (0, $d4J5n.useCallback)(normalize(onExited), [
        onExited
    ]);
    const handleAddEndListener = (0, $d4J5n.useCallback)(normalize(addEndListener), [
        addEndListener
    ]);
    /* eslint-enable react-hooks/exhaustive-deps */ return Object.assign({}, props, {
        nodeRef: nodeRef,
        onEnter: handleEnter,
        onEntering: handleEntering,
        onEntered: handleEntered,
        onExit: handleExit,
        onExiting: handleExiting,
        onExited: handleExited,
        addEndListener: handleAddEndListener,
        children: typeof children === "function" ? (status, innerProps)=>// TODO: Types for RTG missing innerProps, so need to cast.
            children(status, Object.assign({}, innerProps, {
                ref: mergedRef
            })) : /*#__PURE__*/ (0, $d4J5n.cloneElement)(children, {
            ref: mergedRef
        })
    });
}



const $2840dd6ed381055c$var$_excluded = [
    "component"
];
function $2840dd6ed381055c$var$_objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
// Normalizes Transition callbacks when nodeRef is used.
const $2840dd6ed381055c$var$RTGTransition = /*#__PURE__*/ $d4J5n.forwardRef((_ref, ref)=>{
    let { component: Component } = _ref, props = $2840dd6ed381055c$var$_objectWithoutPropertiesLoose(_ref, $2840dd6ed381055c$var$_excluded);
    const transitionProps = (0, $9874b208faef6654$export$2e2bcd8739ae039)(props);
    return /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)(Component, Object.assign({
        ref: ref
    }, transitionProps));
});
var $2840dd6ed381055c$export$2e2bcd8739ae039 = $2840dd6ed381055c$var$RTGTransition;



function $e199ad1e49a29bc3$export$7b286972b8d8ccbf({ in: inProp, onTransition: onTransition }) {
    const ref = (0, $d4J5n.useRef)(null);
    const isInitialRef = (0, $d4J5n.useRef)(true);
    const handleTransition = (0, $68afd5c9279b438e$export$2e2bcd8739ae039)(onTransition);
    (0, $26361069f244b9de$export$2e2bcd8739ae039)(()=>{
        if (!ref.current) return undefined;
        let stale = false;
        handleTransition({
            in: inProp,
            element: ref.current,
            initial: isInitialRef.current,
            isStale: ()=>stale
        });
        return ()=>{
            stale = true;
        };
    }, [
        inProp,
        handleTransition
    ]);
    (0, $26361069f244b9de$export$2e2bcd8739ae039)(()=>{
        isInitialRef.current = false;
        // this is for strict mode
        return ()=>{
            isInitialRef.current = true;
        };
    }, []);
    return ref;
}
function $e199ad1e49a29bc3$export$2e2bcd8739ae039({ children: children, in: inProp, onExited: onExited, onEntered: onEntered, transition: transition }) {
    const [exited, setExited] = (0, $d4J5n.useState)(!inProp);
    // TODO: I think this needs to be in an effect
    if (inProp && exited) setExited(false);
    const ref = $e199ad1e49a29bc3$export$7b286972b8d8ccbf({
        in: !!inProp,
        onTransition: (options)=>{
            const onFinish = ()=>{
                if (options.isStale()) return;
                if (options.in) onEntered == null || onEntered(options.element, options.initial);
                else {
                    setExited(true);
                    onExited == null || onExited(options.element);
                }
            };
            Promise.resolve(transition(options)).then(onFinish, (error)=>{
                if (!options.in) setExited(true);
                throw error;
            });
        }
    });
    const combinedRef = (0, $a9894662a4aebec5$export$2e2bcd8739ae039)(ref, children.ref);
    return exited && !inProp ? null : /*#__PURE__*/ (0, $d4J5n.cloneElement)(children, {
        ref: combinedRef
    });
}
function $e199ad1e49a29bc3$export$f41d64aae6d6dba5(component, runTransition, props) {
    if (component) return /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $2840dd6ed381055c$export$2e2bcd8739ae039), Object.assign({}, props, {
        component: component
    }));
    if (runTransition) return /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)($e199ad1e49a29bc3$export$2e2bcd8739ae039, Object.assign({}, props, {
        transition: runTransition
    }));
    return /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $b912932c83bc02bb$export$2e2bcd8739ae039), Object.assign({}, props));
}


/* eslint-disable import/prefer-default-export */ function $078996a8cd36cb94$export$806fcc22e55e107d(e) {
    return e.code === "Escape" || e.keyCode === 27;
}



const $7194a28e54962c89$var$_excluded = [
    "show",
    "role",
    "className",
    "style",
    "children",
    "backdrop",
    "keyboard",
    "onBackdropClick",
    "onEscapeKeyDown",
    "transition",
    "runTransition",
    "backdropTransition",
    "runBackdropTransition",
    "autoFocus",
    "enforceFocus",
    "restoreFocus",
    "restoreFocusOptions",
    "renderDialog",
    "renderBackdrop",
    "manager",
    "container",
    "onShow",
    "onHide",
    "onExit",
    "onExited",
    "onExiting",
    "onEnter",
    "onEntering",
    "onEntered"
];
function $7194a28e54962c89$var$_objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
let $7194a28e54962c89$var$manager;
function $7194a28e54962c89$var$getManager(window) {
    if (!$7194a28e54962c89$var$manager) $7194a28e54962c89$var$manager = new (0, $7ed3c25f7b0554d2$export$2e2bcd8739ae039)({
        ownerDocument: window == null ? void 0 : window.document
    });
    return $7194a28e54962c89$var$manager;
}
function $7194a28e54962c89$var$useModalManager(provided) {
    const window = (0, $91885701e67952e7$export$2e2bcd8739ae039)();
    const modalManager = provided || $7194a28e54962c89$var$getManager(window);
    const modal = (0, $d4J5n.useRef)({
        dialog: null,
        backdrop: null
    });
    return Object.assign(modal.current, {
        add: ()=>modalManager.add(modal.current),
        remove: ()=>modalManager.remove(modal.current),
        isTopModal: ()=>modalManager.isTopModal(modal.current),
        setDialogRef: (0, $d4J5n.useCallback)((ref)=>{
            modal.current.dialog = ref;
        }, []),
        setBackdropRef: (0, $d4J5n.useCallback)((ref)=>{
            modal.current.backdrop = ref;
        }, [])
    });
}
const $7194a28e54962c89$var$Modal = /*#__PURE__*/ (0, $d4J5n.forwardRef)((_ref, ref)=>{
    let { show: show = false, role: role = "dialog", className: className, style: style, children: children, backdrop: backdrop = true, keyboard: keyboard = true, onBackdropClick: onBackdropClick, onEscapeKeyDown: onEscapeKeyDown, transition: transition, runTransition: runTransition, backdropTransition: backdropTransition, runBackdropTransition: runBackdropTransition, autoFocus: autoFocus = true, enforceFocus: enforceFocus = true, restoreFocus: restoreFocus = true, restoreFocusOptions: restoreFocusOptions, renderDialog: renderDialog, renderBackdrop: renderBackdrop = (props)=>/*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)("div", Object.assign({}, props)), manager: providedManager, container: containerRef, onShow: onShow, onHide: onHide = ()=>{}, onExit: onExit, onExited: onExited, onExiting: onExiting, onEnter: onEnter, onEntering: onEntering, onEntered: onEntered } = _ref, rest = $7194a28e54962c89$var$_objectWithoutPropertiesLoose(_ref, $7194a28e54962c89$var$_excluded);
    const ownerWindow = (0, $91885701e67952e7$export$2e2bcd8739ae039)();
    const container = (0, $9c7ecb213823f82d$export$2e2bcd8739ae039)(containerRef);
    const modal = $7194a28e54962c89$var$useModalManager(providedManager);
    const isMounted = (0, $c1016c3ed292ce8c$export$2e2bcd8739ae039)();
    const prevShow = (0, $80bb719e1b4dbca8$export$2e2bcd8739ae039)(show);
    const [exited, setExited] = (0, $d4J5n.useState)(!show);
    const lastFocusRef = (0, $d4J5n.useRef)(null);
    (0, $d4J5n.useImperativeHandle)(ref, ()=>modal, [
        modal
    ]);
    if ((0, $58451f2675491163$export$2e2bcd8739ae039) && !prevShow && show) lastFocusRef.current = (0, $db83e6d2eac2d5d3$export$2e2bcd8739ae039)(ownerWindow == null ? void 0 : ownerWindow.document);
    // TODO: I think this needs to be in an effect
    if (show && exited) setExited(false);
    const handleShow = (0, $68afd5c9279b438e$export$2e2bcd8739ae039)(()=>{
        modal.add();
        removeKeydownListenerRef.current = (0, $5cd5956423aa7273$export$2e2bcd8739ae039)(document, "keydown", handleDocumentKeyDown);
        removeFocusListenerRef.current = (0, $5cd5956423aa7273$export$2e2bcd8739ae039)(document, "focus", // the timeout is necessary b/c this will run before the new modal is mounted
        // and so steals focus from it
        ()=>setTimeout(handleEnforceFocus), true);
        if (onShow) onShow();
        // autofocus after onShow to not trigger a focus event for previous
        // modals before this one is shown.
        if (autoFocus) {
            var _modal$dialog$ownerDo, _modal$dialog;
            const currentActiveElement = (0, $db83e6d2eac2d5d3$export$2e2bcd8739ae039)((_modal$dialog$ownerDo = (_modal$dialog = modal.dialog) == null ? void 0 : _modal$dialog.ownerDocument) != null ? _modal$dialog$ownerDo : ownerWindow == null ? void 0 : ownerWindow.document);
            if (modal.dialog && currentActiveElement && !(0, $a0159a063b152c6b$export$2e2bcd8739ae039)(modal.dialog, currentActiveElement)) {
                lastFocusRef.current = currentActiveElement;
                modal.dialog.focus();
            }
        }
    });
    const handleHide = (0, $68afd5c9279b438e$export$2e2bcd8739ae039)(()=>{
        modal.remove();
        removeKeydownListenerRef.current == null || removeKeydownListenerRef.current();
        removeFocusListenerRef.current == null || removeFocusListenerRef.current();
        if (restoreFocus) {
            var _lastFocusRef$current;
            // Support: <=IE11 doesn't support `focus()` on svg elements (RB: #917)
            (_lastFocusRef$current = lastFocusRef.current) == null || _lastFocusRef$current.focus == null || _lastFocusRef$current.focus(restoreFocusOptions);
            lastFocusRef.current = null;
        }
    });
    // TODO: try and combine these effects: https://github.com/react-bootstrap/react-overlays/pull/794#discussion_r409954120
    // Show logic when:
    //  - show is `true` _and_ `container` has resolved
    (0, $d4J5n.useEffect)(()=>{
        if (!show || !container) return;
        handleShow();
    }, [
        show,
        container,
        /* should never change: */ handleShow
    ]);
    // Hide cleanup logic when:
    //  - `exited` switches to true
    //  - component unmounts;
    (0, $d4J5n.useEffect)(()=>{
        if (!exited) return;
        handleHide();
    }, [
        exited,
        handleHide
    ]);
    (0, $4c6f8169c25b62ff$export$2e2bcd8739ae039)(()=>{
        handleHide();
    });
    // --------------------------------
    const handleEnforceFocus = (0, $68afd5c9279b438e$export$2e2bcd8739ae039)(()=>{
        if (!enforceFocus || !isMounted() || !modal.isTopModal()) return;
        const currentActiveElement = (0, $db83e6d2eac2d5d3$export$2e2bcd8739ae039)(ownerWindow == null ? void 0 : ownerWindow.document);
        if (modal.dialog && currentActiveElement && !(0, $a0159a063b152c6b$export$2e2bcd8739ae039)(modal.dialog, currentActiveElement)) modal.dialog.focus();
    });
    const handleBackdropClick = (0, $68afd5c9279b438e$export$2e2bcd8739ae039)((e)=>{
        if (e.target !== e.currentTarget) return;
        onBackdropClick == null || onBackdropClick(e);
        if (backdrop === true) onHide();
    });
    const handleDocumentKeyDown = (0, $68afd5c9279b438e$export$2e2bcd8739ae039)((e)=>{
        if (keyboard && (0, $078996a8cd36cb94$export$806fcc22e55e107d)(e) && modal.isTopModal()) {
            onEscapeKeyDown == null || onEscapeKeyDown(e);
            if (!e.defaultPrevented) onHide();
        }
    });
    const removeFocusListenerRef = (0, $d4J5n.useRef)();
    const removeKeydownListenerRef = (0, $d4J5n.useRef)();
    const handleHidden = (...args)=>{
        setExited(true);
        onExited == null || onExited(...args);
    };
    if (!container) return null;
    const dialogProps = Object.assign({
        role: role,
        ref: modal.setDialogRef,
        // apparently only works on the dialog role element
        "aria-modal": role === "dialog" ? true : undefined
    }, rest, {
        style: style,
        className: className,
        tabIndex: -1
    });
    let dialog = renderDialog ? renderDialog(dialogProps) : /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)("div", Object.assign({}, dialogProps, {
        children: /*#__PURE__*/ $d4J5n.cloneElement(children, {
            role: "document"
        })
    }));
    dialog = (0, $e199ad1e49a29bc3$export$f41d64aae6d6dba5)(transition, runTransition, {
        unmountOnExit: true,
        mountOnEnter: true,
        appear: true,
        in: !!show,
        onExit: onExit,
        onExiting: onExiting,
        onExited: handleHidden,
        onEnter: onEnter,
        onEntering: onEntering,
        onEntered: onEntered,
        children: dialog
    });
    let backdropElement = null;
    if (backdrop) {
        backdropElement = renderBackdrop({
            ref: modal.setBackdropRef,
            onClick: handleBackdropClick
        });
        backdropElement = (0, $e199ad1e49a29bc3$export$f41d64aae6d6dba5)(backdropTransition, runBackdropTransition, {
            in: !!show,
            appear: true,
            mountOnEnter: true,
            unmountOnExit: true,
            children: backdropElement
        });
    }
    return /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $17b288f07ec57b56$exports.Fragment), {
        children: /*#__PURE__*/ (0, (/*@__PURE__*/$parcel$interopDefault($4723f549251dd88b$exports))).createPortal(/*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsxs)((0, $17b288f07ec57b56$exports.Fragment), {
            children: [
                backdropElement,
                dialog
            ]
        }), container)
    });
});
$7194a28e54962c89$var$Modal.displayName = "Modal";
var $7194a28e54962c89$export$2e2bcd8739ae039 = Object.assign($7194a28e54962c89$var$Modal, {
    Manager: (0, $7ed3c25f7b0554d2$export$2e2bcd8739ae039)
});




var $d4J5n = parcelRequire("d4J5n");





const $7fef6e8bf7870301$var$fadeStyles = {
    [(0, $3f4090778342b254$export$df38205c966be359)]: "show",
    [(0, $3f4090778342b254$export$78e9e6e3e014d60a)]: "show"
};
const $7fef6e8bf7870301$var$Fade = /*#__PURE__*/ $d4J5n.forwardRef(({ className: className, children: children, transitionClasses: transitionClasses = {}, onEnter: onEnter, ...rest }, ref)=>{
    const props = {
        in: false,
        timeout: 300,
        mountOnEnter: false,
        unmountOnExit: false,
        appear: false,
        ...rest
    };
    const handleEnter = (0, $d4J5n.useCallback)((node, isAppearing)=>{
        (0, $4d17e9d44738863d$export$2e2bcd8739ae039)(node);
        onEnter == null || onEnter(node, isAppearing);
    }, [
        onEnter
    ]);
    return /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $f25667ced1e5fc34$export$2e2bcd8739ae039), {
        ref: ref,
        addEndListener: (0, $5b1dd67c84e7f95b$export$2e2bcd8739ae039),
        ...props,
        onEnter: handleEnter,
        childRef: children.ref,
        children: (status, innerProps)=>/*#__PURE__*/ $d4J5n.cloneElement(children, {
                ...innerProps,
                className: (0, (/*@__PURE__*/$parcel$interopDefault($4f96bb9b3141308a$exports)))("fade", className, children.props.className, $7fef6e8bf7870301$var$fadeStyles[status], transitionClasses[status])
            })
    });
});
$7fef6e8bf7870301$var$Fade.displayName = "Fade";
var $7fef6e8bf7870301$export$2e2bcd8739ae039 = $7fef6e8bf7870301$var$Fade;



var $d4J5n = parcelRequire("d4J5n");



"use client";
const $56dcc3b90a69369e$var$OffcanvasBody = /*#__PURE__*/ $d4J5n.forwardRef(({ className: className, bsPrefix: bsPrefix, as: Component = "div", ...props }, ref)=>{
    bsPrefix = (0, $d2965fbad540669a$export$7f387860ebffb32c)(bsPrefix, "offcanvas-body");
    return /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)(Component, {
        ref: ref,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($4f96bb9b3141308a$exports)))(className, bsPrefix),
        ...props
    });
});
$56dcc3b90a69369e$var$OffcanvasBody.displayName = "OffcanvasBody";
var $56dcc3b90a69369e$export$2e2bcd8739ae039 = $56dcc3b90a69369e$var$OffcanvasBody;




var $d4J5n = parcelRequire("d4J5n");





"use client";
const $b3633e2612054180$var$transitionStyles = {
    [(0, $3f4090778342b254$export$df38205c966be359)]: "show",
    [(0, $3f4090778342b254$export$78e9e6e3e014d60a)]: "show"
};
const $b3633e2612054180$var$OffcanvasToggling = /*#__PURE__*/ $d4J5n.forwardRef(({ bsPrefix: bsPrefix, className: className, children: children, in: inProp = false, mountOnEnter: mountOnEnter = false, unmountOnExit: unmountOnExit = false, appear: appear = false, ...props }, ref)=>{
    bsPrefix = (0, $d2965fbad540669a$export$7f387860ebffb32c)(bsPrefix, "offcanvas");
    return /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $f25667ced1e5fc34$export$2e2bcd8739ae039), {
        ref: ref,
        addEndListener: (0, $5b1dd67c84e7f95b$export$2e2bcd8739ae039),
        in: inProp,
        mountOnEnter: mountOnEnter,
        unmountOnExit: unmountOnExit,
        appear: appear,
        ...props,
        childRef: children.ref,
        children: (status, innerProps)=>/*#__PURE__*/ $d4J5n.cloneElement(children, {
                ...innerProps,
                className: (0, (/*@__PURE__*/$parcel$interopDefault($4f96bb9b3141308a$exports)))(className, children.props.className, (status === (0, $3f4090778342b254$export$df38205c966be359) || status === (0, $3f4090778342b254$export$4aacc83d4d59139f)) && `${bsPrefix}-toggling`, $b3633e2612054180$var$transitionStyles[status])
            })
    });
});
$b3633e2612054180$var$OffcanvasToggling.displayName = "OffcanvasToggling";
var $b3633e2612054180$export$2e2bcd8739ae039 = $b3633e2612054180$var$OffcanvasToggling;



var $d4J5n = parcelRequire("d4J5n");
"use client";
const $cf9a4150f313db6b$var$ModalContext = /*#__PURE__*/ $d4J5n.createContext({
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onHide () {}
});
var $cf9a4150f313db6b$export$2e2bcd8739ae039 = $cf9a4150f313db6b$var$ModalContext;





var $d4J5n = parcelRequire("d4J5n");


var $d4J5n = parcelRequire("d4J5n");



var $d4J5n = parcelRequire("d4J5n");


const $83d54db12e0899b6$var$propTypes = {
    /** An accessible label indicating the relevant information about the Close Button. */ "aria-label": (0, (/*@__PURE__*/$parcel$interopDefault($2cf4efeb0ce83047$exports))).string,
    /** A callback fired after the Close Button is clicked. */ onClick: (0, (/*@__PURE__*/$parcel$interopDefault($2cf4efeb0ce83047$exports))).func,
    /**
   * Render different color variant for the button.
   *
   * Omitting this will render the default dark color.
   */ variant: (0, (/*@__PURE__*/$parcel$interopDefault($2cf4efeb0ce83047$exports))).oneOf([
        "white"
    ])
};
const $83d54db12e0899b6$var$CloseButton = /*#__PURE__*/ $d4J5n.forwardRef(({ className: className, variant: variant, "aria-label": ariaLabel = "Close", ...props }, ref)=>/*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)("button", {
        ref: ref,
        type: "button",
        className: (0, (/*@__PURE__*/$parcel$interopDefault($4f96bb9b3141308a$exports)))("btn-close", variant && `btn-close-${variant}`, className),
        "aria-label": ariaLabel,
        ...props
    }));
$83d54db12e0899b6$var$CloseButton.displayName = "CloseButton";
$83d54db12e0899b6$var$CloseButton.propTypes = $83d54db12e0899b6$var$propTypes;
var $83d54db12e0899b6$export$2e2bcd8739ae039 = $83d54db12e0899b6$var$CloseButton;




"use client";
const $4b0389bf825c94df$var$AbstractModalHeader = /*#__PURE__*/ $d4J5n.forwardRef(({ closeLabel: closeLabel = "Close", closeVariant: closeVariant, closeButton: closeButton = false, onHide: onHide, children: children, ...props }, ref)=>{
    const context = (0, $d4J5n.useContext)((0, $cf9a4150f313db6b$export$2e2bcd8739ae039));
    const handleClick = (0, $68afd5c9279b438e$export$2e2bcd8739ae039)(()=>{
        context == null || context.onHide();
        onHide == null || onHide();
    });
    return /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsxs)("div", {
        ref: ref,
        ...props,
        children: [
            children,
            closeButton && /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $83d54db12e0899b6$export$2e2bcd8739ae039), {
                "aria-label": closeLabel,
                variant: closeVariant,
                onClick: handleClick
            })
        ]
    });
});
var $4b0389bf825c94df$export$2e2bcd8739ae039 = $4b0389bf825c94df$var$AbstractModalHeader;



"use client";
const $40c3df555a50b12b$var$OffcanvasHeader = /*#__PURE__*/ $d4J5n.forwardRef(({ bsPrefix: bsPrefix, className: className, closeLabel: closeLabel = "Close", closeButton: closeButton = false, ...props }, ref)=>{
    bsPrefix = (0, $d2965fbad540669a$export$7f387860ebffb32c)(bsPrefix, "offcanvas-header");
    return /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $4b0389bf825c94df$export$2e2bcd8739ae039), {
        ref: ref,
        ...props,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($4f96bb9b3141308a$exports)))(className, bsPrefix),
        closeLabel: closeLabel,
        closeButton: closeButton
    });
});
$40c3df555a50b12b$var$OffcanvasHeader.displayName = "OffcanvasHeader";
var $40c3df555a50b12b$export$2e2bcd8739ae039 = $40c3df555a50b12b$var$OffcanvasHeader;



var $d4J5n = parcelRequire("d4J5n");




"use client";
const $3fdc3f2417d0938b$var$DivStyledAsH5 = (0, $d6967463906b333e$export$2e2bcd8739ae039)("h5");
const $3fdc3f2417d0938b$var$OffcanvasTitle = /*#__PURE__*/ $d4J5n.forwardRef(({ className: className, bsPrefix: bsPrefix, as: Component = $3fdc3f2417d0938b$var$DivStyledAsH5, ...props }, ref)=>{
    bsPrefix = (0, $d2965fbad540669a$export$7f387860ebffb32c)(bsPrefix, "offcanvas-title");
    return /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)(Component, {
        ref: ref,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($4f96bb9b3141308a$exports)))(className, bsPrefix),
        ...props
    });
});
$3fdc3f2417d0938b$var$OffcanvasTitle.displayName = "OffcanvasTitle";
var $3fdc3f2417d0938b$export$2e2bcd8739ae039 = $3fdc3f2417d0938b$var$OffcanvasTitle;



/**
 * Checks if a given element has a CSS class.
 * 
 * @param element the element
 * @param className the CSS class name
 */ function $f8a618a7f523a685$export$2e2bcd8739ae039(element, className) {
    if (element.classList) return !!className && element.classList.contains(className);
    return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}


function $89f3f3a91355b194$export$2e2bcd8739ae039(element, className) {
    if (element.classList) element.classList.add(className);
    else if (!(0, $f8a618a7f523a685$export$2e2bcd8739ae039)(element, className)) {
        if (typeof element.className === "string") element.className = element.className + " " + className;
        else element.setAttribute("class", (element.className && element.className.baseVal || "") + " " + className);
    }
}




function $bc1801a5565f056e$var$replaceClassName(origClass, classToRemove) {
    return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
}
function $bc1801a5565f056e$export$2e2bcd8739ae039(element, className) {
    if (element.classList) element.classList.remove(className);
    else if (typeof element.className === "string") element.className = $bc1801a5565f056e$var$replaceClassName(element.className, className);
    else element.setAttribute("class", $bc1801a5565f056e$var$replaceClassName(element.className && element.className.baseVal || "", className));
}



const $fc1f0fe9258b3196$var$Selector = {
    FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
    STICKY_CONTENT: ".sticky-top",
    NAVBAR_TOGGLER: ".navbar-toggler"
};
class $fc1f0fe9258b3196$var$BootstrapModalManager extends (0, $7ed3c25f7b0554d2$export$2e2bcd8739ae039) {
    adjustAndStore(prop, element, adjust) {
        const actual = element.style[prop];
        // TODO: DOMStringMap and CSSStyleDeclaration aren't strictly compatible
        // @ts-ignore
        element.dataset[prop] = actual;
        (0, $38cb2da359586ba6$export$2e2bcd8739ae039)(element, {
            [prop]: `${parseFloat((0, $38cb2da359586ba6$export$2e2bcd8739ae039)(element, prop)) + adjust}px`
        });
    }
    restore(prop, element) {
        const value = element.dataset[prop];
        if (value !== undefined) {
            delete element.dataset[prop];
            (0, $38cb2da359586ba6$export$2e2bcd8739ae039)(element, {
                [prop]: value
            });
        }
    }
    setContainerStyle(containerState) {
        super.setContainerStyle(containerState);
        const container = this.getElement();
        (0, $89f3f3a91355b194$export$2e2bcd8739ae039)(container, "modal-open");
        if (!containerState.scrollBarWidth) return;
        const paddingProp = this.isRTL ? "paddingLeft" : "paddingRight";
        const marginProp = this.isRTL ? "marginLeft" : "marginRight";
        (0, $7c9dd8f4e017282f$export$2e2bcd8739ae039)(container, $fc1f0fe9258b3196$var$Selector.FIXED_CONTENT).forEach((el)=>this.adjustAndStore(paddingProp, el, containerState.scrollBarWidth));
        (0, $7c9dd8f4e017282f$export$2e2bcd8739ae039)(container, $fc1f0fe9258b3196$var$Selector.STICKY_CONTENT).forEach((el)=>this.adjustAndStore(marginProp, el, -containerState.scrollBarWidth));
        (0, $7c9dd8f4e017282f$export$2e2bcd8739ae039)(container, $fc1f0fe9258b3196$var$Selector.NAVBAR_TOGGLER).forEach((el)=>this.adjustAndStore(marginProp, el, containerState.scrollBarWidth));
    }
    removeContainerStyle(containerState) {
        super.removeContainerStyle(containerState);
        const container = this.getElement();
        (0, $bc1801a5565f056e$export$2e2bcd8739ae039)(container, "modal-open");
        const paddingProp = this.isRTL ? "paddingLeft" : "paddingRight";
        const marginProp = this.isRTL ? "marginLeft" : "marginRight";
        (0, $7c9dd8f4e017282f$export$2e2bcd8739ae039)(container, $fc1f0fe9258b3196$var$Selector.FIXED_CONTENT).forEach((el)=>this.restore(paddingProp, el));
        (0, $7c9dd8f4e017282f$export$2e2bcd8739ae039)(container, $fc1f0fe9258b3196$var$Selector.STICKY_CONTENT).forEach((el)=>this.restore(marginProp, el));
        (0, $7c9dd8f4e017282f$export$2e2bcd8739ae039)(container, $fc1f0fe9258b3196$var$Selector.NAVBAR_TOGGLER).forEach((el)=>this.restore(marginProp, el));
    }
}
let $fc1f0fe9258b3196$var$sharedManager;
function $fc1f0fe9258b3196$export$a03641438014b436(options) {
    if (!$fc1f0fe9258b3196$var$sharedManager) $fc1f0fe9258b3196$var$sharedManager = new $fc1f0fe9258b3196$var$BootstrapModalManager(options);
    return $fc1f0fe9258b3196$var$sharedManager;
}
var $fc1f0fe9258b3196$export$2e2bcd8739ae039 = $fc1f0fe9258b3196$var$BootstrapModalManager;



"use client";
function $1ade17fd0766707e$var$DialogTransition(props) {
    return /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $b3633e2612054180$export$2e2bcd8739ae039), {
        ...props
    });
}
function $1ade17fd0766707e$var$BackdropTransition(props) {
    return /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $7fef6e8bf7870301$export$2e2bcd8739ae039), {
        ...props
    });
}
const $1ade17fd0766707e$var$Offcanvas = /*#__PURE__*/ $d4J5n.forwardRef(({ bsPrefix: bsPrefix, className: className, children: children, "aria-labelledby": ariaLabelledby, placement: placement = "start", responsive: responsive, show: /* BaseModal props */ show = false, backdrop: backdrop = true, keyboard: keyboard = true, scroll: scroll = false, onEscapeKeyDown: onEscapeKeyDown, onShow: onShow, onHide: onHide, container: container, autoFocus: autoFocus = true, enforceFocus: enforceFocus = true, restoreFocus: restoreFocus = true, restoreFocusOptions: restoreFocusOptions, onEntered: onEntered, onExit: onExit, onExiting: onExiting, onEnter: onEnter, onEntering: onEntering, onExited: onExited, backdropClassName: backdropClassName, manager: propsManager, renderStaticNode: renderStaticNode = false, ...props }, ref)=>{
    const modalManager = (0, $d4J5n.useRef)();
    bsPrefix = (0, $d2965fbad540669a$export$7f387860ebffb32c)(bsPrefix, "offcanvas");
    const { onToggle: onToggle } = (0, $d4J5n.useContext)((0, $9bbbbca1aebd7b07$export$2e2bcd8739ae039)) || {};
    const [showOffcanvas, setShowOffcanvas] = (0, $d4J5n.useState)(false);
    const hideResponsiveOffcanvas = (0, $a6cd4d109b0c8d09$export$2e2bcd8739ae039)(responsive || "xs", "up");
    (0, $d4J5n.useEffect)(()=>{
        // Handles the case where screen is resized while the responsive
        // offcanvas is shown. If `responsive` not provided, just use `show`.
        setShowOffcanvas(responsive ? show && !hideResponsiveOffcanvas : show);
    }, [
        show,
        responsive,
        hideResponsiveOffcanvas
    ]);
    const handleHide = (0, $68afd5c9279b438e$export$2e2bcd8739ae039)(()=>{
        onToggle == null || onToggle();
        onHide == null || onHide();
    });
    const modalContext = (0, $d4J5n.useMemo)(()=>({
            onHide: handleHide
        }), [
        handleHide
    ]);
    function getModalManager() {
        if (propsManager) return propsManager;
        if (scroll) {
            // Have to use a different modal manager since the shared
            // one handles overflow.
            if (!modalManager.current) modalManager.current = new (0, $fc1f0fe9258b3196$export$2e2bcd8739ae039)({
                handleContainerOverflow: false
            });
            return modalManager.current;
        }
        return (0, $fc1f0fe9258b3196$export$a03641438014b436)();
    }
    const handleEnter = (node, ...args)=>{
        if (node) node.style.visibility = "visible";
        onEnter == null || onEnter(node, ...args);
    };
    const handleExited = (node, ...args)=>{
        if (node) node.style.visibility = "";
        onExited == null || onExited(...args);
    };
    const renderBackdrop = (0, $d4J5n.useCallback)((backdropProps)=>/*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)("div", {
            ...backdropProps,
            className: (0, (/*@__PURE__*/$parcel$interopDefault($4f96bb9b3141308a$exports)))(`${bsPrefix}-backdrop`, backdropClassName)
        }), [
        backdropClassName,
        bsPrefix
    ]);
    const renderDialog = (dialogProps)=>/*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)("div", {
            ...dialogProps,
            ...props,
            className: (0, (/*@__PURE__*/$parcel$interopDefault($4f96bb9b3141308a$exports)))(className, responsive ? `${bsPrefix}-${responsive}` : bsPrefix, `${bsPrefix}-${placement}`),
            "aria-labelledby": ariaLabelledby,
            children: children
        });
    return /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsxs)((0, $17b288f07ec57b56$exports.Fragment), {
        children: [
            !showOffcanvas && (responsive || renderStaticNode) && renderDialog({}),
            /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $cf9a4150f313db6b$export$2e2bcd8739ae039).Provider, {
                value: modalContext,
                children: /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $7194a28e54962c89$export$2e2bcd8739ae039), {
                    show: showOffcanvas,
                    ref: ref,
                    backdrop: backdrop,
                    container: container,
                    keyboard: keyboard,
                    autoFocus: autoFocus,
                    enforceFocus: enforceFocus && !scroll,
                    restoreFocus: restoreFocus,
                    restoreFocusOptions: restoreFocusOptions,
                    onEscapeKeyDown: onEscapeKeyDown,
                    onShow: onShow,
                    onHide: handleHide,
                    onEnter: handleEnter,
                    onEntering: onEntering,
                    onEntered: onEntered,
                    onExit: onExit,
                    onExiting: onExiting,
                    onExited: handleExited,
                    manager: getModalManager(),
                    transition: $1ade17fd0766707e$var$DialogTransition,
                    backdropTransition: $1ade17fd0766707e$var$BackdropTransition,
                    renderBackdrop: renderBackdrop,
                    renderDialog: renderDialog
                })
            })
        ]
    });
});
$1ade17fd0766707e$var$Offcanvas.displayName = "Offcanvas";
var $1ade17fd0766707e$export$2e2bcd8739ae039 = Object.assign($1ade17fd0766707e$var$Offcanvas, {
    Body: (0, $56dcc3b90a69369e$export$2e2bcd8739ae039),
    Header: (0, $40c3df555a50b12b$export$2e2bcd8739ae039),
    Title: (0, $3fdc3f2417d0938b$export$2e2bcd8739ae039)
});




"use client";
const $d32a4c35adfc562c$var$NavbarOffcanvas = /*#__PURE__*/ $d4J5n.forwardRef((props, ref)=>{
    const context = (0, $d4J5n.useContext)((0, $9bbbbca1aebd7b07$export$2e2bcd8739ae039));
    return /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $1ade17fd0766707e$export$2e2bcd8739ae039), {
        ref: ref,
        show: !!(context != null && context.expanded),
        ...props,
        renderStaticNode: true
    });
});
$d32a4c35adfc562c$var$NavbarOffcanvas.displayName = "NavbarOffcanvas";
var $d32a4c35adfc562c$export$2e2bcd8739ae039 = $d32a4c35adfc562c$var$NavbarOffcanvas;





var $d4J5n = parcelRequire("d4J5n");



"use client";
const $563f440c7ee5a91e$var$NavbarText = /*#__PURE__*/ $d4J5n.forwardRef(({ className: className, bsPrefix: bsPrefix, as: Component = "span", ...props }, ref)=>{
    bsPrefix = (0, $d2965fbad540669a$export$7f387860ebffb32c)(bsPrefix, "navbar-text");
    return /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)(Component, {
        ref: ref,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($4f96bb9b3141308a$exports)))(className, bsPrefix),
        ...props
    });
});
$563f440c7ee5a91e$var$NavbarText.displayName = "NavbarText";
var $563f440c7ee5a91e$export$2e2bcd8739ae039 = $563f440c7ee5a91e$var$NavbarText;



"use client";
const $7172cc25a1d455dc$var$Navbar = /*#__PURE__*/ $d4J5n.forwardRef((props, ref)=>{
    const { bsPrefix: initialBsPrefix, expand: expand = true, variant: variant = "light", bg: bg, fixed: fixed, sticky: sticky, className: className, // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: Component = "nav", expanded: expanded, onToggle: onToggle, onSelect: onSelect, collapseOnSelect: collapseOnSelect = false, ...controlledProps } = (0, $cc3cb09e031e9c82$export$2e2bcd8739ae039)(props, {
        expanded: "onToggle"
    });
    const bsPrefix = (0, $d2965fbad540669a$export$7f387860ebffb32c)(initialBsPrefix, "navbar");
    const handleCollapse = (0, $d4J5n.useCallback)((...args)=>{
        onSelect == null || onSelect(...args);
        if (collapseOnSelect && expanded) onToggle == null || onToggle(false);
    }, [
        onSelect,
        collapseOnSelect,
        expanded,
        onToggle
    ]);
    // will result in some false positives but that seems better
    // than false negatives. strict `undefined` check allows explicit
    // "nulling" of the role if the user really doesn't want one
    if (controlledProps.role === undefined && Component !== "nav") controlledProps.role = "navigation";
    let expandClass = `${bsPrefix}-expand`;
    if (typeof expand === "string") expandClass = `${expandClass}-${expand}`;
    const navbarContext = (0, $d4J5n.useMemo)(()=>({
            onToggle: ()=>onToggle == null ? void 0 : onToggle(!expanded),
            bsPrefix: bsPrefix,
            expanded: !!expanded,
            expand: expand
        }), [
        bsPrefix,
        expanded,
        expand,
        onToggle
    ]);
    return /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $9bbbbca1aebd7b07$export$2e2bcd8739ae039).Provider, {
        value: navbarContext,
        children: /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $fea965168a445b6e$export$2e2bcd8739ae039).Provider, {
            value: handleCollapse,
            children: /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)(Component, {
                ref: ref,
                ...controlledProps,
                className: (0, (/*@__PURE__*/$parcel$interopDefault($4f96bb9b3141308a$exports)))(className, bsPrefix, expand && expandClass, variant && `${bsPrefix}-${variant}`, bg && `bg-${bg}`, sticky && `sticky-${sticky}`, fixed && `fixed-${fixed}`)
            })
        })
    });
});
$7172cc25a1d455dc$var$Navbar.displayName = "Navbar";
var $7172cc25a1d455dc$export$2e2bcd8739ae039 = Object.assign($7172cc25a1d455dc$var$Navbar, {
    Brand: (0, $2444b991a83dd5f7$export$2e2bcd8739ae039),
    Collapse: (0, $7f864fe6de641ad8$export$2e2bcd8739ae039),
    Offcanvas: (0, $d32a4c35adfc562c$export$2e2bcd8739ae039),
    Text: (0, $563f440c7ee5a91e$export$2e2bcd8739ae039),
    Toggle: (0, $5d5005df7bbc3a17$export$2e2bcd8739ae039)
});




const $b161670f21dec5ae$export$214ae410b202e65a = ({ user: user, movies: movies, onLoggedOut: onLoggedOut })=>{
    return /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $7172cc25a1d455dc$export$2e2bcd8739ae039), {
        bg: "light",
        expand: "lg",
        children: /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsxs)((0, $c2086d5149465e07$export$2e2bcd8739ae039), {
            children: [
                /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $7172cc25a1d455dc$export$2e2bcd8739ae039).Brand, {
                    as: (0, $7b9bbaa53cb01344$export$a6c7ac8248d6e38a),
                    to: "/",
                    children: "MyFlix App"
                }),
                /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $7172cc25a1d455dc$export$2e2bcd8739ae039).Toggle, {
                    "aria-controls": "basic-navbar-nav"
                }),
                /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $7172cc25a1d455dc$export$2e2bcd8739ae039).Collapse, {
                    id: "basic-navbar-nav",
                    children: /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsxs)((0, $9fe589e2b6a6581d$export$2e2bcd8739ae039), {
                        className: "me-auto",
                        children: [
                            !user && /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsxs)((0, $17b288f07ec57b56$exports.Fragment), {
                                children: [
                                    /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $9fe589e2b6a6581d$export$2e2bcd8739ae039).Link, {
                                        as: (0, $7b9bbaa53cb01344$export$a6c7ac8248d6e38a),
                                        to: "/login",
                                        children: "Login"
                                    }),
                                    /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $9fe589e2b6a6581d$export$2e2bcd8739ae039).Link, {
                                        as: (0, $7b9bbaa53cb01344$export$a6c7ac8248d6e38a),
                                        to: "/signup",
                                        children: "Signup"
                                    })
                                ]
                            }),
                            user && /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsxs)((0, $17b288f07ec57b56$exports.Fragment), {
                                children: [
                                    /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $9fe589e2b6a6581d$export$2e2bcd8739ae039).Link, {
                                        as: (0, $7b9bbaa53cb01344$export$a6c7ac8248d6e38a),
                                        to: "/",
                                        children: "Home"
                                    }),
                                    /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $9fe589e2b6a6581d$export$2e2bcd8739ae039).Link, {
                                        as: (0, $7b9bbaa53cb01344$export$a6c7ac8248d6e38a),
                                        to: "/profile",
                                        children: "Profile"
                                    }),
                                    /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $9fe589e2b6a6581d$export$2e2bcd8739ae039).Link, {
                                        onClick: onLoggedOut,
                                        children: "Logout"
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    });
};
$b161670f21dec5ae$export$214ae410b202e65a.PropTypes = {
    user: (0, (/*@__PURE__*/$parcel$interopDefault($2cf4efeb0ce83047$exports))).object.isRequired,
    onLoggedOut: (0, (/*@__PURE__*/$parcel$interopDefault($2cf4efeb0ce83047$exports))).func.isRequired
};




var $d4J5n = parcelRequire("d4J5n");



parcelRequire("d4J5n");

const $ce02eff8d75de961$export$c6ede3bfc40c5e4b = ({ email: email, name: name })=>{
    return /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsxs)("p", {
                children: [
                    "Username: ",
                    name,
                    " "
                ]
            }),
            /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsxs)("p", {
                children: [
                    "Email: ",
                    email,
                    " "
                ]
            })
        ]
    });
};
$ce02eff8d75de961$export$c6ede3bfc40c5e4b.PropTypes = {
    name: (0, (/*@__PURE__*/$parcel$interopDefault($2cf4efeb0ce83047$exports))).string.isRequired,
    email: (0, (/*@__PURE__*/$parcel$interopDefault($2cf4efeb0ce83047$exports))).string.isRequired
};



parcelRequire("d4J5n");





const $30abfa85da171a0a$export$d2ae44ae5a7d01ef = ({ user: user, favoriteMovies: favoriteMovies })=>{
    return /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsxs)((0, $361ced934de455a9$export$2e2bcd8739ae039), {
        children: [
            /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $e0a530bac7696c79$export$2e2bcd8739ae039), {
                md: 12,
                children: /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)("h3", {
                    children: "My Movies"
                })
            }),
            /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $361ced934de455a9$export$2e2bcd8739ae039), {
                children: favoriteMovies.map((movie)=>{
                    return /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsxs)((0, $e0a530bac7696c79$export$2e2bcd8739ae039), {
                        className: "mb-5",
                        md: 4,
                        children: [
                            /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $7b9bbaa53cb01344$export$a6c7ac8248d6e38a), {
                                to: `/movies/${movie.title}`
                            }),
                            /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $3320258428206076$export$9bd698419030e459), {
                                movie: movie,
                                isFavorite: user.favoriteMovies.includes(movie.title)
                            })
                        ]
                    }, movie.id);
                })
            })
        ]
    });
};
$30abfa85da171a0a$export$d2ae44ae5a7d01ef.PropTypes = {
    favoriteMovies: (0, (/*@__PURE__*/$parcel$interopDefault($2cf4efeb0ce83047$exports))).array.isRequired,
    user: (0, (/*@__PURE__*/$parcel$interopDefault($2cf4efeb0ce83047$exports))).object.isRequired
};



parcelRequire("d4J5n");




const $3346e2a2c2c44462$export$75543167ef08d8e5 = ({ formData: formData, handleUpdate: handleUpdate, handleSubmit: handleSubmit, handleDeleteAccount: handleDeleteAccount })=>{
    return /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $361ced934de455a9$export$2e2bcd8739ae039), {
        children: /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsxs)((0, $500f6b476db973c5$export$2e2bcd8739ae039), {
            onSubmit: handleSubmit,
            children: [
                /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)("h3", {
                    children: "Update profile information"
                }),
                /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsxs)((0, $500f6b476db973c5$export$2e2bcd8739ae039).Group, {
                    className: "mb-2",
                    children: [
                        /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $500f6b476db973c5$export$2e2bcd8739ae039).Label, {
                            children: "Username:"
                        }),
                        /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $500f6b476db973c5$export$2e2bcd8739ae039).Control, {
                            type: "text",
                            minLength: 4,
                            value: formData.username,
                            onChange: (e)=>handleUpdate(e),
                            required: true
                        })
                    ]
                }),
                /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsxs)((0, $500f6b476db973c5$export$2e2bcd8739ae039).Group, {
                    className: "mb-2",
                    children: [
                        /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsxs)((0, $500f6b476db973c5$export$2e2bcd8739ae039).Label, {
                            children: [
                                "Password:",
                                /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)("p", {
                                    children: "Your new password must be at least 8 characters long."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $500f6b476db973c5$export$2e2bcd8739ae039).Control, {
                            type: "password",
                            minLength: 8,
                            value: formData.password,
                            onChange: (e)=>handleUpdate(e),
                            required: true
                        })
                    ]
                }),
                /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsxs)((0, $500f6b476db973c5$export$2e2bcd8739ae039).Group, {
                    className: "mb-2",
                    children: [
                        /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $500f6b476db973c5$export$2e2bcd8739ae039).Label, {
                            children: "Email:"
                        }),
                        /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $500f6b476db973c5$export$2e2bcd8739ae039).Control, {
                            type: "email",
                            value: formData.email,
                            onChange: (e)=>handleUpdate(e),
                            required: true
                        })
                    ]
                }),
                /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsxs)((0, $500f6b476db973c5$export$2e2bcd8739ae039).Group, {
                    className: "mb-4",
                    children: [
                        /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $500f6b476db973c5$export$2e2bcd8739ae039).Label, {
                            children: "Birthday:"
                        }),
                        /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $500f6b476db973c5$export$2e2bcd8739ae039).Control, {
                            type: "date",
                            value: formData.birthday.slice(0, 10),
                            onChange: (e)=>handleUpdate(e),
                            required: true
                        })
                    ]
                }),
                /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $28f73d2964a5e7b1$export$2e2bcd8739ae039), {
                    variant: "primary",
                    type: "submit",
                    children: "Submit Changes"
                }),
                /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $28f73d2964a5e7b1$export$2e2bcd8739ae039), {
                    onClick: ()=>handleDeleteAccount(),
                    variant: "outline-secondary",
                    className: "mx-3",
                    children: "Delete Account"
                })
            ]
        })
    });
};
$3346e2a2c2c44462$export$75543167ef08d8e5.PropTypes = {
    formData: (0, (/*@__PURE__*/$parcel$interopDefault($2cf4efeb0ce83047$exports))).object.isRequired,
    handleUpdate: (0, (/*@__PURE__*/$parcel$interopDefault($2cf4efeb0ce83047$exports))).func.isRequired,
    handleSubmit: (0, (/*@__PURE__*/$parcel$interopDefault($2cf4efeb0ce83047$exports))).func.isRequired,
    handleDeleteAccount: (0, (/*@__PURE__*/$parcel$interopDefault($2cf4efeb0ce83047$exports))).func.isRequired
};




const $1b2a016a565a1452$export$b378b4d12a0dcbde = ({ user: user, movies: movies, token: token })=>{
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const [username, setUsername] = (0, $d4J5n.useState)(storedUser.username);
    const [password, setPassword] = (0, $d4J5n.useState)(storedUser.password);
    const [email, setEmail] = (0, $d4J5n.useState)(storedUser.email);
    const [birthday, setBirthday] = (0, $d4J5n.useState)(storedUser.birthday);
    const [user, setUser] = (0, $d4J5n.useState)();
    const favoriteMovies = movies.filter((m)=>user.favoriteMovies.includes(m.title));
    const formData = {
        Username: username,
        Password: password,
        Email: email,
        Birthday: birthday
    };
    const handleSubmit = (event)=>{
        event.preventDefault(event);
        fetch(`https://my-movies-flix-db-60666e043a4b.herokuapp.com/users/${user.username}`, {
            method: "PUT",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        }).then((response)=>{
            if (response.ok) {
                alert("Update successful");
                window.location.reload();
                return response.json();
            }
            alert("Update failed");
        }).then((user)=>{
            if (user) {
                localStorage.setItem("user", JSON.stringify(user));
                setUser(user);
            }
        }).catch((error)=>{
            console.error(error);
        });
    };
    const handleUpdate = (e)=>{
        switch(e.target.type){
            case "text":
                setUsername(e.target.value);
                break;
            case "password":
                setPassword(e.target.value);
                break;
            case "email":
                setEmail(e.target.value);
                break;
            case "date":
                setBirthday(e.target.value);
            default:
        }
    };
    const handleDeleteAccount = ()=>{
        fetch(`https://my-movies-flix-db-60666e043a4b.herokuapp.com/users/${storedUser.username}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        }).then((response)=>{
            if (response.ok) {
                alert("Account deleted successfully");
                localStorage.clear();
                window.location.reload();
            } else alert("Something went wrong");
        });
    };
    (0, $d4J5n.useEffect)(()=>{
        if (!token) return;
        fetch("https://my-movies-flix-db-60666e043a4b.herokuapp.com/users", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response)=>response.json()).then((data)=>{
            console.log("Users data: ", data);
            const usersFromApi = data.map((resultUser)=>{
                return {
                    id: resultUser._id,
                    username: resultUser.username,
                    password: resultUser.password,
                    email: resultUser.email,
                    birthday: resultUser.birthday,
                    favoriteMovies: resultUser.favoriteMovies
                };
            });
            setUser(usersFromApi.find((u)=>u.username === localUser.username));
            console.log("Profile Saved User: " + JSON.stringify(user));
        }).catch((error)=>{
            console.error(error);
        });
    }, [
        token
    ]);
    return /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsxs)((0, $c2086d5149465e07$export$2e2bcd8739ae039), {
        children: [
            /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsxs)((0, $361ced934de455a9$export$2e2bcd8739ae039), {
                children: [
                    /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $a88e4ade28693468$export$2e2bcd8739ae039), {
                        className: "mb-5",
                        children: /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsxs)((0, $a88e4ade28693468$export$2e2bcd8739ae039).Body, {
                            children: [
                                /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $a88e4ade28693468$export$2e2bcd8739ae039).Title, {
                                    children: "My Profile"
                                }),
                                /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $a88e4ade28693468$export$2e2bcd8739ae039).Text, {
                                    children: user && /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $ce02eff8d75de961$export$c6ede3bfc40c5e4b), {
                                        name: user.username,
                                        email: user.email
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $a88e4ade28693468$export$2e2bcd8739ae039), {
                        className: "mb-5",
                        children: /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $a88e4ade28693468$export$2e2bcd8739ae039).Body, {
                            children: /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $3346e2a2c2c44462$export$75543167ef08d8e5), {
                                formData: formData,
                                handleUpdate: handleUpdate,
                                handleSubmit: handleSubmit,
                                handleDeleteAccount: handleDeleteAccount
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $361ced934de455a9$export$2e2bcd8739ae039), {
                children: /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $e0a530bac7696c79$export$2e2bcd8739ae039), {
                    className: "mb-5",
                    xs: 12,
                    md: 12,
                    children: favoriteMovies && /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $30abfa85da171a0a$export$d2ae44ae5a7d01ef), {
                        user: user,
                        favoriteMovies: favoriteMovies
                    })
                })
            })
        ]
    });
};
$1b2a016a565a1452$export$b378b4d12a0dcbde.PropTypes = {
    localUser: (0, (/*@__PURE__*/$parcel$interopDefault($2cf4efeb0ce83047$exports))).object.isRequired,
    movies: (0, (/*@__PURE__*/$parcel$interopDefault($2cf4efeb0ce83047$exports))).array.isRequired,
    token: (0, (/*@__PURE__*/$parcel$interopDefault($2cf4efeb0ce83047$exports))).string.isRequired
};


const $8a78d6a5f663606b$export$fa32cd27347e212e = ()=>{
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const storedToken = localStorage.getItem("token");
    const [movies, setMovies] = (0, $d4J5n.useState)([]);
    const [user, setUser] = (0, $d4J5n.useState)(storedUser ? storedUser : null);
    const [token, setToken] = (0, $d4J5n.useState)(storedToken ? storedToken : null);
    (0, $d4J5n.useEffect)(()=>{
        if (!token) return;
        fetch("https://my-movies-flix-db-60666e043a4b.herokuapp.com/movies", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response)=>response.json()).then((data)=>{
            console.log("Movies data: ", data);
            const moviesFromApi = data.map((movie)=>{
                return {
                    id: movie._id,
                    image: movie.ImagePath,
                    title: movie.Title,
                    description: movie.Description,
                    genre: movie.Genre.Name,
                    director: movie.Director.Name,
                    featured: movie.featured
                };
            });
            localStorage.setItem("movies", JSON.stringify(moviesFromApi));
            setMovies(moviesFromApi);
        });
    }, [
        token
    ]);
    return /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsxs)((0, $7b9bbaa53cb01344$export$9ba4e89fdfa1fc54), {
        children: [
            /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $b161670f21dec5ae$export$214ae410b202e65a), {
                user: user,
                onLoggedOut: ()=>{
                    setUser(null);
                    setToken(null);
                    localStorage.clear();
                }
            }),
            /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $361ced934de455a9$export$2e2bcd8739ae039), {
                className: "justify-content-md-center",
                children: /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsxs)((0, $5b1ea468d903474a$export$3565eb3d00ca5a74), {
                    children: [
                        /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $5b1ea468d903474a$export$e7b0ac011bb776c6), {
                            path: "/signup",
                            element: /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $17b288f07ec57b56$exports.Fragment), {
                                children: user ? /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $5b1ea468d903474a$export$444b3ab0cb9aec40), {
                                    to: "/"
                                }) : /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $e0a530bac7696c79$export$2e2bcd8739ae039), {
                                    md: 5,
                                    children: /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $44e984fc6201510c$export$25f3896ea1e09820), {})
                                })
                            })
                        }),
                        /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $5b1ea468d903474a$export$e7b0ac011bb776c6), {
                            path: "/login",
                            element: /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $17b288f07ec57b56$exports.Fragment), {
                                children: user ? /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $5b1ea468d903474a$export$444b3ab0cb9aec40), {
                                    to: "/"
                                }) : /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $e0a530bac7696c79$export$2e2bcd8739ae039), {
                                    md: 5,
                                    children: /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $7138a60219a89fa9$export$1582048ca8384970), {
                                        onLoggedIn: (user)=>setUser(user)
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $5b1ea468d903474a$export$e7b0ac011bb776c6), {
                            path: "/movies/:movieId",
                            element: /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $17b288f07ec57b56$exports.Fragment), {
                                children: !user ? /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $5b1ea468d903474a$export$444b3ab0cb9aec40), {
                                    to: "/login",
                                    replace: true
                                }) : movies.length === 0 ? /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $e0a530bac7696c79$export$2e2bcd8739ae039), {
                                    children: "The list is empty!"
                                }) : /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $e0a530bac7696c79$export$2e2bcd8739ae039), {
                                    md: 8,
                                    children: /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $d511bcfbcdb493dd$export$78d497080ea8f89a), {
                                        movies: movies
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $5b1ea468d903474a$export$e7b0ac011bb776c6), {
                            path: "/",
                            element: /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $17b288f07ec57b56$exports.Fragment), {
                                children: !user ? /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $5b1ea468d903474a$export$444b3ab0cb9aec40), {
                                    to: "/login",
                                    replace: true
                                }) : movies.length === 0 ? /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $e0a530bac7696c79$export$2e2bcd8739ae039), {
                                    children: "The list is empty!"
                                }) : /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $17b288f07ec57b56$exports.Fragment), {
                                    children: movies.map((movie)=>/*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $e0a530bac7696c79$export$2e2bcd8739ae039), {
                                            className: "mb-5",
                                            md: 3,
                                            sm: 12,
                                            children: /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $3320258428206076$export$9bd698419030e459), {
                                                movie: movie,
                                                isFavorite: user.favoriteMovies.includes(movie.title)
                                            })
                                        }, movie.id))
                                })
                            })
                        }),
                        /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $5b1ea468d903474a$export$e7b0ac011bb776c6), {
                            path: "/profile",
                            element: /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $17b288f07ec57b56$exports.Fragment), {
                                children: !user ? /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $5b1ea468d903474a$export$444b3ab0cb9aec40), {
                                    to: "/login",
                                    replace: true
                                }) : /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $e0a530bac7696c79$export$2e2bcd8739ae039), {
                                    md: 8,
                                    children: /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $1b2a016a565a1452$export$b378b4d12a0dcbde), {
                                        localUser: user,
                                        movies: movies,
                                        token: token
                                    })
                                })
                            })
                        })
                    ]
                })
            })
        ]
    });
};





//Main component (will eventually use all the others)
const $6d7f06814ef3fc6d$var$MyFlixApplication = ()=>{
    return /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $c2086d5149465e07$export$2e2bcd8739ae039), {
        children: /*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)((0, $8a78d6a5f663606b$export$fa32cd27347e212e), {})
    });
};
//Finds the root of your app
const $6d7f06814ef3fc6d$var$container = document.querySelector("#root");
const $6d7f06814ef3fc6d$var$root = (0, $fef8548889890d4d$export$882461b6382ed46c)($6d7f06814ef3fc6d$var$container);
//Tells React to render your app in the root DOM element
$6d7f06814ef3fc6d$var$root.render(/*#__PURE__*/ (0, $17b288f07ec57b56$exports.jsx)($6d7f06814ef3fc6d$var$MyFlixApplication, {}));


//# sourceMappingURL=index.7eb8db8e.js.map
