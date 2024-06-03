import { IStyleConverterFactory, StyleType } from '../..';

declare const converters: Partial<Record<StyleType, IStyleConverterFactory>>;
export default converters;
