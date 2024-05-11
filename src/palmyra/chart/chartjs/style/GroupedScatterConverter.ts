import { IStyleConverterFactory, StyleType } from "../..";
import { ArrayStyleConverterFactory } from "./base/ArrayStyleConverterFactory";
import { GroupArrayStyleConverterFactory } from "./base/GroupArrayStyleConverterFactory";
import { NoopStyleConverterFactory, RandomStyleConverterFactory } from "./base/RandomStyleConverterFactory";


const converters: Partial<Record<StyleType, IStyleConverterFactory>> = {
    "Array": ArrayStyleConverterFactory,
    "Named": GroupArrayStyleConverterFactory,
    "Random": RandomStyleConverterFactory,
    "Noop": NoopStyleConverterFactory
}

export default converters;