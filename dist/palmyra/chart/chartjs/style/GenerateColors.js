function P(e, r, t) {
  e.prototype = r.prototype = t, t.constructor = e;
}
function I(e, r) {
  var t = Object.create(e.prototype);
  for (var a in r)
    t[a] = r[a];
  return t;
}
function $() {
}
var m = 0.7, y = 1 / m, w = "\\s*([+-]?\\d+)\\s*", v = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", c = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", ne = /^#([0-9a-f]{3,8})$/, ie = new RegExp(`^rgb\\(${w},${w},${w}\\)$`), fe = new RegExp(`^rgb\\(${c},${c},${c}\\)$`), se = new RegExp(`^rgba\\(${w},${w},${w},${v}\\)$`), le = new RegExp(`^rgba\\(${c},${c},${c},${v}\\)$`), oe = new RegExp(`^hsl\\(${v},${c},${c}\\)$`), xe = new RegExp(`^hsla\\(${v},${c},${c},${v}\\)$`), D = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
P($, _, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: L,
  // Deprecated! Use color.formatHex.
  formatHex: L,
  formatHex8: ce,
  formatHsl: he,
  formatRgb: O,
  toString: O
});
function L() {
  return this.rgb().formatHex();
}
function ce() {
  return this.rgb().formatHex8();
}
function he() {
  return W(this).formatHsl();
}
function O() {
  return this.rgb().formatRgb();
}
function _(e) {
  var r, t;
  return e = (e + "").trim().toLowerCase(), (r = ne.exec(e)) ? (t = r[1].length, r = parseInt(r[1], 16), t === 6 ? z(r) : t === 3 ? new l(r >> 8 & 15 | r >> 4 & 240, r >> 4 & 15 | r & 240, (r & 15) << 4 | r & 15, 1) : t === 8 ? M(r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, (r & 255) / 255) : t === 4 ? M(r >> 12 & 15 | r >> 8 & 240, r >> 8 & 15 | r >> 4 & 240, r >> 4 & 15 | r & 240, ((r & 15) << 4 | r & 15) / 255) : null) : (r = ie.exec(e)) ? new l(r[1], r[2], r[3], 1) : (r = fe.exec(e)) ? new l(r[1] * 255 / 100, r[2] * 255 / 100, r[3] * 255 / 100, 1) : (r = se.exec(e)) ? M(r[1], r[2], r[3], r[4]) : (r = le.exec(e)) ? M(r[1] * 255 / 100, r[2] * 255 / 100, r[3] * 255 / 100, r[4]) : (r = oe.exec(e)) ? J(r[1], r[2] / 100, r[3] / 100, 1) : (r = xe.exec(e)) ? J(r[1], r[2] / 100, r[3] / 100, r[4]) : D.hasOwnProperty(e) ? z(D[e]) : e === "transparent" ? new l(NaN, NaN, NaN, 0) : null;
}
function z(e) {
  return new l(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function M(e, r, t, a) {
  return a <= 0 && (e = r = t = NaN), new l(e, r, t, a);
}
function V(e) {
  return e instanceof $ || (e = _(e)), e ? (e = e.rgb(), new l(e.r, e.g, e.b, e.opacity)) : new l();
}
function ue(e, r, t, a) {
  return arguments.length === 1 ? V(e) : new l(e, r, t, a ?? 1);
}
function l(e, r, t, a) {
  this.r = +e, this.g = +r, this.b = +t, this.opacity = +a;
}
P(l, ue, I($, {
  brighter(e) {
    return e = e == null ? y : Math.pow(y, e), new l(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? m : Math.pow(m, e), new l(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new l(g(this.r), g(this.g), g(this.b), k(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: G,
  // Deprecated! Use color.formatHex.
  formatHex: G,
  formatHex8: de,
  formatRgb: F,
  toString: F
}));
function G() {
  return `#${b(this.r)}${b(this.g)}${b(this.b)}`;
}
function de() {
  return `#${b(this.r)}${b(this.g)}${b(this.b)}${b((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function F() {
  const e = k(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${g(this.r)}, ${g(this.g)}, ${g(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function k(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function g(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function b(e) {
  return e = g(e), (e < 16 ? "0" : "") + e.toString(16);
}
function J(e, r, t, a) {
  return a <= 0 ? e = r = t = NaN : t <= 0 || t >= 1 ? e = r = NaN : r <= 0 && (e = NaN), new x(e, r, t, a);
}
function W(e) {
  if (e instanceof x)
    return new x(e.h, e.s, e.l, e.opacity);
  if (e instanceof $ || (e = _(e)), !e)
    return new x();
  if (e instanceof x)
    return e;
  e = e.rgb();
  var r = e.r / 255, t = e.g / 255, a = e.b / 255, n = Math.min(r, t, a), i = Math.max(r, t, a), f = NaN, s = i - n, o = (i + n) / 2;
  return s ? (r === i ? f = (t - a) / s + (t < a) * 6 : t === i ? f = (a - r) / s + 2 : f = (r - t) / s + 4, s /= o < 0.5 ? i + n : 2 - i - n, f *= 60) : s = o > 0 && o < 1 ? 0 : f, new x(f, s, o, e.opacity);
}
function be(e, r, t, a) {
  return arguments.length === 1 ? W(e) : new x(e, r, t, a ?? 1);
}
function x(e, r, t, a) {
  this.h = +e, this.s = +r, this.l = +t, this.opacity = +a;
}
P(x, be, I($, {
  brighter(e) {
    return e = e == null ? y : Math.pow(y, e), new x(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? m : Math.pow(m, e), new x(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, r = isNaN(e) || isNaN(this.s) ? 0 : this.s, t = this.l, a = t + (t < 0.5 ? t : 1 - t) * r, n = 2 * t - a;
    return new l(
      C(e >= 240 ? e - 240 : e + 120, n, a),
      C(e, n, a),
      C(e < 120 ? e + 240 : e - 120, n, a),
      this.opacity
    );
  },
  clamp() {
    return new x(K(this.h), R(this.s), R(this.l), k(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = k(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${K(this.h)}, ${R(this.s) * 100}%, ${R(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function K(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function R(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function C(e, r, t) {
  return (e < 60 ? r + (t - r) * e / 60 : e < 180 ? t : e < 240 ? r + (t - r) * (240 - e) / 60 : r) * 255;
}
const ge = Math.PI / 180, pe = 180 / Math.PI;
var X = -0.14861, A = 1.78277, j = -0.29227, q = -0.90649, N = 1.97294, Q = N * q, T = N * A, U = A * j - q * X;
function me(e) {
  if (e instanceof p)
    return new p(e.h, e.s, e.l, e.opacity);
  e instanceof l || (e = V(e));
  var r = e.r / 255, t = e.g / 255, a = e.b / 255, n = (U * a + Q * r - T * t) / (U + Q - T), i = a - n, f = (N * (t - n) - j * i) / q, s = Math.sqrt(f * f + i * i) / (N * n * (1 - n)), o = s ? Math.atan2(f, i) * pe - 120 : NaN;
  return new p(o < 0 ? o + 360 : o, s, n, e.opacity);
}
function u(e, r, t, a) {
  return arguments.length === 1 ? me(e) : new p(e, r, t, a ?? 1);
}
function p(e, r, t, a) {
  this.h = +e, this.s = +r, this.l = +t, this.opacity = +a;
}
P(p, u, I($, {
  brighter(e) {
    return e = e == null ? y : Math.pow(y, e), new p(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? m : Math.pow(m, e), new p(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = isNaN(this.h) ? 0 : (this.h + 120) * ge, r = +this.l, t = isNaN(this.s) ? 0 : this.s * r * (1 - r), a = Math.cos(e), n = Math.sin(e);
    return new l(
      255 * (r + t * (X * a + A * n)),
      255 * (r + t * (j * a + q * n)),
      255 * (r + t * (N * a)),
      this.opacity
    );
  }
}));
const Y = (e) => () => e;
function Z(e, r) {
  return function(t) {
    return e + t * r;
  };
}
function we(e, r) {
  var t = r - e;
  return t ? Z(e, t > 180 || t < -180 ? t - 360 * Math.round(t / 360) : t) : Y(isNaN(e) ? r : e);
}
function H(e, r) {
  var t = r - e;
  return t ? Z(e, t) : Y(isNaN(e) ? r : e);
}
function ee(e) {
  return function r(t) {
    t = +t;
    function a(n, i) {
      var f = e((n = u(n)).h, (i = u(i)).h), s = H(n.s, i.s), o = H(n.l, i.l), h = H(n.opacity, i.opacity);
      return function(d) {
        return n.h = f(d), n.s = s(d), n.l = o(Math.pow(d, t)), n.opacity = h(d), n + "";
      };
    }
    return a.gamma = r, a;
  }(1);
}
ee(we);
var re = ee(H);
re(u(-100, 0.75, 0.35), u(80, 1.5, 0.8));
re(u(260, 0.75, 0.35), u(80, 1.5, 0.8));
var E = u();
function te(e) {
  (e < 0 || e > 1) && (e -= Math.floor(e));
  var r = Math.abs(e - 0.5);
  return E.h = 360 * e - 100, E.s = 1.5 - 1.5 * r, E.l = 0.8 - 0.9 * r, E + "";
}
function ae(e, r, t) {
  var { colorStart: a, colorEnd: n, useEndAsStart: i } = t;
  return i ? n - e * r : a + e * r;
}
function S(e, r) {
  return Math.random() * (r - e) + e;
}
function ye(e) {
  var r = S(0, 0.9), t = S(r, 1), a = {
    colorStart: r,
    colorEnd: t,
    useEndAsStart: !1
  }, n = te, { colorStart: i, colorEnd: f } = a, s = f - i, o = s / e, h, d, B = [];
  for (h = 0; h < e; h++)
    d = ae(h, o, a), B.push(n(d));
  return B;
}
function $e() {
  var r = S(0, 0.9), t = S(r, 1), a = {
    colorStart: r,
    colorEnd: t,
    useEndAsStart: !1
  }, n = te, { colorStart: i, colorEnd: f } = a, s = f - i, o = s / 1, h;
  return h = ae(0, o, a), n(h);
}
export {
  ye as default,
  $e as generateColor,
  S as getRandomNumber
};
