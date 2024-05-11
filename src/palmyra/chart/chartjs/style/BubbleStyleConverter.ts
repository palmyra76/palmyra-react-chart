import { IStyleConverterFactory, StyleType } from "../..";
import { ArrayStyleConverterFactory } from "./base/ArrayStyleConverterFactory";
import { NamedStyleConverterFactory } from "./base/NamedStyleConverterFactory";
import { NoopStyleConverterFactory, RandomStyleConverterFactory } from "./base/RandomStyleConverterFactory";


const converters: Partial<Record<StyleType, IStyleConverterFactory>> = {
    "Array": ArrayStyleConverterFactory,
    "Named": NamedStyleConverterFactory,
    "Random": RandomStyleConverterFactory,
    "Noop": NoopStyleConverterFactory
}

export default converters;