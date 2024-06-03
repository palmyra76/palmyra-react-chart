import C, { getRandomNumber as j } from "../style/GenerateColors.js";
const o = (r) => (t) => t;
function A(r, t, e) {
  var a = Math.round(j(2, 10)), l = C(a);
  e.backgroundColor = l[0], e.borderColor = l[a - 1];
}
function g(r, t, e) {
  var a = r[t];
  return a || (a = {
    key: t,
    label: t,
    data: []
  }, A(e, t, a), r[t] = a, a);
}
function f(r) {
  const t = (r == null ? void 0 : r.xLabel) || "name", e = (r == null ? void 0 : r.xKey) || "x", a = (r == null ? void 0 : r.yKey) || "y", l = (r == null ? void 0 : r.rKey) || "r";
  return a instanceof Array && console.error("BubbleChart: yKey should be string only, not an array " + r.yKey), {
    x: e,
    y: a,
    r: l,
    label: t
  };
}
const L = (r) => {
  const { x: t, y: e, r: a, label: l } = f(r);
  return (y) => {
    var u = {
      labels: [],
      datasets: []
    };
    if (y == null)
      return u;
    var v = {};
    return y.map((n, b) => {
      var d = g(v, n[l], r);
      d.data.push({
        x: n[t],
        y: n[e],
        r: n[a]
      });
    }), Object.values(v).map((n) => {
      u.datasets.push(n);
    }), u;
  };
}, D = (r) => {
  const { x: t, y: e, r: a } = f(r);
  return (l) => {
    var y = {
      labels: [],
      datasets: []
    }, u = {};
    for (var v in l) {
      var n = g(u, v, r), b = l[v];
      n.data.push({
        x: b[t],
        y: b[e],
        r: b[a]
      });
    }
    return Object.values(u).map((d) => {
      y.datasets.push(d);
    }), y;
  };
}, M = (r, t, e, a, l) => {
  const { x: y, y: u, r: v } = f(t);
  var n = {};
  return a.map((b) => {
    var { index: d, datasetIndex: K } = b, m = r.datasets[K], h = m.label, x = m.data[d];
    n[h] = {
      [y]: x.x,
      [u]: x.y,
      [v]: x.r
    };
  }), n;
}, N = {
  Array: L,
  Object: D,
  noop: o
};
export {
  N as default,
  M as getPointData
};
