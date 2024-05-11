import { RawDataType } from "../..";
import { DataConverterGen } from "../DataConverterFactory";
import { NoopConverter } from "./ScaleConverter";
import { GroupArrayScaleConverter } from "./base/GroupArrayScaleConverter";

const converters: Partial<Record<RawDataType, DataConverterGen>> = {
    "Array": GroupArrayScaleConverter,
    "noop": NoopConverter
}

export default converters;