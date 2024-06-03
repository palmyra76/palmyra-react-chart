import { jsx as s } from "react/jsx-runtime";
import { useRef as i, useImperativeHandle as n } from "react";
const d = (e) => {
  const r = e.chartRef || i();
  return n(r, () => ({
    setEndPointOptions(t) {
    },
    setFilter(t) {
    },
    resetFilter() {
    },
    toggleLegend() {
    },
    showDataset() {
    },
    hideDataset() {
    },
    setAccessorOptions(t) {
    },
    setStyleOptions(t) {
    },
    setChartOptions(t) {
    }
  }), []), /* @__PURE__ */ s("div", { children: "Dynamic" });
};
export {
  d as DynamicChart
};
