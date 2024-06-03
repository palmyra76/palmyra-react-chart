import { DataConverterGen, IgetPointData } from '../DataConverterFactory';
import { RawDataType } from '../../Types';

declare const getPointData: IgetPointData;
declare const converters: Partial<Record<RawDataType, DataConverterGen>>;
export default converters;
export { getPointData };
