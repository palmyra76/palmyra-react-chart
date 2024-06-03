import a from "./converters/LineConverter.js";
import s from "./converters/BarConverter.js";
import f from "./converters/GroupedBarConverter.js";
import u from "./converters/ScatterConverter.js";
import p from "./converters/GroupedScatterConverter.js";
import d, { getPointData as n } from "./converters/BubbleConverter.js";
import l from "./converters/RadarConverter.js";
import $ from "./converters/PolarConverter.js";
import B from "./converters/PieConverter.js";
import C from "./converters/DoughnutConverter.js";
import { getScalePointData as t } from "./converters/ScaleConverter.js";
const P = (r) => r;
var i = {
  Line: a,
  MultiLine: a,
  AreaChart: a,
  Bar: s,
  StackedBar: f,
  GroupedBar: f,
  Scatter: u,
  GroupedScatter: p,
  Bubble: d,
  Radar: l,
  PolarArea: $,
  Pie: B,
  Doughnut: C
}, D = {
  Line: t,
  MultiLine: t,
  Bar: t,
  Pie: t,
  Doughnut: t,
  PolarArea: t,
  Radar: t,
  Bubble: n,
  GroupedBar: n,
  StackedBar: n,
  Scatter: n
};
const x = (r, e, o) => {
  var c;
  var v = e || "Array", m = (c = i[r]) == null ? void 0 : c[v];
  return m ? m(o) : (console.info("Data Converter not found " + r + ":" + v), P);
}, E = (r, e, o) => {
  if (!i[r][e])
    i[r][e] = o;
  else
    throw new Error("Converter already set for " + r + "/" + e);
}, N = (r) => {
  var e = D[r];
  return e || ((o) => o);
};
export {
  E as addDataConverter,
  x as getDataConverter,
  N as getPointConverter
};
