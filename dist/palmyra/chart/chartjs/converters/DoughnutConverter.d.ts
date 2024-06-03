import { RawDataType } from '../..';
import { DataConverterGen } from '../DataConverterFactory';

declare const converters: Partial<Record<RawDataType, DataConverterGen>>;
export default converters;
