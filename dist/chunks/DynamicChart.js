import { jsx as S } from "react/jsx-runtime";
import { useRef as C, useImperativeHandle as P, useMemo as b, useEffect as O, useContext as k, useState as B } from "react";
import { Chart as v, registerables as R, TimeScale as T, CategoryScale as w, LinearScale as x, RadialLinearScale as J, BarElement as F, PointElement as G, ArcElement as H, LineElement as N, Title as q, Tooltip as M, Legend as $ } from "chart.js";
import { ChartStoreFactoryContext as j } from "../palmyra/react/ChartLayoutContext.js";
import { Chart as L, getDatasetAtEvent as z, getElementsAtEvent as I, getElementAtEvent as K } from "react-chartjs-2";
import { getPointConverter as Q, getDataConverter as U } from "../palmyra/chart/chartjs/DataConverterFactory.js";
import { AreaSelectDrag as V } from "../palmyra/chart/chartjs/plugins/AreaSelectDrag.js";
import { mergeDeep as W } from "../palmyra/chart/chartjs/util.js";
import { getStyleConverter as X } from "../palmyra/chart/chartjs/StyleConverterFactory.js";
import { generateDataPipeLine as Y } from "../palmyra/chart/chartjs/DataPipeLineGenerator.js";
import { NoopConverter as Z } from "../palmyra/chart/chartjs/converters/ScaleConverter.js";
v.register(...R, T);
const _ = {
  Line: "line",
  MultiLine: "line",
  AreaChart: "line",
  Bar: "bar",
  GroupedBar: "bar",
  StackedBar: "bar",
  Bubble: "bubble",
  Doughnut: "doughnut",
  Pie: "pie",
  PolarArea: "polarArea",
  Radar: "radar",
  Scatter: "scatter",
  GroupedScatter: "scatter"
}, tt = {
  responsive: !0,
  maintainAspectRatio: !1,
  plugins: {
    legend: {
      display: !1
    }
  }
};
function Ct(t) {
  const d = [], n = Y(t), l = t.chartOptions || { ...tt }, u = t.plugins || d, a = C(null), f = n(t.data), h = t.chartJsRef || C(null);
  P(h, () => ({
    clear: () => {
      a.current && a.current.clear();
    },
    resize: (o, c) => {
      a.current && a.current.resize(o, c);
    },
    reset: () => {
      a.current && a.current.reset();
    },
    setData: (o) => {
      if (!a.current)
        return;
      const c = a.current;
      if (o) {
        const D = n(o);
        r && r(D), c.data = D, c.update();
      }
    }
  }), [a]);
  function p() {
    return t;
  }
  function y() {
    return "350px";
  }
  const { onClick: i, setData: r } = nt(t.type, t, t.dataPipeLine, a), m = b(() => {
    const o = p();
    return /* @__PURE__ */ S(
      L,
      {
        type: _[o.type],
        ref: a,
        options: l,
        plugins: u,
        onClick: i,
        data: f,
        height: y()
      }
    );
  }, []);
  return /* @__PURE__ */ S("div", { className: "palmyra-chart-container-wrapper", children: m });
}
function et(t) {
  return t.length > 0;
}
const rt = (t, d, n, l) => {
  l != null && (n.push(V), d.plugins.selectdrag = {
    enabled: !0,
    onSelectComplete: (u) => {
      l(u);
    }
  });
}, nt = (t, d, n, l) => {
  if (!d.onPointClick)
    return {};
  const { accessorOptions: u, onPointClick: a } = d, f = C(null), h = (i, r, m) => {
    if (i.length) {
      var o = Q(t);
      return o(f.current, u, n, r, m);
    }
  };
  return { onClick: (i) => {
    const { current: r } = l;
    if (!r)
      return;
    const m = z(r, i);
    if (et(m)) {
      var o = h(
        m,
        K(r, i),
        I(r, i)
      );
      a(o);
    }
  }, setData: (i) => {
    f.current = i;
  } };
}, at = {
  Line: "line",
  MultiLine: "line",
  AreaChart: "line",
  Bar: "bar",
  GroupedBar: "bar",
  StackedBar: "bar",
  Bubble: "bubble",
  Doughnut: "doughnut",
  Pie: "pie",
  PolarArea: "polarArea",
  Radar: "radar",
  Scatter: "scatter",
  GroupedScatter: "scatter"
}, ct = {
  responsive: !0,
  maintainAspectRatio: !1,
  plugins: {
    legend: {
      display: !1
    }
  }
};
v.register(
  w,
  x,
  J,
  F,
  G,
  H,
  N,
  q,
  M,
  $
);
function it(t) {
  const d = [], n = t.chartRef, l = t.plugins || d, u = t.options || ct, a = C({ ...t, plugins: l, options: u }), f = () => a.current;
  function h(e, s) {
    console.log(e, { ...s });
  }
  const p = (e) => {
    if (e) {
      const g = f();
      h("incoming data", e);
      var s = o(e, g.type, g.transformOptions);
      return h("post data transformation", s), g.postProcessors && g.postProcessors.map((A, E) => {
        s = A(s), h("post processing " + E, s);
      }), s;
    }
    return { datasets: [] };
  }, y = C(p(t.data)), i = n || C(null), r = C(null), m = (e) => {
    if (r.current == null) {
      console.error("Chart Reference is not found, data will not be updated");
      return;
    }
    const s = r.current;
    y.current = e, s.data = e, s.update();
  };
  P(i, () => ({
    setData(e) {
      const s = p(e);
      m(s);
    },
    setTransformOptions(e) {
      f().transformOptions = e;
    },
    clearData() {
      m({ datasets: [] });
    },
    clear() {
      r.current != null && r.current.clear();
    },
    reset() {
      r.current != null && r.current.reset();
    }
  }), [n, r, y, a]), O(() => {
    const e = p(t.data);
    m(e);
  }, [t.data]);
  function o(e, s, g) {
    if (!e)
      return console.info("empty data received"), Z;
    const A = g != null && g.sourceType ? g == null ? void 0 : g.sourceType : e && e instanceof Array ? "Array" : "Object";
    return U(s, A, g)(e);
  }
  function c() {
    return f().height || "350px";
  }
  const D = b(() => {
    const e = f();
    return e.onAreaSelect && rt(e.type, u, l, e.onAreaSelect), /* @__PURE__ */ S(
      L,
      {
        type: at[e.type],
        ref: r,
        plugins: l,
        options: u,
        data: y.current,
        height: c()
      }
    );
  }, []);
  return /* @__PURE__ */ S("div", { className: "palmyra-chart-container-wrapper", children: y ? D : /* @__PURE__ */ S("div", { children: "loading..." }) });
}
v.register(...R, T);
const Dt = (t) => {
  const d = t.chartRef || C(), n = C(null), l = t.storeFactory || k(j);
  var u = t.storeOptions || {}, a = {};
  W(a, u);
  const f = l.getChartStore(a, u.endPoint), [h, p] = B(null);
  P(d, () => ({
    setFilter(c) {
      f.query({ filter: c, limit: t.limit }).then((D) => {
        i(D);
      }).catch(() => p(null));
    },
    setTransformOptions(c) {
      (n == null ? void 0 : n.current) != null && (n.current.setTransformOptions(c), n.current.setData(h));
    }
  }), [n, n.current, h, t.transformOptions]);
  function y(c) {
    return X(c.type, c.styleOptions, c.transformOptions);
  }
  function i(c) {
    if (t.onDataChange)
      try {
        t.onDataChange(c);
      } catch (D) {
        console.error(D);
      }
    p(c);
  }
  O(() => {
    f.query({ filter: t.filter, limit: t.limit }).then((c) => i(c)).catch(() => p(null));
  }, [t.filter, t.storeOptions.endPoint]);
  function r() {
    return t.height || "350px";
  }
  const m = t.transformOptions, o = y(t);
  return /* @__PURE__ */ S("div", { className: "palmyra-chart-container-wrapper", children: h ? /* @__PURE__ */ S(
    it,
    {
      type: t.type,
      chartRef: n,
      data: h,
      title: t.title,
      hideTitle: t.hideTitle,
      onAreaSelect: t.onAreaSelect,
      onPointClick: t.onPointClick,
      height: r(),
      plugins: t.plugins,
      name: t.name,
      width: t.width,
      transformOptions: m,
      postProcessors: [o],
      options: t.chartOptions
    }
  ) : /* @__PURE__ */ S("div", { children: "loading..." }) });
};
export {
  Ct as A,
  it as C,
  Dt as D,
  rt as a,
  nt as u
};
