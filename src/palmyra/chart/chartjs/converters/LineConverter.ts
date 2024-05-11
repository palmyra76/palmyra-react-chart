import { RawDataType } from "../..";
import { DataConverterGen } from "../DataConverterFactory";
import { NoopConverter } from "./ScaleConverter";
import { ArrayScaleConverter } from "./base/ArrayScaleConverter";
import { KeyValueScaleConverter } from "./base/KeyValueScaleConverter";
import { ObjectScaleConverter } from "./base/ObjectScaleConverter";
// import { TwoXDimArrayScaleConverter } from "./base/TwoXDimArrayScaleConverter";


const converters: Partial<Record<RawDataType, DataConverterGen>> = {
    "Array": ArrayScaleConverter,
    // "twoXKey": TwoXDimArrayScaleConverter,
    "Object": ObjectScaleConverter,
    "KeyValue": KeyValueScaleConverter,
    "noop": NoopConverter
}

export default converters;