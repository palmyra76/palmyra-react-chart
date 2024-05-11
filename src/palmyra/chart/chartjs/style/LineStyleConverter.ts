import { IStyleConverterFactory, StyleType } from "../..";
import { ArrayStyleConverterFactory } from "./base/ArrayStyleConverterFactory";
import { DatasetStyleConverterFactory } from "./base/DatasetStyleConverterFactory";
import { NoopStyleConverterFactory, RandomStyleConverterFactory } from "./base/RandomStyleConverterFactory";


const converters: Partial<Record<StyleType, IStyleConverterFactory>> = {
    "Array": ArrayStyleConverterFactory,
    "Named": DatasetStyleConverterFactory,
    "Random": RandomStyleConverterFactory,
    "Noop": NoopStyleConverterFactory
}

export default converters;