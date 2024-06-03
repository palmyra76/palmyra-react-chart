import { jsx as e } from "react/jsx-runtime";
import { useRef as r, useImperativeHandle as i } from "react";
import { A as c } from "../../../chunks/DynamicChart.js";
import o from "../ErrorBoundary.js";
const g = (t) => {
  const a = r(null), n = t.chartRef || r();
  return i(n, () => ({
    toggleLegend() {
    },
    showDataset() {
    },
    hideDataset() {
    },
    setData(h) {
    }
  }), []), /* @__PURE__ */ e(o, { errorMessage: "Error while rendering " + t.type + " chart", children: /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
    c,
    {
      type: t.type,
      chartJsRef: a,
      guideLine: t.guideLine,
      chartOptions: t.chartOptions,
      plugins: t.plugins,
      onAreaSelect: t.onAreaSelect,
      onPointClick: t.onPointClick,
      data: t.chartData
    }
  ) }) });
};
export {
  g as StaticChart
};
