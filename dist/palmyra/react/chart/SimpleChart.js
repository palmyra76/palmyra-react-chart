import { jsx as n } from "react/jsx-runtime";
import { useRef as i, useImperativeHandle as u, useEffect as h } from "react";
import { useChartQuery as d } from "../hooks/useChartQuery.js";
import { A as f } from "../../../chunks/DynamicChart.js";
import m from "../ErrorBoundary.js";
const C = (e) => {
  const a = e.chartRef || i(), r = i(null), o = (t) => {
    r.current != null && r.current.setData(t);
  }, { fetch: s, setFilter: c, setEndPointVars: l } = d(e, {
    onData: o
  });
  return u(a, () => ({
    setEndPointOptions(t) {
      l(t);
    },
    setFilter(t) {
      c(t);
    },
    resetFilter() {
    },
    toggleLegend() {
    },
    showDataset() {
    },
    hideDataset() {
    },
    onDataRefresh(t) {
    }
  }), []), h(() => {
    s();
  }, []), /* @__PURE__ */ n(m, { errorMessage: "Error while rendering " + e.type + " chart", children: /* @__PURE__ */ n("div", { children: /* @__PURE__ */ n(
    f,
    {
      type: e.type,
      chartJsRef: r,
      styleOptions: e.styleOptions,
      accessorOptions: e.accessorOptions,
      dataPipeLine: e.dataPipeLine,
      guideLine: e.guideLine,
      chartOptions: e.chartOptions,
      plugins: e.plugins,
      onAreaSelect: e.onAreaSelect,
      onPointClick: e.onPointClick
    }
  ) }) });
};
export {
  C as SimpleChart
};
