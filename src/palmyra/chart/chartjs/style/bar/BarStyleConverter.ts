import { IStyleConverterFactory, StyleType } from "../../..";

import { NoopStyleConverterFactory } from "../base/RandomStyleConverterFactory";
import { ArrayStyleConverterFactory } from "./ArrayStyleConverterFactory";
import { BarNamedStyleConverterFactory } from "./BarNamedStyleConverterFactory";
import { BarRandomStyleConverterFactory } from "./BarRandomStyleConverterFactory";


const converters: Partial<Record<StyleType, IStyleConverterFactory>> = {
    "Array": ArrayStyleConverterFactory,
    "Named": BarNamedStyleConverterFactory,
    "Random": BarRandomStyleConverterFactory,
    "Noop": NoopStyleConverterFactory
}

export default converters;