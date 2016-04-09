define([], function () {

	return {
		createInstance: function (jQuery) {

		//! moment.js
        //! version : 2.12.0
        //! authors : Tim Wood, Iskren Chernev, Moment.js contributors
        //! license : MIT
        //! momentjs.com
        !
        function (a, b) {
            "object" == typeof exports && "undefined" != typeof module ? module.exports = b() : "function" == typeof define && define.amd ? define(b) : a.moment = b()
        }(this, function () {
            "use strict";

            function a() {
                return Zc.apply(null, arguments)
            }
            function b(a) {
                Zc = a
            }
            function c(a) {
                return a instanceof Array || "[object Array]" === Object.prototype.toString.call(a)
            }
            function d(a) {
                return a instanceof Date || "[object Date]" === Object.prototype.toString.call(a)
            }
            function e(a, b) {
                var c, d = [];
                for (c = 0; c < a.length; ++c) d.push(b(a[c], c));
                return d
            }
            function f(a, b) {
                return Object.prototype.hasOwnProperty.call(a, b)
            }
            function g(a, b) {
                for (var c in b) f(b, c) && (a[c] = b[c]);
                return f(b, "toString") && (a.toString = b.toString), f(b, "valueOf") && (a.valueOf = b.valueOf), a
            }
            function h(a, b, c, d) {
                return Ia(a, b, c, d, !0).utc()
            }
            function i() {
                return {
                    empty: !1,
                    unusedTokens: [],
                    unusedInput: [],
                    overflow: -2,
                    charsLeftOver: 0,
                    nullInput: !1,
                    invalidMonth: null,
                    invalidFormat: !1,
                    userInvalidated: !1,
                    iso: !1
                }
            }
            function j(a) {
                return null == a._pf && (a._pf = i()), a._pf
            }
            function k(a) {
                if (null == a._isValid) {
                    var b = j(a);
                    a._isValid = !(isNaN(a._d.getTime()) || !(b.overflow < 0) || b.empty || b.invalidMonth || b.invalidWeekday || b.nullInput || b.invalidFormat || b.userInvalidated), a._strict && (a._isValid = a._isValid && 0 === b.charsLeftOver && 0 === b.unusedTokens.length && void 0 === b.bigHour)
                }
                return a._isValid
            }
            function l(a) {
                var b = h(NaN);
                return null != a ? g(j(b), a) : j(b).userInvalidated = !0, b
            }
            function m(a) {
                return void 0 === a
            }
            function n(a, b) {
                var c, d, e;
                if (m(b._isAMomentObject) || (a._isAMomentObject = b._isAMomentObject), m(b._i) || (a._i = b._i), m(b._f) || (a._f = b._f), m(b._l) || (a._l = b._l), m(b._strict) || (a._strict = b._strict), m(b._tzm) || (a._tzm = b._tzm), m(b._isUTC) || (a._isUTC = b._isUTC), m(b._offset) || (a._offset = b._offset), m(b._pf) || (a._pf = j(b)), m(b._locale) || (a._locale = b._locale), $c.length > 0) for (c in $c) d = $c[c], e = b[d], m(e) || (a[d] = e);
                return a
            }
            function o(b) {
                n(this, b), this._d = new Date(null != b._d ? b._d.getTime() : NaN), _c === !1 && (_c = !0, a.updateOffset(this), _c = !1)
            }
            function p(a) {
                return a instanceof o || null != a && null != a._isAMomentObject
            }
            function q(a) {
                return 0 > a ? Math.ceil(a) : Math.floor(a)
            }
            function r(a) {
                var b = +a,
                    c = 0;
                return 0 !== b && isFinite(b) && (c = q(b)), c
            }
            function s(a, b, c) {
                var d, e = Math.min(a.length, b.length),
                    f = Math.abs(a.length - b.length),
                    g = 0;
                for (d = 0; e > d; d++)(c && a[d] !== b[d] || !c && r(a[d]) !== r(b[d])) && g++;
                return g + f
            }
            function t(b) {
                a.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + b)
            }
            function u(a, b) {
                var c = !0;
                return g(function () {
                    return c && (t(a + "\nArguments: " + Array.prototype.slice.call(arguments).join(", ") + "\n" + (new Error).stack), c = !1), b.apply(this, arguments)
                }, b)
            }
            function v(a, b) {
                ad[a] || (t(b), ad[a] = !0)
            }
            function w(a) {
                return a instanceof Function || "[object Function]" === Object.prototype.toString.call(a)
            }
            function x(a) {
                return "[object Object]" === Object.prototype.toString.call(a)
            }
            function y(a) {
                var b, c;
                for (c in a) b = a[c], w(b) ? this[c] = b : this["_" + c] = b;
                this._config = a, this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source)
            }
            function z(a, b) {
                var c, d = g({}, a);
                for (c in b) f(b, c) && (x(a[c]) && x(b[c]) ? (d[c] = {}, g(d[c], a[c]), g(d[c], b[c])) : null != b[c] ? d[c] = b[c] : delete d[c]);
                return d
            }
            function A(a) {
                null != a && this.set(a)
            }
            function B(a) {
                return a ? a.toLowerCase().replace("_", "-") : a
            }
            function C(a) {
                for (var b, c, d, e, f = 0; f < a.length;) {
                    for (e = B(a[f]).split("-"), b = e.length, c = B(a[f + 1]), c = c ? c.split("-") : null; b > 0;) {
                        if (d = D(e.slice(0, b).join("-"))) return d;
                        if (c && c.length >= b && s(e, c, !0) >= b - 1) break;
                        b--
                    }
                    f++
                }
                return null
            }
            function D(a) {
                var b = null;
                if (!cd[a] && "undefined" != typeof module && module && module.exports) try {
                    b = bd._abbr, require("./locale/" + a), E(b)
                } catch (c) {}
                return cd[a]
            }
            function E(a, b) {
                var c;
                return a && (c = m(b) ? H(a) : F(a, b), c && (bd = c)), bd._abbr
            }
            function F(a, b) {
                return null !== b ? (b.abbr = a, null != cd[a] ? (v("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale"), b = z(cd[a]._config, b)) : null != b.parentLocale && (null != cd[b.parentLocale] ? b = z(cd[b.parentLocale]._config, b) : v("parentLocaleUndefined", "specified parentLocale is not defined yet")), cd[a] = new A(b), E(a), cd[a]) : (delete cd[a], null)
            }
            function G(a, b) {
                if (null != b) {
                    var c;
                    null != cd[a] && (b = z(cd[a]._config, b)), c = new A(b), c.parentLocale = cd[a], cd[a] = c, E(a)
                } else null != cd[a] && (null != cd[a].parentLocale ? cd[a] = cd[a].parentLocale : null != cd[a] && delete cd[a]);
                return cd[a]
            }
            function H(a) {
                var b;
                if (a && a._locale && a._locale._abbr && (a = a._locale._abbr), !a) return bd;
                if (!c(a)) {
                    if (b = D(a)) return b;
                    a = [a]
                }
                return C(a)
            }
            function I() {
                return Object.keys(cd)
            }
            function J(a, b) {
                var c = a.toLowerCase();
                dd[c] = dd[c + "s"] = dd[b] = a
            }
            function K(a) {
                return "string" == typeof a ? dd[a] || dd[a.toLowerCase()] : void 0
            }
            function L(a) {
                var b, c, d = {};
                for (c in a) f(a, c) && (b = K(c), b && (d[b] = a[c]));
                return d
            }
            function M(b, c) {
                return function (d) {
                    return null != d ? (O(this, b, d), a.updateOffset(this, c), this) : N(this, b)
                }
            }
            function N(a, b) {
                return a.isValid() ? a._d["get" + (a._isUTC ? "UTC" : "") + b]() : NaN
            }
            function O(a, b, c) {
                a.isValid() && a._d["set" + (a._isUTC ? "UTC" : "") + b](c)
            }
            function P(a, b) {
                var c;
                if ("object" == typeof a) for (c in a) this.set(c, a[c]);
                else if (a = K(a), w(this[a])) return this[a](b);
                return this
            }
            function Q(a, b, c) {
                var d = "" + Math.abs(a),
                    e = b - d.length,
                    f = a >= 0;
                return (f ? c ? "+" : "" : "-") + Math.pow(10, Math.max(0, e)).toString().substr(1) + d
            }
            function R(a, b, c, d) {
                var e = d;
                "string" == typeof d && (e = function () {
                    return this[d]()
                }), a && (hd[a] = e), b && (hd[b[0]] = function () {
                    return Q(e.apply(this, arguments), b[1], b[2])
                }), c && (hd[c] = function () {
                    return this.localeData().ordinal(e.apply(this, arguments), a)
                })
            }
            function S(a) {
                return a.match(/\[[\s\S]/) ? a.replace(/^\[|\]$/g, "") : a.replace(/\\/g, "")
            }
            function T(a) {
                var b, c, d = a.match(ed);
                for (b = 0, c = d.length; c > b; b++) hd[d[b]] ? d[b] = hd[d[b]] : d[b] = S(d[b]);
                return function (e) {
                    var f = "";
                    for (b = 0; c > b; b++) f += d[b] instanceof Function ? d[b].call(e, a) : d[b];
                    return f
                }
            }
            function U(a, b) {
                return a.isValid() ? (b = V(b, a.localeData()), gd[b] = gd[b] || T(b), gd[b](a)) : a.localeData().invalidDate()
            }
            function V(a, b) {
                function c(a) {
                    return b.longDateFormat(a) || a
                }
                var d = 5;
                for (fd.lastIndex = 0; d >= 0 && fd.test(a);) a = a.replace(fd, c), fd.lastIndex = 0, d -= 1;
                return a
            }
            function W(a, b, c) {
                zd[a] = w(b) ? b : function (a, d) {
                    return a && c ? c : b
                }
            }
            function X(a, b) {
                return f(zd, a) ? zd[a](b._strict, b._locale) : new RegExp(Y(a))
            }
            function Y(a) {
                return Z(a.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (a, b, c, d, e) {
                    return b || c || d || e
                }))
            }
            function Z(a) {
                return a.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
            }
            function $(a, b) {
                var c, d = b;
                for ("string" == typeof a && (a = [a]), "number" == typeof b && (d = function (a, c) {
                    c[b] = r(a)
                }), c = 0; c < a.length; c++) Ad[a[c]] = d
            }
            function _(a, b) {
                $(a, function (a, c, d, e) {
                    d._w = d._w || {}, b(a, d._w, d, e)
                })
            }
            function aa(a, b, c) {
                null != b && f(Ad, a) && Ad[a](b, c._a, c, a)
            }
            function ba(a, b) {
                return new Date(Date.UTC(a, b + 1, 0)).getUTCDate()
            }
            function ca(a, b) {
                return c(this._months) ? this._months[a.month()] : this._months[Kd.test(b) ? "format" : "standalone"][a.month()]
            }
            function da(a, b) {
                return c(this._monthsShort) ? this._monthsShort[a.month()] : this._monthsShort[Kd.test(b) ? "format" : "standalone"][a.month()]
            }
            function ea(a, b, c) {
                var d, e, f;
                for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), d = 0; 12 > d; d++) {
                    if (e = h([2e3, d]), c && !this._longMonthsParse[d] && (this._longMonthsParse[d] = new RegExp("^" + this.months(e, "").replace(".", "") + "$", "i"), this._shortMonthsParse[d] = new RegExp("^" + this.monthsShort(e, "").replace(".", "") + "$", "i")), c || this._monthsParse[d] || (f = "^" + this.months(e, "") + "|^" + this.monthsShort(e, ""), this._monthsParse[d] = new RegExp(f.replace(".", ""), "i")), c && "MMMM" === b && this._longMonthsParse[d].test(a)) return d;
                    if (c && "MMM" === b && this._shortMonthsParse[d].test(a)) return d;
                    if (!c && this._monthsParse[d].test(a)) return d
                }
            }
            function fa(a, b) {
                var c;
                if (!a.isValid()) return a;
                if ("string" == typeof b) if (/^\d+$/.test(b)) b = r(b);
                else if (b = a.localeData().monthsParse(b), "number" != typeof b) return a;
                return c = Math.min(a.date(), ba(a.year(), b)), a._d["set" + (a._isUTC ? "UTC" : "") + "Month"](b, c), a
            }
            function ga(b) {
                return null != b ? (fa(this, b), a.updateOffset(this, !0), this) : N(this, "Month")
            }
            function ha() {
                return ba(this.year(), this.month())
            }
            function ia(a) {
                return this._monthsParseExact ? (f(this, "_monthsRegex") || ka.call(this), a ? this._monthsShortStrictRegex : this._monthsShortRegex) : this._monthsShortStrictRegex && a ? this._monthsShortStrictRegex : this._monthsShortRegex
            }
            function ja(a) {
                return this._monthsParseExact ? (f(this, "_monthsRegex") || ka.call(this), a ? this._monthsStrictRegex : this._monthsRegex) : this._monthsStrictRegex && a ? this._monthsStrictRegex : this._monthsRegex
            }
            function ka() {
                function a(a, b) {
                    return b.length - a.length
                }
                var b, c, d = [],
                    e = [],
                    f = [];
                for (b = 0; 12 > b; b++) c = h([2e3, b]), d.push(this.monthsShort(c, "")), e.push(this.months(c, "")), f.push(this.months(c, "")), f.push(this.monthsShort(c, ""));
                for (d.sort(a), e.sort(a), f.sort(a), b = 0; 12 > b; b++) d[b] = Z(d[b]), e[b] = Z(e[b]), f[b] = Z(f[b]);
                this._monthsRegex = new RegExp("^(" + f.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + e.join("|") + ")$", "i"), this._monthsShortStrictRegex = new RegExp("^(" + d.join("|") + ")$", "i")
            }
            function la(a) {
                var b, c = a._a;
                return c && -2 === j(a).overflow && (b = c[Cd] < 0 || c[Cd] > 11 ? Cd : c[Dd] < 1 || c[Dd] > ba(c[Bd], c[Cd]) ? Dd : c[Ed] < 0 || c[Ed] > 24 || 24 === c[Ed] && (0 !== c[Fd] || 0 !== c[Gd] || 0 !== c[Hd]) ? Ed : c[Fd] < 0 || c[Fd] > 59 ? Fd : c[Gd] < 0 || c[Gd] > 59 ? Gd : c[Hd] < 0 || c[Hd] > 999 ? Hd : -1, j(a)._overflowDayOfYear && (Bd > b || b > Dd) && (b = Dd), j(a)._overflowWeeks && -1 === b && (b = Id), j(a)._overflowWeekday && -1 === b && (b = Jd), j(a).overflow = b), a
            }
            function ma(a) {
                var b, c, d, e, f, g, h = a._i,
                    i = Pd.exec(h) || Qd.exec(h);
                if (i) {
                    for (j(a).iso = !0, b = 0, c = Sd.length; c > b; b++) if (Sd[b][1].exec(i[1])) {
                        e = Sd[b][0], d = Sd[b][2] !== !1;
                        break
                    }
                    if (null == e) return void(a._isValid = !1);
                    if (i[3]) {
                        for (b = 0, c = Td.length; c > b; b++) if (Td[b][1].exec(i[3])) {
                            f = (i[2] || " ") + Td[b][0];
                            break
                        }
                        if (null == f) return void(a._isValid = !1)
                    }
                    if (!d && null != f) return void(a._isValid = !1);
                    if (i[4]) {
                        if (!Rd.exec(i[4])) return void(a._isValid = !1);
                        g = "Z"
                    }
                    a._f = e + (f || "") + (g || ""), Ba(a)
                } else a._isValid = !1
            }
            function na(b) {
                var c = Ud.exec(b._i);
                return null !== c ? void(b._d = new Date(+c[1])) : (ma(b), void(b._isValid === !1 && (delete b._isValid, a.createFromInputFallback(b))))
            }
            function oa(a, b, c, d, e, f, g) {
                var h = new Date(a, b, c, d, e, f, g);
                return 100 > a && a >= 0 && isFinite(h.getFullYear()) && h.setFullYear(a), h
            }
            function pa(a) {
                var b = new Date(Date.UTC.apply(null, arguments));
                return 100 > a && a >= 0 && isFinite(b.getUTCFullYear()) && b.setUTCFullYear(a), b
            }
            function qa(a) {
                return ra(a) ? 366 : 365
            }
            function ra(a) {
                return a % 4 === 0 && a % 100 !== 0 || a % 400 === 0
            }
            function sa() {
                return ra(this.year())
            }
            function ta(a, b, c) {
                var d = 7 + b - c,
                    e = (7 + pa(a, 0, d).getUTCDay() - b) % 7;
                return -e + d - 1
            }
            function ua(a, b, c, d, e) {
                var f, g, h = (7 + c - d) % 7,
                    i = ta(a, d, e),
                    j = 1 + 7 * (b - 1) + h + i;
                return 0 >= j ? (f = a - 1, g = qa(f) + j) : j > qa(a) ? (f = a + 1, g = j - qa(a)) : (f = a, g = j), {
                    year: f,
                    dayOfYear: g
                }
            }
            function va(a, b, c) {
                var d, e, f = ta(a.year(), b, c),
                    g = Math.floor((a.dayOfYear() - f - 1) / 7) + 1;
                return 1 > g ? (e = a.year() - 1, d = g + wa(e, b, c)) : g > wa(a.year(), b, c) ? (d = g - wa(a.year(), b, c), e = a.year() + 1) : (e = a.year(), d = g), {
                    week: d,
                    year: e
                }
            }
            function wa(a, b, c) {
                var d = ta(a, b, c),
                    e = ta(a + 1, b, c);
                return (qa(a) - d + e) / 7
            }
            function xa(a, b, c) {
                return null != a ? a : null != b ? b : c
            }
            function ya(b) {
                var c = new Date(a.now());
                return b._useUTC ? [c.getUTCFullYear(), c.getUTCMonth(), c.getUTCDate()] : [c.getFullYear(), c.getMonth(), c.getDate()]
            }
            function za(a) {
                var b, c, d, e, f = [];
                if (!a._d) {
                    for (d = ya(a), a._w && null == a._a[Dd] && null == a._a[Cd] && Aa(a), a._dayOfYear && (e = xa(a._a[Bd], d[Bd]), a._dayOfYear > qa(e) && (j(a)._overflowDayOfYear = !0), c = pa(e, 0, a._dayOfYear), a._a[Cd] = c.getUTCMonth(), a._a[Dd] = c.getUTCDate()), b = 0; 3 > b && null == a._a[b]; ++b) a._a[b] = f[b] = d[b];
                    for (; 7 > b; b++) a._a[b] = f[b] = null == a._a[b] ? 2 === b ? 1 : 0 : a._a[b];
                    24 === a._a[Ed] && 0 === a._a[Fd] && 0 === a._a[Gd] && 0 === a._a[Hd] && (a._nextDay = !0, a._a[Ed] = 0), a._d = (a._useUTC ? pa : oa).apply(null, f), null != a._tzm && a._d.setUTCMinutes(a._d.getUTCMinutes() - a._tzm), a._nextDay && (a._a[Ed] = 24)
                }
            }
            function Aa(a) {
                var b, c, d, e, f, g, h, i;
                b = a._w, null != b.GG || null != b.W || null != b.E ? (f = 1, g = 4, c = xa(b.GG, a._a[Bd], va(Ja(), 1, 4).year), d = xa(b.W, 1), e = xa(b.E, 1), (1 > e || e > 7) && (i = !0)) : (f = a._locale._week.dow, g = a._locale._week.doy, c = xa(b.gg, a._a[Bd], va(Ja(), f, g).year), d = xa(b.w, 1), null != b.d ? (e = b.d, (0 > e || e > 6) && (i = !0)) : null != b.e ? (e = b.e + f, (b.e < 0 || b.e > 6) && (i = !0)) : e = f), 1 > d || d > wa(c, f, g) ? j(a)._overflowWeeks = !0 : null != i ? j(a)._overflowWeekday = !0 : (h = ua(c, d, e, f, g), a._a[Bd] = h.year, a._dayOfYear = h.dayOfYear)
            }
            function Ba(b) {
                if (b._f === a.ISO_8601) return void ma(b);
                b._a = [], j(b).empty = !0;
                var c, d, e, f, g, h = "" + b._i,
                    i = h.length,
                    k = 0;
                for (e = V(b._f, b._locale).match(ed) || [], c = 0; c < e.length; c++) f = e[c], d = (h.match(X(f, b)) || [])[0], d && (g = h.substr(0, h.indexOf(d)), g.length > 0 && j(b).unusedInput.push(g), h = h.slice(h.indexOf(d) + d.length), k += d.length), hd[f] ? (d ? j(b).empty = !1 : j(b).unusedTokens.push(f), aa(f, d, b)) : b._strict && !d && j(b).unusedTokens.push(f);
                j(b).charsLeftOver = i - k, h.length > 0 && j(b).unusedInput.push(h), j(b).bigHour === !0 && b._a[Ed] <= 12 && b._a[Ed] > 0 && (j(b).bigHour = void 0), b._a[Ed] = Ca(b._locale, b._a[Ed], b._meridiem), za(b), la(b)
            }
            function Ca(a, b, c) {
                var d;
                return null == c ? b : null != a.meridiemHour ? a.meridiemHour(b, c) : null != a.isPM ? (d = a.isPM(c), d && 12 > b && (b += 12), d || 12 !== b || (b = 0), b) : b
            }
            function Da(a) {
                var b, c, d, e, f;
                if (0 === a._f.length) return j(a).invalidFormat = !0, void(a._d = new Date(NaN));
                for (e = 0; e < a._f.length; e++) f = 0, b = n({}, a), null != a._useUTC && (b._useUTC = a._useUTC), b._f = a._f[e], Ba(b), k(b) && (f += j(b).charsLeftOver, f += 10 * j(b).unusedTokens.length, j(b).score = f, (null == d || d > f) && (d = f, c = b));
                g(a, c || b)
            }
            function Ea(a) {
                if (!a._d) {
                    var b = L(a._i);
                    a._a = e([b.year, b.month, b.day || b.date, b.hour, b.minute, b.second, b.millisecond], function (a) {
                        return a && parseInt(a, 10)
                    }), za(a)
                }
            }
            function Fa(a) {
                var b = new o(la(Ga(a)));
                return b._nextDay && (b.add(1, "d"), b._nextDay = void 0), b
            }
            function Ga(a) {
                var b = a._i,
                    e = a._f;
                return a._locale = a._locale || H(a._l), null === b || void 0 === e && "" === b ? l({
                    nullInput: !0
                }) : ("string" == typeof b && (a._i = b = a._locale.preparse(b)), p(b) ? new o(la(b)) : (c(e) ? Da(a) : e ? Ba(a) : d(b) ? a._d = b : Ha(a), k(a) || (a._d = null), a))
            }
            function Ha(b) {
                var f = b._i;
                void 0 === f ? b._d = new Date(a.now()) : d(f) ? b._d = new Date(+f) : "string" == typeof f ? na(b) : c(f) ? (b._a = e(f.slice(0), function (a) {
                    return parseInt(a, 10)
                }), za(b)) : "object" == typeof f ? Ea(b) : "number" == typeof f ? b._d = new Date(f) : a.createFromInputFallback(b)
            }
            function Ia(a, b, c, d, e) {
                var f = {};
                return "boolean" == typeof c && (d = c, c = void 0), f._isAMomentObject = !0, f._useUTC = f._isUTC = e, f._l = c, f._i = a, f._f = b, f._strict = d, Fa(f)
            }
            function Ja(a, b, c, d) {
                return Ia(a, b, c, d, !1)
            }
            function Ka(a, b) {
                var d, e;
                if (1 === b.length && c(b[0]) && (b = b[0]), !b.length) return Ja();
                for (d = b[0], e = 1; e < b.length; ++e)(!b[e].isValid() || b[e][a](d)) && (d = b[e]);
                return d
            }
            function La() {
                var a = [].slice.call(arguments, 0);
                return Ka("isBefore", a)
            }
            function Ma() {
                var a = [].slice.call(arguments, 0);
                return Ka("isAfter", a)
            }
            function Na(a) {
                var b = L(a),
                    c = b.year || 0,
                    d = b.quarter || 0,
                    e = b.month || 0,
                    f = b.week || 0,
                    g = b.day || 0,
                    h = b.hour || 0,
                    i = b.minute || 0,
                    j = b.second || 0,
                    k = b.millisecond || 0;
                this._milliseconds = +k + 1e3 * j + 6e4 * i + 36e5 * h, this._days = +g + 7 * f, this._months = +e + 3 * d + 12 * c, this._data = {}, this._locale = H(), this._bubble()
            }
            function Oa(a) {
                return a instanceof Na
            }
            function Pa(a, b) {
                R(a, 0, 0, function () {
                    var a = this.utcOffset(),
                        c = "+";
                    return 0 > a && (a = -a, c = "-"), c + Q(~~ (a / 60), 2) + b + Q(~~a % 60, 2)
                })
            }
            function Qa(a, b) {
                var c = (b || "").match(a) || [],
                    d = c[c.length - 1] || [],
                    e = (d + "").match(Zd) || ["-", 0, 0],
                    f = +(60 * e[1]) + r(e[2]);
                return "+" === e[0] ? f : -f
            }
            function Ra(b, c) {
                var e, f;
                return c._isUTC ? (e = c.clone(), f = (p(b) || d(b) ? +b : +Ja(b)) - +e, e._d.setTime(+e._d + f), a.updateOffset(e, !1), e) : Ja(b).local()
            }
            function Sa(a) {
                return 15 * -Math.round(a._d.getTimezoneOffset() / 15)
            }
            function Ta(b, c) {
                var d, e = this._offset || 0;
                return this.isValid() ? null != b ? ("string" == typeof b ? b = Qa(wd, b) : Math.abs(b) < 16 && (b = 60 * b), !this._isUTC && c && (d = Sa(this)), this._offset = b, this._isUTC = !0, null != d && this.add(d, "m"), e !== b && (!c || this._changeInProgress ? ib(this, cb(b - e, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, a.updateOffset(this, !0), this._changeInProgress = null)), this) : this._isUTC ? e : Sa(this) : null != b ? this : NaN
            }
            function Ua(a, b) {
                return null != a ? ("string" != typeof a && (a = -a), this.utcOffset(a, b), this) : -this.utcOffset()
            }
            function Va(a) {
                return this.utcOffset(0, a)
            }
            function Wa(a) {
                return this._isUTC && (this.utcOffset(0, a), this._isUTC = !1, a && this.subtract(Sa(this), "m")), this
            }
            function Xa() {
                return this._tzm ? this.utcOffset(this._tzm) : "string" == typeof this._i && this.utcOffset(Qa(vd, this._i)), this
            }
            function Ya(a) {
                return this.isValid() ? (a = a ? Ja(a).utcOffset() : 0, (this.utcOffset() - a) % 60 === 0) : !1
            }
            function Za() {
                return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
            }
            function $a() {
                if (!m(this._isDSTShifted)) return this._isDSTShifted;
                var a = {};
                if (n(a, this), a = Ga(a), a._a) {
                    var b = a._isUTC ? h(a._a) : Ja(a._a);
                    this._isDSTShifted = this.isValid() && s(a._a, b.toArray()) > 0
                } else this._isDSTShifted = !1;
                return this._isDSTShifted
            }
            function _a() {
                return this.isValid() ? !this._isUTC : !1
            }
            function ab() {
                return this.isValid() ? this._isUTC : !1
            }
            function bb() {
                return this.isValid() ? this._isUTC && 0 === this._offset : !1
            }
            function cb(a, b) {
                var c, d, e, g = a,
                    h = null;
                return Oa(a) ? g = {
                    ms: a._milliseconds,
                    d: a._days,
                    M: a._months
                } : "number" == typeof a ? (g = {}, b ? g[b] = a : g.milliseconds = a) : (h = $d.exec(a)) ? (c = "-" === h[1] ? -1 : 1, g = {
                    y: 0,
                    d: r(h[Dd]) * c,
                    h: r(h[Ed]) * c,
                    m: r(h[Fd]) * c,
                    s: r(h[Gd]) * c,
                    ms: r(h[Hd]) * c
                }) : (h = _d.exec(a)) ? (c = "-" === h[1] ? -1 : 1, g = {
                    y: db(h[2], c),
                    M: db(h[3], c),
                    w: db(h[4], c),
                    d: db(h[5], c),
                    h: db(h[6], c),
                    m: db(h[7], c),
                    s: db(h[8], c)
                }) : null == g ? g = {} : "object" == typeof g && ("from" in g || "to" in g) && (e = fb(Ja(g.from), Ja(g.to)), g = {}, g.ms = e.milliseconds, g.M = e.months), d = new Na(g), Oa(a) && f(a, "_locale") && (d._locale = a._locale), d
            }
            function db(a, b) {
                var c = a && parseFloat(a.replace(",", "."));
                return (isNaN(c) ? 0 : c) * b
            }
            function eb(a, b) {
                var c = {
                    milliseconds: 0,
                    months: 0
                };
                return c.months = b.month() - a.month() + 12 * (b.year() - a.year()), a.clone().add(c.months, "M").isAfter(b) && --c.months, c.milliseconds = +b - +a.clone().add(c.months, "M"), c
            }
            function fb(a, b) {
                var c;
                return a.isValid() && b.isValid() ? (b = Ra(b, a), a.isBefore(b) ? c = eb(a, b) : (c = eb(b, a), c.milliseconds = -c.milliseconds, c.months = -c.months), c) : {
                    milliseconds: 0,
                    months: 0
                }
            }
            function gb(a) {
                return 0 > a ? -1 * Math.round(-1 * a) : Math.round(a)
            }
            function hb(a, b) {
                return function (c, d) {
                    var e, f;
                    return null === d || isNaN(+d) || (v(b, "moment()." + b + "(period, number) is deprecated. Please use moment()." + b + "(number, period)."), f = c, c = d, d = f), c = "string" == typeof c ? +c : c, e = cb(c, d), ib(this, e, a), this
                }
            }
            function ib(b, c, d, e) {
                var f = c._milliseconds,
                    g = gb(c._days),
                    h = gb(c._months);
                b.isValid() && (e = null == e ? !0 : e, f && b._d.setTime(+b._d + f * d), g && O(b, "Date", N(b, "Date") + g * d), h && fa(b, N(b, "Month") + h * d), e && a.updateOffset(b, g || h))
            }
            function jb(a, b) {
                var c = a || Ja(),
                    d = Ra(c, this).startOf("day"),
                    e = this.diff(d, "days", !0),
                    f = -6 > e ? "sameElse" : -1 > e ? "lastWeek" : 0 > e ? "lastDay" : 1 > e ? "sameDay" : 2 > e ? "nextDay" : 7 > e ? "nextWeek" : "sameElse",
                    g = b && (w(b[f]) ? b[f]() : b[f]);
                return this.format(g || this.localeData().calendar(f, this, Ja(c)))
            }
            function kb() {
                return new o(this)
            }
            function lb(a, b) {
                var c = p(a) ? a : Ja(a);
                return this.isValid() && c.isValid() ? (b = K(m(b) ? "millisecond" : b), "millisecond" === b ? +this > +c : +c < +this.clone().startOf(b)) : !1
            }
            function mb(a, b) {
                var c = p(a) ? a : Ja(a);
                return this.isValid() && c.isValid() ? (b = K(m(b) ? "millisecond" : b), "millisecond" === b ? +c > +this : +this.clone().endOf(b) < +c) : !1
            }
            function nb(a, b, c) {
                return this.isAfter(a, c) && this.isBefore(b, c)
            }
            function ob(a, b) {
                var c, d = p(a) ? a : Ja(a);
                return this.isValid() && d.isValid() ? (b = K(b || "millisecond"), "millisecond" === b ? +this === +d : (c = +d, +this.clone().startOf(b) <= c && c <= +this.clone().endOf(b))) : !1
            }
            function pb(a, b) {
                return this.isSame(a, b) || this.isAfter(a, b)
            }
            function qb(a, b) {
                return this.isSame(a, b) || this.isBefore(a, b)
            }
            function rb(a, b, c) {
                var d, e, f, g;
                return this.isValid() ? (d = Ra(a, this), d.isValid() ? (e = 6e4 * (d.utcOffset() - this.utcOffset()), b = K(b), "year" === b || "month" === b || "quarter" === b ? (g = sb(this, d), "quarter" === b ? g /= 3 : "year" === b && (g /= 12)) : (f = this - d, g = "second" === b ? f / 1e3 : "minute" === b ? f / 6e4 : "hour" === b ? f / 36e5 : "day" === b ? (f - e) / 864e5 : "week" === b ? (f - e) / 6048e5 : f), c ? g : q(g)) : NaN) : NaN
            }
            function sb(a, b) {
                var c, d, e = 12 * (b.year() - a.year()) + (b.month() - a.month()),
                    f = a.clone().add(e, "months");
                return 0 > b - f ? (c = a.clone().add(e - 1, "months"), d = (b - f) / (f - c)) : (c = a.clone().add(e + 1, "months"), d = (b - f) / (c - f)), -(e + d)
            }
            function tb() {
                return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
            }
            function ub() {
                var a = this.clone().utc();
                return 0 < a.year() && a.year() <= 9999 ? w(Date.prototype.toISOString) ? this.toDate().toISOString() : U(a, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : U(a, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
            }
            function vb(b) {
                var c = U(this, b || a.defaultFormat);
                return this.localeData().postformat(c)
            }
            function wb(a, b) {
                return this.isValid() && (p(a) && a.isValid() || Ja(a).isValid()) ? cb({
                    to: this,
                    from: a
                }).locale(this.locale()).humanize(!b) : this.localeData().invalidDate()
            }
            function xb(a) {
                return this.from(Ja(), a)
            }
            function yb(a, b) {
                return this.isValid() && (p(a) && a.isValid() || Ja(a).isValid()) ? cb({
                    from: this,
                    to: a
                }).locale(this.locale()).humanize(!b) : this.localeData().invalidDate()
            }
            function zb(a) {
                return this.to(Ja(), a)
            }
            function Ab(a) {
                var b;
                return void 0 === a ? this._locale._abbr : (b = H(a), null != b && (this._locale = b), this)
            }
            function Bb() {
                return this._locale
            }
            function Cb(a) {
                switch (a = K(a)) {
                case "year":
                    this.month(0);
                case "quarter":
                case "month":
                    this.date(1);
                case "week":
                case "isoWeek":
                case "day":
                    this.hours(0);
                case "hour":
                    this.minutes(0);
                case "minute":
                    this.seconds(0);
                case "second":
                    this.milliseconds(0)
                }
                return "week" === a && this.weekday(0), "isoWeek" === a && this.isoWeekday(1), "quarter" === a && this.month(3 * Math.floor(this.month() / 3)), this
            }
            function Db(a) {
                return a = K(a), void 0 === a || "millisecond" === a ? this : this.startOf(a).add(1, "isoWeek" === a ? "week" : a).subtract(1, "ms")
            }
            function Eb() {
                return +this._d - 6e4 * (this._offset || 0)
            }
            function Fb() {
                return Math.floor(+this / 1e3)
            }
            function Gb() {
                return this._offset ? new Date(+this) : this._d
            }
            function Hb() {
                var a = this;
                return [a.year(), a.month(), a.date(), a.hour(), a.minute(), a.second(), a.millisecond()]
            }
            function Ib() {
                var a = this;
                return {
                    years: a.year(),
                    months: a.month(),
                    date: a.date(),
                    hours: a.hours(),
                    minutes: a.minutes(),
                    seconds: a.seconds(),
                    milliseconds: a.milliseconds()
                }
            }
            function Jb() {
                return this.isValid() ? this.toISOString() : null
            }
            function Kb() {
                return k(this)
            }
            function Lb() {
                return g({}, j(this))
            }
            function Mb() {
                return j(this).overflow
            }
            function Nb() {
                return {
                    input: this._i,
                    format: this._f,
                    locale: this._locale,
                    isUTC: this._isUTC,
                    strict: this._strict
                }
            }
            function Ob(a, b) {
                R(0, [a, a.length], 0, b)
            }
            function Pb(a) {
                return Tb.call(this, a, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
            }
            function Qb(a) {
                return Tb.call(this, a, this.isoWeek(), this.isoWeekday(), 1, 4)
            }
            function Rb() {
                return wa(this.year(), 1, 4)
            }
            function Sb() {
                var a = this.localeData()._week;
                return wa(this.year(), a.dow, a.doy)
            }
            function Tb(a, b, c, d, e) {
                var f;
                return null == a ? va(this, d, e).year : (f = wa(a, d, e), b > f && (b = f), Ub.call(this, a, b, c, d, e))
            }
            function Ub(a, b, c, d, e) {
                var f = ua(a, b, c, d, e),
                    g = pa(f.year, 0, f.dayOfYear);
                return this.year(g.getUTCFullYear()), this.month(g.getUTCMonth()), this.date(g.getUTCDate()), this
            }
            function Vb(a) {
                return null == a ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (a - 1) + this.month() % 3)
            }
            function Wb(a) {
                return va(a, this._week.dow, this._week.doy).week
            }
            function Xb() {
                return this._week.dow
            }
            function Yb() {
                return this._week.doy
            }
            function Zb(a) {
                var b = this.localeData().week(this);
                return null == a ? b : this.add(7 * (a - b), "d")
            }
            function $b(a) {
                var b = va(this, 1, 4).week;
                return null == a ? b : this.add(7 * (a - b), "d")
            }
            function _b(a, b) {
                return "string" != typeof a ? a : isNaN(a) ? (a = b.weekdaysParse(a), "number" == typeof a ? a : null) : parseInt(a, 10)
            }
            function ac(a, b) {
                return c(this._weekdays) ? this._weekdays[a.day()] : this._weekdays[this._weekdays.isFormat.test(b) ? "format" : "standalone"][a.day()]
            }
            function bc(a) {
                return this._weekdaysShort[a.day()]
            }
            function cc(a) {
                return this._weekdaysMin[a.day()]
            }
            function dc(a, b, c) {
                var d, e, f;
                for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), d = 0; 7 > d; d++) {
                    if (e = Ja([2e3, 1]).day(d), c && !this._fullWeekdaysParse[d] && (this._fullWeekdaysParse[d] = new RegExp("^" + this.weekdays(e, "").replace(".", ".?") + "$", "i"), this._shortWeekdaysParse[d] = new RegExp("^" + this.weekdaysShort(e, "").replace(".", ".?") + "$", "i"), this._minWeekdaysParse[d] = new RegExp("^" + this.weekdaysMin(e, "").replace(".", ".?") + "$", "i")), this._weekdaysParse[d] || (f = "^" + this.weekdays(e, "") + "|^" + this.weekdaysShort(e, "") + "|^" + this.weekdaysMin(e, ""), this._weekdaysParse[d] = new RegExp(f.replace(".", ""), "i")), c && "dddd" === b && this._fullWeekdaysParse[d].test(a)) return d;
                    if (c && "ddd" === b && this._shortWeekdaysParse[d].test(a)) return d;
                    if (c && "dd" === b && this._minWeekdaysParse[d].test(a)) return d;
                    if (!c && this._weekdaysParse[d].test(a)) return d
                }
            }
            function ec(a) {
                if (!this.isValid()) return null != a ? this : NaN;
                var b = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                return null != a ? (a = _b(a, this.localeData()), this.add(a - b, "d")) : b
            }
            function fc(a) {
                if (!this.isValid()) return null != a ? this : NaN;
                var b = (this.day() + 7 - this.localeData()._week.dow) % 7;
                return null == a ? b : this.add(a - b, "d")
            }
            function gc(a) {
                return this.isValid() ? null == a ? this.day() || 7 : this.day(this.day() % 7 ? a : a - 7) : null != a ? this : NaN
            }
            function hc(a) {
                var b = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
                return null == a ? b : this.add(a - b, "d")
            }
            function ic() {
                return this.hours() % 12 || 12
            }
            function jc(a, b) {
                R(a, 0, 0, function () {
                    return this.localeData().meridiem(this.hours(), this.minutes(), b)
                })
            }
            function kc(a, b) {
                return b._meridiemParse
            }
            function lc(a) {
                return "p" === (a + "").toLowerCase().charAt(0)
            }
            function mc(a, b, c) {
                return a > 11 ? c ? "pm" : "PM" : c ? "am" : "AM"
            }
            function nc(a, b) {
                b[Hd] = r(1e3 * ("0." + a))
            }
            function oc() {
                return this._isUTC ? "UTC" : ""
            }
            function pc() {
                return this._isUTC ? "Coordinated Universal Time" : ""
            }
            function qc(a) {
                return Ja(1e3 * a)
            }
            function rc() {
                return Ja.apply(null, arguments).parseZone()
            }
            function sc(a, b, c) {
                var d = this._calendar[a];
                return w(d) ? d.call(b, c) : d
            }
            function tc(a) {
                var b = this._longDateFormat[a],
                    c = this._longDateFormat[a.toUpperCase()];
                return b || !c ? b : (this._longDateFormat[a] = c.replace(/MMMM|MM|DD|dddd/g, function (a) {
                    return a.slice(1)
                }), this._longDateFormat[a])
            }
            function uc() {
                return this._invalidDate
            }
            function vc(a) {
                return this._ordinal.replace("%d", a)
            }
            function wc(a) {
                return a
            }
            function xc(a, b, c, d) {
                var e = this._relativeTime[c];
                return w(e) ? e(a, b, c, d) : e.replace(/%d/i, a)
            }
            function yc(a, b) {
                var c = this._relativeTime[a > 0 ? "future" : "past"];
                return w(c) ? c(b) : c.replace(/%s/i, b)
            }
            function zc(a, b, c, d) {
                var e = H(),
                    f = h().set(d, b);
                return e[c](f, a)
            }
            function Ac(a, b, c, d, e) {
                if ("number" == typeof a && (b = a, a = void 0), a = a || "", null != b) return zc(a, b, c, e);
                var f, g = [];
                for (f = 0; d > f; f++) g[f] = zc(a, f, c, e);
                return g
            }
            function Bc(a, b) {
                return Ac(a, b, "months", 12, "month")
            }
            function Cc(a, b) {
                return Ac(a, b, "monthsShort", 12, "month")
            }
            function Dc(a, b) {
                return Ac(a, b, "weekdays", 7, "day")
            }
            function Ec(a, b) {
                return Ac(a, b, "weekdaysShort", 7, "day")
            }
            function Fc(a, b) {
                return Ac(a, b, "weekdaysMin", 7, "day")
            }
            function Gc() {
                var a = this._data;
                return this._milliseconds = xe(this._milliseconds), this._days = xe(this._days), this._months = xe(this._months), a.milliseconds = xe(a.milliseconds), a.seconds = xe(a.seconds), a.minutes = xe(a.minutes), a.hours = xe(a.hours), a.months = xe(a.months), a.years = xe(a.years), this
            }
            function Hc(a, b, c, d) {
                var e = cb(b, c);
                return a._milliseconds += d * e._milliseconds, a._days += d * e._days, a._months += d * e._months, a._bubble()
            }
            function Ic(a, b) {
                return Hc(this, a, b, 1)
            }
            function Jc(a, b) {
                return Hc(this, a, b, -1)
            }
            function Kc(a) {
                return 0 > a ? Math.floor(a) : Math.ceil(a)
            }
            function Lc() {
                var a, b, c, d, e, f = this._milliseconds,
                    g = this._days,
                    h = this._months,
                    i = this._data;
                return f >= 0 && g >= 0 && h >= 0 || 0 >= f && 0 >= g && 0 >= h || (f += 864e5 * Kc(Nc(h) + g), g = 0, h = 0), i.milliseconds = f % 1e3, a = q(f / 1e3), i.seconds = a % 60, b = q(a / 60), i.minutes = b % 60, c = q(b / 60), i.hours = c % 24, g += q(c / 24), e = q(Mc(g)), h += e, g -= Kc(Nc(e)), d = q(h / 12), h %= 12, i.days = g, i.months = h, i.years = d, this
            }
            function Mc(a) {
                return 4800 * a / 146097
            }
            function Nc(a) {
                return 146097 * a / 4800
            }
            function Oc(a) {
                var b, c, d = this._milliseconds;
                if (a = K(a), "month" === a || "year" === a) return b = this._days + d / 864e5, c = this._months + Mc(b), "month" === a ? c : c / 12;
                switch (b = this._days + Math.round(Nc(this._months)), a) {
                case "week":
                    return b / 7 + d / 6048e5;
                case "day":
                    return b + d / 864e5;
                case "hour":
                    return 24 * b + d / 36e5;
                case "minute":
                    return 1440 * b + d / 6e4;
                case "second":
                    return 86400 * b + d / 1e3;
                case "millisecond":
                    return Math.floor(864e5 * b) + d;
                default:
                    throw new Error("Unknown unit " + a)
                }
            }
            function Pc() {
                return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * r(this._months / 12)
            }
            function Qc(a) {
                return function () {
                    return this.as(a)
                }
            }
            function Rc(a) {
                return a = K(a), this[a + "s"]()
            }
            function Sc(a) {
                return function () {
                    return this._data[a]
                }
            }
            function Tc() {
                return q(this.days() / 7)
            }
            function Uc(a, b, c, d, e) {
                return e.relativeTime(b || 1, !! c, a, d)
            }
            function Vc(a, b, c) {
                var d = cb(a).abs(),
                    e = Ne(d.as("s")),
                    f = Ne(d.as("m")),
                    g = Ne(d.as("h")),
                    h = Ne(d.as("d")),
                    i = Ne(d.as("M")),
                    j = Ne(d.as("y")),
                    k = e < Oe.s && ["s", e] || 1 >= f && ["m"] || f < Oe.m && ["mm", f] || 1 >= g && ["h"] || g < Oe.h && ["hh", g] || 1 >= h && ["d"] || h < Oe.d && ["dd", h] || 1 >= i && ["M"] || i < Oe.M && ["MM", i] || 1 >= j && ["y"] || ["yy", j];
                return k[2] = b, k[3] = +a > 0, k[4] = c, Uc.apply(null, k)
            }
            function Wc(a, b) {
                return void 0 === Oe[a] ? !1 : void 0 === b ? Oe[a] : (Oe[a] = b, !0)
            }
            function Xc(a) {
                var b = this.localeData(),
                    c = Vc(this, !a, b);
                return a && (c = b.pastFuture(+this, c)), b.postformat(c)
            }
            function Yc() {
                var a, b, c, d = Pe(this._milliseconds) / 1e3,
                    e = Pe(this._days),
                    f = Pe(this._months);
                a = q(d / 60), b = q(a / 60), d %= 60, a %= 60, c = q(f / 12), f %= 12;
                var g = c,
                    h = f,
                    i = e,
                    j = b,
                    k = a,
                    l = d,
                    m = this.asSeconds();
                return m ? (0 > m ? "-" : "") + "P" + (g ? g + "Y" : "") + (h ? h + "M" : "") + (i ? i + "D" : "") + (j || k || l ? "T" : "") + (j ? j + "H" : "") + (k ? k + "M" : "") + (l ? l + "S" : "") : "P0D"
            }
            var Zc, $c = a.momentProperties = [],
                _c = !1,
                ad = {};
            a.suppressDeprecationWarnings = !1;
            var bd, cd = {},
                dd = {},
                ed = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
                fd = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
                gd = {},
                hd = {},
                id = /\d/,
                jd = /\d\d/,
                kd = /\d{3}/,
                ld = /\d{4}/,
                md = /[+-]?\d{6}/,
                nd = /\d\d?/,
                od = /\d\d\d\d?/,
                pd = /\d\d\d\d\d\d?/,
                qd = /\d{1,3}/,
                rd = /\d{1,4}/,
                sd = /[+-]?\d{1,6}/,
                td = /\d+/,
                ud = /[+-]?\d+/,
                vd = /Z|[+-]\d\d:?\d\d/gi,
                wd = /Z|[+-]\d\d(?::?\d\d)?/gi,
                xd = /[+-]?\d+(\.\d{1,3})?/,
                yd = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
                zd = {},
                Ad = {},
                Bd = 0,
                Cd = 1,
                Dd = 2,
                Ed = 3,
                Fd = 4,
                Gd = 5,
                Hd = 6,
                Id = 7,
                Jd = 8;
            R("M", ["MM", 2], "Mo", function () {
                return this.month() + 1
            }), R("MMM", 0, 0, function (a) {
                return this.localeData().monthsShort(this, a)
            }), R("MMMM", 0, 0, function (a) {
                return this.localeData().months(this, a)
            }), J("month", "M"), W("M", nd), W("MM", nd, jd), W("MMM", function (a, b) {
                return b.monthsShortRegex(a)
            }), W("MMMM", function (a, b) {
                return b.monthsRegex(a)
            }), $(["M", "MM"], function (a, b) {
                b[Cd] = r(a) - 1
            }), $(["MMM", "MMMM"], function (a, b, c, d) {
                var e = c._locale.monthsParse(a, d, c._strict);
                null != e ? b[Cd] = e : j(c).invalidMonth = a
            });
            var Kd = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/,
                Ld = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                Md = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                Nd = yd,
                Od = yd,
                Pd = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,
                Qd = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,
                Rd = /Z|[+-]\d\d(?::?\d\d)?/,
                Sd = [
                    ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
                    ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
                    ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
                    ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
                    ["YYYY-DDD", /\d{4}-\d{3}/],
                    ["YYYY-MM", /\d{4}-\d\d/, !1],
                    ["YYYYYYMMDD", /[+-]\d{10}/],
                    ["YYYYMMDD", /\d{8}/],
                    ["GGGG[W]WWE", /\d{4}W\d{3}/],
                    ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
                    ["YYYYDDD", /\d{7}/]
                ],
                Td = [
                    ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
                    ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
                    ["HH:mm:ss", /\d\d:\d\d:\d\d/],
                    ["HH:mm", /\d\d:\d\d/],
                    ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
                    ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
                    ["HHmmss", /\d\d\d\d\d\d/],
                    ["HHmm", /\d\d\d\d/],
                    ["HH", /\d\d/]
                ],
                Ud = /^\/?Date\((\-?\d+)/i;
            a.createFromInputFallback = u("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function (a) {
                a._d = new Date(a._i + (a._useUTC ? " UTC" : ""))
            }), R("Y", 0, 0, function () {
                var a = this.year();
                return 9999 >= a ? "" + a : "+" + a
            }), R(0, ["YY", 2], 0, function () {
                return this.year() % 100
            }), R(0, ["YYYY", 4], 0, "year"), R(0, ["YYYYY", 5], 0, "year"), R(0, ["YYYYYY", 6, !0], 0, "year"), J("year", "y"), W("Y", ud), W("YY", nd, jd), W("YYYY", rd, ld), W("YYYYY", sd, md), W("YYYYYY", sd, md), $(["YYYYY", "YYYYYY"], Bd), $("YYYY", function (b, c) {
                c[Bd] = 2 === b.length ? a.parseTwoDigitYear(b) : r(b);
            }), $("YY", function (b, c) {
                c[Bd] = a.parseTwoDigitYear(b)
            }), $("Y", function (a, b) {
                b[Bd] = parseInt(a, 10)
            }), a.parseTwoDigitYear = function (a) {
                return r(a) + (r(a) > 68 ? 1900 : 2e3)
            };
            var Vd = M("FullYear", !1);
            a.ISO_8601 = function () {};
            var Wd = u("moment().min is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548", function () {
                var a = Ja.apply(null, arguments);
                return this.isValid() && a.isValid() ? this > a ? this : a : l()
            }),
                Xd = u("moment().max is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548", function () {
                    var a = Ja.apply(null, arguments);
                    return this.isValid() && a.isValid() ? a > this ? this : a : l()
                }),
                Yd = function () {
                    return Date.now ? Date.now() : +new Date
                };
            Pa("Z", ":"), Pa("ZZ", ""), W("Z", wd), W("ZZ", wd), $(["Z", "ZZ"], function (a, b, c) {
                c._useUTC = !0, c._tzm = Qa(wd, a)
            });
            var Zd = /([\+\-]|\d\d)/gi;
            a.updateOffset = function () {};
            var $d = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?\d*)?$/,
                _d = /^(-)?P(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)W)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?$/;
            cb.fn = Na.prototype;
            var ae = hb(1, "add"),
                be = hb(-1, "subtract");
            a.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
            var ce = u("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (a) {
                return void 0 === a ? this.localeData() : this.locale(a)
            });
            R(0, ["gg", 2], 0, function () {
                return this.weekYear() % 100
            }), R(0, ["GG", 2], 0, function () {
                return this.isoWeekYear() % 100
            }), Ob("gggg", "weekYear"), Ob("ggggg", "weekYear"), Ob("GGGG", "isoWeekYear"), Ob("GGGGG", "isoWeekYear"), J("weekYear", "gg"), J("isoWeekYear", "GG"), W("G", ud), W("g", ud), W("GG", nd, jd), W("gg", nd, jd), W("GGGG", rd, ld), W("gggg", rd, ld), W("GGGGG", sd, md), W("ggggg", sd, md), _(["gggg", "ggggg", "GGGG", "GGGGG"], function (a, b, c, d) {
                b[d.substr(0, 2)] = r(a)
            }), _(["gg", "GG"], function (b, c, d, e) {
                c[e] = a.parseTwoDigitYear(b)
            }), R("Q", 0, "Qo", "quarter"), J("quarter", "Q"), W("Q", id), $("Q", function (a, b) {
                b[Cd] = 3 * (r(a) - 1)
            }), R("w", ["ww", 2], "wo", "week"), R("W", ["WW", 2], "Wo", "isoWeek"), J("week", "w"), J("isoWeek", "W"), W("w", nd), W("ww", nd, jd), W("W", nd), W("WW", nd, jd), _(["w", "ww", "W", "WW"], function (a, b, c, d) {
                b[d.substr(0, 1)] = r(a)
            });
            var de = {
                dow: 0,
                doy: 6
            };
            R("D", ["DD", 2], "Do", "date"), J("date", "D"), W("D", nd), W("DD", nd, jd), W("Do", function (a, b) {
                return a ? b._ordinalParse : b._ordinalParseLenient
            }), $(["D", "DD"], Dd), $("Do", function (a, b) {
                b[Dd] = r(a.match(nd)[0], 10)
            });
            var ee = M("Date", !0);
            R("d", 0, "do", "day"), R("dd", 0, 0, function (a) {
                return this.localeData().weekdaysMin(this, a)
            }), R("ddd", 0, 0, function (a) {
                return this.localeData().weekdaysShort(this, a)
            }), R("dddd", 0, 0, function (a) {
                return this.localeData().weekdays(this, a)
            }), R("e", 0, 0, "weekday"), R("E", 0, 0, "isoWeekday"), J("day", "d"), J("weekday", "e"), J("isoWeekday", "E"), W("d", nd), W("e", nd), W("E", nd), W("dd", yd), W("ddd", yd), W("dddd", yd), _(["dd", "ddd", "dddd"], function (a, b, c, d) {
                var e = c._locale.weekdaysParse(a, d, c._strict);
                null != e ? b.d = e : j(c).invalidWeekday = a
            }), _(["d", "e", "E"], function (a, b, c, d) {
                b[d] = r(a)
            });
            var fe = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                ge = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                he = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
            R("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), J("dayOfYear", "DDD"), W("DDD", qd), W("DDDD", kd), $(["DDD", "DDDD"], function (a, b, c) {
                c._dayOfYear = r(a)
            }), R("H", ["HH", 2], 0, "hour"), R("h", ["hh", 2], 0, ic), R("hmm", 0, 0, function () {
                return "" + ic.apply(this) + Q(this.minutes(), 2)
            }), R("hmmss", 0, 0, function () {
                return "" + ic.apply(this) + Q(this.minutes(), 2) + Q(this.seconds(), 2)
            }), R("Hmm", 0, 0, function () {
                return "" + this.hours() + Q(this.minutes(), 2)
            }), R("Hmmss", 0, 0, function () {
                return "" + this.hours() + Q(this.minutes(), 2) + Q(this.seconds(), 2)
            }), jc("a", !0), jc("A", !1), J("hour", "h"), W("a", kc), W("A", kc), W("H", nd), W("h", nd), W("HH", nd, jd), W("hh", nd, jd), W("hmm", od), W("hmmss", pd), W("Hmm", od), W("Hmmss", pd), $(["H", "HH"], Ed), $(["a", "A"], function (a, b, c) {
                c._isPm = c._locale.isPM(a), c._meridiem = a
            }), $(["h", "hh"], function (a, b, c) {
                b[Ed] = r(a), j(c).bigHour = !0
            }), $("hmm", function (a, b, c) {
                var d = a.length - 2;
                b[Ed] = r(a.substr(0, d)), b[Fd] = r(a.substr(d)), j(c).bigHour = !0
            }), $("hmmss", function (a, b, c) {
                var d = a.length - 4,
                    e = a.length - 2;
                b[Ed] = r(a.substr(0, d)), b[Fd] = r(a.substr(d, 2)), b[Gd] = r(a.substr(e)), j(c).bigHour = !0
            }), $("Hmm", function (a, b, c) {
                var d = a.length - 2;
                b[Ed] = r(a.substr(0, d)), b[Fd] = r(a.substr(d))
            }), $("Hmmss", function (a, b, c) {
                var d = a.length - 4,
                    e = a.length - 2;
                b[Ed] = r(a.substr(0, d)), b[Fd] = r(a.substr(d, 2)), b[Gd] = r(a.substr(e))
            });
            var ie = /[ap]\.?m?\.?/i,
                je = M("Hours", !0);
            R("m", ["mm", 2], 0, "minute"), J("minute", "m"), W("m", nd), W("mm", nd, jd), $(["m", "mm"], Fd);
            var ke = M("Minutes", !1);
            R("s", ["ss", 2], 0, "second"), J("second", "s"), W("s", nd), W("ss", nd, jd), $(["s", "ss"], Gd);
            var le = M("Seconds", !1);
            R("S", 0, 0, function () {
                return~~ (this.millisecond() / 100)
            }), R(0, ["SS", 2], 0, function () {
                return~~ (this.millisecond() / 10)
            }), R(0, ["SSS", 3], 0, "millisecond"), R(0, ["SSSS", 4], 0, function () {
                return 10 * this.millisecond()
            }), R(0, ["SSSSS", 5], 0, function () {
                return 100 * this.millisecond()
            }), R(0, ["SSSSSS", 6], 0, function () {
                return 1e3 * this.millisecond()
            }), R(0, ["SSSSSSS", 7], 0, function () {
                return 1e4 * this.millisecond()
            }), R(0, ["SSSSSSSS", 8], 0, function () {
                return 1e5 * this.millisecond()
            }), R(0, ["SSSSSSSSS", 9], 0, function () {
                return 1e6 * this.millisecond()
            }), J("millisecond", "ms"), W("S", qd, id), W("SS", qd, jd), W("SSS", qd, kd);
            var me;
            for (me = "SSSS"; me.length <= 9; me += "S") W(me, td);
            for (me = "S"; me.length <= 9; me += "S") $(me, nc);
            var ne = M("Milliseconds", !1);
            R("z", 0, 0, "zoneAbbr"), R("zz", 0, 0, "zoneName");
            var oe = o.prototype;
            oe.add = ae, oe.calendar = jb, oe.clone = kb, oe.diff = rb, oe.endOf = Db, oe.format = vb, oe.from = wb, oe.fromNow = xb, oe.to = yb, oe.toNow = zb, oe.get = P, oe.invalidAt = Mb, oe.isAfter = lb, oe.isBefore = mb, oe.isBetween = nb, oe.isSame = ob, oe.isSameOrAfter = pb, oe.isSameOrBefore = qb, oe.isValid = Kb, oe.lang = ce, oe.locale = Ab, oe.localeData = Bb, oe.max = Xd, oe.min = Wd, oe.parsingFlags = Lb, oe.set = P, oe.startOf = Cb, oe.subtract = be, oe.toArray = Hb, oe.toObject = Ib, oe.toDate = Gb, oe.toISOString = ub, oe.toJSON = Jb, oe.toString = tb, oe.unix = Fb, oe.valueOf = Eb, oe.creationData = Nb, oe.year = Vd, oe.isLeapYear = sa, oe.weekYear = Pb, oe.isoWeekYear = Qb, oe.quarter = oe.quarters = Vb, oe.month = ga, oe.daysInMonth = ha, oe.week = oe.weeks = Zb, oe.isoWeek = oe.isoWeeks = $b, oe.weeksInYear = Sb, oe.isoWeeksInYear = Rb, oe.date = ee, oe.day = oe.days = ec, oe.weekday = fc, oe.isoWeekday = gc, oe.dayOfYear = hc, oe.hour = oe.hours = je, oe.minute = oe.minutes = ke, oe.second = oe.seconds = le, oe.millisecond = oe.milliseconds = ne, oe.utcOffset = Ta, oe.utc = Va, oe.local = Wa, oe.parseZone = Xa, oe.hasAlignedHourOffset = Ya, oe.isDST = Za, oe.isDSTShifted = $a, oe.isLocal = _a, oe.isUtcOffset = ab, oe.isUtc = bb, oe.isUTC = bb, oe.zoneAbbr = oc, oe.zoneName = pc, oe.dates = u("dates accessor is deprecated. Use date instead.", ee), oe.months = u("months accessor is deprecated. Use month instead", ga), oe.years = u("years accessor is deprecated. Use year instead", Vd), oe.zone = u("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779", Ua);
            var pe = oe,
                qe = {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                re = {
                    LTS: "h:mm:ss A",
                    LT: "h:mm A",
                    L: "MM/DD/YYYY",
                    LL: "MMMM D, YYYY",
                    LLL: "MMMM D, YYYY h:mm A",
                    LLLL: "dddd, MMMM D, YYYY h:mm A"
                },
                se = "Invalid date",
                te = "%d",
                ue = /\d{1,2}/,
                ve = {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                we = A.prototype;
            we._calendar = qe, we.calendar = sc, we._longDateFormat = re, we.longDateFormat = tc, we._invalidDate = se, we.invalidDate = uc, we._ordinal = te, we.ordinal = vc, we._ordinalParse = ue, we.preparse = wc, we.postformat = wc, we._relativeTime = ve, we.relativeTime = xc, we.pastFuture = yc, we.set = y, we.months = ca, we._months = Ld, we.monthsShort = da, we._monthsShort = Md, we.monthsParse = ea, we._monthsRegex = Od, we.monthsRegex = ja, we._monthsShortRegex = Nd, we.monthsShortRegex = ia, we.week = Wb, we._week = de, we.firstDayOfYear = Yb, we.firstDayOfWeek = Xb, we.weekdays = ac, we._weekdays = fe, we.weekdaysMin = cc, we._weekdaysMin = he, we.weekdaysShort = bc, we._weekdaysShort = ge, we.weekdaysParse = dc, we.isPM = lc, we._meridiemParse = ie, we.meridiem = mc, E("en", {
                ordinalParse: /\d{1,2}(th|st|nd|rd)/,
                ordinal: function (a) {
                    var b = a % 10,
                        c = 1 === r(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
                    return a + c
                }
            }), a.lang = u("moment.lang is deprecated. Use moment.locale instead.", E), a.langData = u("moment.langData is deprecated. Use moment.localeData instead.", H);
            var xe = Math.abs,
                ye = Qc("ms"),
                ze = Qc("s"),
                Ae = Qc("m"),
                Be = Qc("h"),
                Ce = Qc("d"),
                De = Qc("w"),
                Ee = Qc("M"),
                Fe = Qc("y"),
                Ge = Sc("milliseconds"),
                He = Sc("seconds"),
                Ie = Sc("minutes"),
                Je = Sc("hours"),
                Ke = Sc("days"),
                Le = Sc("months"),
                Me = Sc("years"),
                Ne = Math.round,
                Oe = {
                    s: 45,
                    m: 45,
                    h: 22,
                    d: 26,
                    M: 11
                },
                Pe = Math.abs,
                Qe = Na.prototype;
            Qe.abs = Gc, Qe.add = Ic, Qe.subtract = Jc, Qe.as = Oc, Qe.asMilliseconds = ye, Qe.asSeconds = ze, Qe.asMinutes = Ae, Qe.asHours = Be, Qe.asDays = Ce, Qe.asWeeks = De, Qe.asMonths = Ee, Qe.asYears = Fe, Qe.valueOf = Pc, Qe._bubble = Lc, Qe.get = Rc, Qe.milliseconds = Ge, Qe.seconds = He, Qe.minutes = Ie, Qe.hours = Je, Qe.days = Ke, Qe.weeks = Tc, Qe.months = Le, Qe.years = Me, Qe.humanize = Xc, Qe.toISOString = Yc, Qe.toString = Yc, Qe.toJSON = Yc, Qe.locale = Ab, Qe.localeData = Bb, Qe.toIsoString = u("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Yc), Qe.lang = ce, R("X", 0, 0, "unix"), R("x", 0, 0, "valueOf"), W("x", ud), W("X", xd), $("X", function (a, b, c) {
                c._d = new Date(1e3 * parseFloat(a, 10))
            }), $("x", function (a, b, c) {
                c._d = new Date(r(a))
            }), a.version = "2.12.0", b(Ja), a.fn = pe, a.min = La, a.max = Ma, a.now = Yd, a.utc = h, a.unix = qc, a.months = Bc, a.isDate = d, a.locale = E, a.invalid = l, a.duration = cb, a.isMoment = p, a.weekdays = Dc, a.parseZone = rc, a.localeData = H, a.isDuration = Oa, a.monthsShort = Cc, a.weekdaysMin = Fc, a.defineLocale = F, a.updateLocale = G, a.locales = I, a.weekdaysShort = Ec, a.normalizeUnits = K, a.relativeTimeThreshold = Wc, a.prototype = pe;
            var Re = a;
            return Re
        });	
            

			return jQuery;
		}
	};

});