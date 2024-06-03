import { getDataConverter as l } from "./DataConverterFactory.js";
import { getStyleConverter as u } from "./StyleConverterFactory.js";
const o = (t) => t;
function v(t) {
  const e = t.accessorOptions || {};
  return u(t.type, t.styleOptions, e);
}
function O(t) {
  var n;
  const e = t.accessorOptions || {};
  return l(t.type, (n = t == null ? void 0 : t.accessorOptions) == null ? void 0 : n.sourceType, e);
}
const f = (t) => {
  const e = t.dataPipeLine || {}, n = e.preProcess || o, c = e.postProcess || o, s = e.applyStyle || v(t) || o, r = e.convertData || O(t) || o;
  return (a) => {
    const i = n(a), y = r(i), p = s(y);
    return c(p);
  };
};
export {
  f as generateDataPipeLine
};
