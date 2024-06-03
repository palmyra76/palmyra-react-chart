var n = Object.defineProperty;
var a = (i, t, s) => t in i ? n(i, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : i[t] = s;
var e = (i, t, s) => (a(i, typeof t != "symbol" ? t + "" : t, s), s);
class l {
  constructor(t, s, r, o, h) {
    e(this, "store");
    e(this, "endPoint");
    e(this, "endPointOptions");
    e(this, "filter", {});
    e(this, "sortOrder", {});
    e(this, "consumer");
    this.store = t, this.endPoint = s, this.endPointOptions = r, this.filter = o || {}, this.sortOrder = h || {};
  }
  setFilter(t, s = !1) {
    this.filter = t, s && this.fetch();
  }
  setSortOrder(t, s = !1) {
    this.sortOrder = t, s && this.fetch();
  }
  fetch() {
    this.store.query({ limit: 1e3, total: !0, filter: {} }).then((t) => this.setData(t)).catch(() => this.setData(null));
  }
  setData(t) {
    this.consumer && this.consumer(t);
  }
  subscribe(t) {
    this.consumer = t;
  }
}
export {
  l as PalmyraDataProvider
};
