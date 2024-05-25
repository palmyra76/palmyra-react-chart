import { RawDataType } from "../..";
import { DataConverterGen } from "../DataConverterFactory";
import { NoopConverter } from "./ScaleConverter";
import { GroupArrayScaleConverter, GroupObjectScaleConverter } from "./base/GroupArrayScaleConverter";


const converters: Partial<Record<RawDataType, DataConverterGen>> = {
    "Array": GroupArrayScaleConverter,
    "Object": GroupObjectScaleConverter,
    "noop": NoopConverter
}

export default converters;