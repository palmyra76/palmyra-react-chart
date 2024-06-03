import { getKeys as f } from "../util.js";
const k = (a) => (e) => e, m = (a, e, i, r, b) => {
  var d;
  var { xKey: x } = f(e);
  const t = r[0].index, s = ((d = a.keys) == null ? void 0 : d[t]) || a.labels[t];
  if ((e == null ? void 0 : e.sourceType) == "KeyValue") {
    var { index: l, datasetIndex: y } = r[0], c = a.datasets[y], o = c.data[l];
    return { [s]: o };
  }
  var n = { [x.ref]: s };
  return r.map((u) => {
    var v = a.datasets[u.datasetIndex], K = v.key;
    n[K] = v.data[u.index];
  }), n;
};
export {
  k as NoopConverter,
  m as getScalePointData
};
