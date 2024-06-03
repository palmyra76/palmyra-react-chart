import { RawDataType } from '../../Types';
import { DataConverterGen } from '../DataConverterFactory';

declare const converters: Partial<Record<RawDataType, DataConverterGen>>;
export default converters;
