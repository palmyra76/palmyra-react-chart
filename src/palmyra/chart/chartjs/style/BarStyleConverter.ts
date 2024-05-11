import { IStyleConverterFactory, StyleType } from "../..";
import { ArrayStyleConverterFactory } from "./base/ArrayStyleConverterFactory";
import { BarNamedStyleConverterFactory } from "./base/BarNamedStyleConverterFactory";
import { NoopStyleConverterFactory, RandomStyleConverterFactory } from "./base/RandomStyleConverterFactory";


const converters: Partial<Record<StyleType, IStyleConverterFactory>> = {
    "Array": ArrayStyleConverterFactory,
    "Named": BarNamedStyleConverterFactory,
    "Random": RandomStyleConverterFactory,
    "Noop": NoopStyleConverterFactory
}

export default converters;