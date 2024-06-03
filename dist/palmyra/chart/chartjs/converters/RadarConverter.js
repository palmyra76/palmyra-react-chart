import { NoopConverter as r } from "./ScaleConverter.js";
import { ArrayScaleConverter as e } from "./base/ArrayScaleConverter.js";
import { KeyValueScaleConverter as o } from "./base/KeyValueScaleConverter.js";
import { ObjectScaleConverter as t } from "./base/ObjectScaleConverter.js";
const p = {
  Array: e,
  Object: t,
  KeyValue: o,
  noop: r
};
export {
  p as default
};
