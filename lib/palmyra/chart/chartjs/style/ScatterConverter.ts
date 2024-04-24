import { IStyleConverterFactory, StyleType } from "../..";
import { NoopStyleConverterFactory, RandomStyleConverterFactory } from "./base/RandomStyleConverterFactory";
import { ScatterArrayStyleConverterFactory } from "./base/ScatterArrayStyleConverterFactory";


const converters: Partial<Record<StyleType, IStyleConverterFactory>> = {
    "Array": ScatterArrayStyleConverterFactory,
    "Named": ScatterArrayStyleConverterFactory,
    "Random": RandomStyleConverterFactory,
    "Noop": NoopStyleConverterFactory
}

export default converters;