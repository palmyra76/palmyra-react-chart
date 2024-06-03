import { IgetPointData } from '../DataConverterFactory';
import { ChartDataConverter } from '../Types';
import { AccessorOptions } from '../../../react';

declare const NoopConverter: (options: AccessorOptions) => ChartDataConverter<any>;
declare const getScalePointData: IgetPointData;
export { NoopConverter, getScalePointData };
