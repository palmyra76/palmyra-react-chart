import { NoopConverter as v } from "./ScaleConverter.js";
function K(a) {
  const t = (a == null ? void 0 : a.xLabel) || "name", n = (a == null ? void 0 : a.xKey) || "x", e = (a == null ? void 0 : a.yKey) || "y";
  return e instanceof Array && console.error("ScatterChart: yKey should be string only, not an array " + a.yKey), {
    x: n,
    y: e,
    label: t
  };
}
const b = (a) => {
  const { x: t, y: n } = K(a);
  return (e) => {
    var c = {
      datasets: []
    }, s = {};
    const x = a.group, l = a.metadata, f = l ? (r, u) => {
      l.map((y) => {
        r[y] = u[y];
      });
    } : (r, u) => {
    };
    return e.map((r, u) => {
      const y = r[x];
      var m = g(s, y);
      const d = {
        x: r[t],
        y: r[n]
      };
      f(d, r), m.data.push(d);
    }), Object.values(s).map((r) => {
      c.datasets.push(r);
    }), c;
  };
}, C = {
  Array: b,
  noop: v
};
function g(a, t, n) {
  var e = a[t];
  return e || (e = {
    key: t,
    label: t,
    data: []
  }, a[t] = e, e);
}
export {
  C as default
};
