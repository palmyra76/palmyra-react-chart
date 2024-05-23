import { RawDataType } from "../..";
import { DataConverterGen } from "../DataConverterFactory";
import { NoopConverter } from "./ScaleConverter";
import { GroupArrayScaleConverter } from "./base/GroupArrayScaleConverter";
import { GroupObjectScaleConverter } from "./base/GroupObjectScaleConverter";

const converters: Partial<Record<RawDataType, DataConverterGen>> = {
    "Array": GroupArrayScaleConverter,
    "Object": GroupObjectScaleConverter,
    "noop": NoopConverter
}

export default converters;